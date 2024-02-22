(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const q={},ke=[],yt=()=>{},ds=()=>!1,Hn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gr=t=>t.startsWith("onUpdate:"),it=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ms=Object.prototype.hasOwnProperty,U=(t,e)=>ms.call(t,e),R=Array.isArray,Ae=t=>Bn(t)==="[object Map]",$i=t=>Bn(t)==="[object Set]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Te=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",zi=t=>(Z(t)||F(t))&&F(t.then)&&F(t.catch),Di=Object.prototype.toString,Bn=t=>Di.call(t),hs=t=>Bn(t).slice(8,-1),Ui=t=>Bn(t)==="[object Object]",qr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ze=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ps=/-(\w)/g,Lt=Yn(t=>t.replace(ps,(e,n)=>n?n.toUpperCase():"")),gs=/\B([A-Z])/g,Ne=Yn(t=>t.replace(gs,"-$1").toLowerCase()),Wn=Yn(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=Yn(t=>t?`on${Wn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Na;const Hi=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?xs(r):Jr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||Z(t))return t}const bs=/;(?![^(]*\))/g,ys=/:([^]+)/,_s=/\/\*[^]*?\*\//g;function xs(t){const e={};return t.replace(_s,"").split(bs).forEach(n=>{if(n){const r=n.split(ys);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tn(t){let e="";if(nt(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=tn(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ws="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ks=Kr(ws);function Bi(t){return!!t||t===""}const qt=t=>nt(t)?t:t==null?"":R(t)||Z(t)&&(t.toString===Di||!F(t.toString))?JSON.stringify(t,Yi,2):String(t),Yi=(t,e)=>e&&e.__v_isRef?Yi(t,e.value):Ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[cr(r,i)+" =>"]=a,n),{})}:$i(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cr(n))}:Te(e)?cr(e):Z(e)&&!R(e)&&!Ui(e)?String(e):e,cr=(t,e="")=>{var n;return Te(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class As{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Os(t,e=xt){e&&e.active&&e.effects.push(t)}function Es(){return xt}let ue;class Zr{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Os(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ge();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ss(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ve()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Jt,n=ue;try{return Jt=!0,ue=this,this._runnings++,Ma(this),this.fn()}finally{Ra(this),this._runnings--,ue=n,Jt=e}}stop(){var e;this.active&&(Ma(this),Ra(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ss(t){return t.value}function Ma(t){t._trackId++,t._depsLength=0}function Ra(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wi(t.deps[e],t);t.deps.length=t._depsLength}}function Wi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Jt=!0,wr=0;const Vi=[];function ge(){Vi.push(Jt),Jt=!1}function ve(){const t=Vi.pop();Jt=t===void 0?!0:t}function Qr(){wr++}function ta(){for(wr--;!wr&&kr.length;)kr.shift()()}function Ki(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Wi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kr=[];function Gi(t,e,n){Qr();for(const r of t.keys()){let a;r._dirtyLevel<e&&(a??(a=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(a??(a=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&kr.push(r.scheduler)))}ta()}const Xi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ar=new WeakMap,de=Symbol(""),Or=Symbol("");function mt(t,e,n){if(Jt&&ue){let r=Ar.get(t);r||Ar.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Xi(()=>r.delete(n))),Ki(ue,a)}}function zt(t,e,n,r,a,i){const o=Ar.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Te(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?qr(n)&&s.push(o.get("length")):(s.push(o.get(de)),Ae(t)&&s.push(o.get(Or)));break;case"delete":R(t)||(s.push(o.get(de)),Ae(t)&&s.push(o.get(Or)));break;case"set":Ae(t)&&s.push(o.get(de));break}Qr();for(const l of s)l&&Gi(l,4);ta()}const Cs=Kr("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Te)),La=Ps();function Ps(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ge(),Qr();const r=Y(this)[e].apply(this,n);return ta(),ve(),r}}),t}function Is(t){const e=Y(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Ji{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Bs:eo:i?to:Qi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!a){if(o&&U(La,n))return Reflect.get(La,n,r);if(n==="hasOwnProperty")return Is}const s=Reflect.get(e,n,r);return(Te(n)?qi.has(n):Cs(n))||(a||mt(e,"get",n),i)?s:ht(s)?o&&qr(n)?s:s.value:Z(s)?a?no(s):ra(s):s}}class Zi extends Ji{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Ce(i);if(!Mn(r)&&!Ce(r)&&(i=Y(i),r=Y(r)),!R(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const o=R(e)&&qr(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,a);return e===Y(a)&&(o?Qt(r,i)&&zt(e,"set",n,r):zt(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&zt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Te(n)||!qi.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",R(e)?"length":de),Reflect.ownKeys(e)}}class Ts extends Ji{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ns=new Zi,Ms=new Ts,Rs=new Zi(!0),ea=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function cn(t,e,n=!1,r=!1){t=t.__v_raw;const a=Y(t),i=Y(e);n||(Qt(e,i)&&mt(a,"get",e),mt(a,"get",i));const{has:o}=Vn(a),s=r?ea:n?ia:We;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function un(t,e=!1){const n=this.__v_raw,r=Y(n),a=Y(t);return e||(Qt(t,a)&&mt(r,"has",t),mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function dn(t,e=!1){return t=t.__v_raw,!e&&mt(Y(t),"iterate",de),Reflect.get(t,"size",t)}function Fa(t){t=Y(t);const e=Y(this);return Vn(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function ja(t,e){e=Y(e);const n=Y(this),{has:r,get:a}=Vn(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qt(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function $a(t){const e=Y(this),{has:n,get:r}=Vn(e);let a=n.call(e,t);a||(t=Y(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&zt(e,"delete",t,void 0),i}function za(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function mn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=e?ea:t?ia:We;return!t&&mt(s,"iterate",de),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function hn(t,e,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Ae(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?ea:e?ia:We;return!e&&mt(i,"iterate",l?Or:de),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ls(){const t={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Fa,set:ja,delete:$a,clear:za,forEach:mn(!1,!1)},e={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Fa,set:ja,delete:$a,clear:za,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),e[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[t,n,e,r]}const[Fs,js,$s,zs]=Ls();function na(t,e){const n=e?t?zs:$s:t?js:Fs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ds={get:na(!1,!1)},Us={get:na(!1,!0)},Hs={get:na(!0,!1)},Qi=new WeakMap,to=new WeakMap,eo=new WeakMap,Bs=new WeakMap;function Ys(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(t){return t.__v_skip||!Object.isExtensible(t)?0:Ys(hs(t))}function ra(t){return Ce(t)?t:aa(t,!1,Ns,Ds,Qi)}function Vs(t){return aa(t,!1,Rs,Us,to)}function no(t){return aa(t,!0,Ms,Hs,eo)}function aa(t,e,n,r,a){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Ws(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Oe(t){return Ce(t)?Oe(t.__v_raw):!!(t&&t.__v_isReactive)}function Ce(t){return!!(t&&t.__v_isReadonly)}function Mn(t){return!!(t&&t.__v_isShallow)}function ro(t){return Oe(t)||Ce(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ao(t){return Object.isExtensible(t)&&Nn(t,"__v_skip",!0),t}const We=t=>Z(t)?ra(t):t,ia=t=>Z(t)?no(t):t;class io{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zr(()=>e(this._value),()=>On(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=Y(this);return(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&On(e,4),oo(e),e.effect._dirtyLevel>=2&&On(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ks(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=yt):(r=t.get,a=t.set),new io(r,a,i||!a,n)}function oo(t){var e;Jt&&ue&&(t=Y(t),Ki(ue,(e=t.dep)!=null?e:t.dep=Xi(()=>t.dep=void 0,t instanceof io?t:void 0)))}function On(t,e=4,n){t=Y(t);const r=t.dep;r&&Gi(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Rn(t){return Gs(t,!1)}function Gs(t,e){return ht(t)?t:new Xs(t,e)}class Xs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:We(e)}get value(){return oo(this),this._value}set value(e){const n=this.__v_isShallow||Mn(e)||Ce(e);e=n?e:Y(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:We(e),On(this,4))}}function qs(t){return ht(t)?t.value:t}const Js={get:(t,e,n)=>qs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ht(a)&&!ht(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function so(t){return Oe(t)?t:new Proxy(t,Js)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zt(t,e,n,r){try{return r?t(...r):t()}catch(a){Kn(a,e,n)}}function Et(t,e,n,r){if(F(t)){const i=Zt(t,e,n,r);return i&&zi(i)&&i.catch(o=>{Kn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Et(t[i],e,n,r));return a}function Kn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Zt(l,null,10,[t,o,s]);return}}Zs(t,n,a,r)}function Zs(t,e,n,r=!0){console.error(t)}let Ve=!1,Er=!1;const ot=[];let Tt=0;const Ee=[];let Kt=null,le=0;const lo=Promise.resolve();let oa=null;function Qs(t){const e=oa||lo;return t?e.then(this?t.bind(this):t):e}function tl(t){let e=Tt+1,n=ot.length;for(;e<n;){const r=e+n>>>1,a=ot[r],i=Ke(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function sa(t){(!ot.length||!ot.includes(t,Ve&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?ot.push(t):ot.splice(tl(t.id),0,t),fo())}function fo(){!Ve&&!Er&&(Er=!0,oa=lo.then(uo))}function el(t){const e=ot.indexOf(t);e>Tt&&ot.splice(e,1)}function nl(t){R(t)?Ee.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?le+1:le))&&Ee.push(t),fo()}function Da(t,e,n=Ve?Tt+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function co(t){if(Ee.length){const e=[...new Set(Ee)].sort((n,r)=>Ke(n)-Ke(r));if(Ee.length=0,Kt){Kt.push(...e);return}for(Kt=e,le=0;le<Kt.length;le++)Kt[le]();Kt=null,le=0}}const Ke=t=>t.id==null?1/0:t.id,rl=(t,e)=>{const n=Ke(t)-Ke(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function uo(t){Er=!1,Ve=!0,ot.sort(rl);try{for(Tt=0;Tt<ot.length;Tt++){const e=ot[Tt];e&&e.active!==!1&&Zt(e,null,14)}}finally{Tt=0,ot.length=0,co(),Ve=!1,oa=null,(ot.length||Ee.length)&&uo()}}function al(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||q;v&&(a=n.map(k=>nt(k)?k.trim():k)),m&&(a=n.map(vs))}let s,l=r[s=lr(e)]||r[s=lr(Lt(e))];!l&&i&&(l=r[s=lr(Ne(e))]),l&&Et(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Et(c,t,6,a)}}function mo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=mo(c,e,!0);u&&(s=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(Z(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>o[l]=null):it(o,i),Z(t)&&r.set(t,o),o)}function Gn(t,e){return!t||!Hn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Ne(e))||U(t,e))}let wt=null,ho=null;function Ln(t){const e=wt;return wt=t,ho=t&&t.type.__scopeId||null,e}function il(t,e=wt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Ja(-1);const i=Ln(e);let o;try{o=t(...a)}finally{Ln(i),r._d&&Ja(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:k,ctx:j,inheritAttrs:N}=t;let D,w;const S=Ln(t);try{if(n.shapeFlag&4){const $=a||r,H=$;D=It(u.call(H,$,m,i,k,v,j)),w=l}else{const $=e;D=It($.length>1?$(i,{attrs:l,slots:s,emit:c}):$(i,null)),w=e.props?l:ol(l)}}catch($){He.length=0,Kn($,t,1),D=J(me)}let P=D;if(w&&N!==!1){const $=Object.keys(w),{shapeFlag:H}=P;$.length&&H&7&&(o&&$.some(Gr)&&(w=sl(w,o)),P=Pe(P,w))}return n.dirs&&(P=Pe(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),D=P,Ln(S),D}const ol=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hn(n))&&((e||(e={}))[n]=t[n]);return e},sl=(t,e)=>{const n={};for(const r in t)(!Gr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ll(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Gn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ua(r,o,c):!0:!!o;return!1}function Ua(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Gn(n,i))return!0}return!1}function fl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const po="components";function la(t,e){return ul(po,t,!0,e)||t}const cl=Symbol.for("v-ndc");function ul(t,e,n=!0,r=!1){const a=wt||st;if(a){const i=a.type;if(t===po){const s=ff(i,!1);if(s&&(s===e||s===Lt(e)||s===Wn(Lt(e))))return i}const o=Ha(a[t]||i[t],e)||Ha(a.appContext[t],e);return!o&&r?i:o}}function Ha(t,e){return t&&(t[e]||t[Lt(e)]||t[Wn(Lt(e))])}const dl=t=>t.__isSuspense;function ml(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):nl(t)}const hl=Symbol.for("v-scx"),pl=()=>Cn(hl),pn={};function En(t,e,n){return go(t,e,n)}function go(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=q){if(e&&i){const L=e;e=(...et)=>{L(...et),H()}}const l=st,c=L=>r===!0?L:_e(L,r===!1?1:void 0);let u,m=!1,v=!1;if(ht(t)?(u=()=>t.value,m=Mn(t)):Oe(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(L=>Oe(L)||Mn(L)),u=()=>t.map(L=>{if(ht(L))return L.value;if(Oe(L))return c(L);if(F(L))return Zt(L,l,2)})):F(t)?e?u=()=>Zt(t,l,2):u=()=>(k&&k(),Et(t,l,3,[j])):u=yt,e&&r){const L=u;u=()=>_e(L())}let k,j=L=>{k=P.onStop=()=>{Zt(L,l,4),k=P.onStop=void 0}},N;if(Qn)if(j=yt,e?n&&Et(e,l,3,[u(),v?[]:void 0,j]):u(),a==="sync"){const L=pl();N=L.__watcherHandles||(L.__watcherHandles=[])}else return yt;let D=v?new Array(t.length).fill(pn):pn;const w=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(v?L.some((et,ct)=>Qt(et,D[ct])):Qt(L,D)))&&(k&&k(),Et(e,l,3,[L,D===pn?void 0:v&&D[0]===pn?[]:D,j]),D=L)}else P.run()};w.allowRecurse=!!e;let S;a==="sync"?S=w:a==="post"?S=()=>dt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),S=()=>sa(w));const P=new Zr(u,yt,S),$=Es(),H=()=>{P.stop(),$&&Xr($.effects,P)};return e?n?w():D=P.run():a==="post"?dt(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(H),H}function gl(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?vo(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=en(this),s=go(a,i.bind(r),n);return o(),s}function vo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function _e(t,e,n=0,r){if(!Z(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))_e(t.value,e,n,r);else if(R(t))for(let a=0;a<t.length;a++)_e(t[a],e,n,r);else if($i(t)||Ae(t))t.forEach(a=>{_e(a,e,n,r)});else if(Ui(t))for(const a in t)_e(t[a],e,n,r);return t}function ie(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ge(),Et(l,n,8,[t.el,s,t,e]),ve())}}/*! #__NO_SIDE_EFFECTS__ */function vl(t,e){return F(t)?it({name:t.name},e,{setup:t}):t}const Sn=t=>!!t.type.__asyncLoader,bo=t=>t.type.__isKeepAlive;function bl(t,e){yo(t,"a",e)}function yl(t,e){yo(t,"da",e)}function yo(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Xn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)bo(a.parent.vnode)&&_l(r,e,n,a),a=a.parent}}function _l(t,e,n,r){const a=Xn(e,t,r,!0);_o(()=>{Xr(r[e],a)},n)}function Xn(t,e,n=st,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ge();const s=en(n),l=Et(e,n,t,o);return s(),ve(),l});return r?a.unshift(i):a.push(i),i}}const Bt=t=>(e,n=st)=>(!Qn||t==="sp")&&Xn(t,(...r)=>e(...r),n),xl=Bt("bm"),qn=Bt("m"),wl=Bt("bu"),kl=Bt("u"),Al=Bt("bum"),_o=Bt("um"),Ol=Bt("sp"),El=Bt("rtg"),Sl=Bt("rtc");function Cl(t,e=st){Xn("ec",t,e)}function Pl(t,e,n,r){let a;const i=n&&n[r];if(R(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(Z(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Sr=t=>t?No(t)?da(t)||t.proxy:Sr(t.parent):null,De=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,sa(t.update)}),$nextTick:t=>t.n||(t.n=Qs.bind(t.proxy)),$watch:t=>gl.bind(t)}),dr=(t,e)=>t!==q&&!t.__isScriptSetup&&U(t,e),Il={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(dr(r,e))return o[e]=1,r[e];if(a!==q&&U(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,i[e];if(n!==q&&U(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const u=De[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return dr(a,e)?(a[e]=n,!0):r!==q&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==q&&U(t,o)||dr(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(De,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ba(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function Tl(t){const e=fa(t),n=t.proxy,r=t.ctx;Cr=!1,e.beforeCreate&&Ya(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:k,updated:j,activated:N,deactivated:D,beforeDestroy:w,beforeUnmount:S,destroyed:P,unmounted:$,render:H,renderTracked:L,renderTriggered:et,errorCaptured:ct,serverPrefetch:bt,expose:Ft,inheritAttrs:Re,components:on,directives:sn,filters:ar}=e;if(c&&Nl(c,r,null),o)for(const Q in o){const V=o[Q];F(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);Z(Q)&&(t.data=ra(Q))}if(Cr=!0,i)for(const Q in i){const V=i[Q],re=F(V)?V.bind(n,n):F(V.get)?V.get.bind(n,n):yt,ln=!F(V)&&F(V.set)?V.set.bind(n):yt,ae=se({get:re,set:ln});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ae.value,set:St=>ae.value=St})}if(s)for(const Q in s)xo(s[Q],r,n,Q);if(l){const Q=F(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{$l(V,Q[V])})}u&&Ya(u,t,"c");function lt(Q,V){R(V)?V.forEach(re=>Q(re.bind(n))):V&&Q(V.bind(n))}if(lt(xl,m),lt(qn,v),lt(wl,k),lt(kl,j),lt(bl,N),lt(yl,D),lt(Cl,ct),lt(Sl,L),lt(El,et),lt(Al,S),lt(_o,$),lt(Ol,bt),R(Ft))if(Ft.length){const Q=t.exposed||(t.exposed={});Ft.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:re=>n[V]=re})})}else t.exposed||(t.exposed={});H&&t.render===yt&&(t.render=H),Re!=null&&(t.inheritAttrs=Re),on&&(t.components=on),sn&&(t.directives=sn)}function Nl(t,e,n=yt){R(t)&&(t=Pr(t));for(const r in t){const a=t[r];let i;Z(a)?"default"in a?i=Cn(a.from||r,a.default,!0):i=Cn(a.from||r):i=Cn(a),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ya(t,e,n){Et(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xo(t,e,n,r){const a=r.includes(".")?vo(n,r):()=>n[r];if(nt(t)){const i=e[t];F(i)&&En(a,i)}else if(F(t))En(a,t.bind(n));else if(Z(t))if(R(t))t.forEach(i=>xo(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&En(a,i,t)}}function fa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,e,o)),Z(e)&&i.set(e,l),l}function Fn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Fn(t,i,n,!0),a&&a.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ml[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ml={data:Wa,props:Va,emits:Va,methods:je,computed:je,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:je,directives:je,watch:Ll,provide:Wa,inject:Rl};function Wa(t,e){return e?t?function(){return it(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Rl(t,e){return je(Pr(t),Pr(e))}function Pr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function je(t,e){return t?it(Object.create(null),t,e):e}function Va(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:it(Object.create(null),Ba(t),Ba(e??{})):e}function Ll(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function wo(){return{app:null,config:{isNativeTag:ds,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fl=0;function jl(t,e){return function(r,a=null){F(r)||(r=it({},r)),a!=null&&!Z(a)&&(a=null);const i=wo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Fl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=J(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,da(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Ue;Ue=l;try{return c()}finally{Ue=u}}};return l}}let Ue=null;function $l(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=st||wt;if(r||Ue){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ue._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function zl(t,e,n,r=!1){const a={},i={};Nn(i,Zn,1),t.propsDefaults=Object.create(null),ko(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Vs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Dl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=Y(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Gn(t.emitsOptions,v))continue;const k=e[v];if(l)if(U(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const j=Lt(v);a[j]=Ir(l,s,j,k,t,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{ko(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Ne(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Ir(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m))&&(delete i[m],c=!0)}c&&zt(t,"set","$attrs")}function ko(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(ze(l))continue;const c=e[l];let u;a&&U(a,u=Lt(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Gn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Ir(a,l,m,c[m],t,!U(c,m))}}return o}function Ir(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=en(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ne(n))&&(r=!0))}return r}function Ao(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[v,k]=Ao(m,e,!0);it(o,v),k&&s.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Z(t)&&r.set(t,ke),ke;if(R(i))for(let u=0;u<i.length;u++){const m=Lt(i[u]);Ka(m)&&(o[m]=q)}else if(i)for(const u in i){const m=Lt(u);if(Ka(m)){const v=i[u],k=o[m]=R(v)||F(v)?{type:v}:it({},v);if(k){const j=qa(Boolean,k.type),N=qa(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return Z(t)&&r.set(t,c),c}function Ka(t){return t[0]!=="$"&&!ze(t)}function Ga(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Xa(t,e){return Ga(t)===Ga(e)}function qa(t,e){return R(e)?e.findIndex(n=>Xa(n,t)):F(e)&&Xa(e,t)?0:-1}const Oo=t=>t[0]==="_"||t==="$stable",ca=t=>R(t)?t.map(It):[It(t)],Ul=(t,e,n)=>{if(e._n)return e;const r=il((...a)=>ca(e(...a)),n);return r._c=!1,r},Eo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Oo(a))continue;const i=t[a];if(F(i))e[a]=Ul(a,i,r);else if(i!=null){const o=ca(i);e[a]=()=>o}}},So=(t,e)=>{const n=ca(e);t.slots.default=()=>n},Hl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Nn(e,"_",n)):Eo(e,t.slots={})}else t.slots={},e&&So(t,e);Nn(t.slots,Zn,1)},Bl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(it(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Eo(e,a)),o=e}else e&&(So(t,e),o={default:1});if(i)for(const s in a)!Oo(s)&&o[s]==null&&delete a[s]};function Tr(t,e,n,r,a=!1){if(R(t)){t.forEach((v,k)=>Tr(v,e&&(R(e)?e[k]:e),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ht(c)&&(c.value=null)),F(l))Zt(l,s,12,[o,u]);else{const v=nt(l),k=ht(l);if(v||k){const j=()=>{if(t.f){const N=v?U(m,l)?m[l]:u[l]:l.value;a?R(N)&&Xr(N,i):R(N)?N.includes(i)||N.push(i):v?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,dt(j,n)):j()}}}const dt=ml;function Yl(t){return Wl(t)}function Wl(t,e){const n=Hi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:k=yt,insertStaticContent:j}=t,N=(f,d,h,p=null,g=null,_=null,A=void 0,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!Fe(f,d)&&(p=fn(f),St(f,g,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:T}=d;switch(b){case Jn:D(f,d,h,p);break;case me:w(f,d,h,p);break;case hr:f==null&&S(d,h,p,A);break;case gt:on(f,d,h,p,g,_,A,y,x);break;default:T&1?H(f,d,h,p,g,_,A,y,x):T&6?sn(f,d,h,p,g,_,A,y,x):(T&64||T&128)&&b.process(f,d,h,p,g,_,A,y,x,be)}E!=null&&g&&Tr(E,f&&f.ref,_,d||f,!d)},D=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},S=(f,d,h,p)=>{[f.el,f.anchor]=j(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let g;for(;f&&f!==d;)g=v(f),r(f,h,p),f=g;r(d,h,p)},$=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),a(f),f=h;a(d)},H=(f,d,h,p,g,_,A,y,x)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?L(d,h,p,g,_,A,y,x):bt(f,d,g,_,A,y,x)},L=(f,d,h,p,g,_,A,y)=>{let x,b;const{props:E,shapeFlag:T,transition:I,dirs:M}=f;if(x=f.el=o(f.type,_,E&&E.is,E),T&8?u(x,f.children):T&16&&ct(f.children,x,null,p,g,mr(f,_),A,y),M&&ie(f,null,p,"created"),et(x,f,f.scopeId,A,p),E){for(const W in E)W!=="value"&&!ze(W)&&i(x,W,null,E[W],_,f.children,p,g,jt);"value"in E&&i(x,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&Pt(b,p,f)}M&&ie(f,null,p,"beforeMount");const z=Vl(g,I);z&&I.beforeEnter(x),r(x,d,h),((b=E&&E.onVnodeMounted)||z||M)&&dt(()=>{b&&Pt(b,p,f),z&&I.enter(x),M&&ie(f,null,p,"mounted")},g)},et=(f,d,h,p,g)=>{if(h&&k(f,h),p)for(let _=0;_<p.length;_++)k(f,p[_]);if(g){let _=g.subTree;if(d===_){const A=g.vnode;et(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ct=(f,d,h,p,g,_,A,y,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=y?Gt(f[b]):It(f[b]);N(null,E,d,h,p,g,_,A,y)}},bt=(f,d,h,p,g,_,A)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=d;x|=f.patchFlag&16;const T=f.props||q,I=d.props||q;let M;if(h&&oe(h,!1),(M=I.onVnodeBeforeUpdate)&&Pt(M,h,d,f),E&&ie(d,f,h,"beforeUpdate"),h&&oe(h,!0),b?Ft(f.dynamicChildren,b,y,h,p,mr(d,g),_):A||V(f,d,y,null,h,p,mr(d,g),_,!1),x>0){if(x&16)Re(y,d,T,I,h,p,g);else if(x&2&&T.class!==I.class&&i(y,"class",null,I.class,g),x&4&&i(y,"style",T.style,I.style,g),x&8){const z=d.dynamicProps;for(let W=0;W<z.length;W++){const X=z[W],at=T[X],_t=I[X];(_t!==at||X==="value")&&i(y,X,at,_t,g,f.children,h,p,jt)}}x&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Re(y,d,T,I,h,p,g);((M=I.onVnodeUpdated)||E)&&dt(()=>{M&&Pt(M,h,d,f),E&&ie(d,f,h,"updated")},p)},Ft=(f,d,h,p,g,_,A)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],E=x.el&&(x.type===gt||!Fe(x,b)||x.shapeFlag&70)?m(x.el):h;N(x,b,E,null,p,g,_,A,!0)}},Re=(f,d,h,p,g,_,A)=>{if(h!==p){if(h!==q)for(const y in h)!ze(y)&&!(y in p)&&i(f,y,h[y],null,A,d.children,g,_,jt);for(const y in p){if(ze(y))continue;const x=p[y],b=h[y];x!==b&&y!=="value"&&i(f,y,b,x,A,d.children,g,_,jt)}"value"in p&&i(f,"value",h.value,p.value,A)}},on=(f,d,h,p,g,_,A,y,x)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,h,p),r(E,h,p),ct(d.children||[],h,E,g,_,A,y,x)):T>0&&T&64&&I&&f.dynamicChildren?(Ft(f.dynamicChildren,I,h,g,_,A,y),(d.key!=null||g&&d===g.subTree)&&Co(f,d,!0)):V(f,d,h,E,g,_,A,y,x)},sn=(f,d,h,p,g,_,A,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,h,p,A,x):ar(d,h,p,g,_,A,x):Ea(f,d,x)},ar=(f,d,h,p,g,_,A)=>{const y=f.component=rf(f,p,g);if(bo(f)&&(y.ctx.renderer=be),af(y),y.asyncDep){if(g&&g.registerDep(y,lt),!f.el){const x=y.subTree=J(me);w(null,x,d,h)}}else lt(y,f,d,h,g,_,A)},Ea=(f,d,h)=>{const p=d.component=f.component;if(ll(f,d,h))if(p.asyncDep&&!p.asyncResolved){Q(p,d,h);return}else p.next=d,el(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},lt=(f,d,h,p,g,_,A)=>{const y=()=>{if(f.isMounted){let{next:E,bu:T,u:I,parent:M,vnode:z}=f;{const ye=Po(f);if(ye){E&&(E.el=z.el,Q(f,E,A)),ye.asyncDep.then(()=>{f.isUnmounted||y()});return}}let W=E,X;oe(f,!1),E?(E.el=z.el,Q(f,E,A)):E=z,T&&fr(T),(X=E.props&&E.props.onVnodeBeforeUpdate)&&Pt(X,M,E,z),oe(f,!0);const at=ur(f),_t=f.subTree;f.subTree=at,N(_t,at,m(_t.el),fn(_t),f,g,_),E.el=at.el,W===null&&fl(f,at.el),I&&dt(I,g),(X=E.props&&E.props.onVnodeUpdated)&&dt(()=>Pt(X,M,E,z),g)}else{let E;const{el:T,props:I}=d,{bm:M,m:z,parent:W}=f,X=Sn(d);if(oe(f,!1),M&&fr(M),!X&&(E=I&&I.onVnodeBeforeMount)&&Pt(E,W,d),oe(f,!0),T&&sr){const at=()=>{f.subTree=ur(f),sr(T,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&at()):at()}else{const at=f.subTree=ur(f);N(null,at,h,p,f,g,_),d.el=at.el}if(z&&dt(z,g),!X&&(E=I&&I.onVnodeMounted)){const at=d;dt(()=>Pt(E,W,at),g)}(d.shapeFlag&256||W&&Sn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&dt(f.a,g),f.isMounted=!0,d=h=p=null}},x=f.effect=new Zr(y,yt,()=>sa(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,oe(f,!0),b()},Q=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,Dl(f,d.props,p,h),Bl(f,d.children,h),ge(),Da(f),ve()},V=(f,d,h,p,g,_,A,y,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){ln(b,T,h,p,g,_,A,y,x);return}else if(I&256){re(b,T,h,p,g,_,A,y,x);return}}M&8?(E&16&&jt(b,g,_),T!==b&&u(h,T)):E&16?M&16?ln(b,T,h,p,g,_,A,y,x):jt(b,g,_,!0):(E&8&&u(h,""),M&16&&ct(T,h,p,g,_,A,y,x))},re=(f,d,h,p,g,_,A,y,x)=>{f=f||ke,d=d||ke;const b=f.length,E=d.length,T=Math.min(b,E);let I;for(I=0;I<T;I++){const M=d[I]=x?Gt(d[I]):It(d[I]);N(f[I],M,h,null,g,_,A,y,x)}b>E?jt(f,g,_,!0,!1,T):ct(d,h,p,g,_,A,y,x,T)},ln=(f,d,h,p,g,_,A,y,x)=>{let b=0;const E=d.length;let T=f.length-1,I=E-1;for(;b<=T&&b<=I;){const M=f[b],z=d[b]=x?Gt(d[b]):It(d[b]);if(Fe(M,z))N(M,z,h,null,g,_,A,y,x);else break;b++}for(;b<=T&&b<=I;){const M=f[T],z=d[I]=x?Gt(d[I]):It(d[I]);if(Fe(M,z))N(M,z,h,null,g,_,A,y,x);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,z=M<E?d[M].el:p;for(;b<=I;)N(null,d[b]=x?Gt(d[b]):It(d[b]),h,z,g,_,A,y,x),b++}}else if(b>I)for(;b<=T;)St(f[b],g,_,!0),b++;else{const M=b,z=b,W=new Map;for(b=z;b<=I;b++){const pt=d[b]=x?Gt(d[b]):It(d[b]);pt.key!=null&&W.set(pt.key,b)}let X,at=0;const _t=I-z+1;let ye=!1,Pa=0;const Le=new Array(_t);for(b=0;b<_t;b++)Le[b]=0;for(b=M;b<=T;b++){const pt=f[b];if(at>=_t){St(pt,g,_,!0);continue}let Ct;if(pt.key!=null)Ct=W.get(pt.key);else for(X=z;X<=I;X++)if(Le[X-z]===0&&Fe(pt,d[X])){Ct=X;break}Ct===void 0?St(pt,g,_,!0):(Le[Ct-z]=b+1,Ct>=Pa?Pa=Ct:ye=!0,N(pt,d[Ct],h,null,g,_,A,y,x),at++)}const Ia=ye?Kl(Le):ke;for(X=Ia.length-1,b=_t-1;b>=0;b--){const pt=z+b,Ct=d[pt],Ta=pt+1<E?d[pt+1].el:p;Le[b]===0?N(null,Ct,h,Ta,g,_,A,y,x):ye&&(X<0||b!==Ia[X]?ae(Ct,h,Ta,2):X--)}}},ae=(f,d,h,p,g=null)=>{const{el:_,type:A,transition:y,children:x,shapeFlag:b}=f;if(b&6){ae(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){A.move(f,d,h,be);return}if(A===gt){r(_,d,h);for(let T=0;T<x.length;T++)ae(x[T],d,h,p);r(f.anchor,d,h);return}if(A===hr){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,d,h),dt(()=>y.enter(_),g);else{const{leave:T,delayLeave:I,afterLeave:M}=y,z=()=>r(_,d,h),W=()=>{T(_,()=>{z(),M&&M()})};I?I(_,z,W):W()}else r(_,d,h)},St=(f,d,h,p=!1,g=!1)=>{const{type:_,props:A,ref:y,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:T,dirs:I}=f;if(y!=null&&Tr(y,null,h,f,!0),E&256){d.ctx.deactivate(f);return}const M=E&1&&I,z=!Sn(f);let W;if(z&&(W=A&&A.onVnodeBeforeUnmount)&&Pt(W,d,f),E&6)us(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}M&&ie(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,h,g,be,p):b&&(_!==gt||T>0&&T&64)?jt(b,d,h,!1,!0):(_===gt&&T&384||!g&&E&16)&&jt(x,d,h),p&&Sa(f)}(z&&(W=A&&A.onVnodeUnmounted)||M)&&dt(()=>{W&&Pt(W,d,f),M&&ie(f,null,d,"unmounted")},h)},Sa=f=>{const{type:d,el:h,anchor:p,transition:g}=f;if(d===gt){cs(h,p);return}if(d===hr){$(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,x=()=>A(h,_);y?y(f.el,_,x):x()}else _()},cs=(f,d)=>{let h;for(;f!==d;)h=v(f),a(f),f=h;a(d)},us=(f,d,h)=>{const{bum:p,scope:g,update:_,subTree:A,um:y}=f;p&&fr(p),g.stop(),_&&(_.active=!1,St(A,f,d,h)),y&&dt(y,d),dt(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},jt=(f,d,h,p=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)St(f[A],d,h,p,g)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let ir=!1;const Ca=(f,d,h)=>{f==null?d._vnode&&St(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,h),ir||(ir=!0,Da(),co(),ir=!1),d._vnode=f},be={p:N,um:St,m:ae,r:Sa,mt:ar,mc:ct,pc:V,pbc:Ft,n:fn,o:t};let or,sr;return e&&([or,sr]=e(be)),{render:Ca,hydrate:or,createApp:jl(Ca,or)}}function mr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function oe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Co(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Gt(a[i]),s.el=o.el),n||Co(o,s)),s.type===Jn&&(s.el=o.el)}}function Kl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Po(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Po(e)}const Gl=t=>t.__isTeleport,gt=Symbol.for("v-fgt"),Jn=Symbol.for("v-txt"),me=Symbol.for("v-cmt"),hr=Symbol.for("v-stc"),He=[];let kt=null;function At(t=!1){He.push(kt=t?null:[])}function Xl(){He.pop(),kt=He[He.length-1]||null}let Ge=1;function Ja(t){Ge+=t}function Io(t){return t.dynamicChildren=Ge>0?kt||ke:null,Xl(),Ge>0&&kt&&kt.push(t),t}function Nt(t,e,n,r,a,i){return Io(B(t,e,n,r,a,i,!0))}function ql(t,e,n,r,a){return Io(J(t,e,n,r,a,!0))}function Nr(t){return t?t.__v_isVNode===!0:!1}function Fe(t,e){return t.type===e.type&&t.key===e.key}const Zn="__vInternal",To=({key:t})=>t??null,Pn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||ht(t)||F(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,a=null,i=t===gt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&To(e),ref:e&&Pn(e),scopeId:ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:wt};return s?(ua(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Ge>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const J=Jl;function Jl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===cl)&&(t=me),Nr(t)){const s=Pe(t,e,!0);return n&&ua(s,n),Ge>0&&!i&&kt&&(s.shapeFlag&6?kt[kt.indexOf(t)]=s:kt.push(s)),s.patchFlag|=-2,s}if(cf(t)&&(t=t.__vccOpts),e){e=Zl(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=tn(s)),Z(l)&&(ro(l)&&!R(l)&&(l=it({},l)),e.style=Jr(l))}const o=nt(t)?1:dl(t)?128:Gl(t)?64:Z(t)?4:F(t)?2:0;return B(t,e,n,r,a,o,i,!0)}function Zl(t){return t?ro(t)||Zn in t?it({},t):t:null}function Pe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?tf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&To(s),ref:e&&e.ref?n&&a?R(a)?a.concat(Pn(e)):[a,Pn(e)]:Pn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pe(t.ssContent),ssFallback:t.ssFallback&&Pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rt(t=" ",e=0){return J(Jn,null,t,e)}function Ql(t="",e=!1){return e?(At(),ql(me,null,t)):J(me,null,t)}function It(t){return t==null||typeof t=="boolean"?J(me):R(t)?J(gt,null,t.slice()):typeof t=="object"?Gt(t):J(Jn,null,String(t))}function Gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pe(t)}function ua(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ua(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Zn in e)?e._ctx=wt:a===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=tn([e.class,r.class]));else if(a==="style")e.style=Jr([e.style,r.style]);else if(Hn(a)){const i=e[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Pt(t,e,n,r=null){Et(t,e,7,[n,r])}const ef=wo();let nf=0;function rf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||ef,i={uid:nf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new As(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,a),emitsOptions:mo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=al.bind(null,i),t.ce&&t.ce(i),i}let st=null,jn,Mr;{const t=Hi(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};jn=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Mr=e("__VUE_SSR_SETTERS__",n=>Qn=n)}const en=t=>{const e=st;return jn(t),t.scope.on(),()=>{t.scope.off(),jn(e)}},Za=()=>{st&&st.scope.off(),jn(null)};function No(t){return t.vnode.shapeFlag&4}let Qn=!1;function af(t,e=!1){e&&Mr(e);const{props:n,children:r}=t.vnode,a=No(t);zl(t,n,a,e),Hl(t,r);const i=a?of(t,e):void 0;return e&&Mr(!1),i}function of(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ao(new Proxy(t.ctx,Il));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?lf(t):null,i=en(t);ge();const o=Zt(r,t,0,[t.props,a]);if(ve(),i(),zi(o)){if(o.then(Za,Za),e)return o.then(s=>{Qa(t,s,e)}).catch(s=>{Kn(s,t,0)});t.asyncDep=o}else Qa(t,o,e)}else Mo(t,e)}function Qa(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=so(e)),Mo(t,n)}let ti;function Mo(t,e,n){const r=t.type;if(!t.render){if(!e&&ti&&!r.render){const a=r.template||fa(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=it(it({isCustomElement:i,delimiters:s},o),l);r.render=ti(a,c)}}t.render=r.render||yt}{const a=en(t);ge();try{Tl(t)}finally{ve(),a()}}}function sf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function lf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sf(t)},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(so(ao(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in De)return De[n](t)},has(e,n){return n in e||n in De}}))}function ff(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function cf(t){return F(t)&&"__vccOpts"in t}const se=(t,e)=>Ks(t,e,Qn);function uf(t,e,n){const r=arguments.length;return r===2?Z(e)&&!R(e)?Nr(e)?J(t,null,[e]):J(t,e):J(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),J(t,e,n))}const df="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mf="http://www.w3.org/2000/svg",hf="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,ei=Xt&&Xt.createElement("template"),pf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Xt.createElementNS(mf,t):e==="mathml"?Xt.createElementNS(hf,t):Xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ei.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gf=Symbol("_vtc");function vf(t,e,n){const r=t[gf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ni=Symbol("_vod"),bf=Symbol(""),yf=/(^|;)\s*display\s*:/;function _f(t,e,n){const r=t.style,a=nt(n),i=r.display;let o=!1;if(n&&!a){if(e&&!nt(e))for(const s in e)n[s]==null&&Rr(r,s,"");for(const s in n)s==="display"&&(o=!0),Rr(r,s,n[s])}else if(a){if(e!==n){const s=r[bf];s&&(n+=";"+s),r.cssText=n,o=yf.test(n)}}else e&&t.removeAttribute("style");ni in t&&(t[ni]=o?r.display:"",r.display=i)}const ri=/\s*!important$/;function Rr(t,e,n){if(R(n))n.forEach(r=>Rr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xf(t,e);ri.test(n)?t.setProperty(Ne(r),n.replace(ri,""),"important"):t[r]=n}}const ai=["Webkit","Moz","ms"],pr={};function xf(t,e){const n=pr[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return pr[e]=r;r=Wn(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in t)return pr[e]=i}return e}const ii="http://www.w3.org/1999/xlink";function wf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ii,e.slice(6,e.length)):t.setAttributeNS(ii,e,n);else{const i=ks(e);n==null||i&&!Bi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Af(t,e,n,r){t.addEventListener(e,n,r)}function Of(t,e,n,r){t.removeEventListener(e,n,r)}const oi=Symbol("_vei");function Ef(t,e,n,r,a=null){const i=t[oi]||(t[oi]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Sf(e);if(r){const c=i[e]=If(r,a);Af(t,s,c,l)}else o&&(Of(t,s,o,l),i[e]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function Sf(t){let e;if(si.test(t)){e={};let r;for(;r=t.match(si);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ne(t.slice(2)),e]}let gr=0;const Cf=Promise.resolve(),Pf=()=>gr||(Cf.then(()=>gr=0),gr=Date.now());function If(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Et(Tf(r,n.value),e,5,[r])};return n.value=t,n.attached=Pf(),n}function Tf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nf=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?vf(t,r,c):e==="style"?_f(t,n,r):Hn(e)?Gr(e)||Ef(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mf(t,e,r,c))?kf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wf(t,e,r,c))};function Mf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&li(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return li(e)&&nt(n)?!1:e in t}const Rf=it({patchProp:Nf},pf);let fi;function Lf(){return fi||(fi=Yl(Rf))}const Ff=(...t)=>{const e=Lf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=$f(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,jf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function jf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $f(t){return nt(t)?document.querySelector(t):t}const zf={class:"font-sans font-black text-5xl"},Df={class:"flex items-center gap-2 text-sm text-[var(--color-secondary)]"},Uf={key:0},Hf=["href"],Bf={key:1},Yf=B("div",null,[Rt("emirhan (aka larei), 18 years-old. mathematics student, self-taught developer, "),B("a",{href:"https://www.youtube.com/watch?v=9sJUDx7iEJw",target:"_blank",class:"underline"},"open-source"),Rt(" enthusiast. programming, music, math. *insert here some lorem ipsum*")],-1),Wf={class:"flex gap-10 mt-5 text-xl"},Vf={href:"https://github.com/lareii/"},Kf={href:"https://www.linkedin.com/in/larei/"},Gf={href:"discord.com/users/748539900793716887"},Xf={__name:"Header",setup(t){const e=Rn("text-[var(--color-secondary)]"),n=Rn(null);return qn(async()=>{const r=await fetch("https://api.lanyard.rest/v1/users/748539900793716887");if(!r.ok)return;const a=await r.json();switch(n.value=a.data.spotify,a.data.discord_status){case"online":e.value="text-[var(--color-green)]";break;case"idle":e.value="text-[var(--color-yellow)]";break;case"dnd":e.value="text-[var(--color-red)]";break}}),(r,a)=>{const i=la("font-awesome-icon");return At(),Nt(gt,null,[B("div",zf,[Rt(" babaoglu"),B("span",{class:tn(["text-2xl",e.value])},".dev",2)]),B("div",Df,[J(i,{icon:["fab","spotify"]}),n.value?(At(),Nt("div",Uf,[Rt(" i'm currently listening to "),B("a",{href:`https://open.spotify.com/track/${n.value.track_id}`,target:"_blank",class:"font-black underline"},qt(n.value.song)+" - "+qt(n.value.artist),9,Hf),Rt(". ")])):(At(),Nt("div",Bf," i'm not listening to anything right now. "))]),Yf,B("div",Wf,[B("a",Vf,[J(i,{icon:["fab","github"]})]),B("a",Kf,[J(i,{icon:["fab","linkedin"]})]),B("a",Gf,[J(i,{icon:["fab","discord"]})])])],64)}}},qf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Jf={},Zf=B("div",{class:"mb-2 font-black text-2xl"},"uses/",-1),Qf=B("img",{src:"https://skillicons.dev/icons?i=linux,bash,git,vscode,github,c,python,go,html,css,javascript,vue",class:"select-none"},null,-1);function tc(t,e){return At(),Nt(gt,null,[Zf,Qf],64)}const ec=qf(Jf,[["render",tc]]),nc=B("div",{class:"mb-2 font-black text-2xl"},"projects/",-1),rc={class:"grid md:grid-cols-2 gap-2"},ac={key:0},ic=["href"],oc={class:"flex items-center gap-1 text-[var(--color-secondary)]"},sc=["src"],lc={class:"flex mt-2 gap-5"},fc={__name:"Projects",setup(t){const e=["lareii.github.io","autopull","ytm-discord-rpc","cubot"],n=Rn([]);return qn(async()=>{const r=await fetch("https://api.github.com/users/lareii/repos");if(!r.ok)return;const a=await r.json();for(const i of a)e.includes(i.name)&&n.value.push(i)}),(r,a)=>{const i=la("font-awesome-icon");return At(),Nt(gt,null,[nc,B("div",rc,[n.value.length?Ql("",!0):(At(),Nt("div",ac,"projects could not be retrieved.")),(At(!0),Nt(gt,null,Pl(n.value,o=>(At(),Nt("a",{href:o.html_url,target:"_blank",class:"flex flex-col justify-between px-5 py-3 bg-[#202020]/[.3] border-[#504945] border-[0.5px] rounded-lg text-sm"},[B("div",oc,[B("img",{src:o.owner.avatar_url,class:"rounded-full w-4"},null,8,sc),Rt(" "+qt(o.owner.login),1)]),B("div",{class:tn(["font-bold","text-lg",o.archived?"line-through":""])},qt(o.name),3),B("div",null,qt(o.description),1),B("div",lc,[B("div",null,[J(i,{icon:["fas","star"]}),Rt(" "+qt(o.stargazers_count),1)]),B("div",null,[J(i,{icon:["fas","code-branch"]}),Rt(" "+qt(o.forks_count),1)])])],8,ic))),256))])],64)}}},cc={class:"flex justify-between mt-10 text-sm text-[var(--color-secondary)]"},uc=B("a",{class:"underline"},"gimme a ⭐",-1),dc={__name:"Footer",setup(t){const e=Rn(null),n=()=>{const r=new Date,a={timeZone:"Europe/Istanbul",hour:"2-digit",minute:"2-digit",hour12:!1};e.value=r.toLocaleTimeString("tr-TR",a)};return qn(()=>{n(),setInterval(n,1e3)}),(r,a)=>{const i=la("font-awesome-icon");return At(),Nt("div",cc,[B("div",null,[J(i,{icon:["fas","clock"]}),Rt(" "+qt(e.value)+" (UTC +03:00) ",1)]),uc])}}},mc={class:"sm:pt-20 max-w-screen-lg mx-auto p-5 relative"},hc=B("div",{class:"z-0 absolute -mt-10 right-0 text-[10rem] opacity-10 select-none"},"✨",-1),pc={class:"relative mb-10"},gc={class:"mb-10"},vc=B("div",{class:"z-0 absolute -ml-14 mt-10 text-[10rem] opacity-10 select-none"},"👨‍💻",-1),bc={class:"relative mb-10"},yc={__name:"App",setup(t){return(e,n)=>(At(),Nt("main",mc,[hc,B("div",pc,[J(Xf)]),B("div",gc,[J(ec)]),vc,B("div",bc,[J(fc)]),B("div",null,[J(dc)])]))}};function ci(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ci(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function _c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ui(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xc(t,e,n){return e&&ui(t.prototype,e),n&&ui(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ma(t,e){return kc(t)||Oc(t,e)||Ro(t,e)||Sc()}function nn(t){return wc(t)||Ac(t)||Ro(t)||Ec()}function wc(t){if(Array.isArray(t))return Lr(t)}function kc(t){if(Array.isArray(t))return t}function Ac(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Oc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(t,e){if(t){if(typeof t=="string")return Lr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lr(t,e)}}function Lr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ec(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},ha={},Lo={},Fo=null,jo={mark:di,measure:di};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(Lo=document),typeof MutationObserver<"u"&&(Fo=MutationObserver),typeof performance<"u"&&(jo=performance)}catch{}var Cc=ha.navigator||{},mi=Cc.userAgent,hi=mi===void 0?"":mi,te=ha,G=Lo,pi=Fo,gn=jo;te.document;var Yt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",$o=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),vn,bn,yn,_n,xn,Dt="___FONT_AWESOME___",Fr=16,zo="fa",Do="svg-inline--fa",he="data-fa-i2svg",jr="data-fa-pseudo-element",Pc="data-fa-pseudo-element-pending",pa="data-prefix",ga="data-icon",gi="fontawesome-i2svg",Ic="async",Tc=["HTML","HEAD","STYLE","SCRIPT"],Uo=function(){try{return!0}catch{return!1}}(),K="classic",tt="sharp",va=[K,tt];function rn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Xe=rn((vn={},rt(vn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(vn,tt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),vn)),qe=rn((bn={},rt(bn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(bn,tt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bn)),Je=rn((yn={},rt(yn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(yn,tt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),yn)),Nc=rn((_n={},rt(_n,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(_n,tt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_n)),Mc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ho="fa-layers-text",Rc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Lc=rn((xn={},rt(xn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(xn,tt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xn)),Bo=[1,2,3,4,5,6,7,8,9,10],Fc=Bo.concat([11,12,13,14,15,16,17,18,19,20]),jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ze=new Set;Object.keys(qe[K]).map(Ze.add.bind(Ze));Object.keys(qe[tt]).map(Ze.add.bind(Ze));var $c=[].concat(va,nn(Ze),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Bo.map(function(t){return"".concat(t,"x")})).concat(Fc.map(function(t){return"w-".concat(t)})),Be=te.FontAwesomeConfig||{};function zc(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Dc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var Uc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uc.forEach(function(t){var e=ma(t,2),n=e[0],r=e[1],a=Dc(zc(n));a!=null&&(Be[r]=a)})}var Yo={styleDefault:"solid",familyDefault:"classic",cssPrefix:zo,replacementClass:Do,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Ie=O(O({},Yo),Be);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var C={};Object.keys(Yo).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ie[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Ie[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ie.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Ie.cssPrefix}});te.FontAwesomeConfig=C;var Ye=[];function Hc(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Vt=Fr,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bc(t){if(!(!t||!Yt)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(e,r),t}}var Yc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qe(){for(var t=12,e="";t-- >0;)e+=Yc[Math.random()*62|0];return e}function Me(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ba(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Wo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Wo(t[n]),'" ')},"").trim()}function tr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ya(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function Vc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Kc(t){var e=t.transform,n=t.width,r=n===void 0?Fr:n,a=t.height,i=a===void 0?Fr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&$o?l+="translate(".concat(e.x/Vt-r/2,"em, ").concat(e.y/Vt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Gc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vo(){var t=zo,e=Do,n=C.cssPrefix,r=C.replacementClass,a=Gc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vi=!1;function vr(){C.autoAddCss&&!vi&&(Bc(Vo()),vi=!0)}var Xc={mixout:function(){return{dom:{css:Vo,insertCss:vr}}},hooks:function(){return{beforeDOMElementCreation:function(){vr()},beforeI2svg:function(){vr()}}}},Ut=te||{};Ut[Dt]||(Ut[Dt]={});Ut[Dt].styles||(Ut[Dt].styles={});Ut[Dt].hooks||(Ut[Dt].hooks={});Ut[Dt].shims||(Ut[Dt].shims=[]);var Ot=Ut[Dt],Ko=[],qc=function t(){G.removeEventListener("DOMContentLoaded",t),zn=1,Ko.map(function(e){return e()})},zn=!1;Yt&&(zn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),zn||G.addEventListener("DOMContentLoaded",qc));function Jc(t){Yt&&(zn?setTimeout(t,0):Ko.push(t))}function an(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Wo(t):"<".concat(e," ").concat(Wc(r),">").concat(i.map(an).join(""),"</").concat(e,">")}function bi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Zc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},br=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Zc(n,a):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function Qc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function $r(t){var e=Qc(t);return e.length===1?e[0].toString(16):null}function tu(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function zr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(e);typeof Ot.hooks.addPack=="function"&&!a?Ot.hooks.addPack(t,yi(e)):Ot.styles[t]=O(O({},Ot.styles[t]||{}),i),t==="fas"&&zr("fa",e)}var wn,kn,An,xe=Ot.styles,eu=Ot.shims,nu=(wn={},rt(wn,K,Object.values(Je[K])),rt(wn,tt,Object.values(Je[tt])),wn),_a=null,Go={},Xo={},qo={},Jo={},Zo={},ru=(kn={},rt(kn,K,Object.keys(Xe[K])),rt(kn,tt,Object.keys(Xe[tt])),kn);function au(t){return~$c.indexOf(t)}function iu(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!au(a)?a:null}var Qo=function(){var e=function(i){return br(xe,function(o,s,l){return o[l]=br(s,i,{}),o},{})};Go=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Xo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Zo=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xe||C.autoFetchSvg,r=br(eu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});qo=r.names,Jo=r.unicodes,_a=er(C.styleDefault,{family:C.familyDefault})};Hc(function(t){_a=er(t.styleDefault,{family:C.familyDefault})});Qo();function xa(t,e){return(Go[t]||{})[e]}function ou(t,e){return(Xo[t]||{})[e]}function ce(t,e){return(Zo[t]||{})[e]}function ts(t){return qo[t]||{prefix:null,iconName:null}}function su(t){var e=Jo[t],n=xa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return _a}var wa=function(){return{prefix:null,iconName:null,rest:[]}};function er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Xe[r][t],i=qe[r][t]||qe[r][a],o=t in Ot.styles?t:null;return i||o||null}var _i=(An={},rt(An,K,Object.keys(Je[K])),rt(An,tt,Object.keys(Je[tt])),An);function nr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},rt(e,K,"".concat(C.cssPrefix,"-").concat(K)),rt(e,tt,"".concat(C.cssPrefix,"-").concat(tt)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return _i[K].includes(c)}))&&(s=K),(t.includes(i[tt])||t.some(function(c){return _i[tt].includes(c)}))&&(s=tt);var l=t.reduce(function(c,u){var m=iu(C.cssPrefix,u);if(xe[u]?(u=nu[s].includes(u)?Nc[s][u]:u,o=u,c.prefix=u):ru[s].indexOf(u)>-1?(o=u,c.prefix=er(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==i[K]&&u!==i[tt]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?ts(c.iconName):{},k=ce(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xe.far&&xe.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},wa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===tt&&(xe.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ee()||"fas"),l}var lu=function(){function t(){_c(this,t),this.definitions={}}return xc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=Je[K][s];l&&zr(l,o[s]),Qo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),xi=[],we={},Se={},fu=Object.keys(Se);function cu(t,e){var n=e.mixoutsTo;return xi=t,we={},Object.keys(Se).forEach(function(r){fu.indexOf(r)===-1&&delete Se[r]}),xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){we[o]||(we[o]=[]),we[o].push(i[o])})}r.provides&&r.provides(Se)}),n}function Dr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=we[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=we[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Se[t]?Se[t].apply(null,e):void 0}function Ur(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=ce(n,e)||e,bi(es.definitions,n,e)||bi(Ot.styles,n,e)}var es=new lu,uu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pe("noAuto")},du={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(pe("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Jc(function(){hu({autoReplaceSvgRoot:n}),pe("watch",e)})}},mu={icon:function(e){if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ce(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=er(e[0]);return{prefix:r,iconName:ce(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(Mc))){var a=nr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ee(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=ee();return{prefix:i,iconName:ce(i,e)||e}}}},vt={noAuto:uu,config:C,dom:du,parse:mu,library:es,findIconDefinition:Ur,toHtml:an},hu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ot.styles).length>0||C.autoFetchSvg)&&Yt&&C.autoReplaceSvg&&vt.dom.i2svg({node:r})};function rr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return an(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Yt){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function pu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function gu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ka(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,k=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,w=a==="fak",S=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),P={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},$=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};k&&(P.attributes[he]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Qe())},children:[l]}),delete P.attributes.title);var H=O(O({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},$),m.styles)}),L=r.found&&n.found?Ht("generateAbstractMask",H)||{children:[],attributes:{}}:Ht("generateAbstractIcon",H)||{children:[],attributes:{}},et=L.children,ct=L.attributes;return H.children=et,H.attributes=ct,s?gu(H):pu(H)}function wi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var u=O({},o.styles);ya(a)&&(u.transform=Kc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=tr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function vu(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yr=Ot.styles;function Hr(t){var e=t[0],n=t[1],r=t.slice(4),a=ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var bu={found:!1,width:512,height:512};function yu(t,e){!Uo&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Br(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=ee()),new Promise(function(r,a){if(Ht("missingIconAbstract"),n==="fa"){var i=ts(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&yr[e]&&yr[e][t]){var o=yr[e][t];return r(Hr(o))}yu(t,e),r(O(O({},bu),{},{icon:C.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var ki=function(){},Yr=C.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:ki,measure:ki},$e='FA "6.5.1"',_u=function(e){return Yr.mark("".concat($e," ").concat(e," begins")),function(){return ns(e)}},ns=function(e){Yr.mark("".concat($e," ").concat(e," ends")),Yr.measure("".concat($e," ").concat(e),"".concat($e," ").concat(e," begins"),"".concat($e," ").concat(e," ends"))},Aa={begin:_u,end:ns},In=function(){};function Ai(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function xu(t){var e=t.getAttribute?t.getAttribute(pa):null,n=t.getAttribute?t.getAttribute(ga):null;return e&&n}function wu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function ku(){if(C.autoReplaceSvg===!0)return Tn.replace;var t=Tn[C.autoReplaceSvg];return t||Tn.replace}function Au(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function Ou(t){return G.createElement(t)}function rs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Au:Ou:n;if(typeof t=="string")return G.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(rs(o,{ceFn:r}))}),a}function Eu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Tn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(rs(a),n)}),n.getAttribute(he)===null&&C.keepOriginalSource){var r=G.createComment(Eu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ba(n).indexOf(C.replacementClass))return Tn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function Oi(t){t()}function as(t,e){var n=typeof e=="function"?e:In;if(t.length===0)n();else{var r=Oi;C.mutateApproach===Ic&&(r=te.requestAnimationFrame||Oi),r(function(){var a=ku(),i=Aa.begin("mutate");t.map(a),i(),n()})}}var Oa=!1;function is(){Oa=!0}function Wr(){Oa=!1}var Dn=null;function Ei(t){if(pi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?In:e,r=t.nodeCallback,a=r===void 0?In:r,i=t.pseudoElementsCallback,o=i===void 0?In:i,s=t.observeMutationsRoot,l=s===void 0?G:s;Dn=new pi(function(c){if(!Oa){var u=ee();Me(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~jc.indexOf(m.attributeName))if(m.attributeName==="class"&&xu(m.target)){var v=nr(ba(m.target)),k=v.prefix,j=v.iconName;m.target.setAttribute(pa,k||u),j&&m.target.setAttribute(ga,j)}else wu(m.target)&&a(m.target)})}}),Yt&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Su(){Dn&&Dn.disconnect()}function Cu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Pu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=nr(ba(t));return a.prefix||(a.prefix=ee()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ou(a.prefix,t.innerText)||xa(a.prefix,$r(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Iu(t){var e=Me(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Qe()):(e["aria-hidden"]="true",e.focusable="false")),e}function Tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Si(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Pu(t),r=n.iconName,a=n.prefix,i=n.rest,o=Iu(t),s=Dr("parseNodeAttributes",{},t),l=e.styleParser?Cu(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nu=Ot.styles;function os(t){var e=C.autoReplaceSvg==="nest"?Si(t,{styleParser:!1}):Si(t);return~e.extra.classes.indexOf(Ho)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}var ne=new Set;va.map(function(t){ne.add("fa-".concat(t))});Object.keys(Xe[K]).map(ne.add.bind(ne));Object.keys(Xe[tt]).map(ne.add.bind(ne));ne=nn(ne);function Ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=C.autoFetchSvg?ne:va.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Nu));i.includes("fa")||i.push("fa");var o=[".".concat(Ho,":not([").concat(he,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Me(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Aa.begin("onTree"),c=s.reduce(function(u,m){try{var v=os(m);v&&u.push(v)}catch(k){Uo||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){as(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Mu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;os(t).then(function(n){n&&as([n],e)})}function Ru(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ur(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ur(a||{})),t(r,O(O({},n),{},{mask:a}))}}var Lu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Mt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,D=N===void 0?[]:N,w=n.attributes,S=w===void 0?{}:w,P=n.styles,$=P===void 0?{}:P;if(e){var H=e.prefix,L=e.iconName,et=e.icon;return rr(O({type:"icon"},e),function(){return pe("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?S["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||Qe()):(S["aria-hidden"]="true",S.focusable="false")),ka({icons:{main:Hr(et),mask:l?Hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:L,transform:O(O({},Mt),a),symbol:o,title:v,maskId:u,titleId:j,extra:{attributes:S,styles:$,classes:D}})})}},Fu={mixout:function(){return{icon:Ru(Lu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=Mu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return Ci(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,j){Promise.all([Br(a,s),u.iconName?Br(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ma(N,2),w=D[0],S=D[1];k([n,ka({icons:{main:w,mask:S},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return ya(o)&&(c=Ht("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},$u={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return rr({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),vu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},zu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Mt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:O(O({},Mt),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($o){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Du=new RegExp('"',"ug"),Pi=[1105920,1112319];function Uu(t){var e=t.replace(Du,""),n=tu(e,0),r=n>=Pi[0]&&n<=Pi[1],a=e.length===2?e[0]===e[1]:!1;return{value:$r(a?e[0]:e),isSecondary:r||a}}function Ii(t,e){var n="".concat(Pc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Me(t.children),o=i.filter(function(et){return et.getAttribute(jr)===e})[0],s=te.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Rc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?tt:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qe[v][l[2].toLowerCase()]:Lc[v][c],j=Uu(m),N=j.value,D=j.isSecondary,w=l[0].startsWith("FontAwesome"),S=xa(k,N),P=S;if(w){var $=su(N);$.iconName&&$.prefix&&(S=$.iconName,k=$.prefix)}if(S&&!D&&(!o||o.getAttribute(pa)!==k||o.getAttribute(ga)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var H=Tu(),L=H.extra;L.attributes[jr]=e,Br(S,k).then(function(et){var ct=ka(O(O({},H),{},{icons:{main:et,mask:wa()},prefix:k,iconName:P,extra:L,watchable:!0})),bt=G.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=ct.map(function(Ft){return an(Ft)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Hu(t){return Promise.all([Ii(t,"::before"),Ii(t,"::after")])}function Bu(t){return t.parentNode!==document.head&&!~Tc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ti(t){if(Yt)return new Promise(function(e,n){var r=Me(t.querySelectorAll("*")).filter(Bu).map(Hu),a=Aa.begin("searchPseudoElements");is(),Promise.all(r).then(function(){a(),Wr(),e()}).catch(function(){a(),Wr(),n()})})}var Yu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;C.searchPseudoElements&&Ti(a)}}},Ni=!1,Wu={mixout:function(){return{dom:{unwatch:function(){is(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Ei(Dr("mutationObserverCallbacks",{}))},noAuto:function(){Su()},watch:function(n){var r=n.observeMutationsRoot;Ni?Wr():Ei(Dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vu={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},_r={x:0,y:0,width:"100%",height:"100%"};function Ri(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ku(t){return t.tag==="g"?t.children:[t]}var Gu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):wa();return i.prefix||(i.prefix=ee()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,k=Vc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},_r),{},{fill:"white"})},N=u.children?{children:u.children.map(Ri)}:{},D={tag:"g",attributes:O({},k.inner),children:[Ri(O({tag:u.tag,attributes:O(O({},u.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[D]},S="mask-".concat(s||Qe()),P="clip-".concat(s||Qe()),$={tag:"mask",attributes:O(O({},_r),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ku(v)},$]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},_r)}),{children:r,attributes:a}}}},Xu={provides:function(e){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ju=[Xc,Fu,ju,$u,zu,Yu,Wu,Vu,Gu,Xu,qu];cu(Ju,{mixoutsTo:vt});vt.noAuto;vt.config;var Zu=vt.library;vt.dom;var Vr=vt.parse;vt.findIconDefinition;vt.toHtml;var Qu=vt.icon;vt.layer;vt.text;vt.counter;function Li(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Li(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function ut(t,e,n){return e=rd(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function td(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ed(t,e){if(t==null)return{};var n=td(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nd(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rd(t){var e=nd(t,"string");return typeof e=="symbol"?e:String(e)}var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ss={exports:{}};(function(t){(function(e){var n=function(w,S,P){if(!c(S)||m(S)||v(S)||k(S)||l(S))return S;var $,H=0,L=0;if(u(S))for($=[],L=S.length;H<L;H++)$.push(n(w,S[H],P));else{$={};for(var et in S)Object.prototype.hasOwnProperty.call(S,et)&&($[w(et,P)]=n(w,S[et],P))}return $},r=function(w,S){S=S||{};var P=S.separator||"_",$=S.split||/(?=[A-Z])/;return w.split($).join(P)},a=function(w){return j(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,P){return P?P.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var S=a(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},j=function(w){return w=w-0,w===w},N=function(w,S){var P=S&&"process"in S?S.process:S;return typeof P!="function"?w:function($,H){return P($,w,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,S){return n(N(a,S),w)},decamelizeKeys:function(w,S){return n(N(o,S),w,S)},pascalizeKeys:function(w,S){return n(N(i,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(ad)})(ss);var id=ss.exports,od=["class","style"];function sd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function ld(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ls(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ls(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ld(u);break;case"style":l.style=sd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ed(n,od);return uf(t.tag,$t($t($t({},e),{},{class:a.class,style:$t($t({},a.style),o)},a.attrs),s),r)}var fs=!1;try{fs=!0}catch{}function fd(){if(!fs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function xr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function cd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(e,"fa-".concat(t.size),t.size!==null),ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ut(e,"fa-pull-".concat(t.pull),t.pull!==null),ut(e,"fa-swap-opacity",t.swapOpacity),ut(e,"fa-bounce",t.bounce),ut(e,"fa-shake",t.shake),ut(e,"fa-beat",t.beat),ut(e,"fa-fade",t.fade),ut(e,"fa-beat-fade",t.beatFade),ut(e,"fa-flash",t.flash),ut(e,"fa-spin-pulse",t.spinPulse),ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(t){if(t&&Un(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vr.icon)return Vr.icon(t);if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ud=vl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=se(function(){return Fi(e.icon)}),i=se(function(){return xr("classes",cd(e))}),o=se(function(){return xr("transform",typeof e.transform=="string"?Vr.transform(e.transform):e.transform)}),s=se(function(){return xr("mask",Fi(e.mask))}),l=se(function(){return Qu(a.value,$t($t($t($t({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});En(l,function(u){if(!u)return fd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?ls(l.value.abstract[0],{},r):null});return function(){return c.value}}}),dd={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},md={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},hd={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},pd={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},gd={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},vd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},bd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Zu.add(bd,vd,pd,gd,dd,md,hd);const ji=document.getElementById("cursor");document.body.addEventListener("mousemove",t=>{ji.style.left=t.clientX+"px",ji.style.top=t.clientY+"px"});Ff(yc).component("font-awesome-icon",ud).mount("#app");
