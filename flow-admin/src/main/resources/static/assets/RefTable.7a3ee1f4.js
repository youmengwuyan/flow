import{_ as e}from"./TableImg.e8129589.js";import"./BasicForm.5cce9782.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.3f3da3f1.js";import{h as i}from"./index.8c1d7da4.js";import{d as n}from"./table.9957cd5e.js";import{y as s,r as a,u as c,Z as l,B as r,F as d,v as m,a2 as f,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.acbe981f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";var p=s({components:{BasicTable:e},setup(){const e=a(null),{createMessage:s}=i();function l(){const o=c(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:n,columns:o(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(o()),l().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const b={class:"p-4"},C={class:"mb-4"},j=u(" 还原 "),g=u(" 开启loading "),k=u(" 更改Columns "),x=u(" 获取Columns "),w=u(" 获取表格数据 "),R=u(" 跳转到第2页 "),S={class:"mb-4"},_=u(" 获取选中行 "),y=u(" 获取选中行Key "),L=u(" 设置选中行 "),T=u(" 清空选中行 "),v=u(" 获取分页信息 ");p.render=function(e,o,t,i,n,s){const a=l("a-button"),c=l("BasicTable");return r(),d("div",b,[m("div",C,[m(a,{class:"mr-2",onClick:e.reloadTable},{default:f((()=>[j])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeLoading},{default:f((()=>[g])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeColumns},{default:f((()=>[k])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getColumn},{default:f((()=>[x])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getTableData},{default:f((()=>[w])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:f((()=>[R])),_:1},8,["onClick"])]),m("div",S,[m(a,{class:"mr-2",onClick:e.getSelectRowList},{default:f((()=>[_])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:f((()=>[y])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:f((()=>[L])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.clearSelect},{default:f((()=>[T])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getPagination},{default:f((()=>[v])),_:1},8,["onClick"])]),m(c,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;
