"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45666],{79874:function(t,l,e){e.d(l,{Zo:function(){return k},kt:function(){return m}});var n=e(93106);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function o(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=n.createContext({}),d=function(t){var l=n.useContext(c),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},k=function(t){var l=d(t.components);return n.createElement(c.Provider,{value:l},t.children)},i="mdxType",s={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,c=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),i=d(e),p=r,m=i["".concat(c,".").concat(p)]||i[p]||s[p]||u;return e?n.createElement(m,a(a({ref:l},k),{},{components:e})):n.createElement(m,a({ref:l},k))}));function m(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,a=new Array(u);a[0]=p;var o={};for(var c in l)hasOwnProperty.call(l,c)&&(o[c]=l[c]);o.originalType=t,o[i]="string"==typeof t?t:r,a[1]=o;for(var d=2;d<u;d++)a[d]=e[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},17198:function(t,l,e){e.r(l),e.d(l,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return k}});e(93106);var n=e(79874);function r(){return r=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},r.apply(this,arguments)}function u(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}const a={title:"Taro.scanCode(option)",sidebar_label:"scanCode"},o=void 0,c={unversionedId:"apis/device/scan/scancode",id:"version-2.x/apis/device/scan/scancode",title:"Taro.scanCode(option)",description:"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c",source:"@site/versioned_docs/version-2.x/apis/device/scan/scancode.md",sourceDirName:"apis/device/scan",slug:"/apis/device/scan/scancode",permalink:"/mirror/taro-docs/docs/2.x/apis/device/scan/scancode",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/scan/scancode.md",tags:[],version:"2.x",frontMatter:{title:"Taro.scanCode(option)",sidebar_label:"scanCode"},sidebar:"version-2.x/API",previous:{title:"onMemoryWarning",permalink:"/mirror/taro-docs/docs/2.x/apis/device/performance/onMemoryWarning"},next:{title:"vibrateShort",permalink:"/mirror/taro-docs/docs/2.x/apis/device/vibrate/vibrateShort"}},d={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ScanType",id:"scantype",level:3},{value:"QRType",id:"qrtype",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],i={toc:k},s="wrapper";function p(t){var{components:l}=t,e=u(t,["components"]);return(0,n.kt)(s,r({},i,e,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"onlyFromCamera"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u662f\u5426\u53ea\u80fd\u4ece\u76f8\u673a\u626b\u7801\uff0c\u4e0d\u5141\u8bb8\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scanType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("barCode" | "qrCode" | "datamatrix" | "pdf417")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u626b\u7801\u7c7b\u578b")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"charSet"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u6240\u626b\u7801\u7684\u5b57\u7b26\u96c6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"path"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u5f53\u6240\u626b\u7684\u7801\u4e3a\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e8c\u7ef4\u7801\u65f6\uff0c\u4f1a\u8fd4\u56de\u6b64\u5b57\u6bb5\uff0c\u5185\u5bb9\u4e3a\u4e8c\u7ef4\u7801\u643a\u5e26\u7684 path")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"rawData"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u539f\u59cb\u6570\u636e\uff0cbase64\u7f16\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u6240\u626b\u7801\u7684\u5185\u5bb9")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scanType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"QR_CODE" | "AZTEC" | "CODABAR" | "CODE_39" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "EAN_13" | "ITF" | "MAXICODE" | "PDF_417" | "RSS_14" | "RSS_EXPANDED" | "UPC_A" | "UPC_E" | "UPC_EAN_EXTENSION" | "WX_CODE" | "CODE_25"')),(0,n.kt)("td",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,n.kt)("h3",r({},{id:"scantype"}),"ScanType"),(0,n.kt)("p",null,"\u626b\u7801\u7c7b\u578b"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"barCode"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"qrCode"),(0,n.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"datamatrix"),(0,n.kt)("td",null,"Data Matrix \u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"pdf417"),(0,n.kt)("td",null,"PDF417 \u6761\u7801")))),(0,n.kt)("h3",r({},{id:"qrtype"}),"QRType"),(0,n.kt)("p",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"QR_CODE"),(0,n.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"AZTEC"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CODABAR"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CODE_39"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CODE_93"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CODE_128"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"DATA_MATRIX"),(0,n.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"EAN_8"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"EAN_13"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ITF"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"MAXICODE"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PDF_417"),(0,n.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RSS_14"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RSS_EXPANDED"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"UPC_A"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"UPC_E"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"UPC_EAN_EXTENSION"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"WX_CODE"),(0,n.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CODE_25"),(0,n.kt)("td",null,"\u4e00\u7ef4\u7801")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// \u5141\u8bb8\u4ece\u76f8\u673a\u548c\u76f8\u518c\u626b\u7801\nTaro.scanCode({\n  success: (res) => {\n    console.log(res)\n  }\n})\n      // \u53ea\u5141\u8bb8\u4ece\u76f8\u673a\u626b\u7801\nTaro.scanCode({\n  onlyFromCamera: true,\n  success: (res) => {\n    console.log(res)\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.scanCode"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);