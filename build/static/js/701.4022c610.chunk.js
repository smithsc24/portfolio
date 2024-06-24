"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[701],{17222:(e,t,n)=>{function o(e){return null!=l(e)||null!=s(e)}function r(e){return a.test(e)}function i(e){var t;return null!==(t=l(e))&&void 0!==t?t:s(e)}function s(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,o=0;for(;!t&&o<=e.length;)t=!u.test(e[o]),o++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function l(e){var t,n,o,r;const i=a.exec(e);if(null===i||void 0===i||!i.groups)return null;const s=i.groups,l=+s.year,u=+s.month-1,c=+s.day,d=+(null!==(t=s.hours)&&void 0!==t?t:"0"),f=+(null!==(n=s.minutes)&&void 0!==n?n:"0"),p=+(null!==(o=s.seconds)&&void 0!==o?o:"0");if(d>23)return null;if(f>59)return null;if(p>59)return null;const y=null!==(r=s.ms)&&void 0!==r?r:"0",m=y?+y.padEnd(3,"0").substring(0,3):0;let g;if(s.isUTC||!s.offsetSign)g=Date.UTC(l,u,c,d,f,p,m);else{const e=+s.offsetHours,t=+s.offsetMinutes;g=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(l,u,c,d,f,p,m)}return Number.isNaN(g)?null:g}n.d(t,{Br:()=>r,Cq:()=>o,_U:()=>i});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},53717:(e,t,n)=>{n.d(t,{BM:()=>j,bd:()=>I,sO:()=>T,xD:()=>c});var o=n(17222),r=n(55678),i=n(38609),s=n(27938),l=n(92782),a=n(42552);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return u[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)b(e,o,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){h(e,o[0],n);for(let t=1;t<o.length;t++)w(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;h(e,o[0],n);for(let r=1;r<o.length;r++)w(e,o[r],n);return e}(e,t,n)}}function h(e,t,n){const o=m(t);!function(e){return!y(e)}(o)?b(e,o,n):v(e,o,n)}function w(e,t,n){const o=m(t);!function(e){return y(e)}(o)?b(e,o,n):v(e,o,n)}function b(e,t,n){for(const o of t)F(e,o,n);e.lengths.push(t.length)}function v(e,t,n){for(let o=t.length-1;o>=0;o--)F(e,t[o],n);e.lengths.push(t.length)}function F(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function A(e){switch(typeof e){case"string":return(0,o.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new r.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,s=(0,i.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!o||!s.test(o))throw new r.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function j(e){var t,n;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[],i=new Set,s=new Set;let l,u=!1,y=null,m=!1,{geometryType:g=null}=o,h=!1;for(const b of d(e)){const{geometry:e,properties:t,id:n}=b;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(u||(u=p(f(e))),m||(m=null!=n,m&&(l=typeof n,t&&(y=Object.keys(t).filter((e=>t[e]===n))))),t&&y&&m&&null!=n&&(y.length>1?y=y.filter((e=>t[e]===n)):1===y.length&&(y=t[y[0]]===n?y:[])),!h&&t)){let e=!0;for(const n in t){if(i.has(n))continue;const o=t[n];if(null==o){e=!1,s.add(n);continue}const l=A(o);if("unknown"===l){s.add(n);continue}s.delete(n),i.add(n);const u=(0,a.rS)(n);u&&r.push({name:u,alias:n,type:l})}h=e}}const w=null!==(t=(0,a.rS)(1===(null===(n=y)||void 0===n?void 0:n.length)&&y[0]||null))&&void 0!==t?t:void 0;if(w)for(const c of r)if(c.name===w&&(0,a.WA)(c)){c.type="esriFieldTypeOID";break}return{fields:r,geometryType:g,hasZ:u,objectIdFieldName:w,objectIdFieldType:l,unknownFields:Array.from(s)}}function I(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:o}=t;for(const i of e){var r;const{geometry:e,properties:a,id:u}=i;if(e&&c(e.type)!==n)continue;const d=a||{};let f;o&&(f=d[o],null==u||f||(d[o]=f=u));const p=new s.Om(e?g(new l.A,e,t):null,d,null,null!==(r=f)&&void 0!==r?r:void 0);yield p}}()}(d(e),t))}},33558:(e,t,n)=>{n.d(t,{F0:()=>l,Vx:()=>c,e2:()=>f,f:()=>p});var o=n(27052),r=n(65930),i=n(63740),s=n(3474);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.Cb:"esriGeometryPolyline"===e?s.yM:s.WR}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if((0,o.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this".concat(d(t)," = null;");for(const t in e)n+="this".concat(d(t)," = ").concat(JSON.stringify(e[t]),";");const o=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new o}catch(n){return()=>({[t]:null,...e})}}function d(e){return a.test(e)?".".concat(e):'["'.concat(e,'"]')}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},67348:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>m,MB:()=>f,Yx:()=>a,bP:()=>c});var o=n(17222),r=n(38609),i=n(42552);class s{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new l(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const d=new Set;function f(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const s in n){const r=e.get(s);if(!r)continue;const l=p(r,n[s]);if(d.add(r.name),r&&(o||r.editable)){const e=(0,i.CJ)(r,l);if(e)return a((0,i.uo)(e,r,l));t[r.name]=l}}for(const i of null!==(r=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==r?r:[]){var r;if(!d.has(i.name))return a('missing required field "'.concat(i.name,'"'))}return null}function p(e,t){let n=t;return(0,i.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,i.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,i.vE)(e)&&"string"==typeof t&&(n=(0,o._U)(t)),(0,i.WX)(n)}let y;function m(e,t){if(!e||!(0,r.fn)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function g(e,t){!(0,r.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(5358),n.e(7923)]).then(n.bind(n,57923))),y}()}},40701:(e,t,n)=>{n.d(t,{GA:()=>C,GL:()=>I,I:()=>G,J0:()=>x,Ki:()=>P,Px:()=>k,QE:()=>A,bV:()=>S,bW:()=>N,vJ:()=>F});n(77844);var o=n(25943),r=n(55678),i=n(11434),s=n(89524),l=n(38609),a=n(31995),u=n(20384),c=n(22132),d=n(53717),f=n(33558),p=n(67348),y=n(92734),m=n(76161),g=n(37872),h=n(34614);const w=()=>i.A.getLogger("esri.layers.ogc.ogcFeatureUtils"),b="startindex",v=new Set([b,"offset"]),F="http://www.opengis.net/def/crs/",A="".concat(F,"OGC/1.3/CRS84");var T,j;async function I(e,t){var n;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:a}=e,u=R(a,"items",T.geojson)||R(a,"http://www.opengis.net/def/rel/ogc/1.0/items",T.geojson);if(null==u)throw new r.A("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:c,customParameters:p,signal:h}=i,v=(0,s.s2)(u.href,e.landingPage.url),F={limit:l,...p,token:c},A=(0,s.a6)(v,F),j={accept:T.geojson},{data:I}=await(0,o.A)(A,{signal:h,headers:j}),S=null!==(n=W(A,l,I.links))&&void 0!==n?n:b;(0,d.sO)(I);const k=(0,d.BM)(I,{geometryType:t.geometryType}),P=t.fields||k.fields||[],C=null!=t.hasZ?t.hasZ:k.hasZ,x=k.geometryType,N=t.objectIdField||k.objectIdFieldName||"OBJECTID";let G=t.timeInfo;const M=P.find((e=>{let{name:t}=e;return t===N}));if(M)M.editable=!1,M.nullable=!1;else{if(!k.objectIdFieldType)throw new r.A("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");P.unshift({name:N,alias:N,type:"number"===k.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(N!==k.objectIdFieldName){const e=P.find((e=>{let{name:t}=e;return t===k.objectIdFieldName}));e&&(e.type="esriFieldTypeInteger")}P===k.fields&&k.unknownFields.length>0&&w().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:k.unknownFields}});for(const o of P){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),"esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable),!o.name)throw new r.A("ogc-feature-layer:invalid-field-name","field name is missing",{field:o});if(!m.m.jsonValues.includes(o.type))throw new r.A("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(o.name,'"'),{field:o})}if(G){var O;const e=new y.A(P);if(G.startTimeField){const t=e.get(G.startTimeField);t?(G.startTimeField=t.name,t.type="esriFieldTypeDate"):G.startTimeField=null}if(G.endTimeField){const t=e.get(G.endTimeField);t?(G.endTimeField=t.name,t.type="esriFieldTypeDate"):G.endTimeField=null}if(G.trackIdField){const t=e.get(G.trackIdField);t?G.trackIdField=t.name:(G.trackIdField=null,w().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:G}}))}(O=G).timeReference||(O.timeReference={timeZoneIANA:g.n$}),G.startTimeField||G.endTimeField||(w().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:G}}),G=void 0)}return{drawingInfo:x?(0,f.F0)(x):null,extent:D(e),geometryType:x,fields:P,hasZ:!!C,objectIdField:N,paginationParameter:S,timeInfo:G}}async function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:i}=e,l=R(n,"data",T.json)||R(n,"http://www.opengis.net/def/rel/ogc/1.0/data",T.json);if(null==l)throw new r.A("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:u,signal:c}=t,d=(0,s.s2)(l.href,i),{data:f}=await(0,o.A)(d,{signal:c,headers:{accept:T.json},query:{...u,token:a}});for(const o of f.collections)o.landingPage=e;return f}async function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:i}=e,l=R(n,"conformance",T.json)||R(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",T.json);if(null==l)throw new r.A("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:u,signal:c}=t,d=(0,s.s2)(l.href,i),{data:f}=await(0,o.A)(d,{signal:c,headers:{accept:T.json},query:{...u,token:a}});return f}async function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:r,signal:i}=t,{data:s}=await(0,o.A)(e,{signal:i,headers:{accept:T.json},query:{...r,token:n}});return s.url=e,s}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:r}=e,i=R(n,"service-desc",T.openapi);if(null==i)return w().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:l,customParameters:a,signal:u}=t,c=(0,s.s2)(i.href,r),{data:d}=await(0,o.A)(c,{signal:u,headers:{accept:T.openapi},query:{...a,token:l}});return d}function x(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=null===t||void 0===t?void 0:t.groups;if(!n)return null;const{authority:o,code:r}=n;switch(o.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return h.A.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return h.A.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function N(e,t,n){const o=await G(e,t,n);return(0,u.ZF)(o)}async function G(e,t,n){var i,f;const{collection:{links:m,landingPage:{url:g}},layerDefinition:w,maxRecordCount:b,queryParameters:{apiKey:v,customParameters:F},spatialReference:A,supportedCrs:j}=e,I=R(m,"items",T.geojson)||R(m,"http://www.opengis.net/def/rel/ogc/1.0/items",T.geojson);if(null==I)throw new r.A("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:k,start:P,timeExtent:C,where:x}=t;if(t.objectIds)throw new r.A("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const N=h.A.fromJSON(A),G=null!==(i=t.outSpatialReference)&&void 0!==i?i:N,O=G.isWGS84?null:M(G,j),D=q(S,j),W=function(e){if(null==e)return null;const{start:t,end:n}=e;return"".concat(null!=t?t.toISOString():"..","/").concat(null!=n?n.toISOString():"..")}(C),Z=null!=(X=x)&&X&&"1=1"!==X?X:null,U=null!==k&&void 0!==k?k:null==P?b:10,E=0===P?void 0:P,{fields:L,geometryType:B,hasZ:$,objectIdField:J,paginationParameter:_}=w,z=(0,s.s2)(I.href,g),{data:K}=await(0,o.A)(z,{...n,query:{...F,...D,crs:O,datetime:W,query:Z,limit:U,[_]:E,token:v},headers:{accept:T.geojson}}),H=(0,d.bd)(K,{geometryType:B,hasZ:$,objectIdField:J}),Q=H.length===U&&!!R(null!==(f=K.links)&&void 0!==f?f:[],"next",T.geojson),V=new y.A(L);var X;for(const o of H){const e={};(0,p.MB)(V,e,o.attributes),e[J]=o.attributes[J],o.attributes=e}if(!O&&G.isWebMercator)for(const o of H)if(null!=o.geometry&&null!=B){const e=(0,u.zv)(o.geometry,B,$,!1);e.spatialReference=h.A.WGS84,o.geometry=(0,u.Ux)((0,a.Cv)(e,G))}for(const o of H)o.objectId=o.attributes[J];const Y=O||!O&&G.isWebMercator?G.toJSON():l.KK,ee=new c.A;return ee.exceededTransferLimit=Q,ee.features=H,ee.fields=L,ee.geometryType=B,ee.hasZ=$,ee.objectIdFieldName=J,ee.spatialReference=Y,ee}function M(e,t){var n,o,r;const{isWebMercator:i,wkid:s}=e;if(!s)return null;const l=i?null!==(n=null!==(o=null!==(r=t[3857])&&void 0!==r?r:t[102100])&&void 0!==o?o:t[102113])&&void 0!==n?n:t[900913]:t[e.wkid];return l?"".concat(F).concat(l):null}function O(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:o,ymax:r}=e;return"".concat(t,",").concat(n,",").concat(o,",").concat(r)}function q(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:O(e)};const o=M(n,t);return null!=o?{bbox:O(e),"bbox-crs":o}:n.isWebMercator?{bbox:O((0,a.Cv)(e,h.A.WGS84))}:null}function D(e){var t;const n=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!n)return null;const o=n.bbox[0],r=4===o.length,[i,s]=o,l=r?void 0:o[2];return{xmin:i,ymin:s,xmax:r?o[2]:o[3],ymax:r?o[3]:o[4],zmin:l,zmax:r?void 0:o[5],spatialReference:h.A.WGS84.toJSON()}}function R(e,t,n){var o;return null!==(o=e.find((e=>{let{rel:o,type:r}=e;return o===t&&r===n})))&&void 0!==o?o:e.find((e=>{let{rel:n,type:o}=e;return n===t&&!o}))}function W(e,t,n){var o;if(!n)return;const r=R(n,"next",T.geojson),i=null===(o=(0,s.An)(null===r||void 0===r?void 0:r.href))||void 0===o?void 0:o.query;if(!i)return;const l=(0,s.An)(e).query,a=Object.keys(null!==l&&void 0!==l?l:{}),u=Object.entries(i).filter((e=>{let[t]=e;return!a.includes(t)})).find((e=>{let[n,o]=e;return v.has(n.toLowerCase())&&Number.parseInt(o,10)===t}));return null===u||void 0===u?void 0:u[0]}(j=T||(T={})).json="application/json",j.geojson="application/geo+json",j.openapi="application/vnd.oai.openapi+json;version=3.0"}}]);
//# sourceMappingURL=701.4022c610.chunk.js.map