import{m as u,r as $,aA as j,a as I,V as H,v as R,w as N,K as U,ar as O,J as M,cI as z,f7 as W,Y as J,_ as T,S as w,d0 as X,x as Y,y as q,cm as G,da as Q,L as Z,c2 as D,br as K,f8 as tt,b as et,e as E,h as _,cj as L,aF as S,o as b,f as ot,i as P,j as B,p as nt,F as rt}from"./index.a19a7b59.js";import{c as V,u as at}from"./index.a0f53d35.js";import it from"./SessionTimeoutLogin.16f9b5f5.js";import{s as st,g as ct}from"./scrollTo.6e219298.js";import{t as lt}from"./throttleByAnimationFrame.8cf43404.js";import"./FullscreenOutlined.13149b2b.js";import"./index.de32edeb.js";import"./useWindowSizeFn.c0064585.js";import"./uniqBy.381d7c18.js";import"./_baseIteratee.6fe1627e.js";import"./get.435241c6.js";import"./useContentViewHeight.491bd798.js";import"./index.d1b1d25a.js";import"./useRefs.4b0733e6.js";import"./RedoOutlined.f135b163.js";import"./index.7a2dfd59.js";import"./lock.d80cecff.js";import"./Login.16648fda.js";import"./LoginForm.2c203233.js";import"./index.10ca13d5.js";import"./index.39a4ceb4.js";import"./index.5e1a3b76.js";import"./useFlexGapSupport.c0a56c4d.js";import"./useSize.0e83a8bb.js";import"./index.55df64f0.js";import"./LoginFormTitle.0342e60d.js";import"./GithubFilled.0c5e9981.js";import"./index.822cef18.js";import"./ForgetPasswordForm.0e4681e5.js";import"./index.3dc33b8f.js";import"./RegisterForm.50523081.js";import"./index.6012ca43.js";import"./MobileForm.f62a4904.js";import"./QrCodeForm.c9c1251b.js";import"./download.8d1045a0.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),n.forEach(function(r){mt(t,r,o[r])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var A=function(e,o){var n=x({},e,o.attrs);return u($,x({},n,{icon:pt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var gt=A,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=I({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var n=o.slots,r=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,i=R(),v=N({visible:!1,scrollEvent:null}),C=function(){return i.value&&i.value.ownerDocument?i.value.ownerDocument:window},F=function(s){var l=e.target,m=l===void 0?C:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(a){var s=e.visibilityHeight,l=ct(a.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||C,m=l();v.scrollEvent=Q(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),M(function(){O(function(){y()})}),z(function(){O(function(){y()})}),W(function(){k()}),J(function(){k()}),function(){var a,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},r),{},{onClick:F,class:(a={},w(a,"".concat(c.value),!0),w(a,"".concat(r.class),r.class),w(a,"".concat(c.value,"-rtl"),g.value==="rtl"),a)}),f=X("fade");return u(G,f,{default:function(){return[Y(u("div",T(T({},m),{},{ref:i}),[((s=n.default)===null||s===void 0?void 0:s.call(n))||l]),[[q,v.visible]])]}})}}}),dt=j(ft);const Tt=I({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>D(()=>import("./index.5d733c70.js"),["assets/index.5d733c70.js","assets/index.a19a7b59.js","assets/index.87ffee57.css","assets/LockPage.4a6f7eec.js","assets/LockPage.2bff9ea2.css","assets/lock.d80cecff.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>D(()=>import("./index.ce2322a1.js").then(function(t){return t.i}),["assets/index.ce2322a1.js","assets/index.fbe1d78d.css","assets/index.a19a7b59.js","assets/index.87ffee57.css","assets/index.a0f53d35.js","assets/index.6bbffca9.css","assets/FullscreenOutlined.13149b2b.js","assets/index.de32edeb.js","assets/index.fbb444ab.css","assets/useWindowSizeFn.c0064585.js","assets/uniqBy.381d7c18.js","assets/_baseIteratee.6fe1627e.js","assets/get.435241c6.js","assets/useContentViewHeight.491bd798.js","assets/index.d1b1d25a.js","assets/index.729371a4.css","assets/useRefs.4b0733e6.js","assets/RedoOutlined.f135b163.js","assets/index.7a2dfd59.js","assets/lock.d80cecff.js","assets/ArrowLeftOutlined.be1e5adc.js","assets/index.55df64f0.js","assets/index.3a3c1369.css"])),SessionTimeoutLogin:it},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:n}=K(),r=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=at(),c=E(()=>r.getSessionTimeout),g=E(()=>{if(!_(e))return!1;const i=_(o);return i===L.AUTO?!_(p)||_(n):i===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,n,r,d){const p=S("LayoutLockPage"),c=S("BackTop"),g=S("SettingDrawer"),i=S("SessionTimeoutLogin");return b(),ot(rt,null,[u(p),t.getUseOpenBackTop?(b(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(b(),P(g,{key:1,class:nt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(b(),P(i,{key:2})):B("",!0)],64)}var ee=Z(Tt,[["render",_t]]);export{ee as default};
