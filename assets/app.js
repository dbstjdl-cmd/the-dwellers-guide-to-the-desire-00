var IE=Object.defineProperty;var NE=(n,e,t)=>e in n?IE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>NE(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var cy={exports:{}},Uh={},fy={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=Symbol.for("react.element"),UE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),kE=Symbol.for("react.profiler"),BE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),WE=Symbol.for("react.lazy"),m_=Symbol.iterator;function $E(n){return n===null||typeof n!="object"?null:(n=m_&&n[m_]||n["@@iterator"],typeof n=="function"?n:null)}var hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dy=Object.assign,py={};function xl(n,e,t){this.props=n,this.context=e,this.refs=py,this.updater=t||hy}xl.prototype.isReactComponent={};xl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function my(){}my.prototype=xl.prototype;function B0(n,e,t){this.props=n,this.context=e,this.refs=py,this.updater=t||hy}var z0=B0.prototype=new my;z0.constructor=B0;dy(z0,xl.prototype);z0.isPureReactComponent=!0;var g_=Array.isArray,gy=Object.prototype.hasOwnProperty,H0={current:null},_y={key:!0,ref:!0,__self:!0,__source:!0};function vy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gy.call(e,i)&&!_y.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ac,type:n,key:s,ref:o,props:r,_owner:H0.current}}function XE(n,e){return{$$typeof:ac,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function V0(n){return typeof n=="object"&&n!==null&&n.$$typeof===ac}function YE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var __=/\/+/g;function ld(n,e){return typeof n=="object"&&n!==null&&n.key!=null?YE(""+n.key):e.toString(36)}function yf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ac:case UE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ld(o,0):i,g_(r)?(t="",n!=null&&(t=n.replace(__,"$&/")+"/"),yf(r,e,t,"",function(u){return u})):r!=null&&(V0(r)&&(r=XE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(__,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",g_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ld(s,a);o+=yf(s,e,t,l,r)}else if(l=$E(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ld(s,a++),o+=yf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gc(n,e,t){if(n==null)return n;var i=[],r=0;return yf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function jE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jn={current:null},Sf={transition:null},qE={ReactCurrentDispatcher:Jn,ReactCurrentBatchConfig:Sf,ReactCurrentOwner:H0};function xy(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:gc,forEach:function(n,e,t){gc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return gc(n,function(){e++}),e},toArray:function(n){return gc(n,function(e){return e})||[]},only:function(n){if(!V0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=xl;at.Fragment=OE;at.Profiler=kE;at.PureComponent=B0;at.StrictMode=FE;at.Suspense=VE;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;at.act=xy;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=H0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)gy.call(e,l)&&!_y.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ac,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:zE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:BE,_context:n},n.Consumer=n};at.createElement=vy;at.createFactory=function(n){var e=vy.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:HE,render:n}};at.isValidElement=V0;at.lazy=function(n){return{$$typeof:WE,_payload:{_status:-1,_result:n},_init:jE}};at.memo=function(n,e){return{$$typeof:GE,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=Sf.transition;Sf.transition={};try{n()}finally{Sf.transition=e}};at.unstable_act=xy;at.useCallback=function(n,e){return Jn.current.useCallback(n,e)};at.useContext=function(n){return Jn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Jn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Jn.current.useEffect(n,e)};at.useId=function(){return Jn.current.useId()};at.useImperativeHandle=function(n,e,t){return Jn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Jn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Jn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Jn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Jn.current.useReducer(n,e,t)};at.useRef=function(n){return Jn.current.useRef(n)};at.useState=function(n){return Jn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Jn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Jn.current.useTransition()};at.version="18.3.1";fy.exports=at;var Ye=fy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KE=Ye,ZE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),JE=Object.prototype.hasOwnProperty,ew=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tw={key:!0,ref:!0,__self:!0,__source:!0};function yy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)JE.call(e,i)&&!tw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ZE,type:n,key:s,ref:o,props:r,_owner:ew.current}}Uh.Fragment=QE;Uh.jsx=yy;Uh.jsxs=yy;cy.exports=Uh;var j=cy.exports,Sy={exports:{}},Ni={},My={exports:{}},Ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,Z){var b=I.length;I.push(Z);e:for(;0<b;){var ne=b-1>>>1,Ee=I[ne];if(0<r(Ee,Z))I[ne]=Z,I[b]=Ee,b=ne;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Z=I[0],b=I.pop();if(b!==Z){I[0]=b;e:for(var ne=0,Ee=I.length,We=Ee>>>1;ne<We;){var q=2*(ne+1)-1,te=I[q],ce=q+1,ue=I[ce];if(0>r(te,b))ce<Ee&&0>r(ue,te)?(I[ne]=ue,I[ce]=b,ne=ce):(I[ne]=te,I[q]=b,ne=q);else if(ce<Ee&&0>r(ue,b))I[ne]=ue,I[ce]=b,ne=ce;else break e}}return Z}function r(I,Z){var b=I.sortIndex-Z.sortIndex;return b!==0?b:I.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var Z=t(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=I)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=t(u)}}function E(I){if(_=!1,x(I),!g)if(t(l)!==null)g=!0,B(A);else{var Z=t(u);Z!==null&&Y(E,Z.startTime-I)}}function A(I,Z){g=!1,_&&(_=!1,p(C),C=-1),d=!0;var b=f;try{for(x(Z),h=t(l);h!==null&&(!(h.expirationTime>Z)||I&&!w());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var Ee=ne(h.expirationTime<=Z);Z=n.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===t(l)&&i(l),x(Z)}else i(l);h=t(l)}if(h!==null)var We=!0;else{var q=t(u);q!==null&&Y(E,q.startTime-Z),We=!1}return We}finally{h=null,f=b,d=!1}}var S=!1,M=null,C=-1,L=5,y=-1;function w(){return!(n.unstable_now()-y<L)}function N(){if(M!==null){var I=n.unstable_now();y=I;var Z=!0;try{Z=M(!0,I)}finally{Z?U():(S=!1,M=null)}}else S=!1}var U;if(typeof v=="function")U=function(){v(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,X=V.port2;V.port1.onmessage=N,U=function(){X.postMessage(null)}}else U=function(){m(N,0)};function B(I){M=I,S||(S=!0,U())}function Y(I,Z){C=m(function(){I(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||d||(g=!0,B(A))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var b=f;f=Z;try{return I()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var b=f;f=I;try{return Z()}finally{f=b}},n.unstable_scheduleCallback=function(I,Z,b){var ne=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ne+b:ne):b=ne,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=b+Ee,I={id:c++,callback:Z,priorityLevel:I,startTime:b,expirationTime:Ee,sortIndex:-1},b>ne?(I.sortIndex=b,e(u,I),t(l)===null&&I===t(u)&&(_?(p(C),C=-1):_=!0,Y(E,b-ne))):(I.sortIndex=Ee,e(l,I),g||d||(g=!0,B(A))),I},n.unstable_shouldYield=w,n.unstable_wrapCallback=function(I){var Z=f;return function(){var b=f;f=Z;try{return I.apply(this,arguments)}finally{f=b}}}})(Ey);My.exports=Ey;var nw=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iw=Ye,Di=nw;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wy=new Set,Iu={};function qo(n,e){el(n,e),el(n+"Capture",e)}function el(n,e){for(Iu[n]=e,n=0;n<e.length;n++)wy.add(e[n])}var es=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v_={},x_={};function sw(n){return Lp.call(x_,n)?!0:Lp.call(v_,n)?!1:rw.test(n)?x_[n]=!0:(v_[n]=!0,!1)}function ow(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function aw(n,e,t,i){if(e===null||typeof e>"u"||ow(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ei(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){An[n]=new ei(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];An[e]=new ei(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){An[n]=new ei(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){An[n]=new ei(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){An[n]=new ei(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){An[n]=new ei(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){An[n]=new ei(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){An[n]=new ei(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){An[n]=new ei(n,5,!1,n.toLowerCase(),null,!1,!1)});var G0=/[\-:]([a-z])/g;function W0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(G0,W0);An[e]=new ei(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(G0,W0);An[e]=new ei(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(G0,W0);An[e]=new ei(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){An[n]=new ei(n,1,!1,n.toLowerCase(),null,!1,!1)});An.xlinkHref=new ei("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){An[n]=new ei(n,1,!1,n.toLowerCase(),null,!0,!0)});function $0(n,e,t,i){var r=An.hasOwnProperty(e)?An[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aw(e,t,r,i)&&(t=null),i||r===null?sw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var us=iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_c=Symbol.for("react.element"),Ma=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),Ip=Symbol.for("react.suspense"),Np=Symbol.for("react.suspense_list"),j0=Symbol.for("react.memo"),ys=Symbol.for("react.lazy"),Cy=Symbol.for("react.offscreen"),y_=Symbol.iterator;function Rl(n){return n===null||typeof n!="object"?null:(n=y_&&n[y_]||n["@@iterator"],typeof n=="function"?n:null)}var Yt=Object.assign,ud;function Ql(n){if(ud===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+n}var cd=!1;function fd(n,e){if(!n||cd)return"";cd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ql(n):""}function lw(n){switch(n.tag){case 5:return Ql(n.type);case 16:return Ql("Lazy");case 13:return Ql("Suspense");case 19:return Ql("SuspenseList");case 0:case 2:case 15:return n=fd(n.type,!1),n;case 11:return n=fd(n.type.render,!1),n;case 1:return n=fd(n.type,!0),n;default:return""}}function Up(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ea:return"Fragment";case Ma:return"Portal";case Dp:return"Profiler";case X0:return"StrictMode";case Ip:return"Suspense";case Np:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ay:return(n.displayName||"Context")+".Consumer";case Ty:return(n._context.displayName||"Context")+".Provider";case Y0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j0:return e=n.displayName||null,e!==null?e:Up(n.type)||"Memo";case ys:e=n._payload,n=n._init;try{return Up(n(e))}catch{}}return null}function uw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Up(e);case 8:return e===X0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ys(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ry(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cw(n){var e=Ry(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function vc(n){n._valueTracker||(n._valueTracker=cw(n))}function by(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ry(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function jf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Op(n,e){var t=e.checked;return Yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function S_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ys(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(n,e){e=e.checked,e!=null&&$0(n,"checked",e,!1)}function Fp(n,e){Py(n,e);var t=Ys(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?kp(n,e.type,t):e.hasOwnProperty("defaultValue")&&kp(n,e.type,Ys(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function M_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function kp(n,e,t){(e!=="number"||jf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Jl=Array.isArray;function Ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ys(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Bp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function E_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Jl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ys(t)}}function Ly(n,e){var t=Ys(e.value),i=Ys(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function w_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Dy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Dy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xc,Iy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Nu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var hu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fw=["Webkit","ms","Moz","O"];Object.keys(hu).forEach(function(n){fw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),hu[e]=hu[n]})});function Ny(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||hu.hasOwnProperty(n)&&hu[n]?(""+e).trim():e+"px"}function Uy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ny(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var hw=Yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(n,e){if(e){if(hw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Vp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function q0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wp=null,za=null,Ha=null;function T_(n){if(n=cc(n)){if(typeof Wp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=zh(e),Wp(n.stateNode,n.type,e))}}function Oy(n){za?Ha?Ha.push(n):Ha=[n]:za=n}function Fy(){if(za){var n=za,e=Ha;if(Ha=za=null,T_(n),e)for(n=0;n<e.length;n++)T_(e[n])}}function ky(n,e){return n(e)}function By(){}var hd=!1;function zy(n,e,t){if(hd)return n(e,t);hd=!0;try{return ky(n,e,t)}finally{hd=!1,(za!==null||Ha!==null)&&(By(),Fy())}}function Uu(n,e){var t=n.stateNode;if(t===null)return null;var i=zh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var $p=!1;if(es)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){$p=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{$p=!1}function dw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var du=!1,qf=null,Kf=!1,Xp=null,pw={onError:function(n){du=!0,qf=n}};function mw(n,e,t,i,r,s,o,a,l){du=!1,qf=null,dw.apply(pw,arguments)}function gw(n,e,t,i,r,s,o,a,l){if(mw.apply(this,arguments),du){if(du){var u=qf;du=!1,qf=null}else throw Error(ae(198));Kf||(Kf=!0,Xp=u)}}function Ko(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Hy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function A_(n){if(Ko(n)!==n)throw Error(ae(188))}function _w(n){var e=n.alternate;if(!e){if(e=Ko(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return A_(r),n;if(s===i)return A_(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Vy(n){return n=_w(n),n!==null?Gy(n):null}function Gy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Gy(n);if(e!==null)return e;n=n.sibling}return null}var Wy=Di.unstable_scheduleCallback,C_=Di.unstable_cancelCallback,vw=Di.unstable_shouldYield,xw=Di.unstable_requestPaint,tn=Di.unstable_now,yw=Di.unstable_getCurrentPriorityLevel,K0=Di.unstable_ImmediatePriority,$y=Di.unstable_UserBlockingPriority,Zf=Di.unstable_NormalPriority,Sw=Di.unstable_LowPriority,Xy=Di.unstable_IdlePriority,Oh=null,Rr=null;function Mw(n){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(Oh,n,void 0,(n.current.flags&128)===128)}catch{}}var dr=Math.clz32?Math.clz32:Tw,Ew=Math.log,ww=Math.LN2;function Tw(n){return n>>>=0,n===0?32:31-(Ew(n)/ww|0)|0}var yc=64,Sc=4194304;function eu(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=eu(a):(s&=o,s!==0&&(i=eu(s)))}else o=t&~r,o!==0?i=eu(o):s!==0&&(i=eu(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-dr(e),r=1<<t,i|=n[t],e&=~r;return i}function Aw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-dr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Aw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Yp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yy(){var n=yc;return yc<<=1,!(yc&4194240)&&(yc=64),n}function dd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function lc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-dr(e),n[e]=t}function Rw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-dr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Z0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-dr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Et=0;function jy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var qy,Q0,Ky,Zy,Qy,jp=!1,Mc=[],Ns=null,Us=null,Os=null,Ou=new Map,Fu=new Map,Ms=[],bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R_(n,e){switch(n){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Us=null;break;case"mouseover":case"mouseout":Os=null;break;case"pointerover":case"pointerout":Ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fu.delete(e.pointerId)}}function Pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cc(e),e!==null&&Q0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Pw(n,e,t,i,r){switch(e){case"focusin":return Ns=Pl(Ns,n,e,t,i,r),!0;case"dragenter":return Us=Pl(Us,n,e,t,i,r),!0;case"mouseover":return Os=Pl(Os,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ou.set(s,Pl(Ou.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fu.set(s,Pl(Fu.get(s)||null,n,e,t,i,r)),!0}return!1}function Jy(n){var e=Mo(n.target);if(e!==null){var t=Ko(e);if(t!==null){if(e=t.tag,e===13){if(e=Hy(t),e!==null){n.blockedOn=e,Qy(n.priority,function(){Ky(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=qp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Gp=i,t.target.dispatchEvent(i),Gp=null}else return e=cc(t),e!==null&&Q0(e),n.blockedOn=t,!1;e.shift()}return!0}function b_(n,e,t){Mf(n)&&t.delete(e)}function Lw(){jp=!1,Ns!==null&&Mf(Ns)&&(Ns=null),Us!==null&&Mf(Us)&&(Us=null),Os!==null&&Mf(Os)&&(Os=null),Ou.forEach(b_),Fu.forEach(b_)}function Ll(n,e){n.blockedOn===e&&(n.blockedOn=null,jp||(jp=!0,Di.unstable_scheduleCallback(Di.unstable_NormalPriority,Lw)))}function ku(n){function e(r){return Ll(r,n)}if(0<Mc.length){Ll(Mc[0],n);for(var t=1;t<Mc.length;t++){var i=Mc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ns!==null&&Ll(Ns,n),Us!==null&&Ll(Us,n),Os!==null&&Ll(Os,n),Ou.forEach(e),Fu.forEach(e),t=0;t<Ms.length;t++)i=Ms[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ms.length&&(t=Ms[0],t.blockedOn===null);)Jy(t),t.blockedOn===null&&Ms.shift()}var Va=us.ReactCurrentBatchConfig,Jf=!0;function Dw(n,e,t,i){var r=Et,s=Va.transition;Va.transition=null;try{Et=1,J0(n,e,t,i)}finally{Et=r,Va.transition=s}}function Iw(n,e,t,i){var r=Et,s=Va.transition;Va.transition=null;try{Et=4,J0(n,e,t,i)}finally{Et=r,Va.transition=s}}function J0(n,e,t,i){if(Jf){var r=qp(n,e,t,i);if(r===null)Ed(n,e,i,eh,t),R_(n,i);else if(Pw(r,n,e,t,i))i.stopPropagation();else if(R_(n,i),e&4&&-1<bw.indexOf(n)){for(;r!==null;){var s=cc(r);if(s!==null&&qy(s),s=qp(n,e,t,i),s===null&&Ed(n,e,i,eh,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ed(n,e,i,null,t)}}var eh=null;function qp(n,e,t,i){if(eh=null,n=q0(i),n=Mo(n),n!==null)if(e=Ko(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Hy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return eh=n,null}function e1(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yw()){case K0:return 1;case $y:return 4;case Zf:case Sw:return 16;case Xy:return 536870912;default:return 16}default:return 16}}var Ts=null,eg=null,Ef=null;function t1(){if(Ef)return Ef;var n,e=eg,t=e.length,i,r="value"in Ts?Ts.value:Ts.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ef=r.slice(n,1<i?1-i:void 0)}function wf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ec(){return!0}function P_(){return!1}function Ui(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ec:P_,this.isPropagationStopped=P_,this}return Yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ec)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ec)},persist:function(){},isPersistent:Ec}),e}var yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tg=Ui(yl),uc=Yt({},yl,{view:0,detail:0}),Nw=Ui(uc),pd,md,Dl,Fh=Yt({},uc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ng,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Dl&&(Dl&&n.type==="mousemove"?(pd=n.screenX-Dl.screenX,md=n.screenY-Dl.screenY):md=pd=0,Dl=n),pd)},movementY:function(n){return"movementY"in n?n.movementY:md}}),L_=Ui(Fh),Uw=Yt({},Fh,{dataTransfer:0}),Ow=Ui(Uw),Fw=Yt({},uc,{relatedTarget:0}),gd=Ui(Fw),kw=Yt({},yl,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=Ui(kw),zw=Yt({},yl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hw=Ui(zw),Vw=Yt({},yl,{data:0}),D_=Ui(Vw),Gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$w[n])?!!e[n]:!1}function ng(){return Xw}var Yw=Yt({},uc,{key:function(n){if(n.key){var e=Gw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=wf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ww[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ng,charCode:function(n){return n.type==="keypress"?wf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jw=Ui(Yw),qw=Yt({},Fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I_=Ui(qw),Kw=Yt({},uc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ng}),Zw=Ui(Kw),Qw=Yt({},yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jw=Ui(Qw),eT=Yt({},Fh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=Ui(eT),nT=[9,13,27,32],ig=es&&"CompositionEvent"in window,pu=null;es&&"documentMode"in document&&(pu=document.documentMode);var iT=es&&"TextEvent"in window&&!pu,n1=es&&(!ig||pu&&8<pu&&11>=pu),N_=" ",U_=!1;function i1(n,e){switch(n){case"keyup":return nT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wa=!1;function rT(n,e){switch(n){case"compositionend":return r1(e);case"keypress":return e.which!==32?null:(U_=!0,N_);case"textInput":return n=e.data,n===N_&&U_?null:n;default:return null}}function sT(n,e){if(wa)return n==="compositionend"||!ig&&i1(n,e)?(n=t1(),Ef=eg=Ts=null,wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n1&&e.locale!=="ko"?null:e.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!oT[n.type]:e==="textarea"}function s1(n,e,t,i){Oy(i),e=th(e,"onChange"),0<e.length&&(t=new tg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var mu=null,Bu=null;function aT(n){g1(n,0)}function kh(n){var e=Ca(n);if(by(e))return n}function lT(n,e){if(n==="change")return e}var o1=!1;if(es){var _d;if(es){var vd="oninput"in document;if(!vd){var F_=document.createElement("div");F_.setAttribute("oninput","return;"),vd=typeof F_.oninput=="function"}_d=vd}else _d=!1;o1=_d&&(!document.documentMode||9<document.documentMode)}function k_(){mu&&(mu.detachEvent("onpropertychange",a1),Bu=mu=null)}function a1(n){if(n.propertyName==="value"&&kh(Bu)){var e=[];s1(e,Bu,n,q0(n)),zy(aT,e)}}function uT(n,e,t){n==="focusin"?(k_(),mu=e,Bu=t,mu.attachEvent("onpropertychange",a1)):n==="focusout"&&k_()}function cT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kh(Bu)}function fT(n,e){if(n==="click")return kh(e)}function hT(n,e){if(n==="input"||n==="change")return kh(e)}function dT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mr=typeof Object.is=="function"?Object.is:dT;function zu(n,e){if(mr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Lp.call(e,r)||!mr(n[r],e[r]))return!1}return!0}function B_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function z_(n,e){var t=B_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=B_(t)}}function l1(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?l1(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function u1(){for(var n=window,e=jf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=jf(n.document)}return e}function rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function pT(n){var e=u1(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&l1(t.ownerDocument.documentElement,t)){if(i!==null&&rg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=z_(t,s);var o=z_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mT=es&&"documentMode"in document&&11>=document.documentMode,Ta=null,Kp=null,gu=null,Zp=!1;function H_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zp||Ta==null||Ta!==jf(i)||(i=Ta,"selectionStart"in i&&rg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gu&&zu(gu,i)||(gu=i,i=th(Kp,"onSelect"),0<i.length&&(e=new tg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ta)))}function wc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Aa={animationend:wc("Animation","AnimationEnd"),animationiteration:wc("Animation","AnimationIteration"),animationstart:wc("Animation","AnimationStart"),transitionend:wc("Transition","TransitionEnd")},xd={},c1={};es&&(c1=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Bh(n){if(xd[n])return xd[n];if(!Aa[n])return n;var e=Aa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in c1)return xd[n]=e[t];return n}var f1=Bh("animationend"),h1=Bh("animationiteration"),d1=Bh("animationstart"),p1=Bh("transitionend"),m1=new Map,V_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function eo(n,e){m1.set(n,e),qo(e,[n])}for(var yd=0;yd<V_.length;yd++){var Sd=V_[yd],gT=Sd.toLowerCase(),_T=Sd[0].toUpperCase()+Sd.slice(1);eo(gT,"on"+_T)}eo(f1,"onAnimationEnd");eo(h1,"onAnimationIteration");eo(d1,"onAnimationStart");eo("dblclick","onDoubleClick");eo("focusin","onFocus");eo("focusout","onBlur");eo(p1,"onTransitionEnd");el("onMouseEnter",["mouseout","mouseover"]);el("onMouseLeave",["mouseout","mouseover"]);el("onPointerEnter",["pointerout","pointerover"]);el("onPointerLeave",["pointerout","pointerover"]);qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("cancel close invalid load scroll toggle".split(" ").concat(tu));function G_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,gw(i,e,void 0,n),n.currentTarget=null}function g1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;G_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;G_(r,a,u),s=l}}}if(Kf)throw n=Xp,Kf=!1,Xp=null,n}function Nt(n,e){var t=e[nm];t===void 0&&(t=e[nm]=new Set);var i=n+"__bubble";t.has(i)||(_1(e,n,2,!1),t.add(i))}function Md(n,e,t){var i=0;e&&(i|=4),_1(t,n,i,e)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Hu(n){if(!n[Tc]){n[Tc]=!0,wy.forEach(function(t){t!=="selectionchange"&&(vT.has(t)||Md(t,!1,n),Md(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tc]||(e[Tc]=!0,Md("selectionchange",!1,e))}}function _1(n,e,t,i){switch(e1(e)){case 1:var r=Dw;break;case 4:r=Iw;break;default:r=J0}t=r.bind(null,e,t,n),r=void 0,!$p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ed(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zy(function(){var u=s,c=q0(t),h=[];e:{var f=m1.get(n);if(f!==void 0){var d=tg,g=n;switch(n){case"keypress":if(wf(t)===0)break e;case"keydown":case"keyup":d=jw;break;case"focusin":g="focus",d=gd;break;case"focusout":g="blur",d=gd;break;case"beforeblur":case"afterblur":d=gd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=L_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Zw;break;case f1:case h1:case d1:d=Bw;break;case p1:d=Jw;break;case"scroll":d=Nw;break;case"wheel":d=tT;break;case"copy":case"cut":case"paste":d=Hw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=I_}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,p!==null&&(E=Uu(v,p),E!=null&&_.push(Vu(v,E,x)))),m)break;v=v.return}0<_.length&&(f=new d(f,g,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",f&&t!==Gp&&(g=t.relatedTarget||t.fromElement)&&(Mo(g)||g[ts]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(g=t.relatedTarget||t.toElement,d=u,g=g?Mo(g):null,g!==null&&(m=Ko(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=u),d!==g)){if(_=L_,E="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=I_,E="onPointerLeave",p="onPointerEnter",v="pointer"),m=d==null?f:Ca(d),x=g==null?f:Ca(g),f=new _(E,v+"leave",d,t,c),f.target=m,f.relatedTarget=x,E=null,Mo(c)===u&&(_=new _(p,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,E=_),m=E,d&&g)t:{for(_=d,p=g,v=0,x=_;x;x=ta(x))v++;for(x=0,E=p;E;E=ta(E))x++;for(;0<v-x;)_=ta(_),v--;for(;0<x-v;)p=ta(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=ta(_),p=ta(p)}_=null}else _=null;d!==null&&W_(h,f,d,_,!1),g!==null&&m!==null&&W_(h,m,g,_,!0)}}e:{if(f=u?Ca(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var A=lT;else if(O_(f))if(o1)A=hT;else{A=cT;var S=uT}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=fT);if(A&&(A=A(n,u))){s1(h,A,t,c);break e}S&&S(n,f,u),n==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&kp(f,"number",f.value)}switch(S=u?Ca(u):window,n){case"focusin":(O_(S)||S.contentEditable==="true")&&(Ta=S,Kp=u,gu=null);break;case"focusout":gu=Kp=Ta=null;break;case"mousedown":Zp=!0;break;case"contextmenu":case"mouseup":case"dragend":Zp=!1,H_(h,t,c);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":H_(h,t,c)}var M;if(ig)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else wa?i1(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(n1&&t.locale!=="ko"&&(wa||C!=="onCompositionStart"?C==="onCompositionEnd"&&wa&&(M=t1()):(Ts=c,eg="value"in Ts?Ts.value:Ts.textContent,wa=!0)),S=th(u,C),0<S.length&&(C=new D_(C,n,null,t,c),h.push({event:C,listeners:S}),M?C.data=M:(M=r1(t),M!==null&&(C.data=M)))),(M=iT?rT(n,t):sT(n,t))&&(u=th(u,"onBeforeInput"),0<u.length&&(c=new D_("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}g1(h,e)})}function Vu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function th(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Uu(n,t),s!=null&&i.unshift(Vu(n,s,r)),s=Uu(n,e),s!=null&&i.push(Vu(n,s,r))),n=n.return}return i}function ta(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function W_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Uu(t,s),l!=null&&o.unshift(Vu(t,l,a))):r||(l=Uu(t,s),l!=null&&o.push(Vu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var xT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function $_(n){return(typeof n=="string"?n:""+n).replace(xT,`
`).replace(yT,"")}function Ac(n,e,t){if(e=$_(e),$_(n)!==e&&t)throw Error(ae(425))}function nh(){}var Qp=null,Jp=null;function em(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tm=typeof setTimeout=="function"?setTimeout:void 0,ST=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(n){return X_.resolve(null).then(n).catch(ET)}:tm;function ET(n){setTimeout(function(){throw n})}function wd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ku(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ku(e)}function Fs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Y_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Sl=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Sl,Gu="__reactProps$"+Sl,ts="__reactContainer$"+Sl,nm="__reactEvents$"+Sl,wT="__reactListeners$"+Sl,TT="__reactHandles$"+Sl;function Mo(n){var e=n[Mr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ts]||t[Mr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Y_(n);n!==null;){if(t=n[Mr])return t;n=Y_(n)}return e}n=t,t=n.parentNode}return null}function cc(n){return n=n[Mr]||n[ts],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ca(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function zh(n){return n[Gu]||null}var im=[],Ra=-1;function to(n){return{current:n}}function Ft(n){0>Ra||(n.current=im[Ra],im[Ra]=null,Ra--)}function Pt(n,e){Ra++,im[Ra]=n.current,n.current=e}var js={},Hn=to(js),oi=to(!1),ko=js;function tl(n,e){var t=n.type.contextTypes;if(!t)return js;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ai(n){return n=n.childContextTypes,n!=null}function ih(){Ft(oi),Ft(Hn)}function j_(n,e,t){if(Hn.current!==js)throw Error(ae(168));Pt(Hn,e),Pt(oi,t)}function v1(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,uw(n)||"Unknown",r));return Yt({},t,i)}function rh(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||js,ko=Hn.current,Pt(Hn,n),Pt(oi,oi.current),!0}function q_(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=v1(n,e,ko),i.__reactInternalMemoizedMergedChildContext=n,Ft(oi),Ft(Hn),Pt(Hn,n)):Ft(oi),Pt(oi,t)}var Gr=null,Hh=!1,Td=!1;function x1(n){Gr===null?Gr=[n]:Gr.push(n)}function AT(n){Hh=!0,x1(n)}function no(){if(!Td&&Gr!==null){Td=!0;var n=0,e=Et;try{var t=Gr;for(Et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Gr=null,Hh=!1}catch(r){throw Gr!==null&&(Gr=Gr.slice(n+1)),Wy(K0,no),r}finally{Et=e,Td=!1}}return null}var ba=[],Pa=0,sh=null,oh=0,Bi=[],zi=0,Bo=null,Yr=1,jr="";function ho(n,e){ba[Pa++]=oh,ba[Pa++]=sh,sh=n,oh=e}function y1(n,e,t){Bi[zi++]=Yr,Bi[zi++]=jr,Bi[zi++]=Bo,Bo=n;var i=Yr;n=jr;var r=32-dr(i)-1;i&=~(1<<r),t+=1;var s=32-dr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yr=1<<32-dr(e)+r|t<<r|i,jr=s+n}else Yr=1<<s|t<<r|i,jr=n}function sg(n){n.return!==null&&(ho(n,1),y1(n,1,0))}function og(n){for(;n===sh;)sh=ba[--Pa],ba[Pa]=null,oh=ba[--Pa],ba[Pa]=null;for(;n===Bo;)Bo=Bi[--zi],Bi[zi]=null,jr=Bi[--zi],Bi[zi]=null,Yr=Bi[--zi],Bi[zi]=null}var bi=null,Ai=null,zt=!1,lr=null;function S1(n,e){var t=Wi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function K_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bi=n,Ai=Fs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bi=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Bo!==null?{id:Yr,overflow:jr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Wi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bi=n,Ai=null,!0):!1;default:return!1}}function rm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sm(n){if(zt){var e=Ai;if(e){var t=e;if(!K_(n,e)){if(rm(n))throw Error(ae(418));e=Fs(t.nextSibling);var i=bi;e&&K_(n,e)?S1(i,t):(n.flags=n.flags&-4097|2,zt=!1,bi=n)}}else{if(rm(n))throw Error(ae(418));n.flags=n.flags&-4097|2,zt=!1,bi=n}}}function Z_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bi=n}function Cc(n){if(n!==bi)return!1;if(!zt)return Z_(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!em(n.type,n.memoizedProps)),e&&(e=Ai)){if(rm(n))throw M1(),Error(ae(418));for(;e;)S1(n,e),e=Fs(e.nextSibling)}if(Z_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Fs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=bi?Fs(n.stateNode.nextSibling):null;return!0}function M1(){for(var n=Ai;n;)n=Fs(n.nextSibling)}function nl(){Ai=bi=null,zt=!1}function ag(n){lr===null?lr=[n]:lr.push(n)}var CT=us.ReactCurrentBatchConfig;function Il(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function Rc(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Q_(n){var e=n._init;return e(n._payload)}function E1(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Hs(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,E){return v===null||v.tag!==6?(v=Dd(x,p.mode,E),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,E){var A=x.type;return A===Ea?c(p,v,x.props.children,E,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ys&&Q_(A)===v.type)?(E=r(v,x.props),E.ref=Il(p,v,x),E.return=p,E):(E=Lf(x.type,x.key,x.props,null,p.mode,E),E.ref=Il(p,v,x),E.return=p,E)}function u(p,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Id(x,p.mode,E),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,E,A){return v===null||v.tag!==7?(v=bo(x,p.mode,E,A),v.return=p,v):(v=r(v,x),v.return=p,v)}function h(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dd(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _c:return x=Lf(v.type,v.key,v.props,null,p.mode,x),x.ref=Il(p,null,v),x.return=p,x;case Ma:return v=Id(v,p.mode,x),v.return=p,v;case ys:var E=v._init;return h(p,E(v._payload),x)}if(Jl(v)||Rl(v))return v=bo(v,p.mode,x,null),v.return=p,v;Rc(p,v)}return null}function f(p,v,x,E){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(p,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _c:return x.key===A?l(p,v,x,E):null;case Ma:return x.key===A?u(p,v,x,E):null;case ys:return A=x._init,f(p,v,A(x._payload),E)}if(Jl(x)||Rl(x))return A!==null?null:c(p,v,x,E,null);Rc(p,x)}return null}function d(p,v,x,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(x)||null,a(v,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _c:return p=p.get(E.key===null?x:E.key)||null,l(v,p,E,A);case Ma:return p=p.get(E.key===null?x:E.key)||null,u(v,p,E,A);case ys:var S=E._init;return d(p,v,x,S(E._payload),A)}if(Jl(E)||Rl(E))return p=p.get(x)||null,c(v,p,E,A,null);Rc(v,E)}return null}function g(p,v,x,E){for(var A=null,S=null,M=v,C=v=0,L=null;M!==null&&C<x.length;C++){M.index>C?(L=M,M=null):L=M.sibling;var y=f(p,M,x[C],E);if(y===null){M===null&&(M=L);break}n&&M&&y.alternate===null&&e(p,M),v=s(y,v,C),S===null?A=y:S.sibling=y,S=y,M=L}if(C===x.length)return t(p,M),zt&&ho(p,C),A;if(M===null){for(;C<x.length;C++)M=h(p,x[C],E),M!==null&&(v=s(M,v,C),S===null?A=M:S.sibling=M,S=M);return zt&&ho(p,C),A}for(M=i(p,M);C<x.length;C++)L=d(M,p,C,x[C],E),L!==null&&(n&&L.alternate!==null&&M.delete(L.key===null?C:L.key),v=s(L,v,C),S===null?A=L:S.sibling=L,S=L);return n&&M.forEach(function(w){return e(p,w)}),zt&&ho(p,C),A}function _(p,v,x,E){var A=Rl(x);if(typeof A!="function")throw Error(ae(150));if(x=A.call(x),x==null)throw Error(ae(151));for(var S=A=null,M=v,C=v=0,L=null,y=x.next();M!==null&&!y.done;C++,y=x.next()){M.index>C?(L=M,M=null):L=M.sibling;var w=f(p,M,y.value,E);if(w===null){M===null&&(M=L);break}n&&M&&w.alternate===null&&e(p,M),v=s(w,v,C),S===null?A=w:S.sibling=w,S=w,M=L}if(y.done)return t(p,M),zt&&ho(p,C),A;if(M===null){for(;!y.done;C++,y=x.next())y=h(p,y.value,E),y!==null&&(v=s(y,v,C),S===null?A=y:S.sibling=y,S=y);return zt&&ho(p,C),A}for(M=i(p,M);!y.done;C++,y=x.next())y=d(M,p,C,y.value,E),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?C:y.key),v=s(y,v,C),S===null?A=y:S.sibling=y,S=y);return n&&M.forEach(function(N){return e(p,N)}),zt&&ho(p,C),A}function m(p,v,x,E){if(typeof x=="object"&&x!==null&&x.type===Ea&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _c:e:{for(var A=x.key,S=v;S!==null;){if(S.key===A){if(A=x.type,A===Ea){if(S.tag===7){t(p,S.sibling),v=r(S,x.props.children),v.return=p,p=v;break e}}else if(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ys&&Q_(A)===S.type){t(p,S.sibling),v=r(S,x.props),v.ref=Il(p,S,x),v.return=p,p=v;break e}t(p,S);break}else e(p,S);S=S.sibling}x.type===Ea?(v=bo(x.props.children,p.mode,E,x.key),v.return=p,p=v):(E=Lf(x.type,x.key,x.props,null,p.mode,E),E.ref=Il(p,v,x),E.return=p,p=E)}return o(p);case Ma:e:{for(S=x.key;v!==null;){if(v.key===S)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=Id(x,p.mode,E),v.return=p,p=v}return o(p);case ys:return S=x._init,m(p,v,S(x._payload),E)}if(Jl(x))return g(p,v,x,E);if(Rl(x))return _(p,v,x,E);Rc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=Dd(x,p.mode,E),v.return=p,p=v),o(p)):t(p,v)}return m}var il=E1(!0),w1=E1(!1),ah=to(null),lh=null,La=null,lg=null;function ug(){lg=La=lh=null}function cg(n){var e=ah.current;Ft(ah),n._currentValue=e}function om(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ga(n,e){lh=n,lg=La=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ri=!0),n.firstContext=null)}function qi(n){var e=n._currentValue;if(lg!==n)if(n={context:n,memoizedValue:e,next:null},La===null){if(lh===null)throw Error(ae(308));La=n,lh.dependencies={lanes:0,firstContext:n}}else La=La.next=n;return e}var Eo=null;function fg(n){Eo===null?Eo=[n]:Eo.push(n)}function T1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,fg(e)):(t.next=r.next,r.next=t),e.interleaved=t,ns(n,i)}function ns(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ss=!1;function hg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ks(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,_t&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ns(n,t)}return r=i.interleaved,r===null?(e.next=e,fg(i)):(e.next=r.next,r.next=e),i.interleaved=e,ns(n,t)}function Tf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Z0(n,t)}}function J_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function uh(n,e,t,i){var r=n.updateQueue;Ss=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,d=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,d=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(d,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(d,h,f):g,f==null)break e;h=Yt({},h,f);break e;case 2:Ss=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ho|=o,n.lanes=o,n.memoizedState=h}}function ev(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var fc={},br=to(fc),Wu=to(fc),$u=to(fc);function wo(n){if(n===fc)throw Error(ae(174));return n}function dg(n,e){switch(Pt($u,e),Pt(Wu,n),Pt(br,fc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=zp(e,n)}Ft(br),Pt(br,e)}function rl(){Ft(br),Ft(Wu),Ft($u)}function C1(n){wo($u.current);var e=wo(br.current),t=zp(e,n.type);e!==t&&(Pt(Wu,n),Pt(br,t))}function pg(n){Wu.current===n&&(Ft(br),Ft(Wu))}var Gt=to(0);function ch(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ad=[];function mg(){for(var n=0;n<Ad.length;n++)Ad[n]._workInProgressVersionPrimary=null;Ad.length=0}var Af=us.ReactCurrentDispatcher,Cd=us.ReactCurrentBatchConfig,zo=0,Xt=null,un=null,vn=null,fh=!1,_u=!1,Xu=0,RT=0;function Cn(){throw Error(ae(321))}function gg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mr(n[t],e[t]))return!1;return!0}function _g(n,e,t,i,r,s){if(zo=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Af.current=n===null||n.memoizedState===null?DT:IT,n=t(i,r),_u){s=0;do{if(_u=!1,Xu=0,25<=s)throw Error(ae(301));s+=1,vn=un=null,e.updateQueue=null,Af.current=NT,n=t(i,r)}while(_u)}if(Af.current=hh,e=un!==null&&un.next!==null,zo=0,vn=un=Xt=null,fh=!1,e)throw Error(ae(300));return n}function vg(){var n=Xu!==0;return Xu=0,n}function _r(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Xt.memoizedState=vn=n:vn=vn.next=n,vn}function Ki(){if(un===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var e=vn===null?Xt.memoizedState:vn.next;if(e!==null)vn=e,un=n;else{if(n===null)throw Error(ae(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},vn===null?Xt.memoizedState=vn=n:vn=vn.next=n}return vn}function Yu(n,e){return typeof e=="function"?e(n):e}function Rd(n){var e=Ki(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=un,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Xt.lanes|=c,Ho|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mr(i,e.memoizedState)||(ri=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Xt.lanes|=s,Ho|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function bd(n){var e=Ki(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mr(s,e.memoizedState)||(ri=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function R1(){}function b1(n,e){var t=Xt,i=Ki(),r=e(),s=!mr(i.memoizedState,r);if(s&&(i.memoizedState=r,ri=!0),i=i.queue,xg(D1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||vn!==null&&vn.memoizedState.tag&1){if(t.flags|=2048,ju(9,L1.bind(null,t,i,r,e),void 0,null),yn===null)throw Error(ae(349));zo&30||P1(t,e,r)}return r}function P1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function L1(n,e,t,i){e.value=t,e.getSnapshot=i,I1(e)&&N1(n)}function D1(n,e,t){return t(function(){I1(e)&&N1(n)})}function I1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mr(n,t)}catch{return!0}}function N1(n){var e=ns(n,1);e!==null&&pr(e,n,1,-1)}function tv(n){var e=_r();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yu,lastRenderedState:n},e.queue=n,n=n.dispatch=LT.bind(null,Xt,n),[e.memoizedState,n]}function ju(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function U1(){return Ki().memoizedState}function Cf(n,e,t,i){var r=_r();Xt.flags|=n,r.memoizedState=ju(1|e,t,void 0,i===void 0?null:i)}function Vh(n,e,t,i){var r=Ki();i=i===void 0?null:i;var s=void 0;if(un!==null){var o=un.memoizedState;if(s=o.destroy,i!==null&&gg(i,o.deps)){r.memoizedState=ju(e,t,s,i);return}}Xt.flags|=n,r.memoizedState=ju(1|e,t,s,i)}function nv(n,e){return Cf(8390656,8,n,e)}function xg(n,e){return Vh(2048,8,n,e)}function O1(n,e){return Vh(4,2,n,e)}function F1(n,e){return Vh(4,4,n,e)}function k1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function B1(n,e,t){return t=t!=null?t.concat([n]):null,Vh(4,4,k1.bind(null,e,n),t)}function yg(){}function z1(n,e){var t=Ki();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function H1(n,e){var t=Ki();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function V1(n,e,t){return zo&21?(mr(t,e)||(t=Yy(),Xt.lanes|=t,Ho|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=t)}function bT(n,e){var t=Et;Et=t!==0&&4>t?t:4,n(!0);var i=Cd.transition;Cd.transition={};try{n(!1),e()}finally{Et=t,Cd.transition=i}}function G1(){return Ki().memoizedState}function PT(n,e,t){var i=zs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},W1(n))$1(e,t);else if(t=T1(n,e,t,i),t!==null){var r=Qn();pr(t,n,i,r),X1(t,e,i)}}function LT(n,e,t){var i=zs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(W1(n))$1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mr(a,o)){var l=e.interleaved;l===null?(r.next=r,fg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=T1(n,e,r,i),t!==null&&(r=Qn(),pr(t,n,i,r),X1(t,e,i))}}function W1(n){var e=n.alternate;return n===Xt||e!==null&&e===Xt}function $1(n,e){_u=fh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function X1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Z0(n,t)}}var hh={readContext:qi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},DT={readContext:qi,useCallback:function(n,e){return _r().memoizedState=[n,e===void 0?null:e],n},useContext:qi,useEffect:nv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Cf(4194308,4,k1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return Cf(4,2,n,e)},useMemo:function(n,e){var t=_r();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_r();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PT.bind(null,Xt,n),[i.memoizedState,n]},useRef:function(n){var e=_r();return n={current:n},e.memoizedState=n},useState:tv,useDebugValue:yg,useDeferredValue:function(n){return _r().memoizedState=n},useTransition:function(){var n=tv(!1),e=n[0];return n=bT.bind(null,n[1]),_r().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Xt,r=_r();if(zt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),yn===null)throw Error(ae(349));zo&30||P1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,nv(D1.bind(null,i,s,n),[n]),i.flags|=2048,ju(9,L1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_r(),e=yn.identifierPrefix;if(zt){var t=jr,i=Yr;t=(i&~(1<<32-dr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=RT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},IT={readContext:qi,useCallback:z1,useContext:qi,useEffect:xg,useImperativeHandle:B1,useInsertionEffect:O1,useLayoutEffect:F1,useMemo:H1,useReducer:Rd,useRef:U1,useState:function(){return Rd(Yu)},useDebugValue:yg,useDeferredValue:function(n){var e=Ki();return V1(e,un.memoizedState,n)},useTransition:function(){var n=Rd(Yu)[0],e=Ki().memoizedState;return[n,e]},useMutableSource:R1,useSyncExternalStore:b1,useId:G1,unstable_isNewReconciler:!1},NT={readContext:qi,useCallback:z1,useContext:qi,useEffect:xg,useImperativeHandle:B1,useInsertionEffect:O1,useLayoutEffect:F1,useMemo:H1,useReducer:bd,useRef:U1,useState:function(){return bd(Yu)},useDebugValue:yg,useDeferredValue:function(n){var e=Ki();return un===null?e.memoizedState=n:V1(e,un.memoizedState,n)},useTransition:function(){var n=bd(Yu)[0],e=Ki().memoizedState;return[n,e]},useMutableSource:R1,useSyncExternalStore:b1,useId:G1,unstable_isNewReconciler:!1};function or(n,e){if(n&&n.defaultProps){e=Yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function am(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gh={isMounted:function(n){return(n=n._reactInternals)?Ko(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Qn(),r=zs(n),s=Zr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ks(n,s,r),e!==null&&(pr(e,n,r,i),Tf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Qn(),r=zs(n),s=Zr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ks(n,s,r),e!==null&&(pr(e,n,r,i),Tf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Qn(),i=zs(n),r=Zr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ks(n,r,i),e!==null&&(pr(e,n,i,t),Tf(e,n,i))}};function iv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zu(t,i)||!zu(r,s):!0}function Y1(n,e,t){var i=!1,r=js,s=e.contextType;return typeof s=="object"&&s!==null?s=qi(s):(r=ai(e)?ko:Hn.current,i=e.contextTypes,s=(i=i!=null)?tl(n,r):js),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function rv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gh.enqueueReplaceState(e,e.state,null)}function lm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qi(s):(s=ai(e)?ko:Hn.current,r.context=tl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(am(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gh.enqueueReplaceState(r,r.state,null),uh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function sl(n,e){try{var t="",i=e;do t+=lw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Pd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function um(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function j1(n,e,t){t=Zr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ph||(ph=!0,xm=i),um(n,e)},t}function q1(n,e,t){t=Zr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){um(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){um(n,e),typeof i!="function"&&(Bs===null?Bs=new Set([this]):Bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function sv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qT.bind(null,n,e,t),e.then(n,n))}function ov(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function av(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zr(-1,1),e.tag=2,ks(t,e,1))),t.lanes|=1),n)}var OT=us.ReactCurrentOwner,ri=!1;function Xn(n,e,t,i){e.child=n===null?w1(e,null,t,i):il(e,n.child,t,i)}function lv(n,e,t,i,r){t=t.render;var s=e.ref;return Ga(e,r),i=_g(n,e,t,i,s,r),t=vg(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,is(n,e,r)):(zt&&t&&sg(e),e.flags|=1,Xn(n,e,i,r),e.child)}function uv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Rg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,K1(n,e,s,i,r)):(n=Lf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:zu,t(o,i)&&n.ref===e.ref)return is(n,e,r)}return e.flags|=1,n=Hs(s,i),n.ref=e.ref,n.return=e,e.child=n}function K1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(zu(s,i)&&n.ref===e.ref)if(ri=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ri=!0);else return e.lanes=n.lanes,is(n,e,r)}return cm(n,e,t,i,r)}function Z1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Ia,Si),Si|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pt(Ia,Si),Si|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Pt(Ia,Si),Si|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Pt(Ia,Si),Si|=i;return Xn(n,e,r,t),e.child}function Q1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function cm(n,e,t,i,r){var s=ai(t)?ko:Hn.current;return s=tl(e,s),Ga(e,r),t=_g(n,e,t,i,s,r),i=vg(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,is(n,e,r)):(zt&&i&&sg(e),e.flags|=1,Xn(n,e,t,r),e.child)}function cv(n,e,t,i,r){if(ai(t)){var s=!0;rh(e)}else s=!1;if(Ga(e,r),e.stateNode===null)Rf(n,e),Y1(e,t,i),lm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=qi(u):(u=ai(t)?ko:Hn.current,u=tl(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&rv(e,o,i,u),Ss=!1;var f=e.memoizedState;o.state=f,uh(e,i,o,r),l=e.memoizedState,a!==i||f!==l||oi.current||Ss?(typeof c=="function"&&(am(e,t,c,i),l=e.memoizedState),(a=Ss||iv(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A1(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:or(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=qi(l):(l=ai(t)?ko:Hn.current,l=tl(e,l));var d=t.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&rv(e,o,i,l),Ss=!1,f=e.memoizedState,o.state=f,uh(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||oi.current||Ss?(typeof d=="function"&&(am(e,t,d,i),g=e.memoizedState),(u=Ss||iv(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return fm(n,e,t,i,s,r)}function fm(n,e,t,i,r,s){Q1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&q_(e,t,!1),is(n,e,s);i=e.stateNode,OT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=il(e,n.child,null,s),e.child=il(e,null,a,s)):Xn(n,e,a,s),e.memoizedState=i.state,r&&q_(e,t,!0),e.child}function J1(n){var e=n.stateNode;e.pendingContext?j_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&j_(n,e.context,!1),dg(n,e.containerInfo)}function fv(n,e,t,i,r){return nl(),ag(r),e.flags|=256,Xn(n,e,t,i),e.child}var hm={dehydrated:null,treeContext:null,retryLane:0};function dm(n){return{baseLanes:n,cachePool:null,transitions:null}}function eS(n,e,t){var i=e.pendingProps,r=Gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Pt(Gt,r&1),n===null)return sm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xh(o,i,0,null),n=bo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=dm(t),e.memoizedState=hm,n):Sg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hs(a,s):(s=bo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?dm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=hm,i}return s=n.child,n=s.sibling,i=Hs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sg(n,e){return e=Xh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bc(n,e,t,i){return i!==null&&ag(i),il(e,n.child,null,t),n=Sg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Pd(Error(ae(422))),bc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xh({mode:"visible",children:i.children},r,0,null),s=bo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&il(e,n.child,null,o),e.child.memoizedState=dm(o),e.memoizedState=hm,s);if(!(e.mode&1))return bc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Pd(s,i,void 0),bc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ri||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ns(n,r),pr(i,n,r,-1))}return Cg(),i=Pd(Error(ae(421))),bc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Fs(r.nextSibling),bi=e,zt=!0,lr=null,n!==null&&(Bi[zi++]=Yr,Bi[zi++]=jr,Bi[zi++]=Bo,Yr=n.id,jr=n.overflow,Bo=e),e=Sg(e,i.children),e.flags|=4096,e)}function hv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),om(n.return,e,t)}function Ld(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function tS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xn(n,e,i.children,t),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hv(n,t,e);else if(n.tag===19)hv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Pt(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ch(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ld(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ch(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ld(e,!0,t,null,s);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function is(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ho|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Hs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Hs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function kT(n,e,t){switch(e.tag){case 3:J1(e),nl();break;case 5:C1(e);break;case 1:ai(e.type)&&rh(e);break;case 4:dg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(ah,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Gt,Gt.current&1),e.flags|=128,null):t&e.child.childLanes?eS(n,e,t):(Pt(Gt,Gt.current&1),n=is(n,e,t),n!==null?n.sibling:null);Pt(Gt,Gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return tS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Z1(n,e,t)}return is(n,e,t)}var nS,pm,iS,rS;nS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};pm=function(){};iS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,wo(br.current);var s=null;switch(t){case"input":r=Op(n,r),i=Op(n,i),s=[];break;case"select":r=Yt({},r,{value:void 0}),i=Yt({},i,{value:void 0}),s=[];break;case"textarea":r=Bp(n,r),i=Bp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=nh)}Hp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Iu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Iu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Nt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Nl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function BT(n,e,t){var i=e.pendingProps;switch(og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(e),null;case 1:return ai(e.type)&&ih(),Rn(e),null;case 3:return i=e.stateNode,rl(),Ft(oi),Ft(Hn),mg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Cc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lr!==null&&(Mm(lr),lr=null))),pm(n,e),Rn(e),null;case 5:pg(e);var r=wo($u.current);if(t=e.type,n!==null&&e.stateNode!=null)iS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Rn(e),null}if(n=wo(br.current),Cc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mr]=e,i[Gu]=s,n=(e.mode&1)!==0,t){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(r=0;r<tu.length;r++)Nt(tu[r],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":S_(i,s),Nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Nt("invalid",i);break;case"textarea":E_(i,s),Nt("invalid",i)}Hp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,n),r=["children",""+a]):Iu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Nt("scroll",i)}switch(t){case"input":vc(i),M_(i,s,!0);break;case"textarea":vc(i),w_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mr]=e,n[Gu]=i,nS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Vp(t,i),t){case"dialog":Nt("cancel",n),Nt("close",n),r=i;break;case"iframe":case"object":case"embed":Nt("load",n),r=i;break;case"video":case"audio":for(r=0;r<tu.length;r++)Nt(tu[r],n);r=i;break;case"source":Nt("error",n),r=i;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),r=i;break;case"details":Nt("toggle",n),r=i;break;case"input":S_(n,i),r=Op(n,i),Nt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Yt({},i,{value:void 0}),Nt("invalid",n);break;case"textarea":E_(n,i),r=Bp(n,i),Nt("invalid",n);break;default:r=i}Hp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Uy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Iy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Nu(n,l):typeof l=="number"&&Nu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Iu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Nt("scroll",n):l!=null&&$0(n,s,l,o))}switch(t){case"input":vc(n),M_(n,i,!1);break;case"textarea":vc(n),w_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ys(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=nh)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rn(e),null;case 6:if(n&&e.stateNode!=null)rS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=wo($u.current),wo(br.current),Cc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mr]=e,(s=i.nodeValue!==t)&&(n=bi,n!==null))switch(n.tag){case 3:Ac(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ac(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mr]=e,e.stateNode=i}return Rn(e),null;case 13:if(Ft(Gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Ai!==null&&e.mode&1&&!(e.flags&128))M1(),nl(),e.flags|=98560,s=!1;else if(s=Cc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Mr]=e}else nl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rn(e),s=!1}else lr!==null&&(Mm(lr),lr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Gt.current&1?fn===0&&(fn=3):Cg())),e.updateQueue!==null&&(e.flags|=4),Rn(e),null);case 4:return rl(),pm(n,e),n===null&&Hu(e.stateNode.containerInfo),Rn(e),null;case 10:return cg(e.type._context),Rn(e),null;case 17:return ai(e.type)&&ih(),Rn(e),null;case 19:if(Ft(Gt),s=e.memoizedState,s===null)return Rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Nl(s,!1);else{if(fn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ch(n),o!==null){for(e.flags|=128,Nl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pt(Gt,Gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&tn()>ol&&(e.flags|=128,i=!0,Nl(s,!1),e.lanes=4194304)}else{if(!i)if(n=ch(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Nl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return Rn(e),null}else 2*tn()-s.renderingStartTime>ol&&t!==1073741824&&(e.flags|=128,i=!0,Nl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tn(),e.sibling=null,t=Gt.current,Pt(Gt,i?t&1|2:t&1),e):(Rn(e),null);case 22:case 23:return Ag(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Si&1073741824&&(Rn(e),e.subtreeFlags&6&&(e.flags|=8192)):Rn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function zT(n,e){switch(og(e),e.tag){case 1:return ai(e.type)&&ih(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return rl(),Ft(oi),Ft(Hn),mg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pg(e),null;case 13:if(Ft(Gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));nl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ft(Gt),null;case 4:return rl(),null;case 10:return cg(e.type._context),null;case 22:case 23:return Ag(),null;case 24:return null;default:return null}}var Pc=!1,In=!1,HT=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Da(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){jt(n,e,i)}else t.current=null}function mm(n,e,t){try{t()}catch(i){jt(n,e,i)}}var dv=!1;function VT(n,e){if(Qp=Jf,n=u1(),rg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var d;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jp={focusedElem:n,selectionRange:t},Jf=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:or(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){jt(e,e.return,E)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return g=dv,dv=!1,g}function vu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&mm(e,t,s)}r=r.next}while(r!==i)}}function Wh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function gm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function sS(n){var e=n.alternate;e!==null&&(n.alternate=null,sS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mr],delete e[Gu],delete e[nm],delete e[wT],delete e[TT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function oS(n){return n.tag===5||n.tag===3||n.tag===4}function pv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||oS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _m(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=nh));else if(i!==4&&(n=n.child,n!==null))for(_m(n,e,t),n=n.sibling;n!==null;)_m(n,e,t),n=n.sibling}function vm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(vm(n,e,t),n=n.sibling;n!==null;)vm(n,e,t),n=n.sibling}var En=null,ar=!1;function hs(n,e,t){for(t=t.child;t!==null;)aS(n,e,t),t=t.sibling}function aS(n,e,t){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(Oh,t)}catch{}switch(t.tag){case 5:In||Da(t,e);case 6:var i=En,r=ar;En=null,hs(n,e,t),En=i,ar=r,En!==null&&(ar?(n=En,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):En.removeChild(t.stateNode));break;case 18:En!==null&&(ar?(n=En,t=t.stateNode,n.nodeType===8?wd(n.parentNode,t):n.nodeType===1&&wd(n,t),ku(n)):wd(En,t.stateNode));break;case 4:i=En,r=ar,En=t.stateNode.containerInfo,ar=!0,hs(n,e,t),En=i,ar=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mm(t,e,o),r=r.next}while(r!==i)}hs(n,e,t);break;case 1:if(!In&&(Da(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){jt(t,e,a)}hs(n,e,t);break;case 21:hs(n,e,t);break;case 22:t.mode&1?(In=(i=In)||t.memoizedState!==null,hs(n,e,t),In=i):hs(n,e,t);break;default:hs(n,e,t)}}function mv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new HT),e.forEach(function(i){var r=ZT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function er(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,ar=!1;break e;case 3:En=a.stateNode.containerInfo,ar=!0;break e;case 4:En=a.stateNode.containerInfo,ar=!0;break e}a=a.return}if(En===null)throw Error(ae(160));aS(s,o,r),En=null,ar=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){jt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lS(e,n),e=e.sibling}function lS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(e,n),gr(n),i&4){try{vu(3,n,n.return),Wh(3,n)}catch(_){jt(n,n.return,_)}try{vu(5,n,n.return)}catch(_){jt(n,n.return,_)}}break;case 1:er(e,n),gr(n),i&512&&t!==null&&Da(t,t.return);break;case 5:if(er(e,n),gr(n),i&512&&t!==null&&Da(t,t.return),n.flags&32){var r=n.stateNode;try{Nu(r,"")}catch(_){jt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Py(r,s),Vp(a,o);var u=Vp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Uy(r,h):c==="dangerouslySetInnerHTML"?Iy(r,h):c==="children"?Nu(r,h):$0(r,c,h,u)}switch(a){case"input":Fp(r,s);break;case"textarea":Ly(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Ba(r,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ba(r,!!s.multiple,s.defaultValue,!0):Ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[Gu]=s}catch(_){jt(n,n.return,_)}}break;case 6:if(er(e,n),gr(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){jt(n,n.return,_)}}break;case 3:if(er(e,n),gr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ku(e.containerInfo)}catch(_){jt(n,n.return,_)}break;case 4:er(e,n),gr(n);break;case 13:er(e,n),gr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wg=tn())),i&4&&mv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(In=(u=In)||c,er(e,n),In=u):er(e,n),gr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(h=Te=c;Te!==null;){switch(f=Te,d=f.child,f.tag){case 0:case 11:case 14:case 15:vu(4,f,f.return);break;case 1:Da(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){jt(i,t,_)}}break;case 5:Da(f,f.return);break;case 22:if(f.memoizedState!==null){_v(h);continue}}d!==null?(d.return=f,Te=d):_v(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ny("display",o))}catch(_){jt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){jt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:er(e,n),gr(n),i&4&&mv(n);break;case 21:break;default:er(e,n),gr(n)}}function gr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(oS(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Nu(r,""),i.flags&=-33);var s=pv(n);vm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pv(n);_m(n,a,o);break;default:throw Error(ae(161))}}catch(l){jt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GT(n,e,t){Te=n,uS(n)}function uS(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=Pc;var u=In;if(Pc=o,(In=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?vv(r):l!==null?(l.return=o,Te=l):vv(r);for(;s!==null;)Te=s,uS(s),s=s.sibling;Te=r,Pc=a,In=u}gv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):gv(n)}}function gv(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||Wh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:or(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ev(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ev(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ku(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}In||e.flags&512&&gm(e)}catch(f){jt(e,e.return,f)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function _v(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function vv(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wh(4,e)}catch(l){jt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{gm(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{gm(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var WT=Math.ceil,dh=us.ReactCurrentDispatcher,Mg=us.ReactCurrentOwner,Yi=us.ReactCurrentBatchConfig,_t=0,yn=null,an=null,Tn=0,Si=0,Ia=to(0),fn=0,qu=null,Ho=0,$h=0,Eg=0,xu=null,ii=null,wg=0,ol=1/0,Hr=null,ph=!1,xm=null,Bs=null,Lc=!1,As=null,mh=0,yu=0,ym=null,bf=-1,Pf=0;function Qn(){return _t&6?tn():bf!==-1?bf:bf=tn()}function zs(n){return n.mode&1?_t&2&&Tn!==0?Tn&-Tn:CT.transition!==null?(Pf===0&&(Pf=Yy()),Pf):(n=Et,n!==0||(n=window.event,n=n===void 0?16:e1(n.type)),n):1}function pr(n,e,t,i){if(50<yu)throw yu=0,ym=null,Error(ae(185));lc(n,t,i),(!(_t&2)||n!==yn)&&(n===yn&&(!(_t&2)&&($h|=t),fn===4&&Es(n,Tn)),li(n,i),t===1&&_t===0&&!(e.mode&1)&&(ol=tn()+500,Hh&&no()))}function li(n,e){var t=n.callbackNode;Cw(n,e);var i=Qf(n,n===yn?Tn:0);if(i===0)t!==null&&C_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&C_(t),e===1)n.tag===0?AT(xv.bind(null,n)):x1(xv.bind(null,n)),MT(function(){!(_t&6)&&no()}),t=null;else{switch(jy(i)){case 1:t=K0;break;case 4:t=$y;break;case 16:t=Zf;break;case 536870912:t=Xy;break;default:t=Zf}t=_S(t,cS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function cS(n,e){if(bf=-1,Pf=0,_t&6)throw Error(ae(327));var t=n.callbackNode;if(Wa()&&n.callbackNode!==t)return null;var i=Qf(n,n===yn?Tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=gh(n,i);else{e=i;var r=_t;_t|=2;var s=hS();(yn!==n||Tn!==e)&&(Hr=null,ol=tn()+500,Ro(n,e));do try{YT();break}catch(a){fS(n,a)}while(!0);ug(),dh.current=s,_t=r,an!==null?e=0:(yn=null,Tn=0,e=fn)}if(e!==0){if(e===2&&(r=Yp(n),r!==0&&(i=r,e=Sm(n,r))),e===1)throw t=qu,Ro(n,0),Es(n,i),li(n,tn()),t;if(e===6)Es(n,i);else{if(r=n.current.alternate,!(i&30)&&!$T(r)&&(e=gh(n,i),e===2&&(s=Yp(n),s!==0&&(i=s,e=Sm(n,s))),e===1))throw t=qu,Ro(n,0),Es(n,i),li(n,tn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:po(n,ii,Hr);break;case 3:if(Es(n,i),(i&130023424)===i&&(e=wg+500-tn(),10<e)){if(Qf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Qn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=tm(po.bind(null,n,ii,Hr),e);break}po(n,ii,Hr);break;case 4:if(Es(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-dr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WT(i/1960))-i,10<i){n.timeoutHandle=tm(po.bind(null,n,ii,Hr),i);break}po(n,ii,Hr);break;case 5:po(n,ii,Hr);break;default:throw Error(ae(329))}}}return li(n,tn()),n.callbackNode===t?cS.bind(null,n):null}function Sm(n,e){var t=xu;return n.current.memoizedState.isDehydrated&&(Ro(n,e).flags|=256),n=gh(n,e),n!==2&&(e=ii,ii=t,e!==null&&Mm(e)),n}function Mm(n){ii===null?ii=n:ii.push.apply(ii,n)}function $T(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Es(n,e){for(e&=~Eg,e&=~$h,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-dr(e),i=1<<t;n[t]=-1,e&=~i}}function xv(n){if(_t&6)throw Error(ae(327));Wa();var e=Qf(n,0);if(!(e&1))return li(n,tn()),null;var t=gh(n,e);if(n.tag!==0&&t===2){var i=Yp(n);i!==0&&(e=i,t=Sm(n,i))}if(t===1)throw t=qu,Ro(n,0),Es(n,e),li(n,tn()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,po(n,ii,Hr),li(n,tn()),null}function Tg(n,e){var t=_t;_t|=1;try{return n(e)}finally{_t=t,_t===0&&(ol=tn()+500,Hh&&no())}}function Vo(n){As!==null&&As.tag===0&&!(_t&6)&&Wa();var e=_t;_t|=1;var t=Yi.transition,i=Et;try{if(Yi.transition=null,Et=1,n)return n()}finally{Et=i,Yi.transition=t,_t=e,!(_t&6)&&no()}}function Ag(){Si=Ia.current,Ft(Ia)}function Ro(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ST(t)),an!==null)for(t=an.return;t!==null;){var i=t;switch(og(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ih();break;case 3:rl(),Ft(oi),Ft(Hn),mg();break;case 5:pg(i);break;case 4:rl();break;case 13:Ft(Gt);break;case 19:Ft(Gt);break;case 10:cg(i.type._context);break;case 22:case 23:Ag()}t=t.return}if(yn=n,an=n=Hs(n.current,null),Tn=Si=e,fn=0,qu=null,Eg=$h=Ho=0,ii=xu=null,Eo!==null){for(e=0;e<Eo.length;e++)if(t=Eo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Eo=null}return n}function fS(n,e){do{var t=an;try{if(ug(),Af.current=hh,fh){for(var i=Xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fh=!1}if(zo=0,vn=un=Xt=null,_u=!1,Xu=0,Mg.current=null,t===null||t.return===null){fn=1,qu=e,an=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=ov(o);if(d!==null){d.flags&=-257,av(d,o,a,s,e),d.mode&1&&sv(s,u,e),e=d,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){sv(s,u,e),Cg();break e}l=Error(ae(426))}}else if(zt&&a.mode&1){var m=ov(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),av(m,o,a,s,e),ag(sl(l,a));break e}}s=l=sl(l,a),fn!==4&&(fn=2),xu===null?xu=[s]:xu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=j1(s,l,e);J_(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Bs===null||!Bs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=q1(s,a,e);J_(s,E);break e}}s=s.return}while(s!==null)}pS(t)}catch(A){e=A,an===t&&t!==null&&(an=t=t.return);continue}break}while(!0)}function hS(){var n=dh.current;return dh.current=hh,n===null?hh:n}function Cg(){(fn===0||fn===3||fn===2)&&(fn=4),yn===null||!(Ho&268435455)&&!($h&268435455)||Es(yn,Tn)}function gh(n,e){var t=_t;_t|=2;var i=hS();(yn!==n||Tn!==e)&&(Hr=null,Ro(n,e));do try{XT();break}catch(r){fS(n,r)}while(!0);if(ug(),_t=t,dh.current=i,an!==null)throw Error(ae(261));return yn=null,Tn=0,fn}function XT(){for(;an!==null;)dS(an)}function YT(){for(;an!==null&&!vw();)dS(an)}function dS(n){var e=gS(n.alternate,n,Si);n.memoizedProps=n.pendingProps,e===null?pS(n):an=e,Mg.current=null}function pS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zT(t,e),t!==null){t.flags&=32767,an=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,an=null;return}}else if(t=BT(t,e,Si),t!==null){an=t;return}if(e=e.sibling,e!==null){an=e;return}an=e=n}while(e!==null);fn===0&&(fn=5)}function po(n,e,t){var i=Et,r=Yi.transition;try{Yi.transition=null,Et=1,jT(n,e,t,i)}finally{Yi.transition=r,Et=i}return null}function jT(n,e,t,i){do Wa();while(As!==null);if(_t&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Rw(n,s),n===yn&&(an=yn=null,Tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lc||(Lc=!0,_S(Zf,function(){return Wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Yi.transition,Yi.transition=null;var o=Et;Et=1;var a=_t;_t|=4,Mg.current=null,VT(n,t),lS(t,n),pT(Jp),Jf=!!Qp,Jp=Qp=null,n.current=t,GT(t),xw(),_t=a,Et=o,Yi.transition=s}else n.current=t;if(Lc&&(Lc=!1,As=n,mh=r),s=n.pendingLanes,s===0&&(Bs=null),Mw(t.stateNode),li(n,tn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ph)throw ph=!1,n=xm,xm=null,n;return mh&1&&n.tag!==0&&Wa(),s=n.pendingLanes,s&1?n===ym?yu++:(yu=0,ym=n):yu=0,no(),null}function Wa(){if(As!==null){var n=jy(mh),e=Yi.transition,t=Et;try{if(Yi.transition=null,Et=16>n?16:n,As===null)var i=!1;else{if(n=As,As=null,mh=0,_t&6)throw Error(ae(331));var r=_t;for(_t|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:vu(8,c,s)}var h=c.child;if(h!==null)h.return=c,Te=h;else for(;Te!==null;){c=Te;var f=c.sibling,d=c.return;if(sS(c),c===u){Te=null;break}if(f!==null){f.return=d,Te=f;break}Te=d}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Te=p;break e}Te=s.return}}var v=n.current;for(Te=v;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wh(9,a)}}catch(A){jt(a,a.return,A)}if(a===o){Te=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Te=E;break e}Te=a.return}}if(_t=r,no(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(Oh,n)}catch{}i=!0}return i}finally{Et=t,Yi.transition=e}}return!1}function yv(n,e,t){e=sl(t,e),e=j1(n,e,1),n=ks(n,e,1),e=Qn(),n!==null&&(lc(n,1,e),li(n,e))}function jt(n,e,t){if(n.tag===3)yv(n,n,t);else for(;e!==null;){if(e.tag===3){yv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bs===null||!Bs.has(i))){n=sl(t,n),n=q1(e,n,1),e=ks(e,n,1),n=Qn(),e!==null&&(lc(e,1,n),li(e,n));break}}e=e.return}}function qT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Qn(),n.pingedLanes|=n.suspendedLanes&t,yn===n&&(Tn&t)===t&&(fn===4||fn===3&&(Tn&130023424)===Tn&&500>tn()-wg?Ro(n,0):Eg|=t),li(n,e)}function mS(n,e){e===0&&(n.mode&1?(e=Sc,Sc<<=1,!(Sc&130023424)&&(Sc=4194304)):e=1);var t=Qn();n=ns(n,e),n!==null&&(lc(n,e,t),li(n,t))}function KT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),mS(n,t)}function ZT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),mS(n,t)}var gS;gS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||oi.current)ri=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ri=!1,kT(n,e,t);ri=!!(n.flags&131072)}else ri=!1,zt&&e.flags&1048576&&y1(e,oh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rf(n,e),n=e.pendingProps;var r=tl(e,Hn.current);Ga(e,t),r=_g(null,e,i,n,r,t);var s=vg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ai(i)?(s=!0,rh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hg(e),r.updater=Gh,e.stateNode=r,r._reactInternals=e,lm(e,i,n,t),e=fm(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&sg(e),Xn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Rf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JT(i),n=or(i,n),r){case 0:e=cm(null,e,i,n,t);break e;case 1:e=cv(null,e,i,n,t);break e;case 11:e=lv(null,e,i,n,t);break e;case 14:e=uv(null,e,i,or(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),cm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),cv(n,e,i,r,t);case 3:e:{if(J1(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A1(n,e),uh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=sl(Error(ae(423)),e),e=fv(n,e,i,t,r);break e}else if(i!==r){r=sl(Error(ae(424)),e),e=fv(n,e,i,t,r);break e}else for(Ai=Fs(e.stateNode.containerInfo.firstChild),bi=e,zt=!0,lr=null,t=w1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nl(),i===r){e=is(n,e,t);break e}Xn(n,e,i,t)}e=e.child}return e;case 5:return C1(e),n===null&&sm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,em(i,r)?o=null:s!==null&&em(i,s)&&(e.flags|=32),Q1(n,e),Xn(n,e,o,t),e.child;case 6:return n===null&&sm(e),null;case 13:return eS(n,e,t);case 4:return dg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=il(e,null,i,t):Xn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),lv(n,e,i,r,t);case 7:return Xn(n,e,e.pendingProps,t),e.child;case 8:return Xn(n,e,e.pendingProps.children,t),e.child;case 12:return Xn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Pt(ah,i._currentValue),i._currentValue=o,s!==null)if(mr(s.value,o)){if(s.children===r.children&&!oi.current){e=is(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),om(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),om(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ga(e,t),r=qi(r),i=i(r),e.flags|=1,Xn(n,e,i,t),e.child;case 14:return i=e.type,r=or(i,e.pendingProps),r=or(i.type,r),uv(n,e,i,r,t);case 15:return K1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),Rf(n,e),e.tag=1,ai(i)?(n=!0,rh(e)):n=!1,Ga(e,t),Y1(e,i,r),lm(e,i,r,t),fm(null,e,i,!0,n,t);case 19:return tS(n,e,t);case 22:return Z1(n,e,t)}throw Error(ae(156,e.tag))};function _S(n,e){return Wy(n,e)}function QT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(n,e,t,i){return new QT(n,e,t,i)}function Rg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JT(n){if(typeof n=="function")return Rg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y0)return 11;if(n===j0)return 14}return 2}function Hs(n,e){var t=n.alternate;return t===null?(t=Wi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Rg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ea:return bo(t.children,r,s,e);case X0:o=8,r|=8;break;case Dp:return n=Wi(12,t,e,r|2),n.elementType=Dp,n.lanes=s,n;case Ip:return n=Wi(13,t,e,r),n.elementType=Ip,n.lanes=s,n;case Np:return n=Wi(19,t,e,r),n.elementType=Np,n.lanes=s,n;case Cy:return Xh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ty:o=10;break e;case Ay:o=9;break e;case Y0:o=11;break e;case j0:o=14;break e;case ys:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Wi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function bo(n,e,t,i){return n=Wi(7,n,i,e),n.lanes=t,n}function Xh(n,e,t,i){return n=Wi(22,n,i,e),n.elementType=Cy,n.lanes=t,n.stateNode={isHidden:!1},n}function Dd(n,e,t){return n=Wi(6,n,null,e),n.lanes=t,n}function Id(n,e,t){return e=Wi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function eA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bg(n,e,t,i,r,s,o,a,l){return n=new eA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hg(s),n}function tA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ma,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function vS(n){if(!n)return js;n=n._reactInternals;e:{if(Ko(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ai(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(ai(t))return v1(n,t,e)}return e}function xS(n,e,t,i,r,s,o,a,l){return n=bg(t,i,!0,n,r,s,o,a,l),n.context=vS(null),t=n.current,i=Qn(),r=zs(t),s=Zr(i,r),s.callback=e??null,ks(t,s,r),n.current.lanes=r,lc(n,r,i),li(n,i),n}function Yh(n,e,t,i){var r=e.current,s=Qn(),o=zs(r);return t=vS(t),e.context===null?e.context=t:e.pendingContext=t,e=Zr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ks(r,e,o),n!==null&&(pr(n,r,o,s),Tf(n,r,o)),o}function _h(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Pg(n,e){Sv(n,e),(n=n.alternate)&&Sv(n,e)}function nA(){return null}var yS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lg(n){this._internalRoot=n}jh.prototype.render=Lg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));Yh(n,e,null,null)};jh.prototype.unmount=Lg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Vo(function(){Yh(null,n,null,null)}),e[ts]=null}};function jh(n){this._internalRoot=n}jh.prototype.unstable_scheduleHydration=function(n){if(n){var e=Zy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ms.length&&e!==0&&e<Ms[t].priority;t++);Ms.splice(t,0,n),t===0&&Jy(n)}};function Dg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function iA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_h(o);s.call(u)}}var o=xS(e,i,n,0,null,!1,!1,"",Mv);return n._reactRootContainer=o,n[ts]=o.current,Hu(n.nodeType===8?n.parentNode:n),Vo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_h(l);a.call(u)}}var l=bg(n,0,!1,null,null,!1,!1,"",Mv);return n._reactRootContainer=l,n[ts]=l.current,Hu(n.nodeType===8?n.parentNode:n),Vo(function(){Yh(e,l,t,i)}),l}function Kh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_h(o);a.call(l)}}Yh(e,o,n,r)}else o=iA(t,e,n,r,i);return _h(o)}qy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=eu(e.pendingLanes);t!==0&&(Z0(e,t|1),li(e,tn()),!(_t&6)&&(ol=tn()+500,no()))}break;case 13:Vo(function(){var i=ns(n,1);if(i!==null){var r=Qn();pr(i,n,1,r)}}),Pg(n,1)}};Q0=function(n){if(n.tag===13){var e=ns(n,134217728);if(e!==null){var t=Qn();pr(e,n,134217728,t)}Pg(n,134217728)}};Ky=function(n){if(n.tag===13){var e=zs(n),t=ns(n,e);if(t!==null){var i=Qn();pr(t,n,e,i)}Pg(n,e)}};Zy=function(){return Et};Qy=function(n,e){var t=Et;try{return Et=n,e()}finally{Et=t}};Wp=function(n,e,t){switch(e){case"input":if(Fp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=zh(i);if(!r)throw Error(ae(90));by(i),Fp(i,r)}}}break;case"textarea":Ly(n,t);break;case"select":e=t.value,e!=null&&Ba(n,!!t.multiple,e,!1)}};ky=Tg;By=Vo;var rA={usingClientEntryPoint:!1,Events:[cc,Ca,zh,Oy,Fy,Tg]},Ul={findFiberByHostInstance:Mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sA={bundleType:Ul.bundleType,version:Ul.version,rendererPackageName:Ul.rendererPackageName,rendererConfig:Ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:us.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vy(n),n===null?null:n.stateNode},findFiberByHostInstance:Ul.findFiberByHostInstance||nA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Oh=Dc.inject(sA),Rr=Dc}catch{}}Ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;Ni.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dg(e))throw Error(ae(200));return tA(n,e,null,t)};Ni.createRoot=function(n,e){if(!Dg(n))throw Error(ae(299));var t=!1,i="",r=yS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bg(n,1,!1,null,null,t,!1,i,r),n[ts]=e.current,Hu(n.nodeType===8?n.parentNode:n),new Lg(e)};Ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Vy(e),n=n===null?null:n.stateNode,n};Ni.flushSync=function(n){return Vo(n)};Ni.hydrate=function(n,e,t){if(!qh(e))throw Error(ae(200));return Kh(null,n,e,!0,t)};Ni.hydrateRoot=function(n,e,t){if(!Dg(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=yS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=xS(e,null,n,1,t??null,r,!1,s,o),n[ts]=e.current,Hu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new jh(e)};Ni.render=function(n,e,t){if(!qh(e))throw Error(ae(200));return Kh(null,n,e,!1,t)};Ni.unmountComponentAtNode=function(n){if(!qh(n))throw Error(ae(40));return n._reactRootContainer?(Vo(function(){Kh(null,null,n,!1,function(){n._reactRootContainer=null,n[ts]=null})}),!0):!1};Ni.unstable_batchedUpdates=Tg;Ni.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!qh(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Kh(n,e,t,!1,i)};Ni.version="18.3.1-next-f1338f8080-20240426";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(n){console.error(n)}}SS(),Sy.exports=Ni;var oA=Sy.exports,MS,Ev=oA;MS=Ev.createRoot,Ev.hydrateRoot;function Vr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ES(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},al={duration:.5,overwrite:!1,delay:0},Ig,kn,Ht,$i=1e8,bt=1/$i,Em=Math.PI*2,aA=Em/4,lA=0,wS=Math.sqrt,uA=Math.cos,cA=Math.sin,Sn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},rs=function(e){return typeof e=="number"},Ng=function(e){return typeof e>"u"},Dr=function(e){return typeof e=="object"},ui=function(e){return e!==!1},Ug=function(){return typeof window<"u"},Ic=function(e){return Kt(e)||Sn(e)},TS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,wm=/(?:-?\.?\d|\.)+/gi,AS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,CS=/[+-]=-?[.\d]+/,RS=/[^,'"\[\]\s]+/gi,fA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,vr,Tm,Og,Ii={},vh={},bS,PS=function(e){return(vh=Go(e,Ii))&&mi},Fg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ku=function(e,t){return!t&&console.warn(e)},LS=function(e,t){return e&&(Ii[e]=t)&&vh&&(vh[e]=t)||Ii},Zu=function(){return 0},hA={suppressEvents:!0,isStart:!0,kill:!1},Df={suppressEvents:!0,kill:!1},dA={suppressEvents:!0},kg={},Vs=[],Am={},DS,Ei={},Ud={},wv=30,If=[],Bg="",zg=function(e){var t=e[0],i,r;if(Dr(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=If.length;r--&&!If[r].targetTest(t););i=If[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new nM(e[r],i)))||e.splice(r,1);return e},Po=function(e){return e._gsap||zg(Xi(e))[0]._gsap},IS=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():Ng(i)&&e.getAttribute&&e.getAttribute(t)||i},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},xn=function(e){return Math.round(e*1e7)/1e7||0},$a=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},xh=function(){var e=Vs.length,t=Vs.slice(0),i,r;for(Am={},Vs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},NS=function(e,t,i,r){Vs.length&&!kn&&xh(),e.render(t,i,kn&&t<0&&(e._initted||e._startAt)),Vs.length&&!kn&&xh()},US=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(RS).length<2?t:Sn(e)?e.trim():e},OS=function(e){return e},Zi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},mA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Go=function(e,t){for(var i in t)e[i]=t[i];return e},Tv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},yh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Su=function(e){var t=e.parent||Wt,i=e.keyframes?mA(Bn(e.keyframes)):Zi;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},gA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},FS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Zh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},qs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_A=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cm=function(e,t,i,r){return e._startAt&&(kn?e._startAt.revert(Df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vA=function n(e){return!e||e._ts&&n(e.parent)},Av=function(e){return e._repeat?ll(e._tTime,e=e.duration()+e._rDelay)*e:0},ll=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Sh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qh=function(e){return e._end=xn(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Jh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=xn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qh(e),i._dirty||Lo(i,e)),e},kS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Sh(e.rawTime(),t),(!t._dur||hc(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),Lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},Er=function(e,t,i,r){return t.parent&&qs(t),t._start=xn((rs(i)?i:i||e!==Wt?ki(e,i,t):e._time)+t._delay),t._end=xn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),FS(e,t,"_first","_last",e._sort?"_start":0),Rm(t)||(e._recent=t),r||kS(e,t),e._ts<0&&Jh(e,e._tTime),e},BS=function(e,t){return(Ii.ScrollTrigger||Fg("scrollTrigger",t))&&Ii.ScrollTrigger.create(t,e)},zS=function(e,t,i,r,s){if(Vg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&DS!==wi.frame)return Vs.push(e),e._lazy=[s,r],1},xA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Rm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&xA(e)&&!(!e._initted&&Rm(e))||(e._ts<0||e._dp._ts<0)&&!Rm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=hc(0,e._tDur,t),c=ll(l,a),e._yoyo&&c&1&&(o=1-o),c!==ll(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||kn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&zS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Cm(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qs(e,1),!i&&!kn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},SA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ul=function(e,t,i,r){var s=e._repeat,o=xn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Jh(e,e._tTime=e._tDur*a),e.parent&&Qh(e),i||Lo(e.parent,e),e},Cv=function(e){return e instanceof qn?Lo(e):ul(e,e._dur)},MA={_start:0,endTime:Zu,totalDuration:Zu},ki=function n(e,t,i){var r=e.labels,s=e._recent||MA,o=e.duration()>=$i?s.endTime(!1):e._dur,a,l,u;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Mu=function(e,t,i){var r=rs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},io=function(e,t){return e||e===0?t(e):t},hc=function(e,t,i){return i<e?e:i>t?t:i},On=function(e,t){return!Sn(e)||!(t=fA.exec(e))?"":t[1]},EA=function(e,t,i){return io(i,function(r){return hc(e,t,r)})},bm=[].slice,HS=function(e,t){return e&&Dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dr(e[0]))&&!e.nodeType&&e!==vr},wA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||HS(r,1)?(s=i).push.apply(s,Xi(r)):i.push(r)})||i},Xi=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):Sn(e)&&!i&&(Tm||!cl())?bm.call((t||Og).querySelectorAll(e),0):Bn(e)?wA(e,i):HS(e)?bm.call(e,0):e?[e]:[]},Pm=function(e){return e=Xi(e)[0]||Ku("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Xi(t,i.querySelectorAll?i:i===e?Ku("Invalid scope")||Og.createElement("div"):e)}},VS=function(e){return e.sort(function(){return .5-Math.random()})},GS=function(e){if(Kt(e))return e;var t=Dr(e)?e:{each:e},i=Do(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return Sn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,v,x,E,A,S,M,C,L;if(!m){if(L=t.grid==="auto"?0:(t.grid||[1,$i])[1],!L){for(M=-$i;M<(M=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(m=o[_]=[],p=l?Math.min(L,_)*c-.5:r%L,v=L===$i?0:l?_*h/L-.5:r/L|0,M=0,C=$i,S=0;S<_;S++)x=S%L-p,E=v-(S/L|0),m[S]=A=u?Math.abs(u==="y"?E:x):wS(x*x+E*E),A>M&&(M=A),A<C&&(C=A);r==="random"&&VS(m),m.max=M-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(L>_?_-1:u?u==="y"?_/L:L:Math.max(L,_/L))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=On(t.amount||t.each)||0,i=i&&_<0?JS(i):i}return _=(m[f]-m.min)/m.max||0,xn(m.b+(i?i(_):_)*m.v)+m.u}},Lm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=xn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(rs(i)?0:On(i))}},WS=function(e,t){var i=Bn(e),r,s;return!i&&Dr(e)&&(r=i=e.radius||$i,e.values?(e=Xi(e.values),(s=!rs(e[0]))&&(r*=r)):e=Lm(e.increment)),io(t,i?Kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=$i,c=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||rs(o)?c:c+On(o)}:Lm(e))},$S=function(e,t,i,r){return io(Bn(e)?!t:i===!0?!!(i=0):!r,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},TA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},AA=function(e,t){return function(i){return e(parseFloat(i))+(t||On(i))}},CA=function(e,t,i){return YS(e,t,0,1,i)},XS=function(e,t,i){return io(i,function(r){return e[~~t(r)]})},RA=function n(e,t,i){var r=t-e;return Bn(e)?XS(e,n(0,e.length),t):io(i,function(s){return(r+(s-e)%r)%r+e})},bA=function n(e,t,i){var r=t-e,s=r*2;return Bn(e)?XS(e,n(0,e.length-1),t):io(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Qu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?RS:wm),i+=e.substr(t,r-t)+$S(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},YS=function(e,t,i,r,s){var o=t-e,a=r-i;return io(s,function(l){return i+((l-e)/o*a||0)})},PA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Sn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Go(Bn(e)?[]:{},e));if(!c){for(l in t)Hg.call(a,e,l,"get",t[l]);s=function(g){return $g(g,a)||(o?e.p:e)}}}return io(i,s)},Rv=function(e,t,i){var r=e.labels,s=$i,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=Ht,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Vs.length&&xh(),a&&(Ht=a),c=l?s.apply(u,l):s.call(u),Ht=o,c},nu=function(e){return qs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kn),e.progress()<1&&Ci(e,"onInterrupt"),e},Ua,jS=[],qS=function(e){if(e)if(e=!e.name&&e.default||e,Ug()||e.headless){var t=e.name,i=Kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Zu,render:$g,add:Hg,kill:XA,modifier:$A,rawVars:0},o={targetTest:0,get:0,getSetter:Wg,aliases:{},register:0};if(cl(),e!==r){if(Ei[t])return;Zi(r,Zi(yh(e,s),o)),Go(r.prototype,Go(s,yh(e,o))),Ei[r.prop=t]=r,e.targetTest&&(If.push(r),kg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}LS(t,r),e.register&&e.register(mi,r,fi)}else jS.push(e)},Rt=255,iu={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Od=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},KS=function(e,t,i){var r=e?rs(e)?[e>>16,e>>8&Rt,e&Rt]:0:iu.black,s,o,a,l,u,c,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),iu[e])r=iu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(wm),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Od(l+1/3,s,o),r[1]=Od(l,s,o),r[2]=Od(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(AS),i&&r.length<4&&(r[3]=1),r}else r=e.match(wm)||iu.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(d=h-f,u=c>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ZS=function(e){var t=[],i=[],r=-1;return e.split(Gs).forEach(function(s){var o=s.match(Na)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},bv=function(e,t,i){var r="",s=(e+r).match(Gs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=KS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=ZS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Gs,"1").split(Na),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Gs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Gs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in iu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),LA=/hsl[a]?\(/,QS=function(e){var t=e.join(" "),i;if(Gs.lastIndex=0,Gs.test(t))return i=LA.test(t),e[1]=bv(e[1],i),e[0]=bv(e[0],i,ZS(e[1])),!0},Ju,wi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,d,g=function _(m){var p=n()-r,v=m===!0,x,E,A,S;if((p>e||p<0)&&(i+=p-t),r+=p,A=r-i,x=A-o,(x>0||v)&&(S=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),E=1),v||(l=u(_)),E)for(d=0;d<a.length;d++)a[d](A,f,S,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){bS&&(!Tm&&Ug()&&(vr=Tm=window,Og=vr.document||{},Ii.gsap=mi,(vr.gsapVersions||(vr.gsapVersions=[])).push(mi.version),PS(vh||vr.GreenSockGlobals||!vr.gsap&&vr||{}),jS.forEach(qS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ju=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ju=0,u=Zu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var x=p?function(E,A,S,M){m(E,A,S,M),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),cl(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),cl=function(){return!Ju&&wi.wake()},mt={},DA=/^[\d.\-M][\d.\-,\s]/,IA=/["']/g,NA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(IA,"").trim():+u,r=l.substr(a+1).trim();return t},UA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},OA=function(e){var t=(e+"").split("("),i=mt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[NA(t[1])]:UA(e).split(",").map(US)):mt._CE&&DA.test(e)?mt._CE("",e):i},JS=function(e){return function(t){return 1-e(1-t)}},eM=function n(e,t){for(var i=e._first,r;i;)i instanceof qn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Do=function(e,t){return e&&(Kt(e)?e:mt[e]||OA(e))||t},Zo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ci(e,function(a){mt[a]=Ii[a]=s,mt[o=a.toLowerCase()]=i;for(var l in s)mt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[a+"."+l]=s[l]}),s},tM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Em*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*cA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:tM(a);return s=Em/s,l.config=function(u,c){return n(e,u,c)},l},kd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:tM(i);return r.config=function(s){return n(e,s)},r};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Zo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;Zo("Elastic",Fd("in"),Fd("out"),Fd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Zo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Zo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Zo("Circ",function(n){return-(wS(1-n*n)-1)});Zo("Sine",function(n){return n===1?1:-uA(n*aA)+1});Zo("Back",kd("in"),kd("out"),kd());mt.SteppedEase=mt.steps=Ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*hc(0,o,a)|0)+s)*i}}};al.ease=mt["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bg+=n+","+n+"Params,"});var nM=function(e,t){this.id=lA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:IS,this.set=t?t.getSetter:Wg},ec=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ul(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),Ju||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ul(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(cl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jh(this,i),!s._dp||s.parent||kS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Er(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),NS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Av(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Av(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ll(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Sh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(hc(-Math.abs(this._delay),this._tDur,s),r!==!1),Qh(this),_A(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Er(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dA);var r=kn;return kn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),kn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Cv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Cv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ki(this,i),ui(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ui(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Kt(i)?i:OS,a=function(){var u=r.then;r.then=null,Kt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){nu(this)},n}();Zi(ec.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var qn=function(n){ES(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ui(i.sortChildren),Wt&&Er(i.parent||Wt,Vr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&BS(Vr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Mu(0,arguments,this),this},t.from=function(r,s,o){return Mu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Mu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Su(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(r,s,ki(this,o),1),this},t.call=function(r,s,o){return Er(this,on.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new on(r,o,ki(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Su(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Su(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:xn(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,d,g,_,m,p,v,x,E,A,S,M;if(this!==Wt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,E=this._start,x=this._ts,p=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(S=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=xn(c%m),c===l?(_=this._repeat,f=u):(_=~~(c/m),_&&_===c/m&&(f=u,_--),f>u&&(f=u)),A=ll(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),S&&_&1&&(f=u-f,M=1),_!==A&&!this._lock){var C=S&&A&1,L=C===(S&&_&1);if(_<A&&(C=!C),a=C?0:c%u?u:c,this._lock=1,this.render(a||(M?0:xn(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,L&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;eM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=SA(this,xn(a),xn(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Ci(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=-bt);break}}d=g}else{d=this._last;for(var y=r<0?r:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||kn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=y?-bt:bt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=E,Qh(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&qs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ci(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(rs(s)||(s=ki(this,s,r)),!(r instanceof ec)){if(Bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Kt(r))r=on.delayedCall(0,r);else return this}return this!==r?Er(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-$i);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof on?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(Zh(this,r),r===this._recent&&(this._recent=this._last),Lo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xn(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ki(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=on.delayedCall(0,s||Zu,o);return a.data="isPause",this._hasPause=1,Er(this,a,ki(this,r))},t.removePause=function(r){var s=this._first;for(r=ki(this,r);s;)s._start===r&&s.data==="isPause"&&qs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Cs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Xi(r),l=this._first,u=rs(s),c;l;)l instanceof on?pA(l._targets,a)&&(u?(!Cs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ki(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=on.to(o,Zi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&ul(g,m,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Zi({startAt:{time:ki(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rv(this,ki(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rv(this,ki(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Lo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=$i,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Er(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ul(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Wt._ts&&(NS(Wt,Sh(r,Wt)),DS=wi.frame),wi.frame>=wv){wv+=Pi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Pi.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e}(ec);Zi(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var FA=function(e,t,i,r,s,o,a){var l=new fi(this._pt,e,t,0,1,lM,null,s),u=0,c=0,h,f,d,g,_,m,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Qu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Nd)||[];h=Nd.exec(r);)g=h[0],_=r.substring(u,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?$a(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=Nd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(CS.test(r)||p)&&(l.e=0),this._pt=l,l},Hg=function(e,t,i,r,s,o,a,l,u,c){Kt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Kt(h)?u?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,d=Kt(h)?u?VA:oM:Gg,g;if(Sn(r)&&(~r.indexOf("random(")&&(r=Qu(r)),r.charAt(1)==="="&&(g=$a(f,r)+(On(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Dm)return!isNaN(f*r)&&r!==""?(g=new fi(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?WA:aM,0,d),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Fg(t,r),FA.call(this,e,t,f,r,d,l||Pi.stringFilter,u))},kA=function(e,t,i,r,s){if(Kt(e)&&(e=Eu(e,s,t,i,r)),!Dr(e)||e.style&&e.nodeType||Bn(e)||TS(e))return Sn(e)?Eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Eu(e[a],s,t,i,r);return o},iM=function(e,t,i,r,s,o){var a,l,u,c;if(Ei[e]&&(a=new Ei[e]).init(s,a.rawVars?t[e]:kA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ua))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Cs,Dm,Vg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Ig,E=e.timeline,A,S,M,C,L,y,w,N,U,V,X,B,Y;if(E&&(!f||!s)&&(s="none"),e._ease=Do(s,al.ease),e._yEase=h?JS(Do(h===!0?s:h,al.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!E&&!!r.runBackwards,!E||f&&!r.stagger){if(N=m[0]?Po(m[0]).harness:0,B=N&&r[N.prop],A=yh(r,kg),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?Df:hA),_._lazy=0),o){if(qs(e._startAt=on.set(m,Zi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn||!a&&!d)&&e._startAt.revert(Df),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Zi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ui(l),immediateRender:a,stagger:0,parent:p},A),B&&(M[N.prop]=B),qs(e._startAt=on.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn?e._startAt.revert(Df):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ui(l)||l&&!g,S=0;S<m.length;S++){if(L=m[S],w=L._gsap||zg(m)[S]._gsap,e._ptLookup[S]=V={},Am[w.id]&&Vs.length&&xh(),X=v===m?S:v.indexOf(L),N&&(U=new N).init(L,B||A,e,X,v)!==!1&&(e._pt=C=new fi(e._pt,L,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(I){V[I]=C}),U.priority&&(y=1)),!N||B)for(M in A)Ei[M]&&(U=iM(M,A,e,X,L,v))?U.priority&&(y=1):V[M]=C=Hg.call(e,L,M,"get",A[M],X,v,0,r.stringFilter);e._op&&e._op[S]&&e.kill(L,e._op[S]),x&&e._pt&&(Cs=e,Wt.killTweensOf(L,V,e.globalTime(t)),Y=!e.parent,Cs=0),e._pt&&l&&(Am[w.id]=1)}y&&uM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&E.render($i,!0,!0)},BA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,d;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Dm=1,e.vars[t]="+=0",Vg(e,a),Dm=0,l?Ku(t+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)h=u[d],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=en(i)+On(h.e)),h.b&&(h.b=c.s+On(h.b))},zA=function(e,t){var i=e[0]?Po(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Go({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},HA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Eu=function(e,t,i,r,s){return Kt(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Qu(e):e},rM=Bg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sM={};ci(rM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return sM[n]=1});var on=function(n){ES(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Su(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=r.parent||Wt,x=(Bn(i)||TS(i)?rs(i[0]):"length"in r)?[i]:Xi(i),E,A,S,M,C,L,y,w;if(a._targets=x.length?zg(x):Ku("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ic(u)||Ic(c)){if(r=a.vars,E=a.timeline=new qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),E.kill(),E.parent=E._dp=Vr(a),E._start=0,f||Ic(u)||Ic(c)){if(M=x.length,y=f&&GS(f),Dr(f))for(C in f)~rM.indexOf(C)&&(w||(w={}),w[C]=f[C]);for(A=0;A<M;A++)S=yh(r,sM),S.stagger=0,p&&(S.yoyoEase=p),w&&Go(S,w),L=x[A],S.duration=+Eu(u,Vr(a),A,L,x),S.delay=(+Eu(c,Vr(a),A,L,x)||0)-a._delay,!f&&M===1&&S.delay&&(a._delay=c=S.delay,a._start+=c,S.delay=0),E.to(L,S,y?y(A,L,x):0),E._ease=mt.none;E.duration()?u=c=0:a.timeline=0}else if(g){Su(Zi(E.vars.defaults,{ease:"none"})),E._ease=Do(g.ease||r.ease||"none");var N=0,U,V,X;if(Bn(g))g.forEach(function(B){return E.to(x,B,">")}),E.duration();else{S={};for(C in g)C==="ease"||C==="easeEach"||HA(C,g[C],S,g.easeEach);for(C in S)for(U=S[C].sort(function(B,Y){return B.t-Y.t}),N=0,A=0;A<U.length;A++)V=U[A],X={ease:V.e,duration:(V.t-(A?U[A-1].t:0))/100*u},X[C]=V.v,E.to(x,X,N),N+=X.duration;E.duration()<u&&E.to({},{duration:u-E.duration()})}}u||a.duration(u=E.duration())}else a.timeline=0;return d===!0&&!Ig&&(Cs=Vr(a),Wt.killTweensOf(x),Cs=0),Er(v,Vr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===xn(v._time)&&ui(h)&&vA(Vr(a))&&v.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-c)||0)),m&&BS(Vr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-bt&&!c?l:r<bt?0:r,f,d,g,_,m,p,v,x,E;if(!u)yA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=xn(h%_),h===l?(g=this._repeat,f=u):(g=~~(h/_),g&&g===xn(h/_)&&(f=u,g--),f>u&&(f=u)),p=this._yoyo&&g&1,p&&(E=this._yEase,f=u-f),m=ll(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&eM(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(xn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(zS(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(E||this._ease)(f/u),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!g&&(Ci(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Cm(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Cm(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qs(this,1),!s&&!(c&&!a)&&(h||a||p)&&(Ci(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ju||wi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vg(this,u),c=this._ease(u/this._dur),BA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Jh(this,0),this.parent||FS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?nu(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Cs&&Cs.vars.overwrite!==!0)._first||nu(this),this.parent&&o!==this.timeline.totalDuration()&&ul(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Xi(r):a,u=this._ptLookup,c=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&gA(a,l))return s==="all"&&(this._pt=0),nu(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ci(s,function(v){return _[v]=1}),s=_),s=zA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Zh(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&nu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Mu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Mu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Wt.killTweensOf(r,s,o)},e}(ec);Zi(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(n){on[n]=function(){var e=new qn,t=bm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Gg=function(e,t,i){return e[t]=i},oM=function(e,t,i){return e[t](i)},VA=function(e,t,i,r){return e[t](r.fp,i)},GA=function(e,t,i){return e.setAttribute(t,i)},Wg=function(e,t){return Kt(e[t])?oM:Ng(e[t])&&e.setAttribute?GA:Gg},aM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},WA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},$g=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},$A=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},XA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Zh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},YA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},uM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},fi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||aM,this.d=l||this,this.set=u||Gg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=YA,this.m=i,this.mt=s,this.tween=r},n}();ci(Bg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return kg[n]=1});Ii.TweenMax=Ii.TweenLite=on;Ii.TimelineLite=Ii.TimelineMax=qn;Wt=new qn({sortChildren:!1,defaults:al,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=QS;var Io=[],Nf={},jA=[],Pv=0,qA=0,Bd=function(e){return(Nf[e]||jA).map(function(t){return t()})},Im=function(){var e=Date.now(),t=[];e-Pv>2&&(Bd("matchMediaInit"),Io.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=vr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Bd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Pv=e,Bd("matchMedia"))},cM=function(){function n(t,i){this.selector=i&&Pm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Kt(i)&&(s=r,r=i,i=Kt);var o=this,a=function(){var u=Ht,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Pm(s)),Ht=o,h=r.apply(o,arguments),Kt(h)&&o._r.push(h),Ht=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ht;Ht=null,i(this),Ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof on&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof qn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof on)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Io.length;o--;)Io[o].id===this.id&&Io.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),KA=function(){function n(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Dr(i)||(i={matches:i});var o=new cM(0,s||this.scope),a=o.conditions={},l,u,c;Ht&&!o.selector&&(o.selector=Ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=vr.matchMedia(i[u]),l&&(Io.indexOf(o)<0&&Io.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Im):l.addEventListener("change",Im)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Mh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return qS(r)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=Xi(e)[0]);var s=Po(e||{}).get,o=i?OS:US;return i==="native"&&(i=""),e&&(t?o((Ei[t]&&Ei[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ei[a]&&Ei[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Xi(e),e.length>1){var r=e.map(function(c){return mi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Ei[t],a=Po(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Ua._pt=0,h.init(e,i?c+i:c,Ua,0,[e]),h.render(1,h),Ua._pt&&$g(1,Ua)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,Go((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Do(e.ease,al.ease)),Tv(al,e||{})},config:function(e){return Tv(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ei[a]&&!Ii[a]&&Ku(t+" effect requires "+a+" plugin.")}),Ud[t]=function(a,l,u){return i(Xi(a),Zi(l||{},s),u)},o&&(qn.prototype[t]=function(a,l,u){return this.add(Ud[t](a,Dr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){mt[e]=Do(t)},parseEase:function(e,t){return arguments.length?Do(e,t):mt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qn(e),r,s;for(i.smoothChildTiming=ui(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof on&&r.vars.onComplete===r._targets[0]))&&Er(i,r,r._start-r._delay),r=s;return Er(Wt,i,0),i},context:function(e,t){return e?new cM(e,t):Ht},matchMedia:function(e){return new KA(e)},matchMediaRefresh:function(){return Io.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Im()},addEventListener:function(e,t){var i=Nf[e]||(Nf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Nf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:RA,wrapYoyo:bA,distribute:GS,random:$S,snap:WS,normalize:CA,getUnit:On,clamp:EA,splitColor:KS,toArray:Xi,selector:Pm,mapRange:YS,pipe:TA,unitize:AA,interpolate:PA,shuffle:VS},install:PS,effects:Ud,ticker:wi,updateRoot:qn.updateRoot,plugins:Ei,globalTimeline:Wt,core:{PropTween:fi,globals:LS,Tween:on,Timeline:qn,Animation:ec,getCache:Po,_removeLinkedListItem:Zh,reverting:function(){return kn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Ig=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Mh[n]=on[n]});wi.add(qn.updateRoot);Ua=Mh.to({},{duration:0});var ZA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},QA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=ZA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},zd=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},ci(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}QA(a,s)}}}},mi=Mh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)kn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zd("roundProps",Lm),zd("modifiers"),zd("snap",WS))||Mh;on.version=qn.version=mi.version="3.12.5";bS=1;Ug()&&cl();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lv,Rs,Xa,Xg,To,Dv,Yg,JA=function(){return typeof window<"u"},ss={},mo=180/Math.PI,Ya=Math.PI/180,na=Math.atan2,Iv=1e8,jg=/([A-Z])/g,e2=/(left|right|width|margin|padding|x)/i,t2=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},fM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s2=function(e,t,i){return e.style[t]=i},o2=function(e,t,i){return e.style.setProperty(t,i)},a2=function(e,t,i){return e._gsap[t]=i},l2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},u2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},c2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},$t="transform",hi=$t+"Origin",f2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ss&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wr(r,a)}):this.tfm[e]=o.x?o[e]:Wr(r,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return wr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf($t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=$t}(s||t)&&this.props.push(e,t,s[e])},dM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},h2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(jg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yg(),(!s||!s.isStart)&&!i[$t]&&(dM(i),r.zOrigin&&i[hi]&&(i[hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pM=function(e,t){var i={target:e,props:[],revert:h2,save:f2};return e._gsap||mi.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},mM,Um=function(e,t){var i=Rs.createElementNS?Rs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Rs.createElement(e);return i&&i.style?i:Rs.createElement(e)},Pr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,fl(t)||t,1)||""},Nv="O,Moz,ms,Ms,Webkit".split(","),fl=function(e,t,i){var r=t||To,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Nv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Nv[o]:"")+e},Om=function(){JA()&&window.document&&(Lv=window,Rs=Lv.document,Xa=Rs.documentElement,To=Um("div")||{style:{}},Um("div"),$t=fl($t),hi=$t+"Origin",To.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mM=!!fl("perspective"),Yg=mi.core.reverting,Xg=1)},Hd=function n(e){var t=Um("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Xa.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Xa.removeChild(t),this.style.cssText=s,o},Uv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},gM=function(e){var t;try{t=e.getBBox()}catch{t=Hd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hd||(t=Hd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Uv(e,["x","cx","x1"])||0,y:+Uv(e,["y","cy","y1"])||0,width:0,height:0}:t},_M=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gM(e))},Wo=function(e,t){if(t){var i=e.style,r;t in ss&&t!==hi&&(t=$t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(jg,"-$1").toLowerCase())):i.removeAttribute(t)}},bs=function(e,t,i,r,s,o){var a=new fi(e._pt,t,i,0,1,o?hM:fM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Ov={deg:1,rad:1,turn:1},d2={grid:1,flex:1},Ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=To.style,l=e2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Ov[r]||Ov[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&_M(e),(d||o==="%")&&(ss[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],en(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Rs||!_.appendChild)&&(_=Rs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===wi.time&&!m.uncache)return en(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,g=e[c],v?e.style[t]=v:Wo(e,t)}else(d||o==="%")&&!d2[Pr(_,"display")]&&(a.position=Pr(e,"position")),_===e&&(a.position="static"),_.appendChild(To),g=To[c],_.removeChild(To),a.position="absolute";return l&&d&&(m=Po(_),m.time=wi.time,m.width=_[c]),en(f?g*s/h:g&&s?h/g*s:0)},Wr=function(e,t,i,r){var s;return Xg||Om(),t in wr&&t!=="transform"&&(t=wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ss[t]&&t!=="transform"?(s=nc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wh(Pr(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Eh[t]&&Eh[t](e,t,i)||Pr(e,t)||IS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ks(e,t,s,i)+i:s},p2=function(e,t,i,r){if(!i||i==="none"){var s=fl(t,e,1),o=s&&Pr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Pr(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,lM),l=0,u=0,c,h,f,d,g,_,m,p,v,x,E,A;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Pr(e,t)||r,_?e.style[t]=_:Wo(e,t)),c=[i,r],QS(c),i=c[0],r=c[1],f=i.match(Na)||[],A=r.match(Na)||[],A.length){for(;h=Na.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(d=parseFloat(_)||0,E=_.substr((d+"").length),m.charAt(1)==="="&&(m=$a(d,m)+E),p=parseFloat(m),x=m.substr((p+"").length),l=Na.lastIndex-x.length,x||(x=x||Pi.units[t]||E,l===r.length&&(r+=x,a.e+=x)),E!==x&&(d=Ks(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?hM:fM;return CS.test(r)&&(a.e=0),this._pt=a,a},Fv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Fv[i]||i,t[1]=Fv[r]||r,t.join(" ")},g2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ss[a]&&(l=1,a=a==="transformOrigin"?hi:$t),Wo(i,a);l&&(Wo(i,$t),o&&(o.svg&&i.removeAttribute("transform"),nc(i,1),o.uncache=1,dM(r)))}},Eh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,i,0,0,g2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},tc=[1,0,0,1,0,0],vM={},xM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kv=function(e){var t=Pr(e,$t);return xM(t)?tc:t.substr(7).match(AS).map(en)},qg=function(e,t){var i=e._gsap||Po(e),r=e.style,s=kv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tc:s):(s===tc&&!e.offsetParent&&e!==Xa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Xa.appendChild(e)),s=kv(e),l?r.display=l:Wo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Xa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fm=function(e,t,i,r,s,o){var a=e._gsap,l=s||qg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),E=parseFloat(x[0])||0,A=parseFloat(x[1])||0,S,M,C,L;i?l!==tc&&(M=d*m-g*_)&&(C=E*(m/M)+A*(-_/M)+(_*v-m*p)/M,L=E*(-g/M)+A*(d/M)-(d*v-g*p)/M,E=C,A=L):(S=gM(e),E=S.x+(~x[0].indexOf("%")?E/100*S.width:E),A=S.y+(~(x[1]||x[0]).indexOf("%")?A/100*S.height:A)),r||r!==!1&&a.smooth?(p=E-u,v=A-c,a.xOffset=h+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[hi]="0px 0px",o&&(bs(o,a,"xOrigin",u,E),bs(o,a,"yOrigin",c,A),bs(o,a,"xOffset",h,a.xOffset),bs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+A)},nc=function(e,t){var i=e._gsap||new nM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Pr(e,hi)||"0",c,h,f,d,g,_,m,p,v,x,E,A,S,M,C,L,y,w,N,U,V,X,B,Y,I,Z,b,ne,Ee,We,q,te;return c=h=f=_=m=p=v=x=E=0,d=g=1,i.svg=!!(e.getCTM&&_M(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[$t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$t]!=="none"?l[$t]:"")),r.scale=r.rotate=r.translate="none"),M=qg(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Fm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),A=i.xOrigin||0,S=i.yOrigin||0,M!==tc&&(w=M[0],N=M[1],U=M[2],V=M[3],c=X=M[4],h=B=M[5],M.length===6?(d=Math.sqrt(w*w+N*N),g=Math.sqrt(V*V+U*U),_=w||N?na(N,w)*mo:0,v=U||V?na(U,V)*mo+_:0,v&&(g*=Math.abs(Math.cos(v*Ya))),i.svg&&(c-=A-(A*w+S*U),h-=S-(A*N+S*V))):(te=M[6],We=M[7],b=M[8],ne=M[9],Ee=M[10],q=M[11],c=M[12],h=M[13],f=M[14],C=na(te,Ee),m=C*mo,C&&(L=Math.cos(-C),y=Math.sin(-C),Y=X*L+b*y,I=B*L+ne*y,Z=te*L+Ee*y,b=X*-y+b*L,ne=B*-y+ne*L,Ee=te*-y+Ee*L,q=We*-y+q*L,X=Y,B=I,te=Z),C=na(-U,Ee),p=C*mo,C&&(L=Math.cos(-C),y=Math.sin(-C),Y=w*L-b*y,I=N*L-ne*y,Z=U*L-Ee*y,q=V*y+q*L,w=Y,N=I,U=Z),C=na(N,w),_=C*mo,C&&(L=Math.cos(C),y=Math.sin(C),Y=w*L+N*y,I=X*L+B*y,N=N*L-w*y,B=B*L-X*y,w=Y,X=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=en(Math.sqrt(w*w+N*N+U*U)),g=en(Math.sqrt(B*B+te*te)),C=na(X,B),v=Math.abs(C)>2e-4?C*mo:0,E=q?1/(q<0?-q:q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!xM(Pr(e,$t)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=en(d),i.scaleY=en(g),i.rotation=en(_)+a,i.rotationX=en(m)+a,i.rotationY=en(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=E+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[hi]=wh(u)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?v2:mM?yM:_2,i.uncache=0,i},wh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,i){var r=On(t);return en(parseFloat(t)+parseFloat(Ks(e,"x",i+"px",r)))+r},_2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yM(e,t)},ro="0deg",Ol="0px",so=") ",yM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,E="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==ro||c!==ro)){var S=parseFloat(c)*Ya,M=Math.sin(S),C=Math.cos(S),L;S=parseFloat(h)*Ya,L=Math.cos(S),o=Vd(v,o,M*L*-x),a=Vd(v,a,-Math.sin(S)*-x),l=Vd(v,l,C*L*-x+x)}m!==Ol&&(E+="perspective("+m+so),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(A||o!==Ol||a!==Ol||l!==Ol)&&(E+=l!==Ol||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+so),u!==ro&&(E+="rotate("+u+so),c!==ro&&(E+="rotateY("+c+so),h!==ro&&(E+="rotateX("+h+so),(f!==ro||d!==ro)&&(E+="skew("+f+", "+d+so),(g!==1||_!==1)&&(E+="scale("+g+", "+_+so),v.style[$t]=E||"translate(0, 0)"},v2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),E=parseFloat(a),A,S,M,C,L;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ya,u*=Ya,A=Math.cos(l)*h,S=Math.sin(l)*h,M=Math.sin(l-u)*-f,C=Math.cos(l-u)*f,u&&(c*=Ya,L=Math.tan(u-c),L=Math.sqrt(1+L*L),M*=L,C*=L,c&&(L=Math.tan(c),L=Math.sqrt(1+L*L),A*=L,S*=L)),A=en(A),S=en(S),M=en(M),C=en(C)):(A=h,C=f,S=M=0),(x&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(x=Ks(d,"x",o,"px"),E=Ks(d,"y",a,"px")),(g||_||m||p)&&(x=en(x+g-(g*A+_*M)+m),E=en(E+_-(g*S+_*C)+p)),(r||s)&&(L=d.getBBox(),x=en(x+r/100*L.width),E=en(E+s/100*L.height)),L="matrix("+A+","+S+","+M+","+C+","+x+","+E+")",d.setAttribute("transform",L),v&&(d.style[$t]=L)},x2=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mo:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Iv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Iv)%o-~~(u/o)*o)),e._pt=f=new fi(e._pt,t,i,r,u,n2),f.e=c,f.u="deg",e._props.push(i),f},Bv=function(e,t){for(var i in t)e[i]=t[i];return e},y2=function(e,t,i){var r=Bv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,d,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[$t]=t,a=nc(i,1),Wo(i,$t),i.setAttribute("transform",u)):(u=getComputedStyle(i)[$t],o[$t]=t,a=nc(i,1),o[$t]=u);for(l in ss)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=On(u),g=On(c),h=d!==g?Ks(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new fi(e._pt,a,l,h,f-h,Nm),e._pt.u=g||0,e._props.push(l));Bv(a,r)};ci("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Eh[e>1?"border"+n:n]=function(a,l,u,c,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Wr(a,g,u)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var SM={name:"css",register:Om,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,d,g,_,m,p,v,x,E,A,S,M,C;Xg||Om(),this.styles=this.styles||pM(e),C=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ei[_]&&iM(_,t,i,r,e,s)))){if(d=typeof c,g=Eh[_],d==="function"&&(c=c.call(i,r,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Qu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Gs.lastIndex=0,Gs.test(u)||(m=On(u),p=On(c)),p?m!==p&&(u=Ks(e,_,u,p)+p):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Sn(u)&&~u.indexOf("random(")&&(u=Qu(u)),On(u+"")||u==="auto"||(u+=Pi.units[_]||On(Wr(e,_))||""),(u+"").charAt(1)==="="&&(u=Wr(e,_))):u=Wr(e,_),f=parseFloat(u),v=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in wr&&(_==="autoAlpha"&&(f===1&&Wr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),bs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=wr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ss,x){if(this.styles.save(_),E||(A=e._gsap,A.renderTransform&&!t.parseTransform||nc(e,t.parseTransform),S=t.smoothOrigin!==!1&&A.smooth,E=this._pt=new fi(this._pt,a,$t,0,1,A.renderTransform,A,0,-1),E.dep=1),_==="scale")this._pt=new fi(this._pt,A,"scaleY",A.scaleY,(v?$a(A.scaleY,v+h):h)-A.scaleY||0,Nm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(hi,0,a[hi]),c=m2(c),A.svg?Fm(e,c,0,S,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==A.zOrigin&&bs(this,A,"zOrigin",A.zOrigin,p),bs(this,a,_,wh(u),wh(c)));continue}else if(_==="svgOrigin"){Fm(e,c,1,S,0,this);continue}else if(_ in vM){x2(this,A,_,f,v?$a(f,v+c):c);continue}else if(_==="smoothOrigin"){bs(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){y2(this,c,e);continue}}else _ in a||(_=fl(_)||_);if(x||(h||h===0)&&(f||f===0)&&!t2.test(c)&&_ in a)m=(u+"").substr((f+"").length),h||(h=0),p=On(c)||(_ in Pi.units?Pi.units[_]:m),m!==p&&(f=Ks(e,_,u,p)),this._pt=new fi(this._pt,x?A:a,_,f,(v?$a(f,v+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?r2:Nm),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=i2);else if(_ in a)p2.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Fg(_,c);continue}x||(_ in a?C.push(_,0,a[_]):C.push(_,1,u||e[_])),o.push(_)}}M&&uM(this)},render:function(e,t){if(t.tween._time||!Yg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wr,aliases:wr,getSetter:function(e,t,i){var r=wr[t];return r&&r.indexOf(",")<0&&(t=r),t in ss&&t!==hi&&(e._gsap.x||Wr(e,"x"))?i&&Dv===i?t==="scale"?l2:a2:(Dv=i||{})&&(t==="scale"?u2:c2):e.style&&!Ng(e.style[t])?s2:~t.indexOf("-")?o2:Wg(e,t)},core:{_removeProperty:Wo,_getMatrix:qg}};mi.utils.checkPrefix=fl;mi.core.getStyleSaver=pM;(function(n,e,t,i){var r=ci(n+","+e+","+t,function(s){ss[s]=1});ci(e,function(s){Pi.units[s]="deg",vM[s]=1}),wr[r[13]]=n+","+e,ci(i,function(s){var o=s.split(":");wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});mi.registerPlugin(SM);var Nn=mi.registerPlugin(SM)||mi;Nn.core.Tween;function S2(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function M2(n,e,t){return e&&S2(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Uf,Ti,Ps,Ls,ja,MM,go,wu,EM,qr,rr,wM,TM=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},AM=1,Oa=[],ot=[],Lr=[],Tu=Date.now,km=function(e,t){return t},E2=function(){var e=wu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ot),r.push.apply(r,Lr),ot=i,Lr=r,km=function(o,a){return t[o](a)}},Ws=function(e,t){return~Lr.indexOf(e)&&Lr[Lr.indexOf(e)+1][t]},Au=function(e){return!!~EM.indexOf(e)},Gn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Vn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Nc="scrollLeft",Uc="scrollTop",Bm=function(){return qr&&qr.isPressed||ot.cache++},Th=function(e,t){var i=function r(s){if(s||s===0){AM&&(Ti.history.scrollRestoration="manual");var o=qr&&qr.isPressed;s=r.v=Math.round(s)||(qr&&qr.iOS?1:0),e(s),r.cacheID=ot.cache,o&&km("ss",s)}else(t||ot.cache!==r.cacheID||km("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Kn={s:Nc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Th(function(n){return arguments.length?Ti.scrollTo(n,cn.sc()):Ti.pageXOffset||Ps[Nc]||Ls[Nc]||ja[Nc]||0})},cn={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kn,sc:Th(function(n){return arguments.length?Ti.scrollTo(Kn.sc(),n):Ti.pageYOffset||Ps[Uc]||Ls[Uc]||ja[Uc]||0})},ni=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Zs=function(e,t){var i=t.s,r=t.sc;Au(e)&&(e=Ps.scrollingElement||Ls);var s=ot.indexOf(e),o=r===cn.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Gn(e,"scroll",Bm);var a=ot[s+o],l=a||(ot[s+o]=Th(Ws(e,i),!0)||(Au(e)?r:Th(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},zm=function(e,t,i){var r=e,s=e,o=Tu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Tu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,p=Tu();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},Fl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},CM=function(){wu=wn.core.globals().ScrollTrigger,wu&&wu.core&&E2()},RM=function(e){return wn=e||TM(),!Uf&&wn&&typeof document<"u"&&document.body&&(Ti=window,Ps=document,Ls=Ps.documentElement,ja=Ps.body,EM=[Ti,Ps,Ls,ja],wn.utils.clamp,wM=wn.core.context||function(){},go="onpointerenter"in ja?"pointer":"mouse",MM=nn.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rr=nn.eventTypes=("ontouchstart"in Ls?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ls?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return AM=0},500),CM(),Uf=1),Uf};Kn.op=cn;ot.cache=0;var nn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Uf||RM(wn)||console.warn("Please gsap.registerPlugin(Observer)"),wu||CM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,E=i.onRelease,A=i.onRight,S=i.onLeft,M=i.onUp,C=i.onDown,L=i.onChangeX,y=i.onChangeY,w=i.onChange,N=i.onToggleX,U=i.onToggleY,V=i.onHover,X=i.onHoverEnd,B=i.onMove,Y=i.ignoreCheck,I=i.isNormalizer,Z=i.onGestureStart,b=i.onGestureEnd,ne=i.onWheel,Ee=i.onEnable,We=i.onDisable,q=i.onClick,te=i.scrollSpeed,ce=i.capture,ue=i.allowClicks,De=i.lockAxis,Re=i.onLockAxis;this.target=a=ni(a)||Ls,this.vars=i,d&&(d=wn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,te=te||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ti.getComputedStyle(ja).lineHeight)||22);var Ze,Ke,je,D,ft,He,$e,z=this,it=0,Fe=0,P=i.passive||!c,T=Zs(a,Kn),$=Zs(a,cn),J=T(),re=$(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&rr[0]==="pointerdown",Ae=Au(a),oe=a.ownerDocument||Ps,ge=[0,0,0],qe=[0,0,0],se=0,Me=function(){return se=Tu()},we=function(be,gt){return(z.event=be)&&d&&~d.indexOf(be.target)||gt&&Q&&be.pointerType!=="touch"||Y&&Y(be,gt)},ke=function(){z._vx.reset(),z._vy.reset(),Ke.pause(),h&&h(z)},ye=function(){var be=z.deltaX=zv(ge),gt=z.deltaY=zv(qe),_e=Math.abs(be)>=r,Be=Math.abs(gt)>=r;w&&(_e||Be)&&w(z,be,gt,ge,qe),_e&&(A&&z.deltaX>0&&A(z),S&&z.deltaX<0&&S(z),L&&L(z),N&&z.deltaX<0!=it<0&&N(z),it=z.deltaX,ge[0]=ge[1]=ge[2]=0),Be&&(C&&z.deltaY>0&&C(z),M&&z.deltaY<0&&M(z),y&&y(z),U&&z.deltaY<0!=Fe<0&&U(z),Fe=z.deltaY,qe[0]=qe[1]=qe[2]=0),(D||je)&&(B&&B(z),je&&(v(z),je=!1),D=!1),He&&!(He=!1)&&Re&&Re(z),ft&&(ne(z),ft=!1),Ze=0},Qe=function(be,gt,_e){ge[_e]+=be,qe[_e]+=gt,z._vx.update(be),z._vy.update(gt),u?Ze||(Ze=requestAnimationFrame(ye)):ye()},Ve=function(be,gt){De&&!$e&&(z.axis=$e=Math.abs(be)>Math.abs(gt)?"x":"y",He=!0),$e!=="y"&&(ge[2]+=be,z._vx.update(be,!0)),$e!=="x"&&(qe[2]+=gt,z._vy.update(gt,!0)),u?Ze||(Ze=requestAnimationFrame(ye)):ye()},ht=function(be){if(!we(be,1)){be=Fl(be,c);var gt=be.clientX,_e=be.clientY,Be=gt-z.x,Ue=_e-z.y,Xe=z.isDragging;z.x=gt,z.y=_e,(Xe||Math.abs(z.startX-gt)>=s||Math.abs(z.startY-_e)>=s)&&(v&&(je=!0),Xe||(z.isDragging=!0),Ve(Be,Ue),Xe||m&&m(z))}},O=z.onPress=function(Ne){we(Ne,1)||Ne&&Ne.button||(z.axis=$e=null,Ke.pause(),z.isPressed=!0,Ne=Fl(Ne),it=Fe=0,z.startX=z.x=Ne.clientX,z.startY=z.y=Ne.clientY,z._vx.reset(),z._vy.reset(),Gn(I?a:oe,rr[1],ht,P,!0),z.deltaX=z.deltaY=0,x&&x(z))},ie=z.onRelease=function(Ne){if(!we(Ne,1)){Vn(I?a:oe,rr[1],ht,!0);var be=!isNaN(z.y-z.startY),gt=z.isDragging,_e=gt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Be=Fl(Ne);!_e&&be&&(z._vx.reset(),z._vy.reset(),c&&ue&&wn.delayedCall(.08,function(){if(Tu()-se>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(oe.createEvent){var Ue=oe.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Ti,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(Ue)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&gt&&!I&&Ke.restart(!0),p&&gt&&p(z),E&&E(z,_e)}},K=function(be){return be.touches&&be.touches.length>1&&(z.isGesturing=!0)&&Z(be,z.isDragging)},ee=function(){return(z.isGesturing=!1)||b(z)},he=function(be){if(!we(be)){var gt=T(),_e=$();Qe((gt-J)*te,(_e-re)*te,1),J=gt,re=_e,h&&Ke.restart(!0)}},de=function(be){if(!we(be)){be=Fl(be,c),ne&&(ft=!0);var gt=(be.deltaMode===1?l:be.deltaMode===2?Ti.innerHeight:1)*g;Qe(be.deltaX*gt,be.deltaY*gt,0),h&&!I&&Ke.restart(!0)}},Je=function(be){if(!we(be)){var gt=be.clientX,_e=be.clientY,Be=gt-z.x,Ue=_e-z.y;z.x=gt,z.y=_e,D=!0,h&&Ke.restart(!0),(Be||Ue)&&Ve(Be,Ue)}},At=function(be){z.event=be,V(z)},kt=function(be){z.event=be,X(z)},st=function(be){return we(be)||Fl(be,c)&&q(z)};Ke=z._dc=wn.delayedCall(f||.25,ke).pause(),z.deltaX=z.deltaY=0,z._vx=zm(0,50,!0),z._vy=zm(0,50,!0),z.scrollX=T,z.scrollY=$,z.isDragging=z.isGesturing=z.isPressed=!1,wM(this),z.enable=function(Ne){return z.isEnabled||(Gn(Ae?oe:a,"scroll",Bm),o.indexOf("scroll")>=0&&Gn(Ae?oe:a,"scroll",he,P,ce),o.indexOf("wheel")>=0&&Gn(a,"wheel",de,P,ce),(o.indexOf("touch")>=0&&MM||o.indexOf("pointer")>=0)&&(Gn(a,rr[0],O,P,ce),Gn(oe,rr[2],ie),Gn(oe,rr[3],ie),ue&&Gn(a,"click",Me,!0,!0),q&&Gn(a,"click",st),Z&&Gn(oe,"gesturestart",K),b&&Gn(oe,"gestureend",ee),V&&Gn(a,go+"enter",At),X&&Gn(a,go+"leave",kt),B&&Gn(a,go+"move",Je)),z.isEnabled=!0,Ne&&Ne.type&&O(Ne),Ee&&Ee(z)),z},z.disable=function(){z.isEnabled&&(Oa.filter(function(Ne){return Ne!==z&&Au(Ne.target)}).length||Vn(Ae?oe:a,"scroll",Bm),z.isPressed&&(z._vx.reset(),z._vy.reset(),Vn(I?a:oe,rr[1],ht,!0)),Vn(Ae?oe:a,"scroll",he,ce),Vn(a,"wheel",de,ce),Vn(a,rr[0],O,ce),Vn(oe,rr[2],ie),Vn(oe,rr[3],ie),Vn(a,"click",Me,!0),Vn(a,"click",st),Vn(oe,"gesturestart",K),Vn(oe,"gestureend",ee),Vn(a,go+"enter",At),Vn(a,go+"leave",kt),Vn(a,go+"move",Je),z.isEnabled=z.isPressed=z.isDragging=!1,We&&We(z))},z.kill=z.revert=function(){z.disable();var Ne=Oa.indexOf(z);Ne>=0&&Oa.splice(Ne,1),qr===z&&(qr=0)},Oa.push(z),I&&Au(a)&&(qr=z),z.enable(_)},M2(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();nn.version="3.12.5";nn.create=function(n){return new nn(n)};nn.register=RM;nn.getAll=function(){return Oa.slice()};nn.getById=function(n){return Oa.filter(function(e){return e.vars.id===n})[0]};TM()&&wn.registerPlugin(nn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,ya,pt,Vt,ur,Ot,bM,Ah,ic,Cu,ru,Oc,Ln,ed,Hm,Yn,Hv,Vv,Sa,PM,Gd,LM,$n,Vm,DM,IM,xs,Gm,Kg,qa,Zg,Ch,Wm,Wd,Fc=1,Dn=Date.now,$d=Dn(),ji=0,su=0,Gv=function(e,t,i){var r=Mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Wv=function(e,t){return t&&(!Mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},w2=function n(){return su&&requestAnimationFrame(n)},$v=function(){return ed=1},Xv=function(){return ed=0},xr=function(e){return e},ou=function(e){return Math.round(e*1e5)/1e5||0},NM=function(){return typeof window<"u"},UM=function(){return Ce||NM()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},$o=function(e){return!!~bM.indexOf(e)},OM=function(e){return(e==="Height"?Zg:pt["inner"+e])||ur["client"+e]||Ot["client"+e]},FM=function(e){return Ws(e,"getBoundingClientRect")||($o(e)?function(){return zf.width=pt.innerWidth,zf.height=Zg,zf}:function(){return $r(e)})},T2=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ws(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?OM(s):e["client"+s])||0}},A2=function(e,t){return!t||~Lr.indexOf(e)?FM(e):function(){return zf}},Tr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ws(e,i))?o()-FM(e)()[s]:$o(e)?(ur[i]||Ot[i])-OM(r):e[i]-e["offset"+r])},kc=function(e,t){for(var i=0;i<Sa.length;i+=3)(!t||~t.indexOf(Sa[i+1]))&&e(Sa[i],Sa[i+1],Sa[i+2])},Mi=function(e){return typeof e=="string"},Zn=function(e){return typeof e=="function"},au=function(e){return typeof e=="number"},_o=function(e){return typeof e=="object"},kl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Xd=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ia=Math.abs,kM="left",BM="top",Qg="right",Jg="bottom",No="width",Uo="height",Ru="Right",bu="Left",Pu="Top",Lu="Bottom",sn="padding",Hi="margin",hl="Width",e_="Height",ln="px",Vi=function(e){return pt.getComputedStyle(e)},C2=function(e){var t=Vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Yv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$r=function(e,t){var i=t&&Vi(e)[Hm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Rh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},zM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},R2=function(e){return function(t){return Ce.utils.snap(zM(e),t)}},t_=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},b2=function(e){return function(t,i){return t_(zM(e))(t,i.direction)}},Bc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},_n=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},gn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},jv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hc={toggleActions:"play",anticipatePin:0},bh={top:0,left:0,center:.5,bottom:1,right:1},Of=function(e,t){if(Mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in bh?bh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Vt.createElement("div"),_=$o(i)||Ws(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Ot:i,v=e.indexOf("start")!==-1,x=v?u:c,E="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(E+=(r===cn?Qg:Jg)+":"+(o+parseFloat(f))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=E,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Ff(g,0,r,v),g},Ff=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+hl]=1,s["border"+a+hl]=0,s[i.p]=t+"px",Ce.set(e,s)},rt=[],$m={},rc,qv=function(){return Dn()-ji>34&&(rc||(rc=requestAnimationFrame(Qr)))},ra=function(){(!$n||!$n.isPressed||$n.startX>Ot.clientWidth)&&(ot.cache++,$n?rc||(rc=requestAnimationFrame(Qr)):Qr(),ji||Yo("scrollStart"),ji=Dn())},Yd=function(){IM=pt.innerWidth,DM=pt.innerHeight},lu=function(){ot.cache++,!Ln&&!LM&&!Vt.fullscreenElement&&!Vt.webkitFullscreenElement&&(!Vm||IM!==pt.innerWidth||Math.abs(pt.innerHeight-DM)>pt.innerHeight*.25)&&Ah.restart(!0)},Xo={},P2=[],HM=function n(){return gn(Ge,"scrollEnd",n)||Ao(!0)},Yo=function(e){return Xo[e]&&Xo[e].map(function(t){return t()})||P2},yi=[],VM=function(e){for(var t=0;t<yi.length;t+=5)(!e||yi[t+4]&&yi[t+4].query===e)&&(yi[t].style.cssText=yi[t+1],yi[t].getBBox&&yi[t].setAttribute("transform",yi[t+2]||""),yi[t+3].uncache=1)},n_=function(e,t){var i;for(Yn=0;Yn<rt.length;Yn++)i=rt[Yn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Ch=!0,t&&VM(t),t||Yo("revert")},GM=function(e,t){ot.cache++,(t||!jn)&&ot.forEach(function(i){return Zn(i)&&i.cacheID++&&(i.rec=0)}),Mi(e)&&(pt.history.scrollRestoration=Kg=e)},jn,Oo=0,Kv,L2=function(){if(Kv!==Oo){var e=Kv=Oo;requestAnimationFrame(function(){return e===Oo&&Ao(!0)})}},WM=function(){Ot.appendChild(qa),Zg=!$n&&qa.offsetHeight||pt.innerHeight,Ot.removeChild(qa)},Zv=function(e){return ic(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ao=function(e,t){if(ji&&!e&&!Ch){_n(Ge,"scrollEnd",HM);return}WM(),jn=Ge.isRefreshing=!0,ot.forEach(function(r){return Zn(r)&&++r.cacheID&&(r.rec=r())});var i=Yo("refreshInit");PM&&Ge.sort(),t||n_(),ot.forEach(function(r){Zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),Ch=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Wm=1,Zv(!0),rt.forEach(function(r){var s=Tr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Zv(!1),Wm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){Zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),GM(Kg,1),Ah.pause(),Oo++,jn=2,Qr(2),rt.forEach(function(r){return Zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=Ge.isRefreshing=!1,Yo("refresh")},Xm=0,kf=1,Du,Qr=function(e){if(e===2||!jn&&!Ch){Ge.isUpdating=!0,Du&&Du.update(0);var t=rt.length,i=Dn(),r=i-$d>=50,s=t&&rt[0].scroll();if(kf=Xm>s?-1:1,jn||(Xm=s),r&&(ji&&!ed&&i-ji>200&&(ji=0,Yo("scrollEnd")),ru=$d,$d=i),kf<0){for(Yn=t;Yn-- >0;)rt[Yn]&&rt[Yn].update(0,r);kf=1}else for(Yn=0;Yn<t;Yn++)rt[Yn]&&rt[Yn].update(0,r);Ge.isUpdating=!1}rc=0},Ym=[kM,BM,Jg,Qg,Hi+Lu,Hi+Ru,Hi+Pu,Hi+bu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bf=Ym.concat([No,Uo,"boxSizing","max"+hl,"max"+e_,"position",Hi,sn,sn+Pu,sn+Ru,sn+Lu,sn+bu]),D2=function(e,t,i){Ka(i);var r=e._gsap;if(r.spacerIsNative)Ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Ym.length,o=t.style,a=e.style,l;s--;)l=Ym[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Jg]=a[Qg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[No]=Rh(e,Kn)+ln,o[Uo]=Rh(e,cn)+ln,o[sn]=a[Hi]=a[BM]=a[kM]="0",Ka(r),a[No]=a["max"+hl]=i[No],a[Uo]=a["max"+e_]=i[Uo],a[sn]=i[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},I2=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(I2,"-$1").toLowerCase())}},Gc=function(e){for(var t=Bf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Bf[s],i[Bf[s]]);return r.t=e,r},N2=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},zf={left:0,top:0},Qv=function(e,t,i,r,s,o,a,l,u,c,h,f,d,g){Zn(e)&&(e=e(l)),Mi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Of("0"+e.substr(3),i):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),au(e))d&&(e=Ce.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ff(a,i,r,!0);else{Zn(t)&&(t=t(l));var x=(e||"0").split(" "),E,A,S,M;v=ni(t,l)||Ot,E=$r(v)||{},(!E||!E.left&&!E.top)&&Vi(v).display==="none"&&(M=v.style.display,v.style.display="block",E=$r(v),M?v.style.display=M:v.style.removeProperty("display")),A=Of(x[0],E[r.d]),S=Of(x[1]||"0",i),e=E[r.p]-u[r.p]-c+A+s-S,a&&Ff(a,S,r,i-S<20||a._isStart&&S>20),i-=i-S}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+i,L=o._isStart;m="scroll"+r.d2,Ff(o,C,r,L&&C>20||!L&&(h?Math.max(Ot[m],ur[m]):o.parentNode[m])<=C+1),h&&(u=$r(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+ln))}return d&&v&&(m=$r(v),d.seek(f),p=$r(v),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},U2=/(webkit|moz|length|cssText|inset)/i,Jv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ot){e._stOrig=s.cssText,a=Vi(e);for(o in a)!+o&&!U2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},$M=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},Wc=function(e,t,i){var r={};r[t.p]="+="+i,Ce.set(e,r)},ex=function(e,t){var i=Zs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,d=l.onComplete,g={};u=u||i();var _=$M(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&Qr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ce.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(e,"wheel",i.wheelHandler),Ge.isTouch&&_n(e,"touchmove",i.wheelHandler),s},Ge=function(){function n(t,i){ya||n.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Gm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!su){this.update=this.refresh=this.kill=xr;return}i=Yv(Mi(i)||au(i)||i.nodeType?{trigger:i}:i,Hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,E=s.snap,A=s.pinReparent,S=s.pinSpacer,M=s.containerAnimation,C=s.fastScrollEnd,L=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Kn:cn,w=!h&&h!==0,N=ni(i.scroller||pt),U=Ce.core.getCache(N),V=$o(N),X=("pinType"in i?i.pinType:Ws(N,"pinType")||V&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=w&&i.toggleActions.split(" "),I="markers"in i?i.markers:Hc.markers,Z=V?0:parseFloat(Vi(N)["border"+y.p2+hl])||0,b=this,ne=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Ee=T2(N,V,y),We=A2(N,V),q=0,te=0,ce=0,ue=Zs(N,y),De,Re,Ze,Ke,je,D,ft,He,$e,z,it,Fe,P,T,$,J,re,Q,Ae,oe,ge,qe,se,Me,we,ke,ye,Qe,Ve,ht,O,ie,K,ee,he,de,Je,At,kt;if(b._startClamp=b._endClamp=!1,b._dir=y,m*=45,b.scroller=N,b.scroll=M?M.time.bind(M):ue,Ke=ue(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(PM=1,i.refreshPriority===-9999&&(Du=b)),U.tweenScroll=U.tweenScroll||{top:ex(N,cn),left:ex(N,Kn)},b.tweenTo=De=U.tweenScroll[y.p],b.scrubDuration=function(_e){K=au(_e)&&_e,K?ie?ie.duration(_e):ie=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return p&&p(b)}}):(ie&&ie.progress(1).kill(),ie=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(h),ht=0,l||(l=r.vars.id)),E&&((!_o(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in Ot.style&&Ce.set(V?[Ot,ur]:N,{scrollBehavior:"auto"}),ot.forEach(function(_e){return Zn(_e)&&_e.target===(V?Vt.scrollingElement||ur:N)&&(_e.smooth=!1)}),Ze=Zn(E.snapTo)?E.snapTo:E.snapTo==="labels"?R2(r):E.snapTo==="labelsDirectional"?b2(r):E.directional!==!1?function(_e,Be){return t_(E.snapTo)(_e,Dn()-te<500?0:Be.direction)}:Ce.utils.snap(E.snapTo),ee=E.duration||{min:.1,max:2},ee=_o(ee)?Cu(ee.min,ee.max):Cu(ee,ee),he=Ce.delayedCall(E.delay||K/2||.1,function(){var _e=ue(),Be=Dn()-te<500,Ue=De.tween;if((Be||Math.abs(b.getVelocity())<10)&&!Ue&&!ed&&q!==_e){var Xe=(_e-D)/T,Zt=r&&!w?r.totalProgress():Xe,et=Be?0:(Zt-O)/(Dn()-ru)*1e3||0,Bt=Ce.utils.clamp(-Xe,1-Xe,ia(et/2)*et/.185),Qt=Xe+(E.inertia===!1?0:Bt),Dt,Ct,St=E,gi=St.onStart,It=St.onInterrupt,R=St.onComplete;if(Dt=Ze(Qt,b),au(Dt)||(Dt=Qt),Ct=Math.round(D+Dt*T),_e<=ft&&_e>=D&&Ct!==_e){if(Ue&&!Ue._initted&&Ue.data<=ia(Ct-_e))return;E.inertia===!1&&(Bt=Dt-Xe),De(Ct,{duration:ee(ia(Math.max(ia(Qt-Zt),ia(Dt-Zt))*.185/et/.05||0)),ease:E.ease||"power3",data:ia(Ct-_e),onInterrupt:function(){return he.restart(!0)&&It&&It(b)},onComplete:function(){b.update(),q=ue(),r&&(ie?ie.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),ht=O=r&&!w?r.totalProgress():b.progress,v&&v(b),R&&R(b)}},_e,Bt*T,Ct-_e-Bt*T),gi&&gi(b,De.tween)}}else b.isActive&&q!==_e&&he.restart(!0)}).pause()),l&&($m[l]=b),f=b.trigger=ni(f||d!==!0&&d),kt=f&&f._gsap&&f._gsap.stRevert,kt&&(kt=kt(b)),d=d===!0?f:ni(d),Mi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Hi||(g=!g&&d.parentNode&&d.parentNode.style&&Vi(d.parentNode).display==="flex"?!1:sn),b.pin=d,Re=Ce.core.getCache(d),Re.spacer?$=Re.pinState:(S&&(S=ni(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Re.spacerIsNative=!!S,S&&(Re.spacerState=Gc(S))),Re.spacer=Q=S||Vt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Re.pinState=$=Gc(d)),i.force3D!==!1&&Ce.set(d,{force3D:!0}),b.spacer=Q=Re.spacer,Ve=Vi(d),Me=Ve[g+y.os2],oe=Ce.getProperty(d),ge=Ce.quickSetter(d,y.a,ln),jd(d,Q,Ve),re=Gc(d)),I){Fe=_o(I)?Yv(I,jv):jv,z=Vc("scroller-start",l,N,y,Fe,0),it=Vc("scroller-end",l,N,y,Fe,0,z),Ae=z["offset"+y.op.d2];var st=ni(Ws(N,"content")||N);He=this.markerStart=Vc("start",l,st,y,Fe,Ae,0,M),$e=this.markerEnd=Vc("end",l,st,y,Fe,Ae,0,M),M&&(At=Ce.quickSetter([He,$e],y.a,ln)),!X&&!(Lr.length&&Ws(N,"fixedMarkers")===!0)&&(C2(V?Ot:N),Ce.set([z,it],{force3D:!0}),ke=Ce.quickSetter(z,y.a,ln),Qe=Ce.quickSetter(it,y.a,ln))}if(M){var Ne=M.vars.onUpdate,be=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),Ne&&Ne.apply(M,be||[])})}if(b.previous=function(){return rt[rt.indexOf(b)-1]},b.next=function(){return rt[rt.indexOf(b)+1]},b.revert=function(_e,Be){if(!Be)return b.kill(!0);var Ue=_e!==!1||!b.enabled,Xe=Ln;Ue!==b.isReverted&&(Ue&&(de=Math.max(ue(),b.scroll.rec||0),ce=b.progress,Je=r&&r.progress()),He&&[He,$e,z,it].forEach(function(Zt){return Zt.style.display=Ue?"none":"block"}),Ue&&(Ln=b,b.update(Ue)),d&&(!A||!b.isActive)&&(Ue?D2(d,Q,$):jd(d,Q,Vi(d),we)),Ue||b.update(Ue),Ln=Xe,b.isReverted=Ue)},b.refresh=function(_e,Be,Ue,Xe){if(!((Ln||!b.enabled)&&!Be)){if(d&&_e&&ji){_n(n,"scrollEnd",HM);return}!jn&&ne&&ne(b),Ln=b,De.tween&&!Ue&&(De.tween.kill(),De.tween=0),ie&&ie.pause(),_&&r&&r.revert({kill:!1}).invalidate(),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Zt=Ee(),et=We(),Bt=M?M.duration():Tr(N,y),Qt=T<=.01,Dt=0,Ct=Xe||0,St=_o(Ue)?Ue.end:i.end,gi=i.endTrigger||f,It=_o(Ue)?Ue.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),R=b.pinnedContainer=i.pinnedContainer&&ni(i.pinnedContainer,b),k=f&&Math.max(0,rt.indexOf(b))||0,H=k,G,F,le,xe,me,pe,Ie,ze,Pe,dt,lt,wt,pn;for(I&&_o(Ue)&&(wt=Ce.getProperty(z,y.p),pn=Ce.getProperty(it,y.p));H--;)pe=rt[H],pe.end||pe.refresh(0,1)||(Ln=b),Ie=pe.pin,Ie&&(Ie===f||Ie===d||Ie===R)&&!pe.isReverted&&(dt||(dt=[]),dt.unshift(pe),pe.revert(!0,!0)),pe!==rt[H]&&(k--,H--);for(Zn(It)&&(It=It(b)),It=Gv(It,"start",b),D=Qv(It,f,Zt,y,ue(),He,z,b,et,Z,X,Bt,M,b._startClamp&&"_startClamp")||(d?-.001:0),Zn(St)&&(St=St(b)),Mi(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(Mi(It)?It.split(" ")[0]:"")+St:(Dt=Of(St.substr(2),Zt),St=Mi(It)?It:(M?Ce.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,D):D)+Dt,gi=f)),St=Gv(St,"end",b),ft=Math.max(D,Qv(St||(gi?"100% 0":Bt),gi,Zt,y,ue()+Dt,$e,it,b,et,Z,X,Bt,M,b._endClamp&&"_endClamp"))||-.001,Dt=0,H=k;H--;)pe=rt[H],Ie=pe.pin,Ie&&pe.start-pe._pinPush<=D&&!M&&pe.end>0&&(G=pe.end-(b._startClamp?Math.max(0,pe.start):pe.start),(Ie===f&&pe.start-pe._pinPush<D||Ie===R)&&isNaN(It)&&(Dt+=G*(1-pe.progress)),Ie===d&&(Ct+=G));if(D+=Dt,ft+=Dt,b._startClamp&&(b._startClamp+=Dt),b._endClamp&&!jn&&(b._endClamp=ft||-.001,ft=Math.min(ft,Tr(N,y))),T=ft-D||(D-=.01)&&.001,Qt&&(ce=Ce.utils.clamp(0,1,Ce.utils.normalize(D,ft,de))),b._pinPush=Ct,He&&Dt&&(G={},G[y.a]="+="+Dt,R&&(G[y.p]="-="+ue()),Ce.set([He,$e],G)),d&&!(Wm&&b.end>=Tr(N,y)))G=Vi(d),xe=y===cn,le=ue(),qe=parseFloat(oe(y.a))+Ct,!Bt&&ft>1&&(lt=(V?Vt.scrollingElement||ur:N).style,lt={style:lt,value:lt["overflow"+y.a.toUpperCase()]},V&&Vi(Ot)["overflow"+y.a.toUpperCase()]!=="scroll"&&(lt.style["overflow"+y.a.toUpperCase()]="scroll")),jd(d,Q,G),re=Gc(d),F=$r(d,!0),ze=X&&Zs(N,xe?Kn:cn)(),g?(we=[g+y.os2,T+Ct+ln],we.t=Q,H=g===sn?Rh(d,y)+T+Ct:0,H&&(we.push(y.d,H+ln),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=H+ln)),Ka(we),R&&rt.forEach(function(ut){ut.pin===R&&ut.vars.pinSpacing!==!1&&(ut._subPinOffset=!0)}),X&&ue(de)):(H=Rh(d,y),H&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=H+ln)),X&&(me={top:F.top+(xe?le-D:ze)+ln,left:F.left+(xe?ze:le-D)+ln,boxSizing:"border-box",position:"fixed"},me[No]=me["max"+hl]=Math.ceil(F.width)+ln,me[Uo]=me["max"+e_]=Math.ceil(F.height)+ln,me[Hi]=me[Hi+Pu]=me[Hi+Ru]=me[Hi+Lu]=me[Hi+bu]="0",me[sn]=G[sn],me[sn+Pu]=G[sn+Pu],me[sn+Ru]=G[sn+Ru],me[sn+Lu]=G[sn+Lu],me[sn+bu]=G[sn+bu],J=N2($,me,A),jn&&ue(0)),r?(Pe=r._initted,Gd(1),r.render(r.duration(),!0,!0),se=oe(y.a)-qe+T+Ct,ye=Math.abs(T-se)>1,X&&ye&&J.splice(J.length-2,2),r.render(0,!0,!0),Pe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Gd(0)):se=T,lt&&(lt.value?lt.style["overflow"+y.a.toUpperCase()]=lt.value:lt.style.removeProperty("overflow-"+y.a));else if(f&&ue()&&!M)for(F=f.parentNode;F&&F!==Ot;)F._pinOffset&&(D-=F._pinOffset,ft-=F._pinOffset),F=F.parentNode;dt&&dt.forEach(function(ut){return ut.revert(!1,!0)}),b.start=D,b.end=ft,Ke=je=jn?de:ue(),!M&&!jn&&(Ke<de&&ue(de),b.scroll.rec=0),b.revert(!1,!0),te=Dn(),he&&(q=-1,he.restart(!0)),Ln=0,r&&w&&(r._initted||Je)&&r.progress()!==Je&&r.progress(Je||0,!0).render(r.time(),!0,!0),(Qt||ce!==b.progress||M||_)&&(r&&!w&&r.totalProgress(M&&D<-.001&&!ce?Ce.utils.normalize(D,ft,0):ce,!0),b.progress=Qt||(Ke-D)/T===ce?0:ce),d&&g&&(Q._pinOffset=Math.round(b.progress*se)),ie&&ie.invalidate(),isNaN(wt)||(wt-=Ce.getProperty(z,y.p),pn-=Ce.getProperty(it,y.p),Wc(z,y,wt),Wc(He,y,wt-(Xe||0)),Wc(it,y,pn),Wc($e,y,pn-(Xe||0))),Qt&&!jn&&b.update(),c&&!jn&&!P&&(P=!0,c(b),P=!1)}},b.getVelocity=function(){return(ue()-je)/(Dn()-ru)*1e3||0},b.endAnimation=function(){kl(b.callbackAnimation),r&&(ie?ie.progress(1):r.paused()?w||kl(r,b.direction<0,1):kl(r,r.reversed()))},b.labelToScroll=function(_e){return r&&r.labels&&(D||b.refresh()||D)+r.labels[_e]/r.duration()*T||0},b.getTrailing=function(_e){var Be=rt.indexOf(b),Ue=b.direction>0?rt.slice(0,Be).reverse():rt.slice(Be+1);return(Mi(_e)?Ue.filter(function(Xe){return Xe.vars.preventOverlaps===_e}):Ue).filter(function(Xe){return b.direction>0?Xe.end<=D:Xe.start>=ft})},b.update=function(_e,Be,Ue){if(!(M&&!Ue&&!_e)){var Xe=jn===!0?de:b.scroll(),Zt=_e?0:(Xe-D)/T,et=Zt<0?0:Zt>1?1:Zt||0,Bt=b.progress,Qt,Dt,Ct,St,gi,It,R,k;if(Be&&(je=Ke,Ke=M?ue():Xe,E&&(O=ht,ht=r&&!w?r.totalProgress():et)),m&&d&&!Ln&&!Fc&&ji&&(!et&&D<Xe+(Xe-je)/(Dn()-ru)*m?et=1e-4:et===1&&ft>Xe+(Xe-je)/(Dn()-ru)*m&&(et=.9999)),et!==Bt&&b.enabled){if(Qt=b.isActive=!!et&&et<1,Dt=!!Bt&&Bt<1,It=Qt!==Dt,gi=It||!!et!=!!Bt,b.direction=et>Bt?1:-1,b.progress=et,gi&&!Ln&&(Ct=et&&!Bt?0:et===1?1:Bt===1?2:3,w&&(St=!It&&Y[Ct+1]!=="none"&&Y[Ct+1]||Y[Ct],k=r&&(St==="complete"||St==="reset"||St in r))),L&&(It||k)&&(k||h||!r)&&(Zn(L)?L(b):b.getTrailing(L).forEach(function(le){return le.endAnimation()})),w||(ie&&!Ln&&!Fc?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",et,r._tTime/r._tDur):(ie.vars.totalProgress=et,ie.invalidate().restart())):r&&r.totalProgress(et,!!(Ln&&(te||_e)))),d){if(_e&&g&&(Q.style[g+y.os2]=Me),!X)ge(ou(qe+se*et));else if(gi){if(R=!_e&&et>Bt&&ft+1>Xe&&Xe+1>=Tr(N,y),A)if(!_e&&(Qt||R)){var H=$r(d,!0),G=Xe-D;Jv(d,Ot,H.top+(y===cn?G:0)+ln,H.left+(y===cn?0:G)+ln)}else Jv(d,Q);Ka(Qt||R?J:re),ye&&et<1&&Qt||ge(qe+(et===1&&!R?se:0))}}E&&!De.tween&&!Ln&&!Fc&&he.restart(!0),a&&(It||x&&et&&(et<1||!Wd))&&ic(a.targets).forEach(function(le){return le.classList[Qt||x?"add":"remove"](a.className)}),o&&!w&&!_e&&o(b),gi&&!Ln?(w&&(k&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(b)),(It||!Wd)&&(u&&It&&Xd(b,u),B[Ct]&&Xd(b,B[Ct]),x&&(et===1?b.kill(!1,1):B[Ct]=0),It||(Ct=et===1?1:3,B[Ct]&&Xd(b,B[Ct]))),C&&!Qt&&Math.abs(b.getVelocity())>(au(C)?C:2500)&&(kl(b.callbackAnimation),ie?ie.progress(1):kl(r,St==="reverse"?1:!et,1))):w&&o&&!Ln&&o(b)}if(Qe){var F=M?Xe/M.duration()*(M._caScrollDist||0):Xe;ke(F+(z._isFlipped?1:0)),Qe(F)}At&&At(-Xe/M.duration()*(M._caScrollDist||0))}},b.enable=function(_e,Be){b.enabled||(b.enabled=!0,_n(N,"resize",lu),V||_n(N,"scroll",ra),ne&&_n(n,"refreshInit",ne),_e!==!1&&(b.progress=ce=0,Ke=je=q=ue()),Be!==!1&&b.refresh())},b.getTween=function(_e){return _e&&De?De.tween:ie},b.setPositions=function(_e,Be,Ue,Xe){if(M){var Zt=M.scrollTrigger,et=M.duration(),Bt=Zt.end-Zt.start;_e=Zt.start+Bt*_e/et,Be=Zt.start+Bt*Be/et}b.refresh(!1,!1,{start:Wv(_e,Ue&&!!b._startClamp),end:Wv(Be,Ue&&!!b._endClamp)},Xe),b.update()},b.adjustPinSpacing=function(_e){if(we&&_e){var Be=we.indexOf(y.d)+1;we[Be]=parseFloat(we[Be])+_e+ln,we[1]=parseFloat(we[1])+_e+ln,Ka(we)}},b.disable=function(_e,Be){if(b.enabled&&(_e!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,Be||ie&&ie.pause(),de=0,Re&&(Re.uncache=1),ne&&gn(n,"refreshInit",ne),he&&(he.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!V)){for(var Ue=rt.length;Ue--;)if(rt[Ue].scroller===N&&rt[Ue]!==b)return;gn(N,"resize",lu),V||gn(N,"scroll",ra)}},b.kill=function(_e,Be){b.disable(_e,Be),ie&&!Be&&ie.kill(),l&&delete $m[l];var Ue=rt.indexOf(b);Ue>=0&&rt.splice(Ue,1),Ue===Yn&&kf>0&&Yn--,Ue=0,rt.forEach(function(Xe){return Xe.scroller===b.scroller&&(Ue=1)}),Ue||jn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Be||r.kill()),He&&[He,$e,z,it].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Du===b&&(Du=0),d&&(Re&&(Re.uncache=1),Ue=0,rt.forEach(function(Xe){return Xe.pin===d&&Ue++}),Ue||(Re.spacer=0)),i.onKill&&i.onKill(b)},rt.push(b),b.enable(!1,!1),kt&&kt(b),r&&r.add&&!T){var gt=b.update;b.update=function(){b.update=gt,D||ft||b.refresh()},Ce.delayedCall(.01,b.update),T=.01,D=ft=0}else b.refresh();d&&L2()},n.register=function(i){return ya||(Ce=i||UM(),NM()&&window.document&&n.enable(),ya=su),ya},n.defaults=function(i){if(i)for(var r in i)Hc[r]=i[r];return Hc},n.disable=function(i,r){su=0,rt.forEach(function(o){return o[r?"kill":"disable"](i)}),gn(pt,"wheel",ra),gn(Vt,"scroll",ra),clearInterval(Oc),gn(Vt,"touchcancel",xr),gn(Ot,"touchstart",xr),Bc(gn,Vt,"pointerdown,touchstart,mousedown",$v),Bc(gn,Vt,"pointerup,touchend,mouseup",Xv),Ah.kill(),kc(gn);for(var s=0;s<ot.length;s+=3)zc(gn,ot[s],ot[s+1]),zc(gn,ot[s],ot[s+2])},n.enable=function(){if(pt=window,Vt=document,ur=Vt.documentElement,Ot=Vt.body,Ce&&(ic=Ce.utils.toArray,Cu=Ce.utils.clamp,Gm=Ce.core.context||xr,Gd=Ce.core.suppressOverwrites||xr,Kg=pt.history.scrollRestoration||"auto",Xm=pt.pageYOffset,Ce.core.globals("ScrollTrigger",n),Ot)){su=1,qa=document.createElement("div"),qa.style.height="100vh",qa.style.position="absolute",WM(),w2(),nn.register(Ce),n.isTouch=nn.isTouch,xs=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vm=nn.isTouch===1,_n(pt,"wheel",ra),bM=[pt,Vt,ur,Ot],Ce.matchMedia?(n.matchMedia=function(l){var u=Ce.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Ce.addEventListener("matchMediaInit",function(){return n_()}),Ce.addEventListener("matchMediaRevert",function(){return VM()}),Ce.addEventListener("matchMedia",function(){Ao(0,1),Yo("matchMedia")}),Ce.matchMedia("(orientation: portrait)",function(){return Yd(),Yd})):console.warn("Requires GSAP 3.11.0 or later"),Yd(),_n(Vt,"scroll",ra);var i=Ot.style,r=i.borderTopStyle,s=Ce.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=$r(Ot),cn.m=Math.round(o.top+cn.sc())||0,Kn.m=Math.round(o.left+Kn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Oc=setInterval(qv,250),Ce.delayedCall(.5,function(){return Fc=0}),_n(Vt,"touchcancel",xr),_n(Ot,"touchstart",xr),Bc(_n,Vt,"pointerdown,touchstart,mousedown",$v),Bc(_n,Vt,"pointerup,touchend,mouseup",Xv),Hm=Ce.utils.checkPrefix("transform"),Bf.push(Hm),ya=Dn(),Ah=Ce.delayedCall(.2,Ao).pause(),Sa=[Vt,"visibilitychange",function(){var l=pt.innerWidth,u=pt.innerHeight;Vt.hidden?(Hv=l,Vv=u):(Hv!==l||Vv!==u)&&lu()},Vt,"DOMContentLoaded",Ao,pt,"load",Ao,pt,"resize",lu],kc(_n),rt.forEach(function(l){return l.enable(0,1)}),a=0;a<ot.length;a+=3)zc(gn,ot[a],ot[a+1]),zc(gn,ot[a],ot[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Wd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Oc)||(Oc=r)&&setInterval(qv,r),"ignoreMobileResize"in i&&(Vm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kc(gn)||kc(_n,i.autoRefreshEvents||"none"),LM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ni(i),o=ot.indexOf(s),a=$o(s);~o&&ot.splice(o,a?6:2),r&&(a?Lr.unshift(pt,r,Ot,r,ur,r):Lr.unshift(s,r))},n.clearMatchMedia=function(i){rt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Mi(i)?ni(i):i).getBoundingClientRect(),a=o[s?No:Uo]*r||0;return s?o.right-a>0&&o.left+a<pt.innerWidth:o.bottom-a>0&&o.top+a<pt.innerHeight},n.positionInViewport=function(i,r,s){Mi(i)&&(i=ni(i));var o=i.getBoundingClientRect(),a=o[s?No:Uo],l=r==null?a/2:r in bh?bh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/pt.innerWidth:(o.top+l)/pt.innerHeight},n.killAll=function(i){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Xo.killAll||[];Xo={},r.forEach(function(s){return s()})}},n}();Ge.version="3.12.5";Ge.saveStyles=function(n){return n?ic(n).forEach(function(e){if(e&&e.style){var t=yi.indexOf(e);t>=0&&yi.splice(t,5),yi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Gm())}}):yi};Ge.revert=function(n,e){return n_(!n,e)};Ge.create=function(n,e){return new Ge(n,e)};Ge.refresh=function(n){return n?lu():(ya||Ge.register())&&Ao(!0)};Ge.update=function(n){return++ot.cache&&Qr(n===!0?2:0)};Ge.clearScrollMemory=GM;Ge.maxScroll=function(n,e){return Tr(n,e?Kn:cn)};Ge.getScrollFunc=function(n,e){return Zs(ni(n),e?Kn:cn)};Ge.getById=function(n){return $m[n]};Ge.getAll=function(){return rt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ge.isScrolling=function(){return!!ji};Ge.snapDirectional=t_;Ge.addEventListener=function(n,e){var t=Xo[n]||(Xo[n]=[]);~t.indexOf(e)||t.push(e)};Ge.removeEventListener=function(n,e){var t=Xo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ge.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],d=Ce.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Zn(s)&&(s=s(),_n(Ge,"refresh",function(){return s=e.batchMax()})),ic(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ge.create(u))}),t};var tx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},qd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===ur&&n(Ot,t)},$c={auto:1,scroll:1},O2=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ot&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($c[(l=Vi(s)).overflowY]||$c[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!$o(s)&&($c[(l=Vi(s)).overflowY]||$c[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},XM=function(e,t,i,r){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&O2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&_n(Vt,nn.eventTypes[0],ix,!1,!0)},onDisable:function(){return gn(Vt,nn.eventTypes[0],ix,!0)}})},F2=/(input|label|select|textarea)/i,nx,ix=function(e){var t=F2.test(e.target.tagName);(t||nx)&&(e._gsapAllow=!0,nx=t)},k2=function(e){_o(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ni(e.target)||ur,c=Ce.core.globals().ScrollSmoother,h=c&&c.get(),f=xs&&(e.content&&ni(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Zs(u,cn),g=Zs(u,Kn),_=1,m=(nn.isTouch&&pt.visualViewport?pt.visualViewport.scale*pt.visualViewport.width:pt.outerWidth)/pt.innerWidth,p=0,v=Zn(r)?function(){return r(a)}:function(){return r||2.8},x,E,A=XM(u,e.type,!0,s),S=function(){return E=!1},M=xr,C=xr,L=function(){l=Tr(u,cn),C=Cu(xs?1:0,l),i&&(M=Cu(0,Tr(u,Kn))),x=Oo},y=function(){f._gsap.y=ou(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},w=function(){if(E){requestAnimationFrame(S);var I=ou(a.deltaY/2),Z=C(d.v-I);if(f&&Z!==d.v+d.offset){d.offset=Z-d.v;var b=ou((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",d.cacheID=ot.cache,Qr()}return!0}d.offset&&y(),E=!0},N,U,V,X,B=function(){L(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return xs&&Y.type==="touchmove"&&w()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){E=!1;var Y=_;_=ou((pt.visualViewport&&pt.visualViewport.scale||1)/m),N.pause(),Y!==_&&qd(u,_>1.01?!0:i?!1:"x"),U=g(),V=d(),L(),x=Oo},e.onRelease=e.onGestureStart=function(Y,I){if(d.offset&&y(),!I)X.restart(!0);else{ot.cache++;var Z=v(),b,ne;i&&(b=g(),ne=b+Z*.05*-Y.velocityX/.227,Z*=tx(g,b,ne,Tr(u,Kn)),N.vars.scrollX=M(ne)),b=d(),ne=b+Z*.05*-Y.velocityY/.227,Z*=tx(d,b,ne,Tr(u,cn)),N.vars.scrollY=C(ne),N.invalidate().duration(Z).play(.01),(xs&&N.vars.scrollY>=l||b>=l-1)&&Ce.to({},{onUpdate:B,duration:Z})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),Dn()-p>1e3&&(x=0,p=Dn())},e.onChange=function(Y,I,Z,b,ne){if(Oo!==x&&L(),I&&i&&g(M(b[2]===I?U+(Y.startX-Y.x):g()+I-b[1])),Z){d.offset&&y();var Ee=ne[2]===Z,We=Ee?V+Y.startY-Y.y:d()+Z-ne[1],q=C(We);Ee&&We!==q&&(V+=q-We),d(q)}(Z||I)&&Qr()},e.onEnable=function(){qd(u,i?!1:"x"),Ge.addEventListener("refresh",B),_n(pt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){qd(u,!0),gn(pt,"resize",B),Ge.removeEventListener("refresh",B),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=xs,xs&&!d()&&d(1),xs&&Ce.ticker.add(xr),X=a._dc,N=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$M(d,d(),function(){return N.pause()})},onUpdate:Qr,onComplete:X.vars.onComplete}),a};Ge.sort=function(n){return rt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ge.observe=function(n){return new nn(n)};Ge.normalizeScroll=function(n){if(typeof n>"u")return $n;if(n===!0&&$n)return $n.enable();if(n===!1){$n&&$n.kill(),$n=n;return}var e=n instanceof nn?n:k2(n);return $n&&$n.target===e.target&&$n.kill(),$o(e.target)&&($n=e),e};Ge.core={_getVelocityProp:zm,_inputObserver:XM,_scrollers:ot,_proxies:Lr,bridge:{ss:function(){ji||Yo("scrollStart"),ji=Dn()},ref:function(){return Ln}}};UM()&&Ce.registerPlugin(Ge);const Jr=[{key:"privacy",label:"Privacy / Social Withdrawal",marker:"■",adjectives:["Sealed","Inward","Silent","Unlisted","Distant","Folded","Windowless"],nouns:["Cell","Burrow","Hermitage","Quiet Unit","Enclosure","Retreat","Shell"],conditions:['Searches for "how to be alone" peak every winter.',"Noise-cancelling as a lifestyle.",'"Do not disturb" as a default setting.'],notes:["EVERY THRESHOLD ADDS DISTANCE.","NO ROOM IS VISIBLE FROM THE STREET.","ONE KEY. ONE OCCUPANT."]},{key:"recognition",label:"Recognition / Visibility",marker:"○",adjectives:["Glazed","Exposed","Lit","Watched","Mirrored","Open","Public"],nouns:["Vitrine","Stage","Showroom","Gallery Flat","Glass House","Display","Platform"],conditions:["The desire to be seen, measured in views.",'Searches for "how to go viral" every week.',"Followers as a unit of worth."],notes:["NO SURFACE OPAQUE ABOVE 900 MM.","EVERY ROOM HAS AN AUDIENCE.","VISIBILITY INDEX 100%."]},{key:"accumulation",label:"Accumulation / Possession",marker:"▲",adjectives:["Endless","Stacked","Filled","Expanding","Hoarded","Layered","Overflowing"],nouns:["Depot","Storehouse","Archive Flat","Vault","Annex","Stockroom","Repository"],conditions:["Self-storage is the fastest-growing type of real estate.","One-click purchase, every day.",'"Just in case" as a design brief.'],notes:["EVERY ROOM ADDED BECOMES A ROOM TO FILL.","STORAGE REPEATS WITHOUT END.","LIVING AREA FIXED. POSSESSIONS NOT."]},{key:"belonging",label:"Belonging / Dependency",marker:"●",adjectives:["Shared","Common","Collective","Gathered","Joint","Communal","Interlinked"],nouns:["Dormitory","Commons","Household","Table House","Hive","Assembly","Circle"],conditions:["Loneliness reported as a public-health concern.",'Searches for "how to make friends as an adult".',"Co-living as a rental category."],notes:["CURTAINS IN PLACE OF WALLS.","NO ROOM BELONGS TO ONE BODY.","ONE TABLE FOR EVERYONE."]},{key:"security",label:"Security / Surveillance",marker:"□",adjectives:["Guarded","Locked","Monitored","Fortified","Controlled","Alarmed","Armoured"],nouns:["Bunker","Keep","Safe House","Stronghold","Checkpoint","Watch House","Citadel"],conditions:["Smart doorbells and the fear of the outside.",'Searches for "is my neighbourhood safe".',"A camera for every room."],notes:["EVERY ROOM WATCHED.","EVERY THRESHOLD LOCKED.","WHO IS PROTECTED FROM WHOM?"]},{key:"escape",label:"Escape / Anonymity",marker:"△",adjectives:["Vanishing","Unrecorded","Fading","Hidden","Erased","Nameless","Absent"],nouns:["Room","Hideaway","Blind Spot","Shelter","Margin","Void","Passage"],conditions:['Searches for "how to disappear".',"Digital detox as a holiday.","The right to be forgotten."],notes:["THE FURTHER YOU GO, THE LESS IS RECORDED.","A ROOM ON NO DOCUMENT.","THE DRAWING ITSELF FORGETS."]}],rx=Object.fromEntries(Jr.map(n=>[n.key,n])),B2=n=>Jr.findIndex(e=>e.key===n),Le="#1d1d1b",Mt="#5f5f5a",Bl="#ECECEA",Se=n=>(Math.round(n*10)/10).toString();class Qo{constructor(e,t){fe(this,"under",[]);fe(this,"partitions",[]);fe(this,"structure",[]);fe(this,"over",[]);fe(this,"annotations",[]);this.w=e,this.h=t}wallH(e,t,i,r=20,s=[],o="solid"){return this.wall("h",e,t,i,r,s,o),this}wallV(e,t,i,r=20,s=[],o="solid"){return this.wall("v",e,t,i,r,s,o),this}room(e,t,i,r,s=20,o={},a="solid"){return this.wallH(t,e,e+i,s,o.n,a),this.wallH(t+r,e,e+i,s,o.s,a),this.wallV(e,t,t+r,s,o.w,a),this.wallV(e+i,t,t+r,s,o.e,a),this}wall(e,t,i,r,s,o=[],a){const l=(m,p)=>e==="h"?[m,t+p]:[t+p,m],u=(m,p,v,x)=>{const[E,A]=l(m,v),[S,M]=l(p,x);return{x:Math.min(E,S),y:Math.min(A,M),w:Math.abs(S-E),h:Math.abs(M-A)}},c=(m,p,v,x,E)=>{const[A,S]=l(m,p),[M,C]=l(v,x);return`<line x1="${Se(A)}" y1="${Se(S)}" x2="${Se(M)}" y2="${Se(C)}" ${E}/>`},h=[...o].sort((m,p)=>m.at-p.at),f=s/2,d=[];let g=i-f;for(const m of h)m.at>g&&d.push([g,m.at]),g=m.at+m.w;r+f>g&&d.push([g,r+f]);const _=a==="solid"?this.structure:this.partitions;for(const[m,p]of d){const v=u(m,p,-f,f);if(a==="solid")_.push(`<rect x="${Se(v.x)}" y="${Se(v.y)}" width="${Se(v.w)}" height="${Se(v.h)}" fill="${Le}"/>`);else if(a==="partition")_.push(`<rect x="${Se(v.x)}" y="${Se(v.y)}" width="${Se(v.w)}" height="${Se(v.h)}" fill="url(#hatch)" stroke="${Le}" stroke-width="1.6"/>`);else if(a==="glass")_.push(c(m,-f,p,-f,`stroke="${Le}" stroke-width="1.4"`)),_.push(c(m,f,p,f,`stroke="${Le}" stroke-width="1.4"`)),_.push(c(m,0,p,0,`stroke="${Le}" stroke-width="0.7"`));else{const x=a==="ghost"?'stroke-dasharray="14 8"':'stroke-dasharray="2 7" stroke-linecap="round"';_.push(`<rect x="${Se(v.x)}" y="${Se(v.y)}" width="${Se(v.w)}" height="${Se(v.h)}" fill="none" stroke="${Mt}" stroke-width="1.6" ${x}/>`)}}for(const m of h){const p=m.type??"door",v=m.at,x=m.at+m.w,E=`stroke="${Le}" stroke-width="1.2"`;if((a==="solid"||a==="partition")&&this.over.push(c(v,-f,v,f,E),c(x,-f,x,f,E)),p==="window")this.over.push(c(v,-f,x,-f,`stroke="${Le}" stroke-width="1.1"`),c(v,f,x,f,`stroke="${Le}" stroke-width="1.1"`),c(v,-2.5,x,-2.5,`stroke="${Le}" stroke-width="0.7"`),c(v,2.5,x,2.5,`stroke="${Le}" stroke-width="0.7"`));else if(p==="slot")this.over.push(c(v,0,x,0,`stroke="${Le}" stroke-width="0.8" stroke-dasharray="3 3"`));else if(p==="door"||p==="hidden"){const A=m.swing??1,S=m.hinge==="end"?x:v,M=m.hinge==="end"?v:x;this.over.push(this.doorLeaf(l,S,M,A*f,A,m.w,p==="hidden")),p==="hidden"&&(this.over.push(c(v,-f,x,-f,`stroke="${Mt}" stroke-width="1" stroke-dasharray="4 4"`)),this.over.push(c(v,f,x,f,`stroke="${Mt}" stroke-width="1" stroke-dasharray="4 4"`)))}else if(p==="double"){const A=m.swing??1,S=(v+x)/2;this.over.push(this.doorLeaf(l,v,S,A*f,A,m.w/2,!1)),this.over.push(this.doorLeaf(l,x,S,A*f,A,m.w/2,!1))}}}doorLeaf(e,t,i,r,s,o,a){const l=e(t,r),u=e(t,r+s*o),c=e(i,r),f=(u[0]-l[0])*(c[1]-l[1])-(u[1]-l[1])*(c[0]-l[0])>0?1:0,d=a?'stroke-dasharray="5 5"':"";return`<line x1="${Se(l[0])}" y1="${Se(l[1])}" x2="${Se(u[0])}" y2="${Se(u[1])}" stroke="${Le}" stroke-width="${a?1:2.6}" ${d}/><path d="M${Se(u[0])} ${Se(u[1])} A${Se(o)} ${Se(o)} 0 0 ${f} ${Se(c[0])} ${Se(c[1])}" fill="none" stroke="${Le}" stroke-width="0.8" ${d}/>`}g(e,t,i,r,s,o,a=""){const l=s?` rotate(${s} ${Se(i/2)} ${Se(r/2)})`:"";return this.under.push(`<g transform="translate(${Se(e)} ${Se(t)})${l}" fill="none" stroke="${Le}" stroke-width="1.1" ${a}>${o}</g>`),this}bed(e,t,i=160,r=200,s=0,o=i>120?2:1){const a=(i-20-(o-1)*8)/o;let l="";for(let c=0;c<o;c++)l+=`<rect x="${Se(10+c*(a+8))}" y="10" width="${Se(a)}" height="34" rx="6"/>`;const u=r*.32;return this.g(e,t,i,r,s,`<rect width="${i}" height="${r}" rx="3"/>${l}<line x1="0" y1="${Se(u)}" x2="${i}" y2="${Se(u)}"/><path d="M0 ${Se(u)} L${Se(i*.3)} ${Se(u+i*.18)} L${Se(i*.3)} ${Se(u)}" stroke-width="0.7"/>`)}sofa(e,t,i=220,r=90,s=0){const o=Math.max(2,Math.round((i-40)/60)),a=(i-40)/o;let l="";for(let u=1;u<o;u++)l+=`<line x1="${Se(20+u*a)}" y1="22" x2="${Se(20+u*a)}" y2="${r}"/>`;return this.g(e,t,i,r,s,`<rect width="${i}" height="${r}" rx="6"/><rect x="0" y="0" width="${i}" height="22" rx="5"/><rect x="0" y="0" width="20" height="${r}" rx="5"/><rect x="${i-20}" y="0" width="20" height="${r}" rx="5"/>${l}`)}armchair(e,t,i=80,r=0){return this.g(e,t,i,i,r,`<rect width="${i}" height="${i}" rx="8"/><rect width="${i}" height="18" rx="6"/><rect width="14" height="${i}" rx="5"/><rect x="${i-14}" width="14" height="${i}" rx="5"/>`)}chair(e,t,i=0,r=42){return this.g(e,t,r,r,i,`<rect width="${r}" height="${r}" rx="4"/><line x1="4" y1="6" x2="${r-4}" y2="6" stroke-width="2.2"/>`)}table(e,t,i=160,r=90,s={}){const o=s.rot??0;this.g(e,t,i,r,o,`<rect width="${i}" height="${r}" rx="2"/>`);const a=s.chairs??"long";if(a==="none"||o)return this;const l=Math.max(1,Math.floor(i/70)),u=i/l;for(let c=0;c<l;c++){const h=e+c*u+u/2-21;this.chair(h,t-34,0),this.chair(h,t+r-8,180)}return a==="around"&&(this.chair(e-34,t+r/2-21,-90),this.chair(e+i-8,t+r/2-21,90)),this}roundTable(e,t,i=55,r=4){this.under.push(`<circle cx="${Se(e)}" cy="${Se(t)}" r="${i}" fill="none" stroke="${Le}" stroke-width="1.1"/>`);for(let s=0;s<r;s++){const o=s/r*Math.PI*2,a=o*180/Math.PI+90;this.chair(e+Math.cos(o)*(i+22)-21,t+Math.sin(o)*(i+22)-21,a)}return this}desk(e,t,i=140,r=65,s=0,o=!0){return this.g(e,t,i,r,s,`<rect width="${i}" height="${r}"/><rect x="${i-38}" y="6" width="30" height="${r-12}" stroke-width="0.7"/>`),o&&!s&&this.chair(e+i/2-21,t+r+6,180),this}toilet(e,t,i=0){return this.g(e,t,40,70,i,'<rect x="2" y="0" width="36" height="18" rx="3"/><ellipse cx="20" cy="44" rx="17" ry="24"/><ellipse cx="20" cy="46" rx="11" ry="16" stroke-width="0.7"/>')}sink(e,t,i=60,r=0){return this.g(e,t,i,45,r,`<rect width="${i}" height="45" rx="3"/><ellipse cx="${i/2}" cy="25" rx="${Se(i/2-9)}" ry="14"/><circle cx="${i/2}" cy="8" r="2.4"/>`)}bath(e,t,i=170,r=75,s=0){return this.g(e,t,i,r,s,`<rect width="${i}" height="${r}" rx="4"/><rect x="9" y="9" width="${i-18}" height="${r-18}" rx="${r/2-9}"/><circle cx="${i-26}" cy="${r/2}" r="3"/>`)}shower(e,t,i=90){return this.g(e,t,i,i,0,`<rect width="${i}" height="${i}"/><line x1="0" y1="0" x2="${i}" y2="${i}" stroke-width="0.6"/><line x1="${i}" y1="0" x2="0" y2="${i}" stroke-width="0.6"/><circle cx="${i/2}" cy="${i/2}" r="4"/>`)}counter(e,t,i=240,r=62,s={}){let o=`<rect width="${i}" height="${r}"/><line x1="0" y1="${r-6}" x2="${i}" y2="${r-6}" stroke-width="0.6"/>`;if(s.hob){const a=i*.62;for(const[l,u,c]of[[0,0,10],[28,0,8],[0,26,8],[28,26,11]])o+=`<circle cx="${Se(a+l)}" cy="${Se(16+u)}" r="${c}" stroke-width="0.8"/>`}return s.sink&&(o+=`<rect x="${Se(i*.15)}" y="9" width="44" height="40" rx="5" stroke-width="0.8"/><rect x="${Se(i*.15+50)}" y="9" width="30" height="40" rx="5" stroke-width="0.8"/>`),this.g(e,t,i,r,s.rot??0,o)}wardrobe(e,t,i=160,r=60,s=0){let o="";for(let a=14;a<i-8;a+=16)o+=`<line x1="${a}" y1="${r/2-12}" x2="${a+4}" y2="${r/2+12}" stroke-width="0.6"/>`;return this.g(e,t,i,r,s,`<rect width="${i}" height="${r}"/><line x1="4" y1="${r/2}" x2="${i-4}" y2="${r/2}" stroke-dasharray="6 4" stroke-width="0.7"/>${o}`)}shelf(e,t,i=200,r=40,s=0,o=0){let a=`<rect width="${i}" height="${r}"/><line x1="0" y1="0" x2="${i}" y2="${r}" stroke-width="0.5"/><line x1="0" y1="${r}" x2="${i}" y2="0" stroke-width="0.5"/>`;for(let l=0;l<o;l++){const u=18+l*37%16,c=6+l*53%Math.max(1,i-u-12);a+=`<rect x="${c}" y="${4+l*7%8}" width="${u}" height="${r-14}" fill="${Bl}" stroke-width="0.8"/>`}return this.g(e,t,i,r,s,a)}stairs(e,t,i=100,r=280,s=12,o="UP"){let a=`<rect width="${i}" height="${r}"/>`;const l=r/s;for(let u=1;u<s;u++)a+=`<line x1="0" y1="${Se(u*l)}" x2="${i}" y2="${Se(u*l)}" stroke-width="0.7"/>`;return a+=`<line x1="${i/2}" y1="${r-10}" x2="${i/2}" y2="16" stroke-width="0.9"/><path d="M${i/2-7} 30 L${i/2} 14 L${i/2+7} 30" stroke-width="0.9"/>`,a+=`<path d="M0 ${Se(r*.55)} L${i} ${Se(r*.45)}" stroke-width="0.8"/>`,this.g(e,t,i,r,0,a),this.text(e+i/2,t+r+22,o,11,"middle",Mt)}spiralStair(e,t,i=110,r=14){let s=`<circle cx="${e}" cy="${t}" r="${i}"/><circle cx="${e}" cy="${t}" r="12"/>`;for(let o=0;o<r;o++){const a=o/r*Math.PI*2;s+=`<line x1="${Se(e+Math.cos(a)*12)}" y1="${Se(t+Math.sin(a)*12)}" x2="${Se(e+Math.cos(a)*i)}" y2="${Se(t+Math.sin(a)*i)}" stroke-width="0.6"/>`}return s+=`<path d="M${Se(e+i*.6)} ${t} A${Se(i*.6)} ${Se(i*.6)} 0 1 1 ${Se(e)} ${Se(t-i*.6)}" stroke-width="0.8"/>`,this.under.push(`<g fill="none" stroke="${Le}" stroke-width="1.1">${s}</g>`),this}plant(e,t,i=22){let r=`<circle cx="${e}" cy="${t}" r="${i}"/>`;for(let s=0;s<7;s++){const o=s/7*Math.PI*2;r+=`<path d="M${e} ${t} Q${Se(e+Math.cos(o+.4)*i*.7)} ${Se(t+Math.sin(o+.4)*i*.7)} ${Se(e+Math.cos(o)*i)} ${Se(t+Math.sin(o)*i)}" stroke-width="0.6"/>`}return this.under.push(`<g fill="none" stroke="${Le}" stroke-width="0.9">${r}</g>`),this}rug(e,t,i,r){return this.under.push(`<rect x="${e}" y="${t}" width="${i}" height="${r}" fill="none" stroke="${Mt}" stroke-width="0.8" stroke-dasharray="3 5"/><rect x="${e+10}" y="${t+10}" width="${i-20}" height="${r-20}" fill="none" stroke="${Mt}" stroke-width="0.5"/>`),this}column(e,t,i=30){return this.structure.push(`<rect x="${e-i/2}" y="${t-i/2}" width="${i}" height="${i}" fill="${Le}"/>`),this}skylight(e,t,i,r){return this.annotations.push(`<g fill="none" stroke="${Le}" stroke-width="0.9" stroke-dasharray="10 6"><rect x="${e}" y="${t}" width="${i}" height="${r}"/><line x1="${e}" y1="${t}" x2="${e+i}" y2="${t+r}"/><line x1="${e+i}" y1="${t}" x2="${e}" y2="${t+r}"/></g>`),this.text(e+i/2,t-10,"SKYLIGHT ABOVE",10,"middle",Mt)}camera(e,t,i,r=260,s=50){const o=i*Math.PI/180,a=s*Math.PI/360,l=[e+Math.cos(o-a)*r,t+Math.sin(o-a)*r],u=[e+Math.cos(o+a)*r,t+Math.sin(o+a)*r];return this.annotations.push(`<path d="M${e} ${t} L${Se(l[0])} ${Se(l[1])} A${r} ${r} 0 0 1 ${Se(u[0])} ${Se(u[1])} Z" fill="url(#dots)" stroke="${Mt}" stroke-width="0.7" stroke-dasharray="4 4"/><g transform="translate(${e} ${t}) rotate(${i})"><rect x="-6" y="-7" width="20" height="14" fill="${Le}"/><rect x="14" y="-4" width="7" height="8" fill="${Le}"/></g>`),this}text(e,t,i,r=16,s="start",o=Le,a=""){return this.annotations.push(`<text x="${Se(e)}" y="${Se(t)}" font-size="${r}" text-anchor="${s}" fill="${o}" letter-spacing="${r>14?2:1}" ${a}>${i}</text>`),this}label(e,t,i,r){return this.text(e,t,i,15,"middle"),r&&this.text(e,t+20,r,10,"middle",Mt),this}dimH(e,t,i,r){const s=r??String(Math.round((t-e)*10));return this.annotations.push(`<g stroke="${Le}" stroke-width="0.7"><line x1="${e-14}" y1="${i}" x2="${t+14}" y2="${i}"/><line x1="${e-6}" y1="${i+6}" x2="${e+6}" y2="${i-6}" stroke-width="1.3"/><line x1="${t-6}" y1="${i+6}" x2="${t+6}" y2="${i-6}" stroke-width="1.3"/><line x1="${e}" y1="${i-14}" x2="${e}" y2="${i+14}"/><line x1="${t}" y1="${i-14}" x2="${t}" y2="${i+14}"/></g><text x="${(e+t)/2}" y="${i-7}" font-size="11" text-anchor="middle" fill="${Le}" letter-spacing="1">${s}</text>`),this}dimV(e,t,i,r){const s=r??String(Math.round((t-e)*10)),o=(e+t)/2;return this.annotations.push(`<g stroke="${Le}" stroke-width="0.7"><line x1="${i}" y1="${e-14}" x2="${i}" y2="${t+14}"/><line x1="${i-6}" y1="${e+6}" x2="${i+6}" y2="${e-6}" stroke-width="1.3"/><line x1="${i-6}" y1="${t+6}" x2="${i+6}" y2="${t-6}" stroke-width="1.3"/><line x1="${i-14}" y1="${e}" x2="${i+14}" y2="${e}"/><line x1="${i-14}" y1="${t}" x2="${i+14}" y2="${t}"/></g><text x="${i-7}" y="${o}" font-size="11" text-anchor="middle" fill="${Le}" letter-spacing="1" transform="rotate(-90 ${i-7} ${o})">${s}</text>`),this}chainH(e,t){for(let i=0;i<e.length-1;i++)this.dimH(e[i],e[i+1],t);return this}chainV(e,t){for(let i=0;i<e.length-1;i++)this.dimV(e[i],e[i+1],t);return this}grid(e,t){let i="";return e.forEach((r,s)=>{i+=`<line x1="${r}" y1="-88" x2="${r}" y2="${this.h+40}" stroke="${Mt}" stroke-width="0.5" stroke-dasharray="24 6 4 6"/>`,i+=`<circle cx="${r}" cy="-110" r="20" fill="${Bl}" stroke="${Le}" stroke-width="0.9"/><text x="${r}" y="-105" font-size="14" text-anchor="middle" fill="${Le}">${String.fromCharCode(65+s)}</text>`}),t.forEach((r,s)=>{i+=`<line x1="-88" y1="${r}" x2="${this.w+40}" y2="${r}" stroke="${Mt}" stroke-width="0.5" stroke-dasharray="24 6 4 6"/>`,i+=`<circle cx="-110" cy="${r}" r="20" fill="${Bl}" stroke="${Le}" stroke-width="0.9"/><text x="-110" y="${r+5}" font-size="14" text-anchor="middle" fill="${Le}">${s+1}</text>`}),this.under.unshift(i),this}route(e){const t=e.map((l,u)=>`${u?"L":"M"}${l[0]} ${l[1]}`).join(" "),[i,r]=e[e.length-2],[s,o]=e[e.length-1],a=Math.atan2(o-r,s-i)*180/Math.PI;return this.annotations.push(`<path d="${t}" fill="none" stroke="${Mt}" stroke-width="1" stroke-dasharray="2 6" stroke-linecap="round"/><circle cx="${e[0][0]}" cy="${e[0][1]}" r="5" fill="none" stroke="${Le}"/><path transform="translate(${s} ${o}) rotate(${Se(a)})" d="M-12 -6 L0 0 L-12 6" fill="none" stroke="${Le}" stroke-width="1.1"/>`),this}hatchArea(e,t,i,r,s=!1){return this.under.unshift(`<rect x="${e}" y="${t}" width="${i}" height="${r}" fill="url(#${s?"hatchDense":"dots"})" opacity="0.7"/>`),this}raw(e,t="annotations"){return this[t].push(e),this}breakLineV(e,t,i){const r=(t+i)/2;return this.annotations.push(`<path d="M${e} ${t-30} L${e} ${r-20} L${e+14} ${r-8} L${e-14} ${r+8} L${e} ${r+20} L${e} ${i+30}" fill="none" stroke="${Le}" stroke-width="1"/>`),this}faded(e,t,i=!1){const r=[this.under,this.partitions,this.structure,this.over,this.annotations],s=r.map(a=>a.length);t();const o=i?' stroke-dasharray="6 5"':"";return r.forEach((a,l)=>{const u=a.splice(s[l]);u.length&&a.push(`<g opacity="${e}"${o}>${u.join("")}</g>`)}),this}render(e){const r=this.w+400,s=this.h+200*2+120,o=s-120-50,a=`<defs><pattern id="hatch" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="${Le}" stroke-width="1"/></pattern><pattern id="hatchDense" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="5" stroke="${Mt}" stroke-width="0.7"/></pattern><pattern id="dots" patternUnits="userSpaceOnUse" width="9" height="9"><circle cx="2" cy="2" r="0.9" fill="${Mt}"/></pattern></defs>`,l=(f,d,g,_)=>`<path d="M${f} ${d+_*30} L${f} ${d} L${f+g*30} ${d}" fill="none" stroke="${Le}" stroke-width="1"/>`,u=`<g transform="translate(${r-120} 110)" fill="none" stroke="${Le}" stroke-width="1"><circle r="34"/><path d="M0 -44 L10 10 L0 2 L-10 10 Z" fill="${Le}"/><text y="-52" font-size="13" text-anchor="middle" fill="${Le}" stroke="none">N</text></g>`,c=(()=>{let f=`<g transform="translate(70 ${o-40})">`;for(let d=0;d<5;d++)f+=`<rect x="${d*50}" y="0" width="50" height="8" fill="${d%2?Bl:Le}" stroke="${Le}" stroke-width="0.8"/>`;return f+=`<text x="0" y="26" font-size="10" fill="${Le}">0</text><text x="250" y="26" font-size="10" fill="${Le}" text-anchor="middle">2.5 M</text></g>`,f})(),h=`<g transform="translate(40 ${o})" fill="none" stroke="${Le}" stroke-width="1"><rect width="${r-80}" height="120"/><line x1="200" y1="0" x2="200" y2="120"/><line x1="${r-520}" y1="0" x2="${r-520}" y2="120"/><line x1="${r-280}" y1="0" x2="${r-280}" y2="120"/><line x1="${r-520}" y1="${120/2}" x2="${r-80}" y2="${120/2}"/><g stroke="none" fill="${Le}"><text x="20" y="38" font-size="12" letter-spacing="2">ARCHIVE</text><text x="20" y="92" font-size="44" letter-spacing="2">${e.no}</text><text x="226" y="46" font-size="26" letter-spacing="4">${e.title}</text><text x="226" y="84" font-size="12" letter-spacing="2" fill="${Mt}">${e.note??"SPECULATIVE RESIDENTIAL PLAN — GROUND LEVEL"}</text><text x="${r-500}" y="38" font-size="11" letter-spacing="2">SCALE ${e.scale??"1:100"}</text><text x="${r-500}" y="96" font-size="11" letter-spacing="2">DRAWN — A.H.D.</text><text x="${r-260}" y="38" font-size="11" letter-spacing="2">SHEET</text><text x="${r-260}" y="96" font-size="22" letter-spacing="2">${e.sheet}</text></g></g>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${s}" width="${r}" height="${s}" font-family="IBM Plex Mono, Courier New, monospace">`+a+`<rect width="${r}" height="${s}" fill="${Bl}"/><rect x="24" y="24" width="${r-48}" height="${s-48}" fill="none" stroke="${Le}" stroke-width="0.6"/>`+l(10,10,1,1)+l(r-10,10,-1,1)+l(10,s-10,1,-1)+l(r-10,s-10,-1,-1)+`<text x="60" y="80" font-size="12" letter-spacing="3" fill="${Le}">THE DWELLER'S GUIDE TO THE DESIRE / ${e.no}</text><text x="60" y="100" font-size="10" letter-spacing="2" fill="${Mt}">REF. SA-${e.no}-${e.sheet} — NOT FOR CONSTRUCTION</text>`+u+'<g transform="translate(200 200)">'+this.under.join("")+this.partitions.join("")+this.structure.join("")+this.over.join("")+this.annotations.join("")+"</g>"+c+h+"</svg>"}}function YM(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const sr=(n,e=10)=>Math.round(n/e)*e;function z2(n){const e=YM(n);return{w:sr(900+e()*520,50),h:sr(650+e()*380,50)}}function H2(n,e){const t=YM(n),i=sr(900+t()*520,50),r=sr(650+t()*380,50),s=e.desire,o=new Qo(i,r),a=S=>S[Math.floor(t()*S.length)],l=230,u=[],c=[],h=3+(t()<.5?1:0),f=(S,M)=>{const C=S.h>=l*2,L=S.w>=l*2;if(M>=h||!C&&!L||M>=2&&t()<.3){u.push(S);return}if(L&&(!C||S.w>S.h*(.75+t()*.5))){const w=sr(S.x+l+t()*(S.w-l*2));c.push({axis:"v",c:w,a1:S.y,a2:S.y+S.h,depth:M}),f({x:S.x,y:S.y,w:w-S.x,h:S.h},M+1),f({x:w,y:S.y,w:S.x+S.w-w,h:S.h},M+1)}else{const w=sr(S.y+l+t()*(S.h-l*2));c.push({axis:"h",c:w,a1:S.x,a2:S.x+S.w,depth:M}),f({x:S.x,y:S.y,w:S.w,h:w-S.y},M+1),f({x:S.x,y:w,w:S.w,h:S.y+S.h-w},M+1)}};f({x:0,y:0,w:i,h:r},0);const d=(S,M,C,L)=>{const y=c.filter(U=>U.axis!==S&&(Math.abs(U.a1-M)<1||Math.abs(U.a2-M)<1)&&U.c>C+1&&U.c<L-1).map(U=>U.c).sort((U,V)=>U-V),w=[C,...y,L],N=[];for(let U=0;U<w.length-1;U++)N.push([w[U],w[U+1]]);return N},g=i*.58;for(const S of c){const M=d(S.axis,S.c,S.a1,S.a2).sort((V,X)=>X[1]-X[0]-(V[1]-V[0])),C=[],[L,y]=M[0];if(y-L>=120){const V=y-L>300?90:80;C.push({at:sr(L+18+t()*(y-L-36-V),5),w:V,swing:t()<.5?1:-1,hinge:t()<.5?"start":"end"})}let w=S.depth===0?"solid":"partition";s==="recognition"&&(w="glass");const N=S.axis==="v"?S.c>g:S.a1>=g-1;s==="escape"&&N&&(w="ghost");const U=w==="solid"?16:10;S.axis==="h"?o.wallH(S.c,S.a1,S.a2,U,C,w):o.wallV(S.c,S.a1,S.a2,U,C,w)}const _=s==="security"?36:24,m=[{axis:"h",c:0,len:i},{axis:"h",c:r,len:i,entry:!0},{axis:"v",c:0,len:r},{axis:"v",c:i,len:r}];for(const S of m){const M=d(S.axis,S.c,0,S.len),C=[];let L=!S.entry;const y=[...M].sort((U,V)=>V[1]-V[0]-(U[1]-U[0]));for(const[U,V]of M){const X=V-U;if(!L&&U===y[0][0]&&X>160){C.push({at:sr(U+30+t()*(X-135),5),w:95,swing:-1}),L=!0;continue}const B=s==="privacy"?.25:s==="security"?.5:.85;if(X>=200&&t()<B){const Y=s==="recognition"?X-60:Math.min(X-90,sr(120+t()*140));C.push({at:sr(U+(X-Y)/2,5),w:Y,type:"window"})}}const w=s==="escape"&&S.axis==="v"&&S.c===i?"dotted":"solid",N=w==="solid"?_:8;S.axis==="h"?o.wallH(S.c,0,i,N,C,w):o.wallV(S.c,0,r,N,C,w)}const p={bath:"BATH",kitchen:"KITCHEN",hall:"HALL",study:"STUDY",bed:"BEDROOM",dorm:"COMMON SLEEP",living:"LIVING",storage:"STORAGE",cell:"CELL"},v=u.reduce((S,M)=>M.w*M.h>S.w*S.h?M:S,u[0]),x=S=>{const M=S.x+14,C=S.y+14,L=S.w-28,y=S.h-28,w=S.w*S.h/1e4,N=Math.max(L,y)/Math.min(L,y);let U=w<5.5?"bath":N>2.3?w<12?"kitchen":"hall":w<10?"study":w<17?"bed":"living";switch(s==="accumulation"&&U!=="bath"&&t()<.6&&(U="storage"),s==="belonging"&&U==="bed"&&(U="dorm"),s==="privacy"&&S===v&&(U="cell"),U){case"bath":o.toilet(M+10,C+8),L>=130&&o.sink(M+62,C+8,54),L>=200&&y>=130?o.bath(M+L-172,C+y-78,166,70):L>=150&&y>=160&&o.shower(M+L-92,C+y-92,84);break;case"kitchen":if(L>=y)o.counter(M+8,C+8,Math.min(L-16,360),62,{hob:!0,sink:!0}),y>260&&o.roundTable(M+L/2,C+y-95,45,3);else{const X=Math.min(y-16,360);o.counter(M+39-X/2,C+y/2-31,X,62,{hob:!0,sink:!0,rot:90})}break;case"hall":L>=130&&y>=240&&t()<.5?o.stairs(M+L-110,C+16,100,Math.min(280,y-60),12):o.plant(M+30,C+30,20);break;case"study":L>=160&&o.desk(M+10,C+8,Math.min(140,L-20),60),y>=200&&o.shelf(M+10,C+y-44,Math.min(L-20,180),36,0,4);break;case"bed":if(L>=210&&y>=260?o.bed(M+(L-160)/2,C+8,160,200):L>=110&&y>=230&&o.bed(M+10,C+8,90,200),y>=330&&L>=160){const X=Math.min(170,L*.5);o.wardrobe(M+L-X-6,C+y-62,X,56)}break;case"dorm":{const X=Math.max(1,Math.floor((L-10)/110));for(let B=0;B<X&&y>=230;B++)o.bed(M+10+B*110,C+8,90,200),B&&o.raw(`<line x1="${M+B*110}" y1="${C}" x2="${M+B*110}" y2="${C+215}" stroke="${Mt}" stroke-dasharray="1 4" stroke-linecap="round"/>`),y>=480&&o.bed(M+10+B*110,C+y-208,90,200,180);break}case"living":if(L>=200&&y>=320&&o.table(M+L/2-70,C+60,140,80),y>=220){const X=Math.min(240,L-40);o.sofa(M+(L-X)/2,C+y-92,X,86,180),y>=380&&o.rug(M+30,C+y-230,L-60,120)}o.plant(M+L-28,C+28,20);break;case"storage":{let X=0;for(let B=C+10;B+40<C+y-10;B+=90,X++)o.shelf(M+10,B,L-20,38,0,3+X%4);break}case"cell":o.room(S.x+60,S.y+60,S.w-120,S.h-120,22,{s:[{at:sr(S.x+S.w/2-40),w:80,swing:-1}]}),S.w-160>=110&&S.h-160>=230&&o.bed(S.x+84,S.y+84,90,200),S.w>360&&S.h>360&&o.skylight(S.x+S.w/2,S.y+S.h/2-60,100,100);break}s==="security"&&o.camera(S.x+16,S.y+16,45,Math.min(S.w,S.h)*.7,50);const V=`${w.toFixed(1)} M²`;o.label(S.x+S.w/2,S.y+S.h/2+(U==="living"?40:10),p[U],V)};for(const S of u)s==="escape"&&S.x>=g-1?o.faded(.38,()=>x(S),!0):x(S);if(s==="recognition"){for(const S of u){const M=S.x+S.w/2,C=S.y+S.h/2;o.raw(`<line x1="${i/2}" y1="${r/2}" x2="${M}" y2="${C}" stroke="${Mt}" stroke-width="0.8" stroke-dasharray="1 6" stroke-linecap="round"/><circle cx="${M}" cy="${C}" r="4" fill="#1d1d1b"/>`)}o.raw(`<circle cx="${i/2}" cy="${r/2}" r="16" fill="none" stroke="#1d1d1b" stroke-width="1.2"/><circle cx="${i/2}" cy="${r/2}" r="5" fill="#1d1d1b"/>`)}s==="accumulation"&&(o.breakLineV(i,0,r),o.wallH(0,i,i+180,10,[],"ghost"),o.wallH(r,i,i+180,10,[],"ghost"),o.text(i+120,r/2,"→ ∞",18,"middle")),s==="escape"&&o.text(i+100,r/2,"?",40,"middle","#1d1d1b",'opacity="0.35"');const E=[0,...c.filter(S=>S.axis==="v"&&S.depth<=1).map(S=>S.c),i].sort((S,M)=>S-M),A=[0,...c.filter(S=>S.axis==="h"&&S.depth<=1).map(S=>S.c),r].sort((S,M)=>S-M);return o.grid(E,A),o.chainH(E,-48),o.chainV(A,-48),o.text(0,r+135,a(rx[s].notes),12,"start",Mt),o.render({no:e.no,title:e.title.toUpperCase(),sheet:`A-${e.no}`,note:`DESIRE: ${rx[s].label.toUpperCase()}`})}function V2(n){return()=>(n=n*16807%2147483647,(n-1)/2147483646)}function G2(n,e){const t=[],i=new Set;for(let r=0;r<n;r++){const s=1e3+r*7919,o=V2(s),a=Jr[r%Jr.length],l=m=>m[Math.floor(o()*m.length)];let u="";for(let m=0;m<8&&(u=`The ${l(a.adjectives)} ${l(a.nouns)}`,!!i.has(u));m++);i.has(u)&&(u=`${u} ${String.fromCharCode(65+r%26)}`),i.add(u);const c=String(e+r).padStart(3,"0"),{w:h,h:f}=z2(s),d=a.key==="belonging"?4+Math.floor(o()*8):1+Math.floor(o()*2),g=l(a.conditions),_=u.split(" ").slice(-1)[0].toLowerCase();t.push({id:`placeholder-${c}`,no:c,title:u,group:a.key,desire:a.label,condition:g,summary:`A placeholder ${_} for the desire of ${a.label.toLowerCase()}. Drawing and text are temporary.`,scenario:[`${g} In this speculative world the condition is no longer an exception but the organising principle of everyday life.`,`The plan pushes ${a.label.split(" / ")[0].toLowerCase()} until it reshapes the rooms themselves: ${l(a.notes).toLowerCase()}`,"Placeholder entry — replace with the project drawing and scenario."],meta:[{label:"Area",value:`${(h*f/1e4).toFixed(0)} m²`},{label:"Occupants",value:String(d).padStart(2,"0")},{label:"Footprint",value:`${(h/100).toFixed(1)} × ${(f/100).toFixed(1)} m`},{label:"Status",value:"Placeholder"}],generator:{seed:s}})}return t}const sc=[{id:"isolation-chamber",no:"001",title:"The Isolation Chamber",group:"privacy",desire:"Privacy / Social Withdrawal",condition:'Search volume for "how to be alone" rises every winter.',summary:"A dwelling that protects its occupant through a sequence of thresholds. The deeper you go, the fewer people can follow.",scenario:["In this future, solitude has become the scarcest resource in the city. Being reachable is no longer a convenience but a condition people pay to escape.","The home is organised as a spiral of buffers. Three doors, a corridor without furniture and a cell without windows separate the occupant from the street. Light arrives only from above.","The plan asks: when privacy becomes absolute, is the house a refuge or a cell?"],meta:[{label:"Area",value:"100 m²"},{label:"Occupants",value:"01"},{label:"Thresholds",value:"03"},{label:"Windows",value:"00"}],plan:"isolation"},{id:"observation-house",no:"002",title:"The Observation House",group:"recognition",desire:"Recognition / Visibility",condition:"The desire to be seen, measured in followers and views.",summary:"Every wall is glass. A central core lets the inhabitant — and their audience — see every room at once.",scenario:["Recognition has become the primary currency of everyday life. A life that is not witnessed is felt as a life that did not happen.","The house is turned inside out: interior partitions are glazed, the bath sits in full view, and a spiral stair in the centre acts as a viewing tower from which every room is visible.","The plan asks: who is the house for — the person who lives in it, or the people who watch?"],meta:[{label:"Area",value:"108 m²"},{label:"Occupants",value:"01 + audience"},{label:"Glazed partitions",value:"100%"},{label:"Sightlines",value:"05"}],plan:"observation"},{id:"infinite-dwelling",no:"003",title:"The Infinite Dwelling",group:"accumulation",desire:"Accumulation / Possession",condition:"Self-storage is the fastest-growing type of real estate.",summary:"A small home attached to a corridor of storage rooms that never ends. Living space stays fixed; possessions expand indefinitely.",scenario:["Ownership has replaced experience as the measure of a secure life. Nothing is thrown away; everything might be needed.","The living module is tiny and fixed. Behind it, a corridor of identical storage rooms extends beyond the edge of the drawing — the plan cannot be completed, only continued.","The plan asks: at what point do we live for our things rather than with them?"],meta:[{label:"Area",value:"112 m² + ∞"},{label:"Occupants",value:"01"},{label:"Storage rooms",value:"10 → ∞"},{label:"Living area",value:"28 m²"}],plan:"infinite"},{id:"shared-self",no:"004",title:"The Shared Self",group:"belonging",desire:"Belonging / Dependency",condition:"Loneliness reported as a public-health concern.",summary:"Eight beds, one table, one stove. Walls are replaced by curtains and no room belongs to anyone in particular.",scenario:["In a society defined by loneliness, belonging is pursued to its extreme. Privacy is traded for constant company.","The plan removes every partition that could separate one person from another. Sleeping, eating and washing are collective; the only boundaries are fabric.","The plan asks: can we belong to each other without disappearing into each other?"],meta:[{label:"Area",value:"110 m²"},{label:"Occupants",value:"08"},{label:"Private rooms",value:"00"},{label:"Seats at table",value:"16"}],plan:"shared"},{id:"controlled-home",no:"005",title:"The Controlled Home",group:"security",desire:"Security / Surveillance",condition:"Smart doorbells, home cameras and the fear of the outside.",summary:"An airlock entry, a fortified safe room and a camera in every corner. The house protects — and records — everything.",scenario:["Insecurity has become a permanent feeling, no longer tied to any particular threat. The home is expected to defend.","Entry is through an airlock of two locked doors. A safe room with 46 cm walls sits at the centre of the plan, and the monitoring room receives a feed from every space — including the bath.","The plan asks: who is protected from whom when the watcher and the watched live in the same house?"],meta:[{label:"Area",value:"99 m²"},{label:"Occupants",value:"02"},{label:"Cameras",value:"07"},{label:"Locked thresholds",value:"04"}],plan:"controlled"},{id:"vanishing-room",no:"006",title:"The Vanishing Room",group:"escape",desire:"Escape / Anonymity",condition:'Searches for "how to disappear" and digital detox retreats.',summary:"A plan that dissolves as it goes. Rooms on the left are fully recorded; rooms on the right are barely drawn at all.",scenario:["Every action leaves a trace and every trace is stored. The ultimate luxury becomes not to exist on record.","Walls thin from solid to hatched, from dashed to dotted. A concealed door leads to a room that appears on no document. The drawing itself forgets.","The plan asks: can architecture help us disappear, and what remains of a home no one can find?"],meta:[{label:"Area",value:"108 m² (recorded: 72 m²)"},{label:"Occupants",value:"— —"},{label:"Concealed rooms",value:"01"},{label:"Recorded",value:"66%"}],plan:"vanishing"}],W2=154,Ds=(typeof window<"u"&&window.__extraPlans&&window.__extraPlans.length?[...window.__extraPlans]:[...sc,...G2(W2,sc.length+1)]),fr={version:"V. 01",hero:{label:"WHAT DO OUR SPACES REVEAL?",titleLines:["THE DWELLER'S","GUIDE TO","THE DESIRE"],meta:["SPECULATIVE ARCHITECTURE / ARCHIVE 001","SCROLL TO UNCOVER ↓"],process:["INVISIBLE DESIRES","SPECULATIVE FUTURES","SPATIAL TRANSFORMATION","ARCHITECTURAL FLOOR PLANS"],hint:["MOVE — REVEAL","DRAG — DISPLACE"]},essay:[{no:"01",title:"A QUESTION OF SPACE",text:["Architecture has never been merely a response to necessity.","It is also a reflection of what we fear, what we lack, and what we desire.","Behind every wall, every boundary, and every room lies a decision shaped by the society we inhabit."]},{no:"02",title:"THE INVISIBLE DESIRES",text:["We often imagine the future through the scale of global crises.","Yet the concerns closest to our everyday lives are frequently smaller, quieter, and deeply personal.","Loneliness. Recognition. Belonging. Insecurity.","What if these invisible desires are already shaping the spaces we inhabit?"]},{no:"03",title:"A SPECULATIVE FUTURE",text:["Speculative architecture does not attempt to predict the future or provide definitive solutions.","Instead, it transforms the contradictions of the present into spatial questions.","What happens when a desire becomes an obsession?","When a social condition is pushed to its extreme?","And when the architecture of everyday life begins to reflect that transformation?"]}],statement:{lines:["IF DESIRE SHAPES SPACE,","WHAT HAPPENS WHEN","DESIRE HAS NO LIMIT?"],echo:["DESIRE","SPACE","LIMIT","WALL","ROOM","BOUNDARY","LACK","FEAR"]},reveal:{subtitle:"SPATIAL MANIFESTATIONS OF HUMAN DESIRE"},cloud:{label:"THE ARCHIVE",title:"A CLOUD OF {n} DWELLINGS",intro:"Every plan in the archive, grouped by the desire that shaped it. Scroll to move through the cloud — what is near comes into focus, what is far remains a haze.",hint:"SCROLL — FLY · DRAG — ROTATE · CLICK — OPEN"},archive:{heading:"SELECTED ENTRIES",intro:"Six speculative dwellings. Each begins with a desire found in everyday search behaviour and pushes it until the floor plan can no longer contain it."},colophon:["THE DWELLER'S GUIDE TO THE DESIRE — SPECULATIVE ARCHITECTURE STUDIO","WORK IN PROGRESS — PLACEHOLDER DRAWINGS & TEXT"]};function $2(){const n=new Qo(1e3,1e3);return n.grid([0,500,1e3],[0,500,1e3]),n.wallH(0,0,1e3,30),n.wallH(1e3,0,1e3,30,[{at:820,w:90,swing:-1}]),n.wallV(0,0,1e3,30),n.wallV(1e3,0,1e3,30),n.wallV(560,850,1e3,12,[{at:880,w:85,swing:-1}],"partition"),n.room(150,150,700,700,16,{w:[{at:190,w:85,swing:1}]},"partition"),n.room(300,300,400,400,26,{e:[{at:590,w:80,swing:-1,hinge:"end"}]}),n.bed(325,330,90,200),n.desk(470,326,140,58),n.toilet(632,612),n.sink(552,640,60),n.skylight(430,450,140,140),n.label(500,528,"CELL","9.2 M² — SEALED"),n.label(500,80,"THRESHOLD 01","OUTER CORRIDOR"),n.label(500,226,"BUFFER ZONE","NO FURNITURE PERMITTED"),n.text(925,640,"THRESH. 02",11,"middle",Mt),n.route([[865,1080],[865,930],[75,930],[75,232],[225,232],[225,775],[775,775],[775,630],[650,630]]),n.chainH([0,150,300,700,850,1e3],-48),n.chainV([0,150,300,700,850,1e3],-48),n.text(0,1135,"NO WINDOWS. ONE ENTRY. THREE THRESHOLDS BEFORE ANYONE MAY REACH YOU.",12,"start",Mt),n.render({no:"001",title:"THE ISOLATION CHAMBER",sheet:"A-101",note:"DESIRE: PRIVACY / SOCIAL WITHDRAWAL"})}function X2(){const n=new Qo(1200,900);n.grid([0,400,800,1200],[0,450,900]);const e=(t,i)=>({at:t,w:i,type:"window"});n.wallH(0,0,1200,24,[e(50,300),e(450,300),e(850,300)]),n.wallH(900,0,1200,24,[e(50,300),{at:540,w:120,type:"double",swing:-1},e(850,300)]),n.wallV(0,0,900,24,[e(60,330),e(510,330)]),n.wallV(1200,0,900,24,[e(60,330),e(510,330)]),n.wallV(400,0,900,12,[{at:330,w:85,swing:1,hinge:"end"},{at:470,w:85,swing:1}],"glass"),n.wallV(800,0,900,12,[{at:330,w:85,swing:-1,hinge:"end"},{at:470,w:85,swing:-1}],"glass"),n.wallH(450,0,400,12,[],"glass"),n.wallH(450,800,1200,12,[],"glass"),n.raw(`<circle cx="600" cy="450" r="150" fill="none" stroke="${Le}" stroke-width="1.4"/><circle cx="600" cy="450" r="138" fill="none" stroke="${Le}" stroke-width="1.4"/>`,"over"),n.spiralStair(600,450,95,16);for(const[t,i]of[[200,225],[200,675],[1e3,225],[1e3,675],[600,60]])n.raw(`<line x1="600" y1="450" x2="${t}" y2="${i}" stroke="${Mt}" stroke-width="0.8" stroke-dasharray="1 6" stroke-linecap="round"/><circle cx="${t}" cy="${i}" r="4" fill="${Le}"/>`);return n.rug(70,110,250,150),n.table(140,160,110,55,{chairs:"none"}),n.sofa(70,300,220,90,180),n.armchair(300,150,76,-90),n.plant(50,50),n.bed(130,630,160,200),n.wardrobe(30,560,60,170),n.plant(360,860,18),n.counter(830,22,340,62,{hob:!0,sink:!0}),n.roundTable(1e3,300,55,4),n.bath(1010,812,170,70),n.toilet(830,810),n.sink(890,838,60),n.label(240,60,"LIVING","ON DISPLAY"),n.label(240,520,"BEDROOM","SEEN FROM 3 SIDES"),n.label(1e3,150,"KITCHEN"),n.label(1e3,520,"BATH","FULLY GLAZED"),n.label(600,640,"OBSERVATION CORE","EVERY ROOM IN VIEW"),n.label(600,130,"GALLERY",""),n.chainH([0,400,800,1200],-48),n.chainV([0,450,900],-48),n.text(0,1035,"VISIBILITY INDEX 100% — NO SURFACE OPAQUE ABOVE 900 MM.",12,"start",Mt),n.render({no:"002",title:"THE OBSERVATION HOUSE",sheet:"A-102",note:"DESIRE: RECOGNITION / VISIBILITY"})}function Y2(){const n=new Qo(1400,800);n.grid([0,400,800,1200],[0,800]),n.wallH(0,0,1400,24,[{at:80,w:200,type:"window"}]),n.wallH(800,0,1400,24,[{at:80,w:200,type:"window"}]),n.wallV(0,0,800,24,[{at:357,w:86,swing:1}]);const e=[{at:150,w:85,swing:-1}],t=[{at:150,w:85,swing:1}];for(let r=400;r<1400;r+=200)e.push({at:r+60,w:80,swing:-1}),t.push({at:r+60,w:80,swing:1});n.wallH(350,0,1400,16,e),n.wallH(450,0,1400,16,t),n.wallV(400,0,350,20),n.wallV(400,450,800,20);for(let r=600;r<1400;r+=200)n.wallV(r,0,350,12,[],"partition"),n.wallV(r,450,800,12,[],"partition");n.wallH(350,1400,1590,12,[],"ghost"),n.wallH(450,1400,1590,12,[],"ghost"),n.wallH(0,1400,1590,12,[],"ghost"),n.wallH(800,1400,1590,12,[],"ghost"),n.breakLineV(1400,0,800);let i=1;for(let r=400;r<1400;r+=200)for(const[s,o]of[[20,!0],[470,!1]])(o?[s,s+90,s+180]:[s+90,s+180,s+270]).forEach((l,u)=>n.shelf(r+16,l,168,40,0,3+(i+u)%4)),n.text(r+32,o?300:520,`S.${String(i).padStart(2,"0")}`,11,"middle",Mt),i++;return n.counter(40,22,260,62,{hob:!0,sink:!0}),n.table(120,160,140,70),n.bed(40,580,160,200),n.wardrobe(230,720,150,60),n.label(335,130,"LIVING"),n.label(300,520,"SLEEP"),n.text(900,405,"CORRIDOR — LENGTH UNDETERMINED",11,"middle",Le),n.text(1530,405,"→ ∞",18,"middle",Le),n.chainH([0,400,600,800,1e3,1200,1400],-48),n.chainV([0,350,450,800],-48),n.text(0,935,"EVERY ROOM ADDED BECOMES A ROOM TO FILL. STORAGE MODULE REPEATS WITHOUT END.",12,"start",Mt),n.render({no:"003",title:"THE INFINITE DWELLING",sheet:"A-103",note:"DESIRE: ACCUMULATION / POSSESSION"})}function j2(){const n=new Qo(1100,1e3);n.grid([0,550,1100],[0,500,1e3]);const e=(t,i)=>({at:t,w:i,type:"window"});n.wallH(0,0,1100,24,[e(90,160),e(450,160)]),n.wallH(1e3,0,1100,24,[e(90,160),e(450,160),{at:880,w:90,swing:-1}]),n.wallV(0,0,1e3,24,[e(400,200)]),n.wallV(1100,0,1e3,24,[e(620,220)]),n.wallV(800,0,500,14,[{at:400,w:85,swing:-1}],"partition"),n.wallH(500,800,1100,14,[],"partition"),n.wallV(960,0,390,6,[{at:25,w:75,swing:-1},{at:155,w:75,swing:-1},{at:285,w:75,swing:-1}],"partition");for(const t of[130,260,390])n.wallH(t,960,1100,6,[],"partition");for(const t of[28,158,288])n.toilet(1040,t,90);n.raw(`<g fill="none" stroke="${Le}" stroke-width="1.1"><rect x="815" y="40" width="52" height="330"/>`+[80,160,240,320].map(t=>`<ellipse cx="841" cy="${t}" rx="17" ry="26"/><circle cx="858" cy="${t}" r="2"/>`).join("")+"</g>","under"),n.shower(880,405,85);for(const t of[60,240,420,600])n.bed(t,40,90,200),n.bed(t,760,90,200,180),n.raw(`<rect x="${t+100}" y="48" width="36" height="36" fill="none" stroke="${Le}" stroke-width="0.9"/>`,"under"),n.raw(`<rect x="${t+100}" y="916" width="36" height="36" fill="none" stroke="${Le}" stroke-width="0.9"/>`,"under");for(const t of[195,375,555])n.raw(`<path d="M${t} 30 L${t} 262 M${t} 738 L${t} 975" stroke="${Mt}" stroke-width="1" stroke-dasharray="1 4" stroke-linecap="round"/>`);return n.table(150,450,500,100,{chairs:"around"}),n.wardrobe(560,300,200,56),n.counter(906,679,300,62,{hob:!0,sink:!0,rot:90}),n.label(290,320,"COMMON SLEEP","08 BEDS — 01 ROOM"),n.label(400,650,"COMMON TABLE","16 SEATS"),n.label(660,380,"SHARED WARDROBE"),n.text(912,250,"HYGIENE",12,"middle"),n.label(890,600,"KITCHEN","ONE STOVE"),n.chainH([0,195,375,555,800,1100],-48),n.chainV([0,500,1e3],-48),n.text(0,1135,"CURTAINS IN PLACE OF WALLS. NO ROOM BELONGS TO ANY ONE BODY.",12,"start",Mt),n.render({no:"004",title:"THE SHARED SELF",sheet:"A-104",note:"DESIRE: BELONGING / DEPENDENCY"})}function q2(){const n=new Qo(1100,900);n.grid([0,350,750,1100],[0,450,900]);const e=(t,i)=>({at:t,w:i,type:"window"});n.wallH(0,0,1100,36,[e(110,140),e(840,140)]),n.wallH(900,0,1100,36,[e(110,140),{at:510,w:80,swing:-1}]),n.wallV(0,0,900,36,[e(600,140)]),n.wallV(1100,0,900,36,[e(650,120)]);for(const[t,i,r]of[[110,0,!0],[840,0,!0],[110,900,!0]])for(let s=20;s<140;s+=20)n.raw(r?`<line x1="${t+s}" y1="${i-18}" x2="${t+s}" y2="${i+18}" stroke="${Le}" stroke-width="1.6"/>`:"","over");n.wallV(470,780,900,16),n.wallV(630,780,900,16),n.wallH(780,470,630,16,[{at:510,w:80,swing:-1}]),n.wallV(350,0,900,14,[{at:330,w:85,swing:-1},{at:560,w:85,swing:-1}],"partition"),n.wallV(750,0,900,14,[{at:330,w:85,swing:1},{at:560,w:85,swing:1}],"partition"),n.wallH(450,0,350,14,[],"partition"),n.wallH(450,750,1100,14,[],"partition"),n.wallH(250,750,1100,14,[{at:780,w:80,swing:1}],"partition"),n.room(450,320,200,200,46,{n:[{at:510,w:80,swing:-1}]}),n.shelf(480,452,140,28,0,4),n.bed(80,110,160,200),n.sofa(50,772,220,90,180),n.armchair(250,560,76),n.bath(910,24,166,72),n.toilet(785,26),n.sink(835,40,56),n.counter(790,372,290,62,{hob:!0,sink:!0}),n.desk(800,520,240,70),n.raw(`<g fill="none" stroke="${Le}" stroke-width="1">`+[0,1,2,3,4].map(t=>`<rect x="${812+t*45}" y="528" width="38" height="22"/>`).join("")+[0,1,2,3,4,5].map(t=>`<rect x="1058" y="${490+t*46}" width="20" height="38"/>`).join("")+"</g>","under"),n.camera(26,26,45),n.camera(26,874,-45),n.camera(372,22,50,240),n.camera(728,760,-140,220),n.camera(1074,272,150,220),n.camera(1074,476,135,260),n.camera(1074,24,140,160);for(const[t,i]of[[550,760],[392,600],[708,600],[550,300]])n.raw(`<circle cx="${t}" cy="${i}" r="10" fill="none" stroke="${Le}" stroke-width="0.8"/><circle cx="${t}" cy="${i}" r="3" fill="${Le}"/>`);return n.label(175,400,"BEDROOM","MONITORED"),n.label(175,520,"LIVING"),n.label(550,140,"HALL","MOTION SENSORS ×4"),n.label(550,850,"AIRLOCK"),n.label(550,405,"SAFE ROOM","72 H AUTONOMY"),n.label(925,310,"KITCHEN"),n.label(940,190,"BATH"),n.label(925,840,"MONITORING","07 FEEDS"),n.chainH([0,350,750,1100],-48),n.chainV([0,250,450,900],-48),n.text(0,1035,"EVERY ROOM WATCHED. EVERY THRESHOLD LOCKED. WHO IS PROTECTED FROM WHOM?",12,"start",Mt),n.render({no:"005",title:"THE CONTROLLED HOME",sheet:"A-105",note:"DESIRE: SECURITY / SURVEILLANCE"})}function K2(){const n=new Qo(1200,900);return n.grid([0,400,800],[0,450,900]),n.wallH(0,0,400,24,[{at:80,w:220,type:"window"}]),n.wallH(900,0,400,24,[{at:150,w:90,swing:-1}]),n.wallV(0,0,900,24,[{at:300,w:200,type:"window"}]),n.wallV(400,0,900,16,[{at:180,w:85,swing:1},{at:620,w:85,swing:1}]),n.wallH(450,0,400,14,[{at:250,w:100,type:"open"}],"partition"),n.sofa(60,340,220,90,180),n.table(120,200,110,60,{chairs:"none"}),n.plant(350,60),n.counter(40,470,300,62,{hob:!0,sink:!0}),n.roundTable(200,700,55,3),n.label(170,140,"LIVING"),n.label(330,820,"KITCHEN"),n.faded(.72,()=>{n.wallH(0,400,800,12,[{at:480,w:200,type:"window"}],"partition"),n.wallH(900,400,800,12,[],"partition"),n.wallH(550,400,800,10,[{at:450,w:80,swing:1}],"partition"),n.bed(520,150,160,200),n.wardrobe(560,470,180,56),n.bath(600,806,170,70),n.toilet(440,810),n.sink(500,834,56),n.label(600,400,"BEDROOM","FADING"),n.label(600,650,"BATH")}),n.faded(.4,()=>{n.wallV(800,0,900,10,[{at:300,w:85,type:"hidden",swing:1}],"ghost"),n.wallH(0,800,1200,8,[],"ghost"),n.wallH(900,800,1200,8,[],"dotted"),n.wallV(1200,0,900,8,[],"dotted"),n.room(830,40,190,220,8,{},"dotted"),n.bed(950,560,160,200),n.desk(880,330,140,60),n.label(925,160,"CONCEALED","NOT ON ANY RECORD"),n.label(1e3,470,"ROOM 04","UNRECORDED")},!0),n.dimH(0,400,-48),n.dimH(400,800,-48),n.dimH(800,1200,-48,"— — —"),n.chainV([0,450,900],-48),n.text(1300,450,"?",40,"middle",Le,'opacity="0.35"'),n.text(0,1035,"THE FURTHER YOU GO, THE LESS OF YOU IS RECORDED.",12,"start",Mt),n.render({no:"006",title:"THE VANISHING ROOM",sheet:"A-106",note:"DESIRE: ESCAPE / ANONYMITY"})}const Z2={isolation:$2,observation:X2,infinite:Y2,shared:j2,controlled:q2,vanishing:K2},sx=new Map;function Q2(n){let e=sx.get(n);return e||(e=Z2[n](),sx.set(n,e)),e}function J2(n){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Q2(n))}const ox=new Map;function td(n){if(n.image)return n.image;if(n.plan)return J2(n.plan);if(n.generator){let e=ox.get(n.id);if(!e){const t=H2(n.generator.seed,{no:n.no,title:n.title,desire:n.group});e="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),ox.set(n.id,e)}return e}return""}Nn.registerPlugin(Ge);function eC({entry:n,index:e,onOpen:t}){const i=r=>{const s=r.currentTarget.getBoundingClientRect();r.currentTarget.style.setProperty("--mx",`${r.clientX-s.left}px`),r.currentTarget.style.setProperty("--my",`${r.clientY-s.top}px`)};return j.jsxs("article",{className:`card card-${e%6}`,children:[j.jsxs("button",{type:"button",className:"card-figure",onPointerMove:i,onClick:()=>t(e),"data-cursor":"OPEN","aria-label":`Open ${n.no} — ${n.title}`,children:[j.jsx("img",{src:td(n),alt:"",loading:"lazy",draggable:!1}),j.jsx("span",{className:"card-vellum"}),j.jsx("span",{className:"card-meta label",children:n.meta.map(r=>j.jsxs("span",{children:[r.label.toUpperCase()," — ",r.value]},r.label))})]}),j.jsxs("div",{className:"card-caption",children:[j.jsxs("p",{className:"card-no label",children:["ARCHIVE ",n.no]}),j.jsx("h3",{children:n.title.toUpperCase()}),j.jsxs("p",{className:"card-desire label",children:["DESIRE: ",n.desire.toUpperCase()]}),j.jsx("p",{className:"card-summary",children:n.summary})]})]})}function tC({onOpen:n}){const e=Ye.useRef(null);return Ye.useLayoutEffect(()=>{const t=Nn.context(()=>{Nn.utils.toArray(".card").forEach(i=>{Nn.fromTo(i,{opacity:0,y:60},{opacity:1,y:0,duration:1.2,ease:"power2.out",scrollTrigger:{trigger:i,start:"top 88%"}})})},e);return()=>t.revert()},[]),j.jsxs("section",{className:"archive",id:"archive",ref:e,children:[j.jsxs("header",{className:"archive-head",children:[j.jsxs("p",{className:"label",children:["05 / ",fr.archive.heading]}),j.jsx("h2",{children:fr.reveal.subtitle.split(" ").map((t,i)=>j.jsxs("span",{children:[t," "]},i))}),j.jsx("p",{className:"archive-intro",children:fr.archive.intro})]}),j.jsx("ol",{className:"archive-index",children:sc.map((t,i)=>j.jsx("li",{children:j.jsxs("button",{type:"button",onClick:()=>n(i),"data-cursor":"OPEN",children:[j.jsx("span",{children:t.no}),j.jsx("span",{children:t.title.toUpperCase()}),j.jsx("span",{children:t.desire.toUpperCase()}),j.jsx("span",{"aria-hidden":"true",children:"→"})]})},t.id))}),j.jsx("div",{className:"archive-grid",children:sc.map((t,i)=>j.jsx(eC,{entry:t,index:i,onOpen:n},t.id))}),j.jsxs("footer",{className:"colophon label",children:[fr.colophon.map(t=>j.jsx("span",{children:t},t)),j.jsx("a",{href:"#top",children:"BACK TO TOP ↑"})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i_="169",nC=0,ax=1,iC=2,jM=1,rC=2,zr=3,Qs=0,di=1,Xr=2,$s=0,Za=1,lx=2,ux=3,cx=4,sC=5,yo=100,oC=101,aC=102,lC=103,uC=104,cC=200,fC=201,hC=202,dC=203,jm=204,qm=205,pC=206,mC=207,gC=208,_C=209,vC=210,xC=211,yC=212,SC=213,MC=214,Km=0,Zm=1,Qm=2,dl=3,Jm=4,e0=5,t0=6,n0=7,qM=0,EC=1,wC=2,Xs=0,TC=1,AC=2,CC=3,RC=4,bC=5,PC=6,LC=7,KM=300,pl=301,ml=302,i0=303,r0=304,nd=306,s0=1e3,Co=1001,o0=1002,si=1003,DC=1004,Xc=1005,Fn=1006,Kd=1007,Is=1008,os=1009,ZM=1010,QM=1011,oc=1012,r_=1013,jo=1014,Ar=1015,Ml=1016,s_=1017,o_=1018,gl=1020,JM=35902,eE=1021,tE=1022,hr=1023,nE=1024,iE=1025,Qa=1026,_l=1027,a_=1028,l_=1029,rE=1030,u_=1031,c_=1033,Hf=33776,Vf=33777,Gf=33778,Wf=33779,a0=35840,l0=35841,u0=35842,c0=35843,f0=36196,h0=37492,d0=37496,p0=37808,m0=37809,g0=37810,_0=37811,v0=37812,x0=37813,y0=37814,S0=37815,M0=37816,E0=37817,w0=37818,T0=37819,A0=37820,C0=37821,$f=36492,R0=36494,b0=36495,sE=36283,P0=36284,L0=36285,D0=36286,IC=3200,NC=3201,UC=0,OC=1,ws="",yr="srgb",Ir="srgb-linear",f_="display-p3",id="display-p3-linear",Ph="linear",Ut="srgb",Lh="rec709",Dh="p3",sa=7680,fx=519,FC=512,kC=513,BC=514,oE=515,zC=516,HC=517,VC=518,GC=519,hx=35044,dx="300 es",Kr=2e3,Ih=2001;class El{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=Math.PI/180,I0=180/Math.PI;function dc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function WC(n,e){return(n%e+e)%e}function Qd(n,e,t){return(1-t)*n+t*e}function zl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],v=r[1],x=r[4],E=r[7],A=r[2],S=r[5],M=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*m+a*x+l*S,s[6]=o*p+a*E+l*M,s[1]=u*_+c*v+h*A,s[4]=u*m+c*x+h*S,s[7]=u*p+c*E+h*M,s[2]=f*_+d*v+g*A,s[5]=f*m+d*x+g*S,s[8]=f*p+d*E+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,d=u*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jd=new nt;function aE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $C(){const n=Nh("canvas");return n.style.display="block",n}const px={};function Xf(n){n in px||(px[n]=!0,console.warn(n))}function XC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function YC(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jC(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mx=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gx=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[Ir]:{transfer:Ph,primaries:Lh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[yr]:{transfer:Ut,primaries:Lh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[id]:{transfer:Ph,primaries:Dh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx)},[f_]:{transfer:Ut,primaries:Dh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx).convertLinearToSRGB()}},qC=new Set([Ir,id]),yt={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hl[e].toReference,r=Hl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hl[n].primaries},getTransfer:function(n){return n===ws?Ph:Hl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Hl[e].luminanceCoefficients)}};function Ja(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ep(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oa;class KC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oa===void 0&&(oa=Nh("canvas")),oa.width=e.width,oa.height=e.height;const i=oa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ja(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ja(t[i]/255)*255):t[i]=Ja(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZC=0;class lE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=dc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tp(r[o].image)):s.push(tp(r[o]))}else s=tp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?KC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QC=0;class zn extends El{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Co,r=Co,s=Fn,o=Is,a=hr,l=os,u=zn.DEFAULT_ANISOTROPY,c=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=dc(),this.name="",this.source=new lE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case s0:e.x=e.x-Math.floor(e.x);break;case Co:e.x=e.x<0?0:1;break;case o0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case s0:e.y=e.y-Math.floor(e.y);break;case Co:e.y=e.y<0?0:1;break;case o0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=KM;zn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,E=(d+1)/2,A=(p+1)/2,S=(c+f)/4,M=(h+_)/4,C=(g+m)/4;return x>E&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=S/i,s=M/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=S/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JC extends El{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends JC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uE extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=Co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eR extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=Co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==d||c!==g){let m=1-a;const p=l*f+u*d+c*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),S=Math.atan2(A,p*v);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}const E=a*v;if(l=l*m+f*E,u=u*m+d*E,c=c*m+g*E,h=h*m+_*E,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*d-u*f,e[t+1]=l*g+c*f+u*h-a*d,e[t+2]=u*g+c*d+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h-f*d*g;break;case"YXZ":this._x=f*c*h+u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h+f*d*g;break;case"ZXY":this._x=f*c*h-u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h-f*d*g;break;case"ZYX":this._x=f*c*h-u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h+f*d*g;break;case"YZX":this._x=f*c*h+u*d*g,this._y=u*d*h+f*c*g,this._z=u*c*g-f*d*h,this._w=u*c*h-f*d*g;break;case"XZY":this._x=f*c*h-u*d*g,this._y=u*d*h-f*c*g,this._z=u*c*g+f*d*h,this._w=u*c*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_x.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_x.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return np.copy(this).projectOnVector(e),this.sub(np)}reflect(e){return this.sub(np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new W,_x=new wl;class Jo{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yc.copy(i.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vl),jc.subVectors(this.max,Vl),aa.subVectors(e.a,Vl),la.subVectors(e.b,Vl),ua.subVectors(e.c,Vl),ds.subVectors(la,aa),ps.subVectors(ua,la),oo.subVectors(aa,ua);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-oo.z,oo.y,ds.z,0,-ds.x,ps.z,0,-ps.x,oo.z,0,-oo.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-oo.y,oo.x,0];return!ip(t,aa,la,ua,jc)||(t=[1,0,0,0,1,0,0,0,1],!ip(t,aa,la,ua,jc))?!1:(qc.crossVectors(ds,ps),t=[qc.x,qc.y,qc.z],ip(t,aa,la,ua,jc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nr=[new W,new W,new W,new W,new W,new W,new W,new W],tr=new W,Yc=new Jo,aa=new W,la=new W,ua=new W,ds=new W,ps=new W,oo=new W,Vl=new W,jc=new W,qc=new W,ao=new W;function ip(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ao.fromArray(n,s);const a=r.x*Math.abs(ao.x)+r.y*Math.abs(ao.y)+r.z*Math.abs(ao.z),l=e.dot(ao),u=t.dot(ao),c=i.dot(ao);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const tR=new Jo,Gl=new W,rp=new W;class Tl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const t=Gl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(rp)),this.expandByPoint(Gl.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ur=new W,sp=new W,Kc=new W,ms=new W,op=new W,Zc=new W,ap=new W;class cE{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sp.copy(e).add(t).multiplyScalar(.5),Kc.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(sp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kc),a=ms.dot(this.direction),l=-ms.dot(Kc),u=ms.lengthSq(),c=Math.abs(1-o*o);let h,f,d,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(sp).addScaledVector(Kc,f),d}intersectSphere(e,t){Ur.subVectors(e.center,this.origin);const i=Ur.dot(this.direction),r=Ur.dot(Ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,i,r,s){op.subVectors(t,e),Zc.subVectors(i,e),ap.crossVectors(op,Zc);let o=this.direction.dot(ap),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);const l=a*this.direction.dot(Zc.crossVectors(ms,Zc));if(l<0)return null;const u=a*this.direction.dot(op.cross(ms));if(u<0||l+u>o)return null;const c=-a*ms.dot(ap);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ca.setFromMatrixColumn(e,0).length(),s=1/ca.setFromMatrixColumn(e,1).length(),o=1/ca.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,d=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=d+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,d=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,d=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,d=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-d,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nR,e,iR)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),gs.crossVectors(i,vi),gs.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),gs.crossVectors(i,vi)),gs.normalize(),Qc.crossVectors(vi,gs),r[0]=gs.x,r[4]=Qc.x,r[8]=vi.x,r[1]=gs.y,r[5]=Qc.y,r[9]=vi.y,r[2]=gs.z,r[6]=Qc.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],E=i[11],A=i[15],S=r[0],M=r[4],C=r[8],L=r[12],y=r[1],w=r[5],N=r[9],U=r[13],V=r[2],X=r[6],B=r[10],Y=r[14],I=r[3],Z=r[7],b=r[11],ne=r[15];return s[0]=o*S+a*y+l*V+u*I,s[4]=o*M+a*w+l*X+u*Z,s[8]=o*C+a*N+l*B+u*b,s[12]=o*L+a*U+l*Y+u*ne,s[1]=c*S+h*y+f*V+d*I,s[5]=c*M+h*w+f*X+d*Z,s[9]=c*C+h*N+f*B+d*b,s[13]=c*L+h*U+f*Y+d*ne,s[2]=g*S+_*y+m*V+p*I,s[6]=g*M+_*w+m*X+p*Z,s[10]=g*C+_*N+m*B+p*b,s[14]=g*L+_*U+m*Y+p*ne,s[3]=v*S+x*y+E*V+A*I,s[7]=v*M+x*w+E*X+A*Z,s[11]=v*C+x*N+E*B+A*b,s[15]=v*L+x*U+E*Y+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*d-i*l*d)+_*(+t*l*d-t*u*f+s*o*f-r*o*d+r*u*c-s*l*c)+m*(+t*u*h-t*a*d-s*o*h+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*u-_*f*u+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*u-c*m*u-g*l*d+o*m*d+c*l*p-o*f*p,E=c*_*u-g*h*u+g*a*d-o*_*d-c*a*p+o*h*p,A=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,S=t*v+i*x+r*E+s*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=v*M,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*M,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*d-i*l*d)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*d-t*m*d-c*r*p+t*f*p)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*d+t*l*d)*M,e[8]=E*M,e[9]=(g*h*s-c*_*s-g*i*d+t*_*d+c*i*p-t*h*p)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*d-t*a*d)*M,e[12]=A*M,e[13]=(c*_*r-g*h*r+g*i*f-t*_*f-c*i*m+t*h*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,d=s*c,g=s*h,_=o*c,m=o*h,p=a*h,v=l*u,x=l*c,E=l*h,A=i.x,S=i.y,M=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+E)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(d-E)*S,r[5]=(1-(f+p))*S,r[6]=(m+v)*S,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ca.set(r[0],r[1],r[2]).length();const o=ca.set(r[4],r[5],r[6]).length(),a=ca.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const u=1/s,c=1/o,h=1/a;return nr.elements[0]*=u,nr.elements[1]*=u,nr.elements[2]*=u,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=h,nr.elements[9]*=h,nr.elements[10]*=h,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Kr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===Kr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ih)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Kr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,d=(i+r)*c;let g,_;if(a===Kr)g=(o+s)*h,_=-2*h;else if(a===Ih)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ca=new W,nr=new Lt,nR=new W(0,0,0),iR=new W(1,1,1),gs=new W,Qc=new W,vi=new W,vx=new Lt,xx=new wl;class ls{constructor(e=0,t=0,i=0,r=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class fE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rR=0;const yx=new W,fa=new wl,Or=new Lt,Jc=new W,Wl=new W,sR=new W,oR=new wl,Sx=new W(1,0,0),Mx=new W(0,1,0),Ex=new W(0,0,1),wx={type:"added"},aR={type:"removed"},ha={type:"childadded",child:null},lp={type:"childremoved",child:null};class pi extends El{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new W,t=new ls,i=new wl,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(Mx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(Mx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jc.copy(e):Jc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(Wl,Jc,this.up):Or.lookAt(Jc,Wl,this.up),this.quaternion.setFromRotationMatrix(Or),r&&(Or.extractRotation(r.matrixWorld),fa.setFromRotationMatrix(Or),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wx),ha.child=e,this.dispatchEvent(ha),ha.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aR),lp.child=e,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wx),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,e,sR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,oR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pi.DEFAULT_UP=new W(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new W,Fr=new W,up=new W,kr=new W,da=new W,pa=new W,Tx=new W,cp=new W,fp=new W,hp=new W,dp=new qt,pp=new qt,mp=new qt;class cr{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ir.subVectors(e,t),r.cross(ir);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ir.subVectors(r,t),Fr.subVectors(i,t),up.subVectors(e,t);const o=ir.dot(ir),a=ir.dot(Fr),l=ir.dot(up),u=Fr.dot(Fr),c=Fr.dot(up),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,kr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kr.x),l.addScaledVector(o,kr.y),l.addScaledVector(a,kr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(e,t),pp.fromBufferAttribute(e,i),mp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dp,s.x),o.addScaledVector(pp,s.y),o.addScaledVector(mp,s.z),o}static isFrontFacing(e,t,i,r){return ir.subVectors(i,t),Fr.subVectors(e,t),ir.cross(Fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),ir.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;da.subVectors(r,i),pa.subVectors(s,i),cp.subVectors(e,i);const l=da.dot(cp),u=pa.dot(cp);if(l<=0&&u<=0)return t.copy(i);fp.subVectors(e,r);const c=da.dot(fp),h=pa.dot(fp);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(da,o);hp.subVectors(e,s);const d=da.dot(hp),g=pa.dot(hp);if(g>=0&&d<=g)return t.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(pa,a);const m=c*g-d*h;if(m<=0&&h-c>=0&&d-g>=0)return Tx.subVectors(s,r),a=(h-c)/(h-c+(d-g)),t.copy(r).addScaledVector(Tx,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(da,o).addScaledVector(pa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},ef={h:0,s:0,l:0};function gp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=WC(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gp(o,s,e+1/3),this.g=gp(o,s,e),this.b=gp(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=yr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yr){const i=hE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}copyLinearToSRGB(e){return this.r=ep(e.r),this.g=ep(e.g),this.b=ep(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yr){return yt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Un(Pn.r*255,0,255))*65536+Math.round(Un(Pn.g*255,0,255))*256+Math.round(Un(Pn.b*255,0,255))}getHexString(e=yr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=yr){yt.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,r=Pn.b;return e!==yr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(ef);const i=Qd(_s.h,ef.h,t),r=Qd(_s.s,ef.s,t),s=Qd(_s.l,ef.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new vt;vt.NAMES=hE;let lR=0;class pc extends El{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=dc(),this.name="",this.type="Material",this.blending=Za,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jm,this.blendDst=qm,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(i.blending=this.blending),this.side!==Qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jm&&(i.blendSrc=this.blendSrc),this.blendDst!==qm&&(i.blendDst=this.blendDst),this.blendEquation!==yo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dE extends pc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=qM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new W,tf=new ct;class Li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hx,this.updateRanges=[],this.gpuType=Ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tf.fromBufferAttribute(this,t),tf.applyMatrix3(e),this.setXY(t,tf.x,tf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hx&&(e.usage=this.usage),e}}class pE extends Li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mE extends Li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fo extends Li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uR=0;const Fi=new Lt,_p=new pi,ma=new W,xi=new Jo,$l=new Jo,mn=new W;class cs extends El{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=dc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?mE:pE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$l.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(xi.min,$l.min),xi.expandByPoint(mn),mn.addVectors(xi.max,$l.max),xi.expandByPoint(mn)):(xi.expandByPoint($l.min),xi.expandByPoint($l.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)mn.fromBufferAttribute(a,u),l&&(ma.fromBufferAttribute(e,u),mn.add(ma)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new W,l[C]=new W;const u=new W,c=new W,h=new W,f=new ct,d=new ct,g=new ct,_=new W,m=new W;function p(C,L,y){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,L),g.fromBufferAttribute(s,y),c.sub(u),h.sub(u),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(w),a[C].add(_),a[L].add(_),a[y].add(_),l[C].add(m),l[L].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,L=v.length;C<L;++C){const y=v[C],w=y.start,N=y.count;for(let U=w,V=w+N;U<V;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new W,E=new W,A=new W,S=new W;function M(C){A.fromBufferAttribute(r,C),S.copy(A);const L=a[C];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),E.crossVectors(S,L);const w=E.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,w)}for(let C=0,L=v.length;C<L;++C){const y=v[C],w=y.start,N=y.count;for(let U=w,V=w+N;U<V;U+=3)M(e.getX(U+0)),M(e.getX(U+1)),M(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)f[g++]=u[d++]}return new Li(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new Lt,lo=new cE,nf=new Tl,Cx=new W,rf=new W,sf=new W,of=new W,vp=new W,af=new W,Rx=new W,lf=new W;class Ri extends pi{constructor(e=new cs,t=new dE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){af.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(vp.fromBufferAttribute(h,e),o?af.addScaledVector(vp,c):af.addScaledVector(vp.sub(t),c))}t.add(af)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nf.copy(i.boundingSphere),nf.applyMatrix4(s),lo.copy(e.ray).recast(e.near),!(nf.containsPoint(lo.origin)===!1&&(lo.intersectSphere(nf,Cx)===null||lo.origin.distanceToSquared(Cx)>(e.far-e.near)**2))&&(Ax.copy(s).invert(),lo.copy(e.ray).applyMatrix4(Ax),!(i.boundingBox!==null&&lo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,A=x;E<A;E+=3){const S=a.getX(E),M=a.getX(E+1),C=a.getX(E+2);r=uf(this,p,e,i,u,c,h,S,M,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=uf(this,o,e,i,u,c,h,v,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,A=x;E<A;E+=3){const S=E,M=E+1,C=E+2;r=uf(this,p,e,i,u,c,h,S,M,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,E=m+2;r=uf(this,o,e,i,u,c,h,v,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cR(n,e,t,i,r,s,o,a){let l;if(e.side===di?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qs,a),l===null)return null;lf.copy(a),lf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(lf);return u<t.near||u>t.far?null:{distance:u,point:lf.clone(),object:n}}function uf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,rf),n.getVertexPosition(l,sf),n.getVertexPosition(u,of);const c=cR(n,e,t,i,rf,sf,of,Rx);if(c){const h=new W;cr.getBarycoord(Rx,rf,sf,of,h),r&&(c.uv=cr.getInterpolatedAttribute(r,a,l,u,h,new ct)),s&&(c.uv1=cr.getInterpolatedAttribute(s,a,l,u,h,new ct)),o&&(c.normal=cr.getInterpolatedAttribute(o,a,l,u,h,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new W,materialIndex:0};cr.getNormal(rf,sf,of,f.normal),c.face=f,c.barycoord=h}return c}class mc extends cs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fo(u,3)),this.setAttribute("normal",new Fo(c,3)),this.setAttribute("uv",new Fo(h,2));function g(_,m,p,v,x,E,A,S,M,C,L){const y=E/M,w=A/C,N=E/2,U=A/2,V=S/2,X=M+1,B=C+1;let Y=0,I=0;const Z=new W;for(let b=0;b<B;b++){const ne=b*w-U;for(let Ee=0;Ee<X;Ee++){const We=Ee*y-N;Z[_]=We*v,Z[m]=ne*x,Z[p]=V,u.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=S>0?1:-1,c.push(Z.x,Z.y,Z.z),h.push(Ee/M),h.push(1-b/C),Y+=1}}for(let b=0;b<C;b++)for(let ne=0;ne<M;ne++){const Ee=f+ne+X*b,We=f+ne+X*(b+1),q=f+(ne+1)+X*(b+1),te=f+(ne+1)+X*b;l.push(Ee,We,te),l.push(We,q,te),I+=6}a.addGroup(d,I,L),d+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wn(n){const e={};for(let t=0;t<n.length;t++){const i=vl(n[t]);for(const r in i)e[r]=i[r]}return e}function fR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const hR={clone:vl,merge:Wn};var dR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends pc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dR,this.fragmentShader=pR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vl(e.uniforms),this.uniformsGroups=fR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _E extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new W,bx=new ct,Px=new ct;class Gi extends _E{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=I0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return I0*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,bx,Px),t.subVectors(Px,bx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ga=-90,_a=1;class mR extends pi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gi(ga,_a,e,t);r.layers=this.layers,this.add(r);const s=new Gi(ga,_a,e,t);s.layers=this.layers,this.add(s);const o=new Gi(ga,_a,e,t);o.layers=this.layers,this.add(o);const a=new Gi(ga,_a,e,t);a.layers=this.layers,this.add(a);const l=new Gi(ga,_a,e,t);l.layers=this.layers,this.add(l);const u=new Gi(ga,_a,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ih)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vE extends zn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:pl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gR extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mc(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:vl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:$s});s.uniforms.tEquirect.value=t;const o=new Ri(r,s),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=Fn),new mR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const xp=new W,_R=new W,vR=new nt;class vo{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xp.subVectors(i,t).cross(_R.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vR.getNormalMatrix(e),r=this.coplanarPoint(xp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const uo=new Tl,cf=new W;class xE{constructor(e=new vo,t=new vo,i=new vo,r=new vo,s=new vo,o=new vo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],v=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,f-u,m-d,E-p).normalize(),i[1].setComponents(l+s,f+u,m+d,E+p).normalize(),i[2].setComponents(l+o,f+c,m+g,E+v).normalize(),i[3].setComponents(l-o,f-c,m-g,E-v).normalize(),i[4].setComponents(l-a,f-h,m-_,E-x).normalize(),t===Kr)i[5].setComponents(l+a,f+h,m+_,E+x).normalize();else if(t===Ih)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),uo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(uo)}intersectsSprite(e){return uo.center.set(0,0,0),uo.radius=.7071067811865476,uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(uo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cf.x=r.normal.x>0?e.max.x:e.min.x,cf.y=r.normal.y>0?e.max.y:e.min.y,cf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Al extends cs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const v=p*f-o;for(let x=0;x<u;x++){const E=x*h-s;g.push(E,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,E=v+u*(p+1),A=v+1+u*(p+1),S=v+1+u*p;d.push(x,E,S),d.push(E,A,S)}this.setIndex(d),this.setAttribute("position",new Fo(g,3)),this.setAttribute("normal",new Fo(_,3)),this.setAttribute("uv",new Fo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var yR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
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
#endif`,MR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ER=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AR=`#ifdef USE_AOMAP
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
#endif`,CR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`#ifdef USE_BATCHING
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
#endif`,bR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IR=`#ifdef USE_IRIDESCENCE
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
#endif`,NR=`#ifdef USE_BUMPMAP
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
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GR=`#define PI 3.141592653589793
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
} // validated`,WR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$R=`vec3 transformedNormal = objectNormal;
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
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KR="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
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
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
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
#endif`,vb=`struct PhysicalMaterial {
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
}`,xb=`
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bb=`#if defined( USE_POINTS_UV )
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
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
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
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,nP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rP=`float getShadowMask() {
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
}`,sP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oP=`#ifdef USE_SKINNING
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
#endif`,aP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lP=`#ifdef USE_SKINNING
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
#endif`,uP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dP=`#ifdef USE_TRANSMISSION
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
#endif`,pP=`#ifdef USE_TRANSMISSION
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
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yP=`uniform sampler2D t2D;
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
}`,SP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`#include <common>
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
}`,AP=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CP=`#define DISTANCE
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
}`,RP=`#define DISTANCE
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
}`,bP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LP=`uniform float scale;
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
}`,DP=`uniform vec3 diffuse;
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
}`,IP=`#include <common>
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
}`,NP=`uniform vec3 diffuse;
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
}`,UP=`#define LAMBERT
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
}`,OP=`#define LAMBERT
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
}`,FP=`#define MATCAP
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
}`,kP=`#define MATCAP
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
}`,BP=`#define NORMAL
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
}`,zP=`#define NORMAL
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
}`,HP=`#define PHONG
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
}`,VP=`#define PHONG
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
}`,GP=`#define STANDARD
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
}`,WP=`#define STANDARD
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
}`,$P=`#define TOON
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
}`,XP=`#define TOON
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
}`,YP=`uniform float size;
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
}`,jP=`uniform vec3 diffuse;
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
}`,qP=`#include <common>
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
}`,KP=`uniform vec3 color;
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
}`,ZP=`uniform float rotation;
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
}`,QP=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:yR,alphahash_pars_fragment:SR,alphamap_fragment:MR,alphamap_pars_fragment:ER,alphatest_fragment:wR,alphatest_pars_fragment:TR,aomap_fragment:AR,aomap_pars_fragment:CR,batching_pars_vertex:RR,batching_vertex:bR,begin_vertex:PR,beginnormal_vertex:LR,bsdfs:DR,iridescence_fragment:IR,bumpmap_pars_fragment:NR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:OR,clipping_planes_pars_vertex:FR,clipping_planes_vertex:kR,color_fragment:BR,color_pars_fragment:zR,color_pars_vertex:HR,color_vertex:VR,common:GR,cube_uv_reflection_fragment:WR,defaultnormal_vertex:$R,displacementmap_pars_vertex:XR,displacementmap_vertex:YR,emissivemap_fragment:jR,emissivemap_pars_fragment:qR,colorspace_fragment:KR,colorspace_pars_fragment:ZR,envmap_fragment:QR,envmap_common_pars_fragment:JR,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:hb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:rb,fog_fragment:sb,fog_pars_fragment:ob,gradientmap_pars_fragment:ab,lightmap_pars_fragment:lb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:cb,lights_pars_begin:fb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:yb,lights_fragment_end:Sb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:bb,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Db,morphcolor_vertex:Ib,morphnormal_vertex:Nb,morphtarget_pars_vertex:Ub,morphtarget_vertex:Ob,normal_fragment_begin:Fb,normal_fragment_maps:kb,normal_pars_fragment:Bb,normal_pars_vertex:zb,normal_vertex:Hb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Wb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:Xb,opaque_fragment:Yb,packing:jb,premultiplied_alpha_fragment:qb,project_vertex:Kb,dithering_fragment:Zb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:eP,shadowmap_pars_fragment:tP,shadowmap_pars_vertex:nP,shadowmap_vertex:iP,shadowmask_pars_fragment:rP,skinbase_vertex:sP,skinning_pars_vertex:oP,skinning_vertex:aP,skinnormal_vertex:lP,specularmap_fragment:uP,specularmap_pars_fragment:cP,tonemapping_fragment:fP,tonemapping_pars_fragment:hP,transmission_fragment:dP,transmission_pars_fragment:pP,uv_pars_fragment:mP,uv_pars_vertex:gP,uv_vertex:_P,worldpos_vertex:vP,background_vert:xP,background_frag:yP,backgroundCube_vert:SP,backgroundCube_frag:MP,cube_vert:EP,cube_frag:wP,depth_vert:TP,depth_frag:AP,distanceRGBA_vert:CP,distanceRGBA_frag:RP,equirect_vert:bP,equirect_frag:PP,linedashed_vert:LP,linedashed_frag:DP,meshbasic_vert:IP,meshbasic_frag:NP,meshlambert_vert:UP,meshlambert_frag:OP,meshmatcap_vert:FP,meshmatcap_frag:kP,meshnormal_vert:BP,meshnormal_frag:zP,meshphong_vert:HP,meshphong_frag:VP,meshphysical_vert:GP,meshphysical_frag:WP,meshtoon_vert:$P,meshtoon_frag:XP,points_vert:YP,points_frag:jP,shadow_vert:qP,shadow_frag:KP,sprite_vert:ZP,sprite_frag:QP},ve={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Sr={basic:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Wn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Wn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Wn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Wn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Wn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Wn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Wn([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Wn([ve.lights,ve.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Sr.physical={uniforms:Wn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ff={r:0,b:0,g:0},co=new ls,JP=new Lt;function eL(n,e,t,i,r,s,o){const a=new vt(0);let l=s===!0?0:1,u,c,h=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const E=g(v);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===nd)?(c===void 0&&(c=new Ri(new mc(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:vl(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),co.copy(x.backgroundRotation),co.x*=-1,co.y*=-1,co.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JP.makeRotationFromEuler(co)),c.material.toneMapped=yt.getTransfer(E.colorSpace)!==Ut,(h!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Ri(new Al(2,2),new Qi({name:"BackgroundMaterial",uniforms:vl(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=yt.getTransfer(E.colorSpace)!==Ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,x){v.getRGB(ff,gE(n)),i.buffers.color.setClear(ff.r,ff.g,ff.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function tL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,w,N,U,V){let X=!1;const B=h(U,N,w);s!==B&&(s=B,u(s.object)),X=d(y,U,N,V),X&&g(y,U,N,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(y,w,N,U),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function h(y,w,N){const U=N.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let X=V[w.id];X===void 0&&(X={},V[w.id]=X);let B=X[U];return B===void 0&&(B=f(l()),X[U]=B),B}function f(y){const w=[],N=[],U=[];for(let V=0;V<t;V++)w[V]=0,N[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,w,N,U){const V=s.attributes,X=w.attributes;let B=0;const Y=N.getAttributes();for(const I in Y)if(Y[I].location>=0){const b=V[I];let ne=X[I];if(ne===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),b===void 0||b.attribute!==ne||ne&&b.data!==ne.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function g(y,w,N,U){const V={},X=w.attributes;let B=0;const Y=N.getAttributes();for(const I in Y)if(Y[I].location>=0){let b=X[I];b===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(b=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(b=y.instanceColor));const ne={};ne.attribute=b,b&&b.data&&(ne.data=b.data),V[I]=ne,B++}s.attributes=V,s.attributesNum=B,s.index=U}function _(){const y=s.newAttributes;for(let w=0,N=y.length;w<N;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){const N=s.newAttributes,U=s.enabledAttributes,V=s.attributeDivisors;N[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),V[y]!==w&&(n.vertexAttribDivisor(y,w),V[y]=w)}function v(){const y=s.newAttributes,w=s.enabledAttributes;for(let N=0,U=w.length;N<U;N++)w[N]!==y[N]&&(n.disableVertexAttribArray(N),w[N]=0)}function x(y,w,N,U,V,X,B){B===!0?n.vertexAttribIPointer(y,w,N,V,X):n.vertexAttribPointer(y,w,N,U,V,X)}function E(y,w,N,U){_();const V=U.attributes,X=N.getAttributes(),B=w.defaultAttributeValues;for(const Y in X){const I=X[Y];if(I.location>=0){let Z=V[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const b=Z.normalized,ne=Z.itemSize,Ee=e.get(Z);if(Ee===void 0)continue;const We=Ee.buffer,q=Ee.type,te=Ee.bytesPerElement,ce=q===n.INT||q===n.UNSIGNED_INT||Z.gpuType===r_;if(Z.isInterleavedBufferAttribute){const ue=Z.data,De=ue.stride,Re=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let Ze=0;Ze<I.locationSize;Ze++)p(I.location+Ze,ue.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ze=0;Ze<I.locationSize;Ze++)m(I.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ze=0;Ze<I.locationSize;Ze++)x(I.location+Ze,ne/I.locationSize,q,b,De*te,(Re+ne/I.locationSize*Ze)*te,ce)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)p(I.location+ue,Z.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ue=0;ue<I.locationSize;ue++)x(I.location+ue,ne/I.locationSize,q,b,ne*te,ne/I.locationSize*ue*te,ce)}}else if(B!==void 0){const b=B[Y];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(I.location,b);break;case 3:n.vertexAttrib3fv(I.location,b);break;case 4:n.vertexAttrib4fv(I.location,b);break;default:n.vertexAttrib1fv(I.location,b)}}}}v()}function A(){C();for(const y in i){const w=i[y];for(const N in w){const U=w[N];for(const V in U)c(U[V].object),delete U[V];delete w[N]}delete i[y]}}function S(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const N in w){const U=w[N];for(const V in U)c(U[V].object),delete U[V];delete w[N]}delete i[y.id]}function M(y){for(const w in i){const N=i[w];if(N[y.id]===void 0)continue;const U=N[y.id];for(const V in U)c(U[V].object),delete U[V];delete N[y.id]}}function C(){L(),o=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function nL(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];t.update(d,i,1)}function l(u,c,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iL(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==hr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const C=M===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==os&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Ar&&!C)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:A,maxSamples:S}}function rL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new vo,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let E=p.clippingState||null;l.value=E,E=c(g,f,x,d);for(let A=0;A!==x;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sL(n){let e=new WeakMap;function t(o,a){return a===i0?o.mapping=pl:a===r0&&(o.mapping=ml),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===i0||a===r0)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class SE extends _E{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fa=4,Lx=[.125,.215,.35,.446,.526,.582],So=20,yp=new SE,Dx=new vt;let Sp=null,Mp=0,Ep=0,wp=!1;const xo=(1+Math.sqrt(5))/2,va=1/xo,Ix=[new W(-xo,va,0),new W(xo,va,0),new W(-va,0,xo),new W(va,0,xo),new W(0,xo,-va),new W(0,xo,va),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Nx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp,Mp,Ep),this._renderer.xr.enabled=wp,e.scissorTest=!1,hf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pl||e.mapping===ml?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ml,format:hr,colorSpace:Ir,depthBuffer:!1},r=Ux(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oL(s)),this._blurMaterial=aL(s,e,t)}return r}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,yp)}_sceneToCubeUV(e,t,i,r){const a=new Gi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Dx),c.toneMapping=Xs,c.autoClear=!1;const d=new dE({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),g=new Ri(new mc,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Dx),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;hf(r,v*x,p>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pl||e.mapping===ml;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,yp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ix[(r-s-1)%Ix.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ri(this._lodPlanes[r],u),f=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*So-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):So;m>So&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${So}`);const p=[];let v=0;for(let M=0;M<So;++M){const C=M/_,L=Math.exp(-C*C/2);p.push(L),M===0?v+=L:M<m&&(v+=2*L)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const E=this._sizeLods[r],A=3*E*(r>x-Fa?r-x+Fa:0),S=4*(this._cubeSize-E);hf(t,A,S,3*E,2*E),l.setRenderTarget(t),l.render(h,yp)}}function oL(n){const e=[],t=[],i=[];let r=n;const s=n-Fa+1+Lx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Fa?l=Lx[o-n+Fa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let S=0;S<d;S++){const M=S%3*2/3-1,C=S>2?0:-1,L=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];v.set(L,_*g*S),x.set(f,m*g*S);const y=[S,S,S,S,S,S];E.set(y,p*g*S)}const A=new cs;A.setAttribute("position",new Li(v,_)),A.setAttribute("uv",new Li(x,m)),A.setAttribute("faceIndex",new Li(E,p)),e.push(A),r>Fa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ux(n,e,t){const i=new as(n,e,t);return i.texture.mapping=nd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aL(n,e,t){const i=new Float32Array(So),r=new W(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:So,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:h_(),fragmentShader:`

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
		`,blending:$s,depthTest:!1,depthWrite:!1})}function Ox(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:h_(),fragmentShader:`

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
		`,blending:$s,depthTest:!1,depthWrite:!1})}function Fx(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:h_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function h_(){return`

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
	`}function lL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===i0||l===r0,c=l===pl||l===ml;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Nx(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new Nx(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cL(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,E=v.length;x<E;x+=3){const A=v[x+0],S=v[x+1],M=v[x+2];f.push(A,S,S,M,M,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,E=v.length/3-1;x<E;x+=3){const A=x+0,S=x+1,M=x+2;f.push(A,S,S,M,M,A)}}else return;const m=new(aE(f)?mE:pE)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function c(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function fL(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function u(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function c(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v];for(let v=0;v<_.length;v++)t.update(p,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function hL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dL(n,e,t){const i=new WeakMap,r=new qt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let A=a.attributes.position.count*E,S=1;A>e.maxTextureSize&&(S=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*S*4*h),C=new uE(M,A,S,h);C.type=Ar,C.needsUpdate=!0;const L=E*4;for(let w=0;w<h;w++){const N=p[w],U=v[w],V=x[w],X=A*S*4*w;for(let B=0;B<N.count;B++){const Y=B*L;g===!0&&(r.fromBufferAttribute(N,B),M[X+Y+0]=r.x,M[X+Y+1]=r.y,M[X+Y+2]=r.z,M[X+Y+3]=0),_===!0&&(r.fromBufferAttribute(U,B),M[X+Y+4]=r.x,M[X+Y+5]=r.y,M[X+Y+6]=r.z,M[X+Y+7]=0),m===!0&&(r.fromBufferAttribute(V,B),M[X+Y+8]=r.x,M[X+Y+9]=r.y,M[X+Y+10]=r.z,M[X+Y+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new ct(A,S)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function pL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class ME extends zn{constructor(e,t,i,r,s,o,a,l,u,c=Qa){if(c!==Qa&&c!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qa&&(i=jo),i===void 0&&c===_l&&(i=gl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const EE=new zn,kx=new ME(1,1),wE=new uE,TE=new eR,AE=new vE,Bx=[],zx=[],Hx=new Float32Array(16),Vx=new Float32Array(9),Gx=new Float32Array(4);function Cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bx[r];if(s===void 0&&(s=new Float32Array(r),Bx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rd(n,e){let t=zx[e];t===void 0&&(t=new Int32Array(e),zx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function vL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function xL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Gx.set(i),n.uniformMatrix2fv(this.addr,!1,Gx),dn(t,i)}}function yL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Vx.set(i),n.uniformMatrix3fv(this.addr,!1,Vx),dn(t,i)}}function SL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Hx.set(i),n.uniformMatrix4fv(this.addr,!1,Hx),dn(t,i)}}function ML(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function EL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function wL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function TL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function AL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function RL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function bL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function PL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kx.compareFunction=oE,s=kx):s=EE,t.setTexture2D(e||s,r)}function LL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||TE,r)}function DL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||AE,r)}function IL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wE,r)}function NL(n){switch(n){case 5126:return mL;case 35664:return gL;case 35665:return _L;case 35666:return vL;case 35674:return xL;case 35675:return yL;case 35676:return SL;case 5124:case 35670:return ML;case 35667:case 35671:return EL;case 35668:case 35672:return wL;case 35669:case 35673:return TL;case 5125:return AL;case 36294:return CL;case 36295:return RL;case 36296:return bL;case 35678:case 36198:case 36298:case 36306:case 35682:return PL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return IL}}function UL(n,e){n.uniform1fv(this.addr,e)}function OL(n,e){const t=Cl(e,this.size,2);n.uniform2fv(this.addr,t)}function FL(n,e){const t=Cl(e,this.size,3);n.uniform3fv(this.addr,t)}function kL(n,e){const t=Cl(e,this.size,4);n.uniform4fv(this.addr,t)}function BL(n,e){const t=Cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zL(n,e){const t=Cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HL(n,e){const t=Cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VL(n,e){n.uniform1iv(this.addr,e)}function GL(n,e){n.uniform2iv(this.addr,e)}function WL(n,e){n.uniform3iv(this.addr,e)}function $L(n,e){n.uniform4iv(this.addr,e)}function XL(n,e){n.uniform1uiv(this.addr,e)}function YL(n,e){n.uniform2uiv(this.addr,e)}function jL(n,e){n.uniform3uiv(this.addr,e)}function qL(n,e){n.uniform4uiv(this.addr,e)}function KL(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||EE,s[o])}function ZL(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||TE,s[o])}function QL(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||AE,s[o])}function JL(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wE,s[o])}function e3(n){switch(n){case 5126:return UL;case 35664:return OL;case 35665:return FL;case 35666:return kL;case 35674:return BL;case 35675:return zL;case 35676:return HL;case 5124:case 35670:return VL;case 35667:case 35671:return GL;case 35668:case 35672:return WL;case 35669:case 35673:return $L;case 5125:return XL;case 36294:return YL;case 36295:return jL;case 36296:return qL;case 35678:case 36198:case 36298:case 36306:case 35682:return KL;case 35679:case 36299:case 36307:return ZL;case 35680:case 36300:case 36308:case 36293:return QL;case 36289:case 36303:case 36311:case 36292:return JL}}class t3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NL(t.type)}}class n3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e3(t.type)}}class i3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Tp=/(\w+)(\])?(\[|\.)?/g;function Wx(n,e){n.seq.push(e),n.map[e.id]=e}function r3(n,e,t){const i=n.name,r=i.length;for(Tp.lastIndex=0;;){const s=Tp.exec(i),o=Tp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wx(t,u===void 0?new t3(a,n,e):new n3(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new i3(a),Wx(t,h)),t=h}}}class Yf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);r3(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function $x(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const s3=37297;let o3=0;function a3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function l3(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===Dh&&t===Lh?i="LinearDisplayP3ToLinearSRGB":e===Lh&&t===Dh&&(i="LinearSRGBToLinearDisplayP3"),n){case Ir:case id:return[i,"LinearTransferOETF"];case yr:case f_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Xx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+a3(n.getShaderSource(e),o)}else return r}function u3(n,e){const t=l3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c3(n,e){let t;switch(e){case TC:t="Linear";break;case AC:t="Reinhard";break;case CC:t="Cineon";break;case RC:t="ACESFilmic";break;case PC:t="AgX";break;case LC:t="Neutral";break;case bC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const df=new W;function f3(){yt.getLuminanceCoefficients(df);const n=df.x.toFixed(4),e=df.y.toFixed(4),t=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uu).join(`
`)}function d3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function uu(n){return n!==""}function Yx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function N0(n){return n.replace(m3,_3)}const g3=new Map;function _3(n,e){let t=tt[e];if(t===void 0){const i=g3.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return N0(t)}const v3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(n){return n.replace(v3,x3)}function x3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function S3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pl:case ml:e="ENVMAP_TYPE_CUBE";break;case nd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ml:e="ENVMAP_MODE_REFRACTION";break}return e}function E3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qM:e="ENVMAP_BLENDING_MULTIPLY";break;case EC:e="ENVMAP_BLENDING_MIX";break;case wC:e="ENVMAP_BLENDING_ADD";break}return e}function w3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=y3(t),u=S3(t),c=M3(t),h=E3(t),f=w3(t),d=h3(t),g=d3(s),_=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uu).join(`
`),p.length>0&&(p+=`
`)):(m=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uu).join(`
`),p=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xs?"#define TONE_MAPPING":"",t.toneMapping!==Xs?tt.tonemapping_pars_fragment:"",t.toneMapping!==Xs?c3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,u3("linearToOutputTexel",t.outputColorSpace),f3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uu).join(`
`)),o=N0(o),o=Yx(o,t),o=jx(o,t),a=N0(a),a=Yx(a,t),a=jx(a,t),o=qx(o),a=qx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,E=v+p+a,A=$x(r,r.VERTEX_SHADER,x),S=$x(r,r.FRAGMENT_SHADER,E);r.attachShader(_,A),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(w){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(S).trim();let X=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,S);else{const Y=Xx(r,A,"vertex"),I=Xx(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+Y+`
`+I)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||V==="")&&(B=!1);B&&(w.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(A),r.deleteShader(S),C=new Yf(r,_),L=p3(r,_)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let L;this.getAttributes=function(){return L===void 0&&M(this),L};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,s3)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}let A3=0;class C3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R3(e),t.set(e,i)),i}}class R3{constructor(e){this.id=A3++,this.code=e,this.usedTimes=0}}function b3(n,e,t,i,r,s,o){const a=new fE,l=new C3,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,w,N,U,V){const X=U.fog,B=V.geometry,Y=y.isMeshStandardMaterial?U.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),Z=I&&I.mapping===nd?I.image.height:null,b=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=ne!==void 0?ne.length:0;let We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let q,te,ce,ue;if(b){const Ne=Sr[b];q=Ne.vertexShader,te=Ne.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const De=n.getRenderTarget(),Re=V.isInstancedMesh===!0,Ze=V.isBatchedMesh===!0,Ke=!!y.map,je=!!y.matcap,D=!!I,ft=!!y.aoMap,He=!!y.lightMap,$e=!!y.bumpMap,z=!!y.normalMap,it=!!y.displacementMap,Fe=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,$=y.anisotropy>0,J=y.clearcoat>0,re=y.dispersion>0,Q=y.iridescence>0,Ae=y.sheen>0,oe=y.transmission>0,ge=$&&!!y.anisotropyMap,qe=J&&!!y.clearcoatMap,se=J&&!!y.clearcoatNormalMap,Me=J&&!!y.clearcoatRoughnessMap,we=Q&&!!y.iridescenceMap,ke=Q&&!!y.iridescenceThicknessMap,ye=Ae&&!!y.sheenColorMap,Qe=Ae&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,ht=!!y.specularColorMap,O=!!y.specularIntensityMap,ie=oe&&!!y.transmissionMap,K=oe&&!!y.thicknessMap,ee=!!y.gradientMap,he=!!y.alphaMap,de=y.alphaTest>0,Je=!!y.alphaHash,At=!!y.extensions;let kt=Xs;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(kt=n.toneMapping);const st={shaderID:b,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&V._colorsTexture!==null,instancing:Re,instancingColor:Re&&V.instanceColor!==null,instancingMorph:Re&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ir,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:je,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:Z,aoMap:ft,lightMap:He,bumpMap:$e,normalMap:z,displacementMap:d&&it,emissiveMap:Fe,normalMapObjectSpace:z&&y.normalMapType===OC,normalMapTangentSpace:z&&y.normalMapType===UC,metalnessMap:P,roughnessMap:T,anisotropy:$,anisotropyMap:ge,clearcoat:J,clearcoatMap:qe,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:re,iridescence:Q,iridescenceMap:we,iridescenceThicknessMap:ke,sheen:Ae,sheenColorMap:ye,sheenRoughnessMap:Qe,specularMap:Ve,specularColorMap:ht,specularIntensityMap:O,transmission:oe,transmissionMap:ie,thicknessMap:K,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Za&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:de,alphaHash:Je,combine:y.combine,mapUv:Ke&&m(y.map.channel),aoMapUv:ft&&m(y.aoMap.channel),lightMapUv:He&&m(y.lightMap.channel),bumpMapUv:$e&&m(y.bumpMap.channel),normalMapUv:z&&m(y.normalMap.channel),displacementMapUv:it&&m(y.displacementMap.channel),emissiveMapUv:Fe&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:T&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:qe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&m(y.sheenRoughnessMap.channel),specularMapUv:Ve&&m(y.specularMap.channel),specularColorMapUv:ht&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:ie&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:he&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(z||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Ke||he),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:We,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===Ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xr,flipSided:y.side===di,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function v(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(w,y),E(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function E(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const w=_[y.type];let N;if(w){const U=Sr[w];N=hR.clone(U.uniforms)}else N=y.uniforms;return N}function S(y,w){let N;for(let U=0,V=c.length;U<V;U++){const X=c[U];if(X.cacheKey===w){N=X,++N.usedTimes;break}}return N===void 0&&(N=new T3(n,w,y,s),c.push(N)),N}function M(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:A,acquireProgram:S,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:L}}function P3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function L3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||L3),i.length>1&&i.sort(f||Zx),r.length>1&&r.sort(f||Zx)}function c(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function D3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qx,n.set(i,[o])):r>=s.length?(o=new Qx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function I3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new vt};break;case"SpotLight":t={position:new W,direction:new W,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function N3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U3=0;function O3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F3(n){const e=new I3,t=N3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new Lt,o=new Lt;function a(u){let c=0,h=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,E=0,A=0,S=0,M=0;u.sort(O3);for(let L=0,y=u.length;L<y;L++){const w=u[L],N=w.color,U=w.intensity,V=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=N.r*U,h+=N.g*U,f+=N.b*U;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],U);M++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Y=w.shadow,I=t.get(w);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.directionalShadow[d]=I,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=w.shadow.matrix,v++}i.directional[d]=B,d++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=V,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[_]=B;const Y=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,Y.updateMatrices(w),w.castShadow&&S++),i.spotLightMatrix[_]=Y.matrix,w.castShadow){const I=t.get(w);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=X,E++}_++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const Y=w.shadow,I=t.get(w);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=w.shadow.matrix,x++}i.point[g]=B,g++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(U),B.groundColor.copy(w.groundColor).multiplyScalar(U),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==A||C.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=M,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=A,C.numLightProbes=M,i.version=U3++)}function l(u,c){let h=0,f=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(x.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Jx(n){const e=new F3(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function k3(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jx(n),e.set(r,[a])):s>=o.length?(a=new Jx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class B3 extends pc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z3 extends pc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V3=`uniform sampler2D shadow_pass;
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
}`;function G3(n,e,t){let i=new xE;const r=new ct,s=new ct,o=new qt,a=new B3({depthPacking:NC}),l=new z3,u={},c=t.maxTextureSize,h={[Qs]:di,[di]:Qs,[Xr]:Xr},f=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:H3,fragmentShader:V3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new cs;g.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ri(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jM;let p=this.type;this.render=function(S,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),N=n.state;N.setBlending($s),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==zr&&this.type===zr,V=p===zr&&this.type!==zr;for(let X=0,B=S.length;X<B;X++){const Y=S[X],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Z=I.getFrameExtents();if(r.multiply(Z),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Z.x),r.x=s.x*Z.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Z.y),r.y=s.y*Z.y,I.mapSize.y=s.y)),I.map===null||U===!0||V===!0){const ne=this.type!==zr?{minFilter:si,magFilter:si}:{};I.map!==null&&I.map.dispose(),I.map=new as(r.x,r.y,ne),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const b=I.getViewportCount();for(let ne=0;ne<b;ne++){const Ee=I.getViewport(ne);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(o),I.updateMatrices(Y,ne),i=I.getFrustum(),E(M,C,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===zr&&v(I,C),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,y,w)};function v(S,M){const C=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new as(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,C,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,C,d,_,null)}function x(S,M,C,L){let y=null;const w=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)y=w;else if(y=C.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=y.uuid,U=M.uuid;let V=u[N];V===void 0&&(V={},u[N]=V);let X=V[U];X===void 0&&(X=y.clone(),V[U]=X,M.addEventListener("dispose",A)),y=X}if(y.visible=M.visible,y.wireframe=M.wireframe,L===zr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=C}return y}function E(S,M,C,L,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===zr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const U=e.update(S),V=S.material;if(Array.isArray(V)){const X=U.groups;for(let B=0,Y=X.length;B<Y;B++){const I=X[B],Z=V[I.materialIndex];if(Z&&Z.visible){const b=x(S,Z,L,y);S.onBeforeShadow(n,S,M,C,U,b,I),n.renderBufferDirect(C,null,U,b,S,I),S.onAfterShadow(n,S,M,C,U,b,I)}}}else if(V.visible){const X=x(S,V,L,y);S.onBeforeShadow(n,S,M,C,U,X,null),n.renderBufferDirect(C,null,U,X,S,null),S.onAfterShadow(n,S,M,C,U,X,null)}}const N=S.children;for(let U=0,V=N.length;U<V;U++)E(N[U],M,C,L,y)}function A(S){S.target.removeEventListener("dispose",A);for(const C in u){const L=u[C],y=S.target.uuid;y in L&&(L[y].dispose(),delete L[y])}}}const W3={[Km]:Zm,[Qm]:t0,[Jm]:n0,[dl]:e0,[Zm]:Km,[t0]:Qm,[n0]:Jm,[e0]:dl};function $3(n){function e(){let O=!1;const ie=new qt;let K=null;const ee=new qt(0,0,0,0);return{setMask:function(he){K!==he&&!O&&(n.colorMask(he,he,he,he),K=he)},setLocked:function(he){O=he},setClear:function(he,de,Je,At,kt){kt===!0&&(he*=At,de*=At,Je*=At),ie.set(he,de,Je,At),ee.equals(ie)===!1&&(n.clearColor(he,de,Je,At),ee.copy(ie))},reset:function(){O=!1,K=null,ee.set(-1,0,0,0)}}}function t(){let O=!1,ie=!1,K=null,ee=null,he=null;return{setReversed:function(de){ie=de},setTest:function(de){de?ce(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(de){K!==de&&!O&&(n.depthMask(de),K=de)},setFunc:function(de){if(ie&&(de=W3[de]),ee!==de){switch(de){case Km:n.depthFunc(n.NEVER);break;case Zm:n.depthFunc(n.ALWAYS);break;case Qm:n.depthFunc(n.LESS);break;case dl:n.depthFunc(n.LEQUAL);break;case Jm:n.depthFunc(n.EQUAL);break;case e0:n.depthFunc(n.GEQUAL);break;case t0:n.depthFunc(n.GREATER);break;case n0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=de}},setLocked:function(de){O=de},setClear:function(de){he!==de&&(n.clearDepth(de),he=de)},reset:function(){O=!1,K=null,ee=null,he=null}}}function i(){let O=!1,ie=null,K=null,ee=null,he=null,de=null,Je=null,At=null,kt=null;return{setTest:function(st){O||(st?ce(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(st){ie!==st&&!O&&(n.stencilMask(st),ie=st)},setFunc:function(st,Ne,be){(K!==st||ee!==Ne||he!==be)&&(n.stencilFunc(st,Ne,be),K=st,ee=Ne,he=be)},setOp:function(st,Ne,be){(de!==st||Je!==Ne||At!==be)&&(n.stencilOp(st,Ne,be),de=st,Je=Ne,At=be)},setLocked:function(st){O=st},setClear:function(st){kt!==st&&(n.clearStencil(st),kt=st)},reset:function(){O=!1,ie=null,K=null,ee=null,he=null,de=null,Je=null,At=null,kt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,v=null,x=null,E=null,A=null,S=new vt(0,0,0),M=0,C=!1,L=null,y=null,w=null,N=null,U=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=B>=2);let I=null,Z={};const b=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Ee=new qt().fromArray(b),We=new qt().fromArray(ne);function q(O,ie,K,ee){const he=new Uint8Array(4),de=n.createTexture();n.bindTexture(O,de),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<K;Je++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ie+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return de}const te={};te[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),s.setFunc(dl),He(!1),$e(ax),ce(n.CULL_FACE),D($s);function ce(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ue(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function De(O,ie){return c[O]!==ie?(n.bindFramebuffer(O,ie),c[O]=ie,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ie),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(O,ie){let K=f,ee=!1;if(O){K=h.get(ie),K===void 0&&(K=[],h.set(ie,K));const he=O.textures;if(K.length!==he.length||K[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Je=he.length;de<Je;de++)K[de]=n.COLOR_ATTACHMENT0+de;K.length=he.length,ee=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ee=!0);ee&&n.drawBuffers(K)}function Ze(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const Ke={[yo]:n.FUNC_ADD,[oC]:n.FUNC_SUBTRACT,[aC]:n.FUNC_REVERSE_SUBTRACT};Ke[lC]=n.MIN,Ke[uC]=n.MAX;const je={[cC]:n.ZERO,[fC]:n.ONE,[hC]:n.SRC_COLOR,[jm]:n.SRC_ALPHA,[vC]:n.SRC_ALPHA_SATURATE,[gC]:n.DST_COLOR,[pC]:n.DST_ALPHA,[dC]:n.ONE_MINUS_SRC_COLOR,[qm]:n.ONE_MINUS_SRC_ALPHA,[_C]:n.ONE_MINUS_DST_COLOR,[mC]:n.ONE_MINUS_DST_ALPHA,[xC]:n.CONSTANT_COLOR,[yC]:n.ONE_MINUS_CONSTANT_COLOR,[SC]:n.CONSTANT_ALPHA,[MC]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,ie,K,ee,he,de,Je,At,kt,st){if(O===$s){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),O!==sC){if(O!==_||st!==C){if((m!==yo||x!==yo)&&(n.blendEquation(n.FUNC_ADD),m=yo,x=yo),st)switch(O){case Za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lx:n.blendFunc(n.ONE,n.ONE);break;case ux:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lx:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ux:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,v=null,E=null,A=null,S.set(0,0,0),M=0,_=O,C=st}return}he=he||ie,de=de||K,Je=Je||ee,(ie!==m||he!==x)&&(n.blendEquationSeparate(Ke[ie],Ke[he]),m=ie,x=he),(K!==p||ee!==v||de!==E||Je!==A)&&(n.blendFuncSeparate(je[K],je[ee],je[de],je[Je]),p=K,v=ee,E=de,A=Je),(At.equals(S)===!1||kt!==M)&&(n.blendColor(At.r,At.g,At.b,kt),S.copy(At),M=kt),_=O,C=!1}function ft(O,ie){O.side===Xr?ue(n.CULL_FACE):ce(n.CULL_FACE);let K=O.side===di;ie&&(K=!K),He(K),O.blending===Za&&O.transparent===!1?D($s):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ee=O.stencilWrite;o.setTest(ee),ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),it(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function $e(O){O!==nC?(ce(n.CULL_FACE),O!==y&&(O===ax?n.cullFace(n.BACK):O===iC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=O}function z(O){O!==w&&(X&&n.lineWidth(O),w=O)}function it(O,ie,K){O?(ce(n.POLYGON_OFFSET_FILL),(N!==ie||U!==K)&&(n.polygonOffset(ie,K),N=ie,U=K)):ue(n.POLYGON_OFFSET_FILL)}function Fe(O){O?ce(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+V-1),I!==O&&(n.activeTexture(O),I=O)}function T(O,ie,K){K===void 0&&(I===null?K=n.TEXTURE0+V-1:K=I);let ee=Z[K];ee===void 0&&(ee={type:void 0,texture:void 0},Z[K]=ee),(ee.type!==O||ee.texture!==ie)&&(I!==K&&(n.activeTexture(K),I=K),n.bindTexture(O,ie||te[O]),ee.type=O,ee.texture=ie)}function $(){const O=Z[I];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(O){Ee.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ee.copy(O))}function ye(O){We.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),We.copy(O))}function Qe(O,ie){let K=l.get(ie);K===void 0&&(K=new WeakMap,l.set(ie,K));let ee=K.get(O);ee===void 0&&(ee=n.getUniformBlockIndex(ie,O.name),K.set(O,ee))}function Ve(O,ie){const ee=l.get(ie).get(O);a.get(ie)!==ee&&(n.uniformBlockBinding(ie,ee,O.__bindingPointIndex),a.set(ie,ee))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,Z={},c={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,v=null,x=null,E=null,A=null,S=new vt(0,0,0),M=0,C=!1,L=null,y=null,w=null,N=null,U=null,Ee.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ue,bindFramebuffer:De,drawBuffers:Re,useProgram:Ze,setBlending:D,setMaterial:ft,setFlipSided:He,setCullFace:$e,setLineWidth:z,setPolygonOffset:it,setScissorTest:Fe,activeTexture:P,bindTexture:T,unbindTexture:$,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:Me,texImage3D:we,updateUBOMapping:Qe,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:ke,viewport:ye,reset:ht}}function ey(n,e,t,i){const r=X3(i);switch(t){case eE:return n*e;case nE:return n*e;case iE:return n*e*2;case a_:return n*e/r.components*r.byteLength;case l_:return n*e/r.components*r.byteLength;case rE:return n*e*2/r.components*r.byteLength;case u_:return n*e*2/r.components*r.byteLength;case tE:return n*e*3/r.components*r.byteLength;case hr:return n*e*4/r.components*r.byteLength;case c_:return n*e*4/r.components*r.byteLength;case Hf:case Vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gf:case Wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case l0:case c0:return Math.max(n,16)*Math.max(e,8)/4;case a0:case u0:return Math.max(n,8)*Math.max(e,8)/2;case f0:case h0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case d0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case p0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case m0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case g0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case v0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case x0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case y0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case S0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case M0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case E0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case w0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case T0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case A0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case C0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $f:case R0:case b0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sE:case P0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case L0:case D0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X3(n){switch(n){case os:case ZM:return{byteLength:1,components:1};case oc:case QM:case Ml:return{byteLength:2,components:1};case s_:case o_:return{byteLength:2,components:4};case jo:case r_:case Ar:return{byteLength:4,components:1};case JM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Y3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,c=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):Nh("canvas")}function _(P,T,$){let J=1;const re=Fe(P);if((re.width>$||re.height>$)&&(J=$/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(J*re.width),Ae=Math.floor(J*re.height);h===void 0&&(h=g(Q,Ae));const oe=T?g(Q,Ae):h;return oe.width=Q,oe.height=Ae,oe.getContext("2d").drawImage(P,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Ae+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==si&&P.minFilter!==Fn}function p(P){n.generateMipmap(P)}function v(P,T,$,J,re=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=T;if(T===n.RED&&($===n.FLOAT&&(Q=n.R32F),$===n.HALF_FLOAT&&(Q=n.R16F),$===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.R8UI),$===n.UNSIGNED_SHORT&&(Q=n.R16UI),$===n.UNSIGNED_INT&&(Q=n.R32UI),$===n.BYTE&&(Q=n.R8I),$===n.SHORT&&(Q=n.R16I),$===n.INT&&(Q=n.R32I)),T===n.RG&&($===n.FLOAT&&(Q=n.RG32F),$===n.HALF_FLOAT&&(Q=n.RG16F),$===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RG8UI),$===n.UNSIGNED_SHORT&&(Q=n.RG16UI),$===n.UNSIGNED_INT&&(Q=n.RG32UI),$===n.BYTE&&(Q=n.RG8I),$===n.SHORT&&(Q=n.RG16I),$===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),$===n.UNSIGNED_INT&&(Q=n.RGB32UI),$===n.BYTE&&(Q=n.RGB8I),$===n.SHORT&&(Q=n.RGB16I),$===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),$===n.UNSIGNED_INT&&(Q=n.RGBA32UI),$===n.BYTE&&(Q=n.RGBA8I),$===n.SHORT&&(Q=n.RGBA16I),$===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),T===n.RGBA){const Ae=re?Ph:yt.getTransfer(J);$===n.FLOAT&&(Q=n.RGBA32F),$===n.HALF_FLOAT&&(Q=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Q=Ae===Ut?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(P,T){let $;return P?T===null||T===jo||T===gl?$=n.DEPTH24_STENCIL8:T===Ar?$=n.DEPTH32F_STENCIL8:T===oc&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jo||T===gl?$=n.DEPTH_COMPONENT24:T===Ar?$=n.DEPTH_COMPONENT32F:T===oc&&($=n.DEPTH_COMPONENT16),$}function E(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==si&&P.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),M(T),T.isVideoTexture&&c.delete(T)}function S(P){const T=P.target;T.removeEventListener("dispose",S),L(T)}function M(P){const T=i.get(P);if(T.__webglInit===void 0)return;const $=P.source,J=f.get($);if(J){const re=J[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(P),Object.keys(J).length===0&&f.delete($)}i.remove(P)}function C(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const $=P.source,J=f.get($);delete J[T.__cacheKey],o.memory.textures--}function L(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let re=0;re<T.__webglFramebuffer[J].length;re++)n.deleteFramebuffer(T.__webglFramebuffer[J][re]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=P.textures;for(let J=0,re=$.length;J<re;J++){const Q=i.get($[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove($[J])}i.remove(P)}let y=0;function w(){y=0}function N(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function U(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function V(P,T){const $=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We($,P,T);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function X(P,T){const $=i.get(P);if(P.version>0&&$.__version!==P.version){We($,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function B(P,T){const $=i.get(P);if(P.version>0&&$.__version!==P.version){We($,P,T);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function Y(P,T){const $=i.get(P);if(P.version>0&&$.__version!==P.version){q($,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}const I={[s0]:n.REPEAT,[Co]:n.CLAMP_TO_EDGE,[o0]:n.MIRRORED_REPEAT},Z={[si]:n.NEAREST,[DC]:n.NEAREST_MIPMAP_NEAREST,[Xc]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Kd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},b={[FC]:n.NEVER,[GC]:n.ALWAYS,[kC]:n.LESS,[oE]:n.LEQUAL,[BC]:n.EQUAL,[VC]:n.GEQUAL,[zC]:n.GREATER,[HC]:n.NOTEQUAL};function ne(P,T){if(T.type===Ar&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fn||T.magFilter===Kd||T.magFilter===Xc||T.magFilter===Is||T.minFilter===Fn||T.minFilter===Kd||T.minFilter===Xc||T.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,I[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Z[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,b[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===si||T.minFilter!==Xc&&T.minFilter!==Is||T.type===Ar&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(P,T){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const J=T.source;let re=f.get(J);re===void 0&&(re={},f.set(J,re));const Q=U(T);if(Q!==P.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),re[Q].usedTimes++;const Ae=re[P.__cacheKey];Ae!==void 0&&(re[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(T)),P.__cacheKey=Q,P.__webglTexture=re[Q].texture}return $}function We(P,T,$){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const re=Ee(P,T),Q=T.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+$);const Ae=i.get(Q);if(Q.version!==Ae.__version||re===!0){t.activeTexture(n.TEXTURE0+$);const oe=yt.getPrimaries(yt.workingColorSpace),ge=T.colorSpace===ws?null:yt.getPrimaries(T.colorSpace),qe=T.colorSpace===ws||oe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=_(T.image,!1,r.maxTextureSize);se=it(T,se);const Me=s.convert(T.format,T.colorSpace),we=s.convert(T.type);let ke=v(T.internalFormat,Me,we,T.colorSpace,T.isVideoTexture);ne(J,T);let ye;const Qe=T.mipmaps,Ve=T.isVideoTexture!==!0,ht=Ae.__version===void 0||re===!0,O=Q.dataReady,ie=E(T,se);if(T.isDepthTexture)ke=x(T.format===_l,T.type),ht&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,Me,we,null));else if(T.isDataTexture)if(Qe.length>0){Ve&&ht&&t.texStorage2D(n.TEXTURE_2D,ie,ke,Qe[0].width,Qe[0].height);for(let K=0,ee=Qe.length;K<ee;K++)ye=Qe[K],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Me,we,ye.data):t.texImage2D(n.TEXTURE_2D,K,ke,ye.width,ye.height,0,Me,we,ye.data);T.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(n.TEXTURE_2D,ie,ke,se.width,se.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Me,we,se.data)):t.texImage2D(n.TEXTURE_2D,0,ke,se.width,se.height,0,Me,we,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,ke,Qe[0].width,Qe[0].height,se.depth);for(let K=0,ee=Qe.length;K<ee;K++)if(ye=Qe[K],T.format!==hr)if(Me!==null)if(Ve){if(O)if(T.layerUpdates.size>0){const he=ey(ye.width,ye.height,T.format,T.type);for(const de of T.layerUpdates){const Je=ye.data.subarray(de*he/ye.data.BYTES_PER_ELEMENT,(de+1)*he/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,de,ye.width,ye.height,1,Me,Je,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,se.depth,Me,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ke,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,se.depth,Me,we,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ke,ye.width,ye.height,se.depth,0,Me,we,ye.data)}else{Ve&&ht&&t.texStorage2D(n.TEXTURE_2D,ie,ke,Qe[0].width,Qe[0].height);for(let K=0,ee=Qe.length;K<ee;K++)ye=Qe[K],T.format!==hr?Me!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,Me,we,ye.data):t.texImage2D(n.TEXTURE_2D,K,ke,ye.width,ye.height,0,Me,we,ye.data)}else if(T.isDataArrayTexture)if(Ve){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,ke,se.width,se.height,se.depth),O)if(T.layerUpdates.size>0){const K=ey(se.width,se.height,T.format,T.type);for(const ee of T.layerUpdates){const he=se.data.subarray(ee*K/se.data.BYTES_PER_ELEMENT,(ee+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,Me,we,he)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,we,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,Me,we,se.data);else if(T.isData3DTexture)Ve?(ht&&t.texStorage3D(n.TEXTURE_3D,ie,ke,se.width,se.height,se.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,we,se.data)):t.texImage3D(n.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,Me,we,se.data);else if(T.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(n.TEXTURE_2D,ie,ke,se.width,se.height);else{let K=se.width,ee=se.height;for(let he=0;he<ie;he++)t.texImage2D(n.TEXTURE_2D,he,ke,K,ee,0,Me,we,null),K>>=1,ee>>=1}}else if(Qe.length>0){if(Ve&&ht){const K=Fe(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ie,ke,K.width,K.height)}for(let K=0,ee=Qe.length;K<ee;K++)ye=Qe[K],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me,we,ye):t.texImage2D(n.TEXTURE_2D,K,ke,Me,we,ye);T.generateMipmaps=!1}else if(Ve){if(ht){const K=Fe(se);t.texStorage2D(n.TEXTURE_2D,ie,ke,K.width,K.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,we,se)}else t.texImage2D(n.TEXTURE_2D,0,ke,Me,we,se);m(T)&&p(J),Ae.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function q(P,T,$){if(T.image.length!==6)return;const J=Ee(P,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const Q=i.get(re);if(re.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+$);const Ae=yt.getPrimaries(yt.workingColorSpace),oe=T.colorSpace===ws?null:yt.getPrimaries(T.colorSpace),ge=T.colorSpace===ws||Ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!qe&&!se?Me[ee]=_(T.image[ee],!0,r.maxCubemapSize):Me[ee]=se?T.image[ee].image:T.image[ee],Me[ee]=it(T,Me[ee]);const we=Me[0],ke=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),Qe=v(T.internalFormat,ke,ye,T.colorSpace),Ve=T.isVideoTexture!==!0,ht=Q.__version===void 0||J===!0,O=re.dataReady;let ie=E(T,we);ne(n.TEXTURE_CUBE_MAP,T);let K;if(qe){Ve&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Qe,we.width,we.height);for(let ee=0;ee<6;ee++){K=Me[ee].mipmaps;for(let he=0;he<K.length;he++){const de=K[he];T.format!==hr?ke!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,de.width,de.height,ke,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,de.width,de.height,ke,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Qe,de.width,de.height,0,ke,ye,de.data)}}}else{if(K=T.mipmaps,Ve&&ht){K.length>0&&ie++;const ee=Fe(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,ke,ye,Me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Me[ee].width,Me[ee].height,0,ke,ye,Me[ee].data);for(let he=0;he<K.length;he++){const Je=K[he].image[ee].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Je.width,Je.height,ke,ye,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Qe,Je.width,Je.height,0,ke,ye,Je.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,ye,Me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,ke,ye,Me[ee]);for(let he=0;he<K.length;he++){const de=K[he];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,ke,ye,de.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Qe,ke,ye,de.image[ee])}}}m(T)&&p(n.TEXTURE_CUBE_MAP),Q.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,$,J,re,Q){const Ae=s.convert($.format,$.colorSpace),oe=s.convert($.type),ge=v($.internalFormat,Ae,oe,$.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>Q),Me=Math.max(1,T.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,ge,se,Me,T.depth,0,Ae,oe,null):t.texImage2D(re,Q,ge,se,Me,0,Ae,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,re,i.get($).__webglTexture,0,He(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,re,i.get($).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(P,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const J=T.depthTexture,re=J&&J.isDepthTexture?J.type:null,Q=x(T.stencilBuffer,re),Ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=He(T);$e(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Q,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{const J=T.textures;for(let re=0;re<J.length;re++){const Q=J[re],Ae=s.convert(Q.format,Q.colorSpace),oe=s.convert(Q.type),ge=v(Q.internalFormat,Ae,oe,Q.colorSpace),qe=He(T);$&&$e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ge,T.width,T.height):$e(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,re=He(T);if(T.depthTexture.format===Qa)$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===_l)$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(P){const T=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,P)}else if($){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=n.createRenderbuffer(),ce(T.__webglDepthbuffer[J],P,!1);else{const re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ce(T.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,T,$){const J=i.get(P);T!==void 0&&te(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&De(P)}function Ze(P){const T=P.texture,$=i.get(P),J=i.get(T);P.addEventListener("dispose",S);const re=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,o.memory.textures++),Q){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)$.__webglFramebuffer[oe][ge]=n.createFramebuffer()}else $.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)$.__webglFramebuffer[oe]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let oe=0,ge=re.length;oe<ge;oe++){const qe=i.get(re[oe]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){const ge=re[oe];$.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);const qe=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),Me=v(ge.internalFormat,qe,se,ge.colorSpace,P.isXRRenderTarget===!0),we=He(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Me,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ce($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ne(n.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)te($.__webglFramebuffer[oe][ge],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else te($.__webglFramebuffer[oe],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let oe=0,ge=re.length;oe<ge;oe++){const qe=re[oe],se=i.get(qe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ne(n.TEXTURE_2D,qe),te($.__webglFramebuffer,P,qe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),ne(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)te($.__webglFramebuffer[ge],P,T,n.COLOR_ATTACHMENT0,oe,ge);else te($.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,oe,0);m(T)&&p(oe),t.unbindTexture()}P.depthBuffer&&De(P)}function Ke(P){const T=P.textures;for(let $=0,J=T.length;$<J;$++){const re=T[$];if(m(re)){const Q=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(re).__webglTexture;t.bindTexture(Q,Ae),p(Q),t.unbindTexture()}}}const je=[],D=[];function ft(P){if(P.samples>0){if($e(P)===!1){const T=P.textures,$=P.width,J=P.height;let re=n.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),oe=T.length>1;if(oe)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const qe=i.get(T[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,$,J,0,0,$,J,re,n.NEAREST),l===!0&&(je.length=0,D.length=0,je.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(Q),D.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const qe=i.get(T[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function He(P){return Math.min(r.maxSamples,P.samples)}function $e(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(P){const T=o.render.frame;c.get(P)!==T&&(c.set(P,T),P.update())}function it(P,T){const $=P.colorSpace,J=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Ir&&$!==ws&&(yt.getTransfer($)===Ut?(J!==hr||re!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=te,this.useMultisampledRTT=$e}function j3(n,e){function t(i,r=ws){let s;const o=yt.getTransfer(r);if(i===os)return n.UNSIGNED_BYTE;if(i===s_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===o_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===JM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ZM)return n.BYTE;if(i===QM)return n.SHORT;if(i===oc)return n.UNSIGNED_SHORT;if(i===r_)return n.INT;if(i===jo)return n.UNSIGNED_INT;if(i===Ar)return n.FLOAT;if(i===Ml)return n.HALF_FLOAT;if(i===eE)return n.ALPHA;if(i===tE)return n.RGB;if(i===hr)return n.RGBA;if(i===nE)return n.LUMINANCE;if(i===iE)return n.LUMINANCE_ALPHA;if(i===Qa)return n.DEPTH_COMPONENT;if(i===_l)return n.DEPTH_STENCIL;if(i===a_)return n.RED;if(i===l_)return n.RED_INTEGER;if(i===rE)return n.RG;if(i===u_)return n.RG_INTEGER;if(i===c_)return n.RGBA_INTEGER;if(i===Hf||i===Vf||i===Gf||i===Wf)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===a0||i===l0||i===u0||i===c0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===a0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===l0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===u0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===c0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===f0||i===h0||i===d0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===f0||i===h0)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===d0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===p0||i===m0||i===g0||i===_0||i===v0||i===x0||i===y0||i===S0||i===M0||i===E0||i===w0||i===T0||i===A0||i===C0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===p0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===m0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===g0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===v0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===x0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===y0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===S0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===M0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===E0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===w0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===T0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===A0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===C0)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$f||i===R0||i===b0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$f)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===R0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===b0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sE||i===P0||i===L0||i===D0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$f)return s.COMPRESSED_RED_RGTC1_EXT;if(i===P0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===L0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===D0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class q3 extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cu extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K3={type:"move"};class Ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q3=`
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

}`;class J3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qi({vertexShader:Z3,fragmentShader:Q3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new Al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eD extends El{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,d=null,g=null;const _=new J3,m=t.getContextAttributes();let p=null,v=null;const x=[],E=[],A=new ct;let S=null;const M=new Gi;M.layers.enable(1),M.viewport=new qt;const C=new Gi;C.layers.enable(2),C.viewport=new qt;const L=[M,C],y=new q3;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=x[q];return te===void 0&&(te=new Ap,x[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=x[q];return te===void 0&&(te=new Ap,x[q]=te),te.getGripSpace()},this.getHand=function(q){let te=x[q];return te===void 0&&(te=new Ap,x[q]=te),te.getHandSpace()};function U(q){const te=E.indexOf(q.inputSource);if(te===-1)return;const ce=x[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const te=E[q];te!==null&&(E[q]=null,x[q].disconnect(te))}w=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new as(d.framebufferWidth,d.framebufferHeight,{format:hr,type:os,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ce=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?_l:Qa,ce=m.stencil?gl:jo);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new as(f.textureWidth,f.textureHeight,{format:hr,type:os,depthTexture:new ME(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const ce=q.removed[te],ue=E.indexOf(ce);ue>=0&&(E[ue]=null,x[ue].disconnect(ce))}for(let te=0;te<q.added.length;te++){const ce=q.added[te];let ue=E.indexOf(ce);if(ue===-1){for(let Re=0;Re<x.length;Re++)if(Re>=E.length){E.push(ce),ue=Re;break}else if(E[Re]===null){E[Re]=ce,ue=Re;break}if(ue===-1)break}const De=x[ue];De&&De.connect(ce)}}const B=new W,Y=new W;function I(q,te,ce){B.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ue=B.distanceTo(Y),De=te.projectionMatrix.elements,Re=ce.projectionMatrix.elements,Ze=De[14]/(De[10]-1),Ke=De[14]/(De[10]+1),je=(De[9]+1)/De[5],D=(De[9]-1)/De[5],ft=(De[8]-1)/De[0],He=(Re[8]+1)/Re[0],$e=Ze*ft,z=Ze*He,it=ue/(-ft+He),Fe=it*-ft;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(it),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const P=Ze+it,T=Ke+it,$=$e-Fe,J=z+(ue-Fe),re=je*Ke/T*P,Q=D*Ke/T*P;q.projectionMatrix.makePerspective($,J,re,Q,P,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ce=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),y.near=C.near=M.near=te,y.far=C.far=M.far=ce,(w!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);const ue=q.parent,De=y.cameras;Z(y,ue);for(let Re=0;Re<De.length;Re++)Z(De[Re],ue);De.length===2?I(y,M,C):y.projectionMatrix.copy(M.projectionMatrix),b(q,y,ue)};function b(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=I0*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ne=null;function Ee(q,te){if(c=te.getViewerPose(u||o),g=te,c!==null){const ce=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ue=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Re=0;Re<ce.length;Re++){const Ze=ce[Re];let Ke=null;if(d!==null)Ke=d.getViewport(Ze);else{const D=h.getViewSubImage(f,Ze);Ke=D.viewport,Re===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let je=L[Re];je===void 0&&(je=new Gi,je.layers.enable(Re),je.viewport=new qt,L[Re]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Re===0&&(y.matrix.copy(je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(je)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=h.getDepthInformation(ce[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ue=E[ce],De=x[ce];ue!==null&&De!==void 0&&De.update(ue,te,u||o)}ne&&ne(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const We=new yE;We.setAnimationLoop(Ee),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const fo=new ls,tD=new Lt;function nD(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gE(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===di&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===di&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,E=v.envMapRotation;x&&(m.envMap.value=x,fo.copy(E),fo.x*=-1,fo.y*=-1,fo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fo.y*=-1,fo.z*=-1),m.envMapRotation.value.setFromMatrix4(tD.makeRotationFromEuler(fo)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const E=x.program;i.uniformBlockBinding(v,E)}function u(v,x){let E=r[v.id];E===void 0&&(g(v),E=c(v),r[v.id]=E,v.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(v,A);const S=e.render.frame;s[v.id]!==S&&(f(v),s[v.id]=S)}function c(v){const x=h();v.__bindingPointIndex=x;const E=n.createBuffer(),A=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],E=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,M=E.length;S<M;S++){const C=Array.isArray(E[S])?E[S]:[E[S]];for(let L=0,y=C.length;L<y;L++){const w=C[L];if(d(w,S,L,A)===!0){const N=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let X=0;X<U.length;X++){const B=U[X],Y=_(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+V,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,x,E,A){const S=v.value,M=x+"_"+E;if(A[M]===void 0)return typeof S=="number"||typeof S=="boolean"?A[M]=S:A[M]=S.clone(),!0;{const C=A[M];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[M]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(v){const x=v.uniforms;let E=0;const A=16;for(let M=0,C=x.length;M<C;M++){const L=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,w=L.length;y<w;y++){const N=L[y],U=Array.isArray(N.value)?N.value:[N.value];for(let V=0,X=U.length;V<X;V++){const B=U[V],Y=_(B),I=E%A,Z=I%Y.boundary,b=I+Z;E+=Z,b!==0&&A-b<Y.storage&&(E+=A-b),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=Y.storage}}}const S=E%A;return S>0&&(E+=A-S),v.__size=E,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class CE{constructor(e={}){const{canvas:t=$C(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yr,this.toneMapping=Xs,this.toneMappingExposure=1;const x=this;let E=!1,A=0,S=0,M=null,C=-1,L=null;const y=new qt,w=new qt;let N=null;const U=new vt(0);let V=0,X=t.width,B=t.height,Y=1,I=null,Z=null;const b=new qt(0,0,X,B),ne=new qt(0,0,X,B);let Ee=!1;const We=new xE;let q=!1,te=!1;const ce=new Lt,ue=new Lt,De=new W,Re=new qt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function je(){return M===null?Y:1}let D=i;function ft(R,k){return t.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${i_}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const k="webgl2";if(D=ft(k,R),D===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,$e,z,it,Fe,P,T,$,J,re,Q,Ae,oe,ge,qe,se,Me,we,ke,ye,Qe,Ve,ht,O;function ie(){He=new uL(D),He.init(),Ve=new j3(D,He),$e=new iL(D,He,e,Ve),z=new $3(D),$e.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),it=new hL(D),Fe=new P3,P=new Y3(D,He,z,Fe,$e,Ve,it),T=new sL(x),$=new lL(x),J=new xR(D),ht=new tL(D,J),re=new cL(D,J,it,ht),Q=new pL(D,re,J,it),ke=new dL(D,$e,P),se=new rL(Fe),Ae=new b3(x,T,$,He,$e,ht,se),oe=new nD(x,Fe),ge=new D3,qe=new k3(He),we=new eL(x,T,$,z,Q,f,l),Me=new G3(x,Q,$e),O=new iD(D,it,$e,z),ye=new nL(D,He,it),Qe=new fL(D,He,it),it.programs=Ae.programs,x.capabilities=$e,x.extensions=He,x.properties=Fe,x.renderLists=ge,x.shadowMap=Me,x.state=z,x.info=it}ie();const K=new eD(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(X,B,!1))},this.getSize=function(R){return R.set(X,B)},this.setSize=function(R,k,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,B=k,t.width=Math.floor(R*Y),t.height=Math.floor(k*Y),H===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(X*Y,B*Y).floor()},this.setDrawingBufferSize=function(R,k,H){X=R,B=k,Y=H,t.width=Math.floor(R*H),t.height=Math.floor(k*H),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(b)},this.setViewport=function(R,k,H,G){R.isVector4?b.set(R.x,R.y,R.z,R.w):b.set(R,k,H,G),z.viewport(y.copy(b).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,k,H,G){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,k,H,G),z.scissor(w.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){z.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(R=!0,k=!0,H=!0){let G=0;if(R){let F=!1;if(M!==null){const le=M.texture.format;F=le===c_||le===u_||le===l_}if(F){const le=M.texture.type,xe=le===os||le===jo||le===oc||le===gl||le===s_||le===o_,me=we.getClearColor(),pe=we.getClearAlpha(),Ie=me.r,ze=me.g,Pe=me.b;xe?(d[0]=Ie,d[1]=ze,d[2]=Pe,d[3]=pe,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=Ie,g[1]=ze,g[2]=Pe,g[3]=pe,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}k&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),qe.dispose(),Fe.dispose(),T.dispose(),$.dispose(),Q.dispose(),ht.dispose(),O.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",gt),K.removeEventListener("sessionend",_e),Be.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=it.autoReset,k=Me.enabled,H=Me.autoUpdate,G=Me.needsUpdate,F=Me.type;ie(),it.autoReset=R,Me.enabled=k,Me.autoUpdate=H,Me.needsUpdate=G,Me.type=F}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Je(R){const k=R.target;k.removeEventListener("dispose",Je),At(k)}function At(R){kt(R),Fe.remove(R)}function kt(R){const k=Fe.get(R).programs;k!==void 0&&(k.forEach(function(H){Ae.releaseProgram(H)}),R.isShaderMaterial&&Ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,H,G,F,le){k===null&&(k=Ze);const xe=F.isMesh&&F.matrixWorld.determinant()<0,me=St(R,k,H,G,F);z.setMaterial(G,xe);let pe=H.index,Ie=1;if(G.wireframe===!0){if(pe=re.getWireframeAttribute(H),pe===void 0)return;Ie=2}const ze=H.drawRange,Pe=H.attributes.position;let dt=ze.start*Ie,lt=(ze.start+ze.count)*Ie;le!==null&&(dt=Math.max(dt,le.start*Ie),lt=Math.min(lt,(le.start+le.count)*Ie)),pe!==null?(dt=Math.max(dt,0),lt=Math.min(lt,pe.count)):Pe!=null&&(dt=Math.max(dt,0),lt=Math.min(lt,Pe.count));const wt=lt-dt;if(wt<0||wt===1/0)return;ht.setup(F,G,me,H,pe);let pn,ut=ye;if(pe!==null&&(pn=J.get(pe),ut=Qe,ut.setIndex(pn)),F.isMesh)G.wireframe===!0?(z.setLineWidth(G.wireframeLinewidth*je()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(F.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),z.setLineWidth(Oe*je()),F.isLineSegments?ut.setMode(D.LINES):F.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else F.isPoints?ut.setMode(D.POINTS):F.isSprite&&ut.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,Mn=F._multiDrawCounts,xt=F._multiDrawCount,Ji=pe?J.get(pe).bytesPerElement:1,ea=Fe.get(G).currentProgram.getUniforms();for(let _i=0;_i<xt;_i++)ea.setValue(D,"_gl_DrawID",_i),ut.render(Oe[_i]/Ji,Mn[_i])}else if(F.isInstancedMesh)ut.renderInstances(dt,wt,F.count);else if(H.isInstancedBufferGeometry){const Oe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mn=Math.min(H.instanceCount,Oe);ut.renderInstances(dt,wt,Mn)}else ut.render(dt,wt)};function st(R,k,H){R.transparent===!0&&R.side===Xr&&R.forceSinglePass===!1?(R.side=di,R.needsUpdate=!0,Qt(R,k,H),R.side=Qs,R.needsUpdate=!0,Qt(R,k,H),R.side=Xr):Qt(R,k,H)}this.compile=function(R,k,H=null){H===null&&(H=R),m=qe.get(H),m.init(k),v.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),R!==H&&R.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return R.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const me=le[xe];st(me,H,F),G.add(me)}else st(le,H,F),G.add(le)}),v.pop(),m=null,G},this.compileAsync=function(R,k,H=null){const G=this.compile(R,k,H);return new Promise(F=>{function le(){if(G.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){F(R);return}setTimeout(le,10)}He.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ne=null;function be(R){Ne&&Ne(R)}function gt(){Be.stop()}function _e(){Be.start()}const Be=new yE;Be.setAnimationLoop(be),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(R){Ne=R,K.setAnimationLoop(R),R===null?Be.stop():Be.start()},K.addEventListener("sessionstart",gt),K.addEventListener("sessionend",_e),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,k,M),m=qe.get(R,v.length),m.init(k),v.push(m),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),We.setFromProjectionMatrix(ue),te=this.localClippingEnabled,q=se.init(this.clippingPlanes,te),_=ge.get(R,p.length),_.init(),p.push(_),K.enabled===!0&&K.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Ue(le,k,-1/0,x.sortObjects)}Ue(R,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,Z),Ke=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ke&&we.addToRenderList(_,R),this.info.render.frame++,q===!0&&se.beginShadows();const H=m.state.shadowsArray;Me.render(H,R,k),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,F=_.transmissive;if(m.setupLights(),k.isArrayCamera){const le=k.cameras;if(F.length>0)for(let xe=0,me=le.length;xe<me;xe++){const pe=le[xe];Zt(G,F,R,pe)}Ke&&we.render(R);for(let xe=0,me=le.length;xe<me;xe++){const pe=le[xe];Xe(_,R,pe,pe.viewport)}}else F.length>0&&Zt(G,F,R,k),Ke&&we.render(R),Xe(_,R,k);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(x,R,k),ht.resetDefaultState(),C=-1,L=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ue(R,k,H,G){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||We.intersectsSprite(R)){G&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const xe=Q.update(R),me=R.material;me.visible&&_.push(R,xe,me,H,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||We.intersectsObject(R))){const xe=Q.update(R),me=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Re.copy(xe.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(me)){const pe=xe.groups;for(let Ie=0,ze=pe.length;Ie<ze;Ie++){const Pe=pe[Ie],dt=me[Pe.materialIndex];dt&&dt.visible&&_.push(R,xe,dt,H,Re.z,Pe)}}else me.visible&&_.push(R,xe,me,H,Re.z,null)}}const le=R.children;for(let xe=0,me=le.length;xe<me;xe++)Ue(le[xe],k,H,G)}function Xe(R,k,H,G){const F=R.opaque,le=R.transmissive,xe=R.transparent;m.setupLightsView(H),q===!0&&se.setGlobalState(x.clippingPlanes,H),G&&z.viewport(y.copy(G)),F.length>0&&et(F,k,H),le.length>0&&et(le,k,H),xe.length>0&&et(xe,k,H),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Zt(R,k,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new as(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ml:os,minFilter:Is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const le=m.state.transmissionRenderTarget[G.id],xe=G.viewport||y;le.setSize(xe.z,xe.w);const me=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(U),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&we.render(H);const pe=x.toneMapping;x.toneMapping=Xs;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&se.setGlobalState(x.clippingPlanes,G),et(R,H,G),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),He.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Pe=0,dt=k.length;Pe<dt;Pe++){const lt=k[Pe],wt=lt.object,pn=lt.geometry,ut=lt.material,Oe=lt.group;if(ut.side===Xr&&wt.layers.test(G.layers)){const Mn=ut.side;ut.side=di,ut.needsUpdate=!0,Bt(wt,H,G,pn,ut,Oe),ut.side=Mn,ut.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}x.setRenderTarget(me),x.setClearColor(U,V),Ie!==void 0&&(G.viewport=Ie),x.toneMapping=pe}function et(R,k,H){const G=k.isScene===!0?k.overrideMaterial:null;for(let F=0,le=R.length;F<le;F++){const xe=R[F],me=xe.object,pe=xe.geometry,Ie=G===null?xe.material:G,ze=xe.group;me.layers.test(H.layers)&&Bt(me,k,H,pe,Ie,ze)}}function Bt(R,k,H,G,F,le){R.onBeforeRender(x,k,H,G,F,le),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.onBeforeRender(x,k,H,G,R,le),F.transparent===!0&&F.side===Xr&&F.forceSinglePass===!1?(F.side=di,F.needsUpdate=!0,x.renderBufferDirect(H,k,G,F,R,le),F.side=Qs,F.needsUpdate=!0,x.renderBufferDirect(H,k,G,F,R,le),F.side=Xr):x.renderBufferDirect(H,k,G,F,R,le),R.onAfterRender(x,k,H,G,F,le)}function Qt(R,k,H){k.isScene!==!0&&(k=Ze);const G=Fe.get(R),F=m.state.lights,le=m.state.shadowsArray,xe=F.state.version,me=Ae.getParameters(R,F.state,le,k,H),pe=Ae.getProgramCacheKey(me);let Ie=G.programs;G.environment=R.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(R.isMeshStandardMaterial?$:T).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Je),Ie=new Map,G.programs=Ie);let ze=Ie.get(pe);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===xe)return Ct(R,me),ze}else me.uniforms=Ae.getUniforms(R),R.onBeforeCompile(me,x),ze=Ae.acquireProgram(me,pe),Ie.set(pe,ze),G.uniforms=me.uniforms;const Pe=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=se.uniform),Ct(R,me),G.needsLights=It(R),G.lightsStateVersion=xe,G.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Dt(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Yf.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Ct(R,k){const H=Fe.get(R);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function St(R,k,H,G,F){k.isScene!==!0&&(k=Ze),P.resetTextureUnits();const le=k.fog,xe=G.isMeshStandardMaterial?k.environment:null,me=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ir,pe=(G.isMeshStandardMaterial?$:T).get(G.envMap||xe),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!H.morphAttributes.position,dt=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let wt=Xs;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(wt=x.toneMapping);const pn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=pn!==void 0?pn.length:0,Oe=Fe.get(G),Mn=m.state.lights;if(q===!0&&(te===!0||R!==L)){const Oi=R===L&&G.id===C;se.setState(G,R,Oi)}let xt=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Mn.state.version||Oe.outputColorSpace!==me||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==pe||G.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==ze||Oe.morphTargets!==Pe||Oe.morphNormals!==dt||Oe.morphColors!==lt||Oe.toneMapping!==wt||Oe.morphTargetsCount!==ut)&&(xt=!0):(xt=!0,Oe.__version=G.version);let Ji=Oe.currentProgram;xt===!0&&(Ji=Qt(G,k,F));let ea=!1,_i=!1,sd=!1;const Jt=Ji.getUniforms(),fs=Oe.uniforms;if(z.useProgram(Ji.program)&&(ea=!0,_i=!0,sd=!0),G.id!==C&&(C=G.id,_i=!0),ea||L!==R){$e.reverseDepthBuffer?(ce.copy(R.projectionMatrix),YC(ce),jC(ce),Jt.setValue(D,"projectionMatrix",ce)):Jt.setValue(D,"projectionMatrix",R.projectionMatrix),Jt.setValue(D,"viewMatrix",R.matrixWorldInverse);const Oi=Jt.map.cameraPosition;Oi!==void 0&&Oi.setValue(D,De.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Jt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Jt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,_i=!0,sd=!0)}if(F.isSkinnedMesh){Jt.setOptional(D,F,"bindMatrix"),Jt.setOptional(D,F,"bindMatrixInverse");const Oi=F.skeleton;Oi&&(Oi.boneTexture===null&&Oi.computeBoneTexture(),Jt.setValue(D,"boneTexture",Oi.boneTexture,P))}F.isBatchedMesh&&(Jt.setOptional(D,F,"batchingTexture"),Jt.setValue(D,"batchingTexture",F._matricesTexture,P),Jt.setOptional(D,F,"batchingIdTexture"),Jt.setValue(D,"batchingIdTexture",F._indirectTexture,P),Jt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Jt.setValue(D,"batchingColorTexture",F._colorsTexture,P));const od=H.morphAttributes;if((od.position!==void 0||od.normal!==void 0||od.color!==void 0)&&ke.update(F,H,Ji),(_i||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,Jt.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fs.envMap.value=pe,fs.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(fs.envMapIntensity.value=k.environmentIntensity),_i&&(Jt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&gi(fs,sd),le&&G.fog===!0&&oe.refreshFogUniforms(fs,le),oe.refreshMaterialUniforms(fs,G,Y,B,m.state.transmissionRenderTarget[R.id]),Yf.upload(D,Dt(Oe),fs,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yf.upload(D,Dt(Oe),fs,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Jt.setValue(D,"center",F.center),Jt.setValue(D,"modelViewMatrix",F.modelViewMatrix),Jt.setValue(D,"normalMatrix",F.normalMatrix),Jt.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Oi=G.uniformsGroups;for(let ad=0,DE=Oi.length;ad<DE;ad++){const p_=Oi[ad];O.update(p_,Ji),O.bind(p_,Ji)}}return Ji}function gi(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function It(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,k,H){Fe.get(R.texture).__webglTexture=k,Fe.get(R.depthTexture).__webglTexture=H;const G=Fe.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const H=Fe.get(R);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,H=0){M=R,A=k,S=H;let G=!0,F=null,le=!1,xe=!1;if(R){const pe=Fe.get(R);if(pe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(pe.__hasExternalTextures)P.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pe=R.depthTexture;if(pe.__boundDepthTexture!==Pe){if(Pe!==null&&Fe.has(Pe)&&(R.width!==Pe.image.width||R.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const ze=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?F=ze[k][H]:F=ze[k],le=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?F=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[H]:F=ze,y.copy(R.viewport),w.copy(R.scissor),N=R.scissorTest}else y.copy(b).multiplyScalar(Y).floor(),w.copy(ne).multiplyScalar(Y).floor(),N=Ee;if(z.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&z.drawBuffers(R,F),z.viewport(y),z.scissor(w),z.setScissorTest(N),le){const pe=Fe.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,H)}else if(xe){const pe=Fe.get(R.texture),Ie=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.__webglTexture,H||0,Ie)}C=-1},this.readRenderTargetPixels=function(R,k,H,G,F,le,xe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(me=me[xe]),me){z.bindFramebuffer(D.FRAMEBUFFER,me);try{const pe=R.texture,Ie=pe.format,ze=pe.type;if(!$e.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-G&&H>=0&&H<=R.height-F&&D.readPixels(k,H,G,F,Ve.convert(Ie),Ve.convert(ze),le)}finally{const pe=M!==null?Fe.get(M).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(R,k,H,G,F,le,xe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(me=me[xe]),me){const pe=R.texture,Ie=pe.format,ze=pe.type;if(!$e.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-G&&H>=0&&H<=R.height-F){z.bindFramebuffer(D.FRAMEBUFFER,me);const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(k,H,G,F,Ve.convert(Ie),Ve.convert(ze),0);const dt=M!==null?Fe.get(M).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,dt);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await XC(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Pe),D.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,H=0){R.isTexture!==!0&&(Xf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(R.image.width*G),le=Math.floor(R.image.height*G),xe=k!==null?k.x:0,me=k!==null?k.y:0;P.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,xe,me,F,le),z.unbindTexture()},this.copyTextureToTexture=function(R,k,H=null,G=null,F=0){R.isTexture!==!0&&(Xf("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],k=arguments[2],F=arguments[3]||0,H=null);let le,xe,me,pe,Ie,ze;H!==null?(le=H.max.x-H.min.x,xe=H.max.y-H.min.y,me=H.min.x,pe=H.min.y):(le=R.image.width,xe=R.image.height,me=0,pe=0),G!==null?(Ie=G.x,ze=G.y):(Ie=0,ze=0);const Pe=Ve.convert(k.format),dt=Ve.convert(k.type);P.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),ut=D.getParameter(D.UNPACK_SKIP_ROWS),Oe=D.getParameter(D.UNPACK_SKIP_IMAGES),Mn=R.isCompressedTexture?R.mipmaps[F]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Mn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,me),D.pixelStorei(D.UNPACK_SKIP_ROWS,pe),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Ie,ze,le,xe,Pe,dt,Mn.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Ie,ze,Mn.width,Mn.height,Pe,Mn.data):D.texSubImage2D(D.TEXTURE_2D,F,Ie,ze,le,xe,Pe,dt,Mn),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe),F===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(R,k,H=null,G=null,F=0){R.isTexture!==!0&&(Xf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,R=arguments[2],k=arguments[3],F=arguments[4]||0);let le,xe,me,pe,Ie,ze,Pe,dt,lt;const wt=R.isCompressedTexture?R.mipmaps[F]:R.image;H!==null?(le=H.max.x-H.min.x,xe=H.max.y-H.min.y,me=H.max.z-H.min.z,pe=H.min.x,Ie=H.min.y,ze=H.min.z):(le=wt.width,xe=wt.height,me=wt.depth,pe=0,Ie=0,ze=0),G!==null?(Pe=G.x,dt=G.y,lt=G.z):(Pe=0,dt=0,lt=0);const pn=Ve.convert(k.format),ut=Ve.convert(k.type);let Oe;if(k.isData3DTexture)P.setTexture3D(k,0),Oe=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)P.setTexture2DArray(k,0),Oe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Mn=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ji=D.getParameter(D.UNPACK_SKIP_PIXELS),ea=D.getParameter(D.UNPACK_SKIP_ROWS),_i=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Oe,F,Pe,dt,lt,le,xe,me,pn,ut,wt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Oe,F,Pe,dt,lt,le,xe,me,pn,wt.data):D.texSubImage3D(Oe,F,Pe,dt,lt,le,xe,me,pn,ut,wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,ea),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_i),F===0&&k.generateMipmaps&&D.generateMipmap(Oe),z.unbindTexture()},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),z.unbindTexture()},this.resetState=function(){A=0,S=0,M=null,z.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===f_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===id?"display-p3":"srgb"}}class U0 extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rD extends zn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=si,c=si,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka extends Li{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xa=new Lt,ty=new Lt,pf=[],ny=new Jo,sD=new Lt,Xl=new Ri,Yl=new Tl;class oD extends Ri{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sD)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xa),ny.copy(e.boundingBox).applyMatrix4(xa),this.boundingBox.union(ny)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xa),Yl.copy(e.boundingSphere).applyMatrix4(xa),this.boundingSphere.union(Yl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Xl.geometry=this.geometry,Xl.material=this.material,Xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yl.copy(this.boundingSphere),Yl.applyMatrix4(i),e.ray.intersectsSphere(Yl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xa),ty.multiplyMatrices(i,xa),Xl.matrixWorld=ty,Xl.raycast(e,pf);for(let o=0,a=pf.length;o<a;o++){const l=pf[o];l.instanceId=s,l.object=this,t.push(l)}pf.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new rD(new Float32Array(r*this.count),r,this.count,a_,Ar));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class aD extends pc{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iy=new Lt,O0=new cE,mf=new Tl,gf=new W;class lD extends pi{constructor(e=new cs,t=new aD){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mf.copy(i.boundingSphere),mf.applyMatrix4(r),mf.radius+=s,e.ray.intersectsSphere(mf)===!1)return;iy.copy(r).invert(),O0.copy(e.ray).applyMatrix4(iy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=u.getX(g);gf.fromBufferAttribute(h,m),ry(gf,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)gf.fromBufferAttribute(h,g),ry(gf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ry(n,e,t,i,r,s,o){const a=O0.distanceSqToPoint(n);if(a<t){const l=new W;O0.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class F0 extends zn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uD{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,d=(o-c)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ct:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,r=[],s=[],o=[],a=new W,l=new Lt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new W)}s[0]=new W,o[0]=new W;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Un(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Un(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function d_(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+h)+(l-a)/h;f*=c,d*=c,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const _f=new W,Cp=new d_,Rp=new d_,bp=new d_;class cD extends uD{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(_f.subVectors(r[0],r[1]).add(r[0]),u=_f);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(_f.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=_f),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Cp.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,g,_,m),Rp.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,g,_,m),bp.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Cp.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),Rp.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),bp.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(Cp.calc(l),Rp.calc(l),bp.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i_);const fD=[{x:.06,y:.6,s:.34,r:-14},{x:.74,y:.06,s:.32,r:-9},{x:.2,y:.28,s:.44,r:-6},{x:.53,y:.24,s:.4,r:4},{x:.86,y:.36,s:.42,r:-3},{x:.31,y:.76,s:.42,r:8},{x:.64,y:.7,s:.48,r:-2},{x:.92,y:.84,s:.36,r:11},{x:.46,y:.5,s:.28,r:16}];function hD(n){return()=>(n=n*16807%2147483647,(n-1)/2147483646)}function RE(n){return new Promise(e=>{const t=new Image;t.decoding="async",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})}const dD=(()=>{try{const n=document.createElement("canvas").getContext("2d");return n?(n.filter="blur(2px)",n.filter==="blur(2px)"):!1}catch{return!1}})();async function bE(n,e,t,i){const r=(await Promise.all(n.map(RE))).filter(d=>!!d),s=Math.max(2,Math.round(e*i)),o=Math.max(2,Math.round(t*i)),a=document.createElement("canvas");a.width=s,a.height=o;const l=a.getContext("2d");l.fillStyle="#C6C6C4",l.fillRect(0,0,s,o);const u=hD(7),c=Math.max(s,o*1.25);l.strokeStyle="rgba(32,32,32,0.18)",l.lineWidth=Math.max(1,i*.6);for(let d=0;d<7;d++){l.beginPath();const g=u()*o;l.moveTo(0,g),l.lineTo(s,g+(u()-.5)*o*.2),l.stroke()}r.length&&fD.forEach((d,g)=>{const _=r[g%r.length],m=d.s*c,p=m*_.naturalHeight/Math.max(1,_.naturalWidth);l.save(),l.translate(d.x*s,d.y*o),l.rotate(d.r*Math.PI/180),l.shadowColor="rgba(25,25,20,0.22)",l.shadowBlur=28*i,l.shadowOffsetX=4*i,l.shadowOffsetY=8*i,l.drawImage(_,-m/2,-p/2,m,p),l.shadowColor="transparent",g%3!==1&&(l.fillStyle="rgba(222,222,220,0.78)",l.rotate(-.6),l.fillRect(-m*.36,-p*.62,m*.12,m*.035)),l.restore()});const h=document.createElement("canvas");h.width=Math.max(2,Math.round(s/2)),h.height=Math.max(2,Math.round(o/2));const f=h.getContext("2d");if(dD)f.filter=`blur(${Math.round(9*i)}px)`,f.drawImage(a,0,0,h.width,h.height),f.filter="none";else{const d=document.createElement("canvas");d.width=Math.max(2,Math.round(s/16)),d.height=Math.max(2,Math.round(o/16));const g=d.getContext("2d");g.imageSmoothingQuality="high",g.drawImage(a,0,0,d.width,d.height),f.imageSmoothingQuality="high",f.drawImage(d,0,0,h.width,h.height)}return{sharp:a,blur:h}}const Tt={x:typeof window<"u"?window.innerWidth*.5:0,y:typeof window<"u"?window.innerHeight*.45:0,inside:!1,down:!1,touch:!1},Cr={reveal:0,density:0,paused:!1},Js=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,pD=`
attribute float aTile;
attribute float aIndex;
attribute float aLoaded;
uniform float uFocus;
uniform float uDepth;
uniform float uFogNear;
uniform float uFogFar;
uniform float uHover;
uniform float uCols;
uniform float uRows;
varying vec2 vUv;
varying vec2 vLocal;
varying float vBlur;
varying float vFog;
varying float vNear;
varying float vLoaded;
varying float vHot;

void main() {
  vec4 world = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(instanceMatrix[0].xyz);
  float hot = 1.0 - step(0.5, abs(aIndex - uHover));
  s *= 1.0 + hot * 0.16;
  vec4 mv = viewMatrix * world;
  mv.xy += position.xy * s;
  mv.z += hot * 0.08;
  float d = -mv.z;

  vBlur = clamp((d - uFocus + uDepth * 0.35) / (uDepth * 1.1), 0.0, 1.0) * (1.0 - hot); // near = sharp, haze grows with distance
  vFog = smoothstep(uFogNear, uFogFar, d) * (1.0 - hot);
  vNear = smoothstep(0.35, 2.4, d);
  vLoaded = aLoaded;
  vHot = hot;
  vLocal = uv;

  vec2 q = mix(vec2(0.006), vec2(0.994), uv);
  float col = mod(aTile, uCols);
  float row = floor(aTile / uCols);
  vUv = vec2((col + q.x) / uCols, 1.0 - (row + 1.0 - q.y) / uRows);

  gl_Position = projectionMatrix * mv;
}
`,mD=`
uniform sampler2D uMap;
uniform vec3 uBg;
uniform float uMaxBias;
varying vec2 vUv;
varying vec2 vLocal;
varying float vBlur;
varying float vFog;
varying float vNear;
varying float vLoaded;
varying float vHot;

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  // screen-door transparency: very close sheets dissolve, blurred ones turn vaporous
  float th = ign(gl_FragCoord.xy);
  float keep = vNear * (1.0 - smoothstep(0.3, 1.0, vBlur) * 0.18) * (1.0 - smoothstep(0.5, 1.0, vFog) * 0.25);
  if (keep < th) discard;

  vec3 paper = vec3(0.925, 0.925, 0.918);
  vec3 c = texture2D(uMap, vUv, vBlur * uMaxBias).rgb;
  c = clamp(1.0 - (1.0 - c) * 2.1, 0.0, 1.0); // deepen the linework
  c = mix(paper, c, vLoaded);
  c = mix(c, uBg, vBlur * 0.15);

  vec2 e = min(vLocal, 1.0 - vLocal);
  float edge = 1.0 - smoothstep(0.0, 0.01, min(e.x, e.y));
  c -= edge * (0.16 + vHot * 0.5) * (1.0 - vBlur);

  c = mix(c, uBg, vFog * 0.75);
  gl_FragColor = vec4(c, 1.0);
}
`,gD=`
attribute float aSize;
uniform float uFogNear;
uniform float uFogFar;
uniform float uPx;
varying float vFog;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = -mv.z;
  vFog = smoothstep(uFogNear, uFogFar, d);
  gl_PointSize = clamp(aSize * uPx * 0.75 / max(d, 0.5), 1.2, 3.2);
  gl_Position = projectionMatrix * mv;
}
`,_D=`
uniform vec3 uBg;
uniform vec3 uInk;
varying float vFog;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  if (dot(p, p) > 0.25) discard;
  gl_FragColor = vec4(mix(uInk, uBg, 0.856 + vFog * 0.128), 1.0);
}
`,fu=8,k0=10,jl=fu*k0,sy=1.25,Pp=new vt("#d8d8d6"),vD=new vt("#202020"),ql=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},vf=(n,e,t)=>n+(e-n)*t;function oy(n){return()=>(n=n*16807%2147483647,(n-1)/2147483646)}function Br(n){const e=Math.max(1e-6,n());return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n())}class xD{constructor(e,t,i,r){fe(this,"renderer");fe(this,"scene",new U0);fe(this,"camera",new Gi(42,1,.1,400));fe(this,"group",new cu);fe(this,"uniforms");fe(this,"dustUniforms");fe(this,"pages",[]);fe(this,"positions",[]);fe(this,"scales",[]);fe(this,"centers",[]);fe(this,"clusterT",[]);fe(this,"curve");fe(this,"raf",0);fe(this,"last",performance.now());fe(this,"active",!1);fe(this,"disposed",!1);fe(this,"w",1);fe(this,"h",1);fe(this,"target",0);fe(this,"progress",0);fe(this,"zoom",-4);fe(this,"zoomTarget",-4);fe(this,"yaw",0);fe(this,"pitch",0);fe(this,"yawV",0);fe(this,"pitchV",0);fe(this,"par",new ct);fe(this,"pointer",{x:0,y:0,inside:!1,down:!1,sx:0,sy:0,lx:0,ly:0,moved:0});fe(this,"hover",-1);fe(this,"cluster",null);fe(this,"ro");fe(this,"tmp",new W);fe(this,"tmp2",new W);fe(this,"onMove",e=>{const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top;if(this.pointer.down){const s=i-this.pointer.lx,o=r-this.pointer.ly;this.yawV+=s*.0025,this.pitchV+=o*.0016,this.pointer.moved+=Math.abs(s)+Math.abs(o)}this.pointer.lx=i,this.pointer.ly=r,this.pointer.x=i,this.pointer.y=r,this.pointer.inside=!0});fe(this,"onLeave",()=>{this.pointer.inside=!1,this.setHover(-1)});fe(this,"onDown",e=>{e.pointerType==="mouse"&&e.button!==0||(this.onMove(e),this.pointer.down=!0,this.pointer.moved=0)});fe(this,"onUp",()=>{this.pointer.down&&(this.pointer.down=!1,this.pointer.moved<6&&this.hover>=0&&this.cb.onOpen(this.hover))});fe(this,"tick",e=>{this.raf=requestAnimationFrame(this.tick);const t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.active&&this.step(t)});this.canvas=e,this.entries=t,this.labels=i,this.cb=r,this.renderer=new CE({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ir,this.renderer.setClearColor(Pp,1),this.scene.add(this.group),this.uniforms={uMap:{value:null},uBg:{value:Pp},uMaxBias:{value:1.6},uFocus:{value:60},uDepth:{value:40},uFogNear:{value:80},uFogFar:{value:150},uHover:{value:-1},uCols:{value:fu},uRows:{value:k0}},this.dustUniforms={uBg:{value:Pp},uInk:{value:vD},uFogNear:this.uniforms.uFogNear,uFogFar:this.uniforms.uFogFar,uPx:{value:300}},this.layout(),this.curve=this.buildPath(),this.buildSheets(),this.buildDust(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e.parentElement??e),this.resize(),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerleave",this.onLeave),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),this.raf=requestAnimationFrame(this.tick),this.fillAtlas()}layout(){const e=oy(97),t=14;this.centers=Jr.map((i,r)=>{const s=r/Jr.length*Math.PI*2+1.1;return new W(Math.cos(s)*t,Math.sin(r*1.7)*3.2,Math.sin(s)*t*.8)}),this.entries.forEach((i,r)=>{const s=!i.generator&&!!(i.plan||i.image)&&r<12;if(i.position)this.positions.push(new W(...i.position));else{const o=this.centers[window.__desire?window.__desire.band(r,this.entries):Math.max(0,B2(i.group))],a=s?1.2:3.4;this.positions.push(new W(o.x+Br(e)*a,o.y+Br(e)*a*.65,o.z+Br(e)*a))}this.scales.push(s?2.2:.95+e()*.55)})}buildPath(){const e=[new W(0,7,56),new W(0,4,32)],t=[];this.centers.forEach(s=>{e.push(s.clone().multiplyScalar(.78).add(new W(0,1.3,0))),t.push(e.length-1)}),e.push(new W(6,9,30),new W(10,16,50));const i=new cD(e,!1,"centripetal"),r=600;return this.clusterT=t.map(s=>{let o=0,a=1/0;for(let l=0;l<=r;l++){const u=l/r,c=i.getPointAt(u).distanceToSquared(e[s]);c<a&&(a=c,o=u)}return o}),i}clusterProgress(e){return this.clusterT[e]??0}buildSheets(){const e=new Al(sy,1),t=this.renderer.capabilities.maxTextureSize,i=Math.min(t,window.innerWidth<768?2048:4096),r=Math.ceil(this.entries.length/jl),s=new Lt,o=new wl;for(let a=0;a<r;a++){const l=a*jl,u=Math.min(jl,this.entries.length-l),c=document.createElement("canvas");c.width=i,c.height=i;const h=c.getContext("2d");h.fillStyle="#ececea",h.fillRect(0,0,i,i);const f=new F0(c);f.minFilter=Is,f.magFilter=Fn,f.generateMipmaps=!0,f.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());const d=new Qi({vertexShader:pD,fragmentShader:mD,uniforms:{...this.uniforms,uMap:{value:f}}}),g=new oD(e,d,u);g.frustumCulled=!1;const _=new Float32Array(u),m=new Float32Array(u),p=new Float32Array(u);for(let E=0;E<u;E++){const A=l+E;_[E]=E,m[E]=A;const S=this.scales[A];s.compose(this.positions[A],o,new W(S,S,S)),g.setMatrixAt(E,s)}e.setAttribute("aTile",new ka(_,1));const v=e.clone();v.setAttribute("aTile",new ka(_,1)),v.setAttribute("aIndex",new ka(m,1));const x=new ka(p,1);v.setAttribute("aLoaded",x),g.geometry=v,this.group.add(g),this.pages.push({mesh:g,tex:f,ctx:h,loaded:x})}e.dispose()}buildDust(){const e=oy(4242),t=window.innerWidth<768?900:1800,i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++){let u,c,h;if(e()<.7){const f=this.centers[Math.floor(e()*this.centers.length)];u=f.x+Br(e)*5,c=f.y+Br(e)*3,h=f.z+Br(e)*5}else u=Br(e)*16,c=Br(e)*6,h=Br(e)*13;i.set([u,c,h],l*3),r[l]=.3+e()*e()*1.2}const s=new cs;s.setAttribute("position",new Li(i,3)),s.setAttribute("aSize",new Li(r,1));const o=new Qi({vertexShader:gD,fragmentShader:_D,uniforms:this.dustUniforms}),a=new lD(s,o);a.frustumCulled=!1,this.group.add(a)}async fillAtlas(){const e=this.entries.length;let t=0;const i=new Set;for(let r=0;r<e;r++){if(this.disposed)return;const s=Math.floor(r/jl),o=r%jl,a=this.pages[s],l=await RE(td(this.entries[r]));if(this.disposed)return;if(l){const u=a.ctx.canvas.width/fu,c=a.ctx.canvas.height/k0,h=Math.floor(o%fu*u),f=Math.floor(Math.floor(o/fu)*c),d=l.naturalWidth||1400,g=l.naturalHeight||1e3,_=Math.min(u/d,c/g),m=d*_,p=g*_;a.ctx.fillStyle="#ececea",a.ctx.fillRect(h,f,Math.ceil(u),Math.ceil(c)),a.ctx.drawImage(l,h+(u-m)/2,f+(c-p)/2,m,p),a.loaded.array[o]=1,i.add(s)}t++,(t%12===0||t===e)&&(i.forEach(u=>{this.pages[u].tex.needsUpdate=!0,this.pages[u].loaded.needsUpdate=!0}),i.clear(),this.cb.onLoad(t,e),await new Promise(u=>setTimeout(u,0)))}}setProgress(e){this.target=e}setActive(e){this.active=e,this.last=performance.now()}zoomBy(e){this.zoomTarget=Math.min(14,Math.max(-24,this.zoomTarget+e))}setHover(e){e!==this.hover&&(this.hover=e,this.uniforms.uHover.value=e,this.canvas.style.cursor=e>=0?"pointer":"grab")}resize(){const e=this.canvas.parentElement??this.canvas;this.w=e.clientWidth||window.innerWidth,this.h=e.clientHeight||window.innerHeight;const t=Math.min(window.devicePixelRatio||1,this.w<768?1.5:2);this.renderer.setPixelRatio(t),this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix(),this.dustUniforms.uPx.value=this.h*t*.6}step(e){const t=Js(),i=t?1:1-Math.exp(-e*4);this.progress+=(this.target-this.progress)*i,this.zoom+=(this.zoomTarget-this.zoom)*(1-Math.exp(-e*5)),t||(this.yaw+=this.yawV,this.pitch+=this.pitchV,this.yawV*=Math.exp(-e*6),this.pitchV*=Math.exp(-e*6),this.pointer.down||(this.yaw*=Math.exp(-e*.45),this.pitch*=Math.exp(-e*.9)),this.pitch=Math.max(-.5,Math.min(.5,this.pitch))),this.group.rotation.set(this.pitch,this.yaw+Math.sin(performance.now()*5e-5)*.05,0);const r=Math.min(.999,Math.max(0,this.progress)),s=this.curve.getPointAt(r),o=this.curve.getPointAt(Math.min(1,r+.035)),a=ql(.84,.98,r),l=ql(.02,.16,r)*(1-a),u=this.tmp.set(0,0,0).lerp(o,l),c=this.tmp2.copy(u).sub(s).normalize();s.addScaledVector(c,this.zoom);const h=this.pointer.inside?(this.pointer.x/this.w-.5)*2:0,f=this.pointer.inside?(this.pointer.y/this.h-.5)*2:0;this.par.x+=(h-this.par.x)*(t?1:1-Math.exp(-e*2.5)),this.par.y+=(f-this.par.y)*(t?1:1-Math.exp(-e*2.5)),this.camera.position.copy(s),this.camera.lookAt(u),this.camera.translateX(this.par.x*.9),this.camera.translateY(-this.par.y*.6);const d=ql(.04,.22,r)*(1-a),g=this.camera.position.length(),_=this.uniforms;_.uFocus.value=vf(g,7.5,d),_.uDepth.value=vf(70,14,d),_.uFogNear.value=vf(120,28,d),_.uFogFar.value=vf(220,90,d),this.scene.updateMatrixWorld(),this.updateLabels(_.uFogFar.value),this.pointer.inside&&!this.pointer.down?this.pick(_.uFogFar.value):this.pointer.inside||this.setHover(-1),this.renderer.render(this.scene,this.camera),this.cb.onFrame(g,r)}project(e){const t=this.tmp2.copy(e).project(this.camera);return{x:(t.x*.5+.5)*this.w,y:(-t.y*.5+.5)*this.h,front:t.z<1}}updateLabels(e){let t=null,i=13;this.centers.forEach((r,s)=>{const o=this.tmp.copy(r).applyMatrix4(this.group.matrixWorld),a=o.distanceTo(this.camera.position);a<i&&(i=a,t=s);const l=this.labels[s];if(!l)return;const u=this.project(o),c=u.front?ql(e,e*.55,a)*ql(2.5,7,a):0;l.style.transform=`translate3d(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px, 0)`,l.style.opacity=c.toFixed(3)}),t!==this.cluster&&(this.cluster=t,this.cb.onCluster(t))}pick(e){const t=Math.tan(this.camera.fov*Math.PI/360);let i=-1,r=1/0;const s=this.camera.matrixWorldInverse;for(let o=0;o<this.positions.length;o++){const a=this.tmp.copy(this.positions[o]).applyMatrix4(this.group.matrixWorld),l=-a.clone().applyMatrix4(s).z;if(l<.9||l>e*.85||l>r||(l-this.uniforms.uFocus.value+this.uniforms.uDepth.value*.35)/(this.uniforms.uDepth.value*1.1)>.7)continue;const u=this.project(a),c=.5*this.scales[o]/(l*t)*(this.h/2),h=c*sy;Math.abs(u.x-this.pointer.x)<h&&Math.abs(u.y-this.pointer.y)<c&&(i=o,r=l,this._bx=u.x,this._by=u.y+c)}this.setHover(i),this.cb.onHover(i>=0?i:null,this._bx,this._by)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.canvas.removeEventListener("pointermove",this.onMove),this.canvas.removeEventListener("pointerleave",this.onLeave),this.canvas.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp),this.group.traverse(e=>{var i,r,s;const t=e;(i=t.geometry)==null||i.dispose(),(s=(r=t.material)==null?void 0:r.dispose)==null||s.call(r)}),this.pages.forEach(e=>e.tex.dispose()),this.renderer.dispose()}}const ay=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,yD=`
precision highp float;
uniform sampler2D uPrev;
uniform vec2 uTexel;
uniform vec2 uMouse;   // uv
uniform vec2 uVel;     // uv per frame
uniform float uForce;  // 0..1 while dragging
uniform float uAspect;
varying vec2 vUv;

void main() {
  vec4 c = texture2D(uPrev, vUv);
  vec4 n = texture2D(uPrev, vUv + vec2(0.0, uTexel.y));
  vec4 s = texture2D(uPrev, vUv - vec2(0.0, uTexel.y));
  vec4 e = texture2D(uPrev, vUv + vec2(uTexel.x, 0.0));
  vec4 w = texture2D(uPrev, vUv - vec2(uTexel.x, 0.0));

  // damped wave equation — slow, soft ripples
  float h = (n.r + s.r + e.r + w.r) * 0.5 - c.g;
  h = mix(h, (n.r + s.r + e.r + w.r) * 0.25, 0.18); // extra diffusion keeps it papery, not liquid
  h *= 0.982;

  // displacement diffuses outward and relaxes back (spring-like recovery)
  vec2 d = mix(c.ba, (n.ba + s.ba + e.ba + w.ba) * 0.25, 0.5) * 0.972;

  vec2 p = (vUv - uMouse) * vec2(uAspect, 1.0);
  float fall = exp(-dot(p, p) / 0.0085);
  float speed = clamp(length(uVel) * 60.0, 0.0, 1.0);
  h += uForce * fall * speed * 0.028;
  h = clamp(h, -0.6, 0.6);
  d += uForce * fall * uVel * 0.9;
  d = clamp(d, vec2(-0.08), vec2(0.08));

  gl_FragColor = vec4(h, c.r, d);
}
`,SD=`
precision highp float;
uniform sampler2D uSharp;
uniform sampler2D uBlur;
uniform sampler2D uSim;
uniform vec2 uRes;          // device px
uniform vec2 uBlurTexel;
uniform vec2 uSimTexel;
uniform vec2 uMouse;        // device px, GL origin
uniform float uRadius;      // device px
uniform float uHover;
uniform float uReveal;
uniform float uDensity;
uniform float uTime;
uniform float uDpr;
uniform float uSimOn;
uniform vec4 uSheet[4];     // centre.xy, half.xy (uv)
uniform float uSheetRot[4];
uniform float uSheetAlpha[4];
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}
float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

vec3 blurSample(vec2 uv) {
  vec2 o = uBlurTexel * 2.2;
  vec3 c = texture2D(uBlur, uv).rgb * 0.25;
  c += texture2D(uBlur, uv + vec2(o.x, 0.0)).rgb * 0.125;
  c += texture2D(uBlur, uv - vec2(o.x, 0.0)).rgb * 0.125;
  c += texture2D(uBlur, uv + vec2(0.0, o.y)).rgb * 0.125;
  c += texture2D(uBlur, uv - vec2(0.0, o.y)).rgb * 0.125;
  c += texture2D(uBlur, uv + o).rgb * 0.0625;
  c += texture2D(uBlur, uv - o).rgb * 0.0625;
  c += texture2D(uBlur, uv + vec2(o.x, -o.y)).rgb * 0.0625;
  c += texture2D(uBlur, uv + vec2(-o.x, o.y)).rgb * 0.0625;
  return c;
}

void main() {
  vec2 px = vUv * uRes;

  // ---- wind field
  vec4 sim = texture2D(uSim, vUv) * uSimOn;
  float hx = (texture2D(uSim, vUv + vec2(uSimTexel.x, 0.0)).r - texture2D(uSim, vUv - vec2(uSimTexel.x, 0.0)).r) * uSimOn;
  float hy = (texture2D(uSim, vUv + vec2(0.0, uSimTexel.y)).r - texture2D(uSim, vUv - vec2(0.0, uSimTexel.y)).r) * uSimOn;
  vec2 grad = vec2(hx, hy);
  vec2 disp = sim.ba;

  // paper moves with the gust; drawings beneath shift only by refraction
  vec2 paperUv = vUv - disp * 0.55 - grad * 0.02;
  vec2 drawUv = vUv - disp * 0.08 + grad * 0.012;
  vec2 paperPx = paperUv * uRes;

  // ---- cursor reveal (feathered, slightly organic edge)
  float wob = (fbm(px / (uRadius * 0.6) + uTime * 0.15) - 0.5) * uRadius * 0.22;
  float dm = length(px - uMouse) + wob;
  float mask = (1.0 - smoothstep(uRadius * 0.18, uRadius, dm)) * uHover;
  mask = mask * mask * (3.0 - 2.0 * mask);

  // ---- drawings
  vec3 sharp = texture2D(uSharp, drawUv).rgb;
  vec3 soft = blurSample(drawUv);
  // the blur thins fine linework, so restore ink weight to keep silhouettes legible
  soft = clamp(1.0 - (1.0 - soft) * 1.9, 0.0, 1.0);
  float clarity = clamp(max(mask, uReveal), 0.0, 1.0);
  vec3 drawing = mix(soft, sharp, clarity);
  // uneven ink density
  float inkN = vnoise(px / (3.0 * uDpr)) * 0.6 + vnoise(px / (40.0 * uDpr)) * 0.4;
  drawing = 1.0 - (1.0 - drawing) * (0.8 + 0.32 * inkN);

  // ---- tracing paper sheets
  float keep = 1.0;   // product of (1 - alpha) for each layer
  float edges = 0.0;
  float shadow = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 s = uSheet[i];
    vec2 c = s.xy * uRes;
    vec2 hs = s.zw * uRes;
    vec2 q = rot(uSheetRot[i]) * (paperPx - c);
    float d = sdBox(q, hs);
    d += (vnoise(q * 0.06 / uDpr) - 0.5) * 2.5 * uDpr;   // fibrous, slightly torn edge
    float inside = 1.0 - smoothstep(-0.8 * uDpr, 0.8 * uDpr, d);
    float a = uSheetAlpha[i];
    keep *= 1.0 - a * inside;
    edges += exp(-abs(d) / (1.2 * uDpr)) * a * 1.4;
    float ds = sdBox(q - vec2(5.0, -9.0) * uDpr, hs);
    shadow += (1.0 - smoothstep(-2.0 * uDpr, 26.0 * uDpr, ds)) * (1.0 - inside) * a;
  }
  float paperA = 1.0 - keep;

  // drifting density, like vapour trapped in the vellum
  float cloud = fbm(paperUv * vec2(uRes.x / uRes.y, 1.0) * 2.4 + vec2(uTime * 0.012, -uTime * 0.008));
  paperA *= 0.86 + 0.26 * cloud;
  paperA = paperA + uDensity * (1.0 - paperA);
  // the paper thins where the cursor is
  paperA *= 1.0 - 0.86 * mask;
  paperA = clamp(paperA, 0.0, 0.96);

  vec3 paper = vec3(0.894, 0.894, 0.886);
  float fib = vnoise(rot(0.5) * paperPx * vec2(0.035, 0.5) / uDpr);
  paper -= smoothstep(0.8, 1.0, fib) * 0.012;
  paper -= (vnoise(paperPx / (160.0 * uDpr)) - 0.5) * 0.014;

  // soft folds lit from the upper left
  vec3 nrm = normalize(vec3(-grad * 14.0, 1.0));
  vec3 L = normalize(vec3(-0.45, 0.55, 0.7));
  float light = clamp(dot(nrm, L) / L.z, 0.86, 1.05);
  paper *= mix(1.0, light, 0.6);

  drawing *= 1.0 - shadow * 0.16;
  vec3 col = mix(drawing, paper, paperA);
  col -= edges * 0.07;

  // photocopy grain
  float g = hash(floor(px / max(1.0, uDpr)) + floor(uTime * 12.0)) - 0.5;
  col += g * 0.035;
  // slight vignette, like a lamp over the table
  vec2 v = vUv - 0.5;
  col *= 1.0 - dot(v, v) * 0.18;

  gl_FragColor = vec4(col, 1.0);
}
`,MD=n=>Math.min(1,Math.max(0,n)),ED=n=>n*n*(3-2*n),ly=(n,e,t)=>ED(MD((n-e)/(t-e))),xf=[{c:[.5,.5],h:[.58,.6],rot:0,alpha:.6,exit:[.06,1.35],exitRot:.05,window:[.32,1],sway:.35},{c:[.29,.6],h:[.21,.31],rot:.035,alpha:.2,exit:[-.75,.35],exitRot:-.22,window:[0,.62],sway:1},{c:[.75,.38],h:[.19,.27],rot:-.05,alpha:.2,exit:[.72,-.4],exitRot:.18,window:[.08,.7],sway:1.2},{c:[.58,.82],h:[.12,.09],rot:.09,alpha:.16,exit:[.2,.9],exitRot:.3,window:[0,.45],sway:1.6}];class wD{constructor(e,t,i){fe(this,"renderer");fe(this,"camera",new SE(-1,1,1,-1,0,1));fe(this,"quad");fe(this,"paperMat");fe(this,"simMat");fe(this,"simScene",new U0);fe(this,"paperScene",new U0);fe(this,"rtA",null);fe(this,"rtB",null);fe(this,"simOn");fe(this,"sharpTex",null);fe(this,"blurTex",null);fe(this,"raf",0);fe(this,"last",performance.now());fe(this,"time",0);fe(this,"w",1);fe(this,"h",1);fe(this,"dpr",1);fe(this,"resizeTimer",0);fe(this,"composeToken",0);fe(this,"mx",Tt.x);fe(this,"my",Tt.y);fe(this,"pmx",Tt.x);fe(this,"pmy",Tt.y);fe(this,"hover",0);fe(this,"force",0);fe(this,"reveal",0);fe(this,"density",0);fe(this,"sway",{x:0,y:0,vx:0,vy:0});fe(this,"onResize",()=>{window.clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>this.resize(!1),160)});fe(this,"onVisibility",()=>{this.last=performance.now()});fe(this,"tick",e=>{this.raf=requestAnimationFrame(this.tick);const t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,Cr.paused||document.hidden||!this.sharpTex)return;this.time+=t;const i=Js(),r=i?1:1-Math.exp(-t*7.5);this.pmx=this.mx,this.pmy=this.my,this.mx+=(Tt.x-this.mx)*r,this.my+=(Tt.y-this.my)*r,this.hover+=((Tt.inside&&!window.__tdgtdIntro?1:0)-this.hover)*(1-Math.exp(-t*4)),this.force+=((Tt.down&&!window.__tdgtdIntro?1:0)-this.force)*(1-Math.exp(-t*10)),this.reveal+=(Cr.reveal-this.reveal)*(i?1:1-Math.exp(-t*6)),this.density+=(Cr.density-this.density)*(1-Math.exp(-t*3));const s=t>0?1/(t*60):0,o=(this.mx-this.pmx)/this.w*s,a=-(this.my-this.pmy)/this.h*s;if(!i){const u=this.sway,c=this.force*.9;u.vx+=(-u.x*38-u.vx*7.5)*t+o*c,u.vy+=(-u.y*38-u.vy*7.5)*t+a*c,u.x+=u.vx*t,u.y+=u.vy*t}if(this.simOn&&this.rtA&&this.rtB){const u=this.simMat.uniforms;u.uPrev.value=this.rtA.texture,u.uMouse.value.set(this.mx/this.w,1-this.my/this.h),u.uVel.value.set(o,a),u.uForce.value=this.force*(1-this.reveal),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.simScene,this.camera),this.renderer.setRenderTarget(null),[this.rtA,this.rtB]=[this.rtB,this.rtA],this.paperMat.uniforms.uSim.value=this.rtA.texture}const l=this.paperMat.uniforms;l.uMouse.value.set(this.mx*this.dpr,(this.h-this.my)*this.dpr),l.uHover.value=this.hover*(1-this.reveal),l.uReveal.value=ly(this.reveal,.15,.95),l.uDensity.value=this.density,l.uTime.value=this.time,xf.forEach((u,c)=>{const h=ly(this.reveal,u.window[0],u.window[1]),f=u.c[0]+u.exit[0]*h+this.sway.x*u.sway,d=u.c[1]+u.exit[1]*h+this.sway.y*u.sway;l.uSheet.value[c].set(f,d,u.h[0],u.h[1]),l.uSheetRot.value[c]=u.rot+u.exitRot*h+this.sway.x*u.sway*.6,l.uSheetAlpha.value[c]=u.alpha*(1-h*.35)}),this.renderer.render(this.paperScene,this.camera)});this.sources=t,this.onReady=i,this.renderer=new CE({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ir,this.renderer.setClearColor(15000802,1);const r=this.renderer.extensions;this.simOn=!Js()&&(r.has("EXT_color_buffer_float")||r.has("EXT_color_buffer_half_float"));const s=new Al(2,2);this.simMat=new Qi({vertexShader:ay,fragmentShader:yD,uniforms:{uPrev:{value:null},uTexel:{value:new ct},uMouse:{value:new ct(.5,.5)},uVel:{value:new ct},uForce:{value:0},uAspect:{value:1}},depthTest:!1,depthWrite:!1}),this.simScene.add(new Ri(s,this.simMat)),this.paperMat=new Qi({vertexShader:ay,fragmentShader:SD,uniforms:{uSharp:{value:null},uBlur:{value:null},uSim:{value:null},uRes:{value:new ct},uBlurTexel:{value:new ct},uSimTexel:{value:new ct},uMouse:{value:new ct},uRadius:{value:300},uHover:{value:0},uReveal:{value:0},uDensity:{value:0},uTime:{value:0},uDpr:{value:1},uSimOn:{value:this.simOn?1:0},uSheet:{value:xf.map(()=>new qt)},uSheetRot:{value:xf.map(()=>0)},uSheetAlpha:{value:xf.map(()=>0)}},depthTest:!1,depthWrite:!1}),this.quad=new Ri(s,this.paperMat),this.paperScene.add(this.quad),this.resize(!0),window.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.tick)}resize(e){var l,u;const t=window.innerWidth,i=window.innerHeight,r=t<768?1.25:1.75,s=Math.min(window.devicePixelRatio||1,r),o=e||t!==this.w||Math.abs(i-this.h)>120||s!==this.dpr;this.w=t,this.h=i,this.dpr=s,this.renderer.setPixelRatio(s),this.renderer.setSize(t,i,!1);const a=this.paperMat.uniforms;if(a.uRes.value.set(t*s,i*s),a.uDpr.value=s,a.uRadius.value=Math.min(200,Math.max(125,Math.min(t,i)*.22))*s,this.simOn){const c=t<768?160:256,h=Math.max(32,Math.round(c*i/t)),f={type:Ml,minFilter:Fn,magFilter:Fn,depthBuffer:!1,stencilBuffer:!1};(l=this.rtA)==null||l.dispose(),(u=this.rtB)==null||u.dispose(),this.rtA=new as(c,h,f),this.rtB=new as(c,h,f),this.simMat.uniforms.uTexel.value.set(1/c,1/h),this.simMat.uniforms.uAspect.value=t/i,a.uSimTexel.value.set(1/c,1/h)}o&&this.recompose()}async recompose(){var s,o,a;const e=++this.composeToken,t=Math.min(this.dpr,1.5),i=await bE(this.sources,this.w,this.h,t);if(e!==this.composeToken)return;(s=this.sharpTex)==null||s.dispose(),(o=this.blurTex)==null||o.dispose(),this.sharpTex=new F0(i.sharp),this.blurTex=new F0(i.blur);for(const l of[this.sharpTex,this.blurTex])l.minFilter=Fn,l.magFilter=Fn,l.generateMipmaps=!1;const r=this.paperMat.uniforms;r.uSharp.value=this.sharpTex,r.uBlur.value=this.blurTex,r.uBlurTexel.value.set(1/i.blur.width,1/i.blur.height),(a=this.onReady)==null||a.call(this)}dispose(){var e,t,i,r;cancelAnimationFrame(this.raf),window.clearTimeout(this.resizeTimer),window.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibility),(e=this.rtA)==null||e.dispose(),(t=this.rtB)==null||t.dispose(),(i=this.sharpTex)==null||i.dispose(),(r=this.blurTex)==null||r.dispose(),this.paperMat.dispose(),this.simMat.dispose(),this.quad.geometry.dispose(),this.renderer.dispose()}}function PE(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}Nn.registerPlugin(Ge);const Kl=(n,e=4)=>String(n).padStart(e,"0"),Zl=.2;function TD({onOpen:n}){const e=Ye.useRef(null),t=Ye.useRef(null),i=Ye.useRef(null),r=Ye.useRef([]),s=Ye.useRef(null),o=Ye.useRef(null),a=Ye.useRef(null),l=Ye.useRef(null),u=Ye.useRef(null),c=Ye.useRef(.069),h=Ye.useRef(n);h.current=n;window.__openPlan=n;const[f,d]=Ye.useState(null),[g]=Ye.useState(()=>PE()),_=Ye.useMemo(()=>Jr.map(p=>Ds.filter(v=>v.group===p.key).length),[]);Ye.useEffect(()=>{if(!g)return;const p=e.current;let v=!1;const x=()=>{if(u.current)return;const S=new xD(i.current,Ds,r.current,{onHover:(M,C,L)=>{const y=s.current;if(!y)return;const D=window.__desire;if(M===null){y.style.opacity="0",D&&D.mark(-1);return}const w=Ds[M],k=D&&D.forEntry(M,Ds,Jr);y.style.opacity="1",y.style.transform=`translate3d(${C.toFixed(1)}px, ${(L+10).toFixed(1)}px, 0) translateX(-50%)`,y.children[0].textContent=k?k.q:w.title,y.children[1].textContent=k?`▲ ${k.at} KST`:"",y.children[2].textContent=`${w.no} — ${w.title.toUpperCase()}`,D&&D.mark(k?k.qi:-1)},onOpen:M=>h.current(M),onCluster:d,onFrame:(M,C)=>{o.current&&(o.current.textContent=`${M.toFixed(1).padStart(5,"0")} M — ${Kl(Math.round(C*1e3),4)}`)},onLoad:(M,C)=>{a.current&&(a.current.textContent=M<C?`INDEXING ${Kl(M)} / ${Kl(C)}`:`${Kl(C)} SHEETS INDEXED`)}});S.setProgress(c.current),S.setActive(v),u.current=S,window.__cloud=S},E=Ge.create({trigger:p,start:"top 250%",end:"bottom -100%",onToggle:S=>S.isActive&&x()}),A=Ge.create({trigger:p,start:"top bottom",end:"bottom top",onToggle:S=>{var M;v=S.isActive,(M=u.current)==null||M.setActive(S.isActive)}});return E.isActive&&x(),()=>{var S;E.kill(),A.kill(),(S=u.current)==null||S.dispose(),u.current=null}},[g]),Ye.useLayoutEffect(()=>{const p=Ge.create({trigger:e.current,start:"top top",end:"bottom bottom",onUpdate:M=>{var L;const C=.069+Math.max(0,(M.progress-Zl)/(1-Zl))*.931;if(c.current=C,(L=u.current)==null||L.setProgress(C),l.current){const y=Math.max(0,M.progress-Zl);l.current.style.setProperty("--out",String(1-Math.min(1,y/.07))),l.current.style.transform=`translateY(${-y*400}px)`}}}),v=t.current,x=document.querySelector(".statement-sticky"),E=document.querySelector(".statement-text"),A=M=>{var C;v.style.opacity=String(M),v.classList.toggle("is-shown",M>.5),x&&(x.style.opacity=String(1-M)),E&&(E.style.transform=`translate3d(0, ${(-M*34).toFixed(2)}vh, 0)`),(C=l.current)==null||C.style.setProperty("--in",String(Math.max(0,(M-.75)/.25)))},S=Ge.create({trigger:e.current,start:"top top",end:()=>`+=${window.innerHeight}`,onUpdate:M=>A(M.progress),onLeave:()=>A(1),onLeaveBack:()=>A(0)});return()=>{p.kill(),S.kill()}},[]);const m=p=>{const v=e.current,x=u.current;if(!v||!x)return;const E=v.offsetHeight-window.innerHeight,A=Zl+x.clusterProgress(p)*(1-Zl);window.scrollTo({top:v.offsetTop+E*A,behavior:"smooth"})};return j.jsx("section",{className:"cloud",id:"cloud",ref:e,children:j.jsxs("div",{className:"cloud-stage",ref:t,children:[g?j.jsx("canvas",{ref:i}):j.jsx("p",{className:"cloud-nogl label",children:"THIS VIEW NEEDS WEBGL 2 — SEE SELECTED ENTRIES BELOW."}),j.jsx("div",{className:"cloud-labels","aria-hidden":"true",children:Jr.map((p,v)=>j.jsxs("span",{className:"cloud-label label",ref:x=>{x&&(r.current[v]=x)},children:[j.jsx("i",{children:p.marker})," ",p.label.toUpperCase()]},p.key))}),j.jsxs("div",{className:"cloud-intro",ref:l,children:[j.jsxs("p",{className:"label",children:["04 / ",fr.cloud.label]}),j.jsx("h2",{children:fr.cloud.title.replace("{n}",String(Ds.length))}),j.jsx("p",{className:"cloud-intro-text",children:fr.cloud.intro})]}),j.jsxs("nav",{className:"cloud-legend label","aria-label":"Desire clusters",children:[j.jsx("p",{className:"muted",children:"CLUSTERS"}),Jr.map((p,v)=>j.jsxs("button",{type:"button",className:f===v?"is-active":"",onClick:()=>m(v),"data-cursor":"FLY",children:[j.jsx("span",{children:p.marker}),j.jsx("span",{children:p.label.toUpperCase()}),j.jsx("span",{children:Kl(_[v],3)})]},p.key))]}),j.jsxs("div",{className:"cloud-zoom label",children:[j.jsx("span",{children:"ZOOM"}),j.jsx("button",{type:"button",onClick:()=>{var p;return(p=u.current)==null?void 0:p.zoomBy(4)},"aria-label":"Zoom in",children:"+"}),j.jsx("button",{type:"button",onClick:()=>{var p;return(p=u.current)==null?void 0:p.zoomBy(-4)},"aria-label":"Zoom out",children:"−"})]}),j.jsxs("div",{className:"cloud-foot label",children:[j.jsxs("span",{children:["DEPTH ",j.jsx("span",{ref:o,children:"000.0 M"})]}),j.jsx("span",{ref:a,className:"muted",children:"INDEXING"}),j.jsx("span",{className:"muted",children:fr.cloud.hint})]}),j.jsx("aside",{className:"cloud-rank","aria-label":"실시간 검색어",ref:x=>{x&&window.__desire&&window.__desire.mountRank(x)}}),j.jsxs("div",{className:"cloud-tip",ref:s,"aria-hidden":"true",children:[j.jsx("span",{className:"tip-q"}),j.jsx("span",{className:"label tip-t"}),j.jsx("span",{className:"label muted tip-n"})]})]})})}function AD(){const n=Ye.useRef(null),e=Ye.useRef(null),t=Ye.useRef(null);return Ye.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const i=n.current;document.documentElement.classList.add("has-cursor");let r=Tt.x,s=Tt.y,o=0,a="";const l=c=>{var d,g;const h=(g=(d=c.target)==null?void 0:d.closest)==null?void 0:g.call(d,"[data-cursor], a, button"),f=(h==null?void 0:h.dataset.cursor)??(h?"↗":"");i.classList.toggle("is-link",!!h),t.current&&(t.current.textContent=f)};document.addEventListener("pointerover",l);const u=()=>{o=requestAnimationFrame(u);const c=Js()?1:.35;r+=(Tt.x-r)*c,s+=(Tt.y-s)*c,i.style.transform=`translate3d(${r}px, ${s}px, 0)`,i.classList.toggle("is-down",Tt.down),i.classList.toggle("is-out",!Tt.inside);const h=`X ${String(Math.round(Tt.x)).padStart(4,"0")}  Y ${String(Math.round(Tt.y+window.scrollY)).padStart(5,"0")}`;h!==a&&e.current&&(e.current.textContent=h,a=h)};return o=requestAnimationFrame(u),()=>{cancelAnimationFrame(o),document.removeEventListener("pointerover",l),document.documentElement.classList.remove("has-cursor")}},[]),j.jsxs("div",{className:"cursor",ref:n,"aria-hidden":"true",children:[j.jsx("span",{className:"cursor-cross"}),j.jsx("span",{className:"cursor-ring"}),j.jsx("span",{className:"cursor-coord label",ref:e}),j.jsx("span",{className:"cursor-tag label",ref:t})]})}function CD({index:n,onClose:e,onNavigate:t}){const i=Ds[n],r=Ye.useRef(null),s=Ye.useRef(null),o=Ye.useRef(null),[a,l]=Ye.useState(!1),u=Ye.useRef(!1),c=()=>{if(!u.current){if(u.current=!0,Js())return e();Nn.to(r.current,{opacity:0,duration:.45,ease:"power2.in",onComplete:e})}},h=d=>t((n+d+Ds.length)%Ds.length);Ye.useLayoutEffect(()=>{const d=r.current;if(Js())return;const g=Nn.context(()=>{Nn.fromTo(d,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"}),Nn.fromTo(".detail-sheet",{y:80,rotate:-1.2},{y:0,rotate:0,duration:1.1,ease:"expo.out"}),Nn.fromTo(".detail-plan img",{filter:"blur(14px)",opacity:.4},{filter:"blur(0px)",opacity:1,duration:1.4,ease:"power2.out",delay:.15}),Nn.fromTo(".detail-text > *",{opacity:0,y:14},{opacity:1,y:0,stagger:.06,duration:.7,delay:.25})},d);return()=>g.revert()},[n]),Ye.useEffect(()=>{l(!1)},[n]),Ye.useEffect(()=>{var _;const d=document.documentElement;d.classList.add("is-locked"),(_=o.current)==null||_.focus({preventScroll:!0});const g=m=>{m.key==="Escape"&&c(),m.key==="ArrowRight"&&h(1),m.key==="ArrowLeft"&&h(-1)};return window.addEventListener("keydown",g),()=>{d.classList.remove("is-locked"),window.removeEventListener("keydown",g)}});const f=d=>{var p,v;const g=d.currentTarget.getBoundingClientRect(),_=(d.clientX-g.left)/g.width*100,m=(d.clientY-g.top)/g.height*100;(p=s.current)==null||p.style.setProperty("--ox",`${_}%`),(v=s.current)==null||v.style.setProperty("--oy",`${m}%`)};return j.jsx("div",{className:"detail",ref:r,role:"dialog","aria-modal":"true","aria-label":`${i.no} — ${i.title}`,children:j.jsxs("div",{className:"detail-sheet",children:[j.jsxs("header",{className:"detail-bar label",children:[j.jsx("button",{type:"button",ref:o,onClick:c,className:"detail-back",children:"← RETURN TO ARCHIVE"}),j.jsxs("span",{children:["ARCHIVE ",i.no," / ",String(Ds.length).padStart(3,"0")]}),j.jsxs("span",{className:"detail-nav",children:[j.jsx("button",{type:"button",onClick:()=>h(-1),"aria-label":"Previous entry",children:"← PREV"}),j.jsx("button",{type:"button",onClick:()=>h(1),"aria-label":"Next entry",children:"NEXT →"})]})]}),j.jsxs("div",{className:`detail-plan ${a?"is-zoomed":""}`,ref:s,onPointerMove:f,onClick:d=>{f(d),l(g=>!g)},"data-cursor":a?"−":"+","data-no-drag":!0,children:[j.jsx("img",{src:td(i),alt:`Floor plan: ${i.title}`,draggable:!1}),j.jsx("span",{className:"detail-zoomhint label",children:a?"CLICK TO RETURN":"CLICK TO MAGNIFY"})]}),j.jsxs("div",{className:"detail-text",children:[j.jsxs("p",{className:"label",children:["SPECULATIVE WORLD ",i.no]}),j.jsx("h2",{children:i.title.toUpperCase()}),j.jsxs("dl",{className:"detail-desire",children:[j.jsxs("div",{children:[j.jsx("dt",{className:"label",children:"DESIRE"}),j.jsx("dd",{children:i.desire})]}),j.jsxs("div",{children:[j.jsx("dt",{className:"label",children:"SOCIAL CONDITION"}),j.jsx("dd",{children:i.condition})]})]}),j.jsx("div",{className:"detail-scenario",children:i.scenario.map((d,g)=>j.jsx("p",{children:d},g))}),j.jsx("dl",{className:"detail-meta",children:i.meta.map(d=>j.jsxs("div",{children:[j.jsx("dt",{className:"label",children:d.label.toUpperCase()}),j.jsx("dd",{children:d.value})]},d.label))})]})]})})}Nn.registerPlugin(Ge);function RD(n){return()=>(n=n*16807%2147483647,(n-1)/2147483646)}function bD(n,e,t){const i=RD(e),r=[];for(const s of n){const o=[];for(const a of s){let l=.55+i()*.9;a===" "&&(l=1.1+i()*.6),a===","&&(l=4),(a==="."||a==="?")&&(l=7+i()*3),i()<.03&&(l+=6),o.push({ch:a,cost:l/t,style:{"--o":(.7+i()*.3).toFixed(2),"--y":`${((i()-.5)*.09).toFixed(3)}em`,"--r":`${((i()-.5)*2.4).toFixed(2)}deg`}})}o.length&&(o[o.length-1].cost+=12/t),r.push(o)}return r}function LE({paragraphs:n,trigger:e,className:t,doneAt:i=.62,cps:r=34,seed:s=3,onType:o}){const a=Ye.useMemo(()=>bD(n,s,r),[n,s,r]),l=Ye.useMemo(()=>a.reduce((h,f)=>h+f.length,0),[a]),u=Ye.useRef(null),c=Ye.useRef(o);return c.current=o,Ye.useLayoutEffect(()=>{var E;const h=u.current,f=Array.from(h.querySelectorAll(".tw-c")),d=a.flat().map(A=>A.cost);let g=0,_=0,m=0;const p=(A,S)=>{var L,y,w;const[M,C]=A<S?[A,S]:[S,A];for(let N=M;N<C;N++)f[N].classList.toggle("on",N<S);(L=f[A-1])==null||L.classList.remove("head"),(y=f[S-1])==null||y.classList.add("head"),(w=c.current)==null||w.call(c,S,l)};if(Js()){p(0,l);return}const v=(A,S)=>{const M=Math.min(.1,S/1e3);if(_===g){m=0;return}const C=g;if(_<g)g=Math.max(_,g-Math.ceil(M*160));else{const L=_-g;for(m+=M*(1+Math.max(0,L-12)/10);g<_&&m>=d[g];)m-=d[g],g++}g!==C&&p(C,g)};Nn.ticker.add(v);const x=Ge.create({trigger:e.current??h.closest("section"),start:"top 35%",end:"bottom bottom",onUpdate:A=>{if(_=Math.round(Math.min(1,A.progress/i)*l),A.progress>=Math.min(.95,i+.2)&&g<l){const S=g;g=l,m=0,p(S,g)}}});return(E=c.current)==null||E.call(c,0,l),()=>{Nn.ticker.remove(v),x.kill()}},[a,l,e,i]),j.jsxs("div",{className:`typewriter ${t??""}`,ref:u,children:[j.jsx("span",{className:"sr-only",children:n.join(" ")}),a.map((h,f)=>j.jsx("p",{"aria-hidden":"true",children:PD(h).map((d,g)=>d.space?j.jsx("span",{className:"tw-c tw-space",style:d.chars[0].style,children:" "},g):j.jsx("span",{className:"tw-w",children:d.chars.map((_,m)=>j.jsx("span",{className:"tw-c",style:_.style,children:_.ch},m))},g))},f))]})}function PD(n){const e=[];for(const t of n){const i=t.ch===" ",r=e[e.length-1];!i&&r&&!r.space?r.chars.push(t):e.push({space:i,chars:[t]})}return e}function LD({block:n,index:e}){const t=Ye.useRef(null),i=Ye.useRef(null),r=s=>String(s).padStart(4,"0");return j.jsx("section",{className:`essay-block essay-${e}`,ref:t,children:j.jsxs("div",{className:"essay-sticky",children:[j.jsxs("aside",{className:"essay-meta",children:[j.jsxs("p",{className:"essay-no",children:[n.no," / ",n.title]}),j.jsxs("p",{className:"label muted",children:["BASELINE TRANSCRIPT ",n.no,".",j.jsx("br",{}),"START."]}),j.jsxs("p",{className:"label muted",children:["CHARS ",j.jsx("span",{ref:i,children:"0000 / 0000"})]})]}),j.jsx(LE,{className:"essay-text",paragraphs:n.text,trigger:t,seed:e*17+5,onType:(s,o)=>{i.current&&(i.current.textContent=`${r(s)} / ${r(o)}`)}})]})})}function DD(){return j.jsx("div",{className:"essay",id:"essay",children:fr.essay.map((n,e)=>j.jsx(LD,{block:n,index:e},n.no))})}const ID=()=>j.jsx("div",{className:"hero-marks","aria-hidden":"true",children:[0,1,2,3].map(n=>j.jsx("span",{children:"+ ×"},n))});function ND(){const{hero:n,version:e}=fr;return j.jsxs("section",{className:"hero",id:"top",children:[j.jsxs("header",{className:"topbar",children:[j.jsx("span",{className:"pill",children:n.label}),j.jsx("span",{className:"topbar-mid",children:"SA—ARCHIVE 001 / FOLIO I–IV"}),j.jsx("span",{className:"pill",children:e})]}),j.jsx(ID,{}),j.jsx("h1",{className:"hero-title",children:n.titleLines.map((t,i)=>j.jsxs("span",{className:`hero-line hero-line-${i}`,children:[t,i===2&&j.jsx("sup",{className:"hero-fig",children:"[FIG. 00]"})]},i))}),j.jsxs("div",{className:"hero-process",children:[j.jsx("p",{className:"label",children:"FROM — TO:"}),j.jsx("ol",{children:n.process.map((t,i)=>j.jsxs("li",{children:[j.jsxs("span",{children:["[",String(i+1).padStart(2,"0"),"]"]}),j.jsxs("span",{children:[t,"."]})]},t))})]}),j.jsxs("footer",{className:"hero-foot",children:[j.jsx("span",{children:n.meta[0]}),j.jsx("span",{className:"hero-hint",children:n.hint.map(t=>j.jsx("span",{children:t},t))}),j.jsx("span",{className:"hero-scroll",children:n.meta[1]})]})]})}class uy{constructor(e,t){fe(this,"raf",0);fe(this,"mx",Tt.x);fe(this,"my",Tt.y);fe(this,"hover",0);fe(this,"sharp",null);fe(this,"blur",null);fe(this,"tick",()=>{if(this.raf=requestAnimationFrame(this.tick),Cr.paused)return;const e=Js()?1:.12;this.mx+=(Tt.x-this.mx)*e,this.my+=(Tt.y-this.my)*e,this.hover+=((Tt.inside&&!window.__tdgtdIntro?1:0)-this.hover)*.08;const t=Math.min(200,Math.max(125,Math.min(window.innerWidth,window.innerHeight)*.22)),i=this.root.style;i.setProperty("--mx",`${this.mx}px`),i.setProperty("--my",`${this.my}px`);const r=Math.max(window.innerWidth,window.innerHeight)*1.6;i.setProperty("--r",`${t*this.hover+(r-t*this.hover)*Cr.reveal}px`),i.setProperty("--reveal",String(Cr.reveal)),i.setProperty("--density",String(Cr.density))});this.root=e,e.classList.add("paper-fallback"),bE(t,window.innerWidth,window.innerHeight,Math.min(window.devicePixelRatio||1,1.5)).then(i=>{this.blur=i.blur,this.sharp=i.sharp,i.blur.className="pf-blur",i.sharp.className="pf-sharp";const r=document.createElement("div");r.className="pf-paper",e.append(i.blur,i.sharp,r),this.raf=requestAnimationFrame(this.tick)})}dispose(){var e,t,i;cancelAnimationFrame(this.raf),(e=this.sharp)==null||e.remove(),(t=this.blur)==null||t.remove(),(i=this.root.querySelector(".pf-paper"))==null||i.remove(),this.root.classList.remove("paper-fallback")}}const UD="a, button, input, textarea, select, [data-no-drag]";function OD(){const n=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const t=n.current,i=e.current,r=sc.map(td).filter(Boolean),s=()=>t.classList.add("is-ready");let o;if(PE())try{o=new wD(i,r,s)}catch{i.remove(),o=new uy(t,r),s()}else i.remove(),o=new uy(t,r),s();const a=document.documentElement,l=f=>{Tt.x=f.clientX,Tt.y=f.clientY,Tt.inside=!0,Tt.touch=f.pointerType==="touch"},u=f=>{var d,g;l(f),!(Cr.paused||(g=(d=f.target)==null?void 0:d.closest)!=null&&g.call(d,UD))&&(f.pointerType==="mouse"&&f.button!==0||(Tt.down=!0,a.classList.add("is-dragging")))},c=()=>{Tt.down=!1,a.classList.remove("is-dragging")},h=f=>{!f.relatedTarget&&f.pointerType==="mouse"&&(Tt.inside=!1)};return window.addEventListener("pointermove",l,{passive:!0}),window.addEventListener("pointerdown",u),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("blur",c),document.addEventListener("pointerout",h),()=>{o.dispose(),window.removeEventListener("pointermove",l),window.removeEventListener("pointerdown",u),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),window.removeEventListener("blur",c),document.removeEventListener("pointerout",h)}},[]),j.jsx("div",{className:"paper-canvas",ref:n,"aria-hidden":"true",children:j.jsx("canvas",{ref:e})})}function FD(){const n=Ye.useRef(null),{lines:e,echo:t}=fr.statement,i=Ye.useMemo(()=>{const r=[];let s=0;for(let o=0;o<16;o++){let a="";for(;a.length<90;){const l=t[(s*7+o*3)%t.length];a+=`${l}. ${s%3===0?"↵ ● ":s%3===1?"↵ ○ ":""}`,s++}r.push(a)}return r},[t]);return j.jsx("section",{className:"statement",ref:n,children:j.jsxs("div",{className:"statement-sticky",children:[j.jsx("div",{className:"statement-echo","aria-hidden":"true",children:i.map((r,s)=>j.jsx("p",{style:{marginLeft:`${-(s*37%23)}ch`},children:r},s))}),j.jsxs("p",{className:"label statement-label",children:["BA-K/D/SIX|DASH|THREE|DOT|7",j.jsx("br",{}),"BASELINE TRANSCRIPT 04. END."]}),j.jsx(LE,{className:"statement-text",paragraphs:e,trigger:n,cps:22,seed:41,doneAt:.4})]})})}Nn.registerPlugin(Ge);function kD(){const[n,e]=Ye.useState(null);return Ye.useLayoutEffect(()=>{var i;const t=[Ge.create({trigger:"#essay",start:"top bottom",end:"top 20%",onUpdate:r=>{Cr.density=.32*r.progress}}),Ge.create({trigger:"#essay",start:"top top",end:"max",onToggle:r=>{Cr.paused=r.isActive}})];return(i=document.fonts)==null||i.ready.then(()=>Ge.refresh()),()=>t.forEach(r=>r.kill())},[]),j.jsxs(j.Fragment,{children:[j.jsx(OD,{}),j.jsx(AD,{}),j.jsxs("main",{children:[j.jsx(TD,{onOpen:e}),j.jsx(tC,{onOpen:e})]}),n!==null&&j.jsx(CD,{index:n,onClose:()=>e(null),onNavigate:e})]})}MS(document.getElementById("root")).render(j.jsx(kD,{}));
