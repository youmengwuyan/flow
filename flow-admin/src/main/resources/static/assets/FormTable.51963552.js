import{B as d}from"./TableImg.8efb1d09.js";import"./BasicForm.57c6e84a.js";import{u as F}from"./useTable.975d5dab.js";import{getBasicColumns as h,getFormConfig as k}from"./tableData.38d0f3c2.js";import{az as B,a as _,w as C,aB as m,o as p,k as b,B as t,C as s,p as a,i as c,F as y,n as E,t as T}from"./index.97f55544.js";import{A}from"./index.c0d032c8.js";import{d as D}from"./table.57204f15.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.1f9d3a9d.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./index.a512493f.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const w=_({components:{BasicTable:d,AAlert:A},setup(){const o=C([]),[e,{getForm:n}]=F({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:h(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onChange:r}});function u(){n().getFieldsValue()}function r(i){o.value=i}return{registerTable:e,getFormValues:u,checkedKeys:o,onSelectChange:r}}}),S={key:1};function V(o,e,n,u,r,i){const l=m("a-button"),f=m("a-alert"),g=m("BasicTable");return p(),b(g,{onRegister:o.registerTable},{"form-custom":t(()=>[s(" custom-slot ")]),headerTop:t(()=>[a(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(p(),c(y,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),a(l,{type:"link",onClick:e[0]||(e[0]=K=>o.checkedKeys=[]),size:"small"},{default:t(()=>[s("\u6E05\u7A7A")]),_:1})],64)):(p(),c("span",S,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[a(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[s("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $o=B(w,[["render",V]]);export{$o as default};
