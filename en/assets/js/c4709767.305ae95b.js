"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70148],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68176:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Taro.removeStorageSync(key)",sidebar_label:"removeStorageSync"},c=void 0,i={unversionedId:"apis/storage/removeStorageSync",id:"version-3.x/apis/storage/removeStorageSync",title:"Taro.removeStorageSync(key)",description:"The synchronous version of Taro.removeStorage.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/storage/removeStorageSync.md",sourceDirName:"apis/storage",slug:"/apis/storage/removeStorageSync",permalink:"/mirror/taro-docs/en/docs/apis/storage/removeStorageSync",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/storage/removeStorageSync.md",tags:[],version:"3.x",frontMatter:{title:"Taro.removeStorageSync(key)",sidebar_label:"removeStorageSync"},sidebar:"API",previous:{title:"revokeBufferURL",permalink:"/mirror/taro-docs/en/docs/apis/storage/revokeBufferURL"},next:{title:"removeStorage",permalink:"/mirror/taro-docs/en/docs/apis/storage/removeStorage"}},p={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"API Support",id:"api-support",level:2}],u={toc:s},m="wrapper";function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The synchronous version of ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.removeStorage"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/storage/wx.removeStorageSync.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"{ (key: string): void; (key: string): void; }\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"key"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The specified key in the local cache")))),(0,n.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("h3",a({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"try {\n  Taro.removeStorageSync('key')\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,n.kt)("h3",a({},{id:"example-2"}),"Example 2"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.removeStorage({\n  key: 'key',\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"try {\n  Taro.removeStorageSync('key')\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.removeStorageSync"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);