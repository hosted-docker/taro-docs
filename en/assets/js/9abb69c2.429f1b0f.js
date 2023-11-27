"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18105],{79874:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(93106);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(a),m=n,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return a?r.createElement(g,p(p({ref:t},u),{},{components:a})):r.createElement(g,p({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40872:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},i=void 0,c={unversionedId:"apis/base/update/getUpdateManager",id:"apis/base/update/getUpdateManager",title:"Taro.getUpdateManager()",description:"Obtains the globally unique version update manager, which is used to manage Mini Program updates. For more information about the Mini Program update mechanism, see the Operating Mechanism documentation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/update/getUpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/getUpdateManager",permalink:"/mirror/taro-docs/en/docs/next/apis/base/update/getUpdateManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/update/getUpdateManager.md",tags:[],version:"current",frontMatter:{title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},sidebar:"API",previous:{title:"updateWeChatApp",permalink:"/mirror/taro-docs/en/docs/next/apis/base/update/updateWeChatApp"},next:{title:"UpdateManager",permalink:"/mirror/taro-docs/en/docs/next/apis/base/update/UpdateManager"}},s={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],l={toc:u},d="wrapper";function m(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(d,n({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obtains the ",(0,r.kt)("strong",{parentName:"p"},"globally unique")," version update manager, which is used to manage Mini Program updates. For more information about the Mini Program update mechanism, see the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/runtime/operating-mechanism.html"}),"Operating Mechanism")," documentation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/wx.getUpdateManager.html"}),"Reference"))),(0,r.kt)("h2",n({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => UpdateManager\n")),(0,r.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,r.kt)("h2",n({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate(function (res) {\n  console.log(res.hasUpdate)\n})\nupdateManager.onUpdateReady(function () {\n  Taro.showModal({\n    title: 'Update Tips',\n    content: 'The new version is ready, is the app restarted?',\n    success: function (res) {\n      if (res.confirm) {\n        // The new version has been downloaded, call applyUpdate to apply the new version and restart.\n        updateManager.applyUpdate()\n      }\n    }\n  })\n})\nupdateManager.onUpdateFailed(function () {\n  // Download of the new version has failed\n})\n")),(0,r.kt)("h2",n({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.getUpdateManager"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);