"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76407],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97894:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Taro.onVoIPChatInterrupted(callback)",sidebar_label:"onVoIPChatInterrupted"},i=void 0,p={unversionedId:"apis/media/voip/onVoIPChatInterrupted",id:"apis/media/voip/onVoIPChatInterrupted",title:"Taro.onVoIPChatInterrupted(callback)",description:"\u76d1\u542c\u88ab\u52a8\u65ad\u5f00\u5b9e\u65f6\u8bed\u97f3\u901a\u8bdd\u4e8b\u4ef6",source:"@site/docs/apis/media/voip/onVoIPChatInterrupted.md",sourceDirName:"apis/media/voip",slug:"/apis/media/voip/onVoIPChatInterrupted",permalink:"/mirror/taro-docs/docs/next/apis/media/voip/onVoIPChatInterrupted",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/voip/onVoIPChatInterrupted.md",tags:[],version:"current",frontMatter:{title:"Taro.onVoIPChatInterrupted(callback)",sidebar_label:"onVoIPChatInterrupted"},sidebar:"API",previous:{title:"onVoIPChatMembersChanged",permalink:"/mirror/taro-docs/docs/next/apis/media/voip/onVoIPChatMembersChanged"},next:{title:"offVoIPVideoMembersChanged",permalink:"/mirror/taro-docs/docs/next/apis/media/voip/offVoIPVideoMembersChanged"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Result",id:"result",level:3},{value:"Callback",id:"callback",level:3}],d={toc:u},s="wrapper";function m(t){var{components:e}=t,l=o(t,["components"]);return(0,r.kt)(s,a({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u88ab\u52a8\u65ad\u5f00\u5b9e\u65f6\u8bed\u97f3\u901a\u8bdd\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatInterrupted.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Callback"))))),(0,r.kt)("h3",a({},{id:"result"}),"Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"openIdList"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8fd8\u5728\u5b9e\u65f6\u8bed\u97f3\u901a\u8bdd\u4e2d\u7684\u6210\u5458 openId \u540d\u5355")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"errCode"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u9519\u8bef\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"errMsg"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h3",a({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u623f\u95f4\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(res: Result) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Result"))))))}m.isMDXComponent=!0},34208:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);