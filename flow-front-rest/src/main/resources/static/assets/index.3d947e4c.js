import{L as d,a as l,v as f,aF as n,o as u,i as I,z as r,m as e,l as t}from"./index.a19a7b59.js";import{C as _}from"./index.af972ef5.js";import"./index.d1b1d25a.js";import"./index.5e1a3b76.js";import{P as g}from"./index.49f22413.js";import y from"./WorkbenchHeader.9cb07adb.js";import S from"./SystemListCard.12940ca7.js";import h from"./QuickNav.af12f0e7.js";import C from"./DynamicInfo.c5ad4429.js";import v from"./NoticeInfo.b282bb48.js";import b from"./BannerInfo.9d250405.js";import k from"./SaleRadar.40f6570e.js";import{d as B,n as N,b as W}from"./data.93390901.js";import"./index.7a2dfd59.js";import"./index.822cef18.js";import"./useRefs.4b0733e6.js";import"./useFlexGapSupport.c0a56c4d.js";import"./index.21769bbf.js";import"./index.e18493c9.js";import"./useSize.0e83a8bb.js";import"./eagerComputed.2c84d538.js";import"./useWindowSizeFn.c0064585.js";import"./useContentViewHeight.491bd798.js";import"./ArrowLeftOutlined.be1e5adc.js";import"./index.1bddd824.js";import"./transButton.7523e23a.js";import"./header.d801b988.js";import"./index.0bec4bfc.js";import"./index.6525164e.js";import"./process.10a62b0a.js";import"./index.01b7133f.js";import"./useECharts.656bf9fd.js";const L=l({components:{PageWrapper:g,WorkbenchHeader:y,SystemListCard:S,NoticeInfo:v,BannerInfo:b,QuickNav:h,DynamicInfo:C,SaleRadar:k,Card:_},setup(){const o=f(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:B,noticeInfoItems:N,bannerInfoItems:W}}}),w={class:"md:flex w-full enter-y"},P={class:"w-2/3"},$={class:"md:w-1/3 pl-4"};function D(o,H,V,z,F,Q){const a=n("WorkbenchHeader"),m=n("NoticeInfo"),i=n("SystemListCard"),s=n("BannerInfo"),p=n("DynamicInfo"),c=n("PageWrapper");return u(),I(c,{class:"!mt-4"},{headerContent:r(()=>[e(a)]),default:r(()=>[t("div",w,[t("div",P,[e(m,{dataSource:o.noticeInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),e(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",$,[e(s,{dataSource:o.bannerInfoItems,class:"!my-4",loading:o.loading},null,8,["dataSource","loading"]),e(p,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])]),_:1})}var go=d(L,[["render",D]]);export{go as default};
