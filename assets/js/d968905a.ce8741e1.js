"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97980],{79874:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(d,m(m({ref:t},l),{},{components:r})):n.createElement(d,m({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,m[1]=i;for(var p=2;p<a;p++)m[p]=r[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26135:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return l}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const m={title:"Form",sidebar_label:"Form"},i=void 0,c={unversionedId:"components/forms/form",id:"version-1.x/components/forms/form",title:"Form",description:"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key",source:"@site/versioned_docs/version-1.x/components/forms/form.md",sourceDirName:"components/forms",slug:"/components/forms/form",permalink:"/mirror/taro-docs/docs/1.x/components/forms/form",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/form.md",tags:[],version:"1.x",frontMatter:{title:"Form",sidebar_label:"Form"},sidebar:"version-1.x/components",previous:{title:"Checkbox",permalink:"/mirror/taro-docs/docs/1.x/components/forms/checkbox"},next:{title:"Input",permalink:"/mirror/taro-docs/docs/1.x/components/forms/input"}},p={},l=[{value:"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key",id:"\u8868\u5355\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u5f53\u70b9\u51fb-\u8868\u5355\u4e2d-formtype-\u4e3a-submit-\u7684-button-\u7ec4\u4ef6\u65f6\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684-value-\u503c\u8fdb\u884c\u63d0\u4ea4\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a-name-\u6765\u4f5c\u4e3a-key",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],s={toc:l},u="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(u,o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h5",o({},{id:"\u8868\u5355\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u5f53\u70b9\u51fb-\u8868\u5355\u4e2d-formtype-\u4e3a-submit-\u7684-button-\u7ec4\u4ef6\u65f6\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684-value-\u503c\u8fdb\u884c\u63d0\u4ea4\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a-name-\u6765\u4f5c\u4e3a-key"}),"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"ReactNative"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5c5e\u6027\u503c"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"x"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"reportSubmit"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Boolean"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de formId \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"onSubmit"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"EventHandle"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6\uff0cevent.detail = {value : {'name': 'value'}}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"x"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"onReset"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"EventHandle"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/formlist/#form"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.alipay.com/mini/component/form"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/list/form"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,n.kt)("h6",o({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Form \u7ec4\u4ef6\nimport { View, Form, Switch } from '@tarojs/components'\n\nclass App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n")))}f.isMDXComponent=!0}}]);