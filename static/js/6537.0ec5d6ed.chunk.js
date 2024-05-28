"use strict";(self.webpackChunkbasic_portfolio_site=self.webpackChunkbasic_portfolio_site||[]).push([[6537],{36537:(t,n,e)=>{e.d(n,{B:()=>M,D:()=>T,a:()=>D,b:()=>B,c:()=>L,d:()=>Y,e:()=>F,f:()=>U,g:()=>X,h:()=>I,i:()=>K,j:()=>N,k:()=>A,l:()=>R,m:()=>p,n:()=>x,o:()=>z,q:()=>q,r:()=>V,s:()=>H,t:()=>G,u:()=>Q,w:()=>J});var r=e(95776),o=(e(71016),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"]),i=o.join(","),u="undefined"===typeof Element,l=u?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!u&&Element.prototype.getRootNode?function(t){var n;return null===t||void 0===t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null===t||void 0===t?void 0:t.ownerDocument},c=function t(n,e){var r;void 0===e&&(e=!0);var o=null===n||void 0===n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},d=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&l.call(t,i)&&r.unshift(t),r=r.filter(e)},f=function t(n,e,r){for(var o=[],u=Array.from(n);u.length;){var a=u.shift();if(!c(a,!1))if("SLOT"===a.tagName){var d=a.assignedElements(),f=t(d.length?d:a.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else{l.call(a,i)&&r.filter(a)&&(e||!n.includes(a))&&o.push(a);var s=a.shadowRoot||"function"===typeof r.getShadowRoot&&r.getShadowRoot(a),p=!c(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(s&&p){var v=t(!0===s?a.children:s.children,!0,r);r.flatten?o.push.apply(o,v):o.push({scopeParent:a,candidates:v})}else u.unshift.apply(u,a.children)}}return o},s=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},p=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null===t||void 0===t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!s(t)?0:t.tabIndex},v=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},h=function(t){return"INPUT"===t.tagName},m=function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||a(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)},g=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},y=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=l.call(t,"details>summary:first-of-type")?t.parentElement:t;if(l.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return g(t)}else{if("function"===typeof r){for(var i=t;t;){var u=t.parentElement,c=a(t);if(u&&!u.shadowRoot&&!0===r(u))return g(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=i}if(function(t){var n,e,r,o,i=t&&a(t),u=null===(n=i)||void 0===n?void 0:n.host,l=!1;if(i&&i!==t)for(l=!!(null!==(e=u)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(u)||null!==t&&void 0!==t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!l&&u;){var c,d,f;l=!(null===(d=u=null===(c=i=a(u))||void 0===c?void 0:c.host)||void 0===d||null===(f=d.ownerDocument)||void 0===f||!f.contains(u))}return l}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1},S=function(t,n){return!(n.disabled||c(n)||function(t){return h(t)&&"hidden"===t.type}(n)||y(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!l.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},w=function(t,n){return!(m(n)||p(n)<0||!S(t,n))},b=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},E=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,u=i?n.scopeParent:n,l=function(t,n){var e=p(t);return e<0&&n&&!s(t)?0:e}(u,i),a=i?t(n.candidates):u;0===l?i?e.push.apply(e,a):e.push(u):r.push({documentOrder:o,tabIndex:l,item:n,isScope:i,content:a})})),r.sort(v).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},N=function(t,n){var e;return e=(n=n||{}).getShadowRoot?f([t],n.includeContainer,{filter:w.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:b}):d(t,n.includeContainer,w.bind(null,n)),E(e)},A=function(t,n){return(n=n||{}).getShadowRoot?f([t],n.includeContainer,{filter:S.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):d(t,n.includeContainer,S.bind(null,n))},R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==l.call(t,i)&&w(n,t)},C=o.concat("iframe").join(","),I=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==l.call(t,C)&&S(n,t)};const x={getShadowRoot:!0};function T(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,r.g)()):""}function D(t){const n=L(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function k(t){return t.getRootNode()}function O(t){return t.host||null}function q(t,n){let{selector:e,id:r}=n;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const o=k(n),i=r?"getElementById"in o?o.getElementById(r):null:e?o.querySelector(e):null,u=O(o);return i||(u?t(u):null)}(t)}function L(t,n){return function t(e){return e?e.closest(n)||t(O(k(e))):null}(t)}function P(t,n){return j(t,n)}function j(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return j(r instanceof ShadowRoot?r.host:r,n)}function B(t,n){return!!P(n,(n=>n===t||void 0))}async function F(t){if(t)return function(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}(t)?t.setFocus():t.focus()}function M(t){var n;if(t)return null!==(n=N(t,x)[0])&&void 0!==n?n:t}function U(t){var n;null===(n=M(t))||void 0===n||n.focus()}const _=":not([slot])";function X(t,n,e){var r;n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);const o=n?Array.isArray(n)?n.map((t=>'[slot="'.concat(t,'"]'))).join(","):'[slot="'.concat(n,'"]'):_;return null!==(r=e)&&void 0!==r&&r.all?function(t,n,e){let r=n===_?$(t,_):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=null!==e&&void 0!==e&&e.matches?r.filter((t=>null===t||void 0===t?void 0:t.matches(e.matches))):r;const o=null===e||void 0===e?void 0:e.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,o,e):function(t,n,e){var r,o,i;let u=n===_?$(t,_)[0]||null:t.querySelector(n);u=e&&!1===e.direct||(null===(r=u)||void 0===r?void 0:r.parentElement)===t?u:null,u=null!==e&&void 0!==e&&e.matches?null!==(o=u)&&void 0!==o&&o.matches(e.matches)?u:null:u;const l=null===e||void 0===e?void 0:e.selector;return l?null===(i=u)||void 0===i?void 0:i.querySelector(l):u}(t,o,e)}function $(t,n){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(n))):[]}function z(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function G(t){return Boolean(t).toString()}function V(t){return Y(t)||function(t){return!!function(t){return function(t){return t.target.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function Y(t){return!!H(t).length}function H(t){return t.target.assignedElements({flatten:!0})}function J(t){return!(!t.isPrimary||0!==t.button)}function K(t){return 0===t.detail}function Q(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}},95776:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);
//# sourceMappingURL=6537.0ec5d6ed.chunk.js.map