(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(14),s=a.n(n),i=(a(19),a(0));var r=function(){return console.log("hahaha"),Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light nav-bg",children:[Object(i.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(i.jsx)("img",{src:"/weatherApp/images/logo.png",alt:"logo",width:"50px"}),Object(i.jsx)("span",{className:"logoText",children:"Sunshine Weather"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsx)("ul",{className:"navbar-nav",children:Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)("a",{className:"nav-link",href:"https://muqtadirbillah.github.io/Profile/",target:"_blank",children:[Object(i.jsx)("b",{children:"Developer Profile"}),Object(i.jsx)("span",{class:"sr-only",children:"(current)"})]})})})})]})})},l=a(3),j=a(5),b=a.n(j);var h=function(e){return Object(i.jsxs)("div",{className:"weatherCardDiv",children:[Object(i.jsxs)("div",{className:"weatherCardtop",children:[Object(i.jsxs)("h5",{className:"currentW",children:["Current Weather",Object(i.jsx)("br",{}),e.cityName]}),Object(i.jsx)("div",{className:"iconDiv",children:Object(i.jsx)("img",{src:e.weatherIcon,className:"weatherIcon",height:"180px",width:"180px",alt:""})}),Object(i.jsxs)("div",{className:"iconRight",children:[Object(i.jsxs)("h1",{children:[e.temp,Object(i.jsx)("sup",{children:"o"}),"C"]}),Object(i.jsxs)("h6",{children:["Real Feel \xae ",e.feels_like]})]})]}),Object(i.jsxs)("div",{className:"weatherCardDown",children:[Object(i.jsx)("h4",{children:e.weatherCondition}),Object(i.jsxs)("h6",{children:["Minimum Temperature ",e.temp_min,Object(i.jsx)("sup",{children:"o"}),"C"]}),Object(i.jsxs)("h6",{children:["Maximum Temperature ",e.temp_max,Object(i.jsx)("sup",{children:"o"}),"C"]}),Object(i.jsxs)("h6",{children:["Humidity ",e.humidity,"%"]}),Object(i.jsxs)("h6",{children:["Wind Speed ",e.windSpeed," meter/sec"]})]})]})};var d=function(){var e=Object(c.useState)(new Date),t=Object(l.a)(e,2),a=(t[0],t[1]);Object(c.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var n=Object(c.useState)("01d"),s=Object(l.a)(n,2),r=s[0],j=s[1],d="http://openweathermap.org/img/wn/"+r+"@2x.png",o=Object(c.useState)("Clear"),m=Object(l.a)(o,2),O=m[0],u=m[1],x=Object(c.useState)("Clear"),p=Object(l.a)(x,2),v=p[0],f=p[1],g=Object(c.useState)(""),N=Object(l.a)(g,2),w=N[0],y=N[1],S=Object(c.useState)({}),D=Object(l.a)(S,2),C=(D[0],D[1]),k=Object(c.useState)("0"),_=Object(l.a)(k,2),I=_[0],M=_[1],P=Object(c.useState)("0"),W=Object(l.a)(P,2),A=W[0],q=W[1],B=Object(c.useState)("0"),R=Object(l.a)(B,2),T=R[0],E=R[1],F=Object(c.useState)("0"),H=Object(l.a)(F,2),J=H[0],L=H[1],G=Object(c.useState)("0"),Y=Object(l.a)(G,2),z=Y[0],K=Y[1],Q=Object(c.useState)("0"),U=Object(l.a)(Q,2),V=U[0],X=U[1];return Object(i.jsxs)("div",{className:"section",children:[Object(i.jsx)("div",{className:"searchCityDiv",children:Object(i.jsxs)("div",{className:"form-inline searchForm d-flex justify-content-center",children:[Object(i.jsx)("input",{type:"text",id:"cityName",className:"form-control cityNameIn",onChange:function(e){return y(e.target.value)},value:w,name:"cityName",placeholder:"Enter city name"}),Object(i.jsx)("button",{type:"submit",onClick:function(){b.a.get("https://api.openweathermap.org/data/2.5/weather?q="+w+"&appid=81fba28eab92d319c4367546b1c737fe&units=metric").then((function(e){var t=e.data;C(t),M(t.main.temp),q(t.main.temp_min),E(t.main.temp_max),L(t.main.feels_like),K(t.main.humidity),j(t.weather[0].icon),u(t.weather[0].main),f(t.weather[0].description),X(t.wind.speed)})).catch((function(e){console.log(e)})).then((function(){}))},className:"searchBut btn btn-warning",children:"Search ..."})]})}),Object(i.jsx)(h,{temp:I,temp_min:A,temp_max:T,feels_like:J,humidity:z,weatherCondition:O,weatherDescription:v,windSpeed:V,weatherIcon:d,cityName:w})]})};var o=function(){var e=(new Date).getFullYear();return Object(i.jsxs)("div",{className:"footer",id:"about",children:[Object(i.jsxs)("div",{className:"footerLeftDiv",children:[Object(i.jsx)("h4",{children:"Sunshine Weather"}),Object(i.jsxs)("p",{children:["Sunshine Weather is created by MBMA using React",Object(i.jsx)("br",{}),"and Weather API to get current weather condition of",Object(i.jsx)("br",{}),"a specific city."]})]}),Object(i.jsxs)("div",{className:"footerRightDiv",children:[Object(i.jsx)("h4",{children:"Developer Details"}),Object(i.jsxs)("p",{children:["This website is made by Muqtadir Billah Musab Abbasi",Object(i.jsx)("br",{}),"on React using Weather API."]}),Object(i.jsx)("a",{href:"https://muqtadirbillah.github.io/Profile/",target:"_blank",children:Object(i.jsx)("p",{children:"Developer Profile"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/muqtadir-billah-musab-abbasi/",target:"_blank",children:Object(i.jsx)("p",{children:"LinkedIn Profile"})}),Object(i.jsx)("a",{href:"https://github.com/MuqtadirBillah/",target:"_blank",children:Object(i.jsx)("p",{children:"GitHub Profile"})})]}),Object(i.jsxs)("h6",{className:"dev",children:["Design and Developed by MBMA \xa9 ",e]})]})};var m=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r,{}),Object(i.jsx)(d,{}),Object(i.jsx)(o,{})]})};s.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6c4fbb94.chunk.js.map