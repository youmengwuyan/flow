import{B as e}from"./index.003114f2.js";import{D as t}from"./index.81fbb8fe.js";import{e as s}from"./index.e4d4c34e.js";import{getDescSchema as r}from"./data.8178cb12.js";import{u as o}from"./useDescription.8ab64c09.js";import{y as i,Z as a,B as n,F as c,a2 as d,v as m,a0 as p}from"./vendor.880b4c6c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */var f=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=o({column:2,schema:r()});return{register:t,useI18n:s,t:e}}});f.render=function(e,t,s,r,o,i){const f=a("Description"),l=a("BasicModal");return n(),c(l,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:d((()=>[m(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
