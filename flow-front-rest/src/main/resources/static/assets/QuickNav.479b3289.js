import{a as B,V as P,S as h,bH as b,m as n,T as k,e as w,b1 as N,v as S,L as $,cX as A,aF as d,o as p,i as C,z as u,f as j,F as T,aI as z,l as g,t as G,aG as E}from"./index.c57fe5f3.js";import{C as c}from"./index.df23b988.js";import"./index.10246590.js";import"./index.293bd36c.js";import{B as x,R as M}from"./index.e0d59ecb.js";import{a as F}from"./data.93390901.js";import{g as V}from"./process.9fb35436.js";import{R as L,C as O}from"./index.837c71ef.js";import"./index.f18fa62a.js";import"./useRefs.f276032e.js";import"./useFlexGapSupport.98fd76c0.js";x.install=function(t){return t.component(x.name,x),t.component(M.name,M),t};var Q=function(){return{prefixCls:String,title:k.any,description:k.any,avatar:k.any}},D=B({compatConfig:{MODE:3},name:"ACardMeta",props:Q(),slots:["title","description","avatar"],setup:function(o,l){var r=l.slots,v=P("card",o),s=v.prefixCls;return function(){var i=h({},"".concat(s.value,"-meta"),!0),a=b(r,o,"avatar"),f=b(r,o,"title"),m=b(r,o,"description"),y=a?n("div",{class:"".concat(s.value,"-meta-avatar")},[a]):null,_=f?n("div",{class:"".concat(s.value,"-meta-title")},[f]):null,e=m?n("div",{class:"".concat(s.value,"-meta-description")},[m]):null,R=_||e?n("div",{class:"".concat(s.value,"-meta-detail")},[_,e]):null;return n("div",{class:i},[y,R])}}}),H=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},I=B({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:H(),setup:function(o,l){var r=l.slots,v=P("card",o),s=v.prefixCls,i=w(function(){var a;return a={},h(a,"".concat(s.value,"-grid"),!0),h(a,"".concat(s.value,"-grid-hoverable"),o.hoverable),a});return function(){var a;return n("div",{class:i.value},[(a=r.default)===null||a===void 0?void 0:a.call(r)])}}});c.Meta=D;c.Grid=I;c.install=function(t){return t.component(c.name,c),t.component(D.name,D),t.component(I.name,I),t};const X=B({components:{Badge:x,Card:c,CardGrid:c.Grid,Icon:N,Row:L,Col:O},setup(){const t=S({});function o(l){const{href:r}=A.resolve({path:l});window.open(r,"_blank")}return V({}).then(l=>{t.value={todo:l}}),{items:F,toDetail:o,badgeCounts:t}}}),q={class:"flex flex-col items-center action-item"},J={class:"text-md mt-2"},K={class:"flex flex-col items-center action-item"},U={class:"text-md mt-2"};function W(t,o,l,r,v,s){const i=d("Icon"),a=d("router-link"),f=d("Badge"),m=d("Col"),y=d("Row"),_=d("Card");return p(),C(_,E(t.$attrs,{bordered:!1,"body-style":"padding:10px;"}),{default:u(()=>[n(y,{type:"flex",justify:"space-around",align:"middle"},{default:u(()=>[(p(!0),j(T,null,z(t.items,e=>(p(),C(m,{span:4,key:e,style:{"text-align":"center"}},{default:u(()=>[n(f,{count:t.badgeCounts[e.sn]||0,offset:[-20,0]},{default:u(()=>[e.url?(p(),C(a,{key:0,to:e.url?e.url:"",target:e.url?"_blank":""},{default:u(()=>[g("div",q,[n(i,{icon:e.icon,color:e.color,size:"30"},null,8,["icon","color"]),g("span",J,G(e.title),1)])]),_:2},1032,["to","target"])):(p(),C(a,{key:1,disabled:!0,to:""},{default:u(()=>[g("div",K,[n(i,{icon:e.icon,color:e.color,size:"30"},null,8,["icon","color"]),g("span",U,G(e.title),1)])]),_:2},1024))]),_:2},1032,["count"])]),_:2},1024))),128))]),_:1})]),_:1},16)}var it=$(X,[["render",W],["__scopeId","data-v-18151baf"]]);export{it as default};
