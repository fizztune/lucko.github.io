(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9135:function(e,r,n){e.exports=n(3237)},3445:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var i=n(1664),s=n(9008),t=n(1163),o=n(9135),c=n(5893);function a(e){var r=e.children,n=e.title,i=void 0===n?"":n;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.default,{children:[(0,c.jsx)("title",{children:"lucko.me"+(i&&" | "+i)}),(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"})]}),(0,c.jsx)(l,{}),(0,c.jsx)(h,{children:r})]})}var l=function(){return(0,c.jsxs)("div",{className:"sidebar",children:[(0,c.jsx)(u,{}),(0,c.jsx)(d,{})]})},u=function(){var e=(0,t.useRouter)(),r=(0,o.useAmp)();return(0,c.jsxs)("header",{className:"container",children:[!r&&(0,c.jsx)("img",{src:"/assets/me.jpg",alt:"Me"}),"/"===e.pathname?(0,c.jsx)("h1",{children:"lucko.me"}):(0,c.jsx)("h1",{children:(0,c.jsx)(i.default,{href:"/",children:"lucko.me"})}),(0,c.jsx)("p",{children:"Hey! \ud83d\udc4b"}),(0,c.jsx)("p",{children:"I'm lucko, a software developer from London, UK."}),(0,c.jsx)("p",{children:"This is a personal website and domain that I use for the various open-source projects I work on."})]})},d=function(){return(0,c.jsx)("footer",{className:"container",children:(0,c.jsxs)("p",{children:["\xa9 2020-21 ",(0,c.jsx)("a",{href:"https://github.com/lucko/lucko.github.io",children:"lucko"})]})})},h=function(e){var r=e.children;return(0,c.jsx)("main",{className:"content container page",children:r})}},2167:function(e,r,n){"use strict";var i=n(3038);r.default=void 0;var s,t=(s=n(7294))&&s.__esModule?s:{default:s},o=n(1063),c=n(4651),a=n(7426);var l={};function u(e,r,n,i){if(e&&o.isLocalURL(r)){e.prefetch(r,n,i).catch((function(e){0}));var s=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[r+"%"+n+(s?"%"+s:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,s=c.useRouter(),d=t.default.useMemo((function(){var r=o.resolveHref(s,e.href,!0),n=i(r,2),t=n[0],c=n[1];return{href:t,as:e.as?o.resolveHref(s,e.as):c||t}}),[s,e.href,e.as]),h=d.href,p=d.as,f=e.children,j=e.replace,x=e.shallow,m=e.scroll,b=e.locale;"string"===typeof f&&(f=t.default.createElement("a",null,f));var v=(r=t.default.Children.only(f))&&"object"===typeof r&&r.ref,k=a.useIntersection({rootMargin:"200px"}),g=i(k,2),y=g[0],w=g[1],I=t.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);t.default.useEffect((function(){var e=w&&n&&o.isLocalURL(h),r="undefined"!==typeof b?b:s&&s.locale,i=l[h+"%"+p+(r?"%"+r:"")];e&&!i&&u(s,h,p,{locale:r})}),[p,h,w,b,n,s]);var P={ref:I,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,i,s,t,c,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&i.indexOf("#")>=0&&(c=!1),r[s?"replace":"push"](n,i,{shallow:t,locale:a,scroll:c}))}(e,s,h,p,j,x,m,b)},onMouseEnter:function(e){o.isLocalURL(h)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(s,h,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof b?b:s&&s.locale,L=s&&s.isLocaleDomain&&o.getDomainLocale(p,M,s&&s.locales,s&&s.domainLocales);P.href=L||o.addBasePath(o.addLocale(p,M,s&&s.defaultLocale))}return t.default.cloneElement(r,P)};r.default=d},7426:function(e,r,n){"use strict";var i=n(3038);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!o,a=s.useRef(),l=s.useState(!1),u=i(l,2),d=u[0],h=u[1],p=s.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,r,n){var i=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var i=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var r=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:s,elements:i}),n}(n),s=i.id,t=i.observer,o=i.elements;return o.set(e,r),t.observe(e),function(){o.delete(e),t.unobserve(e),0===o.size&&(t.disconnect(),c.delete(s))}}(e,(function(e){return e&&h(e)}),{rootMargin:r}))}),[n,r,d]);return s.useEffect((function(){if(!o&&!d){var e=t.requestIdleCallback((function(){return h(!0)}));return function(){return t.cancelIdleCallback(e)}}}),[d]),[p,d]};var s=n(7294),t=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},6124:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o},config:function(){return h}});var i=n(3445),s=n(1664),t=n(5893);function o(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(a,{}),(0,t.jsx)(l,{})]})}var c=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"About me"}),(0,t.jsxs)("p",{children:['I use the nickname "',(0,t.jsx)("b",{children:"lucko"}),'" or sometimes just "',(0,t.jsx)("b",{children:"Luck"}),'" for most of my online profiles and accounts.']}),(0,t.jsxs)("p",{children:["Among other things, I'm a ",(0,t.jsx)("b",{children:"software developer"})," and maintain/contribute to a number of ",(0,t.jsx)("b",{children:"open source"})," projects in my spare time."]}),(0,t.jsxs)("p",{children:["If you'd like to contact me, you can find how to reach me on my ",(0,t.jsx)(s.default,{href:"/contact",children:"contact page"}),"."]}),(0,t.jsxs)("p",{children:["My ",(0,t.jsx)(s.default,{href:"/pgp",children:"PGP key"})," has the fingerprint ",(0,t.jsx)("code",{children:"EFA9 B3EC 5FD9 0F8B"})," and my ",(0,t.jsx)(s.default,{href:"/ssh",children:"SSH key"})," has the fingerprint ",(0,t.jsx)("code",{children:"08:64:2f:da:cf:c1:b8:64:04:bb:d3:08:08:05:11:2a"}),"."]}),(0,t.jsxs)("p",{children:["You can find me (most actively) on GitHub, ",(0,t.jsx)("a",{href:"https://github.com/lucko",children:"@lucko"}),"."]})]})},a=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"This domain"}),(0,t.jsx)("p",{children:"A number of other sites and services are available under this domain."}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://ci.lucko.me/",children:[(0,t.jsx)("b",{children:"ci."}),"lucko.me"]})," - continuous integration & downloads"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://nexus.lucko.me/",children:[(0,t.jsx)("b",{children:"nexus."}),"lucko.me"]})," - maven repository"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://paste.lucko.me/",children:[(0,t.jsx)("b",{children:"paste."}),"lucko.me"]})," - pastebin"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://bytebin.lucko.me/",children:[(0,t.jsx)("b",{children:"bytebin."}),"lucko.me"]})," - content storage web service"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://spark.lucko.me/",children:[(0,t.jsx)("b",{children:"spark."}),"lucko.me"]})," - spark website"]})]}),(0,t.jsx)("p",{children:"I try my best to keep these services available. Most have been online and had good uptime for the past ~3 years at least."})]})},l=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"My projects"}),(0,t.jsx)("p",{children:"I work on a number of open source projects in my spare time."}),(0,t.jsxs)(u,{repo:"lucko/LuckPerms",children:[(0,t.jsxs)("li",{children:["LuckPerms is a ",(0,t.jsx)("b",{children:"permission"})," plugin for Minecraft servers, written in Java."]}),(0,t.jsx)("li",{children:"At time of writing, it's been downloaded ~1.5M times, has ~250,000 monthly active users, and a Discord community of ~12,000 people."}),(0,t.jsxs)("li",{children:["The project also has a website, ",(0,t.jsx)("a",{href:"https://github.com/lucko/LuckPermsWeb",children:"LuckPermsWeb"}),", which includes web apps for viewing/editing/managing permission setups, written using Vue.js."]}),(0,t.jsxs)("li",{children:["More information can be found on the project homepage at ",(0,t.jsx)("a",{href:"https://luckperms.net/",children:"luckperms.net"}),"."]})]}),(0,t.jsxs)(u,{repo:"lucko/spark",children:[(0,t.jsxs)("li",{children:["spark is a ",(0,t.jsx)("b",{children:"performance profiling"})," plugin/mod for Minecraft clients, servers and proxies, written in Java."]}),(0,t.jsxs)("li",{children:["The project also has a website, ",(0,t.jsx)("a",{href:"https://github.com/lucko/spark-viewer",children:"spark-viewer"}),", which includes functionality for inspecting profiles as stack trees and flame graphs, written using React."]}),(0,t.jsxs)("li",{children:["More information can be found on the project homepage at ",(0,t.jsx)("a",{href:"https://spark.lucko.me/",children:"spark.lucko.me"}),"."]})]}),(0,t.jsxs)(u,{repo:"lucko/helper",children:[(0,t.jsxs)("li",{children:["helper is a ",(0,t.jsx)("b",{children:"development toolkit / library"})," for Bukkit plugin developers. It provides a number of utilities and extended APIs which help to reduce boilerplate code and offer alternative paradigms for creating content."]}),(0,t.jsx)("li",{children:"I'm no longer actively working on further API additions, but the project is still being used frequntly by various development teams, and I accept pull requests!"})]}),(0,t.jsxs)(u,{repo:"lucko/bytebin",children:[(0,t.jsxs)("li",{children:["bytebin is a fast & lightweight ",(0,t.jsx)("b",{children:"content storage"})," web service, written in Java."]}),(0,t.jsx)("li",{children:"You can think of it a bit like a pastebin, except that it accepts any kind of data (not just plain text!)"}),(0,t.jsx)("li",{children:"It has a straightforward HTTP API that supports CORS."})]}),(0,t.jsxs)(u,{repo:"lucko/paste",children:[(0,t.jsxs)("li",{children:["paste (my own attempt at a ",(0,t.jsx)("b",{children:"pastebin"}),') is a simple, "code friendly" web frontend for bytebin.']}),(0,t.jsx)("li",{children:"It is written using React, react-simple-code-editor and Prism."})]}),(0,t.jsx)(u,{repo:"lucko/BungeeGuard",children:(0,t.jsxs)("li",{children:["BungeeGuard is a plugin-based ",(0,t.jsx)("b",{children:"security/firewall"})," solution for BungeeCord and Velocity proxies."]})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:"Other"}),(0,t.jsx)("p",{children:"I've also created and made significant contributions to a number of other projects."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)(d,{repo:"lucko/shadow",desc:"annotation based Java reflection library"}),(0,t.jsx)(d,{repo:"lucko/jar-relocator",desc:"program to relocate packages within .jar files"}),(0,t.jsx)(d,{repo:"lucko/commodore",desc:"brigadier API for Bukkit"}),(0,t.jsx)(d,{repo:"lucko/fabric-permissions-api",desc:"simple permissions API for Fabric"}),(0,t.jsx)(d,{repo:"lucko/ScriptController",desc:"javax.script wrapper API"}),(0,t.jsx)(d,{repo:"lucko/tapir",desc:"JavaScript plugin loader for Sponge"}),(0,t.jsx)(d,{repo:"lucko/synapse",desc:"WIP Bukkit permissions API"}),(0,t.jsx)(d,{repo:"lucko/lucko.github.io",desc:"personal website, written using Next.js"}),(0,t.jsx)(d,{repo:"KyoriPowered/adventure",desc:"user-interface library for Minecraft plugins/mods"}),(0,t.jsx)(d,{repo:"KyoriPowered/event",desc:"Java event bus library"}),(0,t.jsx)(d,{repo:"KyoriPowered/blossom",desc:"Gradle plugin for replacing tokens in source code"}),(0,t.jsx)(d,{repo:"SpongePowered/Configurate",desc:"Java configuration library"}),(0,t.jsxs)("li",{children:["... and more! You can find all of my public repositories on my ",(0,t.jsx)("a",{href:"https://github.com/lucko",children:"GitHub profile"}),"."]})]}),(0,t.jsx)("p",{children:"I'm a member of a couple of organisations."}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://kyori.net/",children:"Kyori"})," - I've been primarily working on adventure lately."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://www.spongepowered.org/",children:"Sponge"}),' - I wrote parts of the "PermissionService" in SpongeAPI and maintained the Configurate library.']})]})]})]})},u=function(e){var r=e.repo,n=e.children;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})}),(0,t.jsx)("ul",{children:n})]})},d=function(e){var r=e.repo,n=e.desc;return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})," (",n,")"]})},h={amp:"hybrid"}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},9008:function(e,r,n){e.exports=n(639)},1664:function(e,r,n){e.exports=n(2167)},1163:function(e,r,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);