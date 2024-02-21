"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17263],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47652:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getOpenUserInfo()",sidebar_label:"getOpenUserInfo"},p=void 0,c={unversionedId:"apis/alipay/getOpenUserInfo",id:"version-2.x/apis/alipay/getOpenUserInfo",title:"Taro.getOpenUserInfo()",description:"\u6b64\u63a5\u53e3\u53ef\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u7684\u57fa\u7840\u4fe1\u606f\uff08\u5934\u50cf\u56fe\u7247\u5730\u5740\u3001\u6635\u79f0\u3001\u6027\u522b\u3001\u56fd\u5bb6\u7801\u3001\u7701\u4efd\u3001\u6240\u5728\u5e02\u533a\uff09\uff0c\u63a5\u5165\u65b9\u6cd5\u8bf7\u53c2\u8003 \u83b7\u53d6\u4f1a\u5458\u57fa\u7840\u4fe1\u606f\u4ecb\u7ecd\u3002\u5982\u9700\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u6807\u8bc6\uff08user_id\uff09\uff0c\u8bf7\u8c03\u7528 my.getAuthCode \u548c alipay.system.oauth.token \u63a5\u53e3\u3002",source:"@site/versioned_docs/version-2.x/apis/alipay/getOpenUserInfo.md",sourceDirName:"apis/alipay",slug:"/apis/alipay/getOpenUserInfo",permalink:"/mirror/taro-docs/en/docs/2.x/apis/alipay/getOpenUserInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/alipay/getOpenUserInfo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getOpenUserInfo()",sidebar_label:"getOpenUserInfo"},sidebar:"version-2.x/API",previous:{title:"RewardedVideoAd",permalink:"/mirror/taro-docs/en/docs/2.x/apis/ad/RewardedVideoAd"},next:{title:"setPageInfo",permalink:"/mirror/taro-docs/en/docs/2.x/apis/swan/setPageInfo"}},l={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s},f="wrapper";function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(f,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6b64\u63a5\u53e3\u53ef\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u7684\u57fa\u7840\u4fe1\u606f\uff08\u5934\u50cf\u56fe\u7247\u5730\u5740\u3001\u6635\u79f0\u3001\u6027\u522b\u3001\u56fd\u5bb6\u7801\u3001\u7701\u4efd\u3001\u6240\u5728\u5e02\u533a\uff09\uff0c\u63a5\u5165\u65b9\u6cd5\u8bf7\u53c2\u8003 \u83b7\u53d6\u4f1a\u5458\u57fa\u7840\u4fe1\u606f\u4ecb\u7ecd\u3002\u5982\u9700\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u6807\u8bc6\uff08user_id\uff09\uff0c\u8bf7\u8c03\u7528 my.getAuthCode \u548c alipay.system.oauth.token \u63a5\u53e3\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.alipay.com/mini/api/ch8chh"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => Promise<string>\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getOpenUserInfo"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);