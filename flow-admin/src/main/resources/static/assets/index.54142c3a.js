import{_ as e}from"./TableImg.4a8df6f9.js";import{g as o}from"./BasicForm.1c70ff64.js";import{u as t}from"./useTable.97bac6da.js";import{g as i,d as a}from"./jobGrade.b129e9dc.js";import{P as n}from"./index.daa15fb0.js";import s from"./JobGradeTypeList.20f61f95.js";import{b as r}from"./index.003114f2.js";import{_ as d,c,s as l}from"./JobGradeModal.f7f395a6.js";import{y as m,az as p,r as f,u,Z as b,B as j,F as x,a2 as g,v as h,a9 as C}from"./vendor.880b4c6c.js";import{h as y}from"./index.e4d4c34e.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0c12a40d.js";import"./Tree.vue_vue&type=style&index=0&lang.3ff637bc.js";import"./useContextMenu.8f78514f.js";import"./jobGradeType.66c651ba.js";const{createMessage:T}=y();var w=m({name:"JobGrade",components:{BasicTable:e,PageWrapper:n,JobGradeTypeList:s,JobGradeModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o,setModalProps:n}]=r(),s=f({}),[d,{reload:m}]=t({title:"列表",api:i,immediate:!1,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function p(e){s.value=e;let o={typeId:e?e.id:""};m({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){u(s).code?(n({title:"新增职级"}),o(!0,{record:{typeId:u(s).id,typeCode:u(s).code},isUpdate:!0})):T.warning("请选择分类！",2)},handleEdit:function(e){n({title:"修改职级"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){a(e.id).then((()=>{m()}))},handleSuccess:function(){p(s.value)},handleSelect:p}}});const S=C("新增");w.render=function(e,o,t,i,a,n){const s=b("JobGradeTypeList"),r=b("a-button"),d=b("TableAction"),c=b("BasicTable"),l=b("JobGradeModal"),m=b("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:g((()=>[h(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[S])),_:1},8,["onClick"])])),action:g((({record:o})=>[h(d,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;
