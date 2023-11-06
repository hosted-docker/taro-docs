"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24259],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(93106),a=n(4706),l="tabItem_xXVp";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(93106),a=n(4706),l=n(45388),o=n(24755),c=n(89476),u=n(26779),i=n(57191);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function v({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,c._X)(a),u=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[l,u]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,c]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=v({queryString:n,groupId:a}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,i.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),h=(()=>{const e=null!=u?u:p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var h=n(87650),g="tabList_ulmA",b="tabItem_Zt3y";function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function y({className:e,block:t,selectedValue:n,selectValue:o,tabValues:c}){const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),s=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==n&&(i(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},c.map((({value:e,label:t,attributes:l})=>r.createElement("li",k({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},l,{className:(0,a.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function x({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",g)},r.createElement(y,k({},e,t)),r.createElement(x,k({},e,t)))}function E(e){const t=(0,h.Z)();return r.createElement(w,k({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return o},hn:function(){return a},p6:function(){return l}});var r=n(93106);const a=()=>r.createElement("span",{className:"footer_link_connect_wrap"},r.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.createElement("span",{className:"wechat_qrcode_icon"},r.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},r.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),r.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),r.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),r.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),r.createElement("span",{className:"footer_link_wechat_img inline"},r.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l({version:e=""}){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:"#4fc08d"}},"Vue",e?` ${e}`:""))}function o(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:"#61dafb"}},"React"))}},2892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874),a=n(2071),l=n(95113),o=n(78288);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8fc1\u79fb\u8fc7\u6765\uff1f"},s=void 0,p={unversionedId:"come-from-miniapp",id:"come-from-miniapp",title:"\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8fc1\u79fb\u8fc7\u6765\uff1f",description:"\u672c\u7bc7\u5c06\u8bb2\u8ff0 Taro \u5f00\u53d1\u548c\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u4e3b\u8981\u5dee\u5f02\u3002\u5e0c\u671b\u80fd\u5e2e\u52a9\u638c\u63e1\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\uff0c\u4f46\u4e0d\u592a\u4e86\u89e3 Taro \u7684\u540c\u5b66\u5feb\u901f\u8fdb\u884c\u8fc1\u79fb\u3002",source:"@site/docs/come-from-miniapp.mdx",sourceDirName:".",slug:"/come-from-miniapp",permalink:"/mirror/taro-docs/docs/next/come-from-miniapp",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/come-from-miniapp.mdx",tags:[],version:"current",frontMatter:{title:"\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8fc1\u79fb\u8fc7\u6765\uff1f"},sidebar:"docs",previous:{title:"\u591a\u7aef\u540c\u6b65\u8c03\u8bd5",permalink:"/mirror/taro-docs/docs/next/envs-debug"},next:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",permalink:"/mirror/taro-docs/docs/next/wxcloudbase"}},m={},d=[{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",level:2},{value:"React",id:"react",level:3},{value:"Vue3",id:"vue3",level:3},{value:"API \u7684 scope",id:"api-\u7684-scope",level:2},{value:"1. \u5c42\u7ea7\u8fc7\u6df1",id:"1-\u5c42\u7ea7\u8fc7\u6df1",level:3},{value:"2. \u4f7f\u7528\u4e86 <code>&lt;CustomWrapper&gt;</code>",id:"2-\u4f7f\u7528\u4e86-customwrapper",level:3},{value:"dataset",id:"dataset",level:2}],v={toc:d};function f(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)("wrapper",c({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u5c06\u8bb2\u8ff0 Taro \u5f00\u53d1\u548c\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u4e3b\u8981\u5dee\u5f02\u3002\u5e0c\u671b\u80fd\u5e2e\u52a9\u638c\u63e1\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\uff0c\u4f46\u4e0d\u592a\u4e86\u89e3 Taro \u7684\u540c\u5b66\u5feb\u901f\u8fdb\u884c\u8fc1\u79fb\u3002"),(0,r.kt)("h2",c({},{id:"\u5168\u5c40\u53d8\u91cf"}),"\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 React/Vue \u65f6\uff0c\u5168\u5c40\u53d8\u91cf\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"React Redux"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Vuex")," \u7b49\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u800c\u6709\u65f6\u5019\u4e00\u4e9b\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u8fc7\u6765\u7684\u9879\u76ee\uff0c\u4f1a\u628a\u5168\u5c40\u53d8\u91cf\u6302\u8f7d\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," \u4e0a\uff0c\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getApp()")," \u83b7\u53d6\u5b83\u4eec\u3002\u6539\u9020\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"React Redux"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Vuex")," \u7b49\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f\u6210\u672c\u6bd4\u8f83\u5927\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u79cd\u6a21\u5f0f\uff0cTaro \u63d0\u4f9b\u4e86\u4e00\u4e9b\u517c\u5bb9\u7684\u624b\u6bb5\uff1a"),(0,r.kt)("h3",c({},{id:"react"}),"React"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5165\u53e3\u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"taroGlobalData")," \u5c5e\u6027\u517c\u5bb9\u8fd9\u79cd\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),'class App extends Component {\n  // \u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf "x"\n  taroGlobalData = {\n    x: 1,\n  }\n\n  // ...\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'}),'function Index() {\n  // \u83b7\u53d6\u5e76\u4f7f\u7528\u5168\u5c40\u53d8\u91cf "x"\n  const app = Taro.getApp()\n  console.log(app.x)\n\n  // ...\n}\n')),(0,r.kt)("h3",c({},{id:"vue3"}),"Vue3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Taro \u63d0\u4f9b\u7684 Vue \u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"setGlobalDataPlugin")," \u517c\u5bb9\u8fd9\u79cd\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"// \u4f7f\u7528\u63d2\u4ef6\uff0c\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf \"x\"\nimport { createApp } from 'vue'\nimport { setGlobalDataPlugin } from '@tarojs/taro'\n\nconst App = createApp(...)\nApp.use(setGlobalDataPlugin, {\n  x: 1\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-html",metastring:'title="index.vue"',title:'"index.vue"'}),'<script>\n  // \u83b7\u53d6\u5e76\u4f7f\u7528\u5168\u5c40\u53d8\u91cf "x"\n  const app = Taro.getApp()\n  console.log(app.x)\n<\/script>\n')),(0,r.kt)("h2",c({},{id:"api-\u7684-scope"}),"API \u7684 scope"),(0,r.kt)("p",null,"\u5728\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\uff0c\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u8c03\u7528\u4e00\u4e9b API\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"createCanvasContext"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"createSelectorQuery")," \u7b49\u65f6\uff0c\u9700\u8981\u4f20\u5165\u6307\u5411\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u81ea\u8eab\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u8fd9\u91cc\u6682\u4e14\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"scope"),"\u3002"),(0,r.kt)("p",null,"\u4f46\u662f Taro 3 \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<template>")," \u6807\u7b7e\u8fdb\u884c\u6e32\u67d3\uff0c\u4e00\u822c\u4e0d\u4f1a\u4f7f\u7528\u4e0a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u56e0\u6b64\u4e00\u822c\u4e0d\u9700\u8981\u4f20\u5165\u3002"),(0,r.kt)("p",null,"\u53ea\u6709\u4e24\u79cd\u60c5\u51b5\u4f1a\u4f7f\u7528\u4e0a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u8fd9\u65f6\u9700\u8981\u6b63\u786e\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"scope"),"\uff0c\u5426\u5219\u6b64\u7c7b API \u7684\u8c03\u7528\u4f1a\u5931\u8d25\u3002"),(0,r.kt)("h3",c({},{id:"1-\u5c42\u7ea7\u8fc7\u6df1"}),"1. \u5c42\u7ea7\u8fc7\u6df1"),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("a",c({parentName:"p"},{href:"./platform-plugin/template#%E9%80%92%E5%BD%92%E4%B8%8E%E9%9D%9E%E9%80%92%E5%BD%92%E6%A8%A1%E6%9D%BF"}),"\u6a21\u677f\u4e0d\u652f\u6301\u9012\u5f52"),"\u7684\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1\u3001QQ\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7b49\uff09\uff0c\u5f53\u9875\u9762\u5143\u7d20\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7\u4e00\u5b9a\u5c42\u6570\uff08\u9ed8\u8ba4\u4e3a 16 \u5c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,r.kt)("a",c({parentName:"p"},{href:"config-detail#minibaselevel"}),"baseLevel")," \u4fee\u6539\uff09\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u534f\u52a9\u9012\u5f52\u3002"),(0,r.kt)("p",null,"\u6b64\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," \u6ca1\u6709\u66b4\u9732\u7ed9\u5f00\u53d1\u8005\uff0c\u56e0\u6b64\u5c42\u7ea7\u8fc7\u6df1\u4e14\u9700\u8981\u8c03\u7528\u6b64\u7c7b API \u65f6\uff0c\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomWrapper>")," \u7ec4\u4ef6\u5305\u88f9\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u8ba8\u8bba\uff1a",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/9357"}),"#9357"),"\u3002"),(0,r.kt)("h3",c({},{id:"2-\u4f7f\u7528\u4e86-customwrapper"}),"2. \u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"h3"},"<CustomWrapper>")),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"optimized#2-customwrapper-%E7%BB%84%E4%BB%B6"}),(0,r.kt)("inlineCode",{parentName:"a"},"<CustomWrapper>"))," \u7ec4\u4ef6\u5e38\u7528\u4e8e\u4f18\u5316\u66f4\u65b0\u6027\u80fd\u3002\u5b83\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"Taro v3.6.3+ \u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\uff1a"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,r.kt)(a.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"class Index extends React.Component {\n  onReady () {\n    // \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\n    const ctx = document.getElementById('demo').ctx\n  }\n\n  render () {\n    return (\n      <View className='index'>\n        <CustomWrapper id='demo'>\n          <Text>Hello world!</Text>\n        </CustomWrapper>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <custom-wrapper id=\"demo\" />\n</template>\n\n<script>\n  import Taro from '@tarojs/taro'\n\n  export default {\n    onReady() {\n      // \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\n      const ctx = document.getElementById('demo').ctx\n    },\n  }\n<\/script>\n")))),(0,r.kt)("p",null,"Taro v3.6.2 \u53ca\u4ee5\u4e0b\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\uff08\u9700\u8981\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"selectComponent")," API\uff09\uff1a"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,r.kt)(a.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<CustomWrapper id=\"demo\" />\n\nconst page = Taro.getCurrentInstance().page\n// \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\nconst scope = page.selectComponent('#demo')\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <custom-wrapper id=\"demo\" />\n</template>\n\n<script>\n  import Taro from '@tarojs/taro'\n\n  export default {\n    onReady() {\n      const page = Taro.getCurrentInstance().page\n      // \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\n      const scope = page.selectComponent('#demo')\n    },\n  }\n<\/script>\n")))),(0,r.kt)("h2",c({},{id:"dataset"}),"dataset"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u6982\u5ff5\u5728 Taro \u4e2d\u5f97\u5230\u90e8\u5206\u5b9e\u73b0\uff0c\u8be6\u7ec6\u8bf7\u770b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"./react-overall#dataset"}),"React dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"./vue-overall#dataset"}),"Vue dataset"))))}f.isMDXComponent=!0}}]);