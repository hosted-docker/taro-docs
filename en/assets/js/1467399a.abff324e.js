"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11434],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=d(n),k=l,m=p["".concat(i,".").concat(k)]||p[k]||s[k]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[p]="string"==typeof t?t:l,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55256:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(93106),l=n(4706),a={tabItem:"tabItem_NDii"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,l.Z)(a.tabItem,n)},{hidden:e}),t)}},51417:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(93106),l=n(4706),a=n(76075),o=n(27907),u=n(48505),i=n(29136),d=n(6099);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function s(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:p(n);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function k({value:t,tabValues:e}){return e.some((e=>e.value===t))}function m({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),l=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),a=(0,u._X)(l),i=(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[l,n]);return[a,i]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=s(t),[o,u]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[i,c]=m({queryString:n,groupId:l}),[p,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,l]=(0,d.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&l.set(t)}),[e,l])]}({groupId:l}),h=(()=>{const t=null!=i?i:p;return k({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),c(t),g(t)}),[c,g,a]),tabValues:a}}var h=n(27614),y={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function b(){return b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b.apply(this,arguments)}function f({className:t,block:e,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=t=>{const e=t.currentTarget,r=i.indexOf(e),l=u[r].value;l!==n&&(d(e),o(l))},p=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const r=i.indexOf(t.currentTarget)+1;var n;e=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(t.currentTarget)-1;var r;e=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:a})=>r.createElement("li",b({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>i.push(t),onKeyDown:p,onClick:c},a,{className:(0,l.Z)("tabs__item",y.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function N({lazy:t,children:e,selectedValue:n}){const l=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(f,b({},t,e)),r.createElement(N,b({},t,e)))}function x(t){const e=(0,h.Z)();return r.createElement(v,b({key:String(e)},t))}},27101:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874),l=n(51417),a=n(55256);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const i={title:"Input",sidebar_label:"Input"},d=void 0,c={unversionedId:"components/forms/input",id:"version-3.x/components/forms/input",title:"Input",description:"Input box. This component is a Native Component. Note related limits before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/input.md",sourceDirName:"components/forms",slug:"/components/forms/input",permalink:"/mirror/taro-docs/en/docs/components/forms/input",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/input.md",tags:[],version:"3.x",frontMatter:{title:"Input",sidebar_label:"Input"},sidebar:"components",previous:{title:"Form",permalink:"/mirror/taro-docs/en/docs/components/forms/form"},next:{title:"KeyboardAccessory",permalink:"/mirror/taro-docs/en/docs/components/forms/keyboard-accessory"}},p={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"InputProps",id:"inputprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"inputEventDetail",id:"inputeventdetail",level:3},{value:"inputForceEventDetail",id:"inputforceeventdetail",level:3},{value:"inputValueEventDetail",id:"inputvalueeventdetail",level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:s},m="wrapper";function g(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)(m,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Input box. This component is a Native Component. Note related limits before use."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/input.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<InputProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  render () {\n    return (\n        <View className='example-body'>\n          <Text>Auto-focusable</Text>\n          <Input type='text' placeholder='focus will be acquired' focus/>\n          <Text>Controls the maximum input length</Text>\n          <Input type='text' placeholder='maximum input length is 10' maxlength='10'/>\n          <Text>Input box for numeric type</Text>\n          <Input type='number' placeholder='This is a numeric input box'/>\n          <Text>Input box for password type</Text>\n          <Input type='password' password placeholder='This is a password input box'/>\n          <Text>Input boxes for numeric types that allow decimals</Text>\n          <Input type='digit' placeholder='Numeric keypad with decimal point'/>\n          <Text>Input box for ID type</Text>\n          <Input type='idcard' placeholder='Keyboard support for entering ID cards'/>\n          <Text>Input box with placeholder color control</Text>\n          <Input type='text' placeholder='Placeholder font is red' placeholderStyle='color:red'/>\n        </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="example-body">\n    <text>Auto-focusable</text>\n    <input type="text" placeholder="focus will be acquired" :focus="true" />\n    <text>Controls the maximum input length</text>\n    <input type="text" placeholder="maximum input length is 10" maxlength="10"/>\n    <text>Input box for numeric type</text>\n    <input type="number" placeholder="This is a numeric input box"/>\n    <text>Input box for password type</text>\n    <input type="password" :password="true" placeholder="This is a password input box"/>\n    <text>Input boxes for numeric types that allow decimals</text>\n    <input type="digit" placeholder="Numeric keypad with decimal point"/>\n    <text>Input box for ID type</text>\n    <input type="idcard" placeholder="Keyboard support for entering ID cards"/>\n    <text>Input box with placeholder color control</text>\n    <input type="text" placeholder="Placeholder font is red" placeholder-style="color:red;"/>\n  </view>\n</template>\n')))),(0,r.kt)("h2",o({},{id:"inputprops"}),"InputProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The initial content in the input box")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"number" | "text" | "idcard" | "digit"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"text"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The type of input")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"password"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether the input is password-type content")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholder"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The placeholder used when the input box is empty")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholderStyle"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the style of the placeholder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholderClass"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"input-placeholder"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the style class of the placeholder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to disable the component")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"maxlength"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"140")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'The maximum length. When it is set to "-1", the maximum length is not limited.')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursorSpacing"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the distance between the cursor and the keyboard. It is either the distance between the input box and the bottom of the screen or the distance specified via cursor-spacing, whichever is smaller.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"(Will be discarded soon. Use the focus instead.) Auto focus. The keyboard is automatically displayed.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"focus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Gets focus")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"confirmType"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"send" | "search" | "next" | "go" | "done"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"done")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Sets the text on the lower-right button on the keyboard. It takes effect only when type='text'.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"confirmHold"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether the keyboard is not hidden when the lower-right button on the keyboard is tapped")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the cursor position during focusing")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectionStart"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"-1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The start position of the cursor. It takes effect only during auto focusing, and needs to used with selection-end.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectionEnd"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"-1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The end position of the cursor. It takes effect only during auto focusing, and needs to used with selection-start.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"adjustPosition"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to automatically push up the page when the keyboard is displayed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"holdKeyboard"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to hide the keyboard when the page is clicked when focused")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onInput"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<inputEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the user taps the keyboard. event.detail = ","{value, cursor, keyCode}",", where keyCode is the key value. The processing function can directly return a string to replace the content in the input box.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<inputForceEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the input box is focused. event.detail = ","{ value, height }",", where height is the height of the keyboard.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBlur"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the input box is unfocused. event.detail = ","{value}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onConfirm"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the Done button is tapped.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onKeyboardHeightChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the height of the keyboard changes.",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail = ","{height: height, duration: duration}")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.value"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.type"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(partial support)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.password"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.placeholder"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.placeholderStyle"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.placeholderClass"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.disabled"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.maxlength"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.cursorSpacing"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.autoFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.focus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.confirmType"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.confirmHold"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.cursor"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.selectionStart"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.selectionEnd"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.adjustPosition"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.holdKeyboard"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.onInput"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.onFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.onBlur"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.onConfirm"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"(Borrow the",(0,r.kt)("a",o({parentName:"td"},{href:"/mirror/taro-docs/en/docs/components/forms/form"}),"Form component's")," ",(0,r.kt)("inlineCode",{parentName:"td"},"onSubmit")," event instead)"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"InputProps.onKeyboardHeightChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"inputeventdetail"}),"inputEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"cursor position")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"keyCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Key Value")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: React-Native side ",(0,r.kt)("inlineCode",{parentName:"p"},"inputEventDetail")," only has parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\uff0cif you need to get the cursor position in real time, you can do it by ",(0,r.kt)("a",o({parentName:"p"},{href:"https://reactnative.dev/docs/textinput#onselectionchange"}),(0,r.kt)("inlineCode",{parentName:"a"},"onSelectionChange")),".")),(0,r.kt)("h3",o({},{id:"inputforceeventdetail"}),"inputForceEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Keyboard height")))),(0,r.kt)("h3",o({},{id:"inputvalueeventdetail"}),"inputValueEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")))),(0,r.kt)("h3",o({},{id:"onkeyboardheightchangeeventdetail"}),"onKeyboardHeightChangeEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Keyboard height")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Duration")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Input"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);