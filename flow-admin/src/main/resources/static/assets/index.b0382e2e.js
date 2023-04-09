import{B as y}from"./TableImg.8efb1d09.js";import{l as B}from"./BasicForm.57c6e84a.js";import{u as M}from"./useTable.975d5dab.js";import{g as E,d as T}from"./app.789f9882.js";import{c as k,s as A}from"./app.data.ed1b4487.js";import _ from"./AppModal.96d9a875.js";import F from"./SecretKeyModal.771f8e7c.js";import{b as S}from"./index.1f9d3a9d.js";import{az as K,a as R,aB as i,o as b,i as w,p as n,B as c,C as v,k as D,l as U}from"./index.97f55544.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./constantEnum.bf6653fb.js";const $=R({name:"App",components:{BasicTable:y,TableAction:B,AppModal:_,SecretKeyModal:F},setup(){const[e,{openModal:a}]=S(),[d,{openModal:f,setModalProps:h}]=S(),[C,{reload:t}]=M({title:"\u5217\u8868",api:E,columns:k,formConfig:{labelWidth:100,schemas:A,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"\u64CD\u4F5C",dataIndex:"action"}});function s(){a(!0,{isUpdate:!1})}function l(o){f(!0,{record:o,isUpdate:!0}),h({title:`\u4FEE\u6539\u3010${o.name}\u3011\u7684\u5BC6\u94A5`,showOkBtn:!1,cancelText:"\u5173\u95ED"})}function p(o){a(!0,{record:o,isUpdate:!0})}function m(o){T([o.id]).then(()=>{t()})}function u(){setTimeout(()=>{t()},200)}function r(){setTimeout(()=>(t(),Promise.resolve(!0)),200)}function g(){setTimeout(()=>{t()},200)}return{registerTable:C,registerModal:e,registerSecretKeyModal:d,handleCloseFunc:r,handleCreate:s,handleEditSecretKey:l,handleEdit:p,handleDelete:m,handleSuccess:u,handleUpdateSecretKeySuccess:g}}});function I(e,a,d,f,h,C){const t=i("a-button"),s=i("TableAction"),l=i("BasicTable"),p=i("AppModal"),m=i("SecretKeyModal");return b(),w("div",null,[n(l,{onRegister:e.registerTable},{toolbar:c(()=>[n(t,{type:"primary",onClick:e.handleCreate},{default:c(()=>[v(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:c(({column:u,record:r})=>[u.key==="action"?(b(),D(s,{key:0,actions:[{tooltip:"\u67E5\u770B\u5BC6\u94A5",icon:"ant-design:key-outlined",onClick:e.handleEditSecretKey.bind(null,r)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):U("",!0)]),_:1},8,["onRegister"]),n(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),n(m,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])}var Ve=K($,[["render",I]]);export{Ve as default};
