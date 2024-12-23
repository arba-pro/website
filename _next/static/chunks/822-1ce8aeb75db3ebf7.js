(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{7818:(e,t,n)=>{"use strict";n.d(t,{default:()=>o.a});var r=n(551),o=n.n(r)},551:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(148));function o(e,t){var n;let o={};"function"==typeof e&&(o.loader=e);let l={...o,...t};return(0,r.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(5592);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},148:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(7437),o=n(2265),l=n(912),i=n(5025);function u(e){return{default:e&&"default"in e?e.default:e}}let a={loader:()=>Promise.resolve(u(()=>null)),loading:null,ssr:!0},s=function(e){let t={...a,...e},n=(0,o.lazy)(()=>t.loader().then(u)),s=t.loading;function d(e){let u=s?(0,r.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,a=!t.ssr||!!t.loading,d=a?o.Suspense:o.Fragment,c=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(i.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(d,{...a?{fallback:u}:{},children:c})}return d.displayName="LoadableComponent",d}},5025:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return u}});let r=n(7437),o=n(4887),l=n(8011),i=n(5759);function u(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=l.workAsyncStorage.getStore();if(void 0===n)return null;let u=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;u.push(...t)}}return 0===u.length?null:(0,r.jsx)(r.Fragment,{children:u.map(e=>{let t=n.assetPrefix+"/_next/"+(0,i.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,o.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},7430:()=>{},6040:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7437),o=n(2265);function l(e,t){let[n,r]=t,[o,l]=e;return void 0!==o&&void 0!==l&&void 0!==n&&void 0!==r&&n>o&&n-o<=20&&r<l?[o,r]:o!==n||l!==r?[n,r]:e}function i(e){return["react-photo-album",e].filter(Boolean).join("--")}let u=Object.freeze([1200,600,300,0]);function a(e,t){return"function"==typeof e?e(t):e}function s(e,t){return void 0!==t?a(e,t):void 0}function d(e,t,n,r=0){if(void 0===t)return;let o=s(e,t);return Math.round(Math.max(void 0===o?a(n[Math.max(u.findIndex(e=>e<=t),0)],t):o,r))}function c(e,t=0){let n=10**t;return Math.round((e+Number.EPSILON)*n)/n}let f=(0,o.forwardRef)(function({as:e,render:t,context:n,classes:o=[],variables:l={},style:u,className:a,children:s,...d},f){let h=function(...e){return[...e].filter(Boolean).join(" ")}(...(Array.isArray(o)?o:[o]).filter(e=>"string"==typeof e).map(i),a),p={style:{...Object.fromEntries(Object.entries(l).map(([e,t])=>{var n;return[(n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),`--${i(n)}`),"number"==typeof t?c(t,5):t]})),...u},className:h,children:s,...d};if(t){let e=t({ref:f,...p},n);if(e)return e}return(0,r.jsx)(e||"div",{ref:f,...p})}),h=(0,o.forwardRef)(function({photo:e,index:t,width:n,height:o,onClick:l,render:{wrapper:i,link:u,button:a,image:s,extras:d}={},componentsProps:{link:h,button:p,wrapper:v,image:m}={}},g){let b;let{href:w}=e,y={photo:e,index:t,width:c(n,3),height:c(o,3)};return b=w?{...h,as:"a",render:u,classes:["photo","link"],href:w,onClick:l}:l?{...p,as:"button",type:"button",render:a,classes:["photo","button"],onClick:l}:{...v,render:i,classes:"photo"},(0,r.jsxs)(f,{ref:g,variables:{photoWidth:y.width,photoHeight:y.height},...{context:y,...b},children:[(0,r.jsx)(f,{as:"img",classes:"image",render:s,context:y,...m}),d?.({},y)]})}),p=(0,o.forwardRef)(function({layout:e,sizes:t,model:n,skeleton:l,onClick:i,render:{container:u,track:s,photo:d,...p}={},componentsProps:{container:v,track:m,link:g,button:b,wrapper:w,image:y}={}},j){let{spacing:x,padding:M,containerWidth:P,tracks:k,variables:_,horizontal:O}=n||{};return(0,r.jsxs)(f,{role:"group","aria-label":"Photo album",...v,variables:{spacing:x,padding:M,containerWidth:P,..._},classes:["",e],render:u,ref:j,children:[void 0!==x&&void 0!==M&&void 0!==P&&k?.map(({photos:e,variables:n},l)=>{let u=e.length,v=O?u:k.length;return o.createElement(f,{...m,key:l,render:s,classes:"track",variables:{trackSize:u,...n}},e.map(e=>{let{photo:n,index:o,width:l}=e,{key:u,src:s,alt:f,title:m,label:j}=n,k=i?e=>{i({event:e,photo:n,index:o})}:void 0;if(d){let t=d({onClick:k},e);if(t)return t}let _=e=>j?{"aria-label":j,...e}:e;return r.jsx(h,{onClick:k,render:p,componentsProps:{image:{loading:"lazy",decoding:"async",src:s,alt:f,title:m,...function(e,t,n,r,o,l,i){let u;let a=e=>{let t=l*(o-1)+2*i*o;return`calc((${e.match(/^\s*calc\((.*)\)\s*$/)?.[1]??e} - ${t}px) / ${c((r-t)/n,5)})`},s=e.srcSet;return s&&s.length>0&&(u=s.concat(s.some(({width:t})=>t===e.width)?[]:[{src:e.src,width:e.width,height:e.height}]).sort((e,t)=>e.width-t.width).map(e=>`${e.src} ${e.width}w`).join(", ")),{srcSet:u,sizes:t?.size?(t.sizes||[]).map(({viewport:e,size:t})=>`${e} ${a(t)}`).concat(a(t.size)).join(", "):`${Math.ceil(n/r*100)}vw`}}(n,t,l,P,v,x,M),...a(y,e)},link:_(a(g,e)),button:_(a(b,e)),wrapper:a(w,e)},...e},u??s)}))}),void 0===P&&l]})});function v(e,t,n,r){return(t-(e.length-1)*n-2*r*e.length)/e.reduce((e,t)=>e+function({width:e,height:t}){return e/t}(t),0)}let m=(0,o.forwardRef)(function(e,t){let{photos:n,breakpoints:i,defaultContainerWidth:u,...f}=e,{containerRef:h,containerWidth:m}=function(e,t,n){let[[r],i]=(0,o.useReducer)(l,[n]),u=function(e){let t=(0,o.useRef)(e);return(!e||!t.current||e.length!==t.current.length||t.current.some((t,n)=>t!==e[n]))&&(t.current=e),t.current}(t),a=(0,o.useRef)();return{containerRef:(0,o.useCallback)(t=>{var n;null===(n=a.current)||void 0===n||n.disconnect(),a.current=void 0;let r=()=>i([function(e,t){let n=null==e?void 0:e.clientWidth;if(void 0!==n&&t&&t.length>0){let e=[...t.filter(e=>e>0)].sort((e,t)=>t-e);e.push(Math.floor(e[e.length-1]/2)),n=e.find((t,r)=>t<=n||r===e.length-1)}return n}(t,u),window.innerWidth-document.documentElement.clientWidth]);r(),t&&"undefined"!=typeof ResizeObserver&&(a.current=new ResizeObserver(r),a.current.observe(t)),"function"==typeof e?e(t):e&&(e.current=t)},[e,u]),containerWidth:r}}(t,i,u),{spacing:g,padding:b,targetRowHeight:w,minPhotos:y,maxPhotos:j,...x}=function(e,{photos:t,targetRowHeight:n,rowConstraints:r,...o}){let{spacing:l,padding:i,componentsProps:u,render:c}=function(e,{spacing:t,padding:n,componentsProps:r,render:o}){return{spacing:d(t,e,[20,15,10,5]),padding:d(n,e,[0,0,0,0]),componentsProps:a(r,e)||{},render:a(o,e)}}(e,o),{singleRowMaxHeight:f,minPhotos:h,maxPhotos:p}=s(r,e)||{};if(void 0!==f&&void 0!==l&&void 0!==i){let e=Math.floor(t.reduce((e,{width:t,height:n})=>e+t/n*f-2*i,i*t.length*2+l*(t.length-1)));e>0&&(u.container={...u.container},u.container.style={maxWidth:e,...u.container.style})}return{...o,targetRowHeight:d(n,e,[e=>e/5,e=>e/4,e=>e/3,e=>e/2]),render:c,spacing:l,padding:i,minPhotos:h,maxPhotos:p,componentsProps:u}}(m,{photos:n,...f}),M=(0,o.useMemo)(()=>void 0!==m&&void 0!==g&&void 0!==b&&void 0!==w?function(e,t,n,r,o,l,i){var u;let a=c(r/o/Math.min(...e.map(e=>(function({width:e,height:t}){return e/t})(e))))+(l||0)+2,s=function(e,t){if(!e)return;let n=[];for(let r=t;void 0!==r;r=e.get(r))n.push(r);return n.reverse()}(function(e,t,n){var r;let o=new Map,l=new Set,i=new Map;i.set(0,0);let u=function(e){let t=0,n=[],r=(t,r)=>0>e(n[t],n[r]),o=(e,t)=>{let r=n[e];n[e]=n[t],n[t]=r},l=e=>{let t=e,n=Math.floor(t/2);for(;t>1&&r(n,t);)o(n,t),n=Math.floor((t=n)/2)},i=e=>{let n=e,l=2*n;for(;l<=t&&(l<t&&r(l,l+1)&&(l+=1),r(n,l));)o(n,l),l=2*(n=l)};return{push:e=>{n[t+=1]=e,l(t)},pop:()=>{if(0===t)return;o(1,t),t-=1;let e=n.pop();return i(1),e},size:()=>t}}((r=e=>e[1],(e,t)=>r(t)-r(e)));for(u.push([0,0]);u.size()>0;){let[t,n]=u.pop();if(!l.has(t)){let r=e(t);l.add(t),r.forEach((e,r)=>{let l=n+e,a=o.get(r),s=i.get(r);(void 0===s||s>l&&(s/l>1.005||void 0!==a&&a<t))&&(i.set(r,l),u.push([r,l]),o.set(r,t))})}}return i.has(n)?o:void 0}(u=>{let s=new Map;s.set(u,0);let d=Math.min(a,i||1/0);for(let i=u+(l||1);i<e.length+1&&!(i-u>d);i+=1){let l=function(e,t,n,r,o,l,i){let u=e.slice(t,n),a=v(u,r,o,l);return a>0?(a-i)**2*u.length:void 0}(e,u,i,r,t,n,o);if(void 0===l)break;s.set(i,l)}return s},0,u=e.length),u);if(!s)return;let d=[];for(let o=1;o<s.length;o+=1){let l=e.map((e,t)=>({photo:e,index:t})).slice(s[o-1],s[o]),i=v(l.map(({photo:e})=>e),r,t,n);d.push({photos:l.map(({photo:e,index:t})=>({photo:e,index:t,width:i*function({width:e,height:t}){return e/t}(e),height:i}))})}return{spacing:t,padding:n,containerWidth:r,tracks:d,horizontal:!0}}(n,g,b,m,w,y,j):void 0,[n,g,b,m,w,y,j]);return(0,r.jsx)(p,{layout:"rows",ref:h,model:M,...x})})}}]);