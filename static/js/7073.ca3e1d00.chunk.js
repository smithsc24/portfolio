"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7073],{34273:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(74643);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},48941:(e,a,t)=>{t.d(a,{L:()=>u});var r=t(56705),n=t(25943),i=t(55678),l=t(92976),s=t(63410),o=t(83807),c=t(40710);async function u(e,a){var t,u;const f=(0,s.qg)(e);if(!f)throw new i.A("invalid-url","Invalid scene service url");const v={...a,sceneServerUrl:f.url.path,layerId:null!==(t=f.sublayer)&&void 0!==t?t:void 0};if(null!==(u=v.sceneLayerItem)&&void 0!==u||(v.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const t=new c.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=null===r.id||void 0===r.id?void 0:r.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(m){(0,l.QP)(m)}return null}(e);null!=i&&(t.portal=new o.A({url:i}));try{return t.load({signal:e.signal})}catch(w){return(0,l.QP)(w),null}}(v)),null==v.sceneLayerItem)return y(v.sceneServerUrl.replace("/SceneServer","/FeatureServer"),v);const m=await async function(e){let{sceneLayerItem:a,signal:t}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new c.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,l.QP)(r),null}}(v);if(null===m||void 0===m||!m.url)throw new i.A("related-service-not-found","Could not find feature service through portal item relationship");v.featureServiceItem=m;const w=await y(m.url,v);return w.portalItem=m,w}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var t,r,l;const o=(0,s.qg)(e);if(!o)throw new i.A("invalid-feature-service-url","Invalid feature service url");const c=o.url.path,u=a.layerId;if(null==u)return{serverUrl:c};const y=d(a),f=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,v=null===(t=(null===f||void 0===f||null===(r=f.layers)||void 0===r?void 0:r[0])||(null===f||void 0===f||null===(l=f.tables)||void 0===l?void 0:l[0]))||void 0===t?void 0:t.customParameters,m=e=>{const t={query:{f:"json",...v},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(c,t)},w=m("anonymous").catch((()=>m("no-prompt"))),[p,h]=await Promise.all([w,y]),L=null===h||void 0===h?void 0:h.layers,S=p.data&&p.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(L)){for(let n=0;n<Math.min(L.length,S.length);n++)if(L[n].id===u)return{serverUrl:c,layerId:S[n].id}}else if(null!=u&&u<S.length)return{serverUrl:c,layerId:S[u].id};throw new Error("could not find matching associated sublayer")}},38133:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(4877).then(t.bind(t,54877))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(6287),t.e(4320),t.e(4555),t.e(4438),t.e(722),t.e(8260)]).then(t.bind(t,28260))).default,CatalogLayer:async()=>(await Promise.all([t.e(384),t.e(7292),t.e(733),t.e(3592),t.e(3961),t.e(8085)]).then(t.bind(t,98085))).default,CSVLayer:async()=>(await t.e(7816).then(t.bind(t,47816))).default,DimensionLayer:async()=>(await t.e(5384).then(t.bind(t,55384))).default,ElevationLayer:async()=>(await t.e(7134).then(t.bind(t,87134))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,80394))).default,GeoJSONLayer:async()=>(await t.e(4569).then(t.bind(t,84569))).default,GeoRSSLayer:async()=>(await t.e(1061).then(t.bind(t,31061))).default,GroupLayer:async()=>(await t.e(9614).then(t.bind(t,69614))).default,ImageryLayer:async()=>(await Promise.all([t.e(7292),t.e(3726),t.e(8761),t.e(6224),t.e(4396)]).then(t.bind(t,94811))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(3726),t.e(8382),t.e(8761),t.e(1371),t.e(6224),t.e(4136)]).then(t.bind(t,14136))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(4320),t.e(4237)]).then(t.bind(t,24237))).default,KMLLayer:async()=>(await t.e(9538).then(t.bind(t,69538))).default,LineOfSightLayer:async()=>(await t.e(2720).then(t.bind(t,92720))).default,LinkChartLayer:async()=>(await Promise.all([t.e(384),t.e(3256),t.e(2258),t.e(22),t.e(733),t.e(1108),t.e(5764),t.e(8660)]).then(t.bind(t,77546))).default,MapImageLayer:async()=>(await Promise.all([t.e(384),t.e(7292),t.e(3592),t.e(2855),t.e(9085)]).then(t.bind(t,19085))).default,MapNotesLayer:async()=>(await t.e(621).then(t.bind(t,80621))).default,MediaLayer:async()=>(await t.e(2865).then(t.bind(t,62865))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(384),t.e(701),t.e(2541)]).then(t.bind(t,12408))).default,OpenStreetMapLayer:async()=>(await t.e(7953).then(t.bind(t,57953))).default,OrientedImageryLayer:async()=>(await t.e(2062).then(t.bind(t,32062))).default,PointCloudLayer:async()=>(await Promise.all([t.e(4320),t.e(9518)]).then(t.bind(t,89518))).default,RouteLayer:async()=>(await Promise.all([t.e(2397),t.e(5699)]).then(t.bind(t,65699))).default,SceneLayer:async()=>(await Promise.all([t.e(3661),t.e(6287),t.e(4320),t.e(4555),t.e(3362),t.e(4438),t.e(4847),t.e(7294),t.e(722),t.e(3540)]).then(t.bind(t,43540))).default,StreamLayer:async()=>(await t.e(9870).then(t.bind(t,49870))).default,SubtypeGroupLayer:async()=>(await t.e(7085).then(t.bind(t,17085))).default,TileLayer:async()=>(await Promise.all([t.e(384),t.e(7292),t.e(3592),t.e(2855),t.e(3408)]).then(t.bind(t,73408))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(3204).then(t.bind(t,93204))).default,UnknownLayer:async()=>(await t.e(5366).then(t.bind(t,25366))).default,UnsupportedLayer:async()=>(await t.e(9977).then(t.bind(t,49977))).default,VectorTileLayer:async()=>(await Promise.all([t.e(5977),t.e(3849),t.e(7511)]).then(t.bind(t,83840))).default,VoxelLayer:async()=>(await Promise.all([t.e(4320),t.e(6013)]).then(t.bind(t,16013))).default,WFSLayer:async()=>(await Promise.all([t.e(3558),t.e(9053)]).then(t.bind(t,1415))).default,WMSLayer:async()=>(await t.e(78).then(t.bind(t,90078))).default,WMTSLayer:async()=>(await t.e(5982).then(t.bind(t,25982))).default,WebTileLayer:async()=>(await t.e(8318).then(t.bind(t,58318))).default}},26024:(e,a,t)=>{t.d(a,{PC:()=>d,WZ:()=>l,XH:()=>o,_r:()=>n,ay:()=>u,bO:()=>i,nu:()=>y,pJ:()=>s,z8:()=>c});var r=t(48941);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,t){var r,i;if(null==(null===(r=e)||void 0===r?void 0:r.layers)||null==(null===(i=e)||void 0===i?void 0:i.tables)){var l,o,c;const r=await t.fetchServiceMetadata(a,{customParameters:null===(l=s(e))||void 0===l?void 0:l.customParameters});(e=e||{}).layers=e.layers||(null===r||void 0===r||null===(o=r.layers)||void 0===o?void 0:o.map(n)),e.tables=e.tables||(null===r||void 0===r||null===(c=r.tables)||void 0===c?void 0:c.map(n))}return e}function l(e){const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0].id:null!==t&&void 0!==t&&t.length?t[0].id:null}function s(e){if(!e)return null;const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==t&&void 0!==t&&t.length?t[0]:null}function o(e){var a,t,r,n;return(null!==(a=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==a?a:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function c(e){var a;const t=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function u(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}function d(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"CatalogLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function y(e,a,t){var i,l,o;if(null===e||void 0===e||!e.url)return null!==(i=a)&&void 0!==i?i:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var c;const r=await t.fetchServiceMetadata(e.url);a.layers=null===(c=r.layers)||void 0===c?void 0:c.map(n)}const{serverUrl:u,portalItem:d}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:null===(o=s(a))||void 0===o?void 0:o.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==u)return a.tables=[],a;if(!a.tables&&d){const e=await d.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var y,f;const r=await t.fetchServiceMetadata(u,{customParameters:null===(y=s(e))||void 0===y?void 0:y.customParameters});a.tables=null===r||void 0===r||null===(f=r.tables)||void 0===f?void 0:f.map(n)}}if(a.tables)for(const r of a.tables)r.url="".concat(u,"/").concat(r.id);return a}},47073:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>y});var r=t(55678),n=t(48941),i=t(34273),l=t(38215),s=t(38133),o=t(40710),c=t(26024),u=t(16339);async function d(e){!e.portalItem||e.portalItem instanceof o.default||(e={...e,portalItem:new o.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.v;return async function(e){const a=e.className,t=s.S[a];return{constructor:await t(),properties:e.properties}}(await y(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),t=(0,u.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,c.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await f(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var t,r,n,i;await e.load();const l=null!==(t=null===(r=e.typeKeywords)||void 0===r?void 0:r.map((e=>e.toLowerCase())))&&void 0!==t?t:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const s=await a.fetchItemData(e),o=null===s||void 0===s?void 0:s.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),u=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),d=null===(i=c.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===u||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await f(e,a,(async()=>{try{var t;if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),i=await a.fetchServiceMetadata(r);return null!==(t=null===i||void 0===i?void 0:i.tables)&&void 0!==t?t:[]}catch{return[]}}));if("object"==typeof t){var r;const n={};let i;if(null!=t.id?(n.layerId=t.id,i="".concat(e.url,"/layers/").concat(t.id)):i=e.url,null!==(r=e.typeKeywords)&&void 0!==r&&r.length)for(const a of Object.keys(l.XX))if(e.typeKeywords.includes(a))return{className:l.XX[a]};const s=await a.fetchServiceMetadata(i,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{className:l.XX[null===s||void 0===s?void 0:s.layerType]||"SceneLayer",properties:n}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===t||void 0===t?void 0:t.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function f(e,a,t){const{url:r,type:n}=e,i="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(i){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let l=await a.fetchItemData(e);if(i){const e=await(0,c.bO)(l,r,a),t=v(e);if("object"==typeof t){const a=(0,c.z8)(e),r=(0,c.ay)(e),n=(0,c.PC)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&null!==r&&void 0!==r&&r.includes(t.id)?"OrientedImageryLayer":null!=t.id&&null!==n&&void 0!==n&&n.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(l=await(0,c.nu)(e,l,a)),(0,c.XH)(l)>0)return v(l);const s=await a.fetchServiceMetadata(r);return t&&(s.tables=await t()),v(s)}function v(e){return 1===(0,c.XH)(e)&&{id:(0,c.WZ)(e)}}},74643:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(25943);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}}}]);
//# sourceMappingURL=7073.ca3e1d00.chunk.js.map