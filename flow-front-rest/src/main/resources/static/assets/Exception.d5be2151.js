import{A as N,r as O,bc as R,j as _,u as s,w as r,aS as S,bd as A}from"./vendor.5eb38889.js";import{E as e,r as v,s as G,e as P,a as k,P as x}from"./index.eb81839e.js";var C="/assets/no-data.f7e550cc.svg",D="/assets/net-error.61b7e6df.svg",w=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:f}=R(),o=v(),c=G(),{t}=P(),{prefixCls:E}=k("app-exception-page"),p=_(()=>{const{status:l}=f,{status:i}=n;return Number(l)||i}),m=_(()=>s(a).get(s(p))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(x.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(x.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:T,icon:d,handler:g,status:y}=s(m)||{};return r(A,{class:E,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>T&&r(S,{type:"primary",onClick:g},{default:()=>T}),icon:()=>d?r("img",{src:d},null):null})}}});export{w as default};
