import{S as D,i as G,s as J,e as p,t as E,a as w,c as _,b as x,d as L,f as c,g as y,m as r,h as P,j as l,o as K,n as M}from"../chunks/index.ad50d19f.js";import{e as Q,i as V,a as W}from"../chunks/forms.d7b031ff.js";function R(f){let t,d;return{c(){t=p("p"),d=E("Username or password is invalid"),this.h()},l(a){t=_(a,"P",{class:!0});var e=x(t);d=L(e,"Username or password is invalid"),e.forEach(c),this.h()},h(){r(t,"class","error svelte-1afhtsm")},m(a,e){P(a,t,e),l(t,d)},d(a){a&&c(t)}}}function z(f){let t,d;return{c(){t=p("p"),d=E("You have entered the wrong credentials"),this.h()},l(a){t=_(a,"P",{class:!0});var e=x(t);d=L(e,"You have entered the wrong credentials"),e.forEach(c),this.h()},h(){r(t,"class","error svelte-1afhtsm")},m(a,e){P(a,t,e),l(t,d)},d(a){a&&c(t)}}}function X(f){var j;let t,d,a,e,u,k,T,m,q,b,B,N,h,I,U,A,g,O,S,Y,o=((j=f[0])==null?void 0:j.invalid)&&R(),n=f[0]&&f[0].isAuth==!1&&z();return{c(){t=p("h1"),d=E("Login"),a=w(),e=p("form"),u=p("label"),k=E("Username"),T=w(),m=p("input"),q=w(),b=p("label"),B=E("Password"),N=w(),h=p("input"),I=w(),o&&o.c(),U=w(),n&&n.c(),A=w(),g=p("button"),O=E("Login"),this.h()},l(i){t=_(i,"H1",{class:!0});var v=x(t);d=L(v,"Login"),v.forEach(c),a=y(i),e=_(i,"FORM",{action:!0,class:!0,method:!0});var s=x(e);u=_(s,"LABEL",{for:!0,class:!0});var C=x(u);k=L(C,"Username"),C.forEach(c),T=y(s),m=_(s,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),q=y(s),b=_(s,"LABEL",{class:!0,for:!0});var F=x(b);B=L(F,"Password"),F.forEach(c),N=y(s),h=_(s,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),I=y(s),o&&o.l(s),U=y(s),n&&n.l(s),A=y(s),g=_(s,"BUTTON",{class:!0,type:!0});var H=x(g);O=L(H,"Login"),H.forEach(c),s.forEach(c),this.h()},h(){r(t,"class","text-center text-4xl my-8"),r(u,"for","username"),r(u,"class","grid gap-2"),r(m,"class","p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"),r(m,"type","text"),r(m,"name","username"),r(m,"id","username"),r(m,"placeholder","Username"),m.required=!0,r(b,"class","grid gap-2"),r(b,"for","password"),r(h,"class","p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"),r(h,"type","password"),r(h,"name","password"),r(h,"id","password"),r(h,"placeholder","Password"),h.required=!0,r(g,"class","text-white p-4 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-500 font-semibold shadow-md transition-colors"),r(g,"type","submit"),r(e,"action","?/login"),r(e,"class","w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg"),r(e,"method","post")},m(i,v){P(i,t,v),l(t,d),P(i,a,v),P(i,e,v),l(e,u),l(u,k),l(e,T),l(e,m),l(e,q),l(e,b),l(b,B),l(e,N),l(e,h),l(e,I),o&&o.m(e,null),l(e,U),n&&n.m(e,null),l(e,A),l(e,g),l(g,O),S||(Y=K(Q.call(null,e,f[1])),S=!0)},p(i,[v]){var s;(s=i[0])!=null&&s.invalid?o||(o=R(),o.c(),o.m(e,U)):o&&(o.d(1),o=null),i[0]&&i[0].isAuth==!1?n||(n=z(),n.c(),n.m(e,A)):n&&(n.d(1),n=null)},i:M,o:M,d(i){i&&c(t),i&&c(a),i&&c(e),o&&o.d(),n&&n.d(),S=!1,Y()}}}function Z(f,t,d){let{form:a}=t;const e=()=>async({result:u})=>{V(),await W(u)};return f.$$set=u=>{"form"in u&&d(0,a=u.form)},[a,e]}class te extends D{constructor(t){super(),G(this,t,Z,X,J,{form:0})}}export{te as component};