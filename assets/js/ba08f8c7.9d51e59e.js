"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53799],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55256:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),a=n(4706),l={tabItem:"tabItem_NDii"};function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:t}),e)}},51417:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(93106),a=n(4706),l=n(76075),o=n(27907),u=n(48505),i=n(29136),p=n(6099);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,u._X)(a),i=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[l,i]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,u]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=k({queryString:n,groupId:a}),[s,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=i?i:s;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var f=n(27614),h={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function g({className:e,block:t,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=u[r].value;a!==n&&(p(t),o(a))},s=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:l})=>r.createElement("li",v({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:s,onClick:c},l,{className:(0,a.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function N({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},r.createElement(g,v({},e,t)),r.createElement(N,v({},e,t)))}function j(e){const t=(0,f.Z)();return r.createElement(y,v({key:String(t)},e))}},13792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874),a=n(55256),l=n(51417);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u5165\u53e3\u7ec4\u4ef6"},p=void 0,c={unversionedId:"vue-entry",id:"version-3.x/vue-entry",title:"\u5165\u53e3\u7ec4\u4ef6",description:"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08Vue \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f src \u76ee\u5f55\u4e0b\u7684 app.js\u3002",source:"@site/versioned_docs/version-3.x/vue-entry.mdx",sourceDirName:".",slug:"/vue-entry",permalink:"/mirror/taro-docs/docs/vue-entry",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/vue-entry.mdx",tags:[],version:"3.x",frontMatter:{title:"\u5165\u53e3\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/mirror/taro-docs/docs/vue-overall"},next:{title:"\u9875\u9762\u7ec4\u4ef6",permalink:"/mirror/taro-docs/docs/vue-page"}},s={},d=[{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",level:2},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",level:2},{value:"onLaunch (options)",id:"onlaunch-options",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"options",id:"options",level:5},{value:"options.referrerInfo",id:"optionsreferrerinfo",level:5},{value:"onShow (options)",id:"onshow-options",level:3},{value:"onHide ()",id:"onhide-",level:3},{value:"onError (error)",id:"onerror-error",level:3},{value:"onPageNotFound (Object)",id:"onpagenotfound-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"Object",id:"object",level:5},{value:"onUnhandledRejection (Object)",id:"onunhandledrejection-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"Object",id:"object-1",level:5}],m={toc:d},k="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(k,o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08Vue \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5165\u53e3\u7ec4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u72b6\u6001\u6216\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u5165\u53e3\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("h4",o({},{id:"\u6ce8\u610f"}),"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u81ea Taro v3.1 \u5f00\u59cb\uff0cVue2 \u5165\u53e3\u7ec4\u4ef6\u7684\u5199\u6cd5\u6709 ",(0,r.kt)("strong",{parentName:"li"},"Breaking Changes"),"\uff0c\u8be6\u60c5\u8bf7\u89c1 ",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/releases/tag/v3.1.0"}),"3.1.0 \u53d1\u5e03\u4fe1\u606f"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e Vue3 Global API \u6709\u53d8\u5316\uff08",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md"}),"0009-global-api-change"),"\uff09\uff0cVue3 \u7684\u5165\u53e3\u7ec4\u4ef6\u5199\u6cd5\u548c Vue2 \u4e0d\u540c\u3002")),(0,r.kt)("h2",o({},{id:"\u4ee3\u7801\u793a\u4f8b"}),"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)(l.Z,{defaultValue:"vue",values:[{label:"Vue2",value:"vue"},{label:"Vue3",value:"vue3"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="app.js"',title:'"app.js"'}),"import Vue from 'vue'\n// \u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u5728 './store' \u914d\u7f6e\u597d\u4e86 vuex\nimport store from './store'\n\nconst App = {\n  store,\n\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 Vue \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  mounted() {},\n\n  // \u5bf9\u5e94 onLaunch\n  onLaunch() {},\n\n  // \u5bf9\u5e94 onShow\n  onShow(options) {},\n\n  // \u5bf9\u5e94 onHide\n  onHide() {},\n\n  render(h) {\n    // this.$slots.default \u662f\u5c06\u8981\u4f1a\u6e32\u67d3\u7684\u9875\u9762\n    return h('block', this.$slots.default)\n  },\n}\n\nexport default App\n"))),(0,r.kt)(a.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { createApp } from 'vue'\n\nconst app = createApp({\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 Vue \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  mounted () {},\n\n  // \u5bf9\u5e94 onLaunch\n  onLaunch () {},\n\n  // \u5bf9\u5e94 onShow\n  onShow (options) {},\n\n  // \u5bf9\u5e94 onHide\n  onHide () {},\n\n  // \u5165\u53e3\u7ec4\u4ef6\u4e0d\u9700\u8981\u5b9e\u73b0 render \u65b9\u6cd5\uff0c\u5373\u4f7f\u5b9e\u73b0\u4e86\u4e5f\u4f1a\u88ab taro \u6240\u8986\u76d6\n})\n\nexport app\n")))),(0,r.kt)("h2",o({},{id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"}),"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"./app-config"}),"\u5168\u5c40\u914d\u7f6e")),(0,r.kt)("h2",o({},{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"}),"\u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 Vue2 \u548c Vue3 \u4e2d\uff0cTaro \u989d\u5916\u6dfb\u52a0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u5199\u6cd5\u4e00\u81f4")),(0,r.kt)("p",null,"\u5165\u53e3\u7ec4\u4ef6\u9664\u4e86\u652f\u6301 Vue \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5916\uff0c\u8fd8\u6839\u636e\u5c0f\u7a0b\u5e8f\u7684\u6807\u51c6\uff0c\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u751f\u547d\u5468\u671f\uff1a"),(0,r.kt)("h3",o({},{id:"onlaunch-options"}),"onLaunch (options)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94 app \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch"),"\u3002")),(0,r.kt)("p",null,"\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),(0,r.kt)("h4",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h5",o({},{id:"options"}),"options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"scene"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u573a\u666f\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684 query \u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"shareTicket"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"shareTicket\uff0c\u8be6\u89c1\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"referrerInfo"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de {}")))),(0,r.kt)("h5",o({},{id:"optionsreferrerinfo"}),"options.referrerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\uff0c\u6216\u8005\u516c\u4f17\u53f7\uff08\u5fae\u4fe1\u4e2d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"extraData"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0c\u5fae\u4fe1\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u5728 scene=1037 \u6216 1038 \u65f6\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"sourceServiceId"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u63d2\u4ef6\uff0c\u5f53\u5904\u4e8e\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f\u65f6\u53ef\u89c1")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"options \u53c2\u6570\u7684\u5b57\u6bb5\u5728\u4e0d\u540c\u5c0f\u7a0b\u5e8f\u4e2d\u53ef\u80fd\u5b58\u5728\u5dee\u5f02\uff0c\u5982\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u573a\u666f\u503c scene\uff0c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e2d\u5b58\u5728\u533a\u522b\uff0c\u8bf7\u5206\u522b\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6587\u6863")," \u548c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/data/scene/"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u6587\u6863"))),(0,r.kt)("h3",o({},{id:"onshow-options"}),"onShow (options)"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u542f\u52a8\uff0c\u6216\u5207\u524d\u53f0\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("p",null,"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u751f\u547d\u5468\u671f\u4e00\u6837\uff0c\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u4e2d\u83b7\u53d6\u7684\u57fa\u672c\u4e00\u81f4\uff0c\u4f46",(0,r.kt)("strong",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u4e2d\u8865\u5145\u4e24\u4e2a\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"entryType"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5c55\u73b0\u7684\u6765\u6e90\u6807\u8bc6\uff0c\u53d6\u503c\u4e3a user/ schema /sys :",(0,r.kt)("br",null),"user\uff1a\u8868\u793a\u901a\u8fc7 home \u524d\u540e",(0,r.kt)("br",null),"\u5207\u6362\u6216\u89e3\u9501\u5c4f\u5e55\u7b49\u65b9\u5f0f\u8c03\u8d77\uff1b",(0,r.kt)("br",null),"schema\uff1a\u8868\u793a\u901a\u8fc7\u534f\u8bae\u8c03\u8d77;",(0,r.kt)("br",null),"sys\uff1a\u5176\u5b83")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"appURL"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5c55\u73b0\u65f6\u7684\u8c03\u8d77\u534f\u8bae\uff0c\u4ec5\u5f53 entryType \u503c\u4e3a schema \u65f6\u5b58\u5728")))),(0,r.kt)("h3",o({},{id:"onhide-"}),"onHide ()"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u5207\u540e\u53f0\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h3",o({},{id:"onerror-error"}),"onError (error)"),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5.0+ \u5f00\u59cb\u652f\u6301")),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53d1\u751f\u811a\u672c\u9519\u8bef\u6216 API \u8c03\u7528\u62a5\u9519\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h3",o({},{id:"onpagenotfound-object"}),"onPageNotFound (Object)"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h4",o({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,r.kt)("h5",o({},{id:"object"}),"Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"isEntryPage"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")))),(0,r.kt)("h3",o({},{id:"onunhandledrejection-object"}),"onUnhandledRejection (Object)"),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5.10+ \u5f00\u59cb\u652f\u6301")),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6709\u672a\u5904\u7406\u7684 Promise \u62d2\u7edd\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h4",o({},{id:"\u53c2\u6570-2"}),"\u53c2\u6570"),(0,r.kt)("h5",o({},{id:"object-1"}),"Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"reason"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u62d2\u7edd\u539f\u56e0\uff0c\u4e00\u822c\u662f\u4e00\u4e2a Error \u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"promise"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Promise"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u88ab\u62d2\u7edd\u7684 Promise \u5bf9\u8c61")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u9700\u8981\u5728\u6e90\u7801\u6839\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"project.alipay.json")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAppxNg: true")," \u624d\u80fd\u5728\u771f\u673a\u73af\u5883\u8fdb\u884c\u76d1\u542c\u3002")))}b.isMDXComponent=!0}}]);