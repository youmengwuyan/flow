var d=(e,s,t)=>new Promise((p,i)=>{var l=o=>{try{r(t.next(o))}catch(m){i(m)}},n=o=>{try{r(t.throw(o))}catch(m){i(m)}},r=o=>o.done?p(o.value):Promise.resolve(o.value).then(l,n);r((t=t.apply(e,s)).next())});import{P as E}from"./index.874a1287.js";import{d1 as C,L as k,a as D,dh as w,cM as x,v as f,bQ as I,h as S,aF as F,co as L,x as q,o as A,i as N,z as h,m as R,E as $,s as M,l as O}from"./index.72db8407.js";import{D as v}from"./index.9c574014.js";import{C as B}from"./index.aa3cc807.js";import"./index.a3257fd9.js";import"./index.8b7903b4.js";import{D as u}from"./index.dbd2aa4b.js";import{B as T,w as V}from"./useForm.7c0bdf24.js";import H from"./ProcessHeader.b73f1c2a.js";import"./index.1644c3be.js";import"./index.778de78a.js";import"./useSize.540680fe.js";import"./eagerComputed.0db327f8.js";import"./useWindowSizeFn.de59245c.js";import"./useContentViewHeight.e9d9b7fd.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.dfa59e10.js";import"./transButton.fa38355c.js";import"./index.43cbb639.js";import"./index.bb8df062.js";import"./useRefs.a6f29f73.js";import"./useFlexGapSupport.fbfe2813.js";import"./index.707d7df2.js";import"./_baseIteratee.d6fc2b22.js";import"./get.e445709e.js";import"./index.e6389b66.js";import"./index.3f09cbf1.js";import"./index.36485229.js";import"./index.749aa331.js";import"./index.6fb43bc1.js";import"./index.fae68114.js";import"./index.c8942ff6.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./download.6d890c70.js";import"./index.76c88f70.js";import"./ClockCircleOutlined.2dda8149.js";import"./uniqBy.ce71960e.js";import"./index.c93d4b04.js";import"./process.dd434e1e.js";const U=[{field:"applyerCode",component:"Input",label:"\u7533\u8BF7\u4EBA",colProps:{span:8},show:!1},{field:"type",component:"Select",label:"\u7C7B\u578B",required:!0,colProps:{style:"width: 300px",span:20},componentProps:{options:[{label:"\u8C03\u4F11",value:"1",key:"1"},{label:"\u4E8B\u5047",value:"2",key:"2"},{label:"\u5E74\u5047",value:"3",key:"3"}]}},{field:"startTime",component:"DatePicker",label:"\u5F00\u59CB\u65F6\u95F4",required:!0,colProps:{span:6}},{field:"endTime",component:"DatePicker",label:"\u7ED3\u675F\u65F6\u95F4",required:!0,colProps:{span:6}},{field:"days",component:"InputNumber",label:"\u8BF7\u5047\u5929\u6570",required:!0,colProps:{span:24}},{field:"note",component:"InputTextArea",label:"\u8BF4\u660E",required:!0,colProps:{span:13}}];function W(e){return C.get({url:"/front/hr/attendance/getLeaveById/"+e,params:{}})}function z(e){return C.post({url:"/front/hr/attendance/addLeave",params:e})}const G=D({components:{ProcessHeader:H,PageWrapper:E,[v.name]:v,[B.name]:B,AEmpty:w,[u.name]:u,[u.Item.name]:u.Item,BasicForm:T,CollapseContainer:x},setup(){const e=f(null),s=f(!1),{createMessage:t}=$(),{currentRoute:p}=I(),{path:i,params:{modelKey:l}}=S(p),[n,{setProps:r,resetFields:o,updateSchema:m,setFieldsValue:g,validate:y}]=V({labelWidth:100,schemas:U,showActionButtonGroup:!1,actionColOptions:{span:24}});function b(a){a&&W(a).then(c=>{g(c)}),i.indexOf("/process/launch")===-1&&r({disabled:!0})}function _(){return d(this,null,function*(){const a=yield y(),c=M(),{getUserInfo:P}=c;a.applyerCode=P.code;try{s.value=!0,yield z(a)}finally{s.value=!1}})}return{registerForm:n,handleSubmit:a=>{t.success("click search,values:"+JSON.stringify(a))},check:e,doSubmit:_,initProcessForm:b}}}),J=O("div",{class:"font-bold"},"\u57FA\u672C\u4FE1\u606F",-1);function Q(e,s,t,p,i,l){const n=F("BasicForm"),r=F("CollapseContainer"),o=L("loading");return q((A(),N(r,{canExpan:!1},{title:h(()=>[J]),default:h(()=>[R(n,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1})),[[o,e.formLoading]])}var Ne=k(G,[["render",Q]]);export{Ne as default};
