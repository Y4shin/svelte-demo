import{S as Q,i as R,s as X,a as S,e as T,c as y,b as V,t as _,d as A,f as h,h as m,o as Y,v as I,w as D,x as N,y as F,k as b,q as H,l as v,m as k,r as P,I as g,H as U,n as E,J as Z,g as C,u as W,N as ee}from"../../../../chunks/index-e0c3bc23.js";import{S as te,B as O}from"../../../../chunks/sidemargincontainer-3e06a851.js";import{P as z,I as re}from"../../../../chunks/IoIosWarning-fa21cdef.js";import{N as G}from"../../../../chunks/next-79a9414b.js";import{M as se}from"../../../../chunks/modal-01a6fc60.js";import{b as le,p as ae}from"../../../../chunks/stores-fc531b9e.js";import{a as ne}from"../../../../chunks/fetchDisplayData-f56c65a2.js";import{E as oe}from"../../../../chunks/errorpage-d41fb4bf.js";import"../../../../chunks/IconBase-a7e75a12.js";/* empty css                                                                */import"../../../../chunks/index-ceed3e71.js";import"../../../../chunks/db-62561612.js";function j(u,e,s){const r=u.slice();return r[8]=e[s],r[10]=s,r}function ie(u){let e,s;return e=new te({props:{$$slots:{title:[pe],default:[me]},$$scope:{ctx:u}}}),{c(){I(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,t){N(e,r,t),s=!0},p(r,t){const a={};t&2060&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){s||(h(e.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),s=!1},d(r){F(e,r)}}}function fe(u){let e,s;return e=new oe({props:{title:u[0].title,description:u[0].description}}),{c(){I(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,t){N(e,r,t),s=!0},p(r,t){const a={};t&1&&(a.title=r[0].title),t&1&&(a.description=r[0].description),e.$set(a)},i(r){s||(h(e.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),s=!1},d(r){F(e,r)}}}function J(u){let e,s,r;return s=new O({props:{borderColor:{lgt:"border-sec-war-lgt",drk:"dark:border-sec-war-drk"},padding:{type:"axis",yValue:1,xValue:2},$$slots:{default:[ce]},$$scope:{ctx:u}}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=k(e);D(s.$$.fragment,a),a.forEach(m),this.h()},h(){E(e,"class","flex flex-row justify-evenly items-center mt-2")},m(t,a){V(t,e,a),N(s,e,null),r=!0},p(t,a){const l={};a&2052&&(l.$$scope={dirty:a,ctx:t}),s.$set(l)},i(t){r||(h(s.$$.fragment,t),r=!0)},o(t){_(s.$$.fragment,t),r=!1},d(t){t&&m(e),F(s)}}}function ce(u){let e,s,r,t,a,l=u[2].feedback.warning+"",n,i;return r=new re({}),{c(){e=b("div"),s=b("div"),I(r.$$.fragment),t=S(),a=b("span"),n=H(l),this.h()},l(o){e=v(o,"DIV",{class:!0});var c=k(e);s=v(c,"DIV",{class:!0});var d=k(s);D(r.$$.fragment,d),d.forEach(m),t=y(c),a=v(c,"SPAN",{class:!0});var w=k(a);n=P(w,l),w.forEach(m),c.forEach(m),this.h()},h(){E(s,"class","w-8 h-8 "),E(a,"class","text-lg text-center my-auto"),E(e,"class","flex flex-row gap-4 rounded-2xl text-sec-war-lgt dark:text-sec-war-drk")},m(o,c){V(o,e,c),g(e,s),N(r,s,null),g(e,t),g(e,a),g(a,n),i=!0},p(o,c){(!i||c&4)&&l!==(l=o[2].feedback.warning+"")&&W(n,l)},i(o){i||(h(r.$$.fragment,o),i=!0)},o(o){_(r.$$.fragment,o),i=!1},d(o){o&&m(e),F(r)}}}function ue(u){let e,s,r,t,a,l,n,i,o,c,d,w;l=new z({props:{value:u[2].feedback.progress.current,maxValue:u[2].feedback.progress.total,title:"Fortschritt"}}),o=new G({}),o.$on("press",u[5]);let $=u[2].feedback.warning&&J(u);return{c(){e=b("h2"),s=H("Feedback"),r=S(),t=b("div"),a=b("div"),I(l.$$.fragment),n=S(),i=b("div"),I(o.$$.fragment),c=S(),$&&$.c(),d=T(),this.h()},l(f){e=v(f,"H2",{class:!0});var p=k(e);s=P(p,"Feedback"),p.forEach(m),r=y(f),t=v(f,"DIV",{class:!0});var x=k(t);a=v(x,"DIV",{class:!0});var B=k(a);D(l.$$.fragment,B),B.forEach(m),n=y(x),i=v(x,"DIV",{});var M=k(i);D(o.$$.fragment,M),M.forEach(m),x.forEach(m),c=y(f),$&&$.l(f),d=T(),this.h()},h(){E(e,"class","text-center text-2xl mb-2"),E(a,"class","grow"),E(t,"class","flex flex-row gap-4 items-center")},m(f,p){V(f,e,p),g(e,s),V(f,r,p),V(f,t,p),g(t,a),N(l,a,null),g(t,n),g(t,i),N(o,i,null),V(f,c,p),$&&$.m(f,p),V(f,d,p),w=!0},p(f,p){const x={};p&4&&(x.value=f[2].feedback.progress.current),p&4&&(x.maxValue=f[2].feedback.progress.total),l.$set(x),f[2].feedback.warning?$?($.p(f,p),p&4&&h($,1)):($=J(f),$.c(),h($,1),$.m(d.parentNode,d)):$&&(C(),_($,1,1,()=>{$=null}),A())},i(f){w||(h(l.$$.fragment,f),h(o.$$.fragment,f),h($),w=!0)},o(f){_(l.$$.fragment,f),_(o.$$.fragment,f),_($),w=!1},d(f){f&&m(e),f&&m(r),f&&m(t),F(l),F(o),f&&m(c),$&&$.d(f),f&&m(d)}}}function K(u){let e,s,r=u[8].name+"",t,a,l,n,i,o,c,d,w,$;return i=new z({props:{value:u[8].progress.current,maxValue:u[8].progress.total,title:"Fortschritt"}}),d=new G({props:{href:`/course/${u[2].id}/lesson/${u[8].slug}`}}),{c(){e=b("div"),s=b("h2"),t=H(r),a=S(),l=b("div"),n=b("div"),I(i.$$.fragment),o=S(),c=b("div"),I(d.$$.fragment),w=S(),this.h()},l(f){e=v(f,"DIV",{class:!0});var p=k(e);s=v(p,"H2",{class:!0});var x=k(s);t=P(x,r),x.forEach(m),a=y(p),l=v(p,"DIV",{class:!0});var B=k(l);n=v(B,"DIV",{class:!0});var M=k(n);D(i.$$.fragment,M),M.forEach(m),o=y(B),c=v(B,"DIV",{});var q=k(c);D(d.$$.fragment,q),q.forEach(m),B.forEach(m),w=y(p),p.forEach(m),this.h()},h(){E(s,"class","text-center text-2xl mb-2"),E(n,"class","grow"),E(l,"class","flex flex-row gap-4 items-center"),E(e,"class","p-4 "+(u[10]!==0?"border-t-2 border-luh-bdr-lgt dark:border-luh-bdr-drk":""))},m(f,p){V(f,e,p),g(e,s),g(s,t),g(e,a),g(e,l),g(l,n),N(i,n,null),g(l,o),g(l,c),N(d,c,null),g(e,w),$=!0},p(f,p){(!$||p&4)&&r!==(r=f[8].name+"")&&W(t,r);const x={};p&4&&(x.value=f[8].progress.current),p&4&&(x.maxValue=f[8].progress.total),i.$set(x);const B={};p&4&&(B.href=`/course/${f[2].id}/lesson/${f[8].slug}`),d.$set(B)},i(f){$||(h(i.$$.fragment,f),h(d.$$.fragment,f),$=!0)},o(f){_(i.$$.fragment,f),_(d.$$.fragment,f),$=!1},d(f){f&&m(e),F(i),F(d)}}}function de(u){let e,s,r=u[2].lessons,t=[];for(let l=0;l<r.length;l+=1)t[l]=K(j(u,r,l));const a=l=>_(t[l],1,1,()=>{t[l]=null});return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var n=k(e);for(let i=0;i<t.length;i+=1)t[i].l(n);n.forEach(m),this.h()},h(){E(e,"class","flex flex-col")},m(l,n){V(l,e,n);for(let i=0;i<t.length;i+=1)t[i].m(e,null);s=!0},p(l,n){if(n&4){r=l[2].lessons;let i;for(i=0;i<r.length;i+=1){const o=j(l,r,i);t[i]?(t[i].p(o,n),h(t[i],1)):(t[i]=K(o),t[i].c(),h(t[i],1),t[i].m(e,null))}for(C(),i=r.length;i<t.length;i+=1)a(i);A()}},i(l){if(!s){for(let n=0;n<r.length;n+=1)h(t[n]);s=!0}},o(l){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)_(t[n]);s=!1},d(l){l&&m(e),ee(t,l)}}}function me(u){let e,s,r,t,a;return s=new O({props:{margin:{type:"directional",topValue:4,bottomValue:12,rightValue:0,leftValue:0},$$slots:{default:[ue]},$$scope:{ctx:u}}}),t=new O({props:{margin:{type:"axis",xValue:0,yValue:4},padding:{type:"global",value:0},$$slots:{default:[de]},$$scope:{ctx:u}}}),{c(){e=b("div"),I(s.$$.fragment),r=S(),I(t.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=k(e);D(s.$$.fragment,n),r=y(n),D(t.$$.fragment,n),n.forEach(m),this.h()},h(){E(e,"class","flex flex-col gap-4")},m(l,n){V(l,e,n),N(s,e,null),g(e,r),N(t,e,null),a=!0},p(l,n){const i={};n&2060&&(i.$$scope={dirty:n,ctx:l}),s.$set(i);const o={};n&2052&&(o.$$scope={dirty:n,ctx:l}),t.$set(o)},i(l){a||(h(s.$$.fragment,l),h(t.$$.fragment,l),a=!0)},o(l){_(s.$$.fragment,l),_(t.$$.fragment,l),a=!1},d(l){l&&m(e),F(s),F(t)}}}function pe(u){let e,s=u[2].title+"",r;return{c(){e=b("h1"),r=H(s),this.h()},l(t){e=v(t,"H1",{class:!0});var a=k(e);r=P(a,s),a.forEach(m),this.h()},h(){E(e,"class","text-center text-2xl my-4")},m(t,a){V(t,e,a),g(e,r)},p(t,a){a&4&&s!==(s=t[2].title+"")&&W(r,s)},d(t){t&&m(e)}}}function L(u){let e,s;return e=new se({props:{$$slots:{customButton:[he],default:[$e]},$$scope:{ctx:u}}}),e.$on("close",u[7]),{c(){I(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,t){N(e,r,t),s=!0},p(r,t){const a={};t&2056&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){s||(h(e.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),s=!1},d(r){F(e,r)}}}function $e(u){let e,s;return{c(){e=b("p"),s=H(`Das detailierte Feedback ist in dieser Version der App noch nicht verf\xFCgbar. Wir bitten um
			Verst\xE4ndnis.`)},l(r){e=v(r,"P",{});var t=k(e);s=P(t,`Das detailierte Feedback ist in dieser Version der App noch nicht verf\xFCgbar. Wir bitten um
			Verst\xE4ndnis.`),t.forEach(m)},m(r,t){V(r,e,t),g(e,s)},p:U,d(r){r&&m(e)}}}function he(u){let e,s,r,t;return{c(){e=b("button"),s=H("Ok"),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var l=k(e);s=P(l,"Ok"),l.forEach(m),this.h()},h(){E(e,"class","text-text-on-acc-lgt dark:text-text-drk bg-luh-acc-lgt dark:bg-luh-acc-drk hover:bg-luh-acc-hgl-lgt hover:dark:bg-luh-acc-hgl-drk rounded-2xl border border-luh-bdr-lgt dark:border-luh-bdr-drk text-sm font-medium px-5 py-2.5")},m(a,l){V(a,e,l),g(e,s),r||(t=Z(e,"click",u[6]),r=!0)},p:U,d(a){a&&m(e),r=!1,t()}}}function ge(u){let e,s,r,t,a;const l=[fe,ie],n=[];function i(c,d){return c[0]?0:c[1]?1:-1}~(e=i(u))&&(s=n[e]=l[e](u));let o=u[3]&&L(u);return{c(){s&&s.c(),r=S(),o&&o.c(),t=T()},l(c){s&&s.l(c),r=y(c),o&&o.l(c),t=T()},m(c,d){~e&&n[e].m(c,d),V(c,r,d),o&&o.m(c,d),V(c,t,d),a=!0},p(c,[d]){let w=e;e=i(c),e===w?~e&&n[e].p(c,d):(s&&(C(),_(n[w],1,1,()=>{n[w]=null}),A()),~e?(s=n[e],s?s.p(c,d):(s=n[e]=l[e](c),s.c()),h(s,1),s.m(r.parentNode,r)):s=null),c[3]?o?(o.p(c,d),d&8&&h(o,1)):(o=L(c),o.c(),h(o,1),o.m(t.parentNode,t)):o&&(C(),_(o,1,1,()=>{o=null}),A())},i(c){a||(h(s),h(o),a=!0)},o(c){_(s),_(o),a=!1},d(c){~e&&n[e].d(c),c&&m(r),o&&o.d(c),c&&m(t)}}}function _e(u,e,s){let r=null,t=!1,a,l=!1,{data:n}=e;Y(async()=>{le.set("/course");const d=await ne(n.courseslug);if(d.type==="error"){s(0,r={title:d.error.title,description:d.error.description}),s(1,t=!1);return}s(2,a=d.course),ae.set([{label:"Home",href:"/"},{label:"Kurse",href:"/course"},{label:a.shortTitle?a.shortTitle:a.title}]),s(1,t=!0)});const i=()=>{s(3,l=!0)},o=()=>{s(3,l=!1)},c=()=>{s(3,l=!1)};return u.$$set=d=>{"data"in d&&s(4,n=d.data)},[r,t,a,l,n,i,o,c]}class Se extends Q{constructor(e){super(),R(this,e,_e,ge,X,{data:4})}}export{Se as default};