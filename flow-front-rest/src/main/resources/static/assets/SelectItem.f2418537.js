import{L as i,a as r,dz as l,b as p,e as m,aF as d,o as c,f as u,l as f,t as g,m as _,aG as b,p as v}from"./index.c57fe5f3.js";import{b as y}from"./index.7ccc301a.js";import"./index.830dbc92.js";import"./FullscreenOutlined.b80e75d8.js";import"./index.a3fa17b5.js";import"./useWindowSizeFn.79f9ec92.js";import"./uniqBy.d4a6eb1d.js";import"./_baseIteratee.dee2c06b.js";import"./get.3a02c577.js";import"./useContentViewHeight.8526963a.js";import"./index.10246590.js";import"./useRefs.f276032e.js";import"./RedoOutlined.815a1f4b.js";import"./index.f18fa62a.js";import"./lock.c9022cc6.js";import"./ArrowLeftOutlined.2479d1c9.js";import"./index.ff970ca1.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(o){e.event&&y(e.event,o)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,o,h){const s=d("Select");return c(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(s,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var w=i(C,[["render",S],["__scopeId","data-v-2dba4940"]]);export{w as default};
