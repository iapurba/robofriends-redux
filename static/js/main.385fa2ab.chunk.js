(this["webpackJsonprobofriends-redux"]=this["webpackJsonprobofriends-redux"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),i=t(3),s=t.n(i),a=t(4),c=t(2),u=t(11),d=t(12),l=(t(27),t(13)),h=t(14),b=t(16),f=t(15),g=function(e){var n=e.name,t=e.email,r=e.id;return Object(o.jsxs)("div",{className:"tc grow bg-light-yellow br3 pa4 ma2 dib bw2 shadow-5",children:[Object(o.jsx)("img",{className:"grow ba b--green bw1 br-100 pa2 mh4",alt:"robots",src:"https://robohash.org/set=set5/".concat(r,"?size=200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:t})]})]})},j=function(e){var n=e.robots;return Object(o.jsx)("div",{className:"bt bw1 pa2",children:n.map((function(e,t){return Object(o.jsx)(g,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},p=function(e){e.searchfield;var n=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{"aria-label":"search-robots",className:"pa3 br3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},v=(t(28),"CHANGE_SEARCH_FIELD"),O="REQUEST_ROBOTS_PENDING",w="REQUEST_ROBOTS_SUCCESS",m="REQUEST_ROBOTS_FAILED",x=function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,i=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i?Object(o.jsx)("h1",{children:"Loading"}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"RoboFriends"}),Object(o.jsx)(p,{searchChange:t}),Object(o.jsx)(j,{robots:s})]})}}]),t}(r.Component),y=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:v,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:O}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:w,payload:n})})).catch((function(n){return e({type:m,payload:n})}))}))}}}))(x),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29);var C={searchField:""},S={isPending:!1,robots:[],error:""},k=Object(u.createLogger)(),N=Object(c.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case v:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case O:return Object.assign({},e,{isPending:!0});case w:return Object.assign({},e,{robots:n.payload,isPending:!1});case m:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),F=Object(c.d)(N,Object(c.a)(d.a,k));s.a.render(Object(o.jsx)(a.a,{store:F,children:Object(o.jsx)(y,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-redux","/service-worker.js");R?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):E(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.385fa2ab.chunk.js.map