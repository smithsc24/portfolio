"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[7720],{77720:(t,e,n)=>{n.r(e),n.d(e,{executeForTopCount:()=>i});var o=n(24132),r=n(82145),l=n(31027);async function i(t,e,n){const i=(0,o.Dl)(t);return(await(0,r.xs)(i,l.A.from(e),{...n})).data.count}},82145:(t,e,n)=>{n.d(e,{$K:()=>F,KW:()=>p,Yb:()=>a,xs:()=>m});var o=n(25943),r=n(89524),l=n(2684),i=n(3875),u=n(38609),s=n(91052),d=n(69665);const y="Layer does not support extent calculation.";function c(t,e){var n,o;const r=t.geometry,i=t.toJSON(),s=i;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,l.$B)(r),s.inSR=(0,u.YX)(r.spatialReference)),null!==(n=i.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),null!==(o=i.topFilter)&&void 0!==o&&o.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=(0,u.YX)(i.outSR):r&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete i.timeExtent}return s}async function a(t,e,n,o){const r=await f(t,e,"json",o);return(0,d.q)(e,n,r.data),r}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,r.An)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="json",(0,i.el)(y,null,l).then((t=>{const i=null===t||void 0===t?void 0:t[0];null!=i&&((e=e.clone()).geometry=i);const y=(0,s.z)({...d.query,f:n,...u,...c(e,u)});return(0,o.A)((0,r.fj)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=7720.34a398c7.chunk.js.map