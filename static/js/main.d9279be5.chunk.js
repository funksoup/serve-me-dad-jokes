(this.webpackJsonpdadjokes=this.webpackJsonpdadjokes||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),o=t.n(r),s=(t(19),t(2)),u=t(13),d=t.n(u),i=function(){return d()({method:"GET",url:"https://dad-jokes.p.rapidapi.com/random/jokes",headers:{"content-type":"application/json","x-rapidapi-host":"dad-jokes.p.rapidapi.com","x-rapidapi-key":"83e2ffda39mshfb48b56ec2d3ee0p1c3384jsn1a0d5e951ea9",useQueryString:!0}})},l=(t(37),function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],l=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Serve up a dad joke"),c.a.createElement("div",{className:"joke-area"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),i().then((function(e){return r("".concat(e.data.setup))}))}},"Serve me a dad joke")),c.a.createElement("div",{className:"joke-area"},t),c.a.createElement("div",{className:"joke-area"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),i().then((function(e){return l("".concat(e.data.punchline))}))}},"Alright, I'll bite")),c.a.createElement("div",{className:"joke-area"},d),c.a.createElement("div",{className:"contrib-area"},"created by ",c.a.createElement("a",{href:"https://funksoup.com"}," @funksoup ")," ","   |   "," ",c.a.createElement("a",{href:"https://github.com/funksoup/serve-me-dad-jokes"}," Github repo")))});o.a.render(c.a.createElement(l,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9279be5.chunk.js.map