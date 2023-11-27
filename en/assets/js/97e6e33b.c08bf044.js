"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45845],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var o=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return r?o.createElement(v,i(i({ref:t},u),{},{components:r})):o.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},70346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});r(93106);var o=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},a=void 0,s={unversionedId:"apis/device/bluetooth/startBluetoothDevicesDiscovery",id:"version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery",title:"Taro.startBluetoothDevicesDiscovery(option)",description:"Starts searching for nearby Bluetooth peripherals. This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the Taro.stopBluetoothDevicesDiscovery method to stop searching.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/startBluetoothDevicesDiscovery",permalink:"/mirror/taro-docs/en/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",tags:[],version:"3.x",frontMatter:{title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},sidebar:"API",previous:{title:"stopBluetoothDevicesDiscovery",permalink:"/mirror/taro-docs/en/docs/apis/device/bluetooth/stopBluetoothDevicesDiscovery"},next:{title:"openBluetoothAdapter",permalink:"/mirror/taro-docs/en/docs/apis/device/bluetooth/openBluetoothAdapter"}},c={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Promised",id:"promised",level:3},{value:"Option",id:"option",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u},d="wrapper";function h(e){var{components:t}=e,r=l(e,["components"]);return(0,o.kt)(d,n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starts searching for nearby Bluetooth peripherals. ",(0,o.kt)("strong",{parentName:"p"},"This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Taro.stopBluetoothDevicesDiscovery")," method to stop searching.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"}),"Reference"))),(0,o.kt)("h2",n({},{id:"type"}),"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),(0,o.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,o.kt)("h3",n({},{id:"promised"}),"Promised"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"success: ok; fail: error message.")))),(0,o.kt)("h3",n({},{id:"option"}),"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"allowDuplicatesKey"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Indicates whether a device can be reported multiple times. If yes, the ",(0,o.kt)("code",null,"Taro.onBlueToothDeviceFound")," method will report a device multiple times, but with different RSSI values.\u3002")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"interval"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The device reporting interval. 0 indicates new devices are immediately reported. Other values indicate devices are reported based on the specified interval.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"services"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string[]")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The list of primary service UUIDs of Bluetooth devices to be discovered. Some Bluetooth devices will broadcast their own primary service uuids. If this parameter is set, only Bluetooth devices with primary services corresponding to the uuids in the broadcast package are discovered. We recommend using this parameter to filter out nearby Bluetooth devices that are not needed.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h2",n({},{id:"sample-code"}),"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"// For example, the primary service UUID of the smart Bluetooth light of the WeChat hardware platform is FEE7. When this parameter is provided, only the device with the primary service UUID of FEE7 is searched for.\nTaro.startBluetoothDevicesDiscovery({\n  services: ['FEE7'],\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,o.kt)("h2",n({},{id:"api-support"}),"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.startBluetoothDevicesDiscovery"),(0,o.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,o.kt)("td",n({parentName:"tr"},{align:"center"})),(0,o.kt)("td",n({parentName:"tr"},{align:"center"}))))))}h.isMDXComponent=!0}}]);