"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65224],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,v=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"\u73af\u5883\u5224\u65ad"},p=void 0,l={unversionedId:"apis/about/env",id:"version-3.x/apis/about/env",title:"\u73af\u5883\u5224\u65ad",description:"Taro.ENV_TYPE",source:"@site/versioned_docs/version-3.x/apis/about/env.md",sourceDirName:"apis/about",slug:"/apis/about/env",permalink:"/mirror/taro-docs/docs/apis/about/env",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/about/env.md",tags:[],version:"3.x",frontMatter:{title:"\u73af\u5883\u5224\u65ad"},sidebar:"API",previous:{title:"API \u8bf4\u660e",permalink:"/mirror/taro-docs/docs/apis/about/desc"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/mirror/taro-docs/docs/apis/about/events"}},c={},u=[{value:"Taro.ENV_TYPE",id:"taroenv_type",level:2},{value:"Taro.getEnv()",id:"tarogetenv",level:2}],s={toc:u},f="wrapper";function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(f,o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"taroenv_type"}),"Taro.ENV_TYPE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u6296\u97f3\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QUICKAPP")," \u5feb\u5e94\u7528\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QQ")," QQ\u5c0f\u7a0b\u5e8f \u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.JD")," \u4eac\u4e1c\u5c0f\u7a0b\u5e8f \u73af\u5883"),(0,r.kt)("h2",o({},{id:"tarogetenv"}),"Taro.getEnv()"),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}d.isMDXComponent=!0}}]);