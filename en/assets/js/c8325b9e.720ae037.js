"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85531],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),f=c(r),m=a,u=f["".concat(p,".").concat(m)]||f[m]||g[m]||o;return r?n.createElement(u,l(l({ref:e},s),{},{components:r})):n.createElement(u,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72975:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={title:"Taro.getStorageInfo(OBJECT)",sidebar_label:"getStorageInfo"},i=void 0,p={unversionedId:"apis/storage/getStorageInfo",id:"version-1.x/apis/storage/getStorageInfo",title:"Taro.getStorageInfo(OBJECT)",description:"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/storage/getStorageInfo.md",sourceDirName:"apis/storage",slug:"/apis/storage/getStorageInfo",permalink:"/mirror/taro-docs/en/docs/1.x/apis/storage/getStorageInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/storage/getStorageInfo.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getStorageInfo(OBJECT)",sidebar_label:"getStorageInfo"},sidebar:"version-1.x/API",previous:{title:"getStorageSync",permalink:"/mirror/taro-docs/en/docs/1.x/apis/storage/getStorageSync"},next:{title:"getStorageInfoSync",permalink:"/mirror/taro-docs/en/docs/1.x/apis/storage/getStorageInfoSync"}},c={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],g={toc:s};function f(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"success"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8be6\u89c1\u8fd4\u56de\u53c2\u6570\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"fail"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"complete"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"keys"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"String Array"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5f53\u524d storage \u4e2d\u6240\u6709\u7684 key")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getStorageInfo()\n  .then(res => console.log(res.keys))\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getStorageInfo"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getStorageInfoSync"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);