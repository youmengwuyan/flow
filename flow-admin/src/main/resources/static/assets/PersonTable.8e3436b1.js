import{B as h}from"./TableImg.8efb1d09.js";import{l as k}from"./BasicForm.57c6e84a.js";import{u as C}from"./useTable.975d5dab.js";import{a as w,az as E,aB as r,o as B,i as _,p as u,B as c,C as D}from"./index.97f55544.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.1f9d3a9d.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],T=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=w({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:e}]=C({columns:g,showIndexColumn:!1,dataSource:T,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=e(),f=i.findIndex(b=>b.key===t.key);i.splice(f,1)}}function s(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){}function p(){const t=e(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:m,handleAdd:p,getDataSource:e,handleEditChange:d}}});function x(n,e,a,l,s,d){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return B(),_("div",null,[u(m,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:i})=>[u(p,{actions:n.createActions(o,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[D(" \u65B0\u589E\u6210\u5458 ")]),_:1},8,["onClick"])])}var Tt=E(N,[["render",x]]);export{Tt as default};
