import{_ as e}from"./TableImg.4a8df6f9.js";import{g as t}from"./BasicForm.1c70ff64.js";import{u as i}from"./useTable.97bac6da.js";import{g as o,d as a}from"./dept.264510fe.js";import{P as n}from"./index.daa15fb0.js";import r from"./DictTypeTree.862693f2.js";import s from"./DictionaryTable.f32e54fc.js";import c from"./DictionaryItemTable.bd9a400c.js";import{h as d}from"./index.e4d4c34e.js";import{b as l}from"./index.003114f2.js";import{k as m,l as f}from"./dictionary.747fed7d.js";import{y as p,r as u,Z as j,B as b,F as x,a2 as y,v as T}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0c12a40d.js";import"./Tree.vue_vue&type=style&index=0&lang.3ff637bc.js";import"./useContextMenu.8f78514f.js";import"./dicType.53969ba2.js";import"./DictionaryModal.0f69e73c.js";import"./DictionaryItemModal.616337f0.js";const{createMessage:h}=d();var D=p({components:{BasicTable:e,PageWrapper:n,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:c,TableAction:t},setup(){const[e,{openModal:t}]=l(),n=u(),r=u(),[s,{reload:c}]=i({title:"列表",api:o,columns:m,formConfig:{labelWidth:120,schemas:f,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:n,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):a([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},handleDictTypeSelect:function(e=""){e?(n.value.filterByDictType(e),r.value.cleanTableData()):n.value.cleanTableData()}}}});D.render=function(e,t,i,o,a,n){const r=j("DictTypeTree"),s=j("DictionaryTable"),c=j("DictionaryItemTable"),d=j("PageWrapper");return b(),x(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-1/5 xl:w-1/5",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),T(c,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)])),_:1})};export default D;
