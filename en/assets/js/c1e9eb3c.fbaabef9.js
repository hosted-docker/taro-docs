"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50654],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(93106);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=u(n),f=i,k=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[p]="string"==typeof t?t:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77313:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const l={title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},a=void 0,c={unversionedId:"apis/device/wifi/connectWifi",id:"version-2.x/apis/device/wifi/connectWifi",title:"Taro.connectWifi(option)",description:"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/connectWifi.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/connectWifi",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/wifi/connectWifi",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/wifi/connectWifi.md",tags:[],version:"2.x",frontMatter:{title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},sidebar:"version-2.x/API",previous:{title:"getConnectedWifi",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/wifi/getConnectedWifi"},next:{title:"WifiInfo",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/wifi/WifiInfo"}},u={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:d},s="wrapper";function f(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)(s,i({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<WifiError>\n")),(0,r.kt)("h2",i({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",i({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"SSID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"Wi-Fi \u8bbe\u5907 SSID")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"password"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BSSID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"Wi-Fi \u8bbe\u5907 BSSID")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: WifiError) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"Taro.connectWifi({\n  SSID: '',\n  BSSID: '',\n  success: function (res) {\n    console.log(res.errMsg)\n  }\n})\n")),(0,r.kt)("h2",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.connectWifi"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);