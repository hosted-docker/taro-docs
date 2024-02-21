"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29372],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||g[f]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Taro.getStorageInfoSync()",sidebar_label:"getStorageInfoSync"},i=void 0,c={unversionedId:"apis/storage/getStorageInfoSync",id:"version-2.x/apis/storage/getStorageInfoSync",title:"Taro.getStorageInfoSync()",description:"Taro.getStorageInfo \u7684\u540c\u6b65\u7248\u672c",source:"@site/versioned_docs/version-2.x/apis/storage/getStorageInfoSync.md",sourceDirName:"apis/storage",slug:"/apis/storage/getStorageInfoSync",permalink:"/mirror/taro-docs/docs/2.x/apis/storage/getStorageInfoSync",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/storage/getStorageInfoSync.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getStorageInfoSync()",sidebar_label:"getStorageInfoSync"},sidebar:"version-2.x/API",previous:{title:"getStorageSync",permalink:"/mirror/taro-docs/docs/2.x/apis/storage/getStorageSync"},next:{title:"getStorageInfo",permalink:"/mirror/taro-docs/docs/2.x/apis/storage/getStorageInfo"}},s={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:u},g="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(g,o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro.getStorageInfo \u7684\u540c\u6b65\u7248\u672c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"() => Option\n")),(0,n.kt)("h2",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",o({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"currentSize"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5f53\u524d\u5360\u7528\u7684\u7a7a\u95f4\u5927\u5c0f, \u5355\u4f4d KB")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"keys"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",null,"\u5f53\u524d storage \u4e2d\u6240\u6709\u7684 key")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"limitSize"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u9650\u5236\u7684\u7a7a\u95f4\u5927\u5c0f\uff0c\u5355\u4f4d KB")))),(0,n.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"Taro.getStorageInfo({\n  success: function (res) {\n    console.log(res.keys)\n    console.log(res.currentSize)\n    console.log(res.limitSize)\n  }\n})\n")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"try {\n  const res = Taro.getStorageInfoSync()\n  console.log(res.keys)\n  console.log(res.currentSize)\n  console.log(res.limitSize)\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,n.kt)("h2",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.getStorageInfoSync"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);