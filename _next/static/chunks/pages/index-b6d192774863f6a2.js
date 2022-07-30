(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},3648:function(e,n,t){"use strict";var r=t(5893),a=t(9008);n.Z=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Thomas Prochazka - Dancer, Horseman and Software Engineer"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"author",content:"Thomas Prochazka"}),(0,r.jsx)("meta",{name:"description",content:"A little Software Engineering Blog by Thomas Prochazka, filled with posts regarding engineering problems and solutions"}),(0,r.jsx)("meta",{name:"keywords",content:"Software Engineer, Software Development, Blog, Web Development, Web Performance"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}),(0,r.jsx)("link",{rel:"alternate",type:"application/atom+xml",title:"Software Engineering by Thomas Prochazka",href:"/feed.xml"})]}),(0,r.jsxs)("div",{className:"o-page-wrapper",children:[(0,r.jsx)("nav",{className:"c-menu",children:(0,r.jsxs)("ul",{className:"c-menu__list",children:[(0,r.jsx)("li",{className:"c-menu__list-item",children:(0,r.jsx)("a",{className:"c-menu__link",href:"/",children:"Posts"})}),(0,r.jsx)("li",{className:"c-menu__list-item",children:(0,r.jsx)("a",{className:"c-menu__link",href:"/talks",children:"Talks"})}),(0,r.jsx)("li",{className:"c-menu__list-item",children:(0,r.jsx)("a",{className:"c-menu__link",href:"/about",children:"About Me"})})]})}),(0,r.jsx)("main",{className:"o-main",children:e.children})]})]})}},5307:function(e,n,t){"use strict";t.d(n,{p:function(){return a}});var r=new Intl.DateTimeFormat([],{dateStyle:"long"}),a=function(e){return r.format(e)}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},c=t(6273),l=t(387),s=t(7190);var u={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),o=i.default.useMemo((function(){var n=a(c.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),d=o.href,m=o.as,h=e.children,p=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var x=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,_=a(s.useIntersection({rootMargin:"200px"}),2),j=_[0],b=_[1],w=i.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);i.default.useEffect((function(){var e=b&&t&&c.isLocalURL(d),n="undefined"!==typeof g?g:r&&r.locale,a=u[d+"%"+m+(n?"%"+n:"")];e&&!a&&f(r,d,m,{locale:n})}),[m,d,b,g,t,r]);var N={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,r,d,m,p,v,y,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,m,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:r&&r.locale,E=r&&r.isLocaleDomain&&c.getDomainLocale(m,k,r&&r.locales,r&&r.domainLocales);N.href=E||c.addBasePath(c.addLocale(m,k,r&&r.defaultLocale))}return i.default.cloneElement(n,N)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],m=f[1],h=a(o.useState(n?n.current:null),2),p=h[0],v=h[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=l.get(r):(n=l.get(t),s.push(t));if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(t,n={id:t,observer:o,elements:a}),n}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var n=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&s.splice(n,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:t}))}),[r,p,t,d]);return o.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&v(n.current)}),[n]),[y,d]};var o=t(7294),i=t(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},5075:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return l}});var r=t(5893),a=t(1664),o=t(3648),i=t(5307),c=!0;function l(e){var n=e.posts;return(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)("h1",{className:"o-page-title",children:["Thomas Prochazka",(0,r.jsx)("span",{className:"o-page-title__sub",children:"Dancer, Horseman and Software Engineer"})]}),(0,r.jsxs)("section",{className:"c-post-overview",children:[(0,r.jsx)("aside",{className:"o-sidebar",children:(0,r.jsxs)("section",{className:"c-profile",children:[(0,r.jsx)("img",{className:"c-profile__icon",src:"https://www.gravatar.com/avatar/52a73317cd435a835d6cc927959f988c",alt:"Thomas Prochazka Avatar"}),(0,r.jsxs)("div",{className:"c-profile__wrapper",children:[(0,r.jsx)("p",{className:"c-profile__desc",children:"Over 9 years of industry experience in professional web development with heavy focus on Maintainability, Code Quality and Web Performance."}),(0,r.jsxs)("ul",{className:"c-profile__contacts",children:[(0,r.jsx)("li",{className:"c-profile__contact",children:(0,r.jsxs)("a",{href:"https://www.linkedin.com/in/prochazkathomas/",title:"linkedin.com",target:"_blank",rel:"noreferrer noopener",children:[(0,r.jsx)("span",{className:"u-sr-only",children:"LinkedIn Profile"}),(0,r.jsx)("svg",{className:"c-profile__contact-icon",children:(0,r.jsx)("use",{xlinkHref:"#icon-linked"})})]})}),(0,r.jsx)("li",{className:"c-profile__contact",children:(0,r.jsxs)("a",{href:"https://github.com/zlypher",title:"github.com",target:"_blank",rel:"noreferrer noopener",children:[(0,r.jsx)("span",{className:"u-sr-only",children:"GitHub Profile"}),(0,r.jsx)("svg",{className:"c-profile__contact-icon",children:(0,r.jsx)("use",{xlinkHref:"#icon-github"})})]})}),(0,r.jsx)("li",{className:"c-profile__contact",children:(0,r.jsxs)("a",{href:"https://twitter.com/SyjinX",title:"twitter.com",target:"_blank",rel:"noreferrer noopener",children:[(0,r.jsx)("span",{className:"u-sr-only",children:"Twitter Profile"}),(0,r.jsx)("svg",{className:"c-profile__contact-icon",children:(0,r.jsx)("use",{xlinkHref:"#icon-twitter"})})]})})]})]})]})}),(0,r.jsx)("section",{className:"c-post-list",children:n.map((function(e){var n=new Date(e.date);return(0,r.jsxs)("article",{className:"c-post c-post--front",children:[(0,r.jsx)("time",{className:"c-post__date",dateTime:n.toISOString(),children:(0,i.p)(n)}),(0,r.jsx)("h2",{className:"c-post__title",children:(0,r.jsx)(a.default,{href:"/posts/".concat(encodeURIComponent(e.slug)),children:e.title})})]},e.slug)}))})]})]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);