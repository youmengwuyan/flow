import{_ as e}from"./TableImg.4a8df6f9.js";import"./BasicForm.1c70ff64.js";import{E as o}from"./index.96944955.js";import{c as i,d as t,j as s}from"./data.394956cb.js";import{b as a}from"./index.003114f2.js";import{P as r}from"./index.daa15fb0.js";import{y as n,Z as d,B as m,F as p,a2 as c,v as f,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";import"./index.e4d4c34e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0c12a40d.js";var l=n({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:r},setup(){const[e,{openModal:o}]=a();return{defaultHeader:function({filename:e,bookType:o}){s({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const b=j(" 导出 ");l.render=function(e,o,i,t,s,a){const r=d("a-button"),n=d("BasicTable"),j=d("ExpExcelModal"),l=d("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(r,{onClick:e.openModal},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
