"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59187],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),s=o(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95113:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(93106),r=n(4706),l="tabItem_xXVp";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function c({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},78288:function(t,e,n){n.d(e,{Z:function(){return E}});var a=n(93106),r=n(4706),l=n(45388),i=n(24755),c=n(89476),p=n(26779),o=n(57191);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return function(t){var e,n;return null!==(n=null===(e=a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:a}})=>({value:t,label:e,attributes:n,default:a})))}function s(t){const{values:e,children:n}=t;return(0,a.useMemo)((()=>{const t=null!=e?e:d(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function u({value:t,tabValues:e}){return e.some((e=>e.value===t))}function g({queryString:t=!1,groupId:e}){const n=(0,i.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,c._X)(r),p=(0,a.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){m(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[r,n]);return[l,p]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,l=s(t),[i,c]=(0,a.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const a=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[p,m]=g({queryString:n,groupId:r}),[d,k]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,r]=(0,o.Nk)(e);return[n,(0,a.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),N=(()=>{const t=null!=p?p:d;return u({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{N&&c(N)}),[N]);return{selectedValue:i,selectValue:(0,a.useCallback)((t=>{if(!u({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);c(t),m(t),k(t)}),[m,k,l]),tabValues:l}}var N=n(87650),v="tabList_ulmA",h="tabItem_Zt3y";function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},f.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:i,tabValues:c}){const p=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),m=t=>{const e=t.currentTarget,a=p.indexOf(e),r=c[a].value;r!==n&&(o(e),i(r))},d=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;var n;e=null!==(n=p[a])&&void 0!==n?n:p[0];break}case"ArrowLeft":{const n=p.indexOf(t.currentTarget)-1;var a;e=null!==(a=p[n])&&void 0!==a?a:p[p.length-1];break}}null==e||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},c.map((({value:t,label:e,attributes:l})=>a.createElement("li",f({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>p.push(t),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function y({lazy:t,children:e,selectedValue:n}){const r=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=k(t);return a.createElement("div",{className:(0,r.Z)("tabs-container",v)},a.createElement(b,f({},t,e)),a.createElement(y,f({},t,e)))}function E(t){const e=(0,N.Z)();return a.createElement(w,f({key:String(e)},t))}},2071:function(t,e,n){n.d(e,{gQ:function(){return i},hn:function(){return r},p6:function(){return l}});var a=n(93106);const r=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l({version:t=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:"#4fc08d"}},"Vue",t?` ${t}`:""))}function i(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},26610:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});n(93106);var a=n(79874),r=n(2071),l=n(78288),i=n(95113);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Canvas",sidebar_label:"Canvas"},m=void 0,d={unversionedId:"components/canvas/canvas",id:"components/canvas/canvas",title:"Canvas",description:"\u753b\u5e03",source:"@site/docs/components/canvas/canvas.md",sourceDirName:"components/canvas",slug:"/components/canvas/",permalink:"/mirror/taro-docs/docs/next/components/canvas/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/canvas/canvas.md",tags:[],version:"current",frontMatter:{title:"Canvas",sidebar_label:"Canvas"},sidebar:"components",previous:{title:"Map",permalink:"/mirror/taro-docs/docs/next/components/maps/map"},next:{title:"Ad",permalink:"/mirror/taro-docs/docs/next/components/open/ad"}},s={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"CanvasProps",id:"canvasprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3}],g={toc:u};function k(t){var{components:e}=t,o=p(t,["components"]);return(0,a.kt)("wrapper",c({},g,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u5e03"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Canvas />")," \u7ec4\u4ef6\u7684 RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(92207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",c({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",c({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CanvasProps>\n")),(0,a.kt)("h2",c({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    // \u5982\u679c\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u5219\u8981\u52a0\u4e0a id \u5c5e\u6027\uff0c\u503c\u548ccanvasId\u4e00\u81f4\n    return (\n      <Canvas style='width: 300px; height: 200px;' canvasId='canvas' />\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-html"}),'<template>\n  \x3c!-- \u5982\u679c\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u5219\u8981\u52a0\u4e0a id \u5c5e\u6027\uff0c\u503c\u548ccanvasId\u4e00\u81f4 --\x3e\n  <canvas style="width: 300px; height: 200px;" canvas-id="canvas" />\n</template>\n')))),(0,a.kt)("h2",c({},{id:"canvasprops"}),"CanvasProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"canvasId"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\u7b26\u3002",(0,a.kt)("br",null),"\u6ce8\u610f\uff1a\u540c\u4e00\u9875\u9762\u4e2d\u7684 id \u4e0d\u53ef\u91cd\u590d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onTouchStart"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onTouchMove"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onTouchEnd"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onTouchCancel"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onLongTap"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onErrorEventDetail>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = {errMsg: 'something wrong'}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onTap"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u70b9\u51fb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onReady"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"canvas \u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f\u89e6\u53d1\u3002")))),(0,a.kt)("h3",c({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.type"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.canvasId"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.disableScroll"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.id"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.width"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.height"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchStart"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchMove"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchEnd"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchCancel"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onLongTap"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onError"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onTap"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CanvasProps.onReady"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",c({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string"))))))}k.isMDXComponent=!0},68525:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(t,e,n){e.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(t,e,n){e.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},519:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);