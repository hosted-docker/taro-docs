"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[81698],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},i=void 0,p={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"apis/base/weapp/app-event/onAppShow",title:"Taro.onAppShow(callback)",description:"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of App.onShow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/app-event/onAppShow.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/mirror/taro-docs/en/docs/next/apis/base/weapp/app-event/onAppShow",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/weapp/app-event/onAppShow.md",tags:[],version:"current",frontMatter:{title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},sidebar:"API",previous:{title:"onAudioInterruptionBegin",permalink:"/mirror/taro-docs/en/docs/next/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"onAppHide",permalink:"/mirror/taro-docs/en/docs/next/apis/base/weapp/app-event/onAppHide"}},u={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"ResultReferrerInfo",id:"resultreferrerinfo",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onshowobject-object"}),(0,r.kt)("inlineCode",{parentName:"a"},"App.onShow")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenes that Return Valid referrerInfo")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Scene Value"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Scene"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Meaning of appId"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1020"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Related Mini Program list in the profile page of an Official Account"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1035"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Custom menu of an Official Account"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1036"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Message card shared from an app"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1037"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mini Program opened from a Mini Program"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1038"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Returned from another Mini Program"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source Mini Program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1043"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Template message of an Official Account"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source Official Account")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"In some versions, when there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"referrerInfo"),", the value ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is returned. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," to make a judgment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onAppShow.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: CallbackResult) => void) => void\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"path"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The path for switching the Mini Program to foreground")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"query"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"The query parameter for switching the Mini Program to foreground")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"referrerInfo"),(0,r.kt)("td",null,(0,r.kt)("code",null,"ResultReferrerInfo")),(0,r.kt)("td",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, "," is returned. (see the Note below for details.)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scene"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/app-service/scene.html"},"scene value"),"for switching the Mini Program to foreground")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"shareTicket"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The shareTicket. See ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/share.html"},"Obtaining More Forwarded Information")," for details.")))),(0,r.kt)("h3",a({},{id:"resultreferrerinfo"}),"ResultReferrerInfo"),(0,r.kt)("p",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, {} is returned. (see the Note below for details.)"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"appId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The appId of the source Mini Program, Official Account, or app.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"extraData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"The data transfered from the source Mini Program, supported when scene=1037 or 1038.")))),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onAppShow"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);