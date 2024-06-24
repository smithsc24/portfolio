"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7504],{51163:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(70273),n=i(80757),a=i(23617),o=i(55678),h=i(73896),l=i(67519),p=(i(27052),i(11434),i(11215),i(55292)),d=i(97298),u=i(54134),c=i(22283);let g=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=s=(0,r._)([(0,p.$)("esri.views.layers.support.ClipRect")],g);const y=g;var v=i(52576);let _=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,l.MZ)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),_=(0,r._)([(0,p.$)("esri.views.layers.support.Path")],_);const w=_;var f=i(55586);const m=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:w,geometry:v.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),h.pc),(0,h.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.pc),(0,h.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),h.pc),(0,h.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.pc),(0,h.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.pc),(0,h.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),h.pc),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.pc),(0,h.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,f.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),h.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,l.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,l.MZ)({type:m,set(e){const t=(0,a.V)(e,this._get("clips"),m);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,l.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updating",null),(0,r._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},87504:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var s=i(70273),r=i(50636),n=i(80757),a=i(13741),o=i(82439),h=i(73896),l=i(67519),p=(i(27052),i(11434),i(55292)),d=i(58638),u=i(51468),c=i(40516),g=i(54196),y=i(38726),v=i(53748),_=i(53677),w=i(52016),f=i(51163),m=i(17520),b=i(47618),A=i(17302);const M=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],R={graphic:null,property:null,oldValue:null,newValue:null};function S(e){return e instanceof d.A||e instanceof u.A||e instanceof c.A||e instanceof g.A||e instanceof y.A||e instanceof v.A||e instanceof _.A}let C=class extends((0,f.e)(A.A)){constructor(){super(...arguments),this._graphics=new n.A,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new a.A({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new n.A([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h.Vh)}destroy(){var e;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),null===(e=this._get("_routeItems"))||void 0===e||e.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(e,t){return this._graphicsView.hitTest(e).filter((e=>{let{popupTemplate:t}=e;return!!t}))}highlight(e){let t;t=S(e)?[this._getNetworkFeatureUid(e)]:function(e){return Array.isArray(e)&&e.length>0&&S(e[0])}(e)?e.map((e=>this._getNetworkFeatureUid(e))):function(e){return n.A.isCollection(e)&&e.length&&S(e.at(0))}(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const i=t.filter(r.Ru);return i.length?(this._addHighlight(i),(0,o.hA)((()=>this._removeHighlight(i)))):(0,o.hA)()}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(r.Ru).map((e=>this._networkGraphicMap.get(e)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=new m.A(e.featuresTilingScheme);this._graphicsView=new b.A({container:t,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:e}),this.container.addChild(t),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return M.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t=this._createGraphic(e);return null==t.symbol?null:(this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),t)})).filter(r.Ru));for(const t of e.added)this.addHandles([(0,h.wB)((()=>t.geometry),((e,i)=>{this._updateGraphic(t,"geometry",e,i)})),(0,h.wB)((()=>t.symbol),((e,i)=>{this._updateGraphic(t,"symbol",e,i)}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)))}}_updateGraphic(e,t,i,s){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const r=this._networkFeatureMap.get(e);r[t]=i,R.graphic=r,R.property=t,R.oldValue=s,R.newValue=i,this._graphicsView.graphicUpdateHandler(R)}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=(0,w.$r)("highlight");this._graphicsView.setHighlight(e.map((e=>({objectId:e,highlightFlags:t}))))}};(0,s._)([(0,l.MZ)()],C.prototype,"_graphics",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"_routeItems",null),C=(0,s._)([(0,p.$)("esri.views.2d.layers.RouteLayerView2D")],C);const Z=C},17520:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(58261),r=i(38473),n=i(30260);class a extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},17302:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(70273),r=i(27907),n=i(34429),a=i(85010),o=i(11434),h=i(55748),l=i(87641),p=i(67519),d=(i(27052),i(11215),i(55292)),u=i(37293),c=i(55586);let g=class extends((0,a.sA)((0,l.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,h.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,c.g7)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.g7)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,p.MZ)()],g.prototype,"view",void 0),(0,s._)([(0,p.MZ)()],g.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],g.prototype,"layer",void 0),(0,s._)([(0,p.MZ)()],g.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],g.prototype,"updateSuspended",null),(0,s._)([(0,p.MZ)()],g.prototype,"visible",null),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,p.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentTimeExtent",null),g=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],g);const y=g},22283:(e,t,i)=>{i.d(t,{A:()=>h});var s=i(70273),r=i(74084),n=i(67519),a=(i(27052),i(11434),i(11215),i(55292));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const h=o},52576:(e,t,i)=>{i.d(t,{A:()=>g});var s,r=i(70273),n=(i(77844),i(67519)),a=(i(27052),i(11434),i(11215),i(55292)),o=i(4711),h=i(2684),l=i(22283),p=i(76607),d=i(21673);const u={base:o.A,key:"type",typeMap:{extent:p.A,polygon:d.A}};let c=s=class extends l.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:h.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const g=c}}]);
//# sourceMappingURL=7504.2bf6e79a.chunk.js.map