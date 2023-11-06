"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76089],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=o(a),f=n,g=N["".concat(m,".").concat(f)]||N[f]||k[f]||l;return a?r.createElement(g,i(i({ref:e},d),{},{components:a})):r.createElement(g,i({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},2193:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={title:"Slider",sidebar_label:"Slider"},p=void 0,m={unversionedId:"components/forms/slider",id:"version-1.x/components/forms/slider",title:"Slider",description:"\u6ed1\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-1.x/components/forms/slider.md",sourceDirName:"components/forms",slug:"/components/forms/slider",permalink:"/mirror/taro-docs/docs/1.x/components/forms/slider",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/slider.md",tags:[],version:"1.x",frontMatter:{title:"Slider",sidebar_label:"Slider"},sidebar:"version-1.x/components",previous:{title:"Radio",permalink:"/mirror/taro-docs/docs/1.x/components/forms/radio"},next:{title:"Switch",permalink:"/mirror/taro-docs/docs/1.x/components/forms/switch"}},o={},d=[{value:"\u6ed1\u52a8\u9009\u62e9\u5668",id:"\u6ed1\u52a8\u9009\u62e9\u5668",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],k={toc:d};function N(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h5",n({},{id:"\u6ed1\u52a8\u9009\u62e9\u5668"}),"\u6ed1\u52a8\u9009\u62e9\u5668"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"min"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u6700\u5c0f\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"max"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"100"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u6700\u5927\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"step"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"1"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab(max - min)\u6574\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"disabled"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"value"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u53d6\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"#e9e9e9"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u80cc\u666f\u6761\u7684\u989c\u8272\uff08\u8bf7\u4f7f\u7528 backgroundColor\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"selectedColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"#1aad19"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5df2\u9009\u62e9\u7684\u989c\u8272\uff08\u8bf7\u4f7f\u7528 activeColor\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"activeColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"#1aad19"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5df2\u9009\u62e9\u7684\u989c\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"backgroundColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"#e9e9e9"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u80cc\u666f\u6761\u7684\u989c\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"blockSize"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"28"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u6ed1\u5757\u7684\u5927\u5c0f\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 12 - 28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"blockColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"#ffffff"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u6ed1\u5757\u7684\u989c\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"showValue"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f\u5426\u663e\u793a\u5f53\u524d value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"onChange"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"EventHandle"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5b8c\u6210\u4e00\u6b21\u62d6\u52a8\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"onChanging"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"EventHandle"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"ReactNative"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"min"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"max"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"step"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"disabled"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"value"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"color"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"selectedColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"})),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"activeColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"backgroundColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"blockSize"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"blockColor"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"showValue"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"onChange"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"onChanging"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u2714")))),(0,r.kt)("h6",n({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text, Slider } from '@tarojs/components'\n\nexport default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8bbe\u7f6e step</Text>\n        <Slider step={1} value={50}/>\n        <Text>\u663e\u793a\u5f53\u524d value</Text>\n        <Slider step={1} value={50} showValue/>\n        <Text>\u8bbe\u7f6e\u6700\u5c0f/\u6700\u5927\u503c</Text>\n        <Slider step={1} value={100} showValue min={50} max={200}/>\n      </View>\n    )\n  }\n}\n")))}N.isMDXComponent=!0}}]);