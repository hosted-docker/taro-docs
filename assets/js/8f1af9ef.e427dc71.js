"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12688],{79874:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(93106);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},55256:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(93106),n=a(4706),o={tabItem:"tabItem_NDii"};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:a}){return r.createElement("div",l({role:"tabpanel",className:(0,n.Z)(o.tabItem,a)},{hidden:t}),e)}},51417:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(93106),n=a(4706),o=a(76075),l=a(27907),i=a(48505),c=a(29136),s=a(6099);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e){return function(e){var t,a;return null!==(a=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==a?a:[]}(e).map((({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r})))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const a=(0,l.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,i._X)(n),c=(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){u(e,t,a[t])}))}return e}({},a.location,{search:t.toString()}))}),[n,a]);return[o,c]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var a;const r=null!==(a=t.find((e=>e.default)))&&void 0!==a?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=d({queryString:a,groupId:n}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,s.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),v=(()=>{const e=null!=c?c:p;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var v=a(27614),g={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},b.apply(this,arguments)}function k({className:e,block:t,selectedValue:a,selectValue:l,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==a&&(s(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;var a;t=null!==(a=c[r])&&void 0!==a?a:c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;var r;t=null!==(r=c[a])&&void 0!==r?r:c[c.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>r.createElement("li",b({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:u},o,{className:(0,n.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function N({lazy:e,children:t,selectedValue:a}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",g.tabList)},r.createElement(k,b({},e,t)),r.createElement(N,b({},e,t)))}function y(e){const t=(0,v.Z)();return r.createElement(w,b({key:String(t)},e))}},59852:function(e,t,a){a.d(t,{gQ:function(){return c},hn:function(){return l},p6:function(){return i}});var r=a(93106);const n="#61dafb",o="#4fc08d",l=()=>r.createElement("span",{className:"footer_link_connect_wrap"},r.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.createElement("span",{className:"wechat_qrcode_icon"},r.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},r.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),r.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),r.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),r.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),r.createElement("span",{className:"footer_link_wechat_img inline"},r.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function i({version:e=""}){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:o}},"Vue",e?` ${e}`:""))}function c(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:n}},"React"))}},66070:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var r=a(93106),n=a(79874),o=a(18779),l=a(59852),i=a(55256),c=a(51417);var s=function(){return(0,r.useEffect)((()=>{window.LRT&&window.LRT.register({zoneId:"1485579794201481218",debug:!1,positionId:"1485796590212263937",type:"img",containerId:"news",backupUrl:"https://img20.360buyimg.com/img/jfs/t1/220737/13/10934/81315/61dd7009Ead9f1ca0/81f28ce8f80dce8e.jpg",backupLink:"https://mp.weixin.qq.com/s/Hud405mLileIEzHX3Z-ueQ",onClick(e,{url:t}){window.open(t)}})}),[]),r.createElement("div",{id:"news",style:{width:"100%",height:"auto",cursor:"pointer"}})};function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const m={title:"Taro \u4ecb\u7ecd"},f=void 0,d={unversionedId:"README",id:"version-3.x/README",title:"Taro \u4ecb\u7ecd",description:"\u7b80\u4ecb",source:"@site/versioned_docs/version-3.x/README.mdx",sourceDirName:".",slug:"/",permalink:"/mirror/taro-docs/docs/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/README.mdx",tags:[],version:"3.x",frontMatter:{title:"Taro \u4ecb\u7ecd"},sidebar:"docs",next:{title:"Taro \u7248\u672c\u8bf4\u660e",permalink:"/mirror/taro-docs/docs/version"}},h={},v=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",level:3},{value:"\u6846\u67b6\u652f\u6301",id:"\u6846\u67b6\u652f\u6301",level:3},{value:"\u65b0\u95fb\u8d44\u8baf",id:"\u65b0\u95fb\u8d44\u8baf",level:2},{value:"Taro UI",id:"taro-ui",level:2},{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",level:2},{value:"\u9879\u76ee\u72b6\u6001",id:"\u9879\u76ee\u72b6\u6001",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2}],g={toc:v},b="wrapper";function k(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)(b,u({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Taro")," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4f7f\u7528 React/Vue/Nerv \u7b49\u6846\u67b6\u6765\u5f00\u53d1 ",(0,n.kt)("a",u({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u5fae\u4fe1")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://mp.jd.com/?entrance=taro"}),"\u4eac\u4e1c")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://smartprogram.baidu.com/"}),"\u767e\u5ea6")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://mini.open.alipay.com/"}),"\u652f\u4ed8\u5b9d")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.open-douyin.com/"}),"\u5b57\u8282\u8df3\u52a8")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://q.qq.com/"}),"QQ")," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN"}),"\u98de\u4e66")," \u5c0f\u7a0b\u5e8f / H5 / RN \u7b49\u5e94\u7528\u3002"),(0,n.kt)("p",null,"\u73b0\u5982\u4eca\u5e02\u9762\u4e0a\u7aef\u7684\u5f62\u6001\u591a\u79cd\u591a\u6837\uff0cWeb\u3001React Native\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\u5404\u79cd\u7aef\u5927\u884c\u5176\u9053\u3002\u5f53\u4e1a\u52a1\u8981\u6c42\u540c\u65f6\u5728\u4e0d\u540c\u7684\u7aef\u90fd\u8981\u6c42\u6709\u6240\u8868\u73b0\u7684\u65f6\u5019\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u7aef\u53bb\u7f16\u5199\u591a\u5957\u4ee3\u7801\u7684\u6210\u672c\u663e\u7136\u975e\u5e38\u9ad8\uff0c\u8fd9\u65f6\u5019\u53ea\u7f16\u5199\u4e00\u5957\u4ee3\u7801\u5c31\u80fd\u591f\u9002\u914d\u5230\u591a\u7aef\u7684\u80fd\u529b\u5c31\u663e\u5f97\u6781\u4e3a\u9700\u8981\u3002"),(0,n.kt)("h2",u({},{id:"\u7279\u6027"}),"\u7279\u6027"),(0,n.kt)("h3",u({},{id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301"}),"\u591a\u7aef\u8f6c\u6362\u652f\u6301"),(0,n.kt)("p",null,"Taro 3 \u53ef\u4ee5\u652f\u6301\u8f6c\u6362\u5230 H5\u3001ReactNative \u4ee5\u53ca\u4efb\u610f\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u5b98\u65b9\u652f\u6301\u8f6c\u6362\u7684\u5e73\u53f0\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/zh-CN/docs/Web?from=taro"}),(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," H5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/?from=taro"}),(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform",width:"25px"})," React Native")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/?from=taro"}),(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://mp.jd.com/?from=taro"}),(0,n.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:a(24238).Z,className:"icon_platform",width:"25px"})," \u4eac\u4e1c\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://smartprogram.baidu.com/developer/index.html?from=taro"}),(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," \u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://opendocs.alipay.com/mini/developer/getting-started?from=taro"}),(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview?from=taro"}),(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," \u6296\u97f3\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://q.qq.com/wiki/develop/miniprogram/frame/?from=taro"}),(0,n.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:a(49182).Z,className:"icon_platform",width:"25px"})," QQ \u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://open.dingtalk.com/document/org/develop-org-mini-programs?from=taro"}),(0,n.kt)("img",{title:"\u9489\u9489\u5c0f\u7a0b\u5e8f",src:a(96973).Z,className:"icon_platform",width:"25px"})," \u9489\u9489\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/qywx-dev.html?from=taro"}),(0,n.kt)("img",{title:"\u4f01\u4e1a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(59782).Z,className:"icon_platform",width:"25px"})," \u4f01\u4e1a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://opendocs.alipay.com/iot/multi-platform/vcs0fv?from=taro"}),(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," \u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro"}),(0,n.kt)("img",{title:"\u98de\u4e66\u5c0f\u7a0b\u5e8f",src:a(69345).Z,className:"icon_platform",width:"25px"})," \u98de\u4e66\u5c0f\u7a0b\u5e8f"))),(0,n.kt)("h3",u({},{id:"\u6846\u67b6\u652f\u6301"}),"\u6846\u67b6\u652f\u6301"),(0,n.kt)("p",null,"\u5728 Taro 3 \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5b8c\u6574\u7684 ",(0,n.kt)("a",u({parentName:"p"},{href:"https://react.dev/"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("img",{title:"react",src:a(62167).Z,className:"icon_platform",width:"25px"})," React"))," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://vuejs.org/"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("img",{title:"vue",src:a(73178).Z,className:"icon_platform",width:"25px"})," Vue"))," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://preactjs.com/"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("img",{title:"preact",src:a(76662).Z,className:"icon_platform",width:"25px"})," Preact"))," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://svelte.dev/"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("img",{title:"svelte",src:a(91330).Z,className:"icon_platform",width:"25px"})," Svelte"))," / ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/NervJS/nerv"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("img",{title:"nerv",src:a(89503).Z,className:"icon_platform",width:"25px"})," Nerv"))," \u5f00\u53d1\u4f53\u9a8c\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"./react-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014React")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"./vue-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"./vue3"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"./preact"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Preact"))),(0,n.kt)(c.Z,{defaultValue:"React",values:[{label:(0,n.kt)(l.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,n.kt)(l.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class Index extends Component {\n  state = {\n    msg: 'Hello World\uff01',\n  }\n\n  componentWillMount() {}\n\n  componentDidShow() {}\n\n  componentDidHide() {}\n\n  render() {\n    return (\n      <View className=\"index\">\n        <Text>{this.state.msg}</Text>\n      </View>\n    )\n  }\n}\n"))),(0,n.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view class=\"index\">\n    <text>{{msg}}</text>\n  </view>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        msg: 'Hello World\uff01',\n      }\n    },\n    created() {},\n    onShow() {},\n    onHide() {},\n  }\n<\/script>\n")))),(0,n.kt)("h2",u({},{id:"\u65b0\u95fb\u8d44\u8baf"}),"\u65b0\u95fb\u8d44\u8baf"),(0,n.kt)(s,{mdxType:"News"}),(0,n.kt)("h2",u({},{id:"taro-ui"}),"Taro UI"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Taro 3 \u53ea\u80fd\u914d\u5408\u4f7f\u7528 taro-ui@next \u7248\u672c"),(0,n.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u547d\u4ee4\uff1a ",(0,n.kt)("inlineCode",{parentName:"p"},"npm i taro-ui@next"))),(0,n.kt)("p",null,"\u4e00\u6b3e\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro")," \u6846\u67b6\u5f00\u53d1\u7684\u591a\u7aef UI \u7ec4\u4ef6\u5e93\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://taro-ui.jd.com"}),"Taro UI")," \u7279\u6027\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"Taro")," \u5f00\u53d1 UI \u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u5957\u7ec4\u4ef6\u53ef\u4ee5\u5728\u591a\u7aef\u9002\u914d\u8fd0\u884c\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"ReactNative")," \u7aef\u6682\u4e0d\u652f\u6301\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u53cb\u597d\u7684 API\uff0c\u53ef\u7075\u6d3b\u7684\u4f7f\u7528\u7ec4\u4ef6")),(0,n.kt)("h2",u({},{id:"\u5b66\u4e60\u8d44\u6e90"}),"\u5b66\u4e60\u8d44\u6e90"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/blog"}),"\u3010\u8d44\u8baf\u3011Taro \u56e2\u961f\u535a\u5ba2")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/guide"}),"\u3010\u6559\u7a0b\u30115 \u5206\u949f\u4e0a\u624b Taro \u5f00\u53d1")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247484205&idx=1&sn=935bb7a35c11c33563eeb7c3aaca3321&chksm=fd2bab04ca5c2212b4cd8aeb5858bd08517aeb31e20727b22d1eee00b394184e7e61359e7dd9&token=1180618535&lang=zh_CN#rd"}),"\u3010\u89c6\u9891\u30115 \u5206\u949f\u5feb\u901f\u4e0a\u624b Taro \u5f00\u53d1\u5c0f\u7a0b\u5e8f")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d"}),"\u3010\u6398\u91d1\u5c0f\u518c\u3011Taro \u591a\u7aef\u5f00\u53d1\u5b9e\u73b0\u539f\u7406\u4e0e\u5b9e\u6218")," (\u5df2\u4e0b\u67b6\uff0c\u4ec5\u8d2d\u4e70\u7528\u6237\u53ef\u9605)"),(0,n.kt)("p",null,"\u66f4\u591a\u7684\u8d44\u6e90\u8bf7\u70b9\u51fb\u67e5\u770b ",(0,n.kt)("a",u({parentName:"p"},{href:"/mirror/taro-docs/docs/composition"}),"\u66f4\u591a\u8d44\u6e90")," \uff0c\u5982\u679c\u60a8\u6709\u597d\u7684\u8d44\u6e90\u6216\u6559\u7a0b\u548c\u5927\u5bb6\u5206\u4eab\uff0c\u6b22\u8fce\u63d0\u4ea4\u8d44\u6e90\u5230 ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/NervJS/awesome-taro"}),"awesome-taro"),"\u3002"),(0,n.kt)("h2",u({},{id:"\u9879\u76ee\u72b6\u6001"}),"\u9879\u76ee\u72b6\u6001"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://repobeats.axiom.co/api/embed/275806b6f177f7e4c005e956d94440562635c36d.svg",alt:"[](https://github.com/NervJS/taro/pulse)",title:"Repobeats analytics image"}))),(0,n.kt)("h2",u({},{id:"\u4f7f\u7528\u6848\u4f8b"}),"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("p",null,"Taro \u5df2\u7ecf\u6295\u5165\u4e86\u6211\u4eec\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4e1a\u754c\u4e5f\u5728\u5e7f\u6cdb\u5730\u4f7f\u7528 Taro \u5f00\u53d1\u591a\u7aef\u5e94\u7528\u3002"),(0,n.kt)(o.Z,{to:"/showcase",mdxType:"Link"},"\u67e5\u770b\u66f4\u591a\u7684\u6848\u4f8b\uff0c\u8bf7\u70b9\u51fb"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/244"}),"\u6211\u4eec\u6b63\u5728\u5f81\u96c6\u66f4\u591a\u4f18\u79c0\u6848\u4f8b\uff0c\u6b22\u8fce\u70b9\u51fb\u63d0\u4ea4")),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://raw.githubusercontent.com/NervJS/taro-user-cases/master/user-cases.jpg",alt:"[](https://nervjs.github.io/taro-user-cases/)"}))))}k.isMDXComponent=!0},89503:function(e,t){t.Z="data:image/png;base64,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"},76662:function(e,t,a){t.Z=a.p+"assets/images/preact-68c69a4cef45e1be5985460257983da3.png"},62167:function(e,t,a){t.Z=a.p+"assets/images/react-81ed438b18e24116794df3148c0e1eaa.png"},91330:function(e,t,a){t.Z=a.p+"assets/images/svelte-a7bfb5d80483441bcd32443d1adb0ae6.png"},73178:function(e,t,a){t.Z=a.p+"assets/images/vue-be5842d62a326b39e66e79386b9df33b.png"},79046:function(e,t,a){t.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},96973:function(e,t,a){t.Z=a.p+"assets/images/ding-talk-b5a9f3f70aae5365787ac12a294e1535.png"},34208:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},24238:function(e,t,a){t.Z=a.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},69345:function(e,t,a){t.Z=a.p+"assets/images/lark-b264e88fd335c5d932313f1f7e612b03.png"},49182:function(e,t,a){t.Z=a.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},20303:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},26443:function(e,t,a){t.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},24997:function(e,t,a){t.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"},59782:function(e,t,a){t.Z=a.p+"assets/images/wework-d23d31eee89d30c4909b90d328ea57eb.png"}}]);