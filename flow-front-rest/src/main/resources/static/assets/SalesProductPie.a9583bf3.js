import{a as i,v as u,K as s,L as l,aF as p,o as m,i as d,z as c,l as f,b0 as h}from"./index.c57fe5f3.js";import{C as g}from"./index.df23b988.js";import"./index.10246590.js";import"./index.293bd36c.js";import{u as C}from"./useECharts.f19e7a07.js";import"./index.f18fa62a.js";import"./index.837c71ef.js";import"./useRefs.f276032e.js";import"./useFlexGapSupport.98fd76c0.js";const v=i({components:{Card:g},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=u(null),{setOptions:a}=C(t);return s(()=>e.loading,()=>{e.loading||a({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(o,n){return o.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),{chartRef:t}}});function B(e,t,a,o,n,y){const r=p("Card");return m(),d(r,{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:c(()=>[f("div",{ref:"chartRef",style:h({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var z=l(v,[["render",B]]);export{z as default};
