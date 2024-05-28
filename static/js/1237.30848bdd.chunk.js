"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[1237],{86130:(e,s,t)=>{t.d(s,{$1:()=>c,H2:()=>f,MT:()=>m,VP:()=>h,WF:()=>u,Wt:()=>a,XQ:()=>g,hK:()=>d,nS:()=>p,uh:()=>i,xY:()=>l});var o=t(55678);const n="upload-assets",r=()=>new Error;class a extends o.A{constructor(){super("".concat(n,":unsupported"),"Layer does not support asset uploads.",r())}}class i extends o.A{constructor(){super("".concat(n,":no-glb-support"),"Layer does not support glb.",r())}}class l extends o.A{constructor(){super("".concat(n,":no-supported-source"),"No supported external source found",r())}}class c extends o.A{constructor(){super("".concat(n,":not-base-64"),"Expected gltf data in base64 format after conversion.",r())}}class u extends o.A{constructor(){super("".concat(n,":unable-to-prepare-options"),"Unable to prepare uploadAsset request options.",r())}}class p extends o.A{constructor(e,s){super("".concat(n,":bad-response"),"Bad response. Uploaded ".concat(e," items and received ").concat(s," results."),r())}}class d extends o.A{constructor(e,s){var t,o;super("".concat(n,"-layer:upload-failed"),"Failed to upload mesh file ".concat(e,". Error code: ").concat(null!==(t=null===s||void 0===s?void 0:s.code)&&void 0!==t?t:"-1",". Error message: ").concat(null!==(o=null===s||void 0===s?void 0:s.messages)&&void 0!==o?o:"unknown"),r())}}class f extends o.A{constructor(e){super("".concat(n,"-layer:unsupported-format"),"The service allowed us to upload an asset of FormatID ".concat(e,", but it does not list it in its supported formats."),r())}}class m extends o.A{constructor(){super("".concat(n,":convert3D-failed"),"convert3D failed.")}}class h extends o.A{constructor(){super("invalid-input:no-model","No supported model found")}}class g extends o.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},91237:(e,s,t)=>{t.d(s,{uploadAssets:()=>S});var o=t(25943),n=t(27052),r=t(11434),a=t(92976),i=t(53183),l=t(89524),c=t(77625),u=t(19831),p=t(86130);const d={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var f=t(63410),m=t(82439),h=t(1121);function g(e){return new w(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class w{constructor(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},t=arguments.length>2?arguments[2]:void 0;if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[o,n]of this._progressMap.entries())e+=n*this._weights[o];if(1===e&&(0,n.A)("enable-feature:esri-3dofl-upload-timings")){var s;const e=Math.round(performance.now()-(null!==(s=this._startTime)&&void 0!==s?s:0))/1e3;console.log("".concat(this.taskName," done in ").concat(e," sec"));for(const[s,o]of this._timingsMap){var t;const n=Math.round(o.end-o.start)/1e3,r=Math.round(n/e*100);console.log(null!==(t=this.taskName)&&void 0!==t?t:"Task",{stepKey:s,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),(0,n.A)("enable-feature:esri-3dofl-upload-timings")){var t;const o=performance.now();null!==(t=this._startTime)&&void 0!==t||(this._startTime=o);const n=(0,h.tE)(this._timingsMap,e,(()=>({start:o,end:0})));1===s&&(n.end=o)}this.emitProgress()}simulate(e,s){return y((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,n=1-Math.exp(-o/s);e(n)}),P);return(0,m.hA)((()=>{clearInterval(o),e(1)}))}function v(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;return(0,i.gr)((0,i.Kp)(e*b/s))}const T=10,A=10,b=8e-6,P=(0,i.l5)(50),j=(0,i.l5)(1e3),x=1e6,F=20*x,_=2e9,M=3;async function E(e,s,t){let{data:n,name:r,description:i}=e,c=null;try{const e=(0,l.fj)(s,"uploads"),p=(0,l.fj)(e,"info"),{data:d}=await(0,o.A)(p,{query:{f:"json"},responseType:"json"});(0,a.Te)(t);const m=(0,f.Wo)(s),h=d.maxUploadFileSize*x,w=m?_:h,y=m?Math.min(F,h):F;if(n.size>w)throw new Error("Data too large");const T=(0,l.fj)(e,"register"),{data:A}=await(0,o.A)(T,{query:{f:"json",itemName:(u=r,u.replaceAll("/","_").replaceAll("\\","_")),description:i},responseType:"json",method:"post"});if((0,a.Te)(t),!A.success)throw new Error("Registration failed");const{itemID:b}=A.item;c=(0,l.fj)(e,b);const P=(0,l.fj)(c,"uploadPart"),j=Math.ceil(n.size/y),E=new Array;for(let s=0;s<j;++s)E.push(n.slice(s*y,Math.min((s+1)*y,n.size)));const N=E.slice().reverse(),S=new Array,k=g(j,null===t||void 0===t?void 0:t.onProgress,"uploadItem"),I=async()=>{for(;0!==N.length;){const e=E.length-N.length,s=N.pop(),n=new FormData,r=k.simulate(e,v(s.size));try{n.append("f","json"),n.append("file",s),n.append("partId","".concat(e));const{data:r}=await(0,o.A)(P,{timeout:0,body:n,responseType:"json",method:"post"});if((0,a.Te)(t),!r.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let s=0;s<M&&0!==N.length;++s)S.push(I());await Promise.all(S);const D=(0,l.fj)(c,"commit"),{data:U}=await(0,o.A)(D,{query:{f:"json",parts:E.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if((0,a.Te)(t),!U.success)throw new Error("Commit failed");return U.item}catch(p){if(null!=c){const e=(0,l.fj)(c,"delete");await(0,o.A)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw p}var u}var N=t(73321);async function S(e,s,t){var o;const n=e.length;if(!n)return null!==t&&void 0!==t&&null!==(o=t.onProgress)&&void 0!==o&&o.call(t,1),[];const r=g(n,null===t||void 0===t?void 0:t.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,s,t){var o;let{layer:n,ongoingUploads:r}=s;const l=r.get(e);if(l)return l;if(!function(e){return!!e.infoFor3D&&!!e.url}(n))throw new p.Wt;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,u.eN)(e,t)))}(e,n))return null!==t&&void 0!==t&&null!==(o=t.onProgress)&&void 0!==o&&o.call(t,1),e;const f=async function(e,s,t){const{metadata:o}=e,{displaySource:n}=o,r=k(null===n||void 0===n?void 0:n.source,s),l=!!r,u=o.externalSources.length>0,f=l?async function(e,s,t){return{source:await D(e,s,t),original:!0}}(r,s,t):u?async function(e,s,t){const o=R(s),{externalSources:n}=e.metadata,r=function(e,s){for(const t of e){const e=k(t.source,s);if(e)return e}return null}(n,s);if(!r)throw new p.xY;const a=g(d.uploadConvertibleSource,null===t||void 0===t?void 0:t.onProgress,"uploadConvertibleSource"),l=await D(r,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:l,original:!0}]);const c=r.reduce(((e,s)=>{let{asset:t}=s;return t instanceof File?e+t.size:e}),0),u=a.simulate("serviceAssetsToGlb",function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;return(0,i.gr)((0,i.Kp)(e*b/s))}(c));try{return{source:await q(l,s,o)}}finally{u.remove()}}(e,s,t):async function(e,s,t){const o=g(d.uploadLocalMesh,null===t||void 0===t?void 0:t.onProgress,"uploadLocalMesh"),n=async function(e,s,t){const o=R(s),n=await e.load(t),r=await n.toBinaryGLTF({ignoreLocalTransform:!0});(0,a.Te)(t);const i=await r.buffer();return(0,a.Te)(t),{blob:new Blob([i.data],{type:i.type}),assetName:"".concat((0,c.yS)(),".glb"),assetType:o}}(e,s,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await U([n],s,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,s,t),m=await f;return(0,a.Te)(t),e.addExternalSources([m]),e}(e,n,t);r.set(e,f);try{await f}finally{r.delete(e)}return e}(e,s,{...t,onProgress:r.makeOnProgress(o)}))))}function k(e,s){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:o}}=s,n=(0,u.WN)(e),r=new Array;let a=!1;for(let i=0;i<n.length;++i){const e=I(n[i],t);if(!e)return null;o.includes(e.assetType)&&(a=!0),r.push(e)}return a?r:null}function I(e,s){const t=(0,u.fH)(e,s);return t?{asset:e,assetType:t}:null}async function D(e,s,t){return U(e.map((e=>async function(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const n=await t.toBlob(s);return(0,a.Te)(s),{blob:n,assetName:t.assetName,assetType:o}}(e,t))),s,t)}async function U(e,s,t){const o=g(d.uploadAssetBlobs,null===t||void 0===t?void 0:t.onProgress,"uploadAssetBlobs"),n=await function(e,s,t){const o=g(e.length,null===t||void 0===t?void 0:t.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,n)=>{const i=async function(e,s,t){const{blob:o,assetType:n,assetName:i}=e;let c=null;try{const e=await E({data:o,name:i},s.url,t);(0,a.Te)(t),c={assetType:n,assetUploadId:e.itemID}}catch(j){(0,a.QP)(j),r.A.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce("Service ".concat(s.url," does not support the REST Uploads API."))}if(!c){const e=await(0,l._0)(o);if((0,a.Te)(t),!e.isBase64)throw new p.$1;c={assetType:n,assetData:e.data}}if(!c)throw new p.WF;return{item:c,assetName:i}}(await e,s,{...t,onProgress:o.makeOnProgress(n)});return(0,a.Te)(t),i})))}(e,s,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.Te)(t);const i=n.map((e=>{let{item:s}=e;return s})),{uploadResults:c}=await B(i,s,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.Te)(t),e.map(((e,t)=>function(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new p.hK(e.assetName,t)}const{assetHash:n}=s,{assetName:r,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,l=(0,N.Fm)(a,i);if(!l)throw new p.H2(a);return new u.Qp(r,l,[new u.Bq("".concat(t.parsedUrl.path,"/assets/").concat(n),n)])}(n[t],c[t],s)))}async function B(e,s,t){const n=y(null===t||void 0===t?void 0:t.onProgress);try{const n=await(0,o.A)((0,l.fj)(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.Te)(t),n.data.uploadResults.length!==e.length)throw new p.nS(e.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}async function q(e,s,t){var o;const n=e.map((e=>{let{assetName:s,parts:t}=e;return{assetName:s,assetHash:t[0].partHash}})),r=null===(o=s.capabilities)||void 0===o?void 0:o.operations.supportsAsyncConvert3D,a={f:"json",assets:JSON.stringify(n),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},i=(0,l.fj)(s.parsedUrl.path,"convert3D");let c;try{c=(await(r?O:C)(i,{query:a,responseType:"json",timeout:0})).data}catch(j){throw new p.MT}const{supportedFormats:d}=s.infoFor3D;return c.assets.map((e=>{const s=(0,N.R_)(e.contentType,d);if(!s)throw new p.H2(s);return new u.Qp(e.assetName,e.contentType,[new u.Bq(e.assetURL,e.assetHash)])}))}function C(e,s){return(0,o.A)(e,s)}async function O(e,s){const t=(await(0,o.A)(e,s)).data.statusUrl;for(;;){const e=(await(0,o.A)(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.Pl)(L)}}function R(e){var s;const{infoFor3D:t}=e,o=null!==(s=(0,N.R_)("model/gltf-binary",t.supportedFormats))&&void 0!==s?s:(0,N.E1)("glb",t.supportedFormats);if(!o)throw new p.uh;return o}const L=(0,i.l5)(1e3)}}]);
//# sourceMappingURL=1237.30848bdd.chunk.js.map