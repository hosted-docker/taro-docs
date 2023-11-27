"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7016],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,u=k["".concat(p,".").concat(s)]||k[s]||N[s]||l;return a?n.createElement(u,o(o({ref:e},m),{},{components:a})):n.createElement(u,o({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[k]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5563:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={title:"Taro \u4ed3\u5e93\u6982\u89c8"},i=void 0,p={unversionedId:"codebase-overview",id:"version-3.x/codebase-overview",title:"Taro \u4ed3\u5e93\u6982\u89c8",description:"\u4ed3\u5e93\u7ec4\u6210",source:"@site/versioned_docs/version-3.x/codebase-overview.md",sourceDirName:".",slug:"/codebase-overview",permalink:"/mirror/taro-docs/docs/codebase-overview",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/codebase-overview.md",tags:[],version:"3.x",frontMatter:{title:"Taro \u4ed3\u5e93\u6982\u89c8"},sidebar:"docs",previous:{title:"\u8d21\u732e\u6307\u5357",permalink:"/mirror/taro-docs/docs/CONTRIBUTING-GUIDE"},next:{title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",permalink:"/mirror/taro-docs/docs/debug-config"}},d={},m=[{value:"\u4ed3\u5e93\u7ec4\u6210",id:"\u4ed3\u5e93\u7ec4\u6210",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",level:3},{value:"H5",id:"h5",level:3},{value:"RN",id:"rn",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3}],k={toc:m},N="wrapper";function s(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)(N,r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"\u4ed3\u5e93\u7ec4\u6210"}),"\u4ed3\u5e93\u7ec4\u6210"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u4ecb\u7ecd\u4e86 Taro \u7531\u54ea\u4e9b NPM \u5305\u6240\u7ec4\u6210\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u5305\u7684\u529f\u80fd\u3002"),(0,n.kt)("h3",r({},{id:"\u57fa\u7840"}),"\u57fa\u7840"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8def\u5f84"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/cli")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"CLI \u5de5\u5177")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/service")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u63d2\u4ef6\u5316\u5185\u6838")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-loader")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Webpack loaders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/helper")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b CLI\u3001\u7f16\u8bd1\u65f6\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runner-utils")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b\u5c0f\u7a0b\u5e8f\u3001H5 \u7684\u7f16\u8bd1\u5de5\u5177\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/shared")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5de5\u5177\u5e93\uff0c\u4e3b\u8981\u4f9b\u8fd0\u884c\u65f6\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u5404\u7aef\u6240\u9700\u8981\u7684 Taro \u5bf9\u8c61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/api")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u548c\u5404\u7aef\u76f8\u5173\u7684 Taro API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-preset-taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel preset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"eslint-config-taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ESLint \u89c4\u5219")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-pxtransform")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS \u63d2\u4ef6\uff0c\u8f6c\u6362 ",(0,n.kt)("inlineCode",{parentName:"td"},"px")," \u4e3a\u5404\u7aef\u7684\u81ea\u9002\u5e94\u5c3a\u5bf8\u5355\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-html-transform")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS \u63d2\u4ef6\uff0c\u7528\u4e8e HTML\u3001\u5c0f\u7a0b\u5e8f\u6807\u7b7e\u7684\u7c7b\u540d\u76f8\u4e92\u8f6c\u6362")))),(0,n.kt)("h3",r({},{id:"\u5c0f\u7a0b\u5e8f"}),"\u5c0f\u7a0b\u5e8f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8def\u5f84"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/mini-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 Webpack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/react")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"td"},"react-reconciler")," \u7684\u5c0f\u7a0b\u5e8f\u4e13\u7528 React \u6e32\u67d3\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u9002\u914d\u5668\u6838\u5fc3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-weapp")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-alipay")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-swan")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-tt")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-qq")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"qq \u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-jd")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-html")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u652f\u6301\u4f7f\u7528 HTML \u6807\u7b7e\u7684\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-react-devtools")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u652f\u6301\u4f7f\u7528 React DevTools \u7684\u63d2\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/extend")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7c7b\u4f3c jQuery \u7684\u5e93")))),(0,n.kt)("h3",r({},{id:"h5"}),"H5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8def\u5f84"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/webpack-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 \u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 Webpack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/router")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 \u8def\u7531")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-h5")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 \u7aef\u6839\u636e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u5b9e\u73b0\u7684 API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 \u7ec4\u4ef6\u5e93\uff08Web Components \u7248\u672c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components-react")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 \u7ec4\u4ef6\u5e93\uff08React \u7248\u672c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-taroapi")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel \u63d2\u4ef6\uff0c\u8ba9 API \u53ef\u4ee5\u88ab ",(0,n.kt)("inlineCode",{parentName:"td"},"tree-shaking"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-plugin-constparse")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS \u63d2\u4ef6\uff0c\u7528\u4e8e\u5904\u7406 ",(0,n.kt)("inlineCode",{parentName:"td"},"tabbar")," \u7684\u9ad8\u5ea6")))),(0,n.kt)("h3",r({},{id:"rn"}),"RN"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8def\u5f84"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u7ec4\u4ef6\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u7f16\u8bd1\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u4e8e\u8bbe\u7f6e\u3001\u8c03\u7528 metro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-style-transformer")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u6837\u5f0f\u8f6c\u6362\u5de5\u5177\uff0c\u8ba9 RN \u652f\u6301 sass\u3001less\u3001stylus\u3001postcss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-supporter")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u57fa\u7840 metro \u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-transformer")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u5e94\u7528\u5165\u53e3\u53ca\u9875\u9762\u8f6c\u6362\u5de5\u5177\uff0c\u8ba9 RN \u652f\u6301 Taro \u5b9a\u4e49\u7684 app \u53ca page config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/router-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u8def\u7531")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u8fd0\u884c\u65f6\u5c01\u88c5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN \u7aef\u6839\u636e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u5b9e\u73b0\u7684 API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-react-jsx-to-rn-stylesheet")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel \u63d2\u4ef6\uff0c\u8ba9 jsx \u652f\u6301 className \u5c5e\u6027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"taro-css-to-react-native")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c06 css \u8f6c\u4e3a RN \u7684 stylesheet")))),(0,n.kt)("h3",r({},{id:"\u5176\u5b83"}),"\u5176\u5b83"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8def\u5f84"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taroize")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u7684\u7f16\u8bd1\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/with-weapp")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u7684\u8fd0\u884c\u65f6\u9002\u914d\u5668")))))}s.isMDXComponent=!0}}]);