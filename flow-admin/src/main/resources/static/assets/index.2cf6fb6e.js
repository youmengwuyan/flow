import{J as e,p as o,c as t,f as s,e as a,o as r}from"./index.a33a5e4d.js";import{y as n,ax as i,ay as l,j as c,Z as d,B as p,F as m,v as u,a2 as f,a8 as g,J as k,a7 as x}from"./vendor.880b4c6c.js";import{D as h}from"./siteSetting.136c2269.js";import{c as _,u as j}from"./index.8376f5da.js";import{b as w}from"./index.98d9f37c.js";import{h as C}from"./header.d801b988.js";import"./index.e7adf083.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.62e399e2.js";import"./useContentViewHeight.d4b428eb.js";/* empty css              *//* empty css              */import"./useSortable.1c9ace8f.js";import"./lock.d7876fcb.js";var D=n({name:"UserDropdown",components:{Dropdown:i,Menu:l,MenuItem:_((()=>e((()=>import("./DropMenuItem.0567b906.js")),["assets/DropMenuItem.0567b906.js","assets/vendor.880b4c6c.js","assets/vendor.87238d96.css","assets/index.a33a5e4d.js","assets/index.ffe635a3.css"]))),MenuDivider:l.Divider,LockAction:_((()=>e((()=>import("./LockModal.df86afd2.js")),["assets/LockModal.df86afd2.js","assets/LockModal.8fa08283.css","assets/index.7ff2b09b.css","assets/index.1800f0a6.css","assets/index.369ffe63.css","assets/index.d1c95ade.css","assets/index.ab3a78df.css","assets/index.2558ae94.css","assets/index.1dbcfc82.css","assets/index.b3069f71.css","assets/index.093bf7b6.css","assets/index.b854d3de.css","assets/index.4c61959e.css","assets/index.2abcdf8a.css","assets/index.a33a5e4d.js","assets/index.ffe635a3.css","assets/vendor.880b4c6c.js","assets/vendor.87238d96.css","assets/index.98d9f37c.js","assets/index.6379c5f3.css","assets/useWindowSizeFn.564cf32e.js","assets/BasicForm.f3cb7023.js","assets/BasicForm.32a09695.css","assets/index.08ac3aaf.js","assets/index.07759353.css","assets/uuid.2b29000c.js","assets/download.2ac02f88.js","assets/base64Conver.bb012c73.js","assets/index.ce488518.js","assets/index.eeabf1c4.css","assets/useForm.c6cb6ef5.js","assets/lock.d7876fcb.js","assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:n,getUseLockPage:i}=j(),l=s(),d=c((()=>{const{realName:e="",image:o,desc:t}=l.getUserInfo||{};return{realName:e,avatar:o||C,desc:t}})),[p,{openModal:m}]=w();return{prefixCls:e,t:o,getUserInfo:d,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":r(h);break;case"lock":m(!0)}},getShowDoc:n,register:p,getUseLockPage:i}}});D.render=function(e,o,t,s,a,r){const n=d("MenuItem"),i=d("MenuDivider"),l=d("Menu"),c=d("Dropdown"),h=d("LockAction");return p(),m(x,null,[u(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:f((()=>[u(l,{onClick:e.handleMenuClick},{default:f((()=>[e.getShowDoc?(p(),m(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(p(),m(i,{key:1})):g("",!0),e.getUseLockPage?(p(),m(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),u(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:f((()=>[u("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[u("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),u("span",{class:`${e.prefixCls}__info hidden md:block`},[u("span",{class:[`${e.prefixCls}__name  `,"truncate"]},k(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),u(h,{onRegister:e.register},null,8,["onRegister"])],64)};export default D;
