(self.webpackChunkarchitecture_portfolio=self.webpackChunkarchitecture_portfolio||[]).push([[558],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function i(t,n,l){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),l=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),i=n(9713),l=n(7316),a=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n(7294),u=n(4983).mdx,f=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=l(e,a),c=f(t),d=p.useMemo((function(){if(!n)return null;var e=s({React:p,mdx:u},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return p.createElement(d,s({},i))}},4264:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(2359),i=n(9692),l=i.default.ul.withConfig({displayName:"ProjectsListstyles__Wrapper",componentId:"sc-1jo4n2o-0"})(["display:flex;flex-direction:column;width:100%;padding:0;margin-top:0;@media (min-width:769px){display:inline-grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:","px;grid-gap:16px;}"],(function(e){return(e.wrapperWidth-32)/3})),a=i.default.div.withConfig({displayName:"ProjectsListstyles__Placeholder",componentId:"sc-1jo4n2o-1"})(["height:100%;width:100%;background-color:lightgrey;"]),c=n(5444),s=n(6115),p=i.default.li.withConfig({displayName:"ProjectLinkstyles__Wrapper",componentId:"sc-jz4gr7-0"})(["position:relative;display:block;height:80vw;width:100%;margin-bottom:16px;overflow:hidden;@media (min-width:769px){height:100%;width:100%;&::before{content:'';position:absolute;z-index:100;top:0;left:0;height:100%;width:100%;background-color:",";opacity:0;transition:0.2s;}&::after{content:'","';position:absolute;z-index:100;top:50%;left:50%;font-size:40px;font-weight:500;letter-spacing:0.4px;color:",";transform:translate(-50%,-50%);opacity:0;transition:0.2s;}&:hover:before{opacity:0.7;}&:hover:after{opacity:1;}}"],(function(e){return e.theme.colors.black}),(function(e){return e.title}),(function(e){return e.theme.colors.white})),u=function(e){var t=e.image,n=e.title,i=e.slug;return r.createElement(s.Z,null,r.createElement(c.rU,{to:i,style:{width:"100%",height:"100%"}},r.createElement(p,{title:n},r.createElement(o.G,{image:t,alt:i,style:{width:"100%",height:"100%"}}))))},f=function(e){return e<10?"0"+(e+1)+".":e+1+"."},d=function(e){var t=e.projects,n=(0,r.useState)(),i=n[0],c=n[1],s=(0,r.useRef)();return(0,r.useEffect)((function(){s.current&&c(s.current.offsetWidth)}),[]),r.createElement(l,{ref:s,wrapperWidth:i},t.map((function(e,t){var n=(0,o.d)(e.frontmatter.hero_image),l=e.frontmatter.path;return r.createElement(u,{key:l,image:n,title:f(t),slug:l,wrapperWidth:i})})),r.createElement(a,null),r.createElement(a,null),r.createElement(a,null),r.createElement(a,null),r.createElement(a,null),r.createElement(a,null),r.createElement(a,null))}},4048:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),i=n(4371),l=n(4264);t.default=function(){var e=(0,o.K2)("820853606");return console.log(e.mdx.body),r.createElement(i.Z,{title:"Interiors",description:e.mdx.body},r.createElement(l.Z,{projects:e.allMdx.nodes}))}},4371:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),o=n(6725),i=n(9747),l=n(9692),a=n(3119),c=l.default.section.withConfig({displayName:"Mainstyles__Section",componentId:"sc-sujxqa-0"})(["display:flex;flex-direction:column;min-height:100%;padding:20px 0;@media (min-width:769px){flex-direction:row;justify-content:space-between;padding:0 50px;}"]),s=l.default.div.withConfig({displayName:"Mainstyles__Header",componentId:"sc-sujxqa-1"})(["display:flex;flex-direction:column;justify-content:flex-start;@media (min-width:769px){width:40%;padding:100px 180px 0 0;}"]),p=(0,l.default)(a.E.h2).withConfig({displayName:"Mainstyles__Title",componentId:"sc-sujxqa-2"})(["align-self:flex-start;position:relative;margin:0 0 20px;font-size:36px;font-weight:800;letter-spacing:1.4px;&::before{content:'';position:absolute;top:26px;right:-12px;display:block;height:8px;width:8px;background-color:black;z-index:10;}"]),u=(0,l.default)(a.E.p).withConfig({displayName:"Mainstyles__Description",componentId:"sc-sujxqa-3"})(["display:",";margin:0;font-size:14px;font-weight:400;line-height:24px;letter-spacing:0.5px;& p{margin:0;}@media (min-width:769px){display:inline;text-align:left;}"],(function(e){return"true"===e.visibleOnMobile?"inline":"none"})),f=l.default.article.withConfig({displayName:"Mainstyles__Content",componentId:"sc-sujxqa-4"})(["min-height:100%;@media (min-width:769px){width:60%;}"]),d={duration:.2,delay:.2},m=function(e){var t=e.children,n=e.title,l=e.description,a=e.descritpionMobile,m=(0,i.Z)()[0];return r.createElement(c,{isMobile:m},r.createElement(s,null,r.createElement(p,{isMobile:m,initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:d},n),l&&r.createElement(u,{visibleOnMobile:a},r.createElement(o.MDXRenderer,null,l))),r.createElement(f,null,t))}}}]);
//# sourceMappingURL=component---src-pages-interiors-js-36ef9def2eb0a8605d58.js.map