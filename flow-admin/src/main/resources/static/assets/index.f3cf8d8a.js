import{y as o,aP as e,a_ as t,a as s,r as a,j as r,u as n,z as i,A as l,Z as u,B as d,F as c,v as f,J as p,a8 as _,K as m}from"./vendor.880b4c6c.js";import{D as F,G as v,S as C}from"./siteSetting.136c2269.js";import{l as h,c as w,o as g,e as y}from"./index.e4d4c34e.js";import{a as L}from"./useContentViewHeight.0c12a40d.js";import"./useWindowSizeFn.564cf32e.js";var R=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=y(),{getShowFooter:e}=h(),{currentRoute:t}=s(),{prefixCls:i}=w("layout-footer"),l=a(null),{setFooterHeight:u}=L();return{getShowLayoutFooter:r((()=>{var o,s;if(n(e)){const e=null==(o=n(l))?void 0:o.$el;u((null==e?void 0:e.offsetHeight)||0)}else u(0);return n(e)&&!(null==(s=n(t).meta)?void 0:s.hiddenFooter)})),prefixCls:i,t:o,DOC_URL:F,GITHUB_URL:v,SITE_URL:C,openWindow:g,footerRef:l}}});const S=m();i("data-v-138e5d67");const U=f("div",null,"Copyright ©2021 企业数智化",-1);l();const x=S(((o,e,t,s,a,r)=>{const n=u("GithubFilled"),i=u("Footer");return o.getShowLayoutFooter?(d(),c(i,{key:0,class:o.prefixCls,ref:"footerRef"},{default:S((()=>[f("div",{class:`${o.prefixCls}__links`},[f("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},p(o.t("layout.footer.onlinePreview")),1),f(n,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),f("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},p(o.t("layout.footer.onlineDocument")),1)],2),U])),_:1},8,["class"])):_("",!0)}));R.render=x,R.__scopeId="data-v-138e5d67";export default R;
