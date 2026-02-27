(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},xr=[],Fn=()=>{},fd=()=>!1,Wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_c=n=>n.startsWith("onUpdate:"),kt=Object.assign,xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dp=Object.prototype.hasOwnProperty,ot=(n,e)=>Dp.call(n,e),Ve=Array.isArray,vr=n=>Ms(n)==="[object Map]",Nr=n=>Ms(n)==="[object Set]",uu=n=>Ms(n)==="[object Date]",Ye=n=>typeof n=="function",Tt=n=>typeof n=="string",Vn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",dd=n=>(gt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),hd=Object.prototype.toString,Ms=n=>hd.call(n),Lp=n=>Ms(n).slice(8,-1),pd=n=>Ms(n)==="[object Object]",vc=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ns=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ip=/-\w/g,Ai=Xo(n=>n.replace(Ip,e=>e.slice(1).toUpperCase())),Up=/\B([A-Z])/g,$i=Xo(n=>n.replace(Up,"-$1").toLowerCase()),md=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),fa=Xo(n=>n?`on${md(n)}`:""),Ti=(n,e)=>!Object.is(n,e),_o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fu;const Yo=()=>fu||(fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sc(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?Bp(i):Sc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(n)||gt(n))return n}const Np=/;(?![^(]*\))/g,Fp=/:([^]+)/,Op=/\/\*[^]*?\*\//g;function Bp(n){const e={};return n.replace(Op,"").split(Np).forEach(t=>{if(t){const i=t.split(Fp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sr(n){let e="";if(Tt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Sr(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=gc(zp);function _d(n){return!!n||n===""}function Hp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ys(n[i],e[i]);return t}function ys(n,e){if(n===e)return!0;let t=uu(n),i=uu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Vn(n),i=Vn(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?Hp(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ys(n[o],e[o]))return!1}}return String(n)===String(e)}function Mc(n,e){return n.findIndex(t=>ys(t,e))}const xd=n=>!!(n&&n.__v_isRef===!0),gr=n=>Tt(n)?n:n==null?"":Ve(n)||gt(n)&&(n.toString===hd||!Ye(n.toString))?xd(n)?gr(n.value):JSON.stringify(n,vd,2):String(n),vd=(n,e)=>xd(e)?vd(n,e.value):vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[da(i,s)+" =>"]=r,t),{})}:Nr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>da(t))}:Vn(e)?da(e):gt(e)&&!Ve(e)&&!pd(e)?String(e):e,da=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function kp(){return Yt}let mt;const ha=new WeakSet;class Sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ha.has(this)&&(ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,du(this),bd(this);const e=mt,t=yn;mt=this,yn=!0;try{return this.fn()}finally{Ed(this),mt=e,yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let Md=0,is,rs;function yd(n,e=!1){if(n.flags|=8,e){n.next=rs,rs=n;return}n.next=is,is=n}function yc(){Md++}function bc(){if(--Md>0)return;if(rs){let e=rs;for(rs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;is;){let e=is;for(is=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ed(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),Wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ol(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Td(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Td(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===us)||(n.globalVersion=us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ol(n))))return;n.flags|=2;const e=n.dep,t=mt,i=yn;mt=n,yn=!0;try{bd(n);const r=n.fn(n._value);(e.version===0||Ti(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=t,yn=i,Ed(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yn=!0;const Ad=[];function si(){Ad.push(yn),yn=!1}function oi(){const n=Ad.pop();yn=n===void 0?!0:n}function du(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let us=0;class Xp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!yn||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new Xp(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,wd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=i)}return t}trigger(e){this.version++,us++,this.notify(e)}notify(e){yc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function wd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)wd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const al=new WeakMap,Xi=Symbol(""),ll=Symbol(""),fs=Symbol("");function It(n,e,t){if(yn&&mt){let i=al.get(n);i||al.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tc),r.map=i,r.key=t),r.track()}}function Qn(n,e,t,i,r,s){const o=al.get(n);if(!o){us++;return}const a=c=>{c&&c.trigger()};if(yc(),e==="clear")o.forEach(a);else{const c=Ve(n),l=c&&vc(t);if(c&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===fs||!Vn(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(fs)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Xi)),vr(n)&&a(o.get(ll)));break;case"delete":c||(a(o.get(Xi)),vr(n)&&a(o.get(ll)));break;case"set":vr(n)&&a(o.get(Xi));break}}bc()}function Qi(n){const e=st(n);return e===n?e:(It(e,"iterate",fs),pn(n)?e:e.map(En))}function jo(n){return It(n=st(n),"iterate",fs),n}function vi(n,e){return ai(n)?qi(n)?Tr(En(e)):Tr(e):En(e)}const qp={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,n=>vi(this,n))},concat(...n){return Qi(this).concat(...n.map(e=>Ve(e)?Qi(e):e))},entries(){return pa(this,"entries",n=>(n[1]=vi(this,n[1]),n))},every(n,e){return qn(this,"every",n,e,void 0,arguments)},filter(n,e){return qn(this,"filter",n,e,t=>t.map(i=>vi(this,i)),arguments)},find(n,e){return qn(this,"find",n,e,t=>vi(this,t),arguments)},findIndex(n,e){return qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qn(this,"findLast",n,e,t=>vi(this,t),arguments)},findLastIndex(n,e){return qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ma(this,"includes",n)},indexOf(...n){return ma(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return ma(this,"lastIndexOf",n)},map(n,e){return qn(this,"map",n,e,void 0,arguments)},pop(){return Hr(this,"pop")},push(...n){return Hr(this,"push",n)},reduce(n,...e){return hu(this,"reduce",n,e)},reduceRight(n,...e){return hu(this,"reduceRight",n,e)},shift(){return Hr(this,"shift")},some(n,e){return qn(this,"some",n,e,void 0,arguments)},splice(...n){return Hr(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return Hr(this,"unshift",n)},values(){return pa(this,"values",n=>vi(this,n))}};function pa(n,e,t){const i=jo(n),r=i[e]();return i!==n&&!pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Yp=Array.prototype;function qn(n,e,t,i,r,s){const o=jo(n),a=o!==n&&!pn(n),c=o[e];if(c!==Yp[e]){const f=c.apply(n,s);return a?En(f):f}let l=t;o!==n&&(a?l=function(f,d){return t.call(this,vi(n,f),d,n)}:t.length>2&&(l=function(f,d){return t.call(this,f,d,n)}));const u=c.call(o,l,i);return a&&r?r(u):u}function hu(n,e,t,i){const r=jo(n);let s=t;return r!==n&&(pn(n)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,n)}):s=function(o,a,c){return t.call(this,o,vi(n,a),c,n)}),r[e](s,...i)}function ma(n,e,t){const i=st(n);It(i,"iterate",fs);const r=i[e](...t);return(r===-1||r===!1)&&Cc(t[0])?(t[0]=st(t[0]),i[e](...t)):r}function Hr(n,e,t=[]){si(),yc();const i=st(n)[e].apply(n,t);return bc(),oi(),i}const jp=gc("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function Kp(n){Vn(n)||(n=String(n));const e=st(this);return It(e,"has",n),e.hasOwnProperty(n)}class Cd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sm:Id:s?Ld:Dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let c;if(o&&(c=qp[t]))return c;if(t==="hasOwnProperty")return Kp}const a=Reflect.get(e,t,Ft(e)?e:i);if((Vn(t)?Rd.has(t):jp(t))||(r||It(e,"get",t),s))return a;if(Ft(a)){const c=o&&vc(t)?a:a.value;return r&&gt(c)?ul(c):c}return gt(a)?r?ul(a):wc(a):a}}class Pd extends Cd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ve(e)&&vc(t);if(!this._isShallow){const l=ai(s);if(!pn(i)&&!ai(i)&&(s=st(s),i=st(i)),!o&&Ft(s)&&!Ft(i))return l||(s.value=i),!0}const a=o?Number(t)<e.length:ot(e,t),c=Reflect.set(e,t,i,Ft(e)?e:r);return e===st(r)&&(a?Ti(i,s)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),c}deleteProperty(e,t){const i=ot(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Vn(t)||!Rd.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",Ve(e)?"length":Xi),Reflect.ownKeys(e)}}class $p extends Cd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zp=new Pd,Jp=new $p,Qp=new Pd(!0);const cl=n=>n,Fs=n=>Reflect.getPrototypeOf(n);function em(n,e,t){return function(...i){const r=this.__v_raw,s=st(r),o=vr(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?cl:e?Tr:En;return!e&&It(s,"iterate",c?ll:Xi),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Os(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tm(n,e){const t={get(r){const s=this.__v_raw,o=st(s),a=st(r);n||(Ti(r,a)&&It(o,"get",r),It(o,"get",a));const{has:c}=Fs(o),l=e?cl:n?Tr:En;if(c.call(o,r))return l(s.get(r));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&It(st(r),"iterate",Xi),r.size},has(r){const s=this.__v_raw,o=st(s),a=st(r);return n||(Ti(r,a)&&It(o,"has",r),It(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=st(a),l=e?cl:n?Tr:En;return!n&&It(c,"iterate",Xi),a.forEach((u,f)=>r.call(s,l(u),l(f),o))}};return kt(t,n?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(r){!e&&!pn(r)&&!ai(r)&&(r=st(r));const s=st(this);return Fs(s).has.call(s,r)||(s.add(r),Qn(s,"add",r,r)),this},set(r,s){!e&&!pn(s)&&!ai(s)&&(s=st(s));const o=st(this),{has:a,get:c}=Fs(o);let l=a.call(o,r);l||(r=st(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,s),l?Ti(s,u)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=Fs(s);let c=o.call(s,r);c||(r=st(r),c=o.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return c&&Qn(s,"delete",r,void 0),l},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=em(r,n,e)}),t}function Ac(n,e){const t=tm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ot(t,r)&&r in i?t:i,r,s)}const nm={get:Ac(!1,!1)},im={get:Ac(!1,!0)},rm={get:Ac(!0,!1)};const Dd=new WeakMap,Ld=new WeakMap,Id=new WeakMap,sm=new WeakMap;function om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function am(n){return n.__v_skip||!Object.isExtensible(n)?0:om(Lp(n))}function wc(n){return ai(n)?n:Rc(n,!1,Zp,nm,Dd)}function lm(n){return Rc(n,!1,Qp,im,Ld)}function ul(n){return Rc(n,!0,Jp,rm,Id)}function Rc(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=am(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function qi(n){return ai(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Cc(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function cm(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&gd(n,"__v_skip",!0),n}const En=n=>gt(n)?wc(n):n,Tr=n=>gt(n)?ul(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function cn(n){return um(n,!1)}function um(n,e){return Ft(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:st(e),this._value=t?e:En(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||ai(e);e=i?e:st(e),Ti(e,t)&&(this._rawValue=e,this._value=i?e:En(e),this.dep.trigger())}}function dm(n){return Ft(n)?n.value:n}const hm={get:(n,e,t)=>e==="__v_raw"?n:dm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ud(n){return qi(n)?n:new Proxy(n,hm)}class pm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return yd(this,!0),!0}get value(){const e=this.dep.track();return Td(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mm(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new pm(i,r,t)}const Bs={},Lo=new WeakMap;let Bi;function gm(n,e=!1,t=Bi){if(t){let i=Lo.get(t);i||Lo.set(t,i=[]),i.push(n)}}function _m(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,l=E=>r?E:pn(E)||r===!1||r===0?ei(E,1):ei(E);let u,f,d,m,g=!1,x=!1;if(Ft(n)?(f=()=>n.value,g=pn(n)):qi(n)?(f=()=>l(n),g=!0):Ve(n)?(x=!0,g=n.some(E=>qi(E)||pn(E)),f=()=>n.map(E=>{if(Ft(E))return E.value;if(qi(E))return l(E);if(Ye(E))return c?c(E,2):E()})):Ye(n)?e?f=c?()=>c(n,2):n:f=()=>{if(d){si();try{d()}finally{oi()}}const E=Bi;Bi=u;try{return c?c(n,3,[m]):n(m)}finally{Bi=E}}:f=Fn,e&&r){const E=f,R=r===!0?1/0:r;f=()=>ei(E(),R)}const p=kp(),h=()=>{u.stop(),p&&p.active&&xc(p.effects,u)};if(s&&e){const E=e;e=(...R)=>{E(...R),h()}}let A=x?new Array(n.length).fill(Bs):Bs;const w=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const R=u.run();if(r||g||(x?R.some((I,L)=>Ti(I,A[L])):Ti(R,A))){d&&d();const I=Bi;Bi=u;try{const L=[R,A===Bs?void 0:x&&A[0]===Bs?[]:A,m];A=R,c?c(e,3,L):e(...L)}finally{Bi=I}}}else u.run()};return a&&a(w),u=new Sd(f),u.scheduler=o?()=>o(w,!1):w,m=E=>gm(E,!1,u),d=u.onStop=()=>{const E=Lo.get(u);if(E){if(c)c(E,4);else for(const R of E)R();Lo.delete(u)}},e?i?w(!0):A=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ei(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ft(n))ei(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(Nr(n)||vr(n))n.forEach(i=>{ei(i,e,t)});else if(pd(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(n,e,t,i){try{return i?n(...i):n()}catch(r){Ko(r,e,t)}}function Hn(n,e,t,i){if(Ye(n)){const r=bs(n,e,t,i);return r&&dd(r)&&r.catch(s=>{Ko(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Hn(n[s],e,t,i));return r}}function Ko(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,c,l)===!1)return}a=a.parent}if(s){si(),bs(s,null,10,[n,c,l]),oi();return}}xm(n,t,r,i,o)}function xm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let Pn=-1;const Mr=[];let Si=null,_r=0;const Nd=Promise.resolve();let Io=null;function Pc(n){const e=Io||Nd;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Pn+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,r=Ht[i],s=ds(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Dc(n){if(!(n.flags&1)){const e=ds(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=ds(t)?Ht.push(n):Ht.splice(vm(e),0,n),n.flags|=1,Fd()}}function Fd(){Io||(Io=Nd.then(Bd))}function Sm(n){Ve(n)?Mr.push(...n):Si&&n.id===-1?Si.splice(_r+1,0,n):n.flags&1||(Mr.push(n),n.flags|=1),Fd()}function pu(n,e,t=Pn+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Od(n){if(Mr.length){const e=[...new Set(Mr)].sort((t,i)=>ds(t)-ds(i));if(Mr.length=0,Si){Si.push(...e);return}for(Si=e,_r=0;_r<Si.length;_r++){const t=Si[_r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Si=null,_r=0}}const ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bd(n){try{for(Pn=0;Pn<Ht.length;Pn++){const e=Ht[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Ht.length;Pn++){const e=Ht[Pn];e&&(e.flags&=-2)}Pn=-1,Ht.length=0,Od(),Io=null,(Ht.length||Mr.length)&&Bd()}}let hn=null,zd=null;function Uo(n){const e=hn;return hn=n,zd=n&&n.type.__scopeId||null,e}function Mm(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Eu(-1);const s=Uo(e);let o;try{o=n(...r)}finally{Uo(s),i._d&&Eu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _n(n,e){if(hn===null)return n;const t=Qo(hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,c=dt]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&ei(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(si(),Hn(c,t,8,[n.el,a,n,e]),oi())}}function ym(n,e){if(Gt){let t=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===t&&(t=Gt.provides=Object.create(i)),t[n]=e}}function xo(n,e,t=!1){const i=yg();if(i||yr){let r=yr?yr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const bm=Symbol.for("v-scx"),Em=()=>xo(bm);function ss(n,e,t){return Vd(n,e,t)}function Vd(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=kt({},t),c=e&&i||!e&&s!=="post";let l;if(ps){if(s==="sync"){const m=Em();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Fn,m.resume=Fn,m.pause=Fn,m}}const u=Gt;a.call=(m,g,x)=>Hn(m,u,g,x);let f=!1;s==="post"?a.scheduler=m=>{nn(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Dc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=_m(n,e,a);return ps&&(l?l.push(d):c&&d()),d}function Tm(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Hd(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const o=Es(this),a=Vd(r,s.bind(i),t);return o(),a}function Hd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Am=Symbol("_vte"),wm=n=>n.__isTeleport,Rm=Symbol("_leaveCb");function Lc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const No=new WeakMap;function os(n,e,t,i,r=!1){if(Ve(n)){n.forEach((g,x)=>os(g,e&&(Ve(e)?e[x]:e),t,i,r));return}if(as(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&os(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Qo(i.component):i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,d=st(f),m=f===dt?fd:g=>ot(d,g);if(l!=null&&l!==c){if(mu(e),Tt(l))u[l]=null,m(l)&&(f[l]=null);else if(Ft(l)){l.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Ye(c))bs(c,a,12,[o,u]);else{const g=Tt(c),x=Ft(c);if(g||x){const p=()=>{if(n.f){const h=g?m(c)?f[c]:u[c]:c.value;if(r)Ve(h)&&xc(h,s);else if(Ve(h))h.includes(s)||h.push(s);else if(g)u[c]=[s],m(c)&&(f[c]=u[c]);else{const A=[s];c.value=A,n.k&&(u[n.k]=A)}}else g?(u[c]=o,m(c)&&(f[c]=o)):x&&(c.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{p(),No.delete(n)};h.id=-1,No.set(n,h),nn(h,t)}else mu(n),p()}}}function mu(n){const e=No.get(n);e&&(e.flags|=8,No.delete(n))}Yo().requestIdleCallback;Yo().cancelIdleCallback;const as=n=>!!n.type.__asyncLoader,kd=n=>n.type.__isKeepAlive;function Cm(n,e){Wd(n,"a",e)}function Pm(n,e){Wd(n,"da",e)}function Wd(n,e,t=Gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if($o(e,i,t),t){let r=t.parent;for(;r&&r.parent;)kd(r.parent.vnode)&&Dm(i,e,t,r),r=r.parent}}function Dm(n,e,t,i){const r=$o(e,n,i,!0);Ic(()=>{xc(i[e],r)},t)}function $o(n,e,t=Gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{si();const a=Es(t),c=Hn(e,t,n,o);return a(),oi(),c});return i?r.unshift(s):r.push(s),s}}const fi=n=>(e,t=Gt)=>{(!ps||n==="sp")&&$o(n,(...i)=>e(...i),t)},Lm=fi("bm"),Xd=fi("m"),Im=fi("bu"),Um=fi("u"),Nm=fi("bum"),Ic=fi("um"),Fm=fi("sp"),Om=fi("rtg"),Bm=fi("rtc");function zm(n,e=Gt){$o("ec",n,e)}const Vm=Symbol.for("v-ndc");function zs(n,e,t,i){let r;const s=t,o=Ve(n);if(o||Tt(n)){const a=o&&qi(n);let c=!1,l=!1;a&&(c=!pn(n),l=ai(n),n=jo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(c?l?Tr(En(n[u])):En(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(n[u],u,c,s)}}else r=[];return r}const fl=n=>n?fh(n)?Qo(n):fl(n.parent):null,ls=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fl(n.parent),$root:n=>fl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yd(n),$forceUpdate:n=>n.f||(n.f=()=>{Dc(n.update)}),$nextTick:n=>n.n||(n.n=Pc.bind(n.proxy)),$watch:n=>Tm.bind(n)}),ga=(n,e)=>n!==dt&&!n.__isScriptSetup&&ot(n,e),Hm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ga(i,e))return o[e]=1,i[e];if(r!==dt&&ot(r,e))return o[e]=2,r[e];if(ot(s,e))return o[e]=3,s[e];if(t!==dt&&ot(t,e))return o[e]=4,t[e];dl&&(o[e]=0)}}const l=ls[e];let u,f;if(l)return e==="$attrs"&&It(n.attrs,"get",""),l(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dt&&ot(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,ot(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ga(r,e)?(r[e]=t,!0):i!==dt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let c;return!!(t[a]||n!==dt&&a[0]!=="$"&&ot(n,a)||ga(e,a)||ot(s,a)||ot(i,a)||ot(ls,a)||ot(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gu(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dl=!0;function Gm(n){const e=Yd(n),t=n.proxy,i=n.ctx;dl=!1,e.beforeCreate&&_u(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:x,deactivated:p,beforeDestroy:h,beforeUnmount:A,destroyed:w,unmounted:E,render:R,renderTracked:I,renderTriggered:L,errorCaptured:V,serverPrefetch:S,expose:T,inheritAttrs:U,components:K,directives:k,filters:ie}=e;if(l&&km(l,i,null),o)for(const B in o){const Z=o[B];Ye(Z)&&(i[B]=Z.bind(t))}if(r){const B=r.call(t,t);gt(B)&&(n.data=wc(B))}if(dl=!0,s)for(const B in s){const Z=s[B],ge=Ye(Z)?Z.bind(t,t):Ye(Z.get)?Z.get.bind(t,t):Fn,pe=!Ye(Z)&&Ye(Z.set)?Z.set.bind(t):Fn,he=Rg({get:ge,set:pe});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>he.value,set:Ue=>he.value=Ue})}if(a)for(const B in a)qd(a[B],i,t,B);if(c){const B=Ye(c)?c.call(t):c;Reflect.ownKeys(B).forEach(Z=>{ym(Z,B[Z])})}u&&_u(u,n,"c");function q(B,Z){Ve(Z)?Z.forEach(ge=>B(ge.bind(t))):Z&&B(Z.bind(t))}if(q(Lm,f),q(Xd,d),q(Im,m),q(Um,g),q(Cm,x),q(Pm,p),q(zm,V),q(Bm,I),q(Om,L),q(Nm,A),q(Ic,E),q(Fm,S),Ve(T))if(T.length){const B=n.exposed||(n.exposed={});T.forEach(Z=>{Object.defineProperty(B,Z,{get:()=>t[Z],set:ge=>t[Z]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Fn&&(n.render=R),U!=null&&(n.inheritAttrs=U),K&&(n.components=K),k&&(n.directives=k),S&&Gd(n)}function km(n,e,t=Fn){Ve(n)&&(n=hl(n));for(const i in n){const r=n[i];let s;gt(r)?"default"in r?s=xo(r.from||i,r.default,!0):s=xo(r.from||i):s=xo(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function _u(n,e,t){Hn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qd(n,e,t,i){let r=i.includes(".")?Hd(t,i):()=>t[i];if(Tt(n)){const s=e[n];Ye(s)&&ss(r,s)}else if(Ye(n))ss(r,n.bind(t));else if(gt(n))if(Ve(n))n.forEach(s=>qd(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&ss(r,s,n)}}function Yd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Fo(c,l,o,!0)),Fo(c,e,o)),gt(e)&&s.set(e,c),c}function Fo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Fo(n,s,t,!0),r&&r.forEach(o=>Fo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Wm={data:xu,props:vu,emits:vu,methods:Qr,computed:Qr,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Qr,directives:Qr,watch:qm,provide:xu,inject:Xm};function xu(n,e){return e?n?function(){return kt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Xm(n,e){return Qr(hl(n),hl(e))}function hl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Qr(n,e){return n?kt(Object.create(null),n,e):e}function vu(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:kt(Object.create(null),gu(n),gu(e??{})):e}function qm(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function jd(){return{app:null,config:{isNativeTag:fd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ym=0;function jm(n,e){return function(i,r=null){Ye(i)||(i=kt({},i)),r!=null&&!gt(r)&&(r=null);const s=jd(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:Ym++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Cg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(l,...f)):Ye(u)&&(o.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||On(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),c=!0,l._container=u,u.__vue_app__=l,Qo(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Hn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=yr;yr=l;try{return u()}finally{yr=f}}};return l}}let yr=null;const Km=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ai(e)}Modifiers`]||n[`${$i(e)}Modifiers`];function $m(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&Km(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Tt(u)?u.trim():u)),o.number&&(r=t.map(qo)));let a,c=i[a=fa(e)]||i[a=fa(Ai(e))];!c&&s&&(c=i[a=fa($i(e))]),c&&Hn(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(l,n,6,r)}}const Zm=new WeakMap;function Kd(n,e,t=!1){const i=t?Zm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ye(n)){const c=l=>{const u=Kd(l,e,!0);u&&(a=!0,kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(gt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(c=>o[c]=null):kt(o,s),gt(n)&&i.set(n,o),o)}function Zo(n,e){return!n||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,$i(e))||ot(n,e))}function Su(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:x}=n,p=Uo(n);let h,A;try{if(t.shapeFlag&4){const E=r||i,R=E;h=Dn(l.call(R,E,u,f,m,d,g)),A=a}else{const E=e;h=Dn(E.length>1?E(f,{attrs:a,slots:o,emit:c}):E(f,null)),A=e.props?a:Jm(a)}}catch(E){cs.length=0,Ko(E,n,1),h=On(wi)}let w=h;if(A&&x!==!1){const E=Object.keys(A),{shapeFlag:R}=w;E.length&&R&7&&(s&&E.some(_c)&&(A=Qm(A,s)),w=Ar(w,A,!1,!0))}return t.dirs&&(w=Ar(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Lc(w,t.transition),h=w,Uo(p),h}const Jm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Wo(t))&&((e||(e={}))[t]=n[t]);return e},Qm=(n,e)=>{const t={};for(const i in n)(!_c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function eg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Mu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Zo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Mu(i,o,l):!0:!!o;return!1}function Mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Zo(t,s))return!0}return!1}function tg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $d={},Zd=()=>Object.create($d),Jd=n=>Object.getPrototypeOf(n)===$d;function ng(n,e,t,i=!1){const r={},s=Zd();n.propsDefaults=Object.create(null),Qd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:lm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ig(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=st(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zo(n.emitsOptions,d))continue;const m=e[d];if(c)if(ot(s,d))m!==s[d]&&(s[d]=m,l=!0);else{const g=Ai(d);r[g]=pl(c,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,l=!0)}}}else{Qd(n,e,r,s)&&(l=!0);let u;for(const f in a)(!e||!ot(e,f)&&((u=$i(f))===f||!ot(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=pl(c,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ot(e,f))&&(delete s[f],l=!0)}l&&Qn(n.attrs,"set","")}function Qd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(ns(c))continue;const l=e[c];let u;r&&ot(r,u=Ai(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:Zo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=st(t),l=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=pl(r,c,f,l[f],n,!ot(l,f))}}return o}function pl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=Es(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$i(t))&&(i=!0))}return i}const rg=new WeakMap;function eh(n,e,t=!1){const i=t?rg:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!Ye(n)){const u=f=>{c=!0;const[d,m]=eh(f,e,!0);kt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return gt(n)&&i.set(n,xr),xr;if(Ve(s))for(let u=0;u<s.length;u++){const f=Ai(s[u]);yu(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=Ai(u);if(yu(f)){const d=s[u],m=o[f]=Ve(d)||Ye(d)?{type:d}:kt({},d),g=m.type;let x=!1,p=!0;if(Ve(g))for(let h=0;h<g.length;++h){const A=g[h],w=Ye(A)&&A.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(p=!1)}else x=Ye(g)&&g.name==="Boolean";m[0]=x,m[1]=p,(x||ot(m,"default"))&&a.push(f)}}const l=[o,a];return gt(n)&&i.set(n,l),l}function yu(n){return n[0]!=="$"&&!ns(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>Ve(n)?n.map(Dn):[Dn(n)],sg=(n,e,t)=>{if(e._n)return e;const i=Mm((...r)=>Nc(e(...r)),t);return i._c=!1,i},th=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uc(r))continue;const s=n[r];if(Ye(s))e[r]=sg(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},nh=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},ih=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},og=(n,e,t)=>{const i=n.slots=Zd();if(n.vnode.shapeFlag&32){const r=e._;r?(ih(i,e,t),t&&gd(i,"_",r,!0)):th(e,i)}else e&&nh(n,e)},ag=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ih(r,e,t):(s=!e.$stable,th(e,r)),o=e}else e&&(nh(n,e),o={default:1});if(s)for(const a in r)!Uc(a)&&o[a]==null&&delete r[a]},nn=dg;function lg(n){return cg(n)}function cg(n,e){const t=Yo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Fn,insertStaticContent:g}=n,x=(C,y,P,O=null,z=null,J=null,b=void 0,ae=null,se=!!y.dynamicChildren)=>{if(C===y)return;C&&!Gr(C,y)&&(O=ce(C),Ue(C,z,J,!0),C=null),y.patchFlag===-2&&(se=!1,y.dynamicChildren=null);const{type:Q,ref:te,shapeFlag:v}=y;switch(Q){case Jo:p(C,y,P,O);break;case wi:h(C,y,P,O);break;case vo:C==null&&A(y,P,O,b);break;case jt:K(C,y,P,O,z,J,b,ae,se);break;default:v&1?R(C,y,P,O,z,J,b,ae,se):v&6?k(C,y,P,O,z,J,b,ae,se):(v&64||v&128)&&Q.process(C,y,P,O,z,J,b,ae,se,Ce)}te!=null&&z?os(te,C&&C.ref,J,y||C,!y):te==null&&C&&C.ref!=null&&os(C.ref,null,J,C,!0)},p=(C,y,P,O)=>{if(C==null)i(y.el=a(y.children),P,O);else{const z=y.el=C.el;y.children!==C.children&&l(z,y.children)}},h=(C,y,P,O)=>{C==null?i(y.el=c(y.children||""),P,O):y.el=C.el},A=(C,y,P,O)=>{[C.el,C.anchor]=g(C.children,y,P,O,C.el,C.anchor)},w=({el:C,anchor:y},P,O)=>{let z;for(;C&&C!==y;)z=d(C),i(C,P,O),C=z;i(y,P,O)},E=({el:C,anchor:y})=>{let P;for(;C&&C!==y;)P=d(C),r(C),C=P;r(y)},R=(C,y,P,O,z,J,b,ae,se)=>{if(y.type==="svg"?b="svg":y.type==="math"&&(b="mathml"),C==null)I(y,P,O,z,J,b,ae,se);else{const Q=C.el&&C.el._isVueCE?C.el:null;try{Q&&Q._beginPatch(),S(C,y,z,J,b,ae,se)}finally{Q&&Q._endPatch()}}},I=(C,y,P,O,z,J,b,ae)=>{let se,Q;const{props:te,shapeFlag:v,transition:_,dirs:D}=C;if(se=C.el=o(C.type,J,te&&te.is,te),v&8?u(se,C.children):v&16&&V(C.children,se,null,O,z,_a(C,J),b,ae),D&&Pi(C,null,O,"created"),L(se,C,C.scopeId,b,O),te){for(const ee in te)ee!=="value"&&!ns(ee)&&s(se,ee,null,te[ee],J,O);"value"in te&&s(se,"value",null,te.value,J),(Q=te.onVnodeBeforeMount)&&wn(Q,O,C)}D&&Pi(C,null,O,"beforeMount");const W=ug(z,_);W&&_.beforeEnter(se),i(se,y,P),((Q=te&&te.onVnodeMounted)||W||D)&&nn(()=>{Q&&wn(Q,O,C),W&&_.enter(se),D&&Pi(C,null,O,"mounted")},z)},L=(C,y,P,O,z)=>{if(P&&m(C,P),O)for(let J=0;J<O.length;J++)m(C,O[J]);if(z){let J=z.subTree;if(y===J||ah(J.type)&&(J.ssContent===y||J.ssFallback===y)){const b=z.vnode;L(C,b,b.scopeId,b.slotScopeIds,z.parent)}}},V=(C,y,P,O,z,J,b,ae,se=0)=>{for(let Q=se;Q<C.length;Q++){const te=C[Q]=ae?Mi(C[Q]):Dn(C[Q]);x(null,te,y,P,O,z,J,b,ae)}},S=(C,y,P,O,z,J,b)=>{const ae=y.el=C.el;let{patchFlag:se,dynamicChildren:Q,dirs:te}=y;se|=C.patchFlag&16;const v=C.props||dt,_=y.props||dt;let D;if(P&&Di(P,!1),(D=_.onVnodeBeforeUpdate)&&wn(D,P,y,C),te&&Pi(y,C,P,"beforeUpdate"),P&&Di(P,!0),(v.innerHTML&&_.innerHTML==null||v.textContent&&_.textContent==null)&&u(ae,""),Q?T(C.dynamicChildren,Q,ae,P,O,_a(y,z),J):b||Z(C,y,ae,null,P,O,_a(y,z),J,!1),se>0){if(se&16)U(ae,v,_,P,z);else if(se&2&&v.class!==_.class&&s(ae,"class",null,_.class,z),se&4&&s(ae,"style",v.style,_.style,z),se&8){const W=y.dynamicProps;for(let ee=0;ee<W.length;ee++){const G=W[ee],ye=v[G],fe=_[G];(fe!==ye||G==="value")&&s(ae,G,ye,fe,z,P)}}se&1&&C.children!==y.children&&u(ae,y.children)}else!b&&Q==null&&U(ae,v,_,P,z);((D=_.onVnodeUpdated)||te)&&nn(()=>{D&&wn(D,P,y,C),te&&Pi(y,C,P,"updated")},O)},T=(C,y,P,O,z,J,b)=>{for(let ae=0;ae<y.length;ae++){const se=C[ae],Q=y[ae],te=se.el&&(se.type===jt||!Gr(se,Q)||se.shapeFlag&198)?f(se.el):P;x(se,Q,te,null,O,z,J,b,!0)}},U=(C,y,P,O,z)=>{if(y!==P){if(y!==dt)for(const J in y)!ns(J)&&!(J in P)&&s(C,J,y[J],null,z,O);for(const J in P){if(ns(J))continue;const b=P[J],ae=y[J];b!==ae&&J!=="value"&&s(C,J,ae,b,z,O)}"value"in P&&s(C,"value",y.value,P.value,z)}},K=(C,y,P,O,z,J,b,ae,se)=>{const Q=y.el=C?C.el:a(""),te=y.anchor=C?C.anchor:a("");let{patchFlag:v,dynamicChildren:_,slotScopeIds:D}=y;D&&(ae=ae?ae.concat(D):D),C==null?(i(Q,P,O),i(te,P,O),V(y.children||[],P,te,z,J,b,ae,se)):v>0&&v&64&&_&&C.dynamicChildren&&C.dynamicChildren.length===_.length?(T(C.dynamicChildren,_,P,z,J,b,ae),(y.key!=null||z&&y===z.subTree)&&rh(C,y,!0)):Z(C,y,P,te,z,J,b,ae,se)},k=(C,y,P,O,z,J,b,ae,se)=>{y.slotScopeIds=ae,C==null?y.shapeFlag&512?z.ctx.activate(y,P,O,b,se):ie(y,P,O,z,J,b,se):ne(C,y,se)},ie=(C,y,P,O,z,J,b)=>{const ae=C.component=Mg(C,O,z);if(kd(C)&&(ae.ctx.renderer=Ce),bg(ae,!1,b),ae.asyncDep){if(z&&z.registerDep(ae,q,b),!C.el){const se=ae.subTree=On(wi);h(null,se,y,P),C.placeholder=se.el}}else q(ae,C,y,P,z,J,b)},ne=(C,y,P)=>{const O=y.component=C.component;if(eg(C,y,P))if(O.asyncDep&&!O.asyncResolved){B(O,y,P);return}else O.next=y,O.update();else y.el=C.el,O.vnode=y},q=(C,y,P,O,z,J,b)=>{const ae=()=>{if(C.isMounted){let{next:v,bu:_,u:D,parent:W,vnode:ee}=C;{const Le=sh(C);if(Le){v&&(v.el=ee.el,B(C,v,b)),Le.asyncDep.then(()=>{C.isUnmounted||ae()});return}}let G=v,ye;Di(C,!1),v?(v.el=ee.el,B(C,v,b)):v=ee,_&&_o(_),(ye=v.props&&v.props.onVnodeBeforeUpdate)&&wn(ye,W,v,ee),Di(C,!0);const fe=Su(C),be=C.subTree;C.subTree=fe,x(be,fe,f(be.el),ce(be),C,z,J),v.el=fe.el,G===null&&tg(C,fe.el),D&&nn(D,z),(ye=v.props&&v.props.onVnodeUpdated)&&nn(()=>wn(ye,W,v,ee),z)}else{let v;const{el:_,props:D}=y,{bm:W,m:ee,parent:G,root:ye,type:fe}=C,be=as(y);Di(C,!1),W&&_o(W),!be&&(v=D&&D.onVnodeBeforeMount)&&wn(v,G,y),Di(C,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(fe);const Le=C.subTree=Su(C);x(null,Le,P,O,C,z,J),y.el=Le.el}if(ee&&nn(ee,z),!be&&(v=D&&D.onVnodeMounted)){const Le=y;nn(()=>wn(v,G,Le),z)}(y.shapeFlag&256||G&&as(G.vnode)&&G.vnode.shapeFlag&256)&&C.a&&nn(C.a,z),C.isMounted=!0,y=P=O=null}};C.scope.on();const se=C.effect=new Sd(ae);C.scope.off();const Q=C.update=se.run.bind(se),te=C.job=se.runIfDirty.bind(se);te.i=C,te.id=C.uid,se.scheduler=()=>Dc(te),Di(C,!0),Q()},B=(C,y,P)=>{y.component=C;const O=C.vnode.props;C.vnode=y,C.next=null,ig(C,y.props,O,P),ag(C,y.children,P),si(),pu(C),oi()},Z=(C,y,P,O,z,J,b,ae,se=!1)=>{const Q=C&&C.children,te=C?C.shapeFlag:0,v=y.children,{patchFlag:_,shapeFlag:D}=y;if(_>0){if(_&128){pe(Q,v,P,O,z,J,b,ae,se);return}else if(_&256){ge(Q,v,P,O,z,J,b,ae,se);return}}D&8?(te&16&&re(Q,z,J),v!==Q&&u(P,v)):te&16?D&16?pe(Q,v,P,O,z,J,b,ae,se):re(Q,z,J,!0):(te&8&&u(P,""),D&16&&V(v,P,O,z,J,b,ae,se))},ge=(C,y,P,O,z,J,b,ae,se)=>{C=C||xr,y=y||xr;const Q=C.length,te=y.length,v=Math.min(Q,te);let _;for(_=0;_<v;_++){const D=y[_]=se?Mi(y[_]):Dn(y[_]);x(C[_],D,P,null,z,J,b,ae,se)}Q>te?re(C,z,J,!0,!1,v):V(y,P,O,z,J,b,ae,se,v)},pe=(C,y,P,O,z,J,b,ae,se)=>{let Q=0;const te=y.length;let v=C.length-1,_=te-1;for(;Q<=v&&Q<=_;){const D=C[Q],W=y[Q]=se?Mi(y[Q]):Dn(y[Q]);if(Gr(D,W))x(D,W,P,null,z,J,b,ae,se);else break;Q++}for(;Q<=v&&Q<=_;){const D=C[v],W=y[_]=se?Mi(y[_]):Dn(y[_]);if(Gr(D,W))x(D,W,P,null,z,J,b,ae,se);else break;v--,_--}if(Q>v){if(Q<=_){const D=_+1,W=D<te?y[D].el:O;for(;Q<=_;)x(null,y[Q]=se?Mi(y[Q]):Dn(y[Q]),P,W,z,J,b,ae,se),Q++}}else if(Q>_)for(;Q<=v;)Ue(C[Q],z,J,!0),Q++;else{const D=Q,W=Q,ee=new Map;for(Q=W;Q<=_;Q++){const Se=y[Q]=se?Mi(y[Q]):Dn(y[Q]);Se.key!=null&&ee.set(Se.key,Q)}let G,ye=0;const fe=_-W+1;let be=!1,Le=0;const ue=new Array(fe);for(Q=0;Q<fe;Q++)ue[Q]=0;for(Q=D;Q<=v;Q++){const Se=C[Q];if(ye>=fe){Ue(Se,z,J,!0);continue}let Re;if(Se.key!=null)Re=ee.get(Se.key);else for(G=W;G<=_;G++)if(ue[G-W]===0&&Gr(Se,y[G])){Re=G;break}Re===void 0?Ue(Se,z,J,!0):(ue[Re-W]=Q+1,Re>=Le?Le=Re:be=!0,x(Se,y[Re],P,null,z,J,b,ae,se),ye++)}const _e=be?fg(ue):xr;for(G=_e.length-1,Q=fe-1;Q>=0;Q--){const Se=W+Q,Re=y[Se],xe=y[Se+1],We=Se+1<te?xe.el||oh(xe):O;ue[Q]===0?x(null,Re,P,We,z,J,b,ae,se):be&&(G<0||Q!==_e[G]?he(Re,P,We,2):G--)}}},he=(C,y,P,O,z=null)=>{const{el:J,type:b,transition:ae,children:se,shapeFlag:Q}=C;if(Q&6){he(C.component.subTree,y,P,O);return}if(Q&128){C.suspense.move(y,P,O);return}if(Q&64){b.move(C,y,P,Ce);return}if(b===jt){i(J,y,P);for(let v=0;v<se.length;v++)he(se[v],y,P,O);i(C.anchor,y,P);return}if(b===vo){w(C,y,P);return}if(O!==2&&Q&1&&ae)if(O===0)ae.beforeEnter(J),i(J,y,P),nn(()=>ae.enter(J),z);else{const{leave:v,delayLeave:_,afterLeave:D}=ae,W=()=>{C.ctx.isUnmounted?r(J):i(J,y,P)},ee=()=>{J._isLeaving&&J[Rm](!0),v(J,()=>{W(),D&&D()})};_?_(J,W,ee):ee()}else i(J,y,P)},Ue=(C,y,P,O=!1,z=!1)=>{const{type:J,props:b,ref:ae,children:se,dynamicChildren:Q,shapeFlag:te,patchFlag:v,dirs:_,cacheIndex:D}=C;if(v===-2&&(z=!1),ae!=null&&(si(),os(ae,null,P,C,!0),oi()),D!=null&&(y.renderCache[D]=void 0),te&256){y.ctx.deactivate(C);return}const W=te&1&&_,ee=!as(C);let G;if(ee&&(G=b&&b.onVnodeBeforeUnmount)&&wn(G,y,C),te&6)tt(C.component,P,O);else{if(te&128){C.suspense.unmount(P,O);return}W&&Pi(C,null,y,"beforeUnmount"),te&64?C.type.remove(C,y,P,Ce,O):Q&&!Q.hasOnce&&(J!==jt||v>0&&v&64)?re(Q,y,P,!1,!0):(J===jt&&v&384||!z&&te&16)&&re(se,y,P),O&&Be(C)}(ee&&(G=b&&b.onVnodeUnmounted)||W)&&nn(()=>{G&&wn(G,y,C),W&&Pi(C,null,y,"unmounted")},P)},Be=C=>{const{type:y,el:P,anchor:O,transition:z}=C;if(y===jt){Qe(P,O);return}if(y===vo){E(C);return}const J=()=>{r(P),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(C.shapeFlag&1&&z&&!z.persisted){const{leave:b,delayLeave:ae}=z,se=()=>b(P,J);ae?ae(C.el,J,se):se()}else J()},Qe=(C,y)=>{let P;for(;C!==y;)P=d(C),r(C),C=P;r(y)},tt=(C,y,P)=>{const{bum:O,scope:z,job:J,subTree:b,um:ae,m:se,a:Q}=C;bu(se),bu(Q),O&&_o(O),z.stop(),J&&(J.flags|=8,Ue(b,C,y,P)),ae&&nn(ae,y),nn(()=>{C.isUnmounted=!0},y)},re=(C,y,P,O=!1,z=!1,J=0)=>{for(let b=J;b<C.length;b++)Ue(C[b],y,P,O,z)},ce=C=>{if(C.shapeFlag&6)return ce(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const y=d(C.anchor||C.el),P=y&&y[Am];return P?d(P):y};let we=!1;const He=(C,y,P)=>{let O;C==null?y._vnode&&(Ue(y._vnode,null,null,!0),O=y._vnode.component):x(y._vnode||null,C,y,null,null,null,P),y._vnode=C,we||(we=!0,pu(O),Od(),we=!1)},Ce={p:x,um:Ue,m:he,r:Be,mt:ie,mc:V,pc:Z,pbc:T,n:ce,o:n};return{render:He,hydrate:void 0,createApp:jm(He)}}function _a({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function rh(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&rh(o,a)),a.type===Jo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===jt?1:0)),a.type===wi&&!a.el&&(a.el=o.el)}}function fg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function sh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sh(e)}function bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function oh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?oh(e.subTree):null}const ah=n=>n.__isSuspense;function dg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Sm(n)}const jt=Symbol.for("v-fgt"),Jo=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),cs=[];let on=null;function _t(n=!1){cs.push(on=n?null:[])}function hg(){cs.pop(),on=cs[cs.length-1]||null}let hs=1;function Eu(n,e=!1){hs+=n,n<0&&on&&e&&(on.hasOnce=!0)}function lh(n){return n.dynamicChildren=hs>0?on||xr:null,hg(),hs>0&&on&&on.push(n),n}function xt(n,e,t,i,r,s){return lh(oe(n,e,t,i,r,s,!0))}function pg(n,e,t,i,r){return lh(On(n,e,t,i,r,!0))}function ch(n){return n?n.__v_isVNode===!0:!1}function Gr(n,e){return n.type===e.type&&n.key===e.key}const uh=({key:n})=>n??null,So=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Ft(n)||Ye(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&uh(e),ref:e&&So(e),scopeId:zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(Fc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Tt(t)?8:16),hs>0&&!o&&on&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&on.push(c),c}const On=mg;function mg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vm)&&(n=wi),ch(n)){const a=Ar(n,e,!0);return t&&Fc(a,t),hs>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(wg(n)&&(n=n.__vccOpts),e){e=gg(e);let{class:a,style:c}=e;a&&!Tt(a)&&(e.class=Sr(a)),gt(c)&&(Cc(c)&&!Ve(c)&&(c=kt({},c)),e.style=Sc(c))}const o=Tt(n)?1:ah(n)?128:wm(n)?64:gt(n)?4:Ye(n)?2:0;return oe(n,e,t,i,r,o,s,!0)}function gg(n){return n?Cc(n)||Jd(n)?kt({},n):n:null}function Ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,l=e?xg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&uh(l),ref:e&&e.ref?t&&s?Ve(s)?s.concat(So(e)):[s,So(e)]:So(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ar(n.ssContent),ssFallback:n.ssFallback&&Ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Lc(u,c.clone(u)),u}function _g(n=" ",e=0){return On(Jo,null,n,e)}function Vs(n,e){const t=On(vo,null,n);return t.staticCount=e,t}function di(n="",e=!1){return e?(_t(),pg(wi,null,n)):On(wi,null,n)}function Dn(n){return n==null||typeof n=="boolean"?On(wi):Ve(n)?On(jt,null,n.slice()):ch(n)?Mi(n):On(Jo,null,String(n))}function Mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ar(n)}function Fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Fc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Jd(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[_g(e)]):t=8);n.children=e,n.shapeFlag|=t}function xg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Sr([e.class,i.class]));else if(r==="style")e.style=Sc([e.style,i.style]);else if(Wo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function wn(n,e,t,i=null){Hn(n,e,7,[t,i])}const vg=jd();let Sg=0;function Mg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||vg,s={uid:Sg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(i,r),emitsOptions:Kd(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$m.bind(null,s),n.ce&&n.ce(s),s}let Gt=null;const yg=()=>Gt||hn;let Oo,ml;{const n=Yo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Oo=e("__VUE_INSTANCE_SETTERS__",t=>Gt=t),ml=e("__VUE_SSR_SETTERS__",t=>ps=t)}const Es=n=>{const e=Gt;return Oo(n),n.scope.on(),()=>{n.scope.off(),Oo(e)}},Tu=()=>{Gt&&Gt.scope.off(),Oo(null)};function fh(n){return n.vnode.shapeFlag&4}let ps=!1;function bg(n,e=!1,t=!1){e&&ml(e);const{props:i,children:r}=n.vnode,s=fh(n);ng(n,i,s,e),og(n,r,t||e);const o=s?Eg(n,e):void 0;return e&&ml(!1),o}function Eg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hm);const{setup:i}=t;if(i){si();const r=n.setupContext=i.length>1?Ag(n):null,s=Es(n),o=bs(i,n,0,[n.props,r]),a=dd(o);if(oi(),s(),(a||n.sp)&&!as(n)&&Gd(n),a){if(o.then(Tu,Tu),e)return o.then(c=>{Au(n,c)}).catch(c=>{Ko(c,n,0)});n.asyncDep=o}else Au(n,o)}else dh(n)}function Au(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Ud(e)),dh(n)}function dh(n,e,t){const i=n.type;n.render||(n.render=i.render||Fn);{const r=Es(n);si();try{Gm(n)}finally{oi(),r()}}}const Tg={get(n,e){return It(n,"get",""),n[e]}};function Ag(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tg),slots:n.slots,emit:n.emit,expose:e}}function Qo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ud(cm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ls)return ls[t](n)},has(e,t){return t in e||t in ls}})):n.proxy}function wg(n){return Ye(n)&&"__vccOpts"in n}const Rg=(n,e)=>mm(n,e,ps),Cg="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gl;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{gl=wu.createPolicy("vue",{createHTML:n=>n})}catch{}const hh=gl?n=>gl.createHTML(n):n=>n,Pg="http://www.w3.org/2000/svg",Dg="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Ru=Jn&&Jn.createElement("template"),Lg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Jn.createElementNS(Pg,n):e==="mathml"?Jn.createElementNS(Dg,n):t?Jn.createElement(n,{is:t}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ru.innerHTML=hh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ru.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ig=Symbol("_vtc");function Ug(n,e,t){const i=n[Ig];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bo=Symbol("_vod"),ph=Symbol("_vsh"),xa={name:"show",beforeMount(n,{value:e},{transition:t}){n[Bo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):kr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),kr(n,!0),i.enter(n)):i.leave(n,()=>{kr(n,!1)}):kr(n,e))},beforeUnmount(n,{value:e}){kr(n,e)}};function kr(n,e){n.style.display=e?n[Bo]:"none",n[ph]=!e}const Ng=Symbol(""),Fg=/(?:^|;)\s*display\s*:/;function Og(n,e,t){const i=n.style,r=Tt(t);let s=!1;if(t&&!r){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Mo(i,a,"")}else for(const o in e)t[o]==null&&Mo(i,o,"");for(const o in t)o==="display"&&(s=!0),Mo(i,o,t[o])}else if(r){if(e!==t){const o=i[Ng];o&&(t+=";"+o),i.cssText=t,s=Fg.test(t)}}else e&&n.removeAttribute("style");Bo in n&&(n[Bo]=s?i.display:"",n[ph]&&(i.display="none"))}const Cu=/\s*!important$/;function Mo(n,e,t){if(Ve(t))t.forEach(i=>Mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Bg(n,e);Cu.test(t)?n.setProperty($i(i),t.replace(Cu,""),"important"):n[i]=t}}const Pu=["Webkit","Moz","ms"],va={};function Bg(n,e){const t=va[e];if(t)return t;let i=Ai(e);if(i!=="filter"&&i in n)return va[e]=i;i=md(i);for(let r=0;r<Pu.length;r++){const s=Pu[r]+i;if(s in n)return va[e]=s}return e}const Du="http://www.w3.org/1999/xlink";function Lu(n,e,t,i,r,s=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Du,e.slice(6,e.length)):n.setAttributeNS(Du,e,t):t==null||s&&!_d(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Vn(t)?String(t):t)}function Iu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?hh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_d(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function yi(n,e,t,i){n.addEventListener(e,t,i)}function zg(n,e,t,i){n.removeEventListener(e,t,i)}const Uu=Symbol("_vei");function Vg(n,e,t,i,r=null){const s=n[Uu]||(n[Uu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=Hg(e);if(i){const l=s[e]=Wg(i,r);yi(n,a,l,c)}else o&&(zg(n,a,o,c),s[e]=void 0)}}const Nu=/(?:Once|Passive|Capture)$/;function Hg(n){let e;if(Nu.test(n)){e={};let i;for(;i=n.match(Nu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),e]}let Sa=0;const Gg=Promise.resolve(),kg=()=>Sa||(Gg.then(()=>Sa=0),Sa=Date.now());function Wg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Hn(Xg(i,t.value),e,5,[i])};return t.value=n,t.attached=kg(),t}function Xg(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Fu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Ug(n,i,o):e==="style"?Og(n,t,i):Wo(e)?_c(e)||Vg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yg(n,e,i,o))?(Iu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Iu(n,Ai(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Lu(n,e,i,o))};function Yg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Fu(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fu(e)&&Tt(t)?!1:e in n}const wr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>_o(e,t):e};function jg(n){n.target.composing=!0}function Ou(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ni=Symbol("_assign");function Bu(n,e,t){return e&&(n=n.trim()),t&&(n=qo(n)),n}const er={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[ni]=wr(r);const s=i||r.props&&r.props.type==="number";yi(n,e?"change":"input",o=>{o.target.composing||n[ni](Bu(n.value,t,s))}),(t||s)&&yi(n,"change",()=>{n.value=Bu(n.value,t,s)}),e||(yi(n,"compositionstart",jg),yi(n,"compositionend",Ou),yi(n,"change",Ou))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ni]=wr(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?qo(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===c)||(n.value=c))}},Kg={deep:!0,created(n,e,t){n[ni]=wr(t),yi(n,"change",()=>{const i=n._modelValue,r=ms(n),s=n.checked,o=n[ni];if(Ve(i)){const a=Mc(i,r),c=a!==-1;if(s&&!c)o(i.concat(r));else if(!s&&c){const l=[...i];l.splice(a,1),o(l)}}else if(Nr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(mh(n,s))})},mounted:zu,beforeUpdate(n,e,t){n[ni]=wr(t),zu(n,e,t)}};function zu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ve(e))r=Mc(e,i.props.value)>-1;else if(Nr(e))r=e.has(i.props.value);else{if(e===t)return;r=ys(e,mh(n,!0))}n.checked!==r&&(n.checked=r)}const $g={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Nr(e);yi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?qo(ms(o)):ms(o));n[ni](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Pc(()=>{n._assigning=!1})}),n[ni]=wr(i)},mounted(n,{value:e}){Vu(n,e)},beforeUpdate(n,e,t){n[ni]=wr(t)},updated(n,{value:e}){n._assigning||Vu(n,e)}};function Vu(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!Nr(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=ms(o);if(t)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=Mc(e,a)>-1}else o.selected=e.has(a);else if(ys(ms(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ms(n){return"_value"in n?n._value:n.value}function mh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Zg=["ctrl","shift","alt","meta"],Jg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Zg.some(t=>n[`${t}Key`]&&!e.includes(t))},Ma=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Jg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Qg=kt({patchProp:qg},Lg);let Hu;function e_(){return Hu||(Hu=lg(Qg))}const t_=(...n)=>{const e=e_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=i_(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,n_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function n_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function i_(n){return Tt(n)?document.querySelector(n):n}function gh(n,e){return function(){return n.apply(e,arguments)}}const{toString:r_}=Object.prototype,{getPrototypeOf:Oc}=Object,{iterator:ea,toStringTag:_h}=Symbol,ta=(n=>e=>{const t=r_.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Tn=n=>(n=n.toLowerCase(),e=>ta(e)===n),na=n=>e=>typeof e===n,{isArray:Fr}=Array,Rr=na("undefined");function Ts(n){return n!==null&&!Rr(n)&&n.constructor!==null&&!Rr(n.constructor)&&Kt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const xh=Tn("ArrayBuffer");function s_(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&xh(n.buffer),e}const o_=na("string"),Kt=na("function"),vh=na("number"),As=n=>n!==null&&typeof n=="object",a_=n=>n===!0||n===!1,yo=n=>{if(ta(n)!=="object")return!1;const e=Oc(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(_h in n)&&!(ea in n)},l_=n=>{if(!As(n)||Ts(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},c_=Tn("Date"),u_=Tn("File"),f_=Tn("Blob"),d_=Tn("FileList"),h_=n=>As(n)&&Kt(n.pipe),p_=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Kt(n.append)&&((e=ta(n))==="formdata"||e==="object"&&Kt(n.toString)&&n.toString()==="[object FormData]"))},m_=Tn("URLSearchParams"),[g_,__,x_,v_]=["ReadableStream","Request","Response","Headers"].map(Tn),S_=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ws(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Fr(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(Ts(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function Sh(n,e){if(Ts(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mh=n=>!Rr(n)&&n!==Gi;function _l(){const{caseless:n,skipUndefined:e}=Mh(this)&&this||{},t={},i=(r,s)=>{const o=n&&Sh(t,s)||s;yo(t[o])&&yo(r)?t[o]=_l(t[o],r):yo(r)?t[o]=_l({},r):Fr(r)?t[o]=r.slice():(!e||!Rr(r))&&(t[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ws(arguments[r],i);return t}const M_=(n,e,t,{allOwnKeys:i}={})=>(ws(e,(r,s)=>{t&&Kt(r)?n[s]=gh(r,t):n[s]=r},{allOwnKeys:i}),n),y_=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),b_=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},E_=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Oc(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},T_=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},A_=n=>{if(!n)return null;if(Fr(n))return n;let e=n.length;if(!vh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},w_=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Oc(Uint8Array)),R_=(n,e)=>{const i=(n&&n[ea]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},C_=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},P_=Tn("HTMLFormElement"),D_=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),Gu=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),L_=Tn("RegExp"),yh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};ws(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},I_=n=>{yh(n,(e,t)=>{if(Kt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Kt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},U_=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Fr(n)?i(n):i(String(n).split(e)),t},N_=()=>{},F_=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function O_(n){return!!(n&&Kt(n.append)&&n[_h]==="FormData"&&n[ea])}const B_=n=>{const e=new Array(10),t=(i,r)=>{if(As(i)){if(e.indexOf(i)>=0)return;if(Ts(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Fr(i)?[]:{};return ws(i,(o,a)=>{const c=t(o,r+1);!Rr(c)&&(s[a]=c)}),e[r]=void 0,s}}return i};return t(n,0)},z_=Tn("AsyncFunction"),V_=n=>n&&(As(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),bh=((n,e)=>n?setImmediate:e?((t,i)=>(Gi.addEventListener("message",({source:r,data:s})=>{r===Gi&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),Gi.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Kt(Gi.postMessage)),H_=typeof queueMicrotask<"u"?queueMicrotask.bind(Gi):typeof process<"u"&&process.nextTick||bh,G_=n=>n!=null&&Kt(n[ea]),j={isArray:Fr,isArrayBuffer:xh,isBuffer:Ts,isFormData:p_,isArrayBufferView:s_,isString:o_,isNumber:vh,isBoolean:a_,isObject:As,isPlainObject:yo,isEmptyObject:l_,isReadableStream:g_,isRequest:__,isResponse:x_,isHeaders:v_,isUndefined:Rr,isDate:c_,isFile:u_,isBlob:f_,isRegExp:L_,isFunction:Kt,isStream:h_,isURLSearchParams:m_,isTypedArray:w_,isFileList:d_,forEach:ws,merge:_l,extend:M_,trim:S_,stripBOM:y_,inherits:b_,toFlatObject:E_,kindOf:ta,kindOfTest:Tn,endsWith:T_,toArray:A_,forEachEntry:R_,matchAll:C_,isHTMLForm:P_,hasOwnProperty:Gu,hasOwnProp:Gu,reduceDescriptors:yh,freezeMethods:I_,toObjectSet:U_,toCamelCase:D_,noop:N_,toFiniteNumber:F_,findKey:Sh,global:Gi,isContextDefined:Mh,isSpecCompliantForm:O_,toJSONObject:B_,isAsyncFn:z_,isThenable:V_,setImmediate:bh,asap:H_,isIterable:G_};function Xe(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}j.inherits(Xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}});const Eh=Xe.prototype,Th={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Th[n]={value:n}});Object.defineProperties(Xe,Th);Object.defineProperty(Eh,"isAxiosError",{value:!0});Xe.from=(n,e,t,i,r,s)=>{const o=Object.create(Eh);j.toFlatObject(n,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError");const a=n&&n.message?n.message:"Error",c=e==null&&n?n.code:e;return Xe.call(o,a,c,t,i,r),n&&o.cause==null&&Object.defineProperty(o,"cause",{value:n,configurable:!0}),o.name=n&&n.name||"Error",s&&Object.assign(o,s),o};const k_=null;function xl(n){return j.isPlainObject(n)||j.isArray(n)}function Ah(n){return j.endsWith(n,"[]")?n.slice(0,-2):n}function ku(n,e,t){return n?n.concat(e).map(function(r,s){return r=Ah(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function W_(n){return j.isArray(n)&&!n.some(xl)}const X_=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function ia(n,e,t){if(!j.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=j.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,p){return!j.isUndefined(p[x])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(e);if(!j.isFunction(r))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(j.isDate(g))return g.toISOString();if(j.isBoolean(g))return g.toString();if(!c&&j.isBlob(g))throw new Xe("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(g)||j.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,x,p){let h=g;if(g&&!p&&typeof g=="object"){if(j.endsWith(x,"{}"))x=i?x:x.slice(0,-2),g=JSON.stringify(g);else if(j.isArray(g)&&W_(g)||(j.isFileList(g)||j.endsWith(x,"[]"))&&(h=j.toArray(g)))return x=Ah(x),h.forEach(function(w,E){!(j.isUndefined(w)||w===null)&&e.append(o===!0?ku([x],E,s):o===null?x:x+"[]",l(w))}),!1}return xl(g)?!0:(e.append(ku(p,x,s),l(g)),!1)}const f=[],d=Object.assign(X_,{defaultVisitor:u,convertValue:l,isVisitable:xl});function m(g,x){if(!j.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),j.forEach(g,function(h,A){(!(j.isUndefined(h)||h===null)&&r.call(e,h,j.isString(A)?A.trim():A,x,d))===!0&&m(h,x?x.concat(A):[A])}),f.pop()}}if(!j.isObject(n))throw new TypeError("data must be an object");return m(n),e}function Wu(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Bc(n,e){this._pairs=[],n&&ia(n,this,e)}const wh=Bc.prototype;wh.append=function(e,t){this._pairs.push([e,t])};wh.toString=function(e){const t=e?function(i){return e.call(this,i,Wu)}:Wu;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function q_(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Rh(n,e,t){if(!e)return n;const i=t&&t.encode||q_;j.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let s;if(r?s=r(e,t):s=j.isURLSearchParams(e)?e.toString():new Bc(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class Xu{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Ch={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y_=typeof URLSearchParams<"u"?URLSearchParams:Bc,j_=typeof FormData<"u"?FormData:null,K_=typeof Blob<"u"?Blob:null,$_={isBrowser:!0,classes:{URLSearchParams:Y_,FormData:j_,Blob:K_},protocols:["http","https","file","blob","url","data"]},zc=typeof window<"u"&&typeof document<"u",vl=typeof navigator=="object"&&navigator||void 0,Z_=zc&&(!vl||["ReactNative","NativeScript","NS"].indexOf(vl.product)<0),J_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Q_=zc&&window.location.href||"http://localhost",e0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zc,hasStandardBrowserEnv:Z_,hasStandardBrowserWebWorkerEnv:J_,navigator:vl,origin:Q_},Symbol.toStringTag,{value:"Module"})),Ut={...e0,...$_};function t0(n,e){return ia(n,new Ut.classes.URLSearchParams,{visitor:function(t,i,r,s){return Ut.isNode&&j.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function n0(n){return j.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function i0(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Ph(n){function e(t,i,r,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=s>=t.length;return o=!o&&j.isArray(r)?r.length:o,c?(j.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!j.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&j.isArray(r[o])&&(r[o]=i0(r[o])),!a)}if(j.isFormData(n)&&j.isFunction(n.entries)){const t={};return j.forEachEntry(n,(i,r)=>{e(n0(i),r,t,0)}),t}return null}function r0(n,e,t){if(j.isString(n))try{return(e||JSON.parse)(n),j.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Rs={transitional:Ch,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=j.isObject(e);if(s&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return r?JSON.stringify(Ph(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)||j.isReadableStream(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return t0(e,this.formSerializer).toString();if((a=j.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ia(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),r0(e)):e}],transformResponse:[function(e){const t=this.transitional||Rs.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(j.isResponse(e)||j.isReadableStream(e))return e;if(e&&j.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Xe.from(a,Xe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ut.classes.FormData,Blob:Ut.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],n=>{Rs.headers[n]={}});const s0=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),o0=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&s0[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},qu=Symbol("internals");function Wr(n){return n&&String(n).trim().toLowerCase()}function bo(n){return n===!1||n==null?n:j.isArray(n)?n.map(bo):String(n)}function a0(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const l0=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function ya(n,e,t,i,r){if(j.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!j.isString(e)){if(j.isString(i))return e.indexOf(i)!==-1;if(j.isRegExp(i))return i.test(e)}}function c0(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function u0(n,e){const t=j.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let $t=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,c,l){const u=Wr(c);if(!u)throw new Error("header name must be a non-empty string");const f=j.findKey(r,u);(!f||r[f]===void 0||l===!0||l===void 0&&r[f]!==!1)&&(r[f||c]=bo(a))}const o=(a,c)=>j.forEach(a,(l,u)=>s(l,u,c));if(j.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(j.isString(e)&&(e=e.trim())&&!l0(e))o(o0(e),t);else if(j.isObject(e)&&j.isIterable(e)){let a={},c,l;for(const u of e){if(!j.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?j.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=Wr(e),e){const i=j.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return a0(r);if(j.isFunction(t))return t.call(this,r,i);if(j.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Wr(e),e){const i=j.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||ya(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=Wr(o),o){const a=j.findKey(i,o);a&&(!t||ya(i,i[a],a,t))&&(delete i[a],r=!0)}}return j.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||ya(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return j.forEach(this,(r,s)=>{const o=j.findKey(i,s);if(o){t[o]=bo(r),delete t[s];return}const a=e?c0(s):String(s).trim();a!==s&&delete t[s],t[a]=bo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return j.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&j.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[qu]=this[qu]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Wr(o);i[a]||(u0(r,o),i[a]=!0)}return j.isArray(e)?e.forEach(s):s(e),this}};$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors($t.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});j.freezeMethods($t);function ba(n,e){const t=this||Rs,i=e||t,r=$t.from(i.headers);let s=i.data;return j.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Dh(n){return!!(n&&n.__CANCEL__)}function Or(n,e,t){Xe.call(this,n??"canceled",Xe.ERR_CANCELED,e,t),this.name="CanceledError"}j.inherits(Or,Xe,{__CANCEL__:!0});function Lh(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Xe("Request failed with status code "+t.status,[Xe.ERR_BAD_REQUEST,Xe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function f0(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function d0(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[s];o||(o=l),t[r]=c,i[r]=l;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),l-o<e)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function h0(n,e){let t=0,i=1e3/e,r,s;const o=(l,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...l)};return[(...l)=>{const u=Date.now(),f=u-t;f>=i?o(l,u):(r=l,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const zo=(n,e,t=3)=>{let i=0;const r=d0(50,250);return h0(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,c=o-i,l=r(c),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(f)},t)},Yu=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},ju=n=>(...e)=>j.asap(()=>n(...e)),p0=Ut.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Ut.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Ut.origin),Ut.navigator&&/(msie|trident)/i.test(Ut.navigator.userAgent)):()=>!0,m0=Ut.hasStandardBrowserEnv?{write(n,e,t,i,r,s,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];j.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),j.isString(i)&&a.push(`path=${i}`),j.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),j.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function g0(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function _0(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Ih(n,e,t){let i=!g0(e);return n&&(i||t==!1)?_0(n,e):e}const Ku=n=>n instanceof $t?{...n}:n;function ji(n,e){e=e||{};const t={};function i(l,u,f,d){return j.isPlainObject(l)&&j.isPlainObject(u)?j.merge.call({caseless:d},l,u):j.isPlainObject(u)?j.merge({},u):j.isArray(u)?u.slice():u}function r(l,u,f,d){if(j.isUndefined(u)){if(!j.isUndefined(l))return i(void 0,l,f,d)}else return i(l,u,f,d)}function s(l,u){if(!j.isUndefined(u))return i(void 0,u)}function o(l,u){if(j.isUndefined(u)){if(!j.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function a(l,u,f){if(f in e)return i(l,u);if(f in n)return i(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>r(Ku(l),Ku(u),f,!0)};return j.forEach(Object.keys({...n,...e}),function(u){const f=c[u]||r,d=f(n[u],e[u],u);j.isUndefined(d)&&f!==a||(t[u]=d)}),t}const Uh=n=>{const e=ji({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=$t.from(o),e.url=Rh(Ih(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),j.isFormData(t)){if(Ut.hasStandardBrowserEnv||Ut.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(j.isFunction(t.getHeaders)){const c=t.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{l.includes(u.toLowerCase())&&o.set(u,f)})}}if(Ut.hasStandardBrowserEnv&&(i&&j.isFunction(i)&&(i=i(e)),i||i!==!1&&p0(e.url))){const c=r&&s&&m0.read(s);c&&o.set(r,c)}return e},x0=typeof XMLHttpRequest<"u",v0=x0&&function(n){return new Promise(function(t,i){const r=Uh(n);let s=r.data;const o=$t.from(r.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=r,u,f,d,m,g;function x(){m&&m(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function h(){if(!p)return;const w=$t.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:w,config:n,request:p};Lh(function(L){t(L),x()},function(L){i(L),x()},R),p=null}"onloadend"in p?p.onloadend=h:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(h)},p.onabort=function(){p&&(i(new Xe("Request aborted",Xe.ECONNABORTED,n,p)),p=null)},p.onerror=function(E){const R=E&&E.message?E.message:"Network Error",I=new Xe(R,Xe.ERR_NETWORK,n,p);I.event=E||null,i(I),p=null},p.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const R=r.transitional||Ch;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new Xe(E,R.clarifyTimeoutError?Xe.ETIMEDOUT:Xe.ECONNABORTED,n,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&j.forEach(o.toJSON(),function(E,R){p.setRequestHeader(R,E)}),j.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),l&&([d,g]=zo(l,!0),p.addEventListener("progress",d)),c&&p.upload&&([f,m]=zo(c),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=w=>{p&&(i(!w||w.type?new Or(null,n,p):w),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const A=f0(r.url);if(A&&Ut.protocols.indexOf(A)===-1){i(new Xe("Unsupported protocol "+A+":",Xe.ERR_BAD_REQUEST,n));return}p.send(s||null)})},S0=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(l){if(!r){r=!0,a();const u=l instanceof Error?l:this.reason;i.abort(u instanceof Xe?u:new Or(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Xe(`timeout ${e} of ms exceeded`,Xe.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>l.addEventListener("abort",s));const{signal:c}=i;return c.unsubscribe=()=>j.asap(a),c}},M0=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},y0=async function*(n,e){for await(const t of b0(n))yield*M0(t,e)},b0=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},$u=(n,e,t,i)=>{const r=y0(n,e);let s=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await r.next();if(l){a(),c.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),r.return()}},{highWaterMark:2})},Zu=64*1024,{isFunction:Hs}=j,E0=(({Request:n,Response:e})=>({Request:n,Response:e}))(j.global),{ReadableStream:Ju,TextEncoder:Qu}=j.global,ef=(n,...e)=>{try{return!!n(...e)}catch{return!1}},T0=n=>{n=j.merge.call({skipUndefined:!0},E0,n);const{fetch:e,Request:t,Response:i}=n,r=e?Hs(e):typeof fetch=="function",s=Hs(t),o=Hs(i);if(!r)return!1;const a=r&&Hs(Ju),c=r&&(typeof Qu=="function"?(g=>x=>g.encode(x))(new Qu):async g=>new Uint8Array(await new t(g).arrayBuffer())),l=s&&a&&ef(()=>{let g=!1;const x=new t(Ut.origin,{body:new Ju,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!x}),u=o&&a&&ef(()=>j.isReadableStream(new i("").body)),f={stream:u&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(x,p)=>{let h=x&&x[g];if(h)return h.call(x);throw new Xe(`Response type '${g}' is not supported`,Xe.ERR_NOT_SUPPORT,p)})});const d=async g=>{if(g==null)return 0;if(j.isBlob(g))return g.size;if(j.isSpecCompliantForm(g))return(await new t(Ut.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(j.isArrayBufferView(g)||j.isArrayBuffer(g))return g.byteLength;if(j.isURLSearchParams(g)&&(g=g+""),j.isString(g))return(await c(g)).byteLength},m=async(g,x)=>{const p=j.toFiniteNumber(g.getContentLength());return p??d(x)};return async g=>{let{url:x,method:p,data:h,signal:A,cancelToken:w,timeout:E,onDownloadProgress:R,onUploadProgress:I,responseType:L,headers:V,withCredentials:S="same-origin",fetchOptions:T}=Uh(g),U=e||fetch;L=L?(L+"").toLowerCase():"text";let K=S0([A,w&&w.toAbortSignal()],E),k=null;const ie=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let ne;try{if(I&&l&&p!=="get"&&p!=="head"&&(ne=await m(V,h))!==0){let he=new t(x,{method:"POST",body:h,duplex:"half"}),Ue;if(j.isFormData(h)&&(Ue=he.headers.get("content-type"))&&V.setContentType(Ue),he.body){const[Be,Qe]=Yu(ne,zo(ju(I)));h=$u(he.body,Zu,Be,Qe)}}j.isString(S)||(S=S?"include":"omit");const q=s&&"credentials"in t.prototype,B={...T,signal:K,method:p.toUpperCase(),headers:V.normalize().toJSON(),body:h,duplex:"half",credentials:q?S:void 0};k=s&&new t(x,B);let Z=await(s?U(k,T):U(x,B));const ge=u&&(L==="stream"||L==="response");if(u&&(R||ge&&ie)){const he={};["status","statusText","headers"].forEach(tt=>{he[tt]=Z[tt]});const Ue=j.toFiniteNumber(Z.headers.get("content-length")),[Be,Qe]=R&&Yu(Ue,zo(ju(R),!0))||[];Z=new i($u(Z.body,Zu,Be,()=>{Qe&&Qe(),ie&&ie()}),he)}L=L||"text";let pe=await f[j.findKey(f,L)||"text"](Z,g);return!ge&&ie&&ie(),await new Promise((he,Ue)=>{Lh(he,Ue,{data:pe,headers:$t.from(Z.headers),status:Z.status,statusText:Z.statusText,config:g,request:k})})}catch(q){throw ie&&ie(),q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)?Object.assign(new Xe("Network Error",Xe.ERR_NETWORK,g,k),{cause:q.cause||q}):Xe.from(q,q&&q.code,g,k)}}},A0=new Map,Nh=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let o=s.length,a=o,c,l,u=A0;for(;a--;)c=s[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:T0(e)),u=l;return l};Nh();const Vc={http:k_,xhr:v0,fetch:{get:Nh}};j.forEach(Vc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const tf=n=>`- ${n}`,w0=n=>j.isFunction(n)||n===null||n===!1;function R0(n,e){n=j.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let o=0;o<t;o++){i=n[o];let a;if(r=i,!w0(i)&&(r=Vc[(a=String(i)).toLowerCase()],r===void 0))throw new Xe(`Unknown adapter '${a}'`);if(r&&(j.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(tf).join(`
`):" "+tf(o[0]):"as no adapter specified";throw new Xe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Fh={getAdapter:R0,adapters:Vc};function Ea(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Or(null,n)}function nf(n){return Ea(n),n.headers=$t.from(n.headers),n.data=ba.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Fh.getAdapter(n.adapter||Rs.adapter,n)(n).then(function(i){return Ea(n),i.data=ba.call(n,n.transformResponse,i),i.headers=$t.from(i.headers),i},function(i){return Dh(i)||(Ea(n),i&&i.response&&(i.response.data=ba.call(n,n.transformResponse,i.response),i.response.headers=$t.from(i.response.headers))),Promise.reject(i)})}const Oh="1.13.2",ra={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{ra[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const rf={};ra.transitional=function(e,t,i){function r(s,o){return"[Axios v"+Oh+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Xe(r(o," has been removed"+(t?" in "+t:"")),Xe.ERR_DEPRECATED);return t&&!rf[o]&&(rf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};ra.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function C0(n,e,t){if(typeof n!="object")throw new Xe("options must be an object",Xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],c=a===void 0||o(a,s,n);if(c!==!0)throw new Xe("option "+s+" must be "+c,Xe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Xe("Unknown option "+s,Xe.ERR_BAD_OPTION)}}const Eo={assertOptions:C0,validators:ra},Rn=Eo.validators;let Yi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Xu,response:new Xu}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ji(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&Eo.assertOptions(i,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),r!=null&&(j.isFunction(r)?t.paramsSerializer={serialize:r}:Eo.assertOptions(r,{encode:Rn.function,serialize:Rn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Eo.assertOptions(t,{baseUrl:Rn.spelling("baseURL"),withXsrfToken:Rn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[t.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=$t.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(t)===!1||(c=c&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const l=[];this.interceptors.response.forEach(function(x){l.push(x.fulfilled,x.rejected)});let u,f=0,d;if(!c){const g=[nf.bind(this),void 0];for(g.unshift(...a),g.push(...l),d=g.length,u=Promise.resolve(t);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let m=t;for(;f<d;){const g=a[f++],x=a[f++];try{m=g(m)}catch(p){x.call(this,p);break}}try{u=nf.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=ji(this.defaults,e);const t=Ih(e.baseURL,e.url,e.allowAbsoluteUrls);return Rh(t,e.params,e.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(e){Yi.prototype[e]=function(t,i){return this.request(ji(i||{},{method:e,url:t,data:(i||{}).data}))}});j.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(ji(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Yi.prototype[e]=t(),Yi.prototype[e+"Form"]=t(!0)});let P0=class Bh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Or(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Bh(function(r){e=r}),cancel:e}}};function D0(n){return function(t){return n.apply(null,t)}}function L0(n){return j.isObject(n)&&n.isAxiosError===!0}const Sl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Sl).forEach(([n,e])=>{Sl[e]=n});function zh(n){const e=new Yi(n),t=gh(Yi.prototype.request,e);return j.extend(t,Yi.prototype,e,{allOwnKeys:!0}),j.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return zh(ji(n,r))},t}const St=zh(Rs);St.Axios=Yi;St.CanceledError=Or;St.CancelToken=P0;St.isCancel=Dh;St.VERSION=Oh;St.toFormData=ia;St.AxiosError=Xe;St.Cancel=St.CanceledError;St.all=function(e){return Promise.all(e)};St.spread=D0;St.isAxiosError=L0;St.mergeConfig=ji;St.AxiosHeaders=$t;St.formToJSON=n=>Ph(j.isHTMLForm(n)?new FormData(n):n);St.getAdapter=Fh.getAdapter;St.HttpStatusCode=Sl;St.default=St;const{Axios:mT,AxiosError:gT,CanceledError:_T,isCancel:xT,CancelToken:vT,VERSION:ST,all:MT,Cancel:yT,isAxiosError:bT,spread:ET,toFormData:TT,AxiosHeaders:AT,HttpStatusCode:wT,formToJSON:RT,getAdapter:CT,mergeConfig:PT}=St;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="182",I0=0,sf=1,U0=2,To=1,Vh=2,es=3,li=0,Zt=1,In=2,ii=0,br=1,of=2,af=3,lf=4,N0=5,Vi=100,F0=101,O0=102,B0=103,z0=104,V0=200,H0=201,G0=202,k0=203,Ml=204,yl=205,W0=206,X0=207,q0=208,Y0=209,j0=210,K0=211,$0=212,Z0=213,J0=214,bl=0,El=1,Tl=2,Cr=3,Al=4,wl=5,Rl=6,Cl=7,Hh=0,Q0=1,ex=2,Bn=0,Gh=1,kh=2,Wh=3,Xh=4,qh=5,Yh=6,jh=7,Kh=300,Ki=301,Pr=302,Pl=303,Dl=304,sa=306,Ll=1e3,ti=1001,Il=1002,Pt=1003,tx=1004,Gs=1005,Nt=1006,Ta=1007,ki=1008,sn=1009,$h=1010,Zh=1011,gs=1012,Gc=1013,Gn=1014,Un=1015,ci=1016,kc=1017,Wc=1018,_s=1020,Jh=35902,Qh=35899,ep=1021,tp=1022,Mn=1023,ui=1026,Wi=1027,np=1028,Xc=1029,Dr=1030,qc=1031,Yc=1033,Ao=33776,wo=33777,Ro=33778,Co=33779,Ul=35840,Nl=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,Vl=37496,Hl=37488,Gl=37489,kl=37490,Wl=37491,Xl=37808,ql=37809,Yl=37810,jl=37811,Kl=37812,$l=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,sc=36492,oc=36494,ac=36495,lc=36283,cc=36284,uc=36285,fc=36286,nx=3200,ip=0,ix=1,bi="",rn="srgb",Lr="srgb-linear",Vo="linear",ct="srgb",tr=7680,cf=519,rx=512,sx=513,ox=514,jc=515,ax=516,lx=517,Kc=518,cx=519,uf=35044,ff="300 es",Nn=2e3,Ho=2001;function rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ux(){const n=xs("canvas");return n.style.display="block",n}const df={};function hf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ge(...n){const e="THREE."+n.shift();console.warn(e,...n)}function it(...n){const e="THREE."+n.shift();console.error(e,...n)}function vs(...n){const e=n.join(" ");e in df||(df[e]=!0,Ge(...n))}function fx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,dc=180/Math.PI;function Cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function dx(n,e){return(n%e+e)%e}function Aa(n,e,t){return(1-t)*n+t*e}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==m||u!==g){let p=c*d+l*m+u*g+f*x;p<0&&(d=-d,m=-m,g=-g,x=-x,p=-p);let h=1-a;if(p<.9995){const A=Math.acos(p),w=Math.sin(A);h=Math.sin(h*A)/w,a=Math.sin(a*A)/w,c=c*h+d*a,l=l*h+m*a,u=u*h+g*a,f=f*h+x*a}else{c=c*h+d*a,l=l*h+m*a,u=u*h+g*a,f=f*h+x*a;const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*m-l*d,e[t+1]=c*g+u*d+l*f-a*m,e[t+2]=l*g+u*m+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new X,pf=new Ps;class qe{constructor(e,t,i,r,s,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],A=r[1],w=r[4],E=r[7],R=r[2],I=r[5],L=r[8];return s[0]=o*x+a*A+c*R,s[3]=o*p+a*w+c*I,s[6]=o*h+a*E+c*L,s[1]=l*x+u*A+f*R,s[4]=l*p+u*w+f*I,s[7]=l*h+u*E+f*L,s[2]=d*x+m*A+g*R,s[5]=d*p+m*w+g*I,s[8]=d*h+m*E+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new qe,mf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){const n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?Vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const et=hx();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class px{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=xs("canvas")),nr.width=e.width,nr.height=e.height;const r=nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mx=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ca(r[o].image)):s.push(Ca(r[o]))}else s=Ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let gx=0;const Pa=new X;class Ot extends Br{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=ti,r=ti,s=Nt,o=ki,a=Mn,c=sn,l=Ot.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Cs(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Kh;Ot.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(m+1)/2,R=(h+1)/2,I=(u+d)/4,L=(f+x)/4,V=(g+p)/4;return w>E&&w>R?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=I/i,s=L/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=V/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _x extends Br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $c(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends _x{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sp extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Ws.subVectors(this.max,qr),ir.subVectors(e.a,qr),rr.subVectors(e.b,qr),sr.subVectors(e.c,qr),hi.subVectors(rr,ir),pi.subVectors(sr,rr),Li.subVectors(ir,sr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Li.z,Li.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Li.z,0,-Li.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Li.y,Li.x,0];return!Da(t,ir,rr,sr,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,ir,rr,sr,Ws))?!1:(Xs.crossVectors(hi,pi),t=[Xs.x,Xs.y,Xs.z],Da(t,ir,rr,sr,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new X,new X,new X,new X,new X,new X,new X,new X],xn=new X,ks=new Ds,ir=new X,rr=new X,sr=new X,hi=new X,pi=new X,Li=new X,qr=new X,Ws=new X,Xs=new X,Ii=new X;function Da(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ii.fromArray(n,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const vx=new Ds,Yr=new X,La=new X;class Ls{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(La)),this.expandByPoint(Yr.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new X,Ia=new X,qs=new X,mi=new X,Ua=new X,Ys=new X,Na=new X;class Zc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ia.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qs),a=mi.dot(this.direction),c=-mi.dot(qs),l=mi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ia).addScaledVector(qs,d),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){Ua.subVectors(t,e),Ys.subVectors(i,e),Na.crossVectors(Ua,Ys);let o=this.direction.dot(Na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const c=a*this.direction.dot(Ys.crossVectors(mi,Ys));if(c<0)return null;const l=a*this.direction.dot(Ua.cross(mi));if(l<0||c+l>o)return null;const u=-a*mi.dot(Na);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,o,a,c,l,u,f,d,m,g,x,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,d,m,g,x,p)}set(e,t,i,r,s,o,a,c,l,u,f,d,m,g,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,Mx)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),gi.crossVectors(i,en),gi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),gi.crossVectors(i,en)),gi.normalize(),js.crossVectors(en,gi),r[0]=gi.x,r[4]=js.x,r[8]=en.x,r[1]=gi.y,r[5]=js.y,r[9]=en.y,r[2]=gi.z,r[6]=js.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],A=i[3],w=i[7],E=i[11],R=i[15],I=r[0],L=r[4],V=r[8],S=r[12],T=r[1],U=r[5],K=r[9],k=r[13],ie=r[2],ne=r[6],q=r[10],B=r[14],Z=r[3],ge=r[7],pe=r[11],he=r[15];return s[0]=o*I+a*T+c*ie+l*Z,s[4]=o*L+a*U+c*ne+l*ge,s[8]=o*V+a*K+c*q+l*pe,s[12]=o*S+a*k+c*B+l*he,s[1]=u*I+f*T+d*ie+m*Z,s[5]=u*L+f*U+d*ne+m*ge,s[9]=u*V+f*K+d*q+m*pe,s[13]=u*S+f*k+d*B+m*he,s[2]=g*I+x*T+p*ie+h*Z,s[6]=g*L+x*U+p*ne+h*ge,s[10]=g*V+x*K+p*q+h*pe,s[14]=g*S+x*k+p*B+h*he,s[3]=A*I+w*T+E*ie+R*Z,s[7]=A*L+w*U+E*ne+R*ge,s[11]=A*V+w*K+E*q+R*pe,s[15]=A*S+w*k+E*B+R*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],h=e[15],A=c*m-l*d,w=a*m-l*f,E=a*d-c*f,R=o*m-l*u,I=o*d-c*u,L=o*f-a*u;return t*(x*A-p*w+h*E)-i*(g*A-p*R+h*I)+r*(g*w-x*R+h*L)-s*(g*E-x*I+p*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],h=e[15],A=f*p*l-x*d*l+x*c*m-a*p*m-f*c*h+a*d*h,w=g*d*l-u*p*l-g*c*m+o*p*m+u*c*h-o*d*h,E=u*x*l-g*f*l+g*a*m-o*x*m-u*a*h+o*f*h,R=g*f*c-u*x*c-g*a*d+o*x*d+u*a*p-o*f*p,I=t*A+i*w+r*E+s*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=A*L,e[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*L,e[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*h+i*c*h)*L,e[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*m-i*c*m)*L,e[4]=w*L,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*h+t*d*h)*L,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*h-t*c*h)*L,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*m+t*c*m)*L,e[8]=E*L,e[9]=(g*f*s-u*x*s-g*i*m+t*x*m+u*i*h-t*f*h)*L,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*h+t*a*h)*L,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*m-t*a*m)*L,e[12]=R*L,e[13]=(u*x*r-g*f*r+g*i*d-t*x*d-u*i*p+t*f*p)*L,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*p-t*a*p)*L,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,m=s*u,g=s*f,x=o*u,p=o*f,h=a*f,A=c*l,w=c*u,E=c*f,R=i.x,I=i.y,L=i.z;return r[0]=(1-(x+h))*R,r[1]=(m+E)*R,r[2]=(g-w)*R,r[3]=0,r[4]=(m-E)*I,r[5]=(1-(d+h))*I,r[6]=(p+A)*I,r[7]=0,r[8]=(g+w)*L,r[9]=(p-A)*L,r[10]=(1-(d+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),vn.copy(this);const l=1/s,u=1/o,f=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Nn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ho)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Nn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ho)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new X,vn=new vt,Sx=new X(0,0,0),Mx=new X(1,1,1),gi=new X,js=new X,en=new X,_f=new vt,xf=new Ps;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yx=0;const vf=new X,ar=new Ps,Kn=new vt,Ks=new X,jr=new X,bx=new X,Ex=new Ps,Sf=new X(1,0,0),Mf=new X(0,1,0),yf=new X(0,0,1),bf={type:"added"},Tx={type:"removed"},lr={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Ct extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new X,t=new kn,i=new Ps,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ks.copy(e):Ks.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(jr,Ks,this.up):Kn.lookAt(Ks,jr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Kn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),lr.child=e,this.dispatchEvent(lr),lr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new X(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new X,$n=new X,Oa=new X,Zn=new X,cr=new X,ur=new X,Ef=new X,Ba=new X,za=new X,Va=new X,Ha=new bt,Ga=new bt,ka=new bt;class dn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),$n.subVectors(i,t),Oa.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot($n),c=Sn.dot(Oa),l=$n.dot($n),u=$n.dot(Oa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ha.setScalar(0),Ga.setScalar(0),ka.setScalar(0),Ha.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,i),ka.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ha,s.x),o.addScaledVector(Ga,s.y),o.addScaledVector(ka,s.z),o}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),$n.subVectors(e,t),Sn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,i),ur.subVectors(s,i),Ba.subVectors(e,i);const c=cr.dot(Ba),l=ur.dot(Ba);if(c<=0&&l<=0)return t.copy(i);za.subVectors(e,r);const u=cr.dot(za),f=ur.dot(za);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(cr,o);Va.subVectors(e,s);const m=cr.dot(Va),g=ur.dot(Va);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ur,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Ef.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Ef,a);const h=1/(p+x+d);return o=x*h,a=d*h,t.copy(i).addScaledVector(cr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=dx(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wa(o,s,e+1/3),this.g=Wa(o,s,e),this.b=Wa(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return et.workingToColorSpace(Lt.copy(this),e),Math.round(Ze(Lt.r*255,0,255))*65536+Math.round(Ze(Lt.g*255,0,255))*256+Math.round(Ze(Lt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=rn){et.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL($s);const i=Aa(_i.h,$s.h,t),r=Aa(_i.s,$s.s,t),s=Aa(_i.l,$s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Je;Je.NAMES=ap;let Ax=0;class Zi extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=br,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=yl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jc extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new X,Zs=new rt;let wx=0;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uf,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class lp extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cp extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rx=0;const un=new vt,Xa=new Ct,fr=new X,tn=new Ds,Kr=new Ds,Rt=new X;class an extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?cp:lp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(tn.min,Kr.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Kr.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Kr.min),tn.expandByPoint(Kr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Rt.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(e,l),Rt.add(fr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let V=0;V<i.count;V++)a[V]=new X,c[V]=new X;const l=new X,u=new X,f=new X,d=new rt,m=new rt,g=new rt,x=new X,p=new X;function h(V,S,T){l.fromBufferAttribute(i,V),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,V),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,T),u.sub(l),f.sub(l),m.sub(d),g.sub(d);const U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(U),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(U),a[V].add(x),a[S].add(x),a[T].add(x),c[V].add(p),c[S].add(p),c[T].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let V=0,S=A.length;V<S;++V){const T=A[V],U=T.start,K=T.count;for(let k=U,ie=U+K;k<ie;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new X,E=new X,R=new X,I=new X;function L(V){R.fromBufferAttribute(r,V),I.copy(R);const S=a[V];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(I,S);const U=E.dot(c[V])<0?-1:1;o.setXYZW(V,w.x,w.y,w.z,U)}for(let V=0,S=A.length;V<S;++V){const T=A[V],U=T.start,K=T.count;for(let k=U,ie=U+K;k<ie;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,u=new X,f=new X;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new bn(d,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new vt,Ui=new Zc,Js=new Ls,Af=new X,Qs=new X,eo=new X,to=new X,qa=new X,no=new X,wf=new X,io=new X;class gn extends Ct{constructor(e=new an,t=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(qa.fromBufferAttribute(f,e),o?no.addScaledVector(qa,u):no.addScaledVector(qa.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Js.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Js,Af)===null||Ui.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],A=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,R=w;E<R;E+=3){const I=a.getX(E),L=a.getX(E+1),V=a.getX(E+2);r=ro(this,h,e,i,l,u,f,I,L,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const A=a.getX(p),w=a.getX(p+1),E=a.getX(p+2);r=ro(this,o,e,i,l,u,f,A,w,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],A=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,R=w;E<R;E+=3){const I=E,L=E+1,V=E+2;r=ro(this,h,e,i,l,u,f,I,L,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const A=p,w=p+1,E=p+2;r=ro(this,o,e,i,l,u,f,A,w,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Cx(n,e,t,i,r,s,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===li,a),c===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:n}}function ro(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Qs),n.getVertexPosition(c,eo),n.getVertexPosition(l,to);const u=Cx(n,e,t,i,Qs,eo,to,wf);if(u){const f=new X;dn.getBarycoord(wf,Qs,eo,to,f),r&&(u.uv=dn.getInterpolatedAttribute(r,a,c,l,f,new rt)),s&&(u.uv1=dn.getInterpolatedAttribute(s,a,c,l,f,new rt)),o&&(u.normal=dn.getInterpolatedAttribute(o,a,c,l,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new X,materialIndex:0};dn.getNormal(Qs,eo,to,d.normal),u.face=d,u.barycoord=f}return u}class Is extends an{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(f,2));function g(x,p,h,A,w,E,R,I,L,V,S){const T=E/L,U=R/V,K=E/2,k=R/2,ie=I/2,ne=L+1,q=V+1;let B=0,Z=0;const ge=new X;for(let pe=0;pe<q;pe++){const he=pe*U-k;for(let Ue=0;Ue<ne;Ue++){const Be=Ue*T-K;ge[x]=Be*A,ge[p]=he*w,ge[h]=ie,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[h]=I>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ue/L),f.push(1-pe/V),B+=1}}for(let pe=0;pe<V;pe++)for(let he=0;he<L;he++){const Ue=d+he+ne*pe,Be=d+he+ne*(pe+1),Qe=d+(he+1)+ne*(pe+1),tt=d+(he+1)+ne*pe;c.push(Ue,Be,tt),c.push(Be,Qe,tt),Z+=6}a.addGroup(m,Z,S),m+=Z,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function Px(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Dx={clone:Ir,merge:Vt};var Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fp extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new X,Rf=new rt,Cf=new rt;class fn extends fp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,hr=1;class Ux extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(dr,hr,e,t);r.layers=this.layers,this.add(r);const s=new fn(dr,hr,e,t);s.layers=this.layers,this.add(s);const o=new fn(dr,hr,e,t);o.layers=this.layers,this.add(o);const a=new fn(dr,hr,e,t);a.layers=this.layers,this.add(a);const c=new fn(dr,hr,e,t);c.layers=this.layers,this.add(c);const l=new fn(dr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dp extends Ot{constructor(e=[],t=Ki,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hp extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ii});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Nt),new Ux(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class so extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new so;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fx extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ox extends Ot{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Pt,u=Pt,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ja=new X,Bx=new X,zx=new qe;class zi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ja.subVectors(i,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ja),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),r=this.coplanarPoint(ja).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ls,Vx=new rt(.5,.5),oo=new X;class Qc{constructor(e=new zi,t=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],m=s[7],g=s[8],x=s[9],p=s[10],h=s[11],A=s[12],w=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-o,m-u,h-g,R-A).normalize(),r[1].setComponents(l+o,m+u,h+g,R+A).normalize(),r[2].setComponents(l+a,m+f,h+x,R+w).normalize(),r[3].setComponents(l-a,m-f,h-x,R-w).normalize(),i)r[4].setComponents(c,d,p,E).normalize(),r[5].setComponents(l-c,m-d,h-p,R-E).normalize();else if(r[4].setComponents(l-c,m-d,h-p,R-E).normalize(),t===Nn)r[5].setComponents(l+c,m+d,h+p,R+E).normalize();else if(t===Ho)r[5].setComponents(c,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=Vx.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new X,ko=new X,Pf=new vt,$r=new Zc,ao=new Ls,Ka=new X,Df=new X;class Hx extends Ct{constructor(e=new an,t=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Go.fromBufferAttribute(t,r-1),ko.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Go.distanceTo(ko);e.setAttribute("lineDistance",new mn(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;Pf.copy(r).invert(),$r.copy(e.ray).applyMatrix4(Pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const h=u.getX(x),A=u.getX(x+1),w=lo(this,e,$r,c,h,A,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(m),h=lo(this,e,$r,c,x,p,g-1);h&&t.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const h=lo(this,e,$r,c,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=lo(this,e,$r,c,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lo(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Go.fromBufferAttribute(a,r),ko.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,ko,Ka,Df)>i)return;Ka.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ka);if(!(l<e.near||l>e.far))return{distance:l,point:Df.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Lf=new X,If=new X;class Gx extends Hx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Lf.fromBufferAttribute(t,r),If.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lf.distanceTo(If);e.setAttribute("lineDistance",new mn(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mp extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uf=new vt,hc=new Zc,co=new Ls,uo=new X;class Nf extends Ct{constructor(e=new an,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Uf.copy(r).invert(),hc.copy(e.ray).applyMatrix4(Uf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,x=m;g<x;g++){const p=l.getX(g);uo.fromBufferAttribute(f,p),Ff(uo,p,c,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,x=m;g<x;g++)uo.fromBufferAttribute(f,g),Ff(uo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ff(n,e,t,i,r,s,o){const a=hc.distanceSqToPoint(n);if(a<t){const c=new X;hc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ss extends Ot{constructor(e,t,i=Gn,r,s,o,a=Pt,c=Pt,l,u=ui,f=1){if(u!==ui&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kx extends Ss{constructor(e,t=Gn,i=Ki,r,s,o=Pt,a=Pt,c,l=ui){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gp extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const fo=new X,ho=new X,$a=new X,po=new dn;class Wx extends an{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Po*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:p,c:h}=po;if(x.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),h.fromBufferAttribute(a,l[2]),po.getNormal($a),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const w=(A+1)%3,E=f[A],R=f[w],I=po[u[A]],L=po[u[w]],V=`${E}_${R}`,S=`${R}_${E}`;S in d&&d[S]?($a.dot(d[S].normal)<=s&&(m.push(I.x,I.y,I.z),m.push(L.x,L.y,L.z)),d[S]=null):V in d||(d[V]={index0:l[A],index1:l[w],normal:$a.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:p}=d[g];fo.fromBufferAttribute(a,x),ho.fromBufferAttribute(a,p),m.push(fo.x,fo.y,fo.z),m.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new mn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ur extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const A=h*d-o;for(let w=0;w<l;w++){const E=w*f-s;g.push(E,-A,0),x.push(0,0,1),p.push(w/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<a;A++){const w=A+l*h,E=A+l*(h+1),R=A+1+l*(h+1),I=A+1+l*h;m.push(w,E,I),m.push(E,R,I)}this.setIndex(m),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xx extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Of extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qx extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yx extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Za={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Kx=new jx;class eu{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}eu.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr=new WeakMap;class $x extends eu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Za.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=pr.get(o);f===void 0&&(f=[],pr.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=xs("img");function c(){u(),t&&t(this);const f=pr.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onLoad&&m.onLoad(this)}pr.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),Za.remove(`image:${e}`);const d=pr.get(this)||[];for(let m=0;m<d.length;m++){const g=d[m];g.onError&&g.onError(f)}pr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Za.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Zx extends eu{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,o=new $x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class _p extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ja=new vt,Bf=new X,zf=new X;class Jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tu extends fp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qx extends Jx{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends _p{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ev extends _p{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tv extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hf(n,e,t,i){const r=nv(i);switch(t){case ep:return n*e;case np:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Dr:return n*e*2/r.components*r.byteLength;case qc:return n*e*2/r.components*r.byteLength;case tp:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case Yc:return n*e*4/r.components*r.byteLength;case Ao:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case zl:case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:case kl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sc:case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nv(n){switch(n){case sn:case $h:return{byteLength:1,components:1};case gs:case Zh:case ci:return{byteLength:2,components:1};case kc:case Wc:return{byteLength:2,components:4};case Gn:case Gc:case Un:return{byteLength:4,components:1};case Jh:case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wv=`#define PI 3.141592653589793
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
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cv=`vec3 transformedNormal = objectNormal;
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
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
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
}`,qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#endif`,$v=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,nS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iS=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
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
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hS=`#if defined( USE_POINTS_UV )
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
#endif`,pS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,US=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qS=`#ifdef USE_SKINNING
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
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,fM=`#define DISTANCE
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
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,MM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,bM=`#define NORMAL
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
}`,EM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,wM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,CM=`#define TOON
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
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,DM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,NM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:fv,batching_pars_vertex:dv,batching_vertex:hv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:yv,color_fragment:bv,color_pars_fragment:Ev,color_pars_vertex:Tv,color_vertex:Av,common:wv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Dv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Iv,colorspace_fragment:Uv,colorspace_pars_fragment:Nv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:$v,envmap_vertex:Vv,fog_vertex:Hv,fog_pars_vertex:Gv,fog_fragment:kv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:qv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:jv,lights_pars_begin:Kv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:eS,lights_physical_fragment:tS,lights_physical_pars_fragment:nS,lights_fragment_begin:iS,lights_fragment_maps:rS,lights_fragment_end:sS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:aS,logdepthbuf_pars_vertex:lS,logdepthbuf_vertex:cS,map_fragment:uS,map_pars_fragment:fS,map_particle_fragment:dS,map_particle_pars_fragment:hS,metalnessmap_fragment:pS,metalnessmap_pars_fragment:mS,morphinstance_vertex:gS,morphcolor_vertex:_S,morphnormal_vertex:xS,morphtarget_pars_vertex:vS,morphtarget_vertex:SS,normal_fragment_begin:MS,normal_fragment_maps:yS,normal_pars_fragment:bS,normal_pars_vertex:ES,normal_vertex:TS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:PS,opaque_fragment:DS,packing:LS,premultiplied_alpha_fragment:IS,project_vertex:US,dithering_fragment:NS,dithering_pars_fragment:FS,roughnessmap_fragment:OS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:VS,shadowmap_vertex:HS,shadowmask_pars_fragment:GS,skinbase_vertex:kS,skinning_pars_vertex:WS,skinning_vertex:XS,skinnormal_vertex:qS,specularmap_fragment:YS,specularmap_pars_fragment:jS,tonemapping_fragment:KS,tonemapping_pars_fragment:$S,transmission_fragment:ZS,transmission_pars_fragment:JS,uv_pars_fragment:QS,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distance_vert:fM,distance_frag:dM,equirect_vert:hM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:_M,meshbasic_frag:xM,meshlambert_vert:vM,meshlambert_frag:SM,meshmatcap_vert:MM,meshmatcap_frag:yM,meshnormal_vert:bM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:wM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:DM,points_frag:LM,shadow_vert:IM,shadow_frag:UM,sprite_vert:NM,sprite_frag:FM},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ln={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ln.physical={uniforms:Vt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const mo={r:0,b:0,g:0},Fi=new kn,OM=new vt;function BM(n,e,t,i,r,s,o){const a=new Je(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const R=g(w);R===null?h(a,c):R&&R.isColor&&(h(R,1),E=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,E){const R=g(E);R&&(R.isCubeTexture||R.mapping===sa)?(u===void 0&&(u=new gn(new Is(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ir(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(E.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Fi)),u.material.toneMapped=et.getTransfer(R.colorSpace)!==ct,(f!==R||d!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new gn(new Ur(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ir(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=R,d=R.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function h(w,E){w.getRGB(mo,up(n)),i.buffers.color.setClear(mo.r,mo.g,mo.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(a,c)},render:x,addToRenderList:p,dispose:A}}function zM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,U,K,k,ie){let ne=!1;const q=f(k,K,U);s!==q&&(s=q,l(s.object)),ne=m(T,k,K,ie),ne&&g(T,k,K,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,E(T,U,K,k),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function c(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,U,K){const k=K.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let ne=ie[U.id];ne===void 0&&(ne={},ie[U.id]=ne);let q=ne[k];return q===void 0&&(q=d(c()),ne[k]=q),q}function d(T){const U=[],K=[],k=[];for(let ie=0;ie<t;ie++)U[ie]=0,K[ie]=0,k[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:k,object:T,attributes:{},index:null}}function m(T,U,K,k){const ie=s.attributes,ne=U.attributes;let q=0;const B=K.getAttributes();for(const Z in B)if(B[Z].location>=0){const pe=ie[Z];let he=ne[Z];if(he===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),pe===void 0||pe.attribute!==he||he&&pe.data!==he.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function g(T,U,K,k){const ie={},ne=U.attributes;let q=0;const B=K.getAttributes();for(const Z in B)if(B[Z].location>=0){let pe=ne[Z];pe===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor));const he={};he.attribute=pe,pe&&pe.data&&(he.data=pe.data),ie[Z]=he,q++}s.attributes=ie,s.attributesNum=q,s.index=k}function x(){const T=s.newAttributes;for(let U=0,K=T.length;U<K;U++)T[U]=0}function p(T){h(T,0)}function h(T,U){const K=s.newAttributes,k=s.enabledAttributes,ie=s.attributeDivisors;K[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),ie[T]!==U&&(n.vertexAttribDivisor(T,U),ie[T]=U)}function A(){const T=s.newAttributes,U=s.enabledAttributes;for(let K=0,k=U.length;K<k;K++)U[K]!==T[K]&&(n.disableVertexAttribArray(K),U[K]=0)}function w(T,U,K,k,ie,ne,q){q===!0?n.vertexAttribIPointer(T,U,K,ie,ne):n.vertexAttribPointer(T,U,K,k,ie,ne)}function E(T,U,K,k){x();const ie=k.attributes,ne=K.getAttributes(),q=U.defaultAttributeValues;for(const B in ne){const Z=ne[B];if(Z.location>=0){let ge=ie[B];if(ge===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ge!==void 0){const pe=ge.normalized,he=ge.itemSize,Ue=e.get(ge);if(Ue===void 0)continue;const Be=Ue.buffer,Qe=Ue.type,tt=Ue.bytesPerElement,re=Qe===n.INT||Qe===n.UNSIGNED_INT||ge.gpuType===Gc;if(ge.isInterleavedBufferAttribute){const ce=ge.data,we=ce.stride,He=ge.offset;if(ce.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)h(Z.location+Ce,ce.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)p(Z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Ce=0;Ce<Z.locationSize;Ce++)w(Z.location+Ce,he/Z.locationSize,Qe,pe,we*tt,(He+he/Z.locationSize*Ce)*tt,re)}else{if(ge.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)h(Z.location+ce,ge.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ce=0;ce<Z.locationSize;ce++)p(Z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ce=0;ce<Z.locationSize;ce++)w(Z.location+ce,he/Z.locationSize,Qe,pe,he*tt,he/Z.locationSize*ce*tt,re)}}else if(q!==void 0){const pe=q[B];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Z.location,pe);break;case 3:n.vertexAttrib3fv(Z.location,pe);break;case 4:n.vertexAttrib4fv(Z.location,pe);break;default:n.vertexAttrib1fv(Z.location,pe)}}}}A()}function R(){V();for(const T in i){const U=i[T];for(const K in U){const k=U[K];for(const ie in k)u(k[ie].object),delete k[ie];delete U[K]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const U=i[T.id];for(const K in U){const k=U[K];for(const ie in k)u(k[ie].object),delete k[ie];delete U[K]}delete i[T.id]}function L(T){for(const U in i){const K=i[U];if(K[T.id]===void 0)continue;const k=K[T.id];for(const ie in k)u(k[ie].object),delete k[ie];delete K[T.id]}}function V(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function VM(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function HM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Mn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const V=L===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==sn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Un&&!V)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ge("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:E,maxSamples:R,samples:I}}function GM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const A=s?0:i,w=A*4;let E=h.clippingState||null;c.value=E,E=u(g,d,w,m);for(let R=0;R!==w;++R)E[R]=t[R];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const h=m+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let w=0,E=m;w!==x;++w,E+=4)o.copy(f[w]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function kM(n){let e=new WeakMap;function t(o,a){return a===Pl?o.mapping=Ki:a===Dl&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pl||a===Dl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new hp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ei=4,Gf=[.125,.215,.35,.446,.526,.582],Hi=20,WM=256,Zr=new tu,kf=new Je;let Qa=null,el=0,tl=0,nl=!1;const XM=new X;class Wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=XM}=s;Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:ci,format:Mn,colorSpace:Lr,depthBuffer:!1},r=Xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qM(s)),this._blurMaterial=jM(s,e,t),this._ggxMaterial=YM(s,e,t)}return r}_compileMaterial(e){const t=new gn(new an,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,r,s){const c=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(kf),f.toneMapping=Bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new Is,new Jc({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let h=!1;const A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,h=!0):(p.color.copy(kf),h=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const R=this._cubeSize;mr(r,E*R,w>2?R:0,R,R),f.setRenderTarget(r),h&&f.render(x,c),f.render(e,c)}f.toneMapping=m,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;mr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,m=f*d,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-Ei?i-g+Ei:0),h=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,mr(s,p,h,3*x,2*x),r.setRenderTarget(s),r.render(a,Zr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,mr(e,p,h,3*x,2*x),r.setRenderTarget(e),r.render(a,Zr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):Hi;p>Hi&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const h=[];let A=0;for(let L=0;L<Hi;++L){const V=L/x,S=Math.exp(-V*V/2);h.push(S),L===0?A+=S:L<p&&(A+=2*S)}for(let L=0;L<h.length;L++)h[L]=h[L]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const E=this._sizeLods[r],R=3*E*(r>w-Ei?r-w+Ei:0),I=4*(this._cubeSize-E);mr(t,R,I,3*E,2*E),c.setRenderTarget(t),c.render(f,Zr)}}function qM(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+Gf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Ei?c=Gf[o-n+Ei-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,h=1,A=new Float32Array(x*g*m),w=new Float32Array(p*g*m),E=new Float32Array(h*g*m);for(let I=0;I<m;I++){const L=I%3*2/3-1,V=I>2?0:-1,S=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];A.set(S,x*g*I),w.set(d,p*g*I);const T=[I,I,I,I,I,I];E.set(T,h*g*I)}const R=new an;R.setAttribute("position",new bn(A,x)),R.setAttribute("uv",new bn(w,p)),R.setAttribute("faceIndex",new bn(E,h)),i.push(new gn(R,null)),r>Ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xf(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YM(n,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function jM(n,e,t){const i=new Float32Array(Hi),r=new X(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qf(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yf(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}function KM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pl||c===Dl,u=c===Ki||c===Pr;if(l||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Wf(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Wf(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $M(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vs("WebGLRenderer: "+i+" extension not supported."),r}}}function ZM(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let w=0,E=A.length;w<E;w+=3){const R=A[w+0],I=A[w+1],L=A[w+2];d.push(R,I,I,L,L,R)}}else if(g!==void 0){const A=g.array;x=g.version;for(let w=0,E=A.length/3-1;w<E;w+=3){const R=w+0,I=w+1,L=w+2;d.push(R,I,I,L,L,R)}}else return;const p=new(rp(d)?cp:lp)(d,1);p.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function JM(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(d,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let h=0;for(let A=0;A<g;A++)h+=m[A]*x[A];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ey(n,e,t){const i=new WeakMap,r=new bt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var m=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let R=a.attributes.position.count*E,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*I*4*f),V=new sp(L,R,I,f);V.type=Un,V.needsUpdate=!0;const S=E*4;for(let U=0;U<f;U++){const K=h[U],k=A[U],ie=w[U],ne=R*I*4*U;for(let q=0;q<K.count;q++){const B=q*S;g===!0&&(r.fromBufferAttribute(K,q),L[ne+B+0]=r.x,L[ne+B+1]=r.y,L[ne+B+2]=r.z,L[ne+B+3]=0),x===!0&&(r.fromBufferAttribute(k,q),L[ne+B+4]=r.x,L[ne+B+5]=r.y,L[ne+B+6]=r.z,L[ne+B+7]=0),p===!0&&(r.fromBufferAttribute(ie,q),L[ne+B+8]=r.x,L[ne+B+9]=r.y,L[ne+B+10]=r.z,L[ne+B+11]=ie.itemSize===4?r.w:1)}}d={count:f,texture:V,size:new rt(R,I)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function ty(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ny={[Gh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function iy(n,e,t,i,r){const s=new zn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new zn(e,t,{type:ci,depthBuffer:!1,stencilBuffer:!1}),a=new an;a.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mn([0,2,0,0,2,0],2));const c=new Xx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new gn(a,c),u=new tu(-1,1,1,-1,0,1);let f=null,d=null,m=!1,g,x=null,p=[],h=!1;this.setSize=function(A,w){s.setSize(A,w),o.setSize(A,w);for(let E=0;E<p.length;E++){const R=p[E];R.setSize&&R.setSize(A,w)}},this.setEffects=function(A){p=A,h=p.length>0&&p[0].isRenderPass===!0;const w=s.width,E=s.height;for(let R=0;R<p.length;R++){const I=p[R];I.setSize&&I.setSize(w,E)}},this.begin=function(A,w){if(m||A.toneMapping===Bn&&p.length===0)return!1;if(x=w,w!==null){const E=w.width,R=w.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return h===!1&&A.setRenderTarget(s),g=A.toneMapping,A.toneMapping=Bn,!0},this.hasRenderPass=function(){return h},this.end=function(A,w){A.toneMapping=g,m=!0;let E=s,R=o;for(let I=0;I<p.length;I++){const L=p[I];if(L.enabled!==!1&&(L.render(A,R,E,w),L.needsSwap!==!1)){const V=E;E=R,R=V}}if(f!==A.outputColorSpace||d!==A.toneMapping){f=A.outputColorSpace,d=A.toneMapping,c.defines={},et.getTransfer(f)===ct&&(c.defines.SRGB_TRANSFER="");const I=ny[d];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(x),A.render(l,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const vp=new Ot,pc=new Ss(1,1),Sp=new sp,Mp=new xx,yp=new dp,jf=[],Kf=[],$f=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jf[r];if(s===void 0&&(s=new Float32Array(r),jf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),wt(t,i)}}function cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),wt(t,i)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;$f.set(i),n.uniformMatrix4fv(this.addr,!1,$f),wt(t,i)}}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function my(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function vy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?Kc:jc,s=pc):s=vp,t.setTexture2D(e||s,r)}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mp,r)}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yp,r)}function yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sp,r)}function by(n){switch(n){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return hy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return yy}}function Ey(n,e){n.uniform1fv(this.addr,e)}function Ty(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ay(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function wy(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ry(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cy(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Py(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dy(n,e){n.uniform1iv(this.addr,e)}function Ly(n,e){n.uniform2iv(this.addr,e)}function Iy(n,e){n.uniform3iv(this.addr,e)}function Uy(n,e){n.uniform4iv(this.addr,e)}function Ny(n,e){n.uniform1uiv(this.addr,e)}function Fy(n,e){n.uniform2uiv(this.addr,e)}function Oy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function zy(n,e,t){const i=this.cache,r=e.length,s=aa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=pc:o=vp;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Vy(n,e,t){const i=this.cache,r=e.length,s=aa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mp,s[o])}function Hy(n,e,t){const i=this.cache,r=e.length,s=aa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yp,s[o])}function Gy(n,e,t){const i=this.cache,r=e.length,s=aa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sp,s[o])}function ky(n){switch(n){case 5126:return Ey;case 35664:return Ty;case 35665:return Ay;case 35666:return wy;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Ly;case 35668:case 35672:return Iy;case 35669:case 35673:return Uy;case 5125:return Ny;case 36294:return Fy;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}class Wy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=by(t.type)}}class Xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ky(t.type)}}class qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Qf(n,e){n.seq.push(e),n.map[e.id]=e}function Yy(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Qf(t,l===void 0?new Wy(a,n,e):new Xy(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new qy(a),Qf(t,f)),t=f}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Yy(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jy=37297;let Ky=0;function $y(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const td=new qe;function Zy(n){et._getMatrix(td,et.workingColorSpace,n);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$y(n.getShaderSource(e),a)}else return s}function Jy(n,e){const t=Zy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Qy={[Gh]:"Linear",[kh]:"Reinhard",[Wh]:"Cineon",[Xh]:"ACESFilmic",[Yh]:"AgX",[jh]:"Neutral",[qh]:"Custom"};function eb(n,e){const t=Qy[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new X;function tb(){et.getLuminanceCoefficients(go);const n=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function ib(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ts(n){return n!==""}function id(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(sb,ab)}const ob=new Map;function ab(n,e){let t=je[e];if(t===void 0){const i=ob.get(e);if(i!==void 0)t=je[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(n){return n.replace(lb,cb)}function cb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function od(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const ub={[To]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function fb(n){return ub[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const db={[Ki]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function hb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":db[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const pb={[Pr]:"ENVMAP_MODE_REFRACTION"};function mb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gb={[Hh]:"ENVMAP_BLENDING_MULTIPLY",[Q0]:"ENVMAP_BLENDING_MIX",[ex]:"ENVMAP_BLENDING_ADD"};function _b(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gb[n.combine]||"ENVMAP_BLENDING_NONE"}function xb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fb(t),l=hb(t),u=mb(t),f=_b(t),d=xb(t),m=nb(t),g=ib(s),x=r.createProgram();let p,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),h.length>0&&(h+=`
`)):(p=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),h=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),o=mc(o),o=id(o,t),o=rd(o,t),a=mc(a),a=id(a,t),a=rd(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=A+p+o,E=A+h+a,R=ed(r,r.VERTEX_SHADER,w),I=ed(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,I),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(U){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(R)||"",ie=r.getShaderInfoLog(I)||"",ne=K.trim(),q=k.trim(),B=ie.trim();let Z=!0,ge=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,I);else{const pe=nd(r,R,"vertex"),he=nd(r,I,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ne+`
`+pe+`
`+he)}else ne!==""?Ge("WebGLProgram: Program Info Log:",ne):(q===""||B==="")&&(ge=!1);ge&&(U.diagnostics={runnable:Z,programLog:ne,vertexShader:{log:q,prefix:p},fragmentShader:{log:B,prefix:h}})}r.deleteShader(R),r.deleteShader(I),V=new Do(r,x),S=rb(r,x)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,jy)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=I,this}let Sb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yb(e),t.set(e,i)),i}}class yb{constructor(e){this.id=Sb++,this.code=e,this.usedTimes=0}}function bb(n,e,t,i,r,s,o){const a=new op,c=new Mb,l=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,T,U,K,k){const ie=K.fog,ne=k.geometry,q=S.isMeshStandardMaterial?K.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),Z=B&&B.mapping===sa?B.image.height:null,ge=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&Ge("WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const pe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,he=pe!==void 0?pe.length:0;let Ue=0;ne.morphAttributes.position!==void 0&&(Ue=1),ne.morphAttributes.normal!==void 0&&(Ue=2),ne.morphAttributes.color!==void 0&&(Ue=3);let Be,Qe,tt,re;if(ge){const at=Ln[ge];Be=at.vertexShader,Qe=at.fragmentShader}else Be=S.vertexShader,Qe=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),re=c.getFragmentShaderID(S);const ce=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,$e=!!S.map,C=!!S.matcap,y=!!B,P=!!S.aoMap,O=!!S.lightMap,z=!!S.bumpMap,J=!!S.normalMap,b=!!S.displacementMap,ae=!!S.emissiveMap,se=!!S.metalnessMap,Q=!!S.roughnessMap,te=S.anisotropy>0,v=S.clearcoat>0,_=S.dispersion>0,D=S.iridescence>0,W=S.sheen>0,ee=S.transmission>0,G=te&&!!S.anisotropyMap,ye=v&&!!S.clearcoatMap,fe=v&&!!S.clearcoatNormalMap,be=v&&!!S.clearcoatRoughnessMap,Le=D&&!!S.iridescenceMap,ue=D&&!!S.iridescenceThicknessMap,_e=W&&!!S.sheenColorMap,Se=W&&!!S.sheenRoughnessMap,Re=!!S.specularMap,xe=!!S.specularColorMap,We=!!S.specularIntensityMap,N=ee&&!!S.transmissionMap,Ae=ee&&!!S.thicknessMap,me=!!S.gradientMap,Pe=!!S.alphaMap,de=S.alphaTest>0,le=!!S.alphaHash,ve=!!S.extensions;let ke=Bn;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ht={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:Qe,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Lr,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:C,envMap:y,envMapMode:y&&B.mapping,envMapCubeUVHeight:Z,aoMap:P,lightMap:O,bumpMap:z,normalMap:J,displacementMap:b,emissiveMap:ae,normalMapObjectSpace:J&&S.normalMapType===ix,normalMapTangentSpace:J&&S.normalMapType===ip,metalnessMap:se,roughnessMap:Q,anisotropy:te,anisotropyMap:G,clearcoat:v,clearcoatMap:ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,dispersion:_,iridescence:D,iridescenceMap:Le,iridescenceThicknessMap:ue,sheen:W,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:Re,specularColorMap:xe,specularIntensityMap:We,transmission:ee,transmissionMap:N,thicknessMap:Ae,gradientMap:me,opaque:S.transparent===!1&&S.blending===br&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:le,combine:S.combine,mapUv:$e&&x(S.map.channel),aoMapUv:P&&x(S.aoMap.channel),lightMapUv:O&&x(S.lightMap.channel),bumpMapUv:z&&x(S.bumpMap.channel),normalMapUv:J&&x(S.normalMap.channel),displacementMapUv:b&&x(S.displacementMap.channel),emissiveMapUv:ae&&x(S.emissiveMap.channel),metalnessMapUv:se&&x(S.metalnessMap.channel),roughnessMapUv:Q&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:Re&&x(S.specularMap.channel),specularColorMapUv:xe&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:Ae&&x(S.thicknessMap.channel),alphaMapUv:Pe&&x(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(J||te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ne.attributes.uv&&($e||Pe),fog:!!ie,useFog:S.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:k.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===In,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)T.push(U),T.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(A(T,S),w(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function A(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function w(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const T=g[S.type];let U;if(T){const K=Ln[T];U=Dx.clone(K.uniforms)}else U=S.uniforms;return U}function R(S,T){let U=f.get(T);return U!==void 0?++U.usedTimes:(U=new vb(n,T,S,s),u.push(U),f.set(T,U)),U}function I(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function L(S){c.remove(S)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:R,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:V}}function Eb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ld(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,g,x,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function a(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Tb),i.length>1&&i.sort(d||ad),r.length>1&&r.sort(d||ad)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Ab(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ld,n.set(i,[o])):r>=s.length?(o=new ld,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function Rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cb=0;function Pb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Db(n){const e=new wb,t=Rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new vt,o=new vt;function a(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,A=0,w=0,E=0,R=0,I=0,L=0;l.sort(Pb);for(let S=0,T=l.length;S<T;S++){const U=l[S],K=U.color,k=U.intensity,ie=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Dr?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=K.r*k,f+=K.g*k,d+=K.b*k;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],k);L++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const B=U.shadow,Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=U.shadow.matrix,A++}i.directional[m]=q,m++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(K).multiplyScalar(k),q.distance=ie,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[x]=q;const B=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,B.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[x]=B.matrix,U.castShadow){const Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=ne,E++}x++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(K).multiplyScalar(k),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=q,p++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const B=U.shadow,Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=U.shadow.matrix,w++}i.point[g]=q,g++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(k),q.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const V=i.hash;(V.directionalLength!==m||V.pointLength!==g||V.spotLength!==x||V.rectAreaLength!==p||V.hemiLength!==h||V.numDirectionalShadows!==A||V.numPointShadows!==w||V.numSpotShadows!==E||V.numSpotMaps!==R||V.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+R-I,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,V.directionalLength=m,V.pointLength=g,V.spotLength=x,V.rectAreaLength=p,V.hemiLength=h,V.numDirectionalShadows=A,V.numPointShadows=w,V.numSpotShadows=E,V.numSpotMaps=R,V.numLightProbes=L,i.version=Cb++)}function c(l,u){let f=0,d=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const w=l[h];if(w.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(w.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:i}}function cd(n){const e=new Db(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Lb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cd(n),e.set(r,[a])):s>=o.length?(a=new cd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Fb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ud=new vt,Jr=new X,rl=new X;function Ob(n,e,t){let i=new Qc;const r=new rt,s=new rt,o=new bt,a=new qx,c=new Yx,l={},u=t.maxTextureSize,f={[li]:Zt,[Zt]:li,[In]:In},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Ib,fragmentShader:Ub}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let h=this.type;this.render=function(I,L,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;I.type===Vh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=To);const S=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),K=n.state;K.setBlending(ii),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const k=h!==this.type;k&&L.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(ne=>ne.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,ne=I.length;ie<ne;ie++){const q=I[ie],B=q.shadow;if(B===void 0){Ge("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===es){if(q.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new zn(r.x,r.y,{format:Dr,type:ci,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Ss(r.x,r.y,Un),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt}else{q.isPointLight?(B.map=new hp(r.x),B.map.depthTexture=new kx(r.x,Gn)):(B.map=new zn(r.x,r.y),B.map.depthTexture=new Ss(r.x,r.y,Gn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=ui;const pe=n.state.buffers.depth.getReversed();this.type===To?(B.map.depthTexture.compareFunction=pe?Kc:jc,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt)}B.camera.updateProjectionMatrix()}const ge=B.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ge;pe++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(B.map),n.clear());const he=B.getViewport(pe);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),K.viewport(o)}if(q.isPointLight){const he=B.camera,Ue=B.matrix,Be=q.distance||he.far;Be!==he.far&&(he.far=Be,he.updateProjectionMatrix()),Jr.setFromMatrixPosition(q.matrixWorld),he.position.copy(Jr),rl.copy(he.position),rl.add(Nb[pe]),he.up.copy(Fb[pe]),he.lookAt(rl),he.updateMatrixWorld(),Ue.makeTranslation(-Jr.x,-Jr.y,-Jr.z),ud.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ud,he.coordinateSystem,he.reversedDepth)}else B.updateMatrices(q);i=B.getFrustum(),E(L,V,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===es&&A(B,V),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(S,T,U)};function A(I,L){const V=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zn(r.x,r.y,{format:Dr,type:ci})),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(L,null,V,d,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(L,null,V,m,x,null)}function w(I,L,V,S){let T=null;const U=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)T=U;else if(T=V.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=T.uuid,k=L.uuid;let ie=l[K];ie===void 0&&(ie={},l[K]=ie);let ne=ie[k];ne===void 0&&(ne=T.clone(),ie[k]=ne,L.addEventListener("dispose",R)),T=ne}if(T.visible=L.visible,T.wireframe=L.wireframe,S===es?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:f[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=n.properties.get(T);K.light=V}return T}function E(I,L,V,S,T){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===es)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const k=e.update(I),ie=I.material;if(Array.isArray(ie)){const ne=k.groups;for(let q=0,B=ne.length;q<B;q++){const Z=ne[q],ge=ie[Z.materialIndex];if(ge&&ge.visible){const pe=w(I,ge,S,T);I.onBeforeShadow(n,I,L,V,k,pe,Z),n.renderBufferDirect(V,null,k,pe,I,Z),I.onAfterShadow(n,I,L,V,k,pe,Z)}}}else if(ie.visible){const ne=w(I,ie,S,T);I.onBeforeShadow(n,I,L,V,k,ne,null),n.renderBufferDirect(V,null,k,ne,I,null),I.onAfterShadow(n,I,L,V,k,ne,null)}}const K=I.children;for(let k=0,ie=K.length;k<ie;k++)E(K[k],L,V,S,T)}function R(I){I.target.removeEventListener("dispose",R);for(const V in l){const S=l[V],T=I.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const Bb={[bl]:El,[Tl]:Rl,[Al]:Cl,[Cr]:wl,[El]:bl,[Rl]:Tl,[Cl]:Al,[wl]:Cr};function zb(n,e){function t(){let N=!1;const Ae=new bt;let me=null;const Pe=new bt(0,0,0,0);return{setMask:function(de){me!==de&&!N&&(n.colorMask(de,de,de,de),me=de)},setLocked:function(de){N=de},setClear:function(de,le,ve,ke,ht){ht===!0&&(de*=ke,le*=ke,ve*=ke),Ae.set(de,le,ve,ke),Pe.equals(Ae)===!1&&(n.clearColor(de,le,ve,ke),Pe.copy(Ae))},reset:function(){N=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let N=!1,Ae=!1,me=null,Pe=null,de=null;return{setReversed:function(le){if(Ae!==le){const ve=e.get("EXT_clip_control");le?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const ke=de;de=null,this.setClear(ke)}},getReversed:function(){return Ae},setTest:function(le){le?ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(le){me!==le&&!N&&(n.depthMask(le),me=le)},setFunc:function(le){if(Ae&&(le=Bb[le]),Pe!==le){switch(le){case bl:n.depthFunc(n.NEVER);break;case El:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Rl:n.depthFunc(n.GREATER);break;case Cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=le}},setLocked:function(le){N=le},setClear:function(le){de!==le&&(Ae&&(le=1-le),n.clearDepth(le),de=le)},reset:function(){N=!1,me=null,Pe=null,de=null,Ae=!1}}}function r(){let N=!1,Ae=null,me=null,Pe=null,de=null,le=null,ve=null,ke=null,ht=null;return{setTest:function(at){N||(at?ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(at){Ae!==at&&!N&&(n.stencilMask(at),Ae=at)},setFunc:function(at,An,Xn){(me!==at||Pe!==An||de!==Xn)&&(n.stencilFunc(at,An,Xn),me=at,Pe=An,de=Xn)},setOp:function(at,An,Xn){(le!==at||ve!==An||ke!==Xn)&&(n.stencilOp(at,An,Xn),le=at,ve=An,ke=Xn)},setLocked:function(at){N=at},setClear:function(at){ht!==at&&(n.clearStencil(at),ht=at)},reset:function(){N=!1,Ae=null,me=null,Pe=null,de=null,le=null,ve=null,ke=null,ht=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,A=null,w=null,E=null,R=null,I=null,L=new Je(0,0,0),V=0,S=!1,T=null,U=null,K=null,k=null,ie=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=B>=2);let ge=null,pe={};const he=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Be=new bt().fromArray(he),Qe=new bt().fromArray(Ue);function tt(N,Ae,me,Pe){const de=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<me;ve++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Ae+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return le}const re={};re[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(Cr),z(!1),J(sf),ce(n.CULL_FACE),P(ii);function ce(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function we(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function He(N,Ae){return f[N]!==Ae?(n.bindFramebuffer(N,Ae),f[N]=Ae,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ce(N,Ae){let me=m,Pe=!1;if(N){me=d.get(Ae),me===void 0&&(me=[],d.set(Ae,me));const de=N.textures;if(me.length!==de.length||me[0]!==n.COLOR_ATTACHMENT0){for(let le=0,ve=de.length;le<ve;le++)me[le]=n.COLOR_ATTACHMENT0+le;me.length=de.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function $e(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const C={[Vi]:n.FUNC_ADD,[F0]:n.FUNC_SUBTRACT,[O0]:n.FUNC_REVERSE_SUBTRACT};C[B0]=n.MIN,C[z0]=n.MAX;const y={[V0]:n.ZERO,[H0]:n.ONE,[G0]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[j0]:n.SRC_ALPHA_SATURATE,[q0]:n.DST_COLOR,[W0]:n.DST_ALPHA,[k0]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Y0]:n.ONE_MINUS_DST_COLOR,[X0]:n.ONE_MINUS_DST_ALPHA,[K0]:n.CONSTANT_COLOR,[$0]:n.ONE_MINUS_CONSTANT_COLOR,[Z0]:n.CONSTANT_ALPHA,[J0]:n.ONE_MINUS_CONSTANT_ALPHA};function P(N,Ae,me,Pe,de,le,ve,ke,ht,at){if(N===ii){x===!0&&(we(n.BLEND),x=!1);return}if(x===!1&&(ce(n.BLEND),x=!0),N!==N0){if(N!==p||at!==S){if((h!==Vi||E!==Vi)&&(n.blendEquation(n.FUNC_ADD),h=Vi,E=Vi),at)switch(N){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case of:n.blendFunc(n.ONE,n.ONE);break;case af:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",N);break}else switch(N){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case of:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case af:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lf:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",N);break}A=null,w=null,R=null,I=null,L.set(0,0,0),V=0,p=N,S=at}return}de=de||Ae,le=le||me,ve=ve||Pe,(Ae!==h||de!==E)&&(n.blendEquationSeparate(C[Ae],C[de]),h=Ae,E=de),(me!==A||Pe!==w||le!==R||ve!==I)&&(n.blendFuncSeparate(y[me],y[Pe],y[le],y[ve]),A=me,w=Pe,R=le,I=ve),(ke.equals(L)===!1||ht!==V)&&(n.blendColor(ke.r,ke.g,ke.b,ht),L.copy(ke),V=ht),p=N,S=!1}function O(N,Ae){N.side===In?we(n.CULL_FACE):ce(n.CULL_FACE);let me=N.side===Zt;Ae&&(me=!me),z(me),N.blending===br&&N.transparent===!1?P(ii):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Pe=N.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(N){T!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),T=N)}function J(N){N!==I0?(ce(n.CULL_FACE),N!==U&&(N===sf?n.cullFace(n.BACK):N===U0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),U=N}function b(N){N!==K&&(q&&n.lineWidth(N),K=N)}function ae(N,Ae,me){N?(ce(n.POLYGON_OFFSET_FILL),(k!==Ae||ie!==me)&&(n.polygonOffset(Ae,me),k=Ae,ie=me)):we(n.POLYGON_OFFSET_FILL)}function se(N){N?ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Q(N){N===void 0&&(N=n.TEXTURE0+ne-1),ge!==N&&(n.activeTexture(N),ge=N)}function te(N,Ae,me){me===void 0&&(ge===null?me=n.TEXTURE0+ne-1:me=ge);let Pe=pe[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},pe[me]=Pe),(Pe.type!==N||Pe.texture!==Ae)&&(ge!==me&&(n.activeTexture(me),ge=me),n.bindTexture(N,Ae||re[N]),Pe.type=N,Pe.texture=Ae)}function v(){const N=pe[ge];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function W(){try{n.texSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function fe(){try{n.texStorage2D(...arguments)}catch(N){it("WebGLState:",N)}}function be(){try{n.texStorage3D(...arguments)}catch(N){it("WebGLState:",N)}}function Le(){try{n.texImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ue(){try{n.texImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function _e(N){Be.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Be.copy(N))}function Se(N){Qe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Qe.copy(N))}function Re(N,Ae){let me=l.get(Ae);me===void 0&&(me=new WeakMap,l.set(Ae,me));let Pe=me.get(N);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ae,N.name),me.set(N,Pe))}function xe(N,Ae){const Pe=l.get(Ae).get(N);c.get(Ae)!==Pe&&(n.uniformBlockBinding(Ae,Pe,N.__bindingPointIndex),c.set(Ae,Pe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,pe={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,A=null,w=null,E=null,R=null,I=null,L=new Je(0,0,0),V=0,S=!1,T=null,U=null,K=null,k=null,ie=null,Be.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:we,bindFramebuffer:He,drawBuffers:Ce,useProgram:$e,setBlending:P,setMaterial:O,setFlipSided:z,setCullFace:J,setLineWidth:b,setPolygonOffset:ae,setScissorTest:se,activeTexture:Q,bindTexture:te,unbindTexture:v,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Le,texImage3D:ue,updateUBOMapping:Re,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:be,texSubImage2D:W,texSubImage3D:ee,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:_e,viewport:Se,reset:We}}function Vb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,_){return m?new OffscreenCanvas(v,_):xs("canvas")}function x(v,_,D){let W=1;const ee=te(v);if((ee.width>D||ee.height>D)&&(W=D/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const G=Math.floor(W*ee.width),ye=Math.floor(W*ee.height);f===void 0&&(f=g(G,ye));const fe=_?g(G,ye):f;return fe.width=G,fe.height=ye,fe.getContext("2d").drawImage(v,0,0,G,ye),Ge("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+G+"x"+ye+")."),fe}else return"data"in v&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),v;return v}function p(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(v,_,D,W,ee=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let G=_;if(_===n.RED&&(D===n.FLOAT&&(G=n.R32F),D===n.HALF_FLOAT&&(G=n.R16F),D===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.R8UI),D===n.UNSIGNED_SHORT&&(G=n.R16UI),D===n.UNSIGNED_INT&&(G=n.R32UI),D===n.BYTE&&(G=n.R8I),D===n.SHORT&&(G=n.R16I),D===n.INT&&(G=n.R32I)),_===n.RG&&(D===n.FLOAT&&(G=n.RG32F),D===n.HALF_FLOAT&&(G=n.RG16F),D===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RG8UI),D===n.UNSIGNED_SHORT&&(G=n.RG16UI),D===n.UNSIGNED_INT&&(G=n.RG32UI),D===n.BYTE&&(G=n.RG8I),D===n.SHORT&&(G=n.RG16I),D===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGB8UI),D===n.UNSIGNED_SHORT&&(G=n.RGB16UI),D===n.UNSIGNED_INT&&(G=n.RGB32UI),D===n.BYTE&&(G=n.RGB8I),D===n.SHORT&&(G=n.RGB16I),D===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),D===n.UNSIGNED_INT&&(G=n.RGBA32UI),D===n.BYTE&&(G=n.RGBA8I),D===n.SHORT&&(G=n.RGBA16I),D===n.INT&&(G=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),_===n.RGBA){const ye=ee?Vo:et.getTransfer(W);D===n.FLOAT&&(G=n.RGBA32F),D===n.HALF_FLOAT&&(G=n.RGBA16F),D===n.UNSIGNED_BYTE&&(G=ye===ct?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(v,_){let D;return v?_===null||_===Gn||_===_s?D=n.DEPTH24_STENCIL8:_===Un?D=n.DEPTH32F_STENCIL8:_===gs&&(D=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gn||_===_s?D=n.DEPTH_COMPONENT24:_===Un?D=n.DEPTH_COMPONENT32F:_===gs&&(D=n.DEPTH_COMPONENT16),D}function R(v,_){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==Pt&&v.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function I(v){const _=v.target;_.removeEventListener("dispose",I),V(_),_.isVideoTexture&&u.delete(_)}function L(v){const _=v.target;_.removeEventListener("dispose",L),T(_)}function V(v){const _=i.get(v);if(_.__webglInit===void 0)return;const D=v.source,W=d.get(D);if(W){const ee=W[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(v),Object.keys(W).length===0&&d.delete(D)}i.remove(v)}function S(v){const _=i.get(v);n.deleteTexture(_.__webglTexture);const D=v.source,W=d.get(D);delete W[_.__cacheKey],o.memory.textures--}function T(v){const _=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ee=0;ee<_.__webglFramebuffer[W].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[W][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=v.textures;for(let W=0,ee=D.length;W<ee;W++){const G=i.get(D[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(D[W])}i.remove(v)}let U=0;function K(){U=0}function k(){const v=U;return v>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),U+=1,v}function ie(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function ne(v,_){const D=i.get(v);if(v.isVideoTexture&&se(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&D.__version!==v.version){const W=v.image;if(W===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{re(D,v,_);return}}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function q(v,_){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){re(D,v,_);return}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function B(v,_){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){re(D,v,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(v,_){const D=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&D.__version!==v.version){ce(D,v,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const ge={[Ll]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},pe={[Pt]:n.NEAREST,[tx]:n.NEAREST_MIPMAP_NEAREST,[Gs]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},he={[rx]:n.NEVER,[cx]:n.ALWAYS,[sx]:n.LESS,[jc]:n.LEQUAL,[ox]:n.EQUAL,[Kc]:n.GEQUAL,[ax]:n.GREATER,[lx]:n.NOTEQUAL};function Ue(v,_){if(_.type===Un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Nt||_.magFilter===Ta||_.magFilter===Gs||_.magFilter===ki||_.minFilter===Nt||_.minFilter===Ta||_.minFilter===Gs||_.minFilter===ki)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ge[_.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ge[_.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ge[_.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,pe[_.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pt||_.minFilter!==Gs&&_.minFilter!==ki||_.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Be(v,_){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",I));const W=_.source;let ee=d.get(W);ee===void 0&&(ee={},d.set(W,ee));const G=ie(_);if(G!==v.__cacheKey){ee[G]===void 0&&(ee[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ee[G].usedTimes++;const ye=ee[v.__cacheKey];ye!==void 0&&(ee[v.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),v.__cacheKey=G,v.__webglTexture=ee[G].texture}return D}function Qe(v,_,D){return Math.floor(Math.floor(v/D)/_)}function tt(v,_,D,W){const G=v.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,W,_.data);else{G.sort((ue,_e)=>ue.start-_e.start);let ye=0;for(let ue=1;ue<G.length;ue++){const _e=G[ye],Se=G[ue],Re=_e.start+_e.count,xe=Qe(Se.start,_.width,4),We=Qe(_e.start,_.width,4);Se.start<=Re+1&&xe===We&&Qe(Se.start+Se.count-1,_.width,4)===xe?_e.count=Math.max(_e.count,Se.start+Se.count-_e.start):(++ye,G[ye]=Se)}G.length=ye+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ue=0,_e=G.length;ue<_e;ue++){const Se=G[ue],Re=Math.floor(Se.start/4),xe=Math.ceil(Se.count/4),We=Re%_.width,N=Math.floor(Re/_.width),Ae=xe,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,We,N,Ae,me,D,W,_.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function re(v,_,D){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const ee=Be(v,_),G=_.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+D);const ye=i.get(G);if(G.version!==ye.__version||ee===!0){t.activeTexture(n.TEXTURE0+D);const fe=et.getPrimaries(et.workingColorSpace),be=_.colorSpace===bi?null:et.getPrimaries(_.colorSpace),Le=_.colorSpace===bi||fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ue=x(_.image,!1,r.maxTextureSize);ue=Q(_,ue);const _e=s.convert(_.format,_.colorSpace),Se=s.convert(_.type);let Re=w(_.internalFormat,_e,Se,_.colorSpace,_.isVideoTexture);Ue(W,_);let xe;const We=_.mipmaps,N=_.isVideoTexture!==!0,Ae=ye.__version===void 0||ee===!0,me=G.dataReady,Pe=R(_,ue);if(_.isDepthTexture)Re=E(_.format===Wi,_.type),Ae&&(N?t.texStorage2D(n.TEXTURE_2D,1,Re,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Re,ue.width,ue.height,0,_e,Se,null));else if(_.isDataTexture)if(We.length>0){N&&Ae&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,We[0].width,We[0].height);for(let de=0,le=We.length;de<le;de++)xe=We[de],N?me&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,_e,Se,xe.data):t.texImage2D(n.TEXTURE_2D,de,Re,xe.width,xe.height,0,_e,Se,xe.data);_.generateMipmaps=!1}else N?(Ae&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,ue.width,ue.height),me&&tt(_,ue,_e,Se)):t.texImage2D(n.TEXTURE_2D,0,Re,ue.width,ue.height,0,_e,Se,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,We[0].width,We[0].height,ue.depth);for(let de=0,le=We.length;de<le;de++)if(xe=We[de],_.format!==Mn)if(_e!==null)if(N){if(me)if(_.layerUpdates.size>0){const ve=Hf(xe.width,xe.height,_.format,_.type);for(const ke of _.layerUpdates){const ht=xe.data.subarray(ke*ve/xe.data.BYTES_PER_ELEMENT,(ke+1)*ve/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ke,xe.width,xe.height,1,_e,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,ue.depth,_e,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Re,xe.width,xe.height,ue.depth,0,xe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,ue.depth,_e,Se,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Re,xe.width,xe.height,ue.depth,0,_e,Se,xe.data)}else{N&&Ae&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,We[0].width,We[0].height);for(let de=0,le=We.length;de<le;de++)xe=We[de],_.format!==Mn?_e!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Re,xe.width,xe.height,0,xe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?me&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,_e,Se,xe.data):t.texImage2D(n.TEXTURE_2D,de,Re,xe.width,xe.height,0,_e,Se,xe.data)}else if(_.isDataArrayTexture)if(N){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,ue.width,ue.height,ue.depth),me)if(_.layerUpdates.size>0){const de=Hf(ue.width,ue.height,_.format,_.type);for(const le of _.layerUpdates){const ve=ue.data.subarray(le*de/ue.data.BYTES_PER_ELEMENT,(le+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,_e,Se,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,_e,Se,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,_e,Se,ue.data);else if(_.isData3DTexture)N?(Ae&&t.texStorage3D(n.TEXTURE_3D,Pe,Re,ue.width,ue.height,ue.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,_e,Se,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,_e,Se,ue.data);else if(_.isFramebufferTexture){if(Ae)if(N)t.texStorage2D(n.TEXTURE_2D,Pe,Re,ue.width,ue.height);else{let de=ue.width,le=ue.height;for(let ve=0;ve<Pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Re,de,le,0,_e,Se,null),de>>=1,le>>=1}}else if(We.length>0){if(N&&Ae){const de=te(We[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Re,de.width,de.height)}for(let de=0,le=We.length;de<le;de++)xe=We[de],N?me&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e,Se,xe):t.texImage2D(n.TEXTURE_2D,de,Re,_e,Se,xe);_.generateMipmaps=!1}else if(N){if(Ae){const de=te(ue);t.texStorage2D(n.TEXTURE_2D,Pe,Re,de.width,de.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Se,ue)}else t.texImage2D(n.TEXTURE_2D,0,Re,_e,Se,ue);p(_)&&h(W),ye.__version=G.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function ce(v,_,D){if(_.image.length!==6)return;const W=Be(v,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+D);const G=i.get(ee);if(ee.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+D);const ye=et.getPrimaries(et.workingColorSpace),fe=_.colorSpace===bi?null:et.getPrimaries(_.colorSpace),be=_.colorSpace===bi||ye===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let le=0;le<6;le++)!Le&&!ue?_e[le]=x(_.image[le],!0,r.maxCubemapSize):_e[le]=ue?_.image[le].image:_.image[le],_e[le]=Q(_,_e[le]);const Se=_e[0],Re=s.convert(_.format,_.colorSpace),xe=s.convert(_.type),We=w(_.internalFormat,Re,xe,_.colorSpace),N=_.isVideoTexture!==!0,Ae=G.__version===void 0||W===!0,me=ee.dataReady;let Pe=R(_,Se);Ue(n.TEXTURE_CUBE_MAP,_);let de;if(Le){N&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,We,Se.width,Se.height);for(let le=0;le<6;le++){de=_e[le].mipmaps;for(let ve=0;ve<de.length;ve++){const ke=de[ve];_.format!==Mn?Re!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,We,ke.width,ke.height,0,ke.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,ke.width,ke.height,Re,xe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,We,ke.width,ke.height,0,Re,xe,ke.data)}}}else{if(de=_.mipmaps,N&&Ae){de.length>0&&Pe++;const le=te(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,We,le.width,le.height)}for(let le=0;le<6;le++)if(ue){N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,_e[le].width,_e[le].height,Re,xe,_e[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,_e[le].width,_e[le].height,0,Re,xe,_e[le].data);for(let ve=0;ve<de.length;ve++){const ht=de[ve].image[le].image;N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,ht.width,ht.height,Re,xe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,We,ht.width,ht.height,0,Re,xe,ht.data)}}else{N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re,xe,_e[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Re,xe,_e[le]);for(let ve=0;ve<de.length;ve++){const ke=de[ve];N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,Re,xe,ke.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,We,Re,xe,ke.image[le])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),G.__version=ee.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function we(v,_,D,W,ee,G){const ye=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),be=w(D.internalFormat,ye,fe,D.colorSpace),Le=i.get(_),ue=i.get(D);if(ue.__renderTarget=_,!Le.__hasExternalTextures){const _e=Math.max(1,_.width>>G),Se=Math.max(1,_.height>>G);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,G,be,_e,Se,_.depth,0,ye,fe,null):t.texImage2D(ee,G,be,_e,Se,0,ye,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ae(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ee,ue.__webglTexture,0,b(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ee,ue.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(v,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,v),_.depthBuffer){const W=_.depthTexture,ee=W&&W.isDepthTexture?W.type:null,G=E(_.stencilBuffer,ee),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(_),G,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(_),G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,v)}else{const W=_.textures;for(let ee=0;ee<W.length;ee++){const G=W[ee],ye=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),be=w(G.internalFormat,ye,fe,G.colorSpace);ae(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(_),be,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(_),be,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,be,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(v,_,D){const W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(_.depthTexture);if(ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Le=s.convert(_.depthTexture.format),ue=s.convert(_.depthTexture.type);let _e;_.depthTexture.format===ui?_e=n.DEPTH_COMPONENT24:_.depthTexture.format===Wi&&(_e=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,_e,_.width,_.height,0,Le,ue,null)}}else ne(_.depthTexture,0);const G=ee.__webglTexture,ye=b(_),fe=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,be=_.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ui)ae(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,fe,G,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,be,fe,G,0);else if(_.depthTexture.format===Wi)ae(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,fe,G,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,be,fe,G,0);else throw new Error("Unknown depthTexture format")}function $e(v){const _=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=W}if(v.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)Ce(_.__webglFramebuffer[W],v,W);else{const W=v.texture.mipmaps;W&&W.length>0?Ce(_.__webglFramebuffer[0],v,0):Ce(_.__webglFramebuffer,v,0)}else if(D){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),He(_.__webglDepthbuffer[W],v,!1);else{const ee=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),He(_.__webglDepthbuffer,v,!1);else{const ee=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(v,_,D){const W=i.get(v);_!==void 0&&we(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&$e(v)}function y(v){const _=v.texture,D=i.get(v),W=i.get(_);v.addEventListener("dispose",L);const ee=v.textures,G=v.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),G){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let be=0;be<_.mipmaps.length;be++)D.__webglFramebuffer[fe][be]=n.createFramebuffer()}else D.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)D.__webglFramebuffer[fe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ye)for(let fe=0,be=ee.length;fe<be;fe++){const Le=i.get(ee[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ae(v)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const be=ee[fe];D.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const Le=s.convert(be.format,be.colorSpace),ue=s.convert(be.type),_e=w(be.internalFormat,Le,ue,be.colorSpace,v.isXRRenderTarget===!0),Se=b(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,_e,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),He(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)we(D.__webglFramebuffer[fe][be],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else we(D.__webglFramebuffer[fe],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,be=ee.length;fe<be;fe++){const Le=ee[fe],ue=i.get(Le);let _e=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(_e=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),Ue(_e,Le),we(D.__webglFramebuffer,v,Le,n.COLOR_ATTACHMENT0+fe,_e,0),p(Le)&&h(_e)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(fe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),Ue(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)we(D.__webglFramebuffer[be],v,_,n.COLOR_ATTACHMENT0,fe,be);else we(D.__webglFramebuffer,v,_,n.COLOR_ATTACHMENT0,fe,0);p(_)&&h(fe),t.unbindTexture()}v.depthBuffer&&$e(v)}function P(v){const _=v.textures;for(let D=0,W=_.length;D<W;D++){const ee=_[D];if(p(ee)){const G=A(v),ye=i.get(ee).__webglTexture;t.bindTexture(G,ye),h(G),t.unbindTexture()}}}const O=[],z=[];function J(v){if(v.samples>0){if(ae(v)===!1){const _=v.textures,D=v.width,W=v.height;let ee=n.COLOR_BUFFER_BIT;const G=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(v),fe=_.length>1;if(fe)for(let Le=0;Le<_.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const be=v.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Le=0;Le<_.length;Le++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]);const ue=i.get(_[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,W,0,0,D,W,ee,n.NEAREST),c===!0&&(O.length=0,z.length=0,O.push(n.COLOR_ATTACHMENT0+Le),v.depthBuffer&&v.resolveDepthBuffer===!1&&(O.push(G),z.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<_.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]);const ue=i.get(_[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const _=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function b(v){return Math.min(r.maxSamples,v.samples)}function ae(v){const _=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(v){const _=o.render.frame;u.get(v)!==_&&(u.set(v,_),v.update())}function Q(v,_){const D=v.colorSpace,W=v.format,ee=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==Lr&&D!==bi&&(et.getTransfer(D)===ct?(W!==Mn||ee!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",D)),_}function te(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=C,this.setupRenderTarget=y,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hb(n,e){function t(i,r=bi){let s;const o=et.getTransfer(r);if(i===sn)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$h)return n.BYTE;if(i===Zh)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===tp)return n.RGB;if(i===Mn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===np)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Dr)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===Ao||i===wo||i===Ro||i===Co)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Nl||i===Fl||i===Ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===Vl||i===Hl||i===Gl||i===kl||i===Wl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bl||i===zl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return s.COMPRESSED_R11_EAC;if(i===Gl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kl)return s.COMPRESSED_RG11_EAC;if(i===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===ql||i===Yl||i===jl||i===Kl||i===$l||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===oc||i===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sc)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===uc||i===fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kb=`
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

}`;class Wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:Gb,fragmentShader:kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xb extends Br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Wb,h={},A=t.getContextAttributes();let w=null,E=null;const R=[],I=[],L=new rt;let V=null;const S=new fn;S.viewport=new bt;const T=new fn;T.viewport=new bt;const U=[S,T],K=new tv;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ce=R[re];return ce===void 0&&(ce=new Ya,R[re]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(re){let ce=R[re];return ce===void 0&&(ce=new Ya,R[re]=ce),ce.getGripSpace()},this.getHand=function(re){let ce=R[re];return ce===void 0&&(ce=new Ya,R[re]=ce),ce.getHandSpace()};function ne(re){const ce=I.indexOf(re.inputSource);if(ce===-1)return;const we=R[ce];we!==void 0&&(we.update(re.inputSource,re.frame,l||o),we.dispatchEvent({type:re.type,data:re.inputSource}))}function q(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",B);for(let re=0;re<R.length;re++){const ce=I[re];ce!==null&&(I[re]=null,R[re].disconnect(ce))}k=null,ie=null,p.reset();for(const re in h)delete h[re];e.setRenderTarget(w),m=null,d=null,f=null,r=null,E=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",q),r.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,He=null,Ce=null;A.depth&&(Ce=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=A.stencil?Wi:ui,He=A.stencil?_s:Gn);const $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new zn(d.textureWidth,d.textureHeight,{format:Mn,type:sn,depthTexture:new Ss(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new zn(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(re){for(let ce=0;ce<re.removed.length;ce++){const we=re.removed[ce],He=I.indexOf(we);He>=0&&(I[He]=null,R[He].disconnect(we))}for(let ce=0;ce<re.added.length;ce++){const we=re.added[ce];let He=I.indexOf(we);if(He===-1){for(let $e=0;$e<R.length;$e++)if($e>=I.length){I.push(we),He=$e;break}else if(I[$e]===null){I[$e]=we,He=$e;break}if(He===-1)break}const Ce=R[He];Ce&&Ce.connect(we)}}const Z=new X,ge=new X;function pe(re,ce,we){Z.setFromMatrixPosition(ce.matrixWorld),ge.setFromMatrixPosition(we.matrixWorld);const He=Z.distanceTo(ge),Ce=ce.projectionMatrix.elements,$e=we.projectionMatrix.elements,C=Ce[14]/(Ce[10]-1),y=Ce[14]/(Ce[10]+1),P=(Ce[9]+1)/Ce[5],O=(Ce[9]-1)/Ce[5],z=(Ce[8]-1)/Ce[0],J=($e[8]+1)/$e[0],b=C*z,ae=C*J,se=He/(-z+J),Q=se*-z;if(ce.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Q),re.translateZ(se),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ce[10]===-1)re.projectionMatrix.copy(ce.projectionMatrix),re.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const te=C+se,v=y+se,_=b-Q,D=ae+(He-Q),W=P*y/v*te,ee=O*y/v*te;re.projectionMatrix.makePerspective(_,D,W,ee,te,v),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function he(re,ce){ce===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ce.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ce=re.near,we=re.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(we=p.depthFar)),K.near=T.near=S.near=ce,K.far=T.far=S.far=we,(k!==K.near||ie!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),k=K.near,ie=K.far),K.layers.mask=re.layers.mask|6,S.layers.mask=K.layers.mask&3,T.layers.mask=K.layers.mask&5;const He=re.parent,Ce=K.cameras;he(K,He);for(let $e=0;$e<Ce.length;$e++)he(Ce[$e],He);Ce.length===2?pe(K,S,T):K.projectionMatrix.copy(S.projectionMatrix),Ue(re,K,He)};function Ue(re,ce,we){we===null?re.matrix.copy(ce.matrixWorld):(re.matrix.copy(we.matrixWorld),re.matrix.invert(),re.matrix.multiply(ce.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ce.projectionMatrix),re.projectionMatrixInverse.copy(ce.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=dc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(K)},this.getCameraTexture=function(re){return h[re]};let Be=null;function Qe(re,ce){if(u=ce.getViewerPose(l||o),g=ce,u!==null){const we=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let He=!1;we.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let y=0;y<we.length;y++){const P=we[y];let O=null;if(m!==null)O=m.getViewport(P);else{const J=f.getViewSubImage(d,P);O=J.viewport,y===0&&(e.setRenderTargetTextures(E,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(E))}let z=U[y];z===void 0&&(z=new fn,z.layers.enable(y),z.viewport=new bt,U[y]=z),z.matrix.fromArray(P.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(P.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(O.x,O.y,O.width,O.height),y===0&&(K.matrix.copy(z.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(z)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const y=f.getDepthInformation(we[0]);y&&y.isValid&&y.texture&&p.init(y,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let y=0;y<we.length;y++){const P=we[y].camera;if(P){let O=h[P];O||(O=new gp,h[P]=O);const z=f.getCameraImage(P);O.sourceTexture=z}}}}for(let we=0;we<R.length;we++){const He=I[we],Ce=R[we];He!==null&&Ce!==void 0&&Ce.update(He,ce,l||o)}Be&&Be(re,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const tt=new xp;tt.setAnimationLoop(Qe),this.setAnimationLoop=function(re){Be=re},this.dispose=function(){}}}const Oi=new kn,qb=new vt;function Yb(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,up(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,w,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,A,w):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Zt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Zt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=e.get(h),w=A.envMap,E=A.envMapRotation;w&&(p.envMap.value=w,Oi.copy(E),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Oi)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,A,w){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=w*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const A=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,w){const E=w.program;i.uniformBlockBinding(A,E)}function l(A,w){let E=r[A.id];E===void 0&&(g(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",p));const R=w.program;i.updateUBOMapping(A,R);const I=e.render.frame;s[A.id]!==I&&(d(A),s[A.id]=I)}function u(A){const w=f();A.__bindingPointIndex=w;const E=n.createBuffer(),R=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const w=r[A.id],E=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,L=E.length;I<L;I++){const V=Array.isArray(E[I])?E[I]:[E[I]];for(let S=0,T=V.length;S<T;S++){const U=V[S];if(m(U,I,S,R)===!0){const K=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let ie=0;for(let ne=0;ne<k.length;ne++){const q=k[ne],B=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,K+ie,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,ie),ie+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,w,E,R){const I=A.value,L=w+"_"+E;if(R[L]===void 0)return typeof I=="number"||typeof I=="boolean"?R[L]=I:R[L]=I.clone(),!0;{const V=R[L];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return R[L]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function g(A){const w=A.uniforms;let E=0;const R=16;for(let L=0,V=w.length;L<V;L++){const S=Array.isArray(w[L])?w[L]:[w[L]];for(let T=0,U=S.length;T<U;T++){const K=S[T],k=Array.isArray(K.value)?K.value:[K.value];for(let ie=0,ne=k.length;ie<ne;ie++){const q=k[ie],B=x(q),Z=E%R,ge=Z%B.boundary,pe=Z+ge;E+=ge,pe!==0&&R-pe<B.storage&&(E+=R-pe),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=B.storage}}}const I=E%R;return I>0&&(E+=R-I),A.__size=E,A.__cache={},this}function x(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",A),w}function p(A){const w=A.target;w.removeEventListener("dispose",p);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}const Kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function $b(){return Cn===null&&(Cn=new Ox(Kb,16,16,Dr,ci),Cn.name="DFG_LUT",Cn.minFilter=Nt,Cn.magFilter=Nt,Cn.wrapS=ti,Cn.wrapT=ti,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class Zb{constructor(e={}){const{canvas:t=ux(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=m,p=new Set([Yc,qc,Xc]),h=new Set([sn,Gn,gs,_s,kc,Wc]),A=new Uint32Array(4),w=new Int32Array(4);let E=null,R=null;const I=[],L=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=rn;let U=0,K=0,k=null,ie=-1,ne=null;const q=new bt,B=new bt;let Z=null;const ge=new Je(0);let pe=0,he=t.width,Ue=t.height,Be=1,Qe=null,tt=null;const re=new bt(0,0,he,Ue),ce=new bt(0,0,he,Ue);let we=!1;const He=new Qc;let Ce=!1,$e=!1;const C=new vt,y=new X,P=new bt,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function J(){return k===null?Be:1}let b=i;function ae(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",at,!1),b===null){const F="webgl2";if(b=ae(F,M),b===null)throw ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw it("WebGLRenderer: "+M.message),M}let se,Q,te,v,_,D,W,ee,G,ye,fe,be,Le,ue,_e,Se,Re,xe,We,N,Ae,me,Pe,de;function le(){se=new $M(b),se.init(),me=new Hb(b,se),Q=new HM(b,se,e,me),te=new zb(b,se),Q.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),v=new QM(b),_=new Eb,D=new Vb(b,se,te,_,Q,me,v),W=new kM(S),ee=new KM(S),G=new iv(b),Pe=new zM(b,G),ye=new ZM(b,G,v,Pe),fe=new ty(b,ye,G,v),We=new ey(b,Q,D),Se=new GM(_),be=new bb(S,W,ee,se,Q,Pe,Se),Le=new Yb(S,_),ue=new Ab,_e=new Lb(se),xe=new BM(S,W,ee,te,fe,g,c),Re=new Ob(S,fe,Q),de=new jb(b,v,Q,te),N=new VM(b,se,v),Ae=new JM(b,se,v),v.programs=be.programs,S.capabilities=Q,S.extensions=se,S.properties=_,S.renderLists=ue,S.shadowMap=Re,S.state=te,S.info=v}le(),x!==sn&&(V=new iy(x,t.width,t.height,r,s));const ve=new Xb(S,b);this.xr=ve,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(M){M!==void 0&&(Be=M,this.setSize(he,Ue,!1))},this.getSize=function(M){return M.set(he,Ue)},this.setSize=function(M,F,$=!0){if(ve.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}he=M,Ue=F,t.width=Math.floor(M*Be),t.height=Math.floor(F*Be),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(he*Be,Ue*Be).floor()},this.setDrawingBufferSize=function(M,F,$){he=M,Ue=F,Be=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(x===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,F,$,Y){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,F,$,Y),te.viewport(q.copy(re).multiplyScalar(Be).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,F,$,Y){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,F,$,Y),te.scissor(B.copy(ce).multiplyScalar(Be).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(M){te.setScissorTest(we=M)},this.setOpaqueSort=function(M){Qe=M},this.setTransparentSort=function(M){tt=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let Y=0;if(M){let H=!1;if(k!==null){const Me=k.texture.format;H=p.has(Me)}if(H){const Me=k.texture.type,De=h.has(Me),Te=xe.getClearColor(),Ie=xe.getClearAlpha(),Ne=Te.r,ze=Te.g,Fe=Te.b;De?(A[0]=Ne,A[1]=ze,A[2]=Fe,A[3]=Ie,b.clearBufferuiv(b.COLOR,0,A)):(w[0]=Ne,w[1]=ze,w[2]=Fe,w[3]=Ie,b.clearBufferiv(b.COLOR,0,w))}else Y|=b.COLOR_BUFFER_BIT}F&&(Y|=b.DEPTH_BUFFER_BIT),$&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",at,!1),xe.dispose(),ue.dispose(),_e.dispose(),_.dispose(),W.dispose(),ee.dispose(),fe.dispose(),Pe.dispose(),de.dispose(),be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",iu),ve.removeEventListener("sessionend",ru),Ri.stop()};function ke(M){M.preventDefault(),hf("WebGLRenderer: Context Lost."),T=!0}function ht(){hf("WebGLRenderer: Context Restored."),T=!1;const M=v.autoReset,F=Re.enabled,$=Re.autoUpdate,Y=Re.needsUpdate,H=Re.type;le(),v.autoReset=M,Re.enabled=F,Re.autoUpdate=$,Re.needsUpdate=Y,Re.type=H}function at(M){it("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function An(M){const F=M.target;F.removeEventListener("dispose",An),Xn(F)}function Xn(M){bp(M),_.remove(M)}function bp(M){const F=_.get(M).programs;F!==void 0&&(F.forEach(function($){be.releaseProgram($)}),M.isShaderMaterial&&be.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,Y,H,Me){F===null&&(F=O);const De=H.isMesh&&H.matrixWorld.determinant()<0,Te=Tp(M,F,$,Y,H);te.setMaterial(Y,De);let Ie=$.index,Ne=1;if(Y.wireframe===!0){if(Ie=ye.getWireframeAttribute($),Ie===void 0)return;Ne=2}const ze=$.drawRange,Fe=$.attributes.position;let Ke=ze.start*Ne,ut=(ze.start+ze.count)*Ne;Me!==null&&(Ke=Math.max(Ke,Me.start*Ne),ut=Math.min(ut,(Me.start+Me.count)*Ne)),Ie!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,Ie.count)):Fe!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,Fe.count));const Mt=ut-Ke;if(Mt<0||Mt===1/0)return;Pe.setup(H,Y,Te,$,Ie);let yt,ft=N;if(Ie!==null&&(yt=G.get(Ie),ft=Ae,ft.setIndex(yt)),H.isMesh)Y.wireframe===!0?(te.setLineWidth(Y.wireframeLinewidth*J()),ft.setMode(b.LINES)):ft.setMode(b.TRIANGLES);else if(H.isLine){let Oe=Y.linewidth;Oe===void 0&&(Oe=1),te.setLineWidth(Oe*J()),H.isLineSegments?ft.setMode(b.LINES):H.isLineLoop?ft.setMode(b.LINE_LOOP):ft.setMode(b.LINE_STRIP)}else H.isPoints?ft.setMode(b.POINTS):H.isSprite&&ft.setMode(b.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)vs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Oe=H._multiDrawStarts,lt=H._multiDrawCounts,nt=H._multiDrawCount,Jt=Ie?G.get(Ie).bytesPerElement:1,Ji=_.get(Y).currentProgram.getUniforms();for(let Qt=0;Qt<nt;Qt++)Ji.setValue(b,"_gl_DrawID",Qt),ft.render(Oe[Qt]/Jt,lt[Qt])}else if(H.isInstancedMesh)ft.renderInstances(Ke,Mt,H.count);else if($.isInstancedBufferGeometry){const Oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,lt=Math.min($.instanceCount,Oe);ft.renderInstances(Ke,Mt,lt)}else ft.render(Ke,Mt)};function nu(M,F,$){M.transparent===!0&&M.side===In&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Ns(M,F,$),M.side=li,M.needsUpdate=!0,Ns(M,F,$),M.side=In):Ns(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),R=_e.get($),R.init(F),L.push(R),$.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),M!==$&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const Y=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Me=H.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const Te=Me[De];nu(Te,$,H),Y.add(Te)}else nu(Me,$,H),Y.add(Me)}),R=L.pop(),Y},this.compileAsync=function(M,F,$=null){const Y=this.compile(M,F,$);return new Promise(H=>{function Me(){if(Y.forEach(function(De){_.get(De).currentProgram.isReady()&&Y.delete(De)}),Y.size===0){H(M);return}setTimeout(Me,10)}se.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let la=null;function Ep(M){la&&la(M)}function iu(){Ri.stop()}function ru(){Ri.start()}const Ri=new xp;Ri.setAnimationLoop(Ep),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(M){la=M,ve.setAnimationLoop(M),M===null?Ri.stop():Ri.start()},ve.addEventListener("sessionstart",iu),ve.addEventListener("sessionend",ru),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const $=ve.enabled===!0&&ve.isPresenting===!0,Y=V!==null&&(k===null||$)&&V.begin(S,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,F,k),R=_e.get(M,L.length),R.init(F),L.push(R),C.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(C,Nn,F.reversedDepth),$e=this.localClippingEnabled,Ce=Se.init(this.clippingPlanes,$e),E=ue.get(M,I.length),E.init(),I.push(E),ve.enabled===!0&&ve.isPresenting===!0){const De=S.xr.getDepthSensingMesh();De!==null&&ca(De,F,-1/0,S.sortObjects)}ca(M,F,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(Qe,tt),z=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,z&&xe.addToRenderList(E,M),this.info.render.frame++,Ce===!0&&Se.beginShadows();const H=R.state.shadowsArray;if(Re.render(H,M,F),Ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&V.hasRenderPass())===!1){const De=E.opaque,Te=E.transmissive;if(R.setupLights(),F.isArrayCamera){const Ie=F.cameras;if(Te.length>0)for(let Ne=0,ze=Ie.length;Ne<ze;Ne++){const Fe=Ie[Ne];ou(De,Te,M,Fe)}z&&xe.render(M);for(let Ne=0,ze=Ie.length;Ne<ze;Ne++){const Fe=Ie[Ne];su(E,M,Fe,Fe.viewport)}}else Te.length>0&&ou(De,Te,M,F),z&&xe.render(M),su(E,M,F)}k!==null&&K===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),Y&&V.end(S),M.isScene===!0&&M.onAfterRender(S,M,F),Pe.resetDefaultState(),ie=-1,ne=null,L.pop(),L.length>0?(R=L[L.length-1],Ce===!0&&Se.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?E=I[I.length-1]:E=null};function ca(M,F,$,Y){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||He.intersectsSprite(M)){Y&&P.setFromMatrixPosition(M.matrixWorld).applyMatrix4(C);const De=fe.update(M),Te=M.material;Te.visible&&E.push(M,De,Te,$,P.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||He.intersectsObject(M))){const De=fe.update(M),Te=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),P.copy(M.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),P.copy(De.boundingSphere.center)),P.applyMatrix4(M.matrixWorld).applyMatrix4(C)),Array.isArray(Te)){const Ie=De.groups;for(let Ne=0,ze=Ie.length;Ne<ze;Ne++){const Fe=Ie[Ne],Ke=Te[Fe.materialIndex];Ke&&Ke.visible&&E.push(M,De,Ke,$,P.z,Fe)}}else Te.visible&&E.push(M,De,Te,$,P.z,null)}}const Me=M.children;for(let De=0,Te=Me.length;De<Te;De++)ca(Me[De],F,$,Y)}function su(M,F,$,Y){const{opaque:H,transmissive:Me,transparent:De}=M;R.setupLightsView($),Ce===!0&&Se.setGlobalState(S.clippingPlanes,$),Y&&te.viewport(q.copy(Y)),H.length>0&&Us(H,F,$),Me.length>0&&Us(Me,F,$),De.length>0&&Us(De,F,$),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ou(M,F,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const Ke=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Ke?ci:sn,minFilter:ki,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Me=R.state.transmissionRenderTarget[Y.id],De=Y.viewport||q;Me.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),Ie=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(Me),S.getClearColor(ge),pe=S.getClearAlpha(),pe<1&&S.setClearColor(16777215,.5),S.clear(),z&&xe.render($);const ze=S.toneMapping;S.toneMapping=Bn;const Fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),Ce===!0&&Se.setGlobalState(S.clippingPlanes,Y),Us(M,$,Y),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ut=0,Mt=F.length;ut<Mt;ut++){const yt=F[ut],{object:ft,geometry:Oe,material:lt,group:nt}=yt;if(lt.side===In&&ft.layers.test(Y.layers)){const Jt=lt.side;lt.side=Zt,lt.needsUpdate=!0,au(ft,$,Y,Oe,lt,nt),lt.side=Jt,lt.needsUpdate=!0,Ke=!0}}Ke===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}S.setRenderTarget(Te,Ie,Ne),S.setClearColor(ge,pe),Fe!==void 0&&(Y.viewport=Fe),S.toneMapping=ze}function Us(M,F,$){const Y=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Me=M.length;H<Me;H++){const De=M[H],{object:Te,geometry:Ie,group:Ne}=De;let ze=De.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),Te.layers.test($.layers)&&au(Te,F,$,Ie,ze,Ne)}}function au(M,F,$,Y,H,Me){M.onBeforeRender(S,F,$,Y,H,Me),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(S,F,$,Y,M,Me),H.transparent===!0&&H.side===In&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,S.renderBufferDirect($,F,Y,H,M,Me),H.side=li,H.needsUpdate=!0,S.renderBufferDirect($,F,Y,H,M,Me),H.side=In):S.renderBufferDirect($,F,Y,H,M,Me),M.onAfterRender(S,F,$,Y,H,Me)}function Ns(M,F,$){F.isScene!==!0&&(F=O);const Y=_.get(M),H=R.state.lights,Me=R.state.shadowsArray,De=H.state.version,Te=be.getParameters(M,H.state,Me,F,$),Ie=be.getProgramCacheKey(Te);let Ne=Y.programs;Y.environment=M.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(M.isMeshStandardMaterial?ee:W).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",An),Ne=new Map,Y.programs=Ne);let ze=Ne.get(Ie);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===De)return cu(M,Te),ze}else Te.uniforms=be.getUniforms(M),M.onBeforeCompile(Te,S),ze=be.acquireProgram(Te,Ie),Ne.set(Ie,ze),Y.uniforms=Te.uniforms;const Fe=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=Se.uniform),cu(M,Te),Y.needsLights=wp(M),Y.lightsStateVersion=De,Y.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function lu(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Do.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function cu(M,F){const $=_.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Tp(M,F,$,Y,H){F.isScene!==!0&&(F=O),D.resetTextureUnits();const Me=F.fog,De=Y.isMeshStandardMaterial?F.environment:null,Te=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Lr,Ie=(Y.isMeshStandardMaterial?ee:W).get(Y.envMap||De),Ne=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,ut=!!$.morphAttributes.color;let Mt=Bn;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=yt!==void 0?yt.length:0,Oe=_.get(Y),lt=R.state.lights;if(Ce===!0&&($e===!0||M!==ne)){const Bt=M===ne&&Y.id===ie;Se.setState(Y,M,Bt)}let nt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==lt.state.version||Oe.outputColorSpace!==Te||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==Ie||Y.fog===!0&&Oe.fog!==Me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==ze||Oe.morphTargets!==Fe||Oe.morphNormals!==Ke||Oe.morphColors!==ut||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Oe.__version=Y.version);let Jt=Oe.currentProgram;nt===!0&&(Jt=Ns(Y,F,H));let Ji=!1,Qt=!1,Vr=!1;const pt=Jt.getUniforms(),Wt=Oe.uniforms;if(te.useProgram(Jt.program)&&(Ji=!0,Qt=!0,Vr=!0),Y.id!==ie&&(ie=Y.id,Qt=!0),Ji||ne!==M){te.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(b,"projectionMatrix",M.projectionMatrix),pt.setValue(b,"viewMatrix",M.matrixWorldInverse);const Xt=pt.map.cameraPosition;Xt!==void 0&&Xt.setValue(b,y.setFromMatrixPosition(M.matrixWorld)),Q.logarithmicDepthBuffer&&pt.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,Qt=!0,Vr=!0)}if(Oe.needsLights&&(lt.state.directionalShadowMap.length>0&&pt.setValue(b,"directionalShadowMap",lt.state.directionalShadowMap,D),lt.state.spotShadowMap.length>0&&pt.setValue(b,"spotShadowMap",lt.state.spotShadowMap,D),lt.state.pointShadowMap.length>0&&pt.setValue(b,"pointShadowMap",lt.state.pointShadowMap,D)),H.isSkinnedMesh){pt.setOptional(b,H,"bindMatrix"),pt.setOptional(b,H,"bindMatrixInverse");const Bt=H.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),pt.setValue(b,"boneTexture",Bt.boneTexture,D))}H.isBatchedMesh&&(pt.setOptional(b,H,"batchingTexture"),pt.setValue(b,"batchingTexture",H._matricesTexture,D),pt.setOptional(b,H,"batchingIdTexture"),pt.setValue(b,"batchingIdTexture",H._indirectTexture,D),pt.setOptional(b,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(b,"batchingColorTexture",H._colorsTexture,D));const ln=$.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&We.update(H,$,Jt),(Qt||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,pt.setValue(b,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wt.envMap.value=Ie,Wt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Wt.envMapIntensity.value=F.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=$b()),Qt&&(pt.setValue(b,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&Ap(Wt,Vr),Me&&Y.fog===!0&&Le.refreshFogUniforms(Wt,Me),Le.refreshMaterialUniforms(Wt,Y,Be,Ue,R.state.transmissionRenderTarget[M.id]),Do.upload(b,lu(Oe),Wt,D)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(b,lu(Oe),Wt,D),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(b,"center",H.center),pt.setValue(b,"modelViewMatrix",H.modelViewMatrix),pt.setValue(b,"normalMatrix",H.normalMatrix),pt.setValue(b,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Bt=Y.uniformsGroups;for(let Xt=0,ua=Bt.length;Xt<ua;Xt++){const Ci=Bt[Xt];de.update(Ci,Jt),de.bind(Ci,Jt)}}return Jt}function Ap(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function wp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,F,$){const Y=_.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=F,_.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=_.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const Rp=b.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){k=M,U=F,K=$;let Y=null,H=!1,Me=!1;if(M){const Te=_.get(M);if(Te.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(b.FRAMEBUFFER,Te.__webglFramebuffer),q.copy(M.viewport),B.copy(M.scissor),Z=M.scissorTest,te.viewport(q),te.scissor(B),te.setScissorTest(Z),ie=-1;return}else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(Te.__hasExternalTextures)D.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(Te.__boundDepthTexture!==ze){if(ze!==null&&_.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Ne=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?Y=Ne[F][$]:Y=Ne[F],H=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?Y=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[$]:Y=Ne,q.copy(M.viewport),B.copy(M.scissor),Z=M.scissorTest}else q.copy(re).multiplyScalar(Be).floor(),B.copy(ce).multiplyScalar(Be).floor(),Z=we;if($!==0&&(Y=Rp),te.bindFramebuffer(b.FRAMEBUFFER,Y)&&te.drawBuffers(M,Y),te.viewport(q),te.scissor(B),te.setScissorTest(Z),H){const Te=_.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,$)}else if(Me){const Te=F;for(let Ie=0;Ie<M.textures.length;Ie++){const Ne=_.get(M.textures[Ie]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,$,Te)}}else if(M!==null&&$!==0){const Te=_.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Te.__webglTexture,$)}ie=-1},this.readRenderTargetPixels=function(M,F,$,Y,H,Me,De,Te=0){if(!(M&&M.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){te.bindFramebuffer(b.FRAMEBUFFER,Ie);try{const Ne=M.textures[Te],ze=Ne.format,Fe=Ne.type;if(!Q.textureFormatReadable(ze)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Fe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-Y&&$>=0&&$<=M.height-H&&(M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(F,$,Y,H,me.convert(ze),me.convert(Fe),Me))}finally{const Ne=k!==null?_.get(k).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,Y,H,Me,De,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie)if(F>=0&&F<=M.width-Y&&$>=0&&$<=M.height-H){te.bindFramebuffer(b.FRAMEBUFFER,Ie);const Ne=M.textures[Te],ze=Ne.format,Fe=Ne.type;if(!Q.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ke),b.bufferData(b.PIXEL_PACK_BUFFER,Me.byteLength,b.STREAM_READ),M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(F,$,Y,H,me.convert(ze),me.convert(Fe),0);const ut=k!==null?_.get(k).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,ut);const Mt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await fx(b,Mt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ke),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Me),b.deleteBuffer(Ke),b.deleteSync(Mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const Y=Math.pow(2,-$),H=Math.floor(M.image.width*Y),Me=Math.floor(M.image.height*Y),De=F!==null?F.x:0,Te=F!==null?F.y:0;D.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,$,0,0,De,Te,H,Me),te.unbindTexture()};const Cp=b.createFramebuffer(),Pp=b.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,Y=null,H=0,Me=null){Me===null&&(H!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=H,H=0):Me=0);let De,Te,Ie,Ne,ze,Fe,Ke,ut,Mt;const yt=M.isCompressedTexture?M.mipmaps[Me]:M.image;if($!==null)De=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,ze=$.min.y,Fe=$.isBox3?$.min.z:0;else{const ln=Math.pow(2,-H);De=Math.floor(yt.width*ln),Te=Math.floor(yt.height*ln),M.isDataArrayTexture?Ie=yt.depth:M.isData3DTexture?Ie=Math.floor(yt.depth*ln):Ie=1,Ne=0,ze=0,Fe=0}Y!==null?(Ke=Y.x,ut=Y.y,Mt=Y.z):(Ke=0,ut=0,Mt=0);const ft=me.convert(F.format),Oe=me.convert(F.type);let lt;F.isData3DTexture?(D.setTexture3D(F,0),lt=b.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),lt=b.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),lt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=b.getParameter(b.UNPACK_ROW_LENGTH),Jt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ji=b.getParameter(b.UNPACK_SKIP_PIXELS),Qt=b.getParameter(b.UNPACK_SKIP_ROWS),Vr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,yt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,yt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ne),b.pixelStorei(b.UNPACK_SKIP_ROWS,ze),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe);const pt=M.isDataArrayTexture||M.isData3DTexture,Wt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const ln=_.get(M),Bt=_.get(F),Xt=_.get(ln.__renderTarget),ua=_.get(Bt.__renderTarget);te.bindFramebuffer(b.READ_FRAMEBUFFER,Xt.__webglFramebuffer),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Ci=0;Ci<Ie;Ci++)pt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_.get(M).__webglTexture,H,Fe+Ci),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_.get(F).__webglTexture,Me,Mt+Ci)),b.blitFramebuffer(Ne,ze,De,Te,Ke,ut,De,Te,b.DEPTH_BUFFER_BIT,b.NEAREST);te.bindFramebuffer(b.READ_FRAMEBUFFER,null),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||_.has(M)){const ln=_.get(M),Bt=_.get(F);te.bindFramebuffer(b.READ_FRAMEBUFFER,Cp),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,Pp);for(let Xt=0;Xt<Ie;Xt++)pt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ln.__webglTexture,H,Fe+Xt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ln.__webglTexture,H),Wt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Bt.__webglTexture,Me,Mt+Xt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Bt.__webglTexture,Me),H!==0?b.blitFramebuffer(Ne,ze,De,Te,Ke,ut,De,Te,b.COLOR_BUFFER_BIT,b.NEAREST):Wt?b.copyTexSubImage3D(lt,Me,Ke,ut,Mt+Xt,Ne,ze,De,Te):b.copyTexSubImage2D(lt,Me,Ke,ut,Ne,ze,De,Te);te.bindFramebuffer(b.READ_FRAMEBUFFER,null),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Wt?M.isDataTexture||M.isData3DTexture?b.texSubImage3D(lt,Me,Ke,ut,Mt,De,Te,Ie,ft,Oe,yt.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(lt,Me,Ke,ut,Mt,De,Te,Ie,ft,yt.data):b.texSubImage3D(lt,Me,Ke,ut,Mt,De,Te,Ie,ft,Oe,yt):M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Me,Ke,ut,De,Te,ft,Oe,yt.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Me,Ke,ut,yt.width,yt.height,ft,yt.data):b.texSubImage2D(b.TEXTURE_2D,Me,Ke,ut,De,Te,ft,Oe,yt);b.pixelStorei(b.UNPACK_ROW_LENGTH,nt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Jt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ji),b.pixelStorei(b.UNPACK_SKIP_ROWS,Qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vr),Me===0&&F.generateMipmaps&&b.generateMipmap(lt),te.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),te.unbindTexture()},this.resetState=function(){U=0,K=0,k=null,te.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Jb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},sl="/api",Qb={name:"App",setup(){const n=cn({prompt:"",personImages:[],itemImages:[],height:"",weight:"",bust:"",waist:"",hips:"",bodyFeatures:[],aspectRatio:"1:1"}),e=[{label:"苗条",value:"slim"},{label:"标准",value:"standard"},{label:"丰满",value:"plump"},{label:"健美",value:"fit"},{label:"结实",value:"athletic"},{label:"圆润",value:"curvy"},{label:"瘦弱",value:"thin"},{label:"宽肩",value:"broad-shoulders"},{label:"窄肩",value:"narrow-shoulders"}],t=cn(null),i=cn([]),r=cn(!1),s=cn(null),o=cn(null),a=cn(!1),c=cn(!1),l=cn(!1),u=cn(""),f=cn(!1),d=cn(null);let m=null,g=null,x=null,p=null,h=null,A=!1,w={x:0,y:0};const E="ai-tryon-form-data",R="ai-tryon-last-result",I=()=>{try{localStorage.setItem(E,JSON.stringify(n.value))}catch(y){console.error("保存到 localStorage 失败:",y)}},L=(y,P=null)=>{try{const O=P?{prompt:P.prompt,height:P.height,weight:P.weight,bust:P.bust,waist:P.waist,hips:P.hips,bodyFeatures:P.bodyFeatures,aspectRatio:P.aspectRatio}:{prompt:n.value.prompt,height:n.value.height,weight:n.value.weight,bust:n.value.bust,waist:n.value.waist,hips:n.value.hips,bodyFeatures:n.value.bodyFeatures,aspectRatio:n.value.aspectRatio},z={task:{...y,resultImage:y.imagePath?null:y.resultImage,personImages:[],itemImages:[]},formData:O};localStorage.setItem(R,JSON.stringify(z))}catch(O){console.error("保存结果失败:",O)}},V=()=>{try{const y=localStorage.getItem(E);if(y){const P=JSON.parse(y);P.personImage&&!P.personImages&&(P.personImages=[P.personImage],delete P.personImage),n.value={...n.value,...P}}}catch(y){console.error("从 localStorage 加载失败:",y)}},S=()=>{try{const y=localStorage.getItem(R);if(y){const P=JSON.parse(y);P.task&&(t.value=P.task),P.formData&&(n.value={...n.value,...P.formData})}}catch(y){console.error("加载上次结果失败:",y),localStorage.removeItem(R)}},T=()=>{try{localStorage.removeItem(R),t.value=null}catch(y){console.error("清除结果失败:",y)}},U=()=>{try{n.value={prompt:"",personImages:[],itemImages:[],height:"",weight:"",bust:"",waist:"",hips:"",bodyFeatures:[],aspectRatio:"1:1"},t.value=null,localStorage.removeItem(E),localStorage.removeItem(R),s.value&&(s.value.value=""),o.value&&(o.value.value="")}catch(y){console.error("清空失败:",y)}},K=y=>{u.value=y,c.value=!0};let k=null;const ie=(y,P)=>{const O=y.target.files[0];if(!O)return;const z=new FileReader;z.onload=J=>{const b=J.target.result.split(",")[1];P==="person"?n.value.personImages.push(`data:${O.type};base64,${b}`):P==="item"&&n.value.itemImages.push(`data:${O.type};base64,${b}`),I()},z.readAsDataURL(O)},ne=y=>{var P,O;y==="person"?(P=s.value)==null||P.click():y==="item"&&((O=o.value)==null||O.click())},q=y=>{n.value.personImages.splice(y,1),I()},B=y=>{n.value.itemImages.splice(y,1),I()},Z=async()=>{var y,P;if(n.value.personImages.length===0&&n.value.itemImages.length===0){alert("请至少上传一张图片");return}r.value=!0;try{const O=se=>se?se.split(",")[1]:"",z=JSON.parse(JSON.stringify(n.value)),J={prompt:n.value.prompt,personImages:n.value.personImages.map(O),itemImages:n.value.itemImages.map(O),height:n.value.height?`${n.value.height}cm`:"",weight:n.value.weight?`${n.value.weight}kg`:"",bust:n.value.bust?`${n.value.bust}cm`:"",waist:n.value.waist?`${n.value.waist}cm`:"",hips:n.value.hips?`${n.value.hips}cm`:"",bodyFeatures:n.value.bodyFeatures,aspectRatio:n.value.aspectRatio},ae=(await St.post(`${sl}/tryon`,J)).data.taskId;t.value={taskId:ae,status:"pending",createdAt:Date.now()/1e3,updatedAt:Date.now()/1e3,formData:z},ge(ae,z)}catch(O){console.error("提交失败:",O),alert("提交失败: "+(((P=(y=O.response)==null?void 0:y.data)==null?void 0:P.error)||O.message))}finally{r.value=!1}},ge=(y,P)=>{k&&clearInterval(k),k=setInterval(async()=>{try{const z=(await St.get(`${sl}/tasks/${y}`)).data;t.value={...z,formData:P},z.status==="completed"?(clearInterval(k),await pe(),L(t.value,P)):z.status==="failed"&&(clearInterval(k),await pe())}catch(O){console.error("获取任务状态失败:",O)}},2e3)},pe=async()=>{try{const y=await St.get(`${sl}/tasks`);i.value=y.data.sort((P,O)=>O.createdAt-P.createdAt)}catch(y){console.error("加载任务列表失败:",y)}},he=async y=>{if(!y)return"";if(y.startsWith("data:"))return y;try{let P=y;P.startsWith("/api/")||(P.startsWith("./input_images/")?P="/api/input_images/"+P.replace("./input_images/",""):P.startsWith("./images/")?P="/api/images/"+P.replace("./images/",""):P.startsWith("/input_images/")?P="/api/input_images/"+P.replace("/input_images/",""):P.startsWith("/images/")?P="/api/images/"+P.replace("/images/",""):P.startsWith("/")||(P="/api/input_images/"+P));const z=await(await fetch(P)).blob();return new Promise((J,b)=>{const ae=new FileReader;ae.onloadend=()=>J(ae.result),ae.onerror=b,ae.readAsDataURL(z)})}catch(P){return console.error("加载图片失败:",y,P),""}},Ue=async y=>{t.value=y;const P={prompt:y.prompt||"",height:y.height||"",weight:y.weight||"",bust:y.bust||"",waist:y.waist||"",hips:y.hips||"",bodyFeatures:y.bodyFeatures||[],aspectRatio:y.aspectRatio||"1:1",personImages:[],itemImages:[]};if(y.personImages&&Array.isArray(y.personImages))for(const O of y.personImages){const z=await he(O);z&&P.personImages.push(z)}else if(y.personImage){const O=await he(y.personImage);O&&P.personImages.push(O)}if(y.itemImages&&Array.isArray(y.itemImages))for(const O of y.itemImages){const z=await he(O);z&&P.itemImages.push(z)}n.value=P,I(),y.imagePath&&L(t.value,P)},Be=y=>new Date(y*1e3).toLocaleString("zh-CN"),Qe=y=>y?y.imagePath?y.imagePath.startsWith("/api/")?y.imagePath:y.imagePath.startsWith("./images/")?"/api/images/"+y.imagePath.replace("./images/",""):y.imagePath.startsWith("./input_images/")?"/api/input_images/"+y.imagePath.replace("./input_images/",""):y.imagePath.startsWith("/images/")?"/api/images/"+y.imagePath.replace("/images/",""):y.imagePath.startsWith("/input_images/")?"/api/input_images/"+y.imagePath.replace("/input_images/",""):`/api/images/${y.imagePath}`:y.resultImage?y.resultImage.startsWith("data:")?y.resultImage:"data:image/png;base64,"+y.resultImage:"":"",tt=async()=>{f.value=!f.value,f.value?(await Pc(),re()):$e()},re=()=>{if(!d.value)return;const y=d.value,P=y.clientWidth,O=y.clientHeight;m=new Fx,m.background=new Je(16317180),g=new fn(60,P/O,.1,1e3),g.position.z=3,g.position.y=.5,g.lookAt(0,0,0),x=new Zb({antialias:!0,alpha:!0}),x.setSize(P,O),x.setPixelRatio(window.devicePixelRatio),x.shadowMap.enabled=!0,x.shadowMap.type=Vh,y.appendChild(x.domElement);const z=new ev(16777215,.6);m.add(z);const J=new Vf(16777215,.8);J.position.set(5,10,7.5),J.castShadow=!0,m.add(J);const b=new Vf(16777215,.3);b.position.set(-5,5,-5),m.add(b);const ae=Qe(t.value);new Zx().load(ae,Q=>{Q.colorSpace=rn,Q.anisotropy=x.capabilities.getMaxAnisotropy();const te=Q.image.width/Q.image.height,v=new Ur(1.2*te,1.2),_=new Of({map:Q,side:li,transparent:!1,metalness:.1,roughness:.8});p=new gn(v,_),p.castShadow=!0,m.add(p);const D=5;for(let Le=1;Le<=D;Le++){const ue=new Of({map:Q,side:In,transparent:!0,opacity:.03/Le,metalness:.1,roughness:.9}),_e=new gn(v,ue);_e.position.z=-.05*Le,p.add(_e)}const W=new Wx(v),ee=new pp({color:6717162,transparent:!0,opacity:.3}),G=new Gx(W,ee);p.add(G);const ye=new Ur(1.5*te,1.5),fe=new Jc({color:0,transparent:!0,opacity:.1}),be=new gn(ye,fe);be.rotation.x=-Math.PI/2,be.position.y=-1,m.add(be),ce(),we()}),He(y),window.addEventListener("resize",Ce)},ce=()=>{const P=new an,O=new Float32Array(100*3);for(let b=0;b<100*3;b+=3)O[b]=(Math.random()-.5)*6,O[b+1]=(Math.random()-.5)*6,O[b+2]=(Math.random()-.5)*6;P.setAttribute("position",new bn(O,3));const z=new mp({color:6717162,size:.02,transparent:!0,opacity:.4}),J=new Nf(P,z);m.add(J)},we=()=>{h=requestAnimationFrame(we),x&&m&&g&&x.render(m,g)},He=y=>{let P={x:0,y:0},O={x:0,y:0},z=!1,J=null;const b=te=>{A=!0,z=!0,J&&(clearTimeout(J),J=null),w={x:te.clientX||te.touches[0].clientX,y:te.clientY||te.touches[0].clientY}},ae=te=>{if(!A||!p)return;const v=te.clientX||te.touches[0].clientX,_=te.clientY||te.touches[0].clientY,D={x:v-w.x,y:_-w.y};P.y+=D.x*.005,P.x+=D.y*.005,P.x=Math.max(-.5,Math.min(.5,P.x)),w={x:v,y:_}},se=()=>{A=!1,J=setTimeout(()=>{z=!1},3e3)},Q=()=>{h=requestAnimationFrame(Q),p&&(z||(P.y+=.003),O.x+=(P.x-O.x)*.05,O.y+=(P.y-O.y)*.05,p.rotation.x=O.x,p.rotation.y=O.y),m.children.forEach(te=>{te instanceof Nf&&(te.rotation.y+=5e-4)}),x&&m&&g&&x.render(m,g)};h&&cancelAnimationFrame(h),h=requestAnimationFrame(Q),y.addEventListener("mousedown",b),y.addEventListener("mousemove",ae),y.addEventListener("mouseup",se),y.addEventListener("mouseleave",se),y.addEventListener("touchstart",b,{passive:!0}),y.addEventListener("touchmove",ae,{passive:!0}),y.addEventListener("touchend",se),y.addEventListener("wheel",te=>{te.preventDefault(),g.position.z+=te.deltaY*.005,g.position.z=Math.max(2,Math.min(5,g.position.z))},{passive:!1})},Ce=()=>{if(!g||!x||!d.value)return;const y=d.value,P=y.clientWidth,O=y.clientHeight;g.aspect=P/O,g.updateProjectionMatrix(),x.setSize(P,O)},$e=()=>{h&&(cancelAnimationFrame(h),h=null),x&&x.domElement&&x.domElement.parentNode&&x.domElement.parentNode.removeChild(x.domElement),p&&(p.geometry.dispose(),p.material&&p.material.dispose(),p=null),x&&(x.dispose(),x=null),m=null,g=null,A=!1,window.removeEventListener("resize",Ce)};ss(a,y=>{y?(document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%"):(document.body.style.overflow="",document.body.style.position="",document.body.style.width="")}),ss(n,()=>{I()},{deep:!0});const C=y=>{y.key==="Escape"&&c.value&&(c.value=!1)};return Xd(()=>{V(),S(),pe(),window.addEventListener("keydown",C)}),Ic(()=>{k&&clearInterval(k),$e(),document.body.style.overflow="",document.body.style.position="",document.body.style.width="",window.removeEventListener("keydown",C)}),{formData:n,currentTask:t,tasks:i,loading:r,bodyFeatures:e,personInput:s,itemInput:o,showHistoryModal:a,showImageModal:c,showBodyDataSidebar:l,modalImageUrl:u,is3DView:f,threeCanvasContainer:d,handleImageUpload:ie,triggerUpload:ne,removePersonImage:q,removeItemImage:B,submitTryOn:Z,selectTask:Ue,formatTime:Be,getImageUrl:Qe,clearResult:T,clearAll:U,openImageModal:K,toggle3DView:tt}}},eE={id:"app"},tE={class:"sidebar-header"},nE={class:"sidebar-body"},iE={key:0,class:"empty-history"},rE={key:1,class:"task-list"},sE=["onClick"],oE={class:"task-info"},aE={class:"task-time"},lE={key:0,class:"task-thumb"},cE=["src","onError"],uE={class:"image-modal-body"},fE=["src"],dE={class:"sidebar-header"},hE={class:"sidebar-body"},pE={class:"form-row"},mE={class:"form-group"},gE={class:"input-with-unit"},_E={class:"form-group"},xE={class:"input-with-unit"},vE={class:"form-row"},SE={class:"form-group"},ME={class:"input-with-unit"},yE={class:"form-group"},bE={class:"input-with-unit"},EE={class:"form-group"},TE={class:"input-with-unit"},AE={class:"form-group"},wE={class:"checkbox-group-vertical"},RE=["value"],CE={class:"main-content"},PE={class:"single-column"},DE={class:"input-section upload-section-body"},LE={class:"result-section-main"},IE={class:"result-display"},UE={key:0,class:"task-status"},NE={key:0,class:"status-badge pending"},FE={key:1,class:"status-badge processing"},OE={key:2,class:"status-badge failed"},BE={key:1,class:"result-image-wrapper"},zE={class:"viewer-toggle"},VE={ref:"threeCanvasContainer",class:"three-canvas-container"},HE=["src"],GE={class:"result-image-actions"},kE=["href"],WE={key:2,class:"error-message"},XE={key:3,class:"placeholder"},qE={class:"person-item-row"},YE={class:"person-section"},jE={class:"multiple-upload"},KE=["src"],$E={class:"small-image-actions"},ZE=["onClick"],JE=["onClick"],QE={class:"item-section"},eT={class:"multiple-upload"},tT=["src"],nT={class:"small-image-actions"},iT=["onClick"],rT=["onClick"],sT={class:"settings-section-main"},oT={class:"settings-row-inline"},aT={class:"form-group-compact"},lT={class:"form-group"},cT={class:"button-row"},uT=["disabled"];function fT(n,e,t,i,r,s){var o,a,c;return _t(),xt("div",eE,[e[57]||(e[57]=oe("header",{class:"header"},[oe("h1",null,"AI试衣间")],-1)),i.showHistoryModal?(_t(),xt("div",{key:0,class:"sidebar-overlay sidebar-overlay-right",onClick:e[2]||(e[2]=l=>i.showHistoryModal=!1)},[oe("div",{class:"sidebar-content sidebar-content-right",onClick:e[1]||(e[1]=Ma(()=>{},["stop"]))},[oe("div",tE,[e[28]||(e[28]=oe("h3",null,"历史记录",-1)),oe("button",{class:"sidebar-close",onClick:e[0]||(e[0]=l=>i.showHistoryModal=!1)},"×")]),oe("div",nE,[i.tasks.length===0?(_t(),xt("div",iE," 暂无记录 ")):(_t(),xt("div",rE,[(_t(!0),xt(jt,null,zs(i.tasks,l=>{var u;return _t(),xt("div",{key:l.taskId,onClick:f=>{i.selectTask(l),i.showHistoryModal=!1},class:Sr(["task-item",{active:((u=i.currentTask)==null?void 0:u.taskId)===l.taskId}])},[oe("div",oE,[oe("span",aE,gr(i.formatTime(l.createdAt)),1),oe("span",{class:Sr(["status-dot",l.status])},null,2)]),l.imagePath?(_t(),xt("div",lE,[oe("img",{src:i.getImageUrl(l)+"?t="+l.updatedAt,onError:f=>console.log("缩略图加载失败:",l.imagePath,i.getImageUrl(l)),alt:"结果"},null,40,cE)])):di("",!0)],10,sE)}),128))]))])])])):di("",!0),i.showImageModal?(_t(),xt("div",{key:1,class:"modal-overlay",onClick:e[5]||(e[5]=l=>i.showImageModal=!1)},[oe("div",{class:"image-modal-content",onClick:e[4]||(e[4]=Ma(()=>{},["stop"]))},[oe("div",uE,[oe("img",{src:i.modalImageUrl,alt:"放大预览"},null,8,fE)]),oe("button",{class:"image-modal-close",onClick:e[3]||(e[3]=l=>i.showImageModal=!1)},"×")])])):di("",!0),i.showBodyDataSidebar?(_t(),xt("div",{key:2,class:"sidebar-overlay",onClick:e[14]||(e[14]=l=>i.showBodyDataSidebar=!1)},[oe("div",{class:"sidebar-content",onClick:e[13]||(e[13]=Ma(()=>{},["stop"]))},[oe("div",dE,[e[29]||(e[29]=oe("h3",null,"身体数据",-1)),oe("button",{class:"sidebar-close",onClick:e[6]||(e[6]=l=>i.showBodyDataSidebar=!1)},"×")]),oe("div",hE,[oe("div",pE,[oe("div",mE,[e[31]||(e[31]=oe("label",null,"身高",-1)),oe("div",gE,[_n(oe("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>i.formData.height=l),type:"number",placeholder:"170",min:"100",max:"250"},null,512),[[er,i.formData.height,void 0,{number:!0}]]),e[30]||(e[30]=oe("span",{class:"unit"},"cm",-1))])]),oe("div",_E,[e[33]||(e[33]=oe("label",null,"体重",-1)),oe("div",xE,[_n(oe("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>i.formData.weight=l),type:"number",placeholder:"60",min:"30",max:"200"},null,512),[[er,i.formData.weight,void 0,{number:!0}]]),e[32]||(e[32]=oe("span",{class:"unit"},"kg",-1))])])]),oe("div",vE,[oe("div",SE,[e[35]||(e[35]=oe("label",null,"胸围",-1)),oe("div",ME,[_n(oe("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>i.formData.bust=l),type:"number",placeholder:"90",min:"50",max:"150"},null,512),[[er,i.formData.bust,void 0,{number:!0}]]),e[34]||(e[34]=oe("span",{class:"unit"},"cm",-1))])]),oe("div",yE,[e[37]||(e[37]=oe("label",null,"腰围",-1)),oe("div",bE,[_n(oe("input",{"onUpdate:modelValue":e[10]||(e[10]=l=>i.formData.waist=l),type:"number",placeholder:"70",min:"40",max:"150"},null,512),[[er,i.formData.waist,void 0,{number:!0}]]),e[36]||(e[36]=oe("span",{class:"unit"},"cm",-1))])]),oe("div",EE,[e[39]||(e[39]=oe("label",null,"臀围",-1)),oe("div",TE,[_n(oe("input",{"onUpdate:modelValue":e[11]||(e[11]=l=>i.formData.hips=l),type:"number",placeholder:"95",min:"50",max:"160"},null,512),[[er,i.formData.hips,void 0,{number:!0}]]),e[38]||(e[38]=oe("span",{class:"unit"},"cm",-1))])])]),oe("div",AE,[e[40]||(e[40]=oe("label",null,"身材特征",-1)),oe("div",wE,[(_t(!0),xt(jt,null,zs(i.bodyFeatures,l=>(_t(),xt("label",{class:"checkbox-item",key:l.value},[_n(oe("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":e[12]||(e[12]=u=>i.formData.bodyFeatures=u)},null,8,RE),[[Kg,i.formData.bodyFeatures]]),oe("span",null," "+gr(l.label),1)]))),128))])])])])])):di("",!0),oe("button",{class:"body-data-trigger",onClick:e[15]||(e[15]=l=>i.showBodyDataSidebar=!0),title:"身体数据"}," 身体参数 "),oe("button",{class:"history-trigger",onClick:e[16]||(e[16]=l=>i.showHistoryModal=!0),title:"历史记录"}," 历史记录 "),oe("main",CE,[oe("div",PE,[oe("div",DE,[oe("div",LE,[oe("div",IE,[i.currentTask?(_t(),xt("div",UE,[i.currentTask.status==="pending"?(_t(),xt("div",NE," 等待中 ")):i.currentTask.status==="processing"?(_t(),xt("div",FE," 处理中 ")):i.currentTask.status==="failed"?(_t(),xt("div",OE," 失败 ")):di("",!0)])):di("",!0),(o=i.currentTask)!=null&&o.imagePath||(a=i.currentTask)!=null&&a.resultImage?(_t(),xt("div",BE,[oe("div",zE,[oe("button",{onClick:e[17]||(e[17]=(...l)=>i.toggle3DView&&i.toggle3DView(...l)),class:Sr(["toggle-btn",{active:i.is3DView}]),title:"切换3D/2D视图"},gr(i.is3DView?"2D":"3D"),3)]),_n(oe("div",VE,null,512),[[xa,i.is3DView]]),_n(oe("img",{src:i.getImageUrl(i.currentTask)+"?t="+(i.currentTask.updatedAt||Date.now()),alt:"试穿结果"},null,8,HE),[[xa,!i.is3DView]]),_n(oe("div",GE,[oe("button",{onClick:e[18]||(e[18]=l=>i.openImageModal(i.getImageUrl(i.currentTask))),class:"action-btn-small action-btn-zoom",title:"放大查看"},[...e[41]||(e[41]=[Vs('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-19f4b848><circle cx="11" cy="11" r="8" data-v-19f4b848></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-19f4b848></line><line x1="11" y1="8" x2="11" y2="14" data-v-19f4b848></line><line x1="8" y1="11" x2="14" y2="11" data-v-19f4b848></line></svg>',1)])]),oe("a",{href:i.getImageUrl(i.currentTask),download:"tryon-result.png",class:"action-btn-small action-btn-download",title:"下载"},[...e[42]||(e[42]=[oe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[oe("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),oe("polyline",{points:"7 10 12 15 17 10"}),oe("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,kE),oe("button",{onClick:e[19]||(e[19]=(...l)=>i.clearResult&&i.clearResult(...l)),class:"action-btn-small action-btn-clear",title:"清除"},[...e[43]||(e[43]=[oe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[oe("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),oe("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])],512),[[xa,!i.is3DView]])])):(c=i.currentTask)!=null&&c.error?(_t(),xt("div",WE,[oe("p",null,gr(i.currentTask.error),1)])):(_t(),xt("div",XE,[...e[44]||(e[44]=[oe("p",null,"效果展示区",-1)])]))])]),oe("div",qE,[oe("div",YE,[e[48]||(e[48]=oe("label",null,"人物照片",-1)),oe("div",jE,[(_t(!0),xt(jt,null,zs(i.formData.personImages,(l,u)=>(_t(),xt("div",{key:"person-"+u,class:"image-preview-small"},[oe("img",{src:l,alt:"人物"},null,8,KE),oe("div",$E,[oe("button",{onClick:f=>i.openImageModal(l),class:"action-btn-small action-btn-zoom",title:"放大查看"},[...e[45]||(e[45]=[Vs('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-19f4b848><circle cx="11" cy="11" r="8" data-v-19f4b848></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-19f4b848></line><line x1="11" y1="8" x2="11" y2="14" data-v-19f4b848></line><line x1="8" y1="11" x2="14" y2="11" data-v-19f4b848></line></svg>',1)])],8,ZE),oe("button",{onClick:f=>i.removePersonImage(u),class:"action-btn-small action-btn-clear",title:"删除"},[...e[46]||(e[46]=[oe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[oe("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),oe("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,JE)])]))),128)),i.formData.personImages.length<8?(_t(),xt("div",{key:0,class:"upload-placeholder-small",onClick:e[20]||(e[20]=l=>i.triggerUpload("person"))},[...e[47]||(e[47]=[oe("span",null,"+",-1)])])):di("",!0),oe("input",{ref:"personInput",type:"file",accept:"image/*",onChange:e[21]||(e[21]=l=>i.handleImageUpload(l,"person")),hidden:""},null,544)])]),oe("div",QE,[e[52]||(e[52]=oe("label",null,"物品图片",-1)),oe("div",eT,[(_t(!0),xt(jt,null,zs(i.formData.itemImages,(l,u)=>(_t(),xt("div",{key:"item-"+u,class:"image-preview-small"},[oe("img",{src:l,alt:"物品"},null,8,tT),oe("div",nT,[oe("button",{onClick:f=>i.openImageModal(l),class:"action-btn-small action-btn-zoom",title:"放大查看"},[...e[49]||(e[49]=[Vs('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-19f4b848><circle cx="11" cy="11" r="8" data-v-19f4b848></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-19f4b848></line><line x1="11" y1="8" x2="11" y2="14" data-v-19f4b848></line><line x1="8" y1="11" x2="14" y2="11" data-v-19f4b848></line></svg>',1)])],8,iT),oe("button",{onClick:f=>i.removeItemImage(u),class:"action-btn-small action-btn-clear",title:"删除"},[...e[50]||(e[50]=[oe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[oe("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),oe("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,rT)])]))),128)),i.formData.itemImages.length<8?(_t(),xt("div",{key:0,class:"upload-placeholder-small",onClick:e[22]||(e[22]=l=>i.triggerUpload("item"))},[...e[51]||(e[51]=[oe("span",null,"+",-1)])])):di("",!0),oe("input",{ref:"itemInput",type:"file",accept:"image/*",onChange:e[23]||(e[23]=l=>i.handleImageUpload(l,"item")),hidden:""},null,544)])])]),oe("div",sT,[oe("div",oT,[oe("div",aT,[e[54]||(e[54]=oe("label",null,"图片比例",-1)),_n(oe("select",{"onUpdate:modelValue":e[24]||(e[24]=l=>i.formData.aspectRatio=l)},[...e[53]||(e[53]=[Vs('<option value="9:16" data-v-19f4b848>9:16</option><option value="1:1" data-v-19f4b848>1:1</option><option value="16:9" data-v-19f4b848>16:9</option><option value="4:3" data-v-19f4b848>4:3</option><option value="3:4" data-v-19f4b848>3:4</option>',5)])],512),[[$g,i.formData.aspectRatio]])]),e[55]||(e[55]=oe("div",{class:"form-group-compact"},null,-1))]),oe("div",lT,[e[56]||(e[56]=oe("label",null,"试穿描述（可选）",-1)),_n(oe("textarea",{"onUpdate:modelValue":e[25]||(e[25]=l=>i.formData.prompt=l),placeholder:"描述你想要的试穿效果...",rows:"2"},null,512),[[er,i.formData.prompt]])])]),oe("div",cT,[oe("button",{onClick:e[26]||(e[26]=(...l)=>i.submitTryOn&&i.submitTryOn(...l)),class:"submit-btn",disabled:i.loading},gr(i.loading?"生成中...":"开始试穿"),9,uT),oe("button",{onClick:e[27]||(e[27]=(...l)=>i.clearAll&&i.clearAll(...l)),class:"clear-btn"}," 清空 ")])])])])])}const dT=Jb(Qb,[["render",fT],["__scopeId","data-v-19f4b848"]]);t_(dT).mount("#app");
