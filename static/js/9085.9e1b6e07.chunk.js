"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[9085],{19085:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var i=r(70273),o=r(25943),s=r(32997),a=r(55678),n=r(85667),l=r(68313),p=r(92976),d=r(67519),u=r(53295),c=(r(11215),r(27052),r(35097)),h=r(55292),y=r(8597),m=r(20646),v=r(76607),g=r(83780),f=r(38609),b=r(97719),M=r(26044),_=r(85410),x=r(5180),S=r(67846),w=r(80948),Z=r(94452),I=r(52851),T=r(8065),A=r(89136),O=r(48621),P=r(5579),E=r(30931),R=r(59578),F=r(3162),L=r(38806),j=r(94665),k=r(81072),q=r(37872);let J=class extends((0,S.d)((0,P.e)((0,A.j)((0,O.I)((0,_.V)((0,x.b)((0,Z.q)((0,I.A)((0,l.P)((0,T.J)((0,M.p)((0,w.d)(b.A))))))))))))){constructor(){super(...arguments),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){var o,s;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let n=!1;if(null!==(o=this.capabilities)&&void 0!==o&&o.operations.supportsExportMap&&null!==(s=this.capabilities)&&void 0!==s&&null!==(s=s.exportMap)&&void 0!==s&&s.supportsDynamicLayers){const e=(0,m.aB)(i.origin);if(e===m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;n=(0,j.Zx)(a,e,m.Gr.SERVICE)}else if(e>m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");n=(0,j.Zx)(a,e.sublayers,(0,m.aB)(e.origin))}}const l=[],p={writeSublayerStructure:n,...i};let d=n;a.forEach((e=>{const t=e.write({},p);l.push(t),d=d||"user"===e.originOf("visible")})),l.some((e=>Object.keys(e).length>1))&&(t.layers=l),d&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){var o;const s=(null===i||void 0===i?void 0:i.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new R.g({layer:this,floors:null===i||void 0===i?void 0:i.floors,scale:(0,g.X_)({extent:e,width:t})*s}),n=a.toJSON();a.destroy();const l=null===i||void 0===i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},p=null===(o=e)||void 0===o?void 0:o.spatialReference,d=(0,f.YX)(p);n.dpi*=s;const u={};if(null!==i&&void 0!==i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==t&&void 0!==t?t:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:t+","+r,...n,...l,...u}}async fetchImage(e,t,r,i){const{data:o}=await this._fetchImage("image",e,t,r,i);return o}async fetchImageBitmap(e,t,r,i){const{data:o,url:s}=await this._fetchImage("blob",e,t,r,i);return(0,F.m)(o,s,null===i||void 0===i?void 0:i.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,o.A)(this.url,e),{extent:r,fullExtent:i,timeExtent:a}=t,n=r||i;return{fullExtent:n&&v.A.fromJSON(n),timeExtent:a&&s.A.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,n.g)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,k.D)(this,e)}async _fetchImage(e,t,r,i,s){var n,l,d;const u={responseType:e,signal:null!==(n=null===s||void 0===s?void 0:s.signal)&&void 0!==n?n:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(null!=(null===(l=u.query)||void 0===l?void 0:l.dynamicLayers)&&(null===(d=this.capabilities)||void 0===d||null===(d=d.exportMap)||void 0===d||!d.supportsDynamicLayers))throw new a.A("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});try{const{data:e}=await(0,o.A)(c,u);return{data:e,url:c}}catch(h){if((0,p.zf)(h))throw h;throw new a.A("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,o.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,d.MZ)((0,q.P6)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,d.MZ)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,d.MZ)()],J.prototype,"dpi",void 0),(0,i._)([(0,d.MZ)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,d.MZ)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,c.w)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,d.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,d.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,d.MZ)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,d.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,d.MZ)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,d.MZ)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.MZ)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,d.MZ)((0,q.P6)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,d.MZ)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,d.MZ)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,y.K)("sublayers",{layers:{type:[L.A]},visibleLayers:{type:[u.jz]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,d.MZ)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,d.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,d.MZ)(E.OZ)],J.prototype,"url",void 0),J=(0,i._)([(0,h.$)("esri.layers.MapImageLayer")],J);const N=J}}]);
//# sourceMappingURL=9085.9e1b6e07.chunk.js.map