"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93530],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"React DevTools"},i=void 0,c={unversionedId:"react-devtools",id:"version-3.x/react-devtools",title:"React DevTools",description:"Taro v3.3.1 started support.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/react-devtools.md",sourceDirName:".",slug:"/react-devtools",permalink:"/mirror/taro-docs/en/docs/react-devtools",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-devtools.md",tags:[],version:"3.x",frontMatter:{title:"React DevTools"},sidebar:"docs",previous:{title:"\u9519\u8bef\u5904\u7406",permalink:"/mirror/taro-docs/en/docs/react-error-handling"},next:{title:"Preact",permalink:"/mirror/taro-docs/en/docs/preact"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"1. Installation",id:"1-installation",level:3},{value:"2. Configuring the Taro Plugin",id:"2-configuring-the-taro-plugin",level:3},{value:"3. Compile project",id:"3-compile-project",level:3},{value:"Plugin Parameters",id:"plugin-parameters",level:2},{value:"enabled",id:"enabled",level:3},{value:"hostname",id:"hostname",level:3},{value:"port",id:"port",level:3},{value:"Caution",id:"caution",level:2},{value:"Detail Design",id:"detail-design",level:2}],u={toc:s},d="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(d,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.3.1 started support.")),(0,r.kt)("p",null,"When developing mini program you can use ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/README.md"}),"React DevTools"),"\u3002"),(0,r.kt)("h2",o({},{id:"usage"}),"Usage"),(0,r.kt)("h3",o({},{id:"1-installation"}),"1. Installation"),(0,r.kt)("p",null,"Install the Taro plugin in your project ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ yarn add --dev @tarojs/plugin-react-devtools\n")),(0,r.kt)("h3",o({},{id:"2-configuring-the-taro-plugin"}),"2. Configuring the Taro Plugin"),(0,r.kt)("p",null,"Configure the Taro compile configuration to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'}),"config = {\n  plugins: [\n    '@tarojs/plugin-react-devtools'\n  ],\n  // ...\n}\n")),(0,r.kt)("h3",o({},{id:"3-compile-project"}),"3. Compile project"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ taro build --type weapp --watch\n")),(0,r.kt)("h2",o({},{id:"plugin-parameters"}),"Plugin Parameters"),(0,r.kt)("p",null,"The plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools")," has the following parameters."),(0,r.kt)("h3",o({},{id:"enabled"}),"enabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Controls whether to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),", which will inject backend code into the developer's app when enabled."),(0,r.kt)("h3",o({},{id:"hostname"}),"hostname"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Default value\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")),(0,r.kt)("p",null,"When localhost is not available, customize the host name of ",(0,r.kt)("inlineCode",{parentName:"p"},"taro")," connection ",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),", which is mostly used for LAN or remote debugging."),(0,r.kt)("h3",o({},{id:"port"}),"port"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"8097")),(0,r.kt)("p",null,"The Websocket port used by React DevTools."),(0,r.kt)("h2",o({},{id:"caution"}),"Caution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The version of ",(0,r.kt)("inlineCode",{parentName:"li"},"react-devtools")," is forcibly locked, and updating it requires modifying the code of the ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-react-devtools")," plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/OVERVIEW.md#inspecting-hooks"}),"To identify custom hooks"),", backend performs a function on some developers need to be aware of any side effects of the code.")),(0,r.kt)("p",null,"In addition, the current support for devtools is not comprehensive enough, some features need to be modified for the mini program environment magic backend to achieve, welcome to build ~"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support element highlighting."),(0,r.kt)("li",{parentName:"ul"},"Record ",(0,r.kt)("inlineCode",{parentName:"li"},"filters")," changes in the ",(0,r.kt)("inlineCode",{parentName:"li"},"storage")," of the mini program.")),(0,r.kt)("h2",o({},{id:"detail-design"}),"Detail Design"),(0,r.kt)("p",null,"For detailed design, see ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0005-react-devtools.md"}),"RFC"),"\u3002"))}m.isMDXComponent=!0}}]);