import{_ as e}from"./TableImg.e8129589.js";import"./BasicForm.5cce9782.js";import{u as i}from"./useTable.abd431f8.js";import{getBasicColumns as o}from"./tableData.3f3da3f1.js";import{d as r}from"./table.9957cd5e.js";import{y as s,Z as t,B as n,F as a,v as d}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";import"./index.8c1d7da4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.acbe981f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";var m=s({components:{BasicTable:e},setup(){const[e]=i({title:"表尾行合计示例",api:r,rowSelection:{type:"checkbox"},columns:o(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};m.render=function(e,i,o,r,s,m){const p=t("BasicTable");return n(),a("div",c,[d(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;
