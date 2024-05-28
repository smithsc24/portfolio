"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7134],{90227:(e,t,i)=>{var l;i.d(t,{u:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},21626:(e,t,i)=>{i.d(t,{B:()=>o});var l=i(50636),a=i(82439),r=i(11434),s=i(92976),n=i(19838);class o{constructor(e,t,i,l){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,n.ho)(e,{...a,schedule:l}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>r.A.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,a.hA)((()=>{i.removed=!0,(0,l.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const l=this._transferLists[e],a=l?l(t):[];return this._thread.invoke(e,t,{transferList:a,signal:i})}return this._promise?this._promise.then((()=>((0,s.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},87134:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var l=i(70273),a=i(25943),r=i(55678),s=i(55748),n=i(68313),o=i(92976),h=i(89524),c=i(67519),d=(i(27052),i(11434),i(11215),i(35097)),u=i(55292),p=i(21331),v=i(97719),f=i(41118),m=i(5180),y=i(94452),_=i(52851),w=i(30931);class g{constructor(e,t,i,l){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=l)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,l=-1/0,a=!0;for(const r of t)r===e?this._hasNoDataValues=!0:(i=r<i?r:i,l=r>l?r:l,a=!1);a?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=l>-3e38?l:0)}}var b=i(21626);class A extends b.B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(T.forEach(((e,t)=>{e===this&&T.delete(t)})),this.destroy())}}const T=new Map;let D=class extends((0,f.f)((0,m.b)((0,y.q)((0,_.A)((0,n.P)(v.A)))))){constructor(){super(...arguments),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=T.get(e);return t||(null!=e?(t=new A((t=>e.immediate.schedule(t))),T.set(e,t)):(t=new A,T.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,s.Gz)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new r.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(o.QP).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,l){const r=null!=(l=l||{signal:null}).signal?l.signal:l.signal=(new AbortController).signal,s={responseType:"array-buffer",signal:r},n={noDataValue:l.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,l))).then((()=>(0,a.A)(this.getTileUrl(e,t,i),s))).then((e=>this._lercDecoder.decode(e.data,n,r))).then((e=>new g(e)))}getTileUrl(e,t,i){const l=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,a=(0,h.x0)({...this.parsedUrl.query,blankTile:!l&&null});return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(a?"?"+a:"")}async queryElevation(e,t){const{ElevationQuery:l}=await i.e(753).then(i.bind(i,80753));return(0,o.Te)(t),(new l).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:l}=await i.e(753).then(i.bind(i,80753));return(0,o.Te)(t),(new l).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,l){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,l):Promise.resolve("unknown")}async _fetchImageService(e){var t;if(this.sourceJSON)return this.sourceJSON;const i={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},l=await(0,a.A)(this.parsedUrl.path,i);l.ssl&&(this.url=null===(t=this.url)||void 0===t?void 0:t.replace(/^http:/i,"https:")),this.sourceJSON=l.data,this.read(l.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[M]}};(0,l._)([(0,c.MZ)({readOnly:!0})],D.prototype,"capabilities",void 0),(0,l._)([(0,d.w)("service","capabilities",["capabilities"])],D.prototype,"readCapabilities",null),(0,l._)([(0,c.MZ)({json:{read:{source:"copyrightText"}}})],D.prototype,"copyright",void 0),(0,l._)([(0,c.MZ)({readOnly:!0,type:p.A})],D.prototype,"heightModelInfo",void 0),(0,l._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),(0,l._)([(0,c.MZ)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],D.prototype,"minScale",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],D.prototype,"maxScale",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),(0,l._)([(0,c.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],D.prototype,"operationalLayerType",void 0),(0,l._)([(0,c.MZ)()],D.prototype,"sourceJSON",void 0),(0,l._)([(0,c.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],D.prototype,"type",void 0),(0,l._)([(0,c.MZ)(w.OZ)],D.prototype,"url",void 0),(0,l._)([(0,c.MZ)()],D.prototype,"version",void 0),(0,l._)([(0,d.w)("version",["currentVersion"])],D.prototype,"readVersion",null),D=(0,l._)([(0,u.$)("esri.layers.ElevationLayer")],D);const M=Symbol("default-fetch-tile");D.prototype.fetchTile[M]=!0;const O=D},41118:(e,t,i)=>{i.d(t,{f:()=>d});var l=i(70273),a=(i(77844),i(67519)),r=(i(27052),i(11434),i(11215),i(35097)),s=i(55292),n=i(27913),o=i(39329),h=i(61083),c=i(34614);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){var l;const a=null===(l=t.capabilities)||void 0===l?void 0:l.includes("Tilemap");let{minLOD:r,maxLOD:s,minScale:c,maxScale:d}=t;if(null==r&&null==s&&0!==c&&0!==d){const e=e=>Math.round(1e4*e)/1e4;c=e(c||t.tileInfo.lods[0].scale),d=e(d||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);r=t>=c?i.level:r,s=t>=d?i.level:s}}if(a)return new h.d({layer:this,minLOD:r,maxLOD:s});if(t.tileInfo){const e=new n.A;return e.read(t.tileInfo,i),new o.A(e,r,s)}return null}};return(0,l._)([(0,a.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,a.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,r.w)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,a.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,r.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,a.MZ)({type:c.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,a.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,a.MZ)({type:n.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,a.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,r.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,a.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,s.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},39329:(e,t,i)=>{i.d(t,{A:()=>r});var l=i(55678),a=i(92976);class r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var l;const a=null===(l=this.tileInfo)||void 0===l?void 0:l.lodAt(e);return!a||e<this.minLOD||e>this.maxLOD?"unavailable":a.cols&&a.rows?i>=a.cols[0]&&i<=a.cols[1]&&t>=a.rows[0]&&t<=a.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,r){await(0,a.NO)(r);const s=this.getAvailability(e,t,i);if("unavailable"===s)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}async fetchAvailabilityUpsample(e,t,i,l,r){await(0,a.NO)(r),l.level=e,l.row=t,l.col=i;const s=this.tileInfo;return s.updateTileInfo(l),this.fetchAvailability(e,t,i,r).catch((e=>{if((0,a.zf)(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,r);throw e}))}}},61083:(e,t,i)=>{i.d(t,{d:()=>D});var l,a=i(70273),r=i(25943),s=i(27907),n=i(90227),o=i(55678),h=i(82439),c=i(50347),d=i(15942),u=i(92976),p=i(73896),v=i(37072),f=i(89524),m=i(67519),y=(i(27052),i(11434),i(11215),i(55292)),_=i(93486),w=i(50636),g=i(65930),b=i(65271);class A{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,g.o8)(t));const l=this.location.width,a=this.location.height;let r=!0,s=!0;const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=b.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*a/32));let o=0;for(let h=0;h<i.length;h++){const e=h%32;i[h]?(s=!1,n[o]|=1<<e):r=!1,31===e&&++o}s?(this._availability="unavailable",this.byteSize=40):r?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,b.Ek)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,a=i>>5,r=this._availability;return a<0||a>r.length?"unknown":r[a]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||r.A,{row:l,col:a,width:s,height:n}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){var t;let i;if(null!==(t=e.service.tileServers)&&void 0!==t&&t.length){const t=e.service.tileServers;i="".concat(t&&t.length?t[e.row%t.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}else i="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);const l=e.service.query;return l&&(i="".concat(i,"?").concat(l)),i}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:a,width:s,height:n},valid:!0,data:(0,w.dY)(s*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==a||e.location.width!==s||e.location.height!==n))throw new o.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:a,width:s,height:n}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}_validateJSON(e){if(null===e||void 0===e||!e.location)throw new o.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}let D=l=class extends s.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=r.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.q(2*n.u.MEGABYTES),this.addHandles((0,p.wB)((()=>{const{layer:e}=this;return[null===e||void 0===e?void 0:e.parsedUrl,null===e||void 0===e?void 0:e.tileServers,null===e||void 0===e?void 0:e.apiKey,null===e||void 0===e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition()),p.Vh))}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,l){var a;if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new o.A("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));const r=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,r);if(s)return Promise.resolve(s);const n=null===(a=l)||void 0===a?void 0:a.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.u7)(n,(()=>t((0,u.NK)())));const i=T(r);let a=this._pendingTilemapRequests[i];if(!a){a=A.fromDefinition(r,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof A){const a=l.getAvailability(t,i);if("unavailable"===a)throw new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return a}if((0,u.zf)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,a){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;r.updateTileInfo(l);const s=this.fetchAvailability(e,t,i,a).catch((e=>{if((0,u.zf)(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,a,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,r,s){if(!this._prefetchingEnabled||null==e)return;const n="prefetch-".concat(e);if(this.hasHandles(n))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let c=!1;const d=(0,h.hA)((()=>{c||(c=!0,o.abort())}));if(this.addHandles(d,n),await(0,v.md)(10,o.signal).catch((()=>{})),c||(c=!0,this.removeHandles(n)),(0,u.G4)(o))return;const p=new _.U(e,t,i,a),f={...r,signal:o.signal},m=this.layer.tileInfo;for(let h=0;l._prefetches.length<l._maxPrefetch&&m.upsampleTile(p);++h){const e=this.fetchAvailability(p.level,p.row,p.col,f);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:l}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,f.x0)({...t.query,...l,token:null!==i&&void 0!==i?i:null===(e=t.query)||void 0===e?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const a=T(l);return this._tilemapCache.get(a)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};D._maxPrefetch=4,D._prefetches=new d.A({initialSize:l._maxPrefetch}),(0,a._)([(0,m.MZ)({constructOnly:!0})],D.prototype,"layer",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],D.prototype,"minLOD",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],D.prototype,"maxLOD",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],D.prototype,"request",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],D.prototype,"size",void 0),D=l=(0,a._)([(0,y.$)("esri.layers.support.TilemapCache")],D)}}]);
//# sourceMappingURL=7134.d2869b6b.chunk.js.map