(this.webpackJsonpyourtext=this.webpackJsonpyourtext||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(5),o=c.n(s),r=(c(10),c(2)),l=(c(11),c(4)),i=c.n(l),b=c(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode,"  bg navbar -").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:Object(b.jsx)("h2",{children:e.title})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckChecked"}),Object(b.jsx)("label",{className:"form-check-label",style:{color:"dark"===e.mode?"white":"black"},htmlFor:"flexSwitchCheckChecked",children:"Enable Dark Mode"})]})]})]})})}d.proptype={title:i.a.string,aboutText:i.a.string};var h=d;var j=function(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("On change"),s(e.target.value)},style:{backgroundColor:"light"===e.mode?"black":"white",color:"light"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(b.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to Uppercase!","Success")},children:"Convert to Uppercase"}),Object(b.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to Lowercase!","Success")},children:"Convert to Lowercase"}),Object(b.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){s(""),e.showAlert("Cleared Text!","Success")},children:"Clear Text"}),Object(b.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","Success")},children:"Copy Text"}),Object(b.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Removed Extra Spaces!","Success")},children:"Remove Extra Spaces"})]}),Object(b.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h2",{children:"Your Text Summary  "}),Object(b.jsxs)("p",{children:[n.split(" ").length-1," words  and ",n.length," characters"]}),Object(b.jsxs)("p",{children:[.008*n.split(" ").length," Minutes read"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:n})]})]})};var u=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})};var m=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),o=Object(r.a)(s,2),l=o[0],i=o[1],d=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),2e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"YourText",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="black",d("Dark Mode has been enabled","Success"),document.title="MyText - (Dark Mode)"):(n("light"),document.body.style.backgroundColor="white",d("Light Mode has been enabled","Success"),document.title="MyText - (Light Mode)")}}),Object(b.jsx)(u,{alert:l}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsx)(j,{showAlert:d,heading:"Enter Text to Analyze",mode:c})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.90aa315a.chunk.js.map