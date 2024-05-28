"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[2720],{87719:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(70273),r=n(27907),i=n(50636),s=n(34816),l=n(85010),a=n(74084),u=n(67519),p=(n(27052),n(11434),n(55292));let d=0,c=class extends((0,a.Te)((0,s.O)((0,l.sA)(r.A)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(i.Ru)}};(0,o._)([(0,u.MZ)({type:String,constructOnly:!0,clonable:!1})],c.prototype,"id",void 0),(0,o._)([(0,u.MZ)({type:String})],c.prototype,"title",void 0),(0,o._)([(0,u.MZ)({clonable:!1,value:null})],c.prototype,"parent",null),(0,o._)([(0,u.MZ)({readOnly:!0})],c.prototype,"isEditable",null),c=(0,o._)([(0,p.$)("esri.analysis.Analysis")],c);const y=c},15220:(e,t,n)=>{n.d(t,{P:()=>y});var o=n(55678),r=n(41244),i=n(21629),s=n(89524),l=n(77625),a=n(57800),u=n(20646),p=n(67519),d=n(10180),c=n(9435);function y(e){var t;const n=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,o)=>{const r=function(e,t,n){var o;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,n){const o=(0,a.z4)(t,n);return{type:String,read:(e,t,n)=>{const r=(0,c.r)(e,t,n);return o.type===String?r:"function"==typeof o.type?new o.type({url:r}):void 0},write:{writer(t,r,l,a){if(null===a||void 0===a||!a.resources)return"string"==typeof t?void(r[l]=(0,c.t)(t,a)):void(r[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,c.t)(p,{...a,verifyItemRelativeUrls:null!==a&&void 0!==a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),h=o.type!==String&&(!(0,i.H)(this)||(null===a||void 0===a?void 0:a.origin)&&this.originIdOf(n)>(0,u.aB)(a.origin)),m={object:this,propertyName:n,value:t,targetUrl:y,dest:r,targetPropertyName:l,context:a,params:e};null!==a&&void 0!==a&&a.portalItem&&y&&!(0,s.oP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(m):h?function(e){var t;const{context:n,targetUrl:o,params:r,value:i,dest:l,targetPropertyName:a}=e;if(!n.portalItem)return;const u=n.portalItem.resourceFromPath(o),p=g(i,o,n),c=(0,d.n)(p),y=(0,s.Zo)(u.path),h=null!==(t=null===r||void 0===r?void 0:r.compress)&&void 0!==t&&t;c===y?(n.resources&&f({...e,resource:u,content:p,compress:h,updates:n.resources.toUpdate}),l[a]=o):v(e)}(m):function(e){let{context:t,targetUrl:n,dest:o,targetPropertyName:r}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),o[r]=n)}(m):null!==a&&void 0!==a&&a.portalItem&&(null==y||null!=(0,c.i)(y)||(0,s.w8)(y)||h)?v(m):r[l]=y}}}}(e,t,n);switch(null!==(o=null===e||void 0===e?void 0:e.type)&&void 0!==o?o:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.b;return{read:e,write:t}}}}(e,t,o);for(const e of n){const n=(0,p.rM)(t,e,o);for(const e in r)n[e]=r[e]}}}function v(e){var t,n,i,a;const{targetUrl:u,params:p,value:y,context:v,dest:h,targetPropertyName:m}=e;if(!v.portalItem)return;const b=(0,c.p)(u),w=g(y,u,v);if(null!==p&&void 0!==p&&p.contentAddressed&&"json"!==w.type)return void(null===(t=v.messages)||void 0===t||t.push(new o.A("persistable:contentAddressingUnsupported",'Property "'.concat(m,'" is trying to serializing a resource with content of type ').concat(w.type," with content addressing. Content addressing is only supported for json resources."),{content:w})));const I=null!==p&&void 0!==p&&p.contentAddressed&&"json"===w.type?(0,r.d)(w.jsonString):null!==(n=null===b||void 0===b?void 0:b.filename)&&void 0!==n?n:(0,l.lk)(),j=(0,s.fj)(null!==(i=null===p||void 0===p?void 0:p.prefix)&&void 0!==i?i:null===b||void 0===b?void 0:b.prefix,I),_="".concat(j,".").concat((0,d.n)(w));if(null!==p&&void 0!==p&&p.contentAddressed&&v.resources&&"json"===w.type){var x;const e=null!==(x=v.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===_})))&&void 0!==x?x:v.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===_}));if(e)return void(h[m]=e.resource.itemRelativeUrl)}const M=v.portalItem.resourceFromPath(_);(0,s.w8)(u)&&v.resources&&v.resources.pendingOperations.push((0,s.tk)(u).then((e=>{M.path="".concat(j,".").concat((0,d.n)({type:"blob",blob:e})),h[m]=M.itemRelativeUrl})).catch((()=>{})));const A=null!==(a=null===p||void 0===p?void 0:p.compress)&&void 0!==a&&a;v.resources&&f({...e,resource:M,content:w,compress:A,updates:v.resources.toAdd}),h[m]=M.itemRelativeUrl}function f(e){let{object:t,propertyName:n,updates:o,resource:r,content:i,compress:s}=e;o.push({resource:r,content:i,compress:s,finish:e=>{!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function g(e,t,n){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(n))}}},21629:(e,t,n)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}n.d(t,{H:()=>o})},92720:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var o=n(70273),r=n(87719);function i(e,t){return s(e)===s(t)}function s(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:"o-".concat(t,"-").concat(n)}const l={json:{write:{writer:function(e,t){var n;null!=(null===e||void 0===e||null===(n=e.layer)||void 0===n?void 0:n.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var a=n(27907),u=n(34816),p=n(74084),d=n(55748),c=n(67519),y=(n(27052),n(11434),n(11215),n(55292)),v=n(15220),f=n(21138),g=n(94523);let h=class extends((0,p.Te)((0,u.O)(a.A))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,d.CM)(this.position,e.position)&&(0,d.CM)(this.elevationInfo,e.elevationInfo)&&i(this.feature,e.feature)}};(0,o._)([(0,c.MZ)({type:f.A,json:{write:{isRequired:!0}}})],h.prototype,"position",void 0),(0,o._)([(0,c.MZ)({type:g.A}),(0,v.P)()],h.prototype,"elevationInfo",void 0),(0,o._)([(0,c.MZ)(l)],h.prototype,"feature",void 0),h=(0,o._)([(0,y.$)("esri.analysis.LineOfSightAnalysisObserver")],h);const m=h;let b=class extends((0,p.Te)(u.P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,d.CM)(this.position,e.position)&&(0,d.CM)(this.elevationInfo,e.elevationInfo)&&i(this.feature,e.feature)}};(0,o._)([(0,c.MZ)({type:f.A}),(0,v.P)()],b.prototype,"position",void 0),(0,o._)([(0,c.MZ)({type:g.A}),(0,v.P)()],b.prototype,"elevationInfo",void 0),(0,o._)([(0,c.MZ)(l)],b.prototype,"feature",void 0),b=(0,o._)([(0,y.$)("esri.analysis.LineOfSightAnalysisTarget")],b);const w=b;var I=n(80757),j=n(23617),_=n(73896),x=n(70190),M=n(52476),A=n(24512);const O=I.A.ofType(w);let Z=class extends r.A{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,_.wB)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),_.pc))}get targets(){return this._get("targets")||new O}set targets(e){this._set("targets",(0,j.V)(e,this.targets,O))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const n=e=>"absolute-height"===(0,A.w7)(e.position,e.elevationInfo),o=this.observer.position,r=(0,M.fA)(o.x,o.y,o.z,o.x,o.y,o.z);for(const s of this.targets)if(null!=s.position){const e=(0,x.projectOrLoad)(s.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:n,z:o}=e.geometry;(0,M.iT)(r,[t,n,o])}}const i=(0,M.w1)(r,t);return n(this.observer)&&this.targets.every(n)||(i.zmin=void 0,i.zmax=void 0),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,o._)([(0,c.MZ)({type:["line-of-sight"]})],Z.prototype,"type",void 0),(0,o._)([(0,c.MZ)({type:m,json:{read:!0,write:!0}})],Z.prototype,"observer",void 0),(0,o._)([(0,c.MZ)({cast:j.H,type:O,nonNullable:!0,json:{read:!0,write:!0}})],Z.prototype,"targets",null),(0,o._)([(0,c.MZ)({value:null,readOnly:!0})],Z.prototype,"extent",void 0),(0,o._)([(0,c.MZ)({readOnly:!0})],Z.prototype,"spatialReference",null),(0,o._)([(0,c.MZ)({readOnly:!0})],Z.prototype,"requiredPropertiesForEditing",null),Z=(0,o._)([(0,y.$)("esri.analysis.LineOfSightAnalysis")],Z);const P=Z;var S=n(68313),R=n(97719),E=n(94452);const z=I.A.ofType(w);let U=class extends((0,E.q)((0,S.P)(R.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new P,this.opacity=1}initialize(){this.addHandles((0,_.wB)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),_.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new I.A}set targets(e){var t;(0,j.V)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new P)}};(0,o._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],U.prototype,"type",void 0),(0,o._)([(0,c.MZ)({type:["LineOfSightLayer"]})],U.prototype,"operationalLayerType",void 0),(0,o._)([(0,c.MZ)({type:m,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],U.prototype,"observer",null),(0,o._)([(0,c.MZ)({type:z,json:{read:!0,write:{ignoreOrigin:!0}}})],U.prototype,"targets",null),(0,o._)([(0,c.MZ)({nonNullable:!0,json:{read:!1,write:!1}})],U.prototype,"analysis",void 0),(0,o._)([(0,c.MZ)({readOnly:!0})],U.prototype,"fullExtent",null),(0,o._)([(0,c.MZ)({readOnly:!0})],U.prototype,"spatialReference",null),(0,o._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],U.prototype,"opacity",void 0),(0,o._)([(0,c.MZ)({type:["show","hide"]})],U.prototype,"listMode",void 0),U=(0,o._)([(0,y.$)("esri.layers.LineOfSightLayer")],U);const F=U},10180:(e,t,n)=>{n.d(t,{n:()=>r});var o=n(89524);function r(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,o.Zo)(e);return a[t]||s}(e.url)}(e)]||l}const i={},s="text/plain",l=i[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)i[a[u]]=u},24512:(e,t,n)=>{n.d(t,{$7:()=>s,B:()=>i,XF:()=>a,tW:()=>l,w7:()=>r});n(34531),n(70411);function o(e){return e?u:p}function r(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:o(e).mode}(null!=e&&e.hasZ,t)}function i(e,t,n){return n&&n.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function s(e,t,n){return(null===n||void 0===n?void 0:n.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function l(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function a(e,t){t&&e.warn(".elevationInfo=",t)}const u={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=2720.353e145f.chunk.js.map