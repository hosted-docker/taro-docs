"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17806],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=k(a),s=r,N=c["".concat(o,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},67622:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"SocketTask",sidebar_label:"SocketTask"},p=void 0,o={unversionedId:"apis/network/websocket/SocketTask",id:"apis/network/websocket/SocketTask",title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 Taro.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/docs/apis/network/websocket/SocketTask.md",sourceDirName:"apis/network/websocket",slug:"/apis/network/websocket/SocketTask",permalink:"/mirror/taro-docs/docs/next/apis/network/websocket/SocketTask",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/network/websocket/SocketTask.md",tags:[],version:"current",frontMatter:{title:"SocketTask",sidebar_label:"SocketTask"},sidebar:"API",previous:{title:"closeSocket",permalink:"/mirror/taro-docs/docs/next/apis/network/websocket/closeSocket"},next:{title:"stopLocalServiceDiscovery",permalink:"/mirror/taro-docs/docs/next/apis/network/mdns/stopLocalServiceDiscovery"}},k={},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"send",id:"send",level:3},{value:"close",id:"close",level:3},{value:"onOpen",id:"onopen",level:3},{value:"onClose",id:"onclose",level:3},{value:"onError",id:"onerror",level:3},{value:"onMessage",id:"onmessage",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"CloseOption",id:"closeoption",level:3},{value:"OnCloseCallback",id:"onclosecallback",level:3},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",level:3},{value:"OnErrorCallback",id:"onerrorcallback",level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",level:3},{value:"OnMessageCallback",id:"onmessagecallback",level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",level:3},{value:"OnOpenCallback",id:"onopencallback",level:3},{value:"OnOpenCallbackResult",id:"onopencallbackresult",level:3},{value:"SendOption",id:"sendoption",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],c={toc:m},d="wrapper";function s(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(d,r({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/apis/network/websocket/SocketTask"}),"Taro.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"socketTaskId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u5f53\u524d\u7684\u8fde\u63a5 ID\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"readyState"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u63a5\u53e3\u8c03\u7528\u7ed3\u679c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CONNECTING"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OPEN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CLOSING"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CLOSED"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"websocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ws"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WebSocket")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6d4f\u89c8\u5668 websocket \u5b9e\u4f8b\u3002\uff08h5 \u7aef\u72ec\u6709\uff09")))),(0,n.kt)("h3",r({},{id:"send"}),"send"),(0,n.kt)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: SendOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SendOption"))))),(0,n.kt)("h3",r({},{id:"close"}),"close"),(0,n.kt)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: CloseOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CloseOption"))))),(0,n.kt)("h3",r({},{id:"onopen"}),"onOpen"),(0,n.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnOpenCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnOpenCallback")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"onclose"}),"onClose"),(0,n.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnCloseCallback")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"onerror"}),"onError"),(0,n.kt)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnErrorCallback")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"onmessage"}),"onMessage"),(0,n.kt)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"<T = any>(callback: OnMessageCallback<T>) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"closeoption"}),"CloseOption"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"reason"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u4e0d\u957f\u4e8e 123 \u5b57\u8282\u7684 UTF-8 \u6587\u672c\uff08\u4e0d\u662f\u5b57\u7b26\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"onclosecallback"}),"OnCloseCallback"),(0,n.kt)("p",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnCloseCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnCloseCallbackResult"))))),(0,n.kt)("h3",r({},{id:"onclosecallbackresult"}),"OnCloseCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"reason"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")))),(0,n.kt)("h3",r({},{id:"onerrorcallback"}),"OnErrorCallback"),(0,n.kt)("p",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnErrorCallbackResult"))))),(0,n.kt)("h3",r({},{id:"onerrorcallbackresult"}),"OnErrorCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")))),(0,n.kt)("h3",r({},{id:"onmessagecallback"}),"OnMessageCallback"),(0,n.kt)("p",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult<T>) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnMessageCallbackResult<T>"))))),(0,n.kt)("h3",r({},{id:"onmessagecallbackresult"}),"OnMessageCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),(0,n.kt)("h3",r({},{id:"onopencallback"}),"OnOpenCallback"),(0,n.kt)("p",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnOpenCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OnOpenCallbackResult"))))),(0,n.kt)("h3",r({},{id:"onopencallbackresult"}),"OnOpenCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"header"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8fde\u63a5\u6210\u529f\u7684 HTTP \u54cd\u5e94 Header")))),(0,n.kt)("h3",r({},{id:"sendoption"}),"SendOption"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string or ArrayBuffer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Harmony"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Harmony hybrid"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.send"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.close"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.onOpen"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.onClose"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.onError"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"SocketTask.onMessage"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0},79046:function(t,e,a){e.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(t,e,a){e.Z=a.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},26443:function(t,e,a){e.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},24997:function(t,e,a){e.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);