import{B as e}from"./index.8f3aa8de.js";import{h as s}from"./index.8c1d7da4.js";import{P as c}from"./index.5574fcdd.js";import{y as l,c7 as t,bR as n,r as a,z as i,A as r,Z as u,B as o,F as d,v as f,K as p,a9 as m}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.3c3886fd.js";var y=l({components:{BasicDragVerify:e,BugOutlined:t,RightOutlined:n,PageWrapper:c},setup(){const{createMessage:e}=s();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:a(null),el2:a(null),el3:a(null),el4:a(null),el5:a(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=p();i("data-v-a0470878");const S={class:"flex justify-center p-4 items-center bg-gray-700"},h=m(" 还原 "),k={class:"flex justify-center p-4 items-center bg-gray-700"},j=m(" 还原 "),x={class:"flex justify-center p-4 items-center bg-gray-700"},b=m(" 还原 "),v={class:"flex justify-center p-4 items-center bg-gray-700"},C=m(" 还原 "),B={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=m(" 成功 "),P={key:1},R=m(" 拖动 "),V=m(" 还原 ");r();const W=g(((e,s,c,l,t,n)=>{const a=u("BasicDragVerify"),i=u("a-button"),r=u("BugOutlined"),p=u("RightOutlined"),m=u("PageWrapper");return o(),d(m,{title:"拖动校验示例"},{default:g((()=>[f("div",S,[f(a,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[h])),_:1})]),f("div",k,[f(a,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[j])),_:1})]),f("div",x,[f(a,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[b])),_:1})]),f("div",v,[f(a,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(o(),d(r,{key:0})):(o(),d(p,{key:1}))])),_:1},8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[C])),_:1})]),f("div",B,[f(a,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(o(),d("div",_,[f(r),O])):(o(),d("div",P,[R,f(p)]))])),_:1},8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[V])),_:1})])])),_:1})}));y.render=W,y.__scopeId="data-v-a0470878";export default y;
