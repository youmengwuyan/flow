var B=(e,t,l)=>new Promise((s,r)=>{var c=o=>{try{n(l.next(o))}catch(a){r(a)}},u=o=>{try{n(l.throw(o))}catch(a){r(a)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,u);n((l=l.apply(e,t)).next())});import{B as h}from"./BasicForm.57c6e84a.js";import{u as f}from"./useForm.1f0c5dd1.js";import{az as C,a as F,cF as P,aB as m,o as g,k as _,B as p,n as k,p as i,C as d}from"./index.97f55544.js";import{P as A}from"./index.fe38133b.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.1f9d3a9d.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.c0d032c8.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],W=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:t=>{e.f2=t.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:t}=e,l=yield t()})})}],w=F({components:{BasicForm:h,CollapseContainer:P,PageWrapper:A},setup(){const[e,{setProps:t,updateSchema:l,appendSchemaByField:s,removeSchemaByField:r}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:W,actionColOptions:{span:24}});function u(){l({field:"field3",label:"\u5B57\u6BB53 New"})}function n(){l([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){s({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function a(){r("field11")}return{register:e,register1:c,schemas:b,setProps:t,changeLabel3:u,changeLabel34:n,appendField:o,deleteField:a}}}),D={class:"mb-4"};function E(e,t,l,s,r,c){const u=m("a-button"),n=m("BasicForm"),o=m("CollapseContainer"),a=m("PageWrapper");return g(),_(a,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:p(()=>[k("div",D,[i(u,{onClick:e.changeLabel3,class:"mr-2"},{default:p(()=>[d(" \u66F4\u6539\u5B57\u6BB53label ")]),_:1},8,["onClick"]),i(u,{onClick:e.changeLabel34,class:"mr-2"},{default:p(()=>[d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label ")]),_:1},8,["onClick"]),i(u,{onClick:e.appendField,class:"mr-2"},{default:p(()=>[d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 ")]),_:1},8,["onClick"]),i(u,{onClick:e.deleteField,class:"mr-2"},{default:p(()=>[d(" \u5220\u9664\u5B57\u6BB511 ")]),_:1},8,["onClick"])]),i(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:p(()=>[i(n,{onRegister:e.register},null,8,["onRegister"])]),_:1}),i(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:p(()=>[i(n,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Pe=C(w,[["render",E]]);export{Pe as default};
