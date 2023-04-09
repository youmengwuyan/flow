var K=Object.defineProperty,Q=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(t,r,d)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[r]=d,v=(t,r)=>{for(var d in r||(r={}))Y.call(r,d)&&j(t,d,r[d]);if(C)for(var d of C(r))ee.call(r,d)&&j(t,d,r[d]);return t},V=(t,r)=>Q(t,U(r));import{e as F,a as A,x as Z,w as E,cS as te,h as _,a9 as H,M as ne,p as h,j as u,cE as X,e2 as se,fg as ae,bc as q,aC as ie,fh as W,aI as z}from"./index.97f55544.js";const{t:k}=F(),G={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:k("component.verify.dragText")},successText:{type:[String],default:k("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:()=>({})},contentStyle:{type:Object,default:()=>({})},barStyle:{type:Object,default:()=>({})},actionStyle:{type:Object,default:()=>({})}},oe=V(v({},G),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:()=>({})},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var J=A({name:"BaseDargVerify",props:G,emits:["success","update:value","change","start","move","end"],setup(t,{emit:r,slots:d,expose:P}){const n=Z({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),s=E(null),w=E(null),D=E(null),T=E(null);te({el:document,name:"mouseup",listener:()=>{n.isMoving&&y()}});const O=_(()=>{const{height:e,actionStyle:i}=t,c=`${parseInt(e)}px`;return v({left:0,width:c,height:c},i)}),N=_(()=>{const{height:e,width:i,circle:c,wrapStyle:a}=t,l=parseInt(e),m=`${parseInt(i)}px`;return v({width:m,height:`${l}px`,lineHeight:`${l}px`,borderRadius:c?l/2+"px":0},a)}),I=_(()=>{const{height:e,circle:i,barStyle:c}=t,a=parseInt(e);return v({height:`${a}px`,borderRadius:i?a/2+"px 0 0 "+a/2+"px":0},c)}),$=_(()=>{const{height:e,width:i,contentStyle:c}=t,a=`${parseInt(e)}px`,l=`${parseInt(i)}px`;return v({height:a,width:l},c)});H(()=>n.isPassing,e=>{if(e){const{startTime:i,endTime:c}=n,a=(c-i)/1e3;r("success",{isPassing:e,time:a.toFixed(1)}),r("update:value",e),r("change",e)}}),ne(()=>{n.isPassing=!!t.value});function b(e){return e.pageX||e.touches[0].pageX}function R(e){if(n.isPassing)return;const i=u(T);!i||(r("start",e),n.moveDistance=b(e)-parseInt(i.style.left.replace("px",""),10),n.startTime=new Date().getTime(),n.isMoving=!0)}function o(e){const i=parseInt(e.style.width),{width:c}=t,a=parseInt(c);return{offset:a-i-6,widthNum:a,actionWidth:i}}function f(e){const{isMoving:i,moveDistance:c}=n;if(i){const a=u(T),l=u(w);if(!a||!l)return;const{offset:m,widthNum:S,actionWidth:M}=o(a),p=b(e)-c;r("move",{event:e,moveDistance:c,moveX:p}),p>0&&p<=m?(a.style.left=`${p}px`,l.style.width=`${p+M/2}px`):p>m&&(a.style.left=`${S-M}px`,l.style.width=`${S-M/2}px`,t.isSlot||x())}}function g(e){const{isMoving:i,isPassing:c,moveDistance:a}=n;if(i&&!c){r("end",e);const l=u(T),m=u(w);if(!l||!m)return;const S=b(e)-a,{offset:M,widthNum:p,actionWidth:B}=o(l);S<M?t.isSlot?setTimeout(()=>{if(!t.value)y();else{const L=u(D);L&&(L.style.width=`${parseInt(m.style.width)}px`)}},0):y():(l.style.left=`${p-B}px`,m.style.width=`${p-B/2}px`,x()),n.isMoving=!1}}function x(){if(t.isSlot){y();return}n.endTime=new Date().getTime(),n.isPassing=!0,n.isMoving=!1}function y(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=u(T),i=u(w),c=u(D);!e||!i||!c||(n.toLeft=!0,q(()=>{n.toLeft=!1,e.style.left="0",i.style.width="0"},300),c.style.width=u($).width)}return P({resume:y}),()=>{const e=()=>{const a=["darg-verify-bar"];return n.toLeft&&a.push("to-left"),h("div",{class:a,ref:w,style:u(I)},null)},i=()=>{const a=["darg-verify-content"],{isPassing:l}=n,{text:m,successText:S}=t;return l&&a.push("success"),h("div",{class:a,ref:D,style:u($)},[X(d,"text",l)||(l?S:m)])},c=()=>{const a=["darg-verify-action"],{toLeft:l,isPassing:m}=n;return l&&a.push("to-left"),h("div",{class:a,onMousedown:R,onTouchstart:R,style:u(O),ref:T},[X(d,"actionIcon",m)||(m?h(se,{class:"darg-verify-action__icon"},null):h(ae,{class:"darg-verify-action__icon"},null))])};return h("div",{class:"darg-verify",ref:s,style:u(N),onMousemove:f,onTouchmove:f,onMouseleave:g,onMouseup:g,onTouchend:g},[e(),i(),c()])}}});var re=A({name:"ImgRotateDragVerify",inheritAttrs:!1,props:oe,emits:["success","change","update:value"],setup(t,{emit:r,attrs:d,expose:P}){const n=E(null),s=Z({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:w}=F();H(()=>s.isPassing,o=>{if(o){const{startTime:f,endTime:g}=s,x=(g-f)/1e3;r("success",{isPassing:o,time:x.toFixed(1)}),r("change",o),r("update:value",o)}});const D=_(()=>{const{imgWrapStyle:o,imgWidth:f}=t;return v({width:`${f}px`,height:`${f}px`},o)}),T=_(()=>{const{minDegree:o,maxDegree:f}=t;return o===f?Math.floor(1+Math.random()*1)/10+1:1});function O(){s.startTime=new Date().getTime()}function N(o){s.draged=!0;const{imgWidth:f,height:g,maxDegree:x}=t,{moveX:y}=o,e=Math.ceil(y/(f-parseInt(g))*x*u(T));s.currentRotate=e,s.imgStyle=W("transform",`rotateZ(${s.randomRotate-e}deg)`)}function I(){const{minDegree:o,maxDegree:f}=t,g=Math.floor(o+Math.random()*(f-o));s.randomRotate=g,s.imgStyle=W("transform",`rotateZ(${g}deg)`)}function $(){const{randomRotate:o,currentRotate:f}=s,{diffDegree:g}=t;Math.abs(o-f)>=(g||20)?(s.imgStyle=W("transform",`rotateZ(${o}deg)`),s.toOrigin=!0,q(()=>{s.toOrigin=!1,s.showTip=!0},300)):b(),s.showTip=!0}function b(){s.isPassing=!0,s.endTime=new Date().getTime()}function R(){s.showTip=!1;const o=u(n);!o||(s.isPassing=!1,o.resume(),I())}return P({resume:R}),()=>{const{src:o}=t,{toOrigin:f,isPassing:g,startTime:x,endTime:y}=s,e=[];f&&e.push("to-origin");const i=(y-x)/1e3;return h("div",{class:"ir-dv"},[h("div",{class:"ir-dv-img__wrap",style:u(D)},[h("img",{src:o,onLoad:I,width:parseInt(t.width),class:e,style:s.imgStyle,onClick:()=>{R()},alt:"verify"},null),s.showTip&&h("span",{class:["ir-dv-img__tip",s.isPassing?"success":"error"]},[s.isPassing?w("component.verify.time",{time:i.toFixed(1)}):w("component.verify.error")]),!s.showTip&&!s.draged&&h("span",{class:["ir-dv-img__tip","normal"]},[w("component.verify.redoTip")])]),h(J,ie({class:"ir-dv-drag__bar",onMove:N,onEnd:$,onStart:O,ref:n},v(v({},d),t),{value:g,isSlot:!0}),null)])}}});const fe=z(J),ue=z(re);export{fe as B,ue as R};
