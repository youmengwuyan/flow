import{V as s}from"./index.e4d4c34e.js";import{P as o}from"./index.daa15fb0.js";import{y as l,r as e,u as r,z as t,A as a,Z as c,B as n,F as i,v as d,a7 as f,ao as p,J as u,K as m,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.0c12a40d.js";var v=l({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=e(null),o=()=>{const o=r(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=m();t("data-v-83ef995e");const _={class:"my-4"},b=j(" 滚动到100px位置 "),C=j(" 滚动到800px位置 "),k=j(" 滚动到顶部 "),w=j(" 滚动到底部 "),T={class:"scroll-wrap"},y={class:"p-3"};a();const B=x(((s,o,l,e,r,t)=>{const a=c("a-button"),m=c("ScrollContainer"),j=c("PageWrapper");return n(),i(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(a,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[b])),_:1}),d(a,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(a,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[k])),_:1}),d(a,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[w])),_:1})]),d("div",T,[d(m,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",y,[(n(),i(f,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},u(s),1))),64))])])),_:1},512)])])),_:1})}));v.render=B,v.__scopeId="data-v-83ef995e";export default v;
