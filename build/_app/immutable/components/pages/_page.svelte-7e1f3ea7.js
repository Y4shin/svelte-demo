import{S as y,i as q,s as z,v,w as k,x as S,f as D,t as w,y as E,k as d,a as A,l as h,m as $,c as I,h as l,n as p,b as m,I as _,q as b,r as x,H}from"../../chunks/index-e0c3bc23.js";import{b as B,p as C}from"../../chunks/stores-fc531b9e.js";import{S as M,B as V}from"../../chunks/sidemargincontainer-3e06a851.js";import"../../chunks/dndmathfraction.svelte_svelte_type_style_lang-90be0157.js";/* empty css                                                          */function N(u){let e,s,t,n,c,a,r,o,g;return{c(){e=d("h2"),s=b("Willkommen in der DEI Lern-App"),t=A(),n=d("p"),c=b(`Starten Sie indem Sie Kurspakete installieren, gehen Sie danach auf das Menu oben rechts und
				w\xE4hlen Sie "Kurse" aus.`),a=A(),r=d("div"),o=d("a"),g=b("Kurspakete Runterladen"),this.h()},l(i){e=h(i,"H2",{class:!0});var f=$(e);s=x(f,"Willkommen in der DEI Lern-App"),f.forEach(l),t=I(i),n=h(i,"P",{class:!0});var K=$(n);c=x(K,`Starten Sie indem Sie Kurspakete installieren, gehen Sie danach auf das Menu oben rechts und
				w\xE4hlen Sie "Kurse" aus.`),K.forEach(l),a=I(i),r=h(i,"DIV",{class:!0});var L=$(r);o=h(L,"A",{href:!0,class:!0});var P=$(o);g=x(P,"Kurspakete Runterladen"),P.forEach(l),L.forEach(l),this.h()},h(){p(e,"class","text-center text-2xl mb-2"),p(n,"class","text-center"),p(o,"href","/bundles"),p(o,"class","bg-luh-acc-lgt dark:bg-luh-acc-drk rounded-2xl border-2 px-2 py-1"),p(r,"class","mt-4 flex justify-around")},m(i,f){m(i,e,f),_(e,s),m(i,t,f),m(i,n,f),_(n,c),m(i,a,f),m(i,r,f),_(r,o),_(o,g)},p:H,d(i){i&&l(e),i&&l(t),i&&l(n),i&&l(a),i&&l(r)}}}function R(u){let e,s;return{c(){e=d("p"),s=b(`Dies ist eine fr\xFChe Version der Lern-App. Damit die App nutzbar ist muss die Datenbank im
				Debug Panel der Einstellungen initialisiert werden. Diese Nachricht verschwindet nicht nach
				der Initialisierung.`),this.h()},l(t){e=h(t,"P",{class:!0});var n=$(e);s=x(n,`Dies ist eine fr\xFChe Version der Lern-App. Damit die App nutzbar ist muss die Datenbank im
				Debug Panel der Einstellungen initialisiert werden. Diese Nachricht verschwindet nicht nach
				der Initialisierung.`),n.forEach(l),this.h()},h(){p(e,"class","text-center")},m(t,n){m(t,e,n),_(e,s)},p:H,d(t){t&&l(e)}}}function W(u){let e,s,t,n,c;return s=new V({props:{$$slots:{default:[N]},$$scope:{ctx:u}}}),n=new V({props:{bgColor:{lgt:"bg-sec-war-lgt",drk:"dark:bg-sec-war-drk"},$$slots:{default:[R]},$$scope:{ctx:u}}}),{c(){e=d("div"),v(s.$$.fragment),t=A(),v(n.$$.fragment),this.h()},l(a){e=h(a,"DIV",{class:!0});var r=$(e);k(s.$$.fragment,r),t=I(r),k(n.$$.fragment,r),r.forEach(l),this.h()},h(){p(e,"class","flex flex-col gap-4")},m(a,r){m(a,e,r),S(s,e,null),_(e,t),S(n,e,null),c=!0},p(a,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:a}),s.$set(o);const g={};r&1&&(g.$$scope={dirty:r,ctx:a}),n.$set(g)},i(a){c||(D(s.$$.fragment,a),D(n.$$.fragment,a),c=!0)},o(a){w(s.$$.fragment,a),w(n.$$.fragment,a),c=!1},d(a){a&&l(e),E(s),E(n)}}}function j(u){let e,s;return{c(){e=d("h1"),s=b("Home"),this.h()},l(t){e=h(t,"H1",{class:!0});var n=$(e);s=x(n,"Home"),n.forEach(l),this.h()},h(){p(e,"class","text-center text-2xl my-4")},m(t,n){m(t,e,n),_(e,s)},p:H,d(t){t&&l(e)}}}function F(u){let e,s;return e=new M({props:{$$slots:{title:[j],default:[W]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){S(e,t,n),s=!0},p(t,[n]){const c={};n&1&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function G(u){return B.set("/"),C.set([{label:"Home"}]),[]}class X extends y{constructor(e){super(),q(this,e,G,F,z,{})}}export{X as default};
