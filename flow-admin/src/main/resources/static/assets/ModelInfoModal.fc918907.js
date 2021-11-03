var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t,a)=>new Promise(((o,l)=>{var r=e=>{try{i(a.next(e))}catch(t){l(t)}},s=e=>{try{i(a.throw(e))}catch(t){l(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);i((a=a.apply(e,t)).next())}));import{B as s,a as i}from"./index.003114f2.js";import{_ as n}from"./BasicForm.1c70ff64.js";import{u as d}from"./useForm.24ec6471.js";import{af as m,b5 as p,y as c,r as f,u,j as g,Z as b,B as y,F as h,a2 as w,v,a0 as I}from"./vendor.880b4c6c.js";/* empty css              */import{e as x,s as j}from"./modelInfo.370883b7.js";import{a as P}from"./app.e82cab33.js";import{r as S}from"./index.e4d4c34e.js";const F=[{title:"名称",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"分类名称",dataIndex:"categoryName",width:100,align:"left"},{title:"系统",dataIndex:"appName",width:100,align:"left"},{title:"应用范围",dataIndex:"appliedRangeName",width:100,align:"left"},{title:"状态",dataIndex:"statusName",width:70,align:"center",customRender:({record:e})=>{const{status:t,statusName:a}=e;return m(p,{color:2==~~t?"yellow":3==~~t?"green":4==~~t?"red":"gray"},(()=>a))}},{title:"更新时间",dataIndex:"updateTime",width:120,align:"left"}],M=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"系统",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],O=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"modelKey",label:"标识",component:"Input",required:!0},{field:"appSn",label:"所属系统",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}];var N=c({name:"ModelInfoModal",components:{BasicModal:s,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const n=f(!0),m=S(),[p,{setFieldsValue:c,updateSchema:b,resetFields:y,validate:h}]=d({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),[w,{setModalProps:v,changeLoading:I,closeModal:F}]=i((e=>r(this,null,(function*(){y(),v({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate),I(!0);let r=null;try{r=yield P()}finally{I(!1)}let s=e.record;yield b([{field:"appSn",componentProps:{options:r,labelField:"id"}},{field:"modelKey",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:150,message:"字符长度不能大于150！"},...(e={id:u(n)&&s&&s.id||"",field:"modelKey",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?x({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),u(n)&&c(((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&l(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&l(e,s,r[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:p,getTitle:g((()=>u(n)?"编辑":"新增")),handleSubmit:function(){return r(this,null,(function*(){try{v({confirmLoading:!0});const e=yield h(),t=yield j(e);m("/flowable/bpmn/designer?modelId="+t.modelId),F(),s("success")}finally{I(!1),v({confirmLoading:!1})}}))}}}});N.render=function(e,t,a,o,l,r){const s=b("BasicForm"),i=b("BasicModal");return y(),h(i,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[v(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});export{B as M,N as _,F as c,M as s};
