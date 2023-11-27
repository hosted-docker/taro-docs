"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3077],{79874:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(93106);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,d=l["".concat(p,".").concat(m)]||l[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12971:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});t(93106);var n=t(79874);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199"},c=void 0,p={unversionedId:"hybrid",id:"version-1.x/hybrid",title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199",description:"Taro \u9879\u76ee \u652f\u6301 Taro \u7684\u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8\uff09\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u6df7\u5408\u5b58\u5728\uff0c\u53ea\u9700\u8981\u5c06\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u653e\u5165 src \u76ee\u5f55\u4e0b\uff0c\u968f\u540e\u5728 \u5165\u53e3\u6587\u4ef6 app.js \u4e2d\u5b9a\u4e49\u597d pages \u914d\u7f6e\u6307\u5411\u5bf9\u5e94\u7684\u539f\u751f\u7684\u9875\u9762\u5373\u53ef\uff0c\u5728\u539f\u751f\u9875\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 usingComponents \u6765\u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u53ef\u4ee5\u6307\u5b9a Taro \u7ec4\u4ef6\u540c\u65f6\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-1.x/hybrid.md",sourceDirName:".",slug:"/hybrid",permalink:"/mirror/taro-docs/docs/1.x/hybrid",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/hybrid.md",tags:[],version:"1.x",frontMatter:{title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199"},sidebar:"version-1.x/docs",previous:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/mirror/taro-docs/docs/1.x/mini-third-party"},next:{title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5",permalink:"/mirror/taro-docs/docs/1.x/optimized-practice"}},u={},s=[],l={toc:s},f="wrapper";function m(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)(f,o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro \u9879\u76ee \u652f\u6301 Taro \u7684\u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8\uff09\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u6df7\u5408\u5b58\u5728\uff0c\u53ea\u9700\u8981\u5c06\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u653e\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\uff0c\u968f\u540e\u5728 \u5165\u53e3\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u5b9a\u4e49\u597d ",(0,n.kt)("inlineCode",{parentName:"p"},"pages")," \u914d\u7f6e\u6307\u5411\u5bf9\u5e94\u7684\u539f\u751f\u7684\u9875\u9762\u5373\u53ef\uff0c\u5728\u539f\u751f\u9875\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u6765\u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u53ef\u4ee5\u6307\u5b9a Taro \u7ec4\u4ef6\u540c\u65f6\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u6307\u5b9a\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u540d\u5b57\u9700\u8981\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u5c0f\u5199"),"\u5f00\u5934\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u53c2\u8003\u793a\u4f8b\u9879\u76ee\uff1a",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-sample-weapp"}),"https://github.com/NervJS/taro-sample-weapp"))))}m.isMDXComponent=!0}}]);