"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[5882],{79053:(e,t,i)=>{i.d(t,{F:()=>n});var s=i(32997),r=(i(50636),i(68635),i(65930),i(11434),i(23902));i(80937);function n(e,t,i){if(null==(null===e||void 0===e?void 0:e.timeInfo))return null;const{datesInUnknownTimezone:n=!1,timeOffset:o,useViewTime:l}=e;let a=e.timeExtent;n&&(a=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,i.getTimezoneOffset(),"minutes"):i})}(a));let p=l?t&&a?t.intersection(a):t||a:a;return!p||p.isEmpty||p.isAllTime?p:(o&&(p=p.offset(-o.value,o.unit)),n&&(p=function(e){if(!e)return e;const{start:t,end:i}=e;return new s.A({start:null!=t?(0,r.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.S1)(i,-i.getTimezoneOffset(),"minutes"):i})}(p)),p.equals(i)?i:p)}},80937:(e,t,i)=>{i.d(t,{X:()=>s});const s=Symbol("WebScene")},51163:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(70273),n=i(80757),o=i(23617),l=i(55678),a=i(73896),p=i(67519),d=(i(27052),i(11434),i(11215),i(55292)),u=i(97298),h=i(54134),c=i(22283);let v=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],v);const y=v;var g=i(52576);let f=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],f);const m=f;var w=i(55586);const _=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:m,geometry:g.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new _,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new l.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.pc),(0,a.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.pc),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,w.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),a.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:_,set(e){const t=(0,o.V)(e,this._get("clips"),_);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)({type:h.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},17302:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(70273),r=i(27907),n=i(34429),o=i(85010),l=i(11434),a=i(55748),p=i(87641),d=i(67519),u=(i(27052),i(11215),i(55292)),h=i(37293),c=i(55586);let v=class extends((0,o.sA)((0,p.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,c.g7)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.g7)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],v.prototype,"view",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],v.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],v.prototype,"updateSuspended",null),(0,s._)([(0,d.MZ)()],v.prototype,"visible",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentTimeExtent",null),v=(0,s._)([(0,u.$)("esri.views.layers.LayerView")],v);const y=v},96277:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(70273),r=i(11434),n=i(92976),o=i(73896),l=(i(27052),i(11215),i(55678),i(55292));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,l.$)("esri.views.layers.RefreshableLayerView")],t),t}},22283:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(70273),r=i(74084),n=i(67519),o=(i(27052),i(11434),i(11215),i(55292));let l=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],l.prototype,"version",null),l=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],l);const a=l},52576:(e,t,i)=>{i.d(t,{A:()=>v});var s,r=i(70273),n=(i(77844),i(67519)),o=(i(27052),i(11434),i(11215),i(55292)),l=i(4711),a=i(2684),p=i(22283),d=i(76607),u=i(21673);const h={base:l.A,key:"type",typeMap:{extent:d.A,polygon:u.A}};let c=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:h,json:{read:a.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],c);const v=c}}]);
//# sourceMappingURL=5882.c62572fa.chunk.js.map