(self.webpackChunkarchitecture_portfolio=self.webpackChunkarchitecture_portfolio||[]).push([[350],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function i(t,n,l){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),l=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),i=n(9713),l=n(7316),a=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n(7294),s=n(4983).mdx,f=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=l(e,a),c=f(t),d=p.useMemo((function(){if(!n)return null;var e=u({React:p,mdx:s},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return p.createElement(d,u({},i))}},5835:function(e,t,n){"use strict";var r=n(7294),o=n(6725),i=n(9692),l=n(3119),a=n(9747),c=i.default.section.withConfig({displayName:"MainContent__Section",componentId:"sc-7ybv9d-0"})(["display:flex;flex-direction:column;min-height:100%;padding:20px 0;@media (min-width:769px){flex-direction:row;justify-content:space-between;padding:0 50px;}"]),u=i.default.div.withConfig({displayName:"MainContent__Header",componentId:"sc-7ybv9d-1"})(["display:flex;flex-direction:column;justify-content:flex-start;@media (min-width:769px){width:40%;padding:100px 180px 0 0;}"]),p=(0,i.default)(l.E.h2).withConfig({displayName:"MainContent__Title",componentId:"sc-7ybv9d-2"})(["align-self:flex-start;position:relative;margin:0 0 14px;font-size:36px;font-weight:800;letter-spacing:1.4px;&::before{content:'';position:absolute;top:24px;right:-18px;display:block;height:10px;width:10px;background-color:black;z-index:10;}"]),s=(0,i.default)(l.E.p).withConfig({displayName:"MainContent__Description",componentId:"sc-7ybv9d-3"})(["text-align:left;"]),f=i.default.article.withConfig({displayName:"MainContent__Content",componentId:"sc-7ybv9d-4"})(["min-height:100%;@media (min-width:769px){width:60%;}"]),d={duration:.2,delay:.2};t.Z=function(e){var t=e.children,n=e.title,i=e.description,l=(0,a.Z)()[0];return r.createElement(c,{isMobile:l},r.createElement(u,null,r.createElement(p,{isMobile:l,initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:d},n),i&&r.createElement(s,null,r.createElement(o.MDXRenderer,null,i))),r.createElement(f,null,t))}},5774:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7294),o=n(5444),i=n(5835),l=n(9692),a=l.default.ul.withConfig({displayName:"AwardsList__Wrapper",componentId:"sc-dz3wka-0"})(["width:30vw;list-style:none;"]),c=l.default.p.withConfig({displayName:"AwardsList__Award",componentId:"sc-dz3wka-1"})(["margin-bottom:16px;font-size:22px;font-weight:400;cursor:default;&:hover{color:orange;}"]),u=function(){return r.createElement(a,null,r.createElement("li",null,r.createElement(c,null,"Lorem ipsum")),r.createElement("li",null,r.createElement(c,null,"Lorem ipsum")),r.createElement("li",null,r.createElement(c,null,"Lorem ipsum")),r.createElement("li",null,r.createElement(c,null,"Lorem ipsum")))},p=function(){var e=(0,o.K2)("2923794216");return r.createElement(i.Z,{title:"Awards",description:e.mdx.body},r.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-awards-js-dad3ef5c1362becbcf86.js.map