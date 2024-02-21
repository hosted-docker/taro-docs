"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24929],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"H5"},l=void 0,p={unversionedId:"h5",id:"h5",title:"H5",description:"This article will introduce H5 development related content, including compatibility, considerations, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/h5.md",sourceDirName:".",slug:"/h5",permalink:"/mirror/taro-docs/en/docs/next/h5",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/h5.md",tags:[],version:"current",frontMatter:{title:"H5"},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/mirror/taro-docs/en/docs/next/mini-troubleshooting"},next:{title:"React Native Development Process",permalink:"/mirror/taro-docs/en/docs/next/react-native"}},s={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"ES5",id:"es5",level:3},{value:"babel-loader",id:"babel-loader",level:4},{value:"Android 4.4",id:"android-44",level:4},{value:"React compatibility component library",id:"react-compatibility-component-library",level:3},{value:"Usage",id:"usage",level:4},{value:"\u8d21\u732e\u6d41\u7a0b",id:"\u8d21\u732e\u6d41\u7a0b",level:4},{value:"React",id:"react",level:2},{value:"fast refresh",id:"fast-refresh",level:3}],u={toc:c},d="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article will introduce H5 development related content, including compatibility, considerations, etc."),(0,r.kt)("h2",a({},{id:"compatibility"}),"Compatibility"),(0,r.kt)("h3",a({},{id:"es5"}),"ES5"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," is configured as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"targets = {\n  ios: '9',\n  android: '5'\n}\n")),(0,r.kt)("p",null,"If you need to be compatible with lower versions of the system, change the configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-preset-taro")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root directory. ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/babel-config"}),"docs")),(0,r.kt)("h4",a({},{id:"babel-loader"}),"babel-loader"),(0,r.kt)("p",null,"To improve compilation speed, Taro sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader"),". Dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," (except for those named with ",(0,r.kt)("inlineCode",{parentName:"p"},"taro"),") are not compiled by babel. See ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/4aa08d541b1c5221bf420fc0f4a305960e22aa0a/packages/taro-webpack-runner/src/util/chain.ts#L502-L510"}),"Github")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," configuration."),(0,r.kt)("p",null,"Therefore the following issues need to be noted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components")," is not compiled by Babel by default, but ES5 packages were not compiled before ",(0,r.kt)("inlineCode",{parentName:"li"},"3.2.10"),", please update to ",(0,r.kt)("inlineCode",{parentName:"li"},"3.2.10")," and above."),(0,r.kt)("li",{parentName:"ul"},"Dependencies in ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," are not compiled by default, if you have compatibility needs, please modify the ",(0,r.kt)("inlineCode",{parentName:"li"},"external")," property of ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-loader")," manually using ",(0,r.kt)("a",a({parentName:"li"},{href:"config-detail#h5webpackchain"}),"WebpackChain"),".")),(0,r.kt)("h4",a({},{id:"android-44"}),"Android 4.4"),(0,r.kt)("p",null,"Android 4.4 compatible Please make sure you have done the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taro is using ",(0,r.kt)("inlineCode",{parentName:"li"},"v3.2.15+")," version."),(0,r.kt)("li",{parentName:"ul"},"Use the compatibility component library (only React is supported for now)."),(0,r.kt)("li",{parentName:"ul"},"Properly configure ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-preset-taro")," and install ",(0,r.kt)("inlineCode",{parentName:"li"},"corejs3"),"."),(0,r.kt)("li",{parentName:"ul"},"If you still have problems with ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise undefined"),", you can manually introduce a Promise polyfill in ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html"),".")),(0,r.kt)("h3",a({},{id:"react-compatibility-component-library"}),"React compatibility component library"),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Taro 3.2.4 started to support")),(0,r.kt)("p",null,"Taro3 H5-side component library is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Components")," and was developed using the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://stenciljs.com/"}),"Stencil")," framework."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stencil ",(0,r.kt)("a",a({parentName:"p"},{href:"https://stenciljs.com/docs/browser-support"}),"Compatibility Status"))),(0,r.kt)("p",null,"However, there are still some problems with mobile support for ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Components"),", the main issues are as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android 4.4 white screen"),(0,r.kt)("li",{parentName:"ul"},"Multi-line text truncation failure"),(0,r.kt)("li",{parentName:"ul"},"Some Android machines (OPPO, VIVO mostly), the style ",(0,r.kt)("inlineCode",{parentName:"li"},"visibility")," switch fails to cause the page white screen")),(0,r.kt)("p",null,"Therefore, developers with strong compatibility requirements can use the ",(0,r.kt)("strong",{parentName:"p"},"React Compatibility Component Library")," instead of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Components")," component library. It is completely based on React and has good compatibility, but currently ",(0,r.kt)("strong",{parentName:"p"},"only a few commonly used components")," have been adapted, so developers should ",(0,r.kt)("strong",{parentName:"p"},"choose carefully")," to use it."),(0,r.kt)("h4",a({},{id:"usage"}),"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installing the Compatibility Component Library")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ yarn add @tarojs/components-react\n")),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Set the compilation configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"h5.useHtmlComponents"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"module.exports = {\n  h5: {\n    useHtmlComponents: true\n  }\n}\n")),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Start Compile")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ taro build --type h5 --watch\n")),(0,r.kt)("h4",a({},{id:"\u8d21\u732e\u6d41\u7a0b"}),"\u8d21\u732e\u6d41\u7a0b"),(0,r.kt)("p",null,"Due to manpower issues, the Taro team is still focusing on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Components")," component library for iteration. Developers are also welcome to add to the React-compatible component library by converting components developed in ",(0,r.kt)("inlineCode",{parentName:"p"},"Stencil")," syntax to React syntax (Stencil supports JSX, so it's not a lot of work). See the development process at ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-components-react/README.md#%E6%94%B9%E9%80%A0%E6%96%B9%E6%B3%95"}),"@tarojs/component-react")),(0,r.kt)("h2",a({},{id:"react"}),"React"),(0,r.kt)("p",null,"Some issues to keep in mind when developing H5 with React."),(0,r.kt)("h3",a({},{id:"fast-refresh"}),"fast refresh"),(0,r.kt)("p",null,"React has the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"}),"fast refresh")," feature enabled by default in H5 Dev compile mode."),(0,r.kt)("p",null,"However, when ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/9576"}),"custom environment variable")," is used, the following error is reported."),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://storage.360buyimg.com/cjj-pub-images/fast-refresh-error.png",alt:null}))),(0,r.kt)("p",null,"or when ",(0,r.kt)("inlineCode",{parentName:"p"},"Webpack devServer")," is configured to turn off hot updates: ",(0,r.kt)("inlineCode",{parentName:"p"},"hot: false"),", the following error will be reported."),(0,r.kt)("admonition",a({},{type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},"Uncaught ReferenceError: $RefreshSig$ is not defined")),(0,r.kt)("p",null,"This is all because in dev environments, Taro does two things by default."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the Babel plugin with ",(0,r.kt)("inlineCode",{parentName:"li"},"fast-refresh")),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"devServer.hot")," in the Webpack configuration to true will add the ",(0,r.kt)("inlineCode",{parentName:"li"},"fast refresh")," loader.")),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"fast refresh")," Babel plugin and the loader must be enabled or disabled at the same time."),(0,r.kt)("p",null,"So when you get the above error, or if you don't want to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"fast refresh"),", you can disable it by configuring both Babel and Webpack."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js" {5}',title:'"config/index.js"',"{5}":!0}),"const config = {\n  // ...\n  h5: {\n    devServer: {\n      hot: false\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js" {5}',title:'"babel.config.js"',"{5}":!0}),"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      hot: false\n    }]\n  ]\n}\n")))}m.isMDXComponent=!0}}]);