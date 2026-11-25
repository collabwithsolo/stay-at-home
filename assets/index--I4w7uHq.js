var Tf=Object.defineProperty;var Ef=(s,e,t)=>e in s?Tf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var q=(s,e,t)=>Ef(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="170",Af=0,eh=1,Rf=2,Qu=1,Cf=2,si=3,di=0,en=1,an=2,Di=0,Is=1,nc=2,th=3,nh=4,Lf=5,Ji=100,Pf=101,If=102,zf=103,Df=104,Uf=200,Nf=201,kf=202,Ff=203,ic=204,sc=205,Of=206,Bf=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,rc=0,oc=1,ac=2,Fs=3,cc=4,lc=5,hc=6,uc=7,Qo=0,Kf=1,$f=2,Ui=0,jf=1,Zf=2,Jf=3,ed=4,Qf=5,ep=6,tp=7,ih="attached",np="detached",td=300,Os=301,Bs=302,dc=303,fc=304,ea=306,fi=1e3,Ii=1001,ko=1002,jt=1003,nd=1004,xr=1005,un=1006,Co=1007,ai=1008,pi=1009,id=1010,sd=1011,Lr=1012,ol=1013,rs=1014,Ln=1015,Br=1016,al=1017,cl=1018,Hs=1020,rd=35902,od=1021,ad=1022,yn=1023,cd=1024,ld=1025,zs=1026,Vs=1027,ll=1028,hl=1029,hd=1030,ul=1031,dl=1033,Lo=33776,Po=33777,Io=33778,zo=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,yc=37496,Mc=37808,bc=37809,Sc=37810,wc=37811,Tc=37812,Ec=37813,Ac=37814,Rc=37815,Cc=37816,Lc=37817,Pc=37818,Ic=37819,zc=37820,Dc=37821,Do=36492,Uc=36494,Nc=36495,ud=36283,kc=36284,Fc=36285,Oc=36286,Pr=2300,Ir=2301,ha=2302,sh=2400,rh=2401,oh=2402,ip=2500,sp=0,dd=1,Bc=2,rp=3200,op=3201,ta=0,ap=1,Li="",Ct="srgb",Zt="srgb-linear",na="linear",_t="srgb",us=7680,ah=519,cp=512,lp=513,hp=514,fd=515,up=516,dp=517,fp=518,pp=519,Hc=35044,ch="300 es",ci=2e3,Fo=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const br=Math.PI/180,Gs=180/Math.PI;function In(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function mp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gp(s,e,t){return s!==e?(t-s)/(e-s):0}function Sr(s,e,t){return(1-t)*s+t*e}function _p(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}function xp(s,e=1){return e-Math.abs(fl(s,e*2)-e)}function vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bp(s,e){return s+Math.random()*(e-s)}function Sp(s){return s*(.5-Math.random())}function wp(s){s!==void 0&&(lh=s);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tp(s){return s*br}function Ep(s){return s*Gs}function Ap(s){return(s&s-1)===0&&s!==0}function Rp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pp={DEG2RAD:br,RAD2DEG:Gs,generateUUID:In,clamp:Ut,euclideanModulo:fl,mapLinear:mp,inverseLerp:gp,lerp:Sr,damp:_p,pingpong:xp,smoothstep:vp,smootherstep:yp,randInt:Mp,randFloat:bp,randFloatSpread:Sp,seededRandom:wp,degToRad:Tp,radToDeg:Ep,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Lp,normalize:pt,denormalize:Cn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],b=i[4],x=i[7],A=i[2],T=i[5],E=i[8];return r[0]=o*_+a*v+c*A,r[3]=o*g+a*b+c*T,r[6]=o*m+a*x+c*E,r[1]=l*_+h*v+d*A,r[4]=l*g+h*b+d*T,r[7]=l*m+h*x+d*E,r[2]=u*_+f*v+p*A,r[5]=u*g+f*b+p*T,r[8]=u*m+f*x+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Ge;function pd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ip(){const s=zr("canvas");return s.style.display="block",s}const hh={};function vr(s){s in hh||(hh[s]=!0,console.warn(s))}function zp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Up(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?na:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Zt]:{primaries:uh,whitePoint:fh,transfer:na,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:uh,whitePoint:fh,transfer:_t,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let ds;class Np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=zr("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kp=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(da(i[o].image)):r.push(da(i[o]))}else r=da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Np.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fp=0;class Nt extends js{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Ii,i=Ii,r=un,o=ai,a=yn,c=pi,l=Nt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=In(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=td;Nt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,x=(f+1)/2,A=(m+1)/2,T=(h+u)/4,E=(d+_)/4,I=(p+g)/4;return b>x&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=E/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gd extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==p){let g=1-a;const m=c*u+l*f+h*p+d*_,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),T=Math.atan2(A,m*v);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A}const x=a*v;if(c=c*g+u*x,l=l*g+f*x,h=h*g+p*x,d=d*g+_*x,g===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-a*f,e[t+2]=l*p+h*f+a*u-c*d,e[t+3]=h*p-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new L,gh=new mi;class gi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Kr.subVectors(this.max,sr),fs.subVectors(e.a,sr),ps.subVectors(e.b,sr),ms.subVectors(e.c,sr),yi.subVectors(ps,fs),Mi.subVectors(ms,ps),Bi.subVectors(fs,ms);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!pa(t,fs,ps,ms,Kr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,fs,ps,ms,Kr))?!1:($r.crossVectors(yi,Mi),t=[$r.x,$r.y,$r.z],pa(t,fs,ps,ms,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Yr=new gi,fs=new L,ps=new L,ms=new L,yi=new L,Mi=new L,Bi=new L,sr=new L,Kr=new L,$r=new L,Hi=new L;function pa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hi.fromArray(s,r);const a=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hp=new gi,rr=new L,ma=new L;class Wn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ma)),this.expandByPoint(rr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new L,ga=new L,jr=new L,bi=new L,_a=new L,Zr=new L,xa=new L;class ia{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ga.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=bi.dot(this.direction),c=-bi.dot(jr),l=bi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*c-a,u=o*a-c,p=r*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ga).addScaledVector(jr,u),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,r){_a.subVectors(t,e),Zr.subVectors(n,e),xa.crossVectors(_a,Zr);let o=this.direction.dot(xa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const c=a*this.direction.dot(Zr.crossVectors(bi,Zr));if(c<0)return null;const l=a*this.direction.dot(_a.cross(bi));if(l<0||c+l>o)return null;const h=-a*bi.dot(xa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,r,o,a,c,l,h,d,u,f,p,_,g){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,f,p,_,g)}set(e,t,n,i,r,o,a,c,l,h,d,u,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,p=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,p=l*h,_=l*d;t[0]=u+_*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,p=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,p=a*h,_=a*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Gp)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Si.crossVectors(n,sn),Si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Si.crossVectors(n,sn)),Si.normalize(),Jr.crossVectors(sn,Si),i[0]=Si.x,i[4]=Jr.x,i[8]=sn.x,i[1]=Si.y,i[5]=Jr.y,i[9]=sn.y,i[2]=Si.z,i[6]=Jr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],b=n[7],x=n[11],A=n[15],T=i[0],E=i[4],I=i[8],w=i[12],M=i[1],P=i[5],V=i[9],F=i[13],G=i[2],j=i[6],R=i[10],K=i[14],k=i[3],te=i[7],re=i[11],me=i[15];return r[0]=o*T+a*M+c*G+l*k,r[4]=o*E+a*P+c*j+l*te,r[8]=o*I+a*V+c*R+l*re,r[12]=o*w+a*F+c*K+l*me,r[1]=h*T+d*M+u*G+f*k,r[5]=h*E+d*P+u*j+f*te,r[9]=h*I+d*V+u*R+f*re,r[13]=h*w+d*F+u*K+f*me,r[2]=p*T+_*M+g*G+m*k,r[6]=p*E+_*P+g*j+m*te,r[10]=p*I+_*V+g*R+m*re,r[14]=p*w+_*F+g*K+m*me,r[3]=v*T+b*M+x*G+A*k,r[7]=v*E+b*P+x*j+A*te,r[11]=v*I+b*V+x*R+A*re,r[15]=v*w+b*F+x*K+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+_*(+t*c*f-t*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+g*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=d*g*l-_*u*l+_*c*f-a*g*f-d*c*m+a*u*m,b=p*u*l-h*g*l-p*c*f+o*g*f+h*c*m-o*u*m,x=h*_*l-p*d*l+p*a*f-o*_*f-h*a*m+o*d*m,A=p*d*c-h*_*c-p*a*u+o*_*u+h*a*g-o*d*g,T=t*v+n*b+i*x+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(_*u*r-d*g*r-_*i*f+n*g*f+d*i*m-n*u*m)*E,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*E,e[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*E,e[4]=b*E,e[5]=(h*g*r-p*u*r+p*i*f-t*g*f-h*i*m+t*u*m)*E,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*E,e[7]=(o*u*r-h*c*r+h*i*l-t*u*l-o*i*f+t*c*f)*E,e[8]=x*E,e[9]=(p*d*r-h*_*r-p*n*f+t*_*f+h*n*m-t*d*m)*E,e[10]=(o*_*r-p*a*r+p*n*l-t*_*l-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*E,e[12]=A*E,e[13]=(h*_*i-p*d*i+p*n*u-t*_*u-h*n*g+t*d*g)*E,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*g-t*a*g)*E,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,v=c*l,b=c*h,x=c*d,A=n.x,T=n.y,E=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+x)*A,i[2]=(p-b)*A,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+m))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(p+b)*E,i[9]=(g-v)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gs.set(i[0],i[1],i[2]).length();const o=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/r,h=1/o,d=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ci){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,p;if(a===ci)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Fo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ci){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*l,f=(n+i)*h;let p,_;if(a===ci)p=(o+r)*d,_=-2*d;else if(a===Fo)p=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new L,En=new Oe,Vp=new L(0,0,0),Gp=new L(1,1,1),Si=new L,Jr=new L,sn=new L,_h=new Oe,xh=new mi;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wp=0;const vh=new L,_s=new mi,Qn=new Oe,Qr=new L,or=new L,Xp=new L,qp=new mi,yh=new L(1,0,0),Mh=new L(0,1,0),bh=new L(0,0,1),Sh={type:"added"},Yp={type:"removed"},xs={type:"childadded",child:null},va={type:"childremoved",child:null};class Tt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new L,t=new bn,n=new mi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ge}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(or,Qr,this.up):Qn.lookAt(Qr,or,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Qn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new L,ei=new L,ya=new L,ti=new L,vs=new L,ys=new L,wh=new L,Ma=new L,ba=new L,Sa=new L,wa=new ct,Ta=new ct,Ea=new ct;class vn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),ei.subVectors(n,t),ya.subVectors(e,t);const o=An.dot(An),a=An.dot(ei),c=An.dot(ya),l=ei.dot(ei),h=ei.dot(ya),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return wa.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),wa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),ei.subVectors(e,t),An.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),An.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;vs.subVectors(i,n),ys.subVectors(r,n),Ma.subVectors(e,n);const c=vs.dot(Ma),l=ys.dot(Ma);if(c<=0&&l<=0)return t.copy(n);ba.subVectors(e,i);const h=vs.dot(ba),d=ys.dot(ba);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(vs,o);Sa.subVectors(e,r);const f=vs.dot(Sa),p=ys.dot(Sa);if(p>=0&&f<=p)return t.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(ys,a);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return wh.subVectors(r,i),a=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(wh,a);const m=1/(g+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Aa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=fl(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Aa(o,r,e+1/3),this.g=Aa(o,r,e),this.b=Aa(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ut(Xt.r*255,0,255))*65536+Math.round(Ut(Xt.g*255,0,255))*256+Math.round(Ut(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){Ze.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(eo);const n=Sr(wi.h,eo.h,t),i=Sr(wi.s,eo.s,t),r=Sr(wi.l,eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ce;Ce.NAMES=xd;let Kp=0;class fn extends js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=In(),this.name="",this.blending=Is,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new L,to=new le;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class vd extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $p=0;const gn=new Oe,Ra=new Tt,Ms=new L,rn=new gi,ar=new gi,Bt=new L;class Dt extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?yd:vd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(rn.min,ar.min),rn.expandByPoint(Bt),Bt.addVectors(rn.max,ar.max),rn.expandByPoint(Bt)):(rn.expandByPoint(ar.min),rn.expandByPoint(ar.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(e,l),Bt.add(Ms)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,h=new L,d=new L,u=new le,f=new le,p=new le,_=new L,g=new L;function m(I,w,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),p.sub(u);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[I].add(_),a[w].add(_),a[M].add(_),c[I].add(g),c[w].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,w=v.length;I<w;++I){const M=v[I],P=M.start,V=M.count;for(let F=P,G=P+V;F<G;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new L,x=new L,A=new L,T=new L;function E(I){A.fromBufferAttribute(i,I),T.copy(A);const w=a[I];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(T,w);const P=x.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,w=v.length;I<w;++I){const M=v[I],P=M.start,V=M.count;for(let F=P,G=P+V;F<G;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Oe,Vi=new ia,no=new Wn,Eh=new L,io=new L,so=new L,ro=new L,Ca=new L,oo=new L,Ah=new L,ao=new L;class at extends Tt{constructor(e=new Dt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ca.fromBufferAttribute(d,e),o?oo.addScaledVector(Ca,h):oo.addScaledVector(Ca.sub(t),h))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(no.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(no,Eh)===null||Vi.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,A=b;x<A;x+=3){const T=a.getX(x),E=a.getX(x+1),I=a.getX(x+2);i=co(this,m,e,n,l,h,d,T,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);i=co(this,o,e,n,l,h,d,v,b,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,A=b;x<A;x+=3){const T=x,E=x+1,I=x+2;i=co(this,m,e,n,l,h,d,T,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,b=g+1,x=g+2;i=co(this,o,e,n,l,h,d,v,b,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function jp(s,e,t,n,i,r,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===di,a),c===null)return null;ao.copy(a),ao.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ao);return l<t.near||l>t.far?null:{distance:l,point:ao.clone(),object:s}}function co(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,io),s.getVertexPosition(c,so),s.getVertexPosition(l,ro);const h=jp(s,e,t,n,io,so,ro,Ah);if(h){const d=new L;vn.getBarycoord(Ah,io,so,ro,d),i&&(h.uv=vn.getInterpolatedAttribute(i,a,c,l,d,new le)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,d,new le)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new L,materialIndex:0};vn.getNormal(io,so,ro,u.normal),h.face=u,h.barycoord=d}return h}class _i extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function p(_,g,m,v,b,x,A,T,E,I,w){const M=x/E,P=A/I,V=x/2,F=A/2,G=T/2,j=E+1,R=I+1;let K=0,k=0;const te=new L;for(let re=0;re<R;re++){const me=re*P-F;for(let Se=0;Se<j;Se++){const Be=Se*M-V;te[_]=Be*v,te[g]=me*b,te[m]=G,l.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[m]=T>0?1:-1,h.push(te.x,te.y,te.z),d.push(Se/E),d.push(1-re/I),K+=1}}for(let re=0;re<I;re++)for(let me=0;me<E;me++){const Se=u+me+j*re,Be=u+me+j*(re+1),X=u+(me+1)+j*(re+1),ee=u+(me+1)+j*re;c.push(Se,Be,ee),c.push(Be,X,ee),k+=6}a.addGroup(f,k,w),f+=k,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=Ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Zp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Md(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Jp={clone:Ws,merge:Kt};var Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new L,Rh=new le,Ch=new le;class $t extends bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Ss=1;class tm extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(bs,Ss,e,t);i.layers=this.layers,this.add(i);const r=new $t(bs,Ss,e,t);r.layers=this.layers,this.add(r);const o=new $t(bs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new $t(bs,Ss,e,t);a.layers=this.layers,this.add(a);const c=new $t(bs,Ss,e,t);c.layers=this.layers,this.add(c);const l=new $t(bs,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Sd extends Nt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nm extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Di});r.uniforms.tEquirect.value=t;const o=new at(i,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=un),new tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const La=new L,im=new L,sm=new Ge;class $i{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sm.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Wn,lo=new L;class pl{constructor(e=new $i,t=new $i,n=new $i,i=new $i,r=new $i,o=new $i){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],v=i[13],b=i[14],x=i[15];if(n[0].setComponents(c-r,u-l,g-f,x-m).normalize(),n[1].setComponents(c+r,u+l,g+f,x+m).normalize(),n[2].setComponents(c+o,u+h,g+p,x+v).normalize(),n[3].setComponents(c-o,u-h,g-p,x-v).normalize(),n[4].setComponents(c-a,u-d,g-_,x-b).normalize(),t===ci)n[5].setComponents(c+a,u+d,g+_,x+b).normalize();else if(t===Fo)n[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function rm(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class ls extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*u-o;for(let b=0;b<l;b++){const x=b*d-r;p.push(x,-v,0),_.push(0,0,1),g.push(b/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const b=v+l*m,x=v+l*(m+1),A=v+1+l*(m+1),T=v+1+l*m;f.push(b,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:cm,alphamap_pars_fragment:lm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:xm,iridescence_fragment:vm,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:wm,color_fragment:Tm,color_pars_fragment:Em,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:zm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Nm,colorspace_pars_fragment:km,envmap_fragment:Fm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Jm,envmap_vertex:Vm,fog_vertex:Gm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:Km,lights_lambert_fragment:$m,lights_lambert_pars_fragment:jm,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:x0,morphcolor_vertex:v0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:b0,normal_fragment_begin:S0,normal_fragment_maps:w0,normal_pars_fragment:T0,normal_pars_vertex:E0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:z0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:k0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:$0,specularmap_pars_fragment:j0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:cg,cube_vert:lg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:bg,meshmatcap_vert:Sg,meshmatcap_frag:wg,meshnormal_vert:Tg,meshnormal_frag:Eg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Lg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:zg,points_frag:Dg,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:kg,sprite_frag:Fg},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ho={r:0,b:0,g:0},Wi=new bn,Og=new Oe;function Bg(s,e,t,n,i,r,o){const a=new Ce(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function p(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function _(v){let b=!1;const x=p(v);x===null?m(a,c):x&&x.isColor&&(m(x,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,b){const x=p(b);x&&(x.isCubeTexture||x.mapping===ea)?(h===void 0&&(h=new at(new _i(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ws(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wi.copy(b.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Wi)),h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==_t,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new at(new ls(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ws(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(ho,Md(s)),n.buffers.color.setClear(ho.r,ho.g,ho.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:g}}function Hg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,P,V,F,G){let j=!1;const R=d(F,V,P);r!==R&&(r=R,l(r.object)),j=f(M,F,V,G),j&&p(M,F,V,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,P,V,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,V){const F=V.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let j=G[P.id];j===void 0&&(j={},G[P.id]=j);let R=j[F];return R===void 0&&(R=u(c()),j[F]=R),R}function u(M){const P=[],V=[],F=[];for(let G=0;G<t;G++)P[G]=0,V[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,V,F){const G=r.attributes,j=P.attributes;let R=0;const K=V.getAttributes();for(const k in K)if(K[k].location>=0){const re=G[k];let me=j[k];if(me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;R++}return r.attributesNum!==R||r.index!==F}function p(M,P,V,F){const G={},j=P.attributes;let R=0;const K=V.getAttributes();for(const k in K)if(K[k].location>=0){let re=j[k];re===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),G[k]=me,R++}r.attributes=G,r.attributesNum=R,r.index=F}function _(){const M=r.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){const V=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;V[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),G[M]!==P&&(s.vertexAttribDivisor(M,P),G[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let V=0,F=P.length;V<F;V++)P[V]!==M[V]&&(s.disableVertexAttribArray(V),P[V]=0)}function b(M,P,V,F,G,j,R){R===!0?s.vertexAttribIPointer(M,P,V,G,j):s.vertexAttribPointer(M,P,V,F,G,j)}function x(M,P,V,F){_();const G=F.attributes,j=V.getAttributes(),R=P.defaultAttributeValues;for(const K in j){const k=j[K];if(k.location>=0){let te=G[K];if(te===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const re=te.normalized,me=te.itemSize,Se=e.get(te);if(Se===void 0)continue;const Be=Se.buffer,X=Se.type,ee=Se.bytesPerElement,ge=X===s.INT||X===s.UNSIGNED_INT||te.gpuType===ol;if(te.isInterleavedBufferAttribute){const oe=te.data,Le=oe.stride,ke=te.offset;if(oe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<k.locationSize;Ye++)m(k.location+Ye,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ye=0;Ye<k.locationSize;Ye++)g(k.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Ye=0;Ye<k.locationSize;Ye++)b(k.location+Ye,me/k.locationSize,X,re,Le*ee,(ke+me/k.locationSize*Ye)*ee,ge)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<k.locationSize;oe++)g(k.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let oe=0;oe<k.locationSize;oe++)b(k.location+oe,me/k.locationSize,X,re,me*ee,me/k.locationSize*oe*ee,ge)}}else if(R!==void 0){const re=R[K];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}v()}function A(){I();for(const M in n){const P=n[M];for(const V in P){const F=P[V];for(const G in F)h(F[G].object),delete F[G];delete P[V]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const V in P){const F=P[V];for(const G in F)h(F[G].object),delete F[G];delete P[V]}delete n[M.id]}function E(M){for(const P in n){const V=n[P];if(V[M.id]===void 0)continue;const F=V[M.id];for(const G in F)h(F[G].object),delete F[G];delete V[M.id]}}function I(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Vg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_]*u[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==pi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!I)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:A,maxSamples:T}}function Wg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new $i,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,b=v*4;let x=m.clippingState||null;c.value=x,x=h(p,u,b,f);for(let A=0;A!==b;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Xg(s){let e=new WeakMap;function t(o,a){return a===dc?o.mapping=Os:a===fc&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dc||a===fc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nm(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends bd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Lh=[.125,.215,.35,.446,.526,.582],Qi=20,Pa=new ml,Ph=new Ce;let Ia=null,za=0,Da=0,Ua=!1;const ji=(1+Math.sqrt(5))/2,ws=1/ji,Ih=[new L(-ji,ws,0),new L(ji,ws,0),new L(-ws,0,ji),new L(ws,0,ji),new L(0,ji,-ws),new L(0,ji,ws),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,za,Da),this._renderer.xr.enabled=Ua,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Br,format:yn,colorSpace:Zt,depthBuffer:!1},i=Dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Yg(r,e,t)}return i}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ph),h.toneMapping=Ui,h.autoClear=!1;const f=new Pn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new at(new _i,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Ph),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const b=this._cubeSize;uo(i,v*b,m>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Os||e.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;uo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ih[(i-r-1)%Ih.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new at(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);const m=[];let v=0;for(let E=0;E<Qi;++E){const I=E/_,w=Math.exp(-I*I/2);m.push(w),E===0?v+=w:E<g&&(v+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-n;const x=this._sizeLods[i],A=3*x*(i>b-Ps?i-b+Ps:0),T=4*(this._cubeSize-x);uo(t,A,T,3*x,2*x),c.setRenderTarget(t),c.render(d,Pa)}}function qg(s){const e=[],t=[],n=[];let i=s;const r=s-Ps+1+Lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ps?c=Lh[o-s+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),b=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,I=T>2?0:-1,w=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(w,_*p*T),b.set(u,g*p*T);const M=[T,T,T,T,T,T];x.set(M,m*p*T)}const A=new Dt;A.setAttribute("position",new kt(v,_)),A.setAttribute("uv",new kt(b,g)),A.setAttribute("faceIndex",new kt(x,m)),e.push(A),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dh(s,e,t){const n=new os(s,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yg(s,e,t){const n=new Float32Array(Qi),i=new L(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Uh(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Nh(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function Kg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===dc||c===fc,h=c===Os||c===Bs;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new zh(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new zh(s)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $g(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jg(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);for(const p in u.morphAttributes){const _=u.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,p=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let b=0,x=v.length;b<x;b+=3){const A=v[b+0],T=v[b+1],E=v[b+2];u.push(A,T,T,E,E,A)}}else if(p!==void 0){const v=p.array;_=p.version;for(let b=0,x=v.length/3-1;b<x;b+=3){const A=b+0,T=b+1,E=b+2;u.push(A,T,T,E,E,A)}}else return;const g=new(pd(u)?yd:vd)(u,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Zg(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,u*o,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function d(u,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)l(u[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qg(s,e,t){const n=new WeakMap,i=new ct;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*A*4*d),E=new gd(T,x,A,d);E.type=Ln,E.needsUpdate=!0;const I=b*4;for(let M=0;M<d;M++){const P=g[M],V=m[M],F=v[M],G=x*A*4*M;for(let j=0;j<P.count;j++){const R=j*I;f===!0&&(i.fromBufferAttribute(P,j),T[G+R+0]=i.x,T[G+R+1]=i.y,T[G+R+2]=i.z,T[G+R+3]=0),p===!0&&(i.fromBufferAttribute(V,j),T[G+R+4]=i.x,T[G+R+5]=i.y,T[G+R+6]=i.z,T[G+R+7]=0),_===!0&&(i.fromBufferAttribute(F,j),T[G+R+8]=i.x,T[G+R+9]=i.y,T[G+R+10]=i.z,T[G+R+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new le(x,A)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function e_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Td extends Nt{constructor(e,t,n,i,r,o,a,c,l,h=zs){if(h!==zs&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=rs),n===void 0&&h===Vs&&(n=Hs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ed=new Nt,kh=new Td(1,1),Ad=new gd,Rd=new Bp,Cd=new Sd,Fh=[],Oh=[],Bh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function Zs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Fh[i];if(r===void 0&&(r=new Float32Array(i),Fh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function sa(s,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function r_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Vh.set(n),s.uniformMatrix2fv(this.addr,!1,Vh),Ot(t,n)}}function o_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Hh.set(n),s.uniformMatrix3fv(this.addr,!1,Hh),Ot(t,n)}}function a_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Bh.set(n),s.uniformMatrix4fv(this.addr,!1,Bh),Ot(t,n)}}function c_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function l_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function h_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function u_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function d_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function f_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function p_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function g_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kh.compareFunction=fd,r=kh):r=Ed,t.setTexture2D(e||r,i)}function __(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rd,i)}function x_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cd,i)}function v_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function y_(s){switch(s){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return c_;case 35667:case 35671:return l_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return v_}}function M_(s,e){s.uniform1fv(this.addr,e)}function b_(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function S_(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function w_(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function T_(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E_(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function A_(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function R_(s,e){s.uniform1iv(this.addr,e)}function C_(s,e){s.uniform2iv(this.addr,e)}function L_(s,e){s.uniform3iv(this.addr,e)}function P_(s,e){s.uniform4iv(this.addr,e)}function I_(s,e){s.uniform1uiv(this.addr,e)}function z_(s,e){s.uniform2uiv(this.addr,e)}function D_(s,e){s.uniform3uiv(this.addr,e)}function U_(s,e){s.uniform4uiv(this.addr,e)}function N_(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ed,r[o])}function k_(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rd,r[o])}function F_(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cd,r[o])}function O_(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ad,r[o])}function B_(s){switch(s){case 5126:return M_;case 35664:return b_;case 35665:return S_;case 35666:return w_;case 35674:return T_;case 35675:return E_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return L_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return z_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}class H_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class V_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}}class G_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Gh(s,e){s.seq.push(e),s.map[e.id]=e}function W_(s,e,t){const n=s.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Gh(t,l===void 0?new H_(a,s,e):new V_(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new G_(a),Gh(t,d)),t=d}}}class Uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);W_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const X_=37297;let q_=0;function Y_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xh=new Ge;function K_(s){Ze._getMatrix(Xh,Ze.workingColorSpace,s);const e=`mat3( ${Xh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case na:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Y_(s.getShaderSource(e),o)}else return i}function $_(s,e){const t=K_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j_(s,e){let t;switch(e){case jf:t="Linear";break;case Zf:t="Reinhard";break;case Jf:t="Cineon";break;case ed:t="ACESFilmic";break;case ep:t="AgX";break;case tp:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new L;function Z_(){Ze.getLuminanceCoefficients(fo);const s=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Q_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ex(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function yr(s){return s!==""}function Yh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(tx,ix)}const nx=new Map;function ix(s,e){let t=Xe[e];if(t===void 0){const n=nx.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vc(t)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(s){return s.replace(sx,rx)}function rx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jh(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case Bs:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function lx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Kf:e="ENVMAP_BLENDING_MIX";break;case $f:e="ENVMAP_BLENDING_ADD";break}return e}function hx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ux(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ox(t),l=ax(t),h=cx(t),d=lx(t),u=hx(t),f=J_(t),p=Q_(r),_=i.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=Vc(o),o=Yh(o,t),o=Kh(o,t),a=Vc(a),a=Yh(a,t),a=Kh(a,t),o=$h(o),a=$h(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+g+o,x=v+m+a,A=Wh(i,i.VERTEX_SHADER,b),T=Wh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(T).trim();let j=!0,R=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const K=qh(i,A,"vertex"),k=qh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+K+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||G==="")&&(R=!1);R&&(P.diagnostics={runnable:j,programLog:V,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:m}})}i.deleteShader(A),i.deleteShader(T),I=new Uo(i,_),w=ex(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,X_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let dx=0;class fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new px(e),t.set(e,n)),n}}class px{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function mx(s,e,t,n,i,r,o){const a=new _d,c=new fx,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,M,P,V,F){const G=V.fog,j=F.geometry,R=w.isMeshStandardMaterial?V.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||R),k=K&&K.mapping===ea?K.image.height:null,te=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=re!==void 0?re.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Be,X,ee,ge;if(te){const ft=Bn[te];Be=ft.vertexShader,X=ft.fragmentShader}else Be=w.vertexShader,X=w.fragmentShader,c.update(w),ee=c.getVertexShaderID(w),ge=c.getFragmentShaderID(w);const oe=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Ye=F.isBatchedMesh===!0,Et=!!w.map,nt=!!w.matcap,Lt=!!K,N=!!w.aoMap,pn=!!w.lightMap,Je=!!w.bumpMap,Qe=!!w.normalMap,Ie=!!w.displacementMap,bt=!!w.emissiveMap,Pe=!!w.metalnessMap,C=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,Z=w.dispersion>0,Q=w.iridescence>0,$=w.sheen>0,Ae=w.transmission>0,ue=y&&!!w.anisotropyMap,_e=O&&!!w.clearcoatMap,it=O&&!!w.clearcoatNormalMap,ie=O&&!!w.clearcoatRoughnessMap,ve=Q&&!!w.iridescenceMap,ze=Q&&!!w.iridescenceThicknessMap,Ue=$&&!!w.sheenColorMap,ye=$&&!!w.sheenRoughnessMap,et=!!w.specularMap,We=!!w.specularColorMap,yt=!!w.specularIntensityMap,z=Ae&&!!w.transmissionMap,he=Ae&&!!w.thicknessMap,Y=!!w.gradientMap,J=!!w.alphaMap,pe=w.alphaTest>0,de=!!w.alphaHash,He=!!w.extensions;let At=Ui;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(At=s.toneMapping);const Gt={shaderID:te,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:X,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Zt,alphaToCoverage:!!w.alphaToCoverage,map:Et,matcap:nt,envMap:Lt,envMapMode:Lt&&K.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:pn,bumpMap:Je,normalMap:Qe,displacementMap:u&&Ie,emissiveMap:bt,normalMapObjectSpace:Qe&&w.normalMapType===ap,normalMapTangentSpace:Qe&&w.normalMapType===ta,metalnessMap:Pe,roughnessMap:C,anisotropy:y,anisotropyMap:ue,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:it,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:Q,iridescenceMap:ve,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:et,specularColorMap:We,specularIntensityMap:yt,transmission:Ae,transmissionMap:z,thicknessMap:he,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Is&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:de,combine:w.combine,mapUv:Et&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:pn&&_(w.lightMap.channel),bumpMapUv:Je&&_(w.bumpMap.channel),normalMapUv:Qe&&_(w.normalMap.channel),displacementMapUv:Ie&&_(w.displacementMap.channel),emissiveMapUv:bt&&_(w.emissiveMap.channel),metalnessMapUv:Pe&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:ue&&_(w.anisotropyMap.channel),clearcoatMapUv:_e&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(w.sheenRoughnessMap.channel),specularMapUv:et&&_(w.specularMap.channel),specularColorMapUv:We&&_(w.specularColorMap.channel),specularIntensityMapUv:yt&&_(w.specularIntensityMap.channel),transmissionMapUv:z&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Qe||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Et||J),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:bt&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===an,flipSided:w.side===en,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(M,w),b(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=p[w.type];let P;if(M){const V=Bn[M];P=Jp.clone(V.uniforms)}else P=w.uniforms;return P}function A(w,M){let P;for(let V=0,F=h.length;V<F;V++){const G=h[V];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new ux(s,M,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:I}}function gx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function _x(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,p,_,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:_,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}function a(d,u,f,p,_,g){const m=o(d,u,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(d,u,f,p,_,g){const m=o(d,u,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,u){t.length>1&&t.sort(d||_x),n.length>1&&n.sort(u||Zh),i.length>1&&i.sort(u||Zh)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function xx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jh,s.set(n,[o])):i>=r.length?(o=new Jh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function vx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function yx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mx=0;function bx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sx(s){const e=new vx,t=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Oe,o=new Oe;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,b=0,x=0,A=0,T=0,E=0;l.sort(bx);for(let w=0,M=l.length;w<M;w++){const P=l[w],V=P.color,F=P.intensity,G=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*F,d+=V.g*F,u+=V.b*F;else if(P.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(P.sh.coefficients[R],F);E++}else if(P.isDirectionalLight){const R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=R,f++}else if(P.isSpotLight){const R=e.get(P);R.position.setFromMatrixPosition(P.matrixWorld),R.color.copy(V).multiplyScalar(F),R.distance=G,R.coneCos=Math.cos(P.angle),R.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),R.decay=P.decay,n.spot[_]=R;const K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=j,x++}_++}else if(P.isRectAreaLight){const R=e.get(P);R.color.copy(V).multiplyScalar(F),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=R,g++}else if(P.isPointLight){const R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),R.distance=P.distance,R.decay=P.decay,P.castShadow){const K=P.shadow,k=t.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=P.shadow.matrix,b++}n.point[p]=R,p++}else if(P.isHemisphereLight){const R=e.get(P);R.skyColor.copy(P.color).multiplyScalar(F),R.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=R,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=E,n.version=Mx++)}function c(l,h){let d=0,u=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const b=l[m];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Qh(s){const e=new Sx(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Qh(s),e.set(i,[a])):r>=o.length?(a=new Qh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Tx extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(s,e,t){let n=new pl;const i=new le,r=new le,o=new ct,a=new Tx({depthPacking:op}),c=new Ex,l={},h=t.maxTextureSize,d={[di]:en,[en]:di,[an]:an},u=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Dt;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let m=this.type;this.render=function(T,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Di),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=m!==si&&this.type===si,G=m===si&&this.type!==si;for(let j=0,R=T.length;j<R;j++){const K=T[j],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const te=k.getFrameExtents();if(i.multiply(te),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,k.mapSize.y=r.y)),k.map===null||F===!0||G===!0){const me=this.type!==si?{minFilter:jt,magFilter:jt}:{};k.map!==null&&k.map.dispose(),k.map=new os(i.x,i.y,me),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let me=0;me<re;me++){const Se=k.getViewport(me);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),V.viewport(o),k.updateMatrices(K,me),n=k.getFrustum(),x(E,I,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===si&&v(k,I),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,P)};function v(T,E){const I=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new os(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,I,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,I,f,_,null)}function b(T,E,I,w){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=M.uuid,F=E.uuid;let G=l[V];G===void 0&&(G={},l[V]=G);let j=G[F];j===void 0&&(j=M.clone(),G[F]=j,E.addEventListener("dispose",A)),M=j}if(M.visible=E.visible,M.wireframe=E.wireframe,w===si?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=s.properties.get(M);V.light=I}return M}function x(T,E,I,w,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const F=e.update(T),G=T.material;if(Array.isArray(G)){const j=F.groups;for(let R=0,K=j.length;R<K;R++){const k=j[R],te=G[k.materialIndex];if(te&&te.visible){const re=b(T,te,w,M);T.onBeforeShadow(s,T,E,I,F,re,k),s.renderBufferDirect(I,null,F,re,T,k),T.onAfterShadow(s,T,E,I,F,re,k)}}}else if(G.visible){const j=b(T,G,w,M);T.onBeforeShadow(s,T,E,I,F,j,null),s.renderBufferDirect(I,null,F,j,T,null),T.onAfterShadow(s,T,E,I,F,j,null)}}const V=T.children;for(let F=0,G=V.length;F<G;F++)x(V[F],E,I,w,M)}function A(T){T.target.removeEventListener("dispose",A);for(const I in l){const w=l[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Lx={[rc]:oc,[ac]:hc,[cc]:uc,[Fs]:lc,[oc]:rc,[hc]:ac,[uc]:cc,[lc]:Fs};function Px(s,e){function t(){let z=!1;const he=new ct;let Y=null;const J=new ct(0,0,0,0);return{setMask:function(pe){Y!==pe&&!z&&(s.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){z=pe},setClear:function(pe,de,He,At,Gt){Gt===!0&&(pe*=At,de*=At,He*=At),he.set(pe,de,He,At),J.equals(he)===!1&&(s.clearColor(pe,de,He,At),J.copy(he))},reset:function(){z=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let z=!1,he=!1,Y=null,J=null,pe=null;return{setReversed:function(de){if(he!==de){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const At=pe;pe=null,this.setClear(At)}he=de},getReversed:function(){return he},setTest:function(de){de?oe(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(de){Y!==de&&!z&&(s.depthMask(de),Y=de)},setFunc:function(de){if(he&&(de=Lx[de]),J!==de){switch(de){case rc:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case ac:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case lc:s.depthFunc(s.GEQUAL);break;case hc:s.depthFunc(s.GREATER);break;case uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=de}},setLocked:function(de){z=de},setClear:function(de){pe!==de&&(he&&(de=1-de),s.clearDepth(de),pe=de)},reset:function(){z=!1,Y=null,J=null,pe=null,he=!1}}}function i(){let z=!1,he=null,Y=null,J=null,pe=null,de=null,He=null,At=null,Gt=null;return{setTest:function(ft){z||(ft?oe(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(ft){he!==ft&&!z&&(s.stencilMask(ft),he=ft)},setFunc:function(ft,Sn,$n){(Y!==ft||J!==Sn||pe!==$n)&&(s.stencilFunc(ft,Sn,$n),Y=ft,J=Sn,pe=$n)},setOp:function(ft,Sn,$n){(de!==ft||He!==Sn||At!==$n)&&(s.stencilOp(ft,Sn,$n),de=ft,He=Sn,At=$n)},setLocked:function(ft){z=ft},setClear:function(ft){Gt!==ft&&(s.clearStencil(ft),Gt=ft)},reset:function(){z=!1,he=null,Y=null,J=null,pe=null,de=null,He=null,At=null,Gt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,b=null,x=null,A=null,T=null,E=new Ce(0,0,0),I=0,w=!1,M=null,P=null,V=null,F=null,G=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,K=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),R=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),R=K>=2);let te=null,re={};const me=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Be=new ct().fromArray(me),X=new ct().fromArray(Se);function ee(z,he,Y,J){const pe=new Uint8Array(4),de=s.createTexture();s.bindTexture(z,de),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Y;He++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(he+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return de}const ge={};ge[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(s.DEPTH_TEST),o.setFunc(Fs),Je(!1),Qe(eh),oe(s.CULL_FACE),N(Di);function oe(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Le(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function ke(z,he){return d[z]!==he?(s.bindFramebuffer(z,he),d[z]=he,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=he),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Ye(z,he){let Y=f,J=!1;if(z){Y=u.get(he),Y===void 0&&(Y=[],u.set(he,Y));const pe=z.textures;if(Y.length!==pe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let de=0,He=pe.length;de<He;de++)Y[de]=s.COLOR_ATTACHMENT0+de;Y.length=pe.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function Et(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const nt={[Ji]:s.FUNC_ADD,[Pf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};nt[zf]=s.MIN,nt[Df]=s.MAX;const Lt={[Uf]:s.ZERO,[Nf]:s.ONE,[kf]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[Gf]:s.SRC_ALPHA_SATURATE,[Hf]:s.DST_COLOR,[Of]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[Vf]:s.ONE_MINUS_DST_COLOR,[Bf]:s.ONE_MINUS_DST_ALPHA,[Wf]:s.CONSTANT_COLOR,[Xf]:s.ONE_MINUS_CONSTANT_COLOR,[qf]:s.CONSTANT_ALPHA,[Yf]:s.ONE_MINUS_CONSTANT_ALPHA};function N(z,he,Y,J,pe,de,He,At,Gt,ft){if(z===Di){_===!0&&(Le(s.BLEND),_=!1);return}if(_===!1&&(oe(s.BLEND),_=!0),z!==Lf){if(z!==g||ft!==w){if((m!==Ji||x!==Ji)&&(s.blendEquation(s.FUNC_ADD),m=Ji,x=Ji),ft)switch(z){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nc:s.blendFunc(s.ONE,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,b=null,A=null,T=null,E.set(0,0,0),I=0,g=z,w=ft}return}pe=pe||he,de=de||Y,He=He||J,(he!==m||pe!==x)&&(s.blendEquationSeparate(nt[he],nt[pe]),m=he,x=pe),(Y!==v||J!==b||de!==A||He!==T)&&(s.blendFuncSeparate(Lt[Y],Lt[J],Lt[de],Lt[He]),v=Y,b=J,A=de,T=He),(At.equals(E)===!1||Gt!==I)&&(s.blendColor(At.r,At.g,At.b,Gt),E.copy(At),I=Gt),g=z,w=!1}function pn(z,he){z.side===an?Le(s.CULL_FACE):oe(s.CULL_FACE);let Y=z.side===en;he&&(Y=!Y),Je(Y),z.blending===Is&&z.transparent===!1?N(Di):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const J=z.stencilWrite;a.setTest(J),J&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function Qe(z){z!==Af?(oe(s.CULL_FACE),z!==P&&(z===eh?s.cullFace(s.BACK):z===Rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),P=z}function Ie(z){z!==V&&(R&&s.lineWidth(z),V=z)}function bt(z,he,Y){z?(oe(s.POLYGON_OFFSET_FILL),(F!==he||G!==Y)&&(s.polygonOffset(he,Y),F=he,G=Y)):Le(s.POLYGON_OFFSET_FILL)}function Pe(z){z?oe(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function C(z){z===void 0&&(z=s.TEXTURE0+j-1),te!==z&&(s.activeTexture(z),te=z)}function y(z,he,Y){Y===void 0&&(te===null?Y=s.TEXTURE0+j-1:Y=te);let J=re[Y];J===void 0&&(J={type:void 0,texture:void 0},re[Y]=J),(J.type!==z||J.texture!==he)&&(te!==Y&&(s.activeTexture(Y),te=Y),s.bindTexture(z,he||ge[z]),J.type=z,J.texture=he)}function O(){const z=re[te];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(z){Be.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Be.copy(z))}function ye(z){X.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function et(z,he){let Y=l.get(he);Y===void 0&&(Y=new WeakMap,l.set(he,Y));let J=Y.get(z);J===void 0&&(J=s.getUniformBlockIndex(he,z.name),Y.set(z,J))}function We(z,he){const J=l.get(he).get(z);c.get(he)!==J&&(s.uniformBlockBinding(he,J,z.__bindingPointIndex),c.set(he,J))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,re={},d={},u=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,b=null,x=null,A=null,T=null,E=new Ce(0,0,0),I=0,w=!1,M=null,P=null,V=null,F=null,G=null,Be.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Le,bindFramebuffer:ke,drawBuffers:Ye,useProgram:Et,setBlending:N,setMaterial:pn,setFlipSided:Je,setCullFace:Qe,setLineWidth:Ie,setPolygonOffset:bt,setScissorTest:Pe,activeTexture:C,bindTexture:y,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ve,texImage3D:ze,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:it,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Ue,viewport:ye,reset:yt}}function eu(s,e,t,n){const i=Ix(n);switch(t){case od:return s*e;case cd:return s*e;case ld:return s*e*2;case ll:return s*e/i.components*i.byteLength;case hl:return s*e/i.components*i.byteLength;case hd:return s*e*2/i.components*i.byteLength;case ul:return s*e*2/i.components*i.byteLength;case ad:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case dl:return s*e*4/i.components*i.byteLength;case Lo:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Io:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:case _c:return Math.max(s,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(s,8)*Math.max(e,8)/2;case xc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Do:case Uc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ud:case kc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fc:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(s){switch(s){case pi:case id:return{byteLength:1,components:1};case Lr:case sd:case Br:return{byteLength:2,components:1};case al:case cl:return{byteLength:2,components:4};case rs:case ol:case Ln:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return f?new OffscreenCanvas(C,y):zr("canvas")}function _(C,y,O){let Z=1;const Q=Pe(C);if((Q.width>O||Q.height>O)&&(Z=O/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*Q.width),Ae=Math.floor(Z*Q.height);d===void 0&&(d=p($,Ae));const ue=y?p($,Ae):d;return ue.width=$,ue.height=Ae,ue.getContext("2d").drawImage(C,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ae+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,y,O,Z,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=y;if(y===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),y===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const Ae=Q?na:Ze.getTransfer(Z);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=Ae===_t?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(C,y){let O;return C?y===null||y===rs||y===Hs?O=s.DEPTH24_STENCIL8:y===Ln?O=s.DEPTH32F_STENCIL8:y===Lr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rs||y===Hs?O=s.DEPTH_COMPONENT24:y===Ln?O=s.DEPTH_COMPONENT32F:y===Lr&&(O=s.DEPTH_COMPONENT16),O}function A(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){const y=C.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&h.delete(y)}function E(C){const y=C.target;y.removeEventListener("dispose",E),M(y)}function I(C){const y=n.get(C);if(y.__webglInit===void 0)return;const O=C.source,Z=u.get(O);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(Z).length===0&&u.delete(O)}n.remove(C)}function w(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const O=C.source,Z=u.get(O);delete Z[y.__cacheKey],o.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let Z=0,Q=O.length;Z<Q;Z++){const $=n.get(O[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(C)}let P=0;function V(){P=0}function F(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function G(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){const O=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,C,y);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function R(C,y){const O=n.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function K(C,y){const O=n.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function k(C,y){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ee(O,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const te={[fi]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[ko]:s.MIRRORED_REPEAT},re={[jt]:s.NEAREST,[nd]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[Co]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},me={[cp]:s.NEVER,[pp]:s.ALWAYS,[lp]:s.LESS,[fd]:s.LEQUAL,[hp]:s.EQUAL,[fp]:s.GEQUAL,[up]:s.GREATER,[dp]:s.NOTEQUAL};function Se(C,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===Co||y.magFilter===xr||y.magFilter===ai||y.minFilter===un||y.minFilter===Co||y.minFilter===xr||y.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,te[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,te[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,te[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,re[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jt||y.minFilter!==xr&&y.minFilter!==ai||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Be(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));const Z=y.source;let Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));const $=G(y);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[$].usedTimes++;const Ae=Q[C.__cacheKey];Ae!==void 0&&(Q[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(y)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return O}function X(C,y,O){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=Be(C,y),$=y.source;t.bindTexture(Z,C.__webglTexture,s.TEXTURE0+O);const Ae=n.get($);if($.version!==Ae.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const ue=Ze.getPrimaries(Ze.workingColorSpace),_e=y.colorSpace===Li?null:Ze.getPrimaries(y.colorSpace),it=y.colorSpace===Li||ue===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ie=_(y.image,!1,i.maxTextureSize);ie=bt(y,ie);const ve=r.convert(y.format,y.colorSpace),ze=r.convert(y.type);let Ue=b(y.internalFormat,ve,ze,y.colorSpace,y.isVideoTexture);Se(Z,y);let ye;const et=y.mipmaps,We=y.isVideoTexture!==!0,yt=Ae.__version===void 0||Q===!0,z=$.dataReady,he=A(y,ie);if(y.isDepthTexture)Ue=x(y.format===Vs,y.type),yt&&(We?t.texStorage2D(s.TEXTURE_2D,1,Ue,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ve,ze,null));else if(y.isDataTexture)if(et.length>0){We&&yt&&t.texStorage2D(s.TEXTURE_2D,he,Ue,et[0].width,et[0].height);for(let Y=0,J=et.length;Y<J;Y++)ye=et[Y],We?z&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,ze,ye.data):t.texImage2D(s.TEXTURE_2D,Y,Ue,ye.width,ye.height,0,ve,ze,ye.data);y.generateMipmaps=!1}else We?(yt&&t.texStorage2D(s.TEXTURE_2D,he,Ue,ie.width,ie.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,ze,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ve,ze,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ue,et[0].width,et[0].height,ie.depth);for(let Y=0,J=et.length;Y<J;Y++)if(ye=et[Y],y.format!==yn)if(ve!==null)if(We){if(z)if(y.layerUpdates.size>0){const pe=eu(ye.width,ye.height,y.format,y.type);for(const de of y.layerUpdates){const He=ye.data.subarray(de*pe/ye.data.BYTES_PER_ELEMENT,(de+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,de,ye.width,ye.height,1,ve,He)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ve,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ue,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ve,ze,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ue,ye.width,ye.height,ie.depth,0,ve,ze,ye.data)}else{We&&yt&&t.texStorage2D(s.TEXTURE_2D,he,Ue,et[0].width,et[0].height);for(let Y=0,J=et.length;Y<J;Y++)ye=et[Y],y.format!==yn?ve!==null?We?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?z&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,ze,ye.data):t.texImage2D(s.TEXTURE_2D,Y,Ue,ye.width,ye.height,0,ve,ze,ye.data)}else if(y.isDataArrayTexture)if(We){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ue,ie.width,ie.height,ie.depth),z)if(y.layerUpdates.size>0){const Y=eu(ie.width,ie.height,y.format,y.type);for(const J of y.layerUpdates){const pe=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,ze,pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,ze,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,ve,ze,ie.data);else if(y.isData3DTexture)We?(yt&&t.texStorage3D(s.TEXTURE_3D,he,Ue,ie.width,ie.height,ie.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,ze,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,ve,ze,ie.data);else if(y.isFramebufferTexture){if(yt)if(We)t.texStorage2D(s.TEXTURE_2D,he,Ue,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let pe=0;pe<he;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ue,Y,J,0,ve,ze,null),Y>>=1,J>>=1}}else if(et.length>0){if(We&&yt){const Y=Pe(et[0]);t.texStorage2D(s.TEXTURE_2D,he,Ue,Y.width,Y.height)}for(let Y=0,J=et.length;Y<J;Y++)ye=et[Y],We?z&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve,ze,ye):t.texImage2D(s.TEXTURE_2D,Y,Ue,ve,ze,ye);y.generateMipmaps=!1}else if(We){if(yt){const Y=Pe(ie);t.texStorage2D(s.TEXTURE_2D,he,Ue,Y.width,Y.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,ze,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ue,ve,ze,ie);g(y)&&m(Z),Ae.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ee(C,y,O){if(y.image.length!==6)return;const Z=Be(C,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const $=n.get(Q);if(Q.version!==$.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const Ae=Ze.getPrimaries(Ze.workingColorSpace),ue=y.colorSpace===Li?null:Ze.getPrimaries(y.colorSpace),_e=y.colorSpace===Li||Ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!it&&!ie?ve[J]=_(y.image[J],!0,i.maxCubemapSize):ve[J]=ie?y.image[J].image:y.image[J],ve[J]=bt(y,ve[J]);const ze=ve[0],Ue=r.convert(y.format,y.colorSpace),ye=r.convert(y.type),et=b(y.internalFormat,Ue,ye,y.colorSpace),We=y.isVideoTexture!==!0,yt=$.__version===void 0||Z===!0,z=Q.dataReady;let he=A(y,ze);Se(s.TEXTURE_CUBE_MAP,y);let Y;if(it){We&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,et,ze.width,ze.height);for(let J=0;J<6;J++){Y=ve[J].mipmaps;for(let pe=0;pe<Y.length;pe++){const de=Y[pe];y.format!==yn?Ue!==null?We?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,de.width,de.height,Ue,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,et,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,de.width,de.height,Ue,ye,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,et,de.width,de.height,0,Ue,ye,de.data)}}}else{if(Y=y.mipmaps,We&&yt){Y.length>0&&he++;const J=Pe(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,et,J.width,J.height)}for(let J=0;J<6;J++)if(ie){We?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ue,ye,ve[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,ve[J].width,ve[J].height,0,Ue,ye,ve[J].data);for(let pe=0;pe<Y.length;pe++){const He=Y[pe].image[J].image;We?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,He.width,He.height,Ue,ye,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,et,He.width,He.height,0,Ue,ye,He.data)}}else{We?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ye,ve[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,Ue,ye,ve[J]);for(let pe=0;pe<Y.length;pe++){const de=Y[pe];We?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ue,ye,de.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,et,Ue,ye,de.image[J])}}}g(y)&&m(s.TEXTURE_CUBE_MAP),$.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,O,Z,Q,$){const Ae=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),_e=b(O.internalFormat,Ae,ue,O.colorSpace),it=n.get(y),ie=n.get(O);if(ie.__renderTarget=y,!it.__hasExternalTextures){const ve=Math.max(1,y.width>>$),ze=Math.max(1,y.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,_e,ve,ze,y.depth,0,Ae,ue,null):t.texImage2D(Q,$,_e,ve,ze,0,Ae,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Qe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,ie.__webglTexture,0,Je(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,ie.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=x(y.stencilBuffer,Q),Ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Je(y);Qe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,$,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,C)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const $=Z[Q],Ae=r.convert($.format,$.colorSpace),ue=r.convert($.type),_e=b($.internalFormat,Ae,ue,$.colorSpace),it=Je(y);O&&Qe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,_e,y.width,y.height):Qe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,_e,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,_e,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const Q=Z.__webglTexture,$=Je(y);if(y.depthTexture.format===zs)Qe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Vs)Qe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(C){const y=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Le(y.__webglFramebuffer,C)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),oe(y.__webglDepthbuffer[Z],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),oe(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(C,y,O){const Z=n.get(C);y!==void 0&&ge(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ke(C)}function Et(C){const y=C.texture,O=n.get(C),Z=n.get(y);C.addEventListener("dispose",E);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let _e=0;_e<y.mipmaps.length;_e++)O.__webglFramebuffer[ue][_e]=s.createFramebuffer()}else O.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[ue]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ue=0,_e=Q.length;ue<_e;ue++){const it=n.get(Q[ue]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Qe(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const _e=Q[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const it=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),ve=b(_e.internalFormat,it,ie,_e.colorSpace,C.isXRRenderTarget===!0),ze=Je(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,ve,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(s.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ge(O.__webglFramebuffer[ue][_e],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else ge(O.__webglFramebuffer[ue],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,_e=Q.length;ue<_e;ue++){const it=Q[ue],ie=n.get(it);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Se(s.TEXTURE_2D,it),ge(O.__webglFramebuffer,C,it,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),g(it)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),Se(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ge(O.__webglFramebuffer[_e],C,y,s.COLOR_ATTACHMENT0,ue,_e);else ge(O.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,ue,0);g(y)&&m(ue),t.unbindTexture()}C.depthBuffer&&ke(C)}function nt(C){const y=C.textures;for(let O=0,Z=y.length;O<Z;O++){const Q=y[O];if(g(Q)){const $=v(C),Ae=n.get(Q).__webglTexture;t.bindTexture($,Ae),m($),t.unbindTexture()}}}const Lt=[],N=[];function pn(C){if(C.samples>0){if(Qe(C)===!1){const y=C.textures,O=C.width,Z=C.height;let Q=s.COLOR_BUFFER_BIT;const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(C),ue=y.length>1;if(ue)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const it=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,Q,s.NEAREST),c===!0&&(Lt.length=0,N.length=0,Lt.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Lt.push($),N.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const it=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Je(C){return Math.min(i.maxSamples,C.samples)}function Qe(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ie(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function bt(C,y){const O=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Zt&&O!==Li&&(Ze.getTransfer(O)===_t?(Z!==yn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=R,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Ye,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Qe}function Dx(s,e){function t(n,i=Li){let r;const o=Ze.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===id)return s.BYTE;if(n===sd)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===ol)return s.INT;if(n===rs)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Br)return s.HALF_FLOAT;if(n===od)return s.ALPHA;if(n===ad)return s.RGB;if(n===yn)return s.RGBA;if(n===cd)return s.LUMINANCE;if(n===ld)return s.LUMINANCE_ALPHA;if(n===zs)return s.DEPTH_COMPONENT;if(n===Vs)return s.DEPTH_STENCIL;if(n===ll)return s.RED;if(n===hl)return s.RED_INTEGER;if(n===hd)return s.RG;if(n===ul)return s.RG_INTEGER;if(n===dl)return s.RGBA_INTEGER;if(n===Lo||n===Po||n===Io||n===zo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===vc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Lc||n===Pc||n===Ic||n===zc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Uc||n===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ud||n===kc||n===Fc||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Ux extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Nt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fi({vertexShader:kx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends js{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null;const _=new Ox,g=t.getContextAttributes();let m=null,v=null;const b=[],x=[],A=new le;let T=null;const E=new $t;E.viewport=new ct;const I=new $t;I.viewport=new ct;const w=[E,I],M=new Ux;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=b[X];return ee===void 0&&(ee=new ka,b[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=b[X];return ee===void 0&&(ee=new ka,b[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=b[X];return ee===void 0&&(ee=new ka,b[X]=ee),ee.getHandSpace()};function F(X){const ee=x.indexOf(X.inputSource);if(ee===-1)return;const ge=b[ee];ge!==void 0&&(ge.update(X.inputSource,X.frame,l||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let X=0;X<b.length;X++){const ee=x[X];ee!==null&&(x[X]=null,b[X].disconnect(ee))}P=null,V=null,_.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new os(f.framebufferWidth,f.framebufferHeight,{format:yn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,ge=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Vs:zs,ge=g.stencil?Hs:rs);const Le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Le),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new os(u.textureWidth,u.textureHeight,{format:yn,type:pi,depthTexture:new Td(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){const ge=X.removed[ee],oe=x.indexOf(ge);oe>=0&&(x[oe]=null,b[oe].disconnect(ge))}for(let ee=0;ee<X.added.length;ee++){const ge=X.added[ee];let oe=x.indexOf(ge);if(oe===-1){for(let ke=0;ke<b.length;ke++)if(ke>=x.length){x.push(ge),oe=ke;break}else if(x[ke]===null){x[ke]=ge,oe=ke;break}if(oe===-1)break}const Le=b[oe];Le&&Le.connect(ge)}}const R=new L,K=new L;function k(X,ee,ge){R.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);const oe=R.distanceTo(K),Le=ee.projectionMatrix.elements,ke=ge.projectionMatrix.elements,Ye=Le[14]/(Le[10]-1),Et=Le[14]/(Le[10]+1),nt=(Le[9]+1)/Le[5],Lt=(Le[9]-1)/Le[5],N=(Le[8]-1)/Le[0],pn=(ke[8]+1)/ke[0],Je=Ye*N,Qe=Ye*pn,Ie=oe/(-N+pn),bt=Ie*-N;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(bt),X.translateZ(Ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Le[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Pe=Ye+Ie,C=Et+Ie,y=Je-bt,O=Qe+(oe-bt),Z=nt*Et/C*Pe,Q=Lt*Et/C*Pe;X.projectionMatrix.makePerspective(y,O,Z,Q,Pe,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ee=X.near,ge=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),M.near=I.near=E.near=ee,M.far=I.far=E.far=ge,(P!==M.near||V!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),E.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=E.layers.mask|I.layers.mask;const oe=X.parent,Le=M.cameras;te(M,oe);for(let ke=0;ke<Le.length;ke++)te(Le[ke],oe);Le.length===2?k(M,E,I):M.projectionMatrix.copy(E.projectionMatrix),re(X,M,oe)};function re(X,ee,ge){ge===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let me=null;function Se(X,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let oe=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let ke=0;ke<ge.length;ke++){const Ye=ge[ke];let Et=null;if(f!==null)Et=f.getViewport(Ye);else{const Lt=d.getViewSubImage(u,Ye);Et=Lt.viewport,ke===0&&(e.setRenderTargetTextures(v,Lt.colorTexture,u.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(v))}let nt=w[ke];nt===void 0&&(nt=new $t,nt.layers.enable(ke),nt.viewport=new ct,w[ke]=nt),nt.matrix.fromArray(Ye.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ye.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Et.x,Et.y,Et.width,Et.height),ke===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(nt)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=d.getDepthInformation(ge[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,i.renderState)}}for(let ge=0;ge<b.length;ge++){const oe=x[ge],Le=b[ge];oe!==null&&Le!==void 0&&Le.update(oe,ee,l||o)}me&&me(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Be=new wd;Be.setAnimationLoop(Se),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const Xi=new bn,Hx=new Oe;function Vx(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Md(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),b=v.envMap,x=v.envMapRotation;b&&(g.envMap.value=b,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Xi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const x=b.program;n.uniformBlockBinding(v,x)}function l(v,b){let x=i[v.id];x===void 0&&(p(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));const A=b.program;n.updateUBOMapping(v,A);const T=e.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){const b=d();v.__bindingPointIndex=b;const x=s.createBuffer(),A=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=i[v.id],x=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,E=x.length;T<E;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,M=I.length;w<M;w++){const P=I[w];if(f(P,T,w,A)===!0){const V=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let j=0;j<F.length;j++){const R=F[j],K=_(R);typeof R=="number"||typeof R=="boolean"?(P.__data[0]=R,s.bufferSubData(s.UNIFORM_BUFFER,V+G,P.__data)):R.isMatrix3?(P.__data[0]=R.elements[0],P.__data[1]=R.elements[1],P.__data[2]=R.elements[2],P.__data[3]=0,P.__data[4]=R.elements[3],P.__data[5]=R.elements[4],P.__data[6]=R.elements[5],P.__data[7]=0,P.__data[8]=R.elements[6],P.__data[9]=R.elements[7],P.__data[10]=R.elements[8],P.__data[11]=0):(R.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,x,A){const T=v.value,E=b+"_"+x;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const I=A[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function p(v){const b=v.uniforms;let x=0;const A=16;for(let E=0,I=b.length;E<I;E++){const w=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,P=w.length;M<P;M++){const V=w[M],F=Array.isArray(V.value)?V.value:[V.value];for(let G=0,j=F.length;G<j;G++){const R=F[G],K=_(R),k=x%A,te=k%K.boundary,re=k+te;x+=te,re!==0&&A-re<K.storage&&(x+=A-re),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=K.storage}}}const T=x%A;return T>0&&(x+=A-T),v.__size=x,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){const b=v.target;b.removeEventListener("dispose",g);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class Wx{constructor(e={}){const{canvas:t=Ip(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Ui,this.toneMappingExposure=1;const x=this;let A=!1,T=0,E=0,I=null,w=-1,M=null;const P=new ct,V=new ct;let F=null;const G=new Ce(0);let j=0,R=t.width,K=t.height,k=1,te=null,re=null;const me=new ct(0,0,R,K),Se=new ct(0,0,R,K);let Be=!1;const X=new pl;let ee=!1,ge=!1;const oe=new Oe,Le=new Oe,ke=new L,Ye=new ct,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Lt(){return I===null?k:1}let N=n;function pn(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){const D="webgl2";if(N=pn(D,S),N===null)throw pn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,Qe,Ie,bt,Pe,C,y,O,Z,Q,$,Ae,ue,_e,it,ie,ve,ze,Ue,ye,et,We,yt,z;function he(){Je=new $g(N),Je.init(),We=new Dx(N,Je),Qe=new Gg(N,Je,e,We),Ie=new Px(N,Je),Qe.reverseDepthBuffer&&u&&Ie.buffers.depth.setReversed(!0),bt=new Jg(N),Pe=new gx,C=new zx(N,Je,Ie,Pe,Qe,We,bt),y=new Xg(x),O=new Kg(x),Z=new rm(N),yt=new Hg(N,Z),Q=new jg(N,Z,bt,yt),$=new e_(N,Q,Z,bt),Ue=new Qg(N,Qe,C),ie=new Wg(Pe),Ae=new mx(x,y,O,Je,Qe,yt,ie),ue=new Vx(x,Pe),_e=new xx,it=new wx(Je),ze=new Bg(x,y,O,Ie,$,f,c),ve=new Cx(x,$,Qe),z=new Gx(N,bt,Qe,Ie),ye=new Vg(N,Je,bt),et=new Zg(N,Je,bt),bt.programs=Ae.programs,x.capabilities=Qe,x.extensions=Je,x.properties=Pe,x.renderLists=_e,x.shadowMap=ve,x.state=Ie,x.info=bt}he();const Y=new Bx(x,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(R,K,!1))},this.getSize=function(S){return S.set(R,K)},this.setSize=function(S,D,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=S,K=D,t.width=Math.floor(S*k),t.height=Math.floor(D*k),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(R*k,K*k).floor()},this.setDrawingBufferSize=function(S,D,B){R=S,K=D,k=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,D,B,H){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,D,B,H),Ie.viewport(P.copy(me).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Se)},this.setScissor=function(S,D,B,H){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,D,B,H),Ie.scissor(V.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(S){Ie.setScissorTest(Be=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(S=!0,D=!0,B=!0){let H=0;if(S){let U=!1;if(I!==null){const se=I.texture.format;U=se===dl||se===ul||se===hl}if(U){const se=I.texture.type,fe=se===pi||se===rs||se===Lr||se===Hs||se===al||se===cl,we=ze.getClearColor(),Te=ze.getClearAlpha(),Fe=we.r,Ve=we.g,Ee=we.b;fe?(p[0]=Fe,p[1]=Ve,p[2]=Ee,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Fe,_[1]=Ve,_[2]=Ee,_[3]=Te,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),it.dispose(),Pe.dispose(),y.dispose(),O.dispose(),$.dispose(),yt.dispose(),z.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ql),Y.removeEventListener("sessionend",Yl),Oi.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=bt.autoReset,D=ve.enabled,B=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;he(),bt.autoReset=S,ve.enabled=D,ve.autoUpdate=B,ve.needsUpdate=H,ve.type=U}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const D=S.target;D.removeEventListener("dispose",He),At(D)}function At(S){Gt(S),Pe.remove(S)}function Gt(S){const D=Pe.get(S).programs;D!==void 0&&(D.forEach(function(B){Ae.releaseProgram(B)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,H,U,se){D===null&&(D=Et);const fe=U.isMesh&&U.matrixWorld.determinant()<0,we=bf(S,D,B,H,U);Ie.setMaterial(H,fe);let Te=B.index,Fe=1;if(H.wireframe===!0){if(Te=Q.getWireframeAttribute(B),Te===void 0)return;Fe=2}const Ve=B.drawRange,Ee=B.attributes.position;let rt=Ve.start*Fe,Mt=(Ve.start+Ve.count)*Fe;se!==null&&(rt=Math.max(rt,se.start*Fe),Mt=Math.min(Mt,(se.start+se.count)*Fe)),Te!==null?(rt=Math.max(rt,0),Mt=Math.min(Mt,Te.count)):Ee!=null&&(rt=Math.max(rt,0),Mt=Math.min(Mt,Ee.count));const St=Mt-rt;if(St<0||St===1/0)return;yt.setup(U,H,we,B,Te);let Jt,lt=ye;if(Te!==null&&(Jt=Z.get(Te),lt=et,lt.setIndex(Jt)),U.isMesh)H.wireframe===!0?(Ie.setLineWidth(H.wireframeLinewidth*Lt()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(U.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),Ie.setLineWidth(Re*Lt()),U.isLineSegments?lt.setMode(N.LINES):U.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else U.isPoints?lt.setMode(N.POINTS):U.isSprite&&lt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,jn=U._multiDrawCounts,ht=U._multiDrawCount,wn=Te?Z.get(Te).bytesPerElement:1,hs=Pe.get(H).currentProgram.getUniforms();for(let nn=0;nn<ht;nn++)hs.setValue(N,"_gl_DrawID",nn),lt.render(Re[nn]/wn,jn[nn])}else if(U.isInstancedMesh)lt.renderInstances(rt,St,U.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,jn=Math.min(B.instanceCount,Re);lt.renderInstances(rt,St,jn)}else lt.render(rt,St)};function ft(S,D,B){S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,qr(S,D,B),S.side=di,S.needsUpdate=!0,qr(S,D,B),S.side=an):qr(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),m=it.get(B),m.init(D),b.push(m),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const H=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const we=se[fe];ft(we,B,U),H.add(we)}else ft(se,B,U),H.add(se)}),b.pop(),m=null,H},this.compileAsync=function(S,D,B=null){const H=this.compile(S,D,B);return new Promise(U=>{function se(){if(H.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){U(S);return}setTimeout(se,10)}Je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Sn=null;function $n(S){Sn&&Sn(S)}function ql(){Oi.stop()}function Yl(){Oi.start()}const Oi=new wd;Oi.setAnimationLoop($n),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(S){Sn=S,Y.setAnimationLoop(S),S===null?Oi.stop():Oi.start()},Y.addEventListener("sessionstart",ql),Y.addEventListener("sessionend",Yl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,I),m=it.get(S,b.length),m.init(D),b.push(m),Le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Le),ge=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,ge),g=_e.get(S,v.length),g.init(),v.push(g),Y.enabled===!0&&Y.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&la(se,D,-1/0,x.sortObjects)}la(S,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(te,re),nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,nt&&ze.addToRenderList(g,S),this.info.render.frame++,ee===!0&&ie.beginShadows();const B=m.state.shadowsArray;ve.render(B,S,D),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,U=g.transmissive;if(m.setupLights(),D.isArrayCamera){const se=D.cameras;if(U.length>0)for(let fe=0,we=se.length;fe<we;fe++){const Te=se[fe];$l(H,U,S,Te)}nt&&ze.render(S);for(let fe=0,we=se.length;fe<we;fe++){const Te=se[fe];Kl(g,S,Te,Te.viewport)}}else U.length>0&&$l(H,U,S,D),nt&&ze.render(S),Kl(g,S,D);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,D),yt.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],ee===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function la(S,D,B,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){H&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const fe=$.update(S),we=S.material;we.visible&&g.push(S,fe,we,B,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const fe=$.update(S),we=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(we)){const Te=fe.groups;for(let Fe=0,Ve=Te.length;Fe<Ve;Fe++){const Ee=Te[Fe],rt=we[Ee.materialIndex];rt&&rt.visible&&g.push(S,fe,rt,B,Ye.z,Ee)}}else we.visible&&g.push(S,fe,we,B,Ye.z,null)}}const se=S.children;for(let fe=0,we=se.length;fe<we;fe++)la(se[fe],D,B,H)}function Kl(S,D,B,H){const U=S.opaque,se=S.transmissive,fe=S.transparent;m.setupLightsView(B),ee===!0&&ie.setGlobalState(x.clippingPlanes,B),H&&Ie.viewport(P.copy(H)),U.length>0&&Xr(U,D,B),se.length>0&&Xr(se,D,B),fe.length>0&&Xr(fe,D,B),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function $l(S,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new os(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Br:pi,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],fe=H.viewport||P;se.setSize(fe.z,fe.w);const we=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),nt&&ze.render(B);const Te=x.toneMapping;x.toneMapping=Ui;const Fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),ee===!0&&ie.setGlobalState(x.clippingPlanes,H),Xr(S,B,H),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ee=0,rt=D.length;Ee<rt;Ee++){const Mt=D[Ee],St=Mt.object,Jt=Mt.geometry,lt=Mt.material,Re=Mt.group;if(lt.side===an&&St.layers.test(H.layers)){const jn=lt.side;lt.side=en,lt.needsUpdate=!0,jl(St,B,H,Jt,lt,Re),lt.side=jn,lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}x.setRenderTarget(we),x.setClearColor(G,j),Fe!==void 0&&(H.viewport=Fe),x.toneMapping=Te}function Xr(S,D,B){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,se=S.length;U<se;U++){const fe=S[U],we=fe.object,Te=fe.geometry,Fe=H===null?fe.material:H,Ve=fe.group;we.layers.test(B.layers)&&jl(we,D,B,Te,Fe,Ve)}}function jl(S,D,B,H,U,se){S.onBeforeRender(x,D,B,H,U,se),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,D,B,H,S,se),U.transparent===!0&&U.side===an&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,x.renderBufferDirect(B,D,H,U,S,se),U.side=di,U.needsUpdate=!0,x.renderBufferDirect(B,D,H,U,S,se),U.side=an):x.renderBufferDirect(B,D,H,U,S,se),S.onAfterRender(x,D,B,H,U,se)}function qr(S,D,B){D.isScene!==!0&&(D=Et);const H=Pe.get(S),U=m.state.lights,se=m.state.shadowsArray,fe=U.state.version,we=Ae.getParameters(S,U.state,se,D,B),Te=Ae.getProgramCacheKey(we);let Fe=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",He),Fe=new Map,H.programs=Fe);let Ve=Fe.get(Te);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===fe)return Jl(S,we),Ve}else we.uniforms=Ae.getUniforms(S),S.onBeforeCompile(we,x),Ve=Ae.acquireProgram(we,Te),Fe.set(Te,Ve),H.uniforms=we.uniforms;const Ee=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Jl(S,we),H.needsLights=wf(S),H.lightsStateVersion=fe,H.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function Zl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Uo.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Jl(S,D){const B=Pe.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function bf(S,D,B,H,U){D.isScene!==!0&&(D=Et),C.resetTextureUnits();const se=D.fog,fe=H.isMeshStandardMaterial?D.environment:null,we=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Zt,Te=(H.isMeshStandardMaterial?O:y).get(H.envMap||fe),Fe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ve=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!B.morphAttributes.position,rt=!!B.morphAttributes.normal,Mt=!!B.morphAttributes.color;let St=Ui;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(St=x.toneMapping);const Jt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=Jt!==void 0?Jt.length:0,Re=Pe.get(H),jn=m.state.lights;if(ee===!0&&(ge===!0||S!==M)){const mn=S===M&&H.id===w;ie.setState(H,S,mn)}let ht=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==jn.state.version||Re.outputColorSpace!==we||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==Te||H.fog===!0&&Re.fog!==se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==Ve||Re.morphTargets!==Ee||Re.morphNormals!==rt||Re.morphColors!==Mt||Re.toneMapping!==St||Re.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,Re.__version=H.version);let wn=Re.currentProgram;ht===!0&&(wn=qr(H,D,U));let hs=!1,nn=!1,nr=!1;const wt=wn.getUniforms(),Fn=Re.uniforms;if(Ie.useProgram(wn.program)&&(hs=!0,nn=!0,nr=!0),H.id!==w&&(w=H.id,nn=!0),hs||M!==S){Ie.buffers.depth.getReversed()?(oe.copy(S.projectionMatrix),Dp(oe),Up(oe),wt.setValue(N,"projectionMatrix",oe)):wt.setValue(N,"projectionMatrix",S.projectionMatrix),wt.setValue(N,"viewMatrix",S.matrixWorldInverse);const xi=wt.map.cameraPosition;xi!==void 0&&xi.setValue(N,ke.setFromMatrixPosition(S.matrixWorld)),Qe.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,nn=!0,nr=!0)}if(U.isSkinnedMesh){wt.setOptional(N,U,"bindMatrix"),wt.setOptional(N,U,"bindMatrixInverse");const mn=U.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),wt.setValue(N,"boneTexture",mn.boneTexture,C))}U.isBatchedMesh&&(wt.setOptional(N,U,"batchingTexture"),wt.setValue(N,"batchingTexture",U._matricesTexture,C),wt.setOptional(N,U,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",U._indirectTexture,C),wt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",U._colorsTexture,C));const ir=B.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Ue.update(U,B,wn),(nn||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,wt.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fn.envMap.value=Te,Fn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Fn.envMapIntensity.value=D.environmentIntensity),nn&&(wt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Sf(Fn,nr),se&&H.fog===!0&&ue.refreshFogUniforms(Fn,se),ue.refreshMaterialUniforms(Fn,H,k,K,m.state.transmissionRenderTarget[S.id]),Uo.upload(N,Zl(Re),Fn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Uo.upload(N,Zl(Re),Fn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(N,"center",U.center),wt.setValue(N,"modelViewMatrix",U.modelViewMatrix),wt.setValue(N,"normalMatrix",U.normalMatrix),wt.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const mn=H.uniformsGroups;for(let xi=0,vi=mn.length;xi<vi;xi++){const Ql=mn[xi];z.update(Ql,wn),z.bind(Ql,wn)}}return wn}function Sf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function wf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,B){Pe.get(S.texture).__webglTexture=D,Pe.get(S.depthTexture).__webglTexture=B;const H=Pe.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=Pe.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){I=S,T=D,E=B;let H=!0,U=null,se=!1,fe=!1;if(S){const Te=Pe.get(S);if(Te.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Te.__hasExternalTextures)C.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ee=S.depthTexture;if(Te.__boundDepthTexture!==Ee){if(Ee!==null&&Pe.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const Ve=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[D])?U=Ve[D][B]:U=Ve[D],se=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?U=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?U=Ve[B]:U=Ve,P.copy(S.viewport),V.copy(S.scissor),F=S.scissorTest}else P.copy(me).multiplyScalar(k).floor(),V.copy(Se).multiplyScalar(k).floor(),F=Be;if(Ie.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&Ie.drawBuffers(S,U),Ie.viewport(P),Ie.scissor(V),Ie.setScissorTest(F),se){const Te=Pe.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,B)}else if(fe){const Te=Pe.get(S.texture),Fe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,B||0,Fe)}w=-1},this.readRenderTargetPixels=function(S,D,B,H,U,se,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we){Ie.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=S.texture,Fe=Te.format,Ve=Te.type;if(!Qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&B>=0&&B<=S.height-U&&N.readPixels(D,B,H,U,We.convert(Fe),We.convert(Ve),se)}finally{const Te=I!==null?Pe.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,H,U,se,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we){const Te=S.texture,Fe=Te.format,Ve=Te.type;if(!Qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-H&&B>=0&&B<=S.height-U){Ie.bindFramebuffer(N.FRAMEBUFFER,we);const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(D,B,H,U,We.convert(Fe),We.convert(Ve),0);const rt=I!==null?Pe.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,rt);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zp(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Ee),N.deleteSync(Mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-B),U=Math.floor(S.image.width*H),se=Math.floor(S.image.height*H),fe=D!==null?D.x:0,we=D!==null?D.y:0;C.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,fe,we,U,se),Ie.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,H=null,U=0){S.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let se,fe,we,Te,Fe,Ve,Ee,rt,Mt;const St=S.isCompressedTexture?S.mipmaps[U]:S.image;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,we=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,Fe=B.min.y,Ve=B.isBox3?B.min.z:0):(se=St.width,fe=St.height,we=St.depth||1,Te=0,Fe=0,Ve=0),H!==null?(Ee=H.x,rt=H.y,Mt=H.z):(Ee=0,rt=0,Mt=0);const Jt=We.convert(D.format),lt=We.convert(D.type);let Re;D.isData3DTexture?(C.setTexture3D(D,0),Re=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(C.setTexture2DArray(D,0),Re=N.TEXTURE_2D_ARRAY):(C.setTexture2D(D,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const jn=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=N.getParameter(N.UNPACK_SKIP_PIXELS),hs=N.getParameter(N.UNPACK_SKIP_ROWS),nn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const nr=S.isDataArrayTexture||S.isData3DTexture,wt=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Fn=Pe.get(S),ir=Pe.get(D),mn=Pe.get(Fn.__renderTarget),xi=Pe.get(ir.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let vi=0;vi<we;vi++)nr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,U,Ve+vi),S.isDepthTexture?(wt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,U,Mt+vi),N.blitFramebuffer(Te,Fe,se,fe,Ee,rt,se,fe,N.DEPTH_BUFFER_BIT,N.NEAREST)):wt?N.copyTexSubImage3D(Re,U,Ee,rt,Mt+vi,Te,Fe,se,fe):N.copyTexSubImage2D(Re,U,Ee,rt,Mt+vi,Te,Fe,se,fe);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else wt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Re,U,Ee,rt,Mt,se,fe,we,Jt,lt,St.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,U,Ee,rt,Mt,se,fe,we,Jt,St.data):N.texSubImage3D(Re,U,Ee,rt,Mt,se,fe,we,Jt,lt,St):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Ee,rt,se,fe,Jt,lt,St.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Ee,rt,St.width,St.height,Jt,St.data):N.texSubImage2D(N.TEXTURE_2D,U,Ee,rt,se,fe,Jt,lt,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,jn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),N.pixelStorei(N.UNPACK_SKIP_ROWS,hs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,nn),U===0&&D.generateMipmaps&&N.generateMipmap(Re),Ie.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,H=null,U=0){return S.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,H,U)},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Ie.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,Ie.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Xx extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ld{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new L;class Dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pd extends fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const cr=new L,Es=new L,As=new L,Rs=new le,lr=new le,Id=new Oe,po=new L,hr=new L,mo=new L,tu=new le,Fa=new le,nu=new le;class qx extends Tt{constructor(e=new Pd){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ld(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Dr(n,3,0,!1)),Ts.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;go(po.set(-.5,-.5,0),As,o,Es,i,r),go(hr.set(.5,-.5,0),As,o,Es,i,r),go(mo.set(.5,.5,0),As,o,Es,i,r),tu.set(0,0),Fa.set(1,0),nu.set(1,1);let a=e.ray.intersectTriangle(po,hr,mo,!1,cr);if(a===null&&(go(hr.set(-.5,.5,0),As,o,Es,i,r),Fa.set(0,1),a=e.ray.intersectTriangle(po,mo,hr,!1,cr),a===null))return;const c=e.ray.origin.distanceTo(cr);c<e.near||c>e.far||t.push({distance:c,point:cr.clone(),uv:vn.getInterpolation(cr,po,hr,mo,tu,Fa,nu,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function go(s,e,t,n,i,r){Rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(lr.x=r*Rs.x-i*Rs.y,lr.y=i*Rs.x+r*Rs.y):lr.copy(Rs),s.copy(e),s.x+=lr.x,s.y+=lr.y,s.applyMatrix4(Id)}const iu=new L,su=new ct,ru=new ct,Yx=new L,ou=new Oe,_o=new L,Oa=new Wn,au=new Oe,Ba=new ia;class Kx extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(au.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(au),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;su.fromBufferAttribute(i.attributes.skinIndex,e),ru.fromBufferAttribute(i.attributes.skinWeight,e),iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ru.getComponent(r);if(o!==0){const a=su.getComponent(r);ou.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Yx.copy(iu).applyMatrix4(ou),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zd extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dd extends Nt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=jt,h=jt,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=new Oe,$x=new Oe;class _l{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:$x;cu.multiplyMatrices(a,t[r]),cu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dd(t,e,e,yn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zd),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Gc extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Oe,lu=new Oe,xo=[],hu=new gi,jx=new Oe,ur=new at,dr=new Wn;class Ud extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),hu.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(hu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),dr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cs),lu.multiplyMatrices(n,Cs),ur.matrixWorld=lu,ur.raycast(e,xo);for(let o=0,a=xo.length;o<a;o++){const c=xo[o];c.instanceId=r,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dd(new Float32Array(i*this.count),i,this.count,ll,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nd extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oo=new L,Bo=new L,uu=new Oe,fr=new ia,vo=new Wn,Ha=new L,du=new L;class xl extends Tt{constructor(e=new Dt,t=new Nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oo.fromBufferAttribute(t,i-1),Bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oo.distanceTo(Bo);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;uu.copy(i).invert(),fr.copy(e.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=h.getX(_),v=h.getX(_+1),b=yo(this,e,fr,c,m,v);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=yo(this,e,fr,c,_,g);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=yo(this,e,fr,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=yo(this,e,fr,c,p-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Oo.fromBufferAttribute(o,i),Bo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,Bo,Ha,du)>n)return;Ha.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ha);if(!(c<e.near||c>e.far))return{distance:c,point:du.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const fu=new L,pu=new L;class Zx extends xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fu.fromBufferAttribute(t,i),pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fu.distanceTo(pu);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jx extends xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ho extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new Oe,Wc=new ia,Mo=new Wn,bo=new L;class Xc extends Tt{constructor(e=new Dt,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;mu.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=u,_=f;p<_;p++){const g=l.getX(p);bo.fromBufferAttribute(d,g),gu(bo,g,c,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)bo.fromBufferAttribute(d,p),gu(bo,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gu(s,e,t,n,i,r,o){const a=Wc.distanceSqToPoint(s);if(a<t){const c=new L;Wc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hr extends Nt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new le:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],o=[],a=new L,c=new Oe;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vl extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qx extends vl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const So=new L,Va=new yl,Ga=new yl,Wa=new yl;class ev extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(So.subVectors(i[0],i[1]).add(i[0]),l=So);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(So.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Va.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,_,g),Ga.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,_,g),Wa.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ga.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Wa.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Va.calc(c),Ga.calc(c),Wa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function tv(s,e){const t=1-s;return t*t*e}function nv(s,e){return 2*(1-s)*s*e}function iv(s,e){return s*s*e}function wr(s,e,t,n){return tv(s,e)+nv(s,t)+iv(s,n)}function sv(s,e){const t=1-s;return t*t*t*e}function rv(s,e){const t=1-s;return 3*t*t*s*e}function ov(s,e){return 3*(1-s)*s*s*e}function av(s,e){return s*s*s*e}function Tr(s,e,t,n,i){return sv(s,e)+rv(s,t)+ov(s,n)+av(s,i)}class kd extends Xn{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cv extends Xn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,i.x,r.x,o.x,a.x),Tr(e,i.y,r.y,o.y,a.y),Tr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends Xn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lv extends Xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends Xn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,i.x,r.x,o.x),wr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hv extends Xn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,i.x,r.x,o.x),wr(e,i.y,r.y,o.y),wr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(_u(a,c.x,l.x,h.x,d.x),_u(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var xu=Object.freeze({__proto__:null,ArcCurve:Qx,CatmullRomCurve3:ev,CubicBezierCurve:kd,CubicBezierCurve3:cv,EllipseCurve:vl,LineCurve:Fd,LineCurve3:lv,QuadraticBezierCurve:Od,QuadraticBezierCurve3:hv,SplineCurve:Bd});class uv extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xu[i.type]().fromJSON(i))}return this}}class dv extends uv{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Od(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new kd(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new vl(e,t,n,i,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ml extends Dt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ut(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,d=new L,u=new le,f=new L,p=new L,_=new L;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){const b=n+v*h*i,x=Math.sin(b),A=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*x,d.y=e[T].y,d.z=e[T].x*A,o.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),a.push(u.x,u.y);const E=c[3*T+0]*x,I=c[3*T+1],w=c[3*T+0]*A;l.push(E,I,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const x=b+v*e.length,A=x,T=x+e.length,E=x+e.length+1,I=x+1;r.push(A,T,I),r.push(E,I,T)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.points,e.segments,e.phiStart,e.phiLength)}}class Ht extends Ml{constructor(e=1,t=1,n=4,i=8){const r=new dv;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ht(e.radius,e.length,e.capSegments,e.radialSegments)}}class bl extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class cn extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function v(){const x=new L,A=new L;let T=0;const E=(t-e)/n;for(let I=0;I<=r;I++){const w=[],M=I/r,P=M*(t-e)+e;for(let V=0;V<=i;V++){const F=V/i,G=F*c+a,j=Math.sin(G),R=Math.cos(G);A.x=P*j,A.y=-M*n+g,A.z=P*R,d.push(A.x,A.y,A.z),x.set(j,E,R).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-M),w.push(p++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const M=_[w][I],P=_[w+1][I],V=_[w+1][I+1],F=_[w][I+1];(e>0||w!==0)&&(h.push(M,P,F),T+=3),(t>0||w!==r-1)&&(h.push(P,V,F),T+=3)}l.addGroup(m,T,0),m+=T}function b(x){const A=p,T=new le,E=new L;let I=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,g*M,0),u.push(0,M,0),f.push(.5,.5),p++;const P=p;for(let V=0;V<=i;V++){const G=V/i*c+a,j=Math.cos(G),R=Math.sin(G);E.x=w*R,E.y=g*M,E.z=w*j,d.push(E.x,E.y,E.z),u.push(0,M,0),T.x=j*.5+.5,T.y=R*.5*M+.5,f.push(T.x,T.y),p++}for(let V=0;V<i;V++){const F=A+V,G=P+V;x===!0?h.push(G,G+1,F):h.push(G+1,G,F),I+=3}l.addGroup(m,I,x===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xs extends cn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Dt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new L,p=new le;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,b=v,x=v+n+1,A=v+n+2,T=v+1;a.push(b,x,T),a.push(x,A,T)}}this.setIndex(a),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tt extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new L,u=new L,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],b=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(i+T*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(i+T*r)*Math.sin(o+b*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+x,1-b),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const b=h[m][v+1],x=h[m][v],A=h[m+1][v],T=h[m+1][v+1];(m!==0||o>0)&&f.push(b,x,T),(m!==n-1||c<Math.PI)&&f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,v=(i+1)*f+p;o.push(_,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wl extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends wl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tl extends fn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Js extends fn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function wo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Hd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mv extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=e,a=2*t-n;break;case oh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,c=2*n-t;break;case oh:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+v*o[l+A]+b*o[c+A]+x*o[d+A];return r}}class gv extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}}class _v extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _v(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&fv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ha,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Ir;class Qs extends Yn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Pr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vd extends Yn{}Vd.prototype.ValueTypeName="color";class qs extends Yn{}qs.prototype.ValueTypeName="number";class xv extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)mi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ys extends Yn{InterpolantFactoryMethodLinear(e){return new xv(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Yn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Pr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Yn{}Ks.prototype.ValueTypeName="vector";class vv{constructor(e="",t=-1,n=[],i=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=pv(c);c=vu(c,1,h),l=vu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new qs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,p,_){if(f.length!==0){const g=[],m=[];Hd(f,g,m,p),g.length!==0&&_.push(new d(u,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let _=0;_<u[p].morphTargets.length;_++)f[u[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==u[p].morphTargets.length;++v){const b=u[p];g.push(b.time),m.push(b.morphTarget===_?1:0)}i.push(new qs(".morphTargetInfluence["+_+"]",g,m))}c=f.length*o}else{const f=".bones["+t[d].name+"]";n(Ks,f+".position",u,"pos",i),n(Ys,f+".quaternion",u,"rot",i),n(Ks,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return Vd;case"quaternion":return Ys;case"bool":case"boolean":return Qs;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yv(s.type);if(s.times===void 0){const t=[],n=[];Hd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class bv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Sv=new bv;class tr{constructor(e){this.manager=e!==void 0?e:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class wv extends Error{constructor(e,t){super(e),this.response=t}}class Gd extends tr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ni[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:b,value:x})=>{if(b)m.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,E=h.length;T<E;T++){const I=h[T];I.onProgress&&I.onProgress(A)}m.enqueue(x),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new wv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{zi.add(e,l);const h=ni[e];delete ni[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Tv extends tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=zr("img");function c(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ev extends tr{constructor(e){super(e)}load(e,t,n,i){const r=new Nt,o=new Tv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ra extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Av extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Oe,yu=new L,Mu=new L;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends El{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cv extends ra{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bu=new Oe,pr=new L,qa=new L;class Lv extends El{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}}class Wd extends ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pv extends El{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Er{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Iv extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}}const Al="\\[\\]\\.:\\/",zv=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",Dv="[^"+Al.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Nv=/(WCOD+)?/.source.replace("WCOD",Dv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Ov=new RegExp("^"+Uv+Nv+kv+Fv+"$"),Bv=["material","materials","bones","map"];class Hv{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){const t=Ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Bv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=Hv;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function Vv(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Dt;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Su(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);const p=Su(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Su(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new kt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){const _=h.getComponent(u,p);a.setComponent(u+d,p,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function wu(s,e){if(e===sp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Bc||e===dd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Bc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const Tu={kai:0,mom:1,dad:2,baby:3,beerus:4,badahh:5,rocky:6,nori:7},ot={kai:{display:"Kai",lineup:"KAI",blurb:"You. Small, quick, and very good at squeezing into hiding spots."},mom:{display:"Mom",lineup:"MOM",blurb:"Seeker. Red pajamas, sharp eyes. Has to tag you to catch you."},dad:{display:"Dad",lineup:"DAD",blurb:"Seeker. Long locs, red joggers. Starts on the other floor."},baby:{display:"Baby Girl",lineup:"BABY GIRL",blurb:"Crawls after you if she sees you. Giggles."},beerus:{display:"Beerus",lineup:"BEERUS",blurb:"Russian Blue. Pads between the study and foyer."},badahh:{display:"BAD AHH",lineup:"BAD AHH",blurb:"Brown mackerel tabby. Grooms near the sofa."},rocky:{display:"Rocky",lineup:"ROCKY",blurb:"Classic tabby. Bats a noisy toy ball upstairs."},nori:{display:"Nori",lineup:"NORI",blurb:"Black miniature poodle. Friendly yip if you pass close."}},Eu={mom:[{text:"Kai… where are you?",clip:"mom-t1"},{text:"Come out, come out, wherever you are!",clip:"mom-t2"},{text:"I can hear you giggling, mister.",clip:"mom-t3"},{text:"You can’t hide forever, baby.",clip:"mom-t4"},{text:"Hmm. Not in here…",clip:"mom-t5"},{text:"Somebody has chores waiting!",clip:"mom-t6"}],dad:[{text:"Kai! I’m gonna find you!",clip:"dad-t1"},{text:"Fee, fi, fo, fum…",clip:"dad-t2"},{text:"I know all the good spots, son.",clip:"dad-t3"},{text:"Where’d that boy go?",clip:"dad-t4"},{text:"Nope. Not in here.",clip:"dad-t5"},{text:"Ready to fold some towels, Kai?",clip:"dad-t6"}]},Gv={mom:{text:"I see you, Kai!",clip:"mom-see"},dad:{text:"There he is!",clip:"dad-see"}},Wv={mom:{text:"Tag! Found you!",clip:"mom-found"},dad:{text:"Gotcha! Found you!",clip:"dad-found"}},Xv={mom:"Maybe",dad:"I bet he’s"},Au=[8.5,11,9.5,12.5,10],Mn=1,Ur=2,ln=4;function Ei(s,e,t,n,i,r,o,a,c=!0,l){return{cx:(s+t)/2,cz:(e+n)/2,hx:Math.abs(t-s)/2,hz:Math.abs(n-e)/2,yaw:0,y0:i,y1:r,layers:o,blocksSight:c,kind:a,id:l}}function Ru(s,e,t,n,i,r,o,a,c,l=!0){const h=t-s,d=n-e,u=Math.hypot(h,d);return{cx:(s+t)/2,cz:(e+n)/2,hx:u/2,hz:i/2,yaw:Math.atan2(-d,h),y0:r,y1:o,layers:a,blocksSight:l,kind:c}}function Vo(s,e,t){if(t===0)return[s,e];const n=Math.cos(t),i=Math.sin(t);return[s*n-e*i,s*i+e*n]}function qv(s,e,t){if(t===0)return[s,e];const n=Math.cos(t),i=Math.sin(t);return[s*n+e*i,-s*i+e*n]}function Yv(s,e,t,n){const[i,r]=Vo(s-n.cx,e-n.cz,n.yaw),o=Math.max(-n.hx,Math.min(n.hx,i)),a=Math.max(-n.hz,Math.min(n.hz,r)),c=i-o,l=r-a,h=c*c+l*l;if(h>=t*t)return null;let d,u;if(h>1e-12){const f=Math.sqrt(h),p=(t-f)/f;d=c*p,u=l*p}else{const f=n.hx-Math.abs(i),p=n.hz-Math.abs(r);f<p?(d=(f+t)*(i>=0?1:-1),u=0):(d=0,u=(p+t)*(r>=0?1:-1))}return qv(d,u,n.yaw)}function Kv(s,e,t,n){const[i,r]=Vo(s-n.cx,e-n.cz,n.yaw),o=Math.max(-n.hx,Math.min(n.hx,i)),a=Math.max(-n.hz,Math.min(n.hz,r)),c=i-o,l=r-a;return c*c+l*l<t*t}function Yc(s,e,t,n,i){let r=s,o=e;for(let a=0;a<4;a++){let c=!1;for(const l of n){if((l.layers&i)===0)continue;const h=Math.max(l.hx,l.hz)*1.415+t;if(Math.abs(r-l.cx)>h||Math.abs(o-l.cz)>h)continue;const d=Yv(r,o,t,l);d&&(r+=d[0],o+=d[1],c=!0)}if(!c)break}return{x:r,z:o}}function Cl(s,e,t,n){const[i,r]=Vo(s.x-n.cx,s.z-n.cz,n.yaw),[o,a]=Vo(e.x,e.z,n.yaw),c=s.y,l=e.y;let h=0,d=t;if(Math.abs(o)<1e-12){if(i<-n.hx||i>n.hx)return 1/0}else{let u=(-n.hx-i)/o,f=(n.hx-i)/o;if(u>f&&([u,f]=[f,u]),h=Math.max(h,u),d=Math.min(d,f),h>d)return 1/0}if(Math.abs(a)<1e-12){if(r<-n.hz||r>n.hz)return 1/0}else{let u=(-n.hz-r)/a,f=(n.hz-r)/a;if(u>f&&([u,f]=[f,u]),h=Math.max(h,u),d=Math.min(d,f),h>d)return 1/0}if(Math.abs(l)<1e-12){if(c<n.y0||c>n.y1)return 1/0}else{let u=(n.y0-c)/l,f=(n.y1-c)/l;if(u>f&&([u,f]=[f,u]),h=Math.max(h,u),d=Math.min(d,f),h>d)return 1/0}return h}function Go(s,e,t,n){const i={x:e.x-s.x,y:e.y-s.y,z:e.z-s.z},r=Math.min(s.x,e.x),o=Math.max(s.x,e.x),a=Math.min(s.z,e.z),c=Math.max(s.z,e.z);for(const l of t){if(!l.blocksSight)continue;const h=Math.max(l.hx,l.hz)*1.415;if(!(l.cx+h<r||l.cx-h>o||l.cz+h<a||l.cz-h>c)&&Cl(s,i,1,l)<1)return!1}return!0}function $v(s,e,t){const n={x:e.x-s.x,y:e.y-s.y,z:e.z-s.z};let i=1;for(const r of t){if(!r.blocksSight)continue;const o=Cl(s,n,i,r);o<i&&(i=o)}return i}function Xd(s,e,t,n,i,r,o=0){const a={x:s,y:.5,z:e},c={x:t-s,y:0,z:n-e};for(const l of i){if((l.layers&r)===0)continue;const h=o>0?{...l,hx:l.hx+o,hz:l.hz+o,y0:-1e9,y1:1e9}:{...l,y0:-1e9,y1:1e9};if(Cl(a,c,1,h)<1)return!1}return!0}function Ll(s,e){let t=e-s;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Dn(s,e){return Math.atan2(s,e)}function qd(s,e,t,n,i,r){const o=Dn(n-s,i-e);return Math.abs(Ll(t,o))<=r/2*Math.PI/180}const xt=[0,3],Kc=2.8,Us=[3,5.8],Zi=.2,Cu=1;function jv(){const s=[];s.push({x:8,z:15+1.9}),s.push({x:6.5,z:15+1.9});const i=14;for(let o=0;o<=i;o++){const a=Math.PI*o/i;s.push({x:5-1.9*Math.sin(a),z:15+1.9*Math.cos(a)})}s.push({x:6.5,z:15-1.9}),s.push({x:8,z:15-1.9});const r=[0];for(let o=1;o<s.length;o++)r.push(r[o-1]+Math.hypot(s[o].x-s[o-1].x,s[o].z-s[o-1].z));return{points:s,cum:r,length:r[r.length-1],width:1.7,bottomY:xt[0],topY:xt[1]}}const dn=jv();function Ns(s,e,t=dn){let n={s:0,lateral:1e9,x:0,z:0},i=1/0;const r=t.points.length;for(let o=0;o<r-1;o++){const a=t.points[o],c=t.points[o+1],l=c.x-a.x,h=c.z-a.z,d=Math.hypot(l,h);let u=((s-a.x)*l+(e-a.z)*h)/(d*d);const f=o===0,p=o===r-2;f||(u=Math.max(u,0)),p||(u=Math.min(u,1));const _=a.x+l*u,g=a.z+h*u,m=Math.hypot(s-_,e-g);if(m<i){i=m;const v=l*(e-a.z)-h*(s-a.x);n={s:t.cum[o]+u*d,lateral:Math.sign(v)*m,x:_,z:g}}}return n}function is(s,e=dn){const t=Math.max(0,Math.min(1,s/e.length));return e.bottomY+(e.topY-e.bottomY)*t}function Ar(s,e=dn){const t=Math.max(0,Math.min(e.length,s));for(let i=0;i<e.points.length-1;i++)if(t<=e.cum[i+1]||i===e.points.length-2){const r=e.points[i],o=e.points[i+1],a=e.cum[i+1]-e.cum[i],c=a>0?(t-e.cum[i])/a:0;return{x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c,dirX:(o.x-r.x)/a,dirZ:(o.z-r.z)/a}}const n=e.points[e.points.length-1];return{x:n.x,z:n.z,dirX:1,dirZ:0}}function $c(s,e,t=dn){if(s>8||s<0||e<12||e>18)return!1;const n=Ns(s,e,t);return n.s>=0&&n.s<=t.length&&Math.abs(n.lateral)<=t.width/2+.05}const as=[{id:"dining",name:"Dining nook",floor:0,x0:0,z0:0,x1:8,z1:5},{id:"kitchen",name:"Island kitchen",floor:0,x0:0,z0:5,x1:8,z1:12},{id:"study",name:"Study",floor:0,x0:0,z0:18,x1:8,z1:24},{id:"family",name:"Family room",floor:0,x0:8,z0:0,x1:16,z1:11},{id:"hall1",name:"Short hall",floor:0,x0:10,z0:11,x1:14,z1:15},{id:"foyer",name:"Rotunda foyer",floor:0,x0:8,z0:15,x1:16,z1:24},{id:"primary",name:"Primary bedroom",floor:0,x0:16,z0:0,x1:24,z1:7},{id:"pbath",name:"Primary bath",floor:0,x0:16,z0:7,x1:24,z1:10},{id:"wic1",name:"Walk-in closet 1",floor:0,x0:16,z0:10,x1:24,z1:13},{id:"wic2",name:"Walk-in closet 2",floor:0,x0:16,z0:13,x1:24,z1:17},{id:"utility",name:"Utility room",floor:0,x0:16,z0:17,x1:24,z1:20},{id:"bed2",name:"Bedroom 2",floor:1,x0:0,z0:0,x1:8,z1:12},{id:"landing",name:"Railed landing",floor:1,x0:8,z0:8,x1:12,z1:16},{id:"bridge",name:"Railed landing",floor:1,x0:12,z0:8,x1:16,z1:11},{id:"media",name:"Media room",floor:1,x0:16,z0:0,x1:24,z1:5},{id:"game",name:"Game room",floor:1,x0:16,z0:5,x1:24,z1:13},{id:"hall2",name:"Bedroom hall",floor:1,x0:16,z0:13,x1:19,z1:23},{id:"bed4",name:"Bedroom 4",floor:1,x0:19,z0:13,x1:24,z1:18},{id:"bed3",name:"Bedroom 3",floor:1,x0:19,z0:18,x1:24,z1:23}],Zv=[{id:"stairwell",name:"Stairwell",x0:0,z0:12,x1:8,z1:18},{id:"familyVoid",name:"Open to below",x0:8,z0:0,x1:16,z1:8},{id:"rotundaVoid",name:"Rotunda void",x0:12,z0:11,x1:16,z1:20}],Pl=[{x0:0,z0:0,x1:8,z1:12},{x0:0,z0:18,x1:8,z1:24},{x0:8,z0:8,x1:16,z1:11},{x0:8,z0:11,x1:12,z1:24},{x0:12,z0:20,x1:16,z1:24},{x0:16,z0:0,x1:24,z1:24}],Yd=[{id:"patio",name:"Covered patio",x0:7,z0:-4,x1:16,z1:0},{id:"porch",name:"Entry porch",x0:9,z0:24,x1:15,z1:27},{id:"garage",name:"Tandem garage",x0:16,z0:20,x1:24,z1:28}],Il=[{floor:0,axis:"x",at:0,from:0,to:24,exterior:!0},{floor:0,axis:"z",at:0,from:0,to:24,exterior:!0},{floor:0,axis:"x",at:24,from:0,to:16,exterior:!0},{floor:0,axis:"z",at:24,from:0,to:20,exterior:!0},{floor:0,axis:"x",at:20,from:16,to:24,exterior:!0},{floor:0,axis:"z",at:16,from:20,to:24,exterior:!0},{floor:0,axis:"z",at:8,from:0,to:12,gaps:[[1.8,3.6],[6.5,10.5]]},{floor:0,axis:"x",at:5,from:0,to:8,gaps:[[1.5,6.5]]},{floor:0,axis:"x",at:12,from:0,to:8},{floor:0,axis:"z",at:8,from:12,to:24,gaps:[[16.05,17.75],[20,22]]},{floor:0,axis:"x",at:18,from:0,to:8},{floor:0,axis:"z",at:16,from:0,to:20,gaps:[[4,6],[17.6,19.4]],trim:"shortcut"},{floor:0,axis:"x",at:7,from:16,to:24,gaps:[[20,22]]},{floor:0,axis:"x",at:10,from:16,to:24,gaps:[[20,22]]},{floor:0,axis:"x",at:13,from:16,to:24,gaps:[[20,22]],trim:"shortcut"},{floor:0,axis:"x",at:17,from:16,to:24,gaps:[[20,22]],trim:"shortcut"},{floor:1,axis:"x",at:0,from:0,to:24,exterior:!0},{floor:1,axis:"z",at:0,from:0,to:24,exterior:!0},{floor:1,axis:"z",at:24,from:0,to:23,exterior:!0},{floor:1,axis:"x",at:23,from:16,to:24,exterior:!0},{floor:1,axis:"x",at:24,from:0,to:16,exterior:!0},{floor:1,axis:"z",at:16,from:23,to:24,exterior:!0},{floor:1,axis:"x",at:12,from:0,to:8},{floor:1,axis:"x",at:18,from:0,to:8},{floor:1,axis:"z",at:8,from:0,to:13.95,gaps:[[9.2,11.2],[12.25,13.95]]},{floor:1,axis:"z",at:8,from:13.95,to:16,rail:!0},{floor:1,axis:"x",at:16,from:8,to:12},{floor:1,axis:"z",at:12,from:11,to:16,rail:!0},{floor:1,axis:"x",at:8,from:8,to:16,rail:!0},{floor:1,axis:"x",at:11,from:12,to:16,rail:!0},{floor:1,axis:"z",at:16,from:0,to:13,gaps:[[8,11]]},{floor:1,axis:"x",at:5,from:16,to:24,gaps:[[16.5,17.7],[19,21]]},{floor:1,axis:"x",at:13,from:19,to:24},{floor:1,axis:"z",at:16,from:13,to:20,rail:!0},{floor:1,axis:"z",at:16,from:20,to:23},{floor:1,axis:"z",at:19,from:13,to:23,gaps:[[14,16],[20,22]]},{floor:1,axis:"x",at:18,from:19,to:24,gaps:[[19.3,20.5]]}],zl=[{floor:0,name:"Powder room",x0:8,z0:11,x1:10,z1:15},{floor:0,name:"Hall closet",x0:14,z0:11,x1:16,z1:15}],Hn=Math.PI,xn=Math.PI/2,It=-Math.PI/2,Kd=-3*Math.PI/4,st={teal:"#2f8f8a",terracotta:"#c7694b",mustard:"#e2a93a",plum:"#7a5c8f",sage:"#9db08a",cream:"#efe2c8",sky:"#8fb4d6",rose:"#d99a9a",navy:"#33456e"},$d=[{type:"rug",floor:0,x0:9.6,z0:2.4,x1:14.4,z1:8.2,h:.02,color:st.terracotta,collide:!1},{type:"sofa",floor:0,x0:10.5,z0:5,x1:13.5,z1:6,h:.95,facing:Hn,color:st.teal},{type:"sofaTable",floor:0,x0:10.5,z0:6.75,x1:13.5,z1:7.15,h:.82},{type:"coffeeTable",floor:0,x0:11,z0:3.2,x1:13,z1:4.2,h:.45},{type:"tvConsole",floor:0,x0:10.5,z0:.1,x1:13.5,z1:.6,h:.6},{type:"tv",floor:0,x0:10.9,z0:.15,x1:13.1,z1:.3,h:1.6,sightFrom:.6,collide:!1},{type:"drape",floor:0,x0:14,z0:.52,x1:15.8,z1:.72,h:2.55,facing:0,color:st.mustard,collide:!1},{type:"mat",floor:0,x0:8.9,z0:8.3,x1:10.7,z1:10.1,h:.02,collide:!1},{type:"plant",floor:0,x0:8.3,z0:.3,x1:8.9,z1:.9,h:1.3},{type:"lamp",floor:0,x0:15.3,z0:9.9,x1:15.8,z1:10.6,h:1.6},{type:"toybin",floor:0,x0:8.3,z0:10.55,x1:9,z1:10.9,h:.4,color:st.mustard},{type:"art",floor:0,x0:8.12,z0:4.2,x1:8.16,z1:6,h:.9,facing:xn,color:st.teal,collide:!1,sight:!1},{type:"island",floor:0,x0:2.5,z0:7.5,x1:5.5,z1:9,h:.95,color:st.teal},{type:"counter",floor:0,x0:.1,z0:5.6,x1:.8,z1:10.6,h:.95,facing:xn},{type:"fridge",floor:0,x0:.1,z0:10.8,x1:.95,z1:11.85,h:1.95,facing:xn},{type:"counter",floor:0,x0:1.4,z0:11.2,x1:5,z1:11.9,h:.95,facing:Hn},{type:"diningTable",floor:0,x0:2.2,z0:1.2,x1:5.8,z1:3.6,h:.78,sightFrom:.14,color:st.cream},{type:"console",floor:0,x0:.1,z0:1.2,x1:.6,z1:3.8,h:.85},{type:"plant",floor:0,x0:7.2,z0:.3,x1:7.8,z1:.9,h:1.2},{type:"art",floor:0,x0:2.6,z0:.12,x1:5.4,z1:.16,h:.8,facing:0,color:st.mustard,collide:!1,sight:!1},{type:"screen",floor:0,x0:.1,z0:19.75,x1:2.3,z1:19.95,h:1.75},{type:"screen",floor:0,x0:2.2,z0:18.6,x1:2.4,z1:19.95,h:1.75},{type:"desk",floor:0,x0:5,z0:23,x1:7.6,z1:23.85,h:.76,sightFrom:.06,facing:Hn},{type:"shelf",floor:0,x0:.1,z0:21,x1:.5,z1:23.85,h:2,facing:xn},{type:"rug",floor:0,x0:3,z0:20.4,x1:6,z1:22.4,h:.02,color:st.sage,collide:!1},{type:"art",floor:0,x0:3.6,z0:18.12,x1:5.6,z1:18.16,h:.7,facing:0,color:st.plum,collide:!1,sight:!1},{type:"marker",floor:0,x0:10.9,z0:22,x1:13.2,z1:23.2,h:.01,collide:!1},{type:"console",floor:0,x0:15.2,z0:21,x1:15.85,z1:23.2,h:.85},{type:"plant",floor:0,x0:8.3,z0:23.1,x1:8.9,z1:23.7,h:1.2},{type:"rug",floor:0,x0:10.2,z0:17.3,x1:13.8,z1:21.3,h:.02,color:st.teal,collide:!1},{type:"art",floor:0,x0:15.84,z0:15.6,x1:15.88,z1:17.2,h:.9,facing:It,color:st.terracotta,collide:!1,sight:!1},{type:"bed",floor:0,x0:20,z0:1.5,x1:23.9,z1:4.5,h:.62,facing:It,color:st.sage},{type:"bench",floor:0,x0:18.9,z0:1.9,x1:19.6,z1:4.1,h:.48,facing:It,color:st.plum},{type:"nightstand",floor:0,x0:23.3,z0:.6,x1:23.9,z1:1.3,h:.55},{type:"rug",floor:0,x0:17,z0:4.7,x1:22.6,z1:6.6,h:.02,color:st.rose,collide:!1},{type:"tub",floor:0,x0:22.3,z0:7.25,x1:23.9,z1:9.75,h:.55},{type:"drape",floor:0,x0:22.16,z0:7.3,x1:22.36,z1:9.7,h:2.05,facing:It,color:st.sky,collide:!1},{type:"basket",floor:0,x0:22.65,z0:19.2,x1:23.85,z1:19.88,h:.85},{type:"vanity",floor:0,x0:16.15,z0:7.3,x1:16.95,z1:9.7,h:.9,facing:xn},{type:"rack",floor:0,x0:16.1,z0:10.25,x1:16.7,z1:12.75,h:1.8,facing:xn},{type:"rack",floor:0,x0:23.3,z0:10.25,x1:23.9,z1:12.75,h:1.8,facing:It},{type:"rack",floor:0,x0:16.1,z0:14.5,x1:18.7,z1:14.9,h:1.8,facing:0},{type:"hamper",floor:0,x0:18.7,z0:13.1,x1:19.15,z1:14.9,h:1.6},{type:"rack",floor:0,x0:23.3,z0:13.2,x1:23.9,z1:16.8,h:1.8,facing:It},{type:"washer",floor:0,x0:22.7,z0:17.2,x1:23.9,z1:18.1,h:.95,facing:It},{type:"washer",floor:0,x0:22.7,z0:18.2,x1:23.9,z1:19.1,h:.95,facing:It},{type:"shelf",floor:0,x0:18.2,z0:19.45,x1:21.6,z1:19.85,h:1.7,facing:Hn},{type:"shelf",floor:1,x0:6.1,z0:4.65,x1:7.9,z1:4.95,h:1.4,facing:Hn},{type:"screen",floor:1,x0:5.9,z0:6.6,x1:7.9,z1:6.8,h:1.7},{type:"screen",floor:1,x0:5.85,z0:5.3,x1:6.05,z1:6.8,h:1.7},{type:"bed",floor:1,x0:.1,z0:4,x1:2.3,z1:7,h:.55,facing:xn,color:st.sky},{type:"desk",floor:1,x0:.1,z0:9,x1:.75,z1:11,h:.75,sightFrom:.65},{type:"rug",floor:1,x0:2.8,z0:7.4,x1:5.6,z1:10.2,h:.02,color:st.mustard,collide:!1},{type:"beanbag",floor:1,x0:4.2,z0:.5,x1:5.2,z1:1.5,h:.5,color:st.terracotta,collide:!1,sight:!1},{type:"toybin",floor:1,x0:.15,z0:.3,x1:.85,z1:1.3,h:.4,color:st.teal},{type:"tent",floor:1,x0:21.4,z0:5.7,x1:23.6,z1:7.9,h:1.7,facing:0,color:st.mustard},{type:"fort",floor:1,x0:21.6,z0:10.4,x1:23.9,z1:12.9,h:.98,facing:It},{type:"rug",floor:1,x0:17,z0:6.2,x1:20.6,z1:11.6,h:.02,color:st.sky,collide:!1},{type:"blocks",floor:1,x0:19.3,z0:12.2,x1:19.9,z1:12.8,h:.6},{type:"toychest",floor:1,x0:16.15,z0:11.35,x1:16.9,z1:12.75,h:.75,facing:xn,color:st.terracotta},{type:"art",floor:1,x0:21.6,z0:12.84,x1:23.6,z1:12.88,h:.7,facing:Hn,color:st.teal,collide:!1,sight:!1},{type:"tv",floor:1,x0:16.12,z0:.6,x1:16.3,z1:3.4,h:2.2,sightFrom:.9,collide:!1},{type:"couch",floor:1,x0:18.6,z0:.6,x1:19.4,z1:3.4,h:.85,facing:It,color:st.plum},{type:"couch",floor:1,x0:22.3,z0:.6,x1:23.1,z1:3.4,h:.98,facing:It,color:st.plum},{type:"speaker",floor:1,x0:23.15,z0:.12,x1:23.85,z1:.58,h:1.3},{type:"speaker",floor:1,x0:23.15,z0:3.42,x1:23.85,z1:3.9,h:1.3},{type:"rug",floor:1,x0:19.7,z0:.8,x1:21.9,z1:3.2,h:.02,color:st.navy,collide:!1},{type:"drape",floor:1,x0:23.28,z0:13.4,x1:23.48,z1:15.6,h:2.5,facing:It,color:st.sky,collide:!1},{type:"bed",floor:1,x0:20.8,z0:16.2,x1:23.9,z1:17.9,h:.55,facing:It,color:st.sage},{type:"rug",floor:1,x0:19.6,z0:13.6,x1:22.4,z1:15.6,h:.02,color:st.rose,collide:!1},{type:"wingChair",floor:1,x0:22.3,z0:21.3,x1:23.9,z1:22.9,h:1.2,facing:Kd,color:st.terracotta},{type:"bed",floor:1,x0:20.8,z0:18.1,x1:23.9,z1:20,h:.55,facing:It,color:st.mustard},{type:"lamp",floor:1,x0:23.3,z0:20.25,x1:23.8,z1:20.75,h:1.5},{type:"rug",floor:1,x0:19.6,z0:20.4,x1:22,z1:22.4,h:.02,color:st.teal,collide:!1}],qt=[{id:"S01",floor:0,room:"study",label:"behind reading screen",description:"Behind the reading screen",approach:{x:3.1,z:19},hidden:{x:1.2,z:19.15,yaw:0},nook:{x0:.1,z0:18.1,x1:2.4,z1:19.75},pose:"stand"},{id:"S02",floor:0,room:"family",label:"behind sofa",description:"Behind the big sofa",approach:{x:14.25,z:6.4},hidden:{x:12.3,z:6.38,yaw:xn},nook:{x0:10.5,z0:6,x1:13.5,z1:6.75},pose:"crouch"},{id:"S03",floor:0,room:"family",label:"behind window drape",description:"Behind the wide window drape",approach:{x:14.9,z:1.6},hidden:{x:14.9,z:.3,yaw:0},nook:{x0:14,z0:.1,x1:15.8,z1:.78},pose:"stand"},{id:"S04",floor:0,room:"dining",label:"under dining table",description:"Under the dining table",approach:{x:4,z:4.25},hidden:{x:4,z:2.4,yaw:0},nook:{x0:2.2,z0:1.2,x1:5.8,z1:3.6},pose:"lie"},{id:"S05",floor:0,room:"primary",label:"under bed",description:"Under the big bed",approach:{x:22.8,z:5.2},hidden:{x:22.6,z:3.5,yaw:0},nook:{x0:20,z0:1.5,x1:23.9,z1:4.5},pose:"lie"},{id:"S06",floor:0,room:"wic2",label:"behind hanging clothes",description:"Behind the hanging clothes",approach:{x:17.4,z:15.7},hidden:{x:17.4,z:13.9,yaw:0},nook:{x0:16.1,z0:13.1,x1:18.7,z1:14.5},pose:"stand"},{id:"S07",floor:1,room:"bed2",label:"behind book-nook screen",description:"Behind the book-nook screen",approach:{x:6.95,z:7.75},hidden:{x:7,z:5.85,yaw:0},nook:{x0:6.05,z0:4.95,x1:7.9,z1:6.6},pose:"stand"},{id:"S08",floor:1,room:"game",label:"inside play tent",description:"Inside the play tent",approach:{x:22.5,z:8.85},hidden:{x:22.5,z:6.45,yaw:0},nook:{x0:21.4,z0:5.7,x1:23.6,z1:7.9},pose:"crouch"},{id:"S09",floor:1,room:"game",label:"inside cushion fort",description:"Inside the cushion fort",approach:{x:20.75,z:11.65},hidden:{x:22.8,z:11.65,yaw:It},nook:{x0:21.6,z0:10.4,x1:23.9,z1:12.9},pose:"lie"},{id:"S10",floor:1,room:"media",label:"behind back-row couch",description:"Behind the back-row couch",approach:{x:21.7,z:2},hidden:{x:23.5,z:2,yaw:It},nook:{x0:23.1,z0:.58,x1:23.9,z1:3.42},pose:"crouch"},{id:"S11",floor:1,room:"bed4",label:"behind bedroom drape",description:"Behind the bedroom drape",approach:{x:22.3,z:14.5},hidden:{x:23.7,z:14.5,yaw:It},nook:{x0:23.22,z0:13.3,x1:23.9,z1:15.7},pose:"stand"},{id:"S12",floor:1,room:"bed3",label:"behind reading chair",description:"Behind the reading chair",approach:{x:21.7,z:21.2},hidden:{x:23.5,z:22.5,yaw:Kd},nook:{x0:22.3,z0:21.3,x1:23.9,z1:22.9},pose:"crouch"},{id:"S13",floor:0,room:"hall1",label:"in hall closet",description:"In the hall closet",approach:{x:13.35,z:13},hidden:{x:15,z:13,yaw:It},nook:{x0:14.3,z0:11.5,x1:15.7,z1:14.5},pose:"stand"},{id:"S14",floor:0,room:"utility",label:"in laundry basket",description:"In the laundry basket",approach:{x:22,z:18.75},hidden:{x:23.25,z:19.55,yaw:Hn},nook:{x0:22.65,z0:19.2,x1:23.85,z1:19.88},pose:"lie"},{id:"S15",floor:0,room:"pbath",label:"behind shower curtain",description:"Behind the shower curtain",approach:{x:21.6,z:8.5},hidden:{x:23.1,z:8.5,yaw:It},nook:{x0:22.3,z0:7.25,x1:23.9,z1:9.75},pose:"stand"},{id:"S16",floor:0,room:"study",label:"under study desk",description:"Under the study desk",approach:{x:6.3,z:22.3},hidden:{x:6.3,z:23.45,yaw:Hn},nook:{x0:5,z0:23,x1:7.6,z1:23.85},pose:"inside"},{id:"S17",floor:0,room:"kitchen",label:"in kitchen cupboard",description:"In the kitchen cupboard",approach:{x:3.2,z:10.4},hidden:{x:3.2,z:11.55,yaw:Hn},nook:{x0:1.4,z0:11.2,x1:5,z1:11.9},pose:"inside"},{id:"S18",floor:1,room:"bed2",label:"under blue bed",description:"Under the blue bed",approach:{x:3,z:5.5},hidden:{x:1.2,z:5.5,yaw:xn},nook:{x0:.1,z0:4,x1:2.3,z1:7},pose:"lie"},{id:"S19",floor:1,room:"bed4",label:"under green bed",description:"Under the green bed",approach:{x:20.2,z:17.05},hidden:{x:22.3,z:17.05,yaw:It},nook:{x0:20.8,z0:16.2,x1:23.9,z1:17.9},pose:"lie"},{id:"S20",floor:1,room:"game",label:"in toy chest",description:"Inside the toy chest",approach:{x:17.55,z:12.05},hidden:{x:16.5,z:12.05,yaw:xn},nook:{x0:16.15,z0:11.35,x1:16.9,z1:12.75},pose:"inside"}],No={kai:{x:12.6,z:9,floor:0,yaw:Hn},mom:{x:11.4,z:22.6,floor:0,yaw:0},dad:{x:12.7,z:22.6,floor:0,yaw:0}},Jv=[{id:"w-foyer",floor:0,x:12,z:19},{id:"w-study",floor:0,x:5,z:21.4},{id:"w-kitchen",floor:0,x:6.6,z:8.2},{id:"w-dining",floor:0,x:6.6,z:4.2},{id:"w-family",floor:0,x:14.6,z:8.8},{id:"w-primary",floor:0,x:17.4,z:5.6},{id:"w-pbath",floor:0,x:20.5,z:8.6},{id:"w-wic1",floor:0,x:20.5,z:11.5},{id:"w-utility",floor:0,x:18.6,z:18.5},{id:"w-hall1",floor:0,x:12,z:13},{id:"w-landing",floor:1,x:10,z:12},{id:"w-bed2",floor:1,x:4,z:9.2},{id:"w-game",floor:1,x:19,z:9.2},{id:"w-media",floor:1,x:20,z:4.3},{id:"w-hall2",floor:1,x:17.5,z:17},{id:"w-bed4",floor:1,x:20.6,z:14.8},{id:"w-bed3",floor:1,x:20.4,z:21}],Nn={baby:{floor:0,mat:{x:9.8,z:9.2,yaw:xn},safe:{x0:8.7,z0:7.9,x1:11.4,z1:10.6}},beerus:{floor:0,start:{x:4.5,z:21.2},route:[{x:4.5,z:21.4,pause:5,action:"sit"},{x:10.4,z:19.2,pause:2},{x:13.6,z:22,pause:3,action:"sit"},{x:2.8,z:22.6,pause:4,action:"sit"}]},badahh:{floor:0,start:{x:9.3,z:6.2},route:[{x:9.3,z:6.2,pause:5,action:"groom"},{x:4,z:4.35,pause:3},{x:6.9,z:1,pause:3,action:"sit"},{x:14.5,z:6.6,pause:5,action:"groom"}]},rocky:{floor:1,start:{x:20,z:4.3},route:[{x:20,z:4.3,pause:4,action:"sit"},{x:17.5,z:7.5,pause:3},{x:21,z:9.8,pause:3,action:"groom"},{x:17.6,z:4.2,pause:3,action:"sit"}],toy:[{x:19.4,z:8},{x:20.6,z:8.7}]},nori:{floor:0,start:{x:14.6,z:9.8},route:[{x:14.6,z:9.8,pause:3},{x:6.6,z:10.6,pause:2.5},{x:1.6,z:6.6,pause:2},{x:6.4,z:6.2,pause:2},{x:12.4,z:9.6,pause:3}]}},mr=s=>s===0?Mn:Ur;function jd(s){const e=[];let t=s.from;const n=(s.gaps??[]).slice().sort((i,r)=>i[0]-r[0]);for(const[i,r]of n)i>t&&e.push([t,i]),t=Math.max(t,r);return t<s.to&&e.push([t,s.to]),e}function Qv(){const s=[],e=Zi/2;for(const i of Il){const r=xt[i.floor],o=i.floor===0?0:xt[1],a=i.rail?r+Cu:Us[i.floor]+(i.floor===0,0),c=i.rail?"rail":"wall";for(const[l,h]of jd(i)){const d=l-(l===i.from?e:0),u=h+(h===i.to?e:0);i.axis==="x"?s.push(Ei(d,i.at-e,u,i.at+e,o,a,mr(i.floor),c)):s.push(Ei(i.at-e,d,i.at+e,u,o,a,mr(i.floor),c))}}for(const i of zl)s.push(Ei(i.x0,i.z0,i.x1,i.z1,xt[i.floor],Us[i.floor],mr(i.floor),"wall"));for(const i of Pl)s.push(Ei(i.x0,i.z0,i.x1,i.z1,Kc,xt[1],0,"slab"));s.push(Ei(-2,-6,26,30,-.4,0,0,"slab"));for(const i of $d){if(i.collide===!1&&i.sight===!1)continue;const r=xt[i.floor],o=i.collide!==!1,a=i.sight!==!1&&i.h>.1;!o&&!a||s.push(Ei(i.x0,i.z0,i.x1,i.z1,r+(i.sightFrom??0),r+i.h,o?mr(i.floor):0,"furniture",a,i.type))}for(const i of qt){const r=xt[i.floor];s.push(Ei(i.nook.x0,i.nook.z0,i.nook.x1,i.nook.z1,r,r+.2,mr(i.floor),"hide",!1,i.id))}const t=dn,n=t.width/2;for(let i=0;i<t.points.length-1;i++){const r=t.points[i],o=t.points[i+1],a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c),h=-c/l,d=a/l,u=t.bottomY+(t.topY-t.bottomY)*t.cum[i]/t.length,f=t.bottomY+(t.topY-t.bottomY)*t.cum[i+1]/t.length,p=.04,_=a/l,g=c/l;for(const m of[1,-1]){const v=n+.06;s.push(Ru(r.x+h*v*m-_*p,r.z+d*v*m-g*p,o.x+h*v*m+_*p,o.z+d*v*m+g*p,.12,Math.min(u,f)-.25,Math.max(u,f)+Cu,ln,"rail"))}s.push(Ru(r.x-_*p,r.z-g*p,o.x+_*p,o.z+g*p,t.width+.1,Math.min(u,f)-.25,Math.min(u,f)-.02,0,"stair"))}return s.push(Ei(5,13.95+.06,8,16.05-.06,0,Us[0],ln|Mn,"core")),s}function Dl(s,e,t){for(const n of as)if(n.floor===s&&e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1)return n}function ey(s){return as.find(e=>e.id===s)?.name??s}class ty{constructor(e){q(this,"s");this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e){return Math.floor(this.next()*e)}shuffle(e){const t=e.slice();for(let n=t.length-1;n>0;n--){const i=this.int(n+1),r=t[n];t[n]=t[i],t[i]=r}return t}}const Zd={patrol:2654435769,chores:2246822507};function Jd(s,e){return new ty((s^e)>>>0)}function Ul(){return Math.floor(Math.random()*9e5)+1e5>>>0}const Lu=[{id:"sock-detective",title:"Sock Detective",copy:"Find the missing partners for three socks.",icon:"🧦"},{id:"plushie-parade",title:"Plushie Parade",copy:"March the stuffed animals back to their basket.",icon:"🧸"},{id:"pillow-patrol",title:"Pillow Patrol",copy:"Fluff the couch pillows back into formation.",icon:"🛋️"},{id:"toy-traffic",title:"Toy Traffic Control",copy:"Park every toy car in its proper spot.",icon:"🚗"},{id:"towel-tower",title:"Towel Tower",copy:"Fold three towels into a wobbly tower.",icon:"🧺"},{id:"book-rescue",title:"Book Rescue",copy:"Return the runaway books to the shelf.",icon:"📚"},{id:"crumb-case",title:"Crumb Case",copy:"Sweep up the toast confetti.",icon:"🍞"},{id:"blanket-burrito",title:"Blanket Burrito",copy:"Fold the blanket into one very tidy burrito.",icon:"🌯"}];function ny(s,e=3){const t=Lu.map(r=>r.id).sort();return Jd(s,Zd.chores).shuffle(t).slice(0,e).map(r=>Lu.find(o=>o.id===r))}const Wo=60,hn=1/Wo,$e=s=>Math.round(s*Wo),Me={roundTicks:180*Wo,headStartTicks:10*Wo,kaiWalkSpeed:4.2,kaiQuietSpeed:2.2,kaiRadius:.25,kaiTorsoHeight:.72,hideReach:.75,escapeGraceTicks:$e(6),footstepIntervalTicks:$e(.35),footstepRadius:4,footstepQuietRadius:1.5,seekerSpeed:2.1,seekerChaseSpeed:2.9,seekerEyeHeight:1.6,seekerSightRange:5.5,seekerFovDeg:110,touchRadius:.7,chaseMemoryTicks:$e(.6),checkTicks:$e(1.25),lookAroundTicks:$e(2),clueThrottleTicks:$e(3),clueDedupeDistance:1,localInspectRadius:2.5,plannedChecksPerSweep:3,shoutCooldownTicks:$e(6),shoutHearing:14,tauntFirstTicks:$e(4),babySightRange:4,babySightTicks:$e(.35),babyCrawlSpeed:.9,babyReturnSpeed:.5,babyLostTicks:$e(2),babyRestTicks:$e(3),babyGiggleCooldownTicks:$e(12),babyGiggleHearing:3,babyEyeHeight:.45,catSpeed:.75,noriSpeed:1,noriYipRange:2,noriYipCooldownTicks:$e(12),noriYipHearing:4,noriEyeHeight:.35,rockyToyTicks:[$e(55),$e(125)],rockyToyHearing:3,childFovDeg:110},Nl={normal:{seekerSpeed:Me.seekerSpeed,seekerChaseSpeed:Me.seekerChaseSpeed,seekerSightRange:Me.seekerSightRange,touchRadius:Me.touchRadius,checkTicks:Me.checkTicks,checksPerSweep:Me.plannedChecksPerSweep,footstepRadius:Me.footstepRadius,footstepQuietRadius:Me.footstepQuietRadius,hideReach:Me.hideReach,hideCoverReach:0,fireRange:5.5,fireStunTicks:$e(4),fireCooldownTicks:$e(12),iceRange:7,iceStunTicks:$e(5),iceCooldownTicks:$e(12)},easy:{seekerSpeed:1.7,seekerChaseSpeed:2.3,seekerSightRange:4.5,touchRadius:.6,checkTicks:$e(2.2),checksPerSweep:2,footstepRadius:3,footstepQuietRadius:1,hideReach:2,hideCoverReach:1.6,fireRange:7,fireStunTicks:$e(6),fireCooldownTicks:$e(4),iceRange:9,iceStunTicks:$e(8),iceCooldownTicks:$e(4)}},Nr={sighting:0,kaiFootstep:1,familySound:2};function Ri(s){return s.layer===ln?"stair":s.layer===Mn?0:1}function jc(s){return{x:s.x,y:s.y+Me.kaiTorsoHeight,z:s.z}}function Zc(s,e){return s==="stair"||e==="stair"?!0:s===e}function Qd(s,e,t,n){if(e.hidden)return!1;const i=Ri(e);if(n.sameFloorOnly){if(i==="stair"||s.zone==="stair"||i!==s.zone)return!1}else if(!Zc(s.zone,i))return!1;const r=jc(e),o={x:s.x,y:s.eyeY,z:s.z};return Math.hypot(r.x-o.x,r.y-o.y,r.z-o.z)>n.range||n.fovDeg!==null&&!qd(s.x,s.z,s.yaw,e.x,e.z,n.fovDeg)?!1:Go(o,r,t)}const ef=s=>s==="stair"?ln:s===0?Mn:Ur;function iy(s,e,t){if(t!=="stair")for(let n=0;n<6&&e.pathIdx+1<e.path.length;n++){const i=s.nodes[e.path[e.pathIdx]],r=s.nodes[e.path[e.pathIdx+1]];if(i.zone!==t||r.zone!==t||!s.walkableLine(t,e.x,e.z,r.x,r.z))return;e.pathIdx++}}function kl(s,e,t,n,i=9/60){let r=t,o=null;for(;r>1e-9&&e.pathIdx<e.path.length;){iy(s,e,n);const a=s.nodes[e.path[e.pathIdx]],c=a.x-e.x,l=a.z-e.z,h=Math.hypot(c,l);if(h>1e-6&&(o=Dn(c,l)),h<=r)e.x=a.x,e.z=a.z,r-=h,e.pathIdx++;else{const d=r/h;e.x+=c*d,e.z+=l*d,r=0}}return o!==null&&Ni(e,o,i),e.pathIdx>=e.path.length}function Ni(s,e,t){const n=Ll(s.yaw,e);for(Math.abs(n)<=t?s.yaw=e:s.yaw+=Math.sign(n)*t;s.yaw>Math.PI;)s.yaw-=Math.PI*2;for(;s.yaw<-Math.PI;)s.yaw+=Math.PI*2}function Xo(s,e,t,n,i,r,o=!1){const a=s.nearest(e.x,e.z,t),c=s.nearest(n,i,r);if(a<0||c<0)return!1;let l=s.findPath(a,c);if(!l||o&&l.some(d=>s.nodes[d].zone!==t))return!1;const h=s.nodes[l[0]];return l.length>1&&Math.hypot(h.x-e.x,h.z-e.z)<.35&&(l=l.slice(1)),e.path=l,e.pathIdx=0,!0}function sy(s,e=Me.plannedChecksPerSweep){const t=Jd(s,Zd.patrol),n=p=>qt.filter(_=>_.floor===p).map(_=>_.id),i=p=>Jv.filter(_=>_.floor===p),r={0:t.shuffle(n(0)),1:t.shuffle(n(1))},o=t.int(2),a=1-o,c=e,l=p=>({kind:"waypoint",id:p.id,floor:p.floor,x:p.x,z:p.z}),h=(p,_)=>{const g=t.shuffle(i(p)).slice(0,2).map(l),m=_.map(v=>({kind:"check",spotId:v}));return t.shuffle([...m,...g])},d=[...h(o,r[o].slice(0,c)),...h(a,r[a].slice(c,2*c))],u=[...h(a,r[a].slice(0,c)),...h(o,r[o].slice(c,2*c))],f=p=>p.flatMap(_=>t.shuffle(i(_)).map(l));return{mom:{plan:d,loop:f([o,a])},dad:{plan:u,loop:f([a,o])}}}function Pu(s,e){const t=No[s];return{id:s,x:t.x,z:t.z,y:xt[0],zone:0,yaw:t.yaw,mode:"idle",path:[],pathIdx:0,pathGoal:-1,plan:e.plan,planIndex:0,loop:e.loop,loopIndex:0,routineChecksDone:[],announcedStep:-1,investigate:null,check:null,seesKai:!1,lostTicks:0,lastSeen:null,clueReadyTick:0,shoutReadyTick:0,tauntIdx:0,nextTauntTick:Me.headStartTicks+Me.tauntFirstTicks+(s==="dad"?$e(4.5):0),talkUntil:0,moving:!1,stunTicks:0,stunKind:null,knock:null}}function ry(s){return s.planIndex<s.plan.length?s.plan[s.planIndex]:s.loop[s.loopIndex%s.loop.length]}function oy(s){if(s.kind==="waypoint")return{x:s.x,z:s.z,zone:s.floor};const e=qt.find(t=>t.id===s.spotId);return{x:e.approach.x,z:e.approach.z,zone:e.floor}}function tf(s){$c(s.x,s.z)?(s.zone="stair",s.y=is(Ns(s.x,s.z).s)):(s.zone==="stair"&&(s.zone=Ns(s.x,s.z).s>1?1:0),s.y=xt[s.zone])}function ay(s,e,t,n,i){const r=s.nav.nearest(t,n,i);return(r!==e.pathGoal||e.path.length===0)&&(e.pathGoal=r,!Xo(s.nav,e,e.zone,t,n,i))?(e.path=[],!1):!0}function To(s,e,t,n,i,r){if(!ay(s,e,t,n,i))return!0;const o=kl(s.nav,e,r*hn,e.zone);return e.moving=!o,tf(e),o&&(e.path=[],e.pathGoal=-1),o}function Pi(s){s.path=[],s.pathIdx=0,s.pathGoal=-1}function Iu(s,e,t){s.mode="check",s.check={spotId:e,timer:0,routine:t},s.moving=!1,Pi(s)}function cy(s,e,t,n,i,r=Nl.normal){switch(e.moving=!1,e.mode){case"idle":return;case"patrol":{const o=ry(e),a=oy(o);o.kind==="check"&&e.announcedStep!==e.planIndex&&(e.announcedStep=e.planIndex,e.talkUntil=n+$e(1.8),e.nextTauntTick=Math.max(e.nextTauntTick,n+$e(5)),i.push({type:"hunch",who:e.id,spotId:o.spotId})),To(s,e,a.x,a.z,a.zone,r.seekerSpeed)?o.kind==="waypoint"?e.planIndex<e.plan.length?e.planIndex++:e.loopIndex=(e.loopIndex+1)%e.loop.length:(Iu(e,o.spotId,!0),i.push({type:"seekerMode",who:e.id,mode:"check",detail:o.spotId})):n>=e.nextTauntTick&&(i.push({type:"taunt",who:e.id,idx:e.tauntIdx}),e.talkUntil=n+$e(1.8),e.nextTauntTick=n+$e(Au[e.tauntIdx%Au.length]),e.tauntIdx++);return}case"investigate":{const o=e.investigate;if(o.phase==="travel")To(s,e,o.dest.x,o.dest.z,o.dest.zone,r.seekerSpeed)&&(o.phase="look",o.lookTimer=0,o.lookBaseYaw=e.yaw);else if(o.phase==="look"){o.lookTimer++;const a=o.lookTimer/60;e.yaw=o.lookBaseYaw+Math.sin(a*Math.PI)*1.3,o.lookTimer>=Me.lookAroundTicks&&(o.localSpot?(o.phase="toSpot",e.talkUntil=n+$e(1.8),i.push({type:"hunch",who:e.id,spotId:o.localSpot})):(e.mode="patrol",e.investigate=null,Pi(e),i.push({type:"seekerMode",who:e.id,mode:"patrol"})))}else{const a=qt.find(c=>c.id===o.localSpot);To(s,e,a.approach.x,a.approach.z,a.floor,r.seekerSpeed)&&(e.investigate=null,Iu(e,a.id,!1),i.push({type:"seekerMode",who:e.id,mode:"check",detail:a.id}))}return}case"chase":{const o=e.lastSeen,a=Math.hypot(o.x-e.x,o.z-e.z),c=ef(e.zone);if(a>.25){const l=a<2.2&&e.zone===o.zone&&Xd(e.x,e.z,o.x,o.z,s.solids,c,.18),h=e.x,d=e.z;l||To(s,e,o.x,o.z,o.zone,r.seekerChaseSpeed);const u=!l&&e.zone===o.zone&&Math.hypot(e.x-h,e.z-d)<1e-6;if(l||u){const f=Math.min(a,r.seekerChaseSpeed*hn),p=Yc(e.x+(o.x-e.x)/a*f,e.z+(o.z-e.z)/a*f,.22,s.solids,c);e.moving=Math.hypot(p.x-e.x,p.z-e.z)>1e-4,e.x=p.x,e.z=p.z,Pi(e),tf(e),Ni(e,Dn(o.x-e.x,o.z-e.z),10/60)}}e.seesKai&&Ni(e,Dn(t.x-e.x,t.z-e.z),10/60);return}case"check":{const o=e.check;o.timer++;const a=qt.find(c=>c.id===o.spotId);Ni(e,Dn(a.hidden.x-e.x,a.hidden.z-e.z),8/60);return}}}function ly(s,e,t){if(t==="stair")return null;let n=null,i=Me.localInspectRadius;for(const r of qt){if(r.floor!==t)continue;const o=Math.hypot(r.approach.x-s,r.approach.z-e);o<=i&&(i=o,n=r.id)}return n}function qo(s){return{x:s.x,z:s.z,yaw:s.yaw??0,stopIdx:0,path:[],pathIdx:0,pauseTimer:$e(1.5),action:"idle",moving:!1}}function Fl(s,e,t,n,i){if(e.moving=!1,e.pauseTimer>0){if(e.pauseTimer--,e.pauseTimer===0){e.stopIdx=(e.stopIdx+1)%t.length;const o=t[e.stopIdx];Xo(s.nav,e,n,o.x,o.z,n,!0)||(e.path=[])}return}if(e.path.length===0||e.pathIdx>=e.path.length){const o=t[e.stopIdx];if(!(Math.hypot(o.x-e.x,o.z-e.z)>.3&&Xo(s.nav,e,n,o.x,o.z,n,!0))){e.pauseTimer=$e(o.pause),e.action=o.action??"idle";return}}if(e.action="walk",e.moving=!0,kl(s.nav,e,i*hn,n,7/60)){const o=t[e.stopIdx];e.path=[],e.pauseTimer=$e(o.pause),e.action=o.action??"idle",e.moving=!1}}function hy(){const s=Nn.baby.mat;return{x:s.x,z:s.z,yaw:s.yaw,mode:"idle",target:null,sightTicks:0,timer:0,giggleReadyTick:0,moving:!1}}function Ya(s,e){const t=Nn.baby.safe;return{x:Math.max(t.x0,Math.min(t.x1,s)),z:Math.max(t.z0,Math.min(t.z1,e))}}function Ka(s,e,t,n){const i=e-s.x,r=t-s.z,o=Math.hypot(i,r),a=n*hn;return o<=Math.max(a,.05)?(s.x=e,s.z=t,s.moving=o>.001,!0):(s.x+=i/o*a,s.z+=r/o*a,Ni(s,Dn(i,r),6/60),s.moving=!0,!1)}function uy(s,e,t,n,i,r){e.moving=!1;const o=Nn.baby.mat;let a=!1;i&&(a=Qd({x:e.x,z:e.z,eyeY:Me.babyEyeHeight,zone:0,yaw:e.yaw},t,s.solids,{range:Me.babySightRange,fovDeg:Me.childFovDeg,sameFloorOnly:!0})),e.sightTicks=a?e.sightTicks+1:0;const c=()=>{e.mode="crawl",e.target=Ya(t.x,t.z),n>=e.giggleReadyTick&&(e.giggleReadyTick=n+Me.babyGiggleCooldownTicks,r.push({kind:"giggle",priority:Nr.familySound,actor:"baby",origin:{x:e.x,z:e.z,zone:0},dest:{x:e.x,z:e.z,zone:0},pathDist:0}))};switch(e.mode){case"idle":e.yaw=o.yaw+Math.sin(n/90)*1.25,e.sightTicks>=Me.babySightTicks&&c();break;case"crawl":a?e.target=Ya(t.x,t.z):(e.mode="lost",e.timer=0),e.target&&Ka(e,e.target.x,e.target.z,Me.babyCrawlSpeed)&&!a&&(e.mode="rest",e.timer=0);break;case"lost":if(e.timer++,a){e.mode="crawl",e.target=Ya(t.x,t.z);break}(!e.target||Ka(e,e.target.x,e.target.z,Me.babyCrawlSpeed)||e.timer>=Me.babyLostTicks)&&(e.mode="rest",e.timer=0);break;case"rest":if(e.timer++,e.sightTicks>=Me.babySightTicks){c();break}e.timer>=Me.babyRestTicks&&(e.mode="return");break;case"return":if(e.sightTicks>=Me.babySightTicks){c();break}Ka(e,o.x,o.z,Me.babyReturnSpeed)&&(e.mode="idle",e.target=null);break}}function dy(){return{...qo(Nn.nori.start),yipReadyTick:0,wagUntil:0}}function fy(s,e,t,n,i,r){const o=Nn.nori;if(n<e.wagUntil?(e.moving=!1,Ni(e,Dn(t.x-e.x,t.z-e.z),8/60)):Fl(s,e,o.route,o.floor,Me.noriSpeed),!i||t.hidden||Ri(t)!==0||n<e.yipReadyTick||Math.hypot(t.x-e.x,t.z-e.z)>Me.noriYipRange)return;const c={x:e.x,y:Me.noriEyeHeight,z:e.z},l={x:t.x,y:t.y+Me.kaiTorsoHeight,z:t.z};Go(c,l,s.solids)&&(e.yipReadyTick=n+Me.noriYipCooldownTicks,e.wagUntil=n+$e(1.5),r.push({kind:"yip",priority:Nr.familySound,actor:"nori",origin:{x:e.x,z:e.z,zone:0},dest:{x:e.x,z:e.z,zone:0},pathDist:0}))}function py(){const s=Nn.rocky.toy[0];return{...qo(Nn.rocky.start),toyIdx:0,ball:{...s},ballFrom:{...s},ballTo:{...s},ballRollTick:-1,batUntil:0}}function my(s,e,t,n,i){const r=Nn.rocky,o=Me.rockyToyTicks[e.toyIdx];if(e.ballRollTick>=0){const a=Math.min(1,(t-e.ballRollTick)/$e(1.2)),c=1-(1-a)*(1-a);e.ball.x=e.ballFrom.x+(e.ballTo.x-e.ballFrom.x)*c,e.ball.z=e.ballFrom.z+(e.ballTo.z-e.ballFrom.z)*c,a>=1&&(e.ballRollTick=-1)}if(t<e.batUntil){e.moving=!1,e.action="idle";return}if(o!==void 0&&t>=o-$e(7)&&t<o){const a=e.ball.x-.45,c=e.ball.z;Math.hypot(a-e.x,c-e.z)>.2?((e.path.length===0||e.pathIdx>=e.path.length)&&Xo(s.nav,e,r.floor,a,c,r.floor,!0),e.moving=!0,e.action="walk",kl(s.nav,e,Me.catSpeed*1.4*hn,r.floor,7/60)&&(e.path=[],e.x=a,e.z=c)):(e.moving=!1,e.action="sit",Ni(e,Dn(e.ball.x-e.x,e.ball.z-e.z),8/60));return}if(o!==void 0&&t===o){const a={...e.ball},c=r.toy[(e.toyIdx+1)%r.toy.length];e.ballFrom={...a},e.ballTo={...c},e.ballRollTick=t,e.batUntil=t+$e(1.5),e.toyIdx++,e.path=[],e.pauseTimer=0,n&&i.push({kind:"toy",priority:Nr.familySound,actor:"rocky",origin:{x:a.x,z:a.z,zone:1},dest:{x:a.x,z:a.z,zone:1},pathDist:0});return}Fl(s,e,r.route,r.floor,Me.catSpeed)}function zu(s,e,t){const n=Nn[t];Fl(s,e,n.route,n.floor,Me.catSpeed)}const Mr=.5,es=52,Rr=52,gy=.32;class _y{constructor(){q(this,"nodes",[]);q(this,"cellIndex",[new Int32Array(es*Rr).fill(-1),new Int32Array(es*Rr).fill(-1)]);q(this,"stairNodes",[])}cellCenter(e){return e*Mr+Mr/2}cellOf(e,t){return[Math.floor(e/Mr),Math.floor(t/Mr)]}nodeAtCell(e,t,n){return t<0||n<0||t>=es||n>=Rr?-1:this.cellIndex[e][n*es+t]}nearest(e,t,n){if(n==="stair"){let c=-1,l=1/0;for(const h of this.stairNodes){const d=this.nodes[h],u=Math.hypot(d.x-e,d.z-t);u<l&&(l=u,c=h)}return c}const[i,r]=this.cellOf(e,t);let o=-1,a=1/0;for(let c=0;c<=4;c++){for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++){if(Math.max(Math.abs(h),Math.abs(l))!==c)continue;const d=this.nodeAtCell(n,i+h,r+l);if(d<0)continue;const u=this.nodes[d],f=Math.hypot(u.x-e,u.z-t);f<a&&(a=f,o=d)}if(o>=0&&c>=1)break}return o}findPath(e,t){if(e<0||t<0)return null;if(e===t)return[e];const n=this.nodes.length,i=new Float64Array(n).fill(1/0),r=new Int32Array(n).fill(-1),o=new Uint8Array(n),a=new Du,c=this.nodes[t],l=d=>{const u=this.nodes[d];return Math.hypot(u.x-c.x,u.z-c.z)+Math.abs(u.y-c.y)*.5};for(i[e]=0,a.push(e,l(e));a.size>0;){const d=a.pop();if(d===t)break;if(!o[d]){o[d]=1;for(const u of this.nodes[d].edges){const f=i[d]+u.cost;f<i[u.to]&&(i[u.to]=f,r[u.to]=d,a.push(u.to,f+l(u.to)))}}}if(!isFinite(i[t]))return null;const h=[];for(let d=t;d!==-1;d=r[d])h.push(d);return h.reverse()}distancesFrom(e,t,n){const i=new Map;if(e<0)return i;const r=new Du;for(i.set(e,0),r.push(e,0);r.size>0;){const o=r.pop(),a=i.get(o);for(const c of this.nodes[o].edges){const l=a+c.cost;if(l>t)continue;const h=this.nodes[c.to];if(n!==void 0&&h.zone!==n)continue;const d=i.get(c.to);(d===void 0||l<d)&&(i.set(c.to,l),r.push(c.to,l))}}return i}pathLength(e){let t=0;for(let n=1;n<e.length;n++){const i=this.nodes[e[n-1]],r=this.nodes[e[n]];t+=Math.hypot(i.x-r.x,i.z-r.z)}return t}walkableLine(e,t,n,i,r){const o=Math.hypot(i-t,r-n),a=Math.max(1,Math.ceil(o/.2));for(let c=0;c<=a;c++){const l=c/a,[h,d]=this.cellOf(t+(i-t)*l,n+(r-n)*l);if(this.nodeAtCell(e,h,d)<0)return!1}return!0}}class Du{constructor(){q(this,"ids",[]);q(this,"keys",[])}get size(){return this.ids.length}push(e,t){this.ids.push(e),this.keys.push(t);let n=this.ids.length-1;for(;n>0;){const i=n-1>>1;if(this.keys[i]<=this.keys[n])break;this.swap(n,i),n=i}}pop(){const e=this.ids[0],t=this.ids.pop(),n=this.keys.pop();if(this.ids.length>0){this.ids[0]=t,this.keys[0]=n;let i=0;for(;;){const r=i*2+1,o=r+1;let a=i;if(r<this.ids.length&&this.keys[r]<this.keys[a]&&(a=r),o<this.ids.length&&this.keys[o]<this.keys[a]&&(a=o),a===i)break;this.swap(i,a),i=a}}return e}swap(e,t){[this.ids[e],this.ids[t]]=[this.ids[t],this.ids[e]],[this.keys[e],this.keys[t]]=[this.keys[t],this.keys[e]]}}function xy(s){const e=new _y;for(const c of[0,1]){const l=c===0?Mn:Ur,h=s.filter(d=>(d.layers&l)!==0);for(let d=0;d<Rr;d++)for(let u=0;u<es;u++){const f=e.cellCenter(u),p=e.cellCenter(d);if(!as.some(v=>v.floor===c&&f>v.x0&&f<v.x1&&p>v.z0&&p<v.z1))continue;let g=!0;for(const v of h)if(!(Math.abs(v.cx-f)>v.hx+v.hz+1||Math.abs(v.cz-p)>v.hx+v.hz+1)&&Kv(f,p,gy,v)){g=!1;break}if(!g)continue;const m=e.nodes.length;e.nodes.push({id:m,x:f,z:p,y:xt[c],zone:c,edges:[]}),e.cellIndex[c][d*es+u]=m}for(let d=0;d<Rr;d++)for(let u=0;u<es;u++){const f=e.nodeAtCell(c,u,d);if(!(f<0))for(const[p,_]of[[1,0],[0,1],[1,1],[1,-1]]){const g=e.nodeAtCell(c,u+p,d+_);if(g<0||p!==0&&_!==0&&(e.nodeAtCell(c,u+p,d)<0||e.nodeAtCell(c,u,d+_)<0))continue;const m=Math.hypot(p,_)*Mr;e.nodes[f].edges.push({to:g,cost:m}),e.nodes[g].edges.push({to:f,cost:m})}}}const t=dn,n=Math.ceil(t.length/.5);let i=-1;for(let c=0;c<=n;c++){const l=.2+(t.length-.4)*c/n,h=Ar(l),d=e.nodes.length;if(e.nodes.push({id:d,x:h.x,z:h.z,y:is(l),zone:"stair",s:l,edges:[]}),e.stairNodes.push(d),i>=0){const u=e.nodes[i],f=l-(u.s??0);u.edges.push({to:d,cost:f}),e.nodes[d].edges.push({to:i,cost:f})}i=d}const r=(c,l,h,d)=>{const u=e.nearest(h,d,l);if(u<0)throw new Error(`Stair mouth on floor ${l+1} has no walkable cell near (${h}, ${d})`);const f=e.nodes[c],p=e.nodes[u],_=Math.hypot(f.x-p.x,f.z-p.z);f.edges.push({to:u,cost:_}),p.edges.push({to:c,cost:_})},o=Ar(0),a=Ar(t.length);return r(e.stairNodes[0],0,o.x+.3,o.z),r(e.stairNodes[e.stairNodes.length-1],1,a.x+.3,a.z),e}let $a=null;function nf(){if(!$a){const s=Qv(),e=xy(s);$a={solids:s,nav:e,spots:new Map(qt.map(t=>[t.id,t]))}}return $a}function vy(){return{x:No.kai.x,z:No.kai.z,y:0,layer:Mn,floor:0,yaw:No.kai.yaw,quiet:!1,hidden:null,moving:!1,speed:0,footstepCooldown:0,stairS:0}}function Uu(s,e=Nl.normal,t=0){const n=sy(s,e.checksPerSweep);return{seed:s,tick:0,phase:"headstart",kai:vy(),mom:Pu("mom",n.mom),dad:Pu("dad",n.dad),baby:hy(),beerus:qo(Nn.beerus.start),badahh:qo(Nn.badahh.start),rocky:py(),nori:dy(),checkedSpots:[],events:[],result:null,lastClue:null,escapesLeft:t,graceTicks:0,powerReadyTick:{fire:0,ice:0}}}class sf{constructor(e,t={},n=nf()){q(this,"state");q(this,"world");q(this,"opts");q(this,"tune");this.world=n,this.opts={household:t.household??!0,seekers:t.seekers??["mom","dad"],difficulty:t.difficulty??"normal",escapes:t.escapes??0},this.tune=Nl[this.opts.difficulty],this.state=Uu(e,this.tune,this.opts.escapes)}reset(e=this.state.seed){this.state=Uu(e,this.tune,this.opts.escapes)}get canEscape(){return this.state.phase==="caught"&&this.state.escapesLeft>0}escape(e="fire"){const t=this.state;if(!this.canEscape||!t.result)return!1;const n=t.result.captor??"mom";t.escapesLeft-=1,t.result=null,t.phase="search";const i=t.kai;if(i.hidden){const o=this.world.spots.get(i.hidden);t.checkedSpots.includes(o.id)||t.checkedSpots.push(o.id),i.hidden=null,i.x=o.approach.x,i.z=o.approach.z}for(const o of this.seekers)o.mode="patrol",o.check=null,o.investigate=null,o.seesKai=!1,o.lostTicks=0,o.lastSeen=null,o.moving=!1,Pi(o);t.graceTicks=Me.escapeGraceTicks,t.events.push({type:"escaped",who:n},{type:"phase",phase:"search"});const r=this.powerTargets(e,!0);this.faceTarget(r);for(const o of r)this.zap(o,e);return t.events.push({type:"power",power:e,hit:r.map(o=>o.id),reason:"escape"}),!0}range(e){return e==="fire"?this.tune.fireRange:this.tune.iceRange}powerTargets(e,t=!1){const n=this.state.kai,i=Ri(n),r=jc(n),o=t?Math.max(this.range(e),3):this.range(e);return this.seekers.filter(a=>a.stunTicks>0||!Zc(a.zone,i)||Math.hypot(a.x-n.x,a.z-n.z)>o?!1:Go(r,{x:a.x,y:a.y+1.1,z:a.z},this.world.solids))}recharge(e){const t=this.state,n=t.powerReadyTick[e]-t.tick;if(n<=0)return 0;const i=e==="fire"?this.tune.fireCooldownTicks:this.tune.iceCooldownTicks;return Math.min(1,n/i)}canUse(e){const t=this.state;return t.phase!=="search"&&t.phase!=="headstart"||t.kai.hidden?!1:t.tick>=t.powerReadyTick[e]}use(e){const t=this.state;if(!this.canUse(e))return null;const n=t.phase==="search"?this.powerTargets(e):[];this.faceTarget(n);for(const i of n)this.zap(i,e);return t.powerReadyTick[e]=t.tick+(e==="fire"?this.tune.fireCooldownTicks:this.tune.iceCooldownTicks),t.events.push({type:"power",power:e,hit:n.map(i=>i.id),reason:"button"}),n.map(i=>i.id)}faceTarget(e){const t=this.state.kai;if(!e.length||t.hidden)return;const n=e.reduce((i,r)=>Math.hypot(i.x-t.x,i.z-t.z)<=Math.hypot(r.x-t.x,r.z-t.z)?i:r);t.yaw=Dn(n.x-t.x,n.z-t.z)}zap(e,t){const n=this.state.kai;let i=e.x-n.x,r=e.z-n.z,o=Math.hypot(i,r);o<.05&&(i=Math.sin(n.yaw),r=Math.cos(n.yaw),o=1),e.stunTicks=t==="fire"?this.tune.fireStunTicks:this.tune.iceStunTicks,e.stunKind=t,e.knock=t==="fire"&&e.zone!=="stair"?{vx:i/o*6,vz:r/o*6,ticks:30,total:30}:null,e.mode="patrol",e.check=null,e.investigate=null,e.seesKai=!1,e.lostTicks=0,e.lastSeen=null,e.moving=!1,e.yaw=Math.atan2(-i,-r),Pi(e)}updateZapped(e){const t=e.knock;if(t&&t.ticks>0){const n=t.ticks/t.total,i=ef(e.zone),r=Yc(e.x+t.vx*n*hn,e.z+t.vz*n*hn,.22,this.world.solids,i),o=e.zone===1?1:0;!$c(r.x,r.z)&&this.world.nav.walkableLine(o,e.x,e.z,r.x,r.z)?(e.x=r.x,e.z=r.z,t.ticks-=1):t.ticks=0,t.ticks===0&&(e.knock=null)}e.stunTicks>0&&--e.stunTicks===0&&(this.state.events.push({type:"recovered",who:e.id,power:e.stunKind??"fire"}),e.stunKind=null)}get terminal(){return this.state.phase==="won"||this.state.phase==="caught"}get seekers(){return this.opts.seekers.map(e=>this.state[e])}drainEvents(){const e=this.state.events;return this.state.events=[],e}step(e){const t=this.state;if(this.terminal)return;if(t.tick+=1,t.tick>=Me.roundTicks){this.finish("won");return}if(t.tick===Me.headStartTicks){t.phase="search";for(const a of this.seekers)a.mode="patrol";t.events.push({type:"phase",phase:"search"},{type:"readyOrNot"})}t.tick===Me.roundTicks-600&&t.events.push({type:"finalTen"});const n=t.phase==="search",i=n&&t.graceTicks===0;t.graceTicks>0&&--t.graceTicks===0&&t.events.push({type:"graceEnd"});for(const a of this.seekers)(a.stunTicks>0||a.knock)&&this.updateZapped(a);const r=this.seekers.filter(a=>a.stunTicks===0),o=[];if(this.updateKai(e,o),i)for(const a of r)cy(this.world,a,t.kai,t.tick,t.events,this.tune);if(this.opts.household&&this.updateHousehold(n,o),i)for(const a of r)this.perceive(a,o);i&&this.processClues(o),i&&this.captureChecks()}nearbySpot(){const e=this.state.kai;if(e.hidden||e.layer===ln)return null;const t=e.layer===Mn?0:1;let n=null,i=1/0;for(const r of qt){if(r.floor!==t)continue;const o=r.approach.x-e.x,a=r.approach.z-e.z,c=Math.hypot(o,a),h=(Math.abs(o)<=.5&&Math.abs(a)<=.5||c<=this.tune.hideReach)&&Xd(e.x,e.z,r.approach.x,r.approach.z,this.world.solids,e.layer);let d=1/0;if(this.tune.hideCoverReach>0){const p=Math.max(r.nook.x0-e.x,0,e.x-r.nook.x1),_=Math.max(r.nook.z0-e.z,0,e.z-r.nook.z1),g=as.find(v=>v.id===r.room&&v.floor===t);!!g&&e.x>=g.x0&&e.x<=g.x1&&e.z>=g.z0&&e.z<=g.z1&&(d=Math.hypot(p,_))}const u=d<=this.tune.hideCoverReach;if(!h&&!u)continue;const f=Math.min(h?c:1/0,u?d:1/0);f<i&&(i=f,n=r)}return n}updateKai(e,t){const n=this.state,i=n.kai;if(e.toggleQuiet&&(i.quiet=!i.quiet,n.events.push({type:"quiet",on:i.quiet})),e.interact)if(i.hidden){const u=this.world.spots.get(i.hidden);n.events.push({type:"emerge",spotId:i.hidden}),i.hidden=null,i.x=u.approach.x,i.z=u.approach.z,i.yaw=Dn(u.approach.x-u.hidden.x,u.approach.z-u.hidden.z)}else{const u=this.nearbySpot();u&&(i.hidden=u.id,i.x=u.hidden.x,i.z=u.hidden.z,i.yaw=u.hidden.yaw,i.moving=!1,i.speed=0,n.events.push({type:"hide",spotId:u.id}))}if(i.footstepCooldown>0&&i.footstepCooldown--,i.hidden){i.moving=!1,i.speed=0;return}let r=e.moveX,o=e.moveZ;const a=Math.hypot(r,o);a>1&&(r/=a,o/=a);const c=i.quiet?Me.kaiQuietSpeed:Me.kaiWalkSpeed,l=i.x,h=i.z;if(a>.05){const u=i.x+r*c*hn,f=i.z+o*c*hn,p=Yc(u,f,Me.kaiRadius,this.world.solids,i.layer);i.x=p.x,i.z=p.z,Ni(i,Dn(r,o),14/60),this.updateKaiLayer()}const d=Math.hypot(i.x-l,i.z-h);if(i.moving=d>.004,i.speed=d/hn,i.moving&&i.footstepCooldown===0)if(i.footstepCooldown=Me.footstepIntervalTicks,n.phase==="search"){const u=Ri(i),f=this.world.nav.nearest(i.x,i.z,u);if(f>=0){const p=this.world.nav.nodes[f];t.push({kind:"kaiFootstep",priority:Nr.kaiFootstep,actor:"kai",origin:{x:p.x,z:p.z,zone:u},dest:{x:p.x,z:p.z,zone:p.zone},pathDist:0})}}else n.events.push({type:"footstep",quiet:i.quiet,heard:!1})}updateKaiLayer(){const e=this.state.kai;if(e.layer===ln){const t=Ns(e.x,e.z);t.s<0?(e.layer=Mn,e.floor=0,e.y=xt[0]):t.s>dn.length?(e.layer=Ur,e.floor=1,e.y=xt[1]):(e.stairS=t.s,e.y=is(t.s))}else if($c(e.x,e.z)){e.layer=ln;const t=Ns(e.x,e.z);e.stairS=t.s,e.y=is(t.s)}}placeKai(e,t,n){const i=this.state.kai;if(i.x=e,i.z=t,i.hidden=null,n==="stair"){i.layer=ln;const r=Ns(e,t);i.stairS=r.s,i.y=is(r.s)}else i.layer=n===0?Mn:Ur,i.floor=n,i.y=xt[n]}kaiRoomLabel(){const e=this.state.kai;return e.hidden?ey(this.world.spots.get(e.hidden).room):e.layer===ln?"Staircase":Dl(e.layer===Mn?0:1,e.x,e.z)?.name??"Hallway"}updateHousehold(e,t){const n=this.state,i=this.world;uy(i,n.baby,n.kai,n.tick,e,t),zu(i,n.beerus,"beerus"),zu(i,n.badahh,"badahh"),my(i,n.rocky,n.tick,e,t),fy(i,n.nori,n.kai,n.tick,e,t)}eyeOf(e){return{x:e.x,z:e.z,eyeY:e.y+Me.seekerEyeHeight,zone:e.zone,yaw:e.yaw}}sees(e){return Qd(this.eyeOf(e),this.state.kai,this.world.solids,{range:this.tune.seekerSightRange,fovDeg:e.mode==="chase"?null:Me.seekerFovDeg})}perceive(e,t){const n=this.state,i=n.kai,r=e.seesKai,o=this.sees(e);if(e.seesKai=o,e.mode!=="chase"){if(!o)return;if(e.mode="chase",e.lostTicks=0,e.lastSeen={x:i.x,z:i.z,zone:Ri(i)},e.check=null,e.investigate=null,Pi(e),n.events.push({type:"chaseStart",who:e.id},{type:"seekerMode",who:e.id,mode:"chase"}),n.tick>=e.shoutReadyTick){e.shoutReadyTick=n.tick+Me.shoutCooldownTicks,e.talkUntil=n.tick+90;const a=this.world.nav.nearest(i.x,i.z,Ri(i)),c=this.world.nav.nodes[a];t.push({kind:"sighting",priority:Nr.sighting,actor:e.id,origin:{x:e.x,z:e.z,zone:e.zone},dest:{x:c.x,z:c.z,zone:c.zone},pathDist:0})}return}if(o){e.lostTicks=0,e.lastSeen={x:i.x,z:i.z,zone:Ri(i)};return}e.lostTicks++,i.hidden&&r?(this.startInvestigate(e,e.lastSeen,"sight",i.hidden,!0),n.events.push({type:"chaseLost",who:e.id})):e.lostTicks>Me.chaseMemoryTicks&&(this.startInvestigate(e,e.lastSeen,"sight",null),n.events.push({type:"chaseLost",who:e.id}))}startInvestigate(e,t,n,i,r=!1){e.mode="investigate",e.check=null,e.investigate={dest:{...t},phase:r&&i?"toSpot":"travel",lookTimer:0,lookBaseYaw:e.yaw,localSpot:i,source:n},Pi(e),this.state.events.push({type:"seekerMode",who:e.id,mode:"investigate",detail:n},{type:"investigate",who:e.id,source:n}),r&&i&&this.state.events.push({type:"hunch",who:e.id,spotId:i})}hearable(e,t=this.state.mom){const n=this.world.nav,i=n.nearest(t.x,t.z,t.zone),r=n.nearest(e.origin.x,e.origin.z,e.origin.zone);if(i<0||r<0)return null;let o,a;switch(e.kind){case"kaiFootstep":o=this.state.kai.quiet?this.tune.footstepQuietRadius:this.tune.footstepRadius,a=void 0;break;case"sighting":o=Me.shoutHearing,a=void 0;break;case"giggle":o=Me.babyGiggleHearing,a=0;break;case"yip":o=Me.noriYipHearing,a=0;break;case"toy":o=Me.rockyToyHearing,a=1;break}if(a!==void 0&&t.zone!==a)return null;const c=n.distancesFrom(r,o,a).get(i);return c===void 0?null:c}processClues(e){const t=this.state,n=this.seekers.filter(r=>r.stunTicks===0),i=new Map;for(const r of e){const o=[];for(const c of n){if(r.actor===c.id)continue;const l=this.hearable(r,c);l!==null&&o.push({m:c,dist:l})}i.set(r,o);const a=o.length>0;switch(r.kind){case"kaiFootstep":t.events.push({type:"footstep",quiet:t.kai.quiet,heard:a});break;case"sighting":t.events.push({type:"shout",who:r.actor,heard:a});break;case"giggle":t.events.push({type:"giggle",heard:a});break;case"yip":t.events.push({type:"yip",heard:a});break;case"toy":t.events.push({type:"toy",heard:a});break}}for(const r of n){if(r.mode==="chase"||r.mode==="check"||r.mode==="idle"||t.tick<r.clueReadyTick)continue;const o=[];for(const a of e){const c=i.get(a).find(l=>l.m===r);c&&o.push({...a,pathDist:c.dist})}if(o.length!==0){o.sort((a,c)=>a.priority-c.priority||a.pathDist-c.pathDist||Tu[a.actor]-Tu[c.actor]);for(const a of o){if(r.mode==="investigate"&&r.investigate&&Math.hypot(r.investigate.dest.x-a.dest.x,r.investigate.dest.z-a.dest.z)<Me.clueDedupeDistance&&r.investigate.dest.zone===a.dest.zone)continue;const c=a.kind==="kaiFootstep"?ly(a.dest.x,a.dest.z,a.dest.zone):null;this.startInvestigate(r,a.dest,a.kind,c),r.clueReadyTick=t.tick+Me.clueThrottleTicks,t.lastClue={...a,heardBy:r.id};break}}}}canTouch(e){const t=this.state.kai;if(t.hidden||!Zc(e.zone,Ri(t))||Math.abs(e.y-t.y)>1)return!1;const n=Math.hypot(e.x-t.x,e.z-t.z);if(n>this.tune.touchRadius||n>.2&&e.mode!=="chase"&&!qd(e.x,e.z,e.yaw,t.x,t.z,Me.seekerFovDeg))return!1;const i={x:e.x,y:e.y+Me.seekerEyeHeight,z:e.z};return Go(i,jc(t),this.world.solids)}captureChecks(){const e=this.state;for(const t of this.seekers)if(!(t.stunTicks>0)){if(this.canTouch(t)){this.finish("caught",t.id,"touch");return}if(!(t.mode!=="check"||!t.check)&&(t.check.timer===1&&e.events.push({type:"checkStart",who:t.id,spotId:t.check.spotId,kaiInside:e.kai.hidden===t.check.spotId}),t.check.timer>=this.tune.checkTicks)){const n=t.check;if(e.kai.hidden===n.spotId){this.finish("caught",t.id,"check");return}e.events.push({type:"checkEnd",who:t.id,spotId:n.spotId}),e.checkedSpots.includes(n.spotId)||e.checkedSpots.push(n.spotId),n.routine&&(t.routineChecksDone.push(n.spotId),t.planIndex++),t.check=null,t.mode="patrol",Pi(t),e.events.push({type:"seekerMode",who:t.id,mode:"patrol"})}}}finish(e,t,n){const i=this.state;if(i.result)return;i.phase=e;let r=null;e==="caught"?(r=this.kaiRoomLabel(),i.events.push({type:"caught",who:t??"mom",via:n??"touch"})):i.events.push({type:"won"}),i.events.push({type:"phase",phase:e}),i.result={outcome:e,tick:i.tick,survivedSeconds:Math.min(i.tick,Me.roundTicks)/60,captureRoom:r,captor:e==="caught"?t??"mom":null,via:e==="caught"?n??"touch":null,chores:e==="caught"?ny(i.seed):[]}}}function yy(s){return Math.max(0,Math.ceil((Me.roundTicks-s)/60))}function Jc(s){const e=Math.floor(s/60),t=s%60;return`${e}:${t.toString().padStart(2,"0")}`}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(s,e,t,n,i=0){const r=Math.min(typeof i=="number"?i:0,t/2,n/2);this.moveTo(s+r,e),this.arcTo(s+t,e,s+t,e+n,r),this.arcTo(s+t,e+n,s,e+n,r),this.arcTo(s,e+n,s,e,r),this.arcTo(s,e,s+t,e,r),this.closePath()});function kn(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Kn(s,e){const t=new Hr(s);return t.colorSpace=Ct,t.anisotropy=4,e&&(t.wrapS=t.wrapT=fi,t.repeat.set(e[0],e[1])),t}function Gr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Yo(s="#c8914f"){const[e,t]=kn(256,256),n=Gr(7);t.fillStyle=s,t.fillRect(0,0,256,256);const i=32;for(let r=0;r<256;r+=i){const o=Math.floor(n()*200);for(let a=-o;a<256;a+=200){const c=.88+n()*.2;t.fillStyle=`rgba(${c>1?255:120},${c>1?220:80},${c>1?160:40},${Math.abs(1-c)*.9})`,t.fillRect(a,r,200,i),t.fillStyle="rgba(90,55,25,0.35)",t.fillRect(a,r,2,i)}t.fillStyle="rgba(90,55,25,0.4)",t.fillRect(0,r,256,2);for(let a=0;a<6;a++){t.strokeStyle=`rgba(110,70,35,${.08+n()*.1})`,t.beginPath();const c=r+4+n()*(i-8);t.moveTo(0,c),t.bezierCurveTo(80,c+n()*6-3,160,c+n()*6-3,256,c),t.stroke()}}return Kn(e,[1,1])}function Ko(s="#e9eef0",e="#d6dfe2"){const[t,n]=kn(128,128);return n.fillStyle=s,n.fillRect(0,0,128,128),n.fillStyle=e,n.fillRect(0,0,64,64),n.fillRect(64,64,64,64),n.strokeStyle="rgba(120,130,135,0.5)",n.lineWidth=2,n.strokeRect(0,0,64,64),n.strokeRect(64,64,64,64),Kn(t,[1,1])}function My(s){const[e,t]=kn(128,128),n=Gr(11);t.fillStyle=s,t.fillRect(0,0,128,128);for(let i=0;i<1400;i++)t.fillStyle=n()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",t.fillRect(n()*128,n()*128,2,2);return Kn(e,[1,1])}function rf(s="#24345e",e="#d9a441"){const[t,n]=kn(64,64);return n.fillStyle=s,n.fillRect(0,0,64,64),n.fillStyle=e,n.globalAlpha=.75,n.fillRect(0,20,64,12),n.fillRect(20,0,12,64),n.globalAlpha=.5,n.fillStyle="#f0d58a",n.fillRect(0,50,64,3),n.fillRect(50,0,3,64),Kn(t,[3,3])}function of(s,e=1){const[t,n]=kn(256,256),i=Gr(31+Math.round(e*10));n.fillStyle=s,n.fillRect(0,0,256,256);const r=(o,a,c,l)=>{n.save(),n.translate(o,a),n.strokeStyle="rgba(30,22,20,0.85)",n.lineWidth=3,l&&(n.fillStyle="rgba(140,50,45,0.45)",n.beginPath(),n.arc(0,0,c*.7,0,Math.PI*2),n.fill());for(let h=0;h<4;h++)n.beginPath(),n.arc(0,0,c*(.25+h*.22),h,h+Math.PI*1.4),n.stroke();n.restore()};for(let o=0;o<28*e;o++)n.fillStyle=`rgba(35,25,22,${.18+i()*.25})`,n.beginPath(),n.ellipse(i()*256,i()*256,10+i()*26,6+i()*14,i()*3,0,Math.PI*2),n.fill();for(let o=0;o<5*e;o++)r(20+i()*216,20+i()*216,18+i()*14,i()>.7);n.fillStyle="rgba(30,22,20,0.6)";for(let o=0;o<12*e;o++)n.beginPath(),n.ellipse(i()*256,i()*256,10,4,i()*3,0,Math.PI*2),n.fill();return Kn(t)}function af(s="#a9bf95"){const[e,t]=kn(64,64);t.fillStyle=s,t.fillRect(0,0,64,64),t.fillStyle="#e7c98f";const n=(i,r)=>{t.beginPath(),t.moveTo(i,r+4),t.bezierCurveTo(i-6,r-2,i-3,r-7,i,r-3),t.bezierCurveTo(i+3,r-7,i+6,r-2,i,r+4),t.fill()};return n(16,16),n(48,48),n(48,16),n(16,48),Kn(e,[3,3])}function $o(s,e,t){const[n,i]=kn(128,128),r=Gr(t==="mackerel"?51:77);if(i.fillStyle=s,i.fillRect(0,0,128,128),i.strokeStyle=e,i.fillStyle=e,t==="mackerel"){i.lineWidth=3;for(let o=4;o<128;o+=11){i.beginPath(),i.moveTo(o,0);for(let a=0;a<=128;a+=16)i.lineTo(o+Math.sin(a*.2+o)*3,a);i.stroke()}}else{i.lineWidth=9;for(let o=0;o<4;o++)i.beginPath(),i.ellipse(32+r()*64,32+r()*64,18+r()*14,10+r()*10,r()*3,0,Math.PI*1.6),i.stroke();i.lineWidth=6;for(let o=0;o<128;o+=26)i.beginPath(),i.moveTo(o,0),i.quadraticCurveTo(o+12,64,o,128),i.stroke()}return Kn(n,[1,1])}function kr(s="#1b1412",e="#5a3a2a",t=9){const[n,i]=kn(128,64);i.fillStyle=e,i.fillRect(0,0,128,64);const r=128/t;for(let o=0;o<t;o++){i.fillStyle=s,i.fillRect(o*r+1.5,0,r-3,64),i.fillStyle="rgba(255,255,255,0.08)";for(let a=0;a<64;a+=6)i.fillRect(o*r+2,a,r-4,2)}return Kn(n)}function cf(){const[s,e]=kn(128,128),t=Gr(99);e.fillStyle="#17171b",e.fillRect(0,0,128,128);for(let n=0;n<260;n++)e.strokeStyle=`rgba(${90+t()*40},${90+t()*40},${110+t()*40},${.25+t()*.3})`,e.lineWidth=1.5,e.beginPath(),e.arc(t()*128,t()*128,2+t()*3,t()*6,t()*6+4),e.stroke();return Kn(s,[2,2])}function by(){const[s,e]=kn(256,128);return e.clearRect(0,0,256,128),e.fillStyle="#f6e7c8",e.beginPath(),e.roundRect(6,6,244,116,58),e.fill(),e.strokeStyle="#b8322a",e.lineWidth=8,e.stroke(),e.fillStyle="#b8322a",e.font="900 34px Nunito, system-ui, sans-serif",e.textAlign="center",e.fillText("COUNT HERE",128,58),e.font="900 30px Nunito, system-ui, sans-serif",e.fillText("1 … 10",128,98),Kn(s)}class Eo{constructor(e=512,t=128,n=.32){q(this,"sprite");q(this,"c");q(this,"g");q(this,"texture");q(this,"key","");[this.c,this.g]=kn(e,t),this.texture=new Hr(this.c),this.texture.colorSpace=Ct;const i=new Pd({map:this.texture,transparent:!0,depthWrite:!1});this.sprite=new qx(i),this.sprite.scale.set(n*e/t,n,1),this.sprite.renderOrder=10}draw(e,t){e!==this.key&&(this.key=e,this.g.clearRect(0,0,this.c.width,this.c.height),t(this.g,this.c.width,this.c.height),this.texture.needsUpdate=!0)}pill(e,t={}){const n=`${e}|${t.bg}|${t.progress?.toFixed(2)}|${t.tail}`;this.draw(n,(i,r,o)=>{const a=t.font??44;i.font=`800 ${a}px Nunito, ui-rounded, system-ui, sans-serif`;const c=Math.min(r-20,i.measureText(e).width+44),l=Math.min(o-(t.tail?22:8),a+30),h=(r-c)/2,d=t.tail?4:(o-l)/2;i.fillStyle=t.bg??"rgba(43,36,32,0.85)",i.beginPath(),i.roundRect(h,d,c,l,l/2),i.fill(),t.tail&&(i.beginPath(),i.moveTo(r/2-14,d+l-2),i.lineTo(r/2,d+l+18),i.lineTo(r/2+14,d+l-2),i.fill()),t.progress!==void 0&&(i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(h+20,d+l-12,c-40,6),i.fillStyle="#fff",i.fillRect(h+20,d+l-12,(c-40)*t.progress,6)),i.fillStyle=t.fg??"#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(e,r/2,d+l/2-(t.progress!==void 0?4:0),r-40)})}}const Ne=(s,e={})=>new Js({color:s,...e});function be(s,e,t=!0){const n=new at(s,e);return n.castShadow=t,n}function Ao(s,e,t,n,i,r=5){const o=s.distanceTo(e),a=new cn(n,t,o,r),c=be(a,i);return c.position.copy(s).add(e).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new L(0,1,0),e.clone().sub(s).normalize()),c}const gt=(s,e,t)=>s+(e-s)*t,jo={walk:0,speed:0,crouch:0,lie:0,brow:0,gesture:0,point:0,shrug:0,cheer:0};class ki{constructor(e){q(this,"root",new dt);q(this,"body",new dt);q(this,"spine",new dt);q(this,"head",new dt);q(this,"legs",[]);q(this,"knees",[]);q(this,"arms",[]);q(this,"elbows",[]);q(this,"hipY");q(this,"phase",0);q(this,"cur",{...jo});q(this,"t",0);q(this,"hairSway",[]);const t=e.build==="kid",n=t?.42:.46,i=t?.4:.45,r=t?.5:.58,o=t?.19:.23;this.hipY=n+i+.06;const a=Ne(e.skin);this.root.add(this.body),this.body.position.y=this.hipY;const c=be(new Ht(.15,.12,4,8),e.pants);c.rotation.z=Math.PI/2,c.position.y=.02,this.body.add(c);for(const b of[-1,1]){const x=new dt;x.position.set(b*.1,0,0);const A=be(new Ht(t?.085:.095,n-.1,4,8),e.pants);A.position.y=-n/2,x.add(A);const T=new dt;T.position.y=-n;const E=be(new Ht(t?.08:.09,i-.12,4,8),e.pants);if(E.position.y=-i/2,T.add(E),e.cuff){const w=be(new cn(.095,.1,.06,10),e.cuff);w.position.y=-i+.06,T.add(w)}const I=be(new Ht(.075,.14,4,8),Ne(e.shoe));if(I.rotation.x=Math.PI/2,I.position.set(0,-i-.01,.06),I.scale.set(1.15,1,.8),T.add(I),e.shoeTrim){const w=be(new zn(.075,.025,6,12),Ne(e.shoeTrim),!1);w.rotation.x=Math.PI/2,w.position.set(0,-i+.05,0),T.add(w)}x.add(T),this.body.add(x),this.legs.push(x),this.knees.push(T)}this.spine.position.y=.06,this.body.add(this.spine);const l=be(new Ht(t?.16:.19,r-.2,6,12),e.top);l.position.y=r/2,l.scale.set(1.12,1,.78),this.spine.add(l),this.head.position.y=r+.13*e.headScale,this.spine.add(this.head);const h=be(new cn(.06,.07,.12,8),a);h.position.y=-.1*e.headScale,this.head.add(h);const d=be(new tt(.13*e.headScale,16,12),a);d.scale.set(.95,1.08,1),d.position.y=.03*e.headScale,this.head.add(d);const u=e.headScale,f=Ne("#1a1210"),p=Ne("#f6f1ea");for(const b of[-1,1]){const x=be(new tt(.03*u,8,6),p,!1);x.position.set(b*.048*u,.05*u,.112*u),x.scale.set(1,1.15,.6),this.head.add(x);const A=be(new tt(.019*u,8,6),f,!1);A.position.set(b*.048*u,.05*u,.128*u),this.head.add(A);const T=be(new _i(.05*u,.012*u,.01),Ne("#1b1412"),!1);T.position.set(b*.05*u,.092*u,.124*u),this.head.add(T);const E=be(new tt(.03*u,8,6),a,!1);E.position.set(b*.123*u,.03*u,0),E.scale.set(.5,1,.8),this.head.add(E)}const _=be(new tt(.022*u,8,6),a,!1);_.position.set(0,.01*u,.133*u),this.head.add(_);const g=be(new zn(.03*u,.008*u,6,12,Math.PI),Ne("#6b2b25"),!1);if(g.rotation.z=Math.PI,g.position.set(0,-.035*u,.118*u),this.head.add(g),e.beard){const b=Ne("#16110f"),x=be(new tt(.125,14,10,0,Math.PI*2,Math.PI*.45,Math.PI*.5),b);x.position.set(0,-0,.02),x.scale.set(1,1.25,1.02),this.head.add(x);const A=be(new tt(.075,10,8),b);A.position.set(0,-.11,.07),A.scale.set(1.1,1.1,.9),this.head.add(A);const T=be(new Ht(.014,.06,3,6),b,!1);T.rotation.z=Math.PI/2,T.position.set(0,-.012,.125),this.head.add(T)}e.hair(this.head,e);const m=t?.24:.3,v=t?.22:.28;for(const b of[-1,1]){const x=new dt;x.position.set(b*o,r-.06,0);const A=e.sleeve??e.armMat??a,T=be(new Ht(t?.055:.068,m-.08,4,8),A);T.position.y=-m/2,x.add(T);const E=new dt;E.position.y=-m;const I=be(new Ht(t?.05:.058,v-.08,4,8),e.sleeve?e.sleeve:e.armMat??a);if(I.position.y=-v/2,E.add(I),e.cuff&&e.sleeve){const M=be(new cn(.062,.064,.05,10),e.cuff,!1);M.position.y=-v+.04,E.add(M)}const w=be(new tt(t?.05:.058,8,6),e.sleeve?a:e.armMat??a);w.position.y=-v-.03,w.scale.set(.85,1.1,.7),E.add(w),x.add(E),this.spine.add(x),this.arms.push(x),this.elbows.push(E)}this.root.scale.setScalar(e.scale)}static fromGltf(e,t,n=[]){const i=Object.create(ki.prototype),r=o=>{const a=e.getObjectByName(o);if(!a)throw new Error(`model joint ${o} missing`);return a};return i.root=e,i.body=r("hips"),i.spine=r("spine"),i.head=r("head"),i.legs=[r("leg0"),r("leg1")],i.knees=[r("knee0"),r("knee1")],i.arms=[r("arm0"),r("arm1")],i.elbows=[r("elbow0"),r("elbow1")],i.hipY=i.body.position.y,i.phase=0,i.cur={...jo},i.t=0,i.hairSway=n.map(r),e.scale.setScalar(t),i}update(e,t,n){this.t+=e;const i=Math.min(1,e*10),r=this.cur;for(const x of Object.keys(t))r[x]=gt(r[x],t[x],i);this.phase+=e*(r.speed>.05?2.4+r.speed*2.1:0);const o=Math.sin(this.phase),a=r.walk,c=Math.max(r.crouch,r.lie),l=.6*a*o,h=Math.max(0,-Math.cos(this.phase))*.7*a;this.legs[0].rotation.x=-l-1.25*c,this.legs[1].rotation.x=l-1.25*c,this.knees[0].rotation.x=h+2*c,this.knees[1].rotation.x=Math.max(0,Math.cos(this.phase))*.7*a+2*c,this.body.position.y=this.hipY-.42*c-.12*r.lie+(n?0:Math.abs(o)*.04*a),this.spine.rotation.x=.45*c+.55*r.lie+.08*a+.12*r.brow,this.body.rotation.x=.35*r.lie;const d=n?0:Math.sin(this.t*1.6)*.04;let u=l*.7+d,f=-l*.7-d,p=-.12,_=.12,g=-.25-.3*a,m=-.25-.3*a;u=gt(u,-.9,c),f=gt(f,-.9,c),g=gt(g,-.8,c),m=gt(m,-.8,c),f=gt(f,-2.55,r.brow),_=gt(_,-.25,r.brow),m=gt(m,-1.95,r.brow);const v=n?0:Math.sin(this.t*7)*.25;u=gt(u,-.7+v,r.gesture),f=gt(f,-.7-v,r.gesture),p=gt(p,-.45,r.gesture),_=gt(_,.45,r.gesture),g=gt(g,-1,r.gesture),m=gt(m,-1,r.gesture),f=gt(f,-1.55,r.point),_=gt(_,.05,r.point),m=gt(m,-.05,r.point),u=gt(u,-.35,r.shrug),f=gt(f,-.35,r.shrug),p=gt(p,-.85,r.shrug),_=gt(_,.85,r.shrug),g=gt(g,-1.7,r.shrug),m=gt(m,-1.7,r.shrug);const b=n?0:Math.sin(this.t*9)*.2;if(u=gt(u,-2.9,r.cheer),f=gt(f,-2.9,r.cheer),p=gt(p,-.3+b,r.cheer),_=gt(_,.3-b,r.cheer),this.arms[0].rotation.set(u,0,p),this.arms[1].rotation.set(f,0,_),this.elbows[0].rotation.x=g,this.elbows[1].rotation.x=m,this.head.rotation.z=.25*r.shrug+(n?0:Math.sin(this.t*3)*.05*r.gesture),this.head.rotation.x=-.15*r.brow-.3*c*.5,!n)for(const x of this.hairSway)x.rotation.x=Math.sin(this.phase)*.12*a+.05*Math.sin(this.t*1.3)}}function Sy(){const s="#8a5a3c",e=Ne("#ffffff",{map:of(s,1)}),t=new ki({scale:1,headScale:1,skin:s,top:Ne("#1d1d20"),sleeve:null,armMat:e,pants:Ne("#a8322b"),shoe:"#2e3550",shoeTrim:"#efe2c8",beard:!0,build:"adult",hair:l=>{const h=Ne("#ffffff",{map:kr("#1a1311","#3b281f",10)}),d=be(new tt(.137,16,10,0,Math.PI*2,0,Math.PI*.55),h);d.position.y=.03,d.rotation.y=Math.PI/2,l.add(d)}}),n=Ne("#1c1512"),i=Ne("#c58b3e"),r=new L(0,-.06,-.13),o=new dt;o.position.copy(r),t.head.add(o),t.hairSway.push(o);const a=be(new zn(.04,.014,6,12),Ne("#3b2a20"),!1);a.position.copy(r),t.head.add(a);const c=22;for(let l=0;l<c;l++){const h=l/(c-1)*Math.PI*1.5-Math.PI*.75,d=new L(Math.sin(h)*.115,.07+Math.cos(h)*.06,-.06-Math.cos(h)*.05);t.head.add(Ao(d,r,.024,.022,n,4));const u=Math.sin(h)*.11+(l%2?.01:-.01),f=.42+l%3*.06,p=-.06-l%4*.012,_=new L(u*.9,-f*.5,p-.02),g=new L(u*1.1,-f+.08,p-.05),m=new L(u*1.15,-f,p-.055);o.add(Ao(new L(0,0,0),_,.024,.023,n,5)),o.add(Ao(_,g,.023,.021,n,5)),o.add(Ao(g,m,.021,.017,l%3===1?n:i,5))}return t}function wy(){const s="#9a6747",e=Ne("#b3262b"),t=Ne("#1f8a83"),n=new ki({scale:.96,headScale:1,skin:s,top:e,sleeve:e,pants:e,cuff:t,shoe:"#efe2c8",build:"adult",hair:a=>{const c=Ne("#ffffff",{map:kr("#14100e","#4a3024",11)}),l=be(new tt(.138,16,10,0,Math.PI*2,0,Math.PI*.56),c);l.position.y=.03,l.rotation.y=Math.PI/2,a.add(l);const h=new Tl({color:"#d9dde2",shininess:90,specular:"#ffffff"});for(const u of[-1,1]){const f=be(new zn(.03,.006,6,16),h,!1);f.position.set(u*.128,-.03,0),f.rotation.y=Math.PI/2,a.add(f)}const d=be(new zn(.01,.0025,4,10),h,!1);d.position.set(.016,-0,.146),a.add(d)}}),i=be(new zn(.1,.022,6,16),t,!1);i.rotation.x=Math.PI/2,i.position.y=-.11,n.head.add(i);const r=new dt;r.position.set(0,-.04,-.13),n.head.add(r),n.hairSway.push(r);const o=be(new Ht(.045,.32,4,8),Ne("#14100e"));return o.position.set(0,-.2,-.03),r.add(o),n}function Ty(){const s="#8f5e40",e=Ne("#e2a93a"),t=Ne("#24345e");return new ki({scale:.66,headScale:1.4,skin:s,top:e,sleeve:e,cuff:t,pants:Ne("#ffffff",{map:rf()}),shoe:"#2e3550",shoeTrim:"#efe2c8",build:"kid",hair:(n,i)=>{const r=Ne("#ffffff",{map:kr("#140f0d","#5a3a2a",8)}),o=be(new tt(.134*i.headScale,16,10,0,Math.PI*2,0,Math.PI*.42),r);o.position.y=.035*i.headScale,o.rotation.y=Math.PI/2,n.add(o)}})}class oa{constructor(){q(this,"root",new dt);q(this,"body",new dt);q(this,"limbs",[]);q(this,"head",new dt);q(this,"phase",0);q(this,"t",0);const e=Ne("#9c6a4a"),t=Ne("#ffffff",{map:af()});this.root.add(this.body),this.body.position.y=.26;const n=be(new Ht(.11,.16,6,10),t);n.rotation.x=Math.PI/2,this.body.add(n);const i=be(new zn(.075,.02,6,14),Ne("#c3d4b2"),!1);i.position.set(0,.04,.15),this.body.add(i),this.head.position.set(0,.11,.22),this.body.add(this.head);const r=be(new tt(.105,16,12),e);this.head.add(r);const o=Ne("#1a1210");for(const h of[-1,1]){const d=be(new tt(.016,8,6),o,!1);d.position.set(h*.036,.015,.095),this.head.add(d);const u=be(new tt(.055,10,8),Ne("#1b1412"));u.position.set(h*.075,.08,-.02),this.head.add(u);const f=be(new Xs(.03,.05,6),Ne("#d2302f"),!1);f.rotation.z=h*Math.PI/2,f.position.set(h*.06,.115,.02),this.head.add(f);const p=f.clone();p.rotation.z=-h*Math.PI/2,p.position.x=h*.1,this.head.add(p)}const a=be(new zn(.025,.006,6,12,Math.PI),Ne("#6b2b25"),!1);a.rotation.z=Math.PI,a.position.set(0,-.025,.095),this.head.add(a);const c=be(new tt(.108,14,8,0,Math.PI*2,0,Math.PI*.35),Ne("#1b1412"),!1);this.head.add(c),[[-.085,.13],[.085,.13],[-.08,-.12],[.08,-.12]].forEach(([h,d],u)=>{const f=new dt;f.position.set(h,0,d);const p=u<2,_=be(new Ht(.04,.14,4,8),t);_.position.y=-.1,f.add(_);const g=be(new tt(.042,8,6),p?e:t);g.position.set(0,-.2,p?.02:-.05),p||g.scale.set(1,.8,1.6),f.add(g),this.body.add(f),this.limbs.push(f)})}static fromGltf(e){const t=Object.create(oa.prototype),n=i=>{const r=e.getObjectByName(i);if(!r)throw new Error(`model joint ${i} missing`);return r};return t.root=e,t.body=n("body"),t.head=n("bhead"),t.limbs=[0,1,2,3].map(i=>n(`limb${i}`)),t.phase=0,t.t=0,t}update(e,t,n,i){this.t+=e,t&&(this.phase+=e*(3+n*6));const r=Math.sin(this.phase),o=t?.5:0;this.limbs[0].rotation.x=-o*r,this.limbs[3].rotation.x=-o*r,this.limbs[1].rotation.x=o*r,this.limbs[2].rotation.x=o*r,this.body.position.y=.26+(t&&!i?Math.abs(r)*.02:0),this.body.rotation.z=t&&!i?r*.06:0,this.head.rotation.y=!t&&!i?Math.sin(this.t*.8)*.3:0,this.head.rotation.x=-.25}}class Gn{constructor(e,t=!1){q(this,"root",new dt);q(this,"body",new dt);q(this,"legs",[]);q(this,"head",new dt);q(this,"tail",[]);q(this,"phase",0);q(this,"t",0);q(this,"sitK",0);q(this,"legLen");q(this,"isDog");this.isDog=t;const n=e.lean??1,i=t?.2:.17*n;this.legLen=i,this.root.add(this.body),this.body.position.y=i+.08;const r=be(new Ht(t?.1:.085,t?.22:.26*n,6,10),e.coat);if(r.rotation.x=Math.PI/2,this.body.add(r),e.bib){const u=be(new tt(.07,10,8),Ne(e.bib),!1);u.position.set(0,-.02,.17),u.scale.set(.9,1,.6),this.body.add(u)}this.head.position.set(0,.1,t?.2:.22),this.body.add(this.head);const o=be(new tt(t?.09:.085,14,10),e.coat);if(o.scale.set(1,.92,t?1:.95),this.head.add(o),t){const u=be(new Ht(.04,.06,4,8),e.coat);u.rotation.x=Math.PI/2,u.position.set(0,-.025,.09),this.head.add(u);const f=be(new tt(.018,6,6),Ne("#050505"),!1);f.position.set(0,-.015,.145),this.head.add(f);const p=be(new tt(.018,6,6),Ne("#d4677a"),!1);p.position.set(0,-.06,.12),p.scale.set(1,.5,1.2),this.head.add(p);for(let _=0;_<6;_++){const g=be(new tt(.04,8,6),e.coat,!1);g.position.set(Math.sin(_)*.05,.07+_%2*.02,Math.cos(_)*.04-.01),this.head.add(g)}for(const _ of[-1,1]){const g=be(new tt(.05,10,8),e.coat);g.scale.set(.6,1.3,.8),g.position.set(_*.09,-.04,-.01),this.head.add(g)}for(let _=0;_<9;_++){const g=be(new tt(.055,8,6),e.coat,!1);g.position.set((_%3-1)*.06,.05+_%2*.02,-.14+Math.floor(_/3)*.12),this.body.add(g)}}else{for(const p of[-1,1]){const _=be(new Xs(.035,.07,4),e.coat,!1);_.position.set(p*.05,.08,-.005),_.rotation.z=-p*.25,this.head.add(_)}const u=be(new tt(.035,8,6),e.bib?Ne(e.bib):e.coat,!1);u.position.set(0,-.03,.07),u.scale.set(1.2,.8,.8),this.head.add(u);const f=be(new tt(.012,6,6),Ne("#c98a8a"),!1);f.position.set(0,-.01,.1),this.head.add(f)}const a=Ne(e.eye,{emissive:e.eye,emissiveIntensity:.25});for(const u of[-1,1]){const f=be(new tt(t?.016:.018,8,6),a,!1);f.position.set(u*.035,t?.025:.015,t?.075:.072),this.head.add(f);const p=be(new tt(.008,6,4),Ne("#050505"),!1);p.position.set(u*.035,t?.025:.015,t?.09:.088),this.head.add(p)}const c=Ne(e.paws),l=[[-.055,.15],[.055,.15],[-.055,-.15],[.055,-.15]];for(const[u,f]of l){const p=new dt;p.position.set(u,-.02,f*(t?.85:n));const _=be(new Ht(t?.035:.026,i,4,6),e.coat);_.position.y=-i/2-.02,p.add(_);const g=be(new tt(t?.038:.03,8,6),c,!1);g.position.set(0,-i-.05,.01),g.scale.set(1,.6,1.3),p.add(g),this.body.add(p),this.legs.push(p)}let h=this.body;const d=t?2:5;for(let u=0;u<d;u++){const f=new dt;f.position.set(0,u===0?.04:.07,u===0?-.2:0);const p=be(new Ht(t?.025:.022,.06,4,6),u===d-1&&!t?Ne(e.dark):e.coat,!1);p.position.y=.035,f.add(p),h.add(f),this.tail.push(f),h=f}if(t){const u=be(new tt(.05,8,6),e.coat,!1);u.position.y=.09,h.add(u)}}static fromGltf(e,t){const n=Object.create(Gn.prototype),i=r=>{const o=e.getObjectByName(r);if(!o)throw new Error(`model joint ${r} missing`);return o};n.root=e,n.body=i("body"),n.head=i("head"),n.legs=[0,1,2,3].map(r=>i(`leg${r}`)),n.tail=[];for(let r=0;e.getObjectByName(`tail${r}`);r++)n.tail.push(i(`tail${r}`));return n.legLen=n.body.position.y-.08,n.isDog=t,n.phase=0,n.t=0,n.sitK=0,n}update(e,t,n,i,r,o){this.t+=e,t&&(this.phase+=e*(5+n*7));const a=Math.sin(this.phase),c=t?.55:0;this.legs[0].rotation.x=c*a,this.legs[3].rotation.x=c*a,this.legs[1].rotation.x=-c*a,this.legs[2].rotation.x=-c*a;const l=!t&&(i==="sit"||i==="groom")?1:0;this.sitK=gt(this.sitK,l,Math.min(1,e*6)),this.body.rotation.x=-.55*this.sitK,this.body.position.y=this.legLen+.08-.05*this.sitK+(t&&!o?Math.abs(a)*.012:0),this.legs[2].rotation.x-=.9*this.sitK,this.legs[3].rotation.x-=.9*this.sitK,this.legs[0].rotation.x+=.5*this.sitK,this.legs[1].rotation.x+=.5*this.sitK;const h=!t&&i==="groom"&&!o;this.head.rotation.x=h?.5+Math.sin(this.t*6)*.15:.55*this.sitK*.6,this.head.rotation.y=h?.4:!t&&!o?Math.sin(this.t*.7)*.4:0,h&&(this.legs[0].rotation.x=-1.1+Math.sin(this.t*6)*.2);const d=r?22:this.isDog?6:2.5,u=r?.7:.2;this.tail.forEach((f,p)=>{f.rotation.x=p===0?this.isDog?-.4:-.9+.6*this.sitK:this.isDog?0:-.25,f.rotation.z=o?0:Math.sin(this.t*d-p*.6)*u*(p===0?1:.5)})}}function Ey(){return new Gn({coat:Ne("#5c6672"),dark:"#4b545f",paws:"#56606b",eye:"#b9c47a",lean:1.2})}function Ay(){return new Gn({coat:Ne("#ffffff",{map:$o("#9a6a3c","#3a2416","mackerel")}),dark:"#2e1c12",paws:"#2e1c12",bib:"#e3cfa8",eye:"#b8c25a"})}function Ry(){return new Gn({coat:Ne("#ffffff",{map:$o("#7a5634","#1f140d","classic")}),dark:"#1f140d",paws:"#f4f1ea",bib:"#f4f1ea",eye:"#c9c35a"})}function Cy(){const s=new Tl({color:"#2a2a31",map:cf(),emissive:"#14141c",shininess:18,specular:"#555566"});return new Gn({coat:s,dark:"#111",paws:"#202026",eye:"#2a1a10"},!0)}function Ly(){const s=be(new tt(.09,14,10),Ne("#e04b3c",{emissive:"#401010"})),e=be(new zn(.09,.015,6,16),Ne("#f6d04d"),!1);return s.add(e),s}const ae=(s,e={})=>new Js({color:s,...e}),qi={wall:"#f3e6cf",wall2:"#efe0c4",ceiling:"#f7efe1",trim:"#c48a4a",shortcut:"#2f8f8a",rail:"#8a5a33"};let Ro=null;function Py(){if(Ro)return Ro;const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(40,25,15,0.55)"),t.addColorStop(1,"rgba(40,25,15,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ro=new Hr(s),Ro}function lf(s,e,t=.8){const n=new at(new ls(s,e),new Pn({map:Py(),transparent:!0,depthWrite:!1,opacity:t}));return n.rotation.x=-Math.PI/2,n.renderOrder=1,n}function ts(s,e,t,n,i,r,o=2){const a=t-s,c=n-e,l=new ls(a,c),h=l.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*a/o,h.getY(u)*c/o);const d=new at(l,r);return d.rotation.x=-Math.PI/2,d.position.set(s+a/2,i,e+c/2),d.receiveShadow=!0,d}function ne(s,e,t,n,i,r,o){const a=new at(new _i(s,e,t),n);return a.position.set(i,r,o),a}function Nu(s,e){const t=ne(s.hx*2,s.y1-s.y0,s.hz*2,e,s.cx,(s.y0+s.y1)/2,s.cz);return t.rotation.y=s.yaw,t}function Iy(s){const e=new dt,t=ts(-30,-30,54,58,-.02,ae("#5f6e4b"),8);e.add(t);for(const R of Yd){const K=R.id==="garage"?"#8e877c":"#a8957a";e.add(ts(R.x0,R.z0,R.x1,R.z1,0,ae(K),2));const k=ae("#7c7266"),te=R.x1-R.x0,re=R.z1-R.z0;if(R.id==="garage")e.add(ne(te,.6,.15,k,R.x0+te/2,.3,R.z1)),e.add(ne(.15,.6,re,k,R.x1,.3,R.z0+re/2)),e.add(ne(.15,.6,re,k,R.x0,.3,R.z0+re/2));else for(const[me,Se]of[[R.x0+.2,R.z0+.2],[R.x1-.2,R.z0+.2],[R.x0+.2,R.z1-.2],[R.x1-.2,R.z1-.2]])R.id==="patio"&&Se>0||R.id==="porch"&&Se<24||e.add(ne(.25,2.6,.25,k,me,1.3,Se))}const n=ae("#ffffff",{map:Yo("#c8914f")}),i=ae("#ffffff",{map:Yo("#a8743c")}),r=ae("#ffffff",{map:Ko()}),o=ae("#ffffff",{map:Ko("#efe4d2","#e0d0b8")}),a=R=>ae("#ffffff",{map:My(R)}),c={dining:n,kitchen:o,study:i,family:n,hall1:n,foyer:i,primary:a("#d9c8b4"),pbath:r,wic1:a("#cdbba6"),wic2:a("#cdbba6"),utility:r,bed2:a("#c9d8e3"),landing:n,bridge:n,media:a("#8d7ba0"),game:a("#bcd3a8"),hall2:n,bed4:a("#d7e4c9"),bed3:a("#ead2b4")};for(const R of as)e.add(ts(R.x0,R.z0,R.x1,R.z1,xt[R.floor]+.003,c[R.id]??n,(R.floor===0,2)));e.add(ts(0,12,8,18,.002,i));const l=new at(new ls(24,24),ae(qi.ceiling));l.rotation.x=Math.PI/2,l.position.set(12,Us[1],12),e.add(l);for(const[R,K,k,te]of[[12,3.5,2.4,2.4],[14,15.5,2,2],[20,9,2,2]]){const re=new at(new cn(k/4,k/3,.18,16),ae("#fff1cf",{emissive:"#ffd58a",emissiveIntensity:.9}));re.position.set(R,Us[1]-.1,K),e.add(re)}const h=ae(qi.ceiling);for(const R of Pl){const K=R.x1-R.x0,k=R.z1-R.z0;e.add(ne(K,xt[1]-Kc,k,h,R.x0+K/2,(Kc+xt[1])/2,R.z0+k/2))}const d=ae(qi.wall),u=ae(qi.wall2),f=ae("#e8d7b9");for(const R of s)R.kind==="wall"?e.add(Nu(R,R.y0>=xt[1]-.01?u:d)):R.kind==="core"&&e.add(Nu(R,f));for(const R of zl){const K=ae("#d9b98c"),k=(R.x0+R.x1)/2;e.add(ne(.8,2,.04,K,k,1,R.z1+.02))}const p=ae("#b68b5e");for(const R of s){if(R.kind!=="wall"||R.hx<.3&&R.hz<.3)continue;const K=R.y0+.06,k=ne(R.hx*2+.02,.12,R.hz*2+.02,p,R.cx,K,R.cz);e.add(k)}const _=ae(qi.trim),g=ae(qi.shortcut,{emissive:"#0d3f3c",emissiveIntensity:.4});for(const R of Il)if(!(R.rail||!R.gaps))for(const[K,k]of R.gaps){const te=k-K;if(te>2.6)continue;const re=Math.abs(te-dn.width)<.01,me=R.trim==="shortcut"&&!re?g:_,Se=xt[R.floor],Be=Us[R.floor],X=2.25;for(const oe of[K,k]){const Le=R.axis==="x"?ne(.12,X,Zi+.08,me,oe,Se+X/2,R.at):ne(Zi+.08,X,.12,me,R.at,Se+X/2,oe);e.add(Le)}const ee=(K+k)/2,ge=R.axis==="x"?ne(te+.24,.12,Zi+.08,me,ee,Se+X,R.at):ne(Zi+.08,.12,te+.24,me,R.at,Se+X,ee);if(e.add(ge),!re){const oe=R.axis==="x"?ne(te,Be-Se-X,Zi,R.floor?u:d,ee,(Se+X+Be)/2,R.at):ne(Zi,Be-Se-X,te,R.floor?u:d,R.at,(Se+X+Be)/2,ee);e.add(oe)}}const m=ae("#bcd9e6",{emissive:"#6f8fa0",emissiveIntensity:.35}),v=ae("#7a2f24");e.add(ne(1.1,2.2,.08,v,12,1.1,23.86)),e.add(ne(1.1,2.2,.08,v,12,1.1,24.14)),e.add(ne(1.6,2.2,.06,m,9.3,1.1,.14));const b=[[0,3,0,"x",2],[0,20,0,"x",2],[0,14.9,0,"x",1.6],[0,21,24,"x",1.6],[0,3.5,24,"x",1.6],[0,8.5,0,"z",1.6],[0,3,24,"z",1.4],[1,4,0,"x",1.6],[1,20,0,"x",1.6],[1,14.5,24,"z",1.4],[1,21.5,23,"x",1.4],[1,6,0,"z",1.4],[0,12,0,"x",1.4]];for(const[R,K,k,te,re]of b){const me=xt[R]+1.55;for(const Se of[-.115,.115])e.add(te==="x"?ne(re,1.2,.03,m,K,me,k+Se):ne(.03,1.2,re,m,k+Se,me,K))}const x=ae(qi.rail),A=new _i(.04,1,.04),T=[],E=ae("#1f6b67");for(const R of s){if(R.kind!=="rail")continue;const K=R.hx*2,k=ne(K,.07,.09,x,0,0,0),te=(R.layers&4)!==0;te?k.position.set(R.cx,R.y1-.04,R.cz):k.position.set(R.cx,R.y1-.035,R.cz),k.rotation.y=R.yaw,e.add(k);const re=Math.max(2,Math.round(K/.16)),me=Math.cos(R.yaw),Se=Math.sin(R.yaw);for(let Be=0;Be<=re;Be++){const X=-R.hx+K*Be/re,ee=R.cx+X*me,ge=R.cz-X*Se;let oe=R.y0;te&&(oe=zy(ee,ge));const Le=R.y1-.07-oe,ke=new Oe().compose(new L(ee,oe+Le/2,ge),new mi,new L(1,Le,1));T.push(ke)}if(!te)for(const Be of[-1,1]){const X=Be*.2*(R.hz>R.hx?1:0),ee=Be*.2*(R.hx>=R.hz?1:0),ge=R.cx+X,oe=R.cz+ee;if(Dl(1,ge,oe)){const Le=ne(R.hx*2+(R.hx>=R.hz?0:.16),.012,R.hz*2+(R.hx>=R.hz?.16:0),E,R.cx+X*.6,xt[1]+.008,R.cz+ee*.6);e.add(Le)}}}const I=new Ud(A,x,T.length);T.forEach((R,K)=>I.setMatrixAt(K,R)),e.add(I);const w=ae("#b57a42"),M=ae("#f2e6d2"),P=.62,V=Math.floor(dn.length/P);for(let R=0;R<V;R++){const K=(R+.5)*P,k=Ar(K),te=is((R+1)*P),re=Math.max(0,te-.55),me=Math.atan2(-k.dirZ,k.dirX),Se=ne(P+.06,.06,dn.width+.1,w,k.x,te-.03,k.z);Se.rotation.y=me,e.add(Se);const Be=ne(P+.02,te-.06-re,dn.width,M,k.x,(re+te-.06)/2,k.z);Be.rotation.y=me,e.add(Be)}for(const R of $d)e.add(Dy(R));const F=new Map,G={idle:new Pn({color:"#f2b544",transparent:!0,opacity:.7,depthWrite:!1}),near:new Pn({color:"#ffd166",transparent:!0,opacity:.85,depthWrite:!1}),hidden:new Pn({color:"#2fbfb5",transparent:!0,opacity:.7,depthWrite:!1})},j=new Sl(.3,.46,4,1);for(const R of qt){const K=new at(j,G.idle);K.rotation.x=-Math.PI/2,K.rotation.z=Math.PI/4,K.position.set(R.approach.x,xt[R.floor]+.02,R.approach.z),K.renderOrder=2,e.add(K),F.set(R.id,K)}return{group:e,markers:F,markerMat:G}}function zy(s,e){let t=0,n=1/0;for(let i=0;i<=dn.length;i+=.1){const r=Ar(i),o=Math.hypot(r.x-s,r.z-e);o<n&&(n=o,t=i)}return is(t)}function Dy(s){const e=new dt,t=xt[s.floor],n=(s.x0+s.x1)/2,i=(s.z0+s.z1)/2,r=s.x1-s.x0,o=s.z1-s.z0,a=s.facing??0,c=Math.abs(Math.sin(a))>.5,l=c?o:r,h=c?r:o;e.position.set(n,t,i),e.rotation.y=a;const d=s.color,u=g=>{e.add(g)},f=ae("#a8743c"),p=ae("#d2a066"),_=g=>ae(g);if(s.collide!==!1&&s.type!=="tv"&&s.type!=="drape"){const g=lf(r*1.25+.3,o*1.25+.3,.55);g.position.set(n,t+.01,i),e.userData.blob=g}switch(s.type){case"sofa":case"couch":{const g=_(d??"#2f8f8a"),m=_(new Ce(d??"#2f8f8a").multiplyScalar(.8).getStyle());u(ne(l,.42,h,m,0,.21,0)),u(ne(l-.3,.16,h*.75,g,0,.5,h*.08)),u(ne(l,s.h-.2,h*.28,g,0,.2+(s.h-.2)/2,-h/2+h*.14));for(const v of[-1,1])u(ne(.18,.66,h,m,v*(l/2-.09),.33,0));for(const v of[-1,1]){const b=ne(.42,.36,.14,ae("#f2d48f"),v*(l/2-.45),.72,-h/2+h*.33);b.rotation.x=-.2,u(b)}break}case"coffeeTable":u(ne(r,.06,o,p,0,s.h-.03,0));for(const[g,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])u(ne(.06,s.h-.06,.06,f,g*(r/2-.1),(s.h-.06)/2,m*(o/2-.1)));u(ne(.3,.05,.22,ae("#e2603f"),.3,s.h+.02,0));break;case"tvConsole":u(ne(r,s.h,o,f,0,s.h/2,0));break;case"tv":{const g=ne(r,(s.h-(s.sightFrom??0))*.9,o,ae("#151518"),0,(s.sightFrom??0)+(s.h-(s.sightFrom??0))/2,0);u(g);const m=ne(r<o?.01:r*.94,(s.h-(s.sightFrom??0))*.8,r<o?o*.94:.01,ae("#24486a",{emissive:"#2a5a86",emissiveIntensity:.6}),r<o?r/2+.005:0,g.position.y,r<o?0:o/2+.005);u(m);break}case"drape":{const g=ae(s.floor===0?"#d98f3f":"#7fa3c7"),m=Math.max(4,Math.round(Math.max(r,o)/.22)),v=r>o?"x":"z",b=Math.max(r,o);for(let x=0;x<m;x++){const A=-b/2+b*(x+.5)/m,T=new at(new cn(.09,.12,s.h-.1,6),g);T.position.set(v==="x"?A:0,(s.h-.1)/2,v==="x"?0:A),u(T)}u(v==="x"?ne(b+.3,.04,.04,f,0,s.h,0):ne(.04,.04,b+.3,f,0,s.h,0));break}case"diningTable":{const g=r-.6,m=o-.6;u(ne(g,.06,m,p,0,s.h-.03,0));for(const[b,x]of[[-1,-1],[1,-1],[-1,1],[1,1]])u(ne(.08,s.h-.06,.08,f,b*(g/2-.12),(s.h-.06)/2,x*(m/2-.12)));const v=ae("#8e5b33");for(const b of[-1,1])for(const x of[-.8,0,.8]){u(ne(.42,.06,.42,v,x,.46,b*(m/2+.12))),u(ne(.42,.5,.06,v,x,.72,b*(m/2+.31)));for(const A of[-.17,.17])for(const T of[-.17,.17])u(ne(.04,.46,.04,v,x+A,.23,b*(m/2+.12)+T))}break}case"island":u(ne(r,s.h-.05,o,ae("#5f8f8c"),0,(s.h-.05)/2,0)),u(ne(r+.12,.05,o+.12,ae("#f2ede4"),0,s.h-.025,0)),u(ne(.32,.04,.32,ae("#e2603f"),-.6,s.h+.02,0));break;case"counter":u(ne(r,s.h-.05,o,ae("#e9dcc5"),0,(s.h-.05)/2,0)),u(ne(r+.04,.05,o+.04,ae("#f2ede4"),0,s.h-.025,0)),u(ne(r,.7,o*.6,ae("#e9dcc5"),0,2.1,0));break;case"fridge":u(ne(r,s.h,o,ae("#cfd6da"),0,s.h/2,0)),u(ne(.03,.5,.04,ae("#888"),r/2+.02,1.2,o/4));break;case"bed":{const g=ae("#9a6a3e");u(ne(l,.3,h,g,0,.15,0)),u(ne(l-.06,.22,h-.1,ae("#f6f1e7"),0,.41,.03)),u(ne(l-.04,.08,h*.62,ae(d??"#e8dccb"),0,.55,h*.18)),u(ne(l,.9,.1,g,0,.45,-h/2+.05));for(const m of[-1,1])u(ne(l*.35,.14,.32,ae("#ffffff"),m*l*.22,.58,-h/2+.3));break}case"bench":u(ne(l,.12,h,ae(d??"#9b6b8e"),0,s.h-.06,0)),u(ne(l-.04,s.h-.12,h-.04,ae("#6e4a33"),0,(s.h-.12)/2,0));for(let g=0;g<4;g++)u(ne(.04,.02,.04,ae("#5e3d55"),0,s.h+.005,-h/2+h*(g+.5)/4));break;case"screen":{const g=Math.max(r,o),m=3,v=g/m,b=ae("#c9a77a"),x=ae("#7a5232");for(let A=0;A<m;A++){const T=-g/2+v*(A+.5),E=ne(v,s.h-.08,.05,b,r>=o?T:0,.08+(s.h-.08)/2,r>=o?A%2?.06:-.06:T);E.rotation.y=(r>=o?0:Math.PI/2)+(A%2?.25:-.25),u(E);const I=ne(v+.02,.05,.07,x,E.position.x,s.h,E.position.z);I.rotation.y=E.rotation.y,u(I)}break}case"rack":{const g=Math.max(r,o),m=r>=o;u(m?ne(g,.03,.03,ae("#8a8a8a"),0,s.h-.05,0):ne(.03,.03,g,ae("#8a8a8a"),0,s.h-.05,0));const v=["#b8322a","#2f8f8a","#e2a93a","#3e4a7a","#d9c4a8","#7a5c8f","#efe2c8"],b=Math.floor(g/.18);for(let x=0;x<b;x++){const A=-g/2+.09+x*.18,T=.75+x*37%5*.08,E=ae(v[x*3%v.length]);u(m?ne(.06,T,.4,E,A,s.h-.08-T/2,0):ne(.4,T,.06,E,0,s.h-.08-T/2,A))}break}case"tent":{const g=new at(new Xs(Math.min(r,o)/2+.15,s.h,6,1,!0),ae("#f2c14e",{side:an}));g.position.y=s.h/2,u(g);const m=new at(new Xs(Math.min(r,o)/2+.16,s.h*.35,6,1,!0),ae("#e2603f",{side:an}));m.position.y=s.h*.83,u(m);const v=ne(.7,1,.02,ae("#3a2a20"),0,.5,Math.min(r,o)/2+.06);u(v),u(ne(.06,.25,.06,f,0,s.h+.1,0));break}case"fort":{const g=["#e2603f","#2f8f8a","#f2c14e","#7a5c8f","#5c8fc9"];let m=0;for(let v=0;v<5;v++)u(ne(.36,.42,.5,ae(g[m++%5]),r/2-.2,.21+v%2*.42,-o/2+.25+v*.5-v%2*.25));for(let v=0;v<4;v++)u(ne(.5,.42,.3,ae(g[m++%5]),-r/2+.25+v*.5,.21,-o/2+.15)),u(ne(.5,.42,.3,ae(g[m++%5]),-r/2+.25+v*.5,.21,o/2-.15));u(ne(r*.9,.05,o*.8,ae("#f6e7c8"),0,s.h-.1,0));break}case"desk":u(ne(r,.05,o,p,0,s.h-.025,0));for(const[g,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])u(ne(.05,s.h-.05,.05,f,g*(r/2-.05),(s.h-.05)/2,m*(o/2-.05)));u(ne(.35,.25,.03,ae("#222"),0,s.h+.15,0));break;case"shelf":{u(ne(r,s.h,o,f,0,s.h/2,0));const g=["#b8322a","#2f8f8a","#e2a93a","#3e4a7a","#7a5c8f"],m=r>=o,v=Math.max(r,o);for(let b=0;b<4;b++)for(let x=0;x<Math.floor(v/.12);x++){const A=-v/2+.08+x*.12,T=.22+(x*7+b)%3*.04,E=ae(g[(x+b)%g.length]),I=.15+b*.45+T/2;u(m?ne(.08,T,o+.02,E,A,I,0):ne(r+.02,T,.08,E,0,I,A))}break}case"tub":u(ne(r,s.h,o,ae("#f4f4f2"),0,s.h/2,0)),u(ne(r-.16,.03,o-.16,ae("#a7d0dd"),0,s.h-.04,0));break;case"vanity":u(ne(r,s.h,o,ae("#e9dcc5"),0,s.h/2,0)),u(ne(.04,.8,o*.8,ae("#cfe3ea",{emissive:"#7f9aa3",emissiveIntensity:.3}),-r/2+.03,1.6,0));break;case"washer":u(ne(r,s.h,o,ae("#f4f4f2"),0,s.h/2,0));{const g=new at(new cn(.22,.22,.03,16),ae("#7f9aa3"));g.rotation.z=Math.PI/2,g.position.set(-r/2-.01,s.h/2,0),u(g)}break;case"rug":{u(ts(-r/2,-o/2,r/2,o/2,.012,ae(d??"#c98f6b"),1));const g=ts(-r/2+.15,-o/2+.15,r/2-.15,o/2-.15,.014,ae(new Ce(d??"#c98f6b").offsetHSL(0,0,.08).getStyle()),1);u(g);break}case"mat":{const g=["#f1c7d0","#c7e3f1","#f6e3a1","#c9e6c3"];for(let m=0;m<2;m++)for(let v=0;v<2;v++)u(ts(-r/2+m*r/2,-o/2+v*o/2,-r/2+(m+1)*r/2,-o/2+(v+1)*o/2,.016,ae(g[m*2+v]),1));break}case"plant":{u(new at(new cn(.2,.15,.35,10),ae("#c2673f")).translateY(.175));for(let g=0;g<5;g++){const m=new at(new tt(.22,8,6),ae(g%2?"#4f8a4a":"#3f7a3c"));m.position.set(Math.sin(g*1.3)*.12,.6+g*.13,Math.cos(g*1.3)*.12),m.scale.set(1,1.3,1),u(m)}break}case"lamp":u(new at(new cn(.015,.015,s.h-.3,6),ae("#5a4636")).translateY((s.h-.3)/2)),u(new at(new cn(.14,.22,.3,12,1,!0),ae("#fff1cf",{emissive:"#ffd58a",emissiveIntensity:.8,side:an})).translateY(s.h-.15));break;case"beanbag":{const g=new at(new tt(.5,12,8),ae("#e2603f"));g.scale.set(1,.5,1),g.position.y=.25,u(g);break}case"blocks":{const g=["#e2603f","#2f8f8a","#f2c14e","#5c8fc9"];for(let m=0;m<6;m++)u(ne(.16,.1,.16,ae(g[m%4]),m%2*.04-.02,.05+m*.1,0));u(ne(.12,.12,.12,ae("#7a5c8f"),.2,.06,.15));break}case"wingChair":{const g=ae(d??"#c76b4f");u(ne(l,.45,h,g,0,.225,0)),u(ne(l,s.h-.45,.2,g,0,.45+(s.h-.45)/2,-h/2+.1));for(const m of[-1,1])u(ne(.16,.62,h,g,m*(l/2-.08),.31,0));u(ne(l-.4,.12,h-.3,ae("#e8b19a"),0,.5,.1));break}case"console":u(ne(r,.05,o,p,0,s.h-.025,0)),u(ne(r-.06,s.h-.05,o-.06,f,0,(s.h-.05)/2,0));break;case"nightstand":u(ne(r,s.h,o,f,0,s.h/2,0));break;case"marker":{const g=document.createElement("canvas");g.width=g.height=128;const m=g.getContext("2d");m.fillStyle="#f6e7c8",m.beginPath(),m.arc(64,64,60,0,Math.PI*2),m.fill(),m.strokeStyle="#b8322a",m.lineWidth=8,m.stroke(),m.fillStyle="#b8322a",m.font="900 34px Nunito, system-ui, sans-serif",m.textAlign="center",m.fillText("COUNT",64,62),m.fillText("1…10",64,96);const v=new Hr(g);v.colorSpace=Ct;const b=new at(new bl(Math.min(r,o)/2,24),new Js({map:v,transparent:!0}));b.rotation.x=-Math.PI/2,b.position.y=.018,u(b);break}}return e}function Uy(s){const e=[];s.traverse(t=>{const n=t.userData.blob;n&&e.push(n)});for(const t of e)s.add(t)}function Ny(s){s.add(new Av("#fff1dc","#8a6a4a",1.5));const e=new qc("#ffe2b8",1.3);e.position.set(-8,20,14),s.add(e);const t=new qc("#cfe0ff",.35);t.position.set(12,10,-10),s.add(t);const n=[[12,2.4,6],[12,2.4,20],[4,2.4,8.5],[20,2.4,3.5],[20,2.4,15],[20,5.2,9],[4,5.2,6],[21.5,5.2,18]];for(const[i,r,o]of n){const a=new Wd("#ffcf8a",6,9,1.6);a.position.set(i,r,o),s.add(a)}}function Wr(s){const e=(t,n,i,r)=>({x:t,y:n,z:i,yaw:r});return{kai:e(s.kai.x,s.kai.y,s.kai.z,s.kai.yaw),mom:e(s.mom.x,s.mom.y,s.mom.z,s.mom.yaw),dad:e(s.dad.x,s.dad.y,s.dad.z,s.dad.yaw),baby:e(s.baby.x,0,s.baby.z,s.baby.yaw),beerus:e(s.beerus.x,0,s.beerus.z,s.beerus.yaw),badahh:e(s.badahh.x,0,s.badahh.z,s.badahh.yaw),rocky:e(s.rocky.x,xt[1],s.rocky.z,s.rocky.yaw),nori:e(s.nori.x,0,s.nori.z,s.nori.yaw),ball:e(s.rocky.ball.x,xt[1],s.rocky.ball.z,0)}}function ky(s,e,t){return{x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t,yaw:s.yaw+Ll(s.yaw,e.yaw)*t}}const ku={idle:{text:"🙈 Counting…",bg:"rgba(43,36,32,0.85)"},patrol:{text:"👀 Searching",bg:"rgba(43,36,32,0.85)"},investigate:{text:"❓ What was that?",bg:"rgba(165,82,28,0.92)"},chase:{text:"❗ I see you!",bg:"rgba(192,57,43,0.95)"}},On=900;function Fy(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Hr(s);return n.colorSpace=Ct,n}class Oy{constructor(){q(this,"group",new dt);q(this,"kai",Ty());q(this,"mom",wy());q(this,"dad",Sy());q(this,"baby",new oa);q(this,"beerus",Ey());q(this,"badahh",Ay());q(this,"rocky",Ry());q(this,"nori",Cy());q(this,"ball",Ly());q(this,"blobs",new Map);q(this,"seekerViews");q(this,"hiddenIcon",new Eo(256,128,.16));q(this,"plates",[]);q(this,"sparkles");q(this,"sparkleT",-1);q(this,"shrug",0);q(this,"cheer",0);q(this,"captor",null);q(this,"fireReady",!1);q(this,"flames");q(this,"fPos",new Float32Array(On*3));q(this,"fCol",new Float32Array(On*3));q(this,"fVel",new Float32Array(On*3));q(this,"fLife",new Float32Array(On));q(this,"fMax",new Float32Array(On));q(this,"fStream",new Uint8Array(On));q(this,"fWait",new Float32Array(On));q(this,"fIce",new Uint8Array(On));q(this,"spawnIce",!1);q(this,"iceBlocks");q(this,"fNext",0);q(this,"pendingFire",null);q(this,"fireDelayed",[]);q(this,"firePoseT",0);const e=this.group;for(const[h,d,u,f]of[["kai",this.kai.root,.5,.45],["mom",this.mom.root,.7,.6],["dad",this.dad.root,.75,.65],["baby",this.baby.root,.45,.6],["beerus",this.beerus.root,.3,.6],["badahh",this.badahh.root,.3,.55],["rocky",this.rocky.root,.3,.55],["nori",this.nori.root,.35,.55]]){e.add(d);const p=lf(u,f,.9);e.add(p),this.blobs.set(h,p)}e.add(this.ball);const t=(h,d,u,f="rgba(43,36,32,0.75)")=>{const p=new Eo(512,96,.2);p.pill(d,{bg:f,font:46}),e.add(p.sprite),this.plates.push({id:h,sprite:p,h:u})};t("mom",ot.mom.display,2.05,"rgba(179,38,43,0.85)"),t("dad",ot.dad.display,2.12,"rgba(179,38,43,0.85)"),t("baby",ot.baby.display,.78),t("beerus",ot.beerus.display,.62),t("badahh",ot.badahh.display,.6),t("rocky",ot.rocky.display,.6),t("nori",ot.nori.display,.66);const n=()=>{const h={icon:new Eo(640,128,.36),bubble:new Eo(1024,160,.42),bubbleText:"",bubbleUntil:0,bubbleAlert:!1};return e.add(h.icon.sprite,h.bubble.sprite),h};this.seekerViews={mom:n(),dad:n()},this.hiddenIcon.pill("🙈 Kai",{bg:"rgba(47,143,138,0.92)",font:54}),this.hiddenIcon.sprite.material.depthTest=!1,e.add(this.hiddenIcon.sprite);const i=60,r=new Dt;r.setAttribute("position",new kt(new Float32Array(i*3),3)),this.sparkles=new Xc(r,new Ho({color:"#ffd166",size:.07,transparent:!0,depthWrite:!1})),this.sparkles.visible=!1,e.add(this.sparkles);const o=new Dt;this.fPos.fill(-999),o.setAttribute("position",new kt(this.fPos,3)),o.setAttribute("color",new kt(this.fCol,3)),this.flames=new Xc(o,new Ho({size:.42,map:Fy(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:nc,sizeAttenuation:!0})),this.flames.frustumCulled=!1,this.flames.renderOrder=5,e.add(this.flames);const a=new Js({color:"#bfeeff",emissive:"#2a6f8f",emissiveIntensity:.25,transparent:!0,opacity:.42,depthWrite:!1}),c=new _i(.95,2.15,.95);c.translate(0,1.07,0);const l=()=>{const h=new at(c,a);return h.visible=!1,h.renderOrder=4,e.add(h),h};this.iceBlocks={mom:l(),dad:l()}}powerBlast(e,t){this.pendingFire={power:e,hit:t},this.firePoseT=.8}spawn(e,t,n,i,r,o,a,c=!1,l=0){const h=this.fNext;this.fNext=(this.fNext+1)%On,this.fPos.set([e,t,n],h*3),this.fVel.set([i,r,o],h*3),this.fLife[h]=a,this.fMax[h]=a,this.fStream[h]=c?1:0,this.fWait[h]=l,this.fIce[h]=this.spawnIce?1:0}burst(e,t,n,i,r,o){for(let a=0;a<i;a++){const c=Math.random()*Math.PI*2,l=Math.random()*.9+.2,h=r*(.5+Math.random()*.6);this.spawn(e,t,n,Math.cos(c)*h,l*h*.8,Math.sin(c)*h,o*(.6+Math.random()*.5))}}updateFlames(e,t){for(let i=this.fireDelayed.length-1;i>=0;i--){const r=this.fireDelayed[i];t>=r.at&&(this.spawnIce=r.ice,this.burst(r.x,r.y,r.z,70,r.ice?1.8:2.6,.9),this.spawnIce=!1,this.fireDelayed.splice(i,1))}const n=Math.pow(.9,e*60);for(let i=0;i<On;i++){if(this.fLife[i]<=0)continue;const r=i*3;if(this.fWait[i]>0){this.fWait[i]-=e,this.fCol.fill(0,r,r+3);continue}if(this.fLife[i]-=e,this.fLife[i]<=0){this.fPos[r+1]=-999,this.fCol.fill(0,r,r+3);continue}this.fStream[i]||(this.fVel[r]*=n,this.fVel[r+2]*=n,this.fVel[r+1]=this.fVel[r+1]*n+(this.fIce[i]?-1.2:2.2)*e),this.fPos[r]+=this.fVel[r]*e,this.fPos[r+1]+=this.fVel[r+1]*e,this.fPos[r+2]+=this.fVel[r+2]*e;const o=this.fStream[i]?.55+.45*(this.fLife[i]/this.fMax[i]):this.fLife[i]/this.fMax[i];this.fIce[i]?(this.fCol[r]=.35+.55*o*o,this.fCol[r+1]=.7+.3*o,this.fCol[r+2]=1):(this.fCol[r]=Math.min(1,.35+o),this.fCol[r+1]=Math.max(0,o*o*.95),this.fCol[r+2]=Math.max(0,o*o*o*.45));const a=Math.min(1,o*2.2)*(this.fStream[i]?.32:.5);this.fCol[r]*=a,this.fCol[r+1]*=a*(this.fStream[i]&&!this.fIce[i]?.8:1),this.fCol[r+2]*=a*(this.fIce[i]?1:.6)}this.flames.geometry.attributes.position.needsUpdate=!0,this.flames.geometry.attributes.color.needsUpdate=!0}useModels(e){const t=(n,i)=>i?(this.group.remove(n.root),this.group.add(i.root),i):n;this.kai=t(this.kai,e.kai),this.mom=t(this.mom,e.mom),this.dad=t(this.dad,e.dad),this.baby=t(this.baby,e.baby),this.beerus=t(this.beerus,e.beerus),this.badahh=t(this.badahh,e.badahh),this.rocky=t(this.rocky,e.rocky),this.nori=t(this.nori,e.nori)}say(e,t,n,i,r=2.6){const o=this.seekerViews[e];o.bubbleText=t,o.bubbleUntil=n+r,o.bubbleAlert=i}startSparkle(){this.sparkleT=0}update(e,t,n,i,r,o,a,c,l){const h=x=>ky(n[x],i[x],r),d=(x,A,T)=>{x.position.set(A.x,A.y,A.z),x.rotation.y=A.yaw;const E=this.blobs.get(T);E&&(E.position.set(A.x,A.y+.015,A.z),E.rotation.z=-A.yaw)},u=h("kai");d(this.kai.root,u,"kai");const f=o.kai.hidden?qt.find(x=>x.id===o.kai.hidden):null,p=Math.min(1,o.kai.speed/2.2);this.kai.update(e,{...jo,walk:o.kai.hidden?0:p,speed:o.kai.hidden?0:o.kai.speed*1.25,crouch:f?f.pose==="stand"?.05:f.pose==="lie"?.9:.85:o.kai.quiet&&o.kai.moving?.35:0,point:this.firePoseT>0?1:0,lie:f?.pose==="lie"?1:0,shrug:this.shrug,cheer:this.cheer},a),this.blobs.get("kai").visible=!o.kai.hidden,this.kai.root.visible=!(f?.pose==="inside"&&o.phase!=="caught"),this.hiddenIcon.sprite.visible=!!f&&o.phase!=="caught",f&&this.hiddenIcon.sprite.position.set(u.x,u.y+(f.pose==="stand"?1.5:1.25),u.z);for(const x of["mom","dad"]){const A=o[x],T=this[x],E=h(x);d(T.root,E,x);const I=A.mode==="patrol"||A.mode==="investigate",w=o.tick<A.talkUntil,M=A.stunTicks>0&&A.stunKind!=="ice",P=A.stunTicks>0&&A.stunKind==="ice";T.update(P?0:e,{...jo,walk:A.moving&&!M&&!P?1:0,speed:A.moving?A.mode==="chase"?l.seekerChaseSpeed*1.3:l.seekerSpeed:0,brow:M?0:I&&!w?1:A.mode==="idle"?.9:0,shrug:M?1:0,gesture:w&&I?.8:0,crouch:A.mode==="check"?.5:0,point:A.mode==="chase"&&!M&&!P?1:0,cheer:o.phase==="caught"&&this.captor===x?.8:0},a);const V=this.iceBlocks[x];if(V.visible=P,P){V.position.set(E.x,E.y,E.z),V.rotation.y=E.yaw;const K=Math.min(1,(l.iceStunTicks-A.stunTicks)/12);V.scale.set(K,K,K),!a&&Math.random()<.25&&(this.spawnIce=!0,this.spawn(E.x+(Math.random()-.5)*.8,E.y+.3+Math.random()*1.8,E.z+(Math.random()-.5)*.8,0,-.15,0,.6),this.spawnIce=!1)}const F=this.seekerViews[x];let G=ku[A.mode]??ku.patrol,j;P?(G={text:"🥶 Frozen!",bg:"rgba(47,111,224,0.95)"},j=Math.round((1-A.stunTicks/l.iceStunTicks)*12)/12):M?(G={text:"🥵 Too hot!",bg:"rgba(226,96,28,0.95)"},j=Math.round((1-A.stunTicks/l.fireStunTicks)*12)/12,(!a||Math.random()<.3)&&this.spawn(E.x+(Math.random()-.5)*.3,E.y+1.85,E.z+(Math.random()-.5)*.3,(Math.random()-.5)*.3,.6,(Math.random()-.5)*.3,.5)):A.mode==="check"&&A.check&&(G={text:`🔍 Checking ${qt.find(k=>k.id===A.check.spotId).label}…`,bg:"rgba(31,107,103,0.95)"},j=Math.round(Math.min(1,A.check.timer/l.checkTicks)*12)/12);const R=t<F.bubbleUntil;F.icon.pill(G.text,{bg:G.bg,font:46,progress:j}),F.icon.sprite.position.set(E.x,E.y+2.42,E.z),F.icon.sprite.visible=o.phase!=="won"&&!R,F.bubble.sprite.visible=R,R&&(F.bubble.pill(F.bubbleText,{bg:F.bubbleAlert?"rgba(192,57,43,0.95)":"rgba(255,250,240,0.96)",fg:F.bubbleAlert?"#fff":"#2b2420",font:48,tail:!0}),F.bubble.sprite.position.set(E.x,E.y+2.5,E.z))}this.firePoseT=Math.max(0,this.firePoseT-e);const _=Math.sin(u.yaw),g=Math.cos(u.yaw);if(this.fireReady&&!o.kai.hidden)for(const x of[-1,1]){if(a&&Math.random()<.6)continue;const A=u.x+g*.2*x+_*.12,T=u.z-_*.2*x+g*.12;this.spawn(A,u.y+.42,T,(Math.random()-.5)*.2,.5+Math.random()*.4,(Math.random()-.5)*.2,.35)}if(this.pendingFire){const x=this.pendingFire.power==="ice";this.spawnIce=x;const A=u.x+_*.3,T=u.y+.55,E=u.z+g*.3;this.burst(A,T,E,a?25:50,2.2,.6);const I=this.pendingFire.hit.length?this.pendingFire.hit.map(w=>{const M=h(w);return{x:M.x,y:M.y+1.1,z:M.z}}):[{x:A+_*3,y:T,z:E+g*3}];for(const w of I){const M=w.x-A,P=w.y-T,V=w.z-E,F=a?60:140;for(let G=0;G<F;G++){const j=.42+Math.random()*.12,R=.6;this.spawn(A,T,E,M/j+(Math.random()-.5)*R,P/j+(Math.random()-.5)*R,V/j+(Math.random()-.5)*R,j,!0,G/F*.3)}this.fireDelayed.push({at:t+.42,x:w.x,y:w.y,z:w.z,ice:x})}this.pendingFire=null,this.spawnIce=!1}this.updateFlames(e,t);const m=h("baby");d(this.baby.root,m,"baby"),this.baby.update(e,o.baby.moving,o.baby.mode==="return"?Me.babyReturnSpeed:Me.babyCrawlSpeed,a);const v=(x,A,T,E=!1)=>{d(x.root,h(A),A),x.update(e,T.moving,A==="nori"?Me.noriSpeed:Me.catSpeed,T.action,E,a)};v(this.beerus,"beerus",o.beerus),v(this.badahh,"badahh",o.badahh),v(this.rocky,"rocky",{moving:o.rocky.moving,action:o.tick<o.rocky.batUntil?"groom":o.rocky.action}),v(this.nori,"nori",o.nori,o.tick<o.nori.wagUntil);const b=h("ball");this.ball.position.set(b.x,b.y+.09,b.z),o.rocky.ballRollTick>=0&&!a&&(this.ball.rotation.x+=e*12);for(const x of this.plates){const A=h(x.id);x.sprite.sprite.position.set(A.x,A.y+x.h,A.z);const T=c.position.distanceTo(x.sprite.sprite.position);x.sprite.sprite.visible=T<11}if(this.sparkleT>=0&&!a){this.sparkleT+=e,this.sparkles.visible=this.sparkleT<2.5;const x=this.sparkles.geometry.attributes.position,A=x.array;for(let T=0;T<A.length/3;T++){const E=T*2.39996+this.sparkleT*2,I=.25+T*37%10*.05+this.sparkleT*.3;A[T*3]=u.x+Math.cos(E)*I,A[T*3+1]=u.y+.4+T*13%17*.06+this.sparkleT*.4,A[T*3+2]=u.z+Math.sin(E)*I}x.needsUpdate=!0,this.sparkles.material.opacity=Math.max(0,1-this.sparkleT/2.5)}else this.sparkles.visible=!1}resetPresentation(){this.fLife.fill(0),this.fWait.fill(0);for(const e of Object.values(this.iceBlocks))e.visible=!1;this.fPos.fill(-999),this.fCol.fill(0),this.pendingFire=null,this.fireDelayed=[],this.firePoseT=0,this.fireReady=!1,this.shrug=0,this.cheer=0,this.captor=null,this.sparkleT=-1;for(const e of Object.values(this.seekerViews))e.bubbleUntil=0}}const By=""+new URL("dad-cold-DgR1xtKB.wav",import.meta.url).href,Hy=""+new URL("dad-found-CZCBHn9U.wav",import.meta.url).href,Vy=""+new URL("dad-h-S01-QWQ01-Yw.wav",import.meta.url).href,Gy=""+new URL("dad-h-S02-iLqGZoES.wav",import.meta.url).href,Wy=""+new URL("dad-h-S03-Bb8R-9IV.wav",import.meta.url).href,Xy=""+new URL("dad-h-S04-ChLDH9vO.wav",import.meta.url).href,qy=""+new URL("dad-h-S05-CBlrxKR2.wav",import.meta.url).href,Yy=""+new URL("dad-h-S06-DFsh2sR4.wav",import.meta.url).href,Ky=""+new URL("dad-h-S07-Cz7pkL-B.wav",import.meta.url).href,$y=""+new URL("dad-h-S08-BMRADuZj.wav",import.meta.url).href,jy=""+new URL("dad-h-S09-QaK65Mpm.wav",import.meta.url).href,Zy=""+new URL("dad-h-S10-BlLgBYnz.wav",import.meta.url).href,Jy=""+new URL("dad-h-S11-BzIztESh.wav",import.meta.url).href,Qy=""+new URL("dad-h-S12-C4RJP8il.wav",import.meta.url).href,e1=""+new URL("dad-h-S13-BVWvlNuK.wav",import.meta.url).href,t1=""+new URL("dad-h-S14-C8latick.wav",import.meta.url).href,n1=""+new URL("dad-h-S15-C0m_c0n3.wav",import.meta.url).href,i1=""+new URL("dad-h-S16-XFESXOan.wav",import.meta.url).href,s1=""+new URL("dad-h-S17-C5HJoaTN.wav",import.meta.url).href,r1=""+new URL("dad-h-S18-CA-AjMcJ.wav",import.meta.url).href,o1=""+new URL("dad-h-S19-sMwLJ-Tv.wav",import.meta.url).href,a1=""+new URL("dad-h-S20-C6NI88Vv.wav",import.meta.url).href,c1=""+new URL("dad-hot-DsG9r3yj.wav",import.meta.url).href,l1=""+new URL("dad-see-mh9tfhZ_.wav",import.meta.url).href,h1=""+new URL("dad-t1-dsd_trz3.wav",import.meta.url).href,u1=""+new URL("dad-t2-Bq0UZYnm.wav",import.meta.url).href,d1=""+new URL("dad-t3-CVUDFG7H.wav",import.meta.url).href,f1=""+new URL("dad-t4-CPzXwtKN.wav",import.meta.url).href,p1=""+new URL("dad-t5-CZHj_VBq.wav",import.meta.url).href,m1=""+new URL("dad-t6-CBuY_2zU.wav",import.meta.url).href,g1=""+new URL("mom-cold-D5yyBuA6.wav",import.meta.url).href,_1=""+new URL("mom-count-NlpOZ2Lh.wav",import.meta.url).href,x1=""+new URL("mom-found-D29IInF1.wav",import.meta.url).href,v1=""+new URL("mom-h-S01-DmdfHIfh.wav",import.meta.url).href,y1=""+new URL("mom-h-S02-ChRjAC98.wav",import.meta.url).href,M1=""+new URL("mom-h-S03-DlM4QVXn.wav",import.meta.url).href,b1=""+new URL("mom-h-S04-B9uehMcE.wav",import.meta.url).href,S1=""+new URL("mom-h-S05-CSLrZsxQ.wav",import.meta.url).href,w1=""+new URL("mom-h-S06-D6FfTDwQ.wav",import.meta.url).href,T1=""+new URL("mom-h-S07-BlA3qt_t.wav",import.meta.url).href,E1=""+new URL("mom-h-S08-CzBe7aTk.wav",import.meta.url).href,A1=""+new URL("mom-h-S09--8IM3VCO.wav",import.meta.url).href,R1=""+new URL("mom-h-S10-CdZdpBQm.wav",import.meta.url).href,C1=""+new URL("mom-h-S11-RtwTAU8e.wav",import.meta.url).href,L1=""+new URL("mom-h-S12-BkcIs3O-.wav",import.meta.url).href,P1=""+new URL("mom-h-S13-DLCAqXmw.wav",import.meta.url).href,I1=""+new URL("mom-h-S14-PVPl8O-4.wav",import.meta.url).href,z1=""+new URL("mom-h-S15-D0h_E3v-.wav",import.meta.url).href,D1=""+new URL("mom-h-S16-hQpxYO1K.wav",import.meta.url).href,U1=""+new URL("mom-h-S17-BXnuiHP4.wav",import.meta.url).href,N1=""+new URL("mom-h-S18-BUPicIMq.wav",import.meta.url).href,k1=""+new URL("mom-h-S19-DuzFA8yK.wav",import.meta.url).href,F1=""+new URL("mom-h-S20-BQEB6ZBt.wav",import.meta.url).href,O1=""+new URL("mom-hot-BxYrFOx1.wav",import.meta.url).href,B1=""+new URL("mom-ready-D1oMRQ5T.wav",import.meta.url).href,H1=""+new URL("mom-see-UoQjXj-c.wav",import.meta.url).href,V1=""+new URL("mom-t1-DR4TDwUe.wav",import.meta.url).href,G1=""+new URL("mom-t2-DrcudUQL.wav",import.meta.url).href,W1=""+new URL("mom-t3-BrwauRGh.wav",import.meta.url).href,X1=""+new URL("mom-t4-l0Hv6Z6R.wav",import.meta.url).href,q1=""+new URL("mom-t5-D8Casc7u.wav",import.meta.url).href,Y1=""+new URL("mom-t6-DdvA934j.wav",import.meta.url).href,K1=""+new URL("quiz-add-1-1-DwuKYLyV.wav",import.meta.url).href,$1=""+new URL("quiz-add-1-2-CULp05or.wav",import.meta.url).href,j1=""+new URL("quiz-add-1-3-B7T5Tw1D.wav",import.meta.url).href,Z1=""+new URL("quiz-add-2-1-DQ7m2snF.wav",import.meta.url).href,J1=""+new URL("quiz-add-2-2-Bt-TBbvV.wav",import.meta.url).href,Q1=""+new URL("quiz-add-3-1-D-Z1OOm4.wav",import.meta.url).href,eM=""+new URL("quiz-again-BSsQPeTx.wav",import.meta.url).href,tM=""+new URL("quiz-color-blue-HgOY2vZT.wav",import.meta.url).href,nM=""+new URL("quiz-color-green-BYCzkPQH.wav",import.meta.url).href,iM=""+new URL("quiz-color-orange-DVMhJJVT.wav",import.meta.url).href,sM=""+new URL("quiz-color-purple-B2DB7wkJ.wav",import.meta.url).href,rM=""+new URL("quiz-color-red-14jtXroz.wav",import.meta.url).href,oM=""+new URL("quiz-color-yellow-CD6yqQ9Y.wav",import.meta.url).href,aM=""+new URL("quiz-count-DtUpNH6k.wav",import.meta.url).href,cM=""+new URL("quiz-fire-BRcgRNxx.wav",import.meta.url).href,lM=""+new URL("quiz-great-Dh1VYbI5.wav",import.meta.url).href,hM=""+new URL("quiz-letter-a-g53Kks-Y.wav",import.meta.url).href,uM=""+new URL("quiz-letter-b-B3vKOTDK.wav",import.meta.url).href,dM=""+new URL("quiz-letter-c-COO2HIrF.wav",import.meta.url).href,fM=""+new URL("quiz-letter-d-C2ChfYOW.wav",import.meta.url).href,pM=""+new URL("quiz-letter-e-C6pAm5my.wav",import.meta.url).href,mM=""+new URL("quiz-letter-f-uxWGWK6H.wav",import.meta.url).href,gM=""+new URL("quiz-letter-g-8qpILnS3.wav",import.meta.url).href,_M=""+new URL("quiz-letter-h-C6Niww1O.wav",import.meta.url).href,xM=""+new URL("quiz-letter-i-BARMrXmQ.wav",import.meta.url).href,vM=""+new URL("quiz-letter-j-fdi9mR6j.wav",import.meta.url).href,yM=""+new URL("quiz-letter-k-0YU2F6By.wav",import.meta.url).href,MM=""+new URL("quiz-letter-l-MnRS44si.wav",import.meta.url).href,bM=""+new URL("quiz-letter-m-t7gGPHKx.wav",import.meta.url).href,SM=""+new URL("quiz-letter-n-DYx5Tw_t.wav",import.meta.url).href,wM=""+new URL("quiz-letter-o-C0F1Sx4w.wav",import.meta.url).href,TM=""+new URL("quiz-letter-p-Ckc_w1H4.wav",import.meta.url).href,EM=""+new URL("quiz-letter-q-Cp3FxnbW.wav",import.meta.url).href,AM=""+new URL("quiz-letter-r-CXnD_Kmj.wav",import.meta.url).href,RM=""+new URL("quiz-letter-s-LhotG7cw.wav",import.meta.url).href,CM=""+new URL("quiz-letter-t-uwQAnYvJ.wav",import.meta.url).href,LM=""+new URL("quiz-letter-u-zP-4AfYV.wav",import.meta.url).href,PM=""+new URL("quiz-letter-v-C5A_VHfQ.wav",import.meta.url).href,IM=""+new URL("quiz-letter-w-C8RlnRBR.wav",import.meta.url).href,zM=""+new URL("quiz-letter-x-Y7SGJYOZ.wav",import.meta.url).href,DM=""+new URL("quiz-letter-y-B72DCxg8.wav",import.meta.url).href,UM=""+new URL("quiz-letter-z-DloPqu3A.wav",import.meta.url).href,NM=""+new URL("quiz-no-CeYYgXpy.wav",import.meta.url).href,kM=""+new URL("quiz-nofire-ByzKgqNe.wav",import.meta.url).href,FM=""+new URL("quiz-pick-CyiVf4RT.wav",import.meta.url).href,OM=""+new URL("quiz-shape-circle-BWw7sD4S.wav",import.meta.url).href,BM=""+new URL("quiz-shape-heart-JXaosJwb.wav",import.meta.url).href,HM=""+new URL("quiz-shape-square-DgMHQ_98.wav",import.meta.url).href,VM=""+new URL("quiz-shape-star-CiudYjYb.wav",import.meta.url).href,GM=""+new URL("quiz-shape-triangle-CbcvU6t3.wav",import.meta.url).href,WM=""+new URL("quiz-yes-BG9t_EaA.wav",import.meta.url).href,XM=Object.assign({"../assets/voice/dad-cold.wav":By,"../assets/voice/dad-found.wav":Hy,"../assets/voice/dad-h-S01.wav":Vy,"../assets/voice/dad-h-S02.wav":Gy,"../assets/voice/dad-h-S03.wav":Wy,"../assets/voice/dad-h-S04.wav":Xy,"../assets/voice/dad-h-S05.wav":qy,"../assets/voice/dad-h-S06.wav":Yy,"../assets/voice/dad-h-S07.wav":Ky,"../assets/voice/dad-h-S08.wav":$y,"../assets/voice/dad-h-S09.wav":jy,"../assets/voice/dad-h-S10.wav":Zy,"../assets/voice/dad-h-S11.wav":Jy,"../assets/voice/dad-h-S12.wav":Qy,"../assets/voice/dad-h-S13.wav":e1,"../assets/voice/dad-h-S14.wav":t1,"../assets/voice/dad-h-S15.wav":n1,"../assets/voice/dad-h-S16.wav":i1,"../assets/voice/dad-h-S17.wav":s1,"../assets/voice/dad-h-S18.wav":r1,"../assets/voice/dad-h-S19.wav":o1,"../assets/voice/dad-h-S20.wav":a1,"../assets/voice/dad-hot.wav":c1,"../assets/voice/dad-see.wav":l1,"../assets/voice/dad-t1.wav":h1,"../assets/voice/dad-t2.wav":u1,"../assets/voice/dad-t3.wav":d1,"../assets/voice/dad-t4.wav":f1,"../assets/voice/dad-t5.wav":p1,"../assets/voice/dad-t6.wav":m1,"../assets/voice/mom-cold.wav":g1,"../assets/voice/mom-count.wav":_1,"../assets/voice/mom-found.wav":x1,"../assets/voice/mom-h-S01.wav":v1,"../assets/voice/mom-h-S02.wav":y1,"../assets/voice/mom-h-S03.wav":M1,"../assets/voice/mom-h-S04.wav":b1,"../assets/voice/mom-h-S05.wav":S1,"../assets/voice/mom-h-S06.wav":w1,"../assets/voice/mom-h-S07.wav":T1,"../assets/voice/mom-h-S08.wav":E1,"../assets/voice/mom-h-S09.wav":A1,"../assets/voice/mom-h-S10.wav":R1,"../assets/voice/mom-h-S11.wav":C1,"../assets/voice/mom-h-S12.wav":L1,"../assets/voice/mom-h-S13.wav":P1,"../assets/voice/mom-h-S14.wav":I1,"../assets/voice/mom-h-S15.wav":z1,"../assets/voice/mom-h-S16.wav":D1,"../assets/voice/mom-h-S17.wav":U1,"../assets/voice/mom-h-S18.wav":N1,"../assets/voice/mom-h-S19.wav":k1,"../assets/voice/mom-h-S20.wav":F1,"../assets/voice/mom-hot.wav":O1,"../assets/voice/mom-ready.wav":B1,"../assets/voice/mom-see.wav":H1,"../assets/voice/mom-t1.wav":V1,"../assets/voice/mom-t2.wav":G1,"../assets/voice/mom-t3.wav":W1,"../assets/voice/mom-t4.wav":X1,"../assets/voice/mom-t5.wav":q1,"../assets/voice/mom-t6.wav":Y1,"../assets/voice/quiz-add-1-1.wav":K1,"../assets/voice/quiz-add-1-2.wav":$1,"../assets/voice/quiz-add-1-3.wav":j1,"../assets/voice/quiz-add-2-1.wav":Z1,"../assets/voice/quiz-add-2-2.wav":J1,"../assets/voice/quiz-add-3-1.wav":Q1,"../assets/voice/quiz-again.wav":eM,"../assets/voice/quiz-color-blue.wav":tM,"../assets/voice/quiz-color-green.wav":nM,"../assets/voice/quiz-color-orange.wav":iM,"../assets/voice/quiz-color-purple.wav":sM,"../assets/voice/quiz-color-red.wav":rM,"../assets/voice/quiz-color-yellow.wav":oM,"../assets/voice/quiz-count.wav":aM,"../assets/voice/quiz-fire.wav":cM,"../assets/voice/quiz-great.wav":lM,"../assets/voice/quiz-letter-a.wav":hM,"../assets/voice/quiz-letter-b.wav":uM,"../assets/voice/quiz-letter-c.wav":dM,"../assets/voice/quiz-letter-d.wav":fM,"../assets/voice/quiz-letter-e.wav":pM,"../assets/voice/quiz-letter-f.wav":mM,"../assets/voice/quiz-letter-g.wav":gM,"../assets/voice/quiz-letter-h.wav":_M,"../assets/voice/quiz-letter-i.wav":xM,"../assets/voice/quiz-letter-j.wav":vM,"../assets/voice/quiz-letter-k.wav":yM,"../assets/voice/quiz-letter-l.wav":MM,"../assets/voice/quiz-letter-m.wav":bM,"../assets/voice/quiz-letter-n.wav":SM,"../assets/voice/quiz-letter-o.wav":wM,"../assets/voice/quiz-letter-p.wav":TM,"../assets/voice/quiz-letter-q.wav":EM,"../assets/voice/quiz-letter-r.wav":AM,"../assets/voice/quiz-letter-s.wav":RM,"../assets/voice/quiz-letter-t.wav":CM,"../assets/voice/quiz-letter-u.wav":LM,"../assets/voice/quiz-letter-v.wav":PM,"../assets/voice/quiz-letter-w.wav":IM,"../assets/voice/quiz-letter-x.wav":zM,"../assets/voice/quiz-letter-y.wav":DM,"../assets/voice/quiz-letter-z.wav":UM,"../assets/voice/quiz-no.wav":NM,"../assets/voice/quiz-nofire.wav":kM,"../assets/voice/quiz-pick.wav":FM,"../assets/voice/quiz-shape-circle.wav":OM,"../assets/voice/quiz-shape-heart.wav":BM,"../assets/voice/quiz-shape-square.wav":HM,"../assets/voice/quiz-shape-star.wav":VM,"../assets/voice/quiz-shape-triangle.wav":GM,"../assets/voice/quiz-yes.wav":WM});class qM{constructor(){q(this,"ctx",null);q(this,"master",null);q(this,"buffers",new Map);q(this,"voiceSrc",null);q(this,"questionGain",null);q(this,"questionSrc",null);q(this,"readAloud",!0);q(this,"muted",!1);q(this,"chatter",!0);q(this,"available",!1)}async unlock(){try{if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(this.ctx.destination),this.questionGain=this.ctx.createGain(),this.questionGain.gain.value=1,this.questionGain.connect(this.ctx.destination),this.loadClips()}try{const e=navigator.audioSession;e&&e.type!=="playback"&&(e.type="playback")}catch{}this.ctx.state!=="running"&&await this.ctx.resume(),this.available=this.ctx.state==="running"}catch{this.available=!1}}async loadClips(){const e=this.ctx;e&&await Promise.all(Object.entries(XM).map(async([t,n])=>{try{const i=t.split("/").pop().replace(".wav",""),r=await fetch(n),o=await e.decodeAudioData(await r.arrayBuffer());this.buffers.set(i,o)}catch{}}))}question(e,t){if(!this.readAloud)return;this.stopQuestion();const n=this.ctx,i=this.buffers.get(e);if(n&&n.state!=="running"&&n.resume().catch(()=>{}),n&&n.state==="running"&&this.questionGain&&i){const r=n.createBufferSource();r.buffer=i,r.connect(this.questionGain),r.start(),this.questionSrc=r;return}this.sayWithBrowser(t)}sayWithBrowser(e){try{const t=window.speechSynthesis;if(!t||!e)return;t.cancel();const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.rate=.85,n.pitch=1.1,t.speak(n)}catch{}}stopQuestion(){try{this.questionSrc?.stop()}catch{}this.questionSrc=null;try{window.speechSynthesis?.cancel()}catch{}}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.02)}suspend(){this.ctx?.suspend().catch(()=>{}),this.stopVoice()}resume(){this.ctx?.resume().catch(()=>{})}stopVoice(){try{this.voiceSrc?.stop()}catch{}this.voiceSrc=null}voice(e,t,n){if(!this.ctx||!this.master||this.muted||n==="chatter"&&!this.chatter)return;const i=this.buffers.get(e);if(!i||t<.04)return;const r=this.ctx.createBufferSource();r.buffer=i;const o=this.ctx.createGain();o.gain.value=Math.max(0,Math.min(1,t)),r.connect(o).connect(this.master),r.start(),n==="chatter"&&(this.stopVoice(),this.voiceSrc=r)}play(e,t=1){const n=this.ctx,i=this.master;if(!n||!i||this.muted||n.state!=="running"||t<=.01)return;const r=n.currentTime,o=l=>{const h=n.createGain();return h.gain.value=l*t,h.connect(i),h},a=(l,h,d,u,f,p)=>{const _=n.createOscillator();_.type=l,_.frequency.setValueAtTime(h,r+u),_.frequency.exponentialRampToValueAtTime(Math.max(20,d),r+u+f);const g=o(0);g.gain.setValueAtTime(1e-4,r+u),g.gain.exponentialRampToValueAtTime(p*t,r+u+.01),g.gain.exponentialRampToValueAtTime(1e-4,r+u+f),_.connect(g),_.start(r+u),_.stop(r+u+f+.02)},c=(l,h,d,u,f=1)=>{const p=Math.ceil(n.sampleRate*h),_=n.createBuffer(1,p,n.sampleRate),g=_.getChannelData(0);let m=1234;for(let A=0;A<p;A++)m=m*16807%2147483647,g[A]=m/2147483647*2-1;const v=n.createBufferSource();v.buffer=_;const b=n.createBiquadFilter();b.type="bandpass",b.frequency.value=u,b.Q.value=f;const x=o(0);x.gain.setValueAtTime(1e-4,r+l),x.gain.exponentialRampToValueAtTime(d*t,r+l+.008),x.gain.exponentialRampToValueAtTime(1e-4,r+l+h),v.connect(b).connect(x),v.start(r+l)};switch(e){case"step":c(0,.09,.35,380,.8),a("sine",120,70,0,.08,.18);break;case"stepQuiet":c(0,.06,.1,500,.8);break;case"hide":c(0,.25,.25,900,.6),a("sine",520,300,.02,.18,.08);break;case"emerge":c(0,.2,.2,1200,.6),a("sine",300,520,.02,.15,.08);break;case"giggle":for(let l=0;l<4;l++)a("sine",900+l*60,1300+l*40,l*.09,.08,.16);break;case"yip":a("square",900,1500,0,.07,.12),a("square",1e3,1600,.12,.07,.1);break;case"toy":for(let l=0;l<7;l++)c(l*.08,.06,.25-l*.025,2200-l*120,4);a("triangle",660,640,0,.12,.08);break;case"check":c(0,.5,.18,1400,.7),a("sine",440,460,.05,.25,.05);break;case"spotted":a("sawtooth",440,880,0,.18,.1),a("sawtooth",660,1320,.12,.2,.08);break;case"heard":a("sine",760,760,0,.12,.08),a("sine",1020,1020,.1,.16,.06);break;case"tick":a("square",1800,1800,0,.03,.05);break;case"fire":c(0,.7,.55,500,.5),c(.04,.55,.4,1600,.6);for(let l=0;l<6;l++)c(.1+l*.07,.05,.25,3e3+l*200,3);a("sawtooth",110,45,0,.6,.14),a("triangle",260,900,0,.3,.08);break;case"freeze":c(0,.5,.35,3200,.8),[1568,2093,2637,3136].forEach((l,h)=>a("sine",l,l*1.01,.05+h*.07,.5,.07)),a("triangle",900,300,0,.35,.06);break;case"win":[523,659,784,1047].forEach((l,h)=>a("triangle",l,l,h*.12,.3,.16));break;case"lose":[392,370,349,262].forEach((l,h)=>a("triangle",l,l*.97,h*.2,.32,.15));break;case"callout":a("triangle",700,1100,0,.12,.1);break;case"ui":a("sine",660,880,0,.06,.06);break}}}const YM=""+new URL("baby-te54toFm.glb",import.meta.url).href,KM=""+new URL("badahh-Bc6ovgJm.glb",import.meta.url).href,$M=""+new URL("beerus-B-9Ce54x.glb",import.meta.url).href,jM=""+new URL("dad-BHDHdcyu.glb",import.meta.url).href,hf=""+new URL("house-CPmJLDti.glb",import.meta.url).href,ZM=""+new URL("kai-B3Jo8gPn.glb",import.meta.url).href,JM=""+new URL("mom-B04acgtP.glb",import.meta.url).href,QM=""+new URL("nori-D0r80Ea9.glb",import.meta.url).href,eb=""+new URL("rocky-DKkb6hjx.glb",import.meta.url).href;class uf extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new vb(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Er.extractUrlBase(e);o=Er.resolveURL(l,this.path)}else o=Er.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===df){try{o[je.KHR_BINARY_GLTF]=new yb(e)}catch(d){i&&i(d);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new zb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:o[d]=new ib;break;case je.KHR_DRACO_MESH_COMPRESSION:o[d]=new Mb(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[d]=new bb;break;case je.KHR_MESH_QUANTIZATION:o[d]=new Sb;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function tb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nb{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Zt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wd(h),l.distance=d;break;case"spot":l=new Cv(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ib{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class sb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ab{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class hb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class pb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class gb{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _b{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xb{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class vb{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const p of d){const _=new Oe,g=new L,m=new mi,v=new L(1,1,1),b=new Ud(p.geometry,p.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),b.setMatrixAt(x,_.compose(g,m,v));for(const x in c)if(x==="_COLOR_0"){const A=c[x];b.instanceColor=new Gc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);Tt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const df="glTF",gr=12,Fu={JSON:1313821514,BIN:5130562};class yb{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Fu.JSON){const l=new Uint8Array(e,gr+o,a);this.content=n.decode(l)}else if(c===Fu.BIN){const l=gr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const d=Qc[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Qc[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ks[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}d(f)},a,l,Zt,u)})})}}class bb{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Sb{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class ff extends Vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,p=e*l,_=p-l,g=-2*f+3*u,m=f-u,v=1-g,b=m-u+d;for(let x=0;x!==a;x++){const A=o[_+x+a],T=o[_+x+c]*h,E=o[p+x+a],I=o[p+x]*h;r[x]=v*A+b*T+g*E+m*I}return r}}const wb=new mi;class Tb extends ff{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return wb.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ou={9728:jt,9729:un,9984:nd,9985:Co,9986:xr,9987:ai},Bu={33071:Ii,33648:ko,10497:fi},ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Eb={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},Za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ab(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function Yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Rb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Cb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lb(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ja(t.attributes):e=s.indices+":"+Ja(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ja(s.targets[n]);return e}function Ja(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function el(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ib=new Oe;class zb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ev(this.options.manager):this.textureLoader=new Iv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Yi(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ja[i.type],a=ks[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new kt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ja[i.type],l=ks[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(f&&f!==d){const m=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let b=t.cache.get(v);b||(_=new l(a,m*f,i.count*f/h),b=new Ld(_,f/h),t.cache.add(v,b)),g=new Dr(b,c,u%f/h,p)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),g=new kt(_,c,p);if(i.sparse!==void 0){const m=ja.SCALAR,v=ks[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new v(o[1],b,i.sparse.count*m),T=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,I=A.length;E<I;E++){const w=A[E];if(g.setX(w,T[E*c]),c>=2&&g.setY(w,T[E*c+1]),c>=3&&g.setZ(w,T[E*c+2]),c>=4&&g.setW(w,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ou[u.magFilter]||un,h.minFilter=Ou[u.minFilter]||ai,h.wrapS=Bu[u.wrapS]||fi,h.wrapT=Bu[u.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==un,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(_){const g=new Nt(_);g.needsUpdate=!0,u(g)}),t.load(Er.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ri(d,o),d.userData.mimeType=o.mimeType||Pb(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ho,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Nd,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const d=i[je.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Zt),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Ct)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const h=r.alphaMode||Za.OPAQUE;if(h===Za.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Za.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pn){const d=r.emissiveFactor;a.emissive=new Ce().setRGB(d[0],d[1],d[2],Zt)}return r.emissiveTexture!==void 0&&o!==Pn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),ri(d,r),t.associations.set(d,{materials:e}),r.extensions&&Yi(i,d,r),d})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Hu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Lb(l),d=i[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Hu(new Dt,l,t),i[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Ab(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=o[f];let m;const v=l[f];if(g.mode===_n.TRIANGLES||g.mode===_n.TRIANGLE_STRIP||g.mode===_n.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Kx(_,v):new at(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===_n.TRIANGLE_STRIP?m.geometry=wu(m.geometry,dd):g.mode===_n.TRIANGLE_FAN&&(m.geometry=wu(m.geometry,Bc));else if(g.mode===_n.LINES)m=new Zx(_,v);else if(g.mode===_n.LINE_STRIP)m=new xl(_,v);else if(g.mode===_n.LINE_LOOP)m=new Jx(_,v);else if(g.mode===_n.POINTS)m=new Xc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Cb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ri(m,r),g.extensions&&Yi(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Yi(i,d[0],r),d[0];const u=new dt;r.extensions&&Yi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Pp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l];if(d){a.push(d);const u=new Oe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _l(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],p=i.samplers[f.sampler],_=f.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],p=d[2],_=d[3],g=d[4],m=[];for(let v=0,b=u.length;v<b;v++){const x=u[v],A=f[v],T=p[v],E=_[v],I=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=n._createAnimationTracks(x,A,T,E,I);if(w)for(let M=0;M<w.length;M++)m.push(w[M])}return new vv(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ib)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zd:l.length>1?h=new dt:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),ri(h,r),r.extensions&&Yi(n,h,r),r.matrix!==void 0){const d=new Oe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&Yi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof fn||u instanceof Nt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ai[r.path]===Ai.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Ai[r.path]){case Ai.weights:l=qs;break;case Ai.rotation:l=Ys;break;case Ai.position:case Ai.scale:l=Ks;break;default:switch(n.itemSize){case 1:l=qs;break;case 2:case 3:default:l=Ks;break}break}const h=i.interpolation!==void 0?Eb[i.interpolation]:Ir,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const p=new l(c[u]+"."+Ai[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ys?Tb:ff;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Db(s,e,t){const n=e.attributes,i=new gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=el(ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){const _=el(ks[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Hu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Qc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ri(s,e),Db(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Rb(s,e.targets,t):s})}const Ub=Object.assign({"../assets/models/baby.glb":YM,"../assets/models/badahh.glb":KM,"../assets/models/beerus.glb":$M,"../assets/models/dad.glb":jM,"../assets/models/house.glb":hf,"../assets/models/kai.glb":ZM,"../assets/models/mom.glb":JM,"../assets/models/nori.glb":QM,"../assets/models/rocky.glb":eb}),Qa=new Map,ec=new Map;function Nb(s){if(Qa.has(s))return Qa.get(s);let e=null;return s.startsWith("TEX_tattoo")?e=of("#b9825a",.55):s.startsWith("TEX_plaid")?e=rf():s.startsWith("TEX_hearts")?e=af():s.startsWith("TEX_mackerel")?(e=$o("#9a6a3c","#3a2416","mackerel"),e.repeat.set(2,1)):s.startsWith("TEX_classic")?e=$o("#7a5634","#1f140d","classic"):s.startsWith("TEX_curly")?e=cf():s.startsWith("TEX_braids_dad")?e=kr("#1a1311","#3b281f",26):s.startsWith("TEX_braids_mom")&&(e=kr("#14100e","#4a3024",30)),e&&(e.wrapS=e.wrapT=fi,Qa.set(s,e)),e}function kb(s){s.traverse(e=>{const t=e;if(!t.isMesh)return;t.castShadow=!1;const n=t.material;if(!n.isMeshStandardMaterial)return;const i=Nb(n.name),r=n.name;if(!ec.has(r)){const o=i?new Ce("#ffffff"):n.color.clone(),a=n.emissive.clone().multiplyScalar(n.emissiveIntensity??1);ec.set(r,n.metalness>.5?new Tl({name:r,color:o,shininess:90,specular:"#ffffff"}):new Js({name:r,color:o,map:i??n.map??null,emissive:a}))}t.material=ec.get(r)})}async function Fb(){const s=new uf,e=new Map;for(const[d,u]of Object.entries(Ub))e.set(d.split("/").pop().replace(".glb",""),u);const t=async(d,u)=>{const f=e.get(d);if(f)try{const p=await s.loadAsync(f);return kb(p.scene),u(p.scene)}catch(p){console.warn(`[cast] ${d}.glb unavailable — using the primitive stand-in`,p);return}},[n,i,r,o,a,c,l,h]=await Promise.all([t("kai",d=>ki.fromGltf(d,.72)),t("mom",d=>ki.fromGltf(d,.96,["tail"])),t("dad",d=>ki.fromGltf(d,1,["locs"])),t("baby",d=>oa.fromGltf(d)),t("beerus",d=>Gn.fromGltf(d,!1)),t("badahh",d=>Gn.fromGltf(d,!1)),t("rocky",d=>Gn.fromGltf(d,!1)),t("nori",d=>Gn.fromGltf(d,!0))]);return{kai:n,mom:i,dad:r,baby:o,beerus:a,badahh:c,rocky:l,nori:h}}const Ob=Object.assign({"../assets/models/house.glb":hf});function Bb(s){return s.startsWith("TEX_wood_dark")?Yo("#a8743c"):s.startsWith("TEX_wood")?Yo("#c8914f"):s.startsWith("TEX_tile_warm")?Ko("#efe4d2","#e0d0b8"):s.startsWith("TEX_tile")?Ko():s.startsWith("TEX_marker")?by():null}async function Hb(){const s=Object.values(Ob)[0];if(!s)return null;try{const e=await new uf().loadAsync(s),t=new Map;return e.scene.traverse(n=>{const i=n;if(!i.isMesh)return;const r=i.material;if(!r.isMeshStandardMaterial)return;const o=i.geometry.hasAttribute("color"),a=`${r.name}|${o}`;if(!t.has(a)){const c=Bb(r.name);c&&(c.wrapS=c.wrapT=fi);const l=r.emissive.clone().multiplyScalar(Math.min(1,r.emissiveIntensity??1));t.set(a,new Js({name:r.name,color:c?new Ce("#ffffff"):r.color.clone(),map:c,emissive:l,vertexColors:o,side:r.side,transparent:r.name.startsWith("TEX_marker")}))}i.material=t.get(a),i.matrixAutoUpdate=!1,i.updateMatrix()}),e.scene}catch(e){return console.warn("[house] house.glb unavailable — using the simple built-in house",e),null}}class Vb{constructor(e,t){q(this,"yaw");q(this,"pitch",.34);q(this,"curDist",3);q(this,"pivot",new L);q(this,"smoothPivot",new L);q(this,"initialized",!1);this.camera=e,this.yaw=t}orbit(e,t){this.yaw+=e,this.pitch=Math.max(-.2,Math.min(1.15,this.pitch+t))}snap(){this.initialized=!1}basis(){const e=Math.sin(this.yaw),t=Math.cos(this.yaw);return{fx:e,fz:t,rx:-t,rz:e}}update(e,t,n,i){const r=i.hidden?0:.3,o=i.hidden?.95:1.05,{rx:a,rz:c,fx:l,fz:h}=this.basis();this.pivot.set(t.x,t.y+o,t.z),this.initialized?this.smoothPivot.lerp(this.pivot,1-Math.exp(-e*(i.hidden?6:14))):(this.smoothPivot.copy(this.pivot),this.initialized=!0);const d=this.smoothPivot,u=i.hidden?2.7:i.tight?2.3:3.1,f=Math.cos(this.pitch),p=Math.sin(this.pitch),_=new L(d.x-l*f*u+a*r,d.y+p*u,d.z-h*f*u+c*r);_.y=Math.min(_.y,i.ceilingY-.18);let g=1;for(const[A,T]of[[0,0],[.18,0],[-.18,0],[0,.15]])g=Math.min(g,$v({x:d.x,y:d.y,z:d.z},{x:_.x+a*A,y:_.y+T,z:_.z+c*A},n));const m=_.distanceTo(d),v=Math.min(m,Math.max(.35,g*m-.22));v<this.curDist?this.curDist=v:this.curDist+=(v-this.curDist)*(1-Math.exp(-e*3));const b=_.clone().sub(d).normalize();this.camera.position.copy(d).addScaledVector(b,this.curDist);const x=new L(d.x+a*r*.45+l*.6,d.y-.12,d.z+c*r*.45+h*.6);this.camera.lookAt(x)}}class Gb{constructor(e,t,n,i){q(this,"keys",new Set);q(this,"pendingInteract",!1);q(this,"pendingQuiet",!1);q(this,"pendingFire",!1);q(this,"pendingIce",!1);q(this,"pendingPause",!1);q(this,"yawAcc",0);q(this,"pitchAcc",0);q(this,"lookId",null);q(this,"stickId",null);q(this,"stickOrigin",{x:0,y:0});q(this,"stickVec",{x:0,y:0});q(this,"lastLook",{x:0,y:0});q(this,"enabled",!1);q(this,"invertY",!1);q(this,"onAnyTouch",null);this.stage=e,this.stickZone=t,this.stickEl=n,this.knobEl=i,window.addEventListener("keydown",r=>this.onKey(r,!0)),window.addEventListener("keyup",r=>this.onKey(r,!1)),e.addEventListener("pointerdown",r=>this.lookDown(r)),e.addEventListener("pointermove",r=>this.lookMove(r));for(const r of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(r,o=>this.lookUp(o));t.addEventListener("pointerdown",r=>this.stickDown(r)),t.addEventListener("pointermove",r=>this.stickMove(r));for(const r of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(r,o=>this.stickUp(o))}onKey(e,t){const n=e.key.toLowerCase();if(!["w","a","s","d","q","r","e","c","f","g","p","arrowup","arrowdown","arrowleft","arrowright","escape"].includes(n))return;const r=e.target;if(!(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"))){if(t&&(n==="escape"||n==="p")){e.repeat||(this.pendingPause=!0);return}if(this.enabled)if(n.startsWith("arrow")&&e.preventDefault(),t){if(n==="e"){e.repeat||(this.pendingInteract=!0);return}if(n==="c"){e.repeat||(this.pendingQuiet=!0);return}if(n==="f"){e.repeat||(this.pendingFire=!0);return}if(n==="g"){e.repeat||(this.pendingIce=!0);return}this.keys.add(n)}else this.keys.delete(n)}}lookDown(e){if(this.enabled&&(e.pointerType==="touch"&&this.onAnyTouch?.(),this.lookId===null)){this.lookId=e.pointerId,this.lastLook={x:e.clientX,y:e.clientY};try{this.stage.setPointerCapture(e.pointerId)}catch{}}}lookMove(e){if(e.pointerId!==this.lookId)return;const t=e.clientX-this.lastLook.x,n=e.clientY-this.lastLook.y;this.lastLook={x:e.clientX,y:e.clientY};const i=e.pointerType==="touch"?.009:.006;this.yawAcc-=t*i,this.pitchAcc+=n*i*(this.invertY?-1:1)}lookUp(e){e.pointerId===this.lookId&&(this.lookId=null)}stickDown(e){if(!(!this.enabled||this.stickId!==null)){this.onAnyTouch?.(),e.preventDefault(),this.stickId=e.pointerId,this.stickOrigin={x:e.clientX,y:e.clientY},this.stickVec={x:0,y:0};try{this.stickZone.setPointerCapture(e.pointerId)}catch{}this.stickEl.hidden=!1,this.stickEl.style.left=`${e.clientX}px`,this.stickEl.style.top=`${e.clientY}px`,this.knobEl.style.transform="translate(0px, 0px)"}}stickMove(e){if(e.pointerId!==this.stickId)return;const t=50;let n=e.clientX-this.stickOrigin.x,i=e.clientY-this.stickOrigin.y;const r=Math.hypot(n,i);r>t&&(n=n/r*t,i=i/r*t),this.stickVec={x:n/t,y:i/t},this.knobEl.style.transform=`translate(${n}px, ${i}px)`}stickUp(e){e.pointerId===this.stickId&&(this.stickId=null,this.stickVec={x:0,y:0},this.stickEl.hidden=!0)}pressInteract(){this.enabled&&(this.pendingInteract=!0)}pressQuiet(){this.enabled&&(this.pendingQuiet=!0)}takePause(){const e=this.pendingPause;return this.pendingPause=!1,e}takeInteract(){const e=this.pendingInteract;return this.pendingInteract=!1,e}takeFire(){const e=this.pendingFire;return this.pendingFire=!1,e}takeIce(){const e=this.pendingIce;return this.pendingIce=!1,e}takeQuiet(){const e=this.pendingQuiet;return this.pendingQuiet=!1,e}read(e){let t=0,n=0;(this.keys.has("w")||this.keys.has("arrowup"))&&(t+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(t-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(n+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(n-=1),this.stickId!==null&&Math.hypot(this.stickVec.x,this.stickVec.y)>.15&&(t+=-this.stickVec.y,n+=this.stickVec.x);let i=this.yawAcc;this.keys.has("q")&&(i+=2.2*e),this.keys.has("r")&&(i-=2.2*e);const r={forward:t,right:n,orbitYaw:i,orbitPitch:this.pitchAcc};return this.yawAcc=0,this.pitchAcc=0,r}clear(){if(this.keys.clear(),this.pendingInteract=!1,this.pendingQuiet=!1,this.pendingFire=!1,this.pendingIce=!1,this.yawAcc=0,this.pitchAcc=0,this.lookId!==null)try{this.stage.releasePointerCapture(this.lookId)}catch{}if(this.stickId!==null)try{this.stickZone.releasePointerCapture(this.stickId)}catch{}this.lookId=null,this.stickId=null,this.stickVec={x:0,y:0},this.stickEl.hidden=!0}}const Vu="stay-at-home.v1",Gu={settings:{difficulty:"easy",questions:!0,readAloud:!0,mute:!1,chatterAudio:!0,reducedMotion:!1,invertY:!1},bestSeconds:0,wins:0};class Wb{constructor(){q(this,"data");q(this,"persistent",!0);this.data=JSON.parse(JSON.stringify(Gu));try{const e=window.localStorage.getItem(Vu);if(e){const t=JSON.parse(e);this.data={settings:{...Gu.settings,...t.settings??{}},bestSeconds:Number(t.bestSeconds)||0,wins:Number(t.wins)||0}}else typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(this.data.settings.reducedMotion=!0)}catch{this.persistent=!1}}save(){if(this.persistent)try{window.localStorage.setItem(Vu,JSON.stringify(this.data))}catch{this.persistent=!1}}recordRound(e,t){const n=t>this.data.bestSeconds;return n&&(this.data.bestSeconds=t),e&&(this.data.wins+=1),this.save(),{newBest:n}}}const xe=s=>{const e=document.getElementById(s);if(!e)throw new Error(`#${s} missing`);return e},W={stage:xe("stage"),live:xe("live"),title:xe("title"),howto:xe("howto"),settings:xe("settings"),hud:xe("hud"),pause:xe("pause"),result:xe("result"),glError:xe("gl-error"),titleStats:xe("title-stats"),castList:xe("cast-list"),clock:xe("hud-clock"),floor:xe("hud-floor"),room:xe("hud-room"),quiet:xe("hud-quiet"),phase:xe("hud-phase"),count:xe("hud-count"),danger:xe("hud-danger"),dangerText:xe("hud-danger-text"),dangerMeter:xe("hud-danger-meter"),notice:xe("hud-notice"),hiddenBadge:xe("hud-hidden"),captions:xe("hud-captions"),prompt:xe("hud-prompt"),stickZone:xe("stick-zone"),stick:xe("stick"),stickKnob:xe("stick-knob"),btnPlay:xe("btn-play"),btnHowto:xe("btn-howto"),btnSettings:xe("btn-settings"),btnPause:xe("btn-pause"),btnQuiet:xe("btn-quiet"),btnAction:xe("btn-action"),btnFire:xe("btn-fire"),btnIce:xe("btn-ice"),btnFireDesk:xe("btn-fire-desk"),btnIceDesk:xe("btn-ice-desk"),btnActionLabel:xe("btn-action-label"),btnResume:xe("btn-resume"),btnPauseSettings:xe("btn-pause-settings"),btnPauseMenu:xe("btn-pause-menu"),btnSame:xe("btn-same"),btnNew:xe("btn-new"),btnMenu:xe("btn-menu"),btnGlRetry:xe("btn-gl-retry"),pauseSeed:xe("pause-seed"),resultSeed:xe("result-seed"),resultHeading:xe("result-heading"),resultSub:xe("result-sub"),resultStats:xe("result-stats"),chores:xe("chores"),choresDone:xe("chores-done"),map:xe("map-canvas"),setMute:xe("set-mute"),setChatter:xe("set-chatter"),setMotion:xe("set-motion"),setInvert:xe("set-invert"),setDifficulty:xe("set-difficulty"),setQuestions:xe("set-questions"),setRead:xe("set-read"),quiz:xe("quiz"),stars:xe("hud-stars"),btnDifficulty:xe("btn-difficulty"),titleDifficulty:xe("title-difficulty")};function zt(s){W.live.textContent="",window.setTimeout(()=>W.live.textContent=s,30)}function Xb(){W.castList.innerHTML="";for(const s of Object.keys(ot)){const e=document.createElement("li"),t=document.createElement("strong");t.textContent=ot[s].lineup,e.append(t,document.createTextNode(ot[s].blurb)),W.castList.append(e)}}const li=[];function ii(s,e,t,n=!1,i=3.2){const r=document.createElement("div");r.className=`caption${n?" alert":""}`;const o=document.createElement("span");for(o.className="who",o.textContent=`${s}:`,r.append(o,document.createTextNode(e)),W.captions.append(r),li.push({el:r,until:t+i});li.length>3;)li.shift().el.remove()}function qb(s){for(let e=li.length-1;e>=0;e--)li[e].until<s&&(li[e].el.remove(),li.splice(e,1))}function Yb(){for(const s of li)s.el.remove();li.length=0}let Ol=0;function on(s,e,t=!1,n=2.4){W.notice.textContent=s,W.notice.classList.toggle("warn",t),W.notice.hidden=!1,Ol=e+n}let Bl=0;function Ls(s,e,t="",n=2.2){W.phase.textContent=s,W.phase.className=`banner ${t}`,W.phase.hidden=!1,Bl=e+n}function Kb(s){!W.notice.hidden&&s>Ol&&(W.notice.hidden=!0),!W.phase.hidden&&s>Bl&&(W.phase.hidden=!0)}function $b(){W.notice.hidden=!0,W.phase.hidden=!0,W.count.hidden=!0,W.danger.hidden=!0,Ol=0,Bl=0}let Wu="";function jb(s,e){const t=Jc(s);t!==Wu&&(W.clock.textContent=t,Wu=t),W.clock.classList.toggle("final",e)}function Zb(s){W.resultHeading.textContent=s.won?"You stayed hidden!":"Found you!",W.resultSub.textContent=s.won?"Chores earned: 0. Mom and Dad are very impressed (and a little suspicious).":`${s.captor??"A parent"} ${s.via==="check"?"reached into your hiding spot and tagged you":"caught up and tagged you"}. Here is your very official list of very silly chores.`,W.resultStats.innerHTML="";const e=(t,n)=>{const i=document.createElement("div"),r=document.createElement("dt");r.textContent=t;const o=document.createElement("dd");o.textContent=n,i.append(r,o),W.resultStats.append(i)};e("Time survived",Jc(Math.floor(s.survived))+(s.won?"":` (${s.survived.toFixed(1)} s)`)),s.won?e("Chores earned","0"):(e("Tagged by",s.captor??"—"),e("Caught in",s.room??"—")),e(s.newBest?"New best!":"Best time",Jc(Math.floor(s.best))),e("Wins",String(s.wins)),W.chores.innerHTML="",W.choresDone.hidden=!0;for(const t of s.chores){const n=document.createElement("button");n.type="button",n.className="chore",n.setAttribute("aria-pressed","false"),n.dataset.id=t.id;const i=document.createElement("span");i.className="icon",i.textContent=t.icon,i.setAttribute("aria-hidden","true");const r=document.createElement("span"),o=document.createElement("strong");o.textContent=t.title,r.append(o,document.createTextNode(t.copy));const a=document.createElement("span");a.className="check",a.textContent="✓",a.setAttribute("aria-hidden","true"),n.append(i,r,a),n.addEventListener("click",()=>{const c=n.getAttribute("aria-pressed")!=="true";n.setAttribute("aria-pressed",String(c));const l=[...W.chores.querySelectorAll(".chore")].every(h=>h.getAttribute("aria-pressed")==="true");W.choresDone.hidden=!l,l&&zt("Chores complete!")}),W.chores.append(n)}W.resultSeed.textContent=`${s.seed} · ${s.difficulty==="easy"?"Easy":"Normal"}`}function Jb(s,e,t=[]){W.pauseSeed.textContent=String(e);const n=W.map,i=n.getContext("2d");if(!i)return;i.clearRect(0,0,n.width,n.height);const r=15,o=30,a=[o,o+26*r+40],c=46;i.font="800 18px Nunito, system-ui, sans-serif",i.textBaseline="alphabetic";for(const l of[0,1]){const h=p=>a[l]+p*r,d=p=>c+p*r;if(i.fillStyle="#2b2420",i.fillText(l===0?"01 · DOWNSTAIRS":"02 · UPSTAIRS",h(0),c-16),l===0)for(const p of Yd)i.fillStyle="rgba(160,145,125,0.25)",i.fillRect(h(p.x0),d(Math.max(p.z0,-1.5)),(p.x1-p.x0)*r,(Math.min(p.z1,26)-Math.max(p.z0,-1.5))*r);for(const p of as)p.floor===l&&(i.fillStyle="#fff8ec",i.fillRect(h(p.x0),d(p.z0),(p.x1-p.x0)*r,(p.z1-p.z0)*r));if(l===1)for(const p of Zv)i.fillStyle="rgba(160,145,125,0.35)",i.fillRect(h(p.x0),d(p.z0),(p.x1-p.x0)*r,(p.z1-p.z0)*r);for(const p of zl)p.floor===l&&(i.fillStyle="rgba(160,145,125,0.45)",i.fillRect(h(p.x0),d(p.z0),(p.x1-p.x0)*r,(p.z1-p.z0)*r));i.strokeStyle="#8b6fc4",i.lineWidth=16,i.globalAlpha=l===0?.55:.35,i.beginPath(),dn.points.forEach((p,_)=>_?i.lineTo(h(p.x),d(p.z)):i.moveTo(h(p.x),d(p.z))),i.stroke(),i.globalAlpha=1;for(const p of Il)if(p.floor===l){i.strokeStyle=p.rail?"#8a5a33":"#2b2420",i.lineWidth=p.rail?2:3,i.setLineDash(p.rail?[4,3]:[]);for(const[_,g]of jd(p))i.beginPath(),p.axis==="x"?(i.moveTo(h(_),d(p.at)),i.lineTo(h(g),d(p.at))):(i.moveTo(h(p.at),d(_)),i.lineTo(h(p.at),d(g))),i.stroke();if(p.trim==="shortcut"&&p.gaps){i.strokeStyle="#2f8f8a",i.lineWidth=6,i.setLineDash([]);for(const[_,g]of p.gaps)i.beginPath(),p.axis==="x"?(i.moveTo(h(_),d(p.at)),i.lineTo(h(g),d(p.at))):(i.moveTo(h(p.at),d(_)),i.lineTo(h(p.at),d(g))),i.stroke()}}i.setLineDash([]),i.fillStyle="#5a4d43",i.font="700 11px Nunito, system-ui, sans-serif";const u=new Set;for(const p of as){if(p.floor!==l||u.has(p.name))continue;u.add(p.name);const g={"Walk-in closet 1":"WIC 1","Walk-in closet 2":"WIC 2","Primary bedroom":"Prim. bedroom","Primary bath":"Prim. bath","Rotunda foyer":"Foyer","Island kitchen":"Kitchen","Bedroom hall":"Hall"}[p.name]??p.name;p.id==="hall2"?i.fillText(g,h(p.x0)+4,d(p.z1)-6):i.fillText(g,h(p.x0)+4,d(p.z0)+13)}for(const p of qt){if(p.floor!==l)continue;const _=t.includes(p.id);i.fillStyle=_?"#2f8f8a":"#f2c14e",i.beginPath(),i.arc(h(p.approach.x),d(p.approach.z),6,0,Math.PI*2),i.fill(),_&&(i.fillStyle="#fff",i.font="900 9px Nunito, system-ui, sans-serif",i.fillText("✓",h(p.approach.x)-3.5,d(p.approach.z)+3.5)),i.fillStyle="#2b2420",i.font="800 9px Nunito, system-ui, sans-serif",i.fillText(p.id,h(p.approach.x)-9,d(p.approach.z)-8)}i.font="800 12px Nunito, system-ui, sans-serif",i.fillStyle="#5b3fa0",i.fillText(l===0?"A · Stair ↑":"A · Stair ↓",h(1.2),d(l===0?17.4:13.3)),l===0&&(i.fillStyle="#1f6b67",i.fillText("Laundry shortcut",h(16.4),d(19.6))),(s.onStair||s.floor===l)&&(i.fillStyle="#c0392b",i.strokeStyle="#fff",i.lineWidth=3,i.beginPath(),i.arc(h(s.x),d(s.z),8,0,Math.PI*2),i.fill(),i.stroke())}i.fillStyle="#5a4d43",i.font="700 12px Nunito, system-ui, sans-serif",i.fillText("Front of house ↓",a[0],c+25.6*r)}const pf={red:"#e23b3b",blue:"#2f6fe0",yellow:"#f5c400",green:"#2fa84f",orange:"#f28a1c",purple:"#8e4ad6"},Xu=["circle","square","triangle","star","heart"],qu="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Qb=[[1,1],[1,2],[2,1],[2,2],[1,3],[3,1]],Yu=["🍎","⭐","🐶","🚗","🎈","🐟","🍪","🦆"],eS=["count","color","letter","shape","add"],oi=(s,e)=>e[Math.min(e.length-1,Math.floor(s()*e.length))];function _r(s,e,t,n,i){const r=t.filter(l=>l!==e),o=oi(s,r),a=oi(s,r.filter(l=>l!==o));let c=[e,o,a];if(i)c.sort((l,h)=>Number(l)-Number(h));else{for(let l=c.length-1;l>0;l--){const h=Math.min(l,Math.floor(s()*(l+1)));[c[l],c[h]]=[c[h],c[l]]}c=c.slice()}return{options:c.map(l=>({kind:n,value:l})),answer:c.indexOf(e)}}function Ku(s){const e=[];for(let t=Math.max(1,s-2);t<=Math.min(5,s+2);t++)e.push(String(t));return e}function tS(s=Math.random,e){const t=oi(s,eS.filter(n=>n!==e));switch(t){case"count":{const n=1+Math.min(4,Math.floor(s()*5)),i=oi(s,Yu);return{kind:t,say:"How many?",clip:"quiz-count",show:{type:"things",groups:[Array(n).fill(i)]},..._r(s,String(n),Ku(n),"number",!0)}}case"add":{const[n,i]=oi(s,Qb),r=oi(s,Yu);return{kind:t,say:`What is ${n} + ${i}?`,clip:`quiz-add-${n}-${i}`,show:{type:"things",groups:[Array(n).fill(r),Array(i).fill(r)]},..._r(s,String(n+i),Ku(n+i),"number",!0)}}case"color":{const n=Object.keys(pf),i=oi(s,n);return{kind:t,say:`Tap ${i}!`,clip:`quiz-color-${i}`,show:{type:"match",option:{kind:"color",value:i}},..._r(s,i,n,"color",!1)}}case"shape":{const n=oi(s,Xu);return{kind:t,say:`Tap the ${n}!`,clip:`quiz-shape-${n}`,show:{type:"match",option:{kind:"shape",value:n}},..._r(s,n,Xu,"shape",!1)}}default:{const n=oi(s,qu);return{kind:"letter",say:`Find the letter ${n}!`,clip:`quiz-letter-${n.toLowerCase()}`,show:{type:"match",option:{kind:"letter",value:n}},..._r(s,n,qu,"letter",!1)}}}}const $u="http://www.w3.org/2000/svg",ju={circle:"M50 8a42 42 0 1 0 0 84a42 42 0 1 0 0-84z",square:"M12 12h76v76h-76z",triangle:"M50 8L94 90H6z",star:"M50 5l13.2 28.6 31.3 3.8-23.1 21.4 6.1 30.9L50 74.2 22.5 89.7l6.1-30.9L5.5 37.4l31.3-3.8z",heart:"M50 90C22 68 6 52 6 33a22 22 0 0 1 44-6a22 22 0 0 1 44 6c0 19-16 35-44 57z"},nS={circle:"#2f6fe0",square:"#2fa84f",triangle:"#f28a1c",star:"#f5c400",heart:"#e23b3b"};function Zu(s){if(s.kind==="color"){const t=document.createElement("span");return t.className="quiz-dot",t.style.background=pf[s.value]??"#888",t}if(s.kind==="shape"){const t=document.createElementNS($u,"svg");t.setAttribute("viewBox","0 0 100 100"),t.setAttribute("class","quiz-shape");const n=document.createElementNS($u,"path");return n.setAttribute("d",ju[s.value]??ju.circle),n.setAttribute("fill",nS[s.value]??"#888"),t.appendChild(n),t}const e=document.createElement("span");return e.className="quiz-glyph",e.textContent=s.value,e}function iS(s){return s.kind==="letter"?`letter ${s.value}`:s.value}class sS{constructor(e,t){q(this,"heading");q(this,"sub");q(this,"picture");q(this,"say");q(this,"speakBtn");q(this,"options");q(this,"feedback");q(this,"timers",[]);q(this,"locked",!0);q(this,"question",null);q(this,"done",null);q(this,"picking",!1);q(this,"tries",0);q(this,"text",null);this.root=e,this.hooks=t;const n=r=>e.querySelector(`#${r}`);this.heading=n("quiz-heading"),this.sub=n("quiz-sub"),this.picture=n("quiz-picture"),this.say=n("quiz-say"),this.speakBtn=n("quiz-speak"),this.options=n("quiz-options"),this.feedback=n("quiz-feedback");const i=()=>{this.question&&(this.hooks.speak(this.question.clip,this.question.say),this.speakBtn.classList.remove("pulse"),this.speakBtn.offsetWidth,this.speakBtn.classList.add("pulse"))};this.speakBtn.addEventListener("click",i),this.picture.addEventListener("click",i),window.addEventListener("keydown",r=>{if(this.root.hidden||!this.question)return;const o=["1","2","3"].indexOf(r.key);o<0||(this.picking?o<2&&this.pick(o===0?"fire":"ice"):this.choose(o))})}get isOpen(){return!this.root.hidden}open(e,t,n){if(this.close(),this.picking=!1,this.picture.hidden=!1,this.options.classList.remove("two"),this.question=e,this.done=n,this.text=t,this.tries=t.tries,this.root.classList.toggle("fire",t.theme==="fire"),this.heading.textContent=t.heading,this.sub.textContent=t.sub,this.say.textContent=e.say,this.feedback.textContent="",this.feedback.className="quiz-feedback",this.picture.replaceChildren(),e.show.type==="things")e.show.groups.forEach((i,r)=>{if(r>0){const a=document.createElement("span");a.className="quiz-plus",a.textContent="+",this.picture.appendChild(a)}const o=document.createElement("span");o.className="quiz-group",o.textContent=i.join(" "),this.picture.appendChild(o)});else{const i=document.createElement("span");i.className="quiz-match",i.appendChild(Zu(e.show.option)),this.picture.appendChild(i)}this.options.replaceChildren(),e.options.forEach((i,r)=>{const o=document.createElement("button");o.type="button",o.className="quiz-option",o.setAttribute("aria-label",iS(i)),o.appendChild(Zu(i)),o.addEventListener("click",()=>this.choose(r)),this.options.appendChild(o)}),this.root.hidden=!1,this.hooks.announce(`${t.heading} ${e.say}`),this.locked=!0,this.later(700,()=>this.locked=!1),this.later(350,()=>this.hooks.speak(e.clip,e.say))}close(){for(const e of this.timers)window.clearTimeout(e);this.timers=[],this.root.hidden=!0,this.question=null,this.done=null}later(e,t){this.timers.push(window.setTimeout(t,e))}finish(e,t,n){this.locked=!0;const i=this.done;this.later(t,()=>{this.close(),i?.(e,n)})}showPowers(){const e=this.question;if(e){this.picking=!0,this.question={...e,clip:"quiz-pick",say:"Pick your power! Fire or freeze?"},this.heading.textContent="Pick your power!",this.sub.textContent="Fire blows them back. Freeze stops them still.",this.say.textContent="Fire or Freeze?",this.feedback.textContent="",this.feedback.className="quiz-feedback",this.picture.replaceChildren(),this.picture.hidden=!0,this.options.replaceChildren(),this.options.classList.add("two");for(const t of["fire","ice"]){const n=document.createElement("button");n.type="button",n.className=`quiz-option power ${t}`,n.setAttribute("aria-label",t==="fire"?"Fire":"Freeze");const i=document.createElement("span");i.className="quiz-glyph",i.textContent=t==="fire"?"🔥":"❄️";const r=document.createElement("span");r.className="power-name",r.textContent=t==="fire"?"Fire":"Freeze",n.append(i,r),n.addEventListener("click",()=>this.pick(t)),this.options.appendChild(n)}this.hooks.speak("quiz-pick","Pick your power! Fire or freeze?"),this.hooks.announce("Pick your power: Fire or Freeze?"),this.locked=!0,this.later(500,()=>this.locked=!1)}}pick(e){if(!this.picking||this.locked)return;[...this.options.children][e==="fire"?0:1]?.classList.add("right"),this.hooks.sound("right"),this.finish(!0,450,e)}choose(e){const t=this.question;if(!t||this.locked||this.picking)return;const n=[...this.options.children],i=n[e];if(!i||i.disabled)return;if(e===t.answer){i.classList.add("right");const o=this.text.right;this.feedback.textContent=o.text,this.feedback.className="quiz-feedback good",this.hooks.sound("right"),this.hooks.speak(o.clip,o.say),this.hooks.announce(o.say),this.text.pickPower?(this.locked=!0,this.later(1300,()=>this.showPowers())):this.finish(!0,1900);return}if(i.classList.add("wrong"),i.disabled=!0,this.tries-=1,this.hooks.sound("wrong"),this.tries>0){this.feedback.textContent="Oops! Try again.",this.feedback.className="quiz-feedback",this.hooks.speak("quiz-again","Oops! Try again."),this.hooks.announce("Oops! Try again."),this.locked=!0,this.later(900,()=>this.locked=!1);return}n[t.answer]?.classList.add("right");const r=this.text.miss;this.feedback.textContent=r.text,this.feedback.className="quiz-feedback",this.hooks.speak(r.clip,r.say),this.hooks.announce(r.say),this.finish(!1,2600)}}const Zo=new URLSearchParams(location.search),mf=Zo.has("seed")?Number(Zo.get("seed"))>>>0:null;let tl=Math.max(1,Math.min(32,Number(Zo.get("speed"))||1));const Vt=new Wb,qe=new qM,gf=nf();let ut="title",De=new sf(mf??Ul()),ss=Wr(De.state),ns=ss,Vn=0,cs=performance.now(),Ke=0,Cr=0,tc=0,Ju,nl=-1,il=-1,_f=null,Fr=!1,Qt=null;const Ci=new Xx;Ci.background=new Ce("#2e2622");const Or=new $t(62,window.innerWidth/window.innerHeight,.05,140);let Rn=null,Un=null;const ui=new Vb(Or,Math.PI),sl=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;function rS(){try{const s=document.createElement("canvas");if(!(s.getContext("webgl2")??s.getContext("webgl")))throw new Error("no webgl");return Qt=new Wx({antialias:!sl,powerPreference:"high-performance"}),Qt.setPixelRatio(Math.min(window.devicePixelRatio||1,sl?1.5:2)),Qt.setSize(window.innerWidth,window.innerHeight),Qt.outputColorSpace=Ct,Qt.toneMapping=ed,Qt.toneMappingExposure=1.05,W.stage.innerHTML="",W.stage.append(Qt.domElement),Qt.domElement.setAttribute("aria-hidden","true"),!0}catch{return Qt=null,!1}}function oS(){if(Rn)return;Rn=Iy(gf.solids),Uy(Rn.group);const s=aS(Rn.group,new Set(Rn.markers.values()));Ci.add(s);for(const e of Rn.markers.values())Ci.add(e);Hb().then(e=>{e&&(Ci.remove(s),Ci.add(e))}),Ny(Ci),Un=new Oy,Ci.add(Un.group),Fb().then(e=>Un?.useModels(e))}function aS(s,e){s.updateMatrixWorld(!0);const t=new Map,n=[];s.traverse(r=>{if(e.has(r))return;if(r.isInstancedMesh){n.push(r);return}const o=r;if(!o.isMesh)return;const a=o.material,c=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const l of Object.keys(c.attributes))["position","normal","uv"].includes(l)||c.deleteAttribute(l);t.has(a)||t.set(a,[]),t.get(a).push(c)});const i=new dt;for(const[r,o]of t){const a=Vv(o,!1);if(!a)continue;const c=new at(a,r);r.transparent&&(c.renderOrder=1),i.add(c)}for(const r of n)r.removeFromParent(),i.add(r);return i}function cS(){Or.aspect=window.innerWidth/window.innerHeight,Or.updateProjectionMatrix(),Qt?.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",cS);const Rt=new Gb(W.stage,W.stickZone,W.stick,W.stickKnob);Rt.onAnyTouch=()=>Hl(!0);function Hl(s){Fr!==s&&(Fr=s,document.body.classList.toggle("has-touch",s))}sl&&Hl(!0);window.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&Hl(!0)});const xf=(s,e)=>{s.addEventListener("pointerdown",t=>{t.preventDefault(),e()}),s.addEventListener("click",t=>{t.detail===0&&e()})};xf(W.btnAction,()=>Rt.pressInteract());xf(W.btnQuiet,()=>Rt.pressQuiet());W.btnFire.addEventListener("click",()=>$s("fire"));W.btnIce.addEventListener("click",()=>$s("ice"));W.btnFireDesk.addEventListener("click",()=>$s("fire"));W.btnIceDesk.addEventListener("click",()=>$s("ice"));W.btnPause.addEventListener("click",()=>Jo());function aa(){const s=Vt.data.settings;qe.setMuted(s.mute),qe.chatter=s.chatterAudio,Rt.invertY=s.invertY,document.body.classList.toggle("reduced-motion",s.reducedMotion),W.setMute.checked=s.mute,W.setChatter.checked=s.chatterAudio,W.setMotion.checked=s.reducedMotion,W.setInvert.checked=s.invertY,W.setDifficulty.value=s.difficulty,W.setQuestions.checked=s.questions,W.setRead.checked=s.readAloud,qe.readAloud=s.readAloud,W.titleDifficulty.textContent=s.difficulty==="easy"?"Easy":"Normal"}W.setDifficulty.addEventListener("change",()=>{Vt.data.settings.difficulty=W.setDifficulty.value==="normal"?"normal":"easy",Vt.save(),aa()});W.btnDifficulty.addEventListener("click",()=>{Vt.data.settings.difficulty=Vt.data.settings.difficulty==="easy"?"normal":"easy",Vt.save(),aa(),zt(`Difficulty: ${Vt.data.settings.difficulty==="easy"?"Easy":"Normal"}`)});for(const[s,e]of[[W.setMute,"mute"],[W.setQuestions,"questions"],[W.setRead,"readAloud"],[W.setChatter,"chatterAudio"],[W.setMotion,"reducedMotion"],[W.setInvert,"invertY"]])s.addEventListener("change",()=>{Vt.data.settings[e]=s.checked,Vt.save(),aa()});aa();function tn(s,e){s.hidden=!e}function Vl(s,e){_f=e,tn(s,!0),s.querySelector("h2")?.focus?.(),s.querySelector("input, button")?.focus()}document.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",()=>{tn(document.getElementById(s.dataset.close),!1),_f?.focus()}));function lS(){const s=Vt.data,e=s.bestSeconds>0?`${Math.floor(s.bestSeconds/60)}:${String(Math.floor(s.bestSeconds%60)).padStart(2,"0")}`:"—";W.titleStats.textContent=`Best time survived: ${e} · Wins: ${s.wins}${Vt.persistent?"":" (this session only)"}`}function Gl(){ut="title",Rt.enabled=!1,Rt.clear(),qe.suspend(),ca.close();for(const s of[W.hud,W.pause,W.result,W.howto,W.settings])tn(s,!1);tn(W.title,!0),lS(),W.btnPlay.focus(),zt("Main menu")}W.btnPlay.addEventListener("click",()=>{qe.unlock(),Wl(mf??Ul())});W.btnHowto.addEventListener("click",()=>Vl(W.howto,W.btnHowto));W.btnSettings.addEventListener("click",()=>Vl(W.settings,W.btnSettings));W.btnPauseSettings.addEventListener("click",()=>Vl(W.settings,W.btnPauseSettings));W.btnResume.addEventListener("click",()=>vf());W.btnPauseMenu.addEventListener("click",()=>Gl());W.btnSame.addEventListener("click",()=>{qe.unlock(),Wl(De.state.seed)});W.btnNew.addEventListener("click",()=>{qe.unlock();let s=Ul();s===De.state.seed&&(s=s+1>>>0),Wl(s)});W.btnMenu.addEventListener("click",()=>Gl());W.btnGlRetry.addEventListener("click",()=>Mf());function Wl(s){if(!Qt)return;const e=Vt.data.settings;De=new sf(s,{difficulty:e.difficulty,escapes:e.questions?e.difficulty==="easy"?3:1:0}),ca.close(),ss=ns=Wr(De.state),Vn=0,cs=performance.now(),Cr=0,nl=-1,il=-1,ui.yaw=De.state.kai.yaw,ui.pitch=.32,ui.snap(),Un?.resetPresentation(),Yb(),$b();for(const t of[W.title,W.pause,W.result,W.howto,W.settings])tn(t,!1);tn(W.hud,!0),Rt.clear(),Rt.enabled=!0,qe.resume(),ut="playing",Ls("Find a spot!",Ke,"",2.6),W.count.hidden=!1,zt("Head start. Find a spot! Mom and Dad are counting to ten."),Qt.domElement&&!Fr&&W.stage.focus?.(),document.activeElement?.blur?.()}function Jo(){if(ut!=="playing")return;ut="paused",Rt.clear(),qe.suspend();const s=De.state.kai;Jb({x:s.x,z:s.z,floor:s.floor,onStair:s.layer===ln},De.state.seed,De.state.checkedSpots),tn(W.pause,!0),W.btnResume.focus(),zt("Paused")}function vf(){ut==="paused"&&(tn(W.pause,!1),tn(W.settings,!1),Rt.clear(),Vn=0,cs=performance.now(),qe.resume(),ut="playing",zt("Resumed"))}Zo.has("nopause")||(window.addEventListener("blur",()=>Jo()),document.addEventListener("visibilitychange",()=>{document.hidden&&Jo()}));const ca=new sS(W.quiz,{speak:(s,e)=>{qe.unlock(),qe.question(s,e)},hush:()=>qe.stopQuestion(),sound:s=>qe.play(s==="right"?"win":"ui",s==="right"?.6:.8),announce:zt});function hS(){const s=tS(Math.random,Ju);Ju=s.kind;const e=De.state.result?.captor??"mom";ca.open(s,{heading:`${ot[e].display} found you!`,sub:"Answer right to get a power and run away!",tries:2,right:{text:"⭐ Yes! Great job!",clip:"quiz-great",say:"Yes! Great job!"},miss:{text:"Good try!",clip:"quiz-no",say:"Good try! They got you this time."},pickPower:!0},(t,n)=>{if(ut==="quiz"){if(t&&De.escape(n??"fire")){Xl(De.drainEvents()),ss=ns=Wr(De.state),Vn=0,cs=performance.now(),Rt.clear(),Rt.enabled=!0,ut="playing";return}qe.play("lose",.8),Un&&(Un.shrug=1),Cr=.6,ut="ending"}})}function $s(s){if(ut==="playing"){if(!De.canUse(s)){const e=s==="fire"?W.btnFire:W.btnIce;e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope");return}qe.unlock(),De.use(s),ss=ns=Wr(De.state),Xl(De.drainEvents())}}function uS(){const s=De.state.result,e=s.outcome==="won",{newBest:t}=Vt.recordRound(e,s.survivedSeconds);Zb({won:e,survived:s.survivedSeconds,room:s.captureRoom,captor:s.captor?ot[s.captor].display:null,via:s.via,chores:s.chores,seed:De.state.seed,difficulty:De.opts.difficulty,best:Vt.data.bestSeconds,wins:Vt.data.wins,newBest:t}),ut="result",Rt.enabled=!1,Rt.clear(),tn(W.hud,!1),tn(W.result,!0),W.resultHeading.focus(),zt(e?"You stayed hidden! Chores earned: 0.":`Found you! ${s.captor?ot[s.captor].display:"A parent"} tagged you in ${s.captureRoom}. Three chores assigned.`)}function Ki(s,e,t){const n=De.state.kai,i=Math.hypot(s-n.x,(e-n.y)*1.5,t-n.z),r=Math.abs(e-n.y)<1.5;return Math.max(0,Math.min(1,1-i/16))*(r?1:.4)}function Xl(s){const e=De.state,t=Un,n=i=>qt.find(r=>r.id===i).description.toLowerCase();for(const i of s)switch(i.type){case"readyOrNot":Ls("Ready or not!",Ke,"",2.2),ii("Mom & Dad","Ready or not, here we come!",Ke,!0),qe.voice("mom-ready",.9,"seeker"),W.count.hidden=!0,zt("Ready or not! Mom and Dad are searching.");break;case"footstep":qe.play(i.quiet?"stepQuiet":"step",.6),i.heard&&(on("👂 They heard your footsteps!",Ke,!0),qe.play("heard",.7));break;case"hide":{const r=qt.find(o=>o.id===i.spotId);ui.yaw=Math.atan2(r.hidden.x-r.approach.x,r.hidden.z-r.approach.z),ui.pitch=.42,qe.play("hide",.8),zt(`Hidden ${r.label}.`);break}case"emerge":qe.play("emerge",.7),zt("You came out of hiding.");break;case"quiet":qe.play("ui",.5),zt(i.on?"Tiptoe on":"Tiptoe off");break;case"taunt":{const r=Eu[i.who][i.idx%Eu[i.who].length],o=e[i.who],a=Ki(o.x,o.y,o.z);a>.12&&ii(ot[i.who].display,r.text,Ke),t.say(i.who,r.text,Ke,!1),qe.voice(r.clip,a,"chatter");break}case"hunch":{const r=e[i.who],o=`${Xv[i.who]} ${n(i.spotId)}…`,a=e.kai.hidden===i.spotId;ii(ot[i.who].display,o,Ke,a,3.6),t.say(i.who,o,Ke,!1,3),qe.voice(`${i.who}-h-${i.spotId}`,Math.max(.3,Ki(r.x,r.y,r.z)),"seeker"),a&&(on(`⚠ ${ot[i.who].display} is coming to check your spot — move!`,Ke,!0,4),qe.play("spotted",.5),zt(`Warning: ${ot[i.who].display} is coming to check your hiding spot.`));break}case"shout":{const r=e[i.who],o=Gv[i.who];ii(ot[i.who].display,o.text,Ke,!0),t.say(i.who,`📣 ${o.text}`,Ke,!0,2),qe.voice(o.clip,Math.max(.5,Ki(r.x,r.y,r.z)),"seeker"),i.heard&&on(`📣 ${i.who==="mom"?"Dad":"Mom"} heard that and is coming too!`,Ke,!0);break}case"giggle":ii(ot.baby.display,"(giggles and crawls after you)",Ke,!0),qe.play("giggle",Math.max(.3,Ki(e.baby.x,0,e.baby.z))),i.heard&&on("👶 They heard the giggle!",Ke,!0);break;case"yip":ii(ot.nori.display,"Yip! (wags happily)",Ke,!0),qe.play("yip",Math.max(.3,Ki(e.nori.x,0,e.nori.z))),i.heard&&on("🐩 They heard Nori!",Ke,!0);break;case"toy":ii(ot.rocky.display,"(bats a rattly toy ball across the game room)",Ke),qe.play("toy",Math.max(.15,Ki(e.rocky.ball.x,xt[1],e.rocky.ball.z))),i.heard&&on("🧶 They heard the toy ball",Ke);break;case"checkStart":{const r=e[i.who];qe.play("check",Math.max(.15,Ki(r.x,r.y,r.z))),i.kaiInside&&on(`⚠ ${ot[i.who].display} is reaching in!`,Ke,!0,1.4);break}case"chaseStart":qe.play("spotted",.8),zt(`Danger: ${ot[i.who].display} sees you. Run!`);break;case"chaseLost":!e.mom.seesKai&&!e.dad.seesKai&&on(`😮‍💨 ${ot[i.who].display} lost sight of you`,Ke);break;case"finalTen":on("⏰ Final ten seconds!",Ke,!0,3),zt("Final ten seconds!");break;case"caught":{const r=Wv[i.who];Ls("Found you!",Ke,"found",3),ii(ot[i.who].display,r.text,Ke,!0),t.say(i.who,r.text,Ke,!0,3),qe.voice(r.clip,1,"seeker"),t.captor=i.who,De.canEscape||(qe.play("lose",.8),t.shrug=1),zt(`Found you! ${ot[i.who].display} tagged you.`);break}case"escaped":t.captor=null,t.shrug=0,Ls("Run, Kai, run!",Ke,"win",2.6),on("🏃 They have to count to six — go hide!",Ke,!1,6);break;case"power":{const r=i.power==="fire";if(qe.play(r?"fire":"freeze",1),t.powerBlast(i.power,i.hit),i.reason==="button"&&Ls(r?"🔥 FIRE POWER!":"❄️ FREEZE POWER!",Ke,r?"fire":"ice",2),i.hit.forEach((o,a)=>{const c=r?o==="mom"?"Whoa! Hot, hot, hot!":"Ow! Too hot! Too hot!":o==="mom"?"Brrr! I'm frozen!":"Brrr! So cold!";t.say(o,c,Ke,!0,2.4),ii(ot[o].display,c,Ke,!0),window.setTimeout(()=>qe.voice(`${o}-${r?"hot":"cold"}`,1,"seeker"),650+a*900)}),i.hit.length){const o=i.hit.map(c=>ot[c].display).join(" & "),a=i.hit.length>1?"are":"is";i.reason==="button"&&on(r?`🔥 ${o} ${a} too hot to chase you — run and hide!`:`❄️ ${o} ${a} frozen — run and hide!`,Ke,!1,4),zt(`${r?"Fire":"Freeze"} power! ${i.hit.map(c=>ot[c].display).join(" and ")} ${r?"got blown back":"froze"}.`)}else zt(`${r?"Fire":"Freeze"} power!`);break}case"recovered":De.state.phase==="search"&&on(i.power==="fire"?`😤 ${ot[i.who].display} cooled off — watch out!`:`🧊 ${ot[i.who].display} thawed out — watch out!`,Ke,!0,2.6);break;case"graceEnd":on("👀 Here they come again!",Ke,!0,3),qe.voice("mom-ready",.9,"seeker"),zt("Here they come again!");break;case"won":Ls("You stayed hidden!",Ke,"win",3),qe.play("win",.9),t.cheer=1,t.startSparkle(),zt("You stayed hidden!");break}}function dS(){const s=De.state,e=s.kai,t=yy(s.tick);if(jb(t,s.phase==="search"&&t<=10),s.phase==="search"&&t<=10&&t>0&&t!==il&&ut==="playing"&&(il=t,qe.play("tick",.6)),W.floor.textContent=`Floor ${e.floor+1}`,W.room.textContent=De.kaiRoomLabel(),W.quiet.textContent=e.quiet?"🤫 Tiptoe":"🏃 Run",W.quiet.classList.toggle("on",e.quiet),W.btnQuiet.setAttribute("aria-pressed",String(e.quiet)),s.phase==="headstart"){const d=Math.min(10,Math.floor(s.tick/60)+1);if(d!==nl){nl=d;const u=Array.from({length:d},(f,p)=>p+1).join("… ");W.count.textContent=`🙈 Counting: ${u}…`,d===8&&qe.voice("mom-count",.5,"seeker")}}const n=Fr?"Action":"E";let i="",r="Hide",o=!1;if(e.hidden){const d=qt.find(u=>u.id===e.hidden);i=`${n} · Come out from ${d.label}`,r="Come out",o=!0,W.hiddenBadge.textContent=`🙈 Hidden — ${d.description}`}else{const d=ut==="playing"?De.nearbySpot():null;d&&(i=`${n} · Hide ${d.label}`,o=!0)}W.prompt.hidden=!i||ut!=="playing",i&&(W.prompt.textContent=i),W.hiddenBadge.hidden=!e.hidden,W.btnActionLabel.textContent=r,W.btnAction.setAttribute("aria-label",i||"Hide (no spot nearby)"),W.btnAction.classList.toggle("ready",o);const a=ut==="playing";for(const[d,u,f]of[["fire",W.btnFire,W.btnFireDesk],["ice",W.btnIce,W.btnIceDesk]]){const p=De.recharge(d),_=a&&De.canUse(d);u.hidden=!a,u.classList.toggle("charging",!_),u.style.setProperty("--charge",String(1-p)),u.setAttribute("aria-disabled",String(!_)),f.hidden=!a||Fr,f.classList.toggle("charging",!_),f.style.setProperty("--charge",String(1-p))}Un&&(Un.fireReady=a&&De.canUse("fire")&&s.phase==="search"&&De.powerTargets("fire").length>0);const c=De.seekers.filter(d=>d.mode==="chase"),l=c.length>0&&s.phase==="search";if(W.danger.hidden=!l,document.body.classList.toggle("is-hidden",!!e.hidden&&ut==="playing"),l){const d=c.map(p=>ot[p.id].display).join(" & ");W.dangerText.textContent=`⚠ ${d} ${c.length>1?"see":"sees"} you — run!`;const u=Math.min(...c.map(p=>Math.hypot(p.x-e.x,p.z-e.z))),f=1-Math.min(1,Math.max(0,(u-De.tune.touchRadius)/(De.tune.seekerSightRange-De.tune.touchRadius)));W.dangerMeter.style.width=`${Math.round(f*100)}%`}const h=De.state.escapesLeft;if(W.stars.hidden=De.opts.escapes===0,De.opts.escapes>0&&(W.stars.textContent=h>0?"⭐".repeat(h):"☆",W.stars.setAttribute("aria-label",`${h} escapes left`)),Rn){const d=e.hidden?null:De.nearbySpot(),u=De.tune.hideReach>1;document.body.classList.toggle("is-easy",u);for(const[f,p]of Rn.markers){p.material=e.hidden===f?Rn.markerMat.hidden:d?.id===f?Rn.markerMat.near:Rn.markerMat.idle;const _=d?.id===f&&!Vt.data.settings.reducedMotion?1+.08*Math.sin(performance.now()/160):1;p.scale.setScalar((u?2.2:1)*_)}}}function fS(s,e,t){return t===ln?5.6:t!==Mn?5.65:Pl.some(i=>s>=i.x0&&s<=i.x1&&e>=i.z0&&e<=i.z1)?2.8:5.7}function yf(s){if(requestAnimationFrame(yf),!Qt||!Un)return;const e=Math.min(.1,(s-cs)/1e3);cs=s,Ke+=e,Rt.takePause()&&(ut==="playing"?Jo():ut==="paused"&&vf()),Rt.takeFire()&&$s("fire"),Rt.takeIce()&&$s("ice");let t=1;if(ut==="playing"){const h=Rt.read(e);ui.orbit(h.orbitYaw,h.orbitPitch);const d=ui.basis();let u=d.fx*h.forward+d.rx*h.right,f=d.fz*h.forward+d.rz*h.right;const p=Math.hypot(u,f);p>1&&(u/=p,f/=p),Vn+=e*tl;let _=0;const g=4*tl;for(;Vn>=hn&&_<g;){const m={moveX:u,moveZ:f,interact:_===0?Rt.takeInteract():!1,toggleQuiet:_===0?Rt.takeQuiet():!1};if(ss=ns,De.step(m),ns=Wr(De.state),Xl(De.drainEvents()),Vn-=hn,_++,De.terminal){ut=De.canEscape?"quiz":"ending",tc=0,Cr=0,Rt.enabled=!1,Rt.clear(),Vn=0;break}}_>=g&&(Vn=0),t=ut==="playing"?Math.min(1,Vn/hn):1}else ut==="quiz"?(tc+=e,!ca.isOpen&&tc>1.3&&hS()):ut==="ending"&&(Cr+=e,Cr>1.8&&uS());const n=Vt.data.settings.reducedMotion,i=De.state;Un.update(e,Ke,ss,ns,t,i,n,Or,De.tune);const r=ns.kai,o=ss.kai;let a={x:o.x+(r.x-o.x)*t,y:o.y+(r.y-o.y)*t,z:o.z+(r.z-o.z)*t};if(i.kai.hidden){const h=qt.find(d=>d.id===i.kai.hidden);a={x:h.approach.x,y:xt[h.floor],z:h.approach.z}}const c=i.kai.layer===ln?null:Dl(i.kai.layer===Mn?0:1,i.kai.x,i.kai.z),l=i.kai.layer===ln||!!c&&(c.x1-c.x0)*(c.z1-c.z0)<26;ui.update(e,a,gf.solids,{hidden:!!i.kai.hidden,tight:l,ceilingY:fS(i.kai.x,i.kai.z,i.kai.layer)}),(ut==="playing"||ut==="ending"||ut==="paused")&&dS(),qb(Ke),Kb(Ke),Qt.render(Ci,Or)}for(const s of["gesturestart","gesturechange","gestureend"])document.addEventListener(s,e=>{ut==="playing"&&e.preventDefault()},{passive:!1});document.addEventListener("contextmenu",s=>{ut==="playing"&&s.preventDefault()});document.addEventListener("touchmove",s=>{ut==="playing"&&s.touches.length>1&&s.preventDefault()},{passive:!1});window.addEventListener("pageshow",()=>{cs=performance.now(),Vn=0});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});function Mf(){if(!rS()){tn(W.title,!1),tn(W.glError,!0),W.btnGlRetry.focus();return}tn(W.glError,!1),oS(),Gl()}Xb();Mf();requestAnimationFrame(s=>{cs=s,yf(s)});window.__sah={get game(){return De},get app(){return ut},rig:ui,setSpeed(s){tl=Math.max(1,Math.min(32,s))}};
