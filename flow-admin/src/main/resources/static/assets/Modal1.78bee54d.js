import{B as g,a as f}from"./index.1f9d3a9d.js";import{a as h,w as p,a9 as B,az as M,aB as m,o,k as C,B as u,p as v,C as y,i as t,l as _,F,aE as k,t as D,aC as b}from"./index.97f55544.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";const w=h({components:{BasicModal:g},setup(){const e=p(!0),a=p(10),[i,{setModalProps:s,redoModalHeight:l}]=f();B(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,s({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,s({loading:!1,confirmLoading:!1})},3e3))}function n(){a.value=Math.round(Math.random()*20+10)}return{register:i,loading:e,handleShow:d,lines:a,setLines:n}}}),A={key:0,class:"empty-tips"},L={key:1};function V(e,a,i,s,l,d){const n=m("a-button"),r=m("BasicModal");return o(),C(r,b(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],onVisibleChange:e.handleShow}),{insertFooter:u(()=>[v(n,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:u(()=>[y("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9")]),_:1},8,["onClick","disabled"])]),default:u(()=>[e.loading?(o(),t("div",A,"\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026")):_("",!0),e.loading?_("",!0):(o(),t("ul",L,[(o(!0),t(F,null,k(e.lines,c=>(o(),t("li",{key:c},"\u52A0\u8F7D\u5B8C\u6210"+D(c)+"\uFF01",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}var T=M(w,[["render",V],["__scopeId","data-v-47fa5808"]]);export{T as default};
