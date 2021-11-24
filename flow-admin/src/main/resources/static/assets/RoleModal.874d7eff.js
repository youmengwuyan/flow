var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t,a)=>new Promise(((o,r)=>{var n=e=>{try{l(a.next(e))}catch(t){r(t)}},i=e=>{try{l(a.throw(e))}catch(t){r(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,i);l((a=a.apply(e,t)).next())}));import{B as i,a as l}from"./index.acbe981f.js";import{_ as s}from"./BasicForm.5cce9782.js";import{u as d}from"./useForm.5da8fb25.js";import{c,s as m}from"./role.b2467794.js";import{g as p}from"./company.b64b7a7b.js";import{y as u,r as f,u as g,j as b,Z as y,B as h,F as v,a2 as x,v as I,a0 as w}from"./vendor.880b4c6c.js";const P=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"sn",width:120,align:"left"},{title:"所属公司",dataIndex:"companyName",width:120,align:"left"},{title:"创建时间",dataIndex:"createTime",width:180},{title:"操作",dataIndex:"action",width:120,slots:{customRender:"action"}}],j=[{title:"操作",dataIndex:"action",width:50,slots:{customRender:"action"}},{dataIndex:"name",align:"left",width:200,slots:{title:"customName"},customRender:({record:e})=>e.name+" - ["+e.code+"]"},{title:"所属公司",dataIndex:"companyName",align:"left"},{title:"所属部门",dataIndex:"deptName",align:"left"}],F=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],N=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"编码不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"sn",label:"编码",component:"Input",required:!0},{field:"companyId",label:"所属公司",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{label:"备注",field:"note",component:"InputTextArea",rules:[{max:1024,message:"字符长度不能大于1024！"}]}];var R=u({name:"RoleModal",components:{BasicModal:i,BasicForm:s},emits:["success","register"],setup(e,{emit:i}){const s=f(!0),[u,{setFieldsValue:y,updateSchema:h,resetFields:v,validate:x}]=d({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:w,closeModal:P}]=l((e=>n(this,null,(function*(){yield v(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate);let n=e.record;const i=yield p();yield h([{field:"companyId",componentProps:{treeData:i}},{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:64,message:"字符长度不能大于64！"},...(e={id:g(s)&&n&&n.id||"",field:"sn",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?c({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(s)&&y(((e,n)=>{for(var i in n||(n={}))a.call(n,i)&&r(e,i,n[i]);if(t)for(var i of t(n))o.call(n,i)&&r(e,i,n[i]);return e})({},e.record))}))));return{registerModal:I,registerForm:u,getTitle:b((()=>g(s)?"修改":"新增")),handleSubmit:function(){return n(this,null,(function*(){try{w({confirmLoading:!0});const e=yield x();yield m(e),P(),i("success")}finally{w({confirmLoading:!1})}}))}}}});R.render=function(e,t,a,o,r,n){const i=y("BasicForm"),l=y("BasicModal");return h(),v(l,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[I(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});export{O as R,R as _,P as c,j as p,F as s};
