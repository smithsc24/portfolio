"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7720],{77720:(t,e,n)=>{n.r(e),n.d(e,{executeForTopCount:()=>i});var r=n(24132),o=n(82145),l=n(31027);async function i(t,e,n){const i=(0,r.Dl)(t);return(await(0,o.xs)(i,l.A.from(e),{...n})).data.count}},82145:(t,e,n)=>{n.d(e,{$K:()=>f,KW:()=>p,Yb:()=>a,xs:()=>F});var r=n(25943),o=n(89524),l=n(2684),i=n(3875),u=n(38609),s=n(91052),d=n(69665);const y="Layer does not support extent calculation.";function c(t,e){var n,r;const o=t.geometry,i=t.toJSON(),s=i;if(null!=o&&(s.geometry=JSON.stringify(o),s.geometryType=(0,l.$B)(o),s.inSR=(0,u.YX)(o.spatialReference)),null!==(n=i.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),null!==(r=i.topFilter)&&void 0!==r&&r.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=(0,u.YX)(i.outSR):o&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete i.timeExtent}return s}async function a(t,e,n,r){const o=await m(t,e,"json",r);return(0,d.q)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:m(t,e,"json",n,{returnIdsOnly:!0})}async function f(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:m(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):m(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function m(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,o.An)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="pbf"===n?"array-buffer":"json",(0,i.el)(y,null,l).then((t=>{const i=null===t||void 0===t?void 0:t[0];null!=i&&((e=e.clone()).geometry=i);const y=(0,s.z)({...d.query,f:n,...u,...c(e,u)});return(0,r.A)((0,o.fj)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=7720.7f0e7993.chunk.js.map