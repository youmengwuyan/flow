var u=(t,s,o)=>new Promise((p,i)=>{var c=e=>{try{r(o.next(e))}catch(m){i(m)}},n=e=>{try{r(o.throw(e))}catch(m){i(m)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(c,n);r((o=o.apply(t,s)).next())});import{P as C}from"./index.3848c581.js";import{L as _,a as v,cM as D,dh as x,v as g,J as E,aF as h,co as B,x as M,o as P,i as $,z as d,l as F,E as y}from"./index.c57fe5f3.js";import{D as l}from"./index.ff970ca1.js";import{C as f}from"./index.df23b988.js";import"./index.10246590.js";import"./index.293bd36c.js";import{D as a}from"./index.ad34be39.js";import b from"./ProcessHeader.df370d39.js";import"./index.76280d33.js";import"./index.57fcc66b.js";import"./useSize.21a58576.js";import"./eagerComputed.0a66574f.js";import"./useWindowSizeFn.79f9ec92.js";import"./useContentViewHeight.8526963a.js";import"./ArrowLeftOutlined.2479d1c9.js";import"./index.3e3a0ce4.js";import"./transButton.eef0876e.js";import"./index.f18fa62a.js";import"./index.837c71ef.js";import"./useRefs.f276032e.js";import"./useFlexGapSupport.98fd76c0.js";import"./index.e0d59ecb.js";import"./process.9fb35436.js";const k=v({components:{ProcessHeader:b,CollapseContainer:D,PageWrapper:C,[l.name]:l,[f.name]:f,AEmpty:x,[a.name]:a,[a.Item.name]:a.Item},setup(){const t=g(),{createMessage:s}=y();E(()=>{});function o(){return u(this,null,function*(){return s.info("\u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01"),Promise.reject(!1)})}return{container:t,doSubmit:o}}}),w=F("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1),A=F("div",{class:"text-lg text-center p-20"}," \u5F00\u53D1\u4E2D\uFF0C \u656C\u8BF7\u671F\u5F85\uFF01 ",-1);function I(t,s,o,p,i,c){const n=h("CollapseContainer"),r=B("loading");return M((P(),$(n,{canExpan:!1},{title:d(()=>[w]),default:d(()=>[A]),_:1})),[[r,t.formLoading]])}var so=_(k,[["render",I]]);export{so as default};
