import{y as t,r as e,b9 as s,j as a,u as l,v as n,aN as i,ba as r}from"./vendor.880b4c6c.js";/* empty css              */import{E as o,r as u,s as c,c as b,P as T,e as p}from"./index.e4d4c34e.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:o.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=e(new Map),{query:x}=s(),E=u(),f=c(),{t:y}=p(),{prefixCls:_}=b("app-exception-page"),m=a((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),N=a((()=>l(d).get(l(m)))),O=y("sys.exception.backLogin"),A=y("sys.exception.backHome");return l(d).set(o.PAGE_NOT_ACCESS,{title:"403",status:`${o.PAGE_NOT_ACCESS}`,subTitle:y("sys.exception.subTitle403"),btnText:t.full?O:A,handler:()=>t.full?E(T.BASE_LOGIN):E()}),l(d).set(o.PAGE_NOT_FOUND,{title:"404",status:`${o.PAGE_NOT_FOUND}`,subTitle:y("sys.exception.subTitle404"),btnText:t.full?O:A,handler:()=>t.full?E(T.BASE_LOGIN):E()}),l(d).set(o.ERROR,{title:"500",status:`${o.ERROR}`,subTitle:y("sys.exception.subTitle500"),btnText:A,handler:()=>E()}),l(d).set(o.PAGE_NOT_DATA,{title:y("sys.exception.noDataTitle"),subTitle:"",btnText:y("common.redo"),handler:()=>f(),icon:"/assets/no-data.f7e550cc.svg"}),l(d).set(o.NET_WORK_ERROR,{title:y("sys.exception.networkErrorTitle"),subTitle:y("sys.exception.networkErrorSubTitle"),btnText:y("common.redo"),handler:()=>f(),icon:"/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:a,icon:o,handler:u,status:c}=l(N)||{};return n(r,{class:_,status:c,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&n(i,{type:"primary",onClick:u},{default:()=>a}),icon:()=>o?n("img",{src:o},null):null})}}});export default d;
