function g(){}const Q=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function J(){return Object.create(null)}function E(t){t.forEach(U)}function H(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ot(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,u){if(s){const r=V(e,n,i,u);t.p(r,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),I=X?t=>requestAnimationFrame(t):g;const v=new Set;function Z(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&I(Z)}function tt(t){let e;return v.size===0&&I(Z),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let z=!1;function pt(){z=!0}function yt(){z=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=l?s+1:gt(1,s,a=>e[n[a]].claim_order,l))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,s=Math.max(f,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const d=l<u.length?u[l]:null;t.insertBefore(r[c],d)}}function xt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return wt(et(t),e),e.sheet}function wt(t,e){xt(t.head||t,e)}function vt(t,e){if(z){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){z&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Et(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Gt(){return W(" ")}function Jt(){return W("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){Nt(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ut(t,e,n){return rt(t,e,n,nt)}function Vt(t,e,n){return rt(t,e,n,kt)}function St(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function Xt(t){return St(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e==null?"":e}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ee(t,e=document.body){return Array.from(e.querySelectorAll(t))}const R=new Map;let T=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return R.set(t,n),n}function O(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const b=e+(n-e)*u(m);l+=m*100+`%{${r(b,1-b)}}
`}const d=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${jt(d)}_${o}`,a=et(t),{stylesheet:h,rules:_}=R.get(a)||Ct(a,t);_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${d}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,T+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),T-=s,T||Mt())}function Mt(){I(()=>{T||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let j;function N(t){j=t}function G(){if(!j)throw new Error("Function called outside component initialization");return j}function ne(t){G().$$.on_mount.push(t)}function ie(t){G().$$.after_update.push(t)}function re(){const t=G();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const u=st(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}const A=[],K=[],q=[],L=[],ct=Promise.resolve();let F=!1;function ot(){F||(F=!0,ct.then(lt))}function se(){return ot(),ct}function C(t){q.push(t)}function ce(t){L.push(t)}const D=new Set;let M=0;function lt(){const t=j;do{for(;M<A.length;){const e=A[M];M++,N(e),qt(e.$$)}for(N(null),A.length=0,M=0;K.length;)K.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];D.has(n)||(D.add(n),n())}q.length=0}while(A.length);for(;L.length;)L.pop()();F=!1,D.clear(),N(t)}function qt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}let k;function ut(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function S(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const P=new Set;let y;function oe(){y={r:0,c:[],p:y}}function le(){y.r||E(y.c),y=y.p}function Pt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),y.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function ae(t,e,n){let i=e(t,n),s=!1,u,r,o=0;function c(){u&&B(t,u)}function l(){const{delay:f=0,duration:a=300,easing:h=Q,tick:_=g,css:p}=i||at;p&&(u=O(t,0,1,a,f,h,p,o++)),_(0,1);const m=Y()+f,b=m+a;r&&r.abort(),s=!0,C(()=>S(t,!0,"start")),r=tt(x=>{if(s){if(x>=b)return _(1,0),S(t,!0,"end"),c(),s=!1;if(x>=m){const $=h((x-m)/a);_($,1-$)}}return s})}let d=!1;return{start(){d||(d=!0,B(t),H(i)?(i=i(),ut().then(l)):l())},invalidate(){d=!1},end(){s&&(c(),s=!1)}}}function fe(t,e,n,i){let s=e(t,n),u=i?0:1,r=null,o=null,c=null;function l(){c&&B(t,c)}function d(a,h){const _=a.b-u;return h*=Math.abs(_),{a:u,b:a.b,d:_,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:_=300,easing:p=Q,tick:m=g,css:b}=s||at,x={start:Y()+h,b:a};a||(x.group=y,y.r+=1),r||o?o=x:(b&&(l(),c=O(t,u,a,_,h,p,b)),a&&m(0,1),r=d(x,_),C(()=>S(t,a,"start")),tt($=>{if(o&&$>o.start&&(r=d(o,_),o=null,S(t,r.b,"start"),b&&(l(),c=O(t,u,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(u=r.b,1-u),S(t,r.b,"end"),o||(r.b?l():--r.group.r||E(r.group.c)),r=null;else if($>=r.start){const ft=$-r.start;u=r.a+r.d*p(ft/r.duration),m(u,1-u)}}return!!(r||o)}))}return{run(a){H(s)?ut().then(()=>{s=s(),f(a)}):f(a)},end(){l(),r=o=null}}}const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _e(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||C(()=>{const c=u.map(U).filter(H);r?r.push(...c):E(c),t.$$.on_mount=[]}),o.forEach(C)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,s,u,r,o=[-1]){const c=j;N(t);const l=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...h)=>{const _=h.length?h[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=_)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](_),d&&zt(t,f)),a}):[],l.update(),d=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const f=At(e.target);l.fragment&&l.fragment.l(f),f.forEach(Et)}else l.fragment&&l.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),yt(),lt()}N(c)}class be{$destroy(){Tt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function xe(t,e=g){let n;const i=new Set;function s(o){if(_t(t,o)&&(t=o,n)){const c=!w.length;for(const l of i)l[1](),w.push(l,t);if(c){for(let l=0;l<w.length;l+=2)w[l][0](w[l+1]);w.length=0}}}function u(o){s(o(t))}function r(o,c=g){const l=[o,c];return i.add(l),i.size===1&&(n=e(s)||g),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:r}}export{Zt as $,xe as A,dt as B,_e as C,he as D,Ht as E,kt as F,Vt as G,g as H,vt as I,Kt as J,C as K,fe as L,re as M,Wt as N,ae as O,K as P,me as Q,Ot as R,be as S,ee as T,ce as U,Lt as V,Ft as W,Bt as X,de as Y,Q as Z,Dt as _,Gt as a,H as a0,E as a1,It as b,Xt as c,le as d,Jt as e,Pt as f,oe as g,Et as h,ge as i,ie as j,nt as k,Ut as l,At as m,Qt as n,ne as o,te as p,W as q,St as r,_t as s,ue as t,Yt as u,pe as v,ye as w,Rt as x,Tt as y,se as z};
