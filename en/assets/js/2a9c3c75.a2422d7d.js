"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7098],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return k}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(r),g=a,k=d["".concat(i,".").concat(g)]||d[g]||s[g]||o;return r?n.createElement(k,c(c({ref:e},p),{},{components:r})):n.createElement(k,c({ref:e},p))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[d]="string"==typeof t?t:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},48847:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const c={title:"Taro.getBackgroundFetchData(option)",sidebar_label:"getBackgroundFetchData"},l=void 0,i={unversionedId:"apis/storage/background-fetch/getBackgroundFetchData",id:"version-3.x/apis/storage/background-fetch/getBackgroundFetchData",title:"Taro.getBackgroundFetchData(option)",description:"Pull the backgroundFetch client cache data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/storage/background-fetch/getBackgroundFetchData.md",sourceDirName:"apis/storage/background-fetch",slug:"/apis/storage/background-fetch/getBackgroundFetchData",permalink:"/mirror/taro-docs/en/docs/apis/storage/background-fetch/getBackgroundFetchData",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/storage/background-fetch/getBackgroundFetchData.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBackgroundFetchData(option)",sidebar_label:"getBackgroundFetchData"},sidebar:"API",previous:{title:"getBackgroundFetchToken",permalink:"/mirror/taro-docs/en/docs/apis/storage/background-fetch/getBackgroundFetchToken"},next:{title:"createCacheManager",permalink:"/mirror/taro-docs/en/docs/apis/storage/cache-manager/createCacheManager"}},u={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"API Support",id:"api-support",level:2}],d={toc:p},s="wrapper";function g(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(s,a({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pull the backgroundFetch client cache data."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"fetchType"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"Type"),(0,n.kt)("td",null,"Cache data category, periodic or pre")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getBackgroundFetchData"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0}}]);