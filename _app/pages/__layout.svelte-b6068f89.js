import{S as I,i as w,s as M,D as V,e as u,k as b,t as $,c as d,a as m,d as f,n as k,g as A,b as p,f as v,E as _,h as N,l as y,F as T,G as W,H as q,x,u as z,I as S,A as B}from"../chunks/vendor-77f1dd11.js";import{b as j}from"../chunks/paths-28a87002.js";import{l as C,t as F}from"../chunks/state-dc54cccf.js";import{t as D,s as G}from"../chunks/theme-2b426d04.js";import"../chunks/preload-helper-1db36302.js";function E(n){let o,i,l,r,c,s=n[0].message+"",t;return{c(){o=u("div"),i=u("div"),l=u("div"),r=b(),c=u("div"),t=$(s),this.h()},l(e){o=d(e,"DIV",{class:!0});var a=m(o);i=d(a,"DIV",{class:!0});var h=m(i);l=d(h,"DIV",{class:!0}),m(l).forEach(f),r=k(h),c=d(h,"DIV",{});var g=m(c);t=A(g,s),g.forEach(f),h.forEach(f),a.forEach(f),this.h()},h(){p(l,"class","loader mx-auto svelte-1ub1m40"),p(i,"class","text-indigo-100 text-4xl font-bold my-auto"),p(o,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,a){v(e,o,a),_(o,i),_(i,l),_(i,r),_(i,c),_(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&N(t,s)},d(e){e&&f(o)}}}function H(n){let o,i,l,r;const c=n[2].default,s=V(c,n,n[1],null);let t=n[0].loading&&E(n);return{c(){o=u("main"),s&&s.c(),i=b(),t&&t.c(),l=y(),this.h()},l(e){o=d(e,"MAIN",{class:!0});var a=m(o);s&&s.l(a),a.forEach(f),i=k(e),t&&t.l(e),l=y(),this.h()},h(){p(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,i,a),t&&t.m(e,a),v(e,l,a),r=!0},p(e,[a]){s&&s.p&&(!r||a&2)&&T(s,c,e,e[1],r?q(c,e[1],a,null):W(e[1]),null),e[0].loading?t?t.p(e,a):(t=E(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},i(e){r||(x(s,e),r=!0)},o(e){z(s,e),r=!1},d(e){e&&f(o),s&&s.d(e),e&&f(i),t&&t.d(e),e&&f(l)}}}function R(n,o,i){let l,r;S(n,D,t=>i(3,l=t)),S(n,C,t=>i(0,r=t));let{$$slots:c={},$$scope:s}=o;return B(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${j}/service-worker.js`,{scope:`${j}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;l.theme===void 0&&G(t?"dark":"light"),D.subscribe(({theme:e,isDark:a})=>{e&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",e),F(a))})}),n.$$set=t=>{"$$scope"in t&&i(1,s=t.$$scope)},[r,s,c]}class Q extends I{constructor(o){super();w(this,o,R,H,M,{})}}export{Q as default};
