var D=Object.defineProperty;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var B=(r,t,e)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,E=(r,t)=>{for(var e in t||(t={}))v.call(t,e)&&B(r,e,t[e]);if(g)for(var e of g(t))R.call(t,e)&&B(r,e,t[e]);return r};var f=(r,t,e)=>new Promise((u,a)=>{var p=i=>{try{s(e.next(i))}catch(n){a(n)}},m=i=>{try{s(e.throw(i))}catch(n){a(n)}},s=i=>i.done?u(i.value):Promise.resolve(i.value).then(p,m);s((e=e.apply(r,t)).next())});import{B as P,a as k}from"./index.1f9d3a9d.js";import{B as C}from"./BasicForm.57c6e84a.js";import{u as N}from"./useForm.1f0c5dd1.js";import{f as $,g as A,h as S}from"./dictionary.f5aa7fbb.js";import{F as V}from"./constantEnum.bf6653fb.js";import{az as b,a as O,w as j,j as h,h as L,aB as y,o as U,k as x,B as T,p as q,aC as z}from"./index.97f55544.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const G=O({name:"DictionaryModal",components:{BasicModal:P,BasicForm:C},emits:["success","register"],setup(r,{emit:t}){const e=j(!0),[u,{setFieldsValue:a,updateSchema:p,resetFields:m,validate:s}]=N({labelWidth:100,schemas:$,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(c,F)=>F?A({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[n,{setModalProps:l,closeModal:w}]=k(o=>f(this,null,function*(){yield m(),l({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let c=o.record;yield p([{field:"code",dynamicRules:()=>[{whitespace:!0,required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(V.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{pattern:new RegExp("^.{1,32}$"),type:"string",message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...i({id:h(e)&&c&&c.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),a(E({},o.record))})),M=L(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{l({confirmLoading:!0});const o=yield s();yield S(o),w(),t("success")}finally{l({confirmLoading:!1})}})}return{registerModal:n,registerForm:u,getTitle:M,handleSubmit:_}}});function I(r,t,e,u,a,p){const m=y("BasicForm"),s=y("BasicModal");return U(),x(s,z(r.$attrs,{onRegister:r.registerModal,title:r.getTitle,onOk:r.handleSubmit}),{default:T(()=>[q(m,{onRegister:r.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Se=b(G,[["render",I]]);export{Se as default};
