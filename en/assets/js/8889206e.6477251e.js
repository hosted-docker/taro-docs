"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34213],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={title:"Vue2 Vuex"},i=void 0,s={unversionedId:"vuex",id:"version-3.x/vuex",title:"Vue2 Vuex",description:"Taro Vue2 \u652f\u6301\u4f7f\u7528 Vuex \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002",source:"@site/versioned_docs/version-3.x/vuex.md",sourceDirName:".",slug:"/vuex",permalink:"/mirror/taro-docs/en/docs/vuex",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/vuex.md",tags:[],version:"3.x",frontMatter:{title:"Vue2 Vuex"},sidebar:"docs",previous:{title:"Use Redux",permalink:"/mirror/taro-docs/en/docs/redux"},next:{title:"Vue3 Pinia",permalink:"/mirror/taro-docs/en/docs/pinia"}},l={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],p={toc:c};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro Vue2 \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://vuex.vuejs.org/"}),"Vuex")," \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002"),(0,r.kt)("h2",o({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,r.kt)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"vuex")," \u7684 3.x \u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ yarn add vuex@^3\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install vuex@^3\n")),(0,r.kt)("h2",o({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"taro init")," \u547d\u4ee4\u65f6\u9009\u62e9 Vue -> vuex \u5373\u53ef\u521b\u5efa vue2-redux \u6a21\u677f\u9879\u76ee\u3002")),(0,r.kt)("h2",o({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\uff0c\u6839\u636e\u9700\u6c42\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mutations"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getters"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import Vue from 'vue'\nimport Vuex from 'vuex'\n\nVue.use(Vuex)\n\nconst state = {\n  numbers: [1, 2, 3],\n}\n\nconst mutations = {\n  ADD_NUMBER(state, payload) {\n    state.numbers.push(payload)\n  },\n}\n\nconst actions = {\n  addNumber(context, number) {\n    context.commit('ADD_NUMBER', number)\n  },\n}\n\nconst getters = {\n  getNumbers(state) {\n    return state.numbers\n  },\n}\n\nexport default new Vuex.Store({\n  state,\n  mutations,\n  actions,\n  getters,\n})\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u5728\u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.$store")," \u83b7\u53d6\u5230 store\uff0c\u6211\u4eec\u9700\u8981\u628a store \u6ce8\u5165\u5230 Vue \u5b9e\u4f8b\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import Vue from 'vue'\nimport store from './store'\n\nconst App = {\n  store,\n  render(h) {\n    return h('block', this.$slots.default)\n  },\n}\n\nexport default App\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5373\u53ef\u4ee5\u5728 Vue \u7ec4\u4ef6\u4e2d\u4f7f\u7528 store \u4e86\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"this.$store.dispatch('addNumber', 1)\n")))}m.isMDXComponent=!0}}]);