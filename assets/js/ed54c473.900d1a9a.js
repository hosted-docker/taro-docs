"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75404],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=u(n),s=a,m=k["".concat(i,".").concat(s)]||k[s]||d[s]||l;return n?r.createElement(m,p(p({ref:e},c),{},{components:n})):r.createElement(m,p({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37948:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},o=void 0,i={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"version-2.x/apis/base/weapp/app-event/onAppShow",title:"Taro.onAppShow(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onShow \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppShow.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/mirror/taro-docs/docs/2.x/apis/base/weapp/app-event/onAppShow",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppShow.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},sidebar:"version-2.x/API",previous:{title:"onAudioInterruptionBegin",permalink:"/mirror/taro-docs/docs/2.x/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"onAppHide",permalink:"/mirror/taro-docs/docs/2.x/apis/base/weapp/app-event/onAppHide"}},u={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"ResultReferrerInfo",id:"resultreferrerinfo",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:c};function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object"}),(0,r.kt)("inlineCode",{parentName:"a"},"App.onShow"))," \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u6709\u6548 referrerInfo \u7684\u573a\u666f")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u573a\u666f\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u573a\u666f"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"appId\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1020"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7 profile \u9875\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5217\u8868"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1035"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u81ea\u5b9a\u4e49\u83dc\u5355"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1036"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"App \u5206\u4eab\u6d88\u606f\u5361\u7247"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90App")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1037"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u6253\u5f00\u5c0f\u7a0b\u5e8f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1038"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u8fd4\u56de"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1043"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u6a21\u677f\u6d88\u606f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,r.kt)("p",null,"\u90e8\u5206\u7248\u672c\u5728\u65e0",(0,r.kt)("inlineCode",{parentName:"p"},"referrerInfo"),"\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," \u8fdb\u884c\u5224\u65ad\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: CallbackResult) => void) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"path"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684\u8def\u5f84")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"query"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684 query \u53c2\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"referrerInfo"),(0,r.kt)("td",null,(0,r.kt)("code",null,"ResultReferrerInfo")),(0,r.kt)("td",null,"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ","{}","\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scene"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"},"\u573a\u666f\u503c"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"shareTicket"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"shareTicket\uff0c\u8be6\u89c1",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"},"\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f"))))),(0,r.kt)("h3",a({},{id:"resultreferrerinfo"}),"ResultReferrerInfo"),(0,r.kt)("p",null,"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"appId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u7684 appId")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"extraData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0cscene=1037\u62161038\u65f6\u652f\u6301")))),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onAppShow"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);