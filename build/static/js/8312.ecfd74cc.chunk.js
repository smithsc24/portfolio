"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[8312],{92782:(e,t,i)=>{i.d(t,{A:()=>n});class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=i}static fromJSON(e){return new n(e.lengths,e.coords,e.hasIndeterminateRingOrder)}static fromRect(e){const[t,i,s,h]=e,r=s-t,a=h-i;return new n([5],[t,i,r,0,0,a,-r,0,0,-a])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let i=0;i<this.lengths.length;i++){const n=this.lengths[i];for(let i=0;i<n;i++)e(this.coords[2*(i+t)],this.coords[2*(i+t)+1]);t+=n}}deltaDecode(){const e=this.clone(),{coords:t,lengths:i}=e;let n=0;for(const s of i){for(let e=1;e<s;e++)t[2*(n+e)]+=t[2*(n+e)-2],t[2*(n+e)+1]+=t[2*(n+e)-1];n+=s}return e}clone(e){if(0===this.lengths.length)return new n([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),i=this.coords.slice(0,t);return e?(e.set(i),new n(this.lengths,e,this.hasIndeterminateRingOrder)):new n(Array.from(this.lengths),Array.from(i),this.hasIndeterminateRingOrder)}}},26892:(e,t,i)=>{i.d(t,{A:()=>h});var n=i(6418),s=i(11400);class h{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let n=this._inFlightResourceMap.get(e);return n?n.then((e=>({width:e.width,height:e.height}))):(n=(0,s.M5)(e,t),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,n.Al)(e)}}},35654:(e,t,i)=>{i.d(t,{previewCIMSymbol:()=>M});var n=i(3409),s=i(24767),h=i(26892),r=i(1460),a=i(58644),l=i(98697);const o=96/72;function c(e,t,i,n){const s=-t/2+1,h=t/2-1,r=i/2-1,a=-i/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[s,0],[0,0],[h,0]]]};default:return"legend"===n?{rings:[[[s,r],[h,0],[h,a],[s,a],[s,r]]]}:{rings:[[[s,r],[h,r],[h,a],[s,a],[s,r]]]}}}var g=i(18459),u=i(78013);const d=new class{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new h.A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,n,h,r,o,g,u){if(!e)return null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:m}=d;r||(r=(0,l.n5)(m));const y=await a.$.resolveSymbolOverrides(d,t,this._spatialReference,h,r,o,g),f=this._cimResourceManager,w=[];s.wp.fetchResources(y,f,w),s.wp.fetchFonts(y,f,w),w.length>0&&await Promise.all(w);const{width:p,height:M}=i,v=c(r,p,M,n),b=s.wp.getEnvelope(y,v,f);if(!b)return null;let x=1,R=0,_=0;switch(m.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;b.width>p&&(e=p/b.width);let t=1;b.height>M&&(t=M/b.height),"preview"===n&&(b.width<p&&(e=p/b.width),b.height<M&&(t=M/b.height)),x=Math.min(e,t),R=b.x+b.width/2,_=b.y+b.height/2}break;case"CIMLineSymbol":{(u||b.height>M)&&(x=M/b.height),_=b.y+b.height/2;const e=b.x*x+p/2,t=(b.x+b.width)*x+p/2,{paths:i}=v;i[0][0][0]-=e/x,i[0][2][0]-=(t-p)/x}break;case"CIMPolygonSymbol":{R=b.x+b.width/2,_=b.y+b.height/2;const e=b.x*x+p/2,t=(b.x+b.width)*x+p/2,i=b.y*x+M/2,n=(b.y+b.height)*x+M/2,{rings:s}=v;e<0&&(s[0][0][0]-=e,s[0][3][0]-=e,s[0][4][0]-=e),i<0&&(s[0][0][1]+=i,s[0][1][1]+=i,s[0][4][1]+=i),t>p&&(s[0][1][0]-=t-p,s[0][2][0]-=t-p),n>M&&(s[0][2][1]+=n-M,s[0][3][1]+=n-M)}}const C={type:"cim",data:{type:"CIMSymbolReference",symbol:y}};return this.rasterize(C,p,M,R,_,x,r,1,v)}rasterize(e,t,i,n,s,h,a){let g=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:m}=d,y=this._canvas,f=(window.devicePixelRatio||1)*o;y.width=t*f,y.height=i*f,a||(a=(0,l.n5)(m)),u||(u=c(a,t,i,"legend")),y.width+=2*g,y.height+=2*g;const w=y.getContext("2d",{willReadFrequently:!0}),p=r.IT.createIdentity();return p.translate(-n,-s),p.scale(h*f,-h*f),p.translate(t*f/2+g,i*f/2+g),w.clearRect(0,0,y.width,y.height),new r.Rj(w,this._cimResourceManager,p,!0).drawSymbol(m,u),w.getImageData(0,0,y.width,y.height)}}(null),m=(0,n.PN)(g.CB.size),y=(0,n.PN)(g.CB.maxSize),f=(0,n.PN)(g.CB.lineWidth),w=1;async function p(e,t,i){const n=null===t||void 0===t?void 0:t.size;let h=null!=n&&"object"==typeof n&&"width"in n?n.width:n,r=null!=n&&"object"==typeof n&&"height"in n?n.height:n;if(null==h||null==r)if("esriGeometryPolygon"===i)h=m,r=m;else{const n=await async function(e,t,i){const{feature:n,fieldMap:h,viewParams:r}=t.cimOptions||t,l=await a.$.resolveSymbolOverrides(e.data,n,null,h,i,null,r);if(!l)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:l},e.data.primitiveOverrides=void 0;const o=[];return s.wp.fetchResources(l,d.resourceManager,o),s.wp.fetchFonts(l,d.resourceManager,o),o.length>0&&await Promise.all(o),s.wp.getEnvelope(l,null,d.resourceManager)}(e,t,i);n&&(h=n.width,r=n.height),"esriGeometryPolyline"===i&&(h=f),h=null!=h&&isFinite(h)?Math.min(h,y):m,r=null!=r&&isFinite(r)?Math.max(Math.min(r,y),w):m}return"legend"===t.style&&"esriGeometryPolyline"===i&&(h=f),{width:h,height:r}}async function M(e){var t,i,s;let h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:r,opacity:a,symbolConfig:o}=h,c=null!=o&&"object"==typeof o&&"isSquareFill"in o&&o.isSquareFill,g=h.cimOptions||h,m=g.geometryType||(0,l.n5)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.symbol),y=await p(e,h,m),{feature:f,fieldMap:w}=g,M=c||"esriGeometryPolygon"!==m?"preview":"legend",v=await d.rasterizeCIMSymbolAsync(e,f,y,M,w,m,null,g.viewParams,g.allowScalingUp);if(!v)return null;const{width:b,height:x}=v,R=document.createElement("canvas");R.width=b,R.height=x,R.getContext("2d").putImageData(v,0,0);const _=(0,n.Lz)(y.width),C=(0,n.Lz)(y.height),I=new Image(_,C);I.src=R.toDataURL(),I.ariaLabel=null!==(i=h.ariaLabel)&&void 0!==i?i:null,I.alt=null!==(s=h.ariaLabel)&&void 0!==s?s:"",null!=a&&(I.style.opacity="".concat(a));let P=I;if(null!=h.effectView){const e={shape:{type:"image",x:0,y:0,width:_,height:C,src:I.src},fill:null,stroke:null,offset:[0,0]};P=(0,u.fz)([[e]],[_,C],{effectView:h.effectView,ariaLabel:h.ariaLabel})}return r&&P&&r.appendChild(P),P}},98416:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(15616);class s{constructor(e,t,i,s){this.computedX=0,this.computedY=0,this.center=(0,n.fA)(e,t),this.centerT=(0,n.vt)(),this.halfWidth=i/2,this.halfHeight=s/2,this.width=i,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new s(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const i=Math.abs(e.centerT[0]-this.centerT[0]),n=Math.abs(e.centerT[1]-this.centerT[1]),s=(e.halfWidth+this.halfWidth+t)/i,h=(e.halfHeight+this.halfHeight+t)/n,r=Math.min(s,h);return Math.log2(r)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),n=Math.max(this.xmax,e.xmax)-t,s=Math.max(this.ymax,e.ymax)-i,h=t+n/2,r=i+s/2;this.width=n,this.height=s,this.halfWidth=n/2,this.halfHeight=s/2,this.x=h,this.y=r}static deserialize(e){const t=e.readF32(),i=e.readF32(),n=e.readInt32(),h=e.readInt32();return new s(t,i,n,h)}}},95505:(e,t,i)=>{i.d(t,{$U:()=>A,C2:()=>o,CQ:()=>s,CR:()=>b,C_:()=>L,Cp:()=>x,DY:()=>a,GR:()=>$,Gh:()=>P,LY:()=>C,O5:()=>q,Pq:()=>c,Qb:()=>E,Sr:()=>M,TB:()=>X,V3:()=>F,Vl:()=>B,Xh:()=>U,YS:()=>u,YV:()=>h,_M:()=>S,_x:()=>j,cp:()=>Q,dV:()=>_,eG:()=>l,eI:()=>N,fq:()=>H,fy:()=>D,g0:()=>I,hM:()=>V,ie:()=>z,ju:()=>r,lL:()=>f,mg:()=>G,n9:()=>p,nM:()=>y,nW:()=>T,p:()=>O,qM:()=>n,r1:()=>Y,sn:()=>w,uM:()=>d,ue:()=>g,vN:()=>R,vd:()=>v,yA:()=>W,yv:()=>k,z2:()=>m});const n=1e-30,s=512,h=16777216,r=8,a=29,l=24,o=4,c=0,g=0,u=0,d=1,m=2,y=3,f=4,w=5,p=6,M=12,v=5,b=6,x=5,R=6;var _;!function(e){e[e.FilterFlags=0]="FilterFlags",e[e.Animation=1]="Animation",e[e.GPGPU=2]="GPGPU",e[e.VV=3]="VV",e[e.DD0=4]="DD0",e[e.DD1=5]="DD1",e[e.DD2=6]="DD2"}(_||(_={}));const C=8,I=C<<1,P=1.05,D=3,F=1,S=3,z=3,A=5,G=6,L=1.15,V=2,O=128,W=256-2*V,T=2,H=10,k=1024,E=128,Y=4,q=1,j=1<<20,N=.75,U=10,B=.75,X=256,$=32,Q=512}}]);
//# sourceMappingURL=8312.ecfd74cc.chunk.js.map