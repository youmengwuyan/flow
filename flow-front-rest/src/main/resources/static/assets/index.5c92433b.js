import{L as l,a as c,v as d,aF as t,o as p,i as f,z as u,l as n,m as e}from"./index.c57fe5f3.js";import{C as I}from"./index.df23b988.js";import"./index.10246590.js";import"./index.293bd36c.js";import{P as _}from"./index.3848c581.js";import g from"./DynamicInfo.c723ccef.js";import y from"./BannerInfo.0993542c.js";import h from"./NoticeInfo.10b7f778.js";import C from"./ITWikiCard.259990be.js";import v from"./ITContactCard.6f8ea852.js";import w from"./CommonDownCard.87550870.js";import{dynamicInfoItems as S,bannerList as B,noticeInfoItems as N}from"./data.2d9af6c7.js";import"./index.f18fa62a.js";import"./index.837c71ef.js";import"./useRefs.f276032e.js";import"./useFlexGapSupport.98fd76c0.js";import"./index.76280d33.js";import"./index.57fcc66b.js";import"./useSize.21a58576.js";import"./eagerComputed.0a66574f.js";import"./useWindowSizeFn.79f9ec92.js";import"./useContentViewHeight.8526963a.js";import"./ArrowLeftOutlined.2479d1c9.js";import"./index.3e3a0ce4.js";import"./transButton.eef0876e.js";import"./index.56493ba6.js";import"./index.0b6137f0.js";import"./index.e0d59ecb.js";const T=c({components:{PageWrapper:_,DynamicInfo:g,BannerInfo:y,NoticeInfo:h,ITWikiCard:C,ITContactCard:v,CommonDownCard:w,Card:I},setup(){const o=d(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:S,bannerInfoItems:B,noticeInfoItems:N}}}),b={class:"lg:flex"},D={class:"lg:w-10/10 w-full enter-y"},P={class:"flex"},W={class:"w-1/3 mr-4 enter-y"},$={class:"w-2/3 enter-y"},k={class:"lg:flex mt-4"},L={class:"w-1/4 w-full !mr-4 enter-y"},V={class:"w-3/4 w-full enter-y"};function z(o,F,j,q,A,E){const a=t("BannerInfo"),r=t("NoticeInfo"),i=t("ITContactCard"),s=t("DynamicInfo"),m=t("PageWrapper");return p(),f(m,null,{default:u(()=>[n("div",b,[n("div",D,[e(a,{dataSource:o.bannerInfoItems,height:"400",class:"!my-4 enter-y",loading:o.loading},null,8,["dataSource","loading"])])]),n("div",P,[n("div",W,[e(a,{dataSource:o.bannerInfoItems,height:"270",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])]),n("div",$,[e(r,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),n("div",k,[n("div",L,[e(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",V,[e(s,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])])]),_:1})}var _o=l(T,[["render",z]]);export{_o as default};
