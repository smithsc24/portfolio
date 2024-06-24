"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[6953],{67150:(e,t,r)=>{r.d(t,{v:()=>o});var a=r(21629);function o(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,a.H)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},21629:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},6953:(e,t,r)=>{r.d(t,{save:()=>d,saveAs:()=>m});var a=r(17614),o=r(16339);const n="Stream Service",i="Feed",l="stream-layer-save",s="stream-layer-save-as";function u(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function p(e,t){const{parsedUrl:r,title:a,fullExtent:n}=e;t.url=r.path,t.title||(t.title=a),t.extent=null,null!=n&&(t.extent=await(0,o.sQ)(n)),(0,o.OM)(t,o.mm.METADATA),(0,o.LG)(t,o.mm.SINGLE_LAYER)}async function d(e,t){return(0,a.UN)({layer:e,itemType:n,additionalItemType:i,validateLayer:u,createItemData:c,errorNamePrefix:l},t)}async function m(e,t,r){return(0,a.Uh)({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:s,newItem:t,setItemProperties:p},r)}},17614:(e,t,r)=>{r.d(t,{UN:()=>g,Uh:()=>b});var a=r(55678),o=r(67150),n=r(83807),i=r(40710),l=r(72560),s=r(16339),u=r(324),c=r(23133);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.A("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,r,o)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function m(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:n}=e;if((0,u.X)(t),function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:n,layer:i}=e,l=[r];if(o&&l.push(o),!l.includes(t.type)){const e=l.map((e=>"'".concat(e,"'"))).join(", ");throw new a.A("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:i})}}(e),n){const e=n(t);if(!e.isValid)throw new a.A("".concat(r,":invalid-parameters"),e.errorMessage,{layer:o})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.A("".concat(r,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.A("".concat(r,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:o})}function y(e){var t,r,a,o;const{newItem:l,itemType:s}=e;let u=i.default.from(l);return u.id&&(u=u.clone(),u.id=null),null!==(r=(t=u).type)&&void 0!==r||(t.type=s),null!==(o=(a=u).portal)&&void 0!==o||(a.portal=n.A.getDefault()),m({...e,item:u}),u}function v(e){return(0,l.m)(e,"portal-item")}async function w(e,t,r){var a,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(a=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==a?a:[]),(0,c.c)(t,{errorName:"layer-write:unsupported"},r),n}function h(e){(0,s.LG)(e,s.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:i,saveResources:l,supplementalUnsupportedErrors:s}=e;await p(e),f(e);const u=r.portalItem,c=n?n(u):v(u),d=await w(r,c,{...t,supplementalUnsupportedErrors:s}),m=await a({layer:r,layerJSON:d},u);return await(null===i||void 0===i?void 0:i(r,u)),h(u),await u.update({data:m}),(0,o.v)(c),await(null===l||void 0===l?void 0:l(u,c)),u}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:i,saveResources:l,supplementalUnsupportedErrors:s}=e;await p(e);const u=y(e),c=n?n(u):v(u),d=await w(r,c,{...t,supplementalUnsupportedErrors:s}),m=await a({layer:r,layerJSON:d},u);return await i(r,u),h(u),await async function(e,t,r){var a;const o=e.portal;await o.signIn(),await(null===(a=o.user)||void 0===a?void 0:a.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder}))}(u,m,t),r.portalItem=u,(0,o.v)(c),await(null===l||void 0===l?void 0:l(u,c)),u}},72560:(e,t,r)=>{r.d(t,{m:()=>i,v:()=>n});var a=r(89524),o=r(83807);function n(e,t){return{...l(e,t),readResourcePaths:[]}}function i(e,t,r){const o=(0,a.An)(e.itemUrl);return{...l(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},324:(e,t,r)=>{r.d(t,{X:()=>i});var a=r(57998),o=r(55678),n=r(99482);function i(e){if(a.A.apiKey&&(0,n.Q)(e.portal.url))throw new o.A("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}},23133:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>o});var a=r(55678);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){var o;let i=(null!==(o=e.messages)&&void 0!==o?o:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:o}=e;return new a.A(t,r,o)}));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported","Relative url '".concat(e,"' is not supported")))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(i=i.filter((e=>{let{name:r}=e;return!(n.has(r)||t.includes(r))}))),a&&(i=i.filter((e=>"web-document-write:property-required"!==e.name)))}if(i.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}}}]);
//# sourceMappingURL=6953.98e79f8b.chunk.js.map