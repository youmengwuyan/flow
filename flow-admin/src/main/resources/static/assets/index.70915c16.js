import{_ as e}from"./TableImg.4a8df6f9.js";import{g as o}from"./BasicForm.1c70ff64.js";import{u as t}from"./useTable.97bac6da.js";import{b as n}from"./index.003114f2.js";import{_ as i,g as a,c as r,s,d}from"./LoginLogModal.e9f6607a.js";import{h as c}from"./index.e4d4c34e.js";import{P as l}from"./perEnum.9a5ef72f.js";import{A as m}from"./index.9a51d259.js";import{y as u,Z as f,B as p,F as b,v as h,a2 as j,a9 as g}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=c(),[i,{openModal:m}]=n(),[u,{reload:f,getSelectRows:p}]=t({title:"列表",api:a,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:l,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{f()}))},handleDeleteAll:function(){const t=p();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{f()}))},new Promise(((t,i)=>{var a=e=>{try{s(n.next(e))}catch(o){i(o)}},r=e=>{try{s(n.throw(e))}catch(o){i(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){f()}}}});const v=g(" 删除 ");x.render=function(e,o,t,n,i,a){const r=f("a-button"),s=f("Authority"),d=f("TableAction"),c=f("BasicTable"),l=f("LoginLogModal");return p(),b("div",null,[h(c,{onRegister:e.registerTable},{toolbar:j((()=>[h(s,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:j((()=>[h(r,{type:"danger",onClick:e.handleDeleteAll},{default:j((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:j((({record:o})=>[h(d,{actions:[{tooltip:"删除",auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
