"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6775],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},l=void 0,c={unversionedId:"apis/device/motion/onDeviceMotionChange",id:"apis/device/motion/onDeviceMotionChange",title:"Taro.onDeviceMotionChange(callback)",description:"Listens on the device orientation change event. The frequency is based on the Taro.startDeviceMotionListening() interval parameter. You can use Taro.stopDeviceMotionListening() stop listening.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/motion/onDeviceMotionChange.md",sourceDirName:"apis/device/motion",slug:"/apis/device/motion/onDeviceMotionChange",permalink:"/mirror/taro-docs/en/docs/next/apis/device/motion/onDeviceMotionChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/motion/onDeviceMotionChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},sidebar:"API",previous:{title:"startDeviceMotionListening",permalink:"/mirror/taro-docs/en/docs/next/apis/device/motion/startDeviceMotionListening"},next:{title:"offDeviceMotionChange",permalink:"/mirror/taro-docs/en/docs/next/apis/device/motion/offDeviceMotionChange"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s},d="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(d,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Listens on the device orientation change event. The frequency is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.startDeviceMotionListening()")," interval parameter. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.stopDeviceMotionListening()")," stop listening."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/motion/wx.onDeviceMotionChange.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",o({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"The callback function for the device orientation change event."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",o({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"alpha"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"When the phone coordinate X/Y and the earth coordinate X/Y coincide, the angle of rotation around the Z axis is alpha. The range is [0, 2*PI). It is positive when the phone rotates counterclockwise.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"beta"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"When the phone coordinate Y/Z and the earth coordinate Y/Z coincide, the angle of rotation around the X axis is beta. The range is [-1*PI, PI). It is positive when the phone rotates with its top toward the earth surface or the user.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"gamma"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"When the phone coordinate X/Z and the earth coordinate X/Z coincide, the angle of rotation around the Y axis is gamma. The range is [-1*PI/2, PI/2). It is positive when the phone rotates with its right side toward the earth surface.")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.onDeviceMotionChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);