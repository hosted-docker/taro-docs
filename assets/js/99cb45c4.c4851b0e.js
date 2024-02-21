"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[35140],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10703:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Taro.onAccelerometerChange(callback)",sidebar_label:"onAccelerometerChange"},c=void 0,i={unversionedId:"apis/device/accelerometer/onAccelerometerChange",id:"version-1.x/apis/device/accelerometer/onAccelerometerChange",title:"Taro.onAccelerometerChange(callback)",description:"\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e startAccelerometer() \u7684 interval \u53c2\u6570\u3002\u53ef\u4f7f\u7528 stopAccelerometer() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/accelerometer/onAccelerometerChange.md",sourceDirName:"apis/device/accelerometer",slug:"/apis/device/accelerometer/onAccelerometerChange",permalink:"/mirror/taro-docs/docs/1.x/apis/device/accelerometer/onAccelerometerChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/accelerometer/onAccelerometerChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onAccelerometerChange(callback)",sidebar_label:"onAccelerometerChange"},sidebar:"version-1.x/API",previous:{title:"stopAccelerometer",permalink:"/mirror/taro-docs/docs/1.x/apis/device/accelerometer/stopAccelerometer"},next:{title:"startDeviceMotionListening",permalink:"/mirror/taro-docs/docs/1.x/apis/device/deviceMotion/startDeviceMotionListening"}},p={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"function callback(res)",id:"function-callbackres",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"object res",id:"object-res",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:u},m="wrapper";function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"p"},"startAccelerometer()")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"interval")," \u53c2\u6570\u3002\u53ef\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"stopAccelerometer()")," \u505c\u6b62\u76d1\u542c\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"function-callbackres"}),"function callback(res)"),(0,n.kt)("p",null,"\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,n.kt)("h4",a({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,n.kt)("h5",a({},{id:"object-res"}),"object res"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"X \u8f74")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Y \u8f74")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"z"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Z \u8f74")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onAccelerometerChange(res => {\n  console.log(res.x)\n  console.log(res.y)\n  console.log(res.z)\n})\n")),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onAccelerometerChange"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);