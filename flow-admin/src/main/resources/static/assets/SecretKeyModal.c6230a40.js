var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(e,r,t)=>new Promise(((o,a)=>{var i=e=>{try{n(t.next(e))}catch(r){a(r)}},s=e=>{try{n(t.throw(e))}catch(r){a(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,s);n((t=t.apply(e,r)).next())}));import{B as s,a as n}from"./index.003114f2.js";import{_ as l}from"./BasicForm.1c70ff64.js";import{u as c}from"./useForm.24ec6471.js";import{a as d}from"./app.data.8e8a9adf.js";import{r as m}from"./app.e82cab33.js";import{a$ as f,h as p}from"./index.e4d4c34e.js";import{y as u,aN as j,ak as y,bY as b,az as v,cj as x,r as g,u as h,j as w,Z as F,B as O,F as S,a2 as B,v as C,a9 as P,J as M,a0 as _}from"./vendor.880b4c6c.js";/* empty css              */import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";const{TextArea:K}=y;var R=u({name:"SecretKeyModal",components:{BasicModal:s,BasicForm:l,Button:j,Input:y,TextArea:K,Space:b,Popconfirm:v,QuestionCircleOutlined:x},emits:["success","register"],setup(e,{emit:s}){const l=g(!0),u=g(""),{createMessage:j}=p(),{clipboardRef:y,copiedRef:b}=f(),[v,{resetFields:x,setFieldsValue:F}]=c({labelWidth:100,schemas:d,showActionButtonGroup:!1}),[O,{setModalProps:S}]=n((e=>i(this,null,(function*(){yield x(),S({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let i=e.record;u.value=i.secretKey,h(l)&&F(((e,i)=>{for(var s in i||(i={}))t.call(i,s)&&a(e,s,i[s]);if(r)for(var s of r(i))o.call(i,s)&&a(e,s,i[s]);return e})({},e.record))}))));return{registerModal:O,registerForm:v,getTitle:w((()=>h(l)?"修改":"新增")),handleCopy:function(){try{const e=h(u);if(!e)return void j.warning("请重新获取密钥！");y.value=e,h(b)&&j.success("拷贝成功！")}finally{S({confirmLoading:!1})}},refreshSecretKeyHandle:function(e){return i(this,null,(function*(){try{S({confirmLoading:!0});const r=yield m(e.id);u.value=r,F({secretKey:r})}finally{S({confirmLoading:!1})}}))}}}});const k={class:""},T=P(" 获取 "),A=P(" 复制 ");R.render=function(e,r,t,o,a,i){const s=F("TextArea"),n=F("QuestionCircleOutlined"),l=F("a-button"),c=F("Popconfirm"),d=F("Space"),m=F("BasicForm"),f=F("BasicModal");return O(),S(f,_(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:B((()=>[C(m,{onRegister:e.registerForm},{snSlot:B((({model:e,field:r})=>[P(M(e[r]),1)])),secretKeySlot:B((({model:r,field:t})=>[C("div",k,[C(s,{readonly:"",rows:4,value:r[t],"onUpdate:value":e=>r[t]=e},null,8,["value","onUpdate:value"]),C(d,{class:"mt-2"},{default:B((()=>[C(c,{title:"重新获取秘钥吗？",onConfirm:t=>e.refreshSecretKeyHandle(r)},{icon:B((()=>[C(n,{style:{color:"red"}})])),default:B((()=>[C(l,null,{default:B((()=>[T])),_:1})])),_:2},1032,["onConfirm"]),C(l,{type:"primary",onClick:e.handleCopy},{default:B((()=>[A])),_:1},8,["onClick"])])),_:2},1024)])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default R;
