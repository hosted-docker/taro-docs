"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60837],{79874:function(t,e,l){l.d(e,{Zo:function(){return c},kt:function(){return b}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),k=d(l),p=r,b=k["".concat(i,".").concat(p)]||k[p]||s[p]||o;return l?n.createElement(b,u(u({ref:e},c),{},{components:l})):n.createElement(b,u({ref:e},c))}));function b(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,u=new Array(o);u[0]=p;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a[k]="string"==typeof t?t:r,u[1]=a;for(var d=2;d<o;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},93311:function(t,e,l){l.r(e),l.d(e,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const u={title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},a=void 0,i={unversionedId:"apis/wxml/IntersectionObserver",id:"apis/wxml/IntersectionObserver",title:"IntersectionObserver",description:"An IntersectionObserver object that infers whether and how likely certain nodes are visible to users.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/wxml/IntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/IntersectionObserver",permalink:"/mirror/taro-docs/en/docs/next/apis/wxml/IntersectionObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/wxml/IntersectionObserver.md",tags:[],version:"current",frontMatter:{title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},sidebar:"API",previous:{title:"createMediaQueryObserver",permalink:"/mirror/taro-docs/en/docs/next/apis/wxml/createMediaQueryObserver"},next:{title:"MediaQueryObserver",permalink:"/mirror/taro-docs/en/docs/next/apis/wxml/MediaQueryObserver"}},d={},c=[{value:"Methods",id:"methods",level:2},{value:"disconnect",id:"disconnect",level:3},{value:"observe",id:"observe",level:3},{value:"relativeTo",id:"relativeto",level:3},{value:"relativeToViewport",id:"relativetoviewport",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"Parameters",id:"parameters",level:2},{value:"ObserveCallback",id:"observecallback",level:3},{value:"ObserveCallbackResult",id:"observecallbackresult",level:3},{value:"RelativeRectResult",id:"relativerectresult",level:3},{value:"IntersectionRectResult",id:"intersectionrectresult",level:3},{value:"BoundingClientRectResult",id:"boundingclientrectresult",level:3},{value:"RelativeToMargins",id:"relativetomargins",level:3},{value:"RelativeToViewportMargins",id:"relativetoviewportmargins",level:3}],k={toc:c},s="wrapper";function p(t){var{components:e}=t,l=o(t,["components"]);return(0,n.kt)(s,r({},k,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An ",(0,n.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," object that infers whether and how likely certain nodes are visible to users."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"methods"}),"Methods"),(0,n.kt)("h3",r({},{id:"disconnect"}),"disconnect"),(0,n.kt)("p",null,"Stops listening, and the callback function will no longer be triggered."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.disconnect.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h3",r({},{id:"observe"}),"observe"),(0,n.kt)("p",null,"Specifies the target node and starts listening on changes in the intersection status."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.observe.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(targetSelector: string, callback: ObserveCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"targetSelector"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Selector")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ObserveCallback")),(0,n.kt)("td",null,"The callback function for listening on intersection status changes.")))),(0,n.kt)("h3",r({},{id:"relativeto"}),"relativeTo"),(0,n.kt)("p",null,"Uses a selector to specify a node as one of the reference areas."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.relativeTo.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(selector: string, margins?: RelativeToMargins) => IntersectionObserver\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"selector"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Selector")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"margins"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeToMargins")),(0,n.kt)("td",null,"Expands/Contracts the border of the layout area of the reference node.")))),(0,n.kt)("h3",r({},{id:"relativetoviewport"}),"relativeToViewport"),(0,n.kt)("p",null,"Specifies the page display area as one of the reference areas."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/IntersectionObserver.relativeToViewport.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(margins?: RelativeToViewportMargins) => IntersectionObserver\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"margins"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeToViewportMargins")),(0,n.kt)("td",null,"Expands/Contracts the border of the layout area of the reference node.")))),(0,n.kt)("h4",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("p",null,"In the code sample below, the callback function is triggered if the target node (specified by the selector .target-class) enters the area 100 px below the display area."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {\n  res.intersectionRatio // The percentage of the intersection area in the layout area of the target node\n  res.intersectionRect // Intersection area\n  res.intersectionRect.left // Left boundary coordinates of the intersection area\n  res.intersectionRect.top // Upper boundary coordinates of the intersection area\n  res.intersectionRect.width // Width of the intersection area\n  res.intersectionRect.height // Height of the intersection area\n})\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"observecallback"}),"ObserveCallback"),(0,n.kt)("p",null,"The callback function for listening on intersection status changes."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: ObserveCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ObserveCallbackResult"))))),(0,n.kt)("h3",r({},{id:"observecallbackresult"}),"ObserveCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"boundingClientRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BoundingClientRectResult")),(0,n.kt)("td",null,"The target border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"intersectionRatio"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Intersection ratio")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"intersectionRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"IntersectionRectResult")),(0,n.kt)("td",null,"The border of the intersection area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"relativeRect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RelativeRectResult")),(0,n.kt)("td",null,"The border of the reference area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The timestamp for intersection detection")))),(0,n.kt)("h3",r({},{id:"relativerectresult"}),"RelativeRectResult"),(0,n.kt)("p",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Lower border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Left border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Right border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Upper border of the node layout area")))),(0,n.kt)("h3",r({},{id:"intersectionrectresult"}),"IntersectionRectResult"),(0,n.kt)("p",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Lower border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Left border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Right border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Upper border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Height")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Width")))),(0,n.kt)("h3",r({},{id:"boundingclientrectresult"}),"BoundingClientRectResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Lower border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Left border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Right border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Upper border")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Height")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Width")))),(0,n.kt)("h3",r({},{id:"relativetomargins"}),"RelativeToMargins"),(0,n.kt)("p",null,"Expands/Contracts the border of the layout area of the reference node."),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Lower border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Left border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Right border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Upper border of the node layout area")))),(0,n.kt)("h3",r({},{id:"relativetoviewportmargins"}),"RelativeToViewportMargins"),(0,n.kt)("p",null,"Expands/Contracts the border of the layout area of the reference node."),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Lower border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Left border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Right border of the node layout area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Upper border of the node layout area")))))}p.isMDXComponent=!0}}]);