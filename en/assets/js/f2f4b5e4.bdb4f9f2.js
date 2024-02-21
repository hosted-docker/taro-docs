"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[96634],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(n),k=l,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55256:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),l=n(4706),a={tabItem:"tabItem_NDii"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,l.Z)(a.tabItem,n)},{hidden:e}),t)}},51417:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(93106),l=n(4706),a=n(76075),o=n(27907),i=n(48505),c=n(29136),d=n(6099);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:u(n);return function(t){const e=(0,c.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function k({value:t,tabValues:e}){return e.some((e=>e.value===t))}function m({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),l=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),a=(0,i._X)(l),c=(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[l,n]);return[a,c]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=p(t),[o,i]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[c,s]=m({queryString:n,groupId:l}),[u,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,l]=(0,d.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&l.set(t)}),[e,l])]}({groupId:l}),h=(()=>{const t=null!=c?c:u;return k({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),g(t)}),[s,g,a]),tabValues:a}}var h=n(27614),f={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function N(){return N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:o,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),s=t=>{const e=t.currentTarget,r=c.indexOf(e),l=i[r].value;l!==n&&(d(e),o(l))},u=t=>{let e=null;switch(t.key){case"Enter":s(t);break;case"ArrowRight":{const r=c.indexOf(t.currentTarget)+1;var n;e=null!==(n=c[r])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;var r;e=null!==(r=c[n])&&void 0!==r?r:c[c.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":e},t)},i.map((({value:t,label:e,attributes:a})=>r.createElement("li",N({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>c.push(t),onKeyDown:u,onClick:s},a,{className:(0,l.Z)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function y({lazy:t,children:e,selectedValue:n}){const l=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,N({},t,e)),r.createElement(y,N({},t,e)))}function w(t){const e=(0,h.Z)();return r.createElement(v,N({key:String(e)},t))}},67281:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});n(93106);var r=n(79874),l=n(51417),a=n(55256);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const c={title:"ScrollView",sidebar_label:"ScrollView"},d=void 0,s={unversionedId:"components/viewContainer/scroll-view",id:"version-3.x/components/viewContainer/scroll-view",title:"ScrollView",description:"The scrollable view area. When vertical scrolling is used, a fixed height must set for scroll-view via WXSS. The unit of length of the component's properties is px by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/scroll-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/scroll-view",permalink:"/mirror/taro-docs/en/docs/components/viewContainer/scroll-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/scroll-view.md",tags:[],version:"3.x",frontMatter:{title:"ScrollView",sidebar_label:"ScrollView"},sidebar:"components",previous:{title:"RootPortal",permalink:"/mirror/taro-docs/en/docs/components/viewContainer/root-portal"},next:{title:"Slot",permalink:"/mirror/taro-docs/en/docs/components/viewContainer/slot"}},u={},p=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"ScrollViewProps",id:"scrollviewprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onScrollDetail",id:"onscrolldetail",level:3}],k={toc:p},m="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(m,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The scrollable view area. When vertical scrolling is used, a fixed height must set for scroll-view via WXSS. The unit of length of the component's properties is px by default. "),(0,r.kt)("p",null,"Tips:\nThe ScrollView component in H5 is implemented by scrolling inside a container with a fixed height (or width), so it is important to set the height of the container correctly. For example, if the height of the ScrollView expands the body, there will be two scrollbars at the same time (the scrollbar under the body and the scrollbar of the ScrollView).\nIf the ScrollView component in the WeChat mini program is set to scrollX horizontally and has multiple child elements (a single child element with a fixed width will scroll horizontally), you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"white-space: nowrap")," with WXSS to ensure that the element does not change lines, and set ",(0,r.kt)("inlineCode",{parentName:"p"},"display: inline-inline")," for the ScrollView internal elements with ",(0,r.kt)("inlineCode",{parentName:"p"},"display: inline-block")," to make them scroll horizontally."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/scroll-view.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ScrollViewProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  onScrollToUpper() {}\n\n  // or use arrow function\n  // onScrollToUpper = () => {}\n\n  onScroll(e){\n    console.log(e.detail)\n  }\n\n  render() {\n    const scrollStyle = {\n      height: '150px'\n    }\n    const scrollTop = 0\n    const Threshold = 20\n    const vStyleA = {\n      height: '150px',\n      'background-color': 'rgb(26, 173, 25)'\n    }\n    const vStyleB = {\n       height: '150px',\n      'background-color': 'rgb(39,130,215)'\n    }\n    const vStyleC = {\n      height: '150px',\n      'background-color': 'rgb(241,241,241)',\n      color: '#333'\n    }\n    return (\n      <ScrollView\n        className='scrollview'\n        scrollY\n        scrollWithAnimation\n        scrollTop={scrollTop}\n        style={scrollStyle}\n        lowerThreshold={Threshold}\n        upperThreshold={Threshold}\n        onScrollToUpper={this.onScrollToUpper.bind(this)} // When using the arrow function, you can write it like `onScrollToUpper={this.onScrollToUpper}`\n        onScroll={this.onScroll}\n      >\n        <View style={vStyleA}>A</View>\n        <View style={vStyleB}>B</View>\n        <View style={vStyleC}>C</View>\n      </ScrollView>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <view class="page-body">\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Vertical Scroll</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view :scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">\n            <view id="demo1" class="scroll-view-item demo-text-1">1</view>\n            <view id="demo2"  class="scroll-view-item demo-text-2">2</view>\n            <view id="demo3" class="scroll-view-item demo-text-3">3</view>\n          </scroll-view>\n        </view>\n      </view>\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Horizontal Scroll</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view class="scroll-view_H" :scroll-x="true" @scroll="scroll" style="width: 100%">\n            <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>\n            <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>\n            <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>\n          </scroll-view>\n        </view>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script>\nconst order = [\'demo1\', \'demo2\', \'demo3\']\nexport default {\n  name: \'Index\',\n  data() {\n    return {\n      scrollTop: 0,\n      toView: \'demo2\'\n    }\n  },\n\n  methods: {\n    upper(e) {\n      console.log(\'upper:\', e)\n    },\n\n    lower(e) {\n      console.log(\'lower:\', e)\n    },\n\n    scroll(e) {\n      console.log(\'scroll:\', e)\n    }\n  }\n}\n<\/script>\n\n<style>\n.page-section-spacing{\n  margin-top: 60rpx;\n}\n.scroll-view_H{\n  white-space: nowrap;\n}\n.scroll-view-item{\n  height: 300rpx;\n}\n.scroll-view-item_H{\n  display: inline-block;\n  width: 100%;\n  height: 300rpx;\n}\n\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n</style>\n')))),(0,r.kt)("h2",o({},{id:"scrollviewprops"}),"ScrollViewProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollX"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Supports horizontal scrolling.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollY"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Supports vertical scrolling.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"upperThreshold"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"50")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the distance from the top/left of the page when a scrolltoupper event is triggered.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lowerThreshold"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"50")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the distance from the bottom/right of the page when a scrolltoupper event is triggered.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollTop"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the location of the vertical scroll bar.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollLeft"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the location of the horizontal scroll bar.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollIntoView"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the direction to which the scroll bar can be moved. Its value should be the ID of a child element (the ID cannot begin with a number), and this child element is scrolled in the direction specified in this property.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollWithAnimation"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Uses an animation for transition when setting the scroll bar.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableBackToTop"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Enables the scroll bar to return to the top when the top status bar is tapped on iOS or the title bar is double-tapped on Android. Only vertical scrolling is supported. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableFlex"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Enables the flexbox layout. When enabled, the current node with ",(0,r.kt)("code",null,"display: flex")," declared becomes a flex container and acts on its children.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollAnchoring"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Turn on the scroll anchoring feature, which controls the scroll position from jittering as the content changes, only on iOS, see the CSS ",(0,r.kt)("code",null,"overflow-anchor")," property on Android.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"refresherEnabled"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Enable custom drop-down refresh.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"refresherThreshold"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"45")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Set a custom drop-down refresh threshold.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"refresherDefaultStyle"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"'black'")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"Set custom dropdown refresh default style, support ",(0,r.kt)("code",null,"black | white | none"),", none means don't use default style.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"refresherBackground"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"'#FFF'")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Set custom drop-down refresh area background color")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"refresherTriggered"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"fasle")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Set the current dropdown refresh status, true means the dropdown refresh has been triggered, false means the dropdown refresh has not been triggered.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onScrollToUpper"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Scrolling to the top/left will trigger the scrolltoupper event.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onScrollToLower"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Scrolling to the bottom/right will trigger the scrolltolower event.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onScroll"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<onScrollDetail>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered on scrolling.",(0,r.kt)("br",null),(0,r.kt)("code",null,"event.detail = ","{ scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onRefresherPulling"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Custom dropdown refresh control is dropped.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onRefresherRefresh"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"Custom dropdown refresh is triggered."}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onRefresherRestore"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Custom dropdown refresh is reset.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onRefresherAbort"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Custom dropdown refresh is aborted.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollX"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollY"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.upperThreshold"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.lowerThreshold"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollTop"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollLeft"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollIntoView"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollWithAnimation"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.enableBackToTop"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.enableFlex"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.scrollAnchoring"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.refresherEnabled"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.refresherThreshold"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.refresherDefaultStyle"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.refresherBackground"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.refresherTriggered"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onScrollToUpper"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onScrollToLower"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onScroll"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onRefresherPulling"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onRefresherRefresh"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onRefresherRestore"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"ScrollViewProps.onRefresherAbort"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"onscrolldetail"}),"onScrollDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollLeft"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Horizontal scrollbar position.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollTop"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Vertical scrollbar position.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollHeight"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Scroll bar height")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollWidth"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Scroll bar width")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"deltaX"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"deltaY"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null)))))}g.isMDXComponent=!0}}]);