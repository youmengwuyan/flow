import{_ as e}from"./TableImg.4a8df6f9.js";import{g as i}from"./BasicForm.1c70ff64.js";import{u as t}from"./useTable.97bac6da.js";import{d as o}from"./table.2da3cb97.js";import{y as n,Z as d,B as a,F as s,v as r,a2 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";import"./index.e4d4c34e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.003114f2.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";const l=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:i},setup(){const[e]=t({title:"TableAction组件及固定列示例",api:o,columns:l,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,i,t,o,n,l){const m=d("TableAction"),b=d("BasicTable");return a(),s("div",p,[r(b,{onRegister:e.registerTable},{action:c((({record:i})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
