"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19719],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={slug:"2021-04-22-Taro-3.3-alpha",title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",authors:"JJ",tags:["v3"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 **WEUI**\u3001**Ant Design Mobile**\u3001**VantUI** \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002"},p=void 0,i={permalink:"/mirror/taro-docs/blog/2021-04-22-Taro-3.3-alpha",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2021-04-22-Taro-3.3-alpha.md",source:"@site/blog/2021-04-22-Taro-3.3-alpha.md",title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 **WEUI**\u3001**Ant Design Mobile**\u3001**VantUI** \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002",date:"2021-04-22T00:00:00.000Z",formattedDate:"2021\u5e744\u670822\u65e5",tags:[{label:"v3",permalink:"/mirror/taro-docs/blog/tags/v-3"}],readingTime:9.73,hasTruncateMarker:!0,authors:[{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2021-04-22-Taro-3.3-alpha",title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",authors:"JJ",tags:["v3"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 **WEUI**\u3001**Ant Design Mobile**\u3001**VantUI** \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002"},prevItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.3 \u7248\u672c\uff1a\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u4e0e\u6846\u67b6 DevTools",permalink:"/mirror/taro-docs/blog/2021-08-13-Taro-3.3"},nextItem:{title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",permalink:"/mirror/taro-docs/blog/2021-04-08-taro-3.2"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4e00\u3001\u5b9e\u73b0\u601d\u8def",id:"\u4e00\u5b9e\u73b0\u601d\u8def",level:2},{value:"\u652f\u6301\u6e32\u67d3 H5 \u6807\u7b7e",id:"\u652f\u6301\u6e32\u67d3-h5-\u6807\u7b7e",level:3},{value:"1. \u6807\u7b7e\u540d\u6620\u5c04",id:"1-\u6807\u7b7e\u540d\u6620\u5c04",level:4},{value:"2. \u5c5e\u6027\u6620\u5c04",id:"2-\u5c5e\u6027\u6620\u5c04",level:4},{value:"3. \u4e8b\u4ef6\u6620\u5c04",id:"3-\u4e8b\u4ef6\u6620\u5c04",level:4},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",level:3},{value:"1. \u6807\u7b7e\u9009\u62e9\u5668",id:"1-\u6807\u7b7e\u9009\u62e9\u5668",level:4},{value:"2. \u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f",id:"2-\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f",level:4},{value:"\u9650\u5236",id:"\u9650\u5236",level:3},{value:"1. \u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8",id:"1-\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8",level:4},{value:"2. DOM API \u5dee\u5f02",id:"2-dom-api-\u5dee\u5f02",level:4},{value:"3. \u6837\u5f0f\u9650\u5236",id:"3-\u6837\u5f0f\u9650\u5236",level:4},{value:"\u4e8c\u3001\u4f7f\u7528\u65b9\u6cd5",id:"\u4e8c\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5347\u7ea7 3.3.0-alpha \u7248\u672c",id:"\u5347\u7ea7-330-alpha-\u7248\u672c",level:3},{value:"\u5b89\u88c5\u540c\u6784\u63d2\u4ef6",id:"\u5b89\u88c5\u540c\u6784\u63d2\u4ef6",level:3},{value:"\u4e09\u3001\u793a\u4f8b\u9879\u76ee",id:"\u4e09\u793a\u4f8b\u9879\u76ee",level:2},{value:"WEUI",id:"weui",level:3},{value:"Antd Mobile Design",id:"antd-mobile-design",level:3},{value:"VantUI",id:"vantui",level:3},{value:"\u56db\u3001\u5171\u5efa\u5021\u8bae",id:"\u56db\u5171\u5efa\u5021\u8bae",level:2}],c={toc:s},m="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(m,r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7684\u8bbe\u8ba1\u5e76\u6ca1\u6709\u5b8c\u5168\u9075\u5faa Web \u89c4\u8303\uff0c\u5bfc\u81f4\u5c0f\u7a0b\u5e8f\u751f\u6001\u548c\u4f20\u7edf Web \u5f00\u53d1\u751f\u6001\u4e4b\u95f4\u7684\u5272\u88c2\uff0c\u6d77\u91cf\u4f18\u79c0\u7684 Web \u7269\u6599\u5e76\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u3002\u56e0\u800c Taro \u5728\u76f8\u5f53\u4e00\u6bb5\u65f6\u95f4\u5185\u751f\u6001\u90fd\u76f8\u5bf9\u8584\u5f31\uff0cUI \u6846\u67b6\u9009\u62e9\u4e0d\u591a\u7684\u95ee\u9898\u66f4\u662f\u6df1\u6df1\u56f0\u6270\u7740\u5f00\u53d1\u8005\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u4e1a\u754c\u6709\u7740\u5b58\u91cf\u7684 H5 \u5e94\u7528\uff0c\u4e2d\u77ed\u671f\u5185 H5 \u5e94\u7528\u9002\u914d\u5230\u5c0f\u7a0b\u5e8f\u7aef\u7684\u9700\u8981\u8fd8\u4f1a\u5b58\u5728\u3002\u6211\u4eec\u5e0c\u671b\u80fd\u51cf\u5c11 H5 \u5e94\u7528\u8fc1\u79fb\u5230\u5c0f\u7a0b\u5e8f\u7aef\u7684\u6210\u672c\uff0c\u751a\u81f3\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7aef\u3002"),(0,a.kt)("p",null,"Taro \u56e2\u961f\u4e00\u76f4\u5728\u601d\u8003\u5982\u4f55\u6700\u5927\u9650\u5ea6\u5730\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u590d\u7528 Web \u751f\u6001\uff0c\u76f4\u5230 Taro 3.0 \u8bde\u751f\u540e\uff0c\u8fd9\u79cd\u60f3\u6cd5\u6709\u4e86\u843d\u5730\u7684\u53ef\u80fd\u3002\u4e0b\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 ",(0,a.kt)("strong",{parentName:"p"},"WEUI"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"Ant Design Mobile"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"VantUI")," \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002"),(0,a.kt)("h2",r({},{id:"\u4e00\u5b9e\u73b0\u601d\u8def"}),"\u4e00\u3001\u5b9e\u73b0\u601d\u8def"),(0,a.kt)("p",null,"Taro 3.0 \u662f\u4e00\u6b3e\u91cd\u8fd0\u884c\u65f6\u7684\u8de8\u7aef\u6846\u67b6\uff0c\u5b83\u901a\u8fc7\u6a21\u62df\u5b9e\u73b0\u6d4f\u89c8\u5668\u7684 BOM \u548c DOM API \u5b9e\u73b0\u4e86\u5bf9 React\u3001Vue \u7b49 Web \u5f00\u53d1\u6846\u67b6\u7684\u517c\u5bb9\u3002"),(0,a.kt)("p",null,"\u65e2\u7136\u5df2\u7ecf\u6709\u4e86\u6d4f\u89c8\u5668\u73af\u5883\u7684 BOM \u548c DOM API\uff0cTaro \u5e94\u7528\u548c Web \u5e94\u7528\u4e4b\u95f4\u7684\u9e3f\u6c9f\u5728\u4e8e\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u548c HTML \u6807\u7b7e\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,a.kt)("h3",r({},{id:"\u652f\u6301\u6e32\u67d3-h5-\u6807\u7b7e"}),"\u652f\u6301\u6e32\u67d3 H5 \u6807\u7b7e"),(0,a.kt)("p",null,"Taro3 \u7684\u6e32\u67d3\u6570\u636e\u6d41\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u524d\u7aef\u6846\u67b6 -> Taro DOM -> \u5c0f\u7a0b\u5e8f data")),(0,a.kt)("p",null,"HTML \u6807\u7b7e\u548c\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u6807\u7b7e\u540d\u3001\u5c5e\u6027\u3001\u4e8b\u4ef6\u662f\u6709\u5dee\u5f02\u7684\uff0c\u800c\u524d\u7aef\u6846\u67b6\u65e0\u9700\u611f\u77e5\u8fd9\u4e9b\u5dee\u5f02\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u524d\u7aef\u6846\u67b6\u9002\u914d\u5c42\u3001Taro DOM \u5c42\u4e0d\u9700\u8981\u6539\u52a8\uff0c\u53ea\u8981\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Taro DOM \u5e8f\u5217\u5316\u4e3a\u5c0f\u7a0b\u5e8f data")," \u8fd9\u4e00\u6b65\u4f5c\u6620\u5c04\u5373\u53ef\u3002"),(0,a.kt)("h4",r({},{id:"1-\u6807\u7b7e\u540d\u6620\u5c04"}),"1. \u6807\u7b7e\u540d\u6620\u5c04"),(0,a.kt)("p",null,"HTML \u6807\u7b7e\u76f8\u5bf9\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5c01\u88c5\u7a0b\u5ea6\u66f4\u4f4e\u3001\u529f\u80fd\u66f4\u7b80\u5355\uff0c\u53ef\u4ee5\u770b\u4f5c\u662f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5b50\u96c6\u3002\u56e0\u6b64\u53ef\u4ee5\u6309\u4e00\u5b9a\u7684\u89c4\u5219\uff0c\u628a HTML \u6807\u7b7e\u6620\u5c04\u4e3a\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Taro DOM \u7684\u5e8f\u5217\u5316\u6570\u636e\n{\n  nn: 'img'\n}\n// \u6620\u5c04\u7ed3\u679c\n{\n  nn: 'image'\n}\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u6807\u7b7e\u540d\u6620\u5c04\u89c4\u5219\u8bf7\u770b\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/html-support/rfcs/0004-rendering-html.md#%E4%B8%80%E6%A0%87%E7%AD%BE%E5%90%8D%E5%BD%B1%E5%B0%84"}),"RFC \u9644\u5f55\u4e00")),(0,a.kt)("h4",r({},{id:"2-\u5c5e\u6027\u6620\u5c04"}),"2. \u5c5e\u6027\u6620\u5c04"),(0,a.kt)("p",null,"\u5982\u679c HTML \u6807\u7b7e\u7684\u5c5e\u6027\u80fd\u5728\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5c5e\u6027\u4e0a\u627e\u5230\u5bf9\u5e94\uff0c\u5219\u8fdb\u884c\u6620\u5c04\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Taro DOM \u7684\u5e8f\u5217\u5316\u6570\u636e\n{\n  nn: 'a',\n  href: 'xxx'\n  target: '_blank'\n}\n// \u6620\u5c04\u7ed3\u679c\n{\n  nn: 'navigator',\n  url: 'xxx',\n  openType: 'navigate'\n}\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u5c5e\u6027\u540d\u6620\u5c04\u89c4\u5219\u8bf7\u770b\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/html-support/rfcs/0004-rendering-html.md#%E4%BA%8C%E5%B1%9E%E6%80%A7%E5%90%8D%E5%BD%B1%E5%B0%84"}),"RFC \u9644\u5f55\u4e8c")),(0,a.kt)("h4",r({},{id:"3-\u4e8b\u4ef6\u6620\u5c04"}),"3. \u4e8b\u4ef6\u6620\u5c04"),(0,a.kt)("p",null,"\u628a HTML \u7279\u6709\u7684\u4e8b\u4ef6\u5728\u5c0f\u7a0b\u5e8f\u7aef\u627e\u5230\u76f8\u4f3c\u7684\u4e8b\u4ef6\u8fdb\u884c\u6620\u5c04\uff0c\u5982\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"HTML \u4e8b\u4ef6"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4e8b\u4ef6"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"click"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"tap")))),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u4e8b\u4ef6\u6620\u5c04\u89c4\u5219\u8bf7\u770b\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/html-support/rfcs/0004-rendering-html.md#%E4%B8%89%E4%BA%8B%E4%BB%B6%E5%BD%B1%E5%B0%84"}),"RFC \u9644\u5f55\u4e09")),(0,a.kt)("h3",r({},{id:"\u6837\u5f0f"}),"\u6837\u5f0f"),(0,a.kt)("h4",r({},{id:"1-\u6807\u7b7e\u9009\u62e9\u5668"}),"1. \u6807\u7b7e\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u524d\u6587\u4ecb\u7ecd\u4e86\u6211\u4eec\u4f1a\u628a HTML \u6807\u7b7e\u6620\u5c04\u4e3a\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\uff0c\u4f46\u662f H5 \u5e94\u7528\u4e2d\u4f7f\u7528\u5230\u7684 CSS \u6807\u7b7e\u9009\u62e9\u5668\u5c31\u4f1a\u5931\u6548\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64 Taro \u4f7f\u7528\u4e86\u7c7b\u540d\u53bb\u8fdb\u884c\u6a21\u62df\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u6240\u6709 H5 \u6807\u7b7e\u90fd\u52a0\u4e0a\u7c7b\u540d\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"h5-${tagName}"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// \u6e90\u4ee3\u7801\n<div />\n// \u6e32\u67d3\u7ed3\u679c\n<view class="h5-div" />\n')),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 postcss \u63d2\u4ef6\u5904\u7406\u6807\u7b7e\u540d\u9009\u62e9\u5668\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-scss"}),"// \u6807\u7b7e\u540d\u9009\u62e9\u5668\ndiv {\n}\n// \u7ecf postcss \u63d2\u4ef6\u5904\u7406\u540e\u53d8\u4e3a\u7c7b\u540d\u9009\u62e9\u5668\n.h5-div {\n}\n")),(0,a.kt)("h4",r({},{id:"2-\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"}),"2. \u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"),(0,a.kt)("p",null,"Taro \u63d0\u4f9b\u4e24\u79cd\u5185\u7f6e\u7684\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165\u751f\u6548\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": W3C HTML4 \u7684\u5185\u7f6e\u6837\u5f0f\u3002\u53ea\u6709 HTML4 \u6807\u7b7e\u6837\u5f0f\uff0c\u4f53\u79ef\u8f83\u5c0f\uff0c\u517c\u5bb9\u6027\u5f3a\uff0c\u80fd\u9002\u5e94\u5927\u591a\u6570\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": Chrome(Blink) HTML5 \u7684\u5185\u7f6e\u6837\u5f0f\u3002\u5185\u7f6e\u6837\u5f0f\u4e30\u5bcc\uff0c\u5305\u62ec\u4e86\u5927\u591a\u6570 HTML5 \u6807\u7b7e\uff0c\u4f53\u79ef\u8f83\u5927\uff0c\u4e0d\u4e00\u5b9a\u652f\u6301\u6240\u6709\u5c0f\u7a0b\u5e8f\u5bb9\u5668\u3002")),(0,a.kt)("h3",r({},{id:"\u9650\u5236"}),"\u9650\u5236"),(0,a.kt)("p",null,"\u7406\u60f3\u5f88\u7f8e\u597d\uff0c\u4f46\u73b0\u5b9e\u5374\u7565\u663e\u9aa8\u611f\u3002\u5373\u4f7f Taro \u80fd\u5b9e\u73b0 BOM\u3001DOM API\uff0c\u652f\u6301\u4f7f\u7528 HTML \u6807\u7b7e\u7b49\uff0c\u540c\u6784\u65b9\u6848\u8fd8\u662f\u5b58\u5728\u7740\u4e00\u4e9b\u6846\u67b6\u5c42\u9762\u62b9\u5e73\u4e0d\u4e86\u7684\u5dee\u5f02\u3002\u4ee5\u4e0b\u5217\u4e3e\u51fa\u82e5\u5e72\u4e3b\u8981\u9650\u5236\uff1a"),(0,a.kt)("h4",r({},{id:"1-\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8"}),"1. \u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8"),(0,a.kt)("p",null,"\u5728 H5 \u4e2d\u6211\u4eec\u53ef\u4ee5\u8c03\u7528 DOM API \u540c\u6b65\u83b7\u53d6\u5143\u7d20\u7684\u5c3a\u5bf8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// h5\nconst el = document.getElementById('#inner')\nconst res = el.getBoundingClientRect()\nconsole.log(res)\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8\u7684 API \u662f\u5f02\u6b65\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u5c0f\u7a0b\u5e8f\nconst query = Taro.createSelectorQuery()\nquery\n  .select('#inner')\n  .boundingClientRect()\n  .exec((res) => {\n    console.log(res)\n  })\n")),(0,a.kt)("p",null,"\u56e0\u6b64\u4e0d\u80fd\u517c\u5bb9\u90a3\u4e9b\u4f7f\u7528\u4e86\u540c\u6b65 DOM API \u53bb\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("h4",r({},{id:"2-dom-api-\u5dee\u5f02"}),"2. DOM API \u5dee\u5f02"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<canvas>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<video>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<audio>")," \u7b49\u6807\u7b7e\u5728 H5 \u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement")," \u4e0a\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// h5\nconst el = document.getElementById('myVideo')\nel.play()\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5728 Taro \u4e2d\uff0c\u8981\u8c03\u7528\u7ec4\u4ef6\u4e0a\u7684\u539f\u751f\u65b9\u6cd5\uff0c\u5fc5\u987b\u5148\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u5c0f\u7a0b\u5e8f\nconst ctx = Taro.createVideoContext('myVideo')\nctx.play()\n")),(0,a.kt)("h4",r({},{id:"3-\u6837\u5f0f\u9650\u5236"}),"3. \u6837\u5f0f\u9650\u5236"),(0,a.kt)("p",null,"\u90e8\u5206\u6837\u5f0f\u6216 CSS \u9009\u62e9\u5668\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u652f\u6301\uff0c\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u914d\u7b26 ","*"),(0,a.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u9009\u62e9\u5668\uff0c\u5f53\u5c5e\u6027\u4e0d\u662f\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5185\u7f6e\u5c5e\u6027\u65f6")),(0,a.kt)("h2",r({},{id:"\u4e8c\u4f7f\u7528\u65b9\u6cd5"}),"\u4e8c\u3001\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",r({},{id:"\u5347\u7ea7-330-alpha-\u7248\u672c"}),"\u5347\u7ea7 3.3.0-alpha \u7248\u672c"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5 v3.3 \u7684 CLI \u5de5\u5177\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i -g @tarojs/cli@alpha\n")),(0,a.kt)("p",null,"\u7136\u540e\u8fdb\u5165\u9879\u76ee\uff0c\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d taro \u76f8\u5173\u4f9d\u8d56\u7684\u7248\u672c\u4fee\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"^3.3.0-alpha.2"),"\uff0c\u518d\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\uff08\u5efa\u8bae\u5148\u628a ",(0,a.kt)("strong",{parentName:"p"},"node_modules")," \u6587\u4ef6\u5939\u5220\u9664\uff09\u3002"),(0,a.kt)("h3",r({},{id:"\u5b89\u88c5\u540c\u6784\u63d2\u4ef6"}),"\u5b89\u88c5\u540c\u6784\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8282\u7701\u9879\u76ee\u7a7a\u95f4\uff0c\u540c\u6784\u529f\u80fd\u662f\u53ef\u9009\u7684\uff0c\u4ee5 Taro \u63d2\u4ef6\u7684\u5f62\u5f0f\u63d0\u4f9b\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5f00\u53d1\u8005\u9700\u8981\u5b89\u88c5\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-html"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i @tarojs/plugin-html\n")),(0,a.kt)("p",null,"\u7136\u540e\u914d\u7f6e\u4f7f\u7528\u6b64\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// config/index.js\nconst config = {\n  // ...\n  plugins: ['@tarojs/plugin-html'],\n}\n")),(0,a.kt)("h2",r({},{id:"\u4e09\u793a\u4f8b\u9879\u76ee"}),"\u4e09\u3001\u793a\u4f8b\u9879\u76ee"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u540c\u6784\u529f\u80fd\u7684\u53ef\u7528\u6027\u548c\u6548\u679c\uff0c\u6211\u4eec\u5bf9 CSS \u6837\u5f0f\u5e93 ",(0,a.kt)("strong",{parentName:"p"},"WEUI"),"\u3001React \u7ec4\u4ef6\u5e93 ",(0,a.kt)("strong",{parentName:"p"},"Antd Design Mobile"),"\u3001Vue2 \u7ec4\u4ef6\u5e93 ",(0,a.kt)("strong",{parentName:"p"},"VantUI")," \u7684\u6240\u6709\u7ec4\u4ef6\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6548\u679c\u6bd4\u8f83\u7406\u60f3\uff0c\u751a\u81f3\u7a0d\u5fae\u8d85\u51fa\u6211\u4eec\u7684\u9884\u671f\uff0c\u914d\u5408\u5404\u7ec4\u4ef6\u5e93\u81ea\u8eab\u7684\u6309\u9700\u52a0\u8f7d\u80fd\u529b\uff0c\u80fd\u4ee5\u5c0f\u5de7\u7684\u4f53\u79ef\u4f7f\u7528\u4e30\u5bcc\u7684\u7ec4\u4ef6\uff0c\u76f8\u4fe1\u5404\u4f4d\u5f00\u53d1\u8005\u4f1a\u559c\u6b22\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,a.kt)("h3",r({},{id:"weui"}),"WEUI"),(0,a.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-weui"}),"taro-weui")),(0,a.kt)("p",null,"WEUI \u662f\u4e00\u4e2a CSS \u7684\u6837\u5f0f\u5e93\uff0c\u4e0e\u6846\u67b6\u65e0\u5173\uff0c\u517c\u5bb9\u6027\u6bd4\u8f83\u9ad8\uff0c\u5927\u90e8\u5206\u7ec4\u4ef6\u80fd\u76f4\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("h3",r({},{id:"antd-mobile-design"}),"Antd Mobile Design"),(0,a.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-antd-mobile"}),"taro-antd-mobile")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Antd Mobile Design \u5b98\u65b9\u5df2\u7ecf\u76f8\u5f53\u4e45\u6ca1\u6709\u7ef4\u62a4\uff0c\u6b64\u9002\u914d\u9879\u76ee\u5c5e\u4e8e\u5b9e\u9a8c\u6027\u8d28\u3002")),(0,a.kt)("p",null,"\u80fd\u76f4\u63a5\u517c\u5bb9\u4f7f\u7528\u7684\u7ec4\u4ef6\u5927\u6982\u4e3a 80%\uff0c\u4e3b\u8981\u95ee\u9898\u5728\u4e8e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5e93\u91cc\u5e7f\u6cdb\u4f7f\u7528\u4e86 SVG\uff0c\u76ee\u524d\u5e76\u4e0d\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u4f7f\u7528\u9700\u8981\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8\u7684\u90e8\u5206\u7ec4\u4ef6\u3002")),(0,a.kt)("h3",r({},{id:"vantui"}),"VantUI"),(0,a.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-vant"}),"taro-vant")),(0,a.kt)("p",null,"VantUI \u7684\u7ec4\u4ef6\u5341\u5206\u4e30\u5bcc\uff0c\u80fd\u76f4\u63a5\u517c\u5bb9\u4f7f\u7528\u7684\u7ec4\u4ef6\u5927\u6982\u4e3a 70%\u3002\u90e8\u5206\u5f00\u53d1\u8005\u4f1a\u5728 Taro \u4e2d\u914d\u5408\u4f7f\u7528 Vant Weapp\uff0c\u4f46 Vant Weapp \u53ea\u80fd\u8fd0\u884c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u56e0\u6b64\u5bf9 VantUI \u7684\u76f4\u63a5\u9002\u914d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8865\u5145\u3002"),(0,a.kt)("p",null,"\u9002\u914d\u8fc7\u7a0b\u4e3b\u8981\u9047\u5230\u7684\u95ee\u9898\u6709\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c11\u91cf\u7ec4\u4ef6\u5185\u7f6e\u7684 SVG ICON \u4e0d\u80fd\u663e\u793a\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u4f7f\u7528\u9700\u8981\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8\u7684\u90e8\u5206\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"Vue ",(0,a.kt)("inlineCode",{parentName:"li"},"<transition>")," \u7ec4\u4ef6\u9700\u8981\u989d\u5916\u9002\u914d\u3002")),(0,a.kt)("h2",r({},{id:"\u56db\u5171\u5efa\u5021\u8bae"}),"\u56db\u3001\u5171\u5efa\u5021\u8bae"),(0,a.kt)("p",null,"\u540c\u6784\u65b9\u6848\u8fd8\u5728\u6301\u7eed\u4f18\u5316\u4e2d\uff0c\u90e8\u5206\u5b9e\u73b0\u8fd8\u6ca1\u6709\u6700\u7ec8\u5b9a\u7a3f\u3002\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u5230\u6211\u4eec\u7684\u8bba\u575b\u4e0b\u7559\u8a00\uff0c\u63d0\u51fa\u60a8\u7684\u5b9d\u8d35\u610f\u89c1\uff5e\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/9029"}),"\u540c\u6784\u65b9\u6848 RFC"),"\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u4e0a\u8ff0\u4e09\u6b3e Web UI \u6846\u67b6\u5f88\u591a\u76ee\u524d\u6ca1\u80fd\u517c\u5bb9\u7684\u7ec4\u4ef6\uff0c\u53ea\u8981\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u73af\u5883\u505a\u4e00\u70b9\u517c\u5bb9\u5de5\u4f5c\uff0c\u662f\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\u7684\u3002\u4e00\u6b3e\u6846\u67b6\u7684\u751f\u6001\u9700\u8981\u5b98\u65b9\u548c\u793e\u533a\u5171\u540c\u52aa\u529b\u5efa\u8bbe\uff0c\u5355\u9760 Taro \u56e2\u961f\u53ca 300 \u591a\u4f4d\u8d21\u732e\u8005\u7684\u4eba\u529b\u6ca1\u529e\u6cd5\u6491\u8d77\u6574\u4e2a\u793e\u533a\u7684\u751f\u6001\u3002\u6211\u4eec\u5e0c\u671b\u8fd9\u4e09\u4e2a\u517c\u5bb9\u6027\u793a\u4f8b\u9879\u76ee\u80fd\u8d77\u5230\u629b\u7816\u5f15\u7389\u7684\u4f5c\u7528\uff0c\u5438\u5f15\u5e7f\u5927\u5f00\u53d1\u8005\u8fdb\u884c\u5171\u5efa\uff0c\u4e00\u8d77\u5b8c\u5584\u4e0a\u8ff0\u7ec4\u4ef6\u5e93\uff0c\u751a\u81f3\u4e0d\u65ad\u5730\u5f15\u5165\u66f4\u591a\u7684 Web \u7aef\u751f\u6001\u5e93\uff0c\u8ba9\u8de8\u7aef\u5f00\u53d1\u53d8\u5f97\u66f4\u8f7b\u677e\u3002\u5341\u5206\u671f\u5f85\u60a8\u7684\u53c2\u4e0e\uff5e"))}k.isMDXComponent=!0}}]);