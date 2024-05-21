"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17546],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),c=r,N=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25230:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},p=void 0,o={unversionedId:"apis/media/video/chooseMedia",id:"version-3.x/apis/media/video/chooseMedia",title:"Taro.chooseMedia(option)",description:"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002",source:"@site/versioned_docs/version-3.x/apis/media/video/chooseMedia.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/chooseMedia",permalink:"/mirror/taro-docs/en/docs/apis/media/video/chooseMedia",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/video/chooseMedia.md",tags:[],version:"3.x",frontMatter:{title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},sidebar:"API",previous:{title:"chooseVideo",permalink:"/mirror/taro-docs/en/docs/apis/media/video/chooseVideo"},next:{title:"VideoContext",permalink:"/mirror/taro-docs/en/docs/apis/media/video/VideoContext"}},d={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ChooseMedia",id:"choosemedia",level:3},{value:"mediaType",id:"mediatype",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"camera",id:"camera",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],k={toc:m},u="wrapper";function c(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(u,r({},k,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"count"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"9")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mediaType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(keyof mediaType)[]")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"['image', 'video']")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u7c7b\u578b",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sourceType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(keyof sourceType)[]")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"['album', 'camera']")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u56fe\u7247\u548c\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"maxDuration"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"10")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u65f6\u95f4\u8303\u56f4\u4e3a 3s \u81f3 60s \u4e4b\u95f4",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sizeType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("original" or "compressed")[]'),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"['original', 'compressed']")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u538b\u7f29\u6240\u9009\u6587\u4ef6",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"camera"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"back"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4ec5\u5728 sourceType \u4e3a camera \u65f6\u751f\u6548\uff0c\u4f7f\u7528\u524d\u7f6e\u6216\u540e\u7f6e\u6444\u50cf\u5934",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mediaId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u6765\u4e0a\u4f20\u7684input\u5143\u7d20ID",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: h5")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tempFiles"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ChooseMedia[]")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6587\u4ef6\u7c7b\u578b\uff0c\u6709\u6548\u503c\u6709 image \u3001video\u3001mix")))),(0,n.kt)("h3",r({},{id:"choosemedia"}),"ChooseMedia"),(0,n.kt)("p",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tempFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"size"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"duration"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u89c6\u9891\u7684\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u89c6\u9891\u7684\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"thumbTempFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u89c6\u9891\u7f29\u7565\u56fe\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fileType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u7684\u6587\u4ef6\u7684\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"originalFileObj"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"File")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u539f\u59cb\u7684\u6d4f\u89c8\u5668 File \u5bf9\u8c61",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: h5")))),(0,n.kt)("h3",r({},{id:"mediatype"}),"mediaType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"video"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u53ea\u80fd\u62cd\u6444\u89c6\u9891\u6216\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u53ea\u80fd\u62cd\u6444\u56fe\u7247\u6216\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mix"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u53ef\u540c\u65f6\u9009\u62e9\u56fe\u7247\u548c\u89c6\u9891")))),(0,n.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"album"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4ece\u76f8\u518c\u9009\u62e9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"camera"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f7f\u7528\u76f8\u673a\u62cd\u6444")))),(0,n.kt)("h3",r({},{id:"camera"}),"camera"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"back"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"front"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMedia({\n  count: 9,\n  mediaType: ['image','video'],\n  sourceType: ['album', 'camera'],\n  maxDuration: 30,\n  camera: 'back',\n  success: (res) => {\n    console.log(res.tempFiles)\n    console.log(res.type)\n  }\n})\n")))}c.isMDXComponent=!0},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(t,e,a){e.Z=a.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);