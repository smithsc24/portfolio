"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[637],{637:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>r});var a=s(55678);function r(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const r=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:r}).then((async n=>{let o,i,l,u,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([n.data]),"json"!==s&&"text"!==s||(u=await o.text(),"json"!==s)))){try{i=JSON.parse(u||null)}catch(b){const s={...b,url:e,requestOptions:t};throw new a.A("request:server",b.message,s)}if(i.error){const s={...i.error,url:e,requestOptions:t};throw new a.A("request:server",i.error.message,s)}}}else"native"===s&&(n.data.signal=r,l=await fetch(n.data.url,n.data),n.httpStatus=l.status);switch(s){case"blob":c=o;break;case"json":c=i;break;case"native":c=l;break;case"text":c=u;break;default:c=n.data}return{data:c,httpStatus:n.httpStatus,requestOptions:t,ssl:n.ssl,url:e}}))}}}]);
//# sourceMappingURL=637.14a8b0ab.chunk.js.map