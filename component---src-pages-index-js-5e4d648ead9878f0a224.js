(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(152),o=n(151),l=(n(159),n(153)),c=(n(4),n(149)),s=c.b.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})([""]),p=c.b.h1.withConfig({displayName:"header__HeaderTitle",componentId:"sc-31ozxh-1"})([""]),d=c.b.p.withConfig({displayName:"header__HeaderDescription",componentId:"sc-31ozxh-2"})(["line-height:1.5;"]),m=function(){return i.a.createElement(s,null,i.a.createElement(p,null,"HEY, I'M CHRISTIAN"),i.a.createElement(d,null,"I'm currently a full stack software engineer at ",i.a.createElement("strong",null,"Marketo, an Adobe Company")," and residing in San Francisco. I mainly enjoy writing code in the frontend (JavasSript & React) but also knowledgeable in the backend (Ruby on Rails & ExpressJS). I love learning and coding but also gymming, music festivals, and game of thrones."))},u=c.b.div.withConfig({displayName:"skills__SkillsWrapper",componentId:"sc-1v4t9vo-0"})([""]),g=c.b.h2.withConfig({displayName:"skills__SkillsTitle",componentId:"sc-1v4t9vo-1"})(["font-weight:400;;"]),f=c.b.ul.withConfig({displayName:"skills__SkillsUnorderedList",componentId:"sc-1v4t9vo-2"})([""]),h=c.b.li.withConfig({displayName:"skills__SkillsListItem",componentId:"sc-1v4t9vo-3"})(["padding-bottom:5px;"]),b=["JavaScript (ES6)","React + Redux","Ruby","Ruby on Rails","NodeJS + ExpressJS","HTML + CSS","mySQL & mongoDB","Mocha & Jest","Webpack"],y=function(e){e.siteTitle;return i.a.createElement(u,null,i.a.createElement(g,null,"Things I Know"),i.a.createElement(f,null,b.map(function(e){return i.a.createElement(h,null,e)})))},w=(n(175),c.b.div.withConfig({displayName:"experience__ExperienceWrapper",componentId:"sc-1anl9b9-0"})([""])),x=c.b.h2.withConfig({displayName:"experience__ExperienceTitle",componentId:"sc-1anl9b9-1"})(["font-weight:400;"]),k=c.b.ul.withConfig({displayName:"experience__ExperienceUnorderedList",componentId:"sc-1anl9b9-2"})([""]),v=c.b.li.withConfig({displayName:"experience__ExperienceListItem",componentId:"sc-1anl9b9-3"})(["padding-bottom:10px;"]),E=c.b.span.withConfig({displayName:"experience__TagItem",componentId:"sc-1anl9b9-4"})(["border:1px solid #cfdae6;border-radius:5px;color:#2f363d;font-weight:500;margin-left:10px;padding:1px 5px;text-transform:uppercase;font-size:12px;letter-spacing:0.4px;background-color:#cfdae6;"]),_=[{link:"marketo",label:"Marketo, an Adobe Company",type:"work"},{link:"procore",label:"Procore Technologies",type:"work"},{link:"jabber",label:"Jabber",type:"side project"}],I=function(e){e.siteTitle;return i.a.createElement(w,null,i.a.createElement(x,null,"Things I've Done"),i.a.createElement(k,null,_.map(function(e){var t=e.link,n=e.label,a=e.type;return i.a.createElement(v,null,i.a.createElement(r.a,{to:t},n),i.a.createElement(E,null,a))})))},C=(n(177),c.b.h2.withConfig({displayName:"pages__RandomArticlesLink",componentId:"sc-6kvjaa-0"})([""]));t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement(m,null),i.a.createElement(y,null),i.a.createElement(I,null),i.a.createElement(C,null,i.a.createElement(r.a,{to:"random-articles"},"List of Random Articles")))}},150:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},151:function(e,t,n){"use strict";var a=n(156),i=n.n(a),r=n(0),o=n.n(r),l=n(4),c=n.n(l),s=n(149);function p(){var e=i()(['\n  body {\n    margin: 0;\n    font-family: "Avenir", sans-serif;\n    font-size: 16px;\n    margin-top: 30px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n']);return p=function(){return e},e}var d=Object(s.a)(p()),m=s.b.div.withConfig({displayName:"layout__LayoutContainer",componentId:"ii2kc2-0"})(["display:flex;margin-top:100px;width:35%;margin:auto;flex-direction:column;@media (max-width:800px){width:50%;}@media (max-width:450px){width:80%;}"]),u=function(e){var t=e.children;return o.a.createElement(m,null,o.a.createElement(d,null),t)};u.propTypes={children:c.a.node.isRequired},t.a=u},152:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(150),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,n){"use strict";var a=n(154),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(158),s=n.n(c);function p(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title,c=a.data.site,p=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:l},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Christian Nguyen",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){"use strict";n(0),n(149).b.img.withConfig({displayName:"image__ImageWrapper",componentId:"je92qk-0"})(["margin-top:5px;max-width:auto;max-height:500px;"])},175:function(e,t,n){"use strict";n(176)("link",function(e){return function(t){return e(this,"a","href",t)}})},176:function(e,t,n){var a=n(11),i=n(17),r=n(18),o=/"/g,l=function(e,t,n,a){var i=String(r(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-5e4d648ead9878f0a224.js.map