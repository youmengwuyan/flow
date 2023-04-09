import{B as f}from"./TableImg.8efb1d09.js";import{l as b}from"./BasicForm.57c6e84a.js";import{u as h}from"./useTable.975d5dab.js";import{a as g}from"./system.8efdca8b.js";import{b as C}from"./index.1f9d3a9d.js";import{D as _,c as T,s as B}from"./DeptModal.b2a1f035.js";import{az as D,a as E,aB as e,o as M,i as S,p as i,B as p,C as R}from"./index.97f55544.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:b},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=h({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function v(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var wo=D(k,[["render",v]]);export{wo as default};
