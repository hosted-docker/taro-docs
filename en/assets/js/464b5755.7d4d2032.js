"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25450],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89638:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},i=void 0,p={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"version-3.x/apis/base/weapp/app-event/onAppShow",title:"Taro.onAppShow(callback)",description:"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of App.onShow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/mirror/taro-docs/en/docs/apis/base/weapp/app-event/onAppShow",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},sidebar:"API",previous:{title:"onAudioInterruptionBegin",permalink:"/mirror/taro-docs/en/docs/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"onAppHide",permalink:"/mirror/taro-docs/en/docs/apis/base/weapp/app-event/onAppHide"}},u={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"ResultReferrerInfo",id:"resultreferrerinfo",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:c},d="wrapper";function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(d,a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onshowobject-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"App.onShow")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scenes that Return Valid referrerInfo")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Scene Value"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Scene"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Meaning of appId"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1020"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Related Mini Program list in the profile page of an Official Account"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1035"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Custom menu of an Official Account"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1036"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Message card shared from an app"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source app")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1037"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mini Program opened from a Mini Program"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Mini Program")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1038"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returned from another Mini Program"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Mini Program")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1043"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Template message of an Official Account"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")),(0,n.kt)("p",null,"In some versions, when there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"referrerInfo"),", the value ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," is returned. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," to make a judgment."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onAppShow.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: CallbackResult) => void) => void\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"callbackresult"}),"CallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"path"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The path for switching the Mini Program to foreground")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"query"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The query parameter for switching the Mini Program to foreground")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"referrerInfo"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ResultReferrerInfo")),(0,n.kt)("td",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, "," is returned. (see the Note below for details.)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scene"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The",(0,n.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/app-service/scene.html"},"scene value"),"for switching the Mini Program to foreground")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"shareTicket"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The shareTicket. See ",(0,n.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/share.html"},"Obtaining More Forwarded Information")," for details.")))),(0,n.kt)("h3",a({},{id:"resultreferrerinfo"}),"ResultReferrerInfo"),(0,n.kt)("p",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, {} is returned. (see the Note below for details.)"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"appId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The appId of the source Mini Program, Official Account, or app.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"extraData"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The data transfered from the source Mini Program, supported when scene=1037 or 1038.")))),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onAppShow"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);