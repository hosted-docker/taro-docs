"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[96785],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});n(93106);var o=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"Best Practices"},p=void 0,l={unversionedId:"best-practice",id:"version-3.x/best-practice",title:"Best Practices",description:"About the JSX support added",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/best-practice.md",sourceDirName:".",slug:"/best-practice",permalink:"/mirror/taro-docs/en/docs/best-practice",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/best-practice.md",tags:[],version:"3.x",frontMatter:{title:"Best Practices"}},s={},c=[{value:"About the JSX support added",id:"about-the-jsx-support-added",level:2},{value:"The best encoding",id:"the-best-encoding",level:2},{value:"Component style description",id:"component-style-description",level:3},{value:"To the component set <code>defaultProps</code>",id:"to-the-component-set-defaultprops",level:3},{value:"Attribute names to  components transfer function <code>on</code> beginning",id:"attribute-names-to--components-transfer-function-on-beginning",level:3},{value:"mini-app end don&#39;t print in the component incoming function",id:"mini-app-end-dont-print-in-the-component-incoming-function",level:3},{value:"Don&#39;t put in the mini-app end template used in the data set to <code>undefined</code>",id:"dont-put-in-the-mini-app-end-template-used-in-the-data-set-to-undefined",level:3},{value:"mini-app end don&#39;t print<code>this.props.children</code> in the components",id:"mini-app-end-dont-printthispropschildren-in-the-components",level:3},{value:"Introduced into JSX support props",id:"introduced-into-jsx-support-props",level:3},{value:"Component property transfer notice",id:"component-property-transfer-notice",level:3},{value:"In the component <code>state</code> and <code>props</code> field name repetition",id:"in-the-component-state-and-props-field-name-repetition",level:3},{value:"mini-app page lifecycle <code>componentWillMount</code> inconsistency problem",id:"mini-app-page-lifecycle-componentwillmount-inconsistency-problem",level:3},{value:"Components of <code>constructor</code> and <code>render</code> call ahead of time",id:"components-of-constructor-and-render-call-ahead-of-time",level:3},{value:"JS code must use single quotation marks",id:"js-code-must-use-single-quotation-marks",level:3},{value:"The use of the environment variable <code>process.env</code>",id:"the-use-of-the-environment-variable-processenv",level:3},{value:"Using <code>this.$componentType</code> ponent is to determine the current Taro.Component page or component",id:"using-thiscomponenttype-ponent-is-to-determine-the-current-tarocomponent-page-or-component",level:3},{value:"mini-app that native components pass props to Taro components",id:"mini-app-that-native-components-pass-props-to-taro-components",level:3},{value:"Global Variable",id:"global-variable",level:2}],m={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"about-the-jsx-support-added"}),"About the JSX support added"),(0,o.kt)("p",null,"Because the JSX in writing, we can't support to all JSX wording, due to the limit WeChat small process at the same time, also has some excellent JSX usage temporarily can't get a good support, in this added level of support for the JSX:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md"}),"Cannot use Array#map methods operation outside of the JSX array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-jsx-in-class-method.md"}),"Temporary does not support the render() method to define JSX")," (from v1.3.0-beta.0 for support)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-spread-in-props.md"}),"Not in the JSX parameters using the object operator")," (from v1.3.0-beta.0, custom components can use object identifier, the built-in components still need incoming parameters separately)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-stateless-function.md"}),"Does not support a stateless components")," (from v1.3.0-beta.0 for support)")),(0,o.kt)("p",null,"The above rules in Taro generated by default template has ESLint detection, without doing any configuration. If your editor is not installed ESLint plug-in can refer to the following tutorial in your editor installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"VSCode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/eslint.html"}),"IntelliJ IDEA(WebStorm JetBrains department, etc)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://packagecontrol.io/packages/ESLint"}),"Sublime Text"))),(0,o.kt)("p",null,"By default Taro compiler will to warn of unable to run the code, when there is no call stack information code can be generated. If you need to drop ESLint disabled at compile time checking, can in order before joining ",(0,o.kt)("inlineCode",{parentName:"p"},"ESLint=false")," parameters, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ ESLINT=false taro build --type weapp --watch\n")),(0,o.kt)("h2",a({},{id:"the-best-encoding"}),"The best encoding"),(0,o.kt)("p",null,"After a long time of exploration and verification, the Taro on WeChat applet is to use a mini-app that relies on native custom components system to realize the Taro, modular design, so the mini-app the componentization is limited by a mini-app native component system, while at the same time in order to achieve the goal of writing the code in the React way, Taro itself made some compile-time and runtime processing, it also brought some noteworthy constraints, so it is necessary to elaborate Taro coding best practices."),(0,o.kt)("h3",a({},{id:"component-style-description"}),"Component style description"),(0,o.kt)("p",null,"WeChat mini-app ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html"}),"Custom components")," default is not affected by the external style, such as to quote for a custom components in the page, write directly in the page style custom component elements of the style is unable to take effect. In this, Taro, too, and that is with all of you cognition of traditional Web development are different."),(0,o.kt)("h3",a({},{id:"to-the-component-set-defaultprops"}),"To the component set ",(0,o.kt)("inlineCode",{parentName:"h3"},"defaultProps")),(0,o.kt)("p",null,"In the WeChat mini-app custom components, only in ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," specified in the properties, can be introduced into and received from the parent component"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"Component({\n  properties: {\n    myProperty: { // The property name\n      type: String, // Type (required), currently accepted types include: String, Number, Boolean, Object, Array, null (any type)\n      value: '', // Properties of the initial value (optional), if not specified will choose according to the type\n      observer: function (newVal, oldVal, changedPath) {\n         // Property is a function to be executed by the change (optional), also can be written as defined in the methods section of the method name string, such as: '_propertyChange'\n         // NewVal is a new set of data, usually oldVal is old data\n      }\n    },\n    myProperty2: String // The definition of simplified way\n  }\n  ...\n})\n")),(0,o.kt)("p",null,"In Taro, for use in component code to from ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," attributes, can be identified at compile time and join the compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),", temporary support for the following writing"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"this.props.property\n\nconst { property } = this.props\n\nconst property = this.props.property\n")),(0,o.kt)("p",null,"There are one thousand Hamlet in the heart, but one thousand people of different people code written certainly is not the same, so the compilation of Taro certainly cannot cover all the writing, And at the same time may have a certain attribute is not used directly passed to the child components, no matter what also can't handle this kind of circumstance is compile time, at this time requires everyone to component Settings when coding ",(0,o.kt)("a",a({parentName:"p"},{href:"/mirror/taro-docs/en/docs/apis/about/tarocomponent#defaultprops"}),(0,o.kt)("inlineCode",{parentName:"a"},"defaultProps"))," to solve the."),(0,o.kt)("p",null,"Component set ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultProps")," will be handled at run time to make up for the compile time less than, all attributes will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," initialization of the component, is set up correctly ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultProps")," can avoid the occurrence of a lot of abnormal condition."),(0,o.kt)("h3",a({},{id:"attribute-names-to--components-transfer-function-on-beginning"}),"Attribute names to  components transfer function ",(0,o.kt)("inlineCode",{parentName:"h3"},"on")," beginning"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In v1.3.0 - beta. 0, the custom event passed between components can need not ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," beginning, But the events of the built-in components still is ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," beginning, for the sake of consistency we still recommend you to ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," start naming your event.")),(0,o.kt)("p",null,"Components in Taro, father to son module transfer function, the attribute name must start with ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," beginning"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Call the Custom components, the incoming handleEvent function, attribute called onTrigger\nclass Parent extends Component {\n\n  handleEvent () {\n\n  }\n\n  render () {\n    return (\n      <Custom onTrigger={this.handleEvent}></Custom>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"This is because the end componentization WeChat small procedure is cannot directly transfer function type to child components, is with the help of a component in the Taro ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html"}),"event mechanism")," to implement this feature, and the mini-app in the attribute name written for incoming events ",(0,o.kt)("inlineCode",{parentName:"p"},"bindmyevent")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bind:myevent")),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-xml"}),'\x3c!-- When fire myevent event custom components, call onMyEvent method --\x3e\n<component-tag-name bindmyevent="onMyEvent" />\n\x3c!-- Or can be written as --\x3e\n<component-tag-name bind:myevent="onMyEvent" />\n')),(0,o.kt)("p",null,"So the property name component in the Taro agreed transfer function with ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," beginning, at the same time it also consistent with built-in component event binding method."),(0,o.kt)("h3",a({},{id:"mini-app-end-dont-print-in-the-component-incoming-function"}),"mini-app end don't print in the component incoming function"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since the v1.3.0 - beta. 0 no this limit")),(0,o.kt)("p",null,"As mentioned earlier on the mini-app components to function principle, so don't print the component on the mini-app end incoming function, because can't get the result, but ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.onXxx && this.props.onXxx()")," The judging function is passed to the calling method is fully supported."),(0,o.kt)("h3",a({},{id:"dont-put-in-the-mini-app-end-template-used-in-the-data-set-to-undefined"}),"Don't put in the mini-app end template used in the data set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"undefined")),(0,o.kt)("p",null,"Due to the mini-app does not support the data in any of the terms of the value is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", when setState also please avoid such use. You can use null to replace."),(0,o.kt)("h3",a({},{id:"mini-app-end-dont-printthispropschildren-in-the-components"}),"mini-app end don't print",(0,o.kt)("inlineCode",{parentName:"h3"},"this.props.children")," in the components"),(0,o.kt)("p",null,"On WeChat applet is through ",(0,o.kt)("inlineCode",{parentName:"p"},"<slot />")," to realize to the incoming elements in custom components, and Taro use ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," implements the function at compile time, ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.children")," can be directly compiled into ",(0,o.kt)("inlineCode",{parentName:"p"},"<slot />")," label, so it belongs to the existence of the syntactic sugar in a mini-app end, please don't print it in the component."),(0,o.kt)("h3",a({},{id:"introduced-into-jsx-support-props"}),"Introduced into JSX support props"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1.9")," began to support")),(0,o.kt)("p",null,"Support to JSX props, but element to JSX attribute name must be in ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," beginning"),(0,o.kt)("p",null,"Child components, for example"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>\n          {this.props.renderHeader}\n        </View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>\n          {this.props.renderFooter}\n        </View>\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"The parent component calls subcomponents are introduced into JSX"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"class App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog\n          renderHeader={\n            <View className='welcome-message'>Welcome!</View>\n          }\n          renderFooter={\n            <Button className='close'>Close</Button>\n          }\n        >\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("h3",a({},{id:"component-property-transfer-notice"}),"Component property transfer notice"),(0,o.kt)("p",null,"Do not regard ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," as the name of the property with the internal state of custom components, because the property name in small WeChat program applications will be lost."),(0,o.kt)("h3",a({},{id:"in-the-component-state-and-props-field-name-repetition"}),"In the component ",(0,o.kt)("inlineCode",{parentName:"h3"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"props")," field name repetition"),(0,o.kt)("p",null,"Don't ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," on in the field with the same name, because these fields in WeChat mini-app will hang in ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,o.kt)("h3",a({},{id:"mini-app-page-lifecycle-componentwillmount-inconsistency-problem"}),"mini-app page lifecycle ",(0,o.kt)("inlineCode",{parentName:"h3"},"componentWillMount")," inconsistency problem"),(0,o.kt)("p",null,"Due to their small WeChat program page in ",(0,o.kt)("inlineCode",{parentName:"p"},"onLoad")," routing parameters to get a page, the page before the onLoad components have ",(0,o.kt)("inlineCode",{parentName:"p"},"attached"),". So the page ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillMount")," could be in line with expectations are not too. Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Error term\nrender () {\n  // Couldn't get before willMount routing parameters\n  const abc = this.$router.params.abc\n  return <Custom adc={abc} />\n}\n\n// Correct term\ncomponentWillMount () {\n  const abc = this.$router.params.abc\n  this.setState({\n    abc\n  })\n}\nrender () {\n  // Add a compatible judgment\n  return this.state.abc && <Custom adc={abc} />\n}\n")),(0,o.kt)("p",null,"For does not need to wait until after page willMount routing parameters page would not have any effect."),(0,o.kt)("h3",a({},{id:"components-of-constructor-and-render-call-ahead-of-time"}),"Components of ",(0,o.kt)("inlineCode",{parentName:"h3"},"constructor")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"render")," call ahead of time"),(0,o.kt)("p",null,"Many developers should have noticed carefully, after Taro compilation to mini-app, component ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," default will call one more time, don't act and React."),(0,o.kt)("p",null,"This is because the components of Taro compiled custom components is a mini-app, and the mini-app initialization time of custom components can be specified ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to make components have initialized data. Developers generally in the component ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," sets some initialization ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", at the same time, it may be in ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," handling ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," generate new data, in Taro extra call ahead of time, this time is to collect the component initialization data, to custom components generated in advance ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", to ensure that the can with data when the component initialization, let the first render normal components."),(0,o.kt)("p",null,"So, in code, need to do some fault tolerance in dealing with data processing, so that we can avoid the ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," call appear error due to no data in advance."),(0,o.kt)("h3",a({},{id:"js-code-must-use-single-quotation-marks"}),"JS code must use single quotation marks"),(0,o.kt)("p",null,"In Taro, JS code must be written in single quotes, especially in the JSX, if a double quotation marks, may cause a compiler error."),(0,o.kt)("h3",a({},{id:"the-use-of-the-environment-variable-processenv"}),"The use of the environment variable ",(0,o.kt)("inlineCode",{parentName:"h3"},"process.env")),(0,o.kt)("p",null,"Don't want to get through in the form of deconstruction ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," environment variables, please directly to complete writing ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," for use"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Error writing, does not support\nconst { NODE_ENV = 'development' } = process.env\nif (NODE_ENV === 'development') {\n  ...\n}\n\n// Correct term\nif (process.env.NODE_ENV === 'development') {\n\n}\n")),(0,o.kt)("h3",a({},{id:"using-thiscomponenttype-ponent-is-to-determine-the-current-tarocomponent-page-or-component"}),"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"this.$componentType")," ponent is to determine the current Taro.Component page or component"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"this.$componentType")," possible values respectively ",(0,o.kt)("inlineCode",{parentName:"p"},"PAGE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPONENT"),", developers can according to the value of the variable respectively, take different logic."),(0,o.kt)("h3",a({},{id:"mini-app-that-native-components-pass-props-to-taro-components"}),"mini-app that native components pass props to Taro components"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Taro v1.3+")," the props system is reformed, make can't compatible with primary component by the properties of incoming attribute."),(0,o.kt)("p",null,"Now can put all the props need to Taro component, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"extraProps")," attribute to solve."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),'// mini-app component conventional props\n<plugin title="{{name}}" desc="{{desc}}" bindonclick="onClick"></plugin>\n\n// Native mini-app component calls Taro components need to transform into the following form:\nthis.setData({\n  extraProps: {\n    name,\n    desc,\n    onClick: this.onClick\n  }\n})\n<plugin extraProps="{{extraProps}}" ></plugin>\n')),(0,o.kt)("h2",a({},{id:"global-variable"}),"Global Variable"),(0,o.kt)("p",null,"Is recommended to use in the Taro ",(0,o.kt)("inlineCode",{parentName:"p"},"Redux")," for the management of the global variables, but for small applications, ",(0,o.kt)("inlineCode",{parentName:"p"},"Redux")," may seem heavy, at that time if you want to use global variables, recommend the following use."),(0,o.kt)("p",null,"A new self named ",(0,o.kt)("inlineCode",{parentName:"p"},"JS")," files, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"global_data. JS"),", sample code is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"const globalData = {}\n\nexport function set (key, val) {\n  globalData[key] = val\n}\n\nexport function get (key) {\n  return globalData[key]\n}\n")),(0,o.kt)("p",null,"Then it can be used in any position"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import { set as setGlobalData, get as getGlobalData } from './path/name/global_data'\n\nsetGlobalData('test', 1)\n\ngetGlobalData('test')\n")))}d.isMDXComponent=!0}}]);