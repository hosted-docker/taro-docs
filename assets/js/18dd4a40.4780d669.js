"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29435],{79874:function(r,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var n=t(93106);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function f(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var s=n.createContext({}),u=function(r){var e=n.useContext(s),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},c=function(r){var e=u(r.components);return n.createElement(s.Provider,{value:e},r.children)},p="mdxType",l={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,s=r.parentName,c=f(r,["components","mdxType","originalType","parentName"]),p=u(t),y=a,d=p["".concat(s,".").concat(y)]||p[y]||l[y]||o;return t?n.createElement(d,i(i({ref:e},c),{},{components:t})):n.createElement(d,i({ref:e},c))}));function d(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,i=new Array(o);i[0]=y;var f={};for(var s in e)hasOwnProperty.call(e,s)&&(f[s]=e[s]);f.originalType=r,f[p]="string"==typeof r?r:a,i[1]=f;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},27669:function(r,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},a.apply(this,arguments)}function o(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}const i={title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},f=void 0,s={unversionedId:"apis/extend-apis/arrayBufferToBase64",id:"version-1.x/apis/extend-apis/arrayBufferToBase64",title:"arrayBufferToBase64",description:"Taro.arrayBufferToBase64(arrayBuffer)",source:"@site/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",sourceDirName:"apis/extend-apis",slug:"/apis/extend-apis/arrayBufferToBase64",permalink:"/mirror/taro-docs/docs/1.x/apis/extend-apis/arrayBufferToBase64",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",tags:[],version:"1.x",frontMatter:{title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},sidebar:"version-1.x/API",previous:{title:"stopWifi",permalink:"/mirror/taro-docs/docs/1.x/apis/device/wifi/stopWifi"},next:{title:"base64ToArrayBuffer",permalink:"/mirror/taro-docs/docs/1.x/apis/extend-apis/base64ToArrayBuffer"}},u={},c=[{value:"Taro.arrayBufferToBase64(arrayBuffer)",id:"taroarraybuffertobase64arraybuffer",level:2}],p={toc:c},l="wrapper";function y(r){var{components:e}=r,t=o(r,["components"]);return(0,n.kt)(l,a({},p,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"taroarraybuffertobase64arraybuffer"}),"Taro.arrayBufferToBase64(arrayBuffer)"),(0,n.kt)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}y.isMDXComponent=!0}}]);