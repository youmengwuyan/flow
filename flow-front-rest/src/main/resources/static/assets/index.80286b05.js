import{m as u,r as $,aA as j,a as I,V as H,v as R,w as N,K as U,ar as O,J as M,cI as z,f7 as W,Y as J,_ as T,S as w,d0 as X,x as Y,y as q,cm as G,da as Q,L as Z,c2 as D,br as K,f8 as tt,b as et,e as E,h as _,cj as L,aF as S,o as b,f as ot,i as P,j as B,p as nt,F as rt}from"./index.72db8407.js";import{c as V,u as at}from"./index.745811fc.js";import it from"./SessionTimeoutLogin.03e4c6c5.js";import{s as st,g as ct}from"./scrollTo.fb2911f3.js";import{t as lt}from"./throttleByAnimationFrame.e3056a49.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.802da1f1.js";import"./useWindowSizeFn.de59245c.js";import"./uniqBy.ce71960e.js";import"./_baseIteratee.d6fc2b22.js";import"./get.e445709e.js";import"./useContentViewHeight.e9d9b7fd.js";import"./index.a3257fd9.js";import"./useRefs.a6f29f73.js";import"./RedoOutlined.bf887c4f.js";import"./index.43cbb639.js";import"./lock.d6487ead.js";import"./Login.28474aa8.js";import"./LoginForm.892a9dca.js";import"./index.e6389b66.js";import"./index.707d7df2.js";import"./index.8b7903b4.js";import"./useFlexGapSupport.fbfe2813.js";import"./useSize.540680fe.js";import"./index.9c574014.js";import"./LoginFormTitle.d48b78a3.js";import"./GithubFilled.d4489d3d.js";import"./index.bb8df062.js";import"./ForgetPasswordForm.ace75d62.js";import"./index.6fb43bc1.js";import"./RegisterForm.de4e481d.js";import"./index.76c88f70.js";import"./MobileForm.9cd06103.js";import"./QrCodeForm.399a3f4a.js";import"./download.6d890c70.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),n.forEach(function(r){mt(t,r,o[r])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var A=function(e,o){var n=x({},e,o.attrs);return u($,x({},n,{icon:pt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var gt=A,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=I({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var n=o.slots,r=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,i=R(),v=N({visible:!1,scrollEvent:null}),C=function(){return i.value&&i.value.ownerDocument?i.value.ownerDocument:window},F=function(s){var l=e.target,m=l===void 0?C:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(a){var s=e.visibilityHeight,l=ct(a.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||C,m=l();v.scrollEvent=Q(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),M(function(){O(function(){y()})}),z(function(){O(function(){y()})}),W(function(){k()}),J(function(){k()}),function(){var a,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},r),{},{onClick:F,class:(a={},w(a,"".concat(c.value),!0),w(a,"".concat(r.class),r.class),w(a,"".concat(c.value,"-rtl"),g.value==="rtl"),a)}),f=X("fade");return u(G,f,{default:function(){return[Y(u("div",T(T({},m),{},{ref:i}),[((s=n.default)===null||s===void 0?void 0:s.call(n))||l]),[[q,v.visible]])]}})}}}),dt=j(ft);const Tt=I({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>D(()=>import("./index.7b7f92b1.js"),["assets/index.7b7f92b1.js","assets/index.72db8407.js","assets/index.87ffee57.css","assets/LockPage.bf9bce16.js","assets/LockPage.2bff9ea2.css","assets/lock.d6487ead.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>D(()=>import("./index.0ad9b7c8.js").then(function(t){return t.i}),["assets/index.0ad9b7c8.js","assets/index.fbe1d78d.css","assets/index.72db8407.js","assets/index.87ffee57.css","assets/index.745811fc.js","assets/index.6bbffca9.css","assets/FullscreenOutlined.9ae4cdf6.js","assets/index.802da1f1.js","assets/index.fbb444ab.css","assets/useWindowSizeFn.de59245c.js","assets/uniqBy.ce71960e.js","assets/_baseIteratee.d6fc2b22.js","assets/get.e445709e.js","assets/useContentViewHeight.e9d9b7fd.js","assets/index.a3257fd9.js","assets/index.729371a4.css","assets/useRefs.a6f29f73.js","assets/RedoOutlined.bf887c4f.js","assets/index.43cbb639.js","assets/lock.d6487ead.js","assets/ArrowLeftOutlined.e4cf2a58.js","assets/index.9c574014.js","assets/index.3a3c1369.css"])),SessionTimeoutLogin:it},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:n}=K(),r=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=at(),c=E(()=>r.getSessionTimeout),g=E(()=>{if(!_(e))return!1;const i=_(o);return i===L.AUTO?!_(p)||_(n):i===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,n,r,d){const p=S("LayoutLockPage"),c=S("BackTop"),g=S("SettingDrawer"),i=S("SessionTimeoutLogin");return b(),ot(rt,null,[u(p),t.getUseOpenBackTop?(b(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(b(),P(g,{key:1,class:nt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(b(),P(i,{key:2})):B("",!0)],64)}var ee=Z(Tt,[["render",_t]]);export{ee as default};
