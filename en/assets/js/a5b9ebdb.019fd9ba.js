"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84843],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(n),k=l,m=s["".concat(u,".").concat(k)]||s[k]||p[k]||a;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79404:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},i=void 0,u={unversionedId:"apis/media/image/getImageInfo",id:"apis/media/image/getImageInfo",title:"Taro.getImageInfo(option)",description:"Obtains image information. For network images, it only takes effect when the download domain name is configured.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/image/getImageInfo.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/getImageInfo",permalink:"/mirror/taro-docs/en/docs/next/apis/media/image/getImageInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/image/getImageInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},sidebar:"API",previous:{title:"previewImage",permalink:"/mirror/taro-docs/en/docs/next/apis/media/image/previewImage"},next:{title:"editImage",permalink:"/mirror/taro-docs/en/docs/next/apis/media/image/editImage"}},c={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"orientation",id:"orientation",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:d},p="wrapper";function k(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)(p,l({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obtains image information. For network images, it only takes effect when the download domain name is configured."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.getImageInfo.html"}),"Reference"))),(0,r.kt)("h2",l({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"src"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The path to the image. It can be a relative path, a temporary file path, a file storage path, or a path to a network image.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",null,"The original height of the image (in px). Rotation is not considered.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",null,"The original width of the image (in px). Rotation is not considered.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"orientation"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"up" | "up-mirrored" | "down" | "down-mirrored" | "left-mirrored" | "right" | "right-mirrored" | "left"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"up"')),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://sylvana.net/jpegcrop/exif_orientation.html"},"Device orientation when taking photos"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"path"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",null,"The local path to the image")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",null,"Image format")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",l({},{id:"orientation"}),"orientation"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"up"),(0,r.kt)("td",null,"Default orientation (landscape). It is 1 in Exif. Or it indicates no orientation information.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"up-mirrored"),(0,r.kt)("td",null,"Mirrored orientation of up. It is 2 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"down"),(0,r.kt)("td",null,"Rotates the device 180 degrees. It is 3 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"down-mirrored"),(0,r.kt)("td",null,"Mirrored orientation of down. It is 4 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"left-mirrored"),(0,r.kt)("td",null,"Mirrored orientation of left. It is 5 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"right"),(0,r.kt)("td",null,"Rotates the device 90 degrees clockwise. It is 6 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"right-mirrored"),(0,r.kt)("td",null,"Mirrored orientation of right. It is 7 in Exif.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"left"),(0,r.kt)("td",null,"Rotates the device 90 degrees counterclockwise. It is 8 in Exif.")))),(0,r.kt)("h2",l({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getImageInfo({\n  src: 'images/a.jpg',\n  success: function (res) {\n    console.log(res.width)\n    console.log(res.height)\n  }\n})\nTaro.chooseImage({\n  success: function (res) {\n    Taro.getImageInfo({\n      src: res.tempFilePaths[0],\n      success: function (res) {\n        console.log(res.width)\n        console.log(res.height)\n      }\n    })\n  }\n})\n")),(0,r.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getImageInfo"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);