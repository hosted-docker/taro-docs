"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41047],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36959:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},l=void 0,c={unversionedId:"apis/wxml/createIntersectionObserver",id:"version-3.x/apis/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(component, options)",description:"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 this.createIntersectionObserver([options]) \u6765\u4ee3\u66ff\u3002",source:"@site/versioned_docs/version-3.x/apis/wxml/createIntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/createIntersectionObserver",permalink:"/mirror/taro-docs/docs/apis/wxml/createIntersectionObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/wxml/createIntersectionObserver.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},sidebar:"API",previous:{title:"createSelectorQuery",permalink:"/mirror/taro-docs/docs/apis/wxml/createSelectorQuery"},next:{title:"createMediaQueryObserver",permalink:"/mirror/taro-docs/docs/apis/wxml/createMediaQueryObserver"}},s={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],m={toc:p},u="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(u,a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"this.createIntersectionObserver([options])")," \u6765\u4ee3\u66ff\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:r(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(component: TaroGeneral.IAnyObject, options?: Option) => IntersectionObserver\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"component"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u9009\u9879")))),(0,n.kt)("h3",a({},{id:"option"}),"Option"),(0,n.kt)("p",null,"\u9009\u9879"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"initialRatio"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u521d\u59cb\u7684\u76f8\u4ea4\u6bd4\u4f8b\uff0c\u5982\u679c\u8c03\u7528\u65f6\u68c0\u6d4b\u5230\u7684\u76f8\u4ea4\u6bd4\u4f8b\u4e0e\u8fd9\u4e2a\u503c\u4e0d\u76f8\u7b49\u4e14\u8fbe\u5230\u9608\u503c\uff0c\u5219\u4f1a\u89e6\u53d1\u4e00\u6b21\u76d1\u542c\u5668\u7684\u56de\u8c03\u51fd\u6570\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"observeAll"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u662f\u5426\u540c\u65f6\u89c2\u6d4b\u591a\u4e2a\u76ee\u6807\u8282\u70b9\uff08\u800c\u975e\u4e00\u4e2a\uff09\uff0c\u5982\u679c\u8bbe\u4e3a true \uff0cobserve \u7684 targetSelector \u5c06\u9009\u4e2d\u591a\u4e2a\u8282\u70b9\uff08\u6ce8\u610f\uff1a\u540c\u65f6\u9009\u4e2d\u8fc7\u591a\u8282\u70b9\u5c06\u5f71\u54cd\u6e32\u67d3\u6027\u80fd\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"thresholds"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number[]")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4e00\u4e2a\u6570\u503c\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u9608\u503c\u3002")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const observer = Taro.createIntersectionObserver(this, { thresholds: [0], observeAll: true })\n")))}d.isMDXComponent=!0},34208:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(e,t,r){t.Z=r.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},24997:function(e,t,r){t.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);