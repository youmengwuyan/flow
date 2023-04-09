import{B as v}from"./TableImg.8efb1d09.js";import{l as M}from"./BasicForm.57c6e84a.js";import{u as F}from"./useTable.975d5dab.js";import{j as R,k as I,l as P,m as A}from"./dictionary.f5aa7fbb.js";import{P as $}from"./index.fe38133b.js";import{az as N,a as V,w as W,aB as r,o as f,i as K,p as b,B as h,k as g,C as U,l as C,G as j}from"./index.97f55544.js";import{b as z}from"./index.1f9d3a9d.js";import G from"./DictionaryModal.f94b9b6d.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./constantEnum.bf6653fb.js";const{createMessage:L}=j(),O=V({name:"DictionaryTable",components:{BasicTable:v,DictionaryModal:G,PageWrapper:$,TableAction:M},setup(e,{emit:l}){const[y,{openModal:s,setModalProps:c}]=z(),i=W(""),[p,{reload:n,setProps:u,setTableData:m,setSelectedRowKeys:d}]=F({title:"\u6570\u636E\u5B57\u5178\u5217\u8868",api:R,columns:I,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){if(i.value===""){L.warning("\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B\uFF01",2);return}c({title:"\u65B0\u589E\u5B57\u5178"}),s(!0,{record:{dicTypeId:i.value},isUpdate:!1})}function T(t){i.value=t,u({searchInfo:{dicTypeId:t}}),n({page:1})}function B(){m([]),i.value=""}function _(t,o){o.stopPropagation(),c({title:"\u4FEE\u6539\u5B57\u5178"}),s(!0,{record:t,isUpdate:!0})}function k(t,o){o.stopPropagation()}function D(t){A(t.id).then(()=>{n()})}function S(){setTimeout(()=>{n()},200)}function w(t){d([t.id]),l("handleSelect",t.id)}function E({keys:t,rows:o}){o&&o.length>0&&l("handleSelect",o[0].id)}return{registerTable:p,registerModal:y,dictTypeId:i,handleDeleteStop:k,clickDictionary:w,changeDictionary:E,filterByDictType:T,cleanTableData:B,handleCreate:a,handleEdit:_,handleDelete:D,handleSuccess:S}}}),q={class:"bg-white overflow-hidden dictionary"};function H(e,l,y,s,c,i){const p=r("a-button"),n=r("TableAction"),u=r("BasicTable"),m=r("DictionaryModal");return f(),K("div",q,[b(u,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h(()=>[e.dictTypeId!==""?(f(),g(p,{key:0,type:"primary",onClick:e.handleCreate},{default:h(()=>[U("\u65B0\u589E")]),_:1},8,["onClick"])):C("",!0)]),bodyCell:h(({column:d,record:a})=>[d.key==="action"?(f(),g(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,a),popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a),placement:"left"}}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister","onRowClick","onSelectionChange"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Je=N(O,[["render",H]]);export{Je as default};
