(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';function aa(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map(c=>c.split(b)).reduce(function(c,d){d[0]&&(c[d[0]]=d.slice(1).map(f=>f).sort());return c},{})}function ba(a){const b=aa(a),c="require-trusted-types-for"in b&&b["require-trusted-types-for"].includes("'script'");let d=["*"],f=!0;"trusted-types"in b&&(d=b["trusted-types"].filter(k=>"'"!==k.charAt(0)),f=b["trusted-types"].includes("'allow-duplicates'"));return new ca(!0,c,d,f,a)}
class ca{constructor(a,b,c,d,f=null){this.c=a;this.a=b;this.b=c;this.f=d;this.h=f}};const da="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function ea(){if("undefined"!==typeof window){const a=[];for(const b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return da};const fa="undefined"!==typeof window,ma=()=>{throw new TypeError("undefined conversion");},na=()=>null,{toLowerCase:oa,toUpperCase:pa}=String.prototype;function qa(){throw new TypeError("Illegal constructor");}function g(){throw new TypeError("Illegal constructor");}
const {G:t,F:ra,s:sa}=function(){function a(e){let h=R.get(e);void 0===h&&(h=m(null),R.set(e,h));return h}function b(e){const h=ha(e);if(null==h||ha(h)!==ia)throw Error();for(const n of S(h))z(e,n,{value:e[n]});return e}function c(e,h){w(e.prototype);delete e.name;z(e,"name",{value:h})}function d(e){return h=>h instanceof e&&R.has(h)}function f(e,h){function n(A,T){const Ea=h[T]||("default"==e?na:ma),Fa=w(new A(K,e));return w({[T](x,...L){x=Ea(""+x,...L);if(void 0===x||null===x){if("default"==e)return x;
x=""}x=""+x;L=w(m(Fa));a(L).v=x;return L}}[T])}const l=m(qa.prototype);for(const A of S(M))l[A]=n(M[A],A);z(l,"name",{value:e,writable:!1,configurable:!1,enumerable:!0});return w(l)}function k(e,h,n,l="",A=""){e=pa.apply(String(e));(l=A?A:l)||(l="http://www.w3.org/1999/xhtml");if(l=G.apply(u,[l])?u[l]:null){if(G.apply(l,[e])&&l[e]&&G.apply(l[e][h],[n])&&l[e][h][n])return l[e][h][n];if(G.apply(l,["*"])&&G.apply(l["*"][h],[n])&&l["*"][h][n])return l["*"][h][n]}}function p(){return N}const {assign:q,
create:m,defineProperty:z,freeze:w,getOwnPropertyNames:S,getPrototypeOf:ha,prototype:ia}=Object,{hasOwnProperty:G}=ia,{forEach:Ga,push:Ha}=Array.prototype,K=Symbol(),R=b(new WeakMap),E=b([]),U=b([]);let ja=!0,N=null,O=!1;class H{constructor(e,h){if(e!==K)throw Error("cannot call the constructor");z(this,"policyName",{value:h,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class r extends H{}c(r,"TrustedURL");class B extends H{}c(B,"TrustedScriptURL");class C extends H{}c(C,
"TrustedHTML");class y extends H{}c(y,"TrustedScript");c(H,"TrustedType");const ka=w(m(new C(K,"")));a(ka).v="";const la=w(m(new y(K,"")));a(la).v="";const u={["http://www.w3.org/1999/xhtml"]:{A:{attributes:{href:r.name}},AREA:{attributes:{href:r.name}},BASE:{attributes:{href:r.name}},BUTTON:{attributes:{formaction:r.name}},EMBED:{attributes:{src:B.name}},FORM:{attributes:{action:r.name}},FRAME:{attributes:{src:r.name}},IFRAME:{attributes:{src:r.name,srcdoc:C.name}},INPUT:{attributes:{formaction:r.name}},
OBJECT:{attributes:{data:B.name,codebase:B.name}},SCRIPT:{attributes:{src:B.name,text:y.name},properties:{innerText:y.name,textContent:y.name,text:y.name}},"*":{attributes:{},properties:{innerHTML:C.name,outerHTML:C.name}}},["http://www.w3.org/1999/xlink"]:{"*":{attributes:{href:r.name},properties:{}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{href:r.name},properties:{}}}};var F={codebase:"codeBase",formaction:"formAction"};!fa||"srcdoc"in HTMLIFrameElement.prototype||delete u["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;
for(const e of Object.keys(u["http://www.w3.org/1999/xhtml"])){u["http://www.w3.org/1999/xhtml"][e].properties||(u["http://www.w3.org/1999/xhtml"][e].properties={});for(const h of Object.keys(u["http://www.w3.org/1999/xhtml"][e].attributes))u["http://www.w3.org/1999/xhtml"][e].properties[F[h]?F[h]:h]=u["http://www.w3.org/1999/xhtml"][e].attributes[h]}for(const e of ea())u["http://www.w3.org/1999/xhtml"]["*"].attributes[e]="TrustedScript",u["http://www.w3.org/2000/svg"]["*"].attributes[e]="TrustedScript";
const M={createHTML:C,createScriptURL:B,createURL:r,createScript:y},Ia=M.hasOwnProperty;F=m(g.prototype);q(F,{createPolicy:function(e,h){if(!e.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+e+" contains invalid characters.");if(O&&-1===U.indexOf(e))throw new TypeError("Policy "+e+" disallowed.");if(O&&!ja&&-1!==E.indexOf(e))throw new TypeError("Policy "+e+" exists.");E.push(e);const n=m(null);if(h&&"object"===typeof h)for(const l of S(h))Ia.call(M,l)&&(n[l]=h[l]);else console.warn("trustedTypes.createPolicy "+
e+" was given an empty policy");w(n);h=f(e,n);"default"===e&&(N=h);return h},getPolicyNames:function(){return E.slice()},l:d(C),o:d(r),m:d(B),g:d(y),i:function(e,h,n="",l=""){h=oa.apply(String(h));return k(e,"attributes",h,n,l)||null},B:function(e,h,n=""){return k(e,"properties",String(h),n)||null},j:function(e=""){if(!e)try{e=document.documentElement.namespaceURI}catch(h){e="http://www.w3.org/1999/xhtml"}return(e=u[e])?JSON.parse(JSON.stringify(e)):{}},u:ka,w:la,H:N,TrustedHTML:C,TrustedURL:r,TrustedScriptURL:B,
TrustedScript:y});z(F,"defaultPolicy",{get:p,set:()=>{}});return{G:w(F),F:function(e,h){O=!0;U.length=0;Ga.call(e,n=>{Ha.call(U,""+n)});ja=h;E.length=0},s:function(){O=!1},I:p,J:function(){N=null;E.splice(E.indexOf("default"),1)}}}();const {defineProperty:v}=Object;function ta(a,b,c){v(a,b,{value:c})};const {apply:D}=Reflect,{getOwnPropertyNames:ua,getOwnPropertyDescriptor:I,getPrototypeOf:va}=Object,{hasOwnProperty:J}=Object.prototype,{slice:wa}=String.prototype,xa="function"==typeof window.URL?URL.prototype.constructor:null;let ya;
const P=document.createElement("div").constructor.name?a=>a.name:a=>(""+a).match(/^\[object (\S+)\]$/)[1],za=I(window,"open")?window:window.constructor.prototype,Aa=D(J,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,Ba=window.SecurityPolicyViolationEvent||null,Q=t.j("http://www.w3.org/1999/xhtml"),V={TrustedHTML:t.TrustedHTML,TrustedScript:t.TrustedScript,TrustedScriptURL:t.TrustedScriptURL,TrustedURL:t.TrustedURL};
for(const a of Object.keys(Q)){const b=Q[a].properties;for(const [c,d]of Object.entries(b))b[c]=V[d]}const W={TrustedHTML:t.l,TrustedURL:t.o,TrustedScriptURL:t.m,TrustedScript:t.g},Ca={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
function Da(a,b,c,d){function f(z){a.c.call(a,this,c,d,q,0,[z])}let k=b,p,q;var m=va(Node.prototype);do(q=(p=I(k,c))?p.set:null)||(k=va(k)||m);while(!q&&k!==m&&k);if(!(q instanceof Function))throw new TypeError("No setter for property "+c+" on object"+b);m=X(b,c);if(a.b[m])throw Error(`TrustedTypesEnforcer: Double installation detected: ${m} ${c}`);k===b?v(b,c,{set:f}):v(b,c,{set:f,get:p.get,configurable:!0});a.b[m]=q}
function Y(a,b,c,d,f){Z(a,b,c,function(k,...p){return a.c.call(a,this,c,d,k,f,p)})}function Ja(a){Z(a,Element.prototype,"setAttribute",function(b,...c){return a.D.bind(a,this,b).apply(a,c)});Z(a,Element.prototype,"setAttributeNS",function(b,...c){return a.C.bind(a,this,b).apply(a,c)})}
function Ka(a){["appendChild","insertBefore","replaceChild"].forEach(b=>{Z(a,Node.prototype,b,function(c,...d){return a.f.bind(a,this,!1,c).apply(a,d)})});Z(a,Aa,"insertAdjacentText",function(b,...c){return a.h.bind(a,this,b).apply(a,c)});"after"in Element.prototype&&(["after","before","replaceWith"].forEach(b=>{Z(a,Element.prototype,b,function(c,...d){return a.f.bind(a,this,!0,c).apply(a,d)})}),["append","prepend"].forEach(b=>{Z(a,Element.prototype,b,function(c,...d){return a.f.bind(a,this,!1,c).apply(a,
d)})}))}function La(a){for(const b of ua(Q))for(const c of ua(Q[b].properties))Da(a,window["*"==b?"HTMLElement":P(document.createElement(b).constructor)].prototype,c,Q[b].properties[c])}
function Ma(a){a.a.b.includes("*")?sa():ra(a.a.b,a.a.f);if(a.a.a||a.a.c)"ShadowRoot"in window&&Da(a,ShadowRoot.prototype,"innerHTML",t.TrustedHTML),ya=function(b){return 0==b.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length}(document),Y(a,Range.prototype,"createContextualFragment",t.TrustedHTML,0),Y(a,Aa,"insertAdjacentHTML",t.TrustedHTML,1),I(Document.prototype,"write")?(Y(a,Document.prototype,"write",t.TrustedHTML,0),Y(a,Document.prototype,"open",t.TrustedURL,
0)):(Y(a,HTMLDocument.prototype,"write",t.TrustedHTML,0),Y(a,HTMLDocument.prototype,"open",t.TrustedURL,0)),Y(a,za,"open",t.TrustedURL,0),"DOMParser"in window&&Y(a,DOMParser.prototype,"parseFromString",t.TrustedHTML,0),Y(a,window,"setInterval",t.TrustedScript,0),Y(a,window,"setTimeout",t.TrustedScript,0),Ja(a),Ka(a),La(a)}
function Z(a,b,c,d){var f=I(b,c);const k=f?f.value:null;if(!(k instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");f=X(b,c);if(a.b[f])throw Error(`TrustedTypesEnforcer: Double installation detected: ${f} ${c}`);ta(b,c,function(...p){return d.bind(this,k).apply(this,p)});a.b[f]=k}function Na(a,b,c=""){const d=t.defaultPolicy;return d&&W.hasOwnProperty(a)?d[Ca[a]](b,c):null}
function Oa(a,b,c,d,f){const k=P(b.constructor)||""+b,p=`Failed to set ${c} on ${k}: `+`This property requires ${d.name}.`;a.a.c&&console.warn(p,c,b,d,f);if("function"==typeof Ba){let m="";if(d===t.TrustedURL||d===t.TrustedScriptURL){try{var q=new xa(f,document.baseURI||void 0)}catch(z){q=null}if(m=q||"")m=m.href}d=D(wa,f,[0,40]);c=new Ba("securitypolicyviolation",{bubbles:!0,blockedURI:m,disposition:a.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"require-trusted-types-for",
originalPolicy:a.a.h,statusCode:0,violatedDirective:"require-trusted-types-for",sample:`${k}.${c} ${d}`});b instanceof Node&&b.isConnected?b.dispatchEvent(c):document.dispatchEvent(c)}if(a.a.a)throw new TypeError(p);}function X(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}
class Pa{constructor(a){this.a=a;this.b={}}D(a,b,...c){if(null!==a.constructor&&a instanceof Element){var d=(c[0]=String(c[0])).toLowerCase();if((d=t.i(a.tagName,d,a.namespaceURI))&&D(J,V,[d]))return this.c(a,"setAttribute",V[d],b,1,c)}return D(b,a,c)}C(a,b,...c){if(null!==a.constructor&&a instanceof Element){var d=c[0]?String(c[0]):null;c[0]=d;const f=(c[1]=String(c[1])).toLowerCase();if((d=t.i(a.tagName,f,a.namespaceURI,d))&&D(J,V,[d]))return this.c(a,"setAttributeNS",V[d],b,2,c)}return D(b,a,c)}f(a,
b,c,...d){if((b?a.parentNode:a)instanceof HTMLScriptElement&&0<d.length)for(b=0;b<d.length;b++){let f=d[b];if(f instanceof Node&&f.nodeType!==Node.TEXT_NODE)continue;if(f instanceof Node&&f.nodeType==Node.TEXT_NODE)f=f.textContent;else if(t.g(f)){d[b]=document.createTextNode(""+f);continue}const k=Na("TrustedScript",""+f,"script.text");null===k||void 0===k?Oa(this,a,c.name,t.TrustedScript,f):f=k;d[b]=document.createTextNode(""+f)}return D(c,a,d)}h(a,b,...c){const d=["beforebegin","afterend"];if(a instanceof
Element&&a.parentElement instanceof HTMLScriptElement&&1<c.length&&d.includes(c[0])&&!t.g(c[1])){c[1]=""+c[1];b=Na("TrustedScript",c[1],"script.text");null===b||void 0===b?Oa(this,a,"insertAdjacentText",t.TrustedScript,c[1]):c[1]=b;b=document.createTextNode(""+c[1]);const f=this.b[X(Node.prototype,"insertBefore")];switch(c[0]){case d[0]:D(f,a.parentElement,[b,a]);break;case d[1]:D(f,a.parentElement,[b,a.nextSibling])}}else D(b,a,c)}c(a,b,c,d,f,k){const p=k[f];var q=c.name;if(W.hasOwnProperty(q)&&
W[q](p))return ya&&"createContextualFragment"==b&&(k[f]=k[f].toString()),D(d,a,k);if(c===t.TrustedScript){const m="setAttribute"==b||"setAttributeNS"===b||"on"===D(wa,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||m)&&"function"===typeof p||m&&null===p)return D(d,a,k)}k[f]=""+p;q=Na(q,p,(a instanceof Element?a.localName:P(a?a.constructor:window.constructor))+"."+b);null===q||void 0===q?Oa(this,a,b,c,p):k[f]=q;return D(d,a,k)}};if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Qa=Object.create(g.prototype);Object.assign(Qa,{isHTML:t.l,isURL:t.o,isScriptURL:t.m,isScript:t.g,createPolicy:t.createPolicy,getPolicyNames:t.getPolicyNames,getAttributeType:t.i,getPropertyType:t.B,getTypeMapping:t.j,emptyHTML:t.u,emptyScript:t.w,_isPolyfill_:!0});Object.defineProperty(Qa,"defaultPolicy",
Object.getOwnPropertyDescriptor(t,"defaultPolicy")||{});window.trustedTypes=Object.freeze(Qa);window.TrustedHTML=t.TrustedHTML;window.TrustedURL=t.TrustedURL;window.TrustedScriptURL=t.TrustedScriptURL;window.TrustedScript=t.TrustedScript;window.TrustedTypePolicy=qa;window.TrustedTypePolicyFactory=g};function Ra(){try{var a;if(!(a=document.currentScript)){{const c=document.getElementsByTagName("script");a=c[c.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}var Sa;
a:{for(const a of["trustedTypes","TrustedTypes"])if(window[a]&&!window[a]._isPolyfill_){Sa=!1;break a}Sa=!0}if(Sa){{const a=Ra(),b=a?ba(a):new ca(!1,!1,[],!0);Ma(new Pa(b))}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
