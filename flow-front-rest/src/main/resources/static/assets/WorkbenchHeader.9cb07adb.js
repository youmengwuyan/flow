import{a as l,s as p,v as s,cU as d,L as u,aF as a,o as f,f as _,m as n,l as t,t as m}from"./index.a19a7b59.js";import v from"./QuickNav.af12f0e7.js";import{A as g}from"./index.e18493c9.js";import{h}from"./header.d801b988.js";import"./index.1bddd824.js";import"./index.af972ef5.js";import"./index.7a2dfd59.js";import"./index.d1b1d25a.js";import"./useRefs.4b0733e6.js";import"./index.822cef18.js";import"./index.5e1a3b76.js";import"./useFlexGapSupport.c0a56c4d.js";import"./index.6525164e.js";import"./data.93390901.js";import"./process.10a62b0a.js";import"./useSize.0e83a8bb.js";import"./eagerComputed.2c84d538.js";const k=l({components:{Avatar:g,QuickNav:v},setup(){const e=p(),o=s(),r=s(!1);return s(new Date),o.value=e.getUserInfo||{},{headerImg:h,loading:r,loginUser:o,currentDate:d(new Date)}}}),x={class:"lg:flex"},F={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},D={class:"md:text-lg text-md"},N={class:"text-secondary"},U={class:"flex-1 md:mt-0 mt-4"};function y(e,o,r,A,C,$){const c=a("Avatar"),i=a("QuickNav");return f(),_("div",x,[n(c,{src:e.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),t("div",F,[t("h1",D,m(e.loginUser.name),1),t("span",N,m(e.currentDate)+"\uFF0C\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",1)]),t("div",U,[n(i,{loading:e.loading,class:"enter-y"},null,8,["loading"])])])}var K=u(k,[["render",y]]);export{K as default};
