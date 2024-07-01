"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72041],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||g[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[d]="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55256:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(93106),r=n(4706),l={tabItem:"tabItem_NDii"};function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l.tabItem,n)},{hidden:e}),t)}},51417:function(t,e,n){n.d(e,{Z:function(){return w}});var a=n(93106),r=n(4706),l=n(76075),i=n(27907),u=n(48505),o=n(29136),p=n(6099);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return function(t){var e,n;return null!==(n=null===(e=a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:a}})=>({value:t,label:e,attributes:n,default:a})))}function g(t){const{values:e,children:n}=t;return(0,a.useMemo)((()=>{const t=null!=e?e:d(n);return function(t){const e=(0,o.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function c({value:t,tabValues:e}){return e.some((e=>e.value===t))}function k({queryString:t=!1,groupId:e}){const n=(0,i.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,u._X)(r),o=(0,a.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){m(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[r,n]);return[l,o]}function s(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,l=g(t),[i,u]=(0,a.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const a=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,m]=k({queryString:n,groupId:r}),[d,s]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,r]=(0,p.Nk)(e);return[n,(0,a.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),N=(()=>{const t=null!=o?o:d;return c({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{N&&u(N)}),[N]);return{selectedValue:i,selectValue:(0,a.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),m(t),s(t)}),[m,s,l]),tabValues:l}}var N=n(27614),f={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},v.apply(this,arguments)}function h({className:t,block:e,selectedValue:n,selectValue:i,tabValues:u}){const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=t=>{const e=t.currentTarget,a=o.indexOf(e),r=u[a].value;r!==n&&(p(e),i(r))},d=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=o.indexOf(t.currentTarget)+1;var n;e=null!==(n=o[a])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(t.currentTarget)-1;var a;e=null!==(a=o[n])&&void 0!==a?a:o[o.length-1];break}}null==e||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:l})=>a.createElement("li",v({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>o.push(t),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function b({lazy:t,children:e,selectedValue:n}){const r=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=s(t);return a.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},a.createElement(h,v({},t,e)),a.createElement(b,v({},t,e)))}function w(t){const e=(0,N.Z)();return a.createElement(y,v({key:String(e)},t))}},59852:function(t,e,n){n.d(e,{gQ:function(){return o},hn:function(){return i},p6:function(){return u}});var a=n(93106);const r="#61dafb",l="#4fc08d",i=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function u({version:t=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:l}},"Vue",t?` ${t}`:""))}function o(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:r}},"React"))}},15064:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});n(93106);var a=n(79874),r=n(59852),l=n(55256),i=n(51417);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},u.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"\u9875\u9762\u914d\u7f6e"},m=void 0,d={unversionedId:"page-config",id:"page-config",title:"\u9875\u9762\u914d\u7f6e",description:"\u6bcf\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u90fd\u53ef\u4ee5\u4f7f\u7528 .config.js \u6587\u4ef6\u6765\u5bf9\u672c\u9875\u9762\u7684\u7a97\u53e3\u8868\u73b0\u8fdb\u884c\u914d\u7f6e\u3002\u9875\u9762\u4e2d\u914d\u7f6e\u9879\u5728\u5f53\u524d\u9875\u9762\u4f1a\u8986\u76d6\u5168\u5c40\u914d\u7f6e app.config.json \u7684 window \u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9879\u3002",source:"@site/docs/page-config.mdx",sourceDirName:".",slug:"/page-config",permalink:"/mirror/taro-docs/docs/next/page-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/page-config.mdx",tags:[],version:"current",frontMatter:{title:"\u9875\u9762\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u5168\u5c40\u914d\u7f6e",permalink:"/mirror/taro-docs/docs/next/app-config"},next:{title:"\u9879\u76ee\u914d\u7f6e",permalink:"/mirror/taro-docs/docs/next/project-config"}},g={},c=[{value:"definePageConfig \u5b8f\u51fd\u6570",id:"definepageconfig-\u5b8f\u51fd\u6570",level:2},{value:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528",level:3},{value:"\u5728\u9875\u9762 JS \u6587\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u9875\u9762-js-\u6587\u4ef6\u4e2d\u4f7f\u7528",level:3},{value:"\u914d\u7f6e\u9879\u5217\u8868",id:"\u914d\u7f6e\u9879\u5217\u8868",level:2},{value:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6",id:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6",level:3}],k={toc:c},s="wrapper";function N(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)(s,u({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".config.js")," \u6587\u4ef6\u6765\u5bf9\u672c\u9875\u9762\u7684\u7a97\u53e3\u8868\u73b0\u8fdb\u884c\u914d\u7f6e\u3002\u9875\u9762\u4e2d\u914d\u7f6e\u9879\u5728\u5f53\u524d\u9875\u9762\u4f1a\u8986\u76d6\u5168\u5c40\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"app.config.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," \u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9879\u3002"),(0,a.kt)("p",null,"\u6587\u4ef6\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," \u4e00\u4e2a\u9ed8\u8ba4\u5bf9\u8c61\uff0c\u914d\u7f6e\u9879\u9075\u5faa",(0,a.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303"),"\uff0c\u5e76\u4e14\u5bf9\u6240\u6709\u5e73\u53f0\u8fdb\u884c\u7edf\u4e00\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u4e4b\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u91cc\u5f15\u7528\u7684 JS \u6587\u4ef6",(0,a.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u7ecf\u8fc7 Babel \u7f16\u8bd1"),"\u3002(",(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u5f00\u59cb\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u652f\u6301\u5728\u9875\u9762 JS \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"definePageConfig")," \u5b8f\u51fd\u6570\u5b9a\u4e49\u9875\u9762\u914d\u7f6e\uff0c\u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u591a\u7aef\u5dee\u5f02\u5316\u903b\u8f91\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"process.env.TARO_ENV")," \u53d8\u91cf\u4f5c\u6761\u4ef6\u5224\u65ad\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u4e0d\u652f\u6301\u591a\u7aef\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"index.weapp.js")," \u8fd9\u6837\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\u3002")),(0,a.kt)("h2",u({},{id:"definepageconfig-\u5b8f\u51fd\u6570"}),"definePageConfig \u5b8f\u51fd\u6570"),(0,a.kt)("admonition",u({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.4+ \u652f\u6301")),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6\u5b8f\u51fd\u6570")," ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5305\u88f9\u914d\u7f6e\u5bf9\u8c61\uff0c\u4ee5\u83b7\u5f97",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u63d0\u793a"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u8865\u5168"),"\u3002"),(0,a.kt)("h3",u({},{id:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528"}),"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="page.config.ts"',title:'"page.config.ts"'}),"export default definePageConfig({\n  navigationBarTitleText: '\u9996\u9875',\n})\n")),(0,a.kt)("h3",u({},{id:"\u5728\u9875\u9762-js-\u6587\u4ef6\u4e2d\u4f7f\u7528"}),"\u5728\u9875\u9762 JS \u6587\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u652f\u6301\u5728\u9875\u9762 JS \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5b9a\u4e49\u9875\u9762\u914d\u7f6e\uff0c\u800c\u4e0d\u9700\u8981\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"page.config.js")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5b9a\u4e49\u7684\u9875\u9762\u914d\u7f6e\u5bf9\u8c61",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u4f7f\u7528\u53d8\u91cf"),"\u3002"),(0,a.kt)(i.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-tsx",metastring:'title="page.ts"',title:'"page.ts"'}),"definePageConfig({\n  navigationBarTitleText: '\u9996\u9875',\n})\n\nexport default function Index() {}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-html",metastring:'title="page.vue"',title:'"page.vue"'}),"<template>\n  <view className=\"index\" />\n</template>\n\n<script>\n  definePageConfig({\n    navigationBarTitleText: '\u9996\u9875',\n  })\n\n  export default {}\n<\/script>\n")))),(0,a.kt)("h2",u({},{id:"\u914d\u7f6e\u9879\u5217\u8868"}),"\u914d\u7f6e\u9879\u5217\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarBackgroundColor"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"HexColor\uff08\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff09"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"#000000"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u80cc\u666f\u989c\u8272\uff0c\u5982 #000000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarTextStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"white"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6807\u9898\u989c\u8272\uff0c\u4ec5\u652f\u6301 black / white")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarTitleText"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6807\u9898\u6587\u5b57\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"default"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6837\u5f0f\uff0c\u4ec5\u652f\u6301\u4ee5\u4e0b\u503c\uff1adefault \u9ed8\u8ba4\u6837\u5f0f\uff1bcustom \u81ea\u5b9a\u4e49\u5bfc\u822a\u680f\uff0c\u53ea\u4fdd\u7559\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"transparentTitle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"none"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u900f\u660e\u8bbe\u7f6e\u3002\u652f\u6301 always \u4e00\u76f4\u900f\u660e / auto \u6ed1\u52a8\u81ea\u9002\u5e94 / none \u4e0d\u900f\u660e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u7a97\u53e3\u7684\u80cc\u666f\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundTextStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dark"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u4e0b\u62c9 loading \u7684\u6837\u5f0f\uff0c\u4ec5\u652f\u6301 dark / light")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"#ffffff"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u4ec5 iOS \u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"#ffffff"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u4ec5 iOS \u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enablePullDownRefresh"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f\u5426\u5f00\u542f\u5f53\u524d\u9875\u9762\u7684\u4e0b\u62c9\u5237\u65b0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"onReachBottomDistance"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"50"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u9875\u9762\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8ddd\u9875\u9762\u5e95\u90e8\u8ddd\u79bb\uff0c\u5355\u4f4d\u4e3a px")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pageOrientation"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"portrait"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5c4f\u5e55\u65cb\u8f6c\u8bbe\u7f6e\uff0c\u652f\u6301 auto / portrait / landscape \u8be6\u89c1 \u54cd\u5e94\u663e\u793a\u533a\u57df\u53d8\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e3a true \u5219\u9875\u9762\u6574\u4f53\u4e0d\u80fd\u4e0a\u4e0b\u6eda\u52a8\u3002",(0,a.kt)("br",null),"\u53ea\u5728\u9875\u9762\u914d\u7f6e\u4e2d\u6709\u6548\uff0c\u65e0\u6cd5\u5728 app.json \u4e2d\u8bbe\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"disableSwipeBack"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u7981\u6b62\u9875\u9762\u53f3\u6ed1\u624b\u52bf\u8fd4\u56de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enableShareAppMessage"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u5206\u4eab\u7ed9\u597d\u53cb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enableShareTimeline"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u5206\u4eab\u5230\u670b\u53cb\u5708\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"usingComponents"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u9875\u9762\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"renderer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"webview"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u6e32\u67d3\u540e\u7aef")))),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u4e00\u822c\u4e0d\u9700\u8981\u914d\u7f6e\uff0c\u53ea\u6709\u5728\u9700\u8981\u4e0e\u5f15\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u65f6\u5019\u624d\u9700\u8981\u914d\u7f6e\u3002"),(0,a.kt)("h3",u({},{id:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6"}),"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"H5"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"RN"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarBackgroundColor"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarTextStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationBarTitleText"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"navigationStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.6.0\uff09"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u767e\u5ea6 App \u7248\u672c 11.1.0\uff09"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"transparentTitle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundTextStyle"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.5.16\uff09"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.5.16\uff09"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enablePullDownRefresh"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"onReachBottomDistance"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pageOrientation"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f2.4.0 (auto) / 2.5.0 (landscape)"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"disableSwipeBack"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enableShareAppMessage"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"enableShareTimeline"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"usingComponents"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"renderer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2718")))))}N.isMDXComponent=!0}}]);