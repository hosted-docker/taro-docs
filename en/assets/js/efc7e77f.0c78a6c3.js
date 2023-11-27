"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56242],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(k,o(o({ref:e},u),{},{components:r})):n.createElement(k,o({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91264:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(93106),a=r(4706),l={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function c({children:t,hidden:e,className:r}){return n.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l.tabItem,r)},{hidden:e}),t)}},8602:function(t,e,r){r.d(e,{Z:function(){return P}});var n=r(93106),a=r(4706),l=r(29369),o=r(27907),c=r(3111),i=r(65009),s=r(42615);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return function(t){var e,r;return null!==(r=null===(e=n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==r?r:[]}(t).map((({props:{value:t,label:e,attributes:r,default:n}})=>({value:t,label:e,attributes:r,default:n})))}function d(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=null!=e?e:p(r);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m({value:t,tabValues:e}){return e.some((e=>e.value===t))}function k({queryString:t=!1,groupId:e}){const r=(0,o.k6)(),a=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,c._X)(a),i=(0,n.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(r.location.search);e.set(a,t),r.replace(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){u(t,e,r[e])}))}return t}({},r.location,{search:e.toString()}))}),[a,r]);return[l,i]}function g(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=d(t),[o,c]=(0,n.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var r;const n=null!==(r=e.find((t=>t.default)))&&void 0!==r?r:e[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[i,u]=k({queryString:r,groupId:a}),[p,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[r,a]=(0,s.Nk)(e);return[r,(0,n.useCallback)((t=>{e&&a.set(t)}),[e,a])]}({groupId:a}),f=(()=>{const t=null!=i?i:p;return m({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),g(t)}),[u,g,l]),tabValues:l}}var f=r(81600),b={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function N({className:t,block:e,selectedValue:r,selectValue:o,tabValues:c}){const i=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),u=t=>{const e=t.currentTarget,n=i.indexOf(e),a=c[n].value;a!==r&&(s(e),o(a))},p=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=i.indexOf(t.currentTarget)+1;var r;e=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(t.currentTarget)-1;var n;e=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==e||e.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":e},t)},c.map((({value:t,label:e,attributes:l})=>n.createElement("li",h({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:t=>i.push(t),onKeyDown:p,onClick:u},l,{className:(0,a.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t})}),null!=e?e:t))))}function y({lazy:t,children:e,selectedValue:r}){const a=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function v(t){const e=g(t);return n.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},n.createElement(N,h({},t,e)),n.createElement(y,h({},t,e)))}function P(t){const e=(0,f.Z)();return n.createElement(v,h({key:String(e)},t))}},9448:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});r(93106);var n=r(79874),a=r(8602),l=r(91264);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={title:"Progress",sidebar_label:"Progress"},s=void 0,u={unversionedId:"components/base/progress",id:"components/base/progress",title:"Progress",description:"progress\u3002 The unit of length of the component's properties is px by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/base/progress.md",sourceDirName:"components/base",slug:"/components/base/progress",permalink:"/mirror/taro-docs/en/docs/next/components/base/progress",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/base/progress.md",tags:[],version:"current",frontMatter:{title:"Progress",sidebar_label:"Progress"},sidebar:"components",previous:{title:"Text",permalink:"/mirror/taro-docs/en/docs/next/components/base/text"},next:{title:"RichText",permalink:"/mirror/taro-docs/en/docs/next/components/base/rich-text"}},p={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"ProgressProps",id:"progressprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:d},k="wrapper";function g(t){var{components:e}=t,r=c(t,["components"]);return(0,n.kt)(k,o({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"progress\u3002 The unit of length of the component's properties is px by default."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/progress.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ProgressProps>\n")),(0,n.kt)("h2",o({},{id:"examples"}),"Examples"),(0,n.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Progress percent={20} showInfo strokeWidth={2} />\n        <Progress percent={40} strokeWidth={2} active />\n        <Progress percent={60}  strokeWidth={2} active />\n        <Progress percent={80}  strokeWidth={2} active activeColor='blue' />\n      </View>\n    )\n  }\n}\n"))),(0,n.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <progress percent="20" stroke-width="2" :show-info="true" />\n    <progress percent="40" stroke-width="2" :active="true" />\n    <progress percent="60" stroke-width="2" :active="true" />\n    <progress percent="80" stroke-width="2" :active="true" active-color="blue" />\n  </view>\n</template>\n')))),(0,n.kt)("h2",o({},{id:"progressprops"}),"ProgressProps"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Default"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"percent"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"0 to 100 percent.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"showInfo"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Shows the percent on the right of the progress bar.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"borderRadius"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string | number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"0")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The radius of the round corner.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fontSize"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string | number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"16")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The font size of the percent on the right.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"strokeWidth"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string | number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"6")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The width of the stroke on the progress bar.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,'"#09BB07"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The color of the progress bar (Use activeColor).")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"activeColor"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,'"#09BB07"')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"The color of the selected progress bar.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"backgroundColor"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,'"#EBEBEB"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The color of the unselected progress bar.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"active"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The animation where the progress bar moves from left to right.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"activeMode"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"backwards" | "forwards"')),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"backwards")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,'The value "backwards" indicates that the animation plays from the beginning, and the value "forwards" indicates that the animation plays from the point at which it paused.')),(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"30")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Number of milliseconds to increase progress by 1%.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"onActiveEnd"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BaseEventOrigFunction<any>")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Triggered on animation completion.")))),(0,n.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.percent"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.showInfo"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.borderRadius"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.fontSize"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.strokeWidth"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.color"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.activeColor"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.backgroundColor"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.active"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.activeMode"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.duration"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"ProgressProps.onActiveEnd"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Progress"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);