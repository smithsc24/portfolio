"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[2541],{12408:(e,t,o)=>{o.r(t),o.d(t,{default:()=>H});var r=o(70273),s=(o(77844),o(41487)),i=(o(65366),o(59308),o(20989),o(12139),o(69508),o(75234),o(51556),o(42767),o(50906),o(25016)),n=o(68313),p=o(67519),a=(o(27052),o(11434),o(11215),o(55292)),l=o(6550),u=o(97719),d=o(55678),c=o(37526),y=o(81883),v=o(40701),h=o(81099),f=o(34614);let g=class extends c.A{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:o,supportedCrs:r},layer:{apiKey:s,customParameters:i,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:n,queryParameters:{apiKey:s,customParameters:i},spatialReference:o,supportedCrs:r}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>h.A.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=this.getSource();return this.load(t).then((()=>(0,v.bW)(o,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var o;const r=new RegExp("^".concat((0,y.Cj)(t),"$"),"i");return null!==(o=e.conformsTo.some((e=>r.test(e))))&&void 0!==o&&o}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var t,o,r,s;const i=null===e||void 0===e||null===(t=e.components)||void 0===t?void 0:t.parameters;return null!==(o=null===i||void 0===i||null===(r=i.limit)||void 0===r||null===(r=r.schema)||void 0===r?void 0:r.maximum)&&void 0!==o?o:null===i||void 0===i||null===(s=i.limitFeatures)||void 0===s||null===(s=s.schema)||void 0===s?void 0:s.maximum}_getStorageSpatialReference(e){var t;const o=null!==(t=e.storageCrs)&&void 0!==t?t:v.QE,r=(0,v.J0)(o);return null==r?f.A.WGS84:new f.A({wkid:r})}_getSupportedSpatialReferences(e,t){var o,r;const s="#/crs",i=null!==(o=e.crs)&&void 0!==o?o:[v.QE],n=i.includes(s)?i.filter((e=>e!==s)).concat(null!==(r=t.crs)&&void 0!==r?r:[]):i,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((e=>!p.test(e)))}async _loadOGCServices(e,t){const o=null!=t?t.signal:null,{apiKey:r,collectionId:s,customParameters:i,fields:n,geometryType:p,hasZ:a,objectIdField:u,timeInfo:c,url:h}=e,f={fields:null===n||void 0===n?void 0:n.map((e=>e.toJSON())),geometryType:l.Y.toJSON(p),hasZ:null!==a&&void 0!==a&&a,objectIdField:u,timeInfo:null===c||void 0===c?void 0:c.toJSON()},g={apiKey:r,customParameters:i,signal:o},m=await(0,v.Ki)(h,g),[S,_]=await Promise.all([(0,v.Px)(m,g),(0,v.bV)(m,g)]);if(!this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new d.A("ogc-feature-layer:no-geojson-support","Server does not support geojson");const C=_.collections.find((e=>{let{id:t}=e;return t===s}));if(!C)throw new d.A("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const M=this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,v.GA)(m,g):null,R=await(0,v.GL)(C,f,g),x=this._getMaxRecordCount(M),F=this._getCapabilities(R.hasZ,x),w=this._getStorageSpatialReference(C).toJSON(),b=this._getSupportedSpatialReferences(C,_),Z=new RegExp("^".concat((0,y.Cj)(v.vJ)),"i"),I={};for(const l of b){const e=(0,v.J0)(l);null!=e&&(I[e]||(I[e]=l.replace(Z,"")))}this.featureDefinition={capabilities:F,collection:C,layerDefinition:R,spatialReference:w,supportedCrs:I}}};(0,r._)([(0,p.MZ)()],g.prototype,"featureDefinition",void 0),(0,r._)([(0,p.MZ)({constructOnly:!0})],g.prototype,"layer",void 0),(0,r._)([(0,p.MZ)()],g.prototype,"type",void 0),g=(0,r._)([(0,a.$)("esri.layers.graphics.sources.OGCFeatureSource")],g);var m=o(26044),S=o(67846),_=o(80948),C=o(49386),M=o(9948),R=o(94452),x=o(29152),F=o(52851),w=o(8065),b=o(89136),Z=o(5579),I=o(20005),O=o(99275),D=o(1105),A=o(8120),T=o(42552),j=o(95587),P=o(68907),E=o(21553),Q=o(69423),G=o(76607);const q=(0,A.p)();let B=class extends((0,m.p)((0,_.d)((0,M.J)((0,C.F)((0,S.dM)((0,x.f)((0,Z.e)((0,b.j)((0,R.q)((0,F.A)((0,w.J)((0,n.P)(u.A))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e,t,o;return null!==(e=null!==(t=this.maxRecordCount)&&void 0!==t?t:null===(o=this.capabilities)||void 0===o?void 0:o.query.maxRecordCount)&&void 0!==e?e:5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,T.yp)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,Q.tn)(this,e)}createQuery(){return new E.A}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var o;let r,s=!1;const i=null===t||void 0===t||null===(o=t.feature)||void 0===o?void 0:o.attributes,n=this.typeIdField&&(null===i||void 0===i?void 0:i[this.typeIdField]);return null!=n&&this.types&&(s=this.types.some((t=>{var o,s;return t.id==n&&(r=null===(o=t.domains)||void 0===o?void 0:o[e],"inherited"===(null===(s=r)||void 0===s?void 0:s.type)&&(r=this._getLayerDomain(e)),!0)}))),s||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(E.A.from(e)||this.createQuery(),t))).then((e=>{var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}serviceSupportsSpatialReference(e){var t,o;return null!==(t=null===(o=this.source)||void 0===o?void 0:o.serviceSupportsSpatialReference(e))&&void 0!==t&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,T.yp)(this.renderer,this.fieldsIndex),(0,T.sv)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,r._)([(0,p.MZ)({readOnly:!0,json:{origins:{service:{read:!0}}}})],B.prototype,"capabilities",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],B.prototype,"collectionId",void 0),(0,r._)([(0,p.MZ)({type:String})],B.prototype,"copyright",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,r._)([(0,p.MZ)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],B.prototype,"description",void 0),(0,r._)([(0,p.MZ)({type:String})],B.prototype,"displayField",void 0),(0,r._)([(0,p.MZ)({type:Number})],B.prototype,"effectiveMaxRecordCount",null),(0,r._)([(0,p.MZ)(I.Yj)],B.prototype,"elevationInfo",void 0),(0,r._)([(0,p.MZ)({type:[D.A],json:{origins:{service:{name:"layerDefinition.fields"}}}})],B.prototype,"fields",void 0),(0,r._)([(0,p.MZ)(q.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:G.A,json:{origins:{service:{name:"layerDefinition.extent"}}}})],B.prototype,"fullExtent",void 0),(0,r._)([(0,p.MZ)({type:l.g.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:l.g.read}}}}})],B.prototype,"geometryType",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],B.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),(0,r._)([(0,p.MZ)({type:[j.A],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:P.w},write:!0}}}})],B.prototype,"labelingInfo",void 0),(0,r._)([(0,p.MZ)(I.kF)],B.prototype,"labelsVisible",void 0),(0,r._)([(0,p.MZ)(I.fV)],B.prototype,"legendEnabled",void 0),(0,r._)([(0,p.MZ)({type:Number})],B.prototype,"maxRecordCount",void 0),(0,r._)([(0,p.MZ)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],B.prototype,"objectIdField",void 0),(0,r._)([(0,p.MZ)({type:["OGCFeatureLayer"]})],B.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.MZ)(I.M6)],B.prototype,"popupEnabled",void 0),(0,r._)([(0,p.MZ)({type:s.A,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,r._)([(0,p.MZ)({types:i.H,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.X,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],B.prototype,"renderer",null),(0,r._)([(0,p.MZ)(I.PY)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],B.prototype,"source",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:f.A,json:{origins:{service:{read:!0}}}})],B.prototype,"spatialReference",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],B.prototype,"title",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),(0,r._)([(0,p.MZ)({type:[O.A]})],B.prototype,"types",void 0),(0,r._)([(0,p.MZ)(I.OZ)],B.prototype,"url",void 0),B=(0,r._)([(0,a.$)("esri.layers.OGCFeatureLayer")],B);const H=B},63740:(e,t,o)=>{o.d(t,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=2541.236ea121.chunk.js.map