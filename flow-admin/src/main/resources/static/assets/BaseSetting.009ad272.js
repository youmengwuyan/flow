import{y as a,aN as e,aW as t,aV as o,X as s,j as r,z as i,A as n,Z as d,B as p,F as c,v as m,K as u,a9 as l}from"./vendor.880b4c6c.js";/* empty css              */import{_ as f}from"./BasicForm.1c70ff64.js";import{u as j}from"./useForm.24ec6471.js";import{ag as v,f as x,h as b}from"./index.e4d4c34e.js";import{a as h}from"./index.7c9d4a7c.js";import{h as g}from"./header.d801b988.js";import{a as A}from"./account.ce8408a3.js";import{b as C}from"./data.08d7c751.js";import{u as w}from"./upload.63e92aa1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.003114f2.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              *//* empty css              */var _=a({components:{BasicForm:f,CollapseContainer:v,Button:e,ARow:t,ACol:o,CropperAvatar:h},setup(){const{createMessage:a}=b(),e=x(),[t,{setFieldsValue:o}]=j({labelWidth:120,schemas:C,showActionButtonGroup:!1});s((()=>{return a=this,e=null,t=function*(){const a=yield A();o(a)},new Promise(((o,s)=>{var r=a=>{try{n(t.next(a))}catch(e){s(e)}},i=a=>{try{n(t.throw(a))}catch(e){s(e)}},n=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,i);n((t=t.apply(a,e)).next())}));var a,e,t}));return{avatar:r((()=>{const{avatar:a}=e.getUserInfo;return a||g})),register:t,uploadApi:w,updateAvatar:function(a){const t=e.getUserInfo;t.avatar=a,e.setUserInfo(t)},handleSubmit:()=>{a.success("更新成功！")}}}});const y=u("data-v-04c101e3");i("data-v-04c101e3");const B={class:"change-avatar"},F=m("div",{class:"mb-2"}," 头像 ",-1),I=l(" 更新基本信息 ");n();const P=y(((a,e,t,o,s,r)=>{const i=d("BasicForm"),n=d("a-col"),u=d("CropperAvatar"),l=d("a-row"),f=d("Button"),j=d("CollapseContainer");return p(),c(j,{title:"基本设置",canExpan:!1},{default:y((()=>[m(l,{gutter:24},{default:y((()=>[m(n,{span:14},{default:y((()=>[m(i,{onRegister:a.register},null,8,["onRegister"])])),_:1}),m(n,{span:10},{default:y((()=>[m("div",B,[F,m(u,{uploadApi:a.uploadApi,value:a.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:a.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])])),_:1})])),_:1}),m(f,{type:"primary",onClick:a.handleSubmit},{default:y((()=>[I])),_:1},8,["onClick"])])),_:1})}));_.render=P,_.__scopeId="data-v-04c101e3";export default _;
