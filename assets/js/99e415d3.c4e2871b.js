"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42344],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),k=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=k(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=k(n),m=a,s=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(s,i(i({ref:e},c),{},{components:n})):r.createElement(s,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},844:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"EventChannel",sidebar_label:"EventChannel"},o=void 0,p={unversionedId:"apis/route/EventChannel",id:"version-2.x/apis/route/EventChannel",title:"EventChannel",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-2.x/apis/route/EventChannel.md",sourceDirName:"apis/route",slug:"/apis/route/EventChannel",permalink:"/mirror/taro-docs/docs/2.x/apis/route/EventChannel",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/route/EventChannel.md",tags:[],version:"2.x",frontMatter:{title:"EventChannel",sidebar_label:"EventChannel"},sidebar:"version-2.x/API",previous:{title:"navigateBack",permalink:"/mirror/taro-docs/docs/2.x/apis/route/navigateBack"},next:{title:"App",permalink:"/mirror/taro-docs/docs/2.x/apis/framework/App"}},k={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"emit",id:"emit",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:4},{value:"off",id:"off",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:4},{value:"on",id:"on",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",level:4},{value:"once",id:"once",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",level:2}],u={toc:c};function d(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",a({},{id:"emit"}),"emit"),(0,r.kt)("p",null,"\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(eventName: string, ...args: any) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"eventName"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"args"),(0,r.kt)("td",null,(0,r.kt)("code",null,"any")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u53c2\u6570")))),(0,r.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.emit"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",a({},{id:"off"}),"off"),(0,r.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u3002\u7ed9\u51fa\u7b2c\u4e8c\u4e2a\u53c2\u6570\u65f6\uff0c\u53ea\u53d6\u6d88\u7ed9\u51fa\u7684\u76d1\u542c\u51fd\u6570\uff0c\u5426\u5219\u53d6\u6d88\u6240\u6709\u76d1\u542c\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(eventName: string, fn: EventCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"eventName"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fn"),(0,r.kt)("td",null,(0,r.kt)("code",null,"EventCallback")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570")))),(0,r.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.off"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",a({},{id:"on"}),"on"),(0,r.kt)("p",null,"\u6301\u7eed\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(eventName: string, fn: EventCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"eventName"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fn"),(0,r.kt)("td",null,(0,r.kt)("code",null,"EventCallback")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570")))),(0,r.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6-2"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.on"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",a({},{id:"once"}),"once"),(0,r.kt)("p",null,"\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u4e00\u6b21\uff0c\u89e6\u53d1\u540e\u5931\u6548"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(eventName: string, fn: EventCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"eventName"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fn"),(0,r.kt)("td",null,(0,r.kt)("code",null,"EventCallback")),(0,r.kt)("td",null,"\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570")))),(0,r.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6-3"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.once"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6-4"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.emit"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.off"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.on"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"EventChannel.once"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);