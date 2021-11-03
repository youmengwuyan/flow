import{_ as e}from"./TableImg.4a8df6f9.js";import{g as o}from"./BasicForm.1c70ff64.js";import{u as t}from"./useTable.97bac6da.js";import{b as n,d as i,p as a,c as s}from"./modelInfo.370883b7.js";import{P as d}from"./index.daa15fb0.js";import r from"./FlowCategoryTree.1402d64a.js";import{b as l}from"./index.003114f2.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.3dc2b082.js";import f from"./index.3a8398d4.js";import{y as u,bt as b,bX as j,az as x,b5 as g,c1 as h,r as X,Y as y,u as v,z as w,A as C,Z as M,au as I,G as S,B as T,F as B,K as F,v as P}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.e82cab33.js";import{r as _,h as R}from"./index.e4d4c34e.js";import{A as z}from"./index.9a51d259.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              */import"./useContentViewHeight.0c12a40d.js";import"./Tree.vue_vue&type=style&index=0&lang.3ff637bc.js";import"./useContextMenu.8f78514f.js";import"./category.bf0d3b00.js";/* empty css              *//* empty css              */import"./index.4a494091.js";import"./index.esm.01aeab01.js";const{createMessage:O}=R();var W=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:d,FlowCategoryTree:r,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:x,Tag:g,DeleteOutlined:h,Authority:z,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:d}]=l(),[r,{openModal:c,setModalProps:f}]=l();X({});const u=X({}),b=X(!1),[j,{getForm:x,reload:g}]=t({title:"列表",api:n,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function w(e){d(!0,{record:e,isUpdate:!0})}function C(e){i([e.id]).then((e=>{g()}))}function M(e){b.value=!0,a(e.modelId).then((e=>{g(),O.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function I(e){b.value=!0,s(e.modelId).then((e=>{g()})).finally((()=>{b.value=!1}))}return y((()=>{const{updateSchema:e}=x();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:r,registerModal:o,handlePublish:M,handleStop:I,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:M.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:I.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:w.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:C.bind(null,e)}}]},handleCreate:function(){v(u).code?d(!0,{record:{categoryCode:v(u).code},isUpdate:!0}):O.warning("请选择分类！",2)},handleEdit:w,cancelDeleteRole:function(){},handleDelete:C,handleSuccess:function(){g()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};g({searchInfo:o})}}}});const k=F();w("data-v-163f921b");const D=P("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," 敬请期待！ ",-1);C();const H=k(((e,o,t,n,i,a)=>{const s=M("PageWrapper"),d=I("loading");return S((T(),B(s,{dense:"",contentFullHeight:"",fixedHeight:""},{default:k((()=>[D])),_:1},512)),[[d,e.loadingRef]])}));W.render=H,W.__scopeId="data-v-163f921b";export default W;
