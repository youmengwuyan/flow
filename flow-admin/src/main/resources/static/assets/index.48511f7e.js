import{m as c,B as l}from"./BasicForm.57c6e84a.js";import{az as d,a as g,aB as r,o as f,k as B,B as F,p as t,G as _}from"./index.97f55544.js";import{u as A}from"./useForm.1f0c5dd1.js";import{P as C}from"./index.fe38133b.js";import{A as a}from"./index.c0d032c8.js";import{u as m}from"./upload.88f57ab7.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.1f9d3a9d.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[a.name]:a},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:m,register:p}}});function P(o,p,e,$,x,U){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Ao=d(E,[["render",P]]);export{Ao as default};
