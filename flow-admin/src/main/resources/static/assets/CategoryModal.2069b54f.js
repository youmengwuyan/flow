var I=Object.defineProperty,P=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var h=(u,t,e)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,B=(u,t)=>{for(var e in t||(t={}))y.call(t,e)&&h(u,e,t[e]);if(E)for(var e of E(t))S.call(t,e)&&h(u,e,t[e]);return u},w=(u,t)=>P(u,x(t));var F=(u,t,e)=>new Promise((l,r)=>{var i=a=>{try{s(e.next(a))}catch(c){r(c)}},d=a=>{try{s(e.throw(a))}catch(c){r(c)}},s=a=>a.done?l(a.value):Promise.resolve(a.value).then(i,d);s((e=e.apply(u,t)).next())});import{B as _,a as M}from"./index.1f9d3a9d.js";import{B as N}from"./BasicForm.57c6e84a.js";import{u as q}from"./useForm.1f0c5dd1.js";import{bU as k,az as v,a as R,w as T,j as f,h as $,aB as D,o as V,k as j,B as z,p as O,aC as U}from"./index.97f55544.js";import{T as L}from"./index.8e778cab.js";import{c as W,s as Z}from"./category.c0a41582.js";import{g as G}from"./company.dfd397fe.js";const se=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:100,align:"left"},{title:"\u7B80\u79F0",dataIndex:"shortName",width:100,align:"left"},{title:"\u6240\u5C5E\u516C\u53F8",dataIndex:"cName",width:100,align:"left"},{title:"\u524D\u53F0\u663E\u793A",dataIndex:"frontShow",width:80,customRender:({record:u})=>{const e=~~u.frontShow===1,l=e?"green":"red",r=e?"\u663E\u793A":"\u9690\u85CF";return k(L,{color:l},()=>r)}},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:80},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u63CF\u8FF0",dataIndex:"note",align:"left"}],ne=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],H=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1,colProps:{span:24}},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}],colProps:{span:24}},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",colProps:{span:24}},{field:"shortName",label:"\u7B80\u79F0",required:!1,component:"Input",rules:[{whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}],colProps:{span:24}},{field:"companyId",label:"\u6240\u5C5E\u516C\u53F8",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",getPopupContainer:()=>document.body},required:!0,colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{field:"frontShow",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u663E\u793A",unCheckedChildren:"\u9690\u85CF"},colProps:{span:24}},{field:"note",label:"\u63CF\u8FF0",required:!1,component:"InputTextArea",rules:[{max:400,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E400\uFF01"}],colProps:{span:24}}],J=R({name:"CategoryModal",components:{BasicModal:_,BasicForm:N},emits:["success","register"],setup(u,{emit:t}){const e=T(!0),[l,{resetFields:r,updateSchema:i,setFieldsValue:d,validate:s}]=q({labelWidth:100,schemas:H,showActionButtonGroup:!1}),a=o=>[{trigger:"blur",validator:(g,n)=>n?W({id:o.id,field:o.field,fieldValue:n,fieldName:o.fieldName}).then(p=>p?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[c,{setModalProps:m,closeModal:C}]=M(o=>F(this,null,function*(){yield r(),m({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);const g=yield G();i([{field:"companyId",componentProps:{treeData:g}}]);let n=o.record;yield i([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[a-zA-Z_]{1,}[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\u4E14\u4EE5\u82F1\u6587\u6216\u4E0B\u5212\u7EBF\u5F00\u5934\uFF01"},{max:30,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E30\uFF01"},...a({id:f(e)&&n&&n.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),f(e)&&d(w(B({},n),{frontShow:n.frontShow===1}))})),b=$(()=>f(e)?"\u4FEE\u6539":"\u65B0\u589E");function A(){return F(this,null,function*(){try{m({confirmLoading:!0});const o=yield s();o.frontShow=o.frontShow?1:0,yield Z(o),C(),t("success")}finally{m({confirmLoading:!1})}})}return{registerModal:c,registerForm:l,getTitle:b,handleSubmit:A}}});function K(u,t,e,l,r,i){const d=D("BasicForm"),s=D("BasicModal");return V(),j(s,U(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:z(()=>[O(d,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Q=v(J,[["render",K]]),le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});export{Q as C,le as a,se as c,ne as s};
