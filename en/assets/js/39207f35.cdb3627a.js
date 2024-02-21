"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98160],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),k=r,s=g["".concat(p,".").concat(k)]||g[k]||d[k]||l;return n?a.createElement(s,o(o({ref:t},c),{},{components:n})):a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"LogManager",sidebar_label:"LogManager"},i=void 0,p={unversionedId:"apis/base/debug/LogManager",id:"apis/base/debug/LogManager",title:"LogManager",description:"The log manager instance, which can be obtained via Taro.getLogManager.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/debug/LogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/LogManager",permalink:"/mirror/taro-docs/en/docs/next/apis/base/debug/LogManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/debug/LogManager.md",tags:[],version:"current",frontMatter:{title:"LogManager",sidebar_label:"LogManager"},sidebar:"API",previous:{title:"console",permalink:"/mirror/taro-docs/en/docs/next/apis/base/debug/console"},next:{title:"RealtimeLogManager",permalink:"/mirror/taro-docs/en/docs/next/apis/base/debug/RealtimeLogManager"}},u={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"Methods",id:"methods",level:2},{value:"debug",id:"debug",level:3},{value:"API Support",id:"api-support",level:4},{value:"info",id:"info",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"log",id:"log",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"warn",id:"warn",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"API Support",id:"api-support-4",level:2}],g={toc:c},d="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(d,r({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The log manager instance, which can be obtained via ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.getLogManager"),"."),(0,a.kt)("h2",r({},{id:"how-to-use"}),"How to Use"),(0,a.kt)("p",null,"You can save up to 5 MB in log content. Old log content will be deleted if this threshold is exceeded.\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},'open-type="feedback"'),' of the button component to upload printed logs. Developers can view these logs via "Feedback Management" in the left-side menu on the Mini Program admin console.'),(0,a.kt)("p",null,"By default, the base library writes the App and Page lifecycle functions and function calls under the wx namespace to the log."),(0,a.kt)("h2",r({},{id:"methods"}),"Methods"),(0,a.kt)("h3",r({},{id:"debug"}),"debug"),(0,a.kt)("p",null,'Writes the "debug" log.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/debug/LogManager.debug.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"args"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",null,"The log can contain any number of entries, but the total size of the parameters of a single call cannot exceed 100 KB.")))),(0,a.kt)("h4",r({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.debug"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",r({},{id:"info"}),"info"),(0,a.kt)("p",null,'Writes the "info" log.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/debug/LogManager.info.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"args"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",null,"The log can contain any number of entries, but the total size of the parameters of a single call cannot exceed 100 KB.")))),(0,a.kt)("h4",r({},{id:"api-support-1"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.info"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",r({},{id:"log"}),"log"),(0,a.kt)("p",null,'Writes the "log" log.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/debug/LogManager.log.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"args"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",null,"The log can contain any number of entries, but the total size of the parameters of a single call cannot exceed 100 KB.")))),(0,a.kt)("h4",r({},{id:"api-support-2"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.log"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",r({},{id:"warn"}),"warn"),(0,a.kt)("p",null,'Writes the "warn" log.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/debug/LogManager.warn.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(...args: any[]) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"args"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",null,"The log can contain any number of entries, but the total size of the parameters of a single call cannot exceed 100 KB.")))),(0,a.kt)("h4",r({},{id:"api-support-3"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.warn"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h2",r({},{id:"api-support-4"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.debug"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.info"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.log"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"LogManager.warn"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);