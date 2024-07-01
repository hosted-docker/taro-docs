"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75621],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return g}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(r),k=o,g=s["".concat(i,".").concat(k)]||s[k]||d[k]||a;return r?n.createElement(g,c(c({ref:e},p),{},{components:r})):n.createElement(g,c({ref:e},p))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[s]="string"==typeof t?t:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},95664:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const c={title:"Taro.getBackgroundFetchToken(option)",sidebar_label:"getBackgroundFetchToken"},l=void 0,i={unversionedId:"apis/storage/background-fetch/getBackgroundFetchToken",id:"version-3.x/apis/storage/background-fetch/getBackgroundFetchToken",title:"Taro.getBackgroundFetchToken(option)",description:"Gets the custom login state that was set. If not, return fail.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/storage/background-fetch/getBackgroundFetchToken.md",sourceDirName:"apis/storage/background-fetch",slug:"/apis/storage/background-fetch/getBackgroundFetchToken",permalink:"/mirror/taro-docs/en/docs/apis/storage/background-fetch/getBackgroundFetchToken",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/storage/background-fetch/getBackgroundFetchToken.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBackgroundFetchToken(option)",sidebar_label:"getBackgroundFetchToken"},sidebar:"API",previous:{title:"onBackgroundFetchData",permalink:"/mirror/taro-docs/en/docs/apis/storage/background-fetch/onBackgroundFetchData"},next:{title:"getBackgroundFetchData",permalink:"/mirror/taro-docs/en/docs/apis/storage/background-fetch/getBackgroundFetchData"}},u={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:p},d="wrapper";function k(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)(d,o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gets the custom login state that was set. If not, return fail."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => void\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",o({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.getBackgroundFetchToken"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);