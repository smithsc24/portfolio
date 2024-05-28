"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[4320,424],{67150:(e,t,r)=>{r.d(t,{v:()=>n});var o=r(21629);function n(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,o.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},21629:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>o})},54320:(e,t,r)=>{r.d(t,{Xh:()=>T,w6:()=>N});var o=r(70273),n=r(25943),s=r(55678),a=r(11434),i=r(92976),l=r(89524),c=r(67519),u=(r(27052),r(11215),r(35097)),p=r(55292),d=r(8597),h=r(67150),f=r(76607),v=r(21331),y=r(34614),m=r(63410),w=r(30931),g=r(69518);let S=null;function I(){return S}var x=r(83807),A=r(40710),_=r(72560),b=r(262),R=r(324),P=r(23133);const N=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,i.sg)((async(e,t,r)=>{switch(e){case T.SAVE:return this._save(t);case T.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return y.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new y.A(o):null}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return f.A.fromJSON(o,r)}const o=t.store,n=this._readSpatialReference(t);return null==n||null==(null===o||void 0===o?void 0:o.extent)||!Array.isArray(o.extent)||o.extent.some((e=>e<O))?null:new f.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){var r;const o=null===(r=this.portalItem)||void 0===r?void 0:r.title;if("item-title"===this.sublayerTitleMode)return(0,m.yG)(this.url,t.name);let n=t.name;if(!n&&this.url){const e=(0,m.qg)(this.url);null!=e&&(n=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(n=o+" - "+n),(0,m.cr)(n)}set url(e){const t=(0,m.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:a.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,m.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.An)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,g.F)(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,a.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,n=null===(t=e.rootPage)||void 0===t||null===(t=t.nodes)||void 0===t?void 0:t[o];if(null==(null===n||void 0===n||null===(r=n.obb)||void 0===r?void 0:r.center)||null==n.obb.halfSize)throw new s.A("sceneservice:invalid-node-page","Invalid node page.");if(n.obb.center[0]<O||null==this.fullExtent||this.fullExtent.hasZ)return;const a=n.obb.halfSize,i=n.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=i-l,this.fullExtent.zmax=i+l}else if("node"===(null===e||void 0===e?void 0:e.type)){var o;const t=null===(o=e.rootNode)||void 0===o?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<O)return;const r=t[2],n=t[3],{fullExtent:s}=this;s&&(s.zmin=r-n,s.zmax=r+n)}}async _fetchService(e){if(null==this.url)throw new s.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,n.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const o=await(0,n.A)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});o.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let s=!1;if(o.data.layerType&&"Voxel"===o.data.layerType&&(s=!0),s)return this._fetchVoxelServiceLayer();const a=o.data;this.read(a,this._getServiceContext()),this.validateLayer(a)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,n.A)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const n of o)e.typeKeywords.push(n);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===U.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){var r,o;const n={...M,...t};let a=A.default.from(e);if(!a)throw new s.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,R.X)(a),a.id&&(a=a.clone(),a.id=null);const i=a.portal||x.A.getDefault();await this._ensureLoadBeforeSave(),a.type=E,a.portal=i;const l=(0,_.m)(a,"portal-item",!0),c={layers:[this.write({},l)]};return await Promise.all(null!==(r=l.resources.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(c,l,n),a.url=this.url,a.title||(a.title=this.title),this._updateTypeKeywords(a,n,U.newItem),await i.signIn(),await(null===(o=i.user)||void 0===o?void 0:o.addItem({item:a,folder:null===n||void 0===n?void 0:n.folder,data:c})),await(0,b.r)(this.resourceReferences,l),this.portalItem=a,(0,h.v)(l),l.portalItem=a,a}async _save(e){var t;const r={...M,...e};if(!this.portalItem)throw new s.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,R.X)(this.portalItem),this.portalItem.type!==E)throw new s.A("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(E,'"'));await this._ensureLoadBeforeSave();const o=(0,_.m)(this.portalItem,"portal-item",!0),n={layers:[this.write({},o)]};return await Promise.all(null!==(t=o.resources.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(n,o,r),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,U.existingItem),await(0,b.S)(this.portalItem,n,this.resourceReferences,o),(0,h.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=null===r||void 0===r?void 0:r.validationOptions;(0,P.c)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:null===o||void 0===o?void 0:o.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=null===o||void 0===o?void 0:o.enabled,i=I();if(n&&i){const t=(await i()).validate(e,r.portalItemLayerType);if(!t.length)return;const n="Layer item did not validate:\n".concat(t.join("\n"));if(a.A.getLogger(this).error("_validateAgainstJSONSchema(): ".concat(n)),"throw"===o.failPolicy){const e=t.map((e=>new s.A("sceneservice:schema-validation",e)));throw new s.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,c.MZ)(w.id)],t.prototype,"id",void 0),(0,o._)([(0,c.MZ)({type:y.A})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,c.MZ)({type:f.A})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,c.MZ)({readOnly:!0,type:v.A})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,c.MZ)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.w)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,c.MZ)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.MZ)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,c.MZ)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.w)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.w)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,c.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,c.MZ)(w.OZ)],t.prototype,"url",null),(0,o._)([(0,d.K)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,c.MZ)()],t.prototype,"parsedUrl",null),(0,o._)([(0,c.MZ)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,p.$)("esri.layers.mixins.SceneService")],t),t},O=-1e38;var U,j;(j=U||(U={}))[j.existingItem=0]="existingItem",j[j.newItem=1]="newItem";const E="Scene Service",M={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var T;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(T||(T={}))},69518:(e,t,r)=>{r.d(t,{F:()=>s});var o=r(25943),n=r(55678);async function s(e,t,r,s,a,i,l){let c=null;if(null!=r){const t="".concat(e,"/nodepages/"),n=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.A)(n,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(h){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,h),c=h}}if(!t)return null;const u=null===t||void 0===t?void 0:t.split("/").pop(),p="".concat(e,"/nodes/"),d=p+u;try{return{type:"node",rootNode:(await(0,o.A)(d,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,urlPrefix:p}}catch(h){throw new n.A("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:h,url:d})}}},72560:(e,t,r)=>{r.d(t,{m:()=>a,v:()=>s});var o=r(89524),n=r(83807);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function a(e,t,r){const n=(0,o.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,o.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},424:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>h,cL:()=>d,fetchResources:()=>a,removeAllResources:()=>c,removeResource:()=>l});var o=r(25943),n=r(55678),s=r(89524);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,s.fj)(e.itemUrl,"resources"),{start:n=1,num:a=10,sortOrder:i="asc",sortField:l="resource"}=t,c={query:{start:n,num:a,sortOrder:i,sortField:l,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,c);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:n}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(n)}}))}}async function i(e,t,r,o){const a=new Map;for(const{resource:s,content:l,compress:c,access:p}of t){if(!s.hasPath())throw new n.A("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(s.path),o="".concat(e,"/").concat(null!==c&&void 0!==c?c:"","/").concat(null!==p&&void 0!==p?p:"");a.has(o)||a.set(o,{prefix:e,compress:c,access:p,files:[]}),a.get(o).files.push({fileName:t,content:l})}await e.load(o);const i=(0,s.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:n,compress:s,access:l,files:c}of a.values()){const t=25;for(let r=0;r<c.length;r+=t){const a=c.slice(r,r+t),u=new FormData;n&&"."!==n&&u.append("resourcesPrefix",n),s&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of a)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:null===o||void 0===o?void 0:o.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new n.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,s.fj)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,s.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,s.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,n]=u(t);return[o,n,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.A)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=p(e.path);return e.portalItem.resourceFromPath((0,s.fj)(r,t+o))}},262:(e,t,r)=>{r.d(t,{S:()=>l,r:()=>i});var o=r(55678),n=r(92976),s=r(77625),a=r(424);async function i(e,t,r){const o=await c(e,t,r);await u(o,t,r)}async function l(e,t,r,o,n){const s=await c(r,o,n);await e.update({data:t}),await u(s,o,n)}async function c(e,t,i){if(null===t||void 0===t||!t.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const c=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];c.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],h=[],f=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),c.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:n}=r,i=(0,a.bg)(t,(0,s.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,a.cL)(o),compress:r.compress}),n&&f.push((()=>n(i)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const t=r.finish;t&&f.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const e=r.finish;e&&f.push((()=>e(r.resource)))}if(d.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,424));await e(t.portalItem,d,"add",i),await e(t.portalItem,h,"update",i)}if(f.forEach((e=>e())),0===p.length)return l;const v=await(0,n.Ol)(p);if((0,n.Te)(i),v.length>0)throw new o.A("save:resources","Failed to save one or more resources",{errors:v});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const n of e){const e=t.portalItem.resourceFromPath(n);o.push(e.portalItem.removeResource(e,r))}await(0,n.Lx)(o)}},324:(e,t,r)=>{r.d(t,{X:()=>a});var o=r(57998),n=r(55678),s=r(99482);function a(e){if(o.A.apiKey&&(0,s.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}},23133:(e,t,r)=>{r.d(t,{c:()=>a,d:()=>n});var o=r(55678);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const s=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function a(e,t,r){var n;let a=(null!==(n=e.messages)&&void 0!==n?n:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new o.A(t,r,n)}));if(e.blockedRelativeUrls&&(a=a.concat(e.blockedRelativeUrls.map((e=>new o.A("url:unsupported","Relative url '".concat(e,"' is not supported")))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:o}=r;e&&(a=a.filter((e=>{let{name:r}=e;return!(s.has(r)||t.includes(r))}))),o&&(a=a.filter((e=>"web-document-write:property-required"!==e.name)))}if(a.length>0)throw new o.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}}}]);
//# sourceMappingURL=4320.959e20c5.chunk.js.map