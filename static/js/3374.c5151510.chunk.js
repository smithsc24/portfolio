"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[3374],{63374:(t,e,n)=>{n.r(e),n.d(e,{executeForTopExtents:()=>u});n(77844);var o=n(24132),r=n(82145),i=n(31027),l=n(76607);async function u(t,e,n){const u=(0,o.Dl)(t),s=await(0,r.$K)(u,i.A.from(e),{...n}),d=s.data.extent;return!d||isNaN(d.xmin)||isNaN(d.ymin)||isNaN(d.xmax)||isNaN(d.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:l.A.fromJSON(d)}}},82145:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>c,xs:()=>f});var o=n(25943),r=n(89524),i=n(2684),l=n(3875),u=n(38609),s=n(91052),d=n(69665);const a="Layer does not support extent calculation.";function y(t,e){var n,o;const r=t.geometry,l=t.toJSON(),s=l;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,i.$B)(r),s.inSR=(0,u.YX)(r.spatialReference)),null!==(n=l.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=l.topFilter.groupByFields.join(",")),null!==(o=l.topFilter)&&void 0!==o&&o.orderByFields&&(s.topFilter.orderByFields=l.topFilter.orderByFields.join(",")),l.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),l.objectIds&&(s.objectIds=l.objectIds.join(",")),l.orderByFields&&(s.orderByFields=l.orderByFields.join(",")),l.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?l.outFields.includes("*")?s.outFields="*":s.outFields=l.outFields.join(","):delete s.outFields,l.outSR?s.outSR=(0,u.YX)(l.outSR):r&&l.returnGeometry&&(s.outSR=s.inSR),l.returnGeometry&&delete l.returnGeometry,l.timeExtent){const t=l.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete l.timeExtent}return s}async function c(t,e,n,o){const r=await F(t,e,"json",o);return(0,d.q)(e,n,r.data),r}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:F(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function f(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,r.An)(t):t,a=e.geometry?[e.geometry]:[];return i.responseType="pbf"===n?"array-buffer":"json",(0,l.el)(a,null,i).then((t=>{const l=null===t||void 0===t?void 0:t[0];null!=l&&((e=e.clone()).geometry=l);const a=(0,s.z)({...d.query,f:n,...u,...y(e,u)});return(0,o.A)((0,r.fj)(d.path,"queryTopFeatures"),{...i,query:{...a,...i.query}})}))}}}]);
//# sourceMappingURL=3374.c5151510.chunk.js.map