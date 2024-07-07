(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="162",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uc=0,Ro=1,Nc=2,Nl=1,Ic=2,sn=3,yn=0,Rt=1,on=2,vn=0,Si=1,Po=2,Lo=3,Do=4,Oc=5,On=100,Fc=101,Bc=102,Uo=103,No=104,zc=200,Hc=201,Gc=202,kc=203,Hs=204,Gs=205,Vc=206,Wc=207,Xc=208,Yc=209,qc=210,jc=211,Kc=212,$c=213,Zc=214,Jc=0,Qc=1,eu=2,Or=3,tu=4,nu=5,iu=6,ru=7,ao=0,su=1,ou=2,xn=0,au=1,lu=2,cu=3,uu=4,hu=5,du=6,fu=7,Il=300,Mi=301,Ei=302,ks=303,Vs=304,Wr=306,Ws=1e3,Gt=1001,Xs=1002,xt=1003,Io=1004,Li=1005,Ct=1006,ns=1007,Bn=1008,Sn=1009,pu=1010,mu=1011,lo=1012,Ol=1013,gn=1014,jt=1015,ji=1016,Fl=1017,Bl=1018,zn=1020,_u=1021,kt=1023,gu=1024,vu=1025,Hn=1026,bi=1027,zl=1028,Hl=1029,xu=1030,Gl=1031,kl=1033,is=33776,rs=33777,ss=33778,os=33779,Oo=35840,Fo=35841,Bo=35842,zo=35843,Vl=36196,Ho=37492,Go=37496,ko=37808,Vo=37809,Wo=37810,Xo=37811,Yo=37812,qo=37813,jo=37814,Ko=37815,$o=37816,Zo=37817,Jo=37818,Qo=37819,ea=37820,ta=37821,as=36492,na=36494,ia=36495,Su=36283,ra=36284,sa=36285,oa=36286,yu=3200,Mu=3201,Wl=0,Eu=1,_n="",Yt="srgb",En="srgb-linear",co="display-p3",Xr="display-p3-linear",Fr="linear",it="srgb",Br="rec709",zr="p3",$n=7680,aa=519,bu=512,Tu=513,Au=514,Xl=515,wu=516,Cu=517,Ru=518,Pu=519,la=35044,ca="300 es",Ys=1035,an=2e3,Hr=2001;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ua=1234567;const Gi=Math.PI/180,Ti=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function uo(i,e){return(i%e+e)%e}function Lu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Du(i,e,t){return i!==e?(t-i)/(e-i):0}function ki(i,e,t){return(1-t)*i+t*e}function Uu(i,e,t,n){return ki(i,e,1-Math.exp(-t*n))}function Nu(i,e=1){return e-Math.abs(uo(i,e*2)-e)}function Iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ou(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bu(i,e){return i+Math.random()*(e-i)}function zu(i){return i*(.5-Math.random())}function Hu(i){i!==void 0&&(ua=i);let e=ua+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gu(i){return i*Gi}function ku(i){return i*Ti}function qs(i){return(i&i-1)===0&&i!==0}function Vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xu={DEG2RAD:Gi,RAD2DEG:Ti,generateUUID:Xn,clamp:_t,euclideanModulo:uo,mapLinear:Lu,inverseLerp:Du,lerp:ki,damp:Uu,pingpong:Nu,smoothstep:Iu,smootherstep:Ou,randInt:Fu,randFloat:Bu,randFloatSpread:zu,seededRandom:Hu,degToRad:Gu,radToDeg:ku,isPowerOfTwo:qs,ceilPowerOfTwo:Vu,floorPowerOfTwo:Gr,setQuaternionFromProperEuler:Wu,normalize:At,denormalize:fi};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],S=r[0],p=r[3],f=r[6],E=r[1],g=r[4],M=r[7],P=r[2],C=r[5],A=r[8];return s[0]=a*S+o*E+l*P,s[3]=a*p+o*g+l*C,s[6]=a*f+o*M+l*A,s[1]=c*S+u*E+h*P,s[4]=c*p+u*g+h*C,s[7]=c*f+u*M+h*A,s[2]=d*S+m*E+_*P,s[5]=d*p+m*g+_*C,s[8]=d*f+m*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-u*n)*S,e[2]=(o*n-r*a)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new We;function Yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){const i=Ki("canvas");return i.style.display="block",i}const ha={};function qu(i){i in ha||(ha[i]=!0,console.warn(i))}const da=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fa=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[En]:{transfer:Fr,primaries:Br,toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:it,primaries:Br,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xr]:{transfer:Fr,primaries:zr,toReference:i=>i.applyMatrix3(fa),fromReference:i=>i.applyMatrix3(da)},[co]:{transfer:it,primaries:zr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fa),fromReference:i=>i.applyMatrix3(da).convertLinearToSRGB()}},ju=new Set([En,Xr]),Ze={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ju.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=rr[e].toReference,r=rr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return rr[i].primaries},getTransfer:function(i){return i===_n?Fr:rr[i].transfer}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Ki("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ku=0;class jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(us(r[a].image)):s.push(us(r[a]))}else s=us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $u=0;class Tt extends Wn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Gt,r=Gt,s=Ct,a=Bn,o=kt,l=Sn,c=Tt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Xn(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Il;Tt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(f+1)/2,C=(u+d)/4,A=(h+S)/4,N=(_+p)/4;return g>M&&g>P?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=C/n,s=A/n):M>P?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=N/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=N/s),this.set(n,r,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(h-S)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends Wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ju extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=S;return}if(h!==S||l!==d||c!==m||u!==_){let p=1-o;const f=l*d+c*m+u*_+h*S,E=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,f*E);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const M=o*E;if(l=l*p+d*M,c=c*p+m*M,u=u*p+_*M,h=h*p+S*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-o*m,e[t+2]=c*_+u*m+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new D,pa=new kn;class Yn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(s,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),or.subVectors(this.max,Di),Jn.subVectors(e.a,Di),Qn.subVectors(e.b,Di),ei.subVectors(e.c,Di),cn.subVectors(Qn,Jn),un.subVectors(ei,Qn),Rn.subVectors(Jn,ei);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Rn.z,Rn.y,cn.z,0,-cn.x,un.z,0,-un.x,Rn.z,0,-Rn.x,-cn.y,cn.x,0,-un.y,un.x,0,-Rn.y,Rn.x,0];return!ds(t,Jn,Qn,ei,or)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,Jn,Qn,ei,or))?!1:(ar.crossVectors(cn,un),t=[ar.x,ar.y,ar.z],ds(t,Jn,Qn,ei,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new D,new D,new D,new D,new D,new D,new D,new D],Bt=new D,sr=new Yn,Jn=new D,Qn=new D,ei=new D,cn=new D,un=new D,Rn=new D,Di=new D,or=new D,ar=new D,Pn=new D;function ds(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pn.fromArray(i,s);const o=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),u=n.dot(Pn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qu=new Yn,Ui=new D,fs=new D;class wi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ui,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(fs)),this.expandByPoint(Ui.copy(e.center).sub(fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new D,ps=new D,lr=new D,hn=new D,ms=new D,cr=new D,_s=new D;class Yr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ps.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(ps);const s=e.distanceTo(t)*.5,a=-this.direction.dot(lr),o=hn.dot(this.direction),l=-hn.dot(lr),c=hn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const S=1/u;h*=S,d*=S,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ps).addScaledVector(lr,d),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),r=en.dot(en)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,r,s){ms.subVectors(t,e),cr.subVectors(n,e),_s.crossVectors(ms,cr);let a=this.direction.dot(_s),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);const l=o*this.direction.dot(cr.crossVectors(hn,cr));if(l<0)return null;const c=o*this.direction.dot(ms.cross(hn));if(c<0||l+c>a)return null;const u=-o*hn.dot(_s);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,a,o,l,c,u,h,d,m,_,S,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,S,p)}set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,S,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,S=c*h;t[0]=d+S*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,S=c*h;t[0]=d-S*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+S,t[1]=l*h,t[5]=S*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+S,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eh,e,th)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),dn.crossVectors(n,Lt),dn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),dn.crossVectors(n,Lt)),dn.normalize(),ur.crossVectors(Lt,dn),r[0]=dn.x,r[4]=ur.x,r[8]=Lt.x,r[1]=dn.y,r[5]=ur.y,r[9]=Lt.y,r[2]=dn.z,r[6]=ur.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],S=n[6],p=n[10],f=n[14],E=n[3],g=n[7],M=n[11],P=n[15],C=r[0],A=r[4],N=r[8],W=r[12],v=r[1],T=r[5],Z=r[9],J=r[13],U=r[2],X=r[6],z=r[10],$=r[14],q=r[3],j=r[7],oe=r[11],ae=r[15];return s[0]=a*C+o*v+l*U+c*q,s[4]=a*A+o*T+l*X+c*j,s[8]=a*N+o*Z+l*z+c*oe,s[12]=a*W+o*J+l*$+c*ae,s[1]=u*C+h*v+d*U+m*q,s[5]=u*A+h*T+d*X+m*j,s[9]=u*N+h*Z+d*z+m*oe,s[13]=u*W+h*J+d*$+m*ae,s[2]=_*C+S*v+p*U+f*q,s[6]=_*A+S*T+p*X+f*j,s[10]=_*N+S*Z+p*z+f*oe,s[14]=_*W+S*J+p*$+f*ae,s[3]=E*C+g*v+M*U+P*q,s[7]=E*A+g*T+M*X+P*j,s[11]=E*N+g*Z+M*z+P*oe,s[15]=E*W+g*J+M*$+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],S=e[7],p=e[11],f=e[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+S*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],S=e[13],p=e[14],f=e[15],E=h*p*c-S*d*c+S*l*m-o*p*m-h*l*f+o*d*f,g=_*d*c-u*p*c-_*l*m+a*p*m+u*l*f-a*d*f,M=u*S*c-_*h*c+_*o*m-a*S*m-u*o*f+a*h*f,P=_*h*l-u*S*l-_*o*d+a*S*d+u*o*p-a*h*p,C=t*E+n*g+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(S*d*s-h*p*s-S*r*m+n*p*m+h*r*f-n*d*f)*A,e[2]=(o*p*s-S*l*s+S*r*c-n*p*c-o*r*f+n*l*f)*A,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*A,e[4]=g*A,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*f+t*d*f)*A,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*f-t*l*f)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=M*A,e[9]=(_*h*s-u*S*s-_*n*m+t*S*m+u*n*f-t*h*f)*A,e[10]=(a*S*s-_*o*s+_*n*c-t*S*c-a*n*f+t*o*f)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*A,e[12]=P*A,e[13]=(u*S*r-_*h*r+_*n*d-t*S*d-u*n*p+t*h*p)*A,e[14]=(_*o*r-a*S*r-_*n*l+t*S*l+a*n*p-t*o*p)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,S=a*u,p=a*h,f=o*h,E=l*c,g=l*u,M=l*h,P=n.x,C=n.y,A=n.z;return r[0]=(1-(S+f))*P,r[1]=(m+M)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+f))*C,r[6]=(p+E)*C,r[7]=0,r[8]=(_+g)*A,r[9]=(p-E)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const a=ti.set(r[4],r[5],r[6]).length(),o=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const c=1/s,u=1/a,h=1/o;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=an){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===an)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Hr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*u;let _,S;if(o===an)_=(a+s)*h,S=-2*h;else if(o===Hr)_=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new D,zt=new Qe,eh=new D(0,0,0),th=new D(1,1,1),dn=new D,ur=new D,Lt=new D,ma=new Qe,_a=new kn;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const ga=new D,ni=new kn,tn=new Qe,hr=new D,Ni=new D,ih=new D,rh=new kn,va=new D(1,0,0),xa=new D(0,1,0),Sa=new D(0,0,1),sh={type:"added"},oh={type:"removed"},gs={type:"childadded",child:null},vs={type:"childremoved",child:null};class ct extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new D,t=new $t,n=new kn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new We}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(va,e)}rotateY(e){return this.rotateOnAxis(xa,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(va,e)}translateY(e){return this.translateOnAxis(xa,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ni,hr,this.up):tn.lookAt(hr,Ni,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(tn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sh),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),vs.child=e,this.dispatchEvent(vs),vs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ct.DEFAULT_UP=new D(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new D,nn=new D,xs=new D,rn=new D,ii=new D,ri=new D,ya=new D,Ss=new D,ys=new D,Ms=new D;class Kt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),nn.subVectors(n,t),xs.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(nn),l=Ht.dot(xs),c=nn.dot(nn),u=nn.dot(xs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l)}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),nn.subVectors(e,t),Ht.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ht.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ii.subVectors(r,n),ri.subVectors(s,n),Ss.subVectors(e,n);const l=ii.dot(Ss),c=ri.dot(Ss);if(l<=0&&c<=0)return t.copy(n);ys.subVectors(e,r);const u=ii.dot(ys),h=ri.dot(ys);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ii,a);Ms.subVectors(e,s);const m=ii.dot(Ms),_=ri.dot(Ms);if(_>=0&&m<=_)return t.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ri,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return ya.subVectors(s,r),o=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(ya,o);const f=1/(p+S+d);return a=S*f,o=d*f,t.copy(n).addScaledVector(ii,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=uo(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Es(a,s,e+1/3),this.g=Es(a,s,e),this.b=Es(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=$l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.fromWorkingColorSpace(bt.copy(this),e),Math.round(_t(bt.r*255,0,255))*65536+Math.round(_t(bt.g*255,0,255))*256+Math.round(_t(bt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Yt){Ze.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(dr);const n=ki(fn.h,dr.h,t),r=ki(fn.s,dr.s,t),s=ki(fn.l,dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const bt=new qe;qe.NAMES=$l;let ah=0;class Ci extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Si,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fo extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new D,fr=new le;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class Zl extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jl extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lh=0;const Nt=new Qe,bs=new ct,si=new D,Dt=new Yn,Ii=new Yn,mt=new D;class St extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)?Jl:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,Ii.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Ii.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Ii.min),Dt.expandByPoint(Ii.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(si.fromBufferAttribute(e,c),mt.add(si)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;const c=new D,u=new D,h=new D,d=new le,m=new le,_=new le,S=new D,p=new D;function f(N,W,v){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,W),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,W),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(T),o[N].add(S),o[W].add(S),o[v].add(S),l[N].add(p),l[W].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,W=E.length;N<W;++N){const v=E[N],T=v.start,Z=v.count;for(let J=T,U=T+Z;J<U;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const g=new D,M=new D,P=new D,C=new D;function A(N){P.fromBufferAttribute(r,N),C.copy(P);const W=o[N];g.copy(W),g.sub(P.multiplyScalar(P.dot(W))).normalize(),M.crossVectors(C,W);const T=M.dot(l[N])<0?-1:1;a.setXYZW(N,g.x,g.y,g.z,T)}for(let N=0,W=E.length;N<W;++N){const v=E[N],T=v.start,Z=v.count;for(let J=T,U=T+Z;J<U;J+=3)A(e.getX(J+0)),A(e.getX(J+1)),A(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new Qe,Ln=new Yr,pr=new wi,Ea=new D,oi=new D,ai=new D,li=new D,Ts=new D,mr=new D,_r=new le,gr=new le,vr=new le,ba=new D,Ta=new D,Aa=new D,xr=new D,Sr=new D;class Ot extends ct{constructor(e=new St,t=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ts.fromBufferAttribute(h,e),a?mr.addScaledVector(Ts,u):mr.addScaledVector(Ts.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Ln.copy(e.ray).recast(e.near),!(pr.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(pr,Ea)===null||Ln.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(Ma.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=g;M<P;M+=3){const C=o.getX(M),A=o.getX(M+1),N=o.getX(M+2);r=yr(this,f,e,n,c,u,h,C,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){const E=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=yr(this,a,e,n,c,u,h,E,g,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,P=g;M<P;M+=3){const C=M,A=M+1,N=M+2;r=yr(this,f,e,n,c,u,h,C,A,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){const E=p,g=p+1,M=p+2;r=yr(this,a,e,n,c,u,h,E,g,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ch(i,e,t,n,r,s,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===yn,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function yr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,oi),i.getVertexPosition(l,ai),i.getVertexPosition(c,li);const u=ch(i,e,t,n,oi,ai,li,xr);if(u){r&&(_r.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),u.uv=Kt.getInterpolation(xr,oi,ai,li,_r,gr,vr,new le)),s&&(_r.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),u.uv1=Kt.getInterpolation(xr,oi,ai,li,_r,gr,vr,new le)),a&&(ba.fromBufferAttribute(a,o),Ta.fromBufferAttribute(a,l),Aa.fromBufferAttribute(a,c),u.normal=Kt.getInterpolation(xr,oi,ai,li,ba,Ta,Aa,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};Kt.getNormal(oi,ai,li,h.normal),u.face=h}return u}class er extends St{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function _(S,p,f,E,g,M,P,C,A,N,W){const v=M/A,T=P/N,Z=M/2,J=P/2,U=C/2,X=A+1,z=N+1;let $=0,q=0;const j=new D;for(let oe=0;oe<z;oe++){const ae=oe*T-J;for(let xe=0;xe<X;xe++){const Ne=xe*v-Z;j[S]=Ne*E,j[p]=ae*g,j[f]=U,c.push(j.x,j.y,j.z),j[S]=0,j[p]=0,j[f]=C>0?1:-1,u.push(j.x,j.y,j.z),h.push(xe/A),h.push(1-oe/N),$+=1}}for(let oe=0;oe<N;oe++)for(let ae=0;ae<A;ae++){const xe=d+ae+X*oe,Ne=d+ae+X*(oe+1),k=d+(ae+1)+X*(oe+1),ie=d+(ae+1)+X*oe;l.push(xe,Ne,ie),l.push(Ne,k,ie),q+=6}o.addGroup(m,q,W),m+=q,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const r in n)e[r]=n[r]}return e}function uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ql(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}const hh={clone:Ai,merge:wt};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ec extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new D,wa=new le,Ca=new le;class It extends ec{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ti*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ti*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,wa,Ca),t.subVectors(Ca,wa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,ui=1;class ph extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(ci,ui,e,t);r.layers=this.layers,this.add(r);const s=new It(ci,ui,e,t);s.layers=this.layers,this.add(s);const a=new It(ci,ui,e,t);a.layers=this.layers,this.add(a);const o=new It(ci,ui,e,t);o.layers=this.layers,this.add(o);const l=new It(ci,ui,e,t);l.layers=this.layers,this.add(l);const c=new It(ci,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tc extends Tt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mh extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new er(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:vn});s.uniforms.tEquirect.value=t;const a=new Ot(r,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Ct),new ph(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const As=new D,_h=new D,gh=new We;class mn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=As.subVectors(n,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(As),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gh.getNormalMatrix(e),r=this.coplanarPoint(As).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new wi,Mr=new D;class po{constructor(e=new mn,t=new mn,n=new mn,r=new mn,s=new mn,a=new mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],S=r[10],p=r[11],f=r[12],E=r[13],g=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-m,M-f).normalize(),n[1].setComponents(l+s,d+c,p+m,M+f).normalize(),n[2].setComponents(l+a,d+u,p+_,M+E).normalize(),n[3].setComponents(l-a,d-u,p-_,M-E).normalize(),n[4].setComponents(l-o,d-h,p-S,M-g).normalize(),t===an)n[5].setComponents(l+o,d+h,p+S,M+g).normalize();else if(t===Hr)n[5].setComponents(o,h,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,d),c.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&_.length===0&&i.bufferSubData(h,0,d),_.length!==0){for(let S=0,p=_.length;S<p;S++){const f=_[S];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class qr extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],_=[],S=[],p=[];for(let f=0;f<u;f++){const E=f*d-a;for(let g=0;g<c;g++){const M=g*h-s;_.push(M,-E,0),S.push(0,0,1),p.push(g/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const g=E+c*f,M=E+c*(f+1),P=E+1+c*(f+1),C=E+1+c*f;m.push(g,M,C),m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(S,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sh=`#ifdef USE_ALPHAHASH
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
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Th=`#ifdef USE_AOMAP
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
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dh=`#ifdef USE_IRIDESCENCE
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
#endif`,Uh=`#ifdef USE_BUMPMAP
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,xd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ud=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Cf=`#define DISTANCE
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
}`,Rf=`#define DISTANCE
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,If=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define MATCAP
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
}`,Hf=`#define NORMAL
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
}`,Gf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Vf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
}`,Yf=`#define TOON
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
}`,qf=`#define TOON
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
}`,jf=`uniform float size;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,Jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:xh,alphahash_pars_fragment:Sh,alphamap_fragment:yh,alphamap_pars_fragment:Mh,alphatest_fragment:Eh,alphatest_pars_fragment:bh,aomap_fragment:Th,aomap_pars_fragment:Ah,batching_pars_vertex:wh,batching_vertex:Ch,begin_vertex:Rh,beginnormal_vertex:Ph,bsdfs:Lh,iridescence_fragment:Dh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Nh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Oh,clipping_planes_vertex:Fh,color_fragment:Bh,color_pars_fragment:zh,color_pars_vertex:Hh,color_vertex:Gh,common:kh,cube_uv_reflection_fragment:Vh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Xh,displacementmap_vertex:Yh,emissivemap_fragment:qh,emissivemap_pars_fragment:jh,colorspace_fragment:Kh,colorspace_pars_fragment:$h,envmap_fragment:Zh,envmap_common_pars_fragment:Jh,envmap_pars_fragment:Qh,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:rd,fog_pars_fragment:sd,gradientmap_pars_fragment:od,lightmap_fragment:ad,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:ud,lights_pars_begin:hd,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:_d,lights_physical_fragment:gd,lights_physical_pars_fragment:vd,lights_fragment_begin:xd,lights_fragment_maps:Sd,lights_fragment_end:yd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Td,map_fragment:Ad,map_pars_fragment:wd,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Ud,morphnormal_vertex:Nd,morphtarget_pars_vertex:Id,morphtarget_vertex:Od,normal_fragment_begin:Fd,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:Hd,normal_vertex:Gd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:Yd,opaque_fragment:qd,packing:jd,premultiplied_alpha_fragment:Kd,project_vertex:$d,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:nf,shadowmap_vertex:rf,shadowmask_pars_fragment:sf,skinbase_vertex:of,skinning_pars_vertex:af,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:_f,uv_pars_vertex:gf,uv_vertex:vf,worldpos_vertex:xf,background_vert:Sf,background_frag:yf,backgroundCube_vert:Mf,backgroundCube_frag:Ef,cube_vert:bf,cube_frag:Tf,depth_vert:Af,depth_frag:wf,distanceRGBA_vert:Cf,distanceRGBA_frag:Rf,equirect_vert:Pf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:Uf,meshbasic_vert:Nf,meshbasic_frag:If,meshlambert_vert:Of,meshlambert_frag:Ff,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:Hf,meshnormal_frag:Gf,meshphong_vert:kf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:Yf,meshtoon_frag:qf,points_vert:jf,points_frag:Kf,shadow_vert:$f,shadow_frag:Zf,sprite_vert:Jf,sprite_frag:Qf},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qt={basic:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:wt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:wt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:wt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:wt([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:wt([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qt.physical={uniforms:wt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Er={r:0,b:0,g:0},Un=new $t,ep=new Qe;function tp(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(p,f){let E=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?S(o,l):g&&g.isColor&&(S(g,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Wr)?(u===void 0&&(u=new Ot(new er(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ai(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Un.copy(f.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Un)),u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==it,(h!==g||d!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ot(new qr(2,2),new ln({name:"BackgroundMaterial",uniforms:Ai(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function S(p,f){p.getRGB(Er,Ql(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,S(o,l)},render:_}}function np(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(U,X,z,$,q){let j=!1;if(a){const oe=S($,z,X);c!==oe&&(c=oe,m(c.object)),j=f(U,$,z,q),j&&E(U,$,z,q)}else{const oe=X.wireframe===!0;(c.geometry!==$.id||c.program!==z.id||c.wireframe!==oe)&&(c.geometry=$.id,c.program=z.id,c.wireframe=oe,j=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,N(U,X,z,$),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function S(U,X,z){const $=z.wireframe===!0;let q=o[U.id];q===void 0&&(q={},o[U.id]=q);let j=q[X.id];j===void 0&&(j={},q[X.id]=j);let oe=j[$];return oe===void 0&&(oe=p(d()),j[$]=oe),oe}function p(U){const X=[],z=[],$=[];for(let q=0;q<r;q++)X[q]=0,z[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:$,object:U,attributes:{},index:null}}function f(U,X,z,$){const q=c.attributes,j=X.attributes;let oe=0;const ae=z.getAttributes();for(const xe in ae)if(ae[xe].location>=0){const k=q[xe];let ie=j[xe];if(ie===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),k===void 0||k.attribute!==ie||ie&&k.data!==ie.data)return!0;oe++}return c.attributesNum!==oe||c.index!==$}function E(U,X,z,$){const q={},j=X.attributes;let oe=0;const ae=z.getAttributes();for(const xe in ae)if(ae[xe].location>=0){let k=j[xe];k===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(k=U.instanceColor));const ie={};ie.attribute=k,k&&k.data&&(ie.data=k.data),q[xe]=ie,oe++}c.attributes=q,c.attributesNum=oe,c.index=$}function g(){const U=c.newAttributes;for(let X=0,z=U.length;X<z;X++)U[X]=0}function M(U){P(U,0)}function P(U,X){const z=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;z[U]=1,$[U]===0&&(i.enableVertexAttribArray(U),$[U]=1),q[U]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,X),q[U]=X)}function C(){const U=c.newAttributes,X=c.enabledAttributes;for(let z=0,$=X.length;z<$;z++)X[z]!==U[z]&&(i.disableVertexAttribArray(z),X[z]=0)}function A(U,X,z,$,q,j,oe){oe===!0?i.vertexAttribIPointer(U,X,z,q,j):i.vertexAttribPointer(U,X,z,$,q,j)}function N(U,X,z,$){if(n.isWebGL2===!1&&(U.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const q=$.attributes,j=z.getAttributes(),oe=X.defaultAttributeValues;for(const ae in j){const xe=j[ae];if(xe.location>=0){let Ne=q[ae];if(Ne===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(Ne=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(Ne=U.instanceColor)),Ne!==void 0){const k=Ne.normalized,ie=Ne.itemSize,ve=t.get(Ne);if(ve===void 0)continue;const Re=ve.buffer,Ae=ve.type,Me=ve.bytesPerElement,Be=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||Ne.gpuType===Ol);if(Ne.isInterleavedBufferAttribute){const we=Ne.data,R=we.stride,de=Ne.offset;if(we.isInstancedInterleavedBuffer){for(let K=0;K<xe.locationSize;K++)P(xe.location+K,we.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let K=0;K<xe.locationSize;K++)M(xe.location+K);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let K=0;K<xe.locationSize;K++)A(xe.location+K,ie/xe.locationSize,Ae,k,R*Me,(de+ie/xe.locationSize*K)*Me,Be)}else{if(Ne.isInstancedBufferAttribute){for(let we=0;we<xe.locationSize;we++)P(xe.location+we,Ne.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let we=0;we<xe.locationSize;we++)M(xe.location+we);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let we=0;we<xe.locationSize;we++)A(xe.location+we,ie/xe.locationSize,Ae,k,ie*Me,ie/xe.locationSize*we*Me,Be)}}else if(oe!==void 0){const k=oe[ae];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(xe.location,k);break;case 3:i.vertexAttrib3fv(xe.location,k);break;case 4:i.vertexAttrib4fv(xe.location,k);break;default:i.vertexAttrib1fv(xe.location,k)}}}}C()}function W(){Z();for(const U in o){const X=o[U];for(const z in X){const $=X[z];for(const q in $)_($[q].object),delete $[q];delete X[z]}delete o[U]}}function v(U){if(o[U.id]===void 0)return;const X=o[U.id];for(const z in X){const $=X[z];for(const q in $)_($[q].object),delete $[q];delete X[z]}delete o[U.id]}function T(U){for(const X in o){const z=o[X];if(z[U.id]===void 0)continue;const $=z[U.id];for(const q in $)_($[q].object),delete $[q];delete z[U.id]}}function Z(){J(),u=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:J,dispose:W,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:M,disableUnusedAttributes:C}}function ip(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,_;if(r)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=h[S];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function rp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,M=a||e.has("OES_texture_float"),P=g&&M,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:C}}function sp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new mn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,g=E*4;let M=f.clippingState||null;l.value=M,M=u(_,d,g,m);for(let P=0;P!==g;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const f=m+S*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,M=m;g!==S;++g,M+=4)a.copy(h[g]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function op(i){let e=new WeakMap;function t(a,o){return o===ks?a.mapping=Mi:o===Vs&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ks||o===Vs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ic extends ec{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,Ra=[.125,.215,.35,.446,.526,.582],Fn=20,ws=new ic,Pa=new qe;let Cs=null,Rs=0,Ps=0;const In=(1+Math.sqrt(5))/2,hi=1/In,La=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,In,hi),new D(0,In,-hi),new D(hi,0,In),new D(-hi,0,In),new D(In,hi,0),new D(-In,hi,0)];class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Cs=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs,Rs,Ps),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ji,format:kt,colorSpace:En,depthBuffer:!1},r=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(s)),this._blurMaterial=lp(s,e,t)}return r}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Pa),u.toneMapping=xn,u.autoClear=!1;const m=new fo({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Ot(new er,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(Pa),S=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;br(r,E*g,f>2?g:0,g,g),u.setRenderTarget(r),S&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=La[(r-1)%La.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),S=s/_,p=isFinite(s)?1+Math.floor(u*S):Fn;p>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const f=[];let E=0;for(let A=0;A<Fn;++A){const N=A/S,W=Math.exp(-N*N/2);f.push(W),A===0?E+=W:A<p&&(E+=2*W)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-n;const M=this._sizeLods[r],P=3*M*(r>g-_i?r-g+_i:0),C=4*(this._cubeSize-M);br(t,P,C,3*M,2*M),l.setRenderTarget(t),l.render(h,ws)}}function ap(i){const e=[],t=[],n=[];let r=i;const s=i-_i+1+Ra.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-_i?l=Ra[a-i+_i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,S=3,p=2,f=1,E=new Float32Array(S*_*m),g=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,W=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];E.set(W,S*_*C),g.set(d,p*_*C);const v=[C,C,C,C,C,C];M.set(v,f*_*C)}const P=new St;P.setAttribute("position",new Ft(E,S)),P.setAttribute("uv",new Ft(g,p)),P.setAttribute("faceIndex",new Ft(M,f)),e.push(P),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ua(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lp(i,e,t){const n=new Float32Array(Fn),r=new D(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mo(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Na(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ia(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function mo(){return`

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
	`}function cp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ks||l===Vs,u=l===Mi||l===Ei;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Da(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Da(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hp(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const S=d.morphAttributes[_];for(let p=0,f=S.length;p<f;p++)e.remove(S[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const S=m[_];for(let p=0,f=S.length;p<f;p++)e.update(S[p],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let S=0;if(m!==null){const E=m.array;S=m.version;for(let g=0,M=E.length;g<M;g+=3){const P=E[g+0],C=E[g+1],A=E[g+2];d.push(P,C,C,A,A,P)}}else if(_!==void 0){const E=_.array;S=_.version;for(let g=0,M=E.length/3-1;g<M;g+=3){const P=g+0,C=g+1,A=g+2;d.push(P,C,C,A,A,P)}}else return;const p=new(Yl(d)?Jl:Zl)(d,1);p.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dp(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(s,_,o,m*l),t.update(_,s,1)}function h(m,_,S){if(S===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,_,o,m*l,S),t.update(_,s,S)}function d(m,_,S){if(S===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<S;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,S);let f=0;for(let E=0;E<S;E++)f+=_[E];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function fp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pp(i,e){return i[0]-e[0]}function mp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _p(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let S=s.get(u);if(S===void 0||S.count!==_){let Z=function(){v.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};S!==void 0&&S.texture.dispose();const p=u.morphAttributes.position!==void 0,f=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let C=0;p===!0&&(C=1),f===!0&&(C=2),E===!0&&(C=3);let A=u.attributes.position.count*C,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const W=new Float32Array(A*N*4*_),v=new Kl(W,A,N,_);v.type=jt,v.needsUpdate=!0;const T=C*4;for(let J=0;J<_;J++){const U=g[J],X=M[J],z=P[J],$=A*N*4*J;for(let q=0;q<U.count;q++){const j=q*T;p===!0&&(a.fromBufferAttribute(U,q),W[$+j+0]=a.x,W[$+j+1]=a.y,W[$+j+2]=a.z,W[$+j+3]=0),f===!0&&(a.fromBufferAttribute(X,q),W[$+j+4]=a.x,W[$+j+5]=a.y,W[$+j+6]=a.z,W[$+j+7]=0),E===!0&&(a.fromBufferAttribute(z,q),W[$+j+8]=a.x,W[$+j+9]=a.y,W[$+j+10]=a.z,W[$+j+11]=z.itemSize===4?a.w:1)}}S={count:_,texture:v,size:new le(A,N)},s.set(u,S),u.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let p=0;for(let E=0;E<d.length;E++)p+=d[E];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const m=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let g=0;g<m;g++)_[g]=[g,0];n[u.id]=_}for(let g=0;g<m;g++){const M=_[g];M[0]=g,M[1]=d[g]}_.sort(mp);for(let g=0;g<8;g++)g<m&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(pp);const S=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const M=o[g],P=M[0],C=M[1];P!==Number.MAX_SAFE_INTEGER&&C?(S&&u.getAttribute("morphTarget"+g)!==S[P]&&u.setAttribute("morphTarget"+g,S[P]),p&&u.getAttribute("morphNormal"+g)!==p[P]&&u.setAttribute("morphNormal"+g,p[P]),r[g]=C,f+=C):(S&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function gp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class rc extends Tt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Hn,u!==Hn&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hn&&(n=gn),n===void 0&&u===bi&&(n=zn),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sc=new Tt,oc=new rc(1,1);oc.compareFunction=Xl;const ac=new Kl,lc=new Ju,cc=new tc,Oa=[],Fa=[],Ba=new Float32Array(16),za=new Float32Array(9),Ha=new Float32Array(4);function Ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oa[r];if(s===void 0&&(s=new Float32Array(r),Oa[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ha.set(n),i.uniformMatrix2fv(this.addr,!1,Ha),ft(t,n)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;za.set(n),i.uniformMatrix3fv(this.addr,!1,za),ft(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ba.set(n),i.uniformMatrix4fv(this.addr,!1,Ba),ft(t,n)}}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?oc:sc;t.setTexture2D(e||s,r)}function Np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lc,r)}function Ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cc,r)}function Op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ac,r)}function Fp(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Sp;case 35666:return yp;case 35674:return Mp;case 35675:return Ep;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return wp;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Op}}function Bp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){const t=Ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){const t=Ri(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=Ri(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){const t=Ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vp(i,e){const t=Ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wp(i,e){const t=Ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function qp(i,e){i.uniform3iv(this.addr,e)}function jp(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Zp(i,e){i.uniform3uiv(this.addr,e)}function Jp(i,e){i.uniform4uiv(this.addr,e)}function Qp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sc,s[a])}function em(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lc,s[a])}function tm(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cc,s[a])}function nm(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ac,s[a])}function im(i){switch(i){case 5126:return Bp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return kp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return Yp;case 35668:case 35672:return qp;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return $p;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}class rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=im(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function Ga(i,e){i.seq.push(e),i.map[e.id]=e}function am(i,e,t){const n=i.name,r=n.length;for(Ls.lastIndex=0;;){const s=Ls.exec(n),a=Ls.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ga(t,c===void 0?new rm(o,i,e):new sm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new om(o),Ga(t,h)),t=h}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);am(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lm=37297;let cm=0;function um(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function hm(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===zr&&t===Br?n="LinearDisplayP3ToLinearSRGB":e===Br&&t===zr&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case Xr:return[n,"LinearTransferOETF"];case Yt:case co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Va(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+um(i.getShaderSource(e),a)}else return r}function dm(i,e){const t=hm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fm(i,e){let t;switch(e){case au:t="Linear";break;case lu:t="Reinhard";break;case cu:t="OptimizedCineon";break;case uu:t="ACESFilmic";break;case du:t="AgX";break;case fu:t="Neutral";break;case hu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gi).join(`
`)}function _m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gi(i){return i!==""}function Wa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(vm,Sm)}const xm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(i,e){let t=Ve[e];if(t===void 0){const n=xm.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(i){return i.replace(ym,Mm)}function Mm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Em(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Ei:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Am(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ao:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ou:e="ENVMAP_BLENDING_ADD";break}return e}function wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Em(t),c=bm(t),u=Tm(t),h=Am(t),d=wm(t),m=t.isWebGL2?"":pm(t),_=mm(t),S=_m(s),p=r.createProgram();let f,E,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(gi).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(gi).join(`
`),E.length>0&&(E+=`
`)):(f=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),E=[m,qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==xn?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),a=js(a),a=Wa(a,t),a=Xa(a,t),o=js(o),o=Wa(o,t),o=Xa(o,t),a=Ya(a),o=Ya(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const M=g+f+a,P=g+E+o,C=ka(r,r.VERTEX_SHADER,M),A=ka(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(Z){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(A).trim();let z=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,A);else{const q=Va(r,C,"vertex"),j=Va(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+J+`
`+q+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(U===""||X==="")&&($=!1);$&&(Z.diagnostics={runnable:z,programLog:J,vertexShader:{log:U,prefix:f},fragmentShader:{log:X,prefix:E}})}r.deleteShader(C),r.deleteShader(A),W=new Ir(r,p),v=gm(r,p)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,lm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Rm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lm(e),t.set(e,n)),n}}class Lm{constructor(e){this.id=Rm++,this.code=e,this.usedTimes=0}}function Dm(i,e,t,n,r,s,a){const o=new ho,l=new Pm,c=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,T,Z,J,U){const X=J.fog,z=U.geometry,$=v.isMeshStandardMaterial?J.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),j=q&&q.mapping===Wr?q.image.height:null,oe=S[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=ae!==void 0?ae.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let k,ie,ve,Re;if(oe){const $e=qt[oe];k=$e.vertexShader,ie=$e.fragmentShader}else k=v.vertexShader,ie=v.fragmentShader,l.update(v),ve=l.getVertexShaderID(v),Re=l.getFragmentShaderID(v);const Ae=i.getRenderTarget(),Me=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,we=!!v.map,R=!!v.matcap,de=!!q,K=!!v.aoMap,ue=!!v.lightMap,te=!!v.bumpMap,Se=!!v.normalMap,ge=!!v.displacementMap,Ee=!!v.emissiveMap,He=!!v.metalnessMap,b=!!v.roughnessMap,x=v.anisotropy>0,V=v.clearcoat>0,Y=v.iridescence>0,re=v.sheen>0,ne=v.transmission>0,Ie=x&&!!v.anisotropyMap,De=V&&!!v.clearcoatMap,fe=V&&!!v.clearcoatNormalMap,me=V&&!!v.clearcoatRoughnessMap,Oe=Y&&!!v.iridescenceMap,he=Y&&!!v.iridescenceThicknessMap,at=re&&!!v.sheenColorMap,Xe=re&&!!v.sheenRoughnessMap,Le=!!v.specularMap,be=!!v.specularColorMap,Ce=!!v.specularIntensityMap,w=ne&&!!v.transmissionMap,Q=ne&&!!v.thicknessMap,Te=!!v.gradientMap,L=!!v.alphaMap,ce=v.alphaTest>0,O=!!v.alphaHash,se=!!v.extensions;let _e=xn;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(_e=i.toneMapping);const je={isWebGL2:h,shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:ie,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Be,instancing:Me,instancingColor:Me&&U.instanceColor!==null,instancingMorph:Me&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:En,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:R,envMap:de,envMapMode:de&&q.mapping,envMapCubeUVHeight:j,aoMap:K,lightMap:ue,bumpMap:te,normalMap:Se,displacementMap:m&&ge,emissiveMap:Ee,normalMapObjectSpace:Se&&v.normalMapType===Eu,normalMapTangentSpace:Se&&v.normalMapType===Wl,metalnessMap:He,roughnessMap:b,anisotropy:x,anisotropyMap:Ie,clearcoat:V,clearcoatMap:De,clearcoatNormalMap:fe,clearcoatRoughnessMap:me,iridescence:Y,iridescenceMap:Oe,iridescenceThicknessMap:he,sheen:re,sheenColorMap:at,sheenRoughnessMap:Xe,specularMap:Le,specularColorMap:be,specularIntensityMap:Ce,transmission:ne,transmissionMap:w,thicknessMap:Q,gradientMap:Te,opaque:v.transparent===!1&&v.blending===Si&&v.alphaToCoverage===!1,alphaMap:L,alphaTest:ce,alphaHash:O,combine:v.combine,mapUv:we&&p(v.map.channel),aoMapUv:K&&p(v.aoMap.channel),lightMapUv:ue&&p(v.lightMap.channel),bumpMapUv:te&&p(v.bumpMap.channel),normalMapUv:Se&&p(v.normalMap.channel),displacementMapUv:ge&&p(v.displacementMap.channel),emissiveMapUv:Ee&&p(v.emissiveMap.channel),metalnessMapUv:He&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:Ie&&p(v.anisotropyMap.channel),clearcoatMapUv:De&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(v.sheenRoughnessMap.channel),specularMapUv:Le&&p(v.specularMap.channel),specularColorMapUv:be&&p(v.specularColorMap.channel),specularIntensityMapUv:Ce&&p(v.specularIntensityMap.channel),transmissionMapUv:w&&p(v.transmissionMap.channel),thicknessMapUv:Q&&p(v.thicknessMap.channel),alphaMapUv:L&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Se||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(we||L),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:se&&v.extensions.derivatives===!0,extensionFragDepth:se&&v.extensions.fragDepth===!0,extensionDrawBuffers:se&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function E(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const Z in v.defines)T.push(Z),T.push(v.defines[Z]);return v.isRawShaderMaterial===!1&&(g(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const T=S[v.type];let Z;if(T){const J=qt[T];Z=hh.clone(J.uniforms)}else Z=v.uniforms;return Z}function C(v,T){let Z;for(let J=0,U=u.length;J<U;J++){const X=u[J];if(X.cacheKey===T){Z=X,++Z.usedTimes;break}}return Z===void 0&&(Z=new Cm(i,T,v,s),u.push(Z)),Z}function A(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function N(v){l.remove(v)}function W(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:W}}function Um(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ja(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ka(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,_,S,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:S,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=S,f.group=p),e++,f}function o(h,d,m,_,S,p){const f=a(h,d,m,_,S,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,_,S,p){const f=a(h,d,m,_,S,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Nm),n.length>1&&n.sort(d||ja),r.length>1&&r.sort(d||ja)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Im(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ka,i.set(n,[a])):r>=s.length?(a=new Ka,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bm=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hm(i,e){const t=new Om,n=Fm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,a=new Qe,o=new Qe;function l(u,h){let d=0,m=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let S=0,p=0,f=0,E=0,g=0,M=0,P=0,C=0,A=0,N=0,W=0;u.sort(zm);const v=h===!0?Math.PI:1;for(let Z=0,J=u.length;Z<J;Z++){const U=u[Z],X=U.color,z=U.intensity,$=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=X.r*z*v,m+=X.g*z*v,_+=X.b*z*v;else if(U.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(U.sh.coefficients[j],z);W++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const oe=U.shadow,ae=n.get(U);ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,r.directionalShadow[S]=ae,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=U.shadow.matrix,M++}r.directional[S]=j,S++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(X).multiplyScalar(z*v),j.distance=$,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,r.spot[f]=j;const oe=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,oe.updateMatrices(U),U.castShadow&&N++),r.spotLightMatrix[f]=oe.matrix,U.castShadow){const ae=n.get(U);ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=q,C++}f++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(X).multiplyScalar(z),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=j,E++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*v),j.distance=U.distance,j.decay=U.decay,U.castShadow){const oe=U.shadow,ae=n.get(U);ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,ae.shadowCameraNear=oe.camera.near,ae.shadowCameraFar=oe.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=U.shadow.matrix,P++}r.point[p]=j,p++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(z*v),j.groundColor.copy(U.groundColor).multiplyScalar(z*v),r.hemi[g]=j,g++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==S||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==E||T.hemiLength!==g||T.numDirectionalShadows!==M||T.numPointShadows!==P||T.numSpotShadows!==C||T.numSpotMaps!==A||T.numLightProbes!==W)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=E,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+A-N,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=W,T.directionalLength=S,T.pointLength=p,T.spotLength=f,T.rectAreaLength=E,T.hemiLength=g,T.numDirectionalShadows=M,T.numPointShadows=P,T.numSpotShadows=C,T.numSpotMaps=A,T.numLightProbes=W,r.version=Bm++)}function c(u,h){let d=0,m=0,_=0,S=0,p=0;const f=h.matrixWorldInverse;for(let E=0,g=u.length;E<g;E++){const M=u[E];if(M.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),d++}else if(M.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),S++}else if(M.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function $a(i,e){const t=new Hm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Gm(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $a(i,e),t.set(s,[l])):a>=o.length?(l=new $a(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class km extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vm extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,e,t){let n=new po;const r=new le,s=new le,a=new gt,o=new km({depthPacking:Mu}),l=new Vm,c={},u=t.maxTextureSize,h={[yn]:Rt,[Rt]:yn,[on]:on},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ot(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let f=this.type;this.render=function(C,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const W=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(vn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=f!==sn&&this.type===sn,U=f===sn&&this.type!==sn;for(let X=0,z=C.length;X<z;X++){const $=C[X],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const j=q.getFrameExtents();if(r.multiply(j),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||J===!0||U===!0){const ae=this.type!==sn?{minFilter:xt,magFilter:xt}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(r.x,r.y,ae),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const oe=q.getViewportCount();for(let ae=0;ae<oe;ae++){const xe=q.getViewport(ae);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),Z.viewport(a),q.updateMatrices($,ae),n=q.getFrustum(),M(A,N,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===sn&&E(q,N),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(W,v,T)};function E(C,A){const N=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,N,m,S,null)}function g(C,A,N,W){let v=null;const T=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)v=T;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Z=v.uuid,J=A.uuid;let U=c[Z];U===void 0&&(U={},c[Z]=U);let X=U[J];X===void 0&&(X=v.clone(),U[J]=X,A.addEventListener("dispose",P)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,W===sn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const Z=i.properties.get(v);Z.light=N}return v}function M(C,A,N,W,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const J=e.update(C),U=C.material;if(Array.isArray(U)){const X=J.groups;for(let z=0,$=X.length;z<$;z++){const q=X[z],j=U[q.materialIndex];if(j&&j.visible){const oe=g(C,j,W,v);C.onBeforeShadow(i,C,A,N,J,oe,q),i.renderBufferDirect(N,null,J,oe,C,q),C.onAfterShadow(i,C,A,N,J,oe,q)}}}else if(U.visible){const X=g(C,U,W,v);C.onBeforeShadow(i,C,A,N,J,X,null),i.renderBufferDirect(N,null,J,X,C,null),C.onAfterShadow(i,C,A,N,J,X,null)}}const Z=C.children;for(let J=0,U=Z.length;J<U;J++)M(Z[J],A,N,W,v)}function P(C){C.target.removeEventListener("dispose",P);for(const N in c){const W=c[N],v=C.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}function qm(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const ce=new gt;let O=null;const se=new gt(0,0,0,0);return{setMask:function(_e){O!==_e&&!L&&(i.colorMask(_e,_e,_e,_e),O=_e)},setLocked:function(_e){L=_e},setClear:function(_e,je,$e,Je,lt){lt===!0&&(_e*=Je,je*=Je,$e*=Je),ce.set(_e,je,$e,Je),se.equals(ce)===!1&&(i.clearColor(_e,je,$e,Je),se.copy(ce))},reset:function(){L=!1,O=null,se.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,O=null,se=null;return{setTest:function(_e){_e?Me(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(_e){ce!==_e&&!L&&(i.depthMask(_e),ce=_e)},setFunc:function(_e){if(O!==_e){switch(_e){case Jc:i.depthFunc(i.NEVER);break;case Qc:i.depthFunc(i.ALWAYS);break;case eu:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case tu:i.depthFunc(i.EQUAL);break;case nu:i.depthFunc(i.GEQUAL);break;case iu:i.depthFunc(i.GREATER);break;case ru:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=_e}},setLocked:function(_e){L=_e},setClear:function(_e){se!==_e&&(i.clearDepth(_e),se=_e)},reset:function(){L=!1,ce=null,O=null,se=null}}}function a(){let L=!1,ce=null,O=null,se=null,_e=null,je=null,$e=null,Je=null,lt=null;return{setTest:function(Ke){L||(Ke?Me(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!L&&(i.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,nt,yt){(O!==Ke||se!==nt||_e!==yt)&&(i.stencilFunc(Ke,nt,yt),O=Ke,se=nt,_e=yt)},setOp:function(Ke,nt,yt){(je!==Ke||$e!==nt||Je!==yt)&&(i.stencilOp(Ke,nt,yt),je=Ke,$e=nt,Je=yt)},setLocked:function(Ke){L=Ke},setClear:function(Ke){lt!==Ke&&(i.clearStencil(Ke),lt=Ke)},reset:function(){L=!1,ce=null,O=null,se=null,_e=null,je=null,$e=null,Je=null,lt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,S=[],p=null,f=!1,E=null,g=null,M=null,P=null,C=null,A=null,N=null,W=new qe(0,0,0),v=0,T=!1,Z=null,J=null,U=null,X=null,z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(oe)[1]),q=j>=1):oe.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),q=j>=2);let ae=null,xe={};const Ne=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),ie=new gt().fromArray(Ne),ve=new gt().fromArray(k);function Re(L,ce,O,se){const _e=new Uint8Array(4),je=i.createTexture();i.bindTexture(L,je),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<O;$e++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ce+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return je}const Ae={};Ae[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(i.DEPTH_TEST),l.setFunc(Or),ge(!1),Ee(Ro),Me(i.CULL_FACE),te(vn);function Me(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Be(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function we(L,ce){return m[L]!==ce?(i.bindFramebuffer(L,ce),m[L]=ce,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function R(L,ce){let O=S,se=!1;if(L){O=_.get(ce),O===void 0&&(O=[],_.set(ce,O));const _e=L.textures;if(O.length!==_e.length||O[0]!==i.COLOR_ATTACHMENT0){for(let je=0,$e=_e.length;je<$e;je++)O[je]=i.COLOR_ATTACHMENT0+je;O.length=_e.length,se=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,se=!0);if(se)if(t.isWebGL2)i.drawBuffers(O);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function de(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const K={[On]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};if(n)K[Uo]=i.MIN,K[No]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(K[Uo]=L.MIN_EXT,K[No]=L.MAX_EXT)}const ue={[zc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[Hs]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[Gs]:i.ONE_MINUS_SRC_ALPHA,[Yc]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function te(L,ce,O,se,_e,je,$e,Je,lt,Ke){if(L===vn){f===!0&&(Be(i.BLEND),f=!1);return}if(f===!1&&(Me(i.BLEND),f=!0),L!==Oc){if(L!==E||Ke!==T){if((g!==On||C!==On)&&(i.blendEquation(i.FUNC_ADD),g=On,C=On),Ke)switch(L){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,P=null,A=null,N=null,W.set(0,0,0),v=0,E=L,T=Ke}return}_e=_e||ce,je=je||O,$e=$e||se,(ce!==g||_e!==C)&&(i.blendEquationSeparate(K[ce],K[_e]),g=ce,C=_e),(O!==M||se!==P||je!==A||$e!==N)&&(i.blendFuncSeparate(ue[O],ue[se],ue[je],ue[$e]),M=O,P=se,A=je,N=$e),(Je.equals(W)===!1||lt!==v)&&(i.blendColor(Je.r,Je.g,Je.b,lt),W.copy(Je),v=lt),E=L,T=!1}function Se(L,ce){L.side===on?Be(i.CULL_FACE):Me(i.CULL_FACE);let O=L.side===Rt;ce&&(O=!O),ge(O),L.blending===Si&&L.transparent===!1?te(vn):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;c.setTest(se),se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),b(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(L){Z!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Z=L)}function Ee(L){L!==Uc?(Me(i.CULL_FACE),L!==J&&(L===Ro?i.cullFace(i.BACK):L===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),J=L}function He(L){L!==U&&(q&&i.lineWidth(L),U=L)}function b(L,ce,O){L?(Me(i.POLYGON_OFFSET_FILL),(X!==ce||z!==O)&&(i.polygonOffset(ce,O),X=ce,z=O)):Be(i.POLYGON_OFFSET_FILL)}function x(L){L?Me(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function V(L){L===void 0&&(L=i.TEXTURE0+$-1),ae!==L&&(i.activeTexture(L),ae=L)}function Y(L,ce,O){O===void 0&&(ae===null?O=i.TEXTURE0+$-1:O=ae);let se=xe[O];se===void 0&&(se={type:void 0,texture:void 0},xe[O]=se),(se.type!==L||se.texture!==ce)&&(ae!==O&&(i.activeTexture(O),ae=O),i.bindTexture(L,ce||Ae[L]),se.type=L,se.texture=ce)}function re(){const L=xe[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function Ce(L){ve.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ve.copy(L))}function w(L,ce){let O=h.get(ce);O===void 0&&(O=new WeakMap,h.set(ce,O));let se=O.get(L);se===void 0&&(se=i.getUniformBlockIndex(ce,L.name),O.set(L,se))}function Q(L,ce){const se=h.get(ce).get(L);u.get(ce)!==se&&(i.uniformBlockBinding(ce,se,L.__bindingPointIndex),u.set(ce,se))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,xe={},m={},_=new WeakMap,S=[],p=null,f=!1,E=null,g=null,M=null,P=null,C=null,A=null,N=null,W=new qe(0,0,0),v=0,T=!1,Z=null,J=null,U=null,X=null,z=null,ie.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:Be,bindFramebuffer:we,drawBuffers:R,useProgram:de,setBlending:te,setMaterial:Se,setFlipSided:ge,setCullFace:Ee,setLineWidth:He,setPolygonOffset:b,setScissorTest:x,activeTexture:V,bindTexture:Y,unbindTexture:re,compressedTexImage2D:ne,compressedTexImage3D:Ie,texImage2D:Xe,texImage3D:Le,updateUBOMapping:w,uniformBlockBinding:Q,texStorage2D:he,texStorage3D:at,texSubImage2D:De,texSubImage3D:fe,compressedTexSubImage2D:me,compressedTexSubImage3D:Oe,scissor:be,viewport:Ce,reset:Te}}function jm(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new le,h=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,x){return _?new OffscreenCanvas(b,x):Ki("canvas")}function p(b,x,V,Y){let re=1;const ne=He(b);if((ne.width>Y||ne.height>Y)&&(re=Y/Math.max(ne.width,ne.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Ie=x?Gr:Math.floor,De=Ie(re*ne.width),fe=Ie(re*ne.height);d===void 0&&(d=S(De,fe));const me=V?S(De,fe):d;return me.width=De,me.height=fe,me.getContext("2d").drawImage(b,0,0,De,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+De+"x"+fe+")."),me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function f(b){const x=He(b);return qs(x.width)&&qs(x.height)}function E(b){return o?!1:b.wrapS!==Gt||b.wrapT!==Gt||b.minFilter!==xt&&b.minFilter!==Ct}function g(b,x){return b.generateMipmaps&&x&&b.minFilter!==xt&&b.minFilter!==Ct}function M(b){i.generateMipmap(b)}function P(b,x,V,Y,re=!1){if(o===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=x;if(x===i.RED&&(V===i.FLOAT&&(ne=i.R32F),V===i.HALF_FLOAT&&(ne=i.R16F),V===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.R8UI),V===i.UNSIGNED_SHORT&&(ne=i.R16UI),V===i.UNSIGNED_INT&&(ne=i.R32UI),V===i.BYTE&&(ne=i.R8I),V===i.SHORT&&(ne=i.R16I),V===i.INT&&(ne=i.R32I)),x===i.RG&&(V===i.FLOAT&&(ne=i.RG32F),V===i.HALF_FLOAT&&(ne=i.RG16F),V===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RG8UI),V===i.UNSIGNED_SHORT&&(ne=i.RG16UI),V===i.UNSIGNED_INT&&(ne=i.RG32UI),V===i.BYTE&&(ne=i.RG8I),V===i.SHORT&&(ne=i.RG16I),V===i.INT&&(ne=i.RG32I)),x===i.RGBA){const Ie=re?Fr:Ze.getTransfer(Y);V===i.FLOAT&&(ne=i.RGBA32F),V===i.HALF_FLOAT&&(ne=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ne=Ie===it?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(b,x,V){return g(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==xt&&b.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){return b===xt||b===Io||b===Li?i.NEAREST:i.LINEAR}function N(b){const x=b.target;x.removeEventListener("dispose",N),v(x),x.isVideoTexture&&h.delete(x)}function W(b){const x=b.target;x.removeEventListener("dispose",W),Z(x)}function v(b){const x=n.get(b);if(x.__webglInit===void 0)return;const V=b.source,Y=m.get(V);if(Y){const re=Y[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(b),Object.keys(Y).length===0&&m.delete(V)}n.remove(b)}function T(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const V=b.source,Y=m.get(V);delete Y[x.__cacheKey],a.memory.textures--}function Z(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let re=0;re<x.__webglFramebuffer[Y].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[Y][re]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=b.textures;for(let Y=0,re=V.length;Y<re;Y++){const ne=n.get(V[Y]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(b)}let J=0;function U(){J=0}function X(){const b=J;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),J+=1,b}function z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function $(b,x){const V=n.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,b,x);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function q(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){ve(V,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function j(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){ve(V,b,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function oe(b,x){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Re(V,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const ae={[Ws]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},xe={[xt]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[ns]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Ne={[bu]:i.NEVER,[Pu]:i.ALWAYS,[Tu]:i.LESS,[Xl]:i.LEQUAL,[Au]:i.EQUAL,[Ru]:i.GEQUAL,[wu]:i.GREATER,[Cu]:i.NOTEQUAL};function k(b,x,V){if(x.type===jt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ct||x.magFilter===ns||x.magFilter===Li||x.magFilter===Bn||x.minFilter===Ct||x.minFilter===ns||x.minFilter===Li||x.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(i.texParameteri(b,i.TEXTURE_WRAP_S,ae[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ae[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ae[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,xe[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Gt||x.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==xt&&x.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xt||x.minFilter!==Li&&x.minFilter!==Bn||x.type===jt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(b,x){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N));const Y=x.source;let re=m.get(Y);re===void 0&&(re={},m.set(Y,re));const ne=z(x);if(ne!==b.__cacheKey){re[ne]===void 0&&(re[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),re[ne].usedTimes++;const Ie=re[b.__cacheKey];Ie!==void 0&&(re[b.__cacheKey].usedTimes--,Ie.usedTimes===0&&T(x)),b.__cacheKey=ne,b.__webglTexture=re[ne].texture}return V}function ve(b,x,V){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const re=ie(b,x),ne=x.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+V);const Ie=n.get(ne);if(ne.version!==Ie.__version||re===!0){t.activeTexture(i.TEXTURE0+V);const De=Ze.getPrimaries(Ze.workingColorSpace),fe=x.colorSpace===_n?null:Ze.getPrimaries(x.colorSpace),me=x.colorSpace===_n||De===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=E(x)&&f(x.image)===!1;let he=p(x.image,Oe,!1,r.maxTextureSize);he=Ee(x,he);const at=f(he)||o,Xe=s.convert(x.format,x.colorSpace);let Le=s.convert(x.type),be=P(x.internalFormat,Xe,Le,x.colorSpace,x.isVideoTexture);k(Y,x,at);let Ce;const w=x.mipmaps,Q=o&&x.isVideoTexture!==!0&&be!==Vl,Te=Ie.__version===void 0||re===!0,L=ne.dataReady,ce=C(x,he,at);if(x.isDepthTexture)be=i.DEPTH_COMPONENT,o?x.type===jt?be=i.DEPTH_COMPONENT32F:x.type===gn?be=i.DEPTH_COMPONENT24:x.type===zn?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:x.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Hn&&be===i.DEPTH_COMPONENT&&x.type!==lo&&x.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gn,Le=s.convert(x.type)),x.format===bi&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,x.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=zn,Le=s.convert(x.type))),Te&&(Q?t.texStorage2D(i.TEXTURE_2D,1,be,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,be,he.width,he.height,0,Xe,Le,null));else if(x.isDataTexture)if(w.length>0&&at){Q&&Te&&t.texStorage2D(i.TEXTURE_2D,ce,be,w[0].width,w[0].height);for(let O=0,se=w.length;O<se;O++)Ce=w[O],Q?L&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ce.width,Ce.height,Xe,Le,Ce.data):t.texImage2D(i.TEXTURE_2D,O,be,Ce.width,Ce.height,0,Xe,Le,Ce.data);x.generateMipmaps=!1}else Q?(Te&&t.texStorage2D(i.TEXTURE_2D,ce,be,he.width,he.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Xe,Le,he.data)):t.texImage2D(i.TEXTURE_2D,0,be,he.width,he.height,0,Xe,Le,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Q&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,be,w[0].width,w[0].height,he.depth);for(let O=0,se=w.length;O<se;O++)Ce=w[O],x.format!==kt?Xe!==null?Q?L&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Ce.width,Ce.height,he.depth,Xe,Ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,be,Ce.width,Ce.height,he.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Ce.width,Ce.height,he.depth,Xe,Le,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,be,Ce.width,Ce.height,he.depth,0,Xe,Le,Ce.data)}else{Q&&Te&&t.texStorage2D(i.TEXTURE_2D,ce,be,w[0].width,w[0].height);for(let O=0,se=w.length;O<se;O++)Ce=w[O],x.format!==kt?Xe!==null?Q?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Ce.width,Ce.height,Xe,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,O,be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?L&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ce.width,Ce.height,Xe,Le,Ce.data):t.texImage2D(i.TEXTURE_2D,O,be,Ce.width,Ce.height,0,Xe,Le,Ce.data)}else if(x.isDataArrayTexture)Q?(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,be,he.width,he.height,he.depth),L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Xe,Le,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,he.width,he.height,he.depth,0,Xe,Le,he.data);else if(x.isData3DTexture)Q?(Te&&t.texStorage3D(i.TEXTURE_3D,ce,be,he.width,he.height,he.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Xe,Le,he.data)):t.texImage3D(i.TEXTURE_3D,0,be,he.width,he.height,he.depth,0,Xe,Le,he.data);else if(x.isFramebufferTexture){if(Te)if(Q)t.texStorage2D(i.TEXTURE_2D,ce,be,he.width,he.height);else{let O=he.width,se=he.height;for(let _e=0;_e<ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,be,O,se,0,Xe,Le,null),O>>=1,se>>=1}}else if(w.length>0&&at){if(Q&&Te){const O=He(w[0]);t.texStorage2D(i.TEXTURE_2D,ce,be,O.width,O.height)}for(let O=0,se=w.length;O<se;O++)Ce=w[O],Q?L&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Xe,Le,Ce):t.texImage2D(i.TEXTURE_2D,O,be,Xe,Le,Ce);x.generateMipmaps=!1}else if(Q){if(Te){const O=He(he);t.texStorage2D(i.TEXTURE_2D,ce,be,O.width,O.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,Le,he)}else t.texImage2D(i.TEXTURE_2D,0,be,Xe,Le,he);g(x,at)&&M(Y),Ie.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Re(b,x,V){if(x.image.length!==6)return;const Y=ie(b,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);const ne=n.get(re);if(re.version!==ne.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Ie=Ze.getPrimaries(Ze.workingColorSpace),De=x.colorSpace===_n?null:Ze.getPrimaries(x.colorSpace),fe=x.colorSpace===_n||Ie===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,Oe=x.image[0]&&x.image[0].isDataTexture,he=[];for(let O=0;O<6;O++)!me&&!Oe?he[O]=p(x.image[O],!1,!0,r.maxCubemapSize):he[O]=Oe?x.image[O].image:x.image[O],he[O]=Ee(x,he[O]);const at=he[0],Xe=f(at)||o,Le=s.convert(x.format,x.colorSpace),be=s.convert(x.type),Ce=P(x.internalFormat,Le,be,x.colorSpace),w=o&&x.isVideoTexture!==!0,Q=ne.__version===void 0||Y===!0,Te=re.dataReady;let L=C(x,at,Xe);k(i.TEXTURE_CUBE_MAP,x,Xe);let ce;if(me){w&&Q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Ce,at.width,at.height);for(let O=0;O<6;O++){ce=he[O].mipmaps;for(let se=0;se<ce.length;se++){const _e=ce[se];x.format!==kt?Le!==null?w?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,_e.width,_e.height,Le,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,0,0,_e.width,_e.height,Le,be,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se,Ce,_e.width,_e.height,0,Le,be,_e.data)}}}else{if(ce=x.mipmaps,w&&Q){ce.length>0&&L++;const O=He(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Ce,O.width,O.height)}for(let O=0;O<6;O++)if(Oe){w?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,he[O].width,he[O].height,Le,be,he[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ce,he[O].width,he[O].height,0,Le,be,he[O].data);for(let se=0;se<ce.length;se++){const je=ce[se].image[O].image;w?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,je.width,je.height,Le,be,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,Ce,je.width,je.height,0,Le,be,je.data)}}else{w?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Le,be,he[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ce,Le,be,he[O]);for(let se=0;se<ce.length;se++){const _e=ce[se];w?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,0,0,Le,be,_e.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,se+1,Ce,Le,be,_e.image[O])}}}g(x,Xe)&&M(i.TEXTURE_CUBE_MAP),ne.__version=re.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ae(b,x,V,Y,re,ne){const Ie=s.convert(V.format,V.colorSpace),De=s.convert(V.type),fe=P(V.internalFormat,Ie,De,V.colorSpace);if(!n.get(x).__hasExternalTextures){const Oe=Math.max(1,x.width>>ne),he=Math.max(1,x.height>>ne);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,fe,Oe,he,x.depth,0,Ie,De,null):t.texImage2D(re,ne,fe,Oe,he,0,Ie,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Se(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,re,n.get(V).__webglTexture,0,te(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,re,n.get(V).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(b,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Y=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||Se(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===jt?Y=i.DEPTH_COMPONENT32F:re.type===gn&&(Y=i.DEPTH_COMPONENT24));const ne=te(x);Se(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Y,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Y,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Y=te(x);V&&Se(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,x.width,x.height):Se(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Y=x.textures;for(let re=0;re<Y.length;re++){const ne=Y[re],Ie=s.convert(ne.format,ne.colorSpace),De=s.convert(ne.type),fe=P(ne.internalFormat,Ie,De,ne.colorSpace),me=te(x);V&&Se(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,fe,x.width,x.height):Se(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,fe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,re=te(x);if(x.depthTexture.format===Hn)Se(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(x.depthTexture.format===bi)Se(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function we(b){const x=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Be(x.__webglFramebuffer,b)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Me(x.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Me(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function R(b,x,V){const Y=n.get(b);x!==void 0&&Ae(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&we(b)}function de(b){const x=b.texture,V=n.get(b),Y=n.get(x);b.addEventListener("dispose",W);const re=b.textures,ne=b.isWebGLCubeRenderTarget===!0,Ie=re.length>1,De=f(b)||o;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),ne){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let me=0;me<x.mipmaps.length;me++)V.__webglFramebuffer[fe][me]=i.createFramebuffer()}else V.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)V.__webglFramebuffer[fe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ie)if(r.drawBuffers)for(let fe=0,me=re.length;fe<me;fe++){const Oe=n.get(re[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Se(b)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const me=re[fe];V.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const Oe=s.convert(me.format,me.colorSpace),he=s.convert(me.type),at=P(me.internalFormat,Oe,he,me.colorSpace,b.isXRRenderTarget===!0),Xe=te(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),k(i.TEXTURE_CUBE_MAP,x,De);for(let fe=0;fe<6;fe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ae(V.__webglFramebuffer[fe][me],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Ae(V.__webglFramebuffer[fe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(x,De)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let fe=0,me=re.length;fe<me;fe++){const Oe=re[fe],he=n.get(Oe);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),k(i.TEXTURE_2D,Oe,De),Ae(V.__webglFramebuffer,b,Oe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g(Oe,De)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?fe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,Y.__webglTexture),k(fe,x,De),o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ae(V.__webglFramebuffer[me],b,x,i.COLOR_ATTACHMENT0,fe,me);else Ae(V.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,fe,0);g(x,De)&&M(fe),t.unbindTexture()}b.depthBuffer&&we(b)}function K(b){const x=f(b)||o,V=b.textures;for(let Y=0,re=V.length;Y<re;Y++){const ne=V[Y];if(g(ne,x)){const Ie=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(ne).__webglTexture;t.bindTexture(Ie,De),M(Ie),t.unbindTexture()}}}function ue(b){if(o&&b.samples>0&&Se(b)===!1){const x=b.textures,V=b.width,Y=b.height;let re=i.COLOR_BUFFER_BIT;const ne=[],Ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(b),fe=x.length>1;if(fe)for(let me=0;me<x.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let me=0;me<x.length;me++){ne.push(i.COLOR_ATTACHMENT0+me),b.depthBuffer&&ne.push(Ie);const Oe=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[me]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ie]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ie])),fe){const he=n.get(x[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,re,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<x.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,De.__webglColorRenderbuffer[me]);const Oe=n.get(x[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function te(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const x=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ee(b,x){const V=b.colorSpace,Y=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ys||V!==En&&V!==_n&&(Ze.getTransfer(V)===it?o===!1?e.has("EXT_sRGB")===!0&&Y===kt?(b.format=Ys,b.minFilter=Ct,b.generateMipmaps=!1):x=ql.sRGBToLinear(x):(Y!==kt||re!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function He(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=oe,this.rebindTextures=R,this.setupRenderTarget=de,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Se}function Km(i,e,t){const n=t.isWebGL2;function r(s,a=_n){let o;const l=Ze.getTransfer(a);if(s===Sn)return i.UNSIGNED_BYTE;if(s===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===pu)return i.BYTE;if(s===mu)return i.SHORT;if(s===lo)return i.UNSIGNED_SHORT;if(s===Ol)return i.INT;if(s===gn)return i.UNSIGNED_INT;if(s===jt)return i.FLOAT;if(s===ji)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===_u)return i.ALPHA;if(s===kt)return i.RGBA;if(s===gu)return i.LUMINANCE;if(s===vu)return i.LUMINANCE_ALPHA;if(s===Hn)return i.DEPTH_COMPONENT;if(s===bi)return i.DEPTH_STENCIL;if(s===Ys)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zl)return i.RED;if(s===Hl)return i.RED_INTEGER;if(s===xu)return i.RG;if(s===Gl)return i.RG_INTEGER;if(s===kl)return i.RGBA_INTEGER;if(s===is||s===rs||s===ss||s===os)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oo||s===Fo||s===Bo||s===zo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ho||s===Go)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ho)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Go)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ko||s===Vo||s===Wo||s===Xo||s===Yo||s===qo||s===jo||s===Ko||s===$o||s===Zo||s===Jo||s===Qo||s===ea||s===ta)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ko)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ko)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$o)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qo)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ea)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ta)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===as||s===na||s===ia)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===as)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===na)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ia)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Su||s===ra||s===sa||s===oa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===as)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class $m extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Tt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new ln({extensions:{fragDepth:!0},vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new qr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class t_ extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const S=new e_,p=t.getContextAttributes();let f=null,E=null;const g=[],M=[],P=new le;let C=null;const A=new It;A.layers.enable(1),A.viewport=new gt;const N=new It;N.layers.enable(2),N.viewport=new gt;const W=[A,N],v=new $m;v.layers.enable(1),v.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=g[k];return ie===void 0&&(ie=new Ds,g[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=g[k];return ie===void 0&&(ie=new Ds,g[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=g[k];return ie===void 0&&(ie=new Ds,g[k]=ie),ie.getHandSpace()};function J(k){const ie=M.indexOf(k.inputSource);if(ie===-1)return;const ve=g[ie];ve!==void 0&&(ve.update(k.inputSource,k.frame,c||a),ve.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",X);for(let k=0;k<g.length;k++){const ie=M[k];ie!==null&&(M[k]=null,g[k].disconnect(ie))}T=null,Z=null,S.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,E=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",U),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Gn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,ve=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?bi:Hn,ve=p.stencil?zn:gn);const Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Gn(d.textureWidth,d.textureHeight,{format:kt,type:Sn,depthTexture:new rc(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Me=e.properties.get(E);Me.__ignoreDepthValues=d.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(k){for(let ie=0;ie<k.removed.length;ie++){const ve=k.removed[ie],Re=M.indexOf(ve);Re>=0&&(M[Re]=null,g[Re].disconnect(ve))}for(let ie=0;ie<k.added.length;ie++){const ve=k.added[ie];let Re=M.indexOf(ve);if(Re===-1){for(let Me=0;Me<g.length;Me++)if(Me>=M.length){M.push(ve),Re=Me;break}else if(M[Me]===null){M[Me]=ve,Re=Me;break}if(Re===-1)break}const Ae=g[Re];Ae&&Ae.connect(ve)}}const z=new D,$=new D;function q(k,ie,ve){z.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);const Re=z.distanceTo($),Ae=ie.projectionMatrix.elements,Me=ve.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),we=Ae[14]/(Ae[10]+1),R=(Ae[9]+1)/Ae[5],de=(Ae[9]-1)/Ae[5],K=(Ae[8]-1)/Ae[0],ue=(Me[8]+1)/Me[0],te=Be*K,Se=Be*ue,ge=Re/(-K+ue),Ee=ge*-K;ie.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ee),k.translateZ(ge),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const He=Be+ge,b=we+ge,x=te-Ee,V=Se+(Re-Ee),Y=R*we/b*He,re=de*we/b*He;k.projectionMatrix.makePerspective(x,V,Y,re,He,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;S.texture!==null&&(k.near=S.depthNear,k.far=S.depthFar),v.near=N.near=A.near=k.near,v.far=N.far=A.far=k.far,(T!==v.near||Z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,Z=v.far,A.near=T,A.far=Z,N.near=T,N.far=Z,A.updateProjectionMatrix(),N.updateProjectionMatrix(),k.updateProjectionMatrix());const ie=k.parent,ve=v.cameras;j(v,ie);for(let Re=0;Re<ve.length;Re++)j(ve[Re],ie);ve.length===2?q(v,A,N):v.projectionMatrix.copy(A.projectionMatrix),oe(k,v,ie)};function oe(k,ie,ve){ve===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(ve.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ti*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return S.texture!==null};let ae=null;function xe(k,ie){if(u=ie.getViewerPose(c||a),_=ie,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Re=!1;ve.length!==v.cameras.length&&(v.cameras.length=0,Re=!0);for(let Me=0;Me<ve.length;Me++){const Be=ve[Me];let we=null;if(m!==null)we=m.getViewport(Be);else{const de=h.getViewSubImage(d,Be);we=de.viewport,Me===0&&(e.setRenderTargetTextures(E,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(E))}let R=W[Me];R===void 0&&(R=new It,R.layers.enable(Me),R.viewport=new gt,W[Me]=R),R.matrix.fromArray(Be.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Be.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(we.x,we.y,we.width,we.height),Me===0&&(v.matrix.copy(R.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Re===!0&&v.cameras.push(R)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Me=h.getDepthInformation(ve[0]);Me&&Me.isValid&&Me.texture&&S.init(e,Me,r.renderState)}}for(let ve=0;ve<g.length;ve++){const Re=M[ve],Ae=g[ve];Re!==null&&Ae!==void 0&&Ae.update(Re,ie,c||a)}S.render(e,v),ae&&ae(k,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ne=new nc;Ne.setAnimationLoop(xe),this.setAnimationLoop=function(k){ae=k},this.dispose=function(){}}}const Nn=new $t,n_=new Qe;function i_(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ql(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),S(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,g):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),g=E.envMap,M=E.envMapRotation;if(g&&(p.envMap.value=g,Nn.copy(M),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Nn)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=g*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function r_(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,g){const M=g.program;n.uniformBlockBinding(E,M)}function c(E,g){let M=r[E.id];M===void 0&&(_(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",p));const P=g.program;n.updateUBOMapping(E,P);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function u(E){const g=h();E.__bindingPointIndex=g;const M=i.createBuffer(),P=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const g=r[E.id],M=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let C=0,A=M.length;C<A;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let W=0,v=N.length;W<v;W++){const T=N[W];if(m(T,C,W,P)===!0){const Z=T.__offset,J=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let X=0;X<J.length;X++){const z=J[X],$=S(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Z+U,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,g,M,P){const C=E.value,A=g+"_"+M;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const N=P[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(E){const g=E.uniforms;let M=0;const P=16;for(let A=0,N=g.length;A<N;A++){const W=Array.isArray(g[A])?g[A]:[g[A]];for(let v=0,T=W.length;v<T;v++){const Z=W[v],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let U=0,X=J.length;U<X;U++){const z=J[U],$=S(z),q=M%P;q!==0&&P-q<$.boundary&&(M+=P-q),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=$.storage}}}const C=M%P;return C>0&&(M+=P-C),E.__size=M,E.__cache={},this}function S(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function p(E){const g=E.target;g.removeEventListener("dispose",p);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class s_{constructor(e={}){const{canvas:t=Yu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const g=this;let M=!1,P=0,C=0,A=null,N=-1,W=null;const v=new gt,T=new gt;let Z=null;const J=new qe(0);let U=0,X=t.width,z=t.height,$=1,q=null,j=null;const oe=new gt(0,0,X,z),ae=new gt(0,0,X,z);let xe=!1;const Ne=new po;let k=!1,ie=!1,ve=null;const Re=new Qe,Ae=new le,Me=new D,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return A===null?$:1}let R=n;function de(y,I){for(let H=0;H<y.length;H++){const G=y[H],B=t.getContext(G,I);if(B!==null)return B}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),R===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),R=de(I,y),R===null)throw de(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let K,ue,te,Se,ge,Ee,He,b,x,V,Y,re,ne,Ie,De,fe,me,Oe,he,at,Xe,Le,be,Ce;function w(){K=new up(R),ue=new rp(R,K,e),K.init(ue),Le=new Km(R,K,ue),te=new qm(R,K,ue),Se=new fp(R),ge=new Um,Ee=new jm(R,K,te,ge,ue,Le,Se),He=new op(g),b=new cp(g),x=new vh(R,ue),be=new np(R,K,x,ue),V=new hp(R,x,Se,be),Y=new gp(R,V,x,Se),he=new _p(R,ue,Ee),fe=new sp(ge),re=new Dm(g,He,b,K,ue,be,fe),ne=new i_(g,ge),Ie=new Im,De=new Gm(K,ue),Oe=new tp(g,He,b,te,Y,d,l),me=new Ym(g,Y,ue),Ce=new r_(R,Se,ue,te),at=new ip(R,K,Se,ue),Xe=new dp(R,K,Se,ue),Se.programs=re.programs,g.capabilities=ue,g.extensions=K,g.properties=ge,g.renderLists=Ie,g.shadowMap=me,g.state=te,g.info=Se}w();const Q=new t_(g,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=K.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=K.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(X,z,!1))},this.getSize=function(y){return y.set(X,z)},this.setSize=function(y,I,H=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,z=I,t.width=Math.floor(y*$),t.height=Math.floor(I*$),H===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(X*$,z*$).floor()},this.setDrawingBufferSize=function(y,I,H){X=y,z=I,$=H,t.width=Math.floor(y*H),t.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(oe)},this.setViewport=function(y,I,H,G){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,I,H,G),te.viewport(v.copy(oe).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(ae)},this.setScissor=function(y,I,H,G){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,I,H,G),te.scissor(T.copy(ae).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(y){te.setScissorTest(xe=y)},this.setOpaqueSort=function(y){q=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(y=!0,I=!0,H=!0){let G=0;if(y){let B=!1;if(A!==null){const ye=A.texture.format;B=ye===kl||ye===Gl||ye===Hl}if(B){const ye=A.texture.type,Pe=ye===Sn||ye===gn||ye===lo||ye===zn||ye===Fl||ye===Bl,Ue=Oe.getClearColor(),Fe=Oe.getClearAlpha(),Ye=Ue.r,ze=Ue.g,Ge=Ue.b;Pe?(m[0]=Ye,m[1]=ze,m[2]=Ge,m[3]=Fe,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=Ye,_[1]=ze,_[2]=Ge,_[3]=Fe,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}I&&(G|=R.DEPTH_BUFFER_BIT),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ie.dispose(),De.dispose(),ge.dispose(),He.dispose(),b.dispose(),Y.dispose(),be.dispose(),Ce.dispose(),re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",lt),Q.removeEventListener("sessionend",Ke),ve&&(ve.dispose(),ve=null),nt.stop()};function Te(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=Se.autoReset,I=me.enabled,H=me.autoUpdate,G=me.needsUpdate,B=me.type;w(),Se.autoReset=y,me.enabled=I,me.autoUpdate=H,me.needsUpdate=G,me.type=B}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function O(y){const I=y.target;I.removeEventListener("dispose",O),se(I)}function se(y){_e(y),ge.remove(y)}function _e(y){const I=ge.get(y).programs;I!==void 0&&(I.forEach(function(H){re.releaseProgram(H)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,G,B,ye){I===null&&(I=Be);const Pe=B.isMesh&&B.matrixWorld.determinant()<0,Ue=Rc(y,I,H,G,B);te.setMaterial(G,Pe);let Fe=H.index,Ye=1;if(G.wireframe===!0){if(Fe=V.getWireframeAttribute(H),Fe===void 0)return;Ye=2}const ze=H.drawRange,Ge=H.attributes.position;let ut=ze.start*Ye,Pt=(ze.start+ze.count)*Ye;ye!==null&&(ut=Math.max(ut,ye.start*Ye),Pt=Math.min(Pt,(ye.start+ye.count)*Ye)),Fe!==null?(ut=Math.max(ut,0),Pt=Math.min(Pt,Fe.count)):Ge!=null&&(ut=Math.max(ut,0),Pt=Math.min(Pt,Ge.count));const pt=Pt-ut;if(pt<0||pt===1/0)return;be.setup(B,G,Ue,H,Fe);let Jt,st=at;if(Fe!==null&&(Jt=x.get(Fe),st=Xe,st.setIndex(Jt)),B.isMesh)G.wireframe===!0?(te.setLineWidth(G.wireframeLinewidth*we()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(B.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),te.setLineWidth(ke*we()),B.isLineSegments?st.setMode(R.LINES):B.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else B.isPoints?st.setMode(R.POINTS):B.isSprite&&st.setMode(R.TRIANGLES);if(B.isBatchedMesh)st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)st.renderInstances(ut,pt,B.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Jr=Math.min(H.instanceCount,ke);st.renderInstances(ut,pt,Jr)}else st.render(ut,pt)};function je(y,I,H){y.transparent===!0&&y.side===on&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,ir(y,I,H),y.side=yn,y.needsUpdate=!0,ir(y,I,H),y.side=on):ir(y,I,H)}this.compile=function(y,I,H=null){H===null&&(H=y),p=De.get(H),p.init(),E.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),y!==H&&y.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(g._useLegacyLights);const G=new Set;return y.traverse(function(B){const ye=B.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Ue=ye[Pe];je(Ue,H,B),G.add(Ue)}else je(ye,H,B),G.add(ye)}),E.pop(),p=null,G},this.compileAsync=function(y,I,H=null){const G=this.compile(y,I,H);return new Promise(B=>{function ye(){if(G.forEach(function(Pe){ge.get(Pe).currentProgram.isReady()&&G.delete(Pe)}),G.size===0){B(y);return}setTimeout(ye,10)}K.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $e=null;function Je(y){$e&&$e(y)}function lt(){nt.stop()}function Ke(){nt.start()}const nt=new nc;nt.setAnimationLoop(Je),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(y){$e=y,Q.setAnimationLoop(y),y===null?nt.stop():nt.start()},Q.addEventListener("sessionstart",lt),Q.addEventListener("sessionend",Ke),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(I),I=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,I,A),p=De.get(y,E.length),p.init(),E.push(p),Re.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ne.setFromProjectionMatrix(Re),ie=this.localClippingEnabled,k=fe.init(this.clippingPlanes,ie),S=Ie.get(y,f.length),S.init(),f.push(S),yt(y,I,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(q,j),this.info.render.frame++,k===!0&&fe.beginShadows();const H=p.state.shadowsArray;if(me.render(H,y,I),k===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1)&&Oe.render(S,y),p.setupLights(g._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let B=0,ye=G.length;B<ye;B++){const Pe=G[B];An(S,y,Pe,Pe.viewport)}}else An(S,y,I);A!==null&&(Ee.updateMultisampleRenderTarget(A),Ee.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(g,y,I),be.resetDefaultState(),N=-1,W=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function yt(y,I,H,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ne.intersectsSprite(y)){G&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Re);const Pe=Y.update(y),Ue=y.material;Ue.visible&&S.push(y,Pe,Ue,H,Me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ne.intersectsObject(y))){const Pe=Y.update(y),Ue=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Me.copy(Pe.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(Re)),Array.isArray(Ue)){const Fe=Pe.groups;for(let Ye=0,ze=Fe.length;Ye<ze;Ye++){const Ge=Fe[Ye],ut=Ue[Ge.materialIndex];ut&&ut.visible&&S.push(y,Pe,ut,H,Me.z,Ge)}}else Ue.visible&&S.push(y,Pe,Ue,H,Me.z,null)}}const ye=y.children;for(let Pe=0,Ue=ye.length;Pe<Ue;Pe++)yt(ye[Pe],I,H,G)}function An(y,I,H,G){const B=y.opaque,ye=y.transmissive,Pe=y.transparent;p.setupLightsView(H),k===!0&&fe.setGlobalState(g.clippingPlanes,H),ye.length>0&&tr(B,ye,I,H),G&&te.viewport(v.copy(G)),B.length>0&&nr(B,I,H),ye.length>0&&nr(ye,I,H),Pe.length>0&&nr(Pe,I,H),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function tr(y,I,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ye=ue.isWebGL2;ve===null&&(ve=new Gn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?ji:Sn,minFilter:Bn,samples:ye?4:0})),g.getDrawingBufferSize(Ae),ye?ve.setSize(Ae.x,Ae.y):ve.setSize(Gr(Ae.x),Gr(Ae.y));const Pe=g.getRenderTarget();g.setRenderTarget(ve),g.getClearColor(J),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear();const Ue=g.toneMapping;g.toneMapping=xn,nr(y,H,G),Ee.updateMultisampleRenderTarget(ve),Ee.updateRenderTargetMipmap(ve);let Fe=!1;for(let Ye=0,ze=I.length;Ye<ze;Ye++){const Ge=I[Ye],ut=Ge.object,Pt=Ge.geometry,pt=Ge.material,Jt=Ge.group;if(pt.side===on&&ut.layers.test(G.layers)){const st=pt.side;pt.side=Rt,pt.needsUpdate=!0,bo(ut,H,G,Pt,pt,Jt),pt.side=st,pt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ee.updateMultisampleRenderTarget(ve),Ee.updateRenderTargetMipmap(ve)),g.setRenderTarget(Pe),g.setClearColor(J,U),g.toneMapping=Ue}function nr(y,I,H){const G=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ye=y.length;B<ye;B++){const Pe=y[B],Ue=Pe.object,Fe=Pe.geometry,Ye=G===null?Pe.material:G,ze=Pe.group;Ue.layers.test(H.layers)&&bo(Ue,I,H,Fe,Ye,ze)}}function bo(y,I,H,G,B,ye){y.onBeforeRender(g,I,H,G,B,ye),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(g,I,H,G,y,ye),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=Rt,B.needsUpdate=!0,g.renderBufferDirect(H,I,G,B,y,ye),B.side=yn,B.needsUpdate=!0,g.renderBufferDirect(H,I,G,B,y,ye),B.side=on):g.renderBufferDirect(H,I,G,B,y,ye),y.onAfterRender(g,I,H,G,B,ye)}function ir(y,I,H){I.isScene!==!0&&(I=Be);const G=ge.get(y),B=p.state.lights,ye=p.state.shadowsArray,Pe=B.state.version,Ue=re.getParameters(y,B.state,ye,I,H),Fe=re.getProgramCacheKey(Ue);let Ye=G.programs;G.environment=y.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(y.isMeshStandardMaterial?b:He).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ye===void 0&&(y.addEventListener("dispose",O),Ye=new Map,G.programs=Ye);let ze=Ye.get(Fe);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===Pe)return Ao(y,Ue),ze}else Ue.uniforms=re.getUniforms(y),y.onBuild(H,Ue,g),y.onBeforeCompile(Ue,g),ze=re.acquireProgram(Ue,Fe),Ye.set(Fe,ze),G.uniforms=Ue.uniforms;const Ge=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ge.clippingPlanes=fe.uniform),Ao(y,Ue),G.needsLights=Lc(y),G.lightsStateVersion=Pe,G.needsLights&&(Ge.ambientLightColor.value=B.state.ambient,Ge.lightProbe.value=B.state.probe,Ge.directionalLights.value=B.state.directional,Ge.directionalLightShadows.value=B.state.directionalShadow,Ge.spotLights.value=B.state.spot,Ge.spotLightShadows.value=B.state.spotShadow,Ge.rectAreaLights.value=B.state.rectArea,Ge.ltc_1.value=B.state.rectAreaLTC1,Ge.ltc_2.value=B.state.rectAreaLTC2,Ge.pointLights.value=B.state.point,Ge.pointLightShadows.value=B.state.pointShadow,Ge.hemisphereLights.value=B.state.hemi,Ge.directionalShadowMap.value=B.state.directionalShadowMap,Ge.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ge.spotShadowMap.value=B.state.spotShadowMap,Ge.spotLightMatrix.value=B.state.spotLightMatrix,Ge.spotLightMap.value=B.state.spotLightMap,Ge.pointShadowMap.value=B.state.pointShadowMap,Ge.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function To(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Ir.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ao(y,I){const H=ge.get(y);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Rc(y,I,H,G,B){I.isScene!==!0&&(I=Be),Ee.resetTextureUnits();const ye=I.fog,Pe=G.isMeshStandardMaterial?I.environment:null,Ue=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:En,Fe=(G.isMeshStandardMaterial?b:He).get(G.envMap||Pe),Ye=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ge=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,Pt=!!H.morphAttributes.color;let pt=xn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=g.toneMapping);const Jt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Jt!==void 0?Jt.length:0,ke=ge.get(G),Jr=p.state.lights;if(k===!0&&(ie===!0||y!==W)){const Ut=y===W&&G.id===N;fe.setState(G,y,Ut)}let rt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Jr.state.version||ke.outputColorSpace!==Ue||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Fe||G.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==Ye||ke.vertexTangents!==ze||ke.morphTargets!==Ge||ke.morphNormals!==ut||ke.morphColors!==Pt||ke.toneMapping!==pt||ue.isWebGL2===!0&&ke.morphTargetsCount!==st)&&(rt=!0):(rt=!0,ke.__version=G.version);let wn=ke.currentProgram;rt===!0&&(wn=ir(G,I,B));let wo=!1,Pi=!1,Qr=!1;const Mt=wn.getUniforms(),Cn=ke.uniforms;if(te.useProgram(wn.program)&&(wo=!0,Pi=!0,Qr=!0),G.id!==N&&(N=G.id,Pi=!0),wo||W!==y){Mt.setValue(R,"projectionMatrix",y.projectionMatrix),Mt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Ut=Mt.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,Me.setFromMatrixPosition(y.matrixWorld)),ue.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,Pi=!0,Qr=!0)}if(B.isSkinnedMesh){Mt.setOptional(R,B,"bindMatrix"),Mt.setOptional(R,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(ue.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),Mt.setValue(R,"boneTexture",Ut.boneTexture,Ee)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Mt.setOptional(R,B,"batchingTexture"),Mt.setValue(R,"batchingTexture",B._matricesTexture,Ee));const es=H.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0&&ue.isWebGL2===!0)&&he.update(B,H,wn),(Pi||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,Mt.setValue(R,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Cn.envMap.value=Fe,Cn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Pi&&(Mt.setValue(R,"toneMappingExposure",g.toneMappingExposure),ke.needsLights&&Pc(Cn,Qr),ye&&G.fog===!0&&ne.refreshFogUniforms(Cn,ye),ne.refreshMaterialUniforms(Cn,G,$,z,ve),Ir.upload(R,To(ke),Cn,Ee)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ir.upload(R,To(ke),Cn,Ee),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(R,"center",B.center),Mt.setValue(R,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(R,"normalMatrix",B.normalMatrix),Mt.setValue(R,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ut=G.uniformsGroups;for(let ts=0,Dc=Ut.length;ts<Dc;ts++)if(ue.isWebGL2){const Co=Ut[ts];Ce.update(Co,wn),Ce.bind(Co,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Pc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Lc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,H){ge.get(y.texture).__webglTexture=I,ge.get(y.depthTexture).__webglTexture=H;const G=ge.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const H=ge.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,H=0){A=y,P=I,C=H;let G=!0,B=null,ye=!1,Pe=!1;if(y){const Fe=ge.get(y);Fe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):Fe.__webglFramebuffer===void 0?Ee.setupRenderTarget(y):Fe.__hasExternalTextures&&Ee.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);const Ye=y.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const ze=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?B=ze[I][H]:B=ze[I],ye=!0):ue.isWebGL2&&y.samples>0&&Ee.useMultisampledRTT(y)===!1?B=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[H]:B=ze,v.copy(y.viewport),T.copy(y.scissor),Z=y.scissorTest}else v.copy(oe).multiplyScalar($).floor(),T.copy(ae).multiplyScalar($).floor(),Z=xe;if(te.bindFramebuffer(R.FRAMEBUFFER,B)&&ue.drawBuffers&&G&&te.drawBuffers(y,B),te.viewport(v),te.scissor(T),te.setScissorTest(Z),ye){const Fe=ge.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Fe.__webglTexture,H)}else if(Pe){const Fe=ge.get(y.texture),Ye=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,H||0,Ye)}N=-1},this.readRenderTargetPixels=function(y,I,H,G,B,ye,Pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){te.bindFramebuffer(R.FRAMEBUFFER,Ue);try{const Fe=y.texture,Ye=Fe.format,ze=Fe.type;if(Ye!==kt&&Le.convert(Ye)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===ji&&(K.has("EXT_color_buffer_half_float")||ue.isWebGL2&&K.has("EXT_color_buffer_float"));if(ze!==Sn&&Le.convert(ze)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===jt&&(ue.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&H>=0&&H<=y.height-B&&R.readPixels(I,H,G,B,Le.convert(Ye),Le.convert(ze),ye)}finally{const Fe=A!==null?ge.get(A).__webglFramebuffer:null;te.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(y,I,H=0){const G=Math.pow(2,-H),B=Math.floor(I.image.width*G),ye=Math.floor(I.image.height*G);Ee.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,y.x,y.y,B,ye),te.unbindTexture()},this.copyTextureToTexture=function(y,I,H,G=0){const B=I.image.width,ye=I.image.height,Pe=Le.convert(H.format),Ue=Le.convert(H.type);Ee.setTexture2D(H,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,y.x,y.y,B,ye,Pe,Ue,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,Pe,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,G,y.x,y.y,Pe,Ue,I.image),G===0&&H.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(y,I,H,G,B=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=Math.round(y.max.x-y.min.x),Pe=Math.round(y.max.y-y.min.y),Ue=y.max.z-y.min.z+1,Fe=Le.convert(G.format),Ye=Le.convert(G.type);let ze;if(G.isData3DTexture)Ee.setTexture3D(G,0),ze=R.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ee.setTexture2DArray(G,0),ze=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Ge=R.getParameter(R.UNPACK_ROW_LENGTH),ut=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Pt=R.getParameter(R.UNPACK_SKIP_PIXELS),pt=R.getParameter(R.UNPACK_SKIP_ROWS),Jt=R.getParameter(R.UNPACK_SKIP_IMAGES),st=H.isCompressedTexture?H.mipmaps[B]:H.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,y.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,y.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,y.min.z),H.isDataTexture||H.isData3DTexture?R.texSubImage3D(ze,B,I.x,I.y,I.z,ye,Pe,Ue,Fe,Ye,st.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(ze,B,I.x,I.y,I.z,ye,Pe,Ue,Fe,st.data):R.texSubImage3D(ze,B,I.x,I.y,I.z,ye,Pe,Ue,Fe,Ye,st),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ge),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,pt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Jt),B===0&&G.generateMipmaps&&R.generateMipmap(ze),te.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ee.setTextureCube(y,0):y.isData3DTexture?Ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ee.setTexture2DArray(y,0):Ee.setTexture2D(y,0),te.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,te.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===co?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Xr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class o_ extends s_{}o_.prototype.isWebGL1Renderer=!0;class gg extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class a_ extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=xt,u=xt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const di=new Qe,Ja=new Qe,Ar=[],Qa=new Yn,l_=new Qe,Oi=new Ot,Fi=new wi;class vg extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,l_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),Qa.copy(e.boundingBox).applyMatrix4(di),this.boundingBox.union(Qa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),Fi.copy(e.boundingSphere).applyMatrix4(di),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,di),Ja.multiplyMatrices(n,di),Oi.matrixWorld=Ja,Oi.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=s,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new a_(new Float32Array(r*this.count),r,this.count,zl,jt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new D,tl=new D,nl=new Qe,Us=new Yr,wr=new wi;class Ks extends ct{constructor(e=new St,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)el.fromBufferAttribute(t,r-1),tl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=el.distanceTo(tl);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;nl.copy(r).invert(),Us.copy(e.ray).applyMatrix4(nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,u=new D,h=new D,d=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let g=f,M=E-1;g<M;g+=m){const P=_.getX(g),C=_.getX(g+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,C),Us.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let g=f,M=E-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Us.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const il=new D,rl=new D;class uc extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)il.fromBufferAttribute(t,r),rl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+il.distanceTo(rl);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,m=(a-u)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],a=[],o=new D,l=new Qe;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(_t(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _o extends Zt{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends _o{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Cr=new D,Ns=new go,Is=new go,Os=new go;class u_ extends Zt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Cr.subVectors(r[0],r[1]).add(r[0]),c=Cr);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Cr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),S=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);S<1e-4&&(S=1),_<1e-4&&(_=S),p<1e-4&&(p=S),Ns.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,S,p),Is.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,S,p),Os.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,S,p)}else this.curveType==="catmullrom"&&(Ns.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Is.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Os.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ns.calc(l),Is.calc(l),Os.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function h_(i,e){const t=1-i;return t*t*e}function d_(i,e){return 2*(1-i)*i*e}function f_(i,e){return i*i*e}function Vi(i,e,t,n){return h_(i,e)+d_(i,t)+f_(i,n)}function p_(i,e){const t=1-i;return t*t*t*e}function m_(i,e){const t=1-i;return 3*t*t*i*e}function __(i,e){return 3*(1-i)*i*i*e}function g_(i,e){return i*i*i*e}function Wi(i,e,t,n,r){return p_(i,e)+m_(i,t)+__(i,n)+g_(i,r)}class hc extends Zt{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,r.x,s.x,a.x,o.x),Wi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends Zt{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wi(e,r.x,s.x,a.x,o.x),Wi(e,r.y,s.y,a.y,o.y),Wi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dc extends Zt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends Zt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends Zt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,r.x,s.x,a.x),Vi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends Zt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,r.x,s.x,a.x),Vi(e,r.y,s.y,a.y),Vi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pc extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(sl(o,l.x,c.x,u.x,h.x),sl(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var $s=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:u_,CubicBezierCurve:hc,CubicBezierCurve3:v_,EllipseCurve:_o,LineCurve:dc,LineCurve3:x_,QuadraticBezierCurve:fc,QuadraticBezierCurve3:S_,SplineCurve:pc});class y_ extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $s[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new $s[r.type]().fromJSON(r))}return this}}class ol extends y_{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dc(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new fc(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new hc(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new _o(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mc extends St{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],m=[];let _=0;const S=[],p=n/2;let f=0;E(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(m,2));function E(){const M=new D,P=new D;let C=0;const A=(t-e)/n;for(let N=0;N<=s;N++){const W=[],v=N/s,T=v*(t-e)+e;for(let Z=0;Z<=r;Z++){const J=Z/r,U=J*l+o,X=Math.sin(U),z=Math.cos(U);P.x=T*X,P.y=-v*n+p,P.z=T*z,h.push(P.x,P.y,P.z),M.set(X,A,z).normalize(),d.push(M.x,M.y,M.z),m.push(J,1-v),W.push(_++)}S.push(W)}for(let N=0;N<r;N++)for(let W=0;W<s;W++){const v=S[W][N],T=S[W+1][N],Z=S[W+1][N+1],J=S[W][N+1];u.push(v,T,J),u.push(T,Z,J),C+=6}c.addGroup(f,C,0),f+=C}function g(M){const P=_,C=new le,A=new D;let N=0;const W=M===!0?e:t,v=M===!0?1:-1;for(let Z=1;Z<=r;Z++)h.push(0,p*v,0),d.push(0,v,0),m.push(.5,.5),_++;const T=_;for(let Z=0;Z<=r;Z++){const U=Z/r*l+o,X=Math.cos(U),z=Math.sin(U);A.x=W*z,A.y=p*v,A.z=W*X,h.push(A.x,A.y,A.z),d.push(0,v,0),C.x=X*.5+.5,C.y=z*.5*v+.5,m.push(C.x,C.y),_++}for(let Z=0;Z<r;Z++){const J=P+Z,U=T+Z;M===!0?u.push(U,U+1,J):u.push(U+1,U,J),N+=3}c.addGroup(f,N,M===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends St{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const g=new D,M=new D,P=new D;for(let C=0;C<t.length;C+=3)m(t[C+0],g),m(t[C+1],M),m(t[C+2],P),l(g,M,P,E)}function l(E,g,M,P){const C=P+1,A=[];for(let N=0;N<=C;N++){A[N]=[];const W=E.clone().lerp(M,N/C),v=g.clone().lerp(M,N/C),T=C-N;for(let Z=0;Z<=T;Z++)Z===0&&N===C?A[N][Z]=W:A[N][Z]=W.clone().lerp(v,Z/T)}for(let N=0;N<C;N++)for(let W=0;W<2*(C-N)-1;W++){const v=Math.floor(W/2);W%2===0?(d(A[N][v+1]),d(A[N+1][v]),d(A[N][v])):(d(A[N][v+1]),d(A[N+1][v+1]),d(A[N+1][v]))}}function c(E){const g=new D;for(let M=0;M<s.length;M+=3)g.x=s[M+0],g.y=s[M+1],g.z=s[M+2],g.normalize().multiplyScalar(E),s[M+0]=g.x,s[M+1]=g.y,s[M+2]=g.z}function u(){const E=new D;for(let g=0;g<s.length;g+=3){E.x=s[g+0],E.y=s[g+1],E.z=s[g+2];const M=p(E)/2/Math.PI+.5,P=f(E)/Math.PI+.5;a.push(M,1-P)}_(),h()}function h(){for(let E=0;E<a.length;E+=6){const g=a[E+0],M=a[E+2],P=a[E+4],C=Math.max(g,M,P),A=Math.min(g,M,P);C>.9&&A<.1&&(g<.2&&(a[E+0]+=1),M<.2&&(a[E+2]+=1),P<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,g){const M=E*3;g.x=e[M+0],g.y=e[M+1],g.z=e[M+2]}function _(){const E=new D,g=new D,M=new D,P=new D,C=new le,A=new le,N=new le;for(let W=0,v=0;W<s.length;W+=9,v+=6){E.set(s[W+0],s[W+1],s[W+2]),g.set(s[W+3],s[W+4],s[W+5]),M.set(s[W+6],s[W+7],s[W+8]),C.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),N.set(a[v+4],a[v+5]),P.copy(E).add(g).add(M).divideScalar(3);const T=p(P);S(C,v+0,E,T),S(A,v+2,g,T),S(N,v+4,M,T)}}function S(E,g,M,P){P<0&&E.x===1&&(a[g]=E.x-1),M.x===0&&M.z===0&&(a[g]=P/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.vertices,e.indices,e.radius,e.details)}}class M_ extends ol{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ol().fromJSON(r))}return this}}const E_={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=_c(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,m;if(n&&(s=C_(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let _=t;_<r;_+=t)h=i[_],d=i[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return $i(s,a,t,o,l,m,0),a}};function _c(i,e,t,n,r){let s,a;if(r===z_(i,e,t,n)>0)for(s=e;s<t;s+=n)a=al(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=al(s,i[s],i[s+1],a);return a&&$r(a,a.next)&&(Ji(a),a=a.next),a}function Vn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($r(t,t.next)||ot(t.prev,t,t.next)===0)){if(Ji(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(i,e,t,n,r,s,a){if(!i)return;!a&&s&&U_(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?T_(i,n,r,s):b_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ji(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=A_(Vn(i),e,t),$i(i,e,t,n,r,s,2)):a===2&&w_(i,e,t,n,r,s):$i(Vn(i),e,t,n,r,s,1);break}}}function b_(i){const e=i.prev,t=i,n=i.next;if(ot(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=m&&vi(r,o,s,l,a,c,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function T_(i,e,t,n){const r=i.prev,s=i,a=i.next;if(ot(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,S=o>l?o>c?o:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,f=Zs(m,_,e,t,n),E=Zs(S,p,e,t,n);let g=i.prevZ,M=i.nextZ;for(;g&&g.z>=f&&M&&M.z<=E;){if(g.x>=m&&g.x<=S&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&vi(o,u,l,h,c,d,g.x,g.y)&&ot(g.prev,g,g.next)>=0||(g=g.prevZ,M.x>=m&&M.x<=S&&M.y>=_&&M.y<=p&&M!==r&&M!==a&&vi(o,u,l,h,c,d,M.x,M.y)&&ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;g&&g.z>=f;){if(g.x>=m&&g.x<=S&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&vi(o,u,l,h,c,d,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=E;){if(M.x>=m&&M.x<=S&&M.y>=_&&M.y<=p&&M!==r&&M!==a&&vi(o,u,l,h,c,d,M.x,M.y)&&ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function A_(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!$r(r,s)&&gc(r,n,n.next,s)&&Zi(r,s)&&Zi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ji(n),Ji(n.next),n=i=s),n=n.next}while(n!==i);return Vn(n)}function w_(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O_(a,o)){let l=vc(a,o);a=Vn(a,a.next),l=Vn(l,l.next),$i(a,e,t,n,r,s,0),$i(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function C_(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=_c(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(I_(c));for(r.sort(R_),s=0;s<r.length;s++)t=P_(r[s],t);return t}function R_(i,e){return i.x-e.x}function P_(i,e){const t=L_(i,e);if(!t)return e;const n=vc(t,i);return Vn(n,n.next),Vn(t,t.next)}function L_(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&vi(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Zi(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&D_(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function D_(i,e){return ot(i.prev,i,e.prev)<0&&ot(e.next,i,i.next)<0}function U_(i,e,t,n){let r=i;do r.z===0&&(r.z=Zs(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,N_(r)}function N_(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Zs(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function I_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function O_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!F_(i,e)&&(Zi(i,e)&&Zi(e,i)&&B_(i,e)&&(ot(i.prev,i,e.prev)||ot(i,e.prev,e))||$r(i,e)&&ot(i.prev,i,i.next)>0&&ot(e.prev,e,e.next)>0)}function ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $r(i,e){return i.x===e.x&&i.y===e.y}function gc(i,e,t,n){const r=Pr(ot(i,e,t)),s=Pr(ot(i,e,n)),a=Pr(ot(t,n,i)),o=Pr(ot(t,n,e));return!!(r!==s&&a!==o||r===0&&Rr(i,t,e)||s===0&&Rr(i,n,e)||a===0&&Rr(t,i,n)||o===0&&Rr(t,e,n))}function Rr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pr(i){return i>0?1:i<0?-1:0}function F_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zi(i,e){return ot(i.prev,i,i.next)<0?ot(i,e,i.next)>=0&&ot(i,i.prev,e)>=0:ot(i,e,i.prev)<0||ot(i,i.next,e)<0}function B_(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function vc(i,e){const t=new Js(i.i,i.x,i.y),n=new Js(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function al(i,e,t,n){const r=new Js(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ji(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Js(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z_(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Xi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Xi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ll(e),cl(n,e);let a=e.length;t.forEach(ll);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,cl(n,t[l]);const o=E_.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ll(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class xc extends St{constructor(e=new M_([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:H_;let g,M=!1,P,C,A,N;f&&(g=f.getSpacedPoints(u),M=!0,d=!1,P=f.computeFrenetFrames(u,!1),C=new D,A=new D,N=new D),d||(p=0,m=0,_=0,S=0);const W=o.extractPoints(c);let v=W.shape;const T=W.holes;if(!Xi.isClockWise(v)){v=v.reverse();for(let R=0,de=T.length;R<de;R++){const K=T[R];Xi.isClockWise(K)&&(T[R]=K.reverse())}}const J=Xi.triangulateShape(v,T),U=v;for(let R=0,de=T.length;R<de;R++){const K=T[R];v=v.concat(K)}function X(R,de,K){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(de,K)}const z=v.length,$=J.length;function q(R,de,K){let ue,te,Se;const ge=R.x-de.x,Ee=R.y-de.y,He=K.x-R.x,b=K.y-R.y,x=ge*ge+Ee*Ee,V=ge*b-Ee*He;if(Math.abs(V)>Number.EPSILON){const Y=Math.sqrt(x),re=Math.sqrt(He*He+b*b),ne=de.x-Ee/Y,Ie=de.y+ge/Y,De=K.x-b/re,fe=K.y+He/re,me=((De-ne)*b-(fe-Ie)*He)/(ge*b-Ee*He);ue=ne+ge*me-R.x,te=Ie+Ee*me-R.y;const Oe=ue*ue+te*te;if(Oe<=2)return new le(ue,te);Se=Math.sqrt(Oe/2)}else{let Y=!1;ge>Number.EPSILON?He>Number.EPSILON&&(Y=!0):ge<-Number.EPSILON?He<-Number.EPSILON&&(Y=!0):Math.sign(Ee)===Math.sign(b)&&(Y=!0),Y?(ue=-Ee,te=ge,Se=Math.sqrt(x)):(ue=ge,te=Ee,Se=Math.sqrt(x/2))}return new le(ue/Se,te/Se)}const j=[];for(let R=0,de=U.length,K=de-1,ue=R+1;R<de;R++,K++,ue++)K===de&&(K=0),ue===de&&(ue=0),j[R]=q(U[R],U[K],U[ue]);const oe=[];let ae,xe=j.concat();for(let R=0,de=T.length;R<de;R++){const K=T[R];ae=[];for(let ue=0,te=K.length,Se=te-1,ge=ue+1;ue<te;ue++,Se++,ge++)Se===te&&(Se=0),ge===te&&(ge=0),ae[ue]=q(K[ue],K[Se],K[ge]);oe.push(ae),xe=xe.concat(ae)}for(let R=0;R<p;R++){const de=R/p,K=m*Math.cos(de*Math.PI/2),ue=_*Math.sin(de*Math.PI/2)+S;for(let te=0,Se=U.length;te<Se;te++){const ge=X(U[te],j[te],ue);Re(ge.x,ge.y,-K)}for(let te=0,Se=T.length;te<Se;te++){const ge=T[te];ae=oe[te];for(let Ee=0,He=ge.length;Ee<He;Ee++){const b=X(ge[Ee],ae[Ee],ue);Re(b.x,b.y,-K)}}}const Ne=_+S;for(let R=0;R<z;R++){const de=d?X(v[R],xe[R],Ne):v[R];M?(A.copy(P.normals[0]).multiplyScalar(de.x),C.copy(P.binormals[0]).multiplyScalar(de.y),N.copy(g[0]).add(A).add(C),Re(N.x,N.y,N.z)):Re(de.x,de.y,0)}for(let R=1;R<=u;R++)for(let de=0;de<z;de++){const K=d?X(v[de],xe[de],Ne):v[de];M?(A.copy(P.normals[R]).multiplyScalar(K.x),C.copy(P.binormals[R]).multiplyScalar(K.y),N.copy(g[R]).add(A).add(C),Re(N.x,N.y,N.z)):Re(K.x,K.y,h/u*R)}for(let R=p-1;R>=0;R--){const de=R/p,K=m*Math.cos(de*Math.PI/2),ue=_*Math.sin(de*Math.PI/2)+S;for(let te=0,Se=U.length;te<Se;te++){const ge=X(U[te],j[te],ue);Re(ge.x,ge.y,h+K)}for(let te=0,Se=T.length;te<Se;te++){const ge=T[te];ae=oe[te];for(let Ee=0,He=ge.length;Ee<He;Ee++){const b=X(ge[Ee],ae[Ee],ue);M?Re(b.x,b.y+g[u-1].y,g[u-1].x+K):Re(b.x,b.y,h+K)}}}k(),ie();function k(){const R=r.length/3;if(d){let de=0,K=z*de;for(let ue=0;ue<$;ue++){const te=J[ue];Ae(te[2]+K,te[1]+K,te[0]+K)}de=u+p*2,K=z*de;for(let ue=0;ue<$;ue++){const te=J[ue];Ae(te[0]+K,te[1]+K,te[2]+K)}}else{for(let de=0;de<$;de++){const K=J[de];Ae(K[2],K[1],K[0])}for(let de=0;de<$;de++){const K=J[de];Ae(K[0]+z*u,K[1]+z*u,K[2]+z*u)}}n.addGroup(R,r.length/3-R,0)}function ie(){const R=r.length/3;let de=0;ve(U,de),de+=U.length;for(let K=0,ue=T.length;K<ue;K++){const te=T[K];ve(te,de),de+=te.length}n.addGroup(R,r.length/3-R,1)}function ve(R,de){let K=R.length;for(;--K>=0;){const ue=K;let te=K-1;te<0&&(te=R.length-1);for(let Se=0,ge=u+p*2;Se<ge;Se++){const Ee=z*Se,He=z*(Se+1),b=de+ue+Ee,x=de+te+Ee,V=de+te+He,Y=de+ue+He;Me(b,x,V,Y)}}}function Re(R,de,K){l.push(R),l.push(de),l.push(K)}function Ae(R,de,K){Be(R),Be(de),Be(K);const ue=r.length/3,te=E.generateTopUV(n,r,ue-3,ue-2,ue-1);we(te[0]),we(te[1]),we(te[2])}function Me(R,de,K,ue){Be(R),Be(de),Be(ue),Be(de),Be(K),Be(ue);const te=r.length/3,Se=E.generateSideWallUV(n,r,te-6,te-3,te-2,te-1);we(Se[0]),we(Se[1]),we(Se[3]),we(Se[1]),we(Se[2]),we(Se[3])}function Be(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function we(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return G_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new $s[r.type]().fromJSON(r)),new xc(n,e.options)}}const H_={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],m=e[r*3+1],_=e[r*3+2],S=e[s*3],p=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-_),new le(S,1-f)]:[new le(o,1-l),new le(u,1-h),new le(m,1-_),new le(p,1-f)]}};function G_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xo extends vo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xo(e.radius,e.detail)}}class Sc extends St{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,d=new D,m=[],_=[],S=[],p=[];for(let f=0;f<=n;f++){const E=[],g=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const C=P/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+g*o),h.y=e*Math.cos(a+g*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+g*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),p.push(C+M,1-g),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const g=u[f][E+1],M=u[f][E],P=u[f+1][E],C=u[f+1][E+1];(f!==0||a>0)&&m.push(g,M,C),(f!==n-1||l<Math.PI)&&m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(S,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xg extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sg extends Ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ul={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class k_{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const V_=new k_;class So{constructor(e){this.manager=e!==void 0?e:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";class W_ extends So{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ul.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ki("img");function l(){u(),ul.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class yg extends So{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new W_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mg extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fs=new Qe,hl=new D,dl=new D;class yc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X_ extends yc{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ti*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eg extends Zr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new X_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Y_ extends yc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Y_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tg extends Zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ag extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const fl=new Qe;class wg{constructor(e,t,n=0,r=1/0){this.ray=new Yr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fl),this}intersectObject(e,t=!0,n=[]){return Qs(e,this,n,t),n.sort(pl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Qs(e[r],this,n,t);return n.sort(pl),n}}function pl(i,e){return i.distance-e.distance}function Qs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Qs(r[s],e,t,!0)}}class ml{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const q_=new D,_l=new qe,gl=new qe;class Cg extends ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new xo(t);r.rotateY(Math.PI*.5),this.material=new fo({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new Ft(a,3)),this.add(new Ot(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");_l.copy(this.light.color),gl.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?_l:gl;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(q_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Rg extends uc{constructor(e=10,t=10,n=4473924,r=8947848){n=new qe(n),r=new qe(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,_=-o;d<=t;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=d===s?n:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const u=new St;u.setAttribute("position",new tt(l,3)),u.setAttribute("color",new tt(c,3));const h=new Kr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const vl=new D,Lr=new D,xl=new D;class Pg extends ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new St;r.setAttribute("position",new tt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Kr({fog:!1,toneMapped:!1});this.lightPlane=new Ks(r,s),this.add(this.lightPlane),r=new St,r.setAttribute("position",new tt([0,0,0,0,0,1],3)),this.targetLine=new Ks(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.light.matrixWorld),Lr.setFromMatrixPosition(this.light.target.matrixWorld),xl.subVectors(Lr,vl),this.lightPlane.lookAt(Lr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Lr),this.targetLine.scale.z=xl.length()}}class Lg extends uc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new St;r.setAttribute("position",new tt(t,3)),r.setAttribute("color",new tt(n,3));const s=new Kr({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function j_(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function xi(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+a+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var Sl=Array.prototype.forEach,Bi=Array.prototype.slice,ee={BREAK:{},extend:function(e){return this.each(Bi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Bi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Bi.call(arguments);return function(){for(var t=Bi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Sl&&e.forEach&&e.forEach===Sl)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,n||e.apply(s,a)}var l=n||!r;clearTimeout(r),r=setTimeout(o,t),l&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():Bi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},K_=[{litmus:ee.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:xi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:xi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:xi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:xi}}},{litmus:ee.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ee.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ee.isObject,conversions:{RGBA_OBJ:{read:function(e){return ee.isNumber(e.r)&&ee.isNumber(e.g)&&ee.isNumber(e.b)&&ee.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ee.isNumber(e.r)&&ee.isNumber(e.g)&&ee.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ee.isNumber(e.h)&&ee.isNumber(e.s)&&ee.isNumber(e.v)&&ee.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ee.isNumber(e.h)&&ee.isNumber(e.s)&&ee.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],zi=void 0,Dr=void 0,eo=function(){Dr=!1;var e=arguments.length>1?ee.toArray(arguments):arguments[0];return ee.each(K_,function(t){if(t.litmus(e))return ee.each(t.conversions,function(n,r){if(zi=n.read(e),Dr===!1&&zi!==!1)return Dr=zi,zi.conversionName=r,zi.conversion=n,ee.BREAK}),ee.BREAK}),Dr},yl=void 0,kr={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),a=s-r,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(yl=t*8)|e&~(255<<yl)}},$_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Vt=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Wt=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Mn=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(n)}},bn=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Tn=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},vt=function(){function i(){if(Vt(this,i),this.__state=eo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Wt(i,[{key:"toString",value:function(){return xi(this)}},{key:"toHexString",value:function(){return xi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function yo(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(vt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(vt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Mo(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(vt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(vt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}vt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=kr.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")ee.extend(i.__state,kr.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};vt.recalculateHSV=function(i){var e=kr.rgb_to_hsv(i.r,i.g,i.b);ee.extend(i.__state,{s:e.s,v:e.v}),ee.isNaN(e.h)?ee.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};vt.COMPONENTS=["r","g","b","h","s","v","hex","a"];yo(vt.prototype,"r",2);yo(vt.prototype,"g",1);yo(vt.prototype,"b",0);Mo(vt.prototype,"h");Mo(vt.prototype,"s");Mo(vt.prototype,"v");Object.defineProperty(vt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(vt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=kr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var qn=function(){function i(e,t){Vt(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Wt(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Z_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Mc={};ee.each(Z_,function(i,e){ee.each(i,function(t){Mc[t]=e})});var J_=/(\d+(\.\d+)?)px/;function Xt(i){if(i==="0"||ee.isUndefined(i))return 0;var e=i.match(J_);return ee.isNull(e)?0:parseFloat(e[1])}var F={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,s=t;ee.isUndefined(s)&&(s=!0),ee.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var s=n||{},a=Mc[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;ee.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}ee.defaults(o,r),e.dispatchEvent(o)},bind:function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),F},unbind:function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),F},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return F},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return F},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Xt(t["border-left-width"])+Xt(t["border-right-width"])+Xt(t["padding-left"])+Xt(t["padding-right"])+Xt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Xt(t["border-top-width"])+Xt(t["border-bottom-width"])+Xt(t["padding-top"])+Xt(t["padding-bottom"])+Xt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ec=function(i){bn(e,i);function e(t,n){Vt(this,e);var r=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return F.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Wt(e,[{key:"setValue",value:function(n){var r=Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qn),Q_=function(i){bn(e,i);function e(t,n,r){Vt(this,e);var s=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r,o=s;if(s.__select=document.createElement("select"),ee.isArray(a)){var l={};ee.each(a,function(c){l[c]=c}),a=l}return ee.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),F.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return Wt(e,[{key:"setValue",value:function(n){var r=Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return F.isActive(this.__select)?this:(this.__select.value=this.getValue(),Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(qn),eg=function(i){bn(e,i);function e(t,n){Vt(this,e);var r=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),F.bind(r.__input,"keyup",a),F.bind(r.__input,"change",a),F.bind(r.__input,"blur",o),F.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Wt(e,[{key:"updateDisplay",value:function(){return F.isActive(this.__input)||(this.__input.value=this.getValue()),Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qn);function Ml(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var bc=function(i){bn(e,i);function e(t,n,r){Vt(this,e);var s=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,ee.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ml(s.__impliedStep),s}return Wt(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ml(n),this}}]),e}(qn);function tg(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Vr=function(i){bn(e,i);function e(t,n,r){Vt(this,e);var s=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var _=parseFloat(a.__input.value);ee.isNaN(_)||a.setValue(_)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(_){var S=o-_.clientY;a.setValue(a.getValue()+S*a.__impliedStep),o=_.clientY}function d(){F.unbind(window,"mousemove",h),F.unbind(window,"mouseup",d),c()}function m(_){F.bind(window,"mousemove",h),F.bind(window,"mouseup",d),o=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),F.bind(s.__input,"change",l),F.bind(s.__input,"blur",u),F.bind(s.__input,"mousedown",m),F.bind(s.__input,"keydown",function(_){_.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Wt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():tg(this.getValue(),this.__precision),Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(bc);function El(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var to=function(i){bn(e,i);function e(t,n,r,s,a){Vt(this,e);var o=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),F.bind(o.__background,"mousedown",c),F.bind(o.__background,"touchstart",d),F.addClass(o.__background,"slider"),F.addClass(o.__foreground,"slider-fg");function c(S){document.activeElement.blur(),F.bind(window,"mousemove",u),F.bind(window,"mouseup",h),u(S)}function u(S){S.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(El(S.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){F.unbind(window,"mousemove",u),F.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(S){S.touches.length===1&&(F.bind(window,"touchmove",m),F.bind(window,"touchend",_),m(S))}function m(S){var p=S.touches[0].clientX,f=l.__background.getBoundingClientRect();l.setValue(El(p,f.left,f.right,l.__min,l.__max))}function _(){F.unbind(window,"touchmove",m),F.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Wt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Mn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(bc),Tc=function(i){bn(e,i);function e(t,n,r){Vt(this,e);var s=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,F.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),F.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Wt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(qn),no=function(i){bn(e,i);function e(t,n){Vt(this,e);var r=Tn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new vt(r.getValue()),r.__temp=new vt(0);var s=r;r.domElement=document.createElement("div"),F.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",F.bind(r.__input,"keydown",function(S){S.keyCode===13&&h.call(this)}),F.bind(r.__input,"blur",h),F.bind(r.__selector,"mousedown",function(){F.addClass(this,"drag").bind(window,"mouseup",function(){F.removeClass(s.__selector,"drag")})}),F.bind(r.__selector,"touchstart",function(){F.addClass(this,"drag").bind(window,"touchend",function(){F.removeClass(s.__selector,"drag")})});var a=document.createElement("div");ee.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ee.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ee.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ee.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ee.extend(a.style,{width:"100%",height:"100%",background:"none"}),bl(a,"top","rgba(0,0,0,0)","#000"),ee.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ig(r.__hue_field),ee.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),F.bind(r.__saturation_field,"mousedown",o),F.bind(r.__saturation_field,"touchstart",o),F.bind(r.__field_knob,"mousedown",o),F.bind(r.__field_knob,"touchstart",o),F.bind(r.__hue_field,"mousedown",l),F.bind(r.__hue_field,"touchstart",l);function o(S){m(S),F.bind(window,"mousemove",m),F.bind(window,"touchmove",m),F.bind(window,"mouseup",c),F.bind(window,"touchend",c)}function l(S){_(S),F.bind(window,"mousemove",_),F.bind(window,"touchmove",_),F.bind(window,"mouseup",u),F.bind(window,"touchend",u)}function c(){F.unbind(window,"mousemove",m),F.unbind(window,"touchmove",m),F.unbind(window,"mouseup",c),F.unbind(window,"touchend",c),d()}function u(){F.unbind(window,"mousemove",_),F.unbind(window,"touchmove",_),F.unbind(window,"mouseup",u),F.unbind(window,"touchend",u),d()}function h(){var S=eo(this.value);S!==!1?(s.__color.__state=S,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function m(S){S.type.indexOf("touch")===-1&&S.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),f=S.touches&&S.touches[0]||S,E=f.clientX,g=f.clientY,M=(E-p.left)/(p.right-p.left),P=1-(g-p.top)/(p.bottom-p.top);return P>1?P=1:P<0&&(P=0),M>1?M=1:M<0&&(M=0),s.__color.v=P,s.__color.s=M,s.setValue(s.__color.toOriginal()),!1}function _(S){S.type.indexOf("touch")===-1&&S.preventDefault();var p=s.__hue_field.getBoundingClientRect(),f=S.touches&&S.touches[0]||S,E=f.clientY,g=1-(E-p.top)/(p.bottom-p.top);return g>1?g=1:g<0&&(g=0),s.__color.h=g*360,s.setValue(s.__color.toOriginal()),!1}return r}return Wt(e,[{key:"updateDisplay",value:function(){var n=eo(this.getValue());if(n!==!1){var r=!1;ee.each(vt.COMPONENTS,function(o){if(!ee.isUndefined(n[o])&&!ee.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&ee.extend(this.__color.__state,n)}ee.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;ee.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,bl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ee.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(qn),ng=["-moz-","-o-","-webkit-","-ms-",""];function bl(i,e,t,n){i.style.background="",ee.each(ng,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ig(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var rg={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},sg=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,og=function(e,t){var n=e[t];return ee.isArray(arguments[2])||ee.isObject(arguments[2])?new Q_(e,t,arguments[2]):ee.isNumber(n)?ee.isNumber(arguments[2])&&ee.isNumber(arguments[3])?ee.isNumber(arguments[4])?new to(e,t,arguments[2],arguments[3],arguments[4]):new to(e,t,arguments[2],arguments[3]):ee.isNumber(arguments[4])?new Vr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Vr(e,t,{min:arguments[2],max:arguments[3]}):ee.isString(n)?new eg(e,t):ee.isFunction(n)?new Tc(e,t,""):ee.isBoolean(n)?new Ec(e,t):null};function ag(i){setTimeout(i,1e3/60)}var lg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ag,cg=function(){function i(){Vt(this,i),this.backgroundElement=document.createElement("div"),ee.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),F.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ee.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;F.bind(this.backgroundElement,"click",function(){e.hide()})}return Wt(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ee.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",F.unbind(t.domElement,"webkitTransitionEnd",r),F.unbind(t.domElement,"transitionend",r),F.unbind(t.domElement,"oTransitionEnd",r)};F.bind(this.domElement,"webkitTransitionEnd",n),F.bind(this.domElement,"transitionend",n),F.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-F.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-F.getHeight(this.domElement)/2+"px"}}]),i}(),ug=j_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);rg.inject(ug);var Tl="dg",Al=72,wl=20,Qi="Default",Hi=function(){try{return!!window.localStorage}catch{return!1}}(),Yi=void 0,Cl=!0,pi=void 0,Bs=!1,Ac=[],et=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),F.addClass(this.domElement,Tl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ee.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=ee.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ee.isUndefined(n.load)?n.load={preset:Qi}:n.preset&&(n.load.preset=n.preset),ee.isUndefined(n.parent)&&n.hideable&&Ac.push(this),n.resizable=ee.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ee.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Hi&&localStorage.getItem(mi(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,pg(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,so(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?F.addClass(t.__ul,i.CLASS_CLOSED):F.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(d){Hi&&(r=d,d?F.bind(window,"unload",s):F.unbind(window,"unload",s),localStorage.setItem(mi(t,"isLocal"),d))}}}),ee.isUndefined(n.parent)){if(this.closed=n.closed||!1,F.addClass(this.domElement,i.CLASS_MAIN),F.makeSelectable(this.domElement,!1),Hi&&r){t.useLocalStorage=!0;var o=localStorage.getItem(mi(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,F.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(F.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(F.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),F.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);F.addClass(l,"controller-name"),a=Eo(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};F.addClass(this.__ul,i.CLASS_CLOSED),F.addClass(a,"title"),F.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(ee.isUndefined(n.parent)&&(Cl&&(pi=document.createElement("div"),F.addClass(pi,Tl),F.addClass(pi,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(pi),Cl=!1),pi.appendChild(this.domElement),F.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||so(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},F.bind(window,"resize",this.__resizeHandler),F.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),F.bind(this.__ul,"transitionend",this.__resizeHandler),F.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&fg(this),s=function(){Hi&&localStorage.getItem(mi(t,"isLocal"))==="true"&&localStorage.setItem(mi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,ee.defer(function(){h.width-=1})}n.parent||u()};et.toggleHide=function(){Bs=!Bs,ee.each(Ac,function(i){i.domElement.style.display=Bs?"none":""})};et.CLASS_AUTO_PLACE="a";et.CLASS_AUTO_PLACE_CONTAINER="ac";et.CLASS_MAIN="main";et.CLASS_CONTROLLER_ROW="cr";et.CLASS_TOO_TALL="taller-than-window";et.CLASS_CLOSED="closed";et.CLASS_CLOSE_BUTTON="close-button";et.CLASS_CLOSE_TOP="close-top";et.CLASS_CLOSE_BOTTOM="close-bottom";et.CLASS_DRAG="drag";et.DEFAULT_WIDTH=245;et.TEXT_CLOSED="Close Controls";et.TEXT_OPEN="Open Controls";et._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Al||i.keyCode===Al)&&et.toggleHide()};F.bind(window,"keydown",et._keydownHandler,!1);ee.extend(et.prototype,{add:function(e,t){return qi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return qi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ee.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&pi.removeChild(this.domElement);var e=this;ee.each(this.__folders,function(t){e.removeFolder(t)}),F.unbind(window,"keydown",et._keydownHandler,!1),Rl(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new et(t);this.__folders[e]=n;var r=Eo(this,n.domElement);return F.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Rl(e);var t=this;ee.each(e.__folders,function(n){e.removeFolder(n)}),ee.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=F.getOffset(e.__ul).top,n=0;ee.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=F.getHeight(r))}),window.innerHeight-t-wl<n?(F.addClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-wl+"px"):(F.removeClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ee.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ee.debounce(function(){this.onResize()},50),remember:function(){if(ee.isUndefined(Yi)&&(Yi=new cg,Yi.domElement.innerHTML=sg),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ee.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&dg(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&so(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ur(this)),e.folders={},ee.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ur(this),io(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Qi]=Ur(this,!0)),this.load.remembered[e]=Ur(this),this.preset=e,ro(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ee.each(this.__controllers,function(t){this.getRoot().load.remembered?wc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ee.each(this.__folders,function(t){t.revert(t)}),e||io(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Cc(this.__listening)},updateDisplay:function(){ee.each(this.__controllers,function(e){e.updateDisplay()}),ee.each(this.__folders,function(e){e.updateDisplay()})}});function Eo(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Rl(i){F.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&F.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function io(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function hg(i,e,t){if(t.__li=e,t.__gui=i,ee.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),qi(i,t.object,t.property,{before:o,factoryArgs:[ee.toArray(arguments)]})}if(ee.isArray(a)||ee.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),qi(i,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof to){var n=new Vr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ee.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),F.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Vr){var r=function(a){if(ee.isNumber(t.__min)&&ee.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=qi(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=ee.compose(r,t.min),t.max=ee.compose(r,t.max)}else t instanceof Ec?(F.bind(e,"click",function(){F.fakeEvent(t.__checkbox,"click")}),F.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Tc?(F.bind(e,"click",function(){F.fakeEvent(t.__button,"click")}),F.bind(e,"mouseover",function(){F.addClass(t.__button,"hover")}),F.bind(e,"mouseout",function(){F.removeClass(t.__button,"hover")})):t instanceof no&&(F.addClass(e,"color"),t.updateDisplay=ee.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=ee.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&io(i.getRoot(),!0),s},t.setValue)}function wc(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[Qi])a=s[Qi];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function qi(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new no(e,t);else{var s=[e,t].concat(n.factoryArgs);r=og.apply(i,s)}n.before instanceof qn&&(n.before=n.before.__li),wc(i,r),F.addClass(r.domElement,"c");var a=document.createElement("span");F.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var l=Eo(i,o,n.before);return F.addClass(l,et.CLASS_CONTROLLER_ROW),r instanceof no?F.addClass(l,"color"):F.addClass(l,$_(r.getValue())),hg(i,l,r),i.__controllers.push(r),r}function mi(i,e){return document.location.href+"."+e}function ro(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Pl(i,e){e.style.display=i.useLocalStorage?"block":"none"}function dg(i){var e=i.__save_row=document.createElement("li");F.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),F.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",F.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",F.addClass(n,"button"),F.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",F.addClass(r,"button"),F.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",F.addClass(s,"button"),F.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?ee.each(i.load.remembered,function(h,d){ro(i,d,d===i.preset)}):ro(i,Qi,!1),F.bind(a,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),Hi){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(mi(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Pl(i,o),F.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,Pl(i,o)})}var u=document.getElementById("dg-new-constructor");F.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Yi.hide()}),F.bind(t,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Yi.show(),u.focus(),u.select()}),F.bind(n,"click",function(){i.save()}),F.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),F.bind(s,"click",function(){i.revert()})}function fg(i){var e=void 0;i.__resize_handle=document.createElement("div"),ee.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function n(){F.removeClass(i.__closeButton,et.CLASS_DRAG),F.unbind(window,"mousemove",t),F.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),e=s.clientX,F.addClass(i.__closeButton,et.CLASS_DRAG),F.bind(window,"mousemove",t),F.bind(window,"mouseup",n),!1}F.bind(i.__resize_handle,"mousedown",r),F.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function so(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function Ur(i,e){var t={};return ee.each(i.__rememberedObjects,function(n,r){var s={},a=i.__rememberedObjectIndecesToControllers[r];ee.each(a,function(o,l){s[l]=e?o.initialValue:o.getValue()}),t[r]=s}),t}function pg(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Cc(i){i.length!==0&&lg.call(window,function(){Cc(i)}),ee.each(i,function(e){e.updateDisplay()})}var Dg=et;const Ll={type:"change"},zs={type:"start"},Dl={type:"end"},Nr=new Yr,Ul=new mn,mg=Math.cos(70*Xu.DEG2RAD);class Ug extends Wn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",De),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ll),n.update(),s=r.NONE},this.update=function(){const w=new D,Q=new kn().setFromUnitVectors(e.up,new D(0,1,0)),Te=Q.clone().invert(),L=new D,ce=new kn,O=new D,se=2*Math.PI;return function(je=null){const $e=n.object.position;w.copy($e).sub(n.target),w.applyQuaternion(Q),o.setFromVector3(w),n.autoRotate&&s===r.NONE&&Z(v(je)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Je=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(Je)&&isFinite(lt)&&(Je<-Math.PI?Je+=se:Je>Math.PI&&(Je-=se),lt<-Math.PI?lt+=se:lt>Math.PI&&(lt-=se),Je<=lt?o.theta=Math.max(Je,Math.min(lt,o.theta)):o.theta=o.theta>(Je+lt)/2?Math.max(Je,o.theta):Math.min(lt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ke=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)o.radius=oe(o.radius);else{const nt=o.radius;o.radius=oe(o.radius*c),Ke=nt!=o.radius}if(w.setFromSpherical(o),w.applyQuaternion(Te),$e.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let nt=null;if(n.object.isPerspectiveCamera){const yt=w.length();nt=oe(yt*c);const An=yt-nt;n.object.position.addScaledVector(M,An),n.object.updateMatrixWorld(),Ke=!!An}else if(n.object.isOrthographicCamera){const yt=new D(P.x,P.y,0);yt.unproject(n.object);const An=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ke=An!==n.object.zoom;const tr=new D(P.x,P.y,0);tr.unproject(n.object),n.object.position.sub(tr).add(yt),n.object.updateMatrixWorld(),nt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):(Nr.origin.copy(n.object.position),Nr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Nr.direction))<mg?e.lookAt(n.target):(Ul.setFromNormalAndCoplanarPoint(n.object.up,n.target),Nr.intersectPlane(Ul,n.target))))}else if(n.object.isOrthographicCamera){const nt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),nt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ke=!0)}return c=1,C=!1,Ke||L.distanceToSquared(n.object.position)>a||8*(1-ce.dot(n.object.quaternion))>a||O.distanceToSquared(n.target)>a?(n.dispatchEvent(Ll),L.copy(n.object.position),ce.copy(n.object.quaternion),O.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Oe),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",Y),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",De),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new ml,l=new ml;let c=1;const u=new D,h=new le,d=new le,m=new le,_=new le,S=new le,p=new le,f=new le,E=new le,g=new le,M=new D,P=new le;let C=!1;const A=[],N={};let W=!1;function v(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function T(w){const Q=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*Q)}function Z(w){l.theta-=w}function J(w){l.phi-=w}const U=function(){const w=new D;return function(Te,L){w.setFromMatrixColumn(L,0),w.multiplyScalar(-Te),u.add(w)}}(),X=function(){const w=new D;return function(Te,L){n.screenSpacePanning===!0?w.setFromMatrixColumn(L,1):(w.setFromMatrixColumn(L,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(Te),u.add(w)}}(),z=function(){const w=new D;return function(Te,L){const ce=n.domElement;if(n.object.isPerspectiveCamera){const O=n.object.position;w.copy(O).sub(n.target);let se=w.length();se*=Math.tan(n.object.fov/2*Math.PI/180),U(2*Te*se/ce.clientHeight,n.object.matrix),X(2*L*se/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(Te*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),X(L*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(w,Q){if(!n.zoomToCursor)return;C=!0;const Te=n.domElement.getBoundingClientRect(),L=w-Te.left,ce=Q-Te.top,O=Te.width,se=Te.height;P.x=L/O*2-1,P.y=-(ce/se)*2+1,M.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function oe(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function ae(w){h.set(w.clientX,w.clientY)}function xe(w){j(w.clientX,w.clientX),f.set(w.clientX,w.clientY)}function Ne(w){_.set(w.clientX,w.clientY)}function k(w){d.set(w.clientX,w.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;Z(2*Math.PI*m.x/Q.clientHeight),J(2*Math.PI*m.y/Q.clientHeight),h.copy(d),n.update()}function ie(w){E.set(w.clientX,w.clientY),g.subVectors(E,f),g.y>0?$(T(g.y)):g.y<0&&q(T(g.y)),f.copy(E),n.update()}function ve(w){S.set(w.clientX,w.clientY),p.subVectors(S,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(S),n.update()}function Re(w){j(w.clientX,w.clientY),w.deltaY<0?q(T(w.deltaY)):w.deltaY>0&&$(T(w.deltaY)),n.update()}function Ae(w){let Q=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),Q=!0;break}Q&&(w.preventDefault(),n.update())}function Me(w){if(A.length===1)h.set(w.pageX,w.pageY);else{const Q=be(w),Te=.5*(w.pageX+Q.x),L=.5*(w.pageY+Q.y);h.set(Te,L)}}function Be(w){if(A.length===1)_.set(w.pageX,w.pageY);else{const Q=be(w),Te=.5*(w.pageX+Q.x),L=.5*(w.pageY+Q.y);_.set(Te,L)}}function we(w){const Q=be(w),Te=w.pageX-Q.x,L=w.pageY-Q.y,ce=Math.sqrt(Te*Te+L*L);f.set(0,ce)}function R(w){n.enableZoom&&we(w),n.enablePan&&Be(w)}function de(w){n.enableZoom&&we(w),n.enableRotate&&Me(w)}function K(w){if(A.length==1)d.set(w.pageX,w.pageY);else{const Te=be(w),L=.5*(w.pageX+Te.x),ce=.5*(w.pageY+Te.y);d.set(L,ce)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;Z(2*Math.PI*m.x/Q.clientHeight),J(2*Math.PI*m.y/Q.clientHeight),h.copy(d)}function ue(w){if(A.length===1)S.set(w.pageX,w.pageY);else{const Q=be(w),Te=.5*(w.pageX+Q.x),L=.5*(w.pageY+Q.y);S.set(Te,L)}p.subVectors(S,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(S)}function te(w){const Q=be(w),Te=w.pageX-Q.x,L=w.pageY-Q.y,ce=Math.sqrt(Te*Te+L*L);E.set(0,ce),g.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),$(g.y),f.copy(E);const O=(w.pageX+Q.x)*.5,se=(w.pageY+Q.y)*.5;j(O,se)}function Se(w){n.enableZoom&&te(w),n.enablePan&&ue(w)}function ge(w){n.enableZoom&&te(w),n.enableRotate&&K(w)}function Ee(w){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",b)),!Xe(w)&&(he(w),w.pointerType==="touch"?fe(w):x(w)))}function He(w){n.enabled!==!1&&(w.pointerType==="touch"?me(w):V(w))}function b(w){switch(at(w),A.length){case 0:n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(Dl),s=r.NONE;break;case 1:const Q=A[0],Te=N[Q];fe({pointerId:Q,pageX:Te.x,pageY:Te.y});break}}function x(w){let Q;switch(w.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case jn.DOLLY:if(n.enableZoom===!1)return;xe(w),s=r.DOLLY;break;case jn.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;Ne(w),s=r.PAN}else{if(n.enableRotate===!1)return;ae(w),s=r.ROTATE}break;case jn.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;ae(w),s=r.ROTATE}else{if(n.enablePan===!1)return;Ne(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(zs)}function V(w){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(w);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(w);break;case r.PAN:if(n.enablePan===!1)return;ve(w);break}}function Y(w){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(w.preventDefault(),n.dispatchEvent(zs),Re(re(w)),n.dispatchEvent(Dl))}function re(w){const Q=w.deltaMode,Te={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(Q){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return w.ctrlKey&&!W&&(Te.deltaY*=10),Te}function ne(w){w.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",Ie,{passive:!0,capture:!0}))}function Ie(w){w.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",Ie,{passive:!0,capture:!0}))}function De(w){n.enabled===!1||n.enablePan===!1||Ae(w)}function fe(w){switch(Le(w),A.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;Me(w),s=r.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;Be(w),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(w),s=r.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(w),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(zs)}function me(w){switch(Le(w),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(w),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ue(w),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(w),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(w),n.update();break;default:s=r.NONE}}function Oe(w){n.enabled!==!1&&w.preventDefault()}function he(w){A.push(w.pointerId)}function at(w){delete N[w.pointerId];for(let Q=0;Q<A.length;Q++)if(A[Q]==w.pointerId){A.splice(Q,1);return}}function Xe(w){for(let Q=0;Q<A.length;Q++)if(A[Q]==w.pointerId)return!0;return!1}function Le(w){let Q=N[w.pointerId];Q===void 0&&(Q=new le,N[w.pointerId]=Q),Q.set(w.pageX,w.pageY)}function be(w){const Q=w.pointerId===A[0]?A[1]:A[0];return N[Q]}n.domElement.addEventListener("contextmenu",Oe),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",Y,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}export{Tg as A,er as B,mc as C,bg as D,xc as E,tt as F,Rg as G,Mg as H,Ag as I,k_ as L,Sg as M,Ug as O,It as P,Ws as R,gg as S,yg as T,D as V,s_ as W,Lg as a,on as b,Ot as c,Xs as d,ol as e,M_ as f,u_ as g,Qe as h,Wn as i,$t as j,vg as k,Sc as l,St as m,ct as n,Cg as o,Pg as p,Vs as q,Dg as r,wg as s,Eg as t,xg as u,qr as v,Tr as w,Ft as x};
