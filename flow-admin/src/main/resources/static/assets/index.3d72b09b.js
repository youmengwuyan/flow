import{_ as e}from"./TableImg.2184ae21.js";import{g as o}from"./BasicForm.f3cb7023.js";import{u as i}from"./useTable.e98ad9ef.js";import{g as n,d as t}from"./account.dec87211.js";import{P as s}from"./index.cf1d4223.js";import{b as a}from"./index.98d9f37c.js";import r from"./AccountModal.ab8fd6dd.js";import d from"./PasswordModal.de0965db.js";import c from"./SetGroupModal.9d61b459.js";import{c as l,s as u}from"./account.data.a470356e.js";import{y as p,bt as m,bB as f,cm as b,r as g,Z as j,B as h,F as w,v as S,a2 as v,a9 as x}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";import"./index.a33a5e4d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";/* empty css              */import"./useContentViewHeight.d4b428eb.js";import"./group.6ffb5b4b.js";var C=p({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:r,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:m,Image:f,UserOutlined:b},setup(){const[e,{openModal:o}]=a(),[s,{openModal:r}]=a(),[d,{openModal:c}]=a(),p=g(""),m=g(!1),[f,{reload:b}]=i({title:"列表",api:n,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:p,previewImageVisible:m,previewImageHandle:function(e){e&&(p.value=e,m.value=!0)},previewImageVisibleChange:function(e,o){m.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){r(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){t([e.id]).then((e=>{b()}))},handleSuccess:function(){b()},handlePasswordSuccess:function(){b()},handleSetGroupSuccess:function(){b()}}}});const M=x(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};C.render=function(e,o,i,n,t,s){const a=j("a-button"),r=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),p=j("AccountModal"),m=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(a,{type:"primary",onClick:e.handleCreate},{default:v((()=>[M])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(r,{actions:[{tooltip:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{tooltip:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(m,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default C;
