import{S as h,i as g,s as L,R as q,V as v,W as y,X as p,f as M,t as w,o as E}from"./index-e0c3bc23.js";const S=s=>({matches:s&1}),_=s=>({matches:s[0]});function b(s){let n;const a=s[4].default,t=q(a,s,s[3],_);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,r){t&&t.m(e,r),n=!0},p(e,[r]){t&&t.p&&(!n||r&9)&&v(t,a,e,e[3],n?p(a,e[3],r,S):y(e[3]),_)},i(e){n||(M(t,e),n=!0)},o(e){w(t,e),n=!1},d(e){t&&t.d(e)}}}function A(s,n,a){let{$$slots:t={},$$scope:e}=n,{query:r}=n,o,i,c=!1,l=!1;E(()=>(a(2,c=!0),()=>{f()}));function m(u){o=window.matchMedia(u),i=d=>a(0,l=d.matches),o.addEventListener?o.addEventListener("change",i):o.addListener(i),a(0,l=o.matches)}function f(){o&&i&&(o.removeEventListener?o.removeEventListener("change",i):o.removeListener(i))}return s.$$set=u=>{"query"in u&&a(1,r=u.query),"$$scope"in u&&a(3,e=u.$$scope)},s.$$.update=()=>{s.$$.dirty&6&&c&&(f(),m(r))},[l,r,c,e,t]}class N extends h{constructor(n){super(),g(this,n,A,b,L,{query:1})}}export{N as M};
