import{dO as l,fD as s,f6 as o}from"./index.97f55544.js";const c=t=>{const n=l.post({url:"/flow/org/department/getAll",params:t});return Promise.resolve(n).then(d=>{d.forEach(r=>{r.key=r.id,r.value=r.id,r.title=r.name,r.label=r.name});const e=s(d,{id:"id",children:"children",pid:"pid"});return o(e,r=>{r.children.length===0&&delete r.children},{id:"id",children:"children",pid:"pid"}),e})},a=()=>{const t=l.get({url:"/flow/org/department/getOrgTree"});return Promise.resolve(t).then(n=>{n.forEach(e=>{e.key=e.id,e.value=e.id,e.title=e.shortName,e.sourceType==1?e.icon="bx:building-house":e.sourceType==2&&(e.icon="ant-design:cluster-outlined")});const d=s(n,{id:"id",children:"children",pid:"pid"});return o(d,e=>{e.children.length===0&&delete e.children},{id:"id",children:"children",pid:"pid"}),d})},p=t=>l.post({url:"/flow/org/department/saveOrUpdate",params:t}),h=t=>l.post({url:"/flow/org/department/delete",params:t}),u=t=>l.post({url:"/flow/org/department/checkEntityExist",params:t});export{a,u as c,h as d,c as g,p as s};
