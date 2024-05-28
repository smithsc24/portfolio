"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7085],{17085:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ge});var i=r(70273),n=r(34816),o=r(80757),s=r(55678),l=r(85667),a=r(68313),d=r(92976),u=r(73896),p=r(3408),y=r(89524),c=r(67519),h=(r(27052),r(11434)),v=(r(11215),r(35097)),b=r(55292),f=r(97719),g=r(26044),m=r(5180),w=r(67846),_=r(80948),F=r(99481),S=r(87465),A=r(94452),M=r(52851),O=r(8065),I=r(89136),Z=r(5579),j=r(63410),E=r(30931),T=r(72076),C=r(8120),L=r(42552),P=r(41487),x=r(65366),G=(r(59308),r(20989),r(12139),r(69508),r(75234)),V=r(51556),q=r(42767),k=(r(50906),r(85010)),D=r(65930),R=r(37526),N=r(25457),Q=r(8597),H=r(10844),U=r(22951),B=r(75313),X=r(95587),J=r(68907),$=r(21553),K=r(69423),z=r(13568);const W={key:"type",base:G.A,errorContext:"renderer",typeMap:{simple:V.A,"unique-value":q.A,"class-breaks":x.A}},Y=(0,C.p)(),ee=(0,H.C)({types:W});let te=0;function re(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ie(e){switch(e){case"point":case"multipoint":return z.UK.clone();case"polyline":return z.A7.clone();case"polygon":case"multipatch":return z.Cx.clone();default:return null}}function ne(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((t=>t.code===e))}function oe(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},n=ne(e,t);if(null!=n){const{defaultValues:e}=n;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new B.A({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const se="esri.layers.support.SubtypeSublayer";let le=class extends((0,a.P)((0,n.O)((0,k.sA)(R.A)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(te++),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return(0,L.yp)(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}get effectiveCapabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){var i;const{fields:n,parent:o}=this;let s;if(n){s=[];let e=0;n.forEach((t=>{var r;let{name:i,alias:n,editable:l,visible:a}=t;if(!a)return;const d=null===o||void 0===o||null===(r=o.fields)||void 0===r?void 0:r.find((e=>e.name===i));if(!d)return;const u={name:i};let p=!1;n!==d.alias&&(u.alias=n,p=!0),l!==d.editable&&(u.editable=l,p=!0),s.push(u),p&&e++})),0===e&&s.length===n.length&&(s=null)}else s=(0,D.o8)(e);(null===(i=s)||void 0===i?void 0:i.length)&&(0,N.sM)(r,s,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;const{subtypes:n,subtypeField:o}=e,s=null===n||void 0===n?void 0:n.find((e=>e.code===r)),l=null===s||void 0===s?void 0:s.defaultValues,a=null===s||void 0===s?void 0:s.domains,d=[];for(const y of i){var u,p;const e=y.clone(),{name:i}=e,n=null===t||void 0===t?void 0:t.find((e=>e.name===i));if(e.visible=!t||!!n,n){const{alias:t,editable:r}=n;t&&(e.alias=t),!1===r&&(e.editable=!1)}const s=null!==(u=null===l||void 0===l?void 0:l[i])&&void 0!==u?u:null;e.defaultValue=i===o?r:s;const c=null!==(p=null===a||void 0===a?void 0:a[i])&&void 0!==p?p:null;e.domain=i===o?null:c?"inherited"===c.type?e.domain:c.clone():null,d.push(e)}return d}get floorInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}get geometryType(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||h.A.getLogger(se).error(de("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,L.yp)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new V.A({symbol:ie(e)})}(e.geometryType):null}readRendererFromService(e,t,r){var i,n;if("Table"===t.type)return null;const o=null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer,s=ee(o,t,r);let l;const{subtypeCode:a}=this;if(null!=a&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(s,t.subtypeField)){var d;const e=null===(d=s.uniqueValueInfos)||void 0===d?void 0:d.find((e=>{let{value:t}=e;return(t="number"==typeof t?String(t):t)===String(a)}));e&&(l=new V.A({symbol:e.symbol}))}else"simple"!==(null===s||void 0===s?void 0:s.type)||(null===(n=s.visualVariables)||void 0===n?void 0:n.length)||(l=s);return l}readRenderer(e,t,r){var i,n;const o=null===t||void 0===t||null===(i=t.layerDefinition)||void 0===i||null===(i=i.drawingInfo)||void 0===i?void 0:i.renderer;if(!o)return;const s=null===(n=o.visualVariables)||void 0===n?void 0:n.some((e=>"rotationInfo"!==e.type));return s?void 0:ee(o,t,r)||void 0}get spatialReference(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}get subtypeField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.subtypeField}readTemplatesFromService(e,t){return[oe(this.subtypeCode,t)]}readTitleFromService(e,t){const r=ne(this.subtypeCode,t);return null!=r?r.name:null}get url(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw de("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.A("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw de("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s.A("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw de("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.A("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw de("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:n}=this;if(r){const{displayField:e,editFieldsInfo:o,objectIdField:s}=r;t={displayField:e,editFieldsInfo:o,fields:i,objectIdField:s,title:n}}return(0,K.tn)(t,e)}createQuery(){if(!this.parent)throw de("createQuery");const e=(0,T.VZ)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,p.m)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw de("queryAttachments");const i=e.clone();return i.where=ae(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){var r;const i=await this.load();if(!i.parent)throw de("queryFeatures");const n=null!==(r=$.A.from(e))&&void 0!==r?r:i.createQuery();return null!=e&&(n.where=ae(n.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"capabilities",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"effectiveCapabilities",null),(0,i._)([(0,c.MZ)({json:{write:{ignoreOrigin:!0}}})],le.prototype,"charts",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],le.prototype,"editingEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],le.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"elevationInfo",null),(0,i._)([(0,c.MZ)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],le.prototype,"fieldOverrides",void 0),(0,i._)([(0,Q.K)("fieldOverrides")],le.prototype,"writeFieldOverrides",null),(0,i._)([(0,c.MZ)({...Y.fields,readOnly:!0,json:{read:!1}})],le.prototype,"fields",null),(0,i._)([(0,c.MZ)(Y.fieldsIndex)],le.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"floorInfo",null),(0,i._)([(0,c.MZ)({type:U.A,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],le.prototype,"formTemplate",void 0),(0,i._)([(0,c.MZ)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],le.prototype,"id",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"geometryType",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"type",void 0),(0,i._)([(0,c.MZ)(re((0,D.o8)(E.kF)))],le.prototype,"labelsVisible",void 0),(0,i._)([(0,c.MZ)({type:[X.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:J.w},write:{ignoreOrigin:!0}}})],le.prototype,"labelingInfo",void 0),(0,i._)([(0,c.MZ)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],le.prototype,"layerType",void 0),(0,i._)([(0,c.MZ)(re((0,D.o8)(E.fV)))],le.prototype,"legendEnabled",void 0),(0,i._)([(0,c.MZ)({type:["show","hide"]})],le.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)((()=>{const e=(0,D.o8)(E.hn);return e.json.origins.service.read=!1,re(e)})())],le.prototype,"minScale",void 0),(0,i._)([(0,c.MZ)((()=>{const e=(0,D.o8)(E.hG);return e.json.origins.service.read=!1,re(e)})())],le.prototype,"maxScale",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],le.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"objectIdField",null),(0,i._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],le.prototype,"opacity",void 0),(0,i._)([(0,c.MZ)({clonable:!1})],le.prototype,"parent",void 0),(0,i._)([(0,c.MZ)(re((0,D.o8)(E.M6)))],le.prototype,"popupEnabled",void 0),(0,i._)([(0,c.MZ)({type:P.A,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],le.prototype,"popupTemplate",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],le.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.MZ)({types:W,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],le.prototype,"renderer",null),(0,i._)([(0,v.w)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],le.prototype,"readRendererFromService",null),(0,i._)([(0,v.w)("renderer",["layerDefinition.drawingInfo.renderer"])],le.prototype,"readRenderer",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"spatialReference",null),(0,i._)([(0,c.MZ)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],le.prototype,"subtypeCode",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"subtypeField",null),(0,i._)([(0,c.MZ)({type:[B.A],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],le.prototype,"templates",void 0),(0,i._)([(0,v.w)("service","templates",["geometryType","subtypeField","subtypes","type"])],le.prototype,"readTemplatesFromService",null),(0,i._)([(0,c.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],le.prototype,"title",void 0),(0,i._)([(0,v.w)("service","title",["subtypes"])],le.prototype,"readTitleFromService",null),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],le.prototype,"url",null),(0,i._)([(0,c.MZ)({readOnly:!0})],le.prototype,"userHasUpdateItemPrivileges",null),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],le.prototype,"visible",void 0),le=(0,i._)([(0,b.$)(se)],le);const ae=(e,t,r)=>{const i=new RegExp("".concat(t,"\\s*=\\s*\\d+")),n="".concat(t,"=").concat(r),o=null!==e&&void 0!==e?e:"";return i.test(o)?o.replace(i,n):(0,p.m)(n,o)},de=e=>new s.A("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e)),ue=le;var pe=r(9292),ye=r(81072),ce=r(57731);const he="SubtypeGroupLayer";function ve(e,t){return new s.A("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}const be=(0,C.p)();let fe=class extends((0,S.j)((0,F.w6)((0,w.d)((0,Z.e)((0,I.j)((0,O.J)((0,m.b)((0,A.q)((0,M.A)((0,a.P)((0,_.d)((0,g.p)((0,n.O)(f.A)))))))))))))){constructor(){super(...arguments),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(o.A.ofType(ue)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,d.sg)((async(e,t,i)=>{const{save:n,saveAs:o}=await r.e(7579).then(r.bind(r,17579));switch(e){case ce.X.SAVE:return n(this,t);case ce.X.SAVE_AS:return o(this,i,t)}})),this.addHandles((0,u.wB)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),u.OH))}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.QP).then((async()=>{if(!this.url)throw new s.A("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s.A("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,T.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,T.C$)(this)}get parsedUrl(){const e=(0,y.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.fj)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,t){let{name:r}=t;return this.url?(0,j.yG)(this.url,r):r}async addAttachment(e,t){return(0,T.Xl)(this,e,t,he)}async updateAttachment(e,t,r){return(0,T.bt)(this,e,t,r,he)}async applyEdits(e,t){return(0,T.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,d.qr)(Promise.all([r.e(384),r.e(7292),r.e(3592),r.e(3961)]).then(r.bind(r,73961)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,T.VZ)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,p.m)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}async deleteAttachments(e,t){return(0,T.mm)(this,e,t,he)}async fetchRecomputedExtents(e){return(0,T.WP)(this,e,he)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,l.g)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,T.lV)(this,e,t,he)}async queryFeatures(e,t){var r,i;const n=await this.load(),o=null!==(r=$.A.from(e))&&void 0!==r?r:n.createQuery(),s=null!==(i=o.outFields)&&void 0!==i?i:[];s.includes(this.subtypeField)||(s.push(this.subtypeField),o.outFields=s);const l=await n.source.queryFeatures(o,t);if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return l}async queryObjectIds(e,t){return(0,T.sg)(this,e,t,he)}async queryFeatureCount(e,t){return(0,T.Ye)(this,e,t,he)}async queryExtent(e,t){return(0,T.B5)(this,e,t,he)}async queryRelatedFeatures(e,t){return(0,T.hM)(this,e,t,he)}async queryRelatedFeaturesCount(e,t){return(0,T.S2)(this,e,t,he)}async save(e){return this._debouncedSaveOperations(ce.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ce.X.SAVE_AS,t,e)}write(e,t){var r;const{origin:i,layerContainerType:n,messages:o}=t;if(this.isTable){if("web-scene"===i||"web-map"===i&&"tables"!==n)return null!==o&&void 0!==o&&o.push(ve(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===i&&"tables"===n)return null!==o&&void 0!==o&&o.push(ve(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?super.write(e,t):(null!==o&&void 0!==o&&o.push(new s.A("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,ye.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var t;this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s.A("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(null===(t=this.subtypes)||void 0===t||!t.length)throw new s.A("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,L.sv)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,T.jp)(this)}_verifyFields(){var e,t,r;const i=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+i+")"),this.isTable||-1!==i.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((e=>"geometry"===e.type)))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+i+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,this._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,this._sublayerLookup.delete(t.subtypeCode)}))],"sublayers-owner"))}};(0,i._)([(0,c.MZ)({readOnly:!0})],fe.prototype,"createQueryVersion",null),(0,i._)([(0,c.MZ)({readOnly:!0})],fe.prototype,"editingEnabled",null),(0,i._)([(0,c.MZ)({readOnly:!0})],fe.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.MZ)({...be.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],fe.prototype,"fields",void 0),(0,i._)([(0,c.MZ)(be.fieldsIndex)],fe.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.MZ)(E.id)],fe.prototype,"id",void 0),(0,i._)([(0,c.MZ)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],fe.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],fe.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)(be.outFields)],fe.prototype,"outFields",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],fe.prototype,"parsedUrl",null),(0,i._)([(0,c.MZ)({clonable:!1})],fe.prototype,"source",null),(0,i._)([(0,c.MZ)({type:o.A.ofType(ue),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>{let{code:i}=e;const n=new ue({subtypeCode:i});return n.read(t,r),n}));return new(o.A.ofType(ue))(i)}}}},name:"layers",write:{ignoreOrigin:!0}}})],fe.prototype,"sublayers",void 0),(0,i._)([(0,c.MZ)({type:pe.A})],fe.prototype,"timeInfo",void 0),(0,i._)([(0,c.MZ)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],fe.prototype,"title",void 0),(0,i._)([(0,v.w)("service","title",["name"])],fe.prototype,"readTitleFromService",null),(0,i._)([(0,c.MZ)({json:{read:!1}})],fe.prototype,"type",void 0),fe=(0,i._)([(0,b.$)("esri.layers.SubtypeGroupLayer")],fe);const ge=fe}}]);
//# sourceMappingURL=7085.25dc217b.chunk.js.map