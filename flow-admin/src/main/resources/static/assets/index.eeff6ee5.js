import{M as _,a as w}from"./index.b7d44e71.js";import{P as g}from"./index.fe38133b.js";import{az as h,a as D,w as m,aB as t,o as V,k as B,B as n,n as s,p as r,C as c,j as M}from"./index.97f55544.js";import{C as E}from"./index.4f17e547.js";import"./index.5a1f8886.js";/* empty css               */import"./index.1f9d3a9d.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./eagerComputed.009c9352.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.08ddde58.js";import"./index.7c43370c.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useRefs.a0940dd4.js";import"./PlusOutlined.6cde877a.js";const F=D({components:{MarkDown:_,PageWrapper:g,MarkdownViewer:w,ACard:E},setup(){const e=m(null),o=m(`
# title

# content
`);function i(){const a=M(e);if(!a)return;a.getVditor().setTheme("dark")}function p(a){o.value=a}function l(){o.value=""}return{value:o,toggleTheme:i,markDownRef:e,handleChange:p,clearValue:l}}}),A={class:"mt-2"};function b(e,o,i,p,l,a){const u=t("a-button"),d=t("MarkDown"),f=t("MarkdownViewer"),k=t("a-card"),v=t("PageWrapper");return V(),B(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[s("div",null,[r(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[c(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),r(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[c(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),r(d,{value:e.value,"onUpdate:value":o[0]||(o[0]=C=>e.value=C),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",A,[r(k,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[r(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var Z=h(F,[["render",b]]);export{Z as default};
