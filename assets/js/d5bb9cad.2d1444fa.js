"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68568],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,a(a({ref:e},s),{},{components:r})):n.createElement(m,a({ref:e},s))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95632:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});r(93106);var n=r(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const a={title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},l=void 0,c={unversionedId:"apis/device/wifi/getWifiList",id:"version-2.x/apis/device/wifi/getWifiList",title:"Taro.getWifiList(option)",description:"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 onGetWifiList \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de wifiList \u6570\u636e\u3002 Android \u8c03\u7528\u524d\u9700\u8981 \u7528\u6237\u6388\u6743 scope.userLocation\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/getWifiList",permalink:"/mirror/taro-docs/docs/2.x/apis/device/wifi/getWifiList",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/wifi/getWifiList.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},sidebar:"version-2.x/API",previous:{title:"offGetWifiList",permalink:"/mirror/taro-docs/docs/2.x/apis/device/wifi/offGetWifiList"},next:{title:"getConnectedWifi",permalink:"/mirror/taro-docs/docs/2.x/apis/device/wifi/getConnectedWifi"}},p={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s},f="wrapper";function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(f,i({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"p"},"wifiList")," \u6570\u636e\u3002 ",(0,n.kt)("strong",{parentName:"p"},"Android \u8c03\u7528\u524d\u9700\u8981 ",(0,n.kt)("a",i({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u7528\u6237\u6388\u6743")," scope.userLocation\u3002")),(0,n.kt)("p",null,"iOS \u5c06\u8df3\u8f6c\u5230\u7cfb\u7edf\u7684 Wi-Fi \u754c\u9762\uff0cAndroid \u4e0d\u4f1a\u8df3\u8f6c\u3002 iOS 11.0 \u53ca iOS 11.1 \u4e24\u4e2a\u7248\u672c\u56e0\u7cfb\u7edf\u95ee\u9898\uff0c\u8be5\u65b9\u6cd5\u5931\u6548\u3002\u4f46\u5728 iOS 11.2 \u4e2d\u5df2\u4fee\u590d\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<WifiError>\n")),(0,n.kt)("h2",i({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",i({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: WifiError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: WifiError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: WifiError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h2",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.getWifiList"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);