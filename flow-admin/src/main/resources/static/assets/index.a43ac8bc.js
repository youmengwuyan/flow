var d=(e,i,o)=>new Promise((p,t)=>{var m=r=>{try{u(o.next(r))}catch(a){t(a)}},s=r=>{try{u(o.throw(r))}catch(a){t(a)}},u=r=>r.done?p(r.value):Promise.resolve(r.value).then(m,s);u((o=o.apply(e,i)).next())});import{P as F}from"./index.fe38133b.js";import{B as _}from"./BasicForm.57c6e84a.js";import{u as C}from"./useForm.1f0c5dd1.js";import{az as w,a as h,aB as n,o as E,k as g,B as c,n as f,p as l,C as B}from"./index.97f55544.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./eagerComputed.009c9352.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.a512493f.js";import"./index.1f9d3a9d.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.c0d032c8.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(i,o)=>o?o!==e.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],A=h({name:"ChangePassword",components:{BasicForm:_,PageWrapper:F},setup(){const[e,{validate:i,resetFields:o}]=C({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function p(){return d(this,null,function*(){try{const t=yield i(),{passwordOld:m,passwordNew:s}=t}catch(t){}})}return{register:e,resetFields:o,handleSubmit:p}}}),b={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"};function k(e,i,o,p,t,m){const s=n("BasicForm"),u=n("a-button"),r=n("PageWrapper");return E(),g(r,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",b,[l(s,{onRegister:e.register},null,8,["onRegister"]),f("div",y,[l(u,{onClick:e.resetFields},{default:c(()=>[B(" \u91CD\u7F6E ")]),_:1},8,["onClick"]),l(u,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:c(()=>[B(" \u786E\u8BA4 ")]),_:1},8,["onClick"])])])]),_:1})}var ho=w(A,[["render",k]]);export{ho as default};
