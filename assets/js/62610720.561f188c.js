"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[35811],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23977:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Taro.readBLECharacteristicValue(option)",sidebar_label:"readBLECharacteristicValue"},o=void 0,c={unversionedId:"apis/device/bluetooth-ble/readBLECharacteristicValue",id:"apis/device/bluetooth-ble/readBLECharacteristicValue",title:"Taro.readBLECharacteristicValue(option)",description:"\u8bfb\u53d6\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 read \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/docs/apis/device/bluetooth-ble/readBLECharacteristicValue.md",sourceDirName:"apis/device/bluetooth-ble",slug:"/apis/device/bluetooth-ble/readBLECharacteristicValue",permalink:"/mirror/taro-docs/docs/next/apis/device/bluetooth-ble/readBLECharacteristicValue",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/bluetooth-ble/readBLECharacteristicValue.md",tags:[],version:"current",frontMatter:{title:"Taro.readBLECharacteristicValue(option)",sidebar_label:"readBLECharacteristicValue"},sidebar:"API",previous:{title:"setBLEMTU",permalink:"/mirror/taro-docs/docs/next/apis/device/bluetooth-ble/setBLEMTU"},next:{title:"onBLEMTUChange",permalink:"/mirror/taro-docs/docs/next/apis/device/bluetooth-ble/onBLEMTUChange"}},p={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,a.kt)("wrapper",n({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bfb\u53d6\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 read \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e76\u884c\u8c03\u7528\u591a\u6b21\u4f1a\u5b58\u5728\u8bfb\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u8bfb\u53d6\u5230\u7684\u4fe1\u606f\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"onBLECharacteristicValueChange")," \u65b9\u6cd5\u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u83b7\u53d6\u3002")),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:r(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:r(92207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",n({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.BluetoothError>\n")),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",n({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"characteristicId"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"deviceId"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u84dd\u7259\u8bbe\u5907 id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"serviceId"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"// \u5fc5\u987b\u5728\u8fd9\u91cc\u7684\u56de\u8c03\u624d\u80fd\u83b7\u53d6\nTaro.onBLECharacteristicValueChange(function(characteristic) {\n  console.log('characteristic value comed:', characteristic)\n})\nTaro.readBLECharacteristicValue({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  success: function (res) {\n    console.log('readBLECharacteristicValue:', res.errCode)\n  }\n})\n")))}d.isMDXComponent=!0},68525:function(e,t,r){t.Z=r.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(e,t,r){t.Z=r.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);