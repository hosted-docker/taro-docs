"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46329],{79874:function(t,l,e){e.d(l,{Zo:function(){return d},kt:function(){return p}});var n=e(93106);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function k(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),a=function(t){var l=n.useContext(i),e=l;return t&&(e="function"==typeof t?t(l):o(o({},l),t)),e},d=function(t){var l=a(t.components);return n.createElement(i.Provider,{value:l},t.children)},c={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},s=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,d=k(t,["components","mdxType","originalType","parentName"]),s=a(e),p=r,b=s["".concat(i,".").concat(p)]||s[p]||c[p]||u;return e?n.createElement(b,o(o({ref:l},d),{},{components:e})):n.createElement(b,o({ref:l},d))}));function p(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,o=new Array(u);o[0]=s;var k={};for(var i in l)hasOwnProperty.call(l,i)&&(k[i]=l[i]);k.originalType=t,k.mdxType="string"==typeof t?t:r,o[1]=k;for(var a=2;a<u;a++)o[a]=e[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},32705:function(t,l,e){e.r(l),e.d(l,{assets:function(){return a},contentTitle:function(){return k},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});e(93106);var n=e(79874);function r(){return r=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},r.apply(this,arguments)}function u(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}const o={title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},k=void 0,i={unversionedId:"apis/wxml/IntersectionObserver",id:"version-2.x/apis/wxml/IntersectionObserver",title:"IntersectionObserver",description:"IntersectionObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002",source:"@site/versioned_docs/version-2.x/apis/wxml/IntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/IntersectionObserver",permalink:"/mirror/taro-docs/docs/2.x/apis/wxml/IntersectionObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/wxml/IntersectionObserver.md",tags:[],version:"2.x",frontMatter:{title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},sidebar:"version-2.x/API",previous:{title:"createIntersectionObserver",permalink:"/mirror/taro-docs/docs/2.x/apis/wxml/createIntersectionObserver"},next:{title:"NodesRef",permalink:"/mirror/taro-docs/docs/2.x/apis/wxml/NodesRef"}},a={},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"disconnect",id:"disconnect",level:3},{value:"observe",id:"observe",level:3},{value:"relativeTo",id:"relativeto",level:3},{value:"relativeToViewport",id:"relativetoviewport",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"ObserveCallback",id:"observecallback",level:3},{value:"ObserveCallbackResult",id:"observecallbackresult",level:3},{value:"RelativeRectResult",id:"relativerectresult",level:3},{value:"IntersectionRectResult",id:"intersectionrectresult",level:3},{value:"BoundingClientRectResult",id:"boundingclientrectresult",level:3},{value:"RelativeToMargins",id:"relativetomargins",level:3},{value:"RelativeToViewportMargins",id:"relativetoviewportmargins",level:3}],c={toc:d};function s(t){var{components:l}=t,e=u(t,["components"]);return(0,n.kt)("wrapper",r({},c,e,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",r({},{id:"disconnect"}),"disconnect"),(0,n.kt)("p",null,"\u505c\u6b62\u76d1\u542c\u3002\u56de\u8c03\u51fd\u6570\u5c06\u4e0d\u518d\u89e6\u53d1"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h3",r({},{id:"observe"}),"observe"),(0,n.kt)("p",null,"\u6307\u5b9a\u76ee\u6807\u8282\u70b9\u5e76\u5f00\u59cb\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u60c5\u51b5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(targetSelector: string, callback: ObserveCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"targetSelector"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u9009\u62e9\u5668")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ObserveCallback")),(0,n.kt)("td",null,"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"relativeto"}),"relativeTo"),(0,n.kt)("p",null,"\u4f7f\u7528\u9009\u62e9\u5668\u6307\u5b9a\u4e00\u4e2a\u8282\u70b9\uff0c\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(selector: string, margins?: RelativeToMargins) => IntersectionObserver\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"selector"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u9009\u62e9\u5668")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"margins"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeToMargins")),(0,n.kt)("td",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),(0,n.kt)("h3",r({},{id:"relativetoviewport"}),"relativeToViewport"),(0,n.kt)("p",null,"\u6307\u5b9a\u9875\u9762\u663e\u793a\u533a\u57df\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(margins?: RelativeToViewportMargins) => IntersectionObserver\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"margins"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeToViewportMargins")),(0,n.kt)("td",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),(0,n.kt)("h4",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u76ee\u6807\u8282\u70b9\uff08\u7528\u9009\u62e9\u5668 .target-class \u6307\u5b9a\uff09\u8fdb\u5165\u663e\u793a\u533a\u57df\u4ee5\u4e0b 100px \u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {\n  res.intersectionRatio // \u76f8\u4ea4\u533a\u57df\u5360\u76ee\u6807\u8282\u70b9\u7684\u5e03\u5c40\u533a\u57df\u7684\u6bd4\u4f8b\n  res.intersectionRect // \u76f8\u4ea4\u533a\u57df\n  res.intersectionRect.left // \u76f8\u4ea4\u533a\u57df\u7684\u5de6\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.top // \u76f8\u4ea4\u533a\u57df\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.width // \u76f8\u4ea4\u533a\u57df\u7684\u5bbd\u5ea6\n  res.intersectionRect.height // \u76f8\u4ea4\u533a\u57df\u7684\u9ad8\u5ea6\n})\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"observecallback"}),"ObserveCallback"),(0,n.kt)("p",null,"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: ObserveCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ObserveCallbackResult"))))),(0,n.kt)("h3",r({},{id:"observecallbackresult"}),"ObserveCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"boundingClientRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BoundingClientRectResult")),(0,n.kt)("td",null,"\u76ee\u6807\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"intersectionRatio"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u76f8\u4ea4\u6bd4\u4f8b")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"intersectionRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"IntersectionRectResult")),(0,n.kt)("td",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"relativeRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeRectResult")),(0,n.kt)("td",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u76f8\u4ea4\u68c0\u6d4b\u65f6\u7684\u65f6\u95f4\u6233")))),(0,n.kt)("h3",r({},{id:"relativerectresult"}),"RelativeRectResult"),(0,n.kt)("p",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0b\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5de6\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u53f3\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0a\u8fb9\u754c")))),(0,n.kt)("h3",r({},{id:"intersectionrectresult"}),"IntersectionRectResult"),(0,n.kt)("p",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0b\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u9ad8\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5de6\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u53f3\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0a\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5bbd\u5ea6")))),(0,n.kt)("h3",r({},{id:"boundingclientrectresult"}),"BoundingClientRectResult"),(0,n.kt)("p",null,"\u76ee\u6807\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0b\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u9ad8\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5de6\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u53f3\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u4e0a\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5bbd\u5ea6")))),(0,n.kt)("h3",r({},{id:"relativetomargins"}),"RelativeToMargins"),(0,n.kt)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))),(0,n.kt)("h3",r({},{id:"relativetoviewportmargins"}),"RelativeToViewportMargins"),(0,n.kt)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))))}s.isMDXComponent=!0}}]);