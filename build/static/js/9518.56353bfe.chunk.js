"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[9518],{89518:(e,t,o)=>{o.r(t),o.d(t,{default:()=>te});var r=o(70273),i=o(41487),n=o(25943),s=o(55678),l=o(65930),a=o(11434),p=o(68313),d=o(25457),u=o(92976),c=o(89524),y=o(67519),f=(o(27052),o(35097)),h=o(55292),v=o(8597),m=o(97719),b=o(26044),w=o(5180),g=o(80948),_=o(94452),T=o(52851),M=o(89136),S=o(54320),A=o(53295),C=o(49595),j=o(74084);o(11215);let x=class extends j.oY{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,y.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"field",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1}})],x.prototype,"type",void 0),x=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudFilter")],x);const I=x;var Z;let V=Z=class extends I{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new Z({field:this.field,requiredClearBits:(0,l.o8)(this.requiredClearBits),requiredSetBits:(0,l.o8)(this.requiredSetBits)})}};(0,r._)([(0,y.MZ)({type:[A.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],V.prototype,"requiredClearBits",void 0),(0,r._)([(0,y.MZ)({type:[A.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],V.prototype,"requiredSetBits",void 0),(0,r._)([(0,C.e)({pointCloudBitfieldFilter:"bitfield"})],V.prototype,"type",void 0),V=Z=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],V);const P=V;var R;let F=R=class extends I{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new R({field:this.field,includedReturns:(0,l.o8)(this.includedReturns)})}};(0,r._)([(0,y.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,r._)([(0,C.e)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=R=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const q=F;var B;let z=B=class extends I{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new B({field:this.field,mode:this.mode,values:(0,l.o8)(this.values)})}};(0,r._)([(0,y.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),(0,r._)([(0,C.e)({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0),z=B=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],z);const N={key:"type",base:I,typeMap:{value:z,bitfield:P,return:q}};var O,k=o(20005),K=o(1105),D=o(8120),$=o(58573),E=o(30166),L=o(90225);let U=O=class extends L.A{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new O({...this.cloneProperties(),field:(0,l.o8)(this.field)})}};(0,r._)([(0,C.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:String,json:{write:!0}})],U.prototype,"field",void 0),U=O=(0,r._)([(0,h.$)("esri.renderers.PointCloudRGBRenderer")],U);const Y=U;var G=o(51306),W=o(99014);const X={key:"type",base:L.A,typeMap:{"point-cloud-class-breaks":E.A,"point-cloud-rgb":Y,"point-cloud-stretch":G.A,"point-cloud-unique-value":W.A},errorContext:"renderer"};var J=o(24512),Q=o(69423);const H=(0,D.p)();let ee=class extends((0,S.w6)((0,w.b)((0,_.q)((0,T.A)((0,M.j)((0,p.P)((0,g.d)((0,b.p)(m.A))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return null!==t&&void 0!==t&&t.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new K.A;return"FieldTypeInteger"===e.type&&((e=(0,l.o8)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new K.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,d.sM)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.QP).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Q.tn)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var t;const o=this.fieldsIndex.get("RETURNS");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new $.A({name:"pcl-returns-decoded",title:o.alias||o.name,expression:"\n        var returnValue = $feature.".concat(o.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var t;const o=this.fieldsIndex.get("RGB");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new $.A({name:"pcl-rgb-decoded",title:o.alias||o.name,expression:"\n        var rgb = $feature.".concat(o.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new s.A("pointcloudlayer:field-unexisting","Field '".concat(e,"' does not exist on the layer"));for(const s of this.attributeStorageInfo)if(s.name===o.name){var r,i;const e=(0,c.fj)(null!==(r=null===(i=this.parsedUrl)||void 0===i?void 0:i.path)&&void 0!==r?r:"","./statistics/".concat(s.key));return(0,n.A)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(S.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(S.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,J.XF)(a.A.getLogger(this),(0,J.B)("Point cloud layers","absolute-height",e)),(0,J.XF)(a.A.getLogger(this),(0,J.tW)("Point cloud layers",e))}};(0,r._)([(0,y.MZ)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.MZ)(k.M6)],ee.prototype,"popupEnabled",void 0),(0,r._)([(0,y.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,r._)([(0,y.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,r._)([(0,y.MZ)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,r._)([(0,y.MZ)({types:[N],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,r._)([(0,y.MZ)({type:[K.A]})],ee.prototype,"fields",void 0),(0,r._)([(0,y.MZ)(H.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,r._)([(0,f.w)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,r._)([(0,y.MZ)(H.outFields)],ee.prototype,"outFields",void 0),(0,r._)([(0,y.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,y.MZ)(k.Yj)],ee.prototype,"elevationInfo",null),(0,r._)([(0,y.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,r._)([(0,y.MZ)(k.fV)],ee.prototype,"legendEnabled",void 0),(0,r._)([(0,y.MZ)({types:X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:X},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,r._)([(0,v.K)("renderer")],ee.prototype,"writeRenderer",null),(0,r._)([(0,y.MZ)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,r._)([(0,h.$)("esri.layers.PointCloudLayer")],ee);const te=ee},30166:(e,t,o)=>{o.d(t,{A:()=>b});var r,i=o(70273),n=o(65930),s=o(67519),l=(o(27052),o(11434),o(49595)),a=o(55292),p=o(90225),d=o(34636),u=o(36329),c=o(74084),y=o(53295);let f=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],f.prototype,"minValue",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],f.prototype,"maxValue",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{type:[y.jz],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],f);const h=f;var v;let m=v=class extends p.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new v({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.o8)(this.colorClassBreakInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:d.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const b=m},90225:(e,t,o)=>{o.d(t,{A:()=>S});var r,i=o(70273),n=o(844),s=o(74084),l=o(65930),a=o(67519),p=(o(27052),o(11434),o(55292));o(11215);let d=r=class extends s.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0),d=r=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d,c=new n.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.oY{};(0,i._)([(0,a.MZ)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const f=y;var h,v=o(49595);let m=h=class extends f{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,v.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const b=m;var w;let g=w=class extends f{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,i._)([(0,v.e)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const _={key:"type",base:f,typeMap:{"fixed-size":b,splat:g}},T=(0,n.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let M=class extends s.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,i._)([(0,a.MZ)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],M.prototype,"type",void 0),(0,i._)([(0,a.MZ)({types:_,json:{write:!0}})],M.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.MZ)({type:u,json:{write:!0}})],M.prototype,"colorModulation",void 0),(0,i._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],M.prototype,"pointsPerInch",void 0),M=(0,i._)([(0,p.$)("esri.renderers.PointCloudRenderer")],M),(M||(M={})).fieldTransformTypeKebabDict=new n.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const S=M},51306:(e,t,o)=>{o.d(t,{A:()=>y});var r,i=o(70273),n=o(65930),s=o(67519),l=(o(27052),o(11434),o(49595)),a=o(55292),p=o(90225),d=o(34636),u=o(83632);let c=r=class extends p.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),stops:(0,n.o8)(this.stops),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:d.q,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[u.A],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,i._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},99014:(e,t,o)=>{o.d(t,{A:()=>b});var r,i=o(70273),n=o(65930),s=o(67519),l=(o(27052),o(11434),o(49595)),a=o(55292),p=o(90225),d=o(34636),u=o(36329),c=o(74084),y=o(53295);let f=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.o8)(this.values),color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:[String],json:{write:!0}})],f.prototype,"values",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{type:[y.jz],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],f);const h=f;var v;let m=v=class extends p.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new v({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,n.o8)(this.colorUniqueValueInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.MZ)({type:d.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const b=m},24512:(e,t,o)=>{o.d(t,{$7:()=>l,B:()=>s,M7:()=>d,XF:()=>p,tW:()=>a,w7:()=>n});o(34531);var r=o(70411);function i(e){return e?u:c}function n(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:i(e).mode}(null!=e&&e.hasZ,t)}function s(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function l(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function a(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function p(e,t){t&&e.warn(".elevationInfo=",t)}function d(e){var t;return(null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t?t:0)*(0,r.Ao)(null===e||void 0===e?void 0:e.unit)}const u={mode:"absolute-height",offset:0},c={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=9518.56353bfe.chunk.js.map