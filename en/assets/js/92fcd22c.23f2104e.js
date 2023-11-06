"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52140],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39554:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Static resource references"},s=void 0,c={unversionedId:"static-reference",id:"static-reference",title:"Static resource references",description:"Static resources can be freely referenced in Taro as with Webpack , and there is no need to install any Loaders.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/static-reference.md",sourceDirName:".",slug:"/static-reference",permalink:"/mirror/taro-docs/en/docs/next/static-reference",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/static-reference.md",tags:[],version:"current",frontMatter:{title:"Static resource references"},sidebar:"docs",previous:{title:"\u8def\u7531\u5e93",permalink:"/mirror/taro-docs/en/docs/next/router-extend"},next:{title:"\u8282\u70b9\u83b7\u53d6",permalink:"/mirror/taro-docs/en/docs/next/ref"}},l={},p=[{value:"Referencing style files",id:"referencing-style-files",level:2},{value:"Referencing JS files",id:"referencing-js-files",level:2},{value:"Referencing images, audio, fonts and other files",id:"referencing-images-audio-fonts-and-other-files",level:2},{value:"Referencing JSON files",id:"referencing-json-files",level:2},{value:"Reference to local resources in mini-program style",id:"reference-to-local-resources-in-mini-program-style",level:2}],f={toc:p};function u(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Static resources can be freely referenced in Taro as with ",(0,r.kt)("a",o({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack")," , and there is no need to install any Loaders."),(0,r.kt)("h2",o({},{id:"referencing-style-files"}),"Referencing style files"),(0,r.kt)("p",null,"Style files can be referenced directly via ES6's ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," syntax"),(0,r.kt)("p",null,"For example, to reference a CSS file"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import './css/path/name.css'\n")),(0,r.kt)("p",null,"Referencing SCSS files"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import './css/path/name.scss'\n")),(0,r.kt)("h2",o({},{id:"referencing-js-files"}),"Referencing JS files"),(0,r.kt)("p",null,"JS files can be referenced directly via ES6's ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { functionName } from './css/path/name.js'\n\nimport defaultExportName from './css/path/name.js'\n")),(0,r.kt)("h2",o({},{id:"referencing-images-audio-fonts-and-other-files"}),"Referencing images, audio, fonts and other files"),(0,r.kt)("p",null,"You can refer to such files directly through ES6's ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," syntax and use them directly in JSX after getting the file reference"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"\nimport namedPng from '../../images/path/named.png'\n\n// Usage\n<View>\n  <Image src={namedPng} />\n</View>\n")),(0,r.kt)("h2",o({},{id:"referencing-json-files"}),"Referencing JSON files"),(0,r.kt)("p",null,"You can refer to such files directly through ES6's ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," syntax to get the JSON data output from the JSON file"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"//  json file\n/**\n* named.json\n* {\n*   x: 1\n* }\n**/\nimport namedJson from '../../json/path/named.json'\n\nconsole.log(namedJson.x)\n")),(0,r.kt)("h2",o({},{id:"reference-to-local-resources-in-mini-program-style"}),"Reference to local resources in mini-program style"),(0,r.kt)("p",null,"In the style of the mini-program, local resources cannot be referenced directly by default, but only by means of network addresses, Base64. To facilitate development, Taro provides a way to refer to local resources directly in the style file, the principle of which is through the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostCSS")," ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/postcss/postcss-url"}),(0,r.kt)("inlineCode",{parentName:"a"},"postcss-url"))," , The plugin converts native resource references in the style to Base64 format so that they can be loaded properly."),(0,r.kt)("p",null,"Taro converts resources up to ",(0,r.kt)("inlineCode",{parentName:"p"},"1kb")," in size by default, if you need to change the configuration, you can do so in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/index.js"),", which is located in ",(0,r.kt)("a",o({parentName:"p"},{href:"/mirror/taro-docs/en/docs/next/config-detail#weappmodulepostcss"}),(0,r.kt)("inlineCode",{parentName:"a"},"weapp.module.postcss")),"\u3002"),(0,r.kt)("p",null,"The specific configuration is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"// mini-prgram side styles referencing local resources inline\nurl: {\n  enable: true,\n  config: {\n    limit: 10240 // Set upper limit of conversion size\n  }\n}\n")))}u.isMDXComponent=!0}}]);