import{c as e,f as r,e as s}from"./index.8c1d7da4.js";import{B as a,a as o}from"./index.acbe981f.js";import{_ as t}from"./BasicForm.5cce9782.js";import{u as i}from"./useForm.5da8fb25.js";import{u as n}from"./lock.a75cff66.js";import{h as d}from"./header.d801b988.js";import{y as c,j as l,Z as m,B as p,F as f,a2 as u,v as x,J as j,a9 as b,a0 as h}from"./vendor.880b4c6c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";var v=c({name:"LockModal",components:{BasicModal:a,BasicForm:t},setup(){const{t:a}=s(),{prefixCls:t}=e("header-lock-modal"),c=r(),m=n(),p=l((()=>{var e;return null==(e=c.getUserInfo)?void 0:e.realName})),[f,{closeModal:u}]=o(),[x,{validateFields:j,resetFields:b}]=i({showActionButtonGroup:!1,schemas:[{field:"password",label:a("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:a,prefixCls:t,getRealName:p,register:f,registerForm:x,handleLock:function(){return e=this,r=null,s=function*(){const e=(yield j()).password;u(),m.setLockInfo({isLock:!0,pwd:e}),yield b()},new Promise(((a,o)=>{var t=e=>{try{n(s.next(e))}catch(r){o(r)}},i=e=>{try{n(s.throw(e))}catch(r){o(r)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,i);n((s=s.apply(e,r)).next())}));var e,r,s},avatar:l((()=>{const{avatar:e}=c.getUserInfo;return e||d}))}}});v.render=function(e,r,s,a,o,t){const i=m("BasicForm"),n=m("a-button"),d=m("BasicModal");return p(),f(d,h({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:u((()=>[x("div",{class:`${e.prefixCls}__entry`},[x("div",{class:`${e.prefixCls}__header`},[x("img",{src:e.avatar,class:`${e.prefixCls}__header-img`},null,10,["src"]),x("p",{class:`${e.prefixCls}__header-name`},j(e.getRealName),3)],2),x(i,{onRegister:e.registerForm},null,8,["onRegister"]),x("div",{class:`${e.prefixCls}__footer`},[x(n,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:u((()=>[b(j(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default v;
