var l=(o,r,e)=>new Promise((s,a)=>{var n=t=>{try{i(e.next(t))}catch(p){a(p)}},c=t=>{try{i(e.throw(t))}catch(p){a(p)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,c);i((e=e.apply(o,r)).next())});import{_ as m}from"./index.8cd44c0f.js";import{g as f}from"./dicType.4878b878.js";import{az as u,a as d,w as _,O as h,aB as T,o as B,i as D,p as v}from"./index.97f55544.js";import"./fromPairs.84aabb58.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useContextMenu.a6e3d036.js";import"./index.4592027a.js";import"./get.d05ccbd6.js";const w=d({name:"DictTypeTree",components:{BasicTree:m},emits:["select"],setup(o,{emit:r}){const e=_([]);function s(){return l(this,null,function*(){e.value=yield f()})}function a(n,c){r("select",n[0])}return h(()=>{s()}),{treeData:e,handleSelect:a}}}),$={class:"bg-white mr-0 overflow-hidden"};function y(o,r,e,s,a,n){const c=T("BasicTree");return B(),D("div",$,[v(c,{title:"\u6570\u636E\u5206\u7C7B",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:o.treeData,onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}var O=u(w,[["render",y]]);export{O as default};
