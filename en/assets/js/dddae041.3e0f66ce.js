"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25005],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Taro.pageScrollTo(param)",sidebar_label:"pageScrollTo"},i=void 0,p={unversionedId:"apis/interface/pagescroll/pageScrollTo",id:"version-1.x/apis/interface/pagescroll/pageScrollTo",title:"Taro.pageScrollTo(param)",description:"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/pagescroll/pageScrollTo.md",sourceDirName:"apis/interface/pagescroll",slug:"/apis/interface/pagescroll/pageScrollTo",permalink:"/mirror/taro-docs/en/docs/1.x/apis/interface/pagescroll/pageScrollTo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/interface/pagescroll/pageScrollTo.md",tags:[],version:"1.x",frontMatter:{title:"Taro.pageScrollTo(param)",sidebar_label:"pageScrollTo"},sidebar:"version-1.x/API",previous:{title:"setNavigationBarColor",permalink:"/mirror/taro-docs/en/docs/1.x/apis/interface/navigationbar/setNavigationBarColor"},next:{title:"startPullDownRefresh",permalink:"/mirror/taro-docs/en/docs/1.x/apis/interface/pulldownrefresh/startPullDownRefresh"}},c={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],m={toc:u},s="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(s,a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.pageScrollTo.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.pageScrollTo")),"\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"object-param"}),"object param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"scrollTop"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6eda\u52a8\u5230\u9875\u9762\u7684\u76ee\u6807\u4f4d\u7f6e\uff0c\u5355\u4f4d px")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[duration]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"300")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6eda\u52a8\u52a8\u753b\u7684\u65f6\u957f\uff0c\u5355\u4f4d ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[success]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[fail]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[complete]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.pageScrollTo(params).then(...)\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.pageScrollTo"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);