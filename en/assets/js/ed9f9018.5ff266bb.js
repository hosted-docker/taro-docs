"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98361],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98477:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Taro.offLocalServiceLost(callback)",sidebar_label:"offLocalServiceLost"},c=void 0,i={unversionedId:"apis/network/mdns/offLocalServiceLost",id:"apis/network/mdns/offLocalServiceLost",title:"Taro.offLocalServiceLost(callback)",description:"Un-listens on the mDNS service loss event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/mdns/offLocalServiceLost.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/offLocalServiceLost",permalink:"/mirror/taro-docs/en/docs/next/apis/network/mdns/offLocalServiceLost",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/network/mdns/offLocalServiceLost.md",tags:[],version:"current",frontMatter:{title:"Taro.offLocalServiceLost(callback)",sidebar_label:"offLocalServiceLost"},sidebar:"API",previous:{title:"offLocalServiceResolveFail",permalink:"/mirror/taro-docs/en/docs/next/apis/network/mdns/offLocalServiceResolveFail"},next:{title:"offLocalServiceFound",permalink:"/mirror/taro-docs/en/docs/next/apis/network/mdns/offLocalServiceFound"}},s={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"API Support",id:"api-support",level:2}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un-listens on the mDNS service loss event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/mdns/wx.offLocalServiceLost.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",o({},{id:"callback"}),"Callback"),(0,n.kt)("p",null,"The callback function for the mDNS service loss event."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"res"),(0,n.kt)("td",null,(0,n.kt)("code",null,"CallbackResult"))))),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.offLocalServiceLost"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);