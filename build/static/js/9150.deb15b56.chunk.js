"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[9150],{60112:(t,e,n)=>{n.d(e,{a:()=>p,b:()=>b,c:()=>m,f:()=>v,g:()=>O,j:()=>N,n:()=>w});n(27052),n(11434);var i=n(37819),o=n(26895),r=n(68358),s=n(90646),c=n(32345),u=n(6857),a=n(19068),h=n(69210),d=n(61459),l=n(7564),f=n(89430);const _=m();function m(){return(0,u.vt)()}const g=c.e,T=c.e;function p(t,e){return(0,c.c)(e,t)}function b(t){return t[3]}function O(t){return t}function v(t,e,n,i){return(0,u.fA)(t,e,n,i)}function A(t,e,n){if(null==e)return!1;if(!M(t,e,R))return!1;let{t0:i,t1:o}=R;if((i<0||o<i&&o>0)&&(i=o),i<0)return!1;if(n){const{origin:t,direction:o}=e;n[0]=t[0]+o[0]*i,n[1]=t[1]+o[1]*i,n[2]=t[2]+o[2]*i}return!0}const R={t0:0,t1:0};function M(t,e,n){const{origin:i,direction:o}=e,r=E;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const c=2*(o[0]*r[0]+o[1]*r[1]+o[2]*r[2]),u=c*c-4*s*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const E=(0,s.vt)();function N(t,e){return A(t,e,null)}function S(t,e,n){const i=f.rq.get(),s=f.Rc.get();(0,r.b)(i,e.origin,e.direction);const c=b(t);(0,r.b)(n,i,e.origin),(0,r.j)(n,n,1/(0,r.l)(n)*c);const u=j(t,e.origin),a=(0,l.g7)(e.origin,n);return(0,o.$0)(s,a+u,i),(0,r.h)(n,n,s),n}function F(t,e,n){const i=(0,r.f)(f.rq.get(),e,t),o=(0,r.j)(f.rq.get(),i,t[3]/(0,r.l)(i));return(0,r.g)(n,o,t)}function j(t,e){const n=(0,r.f)(f.rq.get(),e,t),o=(0,r.l)(n),s=b(t),c=s+Math.abs(s-o);return(0,i.XM)(s/c)}const I=(0,s.vt)();function P(t,e,n,o){const s=(0,r.f)(I,e,t);switch(n){case h._.X:{const t=(0,i.jU)(s,I)[2];return(0,r.s)(o,-Math.sin(t),Math.cos(t),0)}case h._.Y:{const t=(0,i.jU)(s,I),e=t[1],n=t[2],c=Math.sin(e);return(0,r.s)(o,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case h._.Z:return(0,r.n)(o,s);default:return}}function x(t,e){const n=(0,r.f)(B,e,t);return(0,r.l)(n)-t[3]}function w(t,e){const n=(0,r.a)(t,e),i=b(t);return n<=i*i}const B=(0,s.vt)(),L=m();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:_,altitudeAt:x,angleToSilhouette:j,axisAt:P,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return A(t,e,n)?n:((0,d.oC)(e,t,n),F(t,n,n))},closestPointOnSilhouette:S,containsPoint:w,copy:p,create:m,distanceToSilhouette:function(t,e){const n=(0,r.f)(f.rq.get(),e,t),i=(0,r.q)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:T,exactEquals:g,fromCenterAndRadius:function(t,e){return(0,u.fA)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:v,getCenter:O,getRadius:b,intersectLine:function(t,e,n){const i=(0,d.Cr)(e,n);if(!M(t,i,R))return[];const{origin:o,direction:c}=i,{t0:u,t1:h}=R,l=e=>{const n=(0,s.vt)();return(0,r.r)(n,o,c,e),F(t,n,n)};return Math.abs(u-h)<(0,a.FD)()?[l(u)]:[l(u),l(h)]},intersectRay:A,intersectRayClosestSilhouette:function(t,e,n){if(A(t,e,n))return n;const i=S(t,e,f.rq.get());return(0,r.g)(n,e.origin,(0,r.j)(f.rq.get(),e.direction,(0,r.p)(e.origin,i)/(0,r.l)(e.direction))),n},intersectsRay:N,projectPoint:F,setAltitudeAt:function(t,e,n,i){const o=x(t,e),s=P(t,e,h._.Z,B),c=(0,r.j)(B,s,n-o);return(0,r.g)(i,e,c)},setExtent:function(t,e,n){return t!==n&&p(t,n),n},tmpSphere:L,union:function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,u.vt)();const i=(0,r.p)(t,e),o=t[3],s=e[3];return i+s<o?((0,c.c)(n,t),n):i+o<s?((0,c.c)(n,e),n):((0,r.o)(n,t,e,(i+s-o)/(2*i)),n[3]=(i+o+s)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},51329:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(30266);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this._allocator())}}const r=1024},71958:(t,e,n)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(t,e,n,i,o,r,s,c,u){return[t,e,n,i,o,r,s,c,u]}n.d(e,{fA:()=>o,vt:()=>i,zK:()=>r});const r=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:i,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},30185:(t,e,n)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>o,vt:()=>i,zK:()=>r});const r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:o,create:i,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,i,o,r,s,c,u,a,h,d,l,f,_,m){return[t,e,n,i,o,r,s,c,u,a,h,d,l,f,_,m]}},Symbol.toStringTag,{value:"Module"}))},59458:(t,e,n)=>{function i(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{o8:()=>o,vt:()=>i,zK:()=>r});const r=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:o,create:i,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,i){return[t,e,n,i]}},Symbol.toStringTag,{value:"Module"}))},87184:(t,e,n)=>{n.d(e,{Cr:()=>a,_I:()=>h,vt:()=>u});var i=n(37819),o=n(51329),r=n(68358),s=n(90646),c=n(89430);function u(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,r.c)(n.origin,t),(0,r.f)(n.vector,e,t),n}function h(t,e,n){return function(t,e,n,o,s){const{vector:u,origin:a}=t,h=(0,r.f)(c.rq.get(),e,a),d=(0,r.m)(u,h)/(0,r.q)(u);return(0,r.j)(s,u,(0,i.qE)(d,n,o)),(0,r.g)(s,s,t.origin)}(t,e,0,1,n)}(0,s.vt)(),(0,s.vt)(),new o.I((()=>u()))},34605:(t,e,n)=>{n.d(e,{vt:()=>r,lU:()=>c,Qj:()=>s});n(37819);var i=n(68358),o=n(90646);n(32345),n(7564),n(89430);(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)();function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return[t[0],t[1],t[2],t[3]]}function s(t){return t}function c(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.floor(n*(1/3)),_=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.floor(n*(2/3));if(n<3)return!1;e(a,o);let m=s,g=!1;for(;m<n-1&&!g;)e(h,m),m++,g=!(0,i.e)(a,h);if(!g)return!1;for(m=Math.max(m,_),g=!1;m<n&&!g;)e(d,m),m++,(0,i.f)(l,a,h),(0,i.n)(l,l),(0,i.f)(f,h,d),(0,i.n)(f,f),g=!(0,i.e)(a,d)&&!(0,i.e)(h,d)&&Math.abs((0,i.m)(l,f))<u;return g?(function(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r();const o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],h=t[2]-e[2],d=s*h-c*a,l=c*u-o*h,f=o*a-s*u,_=d*d+l*l+f*f,m=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;i[0]=d*m,i[1]=l*m,i[2]=f*m,i[3]=-(i[0]*t[0]+i[1]*t[1]+i[2]*t[2])}(a,h,d,t),!0):(0!==o||1!==s||2!==_)&&c(t,e,n,0,1,2)}const u=.99619469809,a=(0,o.vt)(),h=(0,o.vt)(),d=(0,o.vt)(),l=(0,o.vt)(),f=(0,o.vt)();const _=[0,0,1,0];var m;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(m||(m={}));m.INFINITE_MIN,m.INFINITE_MAX,m.INFINITE_MAX},61459:(t,e,n)=>{n.d(e,{Cr:()=>a,LV:()=>u,oC:()=>h,vt:()=>s});n(50636);var i=n(51329),o=n(68358),r=n(90646);n(89430);function s(t){return t?c((0,r.o8)(t.origin),(0,r.o8)(t.direction)):c((0,r.vt)(),(0,r.vt)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=d.get();return n.origin=t,n.direction=e,n}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,o.c)(n.origin,t),(0,o.f)(n.direction,e,t),n}function h(t,e,n){const i=(0,o.m)(t.direction,(0,o.f)(n,e,t.origin));return(0,o.g)(n,t.origin,(0,o.j)(n,t.direction,i)),n}const d=new i.I((()=>s()));(0,r.vt)()},7564:(t,e,n)=>{n.d(e,{g7:()=>s});var i=n(37819),o=n(68358),r=n(90646);function s(t,e){const n=(0,o.m)(t,e)/((0,o.l)(t)*(0,o.l)(e));return-(0,i.XM)(n)}(0,r.vt)(),(0,r.vt)()},89430:(t,e,n)=>{n.d(e,{Rc:()=>l,J8:()=>f,rq:()=>d});n(27052);var i=n(30266),o=n(71958),r=n(30185),s=n(59458),c=n(16687),u=n(90646),a=n(6857);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.vt)}static createVec3f64(){return new h(u.vt)}static createVec4f64(){return new h(a.vt)}static createMat3f64(){return new h(o.vt)}static createMat4f64(){return new h(r.vt)}static createQuatf64(){return new h(s.vt)}get test(){}}h.createVec2f64();const d=h.createVec3f64(),l=(h.createVec4f64(),h.createMat3f64(),h.createMat4f64()),f=h.createQuatf64()},29150:(t,e,n)=>{n.r(e),n.d(e,{default:()=>et});var i=n(70273),o=n(92976),r=(n(11434),n(27052),n(11215),n(55678),n(55292)),s=n(68358),c=n(90646),u=n(87184),a=n(60112),h=n(82731),d=n(15942),l=n(51329),f=(n(26895),n(32345),n(6857)),_=n(61459);function m(t){return t?{ray:(0,_.vt)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,_.vt)(),c0:0,c1:Number.MAX_VALUE}}new l.I((()=>m()));var g,T;n(34605),n(89430);function p(t,e){for(let n=0;n<b;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}!function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(g||(g={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(T||(T={}));T.FAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_RIGHT,T.NEAR_BOTTOM_LEFT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_BOTTOM_RIGHT,T.NEAR_TOP_RIGHT,T.NEAR_TOP_LEFT,T.FAR_BOTTOM_RIGHT,T.FAR_BOTTOM_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_RIGHT,T.NEAR_BOTTOM_RIGHT,T.FAR_BOTTOM_RIGHT,T.FAR_TOP_RIGHT,T.NEAR_TOP_RIGHT,T.FAR_BOTTOM_LEFT,T.NEAR_BOTTOM_LEFT,T.NEAR_TOP_LEFT,T.FAR_TOP_LEFT,T.FAR_TOP_LEFT,T.NEAR_TOP_LEFT,T.NEAR_TOP_RIGHT,T.FAR_TOP_RIGHT;const b=6;(0,f.fA)(-1,-1,-1,1),(0,f.fA)(1,-1,-1,1),(0,f.fA)(1,1,-1,1),(0,f.fA)(-1,1,-1,1),(0,f.fA)(-1,-1,1,1),(0,f.fA)(1,-1,1,1),(0,f.fA)(1,1,1,1),(0,f.fA)(-1,1,1,1),new l.I(m),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)();var O=n(96960);class v{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new A,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),A.clearPool(),y[0]=null,G.prune(),W.prune()}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;this._objectCount+=e,this._grow(t,e);const n=A.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}A.release(n)}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=t.length;const n=A.acquire();for(const i of t){const t=null!==e&&void 0!==e?e:(0,a.a)(this.objectToBoundingSphere(i),k);B(t[3])?(n.init(this._root),E(i,t,n)):this._degenerateObjects.delete(i)}A.release(n),this._shrink()}update(t,e){if(!B(e[3])&&this._isDegenerate(t))return;const n=function(t){return y[0]=t,y}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,_.LV)(t,e);R(this._root,(t=>{if(!function(t,e){return I((0,a.g)(e.bounds),2*-e.halfSize,H),I((0,a.g)(e.bounds),2*e.halfSize,V),(0,O.O_)(t.origin,t.direction,H,V)}(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const o=(0,_.LV)(t,e);R(this._root,(t=>{if(!function(t,e,n){return I((0,a.g)(e.bounds),2*-e.halfSize,H),I((0,a.g)(e.bounds),2*e.halfSize,V),n.applyToMinMax(H,V),(0,O.O_)(t.origin,t.direction,H,V)}(o,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),!0}))}forEach(t){R(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,r=1/0,c=1/0,u=null;const h=x(t,e),d=s=>{if(--o,!i(s))return;const h=this.objectToBoundingSphere(s);if(!p(n,h))return;const d=w(t,e,(0,a.g)(h)),l=d-h[3],f=d+h[3];l<r&&(r=l,c=f,u=s)};return M(this._root,(i=>{if(o<=0||!p(n,i.bounds))return!1;if((0,s.j)(D,h,i.halfSize),(0,s.g)(D,D,(0,a.g)(i.bounds)),w(t,e,D)>c)return!1;const r=i.node;return r.terminals.forAll((t=>d(t))),null!==r.residents&&r.residents.forAll((t=>d(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,i,o,r,c){let u=-1/0,h=1/0;const d={setRange:t=>{n===v.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),h=Math.min(h,t.far)):(u=Math.max(u,-t.far),h=Math.min(h,-t.near))}};d.setRange(i);const l=w(e,n,t),f=x(e,n),_=x(e,-n),m=t=>{if(!c(t))return;const i=this.objectToBoundingSphere(t),s=(0,a.g)(i),f=w(e,n,s)-l,_=f-i[3],m=f+i[3];_>h||m<u||!p(r,i)||o(t,d)};M(this._root,(t=>{if(!p(r,t.bounds))return!1;if((0,s.j)(D,f,t.halfSize),(0,s.g)(D,D,(0,a.g)(t.bounds)),w(e,n,D)-l>h)return!1;if((0,s.j)(D,_,t.halfSize),(0,s.g)(D,D,(0,a.g)(t.bounds)),w(e,n,D)-l<u)return!1;const i=t.node;return i.terminals.forAll((t=>m(t))),null!==i.residents&&i.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){R(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,a.b)(e),i=(0,a.g)(e),o=e=>{const o=this.objectToBoundingSphere(e),r=(0,a.b)(o),c=n+r;return!((0,s.a)((0,a.g)(o),i)-c*c<=0)||t(e)};let r=!0;const c=t=>{r&&(r=o(t))};R(this._root,(t=>{const e=(0,a.b)(t.bounds),o=n+e;if((0,s.a)((0,a.g)(t.bounds),i)-o*o>0)return!1;const u=t.node;return u.terminals.forAll(c),r&&null!==u.residents&&u.residents.forAll(c),r})),r&&this.forEachDegenerateObject(c)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,a.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||(0,a.j)(n.applyToBoundingSphere(i),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=A.acquire().init(t);this._add(e.at(n),i),A.release(i)}}_grow(t,e){if(0!==e&&(P(t,e,(t=>this.objectToBoundingSphere(t)),K),B(K[3])&&!this._fitsInsideTree(K)))if(S(this._root.node))(0,a.a)(K,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(K);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(K,t):this._growRootAsSubNode(t),A.release(t)}}_rebuildTree(t,e){(0,s.c)((0,a.g)(X),(0,a.g)(e.bounds)),X[3]=e.halfSize,P([t,X],2,(t=>t),J);const n=A.acquire().init(this._root);this._root.initFrom(null,J,J[3]),this._root.increaseHalfSize(1.25),R(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),A.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return R(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const o=this._root.bounds,r=this._root.halfSize;for(let c=0;c<3;c++){const t=o[c]-r-(n[c]-e),s=n[c]+e-(o[c]+r),u=Math.max(0,Math.ceil(t/(2*r))),a=Math.max(0,Math.ceil(s/(2*r)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);i=Math.max(i,h),U[c].min=u,U[c].max=a}for(let c=0;c<3;c++){let t=U[c].min,e=U[c].max;const n=(i-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=o[c]-r-t*r*2;q[c]=s+(e+t)*r}const s=i*r;return q[3]=s*C,A.acquire().initFrom(null,q,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,s.c)((0,a.g)(K),(0,a.g)(this._root.bounds)),K[3]=this._root.halfSize,this._root.init(t),t.advanceTo(K,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!B(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){var e,n;const i=t.children.map((t=>t?this._nodeToJSON(t):null)),o=null===(e=t.residents)||void 0===e?void 0:e.map((t=>this.objectToBoundingSphere(t))),r=null===(n=t.terminals)||void 0===n?void 0:n.map((t=>this.objectToBoundingSphere(t)));return{children:i,residents:o,terminals:r}}static fromJSON(t){const e=new v((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class A{constructor(){this.bounds=(0,a.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=null!=t?t:A.createEmptyNode(),e&&(0,a.a)(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*C}advance(t){let e=this.node.children[t];e||(e=A.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=L[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new d.A({shrink:!0}),residents:new d.A({shrink:!0})}}static acquire(){return A._pool.acquire()}static release(t){A._pool.release(t)}static clearPool(){A._pool.prune()}}function R(t,e){let n=A.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(A.acquire().init(n).advance(t));A.release(n)}}function M(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v.DepthOrder.FRONT_TO_BACK,o=A.acquire().init(t);const r=[o];for(function(t,e,n){if(!W.length)for(let i=0;i<8;++i)W.push({index:0,distance:0});for(let i=0;i<8;++i){const n=L[i];W.data[i].index=i,W.data[i].distance=w(t,e,n)}W.sort(((t,e)=>t.distance-e.distance));for(let i=0;i<8;++i)n[i]=W.data[i].index}(n,i,Y);0!==r.length;){if(o=r.pop(),e(o)&&!o.isLeaf())for(let t=7;t>=0;--t){const e=Y[t];o.node.children[e]&&r.push(A.acquire().init(o).advance(e))}A.release(o)}}function E(t,e,n){G.clear();const i=n.advanceTo(e,((t,e)=>{G.push(t.node),G.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let o=G.length-2;o>=0&&N(G.data[o],G.data[o+1]);o-=2);}function N(t,e){return e>=0&&(t.children[e]=null),!!S(t)&&(null===t.residents&&(t.residents=new d.A({shrink:!0})),!0)}function S(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function F(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function j(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function I(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function P(t,e,n,i){if(1===e){const e=n(t[0]);(0,a.a)(e,i)}else{H[0]=1/0,H[1]=1/0,H[2]=1/0,V[0]=-1/0,V[1]=-1/0,V[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);B(e[3])&&(F(H,e),j(V,e))}(0,s.o)((0,a.g)(i),H,V,.5),i[3]=Math.max(V[0]-H[0],V[1]-H[1],V[2]-H[2])/2}}function x(t,e){let n,i=1/0;for(let o=0;o<8;++o){const r=w(t,e,z[o]);r<i&&(i=r,n=z[o])}return n}function w(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function B(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}A._pool=new h.A(A),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(v||(v={}));const L=[(0,c.fA)(-1,-1,-1),(0,c.fA)(1,-1,-1),(0,c.fA)(-1,1,-1),(0,c.fA)(1,1,-1),(0,c.fA)(-1,-1,1),(0,c.fA)(1,-1,1),(0,c.fA)(-1,1,1),(0,c.fA)(1,1,1)],z=[(0,c.fA)(-1,-1,-1),(0,c.fA)(-1,-1,1),(0,c.fA)(-1,1,-1),(0,c.fA)(-1,1,1),(0,c.fA)(1,-1,-1),(0,c.fA)(1,-1,1),(0,c.fA)(1,1,-1),(0,c.fA)(1,1,1)],C=Math.sqrt(3),y=[null];const q=(0,a.c)(),D=(0,c.vt)(),H=(0,c.vt)(),V=(0,c.vt)(),G=new d.A,k=(0,a.c)(),K=(0,a.c)(),X=(0,a.c)(),J=(0,a.c)(),U=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],W=new d.A,Y=[0,0,0,0,0,0,0,0],Q=v;var Z=n(50109);function $(t,e,n){const i=(0,a.c)(),o=(0,a.g)(i);return(0,s.r)(o,o,t,.5),(0,s.r)(o,o,e,.5),i[3]=(0,s.p)(o,t),(0,s.g)(o,o,n),i}let tt=class{constructor(){this._idToComponent=new Map,this._components=new Q((t=>t.bounds)),this._edges=new Q((t=>t.bounds)),this._tmpLineSegment=(0,u.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,o.Te)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:i}=t;n.push({id:e,uid:i})}return!0}),t.bounds),!n.length)return;const i={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",i,null!==e&&void 0!==e?e:{});for(const r of o.components)this._setFetchEdgeLocations(r)}async add(t){const e=new it(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=Z.HY.createView(t.locations),i=new Array(n.count),o=(0,c.vt)(),r=(0,c.vt)();for(let c=0;c<n.count;c++){n.position0.getVec(c,o),n.position1.getVec(c,r);const s=$(o,r,t.origin),u=new ot(e,c,s);i[c]=u}this._edges.add(i);const{objectIds:s,origin:u}=t;e.info={locations:n,objectIds:s,origin:u}}_addCandidates(t,e,n){const{info:i}=e.component,{origin:o,objectIds:r}=i,c=i.locations,u=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(u,u,o),(0,s.g)(a,a,o);const h=r[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,u,a,n),nt(t,h,u,n),nt(t,h,a,n)}_addEdgeCandidate(t,e,n,i,o){if(!t.returnEdge)return;const r=(0,a.g)(t.bounds),h=(0,u.Cr)(n,i,this._tmpLineSegment),d=(0,u._I)(h,r,this._tmpP3);(0,a.n)(t.bounds,d)&&o.push({type:"edge",objectId:e,target:(0,c.o8)(d),distance:(0,s.p)(r,d),start:(0,c.o8)(n),end:(0,c.o8)(i)})}};tt=(0,i._)([(0,r.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],tt);const et=tt;function nt(t,e,n,i){if(!t.returnVertex||!(0,a.n)(t.bounds,n))return;const o=(0,a.g)(t.bounds);i.push({type:"vertex",objectId:e,target:(0,c.o8)(n),distance:(0,s.p)(o,n)})}class it{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++it.uid}}it.uid=0;class ot{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=9150.deb15b56.chunk.js.map