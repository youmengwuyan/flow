import{a as v,aJ as y,w as a,c as x,h as w,j as e,o as H,i as S,p as z,B as R,n as B,r as f,bp as p,b4 as C,az as b}from"./index.97f55544.js";import{u as k}from"./useWindowSizeFn.61edac1b.js";import{a as L}from"./useContentViewHeight.f7978643.js";const $=["src"],E=v({__name:"index",props:{frameSrc:y.string.def("")},setup(u,{expose:d}){const i=a(!0),m=a(50),r=a(window.innerHeight),n=a(),{headerHeightRef:_}=L(),{prefixCls:o}=x("iframe-page");k(l,150,{immediate:!0});const c=w(()=>({height:`${e(r)}px`}));function l(){const s=e(n);if(!s)return;const t=_.value;m.value=t,r.value=window.innerHeight-t;const h=document.documentElement.clientHeight-t;s.style.height=`${h}px`}function g(){i.value=!1,l()}return d({frameRef:n}),(s,t)=>(H(),S("div",{class:f(e(o)),style:p(e(c))},[z(e(C),{spinning:i.value,size:"large",style:p(e(c))},{default:R(()=>[B("iframe",{src:u.frameSrc,class:f(`${e(o)}__main`),ref_key:"frameRef",ref:n,onLoad:g},null,42,$)]),_:1},8,["spinning","style"])],6))}});var W=b(E,[["__scopeId","data-v-3a3cdb64"]]);export{W as default};
