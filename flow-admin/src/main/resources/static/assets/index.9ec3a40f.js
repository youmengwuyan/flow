import{az as _,a as m,cX as S,eF as f,eG as T,eH as R,eI as X,eJ as x,eK as h,eL as y,eM as B,eN as C,eO as Y,eP as w,eQ as E,eR as k,w as n,aB as o,o as r,k as i,B as s,n as l,p,C as F,aL as b,y as P,z as $}from"./index.97f55544.js";import{P as g}from"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./eagerComputed.009c9352.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],A=N.map(e=>({label:e,value:e,key:e})),L=m({components:{Select:S,PageWrapper:g,FadeTransition:f,ScaleTransition:T,SlideYTransition:R,ScrollYTransition:X,SlideYReverseTransition:x,ScrollYReverseTransition:h,SlideXTransition:y,ScrollXTransition:B,SlideXReverseTransition:C,ScrollXReverseTransition:Y,ScaleRotateTransition:w,ExpandXTransition:E,ExpandTransition:k},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:A,value:e,start:t,show:a}}}),V={class:"flex"},W={class:"box"};function z(e,a,t,D,I,G){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[l("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[F(" start ")]),_:1},8,["onClick"])]),(r(),i(b(`${e.value}Transition`),null,{default:s(()=>[P(l("div",W,null,512),[[$,e.show]])]),_:1}))]),_:1})}var ae=_(L,[["render",z],["__scopeId","data-v-45b1f032"]]);export{ae as default};
