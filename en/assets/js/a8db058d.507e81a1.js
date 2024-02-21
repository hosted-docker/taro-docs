"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94921],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22696:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f"},a=void 0,l={unversionedId:"wxcloud",id:"version-1.x/wxcloud",title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",description:"\u81ea v1.2.20 \u5f00\u59cb\u652f\u6301\u6b64\u529f\u80fd\uff0c\u4ec5\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",source:"@site/versioned_docs/version-1.x/wxcloud.md",sourceDirName:".",slug:"/wxcloud",permalink:"/mirror/taro-docs/en/docs/1.x/wxcloud",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/wxcloud.md",tags:[],version:"1.x",frontMatter:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f"},sidebar:"version-1.x/docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6",permalink:"/mirror/taro-docs/en/docs/1.x/relations"},next:{title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",permalink:"/mirror/taro-docs/en/docs/1.x/miniprogram-plugin"}},u={},p=[{value:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u9879\u76ee\u6a21\u677f",id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u9879\u76ee\u6a21\u677f",level:2},{value:"\u6a21\u677f\u76ee\u5f55\u7ed3\u6784",id:"\u6a21\u677f\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u4f7f\u7528\u8981\u70b9",id:"\u4f7f\u7528\u8981\u70b9",level:3}],s={toc:p},d="wrapper";function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(d,o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.20")," \u5f00\u59cb\u652f\u6301\u6b64\u529f\u80fd\uff0c\u4ec5\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,r.kt)("h2",o({},{id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u9879\u76ee\u6a21\u677f"}),"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u9879\u76ee\u6a21\u677f"),(0,r.kt)("p",null,"\u5728 1.2.20 \u7248\u672c\u4e2d\uff0c\u65b0\u589e\u4e86\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u9879\u76ee\u6a21\u677f\u3002\u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u5c06 CLI \u66f4\u65b0\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.20")," \u4ee5\u4e0a\u7248\u672c\u3002",(0,r.kt)("a",o({parentName:"p"},{href:"./GETTING-STARTED#%E6%9B%B4%E6%96%B0"}),"\u66f4\u65b0")),(0,r.kt)("h2",o({},{id:"\u6a21\u677f\u76ee\u5f55\u7ed3\u6784"}),"\u6a21\u677f\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"\u251c\u2500\u2500 client                                  \u5c0f\u7a0b\u5e8f\u7aef\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 config                              \u914d\u7f6e\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.js                          \u5f00\u53d1\u65f6\u914d\u7f6e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js                        \u9ed8\u8ba4\u914d\u7f6e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 prod.js                         \u6253\u5305\u65f6\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist                                \u7f16\u8bd1\u7ed3\u679c\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src                                 \u6e90\u7801\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.scss                        \u9879\u76ee\u603b\u901a\u7528\u6837\u5f0f\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.js                          \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 components                      \u7ec4\u4ef6\u6587\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 login                       login \u7ec4\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.weapp.js          login \u7ec4\u4ef6\u903b\u8f91\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pages                           \u9875\u9762\u6587\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index                       index \u9875\u9762\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 index.scss              index \u9875\u9762\u903b\u8f91\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 index.js                index \u9875\u9762\u6837\u5f0f\n\u251c\u2500\u2500 cloud                                   \u670d\u52a1\u7aef\u76ee\u5f55\n\u2502\xa0\xa0 \u2514\u2500\u2500 functions                           \u4e91\u51fd\u6570\u76ee\u5f55\n\u2502\xa0\xa0     \u2514\u2500\u2500 login                           login \u4e91\u51fd\u6570\n\u2502\xa0\xa0         \u251c\u2500\u2500 index.js                    login \u51fd\u6570\u903b\u8f91\n\u2502\xa0\xa0         \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 project.config.json                     \u5c0f\u7a0b\u5e8f\u9879\u76ee\u914d\u7f6e\n")),(0,r.kt)("h3",o({},{id:"\u4f7f\u7528\u8981\u70b9"}),"\u4f7f\u7528\u8981\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u65f6\uff0c\u8fdb\u5165 client \u76ee\u5f55\uff0c\u5728\u6b64\u76ee\u5f55\u4e0b\u8fd0\u884c\u76f8\u5173\u7f16\u8bd1\u9884\u89c8\u6216\u6253\u5305\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u8c03\u8bd5\u9879\u76ee\uff0c\u8bf7\u5c06\u9879\u76ee ",(0,r.kt)("strong",{parentName:"li"},"\u6574\u4e2a\u6587\u4ef6\u5939")," \u4f5c\u4e3a\u8fd0\u884c\u76ee\u5f55\u3002 \u6ce8\u610f\uff1a \u4e0d\u662f client \u4e2d\u751f\u6210\u7684 dist \u6587\u4ef6\u5939")))}f.isMDXComponent=!0}}]);