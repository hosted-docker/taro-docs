"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79231],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=l,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||a;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[s]="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51731:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"Taro.checkIsSupportFacialRecognition(option)",sidebar_label:"checkIsSupportFacialRecognition"},i=void 0,c={unversionedId:"apis/open-api/facial/checkIsSupportFacialRecognition",id:"version-2.x/apis/open-api/facial/checkIsSupportFacialRecognition",title:"Taro.checkIsSupportFacialRecognition(option)",description:"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b",source:"@site/versioned_docs/version-2.x/apis/open-api/facial/checkIsSupportFacialRecognition.md",sourceDirName:"apis/open-api/facial",slug:"/apis/open-api/facial/checkIsSupportFacialRecognition",permalink:"/mirror/taro-docs/en/docs/2.x/apis/open-api/facial/checkIsSupportFacialRecognition",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/open-api/facial/checkIsSupportFacialRecognition.md",tags:[],version:"2.x",frontMatter:{title:"Taro.checkIsSupportFacialRecognition(option)",sidebar_label:"checkIsSupportFacialRecognition"},sidebar:"version-2.x/API",previous:{title:"checkIsSoterEnrolledInDevice",permalink:"/mirror/taro-docs/en/docs/2.x/apis/open-api/soter/checkIsSoterEnrolledInDevice"},next:{title:"startFacialRecognitionVerify",permalink:"/mirror/taro-docs/en/docs/2.x/apis/open-api/facial/startFacialRecognitionVerify"}},u={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:p},d="wrapper";function k(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)(d,l({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b"),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"checkAliveType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u4ea4\u4e92\u65b9\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",l({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9519\u8bef\u7801")))),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.checkIsSupportFacialRecognition"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);