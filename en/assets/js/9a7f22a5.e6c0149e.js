"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54532],{79874:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return v}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(r),m=a,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(v,l(l({ref:e},d),{},{components:r})):n.createElement(v,l({ref:e},d))}));function v(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11471:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={title:"CanvasGradient",sidebar_label:"CanvasGradient"},i=void 0,p={unversionedId:"apis/canvas/CanvasGradient",id:"apis/canvas/CanvasGradient",title:"CanvasGradient",description:"The gradient object.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/canvas/CanvasGradient.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/CanvasGradient",permalink:"/mirror/taro-docs/en/docs/next/apis/canvas/CanvasGradient",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/canvas/CanvasGradient.md",tags:[],version:"current",frontMatter:{title:"CanvasGradient",sidebar_label:"CanvasGradient"},sidebar:"API",previous:{title:"CanvasContext",permalink:"/mirror/taro-docs/en/docs/next/apis/canvas/CanvasContext"},next:{title:"Color",permalink:"/mirror/taro-docs/en/docs/next/apis/canvas/Color"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"addColorStop",id:"addcolorstop",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"API Support",id:"api-support",level:4},{value:"API Support",id:"api-support-1",level:2}],s={toc:d},u="wrapper";function m(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(u,a({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The gradient object."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasGradient.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("h3",a({},{id:"addcolorstop"}),"addColorStop"),(0,n.kt)("p",null,"Adds color gradient points. Areas less than the minimum stop are rendered with the color of the minimum stop. Areas greater than the maximum stop are rendered with the color of the maximum stop."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasGradient.addColorStop.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(stop: number, color: string) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"stop"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Represents a position between the start and end of the gradient. Value range: 0-1.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The color of the gradient point.")))),(0,n.kt)("h4",a({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const ctx = Taro.createCanvasContext('myCanvas')\n// Create circular gradient\nconst grd = ctx.createLinearGradient(30, 10, 120, 10)\ngrd.addColorStop(0, 'red')\ngrd.addColorStop(0.16, 'orange')\ngrd.addColorStop(0.33, 'yellow')\ngrd.addColorStop(0.5, 'green')\ngrd.addColorStop(0.66, 'cyan')\ngrd.addColorStop(0.83, 'blue')\ngrd.addColorStop(1, 'purple')\n// Fill with gradient\nctx.setFillStyle(grd)\nctx.fillRect(10, 10, 150, 80)\nctx.draw()\n")),(0,n.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",a({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);