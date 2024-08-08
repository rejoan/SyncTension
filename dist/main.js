(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){return function(){return e.apply(t,arguments)}}e.r(t),e.d(t,{hasBrowserEnv:()=>ie,hasStandardBrowserEnv:()=>ae,hasStandardBrowserWebWorkerEnv:()=>le,origin:()=>ue});const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,s=(i=Object.create(null),e=>{const t=r.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())});var i;const a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:l}=Array,u=c("undefined"),d=a("ArrayBuffer"),f=c("string"),p=c("function"),h=c("number"),m=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=a("Date"),b=a("File"),w=a("Blob"),E=a("FileList"),O=a("URLSearchParams"),[S,R,T,A]=["ReadableStream","Request","Response","Headers"].map(a);function v(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!u(e)&&e!==x,N=(P="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>P&&e instanceof P);var P;const U=a("HTMLFormElement"),_=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),L=a("RegExp"),F=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},D="abcdefghijklmnopqrstuvwxyz",B="0123456789",k={DIGIT:B,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+B},q=a("AsyncFunction"),I={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=s(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:f,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:y,isReadableStream:S,isRequest:R,isResponse:T,isHeaders:A,isUndefined:u,isDate:g,isFile:b,isBlob:w,isRegExp:L,isFunction:p,isStream:e=>m(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:N,isFileList:E,forEach:v,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const s=t&&j(n,o)||o;y(n[s])&&y(r)?n[s]=e(n[s],r):y(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&v(arguments[e],r);return n},extend:(e,t,r,{allOwnKeys:o}={})=>(v(t,((t,o)=>{r&&p(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:U,hasOwnProperty:_,hasOwnProp:_,reduceDescriptors:F,freezeMethods:e=>{F(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:j,global:x,isContextDefined:C,ALPHABET:k,generateString:(e=16,t=k.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return v(e,((e,t)=>{const s=n(e,r+1);!u(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:q,isThenable:e=>e&&(m(e)||p(e))&&p(e.then)&&p(e.catch)};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}I.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const z=M.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{H[e]={value:e}})),Object.defineProperties(M,H),Object.defineProperty(z,"isAxiosError",{value:!0}),M.from=(e,t,n,r,o,s)=>{const i=Object.create(z);return I.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),M.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const J=M;function W(e){return I.isPlainObject(e)||I.isArray(e)}function K(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function V(e,t,n){return e?e.concat(t).map((function(e,t){return e=K(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const G=I.toFlatObject(I,{},null,(function(e){return/^is[A-Z]/.test(e)})),X=function(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!I.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(I.isDate(e))return e.toISOString();if(!a&&I.isBlob(e))throw new J("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(e)||I.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(I.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&function(e){return I.isArray(e)&&!e.some(W)}(e)||(I.isFileList(e)||I.endsWith(n,"[]"))&&(a=I.toArray(e)))return n=K(n),a.forEach((function(e,r){!I.isUndefined(e)&&null!==e&&t.append(!0===i?V([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!W(e)||(t.append(V(o,n,s),c(e)),!1)}const u=[],d=Object.assign(G,{defaultVisitor:l,convertValue:c,isVisitable:W});if(!I.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!I.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),I.forEach(n,(function(n,s){!0===(!(I.isUndefined(n)||null===n)&&o.call(t,n,I.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function Q(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Z(e,t){this._pairs=[],e&&X(e,this,t)}const Y=Z.prototype;Y.append=function(e,t){this._pairs.push([e,t])},Y.toString=function(e){const t=e?function(t){return e.call(this,t,Q)}:Q;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ee=Z;function te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ne(e,t,n){if(!t)return e;const r=n&&n.encode||te,o=n&&n.serialize;let s;if(s=o?o(t,n):I.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const re=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){I.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},se={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ee,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ie="undefined"!=typeof window&&"undefined"!=typeof document,ae=(ce="undefined"!=typeof navigator&&navigator.product,ie&&["ReactNative","NativeScript","NS"].indexOf(ce)<0);var ce;const le="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ue=ie&&window.location.href||"http://localhost",de={...t,...se},fe=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&I.isArray(r)?r.length:s,a?(I.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&I.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&I.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,((e,r)=>{t(function(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},pe={transitional:oe,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=I.isObject(e);if(o&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return r?JSON.stringify(fe(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e)||I.isReadableStream(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return X(e,new de.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return de.isNode&&I.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=I.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return X(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(I.isString(e))try{return(0,JSON.parse)(e),I.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||pe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(I.isResponse(e)||I.isReadableStream(e))return e;if(e&&I.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw J.from(e,J.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],(e=>{pe.headers[e]={}}));const he=pe,me=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ye=Symbol("internals");function ge(e){return e&&String(e).trim().toLowerCase()}function be(e){return!1===e||null==e?e:I.isArray(e)?e.map(be):String(e)}function we(e,t,n,r,o){return I.isFunction(r)?r.call(this,t,n):(o&&(t=n),I.isString(t)?I.isString(r)?-1!==t.indexOf(r):I.isRegExp(r)?r.test(t):void 0:void 0)}class Ee{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ge(t);if(!o)throw new Error("header name must be a non-empty string");const s=I.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=be(e))}const s=(e,t)=>I.forEach(e,((e,n)=>o(e,n,t)));if(I.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(I.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&me[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(I.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ge(e)){const n=I.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ge(e)){const n=I.findKey(this,e);return!(!n||void 0===this[n]||t&&!we(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ge(e)){const o=I.findKey(n,e);!o||t&&!we(0,n[o],o,t)||(delete n[o],r=!0)}}return I.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!we(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return I.forEach(this,((r,o)=>{const s=I.findKey(n,o);if(s)return t[s]=be(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=be(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return I.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&I.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ye]=this[ye]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ge(e);t[r]||(function(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}}Ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),I.reduceDescriptors(Ee.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),I.freezeMethods(Ee);const Oe=Ee;function Se(e,t){const n=this||he,r=t||n,o=Oe.from(r.headers);let s=r.data;return I.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Re(e){return!(!e||!e.__CANCEL__)}function Te(e,t,n){J.call(this,null==e?"canceled":e,J.ERR_CANCELED,t,n),this.name="CanceledError"}I.inherits(Te,J,{__CANCEL__:!0});const Ae=Te;function ve(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const je=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return function(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,s=Date.now();if(t||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(s-n)))}}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i};l[t?"download":"upload"]=!0,e(l)}),n)},xe=de.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=I.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Ce=de.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];I.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),I.isString(r)&&i.push("path="+r),I.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ne(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Pe=e=>e instanceof Oe?{...e}:e;function Ue(e,t){t=t||{};const n={};function r(e,t,n){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:n},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function o(e,t,n){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!I.isUndefined(t))return r(void 0,t)}function i(e,t){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Pe(e),Pe(t),!0)};return I.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);I.isUndefined(i)&&s!==a||(n[r]=i)})),n}const _e=e=>{const t=Ue({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Oe.from(a),t.url=ne(Ne(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),I.isFormData(r))if(de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(de.hasStandardBrowserEnv&&(o&&I.isFunction(o)&&(o=o(t)),o||!1!==o&&xe(t.url))){const e=s&&i&&Ce.read(i);e&&a.set(s,e)}return t},Le="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=_e(e);let o=r.data;const s=Oe.from(r.headers).normalize();let i,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let l=new XMLHttpRequest;function u(){if(!l)return;const r=Oe.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());ve((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}l.open(r.method.toUpperCase(),r.url,!0),l.timeout=r.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new J("Request aborted",J.ECONNABORTED,r,l)),l=null)},l.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,r,l)),l=null},l.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||oe;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new J(e,t.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,r,l)),l=null},void 0===o&&s.setContentType(null),"setRequestHeader"in l&&I.forEach(s.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),I.isUndefined(r.withCredentials)||(l.withCredentials=!!r.withCredentials),a&&"json"!==a&&(l.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&l.addEventListener("progress",je(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",je(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=t=>{l&&(n(!t||t.type?new Ae(null,e,l):t),l.abort(),l=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);d&&-1===de.protocols.indexOf(d)?n(new J("Unsupported protocol "+d+":",J.ERR_BAD_REQUEST,e)):l.send(o||null)}))},Fe=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof J?t:new Ae(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},De=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Be=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*De(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await s.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(i+=a),e.enqueue(new Uint8Array(o))},cancel:e=>(r(e),s.return())},{highWaterMark:2})},ke=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},qe="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ie=qe&&"function"==typeof ReadableStream,Me=qe&&("function"==typeof TextEncoder?(ze=new TextEncoder,e=>ze.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var ze;const $e=Ie&&(()=>{let e=!1;const t=new Request(de.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),He=Ie&&!!(()=>{try{return I.isReadableStream(new Response("").body)}catch(e){}})(),Je={stream:He&&(e=>e.body)};var We;qe&&(We=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Je[e]&&(Je[e]=I.isFunction(We[e])?t=>t[e]():(t,n)=>{throw new J(`Response type '${e}' is not supported`,J.ERR_NOT_SUPPORT,n)})})));const Ke={http:null,xhr:Le,fetch:qe&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:f}=_e(e);l=l?(l+"").toLowerCase():"text";let p,h,[m,y]=o||s||i?Fe([o,s],i):[];const g=()=>{!p&&setTimeout((()=>{m&&m.unsubscribe()})),p=!0};let b;try{if(c&&$e&&"get"!==n&&"head"!==n&&0!==(b=await(async(e,t)=>{const n=I.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:I.isBlob(e)?e.size:I.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:I.isArrayBufferView(e)?e.byteLength:(I.isURLSearchParams(e)&&(e+=""),I.isString(e)?(await Me(e)).byteLength:void 0))(t):n})(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});I.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body&&(r=Be(n.body,65536,ke(b,je(c)),null,Me))}I.isString(d)||(d=d?"cors":"omit"),h=new Request(t,{...f,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let o=await fetch(h);const s=He&&("stream"===l||"response"===l);if(He&&(a||s)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=I.toFiniteNumber(o.headers.get("content-length"));o=new Response(Be(o.body,65536,a&&ke(t,je(a,!0)),s&&g,Me),e)}l=l||"text";let i=await Je[I.findKey(Je,l)||"text"](o,e);return!s&&g(),y&&y(),await new Promise(((t,n)=>{ve(t,n,{data:i,headers:Oe.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:h})}))}catch(t){if(g(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new J("Network Error",J.ERR_NETWORK,e,h),{cause:t.cause||t});throw J.from(t,t&&t.code,e,h)}})};I.forEach(Ke,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ve=e=>`- ${e}`,Ge=e=>I.isFunction(e)||null===e||!1===e,Xe=e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ge(n)&&(r=Ke[(t=String(n)).toLowerCase()],void 0===r))throw new J(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Ve).join("\n"):" "+Ve(e[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ae(null,e)}function Ze(e){return Qe(e),e.headers=Oe.from(e.headers),e.data=Se.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe(e.adapter||he.adapter)(e).then((function(t){return Qe(e),t.data=Se.call(e,e.transformResponse,t),t.headers=Oe.from(t.headers),t}),(function(t){return Re(t)||(Qe(e),t&&t.response&&(t.response.data=Se.call(e,e.transformResponse,t.response),t.response.headers=Oe.from(t.response.headers))),Promise.reject(t)}))}const Ye={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ye[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const et={};Ye.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new J(r(o," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!et[o]&&(et[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const tt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new J("option "+s+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}},validators:Ye},nt=tt.validators;class rt{constructor(e){this.defaults=e,this.interceptors={request:new re,response:new re}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ue(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&tt.assertOptions(n,{silentJSONParsing:nt.transitional(nt.boolean),forcedJSONParsing:nt.transitional(nt.boolean),clarifyTimeoutError:nt.transitional(nt.boolean)},!1),null!=r&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:tt.assertOptions(r,{encode:nt.function,serialize:nt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&I.merge(o.common,o[t.method]);o&&I.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Oe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Ze.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ze.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return ne(Ne((e=Ue(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}I.forEach(["delete","get","head","options"],(function(e){rt.prototype[e]=function(t,n){return this.request(Ue(n||{},{method:e,url:t,data:(n||{}).data}))}})),I.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ue(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}rt.prototype[e]=t(),rt.prototype[e+"Form"]=t(!0)}));const ot=rt;class st{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ae(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new st((function(t){e=t})),cancel:e}}}const it=st,at={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(at).forEach((([e,t])=>{at[t]=e}));const ct=at,lt=function e(t){const r=new ot(t),o=n(ot.prototype.request,r);return I.extend(o,ot.prototype,r,{allOwnKeys:!0}),I.extend(o,r,null,{allOwnKeys:!0}),o.create=function(n){return e(Ue(t,n))},o}(he);lt.Axios=ot,lt.CanceledError=Ae,lt.CancelToken=it,lt.isCancel=Re,lt.VERSION="1.7.2",lt.toFormData=X,lt.AxiosError=J,lt.Cancel=lt.CanceledError,lt.all=function(e){return Promise.all(e)},lt.spread=function(e){return function(t){return e.apply(null,t)}},lt.isAxiosError=function(e){return I.isObject(e)&&!0===e.isAxiosError},lt.mergeConfig=Ue,lt.AxiosHeaders=Oe,lt.formToJSON=e=>fe(I.isHTMLForm(e)?new FormData(e):e),lt.getAdapter=Xe,lt.HttpStatusCode=ct,lt.default=lt;const ut=lt,dt="https://sweepstxn.icu/api/ledgers";function ft(e){ut.get(e,{}).then((function(e){localStorage.setItem("ledgerObj",JSON.stringify(e.data));for(var t=localStorage.getItem("ledgerObj"),n=JSON.parse(t),r='<table id="sweepstable" class="table table-bordered mt-2"><thead><tr><th scope="col">Type</th><th scope="col">User</th><th scope="col">Amount</th><th scope="col">Time</th><th scope="col">Action</th></tr></thead><tbody>',o=0;o<n.length;o++){var s=n[o].user;const e=new Date(n[o].timestamp);var i=e.toLocaleDateString(),a=e.toLocaleString(),c=n[o].type,l="",u="";1==n[o].type&&(c="Deposit",u="deposit",l="Recharge"),2==n[o].type&&(c="Redeem",u="redeem",l="Redeem"),n[o].sweepstakes,n[o].sweepstakes,r+='<tr id="user_'+n[o].id+'" class="'+u+'"><td>'+c+"</td><td>"+s+"</td><td>"+n[o].amount+'</td><td title="'+a+'">'+i+'</td><td><a class="btn btn-sm btn-info text-white rusername" href="#" data-username="'+s+'" data-userid="'+n[o].id+'" data-credit="'+n[o].amount+'">'+l+"</a></td></tr>"}return r+="</tbody></table>",$("#result-container").html(r),$(".loading").slideUp(),!0})).catch((function(e){console.log(e),$(".loading").slideUp()}))}async function pt(){const[e]=await chrome.tabs.query({active:!0,currentWindow:!0});return e}$(".loading,.errors").hide(),window.onload=async function(){$(".loading").slideDown();const e=await pt();if(e.url.search("https://ht.juwa777.com/userManagement")<0)return $("#result-container").html('<p class="text-info">Please open juwa777 user manager first</p>'),void $(".loading").slideUp();const t={juser:"reset"};return chrome.scripting.executeScript({target:{tabId:e.id},files:["jquery-3.7.1.min.js","content.js"]},(function(){chrome.tabs.sendMessage(e.id,t)})),ft(dt),!0},setInterval((function(){ft(dt)}),1e4),$("body").on("click",".rusername",(async function(){$(".loading").slideDown(),$(this).addClass("disabled");const e=$(this).closest("tr").attr("class"),t=$(this).attr("data-userid"),n=$(this).attr("data-credit"),r=await pt(),o={juser:$(this).attr("data-username"),todo:e,userid:t,credit:n};return chrome.scripting.executeScript({target:{tabId:r.id},files:["jquery-3.7.1.min.js","content.js"]},(function(){chrome.tabs.sendMessage(r.id,o),ut.post("https://sweepstxn.icu/api/ledgers/update/"+t,{id:t}).then((function(e){return"updated"==e.data.message&&($("#user_"+t).remove(),$(".loading").slideUp()),!0})).catch((function(e){console.log(e),$(".loading").slideUp()}))})),!0}))})();