import{L as B,a as _,C as f,bX as w,bQ as h,h as g,aF as o,o as v,f as P,m as t,z as s,B as M,F as C}from"./index.a19a7b59.js";import{u as k}from"./index.65b0d1ea.js";import A from"./index.15b79a91.js";import{A as F}from"./ApartmentOutlined.8d868539.js";import"./useWindowSizeFn.c0064585.js";import"./FullscreenOutlined.13149b2b.js";import"./index.49f22413.js";import"./index.21769bbf.js";import"./index.e18493c9.js";import"./useSize.0e83a8bb.js";import"./eagerComputed.2c84d538.js";import"./useContentViewHeight.491bd798.js";import"./ArrowLeftOutlined.be1e5adc.js";import"./index.1bddd824.js";import"./transButton.7523e23a.js";import"./index.886f7bb4.js";import"./index.b0bf0cb1.js";import"./useFlexGapSupport.c0a56c4d.js";import"./index.d5d24438.js";import"./throttleByAnimationFrame.8cf43404.js";import"./index.1f075784.js";import"./Viewer.91f06516.js";import"./process.10a62b0a.js";const x=_({name:"BaseActionButtons",components:{Button:f,Tooltip:w,ApartmentOutlined:F,BpmnPreviewModal:A},setup(e,{emit:u}){const{currentRoute:a}=h(),{params:{modelKey:m},query:{taskId:c,procInstId:l}}=g(a),[n,{openModal:r,setModalProps:i}]=k();function p(){r(!0,{modelKey:m,procInstId:l||"",isUpdate:!0}),i({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:n,handleCloseFunc:d,showFlowDiagram:p}}});function y(e,u,a,m,c,l){const n=o("ApartmentOutlined"),r=o("Button"),i=o("Tooltip"),p=o("BpmnPreviewModal");return v(),P(C,null,[t(i,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[t(r,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[t(n)]),_:1},8,["onClick"])]),_:1}),t(p,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Y=B(x,[["render",y]]);export{Y as default};
