import{az as _,a as F,bK as C,bF as g,bg as y,c as h,w as v,h as w,aQ as L,aB as c,o as S,k as R,B as $,n as a,t as m,p as k,r as l,l as I,e as U,j as n,fj as b,fk as B}from"./index.97f55544.js";import{D as G,G as D,S as H}from"./siteSetting.136c2269.js";import{a as T}from"./useContentViewHeight.f7978643.js";import{G as W}from"./GithubFilled.b9579709.js";import"./useWindowSizeFn.61edac1b.js";const A=F({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:W},setup(){const{t:o}=U(),{getShowFooter:e}=g(),{currentRoute:p}=y(),{prefixCls:d}=h("layout-footer"),r=v(null),{setFooterHeight:i}=T();return{getShowLayoutFooter:w(()=>{var s,t;if(n(e)){const u=(s=n(r))==null?void 0:s.$el;i((u==null?void 0:u.offsetHeight)||0)}else i(0);return n(e)&&!((t=n(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:G,GITHUB_URL:D,SITE_URL:H,openWindow:L,footerRef:r}}}),N=o=>(b("data-v-138e5d67"),o=o(),B(),o),V=N(()=>a("div",null,"Copyright \xA92021 \u4F01\u4E1A\u6570\u667A\u5316",-1));function j(o,e,p,d,r,i){const f=c("GithubFilled"),s=c("Footer");return o.getShowLayoutFooter?(S(),R(s,{key:0,class:l(o.prefixCls),ref:"footerRef"},{default:$(()=>[a("div",{class:l(`${o.prefixCls}__links`)},[a("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},m(o.t("layout.footer.onlinePreview")),1),k(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:l(`${o.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},m(o.t("layout.footer.onlineDocument")),1)],2),V]),_:1},8,["class"])):I("",!0)}var Q=_(A,[["render",j],["__scopeId","data-v-138e5d67"]]);export{Q as default};
