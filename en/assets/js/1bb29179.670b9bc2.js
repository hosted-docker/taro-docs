"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[71822],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1147:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"TaroPlatformWeb"},i=void 0,p={unversionedId:"platform-plugin/platform-web",id:"version-3.x/platform-plugin/platform-web",title:"TaroPlatformWeb",description:"\u6211\u4eec\u628a\u7f16\u8bd1\u65f6\u5e38\u7528\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u4e86\u4e00\u4e2a\u57fa\u7c7b TaroPlatformWeb\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7ee7\u627f\u4e8e\u6b64\u57fa\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7aef\u5e73\u53f0\u7684\u7f16\u8bd1\u3002",source:"@site/versioned_docs/version-3.x/platform-plugin/platform-web.md",sourceDirName:"platform-plugin",slug:"/platform-plugin/platform-web",permalink:"/mirror/taro-docs/en/docs/platform-plugin/platform-web",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/platform-plugin/platform-web.md",tags:[],version:"3.x",frontMatter:{title:"TaroPlatformWeb"},sidebar:"docs",previous:{title:"\u6a21\u677f",permalink:"/mirror/taro-docs/en/docs/platform-plugin/template"},next:{title:"\u6982\u8ff0",permalink:"/mirror/taro-docs/en/docs/test-utils/"}},s={},c=[{value:"\u65b9\u6cd5\u4e0e\u5c5e\u6027",id:"\u65b9\u6cd5\u4e0e\u5c5e\u6027",level:2},{value:"constructor (ctx, config)",id:"constructor-ctx-config",level:3},{value:"ctx",id:"ctx",level:3},{value:"this.ctx.modifyWebpackChain",id:"thisctxmodifywebpackchain",level:4},{value:"helper",id:"helper",level:3},{value:"config",id:"config",level:3},{value:"(abstract) platform",id:"abstract-platform",level:3},{value:"(abstract) runtimePath",id:"abstract-runtimepath",level:3},{value:"setupTransaction",id:"setuptransaction",level:3},{value:"buildTransaction",id:"buildtransaction",level:3},{value:"start ()",id:"start-",level:3},{value:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b",id:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b",level:2},{value:"1. \u7ee7\u627f\u57fa\u7c7b",id:"1-\u7ee7\u627f\u57fa\u7c7b",level:3},{value:"2. \u5904\u7406 API",id:"2-\u5904\u7406-api",level:3},{value:"3. \u5904\u7406\u7ec4\u4ef6",id:"3-\u5904\u7406\u7ec4\u4ef6",level:3}],u={toc:c};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u4eec\u628a\u7f16\u8bd1\u65f6\u5e38\u7528\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u4e86\u4e00\u4e2a\u57fa\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"TaroPlatformWeb"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7ee7\u627f\u4e8e\u6b64\u57fa\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7aef\u5e73\u53f0\u7684\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u521b\u5efa\u4e00\u4e2a H5 \u5e73\u53f0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { TaroPlatformWeb } from '@tarojs/service'\nexport default class H5 extends TaroPlatformWeb {\n  // ...\n}\n")),(0,r.kt)("h2",a({},{id:"\u65b9\u6cd5\u4e0e\u5c5e\u6027"}),"\u65b9\u6cd5\u4e0e\u5c5e\u6027"),(0,r.kt)("h3",a({},{id:"constructor-ctx-config"}),"constructor (ctx, config)"),(0,r.kt)("p",null,"\u6784\u9020\u51fd\u6570\uff0c\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"ctx"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63d2\u4ef6\u4e0a\u4e0b\u6587\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"config"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Taro \u7f16\u8bd1\u914d\u7f6e")))),(0,r.kt)("h3",a({},{id:"ctx"}),"ctx"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"\u63d2\u4ef6\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"),(0,r.kt)("h4",a({},{id:"thisctxmodifywebpackchain"}),"this.ctx.modifyWebpackChain"),(0,r.kt)("p",null,"\u83b7\u53d6 WebpackChain\uff0c\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  modifyWebpackChain() {\n    // \u901a\u8fc7 this.ctx.modifyWepackChain \u80fd\u83b7\u53d6\u5230 WebpackChain \u5b9e\u4f8b\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      // chain.xxxx\n    })\n  }\n}\n")),(0,r.kt)("h3",a({},{id:"helper"}),"helper"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"\u5b58\u653e\u7740\u4e00\u7cfb\u5217\u5de5\u5177\u51fd\u6570\uff0c\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/helper")," \u5305\u7684\u5bfc\u51fa\u5185\u5bb9\u3002"),(0,r.kt)("h3",a({},{id:"config"}),"config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"\u7f16\u8bd1\u914d\u7f6e\u5bf9\u8c61\u3002"),(0,r.kt)("h3",a({},{id:"abstract-platform"}),"(abstract) platform"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"\u5e73\u53f0\u540d\u79f0\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  platform = 'h5'\n}\n")),(0,r.kt)("h3",a({},{id:"abstract-runtimepath"}),"(abstract) runtimePath"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stirng")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]")),(0,r.kt)("p",null,"Web \u7aef\u7f16\u8bd1\u7684\u8fd0\u884c\u65f6\u6587\u4ef6\u7684\u89e3\u6790\u8def\u5f84\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  runtimePath = '@tarojs/plugin-platform-h5/dist/runtime'\n}\n")),(0,r.kt)("h3",a({},{id:"setuptransaction"}),"setupTransaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setup")," \u9636\u6bb5\u7684\u4e8b\u52a1\u94a9\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,r.kt)("h3",a({},{id:"buildtransaction"}),"buildTransaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build")," \u9636\u6bb5\u7684\u4e8b\u52a1\u94a9\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,r.kt)("h3",a({},{id:"start-"}),"start ()"),(0,r.kt)("p",null,"\u63d2\u4ef6\u5165\u53e3\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," \u65b9\u6cd5\u5f00\u542f\u7f16\u8bd1\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class H5 extends TaroPlatformWeb {\n  // ...\n}\n\nexport default (ctx) => {\n  ctx.registerPlatform({\n    name: 'h5',\n    useConfigName: 'h5',\n    async fn({ config }) {\n      const program = new H5(ctx, config)\n      await program.start()\n    },\n  })\n}\n")),(0,r.kt)("h2",a({},{id:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b"}),"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u4ee5\u6269\u5c55\u5bf9 Web \u7aef\u7684\u7f16\u8bd1\u652f\u6301\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b\u3002"),(0,r.kt)("h3",a({},{id:"1-\u7ee7\u627f\u57fa\u7c7b"}),"1. \u7ee7\u627f\u57fa\u7c7b"),(0,r.kt)("p",null,"\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"TaroPlatformWeb")," \u4ee5\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"H5")," \u7c7b\uff0c\u5e76\u5b9e\u73b0\u6240\u6709\u62bd\u8c61\u5c5e\u6027\u3001\u53ef\u9009\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { TaroPlatformWeb } from '@tarojs/service'\n\nconst PACKAGE_NAME = '@tarojs/plugin-platform-h5'\n\nclass H5 extends TaroPlatformWeb {\n  // \u5e73\u53f0\u540d\u79f0\n  platform = 'h5'\n  // Web \u7aef\u8fd0\u884c\u65f6\u6587\u4ef6\u7684\u89e3\u6790\u8def\u5f84\n  runtimePath = `${PACKAGE_NAME}/dist/runtime`\n\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    /**\n    * 1. setupTransaction - init\n    * 2. setup\n    * 3. setupTransaction - close\n    * 4. buildTransaction - init\n    * 5. build\n    * 6. buildTransaction - close\n    */\n\n    // \u53ef\u4ee5\u5728 setup \u7684\u4e0d\u540c\u9636\u6bb5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n\n    // \u53ef\u4ee5\u5728 build \u7684\u4e0d\u540c\u9636\u6bb5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n\nexport default H5\n")),(0,r.kt)("h3",a({},{id:"2-\u5904\u7406-api"}),"2. \u5904\u7406 API"),(0,r.kt)("p",null,"\u5728 Web \u7aef\u73af\u5883\u4e2d\u589e\u51cf API \u5176\u5b9e\u5e76\u4e0d\u96be\uff0c\u5728\u4e4b\u524d\u7248\u672c\u4e2d\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u914d\u7f6e alias \u53c2\u6570\u5b9e\u73b0\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-platform-h5")," \u4e2d\u4e5f\u662f\u5982\u6b64\uff0c\u901a\u8fc7\u5c06 runner \u4e2d\u76f8\u5173\u7684\u4ee3\u7801\u62bd\u79bb\u5b9e\u73b0\u7684\u8fd9\u4e00\u7279\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"  modifyWebpackConfig () {\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      const alias = chain.resolve.alias\n      alias.set('@tarojs/taro', require.resolve('./runtime/apis'))\n    })\n  }\n")),(0,r.kt)("p",null,"\u867d\u7136\u5bf9 API \u4fee\u6539\u5f88\u5bb9\u6613\uff0c\u4f46\u662f\u5982\u679c\u65b0\u589e\u7684 API \u5374\u4e0d\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.newAPI")," \u7684\u5f62\u5f0f\u6765\u4f7f\u7528\uff0c\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u5728\u63d2\u4ef6\u6253\u5305\u65f6\u9700\u8981\u501f\u52a9 exportNameOnly \u63d2\u4ef6\u8f93\u51fa\u5f53\u524d\u63d2\u4ef6\u652f\u6301\u7684 API \u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'}),"import exportNameOnly from '@tarojs/plugin-platform-h5/build/rollup-plugin-export-name-only'\n{\n  input: path.join(cwd, 'src/runtime/apis/index.ts'),\n  output: {\n    file: 'dist/taroApis.js',\n    format: 'cjs',\n    inlineDynamicImports: true\n  },\n  plugins: [exportNameOnly()]\n}\n")),(0,r.kt)("p",null,"\u5e76\u5c06 API \u5217\u8868\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," \u6ce8\u518c\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.newAPI")," \u8f6c\u6362\u6210\u5bf9\u5e94\u8bed\u6cd5\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"  modifyWebpackConfig () {\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      const rules = chain.module.rules\n      const script = rules.get('script')\n      const babelLoader = script.uses.get('babelLoader')\n      babelLoader.set('options', {\n        ...babelLoader.get('options'),\n        plugins: [\n          [require('babel-plugin-transform-taroapi'), {\n            packageName: '@tarojs/taro',\n            apis: require(resolveSync('./taroApis'))\n          }]\n        ]\n      })\n    })\n  }\n")),(0,r.kt)("h3",a({},{id:"3-\u5904\u7406\u7ec4\u4ef6"}),"3. \u5904\u7406\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528 Taro \u63d0\u4f9b\u7684\u7ec4\u4ef6\u4ec5\u4ec5\u9700\u8981\u5728 runtime \u4e2d\u6ce8\u518c\uff0c\u5e76\u901a\u8fc7\u522b\u540d\u4e3a\u4e0d\u540c\u524d\u7aef UI \u6846\u67b6\u914d\u7f6e\u6240\u9700\u7684\u9002\u914d\u5668\uff08@tarojs/components/lib/","[framework]","\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import '@tarojs/components/dist/taro-components/taro-components.css'\n\nimport { applyPolyfills, defineCustomElements } from '@tarojs/components/loader'\n\n// Note: 3.6.3 \u5f00\u59cb\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u8c03\u7528 applyPolyfills \u548c defineCustomElements\napplyPolyfills().then(function () {\n  defineCustomElements(window)\n})\n")),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u65b0\u589e\u7ec4\u4ef6\u53ef\u4ee5\u8003\u8651\u4e0e Taro \u4e00\u6837\u4f7f\u7528 stencil \u6216\u8005\u5176\u4ed6 web-components \u65b9\u6848\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4ec5\u4e3a\u5355\u4e00\u6846\u67b6\u63d0\u4f9b\u7ec4\u4ef6\u5e93\uff08\u4f8b\u5982 useHtmlComponents \u6a21\u5f0f\uff0c\u5c06\u7ec4\u4ef6\u5e93\u66ff\u6362\u4e3a @tarojs/components-react\uff09\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4ec5\u66ff\u6362\u90e8\u5206\u53c8\u4e0d\u5e0c\u671b\u6ce8\u518c\u5168\u90e8\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u624b\u52a8\u6ce8\u518c\u6240\u9700\u7ec4\u4ef6\u5e76\u5bfc\u51fa\uff0c\u6bd4\u5982 taro-pull-to-refresh \u63d0\u4f9b\u4e86\u4e0b\u62c9\u5237\u65b0\u7684\u7279\u6027\uff0c\u5982\u679c\u672a\u6ce8\u518c\u4f1a\u5bfc\u81f4\u76f8\u5173\u7279\u6027\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts",metastring:'title="src/runtime/index.ts"',title:'"src/runtime/index.ts"'}),"import { defineCustomElement } from '@tarojs/components/dist/components/taro-pull-to-refresh'\n\n// Note: 3.6.3 \u5f00\u59cb\uff0c\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u6ce8\u518c\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u8c03\u7528 defineCustomElement\ndefineCustomElement()\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e0b\u62c9\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e3a appConfig \u65b0\u589e PullDownRefresh \u914d\u7f6e\u66ff\u6362\u4f7f\u7528\uff0c\u5bf9\u4e8e\u63d2\u4ef6\u6765\u8bf4\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5199\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"  modifyWebpackConfig () {\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      chain.plugin('mainPlugin')\n        .tap(args => {\n          args[0].loaderMeta ||= {\n            extraImportForWeb: '',\n            execBeforeCreateWebApp: ''\n          }\n          args[0].loaderMeta.extraImportForWeb += `import { PullDownRefresh } from '@tarojs/components'\\n`\n          args[0].loaderMeta.execBeforeCreateWebApp += `config.PullDownRefresh = PullDownRefresh\\n`\n          return args\n        })\n    })\n  }\n")))}m.isMDXComponent=!0}}]);