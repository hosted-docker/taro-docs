"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79397],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},i=void 0,c={unversionedId:"apis/base/weapp/life-cycle/getLaunchOptionsSync",id:"apis/base/weapp/life-cycle/getLaunchOptionsSync",title:"Taro.getLaunchOptionsSync()",description:"Obtains the parameters upon Mini Program startup. The callback parameters are consistent with those of App.onLaunch.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",sourceDirName:"apis/base/weapp/life-cycle",slug:"/apis/base/weapp/life-cycle/getLaunchOptionsSync",permalink:"/mirror/taro-docs/en/docs/next/apis/base/weapp/life-cycle/getLaunchOptionsSync",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",tags:[],version:"current",frontMatter:{title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},sidebar:"API",previous:{title:"UpdateManager",permalink:"/mirror/taro-docs/en/docs/next/apis/base/update/UpdateManager"},next:{title:"getEnterOptionsSync",permalink:"/mirror/taro-docs/en/docs/next/apis/base/weapp/life-cycle/getEnterOptionsSync"}},l={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"API Support",id:"api-support",level:2}],u={toc:s},f="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(f,a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obtains the parameters upon Mini Program startup. The callback parameters are consistent with those of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onlaunchobject-object"}),(0,r.kt)("inlineCode",{parentName:"a"},"App.onLaunch")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")),(0,r.kt)("p",null,"In some versions, when there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"referrerInfo"),", the value ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is returned. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," to make a judgment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => LaunchOptionsApp\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getLaunchOptionsSync"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);