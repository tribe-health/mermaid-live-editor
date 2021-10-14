var S=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))v.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))C.call(e,s)&&u(t,s,e[s]);return t},o=(t,e)=>b(t,k(e));import{C as m,J as L,K as O,L as _,M as N,N as l,O as T}from"./vendor-77f1dd11.js";import{_ as g}from"./preload-helper-1db36302.js";const D={loading:!1},f=m(D),B=async(t,e)=>{f.set({loading:!0,message:t});const s=await e;return f.set({loading:!1}),s};let n;const G=async()=>{if(!n)try{const{Analytics:t}=await g(()=>import("./analytics.browser.es-b9bb2b82.js"),[]),e=await g(()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js"),[]);n=t({app:"mermaid-live-editor",plugins:[e.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}},J=t=>t.replace(/^\s*%%.*\n/g,`
`).trimStart().split(" ")[0];let p;const w=t=>{n&&(clearTimeout(p),p=setTimeout(function(){const e=J(t);console.debug("ga:","send","event","render",e),n.track("render",{graphType:e})},5e3))},A={code:`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `,mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0},E=`graph TD
    A[Loading URL failed. We can try to figure out why.] -->|Decode JSON| B(Please check the console to see the JSON and error details.)
    B --> C{Is the JSON correct?}
    C -->|Yes| D(Please Click here to Raise an issue in github.<br/>Including the broken link in the issue <br/> will speed up the fix.)
    C -->|No| E{Did someone <br/>send you this link?}
    E -->|Yes| F[Ask them to send <br/>you the complete link]
    E -->|No| G{Did you copy <br/> the complete URL?}
    G --> |Yes| D
    G --> |"No :("| H(Try using the Timeline tab in History <br/>from same browser you used to create the diagram.)
    click D href "https://github.com/mermaid-js/mermaid-live-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title=Broken%20link" "Raise issue"`,a=L(m(A),O(),"codeStore"),R=_([a],([t],e)=>{e(N(JSON.stringify(t),!0))}),U=t=>{let e;try{const s=T(t);console.log(`Trying to load state: ${s}`),e=JSON.parse(s);const r=typeof e.mermaid=="string"?JSON.parse(e.mermaid):e.mermaid;r.securityLevel&&r.securityLevel!=="strict"&&confirm(`Removing "securityLevel":"${r.securityLevel}" from the config for safety.
Click Cancel if you trust the source of this Diagram.`)&&delete r.securityLevel,e.mermaid=JSON.stringify(r,null,2)}catch(s){e=l(a),t&&(console.error("Init error",s),e.code=E)}y(o(i({},e),{updateEditor:!0}))},y=t=>{a.update(e=>i(i({},e),t))};let h=!1;const F=(t,e,s=!1)=>{if(w(t),(t.match(/\n/g)||"").length+1>50&&!h&&l(a).autoSync){const c=confirm("Long diagram detected. Turn off Auto Sync? Click the sync logo to manually sync.");h=!0,c&&y({autoSync:!1})}a.update(c=>o(i({},c),{code:t,updateEditor:e,updateDiagram:s}))},Y=(t,e)=>{a.update(s=>o(i({},s),{mermaid:t,updateEditor:e}))},$=t=>{a.update(e=>{const s=JSON.parse(e.mermaid);return(!s.theme||["dark","default"].includes(s.theme))&&(s.theme=t?"dark":"default"),o(i({},e),{mermaid:JSON.stringify(s,null,2),updateEditor:!0})})},x=()=>{R.subscribe(t=>{history.replaceState(void 0,void 0,`#${t}`)})},H=()=>JSON.stringify(l(a));export{n as a,R as b,a as c,Y as d,A as e,y as f,H as g,x as h,B as i,G as j,U as k,f as l,$ as t,F as u};
