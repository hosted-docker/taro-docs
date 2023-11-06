"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49466],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},76205:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",authors:"luckyadam",tags:["v1"]},p=void 0,i={permalink:"/mirror/taro-docs/blog/2018-12-18-taro-1-2",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2018-12-18-taro-1-2.md",source:"@site/blog/2018-12-18-taro-1-2.md",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",description:"\u5728\u8ddd\u79bb Taro 1.1 \u53d1\u5e03 \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 500 \u591a\u6b21\u63d0\u4ea4\u548c 17 \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002",date:"2018-12-18T00:00:00.000Z",formattedDate:"2018\u5e7412\u670818\u65e5",tags:[{label:"v1",permalink:"/mirror/taro-docs/blog/tags/v-1"}],readingTime:7.045,hasTruncateMarker:!0,authors:[{name:"\u9694\u58c1\u8001\u674e",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/luckyadam",imageURL:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",key:"luckyadam"}],frontMatter:{slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",authors:"luckyadam",tags:["v1"]},prevItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/mirror/taro-docs/blog/2019-02-25-taro-ui-2.0"},nextItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/mirror/taro-docs/blog/2018-11-05-taro-1-1"}},u={authorsImageUrls:[void 0]},c=[{value:"\u66f4\u591a\u7279\u6027",id:"\u66f4\u591a\u7279\u6027",level:2},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",level:2}],m={toc:c};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8ddd\u79bb ",(0,a.kt)("a",n({parentName:"p"},{href:"https://aotu.io/notes/2018/11/05/taro-1-1/"}),"Taro 1.1 \u53d1\u5e03")," \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"500")," \u591a\u6b21\u63d0\u4ea4\u548c ",(0,a.kt)("strong",{parentName:"p"},"17")," \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002"),(0,a.kt)("p",null,"Taro 1.2 \u6bd4\u8d77 Taro 1.1 \u548c\u5176\u5b83\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\uff0c\u589e\u52a0\u4e86\u8bb8\u591a\u9996\u6b21\u5728\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"#taroize"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"#tt"}),"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"#css"}),"CSS Modules \u652f\u6301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"#mobx"}),"MobX \u652f\u6301"))),(0,a.kt)("h2",{id:"taroize"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528"),"\u5c31\u50cf\u535a\u5ba2\u5927\u6218\u65f6\u4ee3\u535a\u5ba2\u670d\u52a1\u5546\u63d0\u4f9b\u4e86\u300c\u642c\u5bb6\u300d\u5de5\u5177\u4e00\u6837\uff0cTaro \u73b0\u5728\u4e5f\u63d0\u4f9b\u4e86\u300c\u642c\u5bb6\u300d\u5de5\u5177\u8ba9\u4f60\u65b9\u4fbf\u5730\u5165\u9a7b Taro \u793e\u533a\u3002\u8f6c\u6362\u539f\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5b89\u88c5 Taro \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b9a\u4f4d\u5230\u5f85\u8f6c\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u8fd0\u884c\u547d\u4ee4\uff1a",(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"$ taro convert\n")),(0,a.kt)("p",null,"Taro \u5c31\u4f1a\u628a\u8f6c\u6362\u597d\u7684\u4ee3\u7801\u751f\u6210\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"taroConvert")," \u6587\u4ef6\u5939\u3002\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u662f\u9ad8\u53ef\u8bfb\u6027\u7684 JSX \u4ee3\u7801\uff0c\u6ca1\u6709\u989d\u5916\u7684\u5e9e\u5927\u7ec4\u4ef6\u5e93\u5f00\u9500\u3002\u4f60\u53ef\u4ee5\u8f7b\u6613\u5730\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\uff0c\u6216\u8005\u76f4\u63a5\u5c06\u8fd9\u4e9b\u4ee3\u7801\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro build")," \u547d\u4ee4\u751f\u6210\u4efb\u610f Taro \u5df2\u7ecf\u652f\u6301\u5e73\u53f0\u7684\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5c1d\u8bd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro convert")," \u6210\u529f\u8f6c\u6362\u4e86\u56db\u4e2a GitHub \u4e0a\u6700\u70ed\u95e8\u7684\u5f00\u6e90\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u5b83\u4eec\u8f6c\u6362\u4e4b\u540e\u90fd\u8868\u73b0\u826f\u597d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/EastWorld/wechat-app-mall"}),"EastWorld/wechat-app-mall \u26055000+")," - \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5546\u57ce"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/tumobi/nideshop-mini-program"}),"tumobi/nideshop-mini-program \u26053000+")," - \u57fa\u4e8e Node.js + MySQL \u5f00\u53d1\u7684\u5f00\u6e90\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5546\u57ce"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/RebeccaHanjw/weapp-wechat-zhihu"}),"RebeccaHanjw/weapp-wechat-zhihu \u26051000+")," - \u4eff\u77e5\u4e4e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/jectychen/wechat-v2ex"}),"jectychen/wechat-v2ex \u2605400+")," - V2EX")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"taro convert")," \u4e0d\u4ec5\u4ec5\u80fd\u652f\u6301\u8f6c\u6362\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u5b83\u8fd8\u80fd\u8f6c\u6362\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u3002\u4f8b\u5982 ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/icindy/wxParse"}),"wxParse")," \u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro convert")," \u7f16\u8bd1\u4e4b\u540e\u8fd8\u80fd\u7a81\u7834\u539f\u6709\u53ea\u80fd\u89e3\u6790 11 \u5c42 HTML \u5d4c\u5957\u7684\u9650\u5236\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u89e3\u6790\u65e0\u9650\u5c42 HTML \u5d4c\u5957\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/taroize"}),"\u6587\u6863")," \u4e86\u89e3\u66f4\u591a\u3002"),(0,a.kt)("h2",{id:"tt"},"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301"),"\u4f5c\u4e3a\u4e00\u4e2a\u300c\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u300d\uff0cTaro \u5f53\u7136\u4e5f\u4e0d\u4f1a\u653e\u8fc7\u6296\u97f3\u5c0f\u7a0b\u5e8f\u3002\u5728 Taro 1.2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u6296\u97f3\u5c0f\u7a0b\u5e8f\u7aef\u7684\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff1a",(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:tt\n$ npm run build:tt\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type tt --watch\n$ taro build --type tt\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type tt --watch\n$ npx taro build --type tt\n")),(0,a.kt)("p",null,"\u9009\u62e9\u6296\u97f3\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d\u5e76\u6253\u5f00",(0,a.kt)("a",n({parentName:"p"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/download/developer-instrument-update-and-download"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b dist \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),(0,a.kt)("p",null,"\u76f8\u5e94\u5730\uff0cTaro \u7684\u5e73\u53f0\u6807\u8bc6\uff08",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/envs#processenvtaro_env"}),"process.env.TARO_ENV"),"\uff09\u4e5f\u589e\u52a0\u4e86\u65b0\u6210\u5458",(0,a.kt)("inlineCode",{parentName:"p"},"tt"),"\uff0c\u4ee3\u8868\u6296\u97f3\u5c0f\u7a0b\u5e8f\u3002"),(0,a.kt)("h2",{id:"css"},"CSS Modules \u652f\u6301"),(0,a.kt)("p",null,"\u5728 Taro \u6700\u65e9\u5f00\u6e90\u7684\u65f6\u5019\u6211\u4eec\u5c31\u652f\u6301\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"SCSS")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"LESS")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Stylus"),"\uff0c\u800c\u5728 Taro 1.2 \u4e2d\u6211\u4eec\u767e\u5c3a\u7aff\u5934\u66f4\u8fdb\u4e00\u6b65\uff0c\u7ed9\u793e\u533a\u5e26\u6765\u4e86 JSX \u7684\u597d\u4f19\u4f34\uff1aCSS Modules\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e Taro \u800c\u8a00\u652f\u6301 CSS Modules \u6709\u7740\u91cd\u8981\u7684\u610f\u4e49\u3002Taro \u5728 1.0 \u7684\u65f6\u5019\u5df2\u7ecf\u652f\u6301\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," \u4f20\u5165 JavaScript \u5bf9\u8c61\uff0c\u652f\u6301\u4e86 CSS Modules \u4e4b\u540e\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," \u4e5f\u80fd\u505a\u8fd9\u70b9\u2014\u2014\u8fd9\u610f\u5473\u7740 Taro \u5b8c\u5168\u53ef\u4ee5\u505a\u5230 JSX \u7684\u4e00\u9879\u7279\u6027\uff1a\u300cEverything in JavaScript\u300d\u3002\u540c\u65f6\uff0c\u901a\u8fc7\u7f16\u8f91\u5668\u7684\u81ea\u52a8\u8865\u5168\u548c\u6821\u9a8c\u529f\u80fd\uff0c\u5f00\u53d1\u8005\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3 CSS \u7c7b\u8bef\u8f93\u5165\u548c CSS \u7c7b\u7684\u547d\u540d\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u9605\u6587\u6863 ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/css-modules"}),"CSS Modules \u7684\u4f7f\u7528")," \u627e\u5230 CSS Modules \u7684\u5f00\u542f\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"CSS Modules \u7684\u652f\u6301\u4e3b\u8981\u7531 Taro \u793e\u533a\u7684\u4e2a\u4eba\u5f00\u53d1\u8005 ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/MrKou47"}),"@MrKou47 (MrKou47) ")," \u5f00\u53d1\uff0c\u611f\u8c22\u4ed6\u7684\u8d21\u732e\u3002"),(0,a.kt)("h2",{id:"mobx"},"MobX \u652f\u6301"),(0,a.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u5e94\u7528\u53d8\u5f97\u65e5\u8d8b\u590d\u6742\u7684\u4eca\u5929\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u9009\u62e9\u4f7f\u7528\u72ec\u7acb\u7684\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u3002\u5728 Taro 1.1 \u4f60\u53ef\u4ee5\u9009\u62e9 Redux \u7684\u4f53\u7cfb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-thunk")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"dva-core"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"redux-saga")," \u7b49\u5de5\u5177\u3002\u5728 Taro 1.2 \u6211\u4eec\u53c8\u5e26\u6765\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro-mobx"),"\u3002"),(0,a.kt)("p",null,"\u5728 Taro \u4e2d\u4f7f\u7528 MobX \u975e\u5e38\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro init <your app>")," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684 MobX \u6a21\u677f\u9879\u76ee\u3002\u4e5f\u53ef\u4ee5\u67e5\u9605 ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/mobx"}),"\u4f7f\u7528 MobX")," \u6587\u6863\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro-mobx")," \u63a5\u5165\u5df2\u6709\u9879\u76ee\u3002"),(0,a.kt)("p",null,"MobX \u7684\u652f\u6301\u4e3b\u8981\u7531 Taro \u793e\u533a\u7684\u4e2a\u4eba\u5f00\u53d1\u8005 ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/nanjingboy"}),"@nanjingboy (Tom Huang)")," \u5f00\u53d1\uff0c\u611f\u8c22\u4ed6\u7684\u8d21\u732e\u3002"),(0,a.kt)("h2",n({},{id:"\u66f4\u591a\u7279\u6027"}),"\u66f4\u591a\u7279\u6027"),(0,a.kt)("p",null,"\u9762\u5bf9\u793e\u533a\u91cc\u7ed9\u529b\u7684\u4e2a\u4eba\u8d21\u732e\u8005\uff0cTaro \u5b98\u65b9\u56e2\u961f\u4e5f\u6ca1\u6709\u95f2\u7740\u3002\u5728 Taro 1.2 \u5f00\u53d1\u671f\u95f4\u901a\u8fc7 commit \u5173\u95ed\u4e86 169 \u4e2a issue \u7684\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u62ab\u661f\u6234\u6708\u5e26\u6765\u4e86\u66f4\u591a\u7279\u6027\u3002\u5176\u4e2d\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H5 \u8def\u7531\u7cfb\u7edf\u5f7b\u5e95\u91cd\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684 props \u652f\u6301\u4f20\u5165 JSX \u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 JSX \u5143\u7d20\u5199\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"switch-case")," \u4e2d\uff0c\u5e76\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"if-else")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"switch-case")," \u7684\u591a\u91cd\u5d4c\u5957"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f15\u7528\u522b\u540d\uff08alias\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u548c\u6296\u97f3\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u901a\u529b\u5408\u4f5c\uff0c\u62b9\u5e73\u4e86\u4e00\u5927\u6ce2\u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u5dee\u5f02")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"}),"CHANGELOG")," \u67e5\u9605\u5b8c\u6574\u7684\u529f\u80fd\u8fed\u4ee3\u7eaa\u5f55\u3002"),(0,a.kt)("h2",n({},{id:"\u5199\u5728\u6700\u540e"}),"\u5199\u5728\u6700\u540e"),(0,a.kt)("p",null,"Taro 1.2 \u6700\u4e3a\u6fc0\u52a8\u4eba\u5fc3\u7684\u529f\u80fd\u663e\u7136\u662f\u300c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro\u300d \u529f\u80fd\uff0c\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\u5df2\u6709\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u80fd\u8f6c\u5316\u66f4\u597d\u7ef4\u62a4\u7684 Taro\uff08\u7c7b React\uff09 \u4ee3\u7801\uff0c\u4e5f\u80fd\u628a Taro \u4ee3\u7801\u8f6c\u5316\u4e3a\u591a\u7aef\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u4f46\u66f4\u91cd\u8981\u7684\u662f\uff0c\u672c\u6b21 Taro 1.2 \u66f4\u65b0\u7684\u4e24\u4e2a\u6838\u5fc3\u529f\u80fd\u70b9\u5747\u7531\u4e2a\u4eba\u5f00\u53d1\u8005\u8d21\u732e\u2014\u2014\u8fd9\u5b8c\u5168\u4f53\u73b0\u4e86 Taro \u793e\u533a\u7684\u6d3b\u8dc3\u3001\u5f3a\u5927\u548c\u5f00\u653e\u3002\u6211\u4eec\u4e5f\u4f1a\u957f\u671f\u5730\u7ef4\u62a4\u4e0e\u793e\u533a\u5f00\u53d1\u8005\u4eec\u7684\u5173\u7cfb\uff0c\u4e0e\u5f00\u53d1\u8005\u4eec\u4e00\u540c\u6210\u957f\uff0c\u4e92\u5229\u4e92\u8d62\u3002\u8fd9\u4e5f\u662f Taro \u9009\u62e9\u5f00\u6e90\u7684\u610f\u4e49\u6240\u5728\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u60f3\u6cd5\uff0c\u6216\u8005\u6ca1\u6709\u60f3\u6cd5\uff0cTaro \u90fd\u975e\u5e38\u6b22\u8fce\u4f60\u6765\u5410\u69fd\u6216\u89c2\u5149\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/NervJS/taro"}),"https://github.com/NervJS/taro")))}s.isMDXComponent=!0}}]);