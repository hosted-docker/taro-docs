"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6446],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95113:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(93106),r=n(4706),l="tabItem_xXVp";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function c({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},78288:function(t,e,n){n.d(e,{Z:function(){return E}});var a=n(93106),r=n(4706),l=n(45388),i=n(24755),c=n(89476),o=n(26779),p=n(57191);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return function(t){var e,n;return null!==(n=null===(e=a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:a}})=>({value:t,label:e,attributes:n,default:a})))}function d(t){const{values:e,children:n}=t;return(0,a.useMemo)((()=>{const t=null!=e?e:s(n);return function(t){const e=(0,o.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function u({value:t,tabValues:e}){return e.some((e=>e.value===t))}function g({queryString:t=!1,groupId:e}){const n=(0,i.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,c._X)(r),o=(0,a.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){m(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[r,n]);return[l,o]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,l=d(t),[i,c]=(0,a.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const a=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,m]=g({queryString:n,groupId:r}),[s,k]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,r]=(0,p.Nk)(e);return[n,(0,a.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),h=(()=>{const t=null!=o?o:s;return u({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((t=>{if(!u({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);c(t),m(t),k(t)}),[m,k,l]),tabValues:l}}var h=n(87650),N="tabList_ulmA",f="tabItem_Zt3y";function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},v.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:i,tabValues:c}){const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=t=>{const e=t.currentTarget,a=o.indexOf(e),r=c[a].value;r!==n&&(p(e),i(r))},s=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=o.indexOf(t.currentTarget)+1;var n;e=null!==(n=o[a])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(t.currentTarget)-1;var a;e=null!==(a=o[n])&&void 0!==a?a:o[o.length-1];break}}null==e||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},c.map((({value:t,label:e,attributes:l})=>a.createElement("li",v({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>o.push(t),onKeyDown:s,onClick:m},l,{className:(0,r.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function y({lazy:t,children:e,selectedValue:n}){const r=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=k(t);return a.createElement("div",{className:(0,r.Z)("tabs-container",N)},a.createElement(b,v({},t,e)),a.createElement(y,v({},t,e)))}function E(t){const e=(0,h.Z)();return a.createElement(w,v({key:String(e)},t))}},2071:function(t,e,n){n.d(e,{gQ:function(){return i},hn:function(){return r},p6:function(){return l}});var a=n(93106);const r=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l({version:t=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:"#4fc08d"}},"Vue",t?` ${t}`:""))}function i(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},45663:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});n(93106);var a=n(79874),r=n(2071),l=n(78288),i=n(95113);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"Switch",sidebar_label:"Switch"},m=void 0,s={unversionedId:"components/forms/switch",id:"version-3.x/components/forms/switch",title:"Switch",description:"\u5f00\u5173\u9009\u62e9\u5668",source:"@site/versioned_docs/version-3.x/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/mirror/taro-docs/docs/components/forms/switch",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/switch.md",tags:[],version:"3.x",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"components",previous:{title:"Slider",permalink:"/mirror/taro-docs/docs/components/forms/slider"},next:{title:"Textarea",permalink:"/mirror/taro-docs/docs/components/forms/textarea"}},d={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"SwitchProps",id:"switchprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3}],g={toc:u};function k(t){var{components:e}=t,p=o(t,["components"]);return(0,a.kt)("wrapper",c({},g,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f00\u5173\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(92207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",c({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",c({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SwitchProps>\n")),(0,a.kt)("h2",c({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class=\'components-page\'>\n    <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n    <switch :checked="true" />\n    <switch />\n    <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</text>\n    <switch :checked="true" />\n    <switch />\n  </view>\n</template>\n')))),(0,a.kt)("h2",c({},{id:"switchprops"}),"SwitchProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"checked"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u662f\u5426\u9009\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"disabled"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),'"switch" or "checkbox"'),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"switch"')),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6837\u5f0f\uff0c\u6709\u6548\u503c\uff1aswitch, checkbox")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"#04BE02"')),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"switch \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u7ec4\u4ef6\u540d\u5b57\uff0c\u7528\u4e8e\u8868\u5355\u63d0\u4ea4\u83b7\u53d6\u6570\u636e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"controlled"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u662f\u5426\u4e3a\u53d7\u63a7\u7ec4\u4ef6\uff0c\u4e3a true \u65f6\uff0cchecked \u4f1a\u5b8c\u5168\u53d7 setData \u63a7\u5236\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"checked \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6")))),(0,a.kt)("h3",c({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.checked"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.disabled"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.type"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.color"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.name"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.controlled"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"SwitchProps.onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",c({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))))}k.isMDXComponent=!0},68525:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(t,e,n){e.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(t,e,n){e.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},519:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);