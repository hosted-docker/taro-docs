"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51169],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=m(a),c=r,N=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(N,p(p({ref:e},d),{},{components:a})):n.createElement(N,p({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18141:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},i=void 0,o={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"version-3.x/apis/base/weapp/app-event/onAppShow",title:"Taro.onAppShow(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onShow \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/mirror/taro-docs/docs/apis/base/weapp/app-event/onAppShow",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},sidebar:"API",previous:{title:"onAudioInterruptionBegin",permalink:"/mirror/taro-docs/docs/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"onAppHide",permalink:"/mirror/taro-docs/docs/apis/base/weapp/app-event/onAppHide"}},m={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"ResultReferrerInfo",id:"resultreferrerinfo",level:3},{value:"ForwardMaterial",id:"forwardmaterial",level:3},{value:"ChatType",id:"chattype",level:3},{value:"ApiCategory",id:"apicategory",level:3}],k={toc:d},u="wrapper";function c(t){var{components:e}=t,p=l(t,["components"]);return(0,n.kt)(u,r({},k,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"App.onShow"))," \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u6709\u6548 referrerInfo \u7684\u573a\u666f")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u573a\u666f\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u573a\u666f"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"appId\u542b\u4e49"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1020"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7 profile \u9875\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5217\u8868"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1035"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u81ea\u5b9a\u4e49\u83dc\u5355"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1036"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"App \u5206\u4eab\u6d88\u606f\u5361\u7247"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90App")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1037"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u6253\u5f00\u5c0f\u7a0b\u5e8f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1038"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u8fd4\u56de"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1043"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u6a21\u677f\u6d88\u606f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("p",null,"\u90e8\u5206\u7248\u672c\u5728\u65e0",(0,n.kt)("inlineCode",{parentName:"p"},"referrerInfo"),"\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," \u8fdb\u884c\u5224\u65ad\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"callbackresult"}),"CallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"query"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684 query \u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"shareTicket\uff0c\u8be6\u89c1",(0,n.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"}),"\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"scene"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684",(0,n.kt)("a",r({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"\u573a\u666f\u503c"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"referrerInfo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ResultReferrerInfo")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"forwardMaterials"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ForwardMaterial[]")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00\u7684\u6587\u4ef6\u4fe1\u606f\u6570\u7ec4\uff0c\u53ea\u6709\u4ece\u804a\u5929\u7d20\u6750\u573a\u666f\u6253\u5f00\uff08scene\u4e3a1173\uff09\u624d\u4f1a\u643a\u5e26\u8be5\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"chatType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof ChatType")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4ece\u5fae\u4fe1\u7fa4\u804a/\u5355\u804a\u6253\u5f00\u5c0f\u7a0b\u5e8f\u65f6\uff0cchatType \u8868\u793a\u5177\u4f53\u5fae\u4fe1\u7fa4\u804a/\u5355\u804a\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"apiCategory"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof ApiCategory")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"API \u7c7b\u522b")))),(0,n.kt)("h3",r({},{id:"resultreferrerinfo"}),"ResultReferrerInfo"),(0,n.kt)("p",null,"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"appId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u7684 appId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"extraData"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0cscene=1037\u62161038\u65f6\u652f\u6301")))),(0,n.kt)("h3",r({},{id:"forwardmaterial"}),"ForwardMaterial"),(0,n.kt)("p",null,"ChatType \u7c7b\u578b\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u7684mimetype\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u8def\u5f84\uff08\u5982\u679c\u662fwebview\u5219\u662furl\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"size"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u5927\u5c0f")))),(0,n.kt)("h3",r({},{id:"chattype"}),"ChatType"),(0,n.kt)("p",null,"ChatType \u7c7b\u578b\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u8054\u7cfb\u4eba\u5355\u804a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f01\u4e1a\u5fae\u4fe1\u8054\u7cfb\u4eba\u5355\u804a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u666e\u901a\u5fae\u4fe1\u7fa4\u804a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f01\u4e1a\u5fae\u4fe1\u4e92\u901a\u7fa4\u804a")))),(0,n.kt)("h3",r({},{id:"apicategory"}),"ApiCategory"),(0,n.kt)("p",null,"API \u7c7b\u522b\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7c7b\u522b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"nativeFunctionalized"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u539f\u751f\u529f\u80fd\u5316\uff0c\u89c6\u9891\u53f7\u76f4\u64ad\u5546\u54c1\u3001\u5546\u54c1\u6a71\u7a97\u7b49\u573a\u666f\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"browseOnly"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4ec5\u6d4f\u89c8\uff0c\u670b\u53cb\u5708\u5feb\u7167\u9875\u7b49\u573a\u666f\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"embedded"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5185\u5d4c\uff0c\u901a\u8fc7\u6253\u5f00\u534a\u5c4f\u5c0f\u7a0b\u5e8f\u80fd\u529b\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f")))))}c.isMDXComponent=!0},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(t,e,a){e.Z=a.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},24997:function(t,e,a){e.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);