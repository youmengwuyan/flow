import{A as l,aS as B,c3 as f,a as w,u as j,a0 as s,B as x,D as _,w as r,a5 as g,aa as h}from"./vendor.5eb38889.js";import{u as v}from"./index.200f7a3e.js";import P from"./index.6f3fa9a8.js";import{_ as b}from"./index.142c38e7.js";import"./useWindowSizeFn.e269959a.js";import"./index.b7a6fc4b.js";/* empty css               *//* empty css               */import"./useContentViewHeight.c781d797.js";/* empty css               *//* empty css                *//* empty css                */import"./index.02b16bf3.js";import"./Viewer.3f58b0b7.js";import"./process.635bd4e6.js";const M=l({name:"BaseActionButtons",components:{Button:B,ApartmentOutlined:f,BpmnPreviewModal:P},setup(e,{emit:m}){const{currentRoute:i}=w(),{params:{modelKey:a},query:{taskId:d,procInstId:p}}=j(i),[t,{openModal:o,setModalProps:n}]=v();function u(){o(!0,{modelKey:a,procInstId:p||"",isUpdate:!0}),n({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function c(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:t,handleCloseFunc:c,showFlowDiagram:u}}});function C(e,m,i,a,d,p){const t=s("ApartmentOutlined"),o=s("Button"),n=s("BpmnPreviewModal");return x(),_(h,null,[r(o,{title:"\u67E5\u770B\u6D41\u7A0B\u56FE",type:"link",onClick:e.showFlowDiagram},{icon:g(()=>[r(t)]),_:1},8,["onClick"]),r(n,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var K=b(M,[["render",C]]);export{K as default};
