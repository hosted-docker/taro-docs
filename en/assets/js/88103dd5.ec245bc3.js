"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85327],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20526:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Taro.chooseLocation(param)",sidebar_label:"chooseLocation"},i=void 0,c={unversionedId:"apis/location/chooseLocation",id:"version-1.x/apis/location/chooseLocation",title:"Taro.chooseLocation(param)",description:"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-1.x/apis/location/chooseLocation.md",sourceDirName:"apis/location",slug:"/apis/location/chooseLocation",permalink:"/mirror/taro-docs/en/docs/1.x/apis/location/chooseLocation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/location/chooseLocation.md",tags:[],version:"1.x",frontMatter:{title:"Taro.chooseLocation(param)",sidebar_label:"chooseLocation"},sidebar:"version-1.x/API",previous:{title:"openLocation",permalink:"/mirror/taro-docs/en/docs/1.x/apis/location/openLocation"},next:{title:"playVoice",permalink:"/mirror/taro-docs/en/docs/1.x/apis/multimedia/audio/playVoice"}},p={},u=[{value:"\u4f7f\u7528\u524d\u6ce8\u610f",id:"\u4f7f\u7528\u524d\u6ce8\u610f",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"success(obj)",id:"successobj",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:u};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseLocation.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"wx.chooseLocation")),"\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,r.kt)("h2",a({},{id:"\u4f7f\u7528\u524d\u6ce8\u610f"}),"\u4f7f\u7528\u524d\u6ce8\u610f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chooseLocation")," api\u529f\u80fd\u662f\u4f9d\u8d56\u4e8e\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 api \u5bc6\u94a5\u3002\u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ef\u4ee5\u524d\u5f80\u817e\u8baf\u4f4d\u7f6e\u670d\u52a1",(0,r.kt)("a",a({parentName:"p"},{href:"https://lbs.qq.com/console/mykey.html?console=mykey"}),"\u5f00\u53d1\u8005\u63a7\u5236\u53f0"),"\u8fdb\u884c\u7533\u8bf7\u3002"),(0,r.kt)("p",null,"\u83b7\u5f97 api \u5bc6\u94a5\u540e\uff0c\u60a8\u9700\u8981\u5c06\u5b83\u586b\u5165\u9879\u76ee\u7684\u5e38\u91cf\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"defineConstants.LOCATION_APIKEY"),"\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"// config/index.js\n\nconst config = {\n  defineConstants: {\n    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')\n  },\n  // ...\n}\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"object-param"}),"object param"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[success]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"#successobj"}),(0,r.kt)("code",null,"function"))),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[fail]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"function")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[complete]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"function")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("h4",a({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,r.kt)("h5",a({},{id:"successobj"}),"success(obj)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f4d\u7f6e\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"latitude"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7eac\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"longitude"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7ecf\u5ea6\uff0c\u6d6e\u70b9\u6570\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.chooseLocation(params).then(...)\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.chooseLocation"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);