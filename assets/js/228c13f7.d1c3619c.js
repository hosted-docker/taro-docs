"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60632],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76853:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});t(93106);var r=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"\u5f02\u6b65\u7f16\u7a0b"},c=void 0,l={unversionedId:"async-await",id:"version-2.x/async-await",title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 async-await \u4e0d\u518d\u9700\u8981 @tarojs/async-await\u3002",source:"@site/versioned_docs/version-2.x/async-await.md",sourceDirName:".",slug:"/async-await",permalink:"/mirror/taro-docs/docs/2.x/async-await",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/async-await.md",tags:[],version:"2.x",frontMatter:{title:"\u5f02\u6b65\u7f16\u7a0b"},sidebar:"version-2.x/docs",previous:{title:"\u57fa\u4e8e Taro \u5f00\u53d1\u7b2c\u4e09\u65b9\u591a\u7aef UI \u5e93",permalink:"/mirror/taro-docs/docs/2.x/ui-lib"},next:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/mirror/taro-docs/docs/2.x/mini-third-party"}},s={},p=[],u={toc:p},f="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)(f,a({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"async-await")," \u4e0d\u518d\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/async-await"),"\u3002")),(0,r.kt)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-runtime"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ yarn add babel-plugin-transform-runtime --dev\n$ yarn add babel-runtime\n")),(0,r.kt)("p",null,"\u968f\u540e\u4fee\u6539\u9879\u76ee ",(0,r.kt)("a",a({parentName:"p"},{href:"./config-detail#babel"}),(0,r.kt)("inlineCode",{parentName:"a"},"babel")," \u914d\u7f6e"),"\uff0c\u589e\u52a0\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"babel: {\n  sourceMap: true,\n  presets: [\n    [\n      'env',\n      {\n        modules: false\n      }\n    ]\n  ],\n  plugins: [\n    'transform-decorators-legacy',\n    'transform-class-properties',\n    'transform-object-rest-spread',\n    ['transform-runtime', {\n      \"helpers\": false,\n      \"polyfill\": false,\n      \"regenerator\": true,\n      \"moduleName\": 'babel-runtime'\n    }]\n  ]\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",(0,r.kt)("a",a({parentName:"p"},{href:"/mirror/taro-docs/docs/2.x/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}m.isMDXComponent=!0}}]);