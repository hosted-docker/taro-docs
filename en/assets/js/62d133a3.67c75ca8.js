"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[87605],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91264:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),a=n(4706),l={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:e}),t)}},8602:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(93106),a=n(4706),l=n(29369),o=n(27907),i=n(3111),u=n(65009),c=n(42615);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:d(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function m({value:t,tabValues:e}){return e.some((e=>e.value===t))}function k({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),a=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,i._X)(a),u=(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(n.location.search);e.set(a,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[a,n]);return[l,u]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=p(t),[o,i]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[u,s]=k({queryString:n,groupId:a}),[d,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,a]=(0,c.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&a.set(t)}),[e,a])]}({groupId:a}),h=(()=>{const t=null!=u?u:d;return m({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),g(t)}),[s,g,l]),tabValues:l}}var h=n(81600),f={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:o,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),s=t=>{const e=t.currentTarget,r=u.indexOf(e),a=i[r].value;a!==n&&(c(e),o(a))},d=t=>{let e=null;switch(t.key){case"Enter":s(t);break;case"ArrowRight":{const r=u.indexOf(t.currentTarget)+1;var n;e=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(t.currentTarget)-1;var r;e=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":e},t)},i.map((({value:t,label:e,attributes:l})=>r.createElement("li",y({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>u.push(t),onKeyDown:d,onClick:s},l,{className:(0,a.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function v({lazy:t,children:e,selectedValue:n}){const a=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function N(t){const e=g(t);return r.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},r.createElement(b,y({},t,e)),r.createElement(v,y({},t,e)))}function x(t){const e=(0,h.Z)();return r.createElement(N,y({key:String(e)},t))}},66069:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});n(93106);var r=n(79874),a=n(8602),l=n(91264);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={title:"Editor",sidebar_label:"Editor"},c=void 0,s={unversionedId:"components/forms/editor",id:"version-3.x/components/forms/editor",title:"Editor",description:"Rich text editor that allows you to edit images and text.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/editor.md",sourceDirName:"components/forms",slug:"/components/forms/editor",permalink:"/mirror/taro-docs/en/docs/components/forms/editor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/editor.md",tags:[],version:"3.x",frontMatter:{title:"Editor",sidebar_label:"Editor"},sidebar:"components",previous:{title:"CheckboxGroup",permalink:"/mirror/taro-docs/en/docs/components/forms/checkbox-group"},next:{title:"Form",permalink:"/mirror/taro-docs/en/docs/components/forms/form"}},d={},p=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"EditorProps",id:"editorprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"editorEventDetail",id:"editoreventdetail",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:p},k="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(k,o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rich text editor that allows you to edit images and text."),(0,r.kt)("p",null,"The editor can export plain text and html that contains tags, and store data in the form of delta files."),(0,r.kt)("p",null,"When the content is set via the setContents API, the html inserted during content parsing may cause a parsing error due to some invalid tags. We recommend that the html inserted into Mini Programs be delta-formatted."),(0,r.kt)("p",null,"Some basic styles are introduced to the rich text component to ensure that the content is correctly displayed. These basic styles can be overwritten during development. To export html via the rich text component from other components or environments, you need to additionally introduce This Section of Styles, and maintain the ",(0,r.kt)("ql-container",null,(0,r.kt)("ql-editor",null))," structure."),(0,r.kt)("p",null,"Image controls take effect only during initialization."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Some HTML tags and inline styles are supported within the editor, ",(0,r.kt)("strong",{parentName:"em"},"class")," and ",(0,r.kt)("strong",{parentName:"em"},"id")," are not supported")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/editor.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<EditorProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    placeholder: 'Please enter your nickname...'\n  }\n\n  editorReady = e => {\n    Taro.createSelectorQuery().select('#editor').context((res) => {\n      this.editorCtx = res.context\n    }).exec()\n  }\n\n  undo = e => {\n    this.editorCtx.undo()\n  }\n\n  render () {\n    return (\n      <View>\n        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>\n        <Button type='warn' onClick={this.undo}>Undo</Button>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>\n    <button type="warn" @tap="undo">Undo</button>\n  </view>\n</template>\n\n<script>\n  import Taro from \'@tarojs/taro\'\n  export default {\n    data() {\n      return {\n        placeholder: \'Please enter your nickname...\'\n      }\n    },\n    methods: {\n      editorReady() {\n        Taro.createSelectorQuery().select(\'#editor\').context((res) => {\n          this.editorCtx = res.context\n        }).exec()\n      },\n      undo() {\n        this.editorCtx.undo()\n      }\n    }\n  }\n<\/script>\n')))),(0,r.kt)("h2",o({},{id:"editorprops"}),"EditorProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"readOnly"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Sets the editor to read-only")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholder"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Prompts information")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"showImgSize"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Displays the image size control when the image is tapped")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"showImgToolbar"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Displays the toolbar control when the image is tapped")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"showImgResize"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Displays the size change control when the image is tapped")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onReady"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered after the editor is initialized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the editor is focused.",(0,r.kt)("br",null),"event.detail = ","{ html, text, delta }")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBlur"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the editor is unfocused.",(0,r.kt)("br",null),"detail = ","{ html, text, delta }")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onInput"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the editor content changes.",(0,r.kt)("br",null),"detail = ","{ html, text, delta }")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onStatuschange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when styles in the editor are changed via Context. It returns the styles that are set for the selected area.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.readOnly"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.placeholder"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgSize"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgToolbar"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgResize"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onReady"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onBlur"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onInput"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onStatuschange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"editoreventdetail"}),"editorEventDetail"),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Editor"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0}}]);