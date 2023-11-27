"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92112],{79874:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23578:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Taro.createAudioContext(id, component)",sidebar_label:"createAudioContext"},u=void 0,c={unversionedId:"apis/media/audio/createAudioContext",id:"apis/media/audio/createAudioContext",title:"Taro.createAudioContext(id, component)",description:"Creates the AudioContext object for the audio.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/audio/createAudioContext.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/createAudioContext",permalink:"/mirror/taro-docs/en/docs/next/apis/media/audio/createAudioContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/audio/createAudioContext.md",tags:[],version:"current",frontMatter:{title:"Taro.createAudioContext(id, component)",sidebar_label:"createAudioContext"},sidebar:"API",previous:{title:"createInnerAudioContext",permalink:"/mirror/taro-docs/en/docs/next/apis/media/audio/createInnerAudioContext"},next:{title:"AudioBuffer",permalink:"/mirror/taro-docs/en/docs/next/apis/media/audio/AudioBuffer"}},l={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:d},s="wrapper";function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(s,o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Creates the AudioContext object for the audio."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note\uff1aAs of base library 1.6.0, this API is not maintained. Use ",(0,n.kt)("a",o({parentName:"strong"},{href:"/mirror/taro-docs/en/docs/next/apis/media/audio/createInnerAudioContext"}),"Taro.createInnerAudioContext")," instead")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/audio/wx.createAudioContext.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(id: string, component?: Record<string, any>) => AudioContext\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"id"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The ",(0,n.kt)("code",null,"audio")," component's ID")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"component"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The ",(0,n.kt)("code",null,"this")," object of the current component instance in custom components. It is used with the audio component")))),(0,n.kt)("h2",o({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const audioCtx = Taro.createAudioContext('myAudio')\n")),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.createAudioContext"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);