import{B as P}from"./TableImg.ec6a92c5.js";import"./useForm.9f66b55d.js";import{u as S}from"./useTable.b57baf37.js";import{P as y}from"./index.b7a6fc4b.js";import{A as D,a_ as b,bb as f,ar as w,bv as i,ca as u,bq as p,ba as C,ap as I,a0 as t,B as m,a1 as j,a5 as e,w as r,H as o,ad as x,J as a,D as k,ao as E,aC as $,aa as R,ac as L}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{launchedTableSchema as N,searchFormSchema as V}from"./data.d8012443.js";import W from"./ProcessHeader.37b347aa.js";import H from"./LaunchButton.0432ea9b.js";import{i as K,h as z}from"./process.635bd4e6.js";import{_ as M}from"./index.142c38e7.js";/* empty css              *//* empty css                *//* empty css                */import"./useWindowSizeFn.e269959a.js";import"./index.200f7a3e.js";import"./useSortable.05f89b99.js";/* empty css                *//* empty css               */import"./index.b3cdb03b.js";import"./download.6a1de100.js";import"./index.03597360.js";/* empty css               *//* empty css               */import"./useContentViewHeight.c781d797.js";const q=D({components:{BasicTable:P,ProcessHeader:W,LaunchButton:H,PageWrapper:y,[b.name]:b,[f.name]:f,AEmpty:w,[i.name]:i,[i.Item.name]:i.Item,[u.name]:u,[u.Step.name]:u.Step,[p.name]:p,[p.TabPane.name]:p.TabPane,Tag:C,Popover:I},setup(){const[c,{getForm:d}]=S({api:K,title:"",columns:N,formConfig:{labelWidth:120,schemas:V,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return z().then(l=>{const{updateSchema:_}=d();_({field:"appSn",componentProps:{options:l}})}),{registerLaunchedTable:c}}}),J={class:"m-1 desc-wrap process"};function O(c,d,l,_,G,Q){const g=t("launch-button"),h=t("process-header"),F=t("router-link"),v=t("Tag"),B=t("Popover"),A=t("BasicTable"),T=t("PageWrapper");return m(),j(T,{title:"\u6D41\u7A0B\u4E2D\u5FC3",contentBackground:"",class:"!mt-4"},{extra:e(()=>[r(g)]),footer:e(()=>[r(h,{current:"launched"})]),default:e(()=>[o("div",J,[r(A,{onRegister:c.registerLaunchedTable},{nameRender:e(({record:s})=>[r(F,{to:`/process/view/${s.processDefinitionKey}?taskId=${s.taskId||""}&procInstId=${s.processInstanceId}&businessKey=${s.businessKey}`},{default:e(()=>[x(a(s.formName),1)]),_:2},1032,["to"])]),currentAssigneesRender:e(({record:s})=>[s.currentAssignees&&s.currentAssignees.length>0?(m(!0),k(R,{key:0},E(s.currentAssignees,n=>(m(),j(B,{title:n.type==="user"?"\u4EBA\u5458\u4FE1\u606F":"\u89D2\u8272\u4FE1\u606F"},$({default:e(()=>[r(v,{color:"warning"},{default:e(()=>[x(a(n.name),1)]),_:2},1024)]),_:2},[n.type==="user"?{name:"content",fn:e(()=>[o("div",null,"\u59D3\u540D\uFF1A"+a(n.name),1),o("div",null,"\u5DE5\u53F7\uFF1A"+a(n.code),1),o("div",null,"\u624B\u673A\uFF1A"+a(n.mobile),1)])}:{name:"content",fn:e(()=>[o("div",null,"\u540D\u79F0\uFF1A"+a(n.name),1),o("div",null,"\u6807\u8BC6\uFF1A"+a(n.code),1)])}]),1032,["title"]))),256)):L("",!0)]),_:1},8,["onRegister"])])]),_:1})}var Se=M(q,[["render",O]]);export{Se as default};
