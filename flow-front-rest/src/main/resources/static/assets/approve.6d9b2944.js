import{P as I}from"./index.49f22413.js";import{L as h,a as F,cV as C,v as m,bA as P,bQ as k,h as B,aF as o,o as S,i as V,z as r,m as t,B as s,t as b,l as a}from"./index.a19a7b59.js";import{S as x}from"./index.b0bf0cb1.js";import{T as E}from"./index.886f7bb4.js";import R from"./FormContainer.f697d6fc.js";import T from"./ActionButtons.10a2d03e.js";import w from"./BaseActionButtons.2a3d6fb5.js";import H from"./ApproveActionButtons.53254cba.js";import N from"./ProcessBackButton.9acef107.js";import $ from"./ApprovalHistory.9a04d996.js";import{c as D,d as W}from"./process.10a62b0a.js";import"./index.21769bbf.js";import"./index.e18493c9.js";import"./useSize.0e83a8bb.js";import"./eagerComputed.2c84d538.js";import"./useWindowSizeFn.c0064585.js";import"./useContentViewHeight.491bd798.js";import"./ArrowLeftOutlined.be1e5adc.js";import"./index.1bddd824.js";import"./transButton.7523e23a.js";import"./useFlexGapSupport.c0a56c4d.js";import"./index.58101a82.js";import"./index.5e1a3b76.js";import"./index.ed10a482.js";import"./CopyOutlined.686d97cf.js";import"./index.55df64f0.js";import"./index.1f075784.js";import"./index.a54420f2.js";import"./get.435241c6.js";import"./index.822cef18.js";import"./index.65b0d1ea.js";import"./FullscreenOutlined.13149b2b.js";import"./index.15b79a91.js";import"./index.d5d24438.js";import"./throttleByAnimationFrame.8cf43404.js";import"./Viewer.91f06516.js";import"./ApartmentOutlined.8d868539.js";import"./index.01b7133f.js";import"./FlowDiagramModal.4d5292b3.js";import"./ClockCircleOutlined.fe7bf45c.js";const K=F({components:{LeftOutlined:C,PageWrapper:I,FormContainer:R,ActionButtons:T,BaseActionButtons:w,ApproveActionButtons:H,ApprovalHistory:$,ProcessBackButton:N,Space:x,Tag:E},setup(){const n=m(),c=m({}),u=m({}),f=m(""),_=P(),{currentRoute:d}=k(),{params:{modelKey:l},query:{procInstId:p}}=B(d);D({modelKey:l}).then(e=>{c.value=e}),p&&W({procInstId:p}).then(e=>{u.value=e,B(n).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:f,modelBaseInfo:c,formContainerRef:n,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(n,c,u,f,_,d){const l=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),A=o("ApprovalHistory"),y=o("ApproveActionButtons"),g=o("PageWrapper");return S(),V(g,{class:"!mt-4 process-container"},{title:r(()=>[t(l),s(" "+b(n.startorBaseInfo.formName||n.modelBaseInfo.name||"-")+" ",1),t(p)]),extra:r(()=>[]),footer:r(()=>[a("div",L,[t(e,null,{default:r(()=>[a("span",null,[s(" \u6D41\u7A0BBP\uFF1A"),t(i,null,{default:r(()=>[s("\u5F20\u4E09")]),_:1})]),a("span",null,[s(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),t(i,null,{default:r(()=>[s("\u674E\u56DB")]),_:1})])]),_:1})])]),default:r(()=>[a("div",M,[t(v,{ref:"formContainerRef"},null,512)]),a("div",q,[t(A,{ref:"approvalHistoryRef"},null,512)]),t(y)]),_:1})}var Ro=h(K,[["render",z]]);export{Ro as default};
