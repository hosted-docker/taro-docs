"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90291],{79874:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(93106);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,c=u["".concat(o,".").concat(d)]||u[d]||k[d]||r;return t?a.createElement(c,p(p({ref:n},m),{},{components:t})):a.createElement(c,p({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21191:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});t(93106);var a=t(79874);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const p={title:"\u8d21\u732e\u6307\u5357"},i=void 0,o={unversionedId:"CONTRIBUTING-GUIDE",id:"CONTRIBUTING-GUIDE",title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u4ee3\u7801",source:"@site/docs/CONTRIBUTING-GUIDE.md",sourceDirName:".",slug:"/CONTRIBUTING-GUIDE",permalink:"/mirror/taro-docs/docs/next/CONTRIBUTING-GUIDE",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/CONTRIBUTING-GUIDE.md",tags:[],version:"current",frontMatter:{title:"\u8d21\u732e\u6307\u5357"},sidebar:"docs",previous:{title:"\u8d21\u732e\u5f62\u5f0f",permalink:"/mirror/taro-docs/docs/next/CONTRIBUTING"},next:{title:"Taro \u4ed3\u5e93\u6982\u89c8",permalink:"/mirror/taro-docs/docs/next/codebase-overview"}},s={},m=[{value:"\u8d21\u732e\u4ee3\u7801",id:"\u8d21\u732e\u4ee3\u7801",level:2},{value:"1. \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",level:3},{value:"2. \u5f00\u53d1\u4e0e\u8c03\u8bd5",id:"2-\u5f00\u53d1\u4e0e\u8c03\u8bd5",level:3},{value:"3. \u65b0\u589e/\u5220\u9664\u4f9d\u8d56",id:"3-\u65b0\u589e\u5220\u9664\u4f9d\u8d56",level:3},{value:"4. \u5355\u5143\u6d4b\u8bd5",id:"4-\u5355\u5143\u6d4b\u8bd5",level:3},{value:"5. \u4ee3\u7801\u98ce\u683c",id:"5-\u4ee3\u7801\u98ce\u683c",level:3},{value:"6. \u63d0\u4ea4 commit",id:"6-\u63d0\u4ea4-commit",level:3},{value:"7.\u63d0\u4ea4 Pull Request",id:"7\u63d0\u4ea4-pull-request",level:3},{value:"8. \u53d1\u5e03\u6d4b\u8bd5\u7248\u672c",id:"8-\u53d1\u5e03\u6d4b\u8bd5\u7248\u672c",level:3},{value:"9. \u6587\u6863",id:"9-\u6587\u6863",level:3},{value:"10. Rust \u90e8\u5206",id:"10-rust-\u90e8\u5206",level:3},{value:"NAPI bindings",id:"napi-bindings",level:4},{value:"SWC \u63d2\u4ef6",id:"swc-\u63d2\u4ef6",level:4},{value:"\u8d21\u732e\u6587\u6863",id:"\u8d21\u732e\u6587\u6863",level:2},{value:"1. fork &amp; clone",id:"1-fork--clone",level:4},{value:"2. \u7f16\u8bd1\u9884\u89c8",id:"2-\u7f16\u8bd1\u9884\u89c8",level:4},{value:"3. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863",id:"3-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863",level:4},{value:"4. \u63d0\u4ea4 Pull Request",id:"4-\u63d0\u4ea4-pull-request",level:4}],u={toc:m},k="wrapper";function d(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)(k,l({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"\u8d21\u732e\u4ee3\u7801"}),"\u8d21\u732e\u4ee3\u7801"),(0,a.kt)("h3",l({},{id:"1-\u73af\u5883\u51c6\u5907"}),"1. \u73af\u5883\u51c6\u5907"),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js 16"),"\uff08\u5efa\u8bae\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"16.20.0")," \u53ca\u4ee5\u4e0a\u7248\u672c\uff09\u53ca ",(0,a.kt)("a",l({parentName:"p"},{href:"https://pnpm.io/zh/installation"}),"pnpm 7")),(0,a.kt)("p",{parentName:"admonition"},"\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u60c5\u51b5\u89c1 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7"}),"pnpm \u517c\u5bb9\u6027"))),(0,a.kt)("p",null,"\u9996\u5148\u628a Taro \u4ed3\u5e93 fork \u4e00\u4efd\u5230\u81ea\u5df1\u7684 Github\uff0c\u7136\u540e\u4ece\u4e2a\u4eba\u4ed3\u5e93\u628a\u9879\u76ee clone \u5230\u672c\u5730\uff0c\u9879\u76ee\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u4f9d\u6b21\u5728\u9879\u76ee\u6839\u76ee\u5f55\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\u4f9d\u8d56\n$ pnpm i\n# \u7f16\u8bd1\u6784\u5efa\n$ pnpm build\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u73af\u5883\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u6b64\u65f6\u53ef\u4ee5\u65b0\u62c9\u4e00\u6761\u5206\u652f\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("h3",l({},{id:"2-\u5f00\u53d1\u4e0e\u8c03\u8bd5"}),"2. \u5f00\u53d1\u4e0e\u8c03\u8bd5"),(0,a.kt)("p",null,"Taro \u7531\u4e00\u7cfb\u5217\u5b50 npm \u5305\u7ec4\u6210\uff0c\u6574\u4f53\u9879\u76ee\u7ec4\u7ec7\u57fa\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"pnpm workspace"),"\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u5355\u72ec\u4fee\u6539\u3001\u7f16\u8bd1\u67d0\u4e2a\u5b50\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u7f16\u8bd1\u67d0\u4e2a\u5b50\u5305\uff0c[package-name] \u4e3a\u8be5\u5b50\u5305\u7684 package.json \u91cc\u7684 name \u5b57\u6bb5\n$ pnpm --filter [package-name] run dev\n")),(0,a.kt)("p",null,"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"link")," \u7684\u65b9\u5f0f\u628a\u9700\u8981\u8c03\u8bd5\u7684\u5305\u8f6f\u94fe\u5230\u4e00\u4e2a\u6d4b\u8bd5\u9879\u76ee\u4e2d\uff0c\u7136\u540e\u4fbf\u53ef\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u6d4b\u8bd5\u9879\u76ee\u7684\u5305\u7ba1\u7406\u5668\u4ee5\u53ca\u81ea\u5df1\u7684\u559c\u597d\u9009\u62e9\u4f7f\u7528 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://docs.npmjs.com/cli/v7/commands/npm-link"}),"npm link")," \u6216 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://yarnpkg.com/cli/link"}),"yarn link"),"\uff08\u63a8\u8350\uff09\u6216 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://pnpm.io/zh/cli/link"}),"pnpm link")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"yarn link")," \u7684\u5177\u4f53\u793a\u4f8b\u5982\u4e0b\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u9700\u8981\u8c03\u8bd5\u7684\u5b50\u5305\u7684\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn link"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u6d4b\u8bd5\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn link"),"\u3002\uff08\u6ce8\u610f\u88ab\u8c03\u8bd5\u7684\u5b50\u5305\u7684\u7248\u672c\u8981\u548c\u6d4b\u8bd5\u9879\u76ee\u4e2d\u8be5\u4f9d\u8d56\u7684\u7248\u672c\u4fdd\u6301\u4e00\u81f4\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"pnpm link")," \u7684\u5177\u4f53\u793a\u4f8b\u5982\u4e0b\uff1a")),(0,a.kt)("p",null,"\u60c5\u51b5\u4e00\u3001\u6d4b\u8bd5\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6709\u58f0\u660e\u5bf9\u8be5\u5305\u7684\u4f9d\u8d56"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u9700\u8981\u8c03\u8bd5\u7684\u5b50\u5305\u7684\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm link --global"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u6d4b\u8bd5\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm link --global [package-name]"),"\u3002")),(0,a.kt)("p",null,"\u60c5\u51b5\u4e8c\u3001\u6d4b\u8bd5\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6ca1\u6709\u58f0\u660e\u5bf9\u8be5\u5305\u7684\u4f9d\u8d56\uff0c\u8be5\u4f9d\u8d56\u5305\u662f\u88ab\u67d0\u4e2a Taro \u5305\u95f4\u63a5\u4f9d\u8d56\u7684\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/runner-utils"),"\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u65b0\u589e pnpm \u914d\u7f6e\u5e76\u914d\u7f6e\u8be5\u4f9d\u8d56\u5305\u7684\u5177\u4f53\u94fe\u63a5\u8def\u5f84")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-json"}),'"pnpm": {\n  "overrides": {\n    "@tarojs/runner-utils": "/Users/.../taro/packages/taro-runner-utils"\n  }\n},\n')),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm i")," \u91cd\u65b0\u5b89\u88c5\u6d4b\u8bd5\u9879\u76ee\u7684\u4f9d\u8d56")),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u9879\u76ee\u4e2d\u521b\u5efa\u597d\u94fe\u63a5\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u542f\u52a8\u9879\u76ee\u7f16\u8bd1\u3002\u6ce8\u610f\u5982\u679c\u662f\u7f16\u8bd1 H5 \u6216\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u8bf7\u63d0\u524d\u5173\u95ed\u4f9d\u8d56\u9884\u7f16\u8bd1\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-json"}),'// /demo/config/dev.js\ncompiler: {\n  type: "webpack5",\n  prebundle: {\n    enable: false,\n  }\n}\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u9700\u8981\u88ab\u8c03\u8bd5\u7684\u5305\u4e2d\u52a0\u5165\u65ad\u70b9\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6\u4ee3\u7801"),"\u53ef\u4ee5\u5728\u5404\u7aef\u7684\u5f00\u53d1\u5de5\u5177\uff08\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u3001Chrome...\uff09\u4e2d\u65ad\u70b9\u8c03\u8bd5\uff0c\u800c",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6"),"\u7684\u4ee3\u7801\u9700\u8981\u4f7f\u7528 VSCode debugger \u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",l({parentName:"p"},{href:"./debug-config"}),"\u300a\u5355\u6b65\u8c03\u6d4b\u300b"),"\u3002"),(0,a.kt)("h3",l({},{id:"3-\u65b0\u589e\u5220\u9664\u4f9d\u8d56"}),"3. \u65b0\u589e/\u5220\u9664\u4f9d\u8d56"),(0,a.kt)("p",null,"\u63a8\u8350\u9075\u5faa\u7684\u4f9d\u8d56\u6cbb\u7406\u89c4\u8303\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u628a\u5b50\u5305\u7528\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"devDependencies")," \u5b89\u88c5\u5728\u5b50\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"TypeScript\u3001\u5404\u79cd Lint \u5de5\u5177\u3001Rollup \u7b49\u7528\u4e8e\u6cbb\u7406 Taro \u9879\u76ee\u7684\u4f9d\u8d56\u63a8\u8350\u5b89\u88c5\u5728\u4e3b\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b50\u5305\u662f\u63d2\u4ef6\u7c7b\u9879\u76ee\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies")," \u58f0\u660e\u5b9e\u9645\u9879\u76ee\u4e2d\u80af\u5b9a\u4f1a\u5b89\u88c5\u7684\u4f9d\u8d56\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u5728\u6839\u76ee\u5f55\u65b0\u589e\u4f9d\u8d56\n$ pnpm add -wD <dependency>\n# \u5728\u6839\u76ee\u5f55\u5220\u9664\u4f9d\u8d56\n$ pnpm remove -wD <dependency>\n# \u4e3a\u67d0\u4e2a\u5b50\u5305\uff08\u5982 @tarojs/cli\uff09\u65b0\u589e\u4e00\u4e2a\u4f9d\u8d56\n$ pnpm --filter @tarojs/cli add <dependency>\n# \u4e3a\u67d0\u4e2a\u5b50\u5305\uff08\u5982 @tarojs/cli\uff09\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\n$ pnpm --filter @tarojs/cli remove <dependency>\n# \u4e3a\u6240\u6709\u5b50\u5305\u65b0\u589e\u4e00\u4e2a\u4f9d\u8d56\n$ pnpm -r --filter=./packages/* add <dependency>\n# \u4e3a\u6240\u6709\u5b50\u5305\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\n$ pnpm -r --filter=./packages/* remove <dependency>\n# \u5220\u9664\u6839\u76ee\u5f55\u7684 node_modules \u548c\u6240\u6709 workspace \u91cc\u7684 node_modules\n$ npm run clear-all\n")),(0,a.kt)("h3",l({},{id:"4-\u5355\u5143\u6d4b\u8bd5"}),"4. \u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"test:ci")," \u547d\u4ee4\u7684\u5b50\u5305\u90fd\u914d\u5907\u4e86\u5355\u5143\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u5728\u4fee\u6539\u8fd9\u4e9b\u5305\u540e\uff0c\u8bf7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm --filter [package-name] run test:ci"),"\uff0c\u68c0\u67e5\u6d4b\u8bd5\u7528\u4f8b\u662f\u5426\u90fd\u80fd\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u5728\u5f00\u53d1\u4e00\u4e9b\u91cd\u8981\u529f\u80fd\u540e\uff0c\u4e5f\u8bf7\u62bd\u65f6\u95f4\u8865\u4e0a\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack5-runner")," \u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot"),"\uff08\u6d4b\u8bd5\u7ed3\u679c\u5feb\u7167\uff09\u3002\u5728\u4fee\u6539\u8fd9\u4e24\u4e2a\u5305\u6216\u5176\u5b83\u4e00\u4e9b\u5305\u65f6\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u8fd9\u4e9b\u5feb\u7167\u5931\u6548\uff0c\u4ece\u800c\u901a\u8fc7\u4e0d\u4e86\u6d4b\u8bd5\u3002\u5f53\u4f60\u4fee\u6539\u4e86\u8fd9\u4e24\u4e2a\u5305\u3001\u6216 Github CI \u63d0\u793a\u8fd9\u4e9b\u5305\u7684\u6d4b\u8bd5\u7528\u4f8b\u51fa\u9519\u65f6\uff0c\u8bf7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm --filter [package-name] runupdateSnapshot")," \u66f4\u65b0 snapshot \u540e\u91cd\u65b0\u63d0\u4ea4\u3002"),(0,a.kt)("h3",l({},{id:"5-\u4ee3\u7801\u98ce\u683c"}),"5. \u4ee3\u7801\u98ce\u683c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aJavaScript \u98ce\u683c\u9075\u4ece ",(0,a.kt)("a",l({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1aTypeScript \u98ce\u683c\u4e5f\u662f ",(0,a.kt)("a",l({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style")," \u7684\u53d8\u79cd\uff0c\u8be6\u60c5\u8bf7\u770b\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"eslint.json")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\uff1a\u9075\u5faa\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".stylelintrc")," \u98ce\u683c\u3002")),(0,a.kt)("h3",l({},{id:"6-\u63d0\u4ea4-commit"}),"6. \u63d0\u4ea4 commit"),(0,a.kt)("p",null,"\u6574\u4e2a Taro \u4ed3\u5e93\u9075\u4ece ",(0,a.kt)("a",l({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\uff0c\u5728\u8f93\u5165 commit message \u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u9075\u4ece\u6b64\u89c4\u8303\u3002"),(0,a.kt)("h3",l({},{id:"7\u63d0\u4ea4-pull-request"}),"7.\u63d0\u4ea4 Pull Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5bf9 PR\uff08Pull Request\uff09\u4e0d\u4e86\u89e3\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",l({parentName:"p"},{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"}),"\u300aAbout Pull Requests\u300b"))),(0,a.kt)("p",null,"\u5b8c\u6210\u5f00\u53d1\u540e\uff0c\u63a8\u9001\u5230\u81ea\u5df1\u7684 Taro \u4ed3\u5e93\uff0c\u5c31\u53ef\u4ee5\u51c6\u5907\u63d0\u4ea4 Pull Request \u4e86\u3002"),(0,a.kt)("p",null,"\u63d0\u4ea4 PR \u524d\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," \u80fd\u591f\u7f16\u8bd1\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u4ee3\u7801\u80fd\u901a\u8fc7 ESLint \u6d4b\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm test:ci")," \u547d\u4ee4\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u90fd\u80fd\u591f\u901a\u8fc7\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u6709\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u8bf7\u7ed9\u4f60\u63d0\u4ea4\u7684\u4ee3\u7801\u4e5f\u6dfb\u52a0\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1 commit \u4fe1\u606f\u9700\u8981\u9075\u5faa ",(0,a.kt)("a",l({parentName:"li"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4ea4\u5230\u4ee3\u7801\u975e\u5e38\u591a\u6216\u529f\u80fd\u590d\u6742\uff0c\u53ef\u4ee5\u628a PR \u5206\u6210\u51e0\u4e2a commit \u4e00\u8d77\u63d0\u4ea4\u3002\u6211\u4eec\u5728\u5408\u5e76\u65f6\u4f1a\u4f1a\u6839\u636e\u60c5\u51b5 squash\u3002"),(0,a.kt)("li",{parentName:"ol"},"PR \u4f5c\u8005\u53ef\u4ee5\u9009\u62e9\u52a0\u5165\u5230 Taro \u5f00\u53d1\u8005\u5fae\u4fe1\u7fa4\uff0c\u65b9\u4fbf\u5408\u5e76 PR \u548c\u6280\u672f\u4ea4\u6d41\u3002")),(0,a.kt)("h3",l({},{id:"8-\u53d1\u5e03\u6d4b\u8bd5\u7248\u672c"}),"8. \u53d1\u5e03\u6d4b\u8bd5\u7248\u672c"),(0,a.kt)("p",null,"\u63d0\u4ea4 PR \u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u5f00\u53d1\u5206\u652f\u4e0a\u53d1\u5e03\u6d4b\u8bd5\u7248\u672c\u5230 npm\u3002\u90e8\u5206\u96be\u4ee5\u5728\u672c\u5730\u9a8c\u8bc1\u7684\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u5206\u652f\u540d\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"feat/")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"chore/")," \u5f00\u5934\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 Taro \u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\u547d\u4ee4\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u66f4\u65b0 workspace \u5185\u6240\u6709\u5b50\u5305\u7684\u7248\u672c\u53f7\uff0c\u5982 pnpm version 3.6.22-alpha.0\n$ pnpm version <version>\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"git commit --amend")," \u547d\u4ee4\uff0c\u624b\u52a8\u4fee\u6539\u6700\u65b0\u4e00\u4e2a commit \u7684 commit message\uff0c\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--tag=<tag>"),"\uff08\u6b64 tag \u4ee3\u8868\u53d1\u5e03\u7684 npm tag\uff09\u3002\u5982\u53d1\u5e03 alpha \u7248\u672c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"chore(release): publish 3.6.22-alpha.0 --tag=alpha"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u4fee\u6539\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5c06\u4f1a\u89e6\u53d1 Github CI \u7684\u53d1\u5e03\u6d41\u7a0b\u3002")),(0,a.kt)("h3",l({},{id:"9-\u6587\u6863"}),"9. \u6587\u6863"),(0,a.kt)("p",null,"\u5f53\u63d0\u4ea4\u6d89\u53ca\u65b0\u589e\u7279\u6027\u3001Breaking Changes \u6216\u91cd\u8981\u4fee\u6539\u65f6\uff0c\u8bf7\u53ca\u65f6\u65b0\u589e\u3001\u4fee\u6539\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6587\u6863\u7684\u5f00\u53d1\u8bf7\u9605\u8bfb\u4e0b\u4e00\u7ae0\u8282\uff1a\u300a\u8d21\u732e\u6587\u6863\u300b\u3002"),(0,a.kt)("h3",l({},{id:"10-rust-\u90e8\u5206"}),"10. Rust \u90e8\u5206"),(0,a.kt)("p",null,"Taro \u4ed3\u5e93\u91cc\u6709\u90e8\u5206\u4f7f\u7528 Rust \u5f00\u53d1\u7684\u5b50\u5305\uff0c\u5728\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u6d4b\u8bd5\u8fd9\u4e9b\u5305\u65f6\u6709\u4e0d\u4e00\u6837\u7684\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"Rust \u4ee3\u7801\u5b58\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"crates")," \u6587\u4ef6\u5939\u4e0b\uff0c\u4f7f\u7528 Cargo workspace \u7ba1\u7406\uff0c\u76ee\u524d\u5305\u62ec NAPI bindings \u548c\u82e5\u5e72 SWC \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u524d\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup")," \u5b89\u88c5 Rust \u5de5\u5177\u94fe\u3002"),(0,a.kt)("h4",l({},{id:"napi-bindings"}),"NAPI bindings"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build:binding:debug")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build:binding:release")," \u547d\u4ee4\uff0c\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"crates/native-binding")," \u6587\u4ef6\u5939\u4e2d\u7f16\u8bd1\u51fa binding \u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"taro.[os-platform].node"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u6267\u884c\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"$ pnpm --filter @tarojs/binding run test\n")),(0,a.kt)("p",null,"\u6216\u7ed3\u5408\u8c03\u7528\u65b9\u6267\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"),(0,a.kt)("h4",l({},{id:"swc-\u63d2\u4ef6"}),"SWC \u63d2\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup target add wasm32-wasi")," \u547d\u4ee4\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528 SWC \u6d4b\u8bd5\u5957\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u6267\u884c\u6240\u6709 SWC \u63d2\u4ef6\u7684\u5355\u5143\u6d4b\u8bd5\n$ cargo test-swc-plugins\n# \u6267\u884c\u67d0\u4e2a SWC \u63d2\u4ef6\u7684\u5355\u5143\u6d4b\u8bd5\n$ cargo test -p [package-name]\n")),(0,a.kt)("p",null,"\u529f\u80fd\u5b8c\u6210\u540e\u53ef\u4ee5\u7f16\u8bd1\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm")," \u6587\u4ef6\uff0c\u8054\u5408\u8c03\u7528\u65b9\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# \u7f16\u8bd1\u6240\u6709 SWC \u63d2\u4ef6\n$ cargo build-swc-plugins\n# \u7f16\u8bd1\u67d0\u4e2a SWC \u63d2\u4ef6\n$ cargo build -p [package-name]\n")),(0,a.kt)("p",null,"Cargo workspace \u4f1a\u628a\u7f16\u8bd1\u4ea7\u7269\u8f93\u51fa\u5230\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u6587\u4ef6\u5939\u4e2d\u3002\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u65f6\uff0c\u9700\u8981\u624b\u52a8\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm")," \u4ea7\u7269\u8f6f\u94fe\u5230\u76ee\u6807\u6587\u4ef6\u5939\uff0c\u800c Github CI \u5728\u6b63\u5f0f\u53d1\u5e03\u65f6\u4f1a\u81ea\u52a8\u62f7\u8d1d\u4ea7\u7269\u5230\u6b63\u786e\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,a.kt)("p",null,"\u5982\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"@taorjs/helper")," \u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u65f6\uff0c\u4f1a\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/swc_plugin_xxx.wasm")," \u6587\u4ef6\u7684\u8f6f\u94fe\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/taro-helper/swc/swc_plugin_xxx.wasm"),"\u3002"),(0,a.kt)("h2",l({},{id:"\u8d21\u732e\u6587\u6863"}),"\u8d21\u732e\u6587\u6863"),(0,a.kt)("p",null,"\u5f53\u9605\u8bfb\u65f6\u9047\u5230\u660e\u663e\u7684\u9519\u8bef\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u70b9\u51fb\u6bcf\u7bc7\u6587\u6863\u6700\u4e0b\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit this page")," \u6309\u94ae\uff0c\u5373\u4f1a\u6253\u5f00 Github \u7684\u7f16\u8f91\u754c\u9762\u3002\u5f00\u53d1\u8005\u5bf9\u6587\u6863\u8fdb\u884c\u7f16\u8f91\u540e\uff0c\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e00\u4e2a Pull Request\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u8f83\u590d\u6742\u7684\u4fee\u6539\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("h4",l({},{id:"1-fork--clone"}),"1. fork & clone"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fork ",(0,a.kt)("a",l({parentName:"li"},{href:"https://github.com/NervJS/taro-docs"}),"taro-docs")," \u4ed3\u5e93"),(0,a.kt)("li",{parentName:"ol"},"clone \u4e2a\u4eba\u4ed3\u5e93\u7684 taro-docs \u81f3\u672c\u5730\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/{your github name}/taro-docs.git\n")),(0,a.kt)("h4",l({},{id:"2-\u7f16\u8bd1\u9884\u89c8"}),"2. \u7f16\u8bd1\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"$ pnpm install\n$ pnpm run start\n")),(0,a.kt)("h4",l({},{id:"3-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863"}),"3. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mdx")," \u540e\u7f00\uff0c\u8bed\u6cd5\u8be6\u89c1 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://docusaurus.io/docs/next/markdown-features"}),"Docusaurus \u5b98\u7f51"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6587\u6863")),(0,a.kt)("p",null,"\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u5fc5\u987b\uff0c\u5bf9\u5e94",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u4e2a\u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\uff09"),(0,a.kt)("p",null,"\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u53ef\u9009\uff0c\u5bf9\u5e94",(0,a.kt)("strong",{parentName:"p"},"3.x \u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\u3002\u4e0d\u4fee\u6539\u5219\u9700\u8981\u7b49\u5f85 Taro \u56e2\u961f\u66f4\u65b0\u6587\u6863\u7248\u672c\u540e\uff0c\u624d\u4f1a\u540c\u6b65\u5230\u6587\u6863\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"3.x")," \u7248\u672c\uff09"),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6587\u6863")),(0,a.kt)("p",null,"\u65b0\u589e\u6587\u6863\u548c\u4fee\u6539\u6587\u6863\u7c7b\u4f3c\uff0c\u9996\u5148\u5206\u522b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\u65b0\u589e\u4e00\u4e2a\u6587\u4ef6\u3002\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_sidebars/version-3.x-sidebars.json")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e0a\u8ff0\u65b0\u589e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,a.kt)("h4",l({},{id:"4-\u63d0\u4ea4-pull-request"}),"4. \u63d0\u4ea4 Pull Request"))}d.isMDXComponent=!0}}]);