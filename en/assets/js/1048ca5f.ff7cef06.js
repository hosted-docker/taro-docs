"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5400],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91264:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),l={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:t}),e)}},8602:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(93106),a=n(4706),l=n(29369),o=n(27907),i=n(3111),u=n(65009),s=n(42615);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,i._X)(a),u=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[l,u]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=b({queryString:n,groupId:a}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,s.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),k=(()=>{const e=null!=u?u:p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=n(81600),v={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(s(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>r.createElement("li",g({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:c},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",v.tabList)},r.createElement(h,g({},e,t)),r.createElement(y,g({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,g({key:String(t)},e))}},71966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874),a=n(8602),l=n(91264);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"WebView",sidebar_label:"WebView"},s=void 0,c={unversionedId:"components/open/web-view",id:"version-3.x/components/open/web-view",title:"WebView",description:"Container that carries webpages. It automatically fills the entire Mini Program page. It is currently not supported on Mini Programs owned by personal entities (individual).",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/web-view.md",sourceDirName:"components/open",slug:"/components/open/web-view",permalink:"/mirror/taro-docs/en/docs/components/open/web-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/web-view.md",tags:[],version:"3.x",frontMatter:{title:"WebView",sidebar_label:"WebView"},sidebar:"components",previous:{title:"OpenData",permalink:"/mirror/taro-docs/en/docs/components/open/open-data"},next:{title:"others",permalink:"/mirror/taro-docs/en/docs/components/open/others"}},p={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"WebViewProps",id:"webviewprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onMessageEventDetail",id:"onmessageeventdetail",level:3},{value:"onLoadEventDetail",id:"onloadeventdetail",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:d},b="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(b,o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Container that carries webpages. It automatically fills the entire Mini Program page. ",(0,r.kt)("strong",{parentName:"p"},"It is currently not supported on Mini Programs owned by personal entities (individual).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/web-view.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<WebViewProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <web-view src='https://mp.weixin.qq.com/' @message=\"handleMessage\" />\n</template>\n")))),(0,r.kt)("h2",o({},{id:"webviewprops"}),"WebViewProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"src"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Yes"),(0,r.kt)("td",null,"wThe link from the webview to a webpage. It allows you to open an article of a linked Official Account. For other webpages, log in to Mini Program admin console to configure the service domain name.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onMessage"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onMessageEventDetail>")),(0,r.kt)("td",null,"No"),(0,r.kt)("td",null,"Triggered at a specific occasion (for example, the Mini Program returns to a previous page, a component is terminated, or a page is shared) when postMessage is called from a webpage to the Mini Program. A message is received after the event is triggered. The e.detail is ","{ data }",", where data is an array consisting of parameter values obtained via multiple calls to postMessage.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onLoad"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,r.kt)("td",null,"No"),(0,r.kt)("td",null,"Triggered when a webpage is loaded. e.detail = ","{ src }")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,r.kt)("td",null,"No"),(0,r.kt)("td",null,"Triggered when a webpage failed to be loaded. e.detail = ","{ src }")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"WebViewProps.src"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"WebViewProps.onMessage"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"WebViewProps.onLoad"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"WebViewProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"onmessageeventdetail"}),"onMessageEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,"any[]")),(0,r.kt)("td",null,"The message data is an array of multiple postMessage parameters.")))),(0,r.kt)("h3",o({},{id:"onloadeventdetail"}),"onLoadEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"src"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Web Link Address")))),(0,r.kt)("h3",o({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"src"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Web Link Address")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"WebView"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}f.isMDXComponent=!0}}]);