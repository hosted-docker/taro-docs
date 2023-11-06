"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31697],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(93106),r=n(4706),l="tabItem_xXVp";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function u({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(93106),r=n(4706),l=n(45388),o=n(24755),u=n(89476),i=n(26779),c=n(57191);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,u._X)(r),i=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[r,n]);return[l,i]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,u]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:n,groupId:r}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=null!=i?i:p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var g=n(87650),v="tabList_ulmA",k="tabItem_Zt3y";function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function y({className:e,block:t,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),s=e=>{const t=e.currentTarget,a=i.indexOf(t),r=u[a].value;r!==n&&(c(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[a])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var a;t=null!==(a=i[n])&&void 0!==a?a:i[i.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:l})=>a.createElement("li",h({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:s},l,{className:(0,r.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function T({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v)},a.createElement(y,h({},e,t)),a.createElement(T,h({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(N,h({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return l},p6:function(){return r}});var a=n(93106);function r({version:e=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:"#4fc08d"}},"Vue",e?` ${e}`:""))}function l(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},47848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});n(93106);var a=n(79874),r=n(2071),l=n(95113),o=n(78288);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 Tabbar"},s=void 0,p={unversionedId:"custom-tabbar",id:"version-3.x/custom-tabbar",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 Tabbar",description:"Taro \u652f\u6301\u4f7f\u7528 React\u3001Vue\u3001\u6216\u8005\u5c0f\u7a0b\u5e8f\u539f\u751f\u8bed\u6cd5\u6765\u7f16\u5199\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 TabBar \u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-3.x/custom-tabbar.mdx",sourceDirName:".",slug:"/custom-tabbar",permalink:"/mirror/taro-docs/en/docs/custom-tabbar",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/custom-tabbar.mdx",tags:[],version:"3.x",frontMatter:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 Tabbar"},sidebar:"docs",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u72ec\u7acb\u5206\u5305",permalink:"/mirror/taro-docs/en/docs/independent-subpackage"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/mirror/taro-docs/en/docs/mini-troubleshooting"}},m={},d=[{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u914d\u7f6e\u4fe1\u606f",id:"\u914d\u7f6e\u4fe1\u606f",level:3},{value:"\u6dfb\u52a0 custom-tab-bar",id:"\u6dfb\u52a0-custom-tab-bar",level:3},{value:"\u56fe\u7247\u8d44\u6e90\u5f15\u7528",id:"\u56fe\u7247\u8d44\u6e90\u5f15\u7528",level:3},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",level:3},{value:"1. \u539f\u751f\u5199\u6cd5",id:"1-\u539f\u751f\u5199\u6cd5",level:4},{value:"2. React / Vue",id:"2-react--vue",level:4},{value:"\u7ec4\u4ef6\u914d\u7f6e\u9879",id:"\u7ec4\u4ef6\u914d\u7f6e\u9879",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u95ea\u70c1\u95ee\u9898",id:"\u95ea\u70c1\u95ee\u9898",level:3},{value:"\u7b2c\u4e00\u6b21\u52a0\u8f7d TabBar \u9875\u65f6 TabBar \u4f1a\u95ea\u70c1",id:"\u7b2c\u4e00\u6b21\u52a0\u8f7d-tabbar-\u9875\u65f6-tabbar-\u4f1a\u95ea\u70c1",level:4},{value:"\u5207\u6362 Tab \u65f6\u56fe\u7247\u95ea\u70c1",id:"\u5207\u6362-tab-\u65f6\u56fe\u7247\u95ea\u70c1",level:4},{value:"\u76f8\u5173\u8ba8\u8bba",id:"\u76f8\u5173\u8ba8\u8bba",level:3}],b={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",u({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro \u652f\u6301\u4f7f\u7528 React\u3001Vue\u3001\u6216\u8005\u5c0f\u7a0b\u5e8f\u539f\u751f\u8bed\u6cd5\u6765\u7f16\u5199\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 TabBar \u7ec4\u4ef6\u3002"),(0,a.kt)("h2",u({},{id:"\u793a\u4f8b\u9879\u76ee"}),"\u793a\u4f8b\u9879\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-react"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 TabBar\uff08React\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-vue3"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 TabBar\uff08Vue3\uff09"))),(0,a.kt)("h2",u({},{id:"\u5982\u4f55\u4f7f\u7528"}),"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u914d\u7f6e\u65b9\u6cd5\u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u76f8\u540c\uff0c\u5f00\u53d1\u524d\u8bf7\u4ed4\u7ec6\u9605\u8bfb ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html"}),"\u300a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49 TabBar \u6587\u6863\u300b"),"\u3002"),(0,a.kt)("h3",u({},{id:"\u914d\u7f6e\u4fe1\u606f"}),"\u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"app.config")," \u4e2d\u6309\u6b63\u5e38\u586b\u5199 ",(0,a.kt)("strong",{parentName:"li"},"tabBar \u9879"),"\u7684\u76f8\u5173\u914d\u7f6e\uff08\u4e3a\u4e86\u5411\u4e0b\u517c\u5bb9\uff09\uff0c\u5e76\u628a ",(0,a.kt)("strong",{parentName:"li"},"tabBar \u9879"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"custom")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u4f5c\u4e3a TabBar \u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," \u91cc\u9700\u8981\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"li"},"usingComponents")," \u9879\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"app.config")," \u8bbe\u7f6e\u5168\u5c40\u5f00\u542f\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="app.config.js" {3}',title:'"app.config.js"',"{3}":!0}),"export default {\n  tabBar: {\n    custom: true,\n    color: '#000000',\n    selectedColor: '#000000',\n    backgroundColor: '#000000',\n    list: [\n      {\n        pagePath: 'page/component/index',\n        text: '\u7ec4\u4ef6',\n      },\n      {\n        pagePath: 'page/API/index',\n        text: '\u63a5\u53e3',\n      },\n    ],\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="page/component/index.config.js" {3}',title:'"page/component/index.config.js"',"{3}":!0}),"export default {\n  navigationBarTitleText: '\u7ec4\u4ef6\u9875',\n  usingComponents: {},\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="page/API/index.config.js" {3}',title:'"page/API/index.config.js"',"{3}":!0}),"export default {\n  navigationBarTitleText: '\u63a5\u53e3\u9875',\n  usingComponents: {},\n}\n")),(0,a.kt)("h3",u({},{id:"\u6dfb\u52a0-custom-tab-bar"}),"\u6dfb\u52a0 custom-tab-bar"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"src \u76ee\u5f55"),"\u4e0b\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"custom-tab-bar")," \u76ee\u5f55\uff0c\u5728\u91cc\u9762\u4e66\u5199\u7ec4\u4ef6\uff0c\u652f\u6301 React\u3001Vue \u548c\u539f\u751f\u5199\u6cd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"React\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"\u251c\u2500\u2500 config\n\u251c\u2500\u2500 src\n|   \u2514\u2500\u2500 custom-tab-bar\n|       \u251c\u2500\u2500 index.json.js\n|       \u2514\u2500\u2500 index.jsx\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vue\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"\u251c\u2500\u2500 config\n\u251c\u2500\u2500 src\n|   \u2514\u2500\u2500 custom-tab-bar\n|       \u251c\u2500\u2500 index.json.js\n|       \u2514\u2500\u2500 index.vue\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u539f\u751f\u5199\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"\u251c\u2500\u2500 config\n\u251c\u2500\u2500 src\n|   \u2514\u2500\u2500 custom-tab-bar\n|       \u251c\u2500\u2500 index.js\n|       \u251c\u2500\u2500 index.json\n|       \u251c\u2500\u2500 index.wxss\n|       \u2514\u2500\u2500 index.wxml\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("h3",u({},{id:"\u56fe\u7247\u8d44\u6e90\u5f15\u7528"}),"\u56fe\u7247\u8d44\u6e90\u5f15\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528 React/Vue \u5f00\u53d1\u81ea\u5b9a\u4e49 TabBar \u65f6\uff0c\u53ef\u4ee5\u4e0d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," \u5f15\u7528\u56fe\u7247\u8d44\u6e90\uff08Taro \u4f1a\u81ea\u52a8\u6839\u636e TabBar \u914d\u7f6e\u5904\u7406\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"require")," \u6216\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"background-image")," \u65f6\u9700\u8981\u5173\u6ce8\u56fe\u7247\u662f\u5426\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"url-loader")," \u5904\u7406\u4e3a base64\uff0cbase64 \u7684\u56fe\u7247\u5728 TabBar \u4e2d\u4e0d\u80fd\u5c55\u793a\u3002"),(0,a.kt)("h3",u({},{id:"\u72b6\u6001\u7ba1\u7406"}),"\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("p",null,"\u9ed8\u8ba4 TabBar \u4e0e\u81ea\u5b9a\u4e49 TabBar \u7684\u6700\u5927\u4e0d\u540c\u70b9\u5728\u4e8e\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4 TabBar \u5728\u6240\u6709 TabBar \u9875\u5171\u4eab\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u800c\u81ea\u5b9a\u4e49 TabBar \u5728\u5404\u4e2a TabBar \u9875\u9762\u521d\u59cb\u5316\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u5b9e\u4f8b"),"\u3002"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\u5404\u4e2a TabBar \u9875\u5185\u7684\u81ea\u5b9a\u4e49 TabBar \u7ec4\u4ef6\u5b9e\u4f8b\u7684\u72b6\u6001\u662f\u4e0d\u5171\u4eab\u7684\u3002\u56e0\u6b64\u5bf9 TabBar \u7684\u72b6\u6001\u7ba1\u7406\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"selected")," \u9009\u4e2d\u6001\uff09\u5219\u5c24\u4e3a\u91cd\u8981\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u5199\u6cd5\u7684\u81ea\u5b9a\u4e49 TabBar\uff0cTaro \u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff1a"),(0,a.kt)("h4",u({},{id:"1-\u539f\u751f\u5199\u6cd5"}),"1. \u539f\u751f\u5199\u6cd5"),(0,a.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u539f\u751f\u5199\u6cd5\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getTabBar")," \u65b9\u6cd5\u8fdb\u884c\u7ba1\u7406\uff0c\u5982\u679c\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u662f\u4f7f\u7528\u539f\u751f\u5199\u6cd5\u7f16\u5199\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",u({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81"}),"\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u63d0\u4f9b\u7684\u793a\u4f8b"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u552f\u4e00\u9700\u8981\u6ce8\u610f\u7684\u662f"),"\uff0c\u5728\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u662f\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.getTabBar"),"\uff0c\u4f46 Taro \u7684\u9875\u9762\u662f React/Vue \u7ec4\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u7684\u5e76\u4e0d\u662f\u539f\u751f\u9875\u9762\u5bf9\u8c61\u3002\u56e0\u6b64\u9700\u8981\u5148\u83b7\u53d6\u539f\u751f\u9875\u9762\u5bf9\u8c61\u518d\u8fdb\u884c\u8c03\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// \u9875\u9762 onShow \u65f6\nTaro.getCurrentInstance().page.getTabBar()\n")),(0,a.kt)("h4",u({},{id:"2-react--vue"}),"2. React / Vue"),(0,a.kt)("p",null,"React \u548c Vue \u63a8\u8350\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u72b6\u6001\u7ba1\u7406\u5de5\u5177"),"\uff08Redux\u3001Vuex \u7b49\uff09\u5bf9 TabBar \u9875\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\u3002\u4f18\u70b9\u5728\u4e8e\u65e0\u987b\u4fb5\u5165\u5404\u4e2a TabBar \u9875\u9762\u7684\u4ee3\u7801\uff0c\u903b\u8f91\u53ef\u4ee5\u5f52\u96c6\u5728 TabBar \u7ec4\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u4e0d\u5e0c\u671b\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u5de5\u5177\uff0cTaro \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.getTabBar")," API \u4ee5\u83b7\u53d6\u81ea\u5b9a\u4e49 TabBar \u7ec4\u4ef6\uff08React/Vue \u7ec4\u4ef6\uff09\uff0c\u7136\u540e\u5f00\u53d1\u8005\u53ef\u4ee5\u8c03\u7528\u5b83\u4e0a\u9762\u7684\u65b9\u6cd5\u53bb\u66f4\u65b0 TabBar \u7ec4\u4ef6\u7684\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// \u9875\u9762 onShow \u65f6\nconst pageObj = Taro.getCurrentInstance().page\nconst tabbar = Taro.getTabBar(pageObj)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",u({parentName:"p"},{href:"./custom-tabbar#%E7%A4%BA%E4%BE%8B%E9%A1%B9%E7%9B%AE"}),"\u793a\u4f8b\u9879\u76ee")," \u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4f8b\u5b50\uff0cReact \u7248\u672c\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.getTabBar")," \u7ba1\u7406\u72b6\u6001\uff0cVue3 \u7248\u672c\u7684\u4f8b\u5b50\u5219\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u6765\u7ba1\u7406\u72b6\u6001\u3002")),(0,a.kt)("h3",u({},{id:"\u7ec4\u4ef6\u914d\u7f6e\u9879"}),"\u7ec4\u4ef6\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49 TabBar \u7ec4\u4ef6\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," \u6784\u9020\u5668\u6784\u9020\uff0c\u5f00\u53d1\u8005\u5728\u5904\u7406\u6837\u5f0f\u9694\u79bb\u7b49\u95ee\u9898\u65f6\u53ef\u4ee5\u9700\u8981\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," \u8fdb\u884c\u914d\u7f6e\u3002\u8fd9\u65f6\u5f00\u53d1\u8005\u53ef\u4ee5\u7ed9 React/Vue \u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8fd9\u4e9b\u914d\u7f6e\u9879\u5c5e\u6027\uff0cTaro \u4f1a\u628a\u5b83\u4eec\u653e\u7f6e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," \u6784\u9020\u5bf9\u8c61\u4e0a\uff0c\u76ee\u524d\u652f\u6301\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"externalClasses"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"behaviors"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f8b\u5b50\uff1a")),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"// Class Component\nclass CustomTabBar extends Component {\n  static options = {\n    addGlobalClass: true,\n  }\n}\n\n// Functional Component\nfunction CustomTabBar() {}\nCustomTabBar.options = {\n  addGlobalClass: true,\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<script>\n  // \u53ea\u652f\u6301 Options API \u5199\u6cd5\uff0c\u4e0d\u652f\u6301 <script setup>\n  export default {\n    options: {\n      addGlobalClass: true,\n    },\n  }\n<\/script>\n")))),(0,a.kt)("h2",u({},{id:"\u5e38\u89c1\u95ee\u9898"}),"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",u({},{id:"\u95ea\u70c1\u95ee\u9898"}),"\u95ea\u70c1\u95ee\u9898"),(0,a.kt)("h4",u({},{id:"\u7b2c\u4e00\u6b21\u52a0\u8f7d-tabbar-\u9875\u65f6-tabbar-\u4f1a\u95ea\u70c1"}),"\u7b2c\u4e00\u6b21\u52a0\u8f7d TabBar \u9875\u65f6 TabBar \u4f1a\u95ea\u70c1"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49 TabBar \u5728\u5404\u4e2a TabBar \u9875\u9762\u521d\u59cb\u5316\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u5bfc\u81f4\u3002\u53ef\u4ee5\u5230\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u793e\u533a\u5bfb\u627e\u76f8\u5173\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("h4",u({},{id:"\u5207\u6362-tab-\u65f6\u56fe\u7247\u95ea\u70c1"}),"\u5207\u6362 Tab \u65f6\u56fe\u7247\u95ea\u70c1"),(0,a.kt)("p",null,"\u5c3d\u91cf\u4f7f\u7528\u672c\u5730\u56fe\u7247\u6216 iconfont\u3002"),(0,a.kt)("h3",u({},{id:"\u76f8\u5173\u8ba8\u8bba"}),"\u76f8\u5173\u8ba8\u8bba"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7302"}),"https://github.com/NervJS/taro/issues/7302"))))}f.isMDXComponent=!0}}]);