"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54668],{79874:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(93106);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44503:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Taro.getPerformance()",sidebar_label:"getPerformance"},c=void 0,p={unversionedId:"apis/base/performance/getPerformance",id:"version-3.x/apis/base/performance/getPerformance",title:"Taro.getPerformance()",description:"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u6307\u5357\u3002",source:"@site/versioned_docs/version-3.x/apis/base/performance/getPerformance.md",sourceDirName:"apis/base/performance",slug:"/apis/base/performance/getPerformance",permalink:"/mirror/taro-docs/en/docs/apis/base/performance/getPerformance",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/performance/getPerformance.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getPerformance()",sidebar_label:"getPerformance"},sidebar:"API",previous:{title:"preloadAssets",permalink:"/mirror/taro-docs/en/docs/apis/base/performance/preloadAssets"},next:{title:"EntryList",permalink:"/mirror/taro-docs/en/docs/apis/base/performance/EntryList"}},s={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],m={toc:l},f="wrapper";function u(e){var{components:r}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},m,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html"}),"\u5c0f\u7a0b\u5e8f\u6d4b\u901f"),"\u6307\u5357\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\uff0c\u5f53\u5f00\u542f\u4ee3\u7801 ",(0,n.kt)("a",a({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html"}),"\u6309\u9700\u6ce8\u5165")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u65f6\uff0cevaluateScript")," \u5c06\u4ec5\u5305\u542b\u516c\u6709\u90e8\u5206\u4ee3\u7801\uff0c\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u7684\u65f6\u95f4\u4f1a\u5305\u542b\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"firstRender")," \u4e2d\uff08\u56e0\u4e3a\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u8fc7\u7a0b\u6210\u4e3a\u4e86\u9996\u6b21\u6e32\u67d3\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\uff09\u3002\u56e0\u6b64\u5f00\u542f\u6309\u9700\u6ce8\u5165\u540e\uff0c\u811a\u672c\u8017\u65f6\u964d\u4f4e\uff0c\u6e32\u67d3\u65f6\u95f4\u63d0\u9ad8\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\uff0c\u4f18\u5316\u6548\u679c\u53ef\u4ee5\u5173\u6ce8\u6574\u4f53\u542f\u52a8\u8017\u65f6\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"appLaunch"),"\uff09\u6765\u8bc4\u4f30\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"firstPaint")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"firstContentfulPaint")," \u6307\u6807\u5728\u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"li"},"vconsole")," \u7684\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u7ed8\u5236 ",(0,n.kt)("inlineCode",{parentName:"li"},"vconsoel")," \u7684\u9762\u677f\uff0c\u4f1a\u5bfc\u81f4\u6570\u636e\u63d0\u524d\u3002")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:t(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:t(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:t(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:t(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => Performance\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const performance = Taro.getPerformance()\nconst observer = performance.createObserver((entryList) => {\n  console.log(entryList.getEntries())\n})\nobserver.observe({ entryTypes: ['render', 'script', 'navigation'] })\n")))}u.isMDXComponent=!0},34208:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,r,t){r.Z=t.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},24997:function(e,r,t){r.Z=t.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);