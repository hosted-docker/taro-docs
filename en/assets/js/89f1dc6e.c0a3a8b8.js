"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3977],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(93106);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=i(r),k=l,h=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(h,a(a({ref:e},p),{},{components:r})):n.createElement(h,a({ref:e},p))}));function h(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=r.length,a=new Array(o);a[0]=k;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[s]="string"==typeof t?t:l,a[1]=u;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},74968:function(t,e,r){r.r(e),r.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}const a={title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},u=void 0,c={unversionedId:"apis/device/bluetooth/getBluetoothAdapterState",id:"apis/device/bluetooth/getBluetoothAdapterState",title:"Taro.getBluetoothAdapterState(option)",description:"Gets the status of the local Bluetooth adapter.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/bluetooth/getBluetoothAdapterState.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothAdapterState",permalink:"/mirror/taro-docs/en/docs/next/apis/device/bluetooth/getBluetoothAdapterState",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/bluetooth/getBluetoothAdapterState.md",tags:[],version:"current",frontMatter:{title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},sidebar:"API",previous:{title:"getBluetoothDevices",permalink:"/mirror/taro-docs/en/docs/next/apis/device/bluetooth/getBluetoothDevices"},next:{title:"closeBluetoothAdapter",permalink:"/mirror/taro-docs/en/docs/next/apis/device/bluetooth/closeBluetoothAdapter"}},i={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:p},d="wrapper";function k(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(d,l({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gets the status of the local Bluetooth adapter."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html"}),"Reference"))),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"available"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",null,"Indicates whether the Bluetooth adapter is available")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"discovering"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",null,"Indicates whether a device discovery is performed")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"success: ok; fail: error message.")))),(0,n.kt)("h2",l({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getBluetoothAdapterState({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,n.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getBluetoothAdapterState"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);