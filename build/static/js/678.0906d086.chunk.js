"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[678,7369],{86030:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>a,c:()=>l,d:()=>r,e:()=>c,f:()=>u,n:()=>s,s:()=>f,t:()=>i});e(27052),e(11434);function r(t,n,e){o(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function o(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(n.length/o))return t;const l=t.length/r,i=e[0],u=e[1],f=e[2],a=e[4],c=e[5],s=e[6],d=e[8],p=e[9],g=e[10],y=e[12],v=e[13],h=e[14];let m=0,A=0;for(let T=0;T<l;T++){const e=n[m],l=n[m+1],T=n[m+2];t[A]=i*e+a*l+d*T+y,t[A+1]=u*e+c*l+p*T+v,t[A+2]=f*e+s*l+g*T+h,m+=o,A+=r}return t}function l(t,n,e){i(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function i(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(n.length/o))return;const l=t.length/r,i=e[0],u=e[1],f=e[2],a=e[3],c=e[4],s=e[5],d=e[6],p=e[7],g=e[8];let y=0,v=0;for(let h=0;h<l;h++){const e=n[y],l=n[y+1],h=n[y+2];t[v]=i*e+a*l+d*h,t[v+1]=u*e+c*l+p*h,t[v+2]=f*e+s*l+g*h,y+=o,v+=r}}function u(t,n,e){f(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function f(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const l=Math.min(t.length/r,n.length/o);let i=0,u=0;for(let f=0;f<l;f++)t[u]=e*n[i],t[u+1]=e*n[i+1],t[u+2]=e*n[i+2],i+=o,u+=r;return t}function a(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const l=t.length/r;if(l!==Math.ceil(n.length/o))return t;let i=0,u=0;for(let f=0;f<l;f++)t[u]=n[i]+e[0],t[u+1]=n[i+1]+e[1],t[u+2]=n[i+2]+e[2],i+=o,u+=r;return t}function c(t,n){s(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function s(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e;const o=Math.min(t.length/e,n.length/r);let l=0,i=0;for(let u=0;u<o;u++){const o=n[l],u=n[l+1],f=n[l+2],a=o*o+u*u+f*f;if(a>0){const n=1/Math.sqrt(a);t[i]=n*o,t[i+1]=n*u,t[i+2]=n*f}l+=r,i+=e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:c,scale:f,scaleView:u,shiftRight:function(t,n,e){const r=Math.min(t.count,n.count),o=t.typedBuffer,l=t.typedBufferStride,i=n.typedBuffer,u=n.typedBufferStride;let f=0,a=0;for(let c=0;c<r;c++)o[a]=i[f]>>e,o[a+1]=i[f+1]>>e,o[a+2]=i[f+2]>>e,f+=u,a+=l},transformMat3:i,transformMat3View:l,transformMat4:o,transformMat4View:r,translate:a},Symbol.toStringTag,{value:"Module"}))},97035:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>u,n:()=>i,s:()=>f,t:()=>l});e(27052);var r=e(11434);function o(t,n,e){l(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function l(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!=n.length/o)return;const l=t.length/r,i=e[0],u=e[1],f=e[2],a=e[3],c=e[4],s=e[5],d=e[6],p=e[7],g=e[8];let y=0,v=0;for(let h=0;h<l;h++){const e=n[y],l=n[y+1],h=n[y+2],m=n[y+3];t[v]=i*e+a*l+d*h,t[v+1]=u*e+c*l+p*h,t[v+2]=f*e+s*l+g*h,t[v+3]=m,y+=o,v+=r}}function i(t,n){const e=Math.min(t.count,n.count),r=t.typedBuffer,o=t.typedBufferStride,l=n.typedBuffer,i=n.typedBufferStride;for(let u=0;u<e;u++){const t=u*o,n=u*i,e=l[n],f=l[n+1],a=l[n+2],c=e*e+f*f+a*a;if(c>0){const n=1/Math.sqrt(c);r[t]=n*e,r[t+1]=n*f,r[t+2]=n*a}}}function u(t,n,e){f(t.typedBuffer,n,e,t.typedBufferStride)}function f(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(t.length/r,n.count),l=n.typedBuffer,i=n.typedBufferStride;let u=0,f=0;for(let a=0;a<o;a++)t[f]=e*l[u],t[f+1]=e*l[u+1],t[f+2]=e*l[u+2],t[f+3]=e*l[u+3],u+=i,f+=r}Object.freeze(Object.defineProperty({__proto__:null,normalize:i,scale:f,scaleView:u,transformMat3:l,transformMat3View:o,transformMat4:function(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(t.length/o!=n.length/l)return void r.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const i=t.length/o,u=e[0],f=e[1],a=e[2],c=e[3],s=e[4],d=e[5],p=e[6],g=e[7],y=e[8],v=e[9],h=e[10],m=e[11],A=e[12],T=e[13],B=e[14],M=e[15];let S=0,O=0;for(let r=0;r<i;r++){const e=n[S],r=n[S+1],i=n[S+2],w=n[S+3];t[O]=u*e+s*r+y*i+A*w,t[O+1]=f*e+d*r+v*i+T*w,t[O+2]=a*e+p*r+h*i+B*w,t[O+3]=c*e+g*r+m*i+M*w,S+=l,O+=o}},transformMat4View:function(t,n,e){if(t.count!==n.count)return;const r=t.count,o=e[0],l=e[1],i=e[2],u=e[3],f=e[4],a=e[5],c=e[6],s=e[7],d=e[8],p=e[9],g=e[10],y=e[11],v=e[12],h=e[13],m=e[14],A=e[15],T=t.typedBuffer,B=t.typedBufferStride,M=n.typedBuffer,S=n.typedBufferStride;for(let O=0;O<r;O++){const t=O*B,n=O*S,e=M[n],r=M[n+1],w=M[n+2],R=M[n+3];T[t]=o*e+f*r+d*w+v*R,T[t+1]=l*e+a*r+p*w+h*R,T[t+2]=i*e+c*r+g*w+m*R,T[t+3]=u*e+s*r+y*w+A*R}}},Symbol.toStringTag,{value:"Module"}))},11002:(t,n,e)=>{e.d(n,{g:()=>i});var r=e(90646),o=e(70190),l=e(20030);function i(t,n,e,r){var i,f;if((0,o.canProjectWithoutEngine)(t.spatialReference,e)){var a;u[0]=t.x,u[1]=t.y;const o=t.z;return u[2]=null!==(a=null!==o&&void 0!==o?o:r)&&void 0!==a?a:0,(0,l.projectBuffer)(u,t.spatialReference,0,n,e,0,1)}const c=(0,o.tryProjectWithZConversion)(t,e);return!!c&&(n[0]=null===c||void 0===c?void 0:c.x,n[1]=null===c||void 0===c?void 0:c.y,n[2]=null!==(i=null!==(f=null===c||void 0===c?void 0:c.z)&&void 0!==f?f:r)&&void 0!==i?i:0,!0)}const u=(0,r.vt)()},71337:(t,n,e)=>{e.d(n,{Ns:()=>f,jh:()=>o,l5:()=>i,s:()=>u,xm:()=>l});var r=e(65271);function o(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.y9?n?new Array(t).fill(0):new Array(t):new Float64Array(t)}function l(t){return((0,r.cy)(t)?t.length:t.byteLength/8)<=r.y9?Array.from(t):new Float64Array(t)}function i(t,n,e){return Array.isArray(t)?t.slice(n,n+e):t.subarray(n,n+e)}function u(t,n){for(let e=0;e<n.length;++e)t[e]=n[e];return t}function f(t){return Array.isArray(t)?new Float64Array(t):t}},57369:(t,n,e)=>{e.d(n,{$5:()=>w,CN:()=>B,JP:()=>T,KM:()=>x,Mv:()=>F,X4:()=>M,gr:()=>O,project:()=>j,qs:()=>R,si:()=>S,xA:()=>N});var r=e(37819),o=e(6862),l=e(71958),i=e(26895),u=e(30185),f=e(68358),a=e(90646),c=e(70190),s=e(18704),d=e(4447),p=e(20030),g=e(71337),y=(e(77886),e(38609)),v=e(31995),h=e(83661),m=e(86030),A=e(97035);const T="Projection may be possible after calling projection.load().";function B(t,n,e,r){t.error("Failed to project from (wkid:".concat(n.wkid,") to (wkid:").concat(e.wkid,").").concat(r?" ":"").concat(r))}function M(t,n,e,r,o){return _(P.TO_PCPF,h.xs.fromTypedArray(t),E.NORMAL,h.Xm.fromTypedArray(n),h.Xm.fromTypedArray(e),r,h.xs.fromTypedArray(o))?o:null}function S(t,n,e,r,o){return _(P.FROM_PCPF,h.xs.fromTypedArray(t),E.NORMAL,h.Xm.fromTypedArray(n),h.Xm.fromTypedArray(e),r,h.xs.fromTypedArray(o))?o:null}function O(t,n,e){return(0,p.projectBuffer)(t,n,0,e,(0,s.lO)(n),0,t.length/3)?e:null}function w(t,n,e){return(0,p.projectBuffer)(t,(0,s.lO)(e),0,n,e,0,t.length/3)?n:null}function R(t,n,e){return(0,o.Ge)(U,e),(0,m.t)(n,t,U),(0,r.or)(U)&&(0,m.n)(n,n),n}function x(t,n,e){return(0,o.z0)(U,e),(0,A.t)(n,t,U),(0,r.or)(U)&&(0,m.n)(n,n,4),n}function N(t,n,e,r,o){if(!_(P.TO_PCPF,h.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,h.Xm.fromTypedArray(n),h.Xm.fromTypedArray(e),r,h.xs.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let l=3;l<t.length;l+=4)o[l]=t[l];return o}function F(t,n,e,r,o){if(!_(P.FROM_PCPF,h.xs.fromTypedArray(t,16),E.TANGENT,h.Xm.fromTypedArray(n),h.Xm.fromTypedArray(e),r,h.xs.fromTypedArray(o,16)))return null;for(let l=3;l<t.length;l+=4)o[l]=t[l];return o}var E,P,C;function b(t,n,e,r,l){switch((0,d.l)(r,e,V,r),t===P.FROM_PCPF&&(0,i.B8)(V,V),n){case E.NORMAL:return(0,o.Ge)(l,V);case E.TANGENT:return(0,o.z0)(l,V)}}function _(t,n,e,r,o,l,i){if(!n)return;const u=r.count,a=(0,s.lO)(l);if(function(t){return t.isWGS84||(0,y.x1)(t)||(0,y.q8)(t)||(0,y.KQ)(t)}(l))for(let c=0;c<u;c++)o.getVec(c,G),n.getVec(c,z),(0,f.t)(z,z,b(t,e,G,a,U)),i.setVec(c,z);else for(let c=0;c<u;c++){o.getVec(c,G),n.getVec(c,z);const l=(0,v.jg)(r.get(c,1));let u=Math.cos(l);e===E.TANGENT!=(t===P.TO_PCPF)&&(u=1/u),b(t,e,G,a,U),t===P.TO_PCPF?(U[0]*=u,U[1]*=u,U[2]*=u,U[3]*=u,U[4]*=u,U[5]*=u):(U[0]*=u,U[3]*=u,U[6]*=u,U[1]*=u,U[4]*=u,U[7]*=u),(0,f.t)(z,z,U),(0,f.n)(z,z),i.setVec(c,z)}return i}function j(t){return"local"===t.vertexSpace.type?function(t){var n,e;let{vertexSpace:r,transform:o,inSpatialReference:l,outSpatialReference:f,localMode:y,outPositions:v,positions:h}=t;const A=null!==(n=r.origin)&&void 0!==n?n:a.uY,T=null!=r.origin&&null!==(e=null===o||void 0===o?void 0:o.localMatrix)&&void 0!==e?e:u.zK,B=(0,s.lO)(l),M=f.isWebMercator&&y||!(0,c.canProjectWithoutEngine)(l,B)?l:B;(0,d.l)(l,A,V,M),(0,i.lw)(V,V,T);const S=null!==v&&void 0!==v?v:(0,g.jh)(h.length);return(0,m.a)(S,h,V),(0,p.projectBuffer)(S,M,0,S,f,0,S.length/3),S}(t):function(t){var n,e;let{vertexSpace:r,transform:o,outPositions:l,positions:c,inSpatialReference:s,outSpatialReference:d}=t;const y=null!=r.origin&&null!==(n=null===o||void 0===o?void 0:o.localMatrix)&&void 0!==n?n:u.zK,v=null!==l&&void 0!==l?l:(0,g.jh)(c.length);(0,i.aI)(y,u.zK)?(0,g.s)(v,c):(0,m.a)(v,c,y);const h=null!==(e=r.origin)&&void 0!==e?e:a.uY;if(!(0,f.e)(h,a.uY)){const[t,n,e]=h;for(let r=0;r<v.length;r+=3)v[r]+=t,v[r+1]+=n,v[r+2]+=e}return(0,p.projectBuffer)(v,s,0,v,d,0,v.length/3)?v:null}(t)}(C=E||(E={}))[C.NORMAL=0]="NORMAL",C[C.TANGENT=1]="TANGENT",function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(P||(P={}));const G=(0,a.vt)(),z=(0,a.vt)(),V=(0,u.vt)(),U=(0,l.vt)()},678:(t,n,e)=>{e.d(n,{UR:()=>T,p5:()=>A,xK:()=>O});var r=e(11434),o=e(37819),l=e(34531),i=e(6862),u=e(71958),f=e(26895),a=e(30185),c=e(68358),s=e(90646),d=e(18704),p=e(4447),g=e(11002),y=e(88515),v=e(86030),h=e(57369);const m=()=>r.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function A(t,n,e){let{vertexSpace:r,spatialReference:o}=e;if("georeferenced"===r.type){const e=t;if(!(0,g.g)(n,e,o))return!1;const{origin:l}=r;return(0,c.f)(t,e,l),!0}const l=(0,d.lO)(o),i=t;if(!(0,g.g)(n,i,l))return!1;const{origin:u}=r,a=F;if(!(0,p.l)(o,u,a,l))return!1;const s=(0,f.B8)(F,a);return null!=s&&((0,c.h)(t,i,s),!0)}function T(t,n,e){const{vertexSpace:r,transform:l,vertexAttributes:u}=t,s=S(t.spatialReference,e,E.SOURCE|E.TARGET);if((0,y.yJ)(r,n)&&(!l||(0,f.t2)(l.localMatrix,a.zK))&&(0,o.Io)(s,1)){const{position:t,normal:n,tangent:r}=u,o=null===e||void 0===e?void 0:e.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:null===n||void 0===n?void 0:n.slice(),tangent:o?r:null===r||void 0===r?void 0:r.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:l,transform:i}=t,{origin:u}=n;const a=(0,d.lO)(l);if(!(0,p.l)(l,u,w,a))return(0,h.CN)(m(),l,a),null;if(i&&(0,f.lw)(w,w,i.localMatrix),!(0,p.l)(l,e,R,a))return(0,h.CN)(m(),a,l),null;(0,f.B8)(R,R);const c=(0,f.lw)(w,R,w);return M(c,l,r,E.SOURCE|E.TARGET),B(o,c)}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{spatialReference:o,vertexAttributes:l,transform:i}=t,{origin:u}=n;const a=(0,d.lO)(o);if(!(0,p.l)(o,u,w,a))return(0,h.CN)(m(),o,a),null;i&&(0,f.lw)(w,w,i.localMatrix),M(w,o,r,E.SOURCE);const s=new Float64Array(l.position.length),g=function(t,n,e,r){(0,v.a)(r,t,n);const o=new Float64Array(t.length);return(0,h.$5)(r,o,e)?o:((0,h.CN)(m(),(0,d.lO)(e),e),null)}(l.position,w,o,s);if(!g)return null;const y=function(t,n,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,h.qs)(e,l,r),(0,h.si)(l,t,n,o,l)?l:((0,h.CN)(m(),(0,d.lO)(o),o),null)}(g,s,l.normal,w,o);if(l.normal&&!y)return null;const A=function(t,n,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,h.KM)(e,l,r),(0,h.Mv)(l,t,n,o,l)?l:((0,h.CN)(m(),(0,d.lO)(o),o),null)}(g,s,l.tangent,w,o);if(l.tangent&&!A)return null;if(e){const t=(0,c.k)(N,e);(0,v.b)(g,g,t)}return{position:g,normal:y,tangent:A}}(t,t.vertexSpace,n.origin,e);case"georeferenced":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:l,transform:u}=t,{origin:a}=n;const c=(0,d.lO)(l);if(!(0,p.l)(l,e,w,c))return(0,h.CN)(m(),l,c),null;const s=1/S(l,r,E.TARGET);(0,f.hs)(w,w,[s,s,s]);const g=(0,f.B8)(R,w),{position:y,normal:A,tangent:T}=function(t,n,e){if(!n)return t;if(!e){const{position:e,normal:r,tangent:o}=t;return{position:(0,v.b)(new Float64Array(e.length),e,n),tangent:o,normal:r}}const r=B(t,e.localMatrix);return(0,v.b)(r.position,r.position,n),r}(o,a,u),M=new Float64Array(y.length),O=function(t,n,e,r){const o=(0,h.gr)(t,n,r);if(!o)return(0,h.CN)(m(),n,(0,d.lO)(n)),null;const l=new Float64Array(o.length);return(0,v.a)(l,o,e),l}(y,l,g,M);if(!O)return null;const N=(0,i.Ge)(x,g),F=function(t,n,e,r,o,l){if(null==t)return null;const i=null!==l&&void 0!==l?l:new Float32Array(t.length);return(0,h.X4)(t,n,e,r,i)?((0,v.t)(i,i,o),i):((0,h.CN)(m(),r,(0,d.lO)(r)),null)}(A,y,M,l,N,A!==o.normal?A:void 0);if(!F&&A)return null;const P=function(t,n,e,r,o,l){if(null==t)return null;const i=null!==l&&void 0!==l?l:new Float32Array(t.length);return(0,h.xA)(t,n,e,r,i)?((0,v.t)(i,i,o,4),i):((0,h.CN)(m(),r,(0,d.lO)(r)),null)}(T,y,M,l,N,T!==o.tangent?T:void 0);return!P&&T?null:{position:O,normal:F,tangent:P}}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{vertexAttributes:o,transform:l,spatialReference:i}=t,{origin:u}=n;const{position:f,normal:a,tangent:s}=l?B(o,l.localMatrix):o,d=new Float64Array(f.length);let p=f;if(u&&(p=(0,v.b)(d,p,u)),e){const t=(0,c.k)(N,e);p=(0,v.b)(d,p,t)}S(i,r,E.NONE);const g=null===r||void 0===r?void 0:r.allowBufferReuse;return{position:p!==o.position||g?p:p.slice(),normal:a!==o.normal||g?a:null===a||void 0===a?void 0:a.slice(),tangent:s!==o.tangent||g?s:null===s||void 0===s?void 0:s.slice()}}(t,t.vertexSpace,n.origin,e)}}function B(t,n){const e=new Float64Array(t.position.length);(0,v.a)(e,t.position,n);const r=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,h.qs)(t.normal,r,n),o&&t.tangent&&(0,h.KM)(t.tangent,o,n),{position:e,normal:r,tangent:o}}function M(t,n,e,r){const o=S(n,e,r);1!==o&&(0,f.hs)(t,t,[o,o,o])}function S(t,n,e){const r=!!(e&E.SOURCE),o=!!(e&E.TARGET),l=null===n||void 0===n?void 0:n.sourceUnit,i=null===n||void 0===n?void 0:n.targetUnit;if(!l&&!i)return 1;let u=O(l,t);!r&&l&&1!==u&&(m().warn("source unit conversion not supported"),u=1);let f=1/O(i,t);return!o&&i&&1!==f&&(m().warn("target unit conversion not supported"),f=1),u*f}function O(t,n){if(null==t)return 1;const e=(0,l.KX)(n);return 1/(0,l.oU)(e,"meters",t)}const w=(0,a.vt)(),R=(0,a.vt)(),x=(0,u.vt)(),N=(0,s.vt)(),F=(0,a.vt)();var E;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET"}(E||(E={}))}}]);
//# sourceMappingURL=678.0906d086.chunk.js.map