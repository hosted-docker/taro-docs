"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4933],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,f=c["".concat(d,".").concat(k)]||c[k]||p[k]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const o={title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},i=void 0,d={unversionedId:"apis/network/download/downloadFile",id:"version-3.x/apis/network/download/downloadFile",title:"Taro.downloadFile(option)",description:"Downloads local resources to the local device. The client initiates an HTTPS GET request. The local temporary path to the file is returned. The maximum file size for a single download is 50 MB. Read related instructions before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/network/download/downloadFile.md",sourceDirName:"apis/network/download",slug:"/apis/network/download/downloadFile",permalink:"/mirror/taro-docs/en/docs/apis/network/download/downloadFile",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/network/download/downloadFile.md",tags:[],version:"3.x",frontMatter:{title:"Taro.downloadFile(option)",sidebar_label:"downloadFile"},sidebar:"API",previous:{title:"cleanInterceptors",permalink:"/mirror/taro-docs/en/docs/apis/network/request/cleanInterceptors"},next:{title:"DownloadTask",permalink:"/mirror/taro-docs/en/docs/apis/network/download/DownloadTask"}},s={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"FileSuccessCallbackResult",id:"filesuccesscallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],c={toc:u},p="wrapper";function k(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(p,l({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Downloads local resources to the local device. The client initiates an HTTPS GET request. The local temporary path to the file is returned. The maximum file size for a single download is 50 MB. Read ",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/ability/network.html"}),"related instructions")," before use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Specify a reasonable ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," field in the server response header to ensure that the client handles the file type properly."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/download/wx.downloadFile.html"}),"Reference"))),(0,r.kt)("h2",l({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => DownloadTask\n")),(0,r.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"url"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"URL to download resources")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"filePath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Indicates the path to save downloaded files")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"header"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"HTTP request Header. Referer is not available in Header.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",l({},{id:"filesuccesscallbackresult"}),"FileSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"filePath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"User file path. It is returned when the filePath is specified. Same as the passed filePath.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"statusCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"HTTP status code returned by the developer server")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempFilePath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Temporary file path. It is returned when the filePath to save files is not specified. The downloaded files will be stored in a temporary file path.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h2",l({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.downloadFile({\n  url: 'https://example.com/audio/123', //This value for demonstration purposes only is not a real resource.\n  success: function (res) {\n    // As long as there is response data in the server, the response content will be written to the file and the success callback is triggered. Judge whether desired data is downloaded depending on the service.\n    if (res.statusCode === 200) {\n      Taro.playVoice({\n        filePath: res.tempFilePath\n      })\n    }\n  }\n})\n")),(0,r.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Baidu Smart-MiniProgram"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.downloadFile"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);