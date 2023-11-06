"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70037],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Convert to React"},l=void 0,p={unversionedId:"convert-to-react",id:"version-3.x/convert-to-react",title:"Convert to React",description:"Secondary Development",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/convert-to-react.md",sourceDirName:".",slug:"/convert-to-react",permalink:"/mirror/taro-docs/en/docs/convert-to-react",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/convert-to-react.md",tags:[],version:"3.x",frontMatter:{title:"Convert to React"},sidebar:"docs",previous:{title:"WeChat Mini Program Convert to Taro",permalink:"/mirror/taro-docs/en/docs/taroize"},next:{title:"Troubleshooting",permalink:"/mirror/taro-docs/en/docs/taroize-troubleshooting"}},c={},d=[{value:"Secondary Development",id:"secondary-development",level:2},{value:"<code>this.setData</code>",id:"thissetdata",level:3},{value:"<code>this.data</code> \u548c <code>this.properties</code>",id:"thisdata-\u548c-thisproperties",level:3},{value:"Lifecycle",id:"lifecycle",level:3}],s={toc:d};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"secondary-development"}),"Secondary Development"),(0,r.kt)("p",null,"Mini Program Native Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"Page({\n  data: {\n    text: 'Hello World'\n  }\n})\n\n<view class=\"container\">\n  {{ text }}\n</view>\n")),(0,r.kt)("p",null,"After conversion:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { Block, View } from '@tarojs/components'\nimport React from 'react'\nimport Taro from '@tarojs/taro'\nimport withWeapp from '@tarojs/with-weapp'\nimport Title from '../../components/title/index'\nimport './index.scss'\n\n@withWeapp({\n  data: {\n    text: 'Hello World'\n  }\n})\nclass _C extends React.Component {\n  render() {\n    const { text } = this.data\n    return <View className=\"container\">{text}</View>\n  }\n}\n\nexport default _C\n")),(0,r.kt)("p",null,"t looks like a normal Taro component, the most important difference is the ",(0,r.kt)("inlineCode",{parentName:"p"},"@withWeapp()")," decorator, which you can interpret as a runtime for conversion code. ",(0,r.kt)("inlineCode",{parentName:"p"},"@withWeapp()")," adds some methods and properties that were not available in the original Taro, eg:"),(0,r.kt)("h3",a({},{id:"thissetdata"}),(0,r.kt)("inlineCode",{parentName:"h3"},"this.setData")),(0,r.kt)("p",null,"The API of the converted ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," is equivalent to the polyfill of ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," of the mini program, the biggest difference between it and ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState")," is that after ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," the data of ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is updated synchronously, while rendering is updated asynchronously, while ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," is updated asynchronously. both are asynchronous."),(0,r.kt)("h3",a({},{id:"thisdata-\u548c-thisproperties"}),(0,r.kt)("inlineCode",{parentName:"h3"},"this.data")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h3"},"this.properties")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this.data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"this.properties")," are aliases of Taro's ",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),", and when their data is updated, the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," will be updated as well."),(0,r.kt)("h3",a({},{id:"lifecycle"}),"Lifecycle"),(0,r.kt)("p",null,"Taro converts the lifecycle of the native mini program into the lifecycle of Taro, and the complete correspondence is as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Mini Program Lifecycle"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Taro Lifecycle"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onShow"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidShow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onHide"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidHide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"App.onLaunch"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onLaunch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onLoad"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onLoad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onReady"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onReady")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onUnload"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillUnmount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.created"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillMount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.attached"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidMount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.ready"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onReady")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.detached"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillUnmount")))))}m.isMDXComponent=!0}}]);