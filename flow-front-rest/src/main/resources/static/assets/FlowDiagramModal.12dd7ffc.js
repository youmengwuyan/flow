var u=(s,m,o)=>new Promise((c,r)=>{var n=e=>{try{a(o.next(e))}catch(i){r(i)}},t=e=>{try{a(o.throw(e))}catch(i){r(i)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(n,t);a((o=o.apply(s,m)).next())});import{B as b,b as B}from"./index.200f7a3e.js";import{A as _,r as l,a as v,u as p,$ as w,j,a0 as $,B as h,a1 as k,a5 as V,H as y,a4 as C}from"./vendor.5eb38889.js";import{V as F}from"./Viewer.3f58b0b7.js";import{l as R}from"./process.635bd4e6.js";import{_ as x}from"./index.142c38e7.js";import"./useWindowSizeFn.e269959a.js";const E=_({name:"FlowDiagramModal",components:{BasicModal:b},emits:["success","register"],setup(s,{emit:m}){const o=l(!0),{currentRoute:c}=v(),{params:{modelKey:r}}=p(c),n=l(),t=l(),a=l(),[e,{setModalProps:i,closeModal:D}]=B(d=>u(this,null,function*(){i({confirmLoading:!1}),o.value=!!(d==null?void 0:d.isUpdate);debugger;r&&w(()=>{R({modelKey:r}).then(g=>{a.value=new F({container:n.value}),a.value.importXML(g.modelXml,function(M){debugger;console.error(M)});debugger})})})),f=j(()=>p(o)?"\u4FEE\u6539":"\u65B0\u589E");return{container:t,bpmnCanvas:n,registerModal:e,getTitle:f}}}),T={class:"containers",ref:"container"};function X(s,m,o,c,r,n){const t=$("BasicModal");return h(),k(t,C(s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{default:V(()=>[y("div",T,null,512)]),_:1},16,["onRegister","title","onOk"])}var A=x(E,[["render",X]]);export{A as default};
