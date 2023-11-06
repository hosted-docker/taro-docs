"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92099],{79874:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=r,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(d,p(p({ref:t},c),{},{components:a})):n.createElement(d,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34613:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={title:"Taro v3.5 \u6b63\u5f0f\u53d1\u5e03\uff1a\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",authors:["zhiqingchen","SyMind","Flame","JJ","TJ"],tags:["v3"],description:"Taro v3.5 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03 \ud83d\ude80"},o=void 0,i={permalink:"/mirror/taro-docs/blog/2022/07/26/Taro-3.5",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2022-07-26-Taro-3.5.md",source:"@site/blog/2022-07-26-Taro-3.5.md",title:"Taro v3.5 \u6b63\u5f0f\u53d1\u5e03\uff1a\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",description:"Taro v3.5 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03 \ud83d\ude80",date:"2022-07-26T00:00:00.000Z",formattedDate:"2022\u5e747\u670826\u65e5",tags:[{label:"v3",permalink:"/mirror/taro-docs/blog/tags/v-3"}],readingTime:12.82,hasTruncateMarker:!1,authors:[{name:"zhiqingchen",title:"58 \u540c\u57ce\u524d\u7aef\u67b6\u6784\u5e08\u3001Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro-RN \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/zhiqingchen",imageURL:"https://avatars1.githubusercontent.com/u/1876158?s=88&u=0305430cab9f7a516c720e7fc7f8680df1c835b9&v=4",key:"zhiqingchen"},{name:"Cong-Cong Pan",title:"Taro \u5408\u4f5c\u8005",url:"https://github.com/SyMind",imageURL:"https://avatars.githubusercontent.com/u/19852293?v=4",key:"SyMind"},{name:"Flame",title:"Taro \u5408\u4f5c\u8005",url:"https://github.com/AdvancedCat",imageURL:"https://avatars.githubusercontent.com/u/7858761?v=4",key:"Flame"},{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"},{name:"TJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4",url:"https://github.com/ZakaryCode",imageURL:"https://avatars.githubusercontent.com/u/24262362?v=4",key:"TJ"}],frontMatter:{title:"Taro v3.5 \u6b63\u5f0f\u53d1\u5e03\uff1a\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",authors:["zhiqingchen","SyMind","Flame","JJ","TJ"],tags:["v3"],description:"Taro v3.5 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03 \ud83d\ude80"},prevItem:{title:"Taro v3.6 \u4ee3\u53f7\u4e3a\u300cReach\u300d\uff0c\u5df2\u53d1\u5e03 canary \u7248\u672c",permalink:"/mirror/taro-docs/blog/2022/11/18/Taro-3.6-canary"},nextItem:{title:"Taro v3.5 beta \u7f16\u8bd1\u63d0\u901f\uff0c\u652f\u6301 Webpack5\u3001React 18...",permalink:"/mirror/taro-docs/blog/2022/05/19/Taro-3.5-beta"}},u={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},c=[{value:"\u4e00\u3001\u7f16\u8bd1\u63d0\u901f",id:"\u4e00\u7f16\u8bd1\u63d0\u901f",level:2},{value:"\u63d0\u901f\u6548\u679c",id:"\u63d0\u901f\u6548\u679c",level:3},{value:"\u4e8c\u3001RN",id:"\u4e8crn",level:2},{value:"1. React Native 0.68 \u7248\u672c\u652f\u6301",id:"1-react-native-068-\u7248\u672c\u652f\u6301",level:3},{value:"2. RN <strong>\u76f8\u5173\u4f9d\u8d56\u5e93\u7531 unimodules \u5347\u7ea7\u81f3 expo</strong>",id:"2-rn-\u76f8\u5173\u4f9d\u8d56\u5e93\u7531-unimodules-\u5347\u7ea7\u81f3-expo",level:3},{value:"3. <strong>\u652f\u6301\u628a Taro \u7ec4\u4ef6\u7f16\u8bd1\u4e3a React Native \u7ec4\u4ef6</strong>",id:"3-\u652f\u6301\u628a-taro-\u7ec4\u4ef6\u7f16\u8bd1\u4e3a-react-native-\u7ec4\u4ef6",level:3},{value:"4. \u7f16\u8bd1\u6253\u5305\u65b9\u6848\u4f18\u5316",id:"4-\u7f16\u8bd1\u6253\u5305\u65b9\u6848\u4f18\u5316",level:3},{value:"5. \u8c03\u8bd5\u5de5\u5177 Taro Playground \u5347\u7ea7\u81f3 Taro 3.5 \u7248\u672c\u53ca React Native 0.68",id:"5-\u8c03\u8bd5\u5de5\u5177-taro-playground-\u5347\u7ea7\u81f3-taro-35-\u7248\u672c\u53ca-react-native-068",level:3},{value:"6. \u58f3\u5de5\u7a0b\u4ee3\u7801\u6574\u7406",id:"6-\u58f3\u5de5\u7a0b\u4ee3\u7801\u6574\u7406",level:3},{value:"\u4e09\u3001pnpm",id:"\u4e09pnpm",level:2},{value:"\u56db\u3001\u5176\u5b83\u7279\u6027",id:"\u56db\u5176\u5b83\u7279\u6027",level:2},{value:"1. \u9002\u914d React 18",id:"1-\u9002\u914d-react-18",level:3},{value:"2. H5 \u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3",id:"2-h5-\u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3",level:3},{value:"3. H5 \u652f\u6301\u591a\u9875\u5e94\u7528\u6a21\u5f0f",id:"3-h5-\u652f\u6301\u591a\u9875\u5e94\u7528\u6a21\u5f0f",level:3},{value:"4. \u8865\u5168\u5bf9\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u652f\u6301",id:"4-\u8865\u5168\u5bf9\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u652f\u6301",level:3},{value:"5. \u5c0f\u7a0b\u5e8f\u5185\u90e8\u5b9e\u73b0\u4f18\u5316",id:"5-\u5c0f\u7a0b\u5e8f\u5185\u90e8\u5b9e\u73b0\u4f18\u5316",level:3},{value:"\u4e94\u3001\u5347\u7ea7\u6307\u5357",id:"\u4e94\u5347\u7ea7\u6307\u5357",level:2},{value:"1. \u5347\u7ea7 Taro CLI",id:"1-\u5347\u7ea7-taro-cli",level:3},{value:"2. \u66f4\u65b0\u9879\u76ee\u4f9d\u8d56",id:"2-\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56",level:3},{value:"2.1 \u66f4\u65b0\u9879\u76ee\u5185\u7684 Taro \u76f8\u5173\u4f9d\u8d56",id:"21-\u66f4\u65b0\u9879\u76ee\u5185\u7684-taro-\u76f8\u5173\u4f9d\u8d56",level:3},{value:"2.2 \u4f7f\u7528 React \u7684\u9879\u76ee",id:"22-\u4f7f\u7528-react-\u7684\u9879\u76ee",level:3},{value:"2.3 \u4f7f\u7528 PReact \u7684\u9879\u76ee",id:"23-\u4f7f\u7528-preact-\u7684\u9879\u76ee",level:3},{value:"2.4 \u4f7f\u7528 Vue2 \u7684\u9879\u76ee",id:"24-\u4f7f\u7528-vue2-\u7684\u9879\u76ee",level:3},{value:"2.5 \u4f7f\u7528 Vue3 \u7684\u9879\u76ee",id:"25-\u4f7f\u7528-vue3-\u7684\u9879\u76ee",level:3},{value:"3. \u4f7f\u7528 Webpack5",id:"3-\u4f7f\u7528-webpack5",level:3},{value:"4. \u4f7f\u7528 React 18",id:"4-\u4f7f\u7528-react-18",level:3},{value:"5. \u4f7f\u7528 pnpm",id:"5-\u4f7f\u7528-pnpm",level:3},{value:"\u516d\u3001\u6700\u540e",id:"\u516d\u6700\u540e",level:2}],s={toc:c};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8ddd\u79bb Taro 3.5 \u7684 Beta \u7248\u672c\u53d1\u5e03\u5df2\u6709\u4e24\u4e2a\u6708\u7684\u65f6\u95f4\uff0c\u671f\u95f4\u6211\u4eec\u5728\u4e0d\u65ad\u5730\u5bf9\u57fa\u4e8e Webpack5 \u7684\u7f16\u8bd1\u7cfb\u7edf\u3001\u57fa\u4e8e Next.js \u7684 SSR \u7b49\u529f\u80fd\u8fdb\u884c\u6253\u78e8\u7684\u540c\u65f6\uff0c\u65b0\u589e\u4e86\u5bf9 pnpm \u7684\u652f\u6301\u7b49\u65b0\u529f\u80fd\u3002\u6b64\u5916 Taro \u793e\u533a\u4e5f\u6709\u5f88\u591a\u540c\u5b66\u53c2\u4e0e\u5171\u5efa\uff0c\u5982 Taro \u5408\u4f5c\u8005 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/biorz"}),"@biorz")," \u4e3a ReactNative \u4fa7\u8d21\u732e\u4e86\u91cd\u8981\u7279\u6027\uff1a\u652f\u6301\u628a Taro \u7ec4\u4ef6\u7f16\u8bd1\u4e3a RN \u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,"\u65e5\u524d Taro v3.5 \u5df2\u6b63\u5f0f\u53d1\u5e03\uff0c\u4e0b\u6587\u5c06\u4ecb\u7ecd\u5173\u4e8e 3.5 \u7684\u4e3b\u8981\u7279\u6027\u4e0e\u91cd\u8981\u4fee\u590d\uff0c\u4ee5\u53ca\u540e\u7eed\u7684\u7248\u672c\u89c4\u5212\u3002"),(0,n.kt)("h2",r({},{id:"\u4e00\u7f16\u8bd1\u63d0\u901f"}),"\u4e00\u3001\u7f16\u8bd1\u63d0\u901f"),(0,n.kt)("p",null,"Taro v3.5 \u57fa\u4e8e Webpack5 \u6784\u5efa\u4e86\u65b0\u7684\u7f16\u8bd1\u7cfb\u7edf\uff0c\u5229\u7528\u6301\u4e45\u5316\u7f13\u5b58\u3001\u4f9d\u8d56\u9884\u7f16\u8bd1\u3001SWC \u7b49\u65b9\u6cd5\u4e0e\u5de5\u5177\uff0c\u5927\u5e45\u964d\u4f4e\u4e86\u7f16\u8bd1\u6240\u9700\u8017\u65f6\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5207\u6362\u4f7f\u7528 Webpack5 \u8fdb\u884c\u7f16\u8bd1\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u4fdd\u6301\u4f7f\u7528 Webpack4\uff0c\u53e6\u5916\u5728 v3.6 \u4e2d Taro \u8fd8\u5c06\u652f\u6301\u4f7f\u7528 Vite \u8fdb\u884c\u7f16\u8bd1\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f9d\u8d56\u9884\u7f16\u8bd1\u53ef\u4ee5\u9884\u5148\u628a\u9879\u76ee\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u6253\u5305\u4e3a\u4e00\u4e2a\u6a21\u5757\u8054\u90a6 remote \u5e94\u7528\uff0c\u518d\u6b21\u7f16\u8bd1\u65f6 Webpack \u65e0\u9700\u518d\u5bf9\u8fd9\u4e9b\u4f9d\u8d56\u8fdb\u884c\u7f16\u8bd1\uff0c\u4ece\u800c\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\u3002\u5173\u4e8e Webpack5 \u7f16\u8bd1\u7cfb\u7edf\u7684\u5b9e\u73b0\u7ec6\u8282\uff0c\u8bf7\u6d4f\u89c8 \u300aTaro v3.5 beta \u7f16\u8bd1\u63d0\u901f\u300b")),(0,n.kt)("p",null,"v3.5 Beta \u53d1\u5e03\u540e\uff0c\u6211\u4eec\u8865\u5168\u4e86 H5 \u7aef\u7684\u4f9d\u8d56\u9884\u7f16\u8bd1\u529f\u80fd\uff0c\u5e76\u4e14\u628a\u4f9d\u8d56\u9884\u7f16\u8bd1\u4f5c\u4e3a\u4e00\u4e2a\u901a\u7528\u80fd\u529b\u63d0\u53d6\u4e86\u51fa\u6765\u3002\u53ef\u4f9b Taro \u4ee5\u5916\u7684\u4f7f\u7528 Webpack5 \u7684 H5 \u9879\u76ee\u4f7f\u7528\uff0c\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack5-prebundle")," \u8fdb\u884c\u7f16\u8bd1\u63d0\u901f\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/next/prebundle#%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8E%A5%E5%85%A5"}),"\u76f8\u5173\u6587\u6863"),"\u3002"),(0,n.kt)("h3",r({},{id:"\u63d0\u901f\u6548\u679c"}),"\u63d0\u901f\u6548\u679c"),(0,n.kt)("p",null,"\u4ee5 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/jdf2e/nutui/tree/next/src/sites/mobile-taro/vue"}),"NutUI \u7ec4\u4ef6\u793a\u4f8b\u5e93")," \u4e3a\u4f8b\uff0c\u5c0f\u7a0b\u5e8f\u3001H5 \u7aef\u7684\u7f16\u8bd1\u901f\u5ea6\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c0f\u7a0b\u5e8f\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",r({parentName:"p"},{src:"https://storage.360buyimg.com/cjj-pub-images/mini-speed.jpeg",alt:"GroupBar-20220725.jpeg"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"H5\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",r({parentName:"p"},{src:"https://storage.360buyimg.com/cjj-pub-images/web-speed.jpeg",alt:"GroupBar-20220725 (1).jpeg"}))),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("p",null,"\u7b80\u5355\u4fee\u6539 Taro \u7684\u7f16\u8bd1\u914d\u7f6e\u5373\u53ef\u5207\u6362\u4f7f\u7528 Webpack4 \u6216 Webpack5 \u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"/** config/index.js */\nconst config = {\n  // \u81ea\u5b9a\u4e49\u7f16\u8bd1\u5de5\u5177\uff0c\u53ef\u9009 'Webpack4' \u6216 'Webpack5'\n  compiler: 'webpack4' || 'webpack5',\n}\n")),(0,n.kt)("h2",r({},{id:"\u4e8crn"}),"\u4e8c\u3001RN"),(0,n.kt)("h3",r({},{id:"1-react-native-068-\u7248\u672c\u652f\u6301"}),"1. React Native 0.68 \u7248\u672c\u652f\u6301"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://reactnative.dev/blog/2022/03/30/version-068"}),"React Native 0.68 \u7248\u672c\u5df2\u4e8e 2022-3-30 \u6b63\u5f0f\u53d1\u5e03"),"\u30020.68 \u662f\u9996\u4e2a\u53ef\u9009\u63a5\u5165 New Architecture \u7684\u7248\u672c\uff0c\u65b0\u67b6\u6784\u6709\u671b\u4e3a RN \u5e26\u6765\u6027\u80fd\u548c\u4f53\u9a8c\u4e0a\u7684\u98de\u8dc3\u3002Taro \u9ed8\u8ba4\u9009\u62e9\u7684 RN \u7248\u672c\uff0c\u6b63\u5f0f\u5207\u6362\u5230\u4e86 0.68\uff0c\u5f00\u53d1\u8005\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init")," \u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," \u6a21\u677f\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u53e6\u5916 0.69 \u7248\u672c\u7684\u9002\u914d\uff0c\u4e5f\u5728\u8fdb\u5c55\u4e2d\u3002"),(0,n.kt)("h3",r({},{id:"2-rn-\u76f8\u5173\u4f9d\u8d56\u5e93\u7531-unimodules-\u5347\u7ea7\u81f3-expo"}),"2. RN ",(0,n.kt)("strong",{parentName:"h3"},"\u76f8\u5173\u4f9d\u8d56\u5e93\u7531 unimodules \u5347\u7ea7\u81f3 expo")),(0,n.kt)("p",null,"Expo \u662f React Native \u751f\u6001\u4e2d\u7684\u91cd\u8981\u89d2\u8272\uff0c\u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u4f18\u79c0\u7684\u6a21\u5757\uff0c\u5728 Taro \u4e2d\u6709\u8f83\u4e3a\u5e7f\u6cdb\u7684\u4f7f\u7528\uff0c\u5982 expo-av\u3001expo-camera \u7b49\uff0c\u5c06\u6765\u6211\u4eec\u8fd8\u4f1a\u6301\u7eed\u63a5\u5165\u65b0\u7684\u6a21\u5757\u3002Expo \u7684\u6a21\u5757\u7cfb\u7edf\uff0c\u7531 unimodules \u53d8\u66f4\u4e3a expo \u5df2\u6709\u4e00\u6bb5\u65f6\u65e5\uff0c\u5176\u67b6\u6784\u53d8\u66f4\u539f\u56e0\u53ef\u53c2\u8003\u6587\u7ae0\uff1a\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://blog.expo.dev/whats-new-in-expo-modules-infrastructure-7a7cdda81ebc"}),"What\u2019s new in Expo modules infrastructure"),"\u3002"),(0,n.kt)("p",null,"Taro v3.5 \u53ca\u4ee5\u540e\u5c06\u4f7f\u7528\u65b0\u7684\u6a21\u5757\u7cfb\u7edf\uff0c\u540e\u7eed\u58f3\u5de5\u7a0b\u4e0d\u518d\u5305\u542b unimodules \u7248\u672c\u3002\u65e7\u7248\u672c\u5347\u7ea7\u53ef\u53c2\u8003\u6b64 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell/pull/72"}),"PR"),"\uff0c\u5347\u7ea7\u8fc7\u7a0b\u8f83\u4e3a\u7e41\u7410\uff0c\u5efa\u8bae\u91cd\u65b0 init \u4e00\u4e2a\u4ed3\u5e93\uff0c\u518d\u5c06\u4e1a\u52a1\u6539\u52a8\u540c\u6b65\u3002\u5347\u7ea7\u4e3a expo \u540e\uff0c\u4e0d\u518d\u652f\u6301 iOS 11\uff0c\u8be6\u7ec6\u5185\u5bb9\u8bf7\u53c2\u8003 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/11565"}),"discussions"),"\u3002"),(0,n.kt)("h3",r({},{id:"3-\u652f\u6301\u628a-taro-\u7ec4\u4ef6\u7f16\u8bd1\u4e3a-react-native-\u7ec4\u4ef6"}),"3. ",(0,n.kt)("strong",{parentName:"h3"},"\u652f\u6301\u628a Taro \u7ec4\u4ef6\u7f16\u8bd1\u4e3a React Native \u7ec4\u4ef6")),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u73b0\u5b58\u7684 React Native \u9879\u76ee\u4e2d(\u975e Taro RN )\uff0c\u590d\u7528\u60a8\u7684 Taro \u7ec4\u4ef6\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b0\u529f\u80fd\u6216\u8bb8\u9002\u5408\u60a8\u3002"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u7f16\u8bd1\u7ec4\u4ef6\uff0c\u7f16\u8bd1\u540e\u7684\u7ec4\u4ef6\u4ea7\u7269\u53ef\u4ee5\u76f4\u63a5\u5728 React Native \u9879\u76ee\u4e2d\u4f7f\u7528\u3002 \u8be6\u7ec6\u5185\u5bb9\u8bf7\u53c2\u8003 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/11860"}),"discussions"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"taro build native-components --type rn\n")),(0,n.kt)("h3",r({},{id:"4-\u7f16\u8bd1\u6253\u5305\u65b9\u6848\u4f18\u5316"}),"4. \u7f16\u8bd1\u6253\u5305\u65b9\u6848\u4f18\u5316"),(0,n.kt)("p",null,"Android \u7684\u6253\u5305\u8fc7\u7a0b\uff0c\u4ece\u8c03\u7528 gradlew \u6539\u4e3a\u4f7f\u7528 \xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.fastlane.tools/"}),"fastlane"),"\uff0c\u5c06\u6253\u5305\u8fc7\u7a0b\u914d\u7f6e\u5316\uff0c\u5c3d\u53ef\u80fd\u5730\u51cf\u5c11\u5bf9 RN \u521d\u59cb\u5316\u540e\u539f\u751f\u4ee3\u7801\u7684\u5165\u4fb5\u3002\u76f8\u5173\u914d\u7f6e\u4f4d\u4e8e \xa0",(0,n.kt)("inlineCode",{parentName:"p"},"android/fastlane"),"\uff0c\u76ee\u524d\u4ec5\u505a\u4e86\u57fa\u7840\u914d\u7f6e\uff0c\u5f00\u53d1\u8005\u53ef\u8fdb\u4e00\u6b65\u81ea\u5b9a\u4e49\u3002"),(0,n.kt)("p",null,"\u521a\u63a5\u89e6 Taro \u5f00\u53d1 APP \u7684\u5f00\u53d1\u8005\uff0c\u7ecf\u5e38\u5728\u5f00\u53d1\u73af\u5883\u7684\u914d\u7f6e\u4e0a\uff0c\u6d88\u8017\u5927\u91cf\u65f6\u95f4\u3002\u518d\u6b21\u5efa\u8bae\u5927\u5bb6\u5148\u5b66\u4e60\u5229\u7528 GitHub Action \u8fdb\u884c\u6253\u5305\u7f16\u8bd1\uff0c\u76f8\u5173\u4ee3\u7801\u4f4d\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},".github")," \u76ee\u5f55\u4e2d\u3002"),(0,n.kt)("h3",r({},{id:"5-\u8c03\u8bd5\u5de5\u5177-taro-playground-\u5347\u7ea7\u81f3-taro-35-\u7248\u672c\u53ca-react-native-068"}),"5. \u8c03\u8bd5\u5de5\u5177 Taro Playground \u5347\u7ea7\u81f3 Taro 3.5 \u7248\u672c\u53ca React Native 0.68"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground"}),"Taro Playground")," \u4f5c\u4e3a Taro RN \u7aef\u7684\u8c03\u8bd5\u5de5\u5177\u53ca\u8de8\u7aef Demo\uff0c\u8fdb\u884c\u4e86\u540c\u6b65\u66f4\u65b0\u3002\u6b64\u6b21\u66f4\u65b0\u65e0\u6cd5\u4fdd\u8bc1\u5411\u4e0b\u517c\u5bb9\uff0c\u4f7f\u7528\u65e7\u7248\u672c Taro \u7684\u5f00\u53d1\u8005\uff0c\u5982\u9700\u8c03\u8bd5 Android\uff0c\u53ef\u5728 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground/releases"}),"releases")," \u4e2d\u4e0b\u8f7d\u65e7\u5305\u8fdb\u884c\u8c03\u8bd5\u3002\u5728 App Store \u4e2d\uff0c\u6211\u4eec\u53ea\u4e0a\u67b6\u6700\u65b0\u7248\u672c\uff0c\u9700\u8981\u65e7\u7248\u672c\u7684\u5f00\u53d1\u8005\u8bf7\u4e0d\u8981\u5f00\u542f\u5e94\u7528\u81ea\u52a8\u66f4\u65b0\u3002\u5982\u4e0d\u614e\u5347\u7ea7\uff0c\u9700\u81ea\u884c\u6253\u5305\u7f16\u8bd1\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u52a0\u5165\u6d4b\u8bd5\u7ec4\u3002"),(0,n.kt)("h3",r({},{id:"6-\u58f3\u5de5\u7a0b\u4ee3\u7801\u6574\u7406"}),"6. \u58f3\u5de5\u7a0b\u4ee3\u7801\u6574\u7406"),(0,n.kt)("p",null,"\u5bf9\u4e8e 0.68 \u7248\u672c\u7684",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.68.0"}),"\u58f3\u5de5\u7a0b"),"\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4ee3\u7801\u7684\u91cd\u65b0\u6574\u7406\u3002\u5c06\u521d\u59cb\u5316 RN\u3001\u5b89\u88c5 expo\u3001\u517c\u5bb9 Taro\u3001\u5b89\u88c5\u4f9d\u8d56\u3001\u6dfb\u52a0 Github Action\uff0c\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u4e00\u4e00\u5217\u51fa\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5728\u5b9a\u5236\u58f3\u5de5\u7a0b\u65f6\u8fdb\u884c\u53c2\u8003\u3002"),(0,n.kt)("h2",r({},{id:"\u4e09pnpm"}),"\u4e09\u3001pnpm"),(0,n.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0cpnpm \u5728\u5f53\u4e0b\u88ab\u8a89\u4e3a\u201c\u6700\u5148\u8fdb\u7684\u5305\u7ba1\u7406\u5de5\u5177\u201d\uff0c\u5b83\u662f\u7531 npm/yarn \u884d\u751f\u800c\u6765\uff0c\u89e3\u51b3\u4e86 npm/yarn \u5185\u90e8\u6f5c\u5728\u7684 bug\uff0c\u6781\u5927\u7684\u4f18\u5316\u4e86\u6027\u80fd\uff0c\u6269\u5c55\u4e86\u4f7f\u7528\u573a\u666f\u3002\u5728\u793e\u533a\u5185\u5f88\u9ad8\u7684\u547c\u58f0\u4e0b\uff0cTaro \u4e5f\u5728\u63d0\u4f9b\u4e86\u8fd9\u4e00\u70ed\u95e8\u7684\u5305\u7ba1\u7406\u5de5\u5177\u9009\u9879\u3002"),(0,n.kt)("p",null,"\u5728 Taro v3.5 \u7248\u672c\u4ee5\u540e\uff0c\u5728\u811a\u624b\u67b6\u5185\u7f6e\u5305\u7ba1\u7406\u5de5\u5177\u4e0d\u518d\u81ea\u52a8\u8bc6\u522b\u672c\u5730\u73af\u5883\u5185\u5b89\u88c5\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u800c\u662f\u9700\u8981\u5f00\u53d1\u8005\u81ea\u884c\u9009\u62e9\u9700\u8981\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u4f9b\u5f00\u53d1\u8005\u66f4\u65b9\u4fbf\u4f7f\u7528\u548c\u64cd\u4f5c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 (Use arrow keys)\n\u276f yarn\n  pnpm\n  npm\n  cnpm\n")),(0,n.kt)("p",null,"\u5982\u679c\u662f\u5728\u8f83\u65e7\u7684 Taro \u9879\u76ee\u4e2d\uff0c\u60f3\u4f7f\u7528 pnpm \u7ba1\u7406\u5de5\u5177\uff0c\u7531\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u5e7d\u7075\u4f9d\u8d56"),"\u7684\u5b58\u5728\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5728\u9879\u76ee\u4e2d\u624b\u52a8\u5b89\u88c5\u5e76\u5347\u7ea7\u4f9d\u8d56\u6765\u4fee\u590d\u8be5\u95ee\u9898\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u53c2\u8003\u6587\u4e2d",(0,n.kt)("inlineCode",{parentName:"p"},"\u5347\u7ea7\u6307\u5357"),"\u7b2c 5 \u9879\u3002"),(0,n.kt)("h2",r({},{id:"\u56db\u5176\u5b83\u7279\u6027"}),"\u56db\u3001\u5176\u5b83\u7279\u6027"),(0,n.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u65b0\u7279\u6027\u5916\uff0cv3.5 \u8fd8\u5305\u62ec\u5f88\u591a\u91cd\u8981\u7684\u66f4\u65b0\uff1a"),(0,n.kt)("h3",r({},{id:"1-\u9002\u914d-react-18"}),"1. \u9002\u914d React 18"),(0,n.kt)("p",null,"\u4ece Taro v3.5 \u5f00\u59cb\uff0cTaro \u5c06\u9ed8\u8ba4\u4f7f\u7528 React 18 \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5728 Taro \u4f7f\u7528 React18 \u4e2d\u6fc0\u52a8\u4eba\u5fc3\u7684\u65b0\u7279\u6027\u4e86\u3002\u4ece\u65b0\u5efa\u9879\u76ee\u5f00\u59cb\u63a2\u7d22\u5427\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# @tarojs/cli \u5347\u7ea7\u5230 v3.5\n$ taro init myProject\n# \u9009\u62e9\u300creact\u300d\u6846\u67b6\n")),(0,n.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u53d7\u5c0f\u7a0b\u5e8f\u73af\u5883\u9650\u5236\uff0c\u8bf8\u5982\u65b0 Suspense \u7279\u6027\u5c06\u4e0d\u80fd\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c\u8be6\u60c5\u8bf7",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/react-18"}),"\u6d4f\u89c8\u6587\u6863"),"\u3002"),(0,n.kt)("h3",r({},{id:"2-h5-\u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3"}),"2. H5 \u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3"),(0,n.kt)("p",null,"\u901a\u8fc7 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/SyMind/tarojs-plugin-platform-nextjs"}),"tarojs-plugin-platform-nextjs")," \u63d2\u4ef6\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 Taro \u548c nextjs \u793e\u533a\u751f\u6001\u6253\u901a\uff0c\u8ba9 Taro H5 \u652f\u6301 Pre-rendering\uff08\u9884\u6e32\u67d3\uff09\u3001SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u548c ISR\uff08\u589e\u91cf\u9759\u6001\u751f\u6210\uff09\u5404\u79cd\u7279\u6027\uff0c\u63d0\u5347\u9875\u9762\u9996\u5c4f\u6e32\u67d3\u901f\u5ea6 \ud83d\ude80\uff0c\u4e5f\u5229\u4e8e SEO \u4f18\u5316 \ud83d\udd0d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install tarojs-plugin-platform-nextjs next\n")),(0,n.kt)("p",null,"\u5728 Taro \u9879\u76ee\u7684 \xa0",(0,n.kt)("inlineCode",{parentName:"p"},"config/index.js")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  plugins: ['tarojs-plugin-platform-nextjs'],\n}\n")),(0,n.kt)("p",null,"\u542f\u52a8\u9879\u76ee\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npx taro build --type nextjs --watch\n")),(0,n.kt)("p",null,"\u63d2\u4ef6\u6765\u81ea\u793e\u533a\u5927\u4f6c ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/SyMind"}),"@SyMind")," \u8d21\u732e\uff0c\u8be6\u7ec6\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/SyMind/tarojs-plugin-platform-nextjs"}),"\u63d2\u4ef6\u6587\u6863"),"\u3002"),(0,n.kt)("h3",r({},{id:"3-h5-\u652f\u6301\u591a\u9875\u5e94\u7528\u6a21\u5f0f"}),"3. H5 \u652f\u6301\u591a\u9875\u5e94\u7528\u6a21\u5f0f"),(0,n.kt)("p",null,"H5 \u7aef\u7684\u591a\u9875\u5e94\u7528\u6a21\u5f0f\u662f\u793e\u533a\u547c\u58f0\u6700\u9ad8\u7684\u82e5\u5e72\u7279\u6027\u4e4b\u4e00\uff0c\u5728\u65b0\u7248\u672c\u4e2d\u5c06\u5f97\u5230\u652f\u6301\uff0c\u8be6\u7ec6\u7528\u6cd5\u53ca\u6ce8\u610f\u4e8b\u9879\u8bf7",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/next/config-detail#h5routermode"}),"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"\u914d\u7f6e\u5f00\u542f\u591a\u9875\u5e94\u7528\u6a21\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"/** config/index.js */\nconst config = {\n  h5: {\n    router: {\n      mode: 'multi',\n    },\n  },\n}\n")),(0,n.kt)("h3",r({},{id:"4-\u8865\u5168\u5bf9\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u652f\u6301"}),"4. \u8865\u5168\u5bf9\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u652f\u6301"),(0,n.kt)("p",null,"\u8fc7\u53bb Taro \u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u652f\u6301\u5f97\u4e0d\u591f\u5b8c\u6574\uff0c\u65b0\u7248\u672c\u4e2d\u5c06\u8865\u5168\u5bf9\u5e94\u7684\u65b9\u6cd5\u4e0e\u94a9\u5b50\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u65b0\u589e App \u751f\u547d\u5468\u671f\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"onError\uff08React & Vue3\uff09")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u65b0\u589e\u94a9\u5b50\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"useLaunch\uff08React\uff09"),(0,n.kt)("li",{parentName:"ul"},"useError\uff08React\uff09"),(0,n.kt)("li",{parentName:"ul"},"usePageNotFound\uff08React\uff09"),(0,n.kt)("li",{parentName:"ul"},"useLoad\uff08React & Vue3\uff09"),(0,n.kt)("li",{parentName:"ul"},"useUnload\uff08React & Vue3\uff09"),(0,n.kt)("li",{parentName:"ul"},"useSaveExitState\uff08React & Vue3\uff09")),(0,n.kt)("h3",r({},{id:"5-\u5c0f\u7a0b\u5e8f\u5185\u90e8\u5b9e\u73b0\u4f18\u5316"}),"5. \u5c0f\u7a0b\u5e8f\u5185\u90e8\u5b9e\u73b0\u4f18\u5316"),(0,n.kt)("p",null,"\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u5185\u90e8\u5b9e\u73b0\u8fdb\u884c\u4f18\u5316\uff0c\u51cf\u5c11\u7ea6 50k \u5305\u4f53\u79ef\uff0c\u540c\u65f6\u964d\u4f4e\u5185\u5b58\u5360\u7528\uff0c\u51cf\u5c11 setData \u53d1\u9001\u7684\u6570\u636e\u91cf\u3002"),(0,n.kt)("h2",r({},{id:"\u4e94\u5347\u7ea7\u6307\u5357"}),"\u4e94\u3001\u5347\u7ea7\u6307\u5357"),(0,n.kt)("h3",r({},{id:"1-\u5347\u7ea7-taro-cli"}),"1. \u5347\u7ea7 Taro CLI"),(0,n.kt)("p",null,"\u5347\u7ea7\u5168\u5c40\u7684 Taro CLI\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i -g @tarojs/cli\n")),(0,n.kt)("p",null,"\u6216\u5347\u7ea7\u672c\u5730\u7684 Taro CLI \u5de5\u5177\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @tarojs/cli\n")),(0,n.kt)("h3",r({},{id:"2-\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56"}),"2. \u66f4\u65b0\u9879\u76ee\u4f9d\u8d56"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f9d\u8d56\u5b89\u88c5\u5931\u8d25\u6216\u5b89\u88c5\u6210\u529f\u5374\u8fd0\u884c\u62a5\u9519\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5220\u9664 node_modules\u3001yarn.lock\u3001package-lock.json\u3001pnpm-lock.yaml \u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002")),(0,n.kt)("h3",r({},{id:"21-\u66f4\u65b0\u9879\u76ee\u5185\u7684-taro-\u76f8\u5173\u4f9d\u8d56"}),"2.1 \u66f4\u65b0\u9879\u76ee\u5185\u7684 Taro \u76f8\u5173\u4f9d\u8d56"),(0,n.kt)("p",null,"\u628a ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d Taro \u76f8\u5173\u4f9d\u8d56\u7684\u7248\u672c\u4fee\u6539\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"3.5.0")," \u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,n.kt)("h3",r({},{id:"22-\u4f7f\u7528-react-\u7684\u9879\u76ee"}),"2.2 \u4f7f\u7528 React \u7684\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u3010Breaking\u3011"),"\u4f7f\u7528 React \u7684\u9879\u76ee\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"@pmmmwh/react-refresh-webpack-plugin")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"react-refresh"),"\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @pmmmwh/react-refresh-webpack-plugin react-refresh --save-dev\n")),(0,n.kt)("h3",r({},{id:"23-\u4f7f\u7528-preact-\u7684\u9879\u76ee"}),"2.3 \u4f7f\u7528 PReact \u7684\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u3010Breaking\u3011"),"\u4f7f\u7528 PReact \u7684\u9879\u76ee\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"@prefresh/webpack")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"@prefresh/babel-plugin"),"\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @prefresh/webpack @prefresh/babel-plugin --save-dev\n")),(0,n.kt)("h3",r({},{id:"24-\u4f7f\u7528-vue2-\u7684\u9879\u76ee"}),"2.4 \u4f7f\u7528 Vue2 \u7684\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u3010Breaking\u3011"),"\u4f7f\u7528 Vue2 \u7684\u9879\u76ee\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"@vue/babel-preset-jsx"),"\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @vue/babel-preset-jsx --save-dev\n")),(0,n.kt)("h3",r({},{id:"25-\u4f7f\u7528-vue3-\u7684\u9879\u76ee"}),"2.5 \u4f7f\u7528 Vue3 \u7684\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u3010Breaking\u3011"),"\u4f7f\u7528 Vue3 \u7684\u9879\u76ee\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"@vue/babel-plugin-jsx"),"\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @vue/babel-plugin-jsx --save-dev\n")),(0,n.kt)("h3",r({},{id:"3-\u4f7f\u7528-webpack5"}),"3. \u4f7f\u7528 Webpack5"),(0,n.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u5148\u5378\u8f7d ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm uninstall @tarojs/mini-runner @tarojs/webpack-runner\n")),(0,n.kt)("p",null,"\u7136\u540e\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack5-runner"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install @tarojs/webpack5-runner\n")),(0,n.kt)("p",null,"\u6700\u540e\u4fee\u6539 Taro \u7f16\u8bd1\u914d\u7f6e\u5373\u53ef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"/** config/index.js */\nconst config = {\n  compiler: 'webpack5',\n}\n")),(0,n.kt)("h3",r({},{id:"4-\u4f7f\u7528-react-18"}),"4. \u4f7f\u7528 React 18"),(0,n.kt)("p",null,"\u9700\u8981\u66f4\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"react"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"react-dom"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"@types/react")," \u7684\u7248\u672c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i react react-dom\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @types/react --save-dev\n")),(0,n.kt)("h3",r({},{id:"5-\u4f7f\u7528-pnpm"}),"5. \u4f7f\u7528 pnpm"),(0,n.kt)("p",null,"\u56e0\u4e3a pnpm \u4e0d\u5141\u8bb8",(0,n.kt)("strong",{parentName:"p"},"\u5e7d\u7075\u4f9d\u8d56"),"\u7684\u5b58\u5728\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u9700\u8981\u5728\u9879\u76ee\u4e2d\u624b\u52a8\u5b89\u88c5\u4e0b\u5217\u4f9d\u8d56\uff1a"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dependencies")," \u8865\u5145\u4f9d\u8d56\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"@tarojs/helper": "3.5.0",\n"@tarojs/plugin-platform-weapp": "3.5.0",\n"@tarojs/plugin-platform-alipay": "3.5.0",\n"@tarojs/plugin-platform-tt": "3.5.0",\n"@tarojs/plugin-platform-swan": "3.5.0",\n"@tarojs/plugin-platform-jd": "3.5.0",\n"@tarojs/plugin-platform-qq": "3.5.0",\n"@tarojs/router": "3.5.0",\n"@tarojs/shared": "3.5.0",\n"@tarojs/taro-h5": "3.5.0",\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u8865\u5145\u4f9d\u8d56\uff1a"),(0,n.kt)("p",null,"\u5b89\u88c5\u9879\u76ee\u5bf9\u5e94\u7684 Webpack \u7248\u672c\uff0c\u5982 Webpack5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"webpack": "^5.73.0"\n')),(0,n.kt)("h2",r({},{id:"\u516d\u6700\u540e"}),"\u516d\u3001\u6700\u540e"),(0,n.kt)("p",null,"\u4e0b\u534a\u5e74 Taro \u56e2\u961f\u7684\u6838\u5fc3\u5c06\u56f4\u7ed5\u4ee5\u4e0b\u5404\u65b9\u5411\u5c55\u5f00\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 Vite \u8fdb\u884c\u7f16\u8bd1\uff08\u9884\u8ba1 Q3 \u63a8\u51fa alpha \u7248\u672c\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u65b9\u9762\u5c06\u6301\u7eed\u5bf9\u6027\u80fd\u8fdb\u884c\u4f18\u5316\u3001\u652f\u6301\u66f4\u591a\u7684 React/Vue \u7279\u6027\uff08\u5982 Portal\uff09\u548c\u751f\u6001\u5e93\uff08\u5982 React/Vue Router\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"H5 \u65b9\u9762\u5c06\u8f93\u51fa\u9002\u914d Vue3 \u7684 SSR \u65b9\u6848\u3002"),(0,n.kt)("li",{parentName:"ul"},"RN \u65b9\u9762\u5c06\u6df1\u5165\u63a2\u7d22\u9ad8\u9636\u529f\u80fd\uff0c\u5982\u5730\u56fe\u3001\u52a8\u753b\u30012D \u53ca 3D \u56fe\u5f62\u65b9\u6848\uff0c\u5e76\u63a8\u51fa\u8de8\u7aef\u53ef\u89c6\u5316\u5e93\uff0c\u63d0\u5347 Taro \u8de8\u7aef\u80fd\u529b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b64\u5916\u8fd8\u4f1a\u63a2\u7d22\u5bf9\u4e8e Flutter \u7684\u9002\u914d\u3002")),(0,n.kt)("p",null,"\u6700\u540e\u7684\u6700\u540e\uff0c\u8877\u5fc3\u611f\u8c22\u53c2\u4e0e\u793e\u533a\u5171\u5efa\u4e0e\u4ea4\u6d41\u7684\u5404\u4f4d\u540c\u5b66\uff01\u4e0a\u534a\u5e74\u6211\u4eec\u5236\u5b9a\u4e86\u5f00\u53d1\u8005\u8d21\u732e\u5236\u5ea6\uff0c\u5efa\u7acb\u8d77\u89c4\u8303\u7684\u9879\u76ee\u5206\u5de5\u4e0e\u6709\u6548\u7684\u8363\u8a89\u6fc0\u52b1\u673a\u5236\u3002\u672a\u6765 Taro \u5c06\u79ef\u6781\u63a2\u5bfb\u66f4\u4e2d\u7acb\u4e0e\u5f00\u653e\u7684\u5f00\u6e90\u6cbb\u7406\u673a\u5236\uff0c\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u53c2\u4e0e\u5230 Taro \u793e\u533a\u7684\u5efa\u8bbe\u4e2d~"))}m.isMDXComponent=!0}}]);