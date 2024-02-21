"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85747],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},c=void 0,a={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-2.x/apis/device/ibeacon/IBeaconInfo",title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-2.x/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/mirror/taro-docs/docs/2.x/apis/device/ibeacon/IBeaconInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/ibeacon/IBeaconInfo.md",tags:[],version:"2.x",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"version-2.x/API",previous:{title:"getBeacons",permalink:"/mirror/taro-docs/docs/2.x/apis/device/ibeacon/getBeacons"},next:{title:"stopWifi",permalink:"/mirror/taro-docs/docs/2.x/apis/device/wifi/stopWifi"}},u={},s=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2}],d={toc:s},p="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(p,o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"accuracy"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u8ddd\u79bb")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"major"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u4e3b id")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"minor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"iBeacon \u8bbe\u5907\u7684\u6b21 id")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"proximity"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"rssi"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"uuid"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"iBeacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")))))}f.isMDXComponent=!0}}]);