"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64013],{92859:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(93106),n=a(4706),l=a(52670),i=a(99535),s=a(18779),c=a(67384),o={sidebar:"sidebar_hWeB",sidebarItemTitle:"sidebarItemTitle_oNGr",sidebarItemList:"sidebarItemList_uX_I",sidebarItem:"sidebarItem_QIMa",sidebarItemLink:"sidebarItemLink_XWqs",sidebarItemLinkActive:"sidebarItemLinkActive_OTdG"};function m({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var u=a(34578);function b({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return r.createElement(u.Zo,{component:b,props:e})}function d({sidebar:e}){const t=(0,i.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(g,{sidebar:e}):r.createElement(m,{sidebar:e}):null}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function E(e){const{sidebar:t,toc:a,children:i}=e,s=f(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return r.createElement(l.Z,p({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(d,{sidebar:t}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},69858:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r,n=a(93106),l=a(4706),i=a(67384);const s=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var c=a(80070),o=a(8760),m=a(92859),u=a(94907),b={tag:"tag_PtXn"};function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},g.apply(this,arguments)}function d({letterEntry:e}){return n.createElement("article",null,n.createElement("h2",null,e.letter),n.createElement("ul",{className:"padding--none"},e.tags.map((e=>n.createElement("li",{key:e.permalink,className:b.tag},n.createElement(u.Z,g({},e)))))),n.createElement("hr",null))}function p({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);var n;null!==(n=(r=t)[a])&&void 0!==n||(r[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return n.createElement("section",{className:"margin-vert--lg"},t.map((e=>n.createElement(d,{key:e.letter,letterEntry:e}))))}var f=a(5914);function E({tags:e,sidebar:t}){const a=s();return n.createElement(c.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage)},n.createElement(c.d,{title:a}),n.createElement(f.Z,{tag:"blog_tags_list"}),n.createElement(m.Z,{sidebar:t},n.createElement("h1",null,a),n.createElement(p,{tags:e})))}},94907:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(93106),n=a(4706),l=a(18779),i={tag:"tag_K0JS",tagRegular:"tagRegular_os77",tagWithCount:"tagWithCount_vYU0"};function s({permalink:e,label:t,count:a}){return r.createElement(l.Z,{href:e,className:(0,n.Z)(i.tag,a?i.tagWithCount:i.tagRegular)},t,a&&r.createElement("span",null,a))}}}]);