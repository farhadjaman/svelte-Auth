import{S as O,i as T,s as z,q as B,a as $,e as y,t as I,r as C,f as n,g as x,c as b,b as A,d as N,m as d,h as v,j as E,k as F,u as U,v as G,w as H,x as J,y as K,l as P,n as M,o as Q}from"../chunks/index.ad50d19f.js";import{p as W}from"../chunks/stores.447d0093.js";import{i as X,a as Y,e as Z}from"../chunks/forms.d7b031ff.js";function ee(c){let a,o,r,t,i;return{c(){a=y("a"),o=I("Login"),r=$(),t=y("a"),i=I("Register"),this.h()},l(l){a=b(l,"A",{href:!0});var s=A(a);o=N(s,"Login"),s.forEach(n),r=x(l),t=b(l,"A",{href:!0});var h=A(t);i=N(h,"Register"),h.forEach(n),this.h()},h(){d(a,"href","/login"),d(t,"href","/register")},m(l,s){v(l,a,s),E(a,o),v(l,r,s),v(l,t,s),E(t,i)},p:M,d(l){l&&n(a),l&&n(r),l&&n(t)}}}function te(c){let a,o,r,t,i,l,s,h;return{c(){a=y("a"),o=I("Admin"),r=$(),t=y("form"),i=y("button"),l=I("Log out"),this.h()},l(f){a=b(f,"A",{href:!0});var u=A(a);o=N(u,"Admin"),u.forEach(n),r=x(f),t=b(f,"FORM",{class:!0,action:!0,method:!0});var w=A(t);i=b(w,"BUTTON",{type:!0});var k=A(i);l=N(k,"Log out"),k.forEach(n),w.forEach(n),this.h()},h(){d(a,"href","/admin"),d(i,"type","submit"),d(t,"class","logout"),d(t,"action","/logout"),d(t,"method","post")},m(f,u){v(f,a,u),E(a,o),v(f,r,u),v(f,t,u),E(t,i),E(i,l),s||(h=Q(Z.call(null,t,c[3])),s=!0)},p:M,d(f){f&&n(a),f&&n(r),f&&n(t),s=!1,h()}}}function se(c){var V,j,q;let a,o,r,t=(((q=(j=(V=c[0])==null?void 0:V.data)==null?void 0:j.user)==null?void 0:q.name)??"Svelte Auth")+"",i,l,s,h,f,u;function w(e,p){return e[0].data.user?te:ee}let k=w(c),m=k(c);const R=c[2].default,_=B(R,c,c[1],null);return{c(){a=$(),o=y("nav"),r=y("div"),i=I(t),l=$(),s=y("div"),m.c(),h=$(),f=y("main"),_&&_.c(),this.h()},l(e){C("svelte-ofy2zx",document.head).forEach(n),a=x(e),o=b(e,"NAV",{class:!0});var g=A(o);r=b(g,"DIV",{class:!0});var L=A(r);i=N(L,t),L.forEach(n),l=x(g),s=b(g,"DIV",{class:!0});var S=A(s);m.l(S),S.forEach(n),g.forEach(n),h=x(e),f=b(e,"MAIN",{});var D=A(f);_&&_.l(D),D.forEach(n),this.h()},h(){document.title="Svelte Auth",d(r,"class","flex items-center flex-shrink-0 text-white mr-6"),d(s,"class","flex gap-4 text-white"),d(o,"class","text-xl flex items-center justify-center flex-wrap bg-teal-500 p-6")},m(e,p){v(e,a,p),v(e,o,p),E(o,r),E(r,i),E(o,l),E(o,s),m.m(s,null),v(e,h,p),v(e,f,p),_&&_.m(f,null),u=!0},p(e,[p]){var g,L,S;(!u||p&1)&&t!==(t=(((S=(L=(g=e[0])==null?void 0:g.data)==null?void 0:L.user)==null?void 0:S.name)??"Svelte Auth")+"")&&F(i,t),k===(k=w(e))&&m?m.p(e,p):(m.d(1),m=k(e),m&&(m.c(),m.m(s,null))),_&&_.p&&(!u||p&2)&&U(_,R,e,e[1],u?H(R,e[1],p,null):G(e[1]),null)},i(e){u||(J(_,e),u=!0)},o(e){K(_,e),u=!1},d(e){e&&n(a),e&&n(o),m.d(),e&&n(h),e&&n(f),_&&_.d(e)}}}function ae(c,a,o){let r;P(c,W,s=>o(0,r=s));let{$$slots:t={},$$scope:i}=a;const l=()=>async({result:s})=>{X(),await Y(s)};return c.$$set=s=>{"$$scope"in s&&o(1,i=s.$$scope)},[r,i,t,l]}class re extends O{constructor(a){super(),T(this,a,ae,se,z,{})}}export{re as component};
