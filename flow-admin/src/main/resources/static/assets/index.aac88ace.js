import o from"./LockPage.8fa353e1.js";import{u as e}from"./lock.d7876fcb.js";import{y as a,j as t,Z as r,B as s,F as n,a2 as c,a8 as d,_ as m}from"./vendor.880b4c6c.js";import"./index.a33a5e4d.js";import"./header.d801b988.js";var u=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});u.render=function(o,e,a,t,u,i){const f=r("LockPage");return s(),n(m,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(f,{key:0})):d("",!0)])),_:1})};export default u;
