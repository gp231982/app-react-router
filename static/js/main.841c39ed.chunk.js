(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(30),a(9)),m=a(10),u=a(12),i=a(11),s=a(13),p=(a(31),a(3)),d=a(1),E=(a(32),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(d.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(d.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),h=(a(38),a(14)),f=a.n(h),g=a(23),v=a.n(g),y=a(24),b=a.n(y),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/products",render:function(){return r.a.createElement("img",{src:v.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(d.c,{render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}})))},j=(a(39),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),k=function(){var e=j.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},w=function(e){var t=e.title,a=e.autor,n=e.text;return r.a.createElement("article",{className:"article",style:{backgroundColor:"#ddd",marginBottom:40}},r.a.createElement("h3",{style:{marginTop:5,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{fontSize:16,display:"block",marginTop:"20px"}},a),r.a.createElement("p",{style:{fontSize:15,fontWeight:"normal"}},n))},z=[{id:1,autor:"Albert Einstain",title:"O pocz\u0105tkach wszech\u015bwiata..",text:"1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?"},{id:2,autor:"Steve Jobs",title:"Jak dosz\u0142o do powstania pierwszecho Macintosha...?",text:"2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?"},{id:3,autor:"Michael Jordan",title:"Czy DreamTeam z Barcelony dalej by\u0142by niepokonany...?",text:"3333Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?"}],N=function(){var e=z.map(function(e){return r.a.createElement(w,Object.assign({key:e.id},e))});return r.a.createElement("h3",null,e)},q=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},J=function(e){var t=e.match;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(q,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},O=(a(40),["car","bike","motorcycle"]),S=function(e){var t=O.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"productslist"},r.a.createElement("h3",null,"Lista produkt\xf3w"),r.a.createElement("ul",null,t))},C=(a(41),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"contact",onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{name:"textarea",id:"textarea",placeholder:"Napisz wiadomo\u015b\u0107...",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(d.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz opu\u015bci\u0107 stron\u0119?"}))}}]),t}(n.Component)),F=function(){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/login"}))},D=function(){return r.a.createElement("h3",null,"Nie ma takiej strony")},P=(a(42),function(){return r.a.createElement("div",{className:"login"},r.a.createElement("label",{style:{},htmlFor:"login"}," Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:"password"}," Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))}),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,component:N}),r.a.createElement(d.c,{path:"/products",component:S}),r.a.createElement(d.c,{path:"/product/:id",component:J}),r.a.createElement(d.c,{path:"/contact",component:C}),r.a.createElement(d.c,{path:"/admin",component:F}),r.a.createElement(d.c,{path:"/login",component:P}),r.a.createElement(d.c,{component:D})))},T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("render"),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(L,null))),r.a.createElement("footer",null,r.a.createElement(E,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.841c39ed.chunk.js.map