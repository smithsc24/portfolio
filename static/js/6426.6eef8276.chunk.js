"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[6426],{16426:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(70273),r=i(80757),n=i(11434),a=i(92976),o=i(73896),l=i(3408),d=(i(27052),i(11215),i(55678),i(55292)),p=i(51163),h=i(17302);const u=Symbol();let c=class extends((0,p.e)(h.A)){constructor(){super(...arguments),this.layerViews=new r.A,this._debouncedUpdate=(0,a.sg)((async()=>{const{layer:e,parent:{footprintLayerView:t}}=this;let i=[];if(t){const s=this._createQuery(),{features:r}=await t.queryFeatures(s);this.suspended||(i=r.map((t=>e.acquireLayer(t))))}this.removeHandles(u),this.addHandles(i,u)}))}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0}),(0,o.z7)((()=>{var e;return!1===(null===(e=this.parent.footprintLayerView)||void 0===e?void 0:e.dataUpdating)}),(()=>this._updateLayers())),(0,o.wB)((()=>{var e;return[this.layer.maximumVisibleSublayers,this.suspended,null===(e=this.parent.footprintLayerView)||void 0===e?void 0:e.filter]}),(()=>this._updateLayers()))])}detach(){this.container.removeAllChildren(),this.removeHandles(u)}update(e){}moveStart(){}viewChange(){}moveEnd(){}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}_updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise(this._debouncedUpdate().catch((e=>{n.A.getLogger(this).error(e)})))}_createQuery(){const{parent:{footprintLayerView:e},layer:{maximumVisibleSublayers:t,parent:{itemTypeField:i,itemSourceField:s,objectIdField:r,orderBy:n}}}=this,a="".concat(i," <> 'Scene Service'"),o=e.createQuery();o.returnGeometry=!1,o.num=t,o.outFields=[r,s],o.where=(0,l.m)(o.where,a);const d=null===n||void 0===n?void 0:n.find((e=>e.field&&!e.valueExpression));return null!==d&&void 0!==d&&d.field&&(o.orderByFields=["".concat(d.field," ").concat("descending"===d.order?"DESC":"ASC")]),o}};c=(0,s._)([(0,d.$)("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],c);const y=c},51163:(e,t,i)=>{i.d(t,{e:()=>S});var s,r=i(70273),n=i(80757),a=i(23617),o=i(55678),l=i(73896),d=i(67519),p=(i(27052),i(11434),i(11215),i(55292)),h=i(83780),u=i(97298),c=i(54134),y=i(22283);let v=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,p.$)("esri.views.layers.support.ClipRect")],v);const g=v;var m=i(52576);let f=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,d.MZ)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,r._)([(0,p.$)("esri.views.layers.support.Path")],f);const w=f,_=n.A.ofType({key:"type",base:null,typeMap:{rect:g,path:w,geometry:m.A}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new _,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,h.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,d.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,d.MZ)({type:_,set(e){const t=(0,a.V)(e,this._get("clips"),_);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,d.MZ)()],t.prototype,"updating",null),(0,r._)([(0,d.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,d.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},17302:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(70273),r=i(27907),n=i(34429),a=i(85010),o=i(11434),l=i(55748),d=i(87641),p=i(67519),h=(i(27052),i(11215),i(55292)),u=i(37293);let c=class extends((0,a.sA)((0,d.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,p.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,p.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],c.prototype,"visible",null),(0,s._)([(0,p.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,h.$)("esri.views.layers.LayerView")],c);const y=c},22283:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(70273),r=i(74084),n=i(67519),a=(i(27052),i(11434),i(11215),i(55292));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},52576:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(70273),n=(i(77844),i(67519)),a=(i(27052),i(11434),i(11215),i(55292)),o=i(4711),l=i(2684),d=i(22283),p=i(76607),h=i(21673);const u={base:o.A,key:"type",typeMap:{extent:p.A,polygon:h.A}};let c=s=class extends d.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=6426.6eef8276.chunk.js.map