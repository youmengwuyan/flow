import{_ as e}from"./TableImg.4a8df6f9.js";import{g as n}from"./BasicForm.1c70ff64.js";import{u as o}from"./useTable.97bac6da.js";import{y as t,Z as i,B as a,F as d,v as r,a2 as s,a9 as l}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";import"./index.e4d4c34e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.003114f2.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";const c=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:n},setup(){const[e,{getDataSource:n}]=o({columns:c,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function t(e){var n;null==(n=e.onEdit)||n.call(e,!0)}function i(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=n(),t=o.findIndex((n=>n.key===e.key));o.splice(t,1)}}function a(e){var n;null==(n=e.onEdit)||n.call(e,!1,!0)}return{registerTable:e,handleEdit:t,createActions:function(e,n){return e.editable?[{label:"保存",onClick:a.bind(null,e,n)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:i.bind(null,e,n)}}]:[{label:"编辑",onClick:t.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=n(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(o)},getDataSource:n,handleEditChange:function(e){}}}});const f=l(" 新增成员 ");p.render=function(e,n,o,t,l,c){const m=i("TableAction"),p=i("BasicTable"),u=i("a-button");return a(),d("div",null,[r(p,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{action:s((({record:n,column:o})=>[r(m,{actions:e.createActions(n,o)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"]),r(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[f])),_:1},8,["onClick"])])};export default p;
