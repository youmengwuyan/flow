import{_ as e}from"./TableImg.2184ae21.js";import{g as i}from"./BasicForm.f3cb7023.js";import{u as t}from"./useTable.e98ad9ef.js";import{d as o}from"./table.5ebd4b4d.js";import{y as n,Z as d,B as a,F as s,v as r,a2 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";import"./index.a33a5e4d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.98d9f37c.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";const l=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:i},setup(){const[e]=t({title:"TableAction组件及固定列示例",api:o,columns:l,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,i,t,o,n,l){const m=d("TableAction"),f=d("BasicTable");return a(),s("div",p,[r(f,{onRegister:e.registerTable},{action:c((({record:i})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
