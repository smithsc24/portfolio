"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[8085],{98085:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var i=r(70273),o=r(25943),n=r(80757),l=r(55678),a=r(1121),s=r(68313),d=r(92976),p=r(89524),u=r(67519),y=(r(27052),r(11434),r(11215),r(55292)),h=r(97719),c=r(82439),v=r(50347),f=r(85807),g=r(73896),m=r(95878),_=r(53295),M=r(67846),Z=r(89136),w=r(20005),b=r(38836),F=r(83114);let I=class extends((0,Z.j)((0,M.dM)((0,s.P)(h.A)))){constructor(e){super(e),this._layerCache=new v.q(20,(e=>e.destroy())),this._oidToReference=new f.A,this._layerToReference=new Map,this.layers=new n.A,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",(e=>{let{item:t}=e;t.parent=this})),this.layers.on("after-remove",(e=>{let{item:t}=e;t.parent=null})),(0,g.wB)((()=>this._orderBy),(()=>{this._updateLayerSortValues(),this._sortAllLayers()}))])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){var e,t;return this.parent?null!==(e=null===(t=this.parent.orderBy)||void 0===t?void 0:t.find((e=>!e.valueExpression&&e.field)))&&void 0!==e?e:new b.A({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),r=(0,F.FM)(null===t||void 0===t?void 0:t.toJSON().type,"descending"===e.order),i=(0,F.FM)("esriFieldTypeOID","descending"===e.order);return(e,t)=>r(t.sortValue,e.sortValue)||i(t.objectId,e.objectId)}get fullExtent(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.fullExtent)&&void 0!==e?e:null}get updating(){return(0,a.Bs)(this._oidToReference,(e=>null!=e.pending))}acquireLayer(e){if(this.destroyed)return(0,c.hA)();const t=this._getLayerReference(e);return t.count++,(0,c.hA)((()=>{t.count--,t.count||this._destroyLayerReference(t)}))}_getLayerReference(e){const t=e.getObjectId();return(0,a.tE)(this._oidToReference,t,(()=>{const t=e.getObjectId(),r="".concat(t),i=e.getAttribute(this.parent.itemSourceField),o=new j(e,t,i),n=this._layerCache.pop(r);return n?(this._addLayer(o,n),o):(o.pending=this.parent.createLayerFromFootprint(e).then((e=>{o.count?this._addLayer(o,e):(this.destroyed||this._layerCache.get(r)||this._layerCache.put(r,e),o.layer=null)})).catch((()=>{})).finally((()=>{o.pending=null})),o)}))}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put("".concat(e.objectId),e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}};(0,i._)([(0,u.MZ)()],I.prototype,"_orderBy",null),(0,i._)([(0,u.MZ)({readOnly:!0})],I.prototype,"_referenceComparator",null),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"],json:{write:!0}})],I.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],I.prototype,"fullExtent",null),(0,i._)([(0,u.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],I.prototype,"id",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],I.prototype,"layers",void 0),(0,i._)([(0,u.MZ)({type:_.jz,range:{min:0,max:50},json:{write:!0,default:10}})],I.prototype,"maximumVisibleSublayers",void 0),(0,i._)([(0,u.MZ)(w.ke)],I.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)({clonable:!1})],I.prototype,"parent",void 0),(0,i._)([(0,u.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],I.prototype,"title",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],I.prototype,"type",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],I.prototype,"updating",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],I.prototype,"visible",void 0),I=(0,i._)([(0,y.$)("esri.layers.catalog.CatalogDynamicGroupLayer")],I);const O=I;class j{constructor(e,t,r){this.footprint=e,this.objectId=t,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=(0,m.v)(null)}get pending(){return this._pending.value}set pending(e){this._pending.value=e}}var T=r(41487),S=(r(65366),r(59308),r(20989),r(12139),r(69508),r(75234),r(51556)),E=(r(42767),r(50906),r(25016)),L=r(65930),x=r(20646),A=r(53154),C=r(49386),P=r(42552),V=r(95587),R=r(68907),q=r(69423),B=r(68597);let Q=class extends((0,Z.j)((0,C.F)((0,M.dM)((0,s.P)(h.A))))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),(0,P.yp)(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",(e=>this.emit("apply-edits",e))),this.parent.on("edits",(e=>this.emit("edits",e))),this.parent.on("refresh",(e=>this.emit("refresh",e)))])}get apiKey(){var e;return null===(e=this.parent)||void 0===e?void 0:e.apiKey}get capabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}get customParameters(){var e;return null===(e=this.parent)||void 0===e?void 0:e.customParameters}get dateFieldsTimeZone(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.dateFieldsTimeZone)&&void 0!==e?e:null}get datesInUnknownTimezone(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.datesInUnknownTimezone)&&void 0!==e&&e}get definitionExpression(){var e;return null===(e=this.parent)||void 0===e?void 0:e.definitionExpression}get editingInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.editingInfo}get effectiveCapabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}get createQueryVersion(){var e;return null===(e=this.parent)||void 0===e?void 0:e.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.displayField}get effectiveEditingEnabled(){return!1}get fields(){var e;return null===(e=this.parent)||void 0===e?void 0:e.fields}get fieldsIndex(){var e;return null===(e=this.parent)||void 0===e?void 0:e.fieldsIndex}get fullExtent(){var e;return null===(e=this.parent)||void 0===e?void 0:e.fullExtent}get geometryFieldsInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryFieldsInfo}get geometryType(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}get globalIdField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.globalIdField}get hasM(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.hasM)&&void 0!==e&&e}get hasZ(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.hasZ)&&void 0!==e&&e}get objectIdField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.objectIdField}get orderBy(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.orderBy)&&void 0!==e?e:null}get outFields(){var e;return null===(e=this.parent)||void 0===e?void 0:e.outFields}get parsedUrl(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.parsedUrl)&&void 0!==e?e:null}get preferredTimeZone(){var e,t;return null!==(e=null===(t=this.parent)||void 0===t?void 0:t.preferredTimeZone)&&void 0!==e?e:null}set renderer(e){(0,P.yp)(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):function(){const e=new B.A({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new S.A({symbol:e})}()}get returnM(){var e;return null===(e=this.parent)||void 0===e?void 0:e.returnM}get returnZ(){var e;return null===(e=this.parent)||void 0===e?void 0:e.returnZ}get source(){var e;return null===(e=this.parent)||void 0===e?void 0:e.source}get timeExtent(){var e;return null===(e=this.parent)||void 0===e?void 0:e.timeExtent}get timeInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.timeInfo}get timeOffset(){var e;return null===(e=this.parent)||void 0===e?void 0:e.timeOffset}get typeIdField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.typeIdField}get types(){var e;return null===(e=this.parent)||void 0===e?void 0:e.types}get useViewTime(){var e,t;return null===(e=null===(t=this.parent)||void 0===t?void 0:t.useViewTime)||void 0===e||e}get version(){var e;return null===(e=this.parent)||void 0===e?void 0:e.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return(0,q.tn)(t,e)}createQuery(){var e;return null===(e=this.parent)||void 0===e?void 0:e.createQuery()}getField(e){var t;return null===(t=this.parent)||void 0===t?void 0:t.getField(e)}getFieldDomain(e,t){var r;return null===(r=this.parent)||void 0===r?void 0:r.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"apiKey",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"capabilities",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"customParameters",null),(0,i._)([(0,u.MZ)()],Q.prototype,"dateFieldsTimeZone",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"datesInUnknownTimezone",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"definitionExpression",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"editingInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"effectiveCapabilities",null),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Q.prototype,"charts",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"createQueryVersion",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),(0,i._)([(0,u.MZ)()],Q.prototype,"displayField",null),(0,i._)([(0,u.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Q.prototype,"editingEnabled",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,u.MZ)((()=>{const e=(0,L.o8)(w.Yj);return e.json.origins["web-map"]={read:!1,write:!1},e})())],Q.prototype,"elevationInfo",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"fields",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"fieldsIndex",null),(0,i._)([(0,u.MZ)({type:A.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Q.prototype,"formTemplate",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"fullExtent",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"geometryFieldsInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"geometryType",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"globalIdField",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"hasM",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"hasZ",null),(0,i._)([(0,u.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],Q.prototype,"id",void 0),(0,i._)([(0,u.MZ)({type:[V.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:R.w,write:!0}})],Q.prototype,"labelingInfo",void 0),(0,i._)([(0,u.MZ)(w.kF)],Q.prototype,"labelsVisible",void 0),(0,i._)([(0,u.MZ)(w.fV)],Q.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)({type:["show","hide"],json:{write:!0}})],Q.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)((()=>{const e=(0,L.o8)(w.hG);return e.json.origins.service.read=!1,e})())],Q.prototype,"maxScale",void 0),(0,i._)([(0,u.MZ)((()=>{const e=(0,L.o8)(w.hn);return e.json.origins.service.read=!1,e})())],Q.prototype,"minScale",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"objectIdField",null),(0,i._)([(0,u.MZ)(w.ke)],Q.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"orderBy",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"outFields",null),(0,i._)([(0,u.MZ)({clonable:!1})],Q.prototype,"parent",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"parsedUrl",null),(0,i._)([(0,u.MZ)(w.M6)],Q.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)({type:T.A,json:{name:"popupInfo",write:!0}})],Q.prototype,"popupTemplate",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"preferredTimeZone",null),(0,i._)([(0,u.MZ)({types:E.H,json:{origins:{"web-scene":{types:E.X}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<x.Gr.PORTAL_ITEM}}}}})],Q.prototype,"renderer",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"returnM",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"returnZ",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"source",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"timeExtent",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"timeInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"timeOffset",null),(0,i._)([(0,u.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],Q.prototype,"title",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],Q.prototype,"type",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"typeIdField",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"types",null),(0,i._)([(0,u.MZ)({readOnly:!0})],Q.prototype,"useViewTime",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],Q.prototype,"visible",void 0),Q=(0,i._)([(0,y.$)("esri.layers.catalog.CatalogFootprintLayer")],Q);const k=Q;var D=r(73961),G=r(26044),U=r(5180),N=r(80948),z=r(99481),J=r(92542),H=r(94452),K=r(29152),$=r(52851),W=r(8065),X=r(5579),Y=r(72076),ee=r(99275),te=r(8120),re=r(38133),ie=r(81072),oe=r(83807),ne=r(40710),le=r(21553);const ae=(0,te.p)();function se(e,t,r,i){const o=e.write({},i);(function(e){if(null==e)return!0;const t=Object.keys(e);return!t.length||1===t.length&&"id"===t[0]})(o)||(t[r]=o)}let de=class extends((0,J.j)((0,z.w6)((0,M.dM)((0,K.f)((0,X.e)((0,Z.j)((0,W.J)((0,U.b)((0,H.q)((0,$.A)((0,s.P)((0,N.d)((0,G.p)(h.A)))))))))))))){constructor(e){super(e),this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new O({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new k({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new n.A([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new D.default({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.QP).then((async()=>{const{url:e,source:r,portalItem:i}=this;if(!e)throw new l.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){const r=await this._fetchFirstValidLayerId(t);if(null==r)throw new l.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:e});this.layerId=r}await r.load({signal:t});const{sourceJSON:o}=r;o&&(this.sourceJSON=o,this.read(o,{origin:"service",portalItem:i,portal:null===i||void 0===i?void 0:i.portal,url:this.parsedUrl}))})).then((()=>{const e=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],t=e.filter((e=>!this.fieldsIndex.has(e)));if(t.length)throw new l.A("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:e,missingFields:t})})).then((()=>(0,Y.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=(0,p.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,p.fj)(e.path,this.layerId.toString())),e}async applyEdits(e,t){return(0,Y.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){var t;return null===(t=this._layerToFootprint.get(e))||void 0===t?void 0:t.clone()}createQuery(){var e;const t=new le.A,r=null===(e=this.capabilities)||void 0===e?void 0:e.query;t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),t.outFields=["*"];const{timeOffset:i,timeExtent:o}=this;return t.timeExtent=null!=i&&null!=o?o.offset(-i.value,i.unit):o||null,t.where=this.definitionExpression||"1=1",t}getFeatureType(e){return(0,Y.xd)(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r;const i=null===t||void 0===t?void 0:t.feature,o=this.getFeatureType(i);if(o){const t=o.domains&&o.domains[e];if(t&&"inherited"!==t.type)return t}return null===(r=this.getField(e))||void 0===r?void 0:r.domain}async hasDataChanged(){return(0,Y.jp)(this)}async queryFeatures(e,t){var r;const i=await this.load(),o=await i.source.queryFeatures(null!==(r=le.A.from(e))&&void 0!==r?r:i.createQuery(),t);if(null!==o&&void 0!==o&&o.features)for(const n of o.features)n.layer=n.sourceLayer=i.footprintLayer;return o}async queryObjectIds(e,t){var r;return(await this.load()).source.queryObjectIds(null!==(r=le.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryFeatureCount(e,t){var r;return(await this.load()).source.queryFeatureCount(null!==(r=le.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryExtent(e,t){var r;return(await this.load()).source.queryExtent(null!==(r=le.A.from(e))&&void 0!==r?r:this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,ie.D)(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:r,dynamicGroupLayer:i}=e;r&&this.footprintLayer.read(r,t),i&&this.dynamicGroupLayer.read(i,t)}}async _fetchFirstValidLayerId(e){var t;const{data:r}=await(0,o.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(null===r||void 0===r?void 0:r.layers))return null===(t=r.layers.find((e=>{let{type:t}=e;return this.supportedSourceTypes.has(t)})))||void 0===t?void 0:t.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new l.A("catalog-layer:item-source-missing",'The footprint is missing the "'.concat(this.itemSourceField,'" attribute'));const r=JSON.parse(t);if(function(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}(r)){const{itemId:e,portalUrl:t}=r,i=(0,a.tE)(this._portals,t,(()=>new oe.A({url:t})));return h.A.fromPortalItem(new ne.default({id:e,portal:i}))}return function(e){return"object"==typeof e&&null!=e&&"url"in e}(r)?h.A.fromArcGISServerUrl({url:r.url}):new(await re.S.UnsupportedLayer())}_configureLayer(e,t){const r=t.getAttribute(this.itemNameField);r&&(e.title=r);const i=t.getAttribute(this.maxScaleField);null!=i&&"maxScale"in e&&(e.maxScale=i);const o=t.getAttribute(this.minScaleField);null!=o&&"minScale"in e&&(e.minScale=o)}};(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"createQueryVersion",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"drawOrderField",void 0),(0,i._)([(0,u.MZ)({type:O,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:se}}})],de.prototype,"dynamicGroupLayer",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"editingEnabled",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],de.prototype,"elevationInfo",void 0),(0,i._)([(0,u.MZ)({...ae.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],de.prototype,"fields",void 0),(0,i._)([(0,u.MZ)(ae.fieldsIndex)],de.prototype,"fieldsIndex",void 0),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],de.prototype,"floorInfo",void 0),(0,i._)([(0,u.MZ)({type:k,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:se}}})],de.prototype,"footprintLayer",void 0),(0,i._)([(0,u.MZ)(w.id)],de.prototype,"id",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemNameField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemSourceField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemTypeField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"layers",void 0),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"]})],de.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"maxScaleField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"minScaleField",void 0),(0,i._)([(0,u.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],de.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],de.prototype,"orderBy",void 0),(0,i._)([(0,u.MZ)(ae.outFields)],de.prototype,"outFields",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"parsedUrl",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"source",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],de.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:String})],de.prototype,"typeIdField",void 0),(0,i._)([(0,u.MZ)({type:[ee.A]})],de.prototype,"types",void 0),de=(0,i._)([(0,y.$)("esri.layers.CatalogLayer")],de);const pe=de}}]);
//# sourceMappingURL=8085.29b9d440.chunk.js.map