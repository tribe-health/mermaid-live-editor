var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e},c=(e,o)=>t(e,a(o));import{a7 as l,a8 as d,C as u,a9 as p,$ as m,aa as f,ab as g,S as h,i as y,s as w,e as v,c as b,a as S,d as O,b as E,Q as j,f as L,E as D,J as T,I as _,A as $,a5 as x,a6 as C,L as I,ac as J}from"./vendor-a49b420c.js";import{_ as P}from"./preload-helper-1db36302.js";import{i as k}from"./loading-f97034da.js";let A;let N;const R={code:"graph TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]\n  ",mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0},V=l(u(R),d(),"codeStore"),H=p([V],(([e],t)=>{t(m(JSON.stringify(e),!0))})),U=e=>{V.update((t=>n(n({},t),e)))};let G=!1;const B=(e,t,a=!1)=>{var o;o=e,A&&(clearTimeout(N),N=setTimeout((function(){const e=o.replace(/^\s*%%.*\n/g,"\n").trimStart().split(" ")[0];console.debug("ga:","send","event","render",e),A.track("render",{graphType:e})}),5e3));if((e.match(/\n/g)||"").length+1>50&&!G&&f(V).autoSync){const e=confirm("Long diagram deteced. Turn off Auto Sync? Click the sync logo to manually sync.");G=!0,e&&U({autoSync:!1})}V.update((o=>c(n({},o),{code:e,updateEditor:t,updateDiagram:a})))},M=(e,t)=>{V.update((a=>c(n({},a),{mermaid:e,updateEditor:t})))},z=()=>JSON.stringify(f(V)),F=u(void 0);function Q(e){let t,a;return{c(){t=v("div"),a=v("div"),this.h()},l(e){t=b(e,"DIV",{id:!0,class:!0});var o=S(t);a=b(o,"DIV",{id:!0,class:!0}),S(a).forEach(O),o.forEach(O),this.h()},h(){E(a,"id","container"),E(a,"class","flex-1 overflow-auto"),E(t,"id","view"),E(t,"class","p-2 svelte-5ndy2s"),j(t,"error",e[1]),j(t,"outOfSync",e[2])},m(o,r){L(o,t,r),D(t,a),e[3](a)},p(e,[a]){2&a&&j(t,"error",e[1]),4&a&&j(t,"outOfSync",e[2])},i:T,o:T,d(a){a&&O(t),e[3](null)}}}function q(e,t,a){let o;_(e,V,(e=>a(7,o=e)));let r,i="",s="",n=!1,c=!1,l=!0;return $((()=>{V.subscribe((e=>{try{if(r&&e&&(e.updateDiagram||e.autoSync)){if(e.autoSync||x(V,o.updateDiagram=!1,o),a(2,c=!1),l=!0,i===e.code&&s===e.mermaid)return;i=e.code,s=e.mermaid;const t=r.parentElement.parentElement.parentElement.scrollTop;delete r.dataset.processed,C.initialize(Object.assign({},JSON.parse(e.mermaid))),C.render("graph-div",i,(e=>{a(0,r.innerHTML=e,r)})),a(0,r.parentElement.parentElement.parentElement.scrollTop=t,r),a(1,n=!1)}else l?l=!1:a(2,c=!0)}catch(t){console.log("view fail",t),a(1,n=!0)}})),F.subscribe((e=>{void 0===e?a(1,n=!1):(a(1,n=!0),console.log("Error: ",e))}))})),[r,n,c,function(e){I[e?"unshift":"push"]((()=>{r=e,a(0,r)}))}]}class K extends h{constructor(e){super(),y(this,e,q,Q,w,{})}}const W=l(u("manual"),d(),"autoHistoryMode"),X=l(u([]),d(),"autoHistoryStore"),Y=l(u([]),d(),"manualHistoryStore"),Z=u([]),ee=p([W,X,Y,Z],(([e,t,a,o],r)=>{r("auto"===e?t:"manual"===e?a:"loader"===e?o:t)})),te=e=>{"loader"!==e.type?(e.name=J(2),"auto"===e.type?X.update((t=>(30===t.length&&t.pop(),[e,...t]))):Y.update((t=>[e,...t]))):Z.update((t=>[e,...t]))},ae=e=>{("auto"===f(W)?X:Y).update((t=>("loader"!==f(W)&&(t=t.filter((t=>e&&t.time!=e))),t)))},oe=e=>{const t=f(e?X:Y);return t.length>0?JSON.stringify(t[0].state):""},re=async e=>e.truncated?await(await fetch(e.raw_url)).text():e.content,ie=async e=>{const[t,a,o,r]=e.split("github.com").pop().split("/"),{html_url:i,files:s,history:n}=await(await fetch(`https://api.github.com/gists/${o}${r?"/"+r:""}`)).json();if((e=>"code.mmd"in e)(s)){const e=await re(s["code.mmd"]);let t;"config.json"in s&&(t=await re(s["config.json"]));const a=n[0];return{url:`${i}/${a.version}`,code:e,config:t,author:a.user.login,time:new Date(a.committed_at).getTime(),version:a.version.slice(-7)}}throw"Invalid gist provided"},se=(e,t=e.url)=>{const a=c(n({},R),{code:e.code,loader:{type:"gist",config:{url:t}}});return e.config&&(a.mermaid=e.config),a},ne={gist:async e=>{try{const[t,a,o,r]=e.split("github.com").pop().split("/"),{history:i}=await(await fetch(`https://api.github.com/gists/${o}${r?"/"+r:""}`)).json(),s=[];for(const e of i){const t=await ie(e.url).catch((()=>{}));t&&s.push(t)}if(0===s.length)throw"Invalid gist provided";s.reverse();const n=se(s.slice(-1).pop(),e);for(const e of s)te({state:se(e),time:e.time,type:"loader",url:e.url,name:`${e.author} v${e.version}`});return n}catch(t){console.error(t)}}},ce=()=>{(e=>{let t;try{const a=g(e);console.log(`Tring to load state: ${a}`),t=JSON.parse(a);const o="string"==typeof t.mermaid?JSON.parse(t.mermaid):t.mermaid;o.securityLevel&&"strict"!==o.securityLevel&&confirm(`Removing "securityLevel":"${o.securityLevel}" from the config for safety.\nClick Cancel if you trust the source of this Diagram.`)&&delete o.securityLevel,t.mermaid=JSON.stringify(o,null,2)}catch(a){e&&console.error("Init error",a),t=f(V),console.log(t)}U(c(n({},t),{updateEditor:!0}))})(window.location.hash.slice(1))},le=()=>{U({updateDiagram:!0})},de=async()=>{ce(),await k("Loading Gist...",(async()=>{const e=new URLSearchParams(window.location.search);let t,a,o=R,r=!1;const i=e.get("code"),s=e.get("config");if(i&&(t=await(await fetch(i)).text(),r=!0),a=s?await(await fetch(s)).text():R.mermaid,t)o={code:t,mermaid:a,loader:{type:"files",config:{codeURL:i,configURL:s}}};else for(const[n,c]of e.entries())if(n in ne)try{o=await ne[n](c),r=!0;break}catch(l){console.error(l)}r&&U(c(n({},o),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))})().catch(console.error)),le(),H.subscribe((e=>{history.replaceState(void 0,void 0,`#${e}`)})),await(async()=>{if(!A)try{const{Analytics:e}=await P((()=>import("./analytics.browser.es-afad5c8e.js")),[]),t=await P((()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js")),[]);A=e({app:"mermaid-live-editor",plugins:[t.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}})(),null==A||A.page()};export{K as V,A as a,ee as b,V as c,oe as d,te as e,ae as f,z as g,W as h,H as i,F as j,de as k,Z as l,M as m,le as s,B as u};
