import{y as n,ay as e,j as s,ad as t,Z as o,B as a,F as r,a2 as c,v as i,J as l}from"./vendor.880b4c6c.js";import{_ as u,p as m}from"./index.8c1d7da4.js";var d=n({name:"DropdownMenuItem",components:{MenuItem:e.Item,Icon:u},props:{key:m.string,text:m.string,icon:m.string},setup(n){const e=t();return{itemKey:s((()=>{var s,t;return n.key||(null==(t=null==(s=null==e?void 0:e.vnode)?void 0:s.props)?void 0:t.key)}))}}});const p={class:"flex items-center"};d.render=function(n,e,s,t,u,m){const d=o("Icon"),v=o("MenuItem");return a(),r(v,{key:n.itemKey},{default:c((()=>[i("span",p,[i(d,{icon:n.icon,class:"mr-1"},null,8,["icon"]),i("span",null,l(n.text),1)])])),_:1})};export default d;
