"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[241],{26391:(e,t,i)=>{i.d(t,{A:()=>y});var r=i(70273),s=i(67519),o=(i(27052),i(11434),i(11215),i(55292)),n=i(19554),l=i(97719),a=i(67846),h=i(89136),d=i(60733),p=i(94523);let c=class extends((0,a.dM)((0,h.j)(l.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new d.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,r._)([(0,s.MZ)({type:p.A})],c.prototype,"elevationInfo",void 0),(0,r._)([(0,s.MZ)((0,n.C)(d.Y,"graphics"))],c.prototype,"graphics",void 0),(0,r._)([(0,s.MZ)({type:["show","hide"]})],c.prototype,"listMode",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"internal",void 0),c=(0,r._)([(0,o.$)("esri.layers.GraphicsLayer")],c);const y=c},24026:(e,t,i)=>{i.d(t,{A:()=>h});var r=i(70273),s=i(34816),o=i(74084),n=i(67519),l=(i(27052),i(11434),i(11215),i(55292));let a=class extends((0,s.O)(o.oY)){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,r._)([(0,n.MZ)({type:Boolean})],a.prototype,"frameCenter",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],a.prototype,"frameOutline",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],a.prototype,"lineOfSight",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],a.prototype,"sensorLocation",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],a.prototype,"sensorTrail",void 0),a=(0,r._)([(0,l.$)("esri.layers.support.TelemetryDisplay")],a);const h=a},70241:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var r=i(70273),s=i(36329),o=i(42494),n=(i(95026),i(55748)),l=i(73896),a=i(67519),h=(i(27052),i(11434),i(11215),i(55292)),d=i(26391),p=i(24026),c=i(56812),y=(i(77844),i(56271)),m=i(483),u=i(3409),v=i(16687),_=i(70190),g=i(16964),f=i(52576),w=i(56280),C=i(5719),A=i(66549),b=i(17743),x=i(74037),T=i(21673),O=i(65433);class M extends g.q{constructor(e){super(),this.element=e,this._handles=new m.A,this.isWrapAround=!1,this.perspectiveTransform=(0,v.vt)(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add((0,l.z7)((()=>this.element),(()=>{const e=this.element;this.ready(),e&&this._handles.add((0,y.on)(e,"play",(()=>this.requestRender())))}),l.Vh))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,n.WD)(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(null==t)return;const{context:i}=e,{videoWidth:r,videoHeight:s}=t;if(0!==r&&0!==s){if(this.texture)t.paused||this.texture.setData(t);else{const e=new b.R;e.wrapMode=C.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,this.texture=new A.g(i,e,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,r){const s=this.element,o=this._getFrameInfo();if(!s||!o)return;this._initializeData(e,o,i);const{controlPoints:n,horizon:l}=o,a=Math.sqrt(n.length),h=a,{x:d,y:p}=e,c=this._vertices,y=n[0],m=n[a-1],u=n[(h-1)*a],v=n[(h-1)*a+a-1],g=(0,_.project)(l?l[0].mapPoint:y.mapPoint,i),w=(0,_.project)(l?l[1].mapPoint:m.mapPoint,i),C=(0,_.project)(u.mapPoint,i),A=(0,_.project)(v.mapPoint,i);this.clipGeometry=l?new f.A({geometry:T.A.fromJSON({rings:[[[C.x,C.y],[A.x,A.y],[w.x,w.y],[g.x,g.y],[C.x,C.y]]],spatialReference:i})}):null;for(let f=0;f<n.length;f++){const e=n[f],{sourcePoint:t,mapPoint:r}=e;if(null==t||null==r)continue;const s=(0,_.project)(r,i);c[2*f+0]=s.x-d,c[2*f+1]=s.y-p}let b=t;if(r){const e=Math.min(g.x,w.x,C.x,A.x),t=Math.max(g.x,w.x,C.x,A.x),{worldWidth:i,xBounds:s}=r,[o,n]=s;e<o&&t>o?b=i:t>n&&e<n&&(b=-i)}this.wrapAroundShift=b,this.isWrapAround=0!==b}getVAO(e,t,i){if(null==this._vertices)return null;const r=this._vertices;if(this._vao)this._vbo.setData(r);else{this._vbo=w.g.createVertex(e,C._U.DYNAMIC_DRAW,r);const s=w.g.createVertex(e,C._U.STATIC_DRAW,this._texCoords);this._ibo=w.g.createIndex(e,C._U.DYNAMIC_DRAW,this._indices),this._vao=new x.Z(e,i,t,{geometry:this._vbo,tex:s},this._ibo)}return this._vao}draw(e){e.drawElements(C.WR.TRIANGLE_STRIP,this._indices.length,e.gl.UNSIGNED_SHORT,0)}_initializeData(e,t,i){if(null!=this._vertices&&null!=this._indices)return;const{controlPoints:r}=t,s=Math.sqrt(r.length),o=s,n=new Float32Array(2*r.length),l=new Uint16Array(2*r.length);for(let d=0;d<r.length;d++){const t=r[d],{sourcePoint:s,mapPoint:o}=t;if(null==s||null==o)continue;const a=(0,_.project)(o,i);n[2*d+0]=a.x-e.x,n[2*d+1]=a.y-e.y,l[2*d+0]=s.x,l[2*d+1]=s.y}const a=new Uint16Array(o*s+(o-2)*(s+2));let h=0;for(let d=0;d<o;d++){for(let e=0;e<s;e++)a[h++]=d*s+e,a[h++]=(d+1)*s+e;d<o-2&&(a[h++]=(d+1)*s+(s-1),a[h++]=(d+1)*s)}this._vertices=n,this._texCoords=l,this._indices=a}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const e=t.startX,r=t.startY,s=t.endX,o=t.endY;i=[{sourcePoint:(0,u.tc)(e,r),mapPoint:new O.A(t.startLongitude,t.startLatitude)},{sourcePoint:(0,u.tc)(s,o),mapPoint:new O.A(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=null===e||void 0===e?void 0:e.length;if(!t)return[];const i=new Array(t);for(let r=0;r<t;r++){const{x:t,y:s,lat:o,lon:n}=e[r];i[r]={sourcePoint:(0,u.tc)(t,-s),mapPoint:new O.A(n,o)}}return i}}var G=i(51163),P=i(17520),D=i(47618),L=i(17302),S=i(68597),E=i(67553),V=i(69806);const R=new s.A([255,127,0]);let H=class extends((0,G.e)(L.A)){constructor(){super(...arguments),this._graphicsLayer=new d.A,this._frameOutlineGraphic=new o.A({symbol:new S.A({outline:{type:"simple-line",color:R}})}),this._sensorTrailGraphic=new o.A({symbol:new E.A({color:R})}),this._lineOfSightGraphic=new o.A({symbol:new E.A({color:R})}),this._sensorLocationGraphic=new o.A({symbol:new V.A({color:R})}),this._frameCenterGraphic=new o.A({symbol:new V.A({color:R})}),this._overlayContainer=null,this.layer=null,this.symbolColor=R,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,n.pR)(this._graphicsLayer)}initialize(){var e,t,i,r,s,o,n,a,h,d;this.addHandles((0,l.wB)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),l.Vh)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new p.A({frameCenter:null===(e=null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameCenter)||void 0===e||e,frameOutline:null===(i=null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.frameOutline)||void 0===i||i,lineOfSight:null===(s=null===(o=this.layer.telemetryDisplay)||void 0===o?void 0:o.lineOfSight)||void 0===s||s,sensorLocation:null===(n=null===(a=this.layer.telemetryDisplay)||void 0===a?void 0:a.sensorLocation)||void 0===n||n,sensorTrail:null===(h=null===(d=this.layer.telemetryDisplay)||void 0===d?void 0:d.sensorTrail)||void 0===h||h})}attach(){this._overlayContainer=new c.A,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new D.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new P.A(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,l.wB)((()=>{var e,t,i,r,s;return[null===(e=this.layer.telemetryDisplay)||void 0===e?void 0:e.frameCenter,null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameOutline,null===(i=this.layer.telemetryDisplay)||void 0===i?void 0:i.sensorLocation,null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.sensorTrail,null===(s=this.layer.telemetryDisplay)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateVisibleTelemetryElements()),l.Vh),(0,l.wB)((()=>{var e,t,i,r,s;return[this.layer.telemetry,null===(e=this.visibleTelemetryElements)||void 0===e?void 0:e.frameCenter,null===(t=this.visibleTelemetryElements)||void 0===t?void 0:t.frameOutline,null===(i=this.visibleTelemetryElements)||void 0===i?void 0:i.sensorLocation,null===(r=this.visibleTelemetryElements)||void 0===r?void 0:r.sensorTrail,null===(s=this.visibleTelemetryElements)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateGraphicGeometries()),l.Vh)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=(0,n.pR)(this.graphicsView)}supportsSpatialReference(e){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const e=new M(this.layer.videoElement);this.addAttachHandles([(0,l.wB)((()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints]),(()=>{e.frameHorizonPoints=this.layer.frameHorizonPoints,e.groundControlPoints=this.layer.groundControlPoints}),l.Vh)]),this._overlayContainer.addChild(e),this.view.stage.requestRender()}};(0,r._)([(0,a.MZ)()],H.prototype,"graphicsView",void 0),(0,r._)([(0,a.MZ)()],H.prototype,"layer",void 0),(0,r._)([(0,a.MZ)()],H.prototype,"symbolColor",void 0),(0,r._)([(0,a.MZ)({type:p.A})],H.prototype,"visibleTelemetryElements",void 0),H=(0,r._)([(0,h.$)("esri.views.2d.layers.VideoLayerView2D")],H);const Z=H},17520:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(58261),s=i(38473),o=i(30260);class n extends s.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,o.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}}}]);
//# sourceMappingURL=241.0f57f178.chunk.js.map