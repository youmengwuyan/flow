var p=(e,a,t)=>new Promise((o,c)=>{var s=n=>{try{i(t.next(n))}catch(l){c(l)}},r=n=>{try{i(t.throw(n))}catch(l){c(l)}},i=n=>n.done?o(n.value):Promise.resolve(n.value).then(s,r);i((t=t.apply(e,a)).next())});import{fD as b,f6 as A,dO as h,az as I,a as x,b4 as L,aJ as d,w as u,aB as f,o as k,i as y,p as m,B as C,k as B,C as G,l as w}from"./index.97f55544.js";import{C as v}from"./index.23620c7a.js";const j=e=>{const a=h.get({url:"/flow/privilege/acl/getModuleAclsByGroupId/"+e.groupId});return Promise.resolve(a).then(t=>{const o=b(t,{id:"id",children:"children",pid:"pid"});return A(o,c=>{c.children.length===0&&delete c.children},{id:"id",children:"children",pid:"pid"}),o})},z=e=>h.post({url:`/flow/privilege/acl/setAllAcl/${e.checked}`,params:e.aclInfo}),S=e=>h.post({url:"/flow/privilege/acl/setAclByModule/"+e.checked,params:e.aclInfo}),_=e=>h.post({url:`/flow/privilege/acl/setAclModuleList/${e.moduleId}/${e.groupId}`,params:e.aclList}),$=x({name:"AclCheckboxGroup",components:{Checkbox:v,CheckboxGroup:v.Group,Spin:L},props:{checkboxList:d.arrayOf(d.object).def([]),groupId:d.string.def(""),moduleSn:d.string.def(""),moduleId:d.string.def("")},setup(e,{emit:a}){const t=e.checkboxList.filter(l=>l.checked),o=u(!1),c=u(t.length>0&&e.checkboxList.length===t.length);t.length!==0&&e.checkboxList.length!==t.length&&(o.value=!0);const s=u(!1),r=u(t.map(l=>l.value));function i(l){return p(this,null,function*(){s.value=!0,o.value=!!l.length&&l.length<e.checkboxList.length,c.value=l.length===e.checkboxList.length;const g={moduleId:e.moduleId,groupId:e.groupId,aclList:l};try{yield _(g),a("changeCheckAllStatus")}finally{s.value=!1}})}function n(l){return p(this,null,function*(){r.value=l.target.checked?e.checkboxList.map(g=>g.value):[],o.value=!1,c.value=l.target.checked,s.value=!0,yield S({checked:l.target.checked?1:0,aclInfo:{releaseId:e.groupId,moduleId:e.moduleId}}),a("changeCheckAllStatus"),s.value=!1})}return{spinning:s,indeterminate:o,checkAll:c,checkedList:r,onChange:i,onCheckAllChange:n}}});function M(e,a,t,o,c,s){const r=f("Checkbox"),i=f("CheckboxGroup"),n=f("Spin");return k(),y("div",null,[m(n,{spinning:e.spinning},{default:C(()=>[e.checkboxList&&e.checkboxList.length>0?(k(),B(r,{key:0,indeterminate:e.indeterminate,checked:e.checkAll,onChange:e.onCheckAllChange},{default:C(()=>[G(" \u5168\u9009 ")]),_:1},8,["indeterminate","checked","onChange"])):w("",!0),m(i,{value:e.checkedList,"onUpdate:value":a[0]||(a[0]=l=>e.checkedList=l),options:e.checkboxList,onChange:e.onChange},null,8,["value","options","onChange"])]),_:1},8,["spinning"])])}var T=I($,[["render",M]]),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});export{T as A,D as a,j as g,z as s};
