(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(153),n(152),n(155)),o=n(157),s=n(150),c=n(179),d=n.n(c),p=s.b.img.withConfig({displayName:"jabber__Img",componentId:"hradox-0"})(["max-width:600px;"]),l=s.b.span.withConfig({displayName:"jabber__Lozenges",componentId:"hradox-1"})(["padding:3px 8px;letter-spacing:0.5px;font-weight:bold;margin-right:5px;border-radius:5px;font-size:12px;text-transform:uppercase;color:#5885b2;background-color:#cbe5ff;"]),u=s.b.div.withConfig({displayName:"jabber__TechWrapper",componentId:"hradox-2"})(["margin-bottom:20px;"]),m=["react","express","styled components"];t.default=function(){return r.a.createElement(o.a,{header:"Jabber",subtitle:"Side Project"},r.a.createElement(i.a,{title:"jabber"}),r.a.createElement(u,null,m.map(function(e){return r.a.createElement(l,null,e)})),r.a.createElement("a",{href:"https://github.com/christiannguyen/jabber"},"Github Repo"),r.a.createElement("h3",null,"Work in Progress"),r.a.createElement("p",null,"Currently not hosted anywhere yet. Main idea was just to learn and play around with React Hooks and some other frontend things I've never really touched such as styled-components. Worked with Indeed's API to grab a list of postings. Express backend handles making the request to Indeed's API and parsed/organized in the backend. The data is then passed frontend to be displayed."),r.a.createElement(p,{src:d.a}))}},151:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},152:function(e,t,n){"use strict";var a=n(158),r=n.n(a),i=n(0),o=n.n(i),s=n(4),c=n.n(s),d=n(150);function p(){var e=r()(['\n  body {\n    margin: 0;\n    font-family: "Avenir", sans-serif;\n    font-size: 16px;\n    margin-top: 30px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n']);return p=function(){return e},e}var l=Object(d.a)(p()),u=d.b.div.withConfig({displayName:"layout__LayoutContainer",componentId:"ii2kc2-0"})(["display:flex;margin-top:100px;width:35%;margin:auto;flex-direction:column;@media (max-width:800px){width:50%;}@media (max-width:450px){width:80%;}"]),m=function(e){var t=e.children;return o.a.createElement(u,null,o.a.createElement(l,null),t)};m.propTypes={children:c.a.node.isRequired},t.a=m},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(32),c=n.n(s);n.d(t,"a",function(){return c.a});n(151),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(159),d=n.n(c);function p(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title,c=a.data.site,p=t||c.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Christian Nguyen",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(e,t,n){"use strict";n(4);var a=n(0),r=n.n(a),i=n(150),o=n(153),s=n(152),c=i.b.div.withConfig({displayName:"experienceLayout__ExperienceLayoutWrapper",componentId:"sc-68bf30-0"})(["margin-bottom:40px;"]),d=i.b.p.withConfig({displayName:"experienceLayout__HomeLink",componentId:"sc-68bf30-1"})(["a{text-transform:uppercase;}"]),p=i.b.h1.withConfig({displayName:"experienceLayout__ExperienceLayoutHeader",componentId:"sc-68bf30-2"})(["margin:10px 0 0 0;"]),l=i.b.span.withConfig({displayName:"experienceLayout__ExperienceLayoutSubtitle",componentId:"sc-68bf30-3"})(["font-weight:500;margin-bottom:10px;"]);t.a=function(e){var t=e.children,n=e.header,a=e.subtitle;return r.a.createElement(s.a,null,r.a.createElement(c,null,r.a.createElement(d,null,r.a.createElement(o.a,{to:"/"},"Home")),r.a.createElement(p,null,n),r.a.createElement(l,null,a),t))}},179:function(e,t,n){e.exports=n.p+"static/jabber-894594e148df46b70dda1aa86c5dd520.png"}}]);
//# sourceMappingURL=component---src-pages-jabber-js-3b5ad8954d97d564742b.js.map