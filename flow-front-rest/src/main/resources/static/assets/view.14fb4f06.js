import{P as g}from"./index.874a1287.js";import{L as I,a as h,cV as F,v as m,bA as P,bQ as C,h as B,aF as o,o as k,i as S,z as t,m as r,B as n,t as w,l as a}from"./index.72db8407.js";import{S as V}from"./index.fae68114.js";import{T as b}from"./index.3f09cbf1.js";import x from"./FormContainer.aa7f00dd.js";import E from"./ActionButtons.0f0431d1.js";import H from"./BaseActionButtons.c3a3b049.js";import R from"./ProcessBackButton.1b7245dd.js";import T from"./ApproveActionButtons.1c5b39ad.js";import N from"./ApprovalHistory.dca16786.js";import{c as $,d as D}from"./process.dd434e1e.js";import W from"./ProcessHeader.b73f1c2a.js";import"./index.1644c3be.js";import"./index.778de78a.js";import"./useSize.540680fe.js";import"./eagerComputed.0db327f8.js";import"./useWindowSizeFn.de59245c.js";import"./useContentViewHeight.e9d9b7fd.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.dfa59e10.js";import"./transButton.fa38355c.js";import"./useFlexGapSupport.fbfe2813.js";import"./index.dbd2aa4b.js";import"./index.8b7903b4.js";import"./index.6cff1582.js";import"./CopyOutlined.af9aa3db.js";import"./index.9c574014.js";import"./index.0be7d96c.js";import"./index.9a32cced.js";import"./get.e445709e.js";import"./index.bb8df062.js";import"./index.c8942ff6.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.ddfd5f6b.js";import"./index.8f490ec0.js";import"./throttleByAnimationFrame.e3056a49.js";import"./Viewer.91f06516.js";import"./ApartmentOutlined.72dadc44.js";import"./index.4555fd12.js";import"./FlowDiagramModal.99dc638f.js";import"./ClockCircleOutlined.2dda8149.js";import"./index.a3257fd9.js";import"./useRefs.a6f29f73.js";import"./index.c93d4b04.js";const K=h({components:{LeftOutlined:F,ProcessHeader:W,PageWrapper:g,FormContainer:x,ActionButtons:E,BaseActionButtons:H,ApproveActionButtons:T,ApprovalHistory:N,ProcessBackButton:R,Space:V,Tag:b},setup(){const s=m(),c=m({}),u=m({}),l=m(""),_=P(),{currentRoute:d}=C(),{params:{modelKey:f},query:{procInstId:p}}=B(d);$({modelKey:f}).then(e=>{c.value=e}),p&&D({procInstId:p}).then(e=>{u.value=e,B(s).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:l,modelBaseInfo:c,formContainerRef:s,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(s,c,u,l,_,d){const f=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),y=o("ApprovalHistory"),A=o("PageWrapper");return k(),S(A,{class:"!mt-4 process-container"},{title:t(()=>[r(f),n(" "+w(s.startorBaseInfo.formName||s.modelBaseInfo.name||"-")+" ",1),r(p)]),extra:t(()=>[]),footer:t(()=>[a("div",L,[r(e,null,{default:t(()=>[a("span",null,[n(" \u6D41\u7A0BBP\uFF1A"),r(i,null,{default:t(()=>[n("\u5F20\u4E09")]),_:1})]),a("span",null,[n(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),r(i,null,{default:t(()=>[n("\u674E\u56DB")]),_:1})])]),_:1})])]),default:t(()=>[a("div",M,[r(v,{ref:"formContainerRef"},null,512)]),a("div",q,[r(y,{ref:"approvalHistoryRef"},null,512)])]),_:1})}var No=I(K,[["render",z]]);export{No as default};
