"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62171],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42751:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},l=void 0,p={unversionedId:"apis/data-analysis/reportMonitor",id:"version-3.x/apis/data-analysis/reportMonitor",title:"Taro.reportMonitor(name, value)",description:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/data-analysis/reportMonitor.md",sourceDirName:"apis/data-analysis",slug:"/apis/data-analysis/reportMonitor",permalink:"/mirror/taro-docs/docs/apis/data-analysis/reportMonitor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/data-analysis/reportMonitor.md",tags:[],version:"3.x",frontMatter:{title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},sidebar:"API",previous:{title:"CacheManager",permalink:"/mirror/taro-docs/docs/apis/storage/cache-manager/CacheManager"},next:{title:"reportEvent",permalink:"/mirror/taro-docs/docs/apis/data-analysis/reportEvent"}},s={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:c};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8bf4\u660e"),"\n\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0-\u8fd0\u7ef4\u4e2d\u5fc3-\u6027\u80fd\u76d1\u63a7-\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u300d\u4e2d\u65b0\u5efa\u76d1\u63a7\u4e8b\u4ef6\uff0c\u914d\u7f6e\u76d1\u63a7\u63cf\u8ff0\u4e0e\u544a\u8b66\u7c7b\u578b\u3002\u6bcf\u4e00\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u5bf9\u5e94\u552f\u4e00\u7684\u76d1\u63a7ID\uff0c\u5f00\u53d1\u8005\u6700\u591a\u53ef\u4ee5\u521b\u5efa128\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportMonitor.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(name: string, value: number) => void\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u76d1\u63a7ID\uff0c\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u65b0\u5efa\u6570\u636e\u6307\u6807\u540e\u83b7\u5f97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4e0a\u62a5\u6570\u503c\uff0c\u7ecf\u5904\u7406\u540e\u4f1a\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u4e0a\u5c55\u793a\u6bcf\u5206\u949f\u7684\u4e0a\u62a5\u603b\u91cf")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.reportMonitor('1', 1)\n")))}m.isMDXComponent=!0},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);