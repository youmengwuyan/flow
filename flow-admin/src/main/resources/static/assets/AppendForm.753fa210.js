import{_ as e}from"./BasicForm.f3cb7023.js";import{u as o}from"./useForm.c6cb6ef5.js";import{ag as i,aq as t}from"./index.a33a5e4d.js";import{y as a,ak as n,r,Z as s,B as d,F as l,a2 as p,v as c,a8 as m,a9 as f}from"./vendor.880b4c6c.js";import{P as u}from"./index.cf1d4223.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./index.98d9f37c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.d4b428eb.js";var b=a({components:{BasicForm:e,CollapseContainer:i,PageWrapper:u,[n.name]:n,Button:t},setup(){const[e,{appendSchemaByField:i,removeSchemaByFiled:t,validate:a}]=o({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const n=r(1);return{register:e,handleSubmit:function(){return e=this,o=null,i=function*(){try{yield a()}catch(e){}},new Promise(((t,a)=>{var n=e=>{try{s(i.next(e))}catch(o){a(o)}},r=e=>{try{s(i.throw(e))}catch(o){a(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,r);s((i=i.apply(e,o)).next())}));var e,o,i},add:function(){i({field:`field${n.value}a`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),i({field:`field${n.value}b`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),i({field:`${n.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),n.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),n.value--}}}});const j=f("+"),x=f("-");b.render=function(e,o,i,t,a,n){const r=s("Button"),f=s("BasicForm"),u=s("CollapseContainer"),b=s("PageWrapper");return d(),l(b,{title:"表单增删示例"},{default:p((()=>[c(u,{title:"表单增删"},{default:p((()=>[c(f,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:o})=>[0===Number(o)?(d(),l(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):m("",!0),o>0?(d(),l(r,{key:1,onClick:i=>e.del(o)},{default:p((()=>[x])),_:2},1032,["onClick"])):m("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
