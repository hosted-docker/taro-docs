"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29565],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22639:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},o=void 0,p={unversionedId:"apis/open-api/navigate/navigateToMiniProgram",id:"version-2.x/apis/open-api/navigate/navigateToMiniProgram",title:"Taro.navigateToMiniProgram(option)",description:"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f",source:"@site/versioned_docs/version-2.x/apis/open-api/navigate/navigateToMiniProgram.md",sourceDirName:"apis/open-api/navigate",slug:"/apis/open-api/navigate/navigateToMiniProgram",permalink:"/mirror/taro-docs/docs/2.x/apis/open-api/navigate/navigateToMiniProgram",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/open-api/navigate/navigateToMiniProgram.md",tags:[],version:"2.x",frontMatter:{title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},sidebar:"version-2.x/API",previous:{title:"checkSession",permalink:"/mirror/taro-docs/docs/2.x/apis/open-api/login/checkSession"},next:{title:"navigateBackMiniProgram",permalink:"/mirror/taro-docs/docs/2.x/apis/open-api/navigate/navigateBackMiniProgram"}},u={},c=[{value:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",level:5},{value:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",level:5},{value:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a",id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a",level:5},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"envVersion",id:"envversion",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:c},s="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(s,a({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u9650\u5236")),(0,r.kt)("h5",a({},{id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"}),"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"),(0,r.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u82e5\u7528\u6237\u672a\u70b9\u51fb\u5c0f\u7a0b\u5e8f\u9875\u9762\u4efb\u610f\u4f4d\u7f6e\uff0c\u5219\u5f00\u53d1\u8005\u5c06\u65e0\u6cd5\u8c03\u7528\u6b64\u63a5\u53e3\u81ea\u52a8\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002"),(0,r.kt)("h5",a({},{id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"}),"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"),(0,r.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u5728\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u524d\uff0c\u5c06\u7edf\u4e00\u589e\u52a0\u5f39\u7a97\uff0c\u8be2\u95ee\u662f\u5426\u8df3\u8f6c\uff0c\u7528\u6237\u786e\u8ba4\u540e\u624d\u53ef\u4ee5\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002\u5982\u679c\u7528\u6237\u70b9\u51fb\u53d6\u6d88\uff0c\u5219\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"p"},"fail cancel"),"\u3002"),(0,r.kt)("h5",a({},{id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a"}),"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a"),(0,r.kt)("p",null,"\u4ece 2.4.0 \u7248\u672c\u4ee5\u53ca\u6307\u5b9a\u65e5\u671f\uff08\u5177\u4f53\u5f85\u5b9a\uff09\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u63d0\u4ea4\u65b0\u7248\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u65f6\uff0c\u5982\u4f7f\u7528\u4e86\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u529f\u80fd\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u914d\u7f6e\u4e2d\u58f0\u660e\u5c06\u8981\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u540d\u5355\uff0c\u9650\u5b9a\u4e0d\u8d85\u8fc7 10 \u4e2a\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u901a\u8fc7\u5ba1\u6838\u3002\u8be5\u540d\u5355\u53ef\u5728\u53d1\u5e03\u65b0\u7248\u65f6\u66f4\u65b0\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u914d\u7f6e"),"\u3002\u8c03\u7528\u6b64\u63a5\u53e3\u65f6\uff0c\u6240\u8df3\u8f6c\u7684 appId \u5fc5\u987b\u5728\u914d\u7f6e\u5217\u8868\u4e2d\uff0c\u5426\u5219\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"p"},'fail appId "${appId}" is not in navigateToMiniProgramAppIdList'),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u8c03\u8bd5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u8c03\u7528\u6b64 API \u5e76\u4e0d\u4f1a\u771f\u5b9e\u7684\u8df3\u8f6c\u5230\u53e6\u5916\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4f46\u662f\u5f00\u53d1\u8005\u5de5\u5177\u4f1a\u6821\u9a8c\u672c\u6b21\u8c03\u7528\u8df3\u8f6c\u662f\u5426\u6210\u529f\u3002",(0,r.kt)("a",a({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5")),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u652f\u6301\u88ab\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u5904\u7406\u63a5\u6536\u53c2\u6570\u7684\u8c03\u8bd5\u3002",(0,r.kt)("a",a({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"appId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f appId")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"envVersion"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"develop" | "trial" | "release"')),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u7248\u672c\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e3a\u5f00\u53d1\u7248\u6216\u4f53\u9a8c\u7248\u65f6\u6b64\u53c2\u6570\u6709\u6548\u3002\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u662f\u6b63\u5f0f\u7248\uff0c\u5219\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u662f\u6b63\u5f0f\u7248\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"extraData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u9700\u8981\u4f20\u9012\u7ed9\u76ee\u6807\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\uff0c\u76ee\u6807\u5c0f\u7a0b\u5e8f\u53ef\u5728 ",(0,r.kt)("code",null,"App.onLaunch"),"\uff0c",(0,r.kt)("code",null,"App.onShow")," \u4e2d\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u3002\u5982\u679c\u8df3\u8f6c\u7684\u662f\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{href:"#"},"wx.onShow"),"\u3001",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"},"wx.getLaunchOptionsSync")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u6570\u636e\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"path"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u6253\u5f00\u7684\u9875\u9762\u8def\u5f84\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6253\u5f00\u9996\u9875\u3002path \u4e2d ? \u540e\u9762\u7684\u90e8\u5206\u4f1a\u6210\u4e3a query\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("code",null,"App.onLaunch"),"\u3001",(0,r.kt)("code",null,"App.onShow")," \u548c ",(0,r.kt)("code",null,"Page.onLoad")," \u7684\u56de\u8c03\u51fd\u6570\u6216\u5c0f\u6e38\u620f\u7684 ",(0,r.kt)("a",{href:"#"},"wx.onShow")," \u56de\u8c03\u51fd\u6570\u3001",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"},"wx.getLaunchOptionsSync"),' \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230 query \u6570\u636e\u3002\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u53ea\u4f20\u5165 query \u90e8\u5206\uff0c\u6765\u5b9e\u73b0\u4f20\u53c2\u6548\u679c\uff0c\u5982\uff1a\u4f20\u5165 "?foo=bar"\u3002')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",a({},{id:"envversion"}),"envVersion"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"develop"),(0,r.kt)("td",null,"\u5f00\u53d1\u7248")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"trial"),(0,r.kt)("td",null,"\u4f53\u9a8c\u7248")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"release"),(0,r.kt)("td",null,"\u6b63\u5f0f\u7248")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.navigateToMiniProgram({\n  appId: '',\n  path: 'page/index/index?id=123',\n  extraData: {\n    foo: 'bar'\n  },\n  envVersion: 'develop',\n  success: function(res) {\n    // \u6253\u5f00\u6210\u529f\n  }\n})\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.navigateToMiniProgram"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);