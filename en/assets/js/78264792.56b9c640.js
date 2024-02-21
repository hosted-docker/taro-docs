"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82360],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39639:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"Multi-Platform Synchronized Debugging"},c=void 0,u={unversionedId:"envs-debug",id:"envs-debug",title:"Multi-Platform Synchronized Debugging",description:"Starting from version 1.3.5, you can create a directory under the dist directory with the same name as the target platform and put the result under this directory, for example, if you compile to WeChat mini program, the final result is under the dist/weapp directory. config/index.js` is configured as follows.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/envs-debug.md",sourceDirName:".",slug:"/envs-debug",permalink:"/mirror/taro-docs/en/docs/next/envs-debug",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/envs-debug.md",tags:[],version:"current",frontMatter:{title:"Multi-Platform Synchronized Debugging"},sidebar:"docs",previous:{title:"Cross-platform Development",permalink:"/mirror/taro-docs/en/docs/next/envs"},next:{title:"Migrated from native mini program?",permalink:"/mirror/taro-docs/en/docs/next/come-from-miniapp"}},l={},s=[],p={toc:s},d="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starting from version 1.3.5, you can create a directory under the dist directory with the same name as the target platform and put the result under this directory, for example, if you compile to WeChat mini program, the final result is under the dist/weapp directory. config/index.js` is configured as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"outputRoot: `dist/${process.env.TARO_ENV}`\n")),(0,n.kt)("p",null,"Multi-terminal synchronous debugging requires opening multiple Tabs in the terminal tool to execute taro commands simultaneously for synchronous debugging, as follows, compiled into WeChat mini program and Alipay mini program."),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://img30.360buyimg.com/ling/jfs/t1/62633/10/8451/595888/5d663badE57d35fd2/5a34822774836ede.png",alt:"Open multiple Tabs to execute taro commands simultaneously for synchronized debugging"}))),(0,n.kt)("p",null,"The compiled directory is as follows, with two directories ",(0,n.kt)("inlineCode",{parentName:"p"},"weapp")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"alipay")," under the ",(0,n.kt)("inlineCode",{parentName:"p"},"dist")," directory."),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://img20.360buyimg.com/ling/jfs/t1/74046/26/8491/148076/5d663baaEf2ed8064/33fbb1d365053d1c.png",alt:"Simultaneous debugging of compiled results"}))))}m.isMDXComponent=!0}}]);