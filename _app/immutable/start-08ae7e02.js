import{S as Ye,i as We,s as Xe,a as Ze,e as C,c as Qe,b as M,g as ce,t as F,d as fe,f as J,h as G,j as xe,o as ve,k as et,l as tt,m as nt,n as we,p as q,q as rt,r as at,u as ot,v as H,w as Y,x as Oe,y as W,z as X,A as Ce}from"./chunks/index-55f02416.js";import{g as Fe,f as Je,s as K,a as Ee,i as st}from"./chunks/singletons-9b14faf2.js";import{_ as x}from"./chunks/preload-helper-aa6bc0ce.js";import{s as it}from"./chunks/paths-6cd3a76e.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const o of ft){let i=t[o];Object.defineProperty(t,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,i,l)=>l(r,i),pt(t),t}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ue=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;le.delete(o)}return ue(r,e)};const le=new Map;function ht(r,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(i+=`[data-hash="${dt(t.body)}"]`);const l=document.querySelector(i);if(l!=null&&l.textContent){const{body:n,...u}=JSON.parse(l.textContent),g=l.getAttribute("data-ttl");return g&&le.set(e,{body:n,init:u,ttl:1e3*Number(g)}),Promise.resolve(new Response(n,u))}return ue(r,t)}function mt(r,e){const t=le.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(r)}return ue(r,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(yt).map((l,n,u)=>{const g=decodeURIComponent(l),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(g);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const _=n===u.length-1;return g&&"/"+g.split(/\[(.+?)\]/).map((w,S)=>{if(S%2){const U=gt.exec(w);if(!U)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,V,T]=U;return e.push(V),t.push(T),D?"(.*?)":"([^/]+?)"}return _&&w.includes(".")&&(o=!1),w.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function yt(r){return!/^\([^)]+\)$/.test(r)}function wt(r,e,t,o){const i={};for(let l=0;l<e.length;l+=1){const n=e[l],u=t[l],g=r[l+1]||"";if(u){const h=o[u];if(!h)throw new Error(`Missing "${u}" param matcher`);if(!h(g))return}i[n]=g}return i}function bt(r,e,t,o){const i=new Set(e);return Object.entries(t).map(([u,[g,h,_]])=>{const{pattern:w,names:S,types:U}=_t(u),D={id:u,exec:V=>{const T=w.exec(V);if(T)return wt(T,S,U,o)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...h||[]].map(n),leaf:l(g)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function l(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function n(u){return u===void 0?u:[i.has(u),r[u]]}}function vt(r){let e,t,o;var i=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=H(i,l(r))),{c(){e&&Y(e.$$.fragment),t=C()},l(n){e&&Oe(e.$$.fragment,n),t=C()},m(n,u){e&&W(e,n,u),M(n,t,u),o=!0},p(n,u){const g={};if(u&4&&(g.data=n[2]),u&2&&(g.form=n[1]),i!==(i=n[0][0])){if(e){ce();const h=e;F(h.$$.fragment,1,0,()=>{X(h,1)}),fe()}i?(e=H(i,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(g)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function Et(r){let e,t,o;var i=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return i&&(e=H(i,l(r))),{c(){e&&Y(e.$$.fragment),t=C()},l(n){e&&Oe(e.$$.fragment,n),t=C()},m(n,u){e&&W(e,n,u),M(n,t,u),o=!0},p(n,u){const g={};if(u&4&&(g.data=n[2]),u&523&&(g.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){ce();const h=e;F(h.$$.fragment,1,0,()=>{X(h,1)}),fe()}i?(e=H(i,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(g)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function kt(r){let e,t,o;var i=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=H(i,l(r))),{c(){e&&Y(e.$$.fragment),t=C()},l(n){e&&Oe(e.$$.fragment,n),t=C()},m(n,u){e&&W(e,n,u),M(n,t,u),o=!0},p(n,u){const g={};if(u&8&&(g.data=n[3]),u&2&&(g.form=n[1]),i!==(i=n[0][1])){if(e){ce();const h=e;F(h.$$.fragment,1,0,()=>{X(h,1)}),fe()}i?(e=H(i,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(g)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&X(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=nt(e);t&&t.l(i),i.forEach(G),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(o,i){M(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=rt(r[6])},l(t){e=at(t,r[6])},m(t,o){M(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&G(e)}}}function Rt(r){let e,t,o,i,l;const n=[Et,vt],u=[];function g(_,w){return _[0][1]?0:1}e=g(r),t=u[e]=n[e](r);let h=r[4]&&Ge(r);return{c(){t.c(),o=Ze(),h&&h.c(),i=C()},l(_){t.l(_),o=Qe(_),h&&h.l(_),i=C()},m(_,w){u[e].m(_,w),M(_,o,w),h&&h.m(_,w),M(_,i,w),l=!0},p(_,[w]){let S=e;e=g(_),e===S?u[e].p(_,w):(ce(),F(u[S],1,1,()=>{u[S]=null}),fe(),t=u[e],t?t.p(_,w):(t=u[e]=n[e](_),t.c()),J(t,1),t.m(o.parentNode,o)),_[4]?h?h.p(_,w):(h=Ge(_),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(_){l||(J(t),l=!0)},o(_){F(t),l=!1},d(_){u[e].d(_),_&&G(o),h&&h.d(_),_&&G(i)}}}function St(r,e,t){let{stores:o}=e,{page:i}=e,{components:l}=e,{form:n}=e,{data_0:u=null}=e,{data_1:g=null}=e;xe(o.page.notify);let h=!1,_=!1,w=null;return ve(()=>{const S=o.page.subscribe(()=>{h&&(t(5,_=!0),t(6,w=document.title||"untitled page"))});return t(4,h=!0),S}),r.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,i=S.page),"components"in S&&t(0,l=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,u=S.data_0),"data_1"in S&&t(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(i)},[l,n,u,g,h,_,w,o,i]}class Ot extends Ye{constructor(e){super(),We(this,e,St,Rt,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const It={},pe=[()=>x(()=>import("./chunks/0-2058208a.js"),["chunks/0-2058208a.js","chunks/_layout-fd68092a.js","components/pages/_layout.svelte-f8f53e6f.js","assets/_layout-30cca84f.css","chunks/index-55f02416.js","chunks/paths-6cd3a76e.js","chunks/state-8239c202.js","chunks/preload-helper-aa6bc0ce.js","chunks/theme-2bf6478f.js"],import.meta.url),()=>x(()=>import("./chunks/1-eee82ebd.js"),["chunks/1-eee82ebd.js","components/error.svelte-405ae70a.js","chunks/index-55f02416.js","chunks/singletons-9b14faf2.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>x(()=>import("./chunks/2-aab679b8.js"),["chunks/2-aab679b8.js","components/pages/_page.svelte-e75c059d.js","chunks/index-55f02416.js","chunks/singletons-9b14faf2.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>x(()=>import("./chunks/3-3d9fad21.js"),["chunks/3-3d9fad21.js","components/pages/edit/_page.svelte-ba485e22.js","assets/_page-826332b8.css","chunks/index-55f02416.js","chunks/state-8239c202.js","chunks/preload-helper-aa6bc0ce.js","chunks/theme-2bf6478f.js","chunks/view-77b8acbd.js","assets/view-0c536ccf.css","chunks/paths-6cd3a76e.js"],import.meta.url),()=>x(()=>import("./chunks/4-30357cf4.js"),["chunks/4-30357cf4.js","components/pages/view/_page.svelte-e455fd91.js","chunks/index-55f02416.js","chunks/view-77b8acbd.js","assets/view-0c536ccf.css","chunks/state-8239c202.js","chunks/preload-helper-aa6bc0ce.js"],import.meta.url)],$t=[],Lt={"":[2],edit:[3],view:[4]},jt={handleError:({error:r})=>{console.error(r)}};class ke{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const At="/__data.json";async function Nt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,i])=>[o,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Pt=-1,Ut=-2,Tt=-3,Dt=-4,Vt=-5,qt=-6;function Bt(r){const e=JSON.parse(r);if(typeof e=="number")return i(e);const t=e,o=Array(t.length);function i(l){if(l===Pt)return;if(l===Tt)return NaN;if(l===Dt)return 1/0;if(l===Vt)return-1/0;if(l===qt)return-0;if(l in o)return o[l];const n=t[l];if(!n||typeof n!="object")o[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[l]=new Date(n[1]);break;case"Set":const g=new Set;o[l]=g;for(let w=1;w<n.length;w+=1)g.add(i(n[w]));break;case"Map":const h=new Map;o[l]=h;for(let w=1;w<n.length;w+=2)h.set(i(n[w]),i(n[w+1]));break;case"RegExp":o[l]=new RegExp(n[1],n[2]);break;case"Object":o[l]=Object(n[1]);break;case"BigInt":o[l]=BigInt(n[1]);break;case"null":const _=Object.create(null);o[l]=_;for(let w=1;w<n.length;w+=2)_[n[w]]=i(n[w+1]);break}else{const u=new Array(n.length);o[l]=u;for(let g=0;g<n.length;g+=1){const h=n[g];h!==Ut&&(u[g]=i(h))}}else{const u={};o[l]=u;for(const g in n){const h=n[g];u[g]=i(h)}}return o[l]}return i(0)}const He="sveltekit:scroll",B="sveltekit:index",oe=bt(pe,$t,Lt,It),Re=pe[0],Se=pe[1];Re();Se();let te={};try{te=JSON.parse(sessionStorage[He])}catch{}function be(r){te[r]=Ee()}function Ct({target:r,base:e,trailing_slash:t}){var Ve;const o=[];let i=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},u=!1,g=!1,h=!0,_=!1,w=!1,S,U=(Ve=history.state)==null?void 0:Ve[B];U||(U=Date.now(),history.replaceState({...history.state,[B]:U},"",location.href));const D=te[U];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let V=!1,T,Ie,ne;async function $e(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),f=ge(a,!0);i=null,await je(f,a,[])}async function de(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:s=!1,state:c={}},d,m){return typeof a=="string"&&(a=new URL(a,Fe(document))),_e({url:a,scroll:f?Ee():null,keepfocus:s,redirect_chain:d,details:{state:c,replaceState:p},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const f=ge(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i={id:f.id,promise:Pe(f)},i.promise}async function je(a,f,p,s,c={},d){var k,E;Ie=c;let m=a&&await Pe(a);if(m||(m=await De(f,null,ee(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Ie!==c)return!1;if(m.type==="redirect")if(p.length>10||p.includes(f.pathname))m=await re({status:500,error:ee(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return de(new URL(m.location,f).href,{},[...p,f.pathname],c),!1;else((E=(k=m.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await ae(f);if(o.length=0,w=!1,_=!0,s&&s.details){const{details:b}=s,v=b.replaceState?0:1;b.state[B]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",f)}if(i=null,g){n=m.state,m.props.page&&(m.props.page.url=f);const b=ie();S.$set(m.props),b()}else Ae(m);if(s){const{scroll:b,keepfocus:v}=s;if(!v){const O=document.body,$=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),$!==null?O.setAttribute("tabindex",$):O.removeAttribute("tabindex")}if(await Ce(),h){const O=f.hash&&document.getElementById(f.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();h=!0,m.props.page&&(T=m.props.page),d&&d(),_=!1}function Ae(a){var c,d;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),T=a.props.page;const p=ie();S=new Ot({target:r,props:{...a.props,stores:K},hydrate:!0}),p();const s={from:null,to:se("to",{params:n.params,routeId:(d=(c=n.route)==null?void 0:c.id)!=null?d:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(m=>m(s)),g=!0}async function Z({url:a,params:f,branch:p,status:s,error:c,route:d,form:m}){var $;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:d},props:{components:k.map(L=>L.node.component)}};m!==void 0&&(E.props.form=m);let b={},v=!T;for(let L=0;L<k.length;L+=1){const N=k[L];b={...b,...N.data},(v||!n.branch.some(P=>P===N))&&(E.props[`data_${L}`]=b,v=v||Object.keys(($=N.data)!=null?$:{}).length>0)}if(v||(v=Object.keys(T.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==c||m!==void 0||v){E.props.page={error:c,params:f,routeId:d&&d.id,status:s,url:a,form:m,data:v?b:T.data};const L=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function he({loader:a,parent:f,url:p,params:s,routeId:c,server_data_node:d}){var b,v,O,$,L;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let N=function(...I){for(const y of I){const{href:R}=new URL(y,p);k.dependencies.add(R)}};const P={routeId:c,params:new Proxy(s,{get:(I,y)=>(k.params.add(y),I[y])}),data:(v=d==null?void 0:d.data)!=null?v:null,url:ut(p,()=>{k.url=!0}),async fetch(I,y){let R;I instanceof Request?(R=I.url,y={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...y}):R=I;const A=new URL(R,p).href;return N(A),g?mt(A,y):ht(R,A,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,f()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(O=await E.shared.load.call(null,P))!=null?O:null,m=m?await Nt(m):null}return{node:E,loader:a,server:d,shared:($=E.shared)!=null&&$.load?{type:"data",data:m,uses:k}:null,data:(L=m!=null?m:d==null?void 0:d.data)!=null?L:null}}function Ne(a,f,p,s){if(w)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(s[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(d=>d(new URL(c))))return!0;return!1}function me(a,f){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Pe({id:a,invalidating:f,url:p,params:s,route:c}){var I;if((i==null?void 0:i.id)===a)return i.promise;const{errors:d,layouts:m,leaf:k}=c,E=[...m,k];d.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=E.reduce((y,R,A)=>{var Q;const j=n.branch[A],z=!!(R!=null&&R[0])&&((j==null?void 0:j.loader)!==R[1]||Ne(v,y.some(Boolean),(Q=j.server)==null?void 0:Q.uses,s));return y.push(z),y},[]);if(O.some(Boolean)){try{b=await ze(p,O)}catch(y){return re({status:500,error:ee(y,{url:p,params:s,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const $=b==null?void 0:b.nodes;let L=!1;const N=E.map(async(y,R)=>{var Q;if(!y)return;const A=n.branch[R],j=$==null?void 0:$[R];if((!j||j.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!Ne(v,L,(Q=A.shared)==null?void 0:Q.uses,s))return A;if(L=!0,(j==null?void 0:j.type)==="error")throw j;return he({loader:y[1],url:p,params:s,routeId:c.id,parent:async()=>{var Be;const qe={};for(let ye=0;ye<R;ye+=1)Object.assign(qe,(Be=await N[ye])==null?void 0:Be.data);return qe},server_data_node:me(j===void 0&&y[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<E.length;y+=1)if(E[y])try{P.push(await N[y])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let A=500,j;$!=null&&$.includes(R)?(A=(I=R.status)!=null?I:A,j=R.error):R instanceof ke?(A=R.status,j=R.body):j=ee(R,{params:s,url:p,routeId:c.id});const z=await Ue(y,P,d);return z?await Z({url:p,params:s,branch:P.slice(0,z.idx).concat(z.node),status:A,error:j,route:c}):await De(p,c.id,j,A)}else P.push(void 0);return await Z({url:p,params:s,branch:P,status:200,error:null,route:c,form:f?void 0:null})}async function Ue(a,f,p){for(;a--;)if(p[a]){let s=a;for(;!f[s];)s-=1;try{return{idx:s+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function re({status:a,error:f,url:p,routeId:s}){var b;const c={},d=await Re();let m=null;if(d.server)try{const v=await ze(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;m=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||u)&&await ae(p)}const k=await he({loader:Re,url:p,params:c,routeId:s,parent:()=>Promise.resolve({}),server_data_node:me(m)}),E={node:await Se(),loader:Se,shared:null,server:null,data:null};return await Z({url:p,params:c,branch:[k,E],status:a,error:f,route:null})}function ge(a,f){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of oe){const c=s.exec(p);if(c){const d=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:d.pathname+d.search,invalidating:f,route:s,params:ct(c),url:d}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function _e({url:a,scroll:f,keepfocus:p,redirect_chain:s,details:c,type:d,delta:m,nav_token:k,accepted:E,blocked:b}){var N,P,I,y;let v=!1;const O=ge(a,!1),$={from:se("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:se("to",{params:(I=O==null?void 0:O.params)!=null?I:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:a}),type:d};m!==void 0&&($.delta=m);const L={...$,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(L)),v){b();return}be(U),E(),g&&K.navigating.set($),await je(O,a,s,{scroll:f,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R($)),K.navigating.set(null)})}async function De(a,f,p,s){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await re({status:s,error:p,url:a,routeId:f}):await ae(a)}function ae(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ve(()=>(l.after_navigate.push(a),()=>{const f=l.after_navigate.indexOf(a);l.after_navigate.splice(f,1)}))},before_navigate:a=>{ve(()=>(l.before_navigate.push(a),()=>{const f=l.before_navigate.indexOf(a);l.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(_||!g)&&(h=!1)},goto:(a,f={})=>de(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:f}=new URL(a,location.href);o.push(p=>p.href===f)}return $e()},invalidateAll:()=>(w=!0,$e()),prefetch:async a=>{const f=new URL(a,Fe(document));await Le(f)},prefetch_routes:async a=>{const p=(a?oe.filter(s=>a.some(c=>s.exec(c))):oe).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:s}=n;if(!s)return;const c=await Ue(n.branch.length,p,s.errors);if(c){const d=await Z({url:f,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:s});n=d.state;const m=ie();S.$set(d.props),m()}}else if(a.type==="redirect")de(a.location,{},[]);else{const f={form:a.data,page:{...T,form:a.data,status:a.status}},p=ie();S.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,k;let c=!1;const d={from:se("from",{params:n.params,routeId:(k=(m=n.route)==null?void 0:m.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(d)),c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(U);try{sessionStorage[He]=JSON.stringify(te)}catch{}}});const a=s=>{const{url:c,options:d}=Je(s);if(c&&d.prefetch){if(Te(c))return;Le(c)}};let f;const p=s=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=s.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:d,options:m}=Je(s);if(!c||!d)return;const k=c instanceof SVGAElement;if(!k&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||m.reload||(k?c.target.baseVal:c.target))return;const[b,v]=d.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){V=!0,be(U),n.url=d,K.page.set({...T,url:d}),K.page.notify();return}_e({url:d,scroll:m.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===U)return;const c=s.state[B]-U;_e({url:new URL(location.href),scroll:te[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=s.state[B]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[B]:++U},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:s,routeId:c,data:d,form:m})=>{var b;u=!0;const k=new URL(location.href);let E;try{const v=p.map(async(O,$)=>{const L=d[$];return he({loader:pe[O],url:k,params:s,routeId:c,parent:async()=>{const N={};for(let P=0;P<$;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:me(L)})});E=await Z({url:k,params:s,branch:await Promise.all(v),status:a,error:f,form:m,route:(b=oe.find(O=>O.id===c))!=null?b:null})}catch(v){if(v instanceof Me){await ae(new URL(v.location,location.href));return}E=await re({status:v instanceof ke?v.status:500,error:ee(v,{url:k,params:s,routeId:c}),url:k,routeId:c})}Ae(E)}}}async function ze(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+At;const o=await ue(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),i=await o.text();if(!o.ok)throw new Error(JSON.parse(i));return Bt(i)}function ee(r,e){var t;return r instanceof ke?r.body:(t=jt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ft=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(r,e){for(const t of Ft)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ie(){return()=>{}}async function zt({env:r,hydrate:e,paths:t,target:o,trailing_slash:i}){it(t);const l=Ct({target:o,base:t.base,trailing_slash:i});st({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{zt as start};
