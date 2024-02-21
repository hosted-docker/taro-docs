"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[20],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85185:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"\u4f7f\u7528 CSS Modules"},i=void 0,s={unversionedId:"css-modules",id:"css-modules",title:"\u4f7f\u7528 CSS Modules",description:"\u7528\u6cd5",source:"@site/docs/css-modules.md",sourceDirName:".",slug:"/css-modules",permalink:"/mirror/taro-docs/docs/next/css-modules",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/css-modules.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 CSS Modules"},sidebar:"docs",previous:{title:"Vue3 Pinia",permalink:"/mirror/taro-docs/docs/next/pinia"},next:{title:"\u4f7f\u7528 CSS-in-JS",permalink:"/mirror/taro-docs/docs/next/css-in-js"}},c={},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5728\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f",id:"\u5728\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f",level:3},{value:"\u5728 H5 \u7aef\u5f00\u542f",id:"\u5728-h5-\u7aef\u5f00\u542f",level:3},{value:"\u8bbe\u7f6e\u8f6c\u6362\u6a21\u5f0f",id:"\u8bbe\u7f6e\u8f6c\u6362\u6a21\u5f0f",level:3},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",level:3},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",level:2}],p={toc:u},m="wrapper";function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"\u7528\u6cd5"}),"\u7528\u6cd5"),(0,r.kt)("p",null,"Taro \u4e2d\u5185\u7f6e\u4e86 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules")," \u7684\u652f\u6301\uff0c\u4f46\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\u4f7f\u7528\uff0c\u8bf7\u5148\u5728",(0,r.kt)("a",o({parentName:"p"},{href:"./config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"),(0,r.kt)("h3",o({},{id:"\u5728\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f"}),"\u5728\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"weapp: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("h3",o({},{id:"\u5728-h5-\u7aef\u5f00\u542f"}),"\u5728 H5 \u7aef\u5f00\u542f"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"h5: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("h3",o({},{id:"\u8bbe\u7f6e\u8f6c\u6362\u6a21\u5f0f"}),"\u8bbe\u7f6e\u8f6c\u6362\u6a21\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f6c\u6362\u6a21\u5f0f\uff0c\u8fd9\u6837\u7684\u8bdd\u5c31\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\u7684\u6837\u5f0f\u4e86")),(0,r.kt)("p",null,"\u5728\u5f00\u542f\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 Taro \u4e2d\u4f7f\u7528 CSS Modules \u529f\u80fd\u4e86\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cTaro \u4e2d\u4f7f\u7528 CSS Modules \u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u8f6c\u6362"),"\u53ca",(0,r.kt)("strong",{parentName:"p"},"\u90e8\u5206\u81ea\u5b9a\u4e49\u8f6c\u6362"),"\u6a21\u5f0f\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u53d6\u503c\u5206\u522b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global"),"\uff0c\u8868\u793a\u5168\u5c40\u8f6c\u6362\uff0c\u6240\u6709\u6837\u5f0f\u6587\u4ef6\u90fd\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406\uff0c\u9664\u4e86\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},".global.")," \u7684\u6837\u5f0f\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"module"),"\uff0c\u8868\u793a\u81ea\u5b9a\u4e49\u8f6c\u6362\uff0c\u53ea\u6709\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},".module.")," \u7684\u6837\u5f0f\u6587\u4ef6\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"generateScopedName")," \u652f\u6301\u4f20\u5165\u5b57\u7b26\u4e32\u548c\u51fd\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u5b57\u7b26\u4e32"),"\uff0c\u5176\u683c\u5f0f\u89c1\uff1a",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/webpack/loader-utils#interpolatename"}),"https://github.com/webpack/loader-utils#interpolatename"),"\uff0c\u503c\u5f97\u6307\u51fa\u7684\u662f\uff0c\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"[local]")," \u53d6\u5176\u539f\u7c7b\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u51fd\u6570"),"\uff0c\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"(localName: string, absoluteFilePath: string) => string"),"\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"localName")," \u4e3a\u539f\u7c7b\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"absoluteFilePath")," \u4e3a\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u65b0\u7684\u7c7b\u540d")),(0,r.kt)("h3",o({},{id:"\u7528\u6cd5\u793a\u4f8b"}),"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("p",null,"CSS Modules \u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-scss",metastring:'title="\u7ec4\u4ef6\u6837\u5f0f"',title:'"\u7ec4\u4ef6\u6837\u5f0f"'}),".test {\n  color: red;\n  .txt {\n    font-size: 36px;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u7ec4\u4ef6 JS \u4e2d\u4f7f\u7528\u6837\u5f0f"',title:'"\u7ec4\u4ef6',JS:!0,'\u4e2d\u4f7f\u7528\u6837\u5f0f"':!0}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nimport styles from './Test.module.scss'\n\nexport default class Test extends Component {\n  render() {\n    return (\n      <View className={styles.test}>\n        <Text className={styles.txt}>Hello world!</Text>\n      </View>\n    )\n  }\n}\n")),(0,r.kt)("h2",o({},{id:"\u76f8\u5173\u9605\u8bfb"}),"\u76f8\u5173\u9605\u8bfb"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://taro-club.jd.com/topic/2264/%E6%9E%81%E8%87%B4%E8%BF%BD%E6%B1%82-%E8%AE%A9%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BB%A3%E7%A0%81%E5%8C%85%E7%AB%8B%E5%87%8F-10-%E7%9A%84%E6%8F%92%E4%BB%B6-weapp-css-modules"}),"\u5f00\u6e90\u63d2\u4ef6 weapp-css-modules - \u6781\u81f4\u8ffd\u6c42\uff0c\u8ba9\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u5305\u7acb\u51cf 10% \u7684\u63d2\u4ef6")))}d.isMDXComponent=!0}}]);