var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))l.call(t,o)&&n(e,o,t[o]);return e},i=(e,s)=>t(e,o(s));import{e as c,c as u,ay as p,p as d,V as f,ae as g,av as w,k as y,i as h,ah as v,au as b,w as C}from"./index.8c1d7da4.js";import{y as m,j as k,Z as D,B as x,F as B,a7 as $,a4 as O,a0 as P,a2 as S,a9 as j,J as T,a8 as F,c6 as _,v as L,bj as V,r as H,Q as A,ad as N,u as E,t as I,Y as M,au as G,aA as J,G as Q,ao as R,N as Y,ab as Z,b4 as q,ai as z}from"./vendor.880b4c6c.js";/* empty css              */const{t:K}=c(),U={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:K("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:K("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},W=r({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},U);var X=m({name:"BasicDrawerFooter",props:i(r({},U),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:k((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});X.render=function(e,t,o,s,a,l){const n=D("a-button");return e.showFooter||e.$slots.footer?(x(),B("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?O(e.$slots,"footer",{key:1}):(x(),B($,{key:0},[O(e.$slots,"insertFooter"),e.showCancelBtn?(x(),B(n,P({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:S((()=>[j(T(e.cancelText),1)])),_:1},16,["onClick"])):F("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(x(),B(n,P({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:S((()=>[j(T(e.okText),1)])),_:1},16,["type","onClick","loading"])):F("",!0),O(e.$slots,"appendFooter")],64))],6)):F("",!0)};var ee=m({name:"BasicDrawerHeader",components:{BasicTitle:p,ArrowLeftOutlined:_},props:{isDetail:d.bool,showDetailBack:d.bool,title:d.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}});const te={key:1};ee.render=function(e,t,o,s,a,l){const n=D("BasicTitle"),r=D("ArrowLeftOutlined");return e.isDetail?(x(),B("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[L("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(x(),B("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[L(r,{class:`${e.prefixCls}__back`},null,8,["class"])])):F("",!0),e.title?(x(),B("span",te,T(e.title),1)):F("",!0)],2),L("span",{class:`${e.prefixCls}__toolbar`},[O(e.$slots,"titleToolbar")],2)],2)):(x(),B(n,{key:0,class:e.prefixCls},{default:S((()=>[O(e.$slots,"title"),j(" "+T(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var oe=m({components:{Drawer:V,ScrollContainer:f,DrawerFooter:X,DrawerHeader:ee},inheritAttrs:!1,props:W,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const o=H(!1),s=g(),a=H(null),{t:l}=c(),{prefixVar:n,prefixCls:p}=u("basic-drawer"),d={setDrawerProps:function(e){a.value=w(E(a)||{},e),Reflect.has(e,"visible")&&(o.value=!!e.visible)},emitVisible:void 0},f=N();f&&t("register",d,f.uid);const v=k((()=>w(I(e),E(a)))),b=k((()=>{const e=i(r(r({placement:"right"},E(s)),E(v)),{visible:E(o)});e.title=void 0;const{isDetail:t,width:a,wrapClassName:l,getContainer:c}=e;if(t){a||(e.width="100%");const t=`${p}__detail`;e.wrapClassName=l?`${l} ${t}`:t,c||(e.getContainer=`.${n}-layout-content`)}return e})),C=k((()=>r(r({},s),E(b)))),m=k((()=>{const{footerHeight:e,showFooter:t}=E(b);return t&&e?y(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),D=k((()=>({position:"relative",height:`calc(100% - ${E(m)})`}))),x=k((()=>{var e;return!!(null==(e=E(b))?void 0:e.loading)}));return A((()=>e.visible),((e,t)=>{e!==t&&(o.value=e)}),{deep:!0}),A((()=>o.value),(e=>{M((()=>{var o;t("visible-change",e),f&&(null==(o=d.emitVisible)||o.call(d,e,f.uid))}))})),{onClose:function(e){return s=this,a=null,l=function*(){const{closeFunc:s}=E(b);if(t("close",e),s&&h(s)){const e=yield s();o.value=!e}else o.value=!1},new Promise(((t,o)=>{var n=t=>{try{i(l.next(t))}catch(e){o(e)}},r=t=>{try{i(l.throw(t))}catch(e){o(e)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,r);i((l=l.apply(s,a)).next())}));var s,a,l},t:l,prefixCls:p,getMergeProps:v,getScrollContentStyle:D,getProps:b,getLoading:x,getBindValues:C,getFooterHeight:m,handleOk:function(){t("ok")}}}});oe.render=function(e,t,o,s,a,l){const n=D("DrawerHeader"),r=D("ScrollContainer"),i=D("DrawerFooter"),c=D("Drawer"),u=G("loading");return x(),B(c,P({class:e.prefixCls,onClose:e.onClose},e.getBindValues),J({default:S((()=>[Q(L(r,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:S((()=>[O(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[u,e.getLoading]]),L(i,P(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),J({_:2},[R(Object.keys(e.$slots),(t=>({name:t,fn:S((o=>[O(e.$slots,t,o)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:S((()=>[O(e.$slots,"title")]))}:{name:"title",fn:S((()=>[L(n,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:S((()=>[O(e.$slots,"titleToolbar")])),_:3},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const se=Y({}),ae=Y({});function le(){if(!N())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=H(null),t=H(!1),o=H("");const s=()=>{const t=E(e);return t||b("useDrawer instance is undefined!"),t};return[function(s,a){Z((()=>{e.value=null,t.value=null,se[E(o)]=null})),E(t)&&v()&&s===E(e)||(o.value=a,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{ae[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:k((()=>ae[~~E(o)])),openDrawer:(e=!0,t,a=!0)=>{var l;if(null==(l=s())||l.setDrawerProps({visible:e}),!t)return;if(a)return se[E(o)]=null,void(se[E(o)]=I(t));q(I(se[E(o)]),I(t))||(se[E(o)]=I(t))},closeDrawer:()=>{var e;null==(e=s())||e.setDrawerProps({visible:!1})}}]}const ne=e=>{const t=H(null),o=N(),s=H("");if(!N())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const a=()=>{const e=E(t);if(e)return e;b("useDrawerInner instance is undefined!")};return z((()=>{const t=se[E(s)];t&&e&&h(e)&&M((()=>{e(t)}))})),[(e,a)=>{Z((()=>{t.value=null})),s.value=a,t.value=e,null==o||o.emit("register",e,a)},{changeLoading:(e=!0)=>{var t;null==(t=a())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=a())||t.setDrawerProps({confirmLoading:e})},getVisible:k((()=>ae[~~E(s)])),closeDrawer:()=>{var e;null==(e=a())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=a())||t.setDrawerProps(e)}}]},re=C(oe);export{re as B,ne as a,le as u};
