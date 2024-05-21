"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12056],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(n),k=a,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(u,l(l({ref:e},d),{},{components:n})):r.createElement(u,l({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38151:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"GridView",sidebar_label:"GridView"},o=void 0,p={unversionedId:"components/skyline/grid-view",id:"version-3.x/components/skyline/grid-view",title:"GridView",description:"\u7f51\u683c\u5e03\u5c40\u5bb9\u5668\uff0c\u4ec5\u652f\u6301\u4f5c\u4e3a scroll-view \u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u6216 sticky-section \u7ec4\u4ef6\u76f4\u63a5\u5b50\u8282\u70b9\u3002\u4ec5 Skyline \u652f\u6301\u3002",source:"@site/versioned_docs/version-3.x/components/skyline/grid-view.md",sourceDirName:"components/skyline",slug:"/components/skyline/grid-view",permalink:"/mirror/taro-docs/docs/components/skyline/grid-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/skyline/grid-view.md",tags:[],version:"3.x",frontMatter:{title:"GridView",sidebar_label:"GridView"},sidebar:"components",previous:{title:"GridBuilder",permalink:"/mirror/taro-docs/docs/components/skyline/grid-builder"},next:{title:"ListBuilder",permalink:"/mirror/taro-docs/docs/components/skyline/list-builder"}},c={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"GridViewProps",id:"gridviewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],m={toc:d},s="wrapper";function k(t){var{components:e}=t,l=i(t,["components"]);return(0,r.kt)(s,a({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7f51\u683c\u5e03\u5c40\u5bb9\u5668\uff0c\u4ec5\u652f\u6301\u4f5c\u4e3a scroll-view \u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u6216 sticky-section \u7ec4\u4ef6\u76f4\u63a5\u5b50\u8282\u70b9\u3002\u4ec5 Skyline \u652f\u6301\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"ComponentType<GridViewProps>\n")),(0,r.kt)("h2",a({},{id:"gridviewprops"}),"GridViewProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"aligned" or "masonry"'),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},'"aligned"<br /><br />\u53ef\u9009\u503c:<br />- aligned: \u6bcf\u884c\u9ad8\u5ea6\u7531\u540c\u4e00\u884c\u4e2d\u6700\u5927\u9ad8\u5ea6\u5b50\u8282\u70b9\u51b3\u5b9a<br />- masonry: \u7011\u5e03\u6d41\uff0c\u6839\u636e\u5b50\u5143\u7d20\u9ad8\u5ea6\u81ea\u52a8\u5e03\u5c40')),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5e03\u5c40\u65b9\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"crossAxisCount"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ea4\u53c9\u8f74\u5143\u7d20\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"mainAxisGap"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4e3b\u8f74\u65b9\u5411\u95f4\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"crossAxisGap"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ea4\u53c9\u8f74\u65b9\u5411\u95f4\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"maxCrossAxisExtent"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ea4\u53c9\u8f74\u5143\u7d20\u6700\u5927\u8303\u56f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"padding"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[number, number, number, number]")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"[0, 0, 0, 0]")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u957f\u5ea6\u4e3a 4 \u7684\u6570\u7ec4\uff0c\u6309 top\u3001right\u3001bottom\u3001left \u987a\u5e8f\u6307\u5b9a\u5185\u8fb9\u8ddd")))),(0,r.kt)("h3",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.type"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.crossAxisCount"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.mainAxisGap"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.crossAxisGap"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.maxCrossAxisExtent"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"GridViewProps.padding"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0},34208:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);