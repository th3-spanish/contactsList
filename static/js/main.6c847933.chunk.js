(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),l=(n(9),n(1)),i=(n(10),function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],r=n[1];return c.a.createElement("div",{className:"contact-card"},c.a.createElement("img",{src:e.image,alt:"profile"}),c.a.createElement("div",{className:"user-details"},c.a.createElement("p",null,"Name: ",e.name," "),c.a.createElement("p",null,"Email: ",e.email),c.a.createElement("button",{onClick:function(){r(!o)}},"Toggle age"),o&&c.a.createElement("p",null,"Age: ",e.age," ")))}),s=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch("https://randomuser.me/api/?results=6").then((function(e){return e.json()})).then((function(e){console.log(e),o(e.results)}))}),[]),c.a.createElement(c.a.Fragment,null,n.map((function(e){return c.a.createElement(i,{image:e.picture.large,name:e.name.first+" "+e.name.last,email:e.email,age:e.dob.age})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.6c847933.chunk.js.map