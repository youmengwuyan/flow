var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(s,e,o)=>e in s?k(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,l=(s,e)=>{for(var o in e||(e={}))h.call(e,o)&&b(s,o,e[o]);if(x)for(var o of x(e))F.call(e,o)&&b(s,o,e[o]);return s};var B=(s,e,o)=>new Promise((i,a)=>{var p=t=>{try{r(o.next(t))}catch(c){a(c)}},n=t=>{try{r(o.throw(t))}catch(c){a(c)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(p,n);r((o=o.apply(s,e)).next())});import{P as g}from"./index.b7a6fc4b.js";import{A as H,aS as V,bA as C,a_ as _,bb as A,ar as D,bv as m,r as v,a as R,u as f,_ as $,$ as E,a0 as d,B as y,a1 as w,a5 as u,w as j,H as P,ak as M,ad as W}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import{P as N}from"./index.2b638433.js";import S from"./ActionButtons.0f7f7dd8.js";import I from"./BaseActionButtons.f5d6b888.js";import K from"./ProcessBackButton.33cf17b7.js";import L from"./ApproveActionButtons.8319684a.js";import T from"./ApprovalHistory.b6f82737.js";import q from"./ProcessHeader.37b347aa.js";import{_ as z,r as G,h as O}from"./index.142c38e7.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.e269959a.js";import"./useContentViewHeight.c781d797.js";import"./index.b74fef4b.js";import"./useForm.9f66b55d.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.b3cdb03b.js";import"./index.200f7a3e.js";import"./download.6a1de100.js";import"./index.03597360.js";/* empty css                */import"./process.635bd4e6.js";import"./index.3afbb7c7.js";import"./index.6f3fa9a8.js";/* empty css                *//* empty css                */import"./index.02b16bf3.js";import"./Viewer.3f58b0b7.js";/* empty css                */import"./FlowDiagramModal.12dd7ffc.js";const J=H({components:l({Button:V,LeftOutlined:C,ProcessHeader:q,PageWrapper:g,[_.name]:_,[A.name]:A,AEmpty:D,[m.name]:m,[m.Item.name]:m.Item,ActionButtons:S,BaseActionButtons:I,ApproveActionButtons:L,ApprovalHistory:T,ProcessBackButton:K},N),setup(){const s=v(""),e=v(null),{createMessage:o}=O(),i=G(),{currentRoute:a}=R(),{params:{modelKey:p},query:{businessKey:n}}=f(a);s.value=p;function r(){history.state.back?history.back():i("/process/todo")}$(()=>{E(()=>{n&&f(e).initProcessForm(n)})});function t(){return B(this,null,function*(){yield f(e).doSubmit(),o.success("\u63D0\u4EA4\u6210\u529F\uFF01"),i("/process/launched")})}return{currentView:s,processFormRef:e,doBack:r,doLaunch:t}}}),Q=W(" \u6D41\u7A0B\u67E5\u770B "),U={class:"m-1 desc-wrap"},X={class:"m-4 desc-wrap"};function Y(s,e,o,i,a,p){const n=d("ProcessBackButton"),r=d("BaseActionButtons"),t=d("ApprovalHistory"),c=d("PageWrapper");return y(),w(c,{contentBackground:"",class:"!mt-4"},{title:u(()=>[j(n),Q,j(r)]),extra:u(()=>[]),footer:u(()=>[]),default:u(()=>[P("div",U,[(y(),w(M(s.currentView),{ref:"processFormRef"},null,512))]),P("div",X,[j(t,{ref:"approvalHistoryRef"},null,512)])]),_:1})}var Ko=z(J,[["render",Y]]);export{Ko as default};
