import{S as n,i,s as p,v as m,w as c,x as f,f as u,t as l,y as $,_ as g}from"../../chunks/index-e0c3bc23.js";import{p as _}from"../../chunks/stores-47ddb097.js";import{b,p as d}from"../../chunks/stores-fc531b9e.js";import{E as h}from"../../chunks/errorpage-d41fb4bf.js";import"../../chunks/singletons-f0febded.js";import"../../chunks/sidemargincontainer-3e06a851.js";import"../../chunks/IconBase-a7e75a12.js";/* empty css                                                          */function E(s){let r,t;return r=new h({props:{title:`${s[0].status}`,description:s[0].error.message}}),{c(){m(r.$$.fragment)},l(e){c(r.$$.fragment,e)},m(e,o){f(r,e,o),t=!0},p(e,[o]){const a={};o&1&&(a.title=`${e[0].status}`),o&1&&(a.description=e[0].error.message),r.$set(a)},i(e){t||(u(r.$$.fragment,e),t=!0)},o(e){l(r.$$.fragment,e),t=!1},d(e){$(r,e)}}}function S(s,r,t){let e;return g(s,_,o=>t(0,e=o)),b.set("/"),d.set([{label:"Home",href:"/"},{label:"Error"}]),[e]}class L extends n{constructor(r){super(),i(this,r,S,E,p,{})}}export{L as default};
