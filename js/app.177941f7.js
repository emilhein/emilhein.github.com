(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"4553c566","chunk-377203e4":"5db63c57","chunk-66e1f6ea":"19acff32","chunk-8092f946":"1e5d7af4"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-377203e4":1,"chunk-8092f946":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-377203e4":"808fd476","chunk-66e1f6ea":"31d6cfe0","chunk-8092f946":"1c8d1a3f"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2efd":function(e,t,n){"use strict";var a=n("a248"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar is-transparent"},[e._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e._v("\n        Home\n      ")]),n("a",{staticClass:"navbar-item",on:{click:function(t){return e.changeLink("websocket")}}},[e._v("\n        Websocket\n      ")])]),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/emilhein"}},[n("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"}})]),n("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[n("span"),n("span"),n("span")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"bd-tw-button button",attrs:{target:"_blank",href:"https://github.com/emilhein"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fab fa-github"})]),n("span",[e._v("\n                Github\n              ")])])])])])])}];n("ac6a");document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")}))}))}));var s={name:"navbar",methods:{changeLink:function(e){this.$router.push({path:e})}},data:function(){}},u=s,l=(n("2efd"),n("2877")),f=Object(l["a"])(u,c,i,!1,null,"1b932060",null),d=f.exports,p={components:{navbar:d}},h=p,m=(n("5c0b"),Object(l["a"])(h,r,o,!1,null,null,null)),v=m.exports,b=n("8c4f");a["a"].use(b["a"]);var g=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-8092f946").then(n.bind(null,"4385"))}},{path:"/projects",name:"projects",component:function(){return n.e("chunk-66e1f6ea").then(n.bind(null,"adf5"))}},{path:"/websocket",name:"websocket",component:function(){return n.e("chunk-377203e4").then(n.bind(null,"1808"))}},{path:"/*",name:"notFound",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}]}),w=n("2f62");a["a"].use(w["a"]);var k=new w["a"].Store({state:{apiToken:window.localStorage.getItem("apollo-token")||!1,firebaseToken:window.localStorage.getItem("firebase-token")||null,user:window.localStorage.getItem("firebaseui::rememberedAccounts")||window.localStorage.getItem("user")||null},mutations:{SET_TOKEN:function(e,t){e.apiToken=t},SET_FIREBASE_TOKEN:function(e,t){e.firebaseToken=t},SET_USER:function(e,t){e.user=t},SIGN_OUT:function(e){e.user=null}},getters:{getToken:function(e){return e.apiToken},getFirebaseToken:function(e){return e.firebaseToken},getUser:function(e){return e.user},isAuthenticated:function(e){return null!==e.user&&!!e.user.email}},actions:{setToken:function(e,t){window.localStorage.setItem("apollo-token",t),e.commit("SET_TOKEN",t)},setFirebaseToken:function(e,t){window.localStorage.setItem("firebase-token",t),e.commit("SET_FIREBASE_TOKEN",t)},setUser:function(e,t){window.localStorage.setItem("user",t),e.commit("SET_USER",t)},signOut:function(e){e.commit("SIGN_OUT")}}}),E=(n("ddb8"),n("74ca")),y=n("478e"),S=n("2bf2"),T=n("e13b"),_=n("522d"),C=function(){var e={},t=window.localStorage.getItem("apollo-token");return t&&(e.Authorization="Bearer ".concat(t)),e},O=new y["a"]({uri:"https://w7lo1gta9h.execute-api.eu-west-1.amazonaws.com/dev/graphql",headers:C()}),j=Object(T["a"])((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return(console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a)))})),n&&console.log("[Network error]: ".concat(n))})),x=new E["a"]({link:j.concat(O),cache:new S["a"],connectToDevTools:!0});a["a"].use(_["a"]);var L=new _["a"]({defaultClient:x}),I=n("289d"),A=n("1321"),P=n.n(A),N=n("c718"),B=n("dc21"),F=n("e594");a["a"].use(N["a"]),a["a"].use(I["a"]),a["a"].component("apexchart",P.a),a["a"].config.productionTip=!1,B["a"]({dsn:"https://df96bc14e84a4b42ae9fee0ab37d1f2c@sentry.io/1773699",integrations:[new F["a"]({Vue:a["a"],attachProps:!0})]}),new a["a"]({router:g,apolloProvider:L,store:k,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},a248:function(e,t,n){},ddb8:function(e,t){window.addEventListener("load",(function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(){}),(function(e){console.error("SW registration failed! 😱",e)}))}))},e332:function(e,t,n){}});
//# sourceMappingURL=app.177941f7.js.map