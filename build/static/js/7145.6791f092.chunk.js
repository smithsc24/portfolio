"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7145],{7145:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});r(77844);var o,s=r(11569),i=r(66240),n=r(2596),l=r(67735),a=r(35534),c=r(58382),m=r(5956),u=r(944),f=r(90449),d=r(70273),p=(r(11434),r(27052),r(11215),r(55678),r(49595)),S=r(55292),y=r(14662);let v=o=class extends y.A{constructor(){super(...arguments),this.type="identity"}clone(){return new o}};(0,d._)([(0,p.e)({IdentityXform:"identity"})],v.prototype,"type",void 0),v=o=(0,d._)([(0,S.$)("esri.layers.support.rasterTransforms.IdentityTransform")],v);const h=v;var x=r(17276);const O={GCSShiftXform:f.A,IdentityXform:h,PolynomialXform:x.A};Object.keys(O);function J(e){if(!(null===e||void 0===e?void 0:e.type))return null;const t=O[null===e||void 0===e?void 0:e.type];if(t){const r=new t;return r.read(e),r}return null}var N=r(60736),k=r(78723),A=r(76607),b=r(65433);class B{convertVectorFieldData(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,u.FI)(t,e.type);return Promise.resolve(null!=r?r.toJSON():null)}computeStatisticsHistograms(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,m.eH)(t);return Promise.resolve(r)}async decode(e){const t=await(0,n.D)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.A.fromJSON(e.pixelBlock),e.extent=e.extent?A.A.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(e){var t;this.symbolizer=N.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null===(t=this.symbolizer)||void 0===t?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,a.vt)(e.rasterFunctionJSON)}async process(e){var t;const r=this.rasterFunction.process({extent:A.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?i.A.fromJSON(e):null)),primaryPixelSizes:null===(t=e.primaryPixelSizes)||void 0===t?void 0:t.map((e=>null!=e?b.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=r?r.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(null===t||void 0===t?void 0:t.toJSON())}estimateStatisticsHistograms(e){const t=(0,m.f4)(i.A.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){var t;const r=(0,l.lD)(i.A.fromJSON(e.srcPixelBlock),e.tileSize,null!==(t=e.maximumPyramidLevel)&&void 0!==t?t:0,!1===e.useBilinear);return r&&r.forEach(((e,t)=>{r.set(t,null===e||void 0===e?void 0:e.toJSON())})),Promise.resolve(r)}clipTile(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,l.J$)({...e,pixelBlock:t});return Promise.resolve(null===r||void 0===r?void 0:r.toJSON())}async mosaicAndTransform(e){var t;const r=e.srcPixelBlocks.map((e=>e?new i.A(e):null)),o=(0,l.z7)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let s,n=o;return e.coefs&&(n=(0,l.$i)(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=(0,l.QF)(e.destDimension,e.gcsGrid),n=(0,u.Y2)(n,e.isUV?"vector-uv":"vector-magdir",s)),{pixelBlock:null===(t=n)||void 0===t?void 0:t.toJSON(),localNorthDirections:s}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:s}=await(0,k.CW)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:s.buffer},transferList:[o.buffer,s.buffer]}}async getProjectionOffsetGrid(e){const t=A.A.fromJSON(e.projectedExtent),r=A.A.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,c.xh)(t.spatialReference,r.spatialReference,o))&&await(0,c.Hh)();const i=e.rasterTransform?J(e.rasterTransform):null;return(0,c.l0)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:o,rasterTransform:i})}}}}]);
//# sourceMappingURL=7145.6791f092.chunk.js.map