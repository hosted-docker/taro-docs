"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27772],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,g=s["".concat(c,".").concat(u)]||s[u]||d[u]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91264:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(93106),a=n(4706),l={tabItem:"tabItem_FBI3"};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:t}),e)}},8602:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(93106),a=n(4706),l=n(29369),i=n(27907),o=n(3111),c=n(65009),p=n(42615);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:s(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,o._X)(a),c=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[l,c]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,m]=g({queryString:n,groupId:a}),[s,v]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),k=(()=>{const e=null!=c?c:s;return u({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),v(e)}),[m,v,l]),tabValues:l}}var k=n(81600),f={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function h({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=o[r].value;a!==n&&(p(t),i(a))},s=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;var n;t=null!==(n=c[r])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var r;t=null!==(r=c[n])&&void 0!==r?r:c[c.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>r.createElement("li",N({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:s,onClick:m},l,{className:(0,a.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function b({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},r.createElement(h,N({},e,t)),r.createElement(b,N({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,N({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return c},hn:function(){return i},p6:function(){return o}});var r=n(93106);const a="#61dafb",l="#4fc08d",i=()=>r.createElement("span",{className:"footer_link_connect_wrap"},r.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.createElement("span",{className:"wechat_qrcode_icon"},r.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},r.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),r.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),r.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),r.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),r.createElement("span",{className:"footer_link_wechat_img inline"},r.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function o({version:e=""}){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:l}},"Vue",e?` ${e}`:""))}function c(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:a}},"React"))}},94556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});n(93106);var r=n(79874),a=n(2071),l=n(8602),i=n(91264);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"CoverImage",sidebar_label:"CoverImage"},m=void 0,s={unversionedId:"components/viewContainer/cover-image",id:"version-3.x/components/viewContainer/cover-image",title:"CoverImage",description:"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/cover-image.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/cover-image",permalink:"/mirror/taro-docs/docs/components/viewContainer/cover-image",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/cover-image.md",tags:[],version:"3.x",frontMatter:{title:"CoverImage",sidebar_label:"CoverImage"},sidebar:"components",previous:{title:"event",permalink:"/mirror/taro-docs/docs/components/event"},next:{title:"CoverView",permalink:"/mirror/taro-docs/docs/components/viewContainer/cover-view"}},d={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"CoverImageProps",id:"coverimageprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],g={toc:u},v="wrapper";function k(e){var{components:t}=e,p=c(e,["components"]);return(0,r.kt)(v,o({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(92207).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CoverImageProps>\n")),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,r.kt)(a.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"// js\nclass App extends Components {\n  render () {\n    return (\n      <View className='container'>\n      <Video id='myVideo' src='src'>\n        <CoverView className='controls'>\n          <CoverView className='play' onClick='play'>\n            <CoverImage className='img' src='src' />\n          </CoverView>\n        </CoverView>\n      </Video>\n    )\n  }\n}\n// css\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n"))),(0,r.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>\n    </video>\n    <cover-view class='controls'>\n      <cover-view class='play' @tap='play'>\n        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />\n      </cover-view>\n    </cover-view>\n  </view>\n</template>\n\n<style>\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n</style>\n")))),(0,r.kt)("h2",o({},{id:"coverimageprops"}),"CoverImageProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"src"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u56fe\u6807\u8def\u5f84\uff0c\u652f\u6301\u4e34\u65f6\u8def\u5f84\u3001\u7f51\u7edc\u5730\u5740\u3001\u4e91\u6587\u4ef6ID\u3002\u6682\u4e0d\u652f\u6301base64\u683c\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"referrerPolicy"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),'"origin" or "no-referrer"'),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u683c\u5f0f\u56fa\u5b9a\u4e3a ",(0,r.kt)("a",o({parentName:"td"},{href:"https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html%EF%BC%8C%E5%85%B6%E4%B8%AD"}),"https://servicewechat.com/{appid}/{version}/page-frame.html\uff0c\u5176\u4e2d")," {appid} \u4e3a\u5c0f\u7a0b\u5e8f\u7684 appid\uff0c{version} \u4e3a\u5c0f\u7a0b\u5e8f\u7684\u7248\u672c\u53f7\uff0c\u7248\u672c\u53f7\u4e3a 0 \u8868\u793a\u4e3a\u5f00\u53d1\u7248\u3001\u4f53\u9a8c\u7248\u4ee5\u53ca\u5ba1\u6838\u7248\u672c\uff0c\u7248\u672c\u53f7\u4e3a devtools \u8868\u793a\u4e3a\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u5176\u4f59\u4e3a\u6b63\u5f0f\u7248\u672c\uff1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"fixedTop"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u9876\u90e8\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c top \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e fixed-bottom\uff0cCSS \u8bbe\u7f6e\u7684 position\u3001top\u3001bottom \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"fixedRight"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u53f3\u4fa7\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c right \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e CSS \u8bbe\u7f6e\u7684 position\u3001left\u3001right \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"fixedBottom"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u5e95\u90e8\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c bottom \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e CSS \u8bbe\u7f6e\u7684 position\u3001top\u3001bottom \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"fixedLeft"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u5de6\u4fa7\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c left \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e fixed-right\uff0cCSS \u8bbe\u7f6e\u7684 position\u3001left\u3001right \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ariaRole"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u89d2\u8272\uff09\u6807\u8bc6\u5143\u7d20\u7684\u4f5c\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ariaLabel"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onLoad"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u56fe\u7247\u52a0\u8f7d\u6210\u529f\u65f6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onError"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onTap"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03\u3002")))),(0,r.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.src"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.referrerPolicy"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.fixedTop"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.fixedRight"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.fixedBottom"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.fixedLeft"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.ariaRole"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.ariaLabel"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.onLoad"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"CoverImageProps.onTap"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0},68525:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(e,t,n){t.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(e,t,n){t.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);