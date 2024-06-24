"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7389],{56812:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(6862),r=i(90861),n=i(15616),o=i(32845),a=i(3875),l=i(38609),p=i(26306),d=i(82425),h=i(58261),u=i(14750);class c extends u.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,r.vt)()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[d.d.overlay],target:()=>this.children,drawPhase:h.S5.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:r,pixelRatio:l,resolution:p,rotation:d,viewpoint:h,displayMat3:u}=t;if(this._viewStateId===i)return;const c=Math.PI/180*d,v=l*r[0],y=l*r[1];this._localOrigin=h.targetGeometry.clone();const{x:g,y:_}=this._localOrigin,f=(0,a.mT)(g,t.spatialReference);this._localOrigin.x=f,this._localOrigin.y=_;const m=p*v,w=p*y,b=(0,s.D_)(this._dvsMat3);(0,s.lw)(b,b,u),(0,s.Tl)(b,b,(0,n.fA)(v/2,y/2)),(0,s.hs)(b,b,(0,o.fA)(v/m,-y/w,1)),(0,s.e$)(b,b,-c),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:r,worldScreenWidth:n,size:o,viewpoint:a}=i,d=this._localOrigin;let h,u=0;const c=(0,l.Vp)(r);if(c&&r.isWrappable){const e=o[0],t=o[1],l=180/Math.PI*s,d=Math.abs(Math.cos(l)),v=Math.abs(Math.sin(l)),y=Math.round(e*d+t*v),[g,_]=c.valid,f=(0,p.FT)(r),{x:m,y:w}=a.targetGeometry,b=[m,w],M=[0,0];i.toScreen(M,b);const R=[0,0];let S;S=y>n?.5*n:.5*y;const A=Math.floor((m+.5*f)/f),Z=g+A*f,O=_+A*f,P=[M[0]+S,0];i.toMap(R,P),R[0]>O&&(u=f),P[0]=M[0]-S,i.toMap(R,P),R[0]<Z&&(u=-f),h={worldWidth:f,xBounds:[g,_]}}for(const l of t)l.updateDrawCoords(d,u,r,h)}}},51163:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(70273),n=i(80757),o=i(23617),a=i(55678),l=i(73896),p=i(67519),d=(i(27052),i(11434),i(11215),i(55292)),h=i(97298),u=i(54134),c=i(22283);let v=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],v);const y=v;var g=i(52576);let _=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),_=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],_);const f=_;var m=i(55586);const w=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:f,geometry:g.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,m.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:w,set(e){const t=(0,o.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},17302:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(70273),r=i(27907),n=i(34429),o=i(85010),a=i(11434),l=i(55748),p=i(87641),d=i(67519),h=(i(27052),i(11215),i(55292)),u=i(37293),c=i(55586);let v=class extends((0,o.sA)((0,p.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,c.g7)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.g7)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],v.prototype,"view",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],v.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],v.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],v.prototype,"updateSuspended",null),(0,s._)([(0,d.MZ)()],v.prototype,"visible",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentTimeExtent",null),v=(0,s._)([(0,h.$)("esri.views.layers.LayerView")],v);const y=v},22283:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(70273),r=i(74084),n=i(67519),o=(i(27052),i(11434),i(11215),i(55292));let a=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],a);const l=a},52576:(e,t,i)=>{i.d(t,{A:()=>v});var s,r=i(70273),n=(i(77844),i(67519)),o=(i(27052),i(11434),i(11215),i(55292)),a=i(4711),l=i(2684),p=i(22283),d=i(76607),h=i(21673);const u={base:a.A,key:"type",typeMap:{extent:d.A,polygon:h.A}};let c=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],c);const v=c}}]);
//# sourceMappingURL=7389.76b7ab50.chunk.js.map