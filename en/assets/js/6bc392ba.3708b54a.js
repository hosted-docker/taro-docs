"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19500],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,l(l({ref:e},s),{},{components:n})):r.createElement(m,l({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36893:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const l={title:"Taro.openLocation(option)",sidebar_label:"openLocation"},i=void 0,c={unversionedId:"apis/location/openLocation",id:"version-3.x/apis/location/openLocation",title:"Taro.openLocation(option)",description:"Views location using the WeChat built-in map.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/location/openLocation.md",sourceDirName:"apis/location",slug:"/apis/location/openLocation",permalink:"/mirror/taro-docs/en/docs/apis/location/openLocation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/location/openLocation.md",tags:[],version:"3.x",frontMatter:{title:"Taro.openLocation(option)",sidebar_label:"openLocation"},sidebar:"API",previous:{title:"startLocationUpdate",permalink:"/mirror/taro-docs/en/docs/apis/location/startLocationUpdate"},next:{title:"onLocationChangeError",permalink:"/mirror/taro-docs/en/docs/apis/location/onLocationChangeError"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:s},d="wrapper";function k(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)(d,o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Views location using the WeChat built-in map."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.openLocation.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",o({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"latitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Latitude. The value ranges from -90 to +90, and the negative number means south latitude. The GCJ-02 coordinate system of the State Bureau of Surveying and Mapping is used.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"longitude"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Longitude. The value ranges from -180 to +180, and the negative number means west longitude. The GCJ-02 coordinate system of the State Bureau of Surveying and Mapping is used.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"address"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Detailed address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Location name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scale"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Scale, ranging from 5 to 18")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h2",o({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"Taro.getLocation({\n type: 'gcj02', //Returns the latitude and longitude that can be used for Taro.openLocation\n success: function (res) {\n   const latitude = res.latitude\n   const longitude = res.longitude\n   Taro.openLocation({\n     latitude,\n     longitude,\n     scale: 18\n   })\n }\n})\n")),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.openLocation"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);