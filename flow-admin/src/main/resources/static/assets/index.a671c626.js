import{y as e,ak as o,b5 as n,cn as a,bY as t,bT as s,r,u as i,Z as l,B as d,F as c,a2 as p,v as m,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import{_ as f}from"./TableImg.2184ae21.js";import{g as h}from"./BasicForm.f3cb7023.js";import{u as g}from"./useTable.e98ad9ef.js";import{g as b,a as x,d as j,b as S}from"./role.0e6065cd.js";import{P as w}from"./index.cf1d4223.js";import C from"./CompanyTree.e2c7d915.js";import{h as P}from"./index.a33a5e4d.js";import{b as y}from"./index.98d9f37c.js";import{_ as v,s as T,c as R,p as I}from"./RoleModal.5d760c37.js";import M from"./index.d979f75b.js";import{b as k}from"./personal.f8dda76c.js";/* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d4b428eb.js";import"./Tree.vue_vue&type=style&index=0&lang.7c7fa1d7.js";import"./useContextMenu.e79ddf62.js";import"./company.eec3ae4b.js";import"./OrgTree.1d1f3155.js";import"./dept.8ded389d.js";const{createMessage:_}=P();var B=e({name:"RoleManagement",components:{BasicTable:f,PageWrapper:w,CompanyTree:C,RoleModal:v,PersonalSelector:M,TableAction:h,Input:o,Tag:n,Affix:a,Space:t,Search:o.Search,SettingOutlined:s},setup(){const[e,{openModal:o}]=y(),[n,{openModal:a,setModalProps:t}]=y(),s=r({}),l=r([]),d=r({}),c=r({});T.forEach((e=>{e&&(e.componentProps.onkeypress=e=>{13===e.keyCode&&m()})}));const[p,{reload:m}]=g({title:"列表",api:b,columns:R,formConfig:{labelWidth:120,schemas:T,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!1,pagination:!0,onExpand:(e,o)=>{e?(s.value=o,d.value[o.id]="",u(o.id,d.value[o.id])):l.value=[]},rowKey:"id",canResize:!1});function u(e,o){x({roleId:e,personal:{keyword:o||""}}).then((o=>{c.value[e]=o}))}return{personalColumns:I,currentRole:s,rolePersonalData:c,onSearchPerson:function(e,o){u(e,o)},searchPersonTxt:d,registerTable:p,registerModal:e,registerPersonalModal:n,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e,n){n.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleAddPersonal:function(e,o){o.stopPropagation(),s.value=e,x({roleId:e.id}).then((o=>{a(!0,{selectorProps:{multiSelect:!0,selectedList:o.map((e=>({code:e.code,name:e.name})))}}),t({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})})).finally((()=>{}))},handleDelete:function(e){e.children&&e.children.length>0?_.warning("有子节点，不能删除！"):j([e.id]).then((e=>{m()}))},handleDeletePersonal:function(e){k({roleId:e.roleId,personalId:e.personalId}).then((()=>{u(e.roleId,"")}))},handleSuccess:function(){m()},handleSettingPersonalSuccess:function(e){const o=e.map((e=>({id:e.id,code:e.code})));S({roleId:i(s).id,personalList:o}).then((()=>{l.value=[i(s).id],u(i(s).id,d.value[i(s).id])}))},handleSelect:function(e){m({searchInfo:{companyId:e?e.id:""}})}}}});const A=u("新增"),F=u(" 姓名 "),z={class:"manager-range",style:{"text-align":"right"}},D=u("中国石化"),O=u("中国石化");B.render=function(e,o,n,a,t,s){const r=l("CompanyTree"),i=l("Affix"),u=l("a-button"),f=l("TableAction"),h=l("Search"),g=l("Tag"),b=l("Space"),x=l("SettingOutlined"),j=l("BasicTable"),S=l("RoleModal"),w=l("PersonalSelector"),C=l("PageWrapper");return d(),c(C,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:p((()=>[m(i,{"offset-top":"8",class:"w-1/4 xl:w-1/5"},{default:p((()=>[m(r,{contentFullHeight:"",onSelect:e.handleSelect},null,8,["onSelect"])])),_:1}),m(j,{onRegister:e.registerTable,class:"personal w-3/4 xl:w-4/5"},{toolbar:p((()=>[m(u,{type:"primary",onClick:e.handleCreate},{default:p((()=>[A])),_:1},8,["onClick"])])),action:p((({record:o})=>[m(f,{actions:[{tooltip:"添加人员",icon:"ant-design:user-add",onClick:e.handleAddPersonal.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),expandedRowRender:p((({record:o,index:n,indent:a,expanded:t})=>[m(j,{title:"",size:"small",columns:e.personalColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,actionColumn:"{\r\n            align: 'center'\r\n          }",rowKey:"id",canResize:!1,searchInfo:{roleId:o.id},dataSource:e.rolePersonalData[o.id],class:"w-4/4 xl:w-5/5"},{customName:p((({rec:n})=>[m("span",null,[F,m(h,{value:e.searchPersonTxt[o.id],"onUpdate:value":n=>e.searchPersonTxt[o.id]=n,placeholder:"姓名/工号/手机",style:{width:"150px"},size:"small",allowClear:"",onSearch:n=>{e.onSearchPerson(o.id,n)}},null,8,["value","onUpdate:value","onSearch"])])])),action:p((({record:o})=>[m(f,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDeletePersonal.bind(null,o)}}]},null,8,["actions"])])),setManagerRange:p((({record:e})=>[m("div",z,[m(b,{size:"small"},{default:p((()=>[m(g,{color:"processing"},{default:p((()=>[D])),_:1}),m(g,{color:"processing"},{default:p((()=>[O])),_:1})])),_:1}),m(x,{class:"ant-btn-link"})])])),_:2},1032,["columns","searchInfo","dataSource"])])),_:1},8,["onRegister"]),m(S,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),m(w,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default B;
