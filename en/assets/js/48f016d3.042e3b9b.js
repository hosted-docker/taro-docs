"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[63619],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(r),d=n,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[k]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97938:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={title:"Worker",sidebar_label:"Worker"},p=void 0,i={unversionedId:"apis/worker/Worker",id:"version-3.x/apis/worker/Worker",title:"Worker",description:"Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/worker/Worker.md",sourceDirName:"apis/worker",slug:"/apis/worker/",permalink:"/mirror/taro-docs/en/docs/apis/worker/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/worker/Worker.md",tags:[],version:"3.x",frontMatter:{title:"Worker",sidebar_label:"Worker"},sidebar:"API",previous:{title:"createWorker",permalink:"/mirror/taro-docs/en/docs/apis/worker/createWorker"},next:{title:"createSelectorQuery",permalink:"/mirror/taro-docs/en/docs/apis/wxml/createSelectorQuery"}},s={},c=[{value:"Methods",id:"methods",level:2},{value:"onMessage",id:"onmessage",level:3},{value:"API Support",id:"api-support",level:4},{value:"postMessage",id:"postmessage",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"API Support",id:"api-support-1",level:4},{value:"terminate",id:"terminate",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"Parameters",id:"parameters",level:2},{value:"OnMessageCallback",id:"onmessagecallback",level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",level:3},{value:"API Support",id:"api-support-3",level:2}],k={toc:c},u="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)(u,n({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("h3",n({},{id:"onmessage"}),"onMessage"),(0,a.kt)("p",null,"Listens on the event that the main thread/worker thread sends a message to the current thread."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/worker/Worker.onMessage.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OnMessageCallback) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"OnMessageCallback")),(0,a.kt)("td",null,"The callback function for the event that the main thread/worker thread sends a message to the current thread.")))),(0,a.kt)("h4",n({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.onMessage"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",n({},{id:"postmessage"}),"postMessage"),(0,a.kt)("p",null,"Sends messages to the main thread/worker thread."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/worker/Worker.postMessage.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(message: Record<string, any>) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"The message to be sent, which must be a serializable object in the format of JavaScript key-value.")))),(0,a.kt)("h4",n({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("p",null,"In the worker thread"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"worker.postMessage({\n  msg: 'hello from worker'\n})\n")),(0,a.kt)("p",null,"In the main thread"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"const worker = Taro.createWorker('workers/request/index.js')\nworker.postMessage({\n  msg: 'hello from main'\n})\n")),(0,a.kt)("h4",n({},{id:"api-support-1"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.postMessage"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",n({},{id:"terminate"}),"terminate"),(0,a.kt)("p",null,"Ends the current worker thread. This API can only be called on the worker object in the main thread."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/worker/Worker.terminate.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,a.kt)("h4",n({},{id:"api-support-2"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.terminate"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",n({},{id:"onmessagecallback"}),"OnMessageCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"OnMessageCallbackResult"))))),(0,a.kt)("h3",n({},{id:"onmessagecallbackresult"}),"OnMessageCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"The message sent by the main thread/worker thread to the current thread")))),(0,a.kt)("h2",n({},{id:"api-support-3"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.onMessage"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.postMessage"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Worker.terminate"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);