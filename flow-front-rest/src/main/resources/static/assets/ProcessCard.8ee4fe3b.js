import{A as y,bb as _,bD as i,r as h,a0 as n,B as r,a1 as x,a5 as t,w as a,D as f,ad as d,J as j,a4 as k}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                */import{todoTableSchema as v,haveDownTableSchema as C,dynamicInfoItems as $}from"./data.ea7bd8a3.js";import{h as w}from"./header.d801b988.js";import{_ as K,I as D}from"./index.eb81839e.js";import{B}from"./TableImg.d5685aba.js";import"./useForm.ae28d85e.js";import{u as g}from"./useTable.91f058b1.js";import{a as R,b as S}from"./process.b4fbb99a.js";/* empty css                *//* empty css              */import"./index.a7d13475.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.e269959a.js";import"./useContentViewHeight.2add70b5.js";/* empty css                *//* empty css                *//* empty css               */import"./index.df597b92.js";/* empty css               */import"./useSortable.76e865c9.js";/* empty css               */import"./index.a8dc01b1.js";import"./download.29d0d464.js";import"./index.3a95e68c.js";const F=[{key:"todo",tab:"\u5F85\u529E"},{key:"haveDown",tab:"\u5DF2\u529E"}],L=y({components:{Card:_,List:i,ListItem:i.Item,ListItemMeta:i.Item.Meta,Icon:D,BasicTable:B},setup(s){const o=h("todo"),[p]=g({api:R,title:"",columns:v,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1}),[m]=g({api:S,title:"",columns:C,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1});return{items:$,onTabChange:(b,c)=>{o.value=b},headerImg:w,activeKey:o,registerTodoTable:p,registerHaveDownTable:m,tabList:F}}}),z=d("\u66F4\u591A"),A={key:0},E={key:1};function M(s,o,p,m,I,b){const c=n("a-button"),l=n("router-link"),u=n("BasicTable"),T=n("Card");return r(),x(T,k(s.$attrs,{tabList:s.tabList,activeTabKey:s.activeKey,onTabChange:o[0]||(o[0]=e=>s.onTabChange(e,"todo")),bodyStyle:"padding-top:0;"}),{tabBarExtraContent:t(()=>[a(c,{type:"link",size:"small"},{default:t(()=>[z]),_:1})]),default:t(()=>[s.activeKey==="todo"?(r(),f("p",A,[a(u,{onRegister:s.registerTodoTable,class:"mt-0"},{nameRender:t(({record:e})=>[a(l,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:t(()=>[d(j(e.formName),1)]),_:2},1032,["to"])]),_:1},8,["onRegister"])])):(r(),f("p",E,[a(u,{onRegister:s.registerHaveDownTable},{nameRender:t(({record:e})=>[a(l,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:t(()=>[d(j(e.formName),1)]),_:2},1032,["to"])]),_:1},8,["onRegister"])]))]),_:1},16,["tabList","activeTabKey"])}var fe=K(L,[["render",M]]);export{fe as default};
