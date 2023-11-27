"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48839],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Access to Tencent youshu seamless burial point capability",sidebar_label:"Tencent Youshu seamless burial point"},l=void 0,s={unversionedId:"youshu",id:"youshu",title:"Access to Tencent youshu seamless burial point capability",description:"Taro introduces Tencent youshu seamless buried capabilities for WeChat mini program, providing Taro developers with 8 major seamless buried capabilities and custom buried capabilities for true-zero development, including eight automated buried capabilities such as mini program start, show, hide, page view, page leave, share, drop-down refresh, pull-up bottoming, and customized buried capabilities such as search and product attribution, as well as operational analysis, live analysis, shopping guide analysis, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/youshu.md",sourceDirName:".",slug:"/youshu",permalink:"/mirror/taro-docs/en/docs/next/youshu",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/youshu.md",tags:[],version:"current",frontMatter:{title:"Access to Tencent youshu seamless burial point capability",sidebar_label:"Tencent Youshu seamless burial point"},sidebar:"docs",previous:{title:"Project Initialization Template",permalink:"/mirror/taro-docs/en/docs/next/template"},next:{title:"Access to Statistical Platforms",permalink:"/mirror/taro-docs/en/docs/next/report"}},p={},u=[{value:"Tencent Youshu Introduction",id:"tencent-youshu-introduction",level:2},{value:"Function Introduction",id:"function-introduction",level:2},{value:"Zero Development Quick Guide",id:"zero-development-quick-guide",level:2},{value:"Existing mini programs access Tencent Youshu SDK",id:"existing-mini-programs-access-tencent-youshu-sdk",level:2},{value:"1. Installation",id:"1-installation",level:3},{value:"2. Add Trusted Domain",id:"2-add-trusted-domain",level:3},{value:"3. Initialize",id:"3-initialize",level:3},{value:"4. Example",id:"4-example",level:3}],c={toc:u},d="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(d,r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro introduces Tencent youshu seamless buried capabilities for WeChat mini program, providing Taro developers with 8 major seamless buried capabilities and custom buried capabilities for true-zero development, including ",(0,a.kt)("strong",{parentName:"p"},"eight automated buried capabilities")," such as mini program start, show, hide, page view, page leave, share, drop-down refresh, pull-up bottoming",(0,a.kt)("strong",{parentName:"p"},", and "),"customized buried capabilities** such as search and product attribution, as well as operational analysis, live analysis, shopping guide analysis, etc."),(0,a.kt)("p",null,"Translated with ",(0,a.kt)("a",r({parentName:"p"},{href:"http://www.DeepL.com/Translator"}),"www.DeepL.com/Translator")," (free version)"),(0,a.kt)("h2",r({},{id:"tencent-youshu-introduction"}),"Tencent Youshu Introduction"),(0,a.kt)("p",null,"  ",(0,a.kt)("a",r({parentName:"p"},{href:"https://youshu.tencent.com/"}),"Tencent Youshu")," is a data analysis and management platform launched by Tencent Smart Retail (",(0,a.kt)("a",r({parentName:"p"},{href:"https://lingshou.tencent.com"}),"https://lingshou.tencent.com"),") for brands and retailers, integrating Tencent's data, technology and ecological advantages to provide full-chain operation, data analysis, consumer insight and accurate marketing. It integrates Tencent's data, technology and ecological strengths to provide full-chain operation, data analysis, consumer insight and precise marketing capabilities, allowing enterprises to operate more \"with numbers\"."),(0,a.kt)("p",null,"For more presentations, please follow ",(0,a.kt)("a",r({parentName:"p"},{href:"https://mp.zhls.qq.com/youshu-docs/start/youshu_intro.html"}),"https://mp.zhls.qq.com/youshu-docs/start/youshu_intro.html")),(0,a.kt)("h2",r({},{id:"function-introduction"}),"Function Introduction"),(0,a.kt)("p",null,"Tencent Youshu & Taro cooperated to develop the WeChat mini program template, you can quickly have the ability to buried without traces by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"default-youshu")," template through ",(0,a.kt)("inlineCode",{parentName:"p"},"taro init myApp"),", and you can have eight automatic buried abilities such as mini program start, show, hide, page browse, page leave, share, drop down refresh, drop up bottom, etc. without any development."),(0,a.kt)("h2",r({},{id:"zero-development-quick-guide"}),"Zero Development Quick Guide"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Need to upgrade Taro to 2.x or 3.x")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"taro init myApp")),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"default-youshu")," template"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm run dev:weapp")),(0,a.kt)("li",{parentName:"ol"},"You can see the 8 major behavioral logs reported in the WeChat mini program developer tools console"),(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",r({parentName:"li"},{href:"https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill"}),"https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill")," to request permission to view all data")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Through the above process has given your WeChat mini program the ability to experience 8 major user behavior buried points. After the experience is completed, you only need to replace the Token and WeChat mini program appid that have the number to have the official version of the function. Official account acquisition path: \uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill"}),"https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill"))),(0,a.kt)("h2",r({},{id:"existing-mini-programs-access-tencent-youshu-sdk"}),"Existing mini programs access Tencent Youshu SDK"),(0,a.kt)("h3",r({},{id:"1-installation"}),"1. Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install SDK via npm ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i sr-sdk-wxapp")),(0,a.kt)("li",{parentName:"ul"},"Introduce the SDK via import in app.jsx ",(0,a.kt)("inlineCode",{parentName:"li"},"import sr from 'sr-sdk-wxapp'"))),(0,a.kt)("h3",r({},{id:"2-add-trusted-domain"}),"2. Add Trusted Domain"),(0,a.kt)("p",null,"Login to ",(0,a.kt)("a",r({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"WeChat Public Platform"),", go to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Development> <Development Settings> <Server Domain>"),", add ",(0,a.kt)("inlineCode",{parentName:"p"},"https://zhls.qq.com")," as request legal domain."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There is also SDK version checking in the development environment, so it will prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com is not in the list of legal domains for the following request")," , which can be handled by setting not to check the domain name.")),(0,a.kt)("h3",r({},{id:"3-initialize"}),"3. Initialize"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"init(options: object)")),(0,a.kt)("p",null,"Configuration interface to adjust the base settings of the SDK. Should be called before the ",(0,a.kt)("inlineCode",{parentName:"p"},"App()")," call."),(0,a.kt)("p",null,"The first call initializes the SDK, and the second call overwrites the previously passed configuration, which can be called multiple times. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Required"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"appid"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Y"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Wechat mini program appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"token"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Y"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"After passing the access request, the credential string provided by Youshu")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"usePlugin"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether the mini program plugin is used or not, default is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"debug"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether to print the log or not, default is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"openSdkShareDepth"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether to turn on the sharing link recording function, the default value is false, after turning on, it will record user sharing link A->B->C->D")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"serverUrl"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Pass in a custom backend reporting interface, if passed in then the token will be meaningless, default is '",(0,a.kt)("a",r({parentName:"td"},{href:"https://zhls.qq.com/api/report'"}),"https://zhls.qq.com/api/report'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"trackApp"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether to enable automatic tracking of APP exposure events (APP-related preset events, such as APP - onLuanch), default is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"proxyPage"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether to enable automatic proxy Page, the default is: false. sdr.page can be used instead of Page(sr.page(options)) for events such as browse, leave, share, etc. that the SDK is responsible for reporting on the page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"autoStart"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"bool"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Whether to enable automatic start reporting, the default is: false, open_id can not be automatically obtained, usually after the login business manually call sr.startReport method to open reporting")))),(0,a.kt)("h3",r({},{id:"4-example"}),"4. Example"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"import sr from 'sr-sdk-wxapp'\nsr.init({\n  token: 'bi72fccc7184ef4xxx',\n  /**\n   * WeChat mini program appID , starting with wx\n   */\n  appid: 'wx195745e8e342bxxx',\n  /**\n   * If the mini program plugin is used, it needs to be set to true\n   */\n  usePlugin: false,\n  /**\n   * Enables printing of debugging information, default false\n   */\n  debug: true,\n  /**\n   *It is recommended to turn on - auto-proxy Page, default false\n   * sdk is responsible for reporting events such as browse, leave, share, etc. of the page\n   * You can use sr.page instead of Page(sr.page(options))\n   * element event tracking, need to work with autoTrack: true\n   */\n  proxyPage: true,\n  /**\n    * Recommended - enable component auto-proxy, default false\n    * sdk is responsible for reporting events such as browse, leave, share, etc. of the page\n   */\n  proxyComponent: true,\n  // It is recommended to enable - Whether to enable automatic tracking of page sharing links\n  openSdkShareDepth: true,\n  // It is recommended to enable - element event tracking, automatic reporting of element events, into tap, change, longpress, confirm\n  autoTrack: true,\n})\n")))}m.isMDXComponent=!0}}]);