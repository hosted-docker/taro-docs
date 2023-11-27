"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90291],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,d=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"\u8d21\u732e\u6307\u5357"},p=void 0,o={unversionedId:"CONTRIBUTING-GUIDE",id:"CONTRIBUTING-GUIDE",title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u6587\u6863",source:"@site/docs/CONTRIBUTING-GUIDE.md",sourceDirName:".",slug:"/CONTRIBUTING-GUIDE",permalink:"/mirror/taro-docs/en/docs/next/CONTRIBUTING-GUIDE",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/CONTRIBUTING-GUIDE.md",tags:[],version:"current",frontMatter:{title:"\u8d21\u732e\u6307\u5357"},sidebar:"docs",previous:{title:"CONTRIBUTING",permalink:"/mirror/taro-docs/en/docs/next/CONTRIBUTING"},next:{title:"Taro Repository Overview",permalink:"/mirror/taro-docs/en/docs/next/codebase-overview"}},m={},s=[{value:"\u8d21\u732e\u6587\u6863",id:"\u8d21\u732e\u6587\u6863",level:2},{value:"1. fork &amp; clone",id:"1-fork--clone",level:4},{value:"2. \u7f16\u8bd1\u9884\u89c8",id:"2-\u7f16\u8bd1\u9884\u89c8",level:4},{value:"3. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863",id:"3-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863",level:4},{value:"4. \u63d0\u4ea4 Pull Request",id:"4-\u63d0\u4ea4-pull-request",level:4},{value:"\u8d21\u732e\u4ee3\u7801",id:"\u8d21\u732e\u4ee3\u7801",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u7f16\u8bd1\u65f6",id:"\u7f16\u8bd1\u65f6",level:4},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:4},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",level:3},{value:"commit \u89c4\u8303",id:"commit-\u89c4\u8303",level:3},{value:"\u6587\u6863",id:"\u6587\u6863",level:3},{value:"\u63d0\u4ea4 Pull Request",id:"\u63d0\u4ea4-pull-request",level:3}],u={toc:s},k="wrapper";function c(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(k,r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"\u8d21\u732e\u6587\u6863"}),"\u8d21\u732e\u6587\u6863"),(0,a.kt)("p",null,"\u5f53\u9605\u8bfb\u65f6\u9047\u5230\u660e\u663e\u7684\u9519\u8bef\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u70b9\u51fb\u6bcf\u7bc7\u6587\u6863\u6700\u4e0b\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit this page")," \u6309\u94ae\uff0c\u5373\u4f1a\u6253\u5f00 Github \u7684\u7f16\u8f91\u754c\u9762\u3002\u5f00\u53d1\u8005\u5bf9\u6587\u6863\u8fdb\u884c\u7f16\u8f91\u540e\uff0c\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e00\u4e2a Pull Request\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u8f83\u590d\u6742\u7684\u4fee\u6539\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("h4",r({},{id:"1-fork--clone"}),"1. fork & clone"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fork ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro-docs"}),"taro-docs")," \u4ed3\u5e93"),(0,a.kt)("li",{parentName:"ol"},"clone \u4e2a\u4eba\u4ed3\u5e93\u7684 taro-docs \u81f3\u672c\u5730\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/{your github name}/taro-docs.git\n")),(0,a.kt)("h4",r({},{id:"2-\u7f16\u8bd1\u9884\u89c8"}),"2. \u7f16\u8bd1\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ pnpm install\n$ pnpm run start\n")),(0,a.kt)("h4",r({},{id:"3-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863"}),"3. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mdx")," \u540e\u7f00\uff0c\u8bed\u6cd5\u8be6\u89c1 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docusaurus.io/docs/next/markdown-features"}),"Docusaurus \u5b98\u7f51"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6587\u6863")),(0,a.kt)("p",null,"\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u5fc5\u987b\uff0c\u5bf9\u5e94",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u4e2a\u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\uff09"),(0,a.kt)("p",null,"\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u53ef\u9009\uff0c\u5bf9\u5e94",(0,a.kt)("strong",{parentName:"p"},"3.x \u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\u3002\u4e0d\u4fee\u6539\u5219\u9700\u8981\u7b49\u5f85 Taro \u56e2\u961f\u66f4\u65b0\u6587\u6863\u7248\u672c\u540e\uff0c\u624d\u4f1a\u540c\u6b65\u5230\u6587\u6863\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"3.x")," \u7248\u672c\uff09"),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6587\u6863")),(0,a.kt)("p",null,"\u65b0\u589e\u6587\u6863\u548c\u4fee\u6539\u6587\u6863\u7c7b\u4f3c\uff0c\u9996\u5148\u5206\u522b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\u65b0\u589e\u4e00\u4e2a\u6587\u4ef6\u3002\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_sidebars/version-3.x-sidebars.json")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e0a\u8ff0\u65b0\u589e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,a.kt)("h4",r({},{id:"4-\u63d0\u4ea4-pull-request"}),"4. \u63d0\u4ea4 Pull Request"),(0,a.kt)("h2",r({},{id:"\u8d21\u732e\u4ee3\u7801"}),"\u8d21\u732e\u4ee3\u7801"),(0,a.kt)("h3",r({},{id:"\u73af\u5883\u51c6\u5907"}),"\u73af\u5883\u51c6\u5907"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js"),"\uff08\u5efa\u8bae\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"14.20")," \u53ca\u4ee5\u4e0a\u7248\u672c\uff09\u53ca ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pnpm.io/zh/installation"}),"pnpm")),(0,a.kt)("p",{parentName:"admonition"},"\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u60c5\u51b5\u89c1 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7"}),"pnpm \u517c\u5bb9\u6027"))),(0,a.kt)("p",null,"\u9996\u5148\u628a Taro \u4ed3\u5e93 fork \u4e00\u4efd\u5230\u81ea\u5df1\u7684 Github\uff0c\u7136\u540e\u4ece\u4e2a\u4eba\u4ed3\u5e93\u628a\u9879\u76ee clone \u5230\u672c\u5730\uff0c\u9879\u76ee\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u5206\u652f\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u4f9d\u6b21\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ pnpm install\n$ pnpm run build\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u73af\u5883\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u6b64\u65f6\u53ef\u4ee5\u65b0\u62c9\u4e00\u6761\u5206\u652f\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("h3",r({},{id:"\u8c03\u8bd5"}),"\u8c03\u8bd5"),(0,a.kt)("h4",r({},{id:"\u7f16\u8bd1\u65f6"}),"\u7f16\u8bd1\u65f6"),(0,a.kt)("p",null,"\u8c03\u8bd5",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6"),"\u7684\u4ee3\u7801\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",r({parentName:"p"},{href:"./debug-config"}),"\u300a\u5355\u6b65\u8c03\u6d4b\u300b"),"\u3002"),(0,a.kt)("h4",r({},{id:"\u8fd0\u884c\u65f6"}),"\u8fd0\u884c\u65f6"),(0,a.kt)("p",null,"\u8c03\u8bd5",(0,a.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6"),"\u7684\u4ee3\u7801\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528 link \u7684\u65b9\u5f0f\u628a\u9700\u8981\u8c03\u8bd5\u7684\u5305\u8f6f\u94fe\u5230\u4e00\u4e2a\u6d4b\u8bd5\u9879\u76ee\u4e2d\u540e\u4fbf\u53ef\u76f4\u63a5\u65ad\u70b9\u8c03\u8bd5\u3002\u53ef\u4ee5\u6839\u636e\u6d4b\u8bd5\u9879\u76ee\u7684\u5305\u7ba1\u7406\u5668\u4ee5\u53ca\u81ea\u5df1\u7684\u559c\u597d\u9009\u62e9\u4f7f\u7528 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.npmjs.com/cli/v7/commands/npm-link"}),"npm link")," \u6216 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://yarnpkg.com/cli/link"}),"yarn link")," \u6216 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pnpm.io/zh/cli/link"}),"pnpm link")," \u3002\u4f7f\u7528 pnpm link \u7684\u5177\u4f53\u793a\u4f8b\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316 Demo \u9879\u76ee\uff0c\u4ee5 webpack5 + pnpm\uff08V7.17.0\uff09 \u7684\u9879\u76ee\u4e3a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ taro init testapp\n$ pnpm install\n")),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"link \u8981\u8c03\u8bd5\u7684\u5305\uff0c\u8fd9\u91cc\u5206\u4e24\u79cd\u60c5\u51b5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4e2d\u76f4\u63a5\u88ab\u5f15\u7528\u7684\u5305\uff0c\u5982 @tarojs/components")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5728Demo\u9879\u76ee\u4e0blink\u6e90\u4ee3\u7801\npnpm link /Users/.../taro/packages/taro-components\n# \u6e90\u7801\u4e2d\u589e\u52a0 debugger \u5e76\u5f00\u542f\u5b9e\u65f6\u7f16\u8bd1\npnpm --filter @tarojs/components run dev\n# \u8fd0\u884c\u9879\u76ee\u5373\u53ef\u65ad\u70b9\npnpm dev:h5\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u88ab\u5176\u4ed6\u5185\u90e8\u5305\u4f7f\u7528\u7684\u5305\uff0c\u5982 @tarojs/taro\u3001@tarojs/runtime\u3001@tarojs/plugin-framework-react\u3001@tarojs/plugin-platform-weapp \u88ab @tarojs/webpack5-runner \u4f7f\u7528\u3002",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Demo \u9879\u76ee\u4e0b package.json \u4e2d\u65b0\u589e pnpm \u914d\u7f6e\u5e76\u5e94\u7528\u4f9d\u8d56\u3002")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'  "pnpm": {\n    "overrides": {\n      "@tarojs/runtime": "/Users/.../taro/packages/taro-runtime"\n    }\n  },\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5e94\u7528\u4f9d\u8d56\npnpm install\n")),(0,a.kt)("ol",r({parentName:"li"},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u5728 Demo \u9879\u76ee\u7684 Taro DEV \u914d\u7f6e\u6587\u4ef6\u4e2d\u5173\u95ed\u4f9d\u8d56\u9884\u7f16\u8bd1\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u8c03\u8bd5\u5230\u5b9e\u65f6\u7f16\u8bd1\u7684\u6700\u65b0\u4ee3\u7801\u3002")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'  // /testapp/config/dev.js\n  compiler: {\n    type: "webpack5",\n    prebundle: {\n      enable: false,\n    }\n  },\n')),(0,a.kt)("ol",r({parentName:"li"},{start:3}),(0,a.kt)("li",{parentName:"ol"},"\u6e90\u7801\u4e2d\u589e\u52a0 debugger \u5e76\u5f00\u542f\u5b9e\u65f6\u7f16\u8bd1\uff0c\u7136\u540e\u8fd0\u884c\u4ee3\u7801\u5373\u53ef\u65ad\u70b9")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"pnpm --filter @tarojs/runtime run dev # taro \u6839\u76ee\u5f55\npnpm dev:weapp # Demo \u9879\u76ee\n")))))),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm link <dir>")," \u4e5f\u53ef\u66f4\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm link --global")," \u7684\u65b9\u5f0f\uff0c\u8be6\u89c1 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://pnpm.io/zh/cli/link"}),"pnpm link")),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6e05\u695a\u5305\u4e4b\u95f4\u7684\u8c03\u7528\u5173\u7cfb\uff0c\u5728 package.json \u4e2d\u65b0\u589e pnpm \u914d\u7f6e\u7684\u65b9\u5f0f\u4e5f\u53ef\u6362\u4e3a\u76f4\u63a5 link @tarojs/webpack5-runner \u7684\u65b9\u5f0f\uff0c\u6b65\u9aa4\u548c link @tarojs/components \u76f8\u540c\u3002\u5176\u6839\u672c\u539f\u56e0\u662f pnpm link \u4e0d\u652f\u6301\u9012\u5f52\uff0c\u8be6\u89c1 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/3026"}),"Feature request: pnpm link -r"),"\uff0c\u6240\u4ee5\u8981 link \u6700\u7ec8\u4f7f\u7528\u5b83\u7684\u90a3\u4e2a\u5305\u3002\n:::")),(0,a.kt)("h3",r({parentName:"admonition"},{id:"\u5355\u5143\u6d4b\u8bd5"}),"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u8fd9\u4e9b\u5305\u914d\u5907\u4e86\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"babel-preset-taro")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/cli")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/react")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/webpack-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/mini-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/runtime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-rn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,a.kt)("p",{parentName:"admonition"},"\u5f00\u53d1\u8005\u5728\u4fee\u6539\u4e0a\u8ff0\u5305\u540e\uff0c\u8bf7\u52a1\u5fc5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm --filter [\u5305\u540d] run test:ci"),"\uff0c\u68c0\u67e5\u6d4b\u8bd5\u7528\u4f8b\u662f\u5426\u90fd\u80fd\u901a\u8fc7\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u540c\u65f6\uff0c\u5728\u5f00\u53d1\u4e00\u4e9b\u91cd\u8981\u529f\u80fd\u540e\uff0c\u4e5f\u8bf7\u62bd\u65f6\u95f4\u8865\u4e0a\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot"),"\uff08\u6d4b\u8bd5\u7ed3\u679c\u5feb\u7167\uff09\uff0c\u5728\u4fee\u6539\u8fd9\u4e24\u4e2a\u5305\u6216\u5176\u5b83\u4e00\u4e9b\u5305\u65f6\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u8fd9\u4e9b\u5feb\u7167\u5931\u6548\uff0c\u4ece\u800c\u901a\u8fc7\u4e0d\u4e86\u6d4b\u8bd5\u3002\u5f53\u4f60\u4fee\u6539\u4e86\u8fd9\u4e24\u4e2a\u5305\u3001\u6216 CI \u63d0\u793a\u8fd9\u4e24\u4e2a\u5305\u7684\u6d4b\u8bd5\u7528\u4f8b\u51fa\u9519\u65f6\uff0c\u8bf7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm --filter [\u5305\u540d] run test:ci -u")," \u66f4\u65b0 snapshot \u540e\u91cd\u65b0\u63d0\u4ea4\u3002\n:::"),(0,a.kt)("h3",r({},{id:"\u4ee3\u7801\u98ce\u683c"}),"\u4ee3\u7801\u98ce\u683c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1a\u9075\u4ece ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),"\uff0c\u8be6\u60c5\u8bf7\u770b\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1a\u9075\u4ece\u57fa\u4e8e ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style")," \u7684\u53d8\u79cd\uff0c\u8be6\u60c5\u8bf7\u770b\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," \u548c\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\uff1a\u9075\u5faa\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".stylelintrc")," \u98ce\u683c\u3002")),(0,a.kt)("h3",r({},{id:"commit-\u89c4\u8303"}),"commit \u89c4\u8303"),(0,a.kt)("p",null,"\u5728\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"commit message")," \u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u9075\u4ece ",(0,a.kt)("a",r({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions")," \u89c4\u8303\u3002"),(0,a.kt)("h3",r({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("p",null,"\u5f53\u63d0\u4ea4\u6d89\u53ca\u65b0\u589e\u7279\u6027\u3001Breaking Changes \u6216\u91cd\u8981\u4fee\u6539\u65f6\uff0c\u8bf7\u65b0\u589e\u3001\u4fee\u6539\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6587\u6863\u7684\u5f00\u53d1\u8bf7\u9605\u8bfb",(0,a.kt)("a",r({parentName:"p"},{href:"./CONTRIBUTING#%E4%BF%AE%E6%94%B9%E6%96%87%E6%A1%A3"}),"\u300a\u4fee\u6539\u6587\u6863\u300b"),"\u3002"),(0,a.kt)("h3",r({},{id:"\u63d0\u4ea4-pull-request"}),"\u63d0\u4ea4 Pull Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5bf9 PR\uff08Pull Request\uff09\u4e0d\u4e86\u89e3\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"}),"\u300aAbout Pull Requests\u300b"))),(0,a.kt)("p",null,"\u5b8c\u6210\u5f00\u53d1\u540e\uff0c\u63a8\u9001\u5230\u81ea\u5df1\u7684 Taro \u4ed3\u5e93\uff0c\u5c31\u53ef\u4ee5\u51c6\u5907\u63d0\u4ea4 Pull Request \u4e86\u3002"),(0,a.kt)("p",null,"\u63d0\u4ea4 PR \u524d\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," \u80fd\u591f\u7f16\u8bd1\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u4ee3\u7801\u80fd\u901a\u8fc7 ESLint \u6d4b\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm test:ci")," \u547d\u4ee4\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u90fd\u80fd\u591f\u901a\u8fc7\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u6709\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u8bf7\u7ed9\u4f60\u63d0\u4ea4\u7684\u4ee3\u7801\u4e5f\u6dfb\u52a0\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 commit \u4fe1\u606f\u9700\u8981\u9075\u5faa ",(0,a.kt)("a",r({parentName:"li"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4ea4\u5230\u4ee3\u7801\u975e\u5e38\u591a\u6216\u529f\u80fd\u590d\u6742\uff0c\u53ef\u4ee5\u628a PR \u5206\u6210\u51e0\u4e2a commit \u4e00\u8d77\u63d0\u4ea4\u3002\u6211\u4eec\u5728\u5408\u5e76\u65f6\u4f1a\u4f1a\u6839\u636e\u60c5\u51b5 squash\u3002"),(0,a.kt)("li",{parentName:"ol"},"PR \u4f5c\u8005\u53ef\u4ee5\u9009\u62e9\u52a0\u5165\u5230 Taro \u5f00\u53d1\u8005\u5fae\u4fe1\u7fa4\uff0c\u65b9\u4fbf\u5408\u5e76 PR \u548c\u6280\u672f\u4ea4\u6d41\u3002")))}c.isMDXComponent=!0}}]);