"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90197],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),o="tabItem_xXVp";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(93106),a=n(4706),o=n(45388),l=n(24755),i=n(89476),u=n(26779),c=n(57191);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,i._X)(a),u=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[o,u]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:a}),[p,v]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),y=(()=>{const e=null!=u?u:p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var y=n(87650),k="tabList_ulmA",w="tabItem_Zt3y";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g({className:e,block:t,selectedValue:n,selectValue:l,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),s=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(c(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>r.createElement("li",b({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},o,{className:(0,a.Z)("tabs__item",w,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function T({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=v(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",k)},r.createElement(g,b({},e,t)),r.createElement(T,b({},e,t)))}function x(e){const t=(0,y.Z)();return r.createElement(h,b({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return o},p6:function(){return a}});var r=n(93106);function a({version:e=""}){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:"#4fc08d"}},"Vue",e?` ${e}`:""))}function o(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:"#61dafb"}},"React"))}},20580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874),a=n(2071),o=n(95113),l=n(78288);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"\u8282\u70b9\u83b7\u53d6"},s=void 0,p={unversionedId:"ref",id:"ref",title:"\u8282\u70b9\u83b7\u53d6",description:"\u5728 Web \u5f00\u53d1\u4e2d\uff0c\u5e38\u7528\u7684\u8282\u70b9\u83b7\u53d6\u65b9\u6cd5\u5305\u62ec\u4e86 document.getElementById \u7b49 DOM API\uff0c\u4ee5\u53ca\u5404\u5f00\u53d1\u6846\u67b6\u7684 ref \u8bed\u6cd5\u3002\u800c\u5728 Taro \u4e2d\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5efa\u8bae\u4f7f\u7528 ref \u8bed\u6cd5\u6765\u83b7\u53d6\u8282\u70b9\u3002\u4f46\u53d7\u9650\u4e8e\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u5b9e\u73b0\u673a\u5236\uff0c\u5982\u679c\u9700\u8981\u83b7\u53d6\u8282\u70b9\u7684\u5c3a\u5bf8\u3001\u5b9a\u4f4d\u7b49\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u4fe1\u606f\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528 Taro.createSelectorQuery API \u6765\u83b7\u53d6\u8282\u70b9\u3002",source:"@site/docs/ref.mdx",sourceDirName:".",slug:"/ref",permalink:"/mirror/taro-docs/en/docs/next/ref",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/ref.mdx",tags:[],version:"current",frontMatter:{title:"\u8282\u70b9\u83b7\u53d6"},sidebar:"docs",previous:{title:"Static resource references",permalink:"/mirror/taro-docs/en/docs/next/static-reference"},next:{title:"Cross-platform Development",permalink:"/mirror/taro-docs/en/docs/next/envs"}},m={},d=[{value:"ref \u8bed\u6cd5",id:"ref-\u8bed\u6cd5",level:2},{value:"\u83b7\u53d6\u8282\u70b9\u5c3a\u5bf8\u4fe1\u606f",id:"\u83b7\u53d6\u8282\u70b9\u5c3a\u5bf8\u4fe1\u606f",level:2},{value:"\u5728\u5b50\u7ec4\u4ef6\u4e2d\u83b7\u53d6",id:"\u5728\u5b50\u7ec4\u4ef6\u4e2d\u83b7\u53d6",level:3},{value:"\u5728\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4e2d\u83b7\u53d6",id:"\u5728\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4e2d\u83b7\u53d6",level:3},{value:"\u5728\u66f4\u65b0\u6e32\u67d3\u65f6\u83b7\u53d6",id:"\u5728\u66f4\u65b0\u6e32\u67d3\u65f6\u83b7\u53d6",level:3},{value:"\u4f7f\u7528\u4e86 CustomWrapper \u65f6",id:"\u4f7f\u7528\u4e86-customwrapper-\u65f6",level:3},{value:"\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7 baseLevel \u65f6",id:"\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7-baselevel-\u65f6",level:3}],f={toc:d};function v(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)("wrapper",i({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Web \u5f00\u53d1\u4e2d\uff0c\u5e38\u7528\u7684\u8282\u70b9\u83b7\u53d6\u65b9\u6cd5\u5305\u62ec\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"document.getElementById")," \u7b49 DOM API\uff0c\u4ee5\u53ca\u5404\u5f00\u53d1\u6846\u67b6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u8bed\u6cd5\u3002\u800c\u5728 Taro \u4e2d\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u8bed\u6cd5\u6765\u83b7\u53d6\u8282\u70b9\u3002\u4f46\u53d7\u9650\u4e8e",(0,r.kt)("a",i({parentName:"p"},{href:"implement-note#%E8%BF%90%E8%A1%8C%E6%97%B6"}),"\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u5b9e\u73b0\u673a\u5236"),"\uff0c\u5982\u679c\u9700\u8981\u83b7\u53d6\u8282\u70b9\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5c3a\u5bf8\u3001\u5b9a\u4f4d\u7b49\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u4fe1\u606f"),"\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.createSelectorQuery")," API \u6765\u83b7\u53d6\u8282\u70b9\u3002"),(0,r.kt)("h2",i({},{id:"ref-\u8bed\u6cd5"}),"ref \u8bed\u6cd5"),(0,r.kt)("p",null,"Taro \u652f\u6301\u4f7f\u7528 React / Vue \u7b49\u5f00\u53d1\u6846\u67b6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u8bed\u6cd5\u6765\u83b7\u53d6\u8282\u70b9\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u8282\u70b9\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\u8c03\u7528\u8282\u70b9\u7684\u65b9\u6cd5\u3001\u8bbe\u7f6e\u5c5e\u6027\u7b49\uff0c\u4f46\u5728\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u4e2d\u4e0d\u80fd\u83b7\u53d6\u5230\u8282\u70b9\u7684\u5c3a\u5bf8\u4fe1\u606f\u3002"),(0,r.kt)("admonition",i({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u5e73\u53f0 ref \u83b7\u53d6\u5230\u7684\u8282\u70b9\u7c7b\u578b\u4e0d\u540c\uff0c\u4f46 Taro \u5c3d\u91cf\u4fdd\u8bc1\u4e86\u8fd9\u4e9b\u8282\u70b9\u5177\u6709\u7edf\u4e00\u7684\u5c5e\u6027\u4e0e API\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"H5 Ref \u7c7b\u578b\uff1aTaro \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4e00\u822c\u662f WebComponents\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f Ref \u7c7b\u578b\uff1aTaro \u865a\u62df DOM \u8282\u70b9\uff0c\u5982 TaroElement\u3002\u5b58\u5728\u4e8e\u903b\u8f91\u5c42\uff0c\u56e0\u6b64\u4e0d\u643a\u5e26\u8282\u70b9\u5c3a\u5bf8\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"RN Ref \u7c7b\u578b\uff1aTaro \u7ec4\u4ef6\u5b9e\u4f8b\u3002"))),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:2,mdxType:"VueIcon"}),value:"vue2"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { useRef } from 'react'\nimport { Input, Button } from '@tarojs/components'\n\nexport default function Index () {\n  const inputRef = useRef<HTMLInputElement>(null)\n\n  function handleClick() {\n    inputRef.current?.focus()\n  }\n\n  return (\n    <>\n      <Input ref={inputRef} />\n      <Button onClick={handleClick}>Focus the input</Button>\n    </>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),'<template>\n  <view>\n    <input ref="inputRef" />\n    <button @tap="handleClick">Focus the input</button>\n  </view>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick () {\n        this.$refs.inputRef.focus()\n      }\n    }\n  }\n<\/script>\n'))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),'<template>\n  <input ref="inputRef" />\n  <button @tap="handleClick">Focus the input</button>\n</template>\n\n<script setup>\n  import { ref } from \'vue\'\n\n  const inputRef = ref(null)\n\n  function handleClick () {\n    inputRef.value.focus()\n  }\n<\/script>\n')))),(0,r.kt)("h2",i({},{id:"\u83b7\u53d6\u8282\u70b9\u5c3a\u5bf8\u4fe1\u606f"}),"\u83b7\u53d6\u8282\u70b9\u5c3a\u5bf8\u4fe1\u606f"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.createSelectorQuery")," API \u53ef\u4ee5\u83b7\u53d6\u5230\u8282\u70b9\u7684\u5c3a\u5bf8\u3001\u5b9a\u4f4d\u7b49\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u4fe1\u606f\u3002\u8003\u8651\u5230\u5c0f\u7a0b\u5e8f\u7684\u5b9e\u73b0\u673a\u5236\uff0c\u9700\u8981\u914d\u5408\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"onReady")," \u751f\u547d\u5468\u671f\u4e2d\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\u3002"),(0,r.kt)("admonition",i({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"\u5404\u4e2a\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u673a\u5236\u4e0d\u540c\uff0c\u5bfc\u81f4\u4e86\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u548c Taro React / Vue \u751f\u547d\u5468\u671f\u7684\u89e6\u53d1\u987a\u5e8f\u4e5f\u4e0d\u5c3d\u76f8\u540c\u3002\u5982\u679c\u5b58\u5728\u83b7\u53d6\u8282\u70b9\u5931\u8d25\u7684\u60c5\u51b5\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.nextTick")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u7b49\u65b9\u6cd5\u589e\u52a0\u5ef6\u65f6\u3002")),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:2,mdxType:"VueIcon"}),value:"vue2"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { View } from '@tarojs/components'\nimport Taro, { useReady } from '@tarojs/taro'\n\nexport default function Index () {\n  useReady(() => {\n    // \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u89e6\u53d1 onReady \u540e\uff0c\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u8282\u70b9\n    Taro.createSelectorQuery()\n      .select('#target')\n      .boundingClientRect()\n      .exec(res => console.log(res))\n  })\n\n  return (\n    <View id=\"target\"></View>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view id=\"target\" />\n</template>\n\n<script>\n  import Taro from '@tarojs/taro'\n\n  export default {\n    onReady() {\n      // \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u89e6\u53d1 onReady \u540e\uff0c\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u8282\u70b9\n      Taro.createSelectorQuery()\n        .select('#target')\n        .boundingClientRect()\n        .exec(res => console.log(res))\n    }\n  }\n<\/script>\n\n"))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view id=\"target\" />\n</template>\n\n<script setup>\n  import Taro, { useReady } from '@tarojs/taro'\n\n  useReady(() => {\n    // \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u89e6\u53d1 onReady \u540e\uff0c\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u8282\u70b9\n    // Vue3 \u9700\u8981\u4f7f\u7528 Taro.nextTick \u786e\u4fdd\u5df2\u7ecf\u6e32\u67d3\u5b8c\u6210\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .select('#target')\n        .boundingClientRect()\n        .exec(res => console.log(res))\n    })\n  })\n<\/script>\n")))),(0,r.kt)("h3",i({},{id:"\u5728\u5b50\u7ec4\u4ef6\u4e2d\u83b7\u53d6"}),"\u5728\u5b50\u7ec4\u4ef6\u4e2d\u83b7\u53d6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onReady")," \u662f\u9875\u9762\u7ea7\u522b\u7684\u751f\u547d\u5468\u671f\uff0c\u5982\u679c\u9700\u8981\u5728\u5b50\u7ec4\u4ef6\u4e2d\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.createSelectorQuery"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useReady")," \u94a9\u5b50\u3002"),(0,r.kt)("p",null,"\u82e5\u5f00\u53d1\u8005\u6ca1\u6709\u4f7f\u7528 React Hook \u6216 Vue3 Composition API\uff0c\u5219\u9700\u8981\u57fa\u4e8e Taro \u7684\u4e8b\u4ef6\u901a\u8baf\u673a\u5236\uff0c\u76d1\u542c\u9875\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"onReady")," \u7684\u8c03\u7528\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",i({parentName:"p"},{href:"./react-page#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onready"}),"React"),"\u3001",(0,r.kt)("a",i({parentName:"p"},{href:"./vue-page#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onready"}),"Vue"),"\u3002"),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { View } from '@tarojs/components'\nimport Taro, { useReady } from '@tarojs/taro'\n\nfunction Comp () {\n  useReady(() => {\n    // \u521d\u6b21\u6e32\u67d3\u65f6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u89e6\u53d1 onReady \u540e\uff0c\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u8282\u70b9\n    Taro.createSelectorQuery()\n      .select('#target')\n      .boundingClientRect()\n      .exec((res) => console.log(res))\n  })\n\n  return (\n    <View id=\"target\"></View>\n  )\n}\n\nexport default function Index () {\n  return (\n    <Comp></Comp>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"\x3c!-- page --\x3e\n<template>\n  <comp></comp>\n</template>\n\n<script setup>\n  import Comp from './comp'\n<\/script>\n\n\x3c!-- component --\x3e\n<template>\n  <view id=\"target\" />\n</template>\n\n<script setup>\n  import Taro, { useReady } from '@tarojs/taro'\n\n  useReady(() => {\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .select('#target')\n        .boundingClientRect()\n        .exec(res => console.log(res))\n    })\n  })\n<\/script>\n")))),(0,r.kt)("h3",i({},{id:"\u5728\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4e2d\u83b7\u53d6"}),"\u5728\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4e2d\u83b7\u53d6"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u5e38\u89c1\u7684\u573a\u666f\u5219\u662f\u4f7f\u7528\u4e86\u61d2\u52a0\u8f7d\u7684\u7ec4\u4ef6\u3002\u5f53\u5b83\u4eec\u6302\u8f7d\u65f6\uff0c\u9875\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onReady")," \u65e9\u5df2\u89e6\u53d1\uff0c\u8fd9\u65f6\u9700\u8981\u914d\u5408\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.nextTick")," API \u624d\u80fd\u6210\u529f\u83b7\u53d6\u5230\u8282\u70b9\u4fe1\u606f\u3002"),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { View, Button, Canvas } from '@tarojs/components'\nimport Taro from '@tarojs/taro'\nimport { useState, useEffect } from 'react'\n\nexport default function Index () {\n  const [isShow, setIsShow] = useState(false)\n\n  return (\n    <View>\n      <Button onClick={() => setIsShow(true)}>Load Component</Button>\n      {isShow && <LazyFloor></LazyFloor>}\n    </View>\n  )\n}\n\nfunction LazyFloor () {\n  useEffect(() => {\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .select(`.ec-canvas`)\n        .fields({ node: true, size: true })\n        .exec(res => console.log('res: ', res))\n    })\n  }, [])\n  return (\n    <View>\n      <Canvas canvasId='canvas' className='ec-canvas'></Canvas>\n    </View>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"\x3c!-- page --\x3e\n<template>\n  <view>\n    <button @tap=\"isShow = true\">Load Component</button>\n    <LazyFloor v-if=\"isShow\"></LazyFloor>\n  </view>\n</template>\n\n<script setup>\n  import { ref } from 'vue'\n  import LazyFloor from './lazyFloor'\n\n  const isShow = ref(false)\n<\/script>\n\n\x3c!-- component --\x3e\n<template>\n  <view>\n    <canvas canvas-id='canvas' class='ec-canvas'></canvas>\n  </view>\n</template>\n\n<script setup>\n  import Taro from '@tarojs/taro'\n  import { onMounted } from 'vue'\n\n  onMounted(() => {\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .select(`.ec-canvas`)\n        .fields({ node: true, size: true })\n        .exec(res => console.log('res: ', res))\n    })\n  })\n<\/script>\n")))),(0,r.kt)("h3",i({},{id:"\u5728\u66f4\u65b0\u6e32\u67d3\u65f6\u83b7\u53d6"}),"\u5728\u66f4\u65b0\u6e32\u67d3\u65f6\u83b7\u53d6"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u8ba8\u8bba\u7684\u90fd\u662f\u521d\u6b21\u6e32\u67d3\u7684\u60c5\u51b5\uff0c\u5982\u679c\u9700\u8981\u5728\u66f4\u65b0\u6e32\u67d3\u65f6\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uff08React\uff09\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdated"),"\uff08Vue3\uff09\u7b49\u66f4\u65b0\u6e32\u67d3\u5b8c\u6210\u94a9\u5b50\u4e2d\u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"nextTick")," \u83b7\u53d6\u3002\u7528\u6cd5\u548c",(0,r.kt)("a",i({parentName:"p"},{href:"./ref#%E5%9C%A8%E6%87%92%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%8F%96"}),"\u61d2\u52a0\u8f7d\u7ec4\u4ef6"),"\u7c7b\u4f3c\u3002"),(0,r.kt)("h3",i({},{id:"\u4f7f\u7528\u4e86-customwrapper-\u65f6"}),"\u4f7f\u7528\u4e86 CustomWrapper \u65f6"),(0,r.kt)("admonition",i({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u53ea\u9700\u8981\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},">>>")," \u9009\u62e9\u5668\u6765\u89e3\u51b3\uff1a",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/7411"}),"#7411"))),(0,r.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff0c\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWrapper")," \u5b9e\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002\u5c0f\u7a0b\u5e8f\u89c4\u5b9a\uff0c\u5982\u679c\u8981\u83b7\u53d6\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u7684\u8282\u70b9\uff0c\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".in")," \u65b9\u6cd5\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," \u662f\u5bf9\u5e94\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.createSelectorQuery().in(scope)"),"\u3002"),(0,r.kt)("p",null,"\u5bf9\u5e94\u5728 Taro \u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5148\u4f7f\u7528 ref \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWrapper")," \u5b9e\u4f8b\uff0c\u7136\u540e\u901a\u8fc7\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," \u5c5e\u6027\u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"scope"),"\uff0c\u4f8b\u5b50\uff1a"),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { View, Canvas, CustomWrapper } from '@tarojs/components'\nimport Taro, { useReady } from '@tarojs/taro'\nimport { createRef } from 'react'\n\nexport default function Index () {\n  const wrapperRef = createRef()\n\n  useReady(() => {\n    Taro.createSelectorQuery()\n      .in(wrapperRef.current.ctx)\n      .select(`.ec-canvas`)\n      .fields({ node: true, size: true })\n      .exec(res => console.log('res: ', res))\n  })\n\n  return (\n    <View>\n      <CustomWrapper ref={wrapperRef}>\n        <Canvas canvasId='canvas' className='ec-canvas'></Canvas>\n      </CustomWrapper>\n    </View>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view>\n    <custom-wrapper ref=\"wrapperRef\">\n      <canvas canvas-id='canvas' class='ec-canvas'></canvas>\n    </custom-wrapper>\n  </view>\n</template>\n\n<script setup>\n  import Taro, { useReady } from '@tarojs/taro'\n  import { ref } from 'vue'\n\n  const wrapperRef = ref()\n\n  useReady(() => {\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .in(wrapperRef.value.ctx)\n        .select(`.ec-canvas`)\n        .fields({ node: true, size: true })\n        .exec(res => console.log('res: ', res))\n    })\n  })\n<\/script>\n")))),(0,r.kt)("h3",i({},{id:"\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7-baselevel-\u65f6"}),"\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7 baseLevel \u65f6"),(0,r.kt)("admonition",i({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u53ea\u9700\u8981\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},">>>")," \u9009\u62e9\u5668\u6765\u89e3\u51b3\uff1a",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/7411"}),"#7411"))),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1\u4ee5\u53ca\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff0c\u5f53\u7ec4\u4ef6\u7684\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7 ",(0,r.kt)("a",i({parentName:"p"},{href:"config-detail#minibaselevel"}),"baseLevel"),"\uff08\u9ed8\u8ba4 16 \u5c42\uff09\u65f6\uff0cTaro \u5185\u90e8\u4f1a\u521b\u5efa\u4e00\u4e2a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u534f\u52a9\u5f00\u542f\u66f4\u6df1\u5c42\u6b21\u7684\u5d4c\u5957\uff0c\u56e0\u6b64\u83b7\u53d6\u8d85\u8fc7 baseLevel \u5c42\u7ea7\u7684\u8282\u70b9\u65f6\u4f1a\u5931\u8d25\u3002\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u501f\u52a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWrapper")," \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:(0,r.kt)(a.gQ,{mdxType:"ReactIcon"}),value:"react"},{label:(0,r.kt)(a.p6,{version:3,mdxType:"VueIcon"}),value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import { View, Canvas, CustomWrapper } from '@tarojs/components'\nimport Taro, { useReady } from '@tarojs/taro'\nimport { createRef } from 'react'\n\nexport default function Index () {\n  const wrapperRef = createRef()\n\n  useReady(() => {\n    Taro.createSelectorQuery()\n      .in(wrapperRef.current.ctx)\n      .select(`.ec-canvas`)\n      .fields({ node: true, size: true })\n      .exec(res => console.log('res: ', res))\n  })\n\n  return (\n    <View><View><View><View>\n      <View><View><View><View>\n        <View><View><View><View>\n          <CustomWrapper ref={wrapperRef}>\n          <View><View><View><View>\n            <Canvas canvasId='canvas' className='ec-canvas'></Canvas>\n          </View></View></View></View>\n          </CustomWrapper>\n        </View></View></View></View>\n      </View></View></View></View>\n    </View></View></View></View>\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view><view><view><view>\n    <view><view><view><view>\n      <view><view><view><view>\n        <custom-wrapper ref=\"wrapperRef\">\n        <view><view><view><view>\n          <canvas canvas-id='canvas' class='ec-canvas'></canvas>\n        </view></view></view></view>\n        </custom-wrapper>\n      </view></view></view></view>\n    </view></view></view></view>\n  </view></view></view></view>\n</template>\n\n<script setup>\n  import Taro, { useReady } from '@tarojs/taro'\n  import { ref } from 'vue'\n\n  const wrapperRef = ref()\n\n  useReady(() => {\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery()\n        .in(wrapperRef.value.ctx)\n        .select(`.ec-canvas`)\n        .fields({ node: true, size: true })\n        .exec(res => console.log('res: ', res))\n    })\n  })\n<\/script>\n")))))}v.isMDXComponent=!0}}]);