"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98963],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Taro.offCompassChange(callback)",sidebar_label:"offCompassChange"},c=void 0,l={unversionedId:"apis/device/compass/offCompassChange",id:"version-2.x/apis/device/compass/offCompassChange",title:"Taro.offCompassChange(callback)",description:"\u53d6\u6d88\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\uff0c\u53c2\u6570\u4e3a\u7a7a\uff0c\u5219\u53d6\u6d88\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u3002",source:"@site/versioned_docs/version-2.x/apis/device/compass/offCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/offCompassChange",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/compass/offCompassChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/compass/offCompassChange.md",tags:[],version:"2.x",frontMatter:{title:"Taro.offCompassChange(callback)",sidebar_label:"offCompassChange"},sidebar:"version-2.x/API",previous:{title:"onCompassChange",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/compass/onCompassChange"},next:{title:"stopDeviceMotionListening",permalink:"/mirror/taro-docs/en/docs/2.x/apis/device/motion/stopDeviceMotionListening"}},s={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:p},f="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(f,a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\uff0c\u53c2\u6570\u4e3a\u7a7a\uff0c\u5219\u53d6\u6d88\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.offCompassChange.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (...args: any[]) => any) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(...args: any[]) => any")),(0,r.kt)("td",null,"\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.offCompassChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);