(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a,i,o,r,c,s,l,d=n(1),p=n.n(d),b=n(20),m=n.n(b),f=(n(45),n(6)),h=n(7),u=n(9),j=n(8),x=n(31),g=n(2),O=n(4),v="@media only screen and ",y={min560:"".concat(v,"(min-width: 560px)"),max767:"".concat(v,"(max-width: 767px)"),min768:"".concat(v,"(min-width: 768px)"),max959:"".concat(v,"(max-width: 959px)"),min960:"".concat(v,"(min-width: 960px)"),min1170:"".concat(v,"(min-width: 1170px)"),int768to960:"".concat(v,"(min-width: 768px) and (max-width: 960px)"),int768to1169:"".concat(v,"(min-width: 768px) and (max-width: 1169px)"),int961to1169:"".concat(v,"(min-width: 961px) and (max-width: 1169px)")},w=n(3),k=w.a.nav((a={},Object(g.a)(a,y.max959,{minHeight:"58",width:"100%",paddingBottom:"15px",zIndex:1,position:"fixed",backgroundColor:"#FFC530","> div:last-child":{display:"block"},"& div:first-of-type>a":{display:"none"}}),Object(g.a)(a,y.min960,Object(O.a)(Object(O.a)({width:"100%",position:"fixed",zIndex:10,height:70,backgroundColor:"transparent",transition:"height 400ms, background-color 500ms"},{".transition-style":{height:59,backgroundColor:"#FFC530"," div > button, div > a":{color:"#fff",":hover":{color:"rgba(53,56,44,.9)",fontWeight:600}}}}),{},{"> div:first-of-type>a":{fontWeight:700},"> div:nth-of-type(n+2)":{position:"absolute",top:"50%",right:0,marginRight:50,transform:"translateY(-50%)"},"> div:last-child":{display:"none"}})),a)),S=w.a.div((i={},Object(g.a)(i,y.max959,{position:"relative",overflow:"hidden",height:0,marginBottom:"15px",transition:"height 300ms 300ms cubic-bezier(.42,0,1,1)",".expanded":{height:"54px",transition:"height 300ms cubic-bezier(.42,0,1,1)","& ul > li":{transform:"translateY(0)",opacity:1,transition:"transform 450ms cubic-bezier(.42,0,1,1),opacity 700ms cubic-bezier(0,0,.58,1)"}}}),Object(g.a)(i,y.min960,{display:"flex",justifyContent:"space-between",height:"100%",alignItems:"center",maxWidth:"1024px",margin:"0 auto",padding:"0 20px"}),i)),C=w.a.li((o={display:"inline-block",margin:"0 10px",fontFamily:"'Overpass', sans-serif","> .current-position":{color:"#fff",transition:"color 300ms 300ms"}," button, a":{textTransform:"uppercase",textDecoration:"none",transition:"color 200ms",":hover":{color:"#fff",transition:"color 300ms"}}},Object(g.a)(o,y.min960,{" button,a":{backgroundColor:"transparent",cursor:"pointer"}," button, a":{fontSize:14,fontWeight:900,color:"#F8E3BB"}}),Object(g.a)(o,y.max959,{transform:"translateY(-20px)",opacity:0,transition:"transform 300ms 150ms cubic-bezier(.15,.99,.32,1), opacity 300ms cubic-bezier(0,0,.58,1)"," button, a":{backgroundColor:"transparent",cursor:"pointer"}}),o)),z=function(t,e,n,a){var i;return i={},Object(g.a)(i,t,e),Object(g.a)(i,"transform",void 0===a?null:"rotate(".concat(a,"deg)")),Object(g.a)(i,"transition","".concat(t," ").concat(n?"300ms":"300ms 300ms"," cubic-bezier(0.23, 1, 0.32, 1), transform ").concat(n?"300ms 300ms":"300ms"," cubic-bezier(0.23, 1, 0.32, 1)")),i},F={":before,:after":{content:'" "',height:4,width:"100%",backgroundColor:"#fff",position:"absolute"},":before":z("top","-10",!1),":after":z("bottom","-10",!1)},W=w.a.div(Object(O.a)(Object(O.a)({backgroundColor:"#fff",height:4,width:"100%",top:0,bottom:0,position:"absolute",margin:"auto",transition:"all 0ms 300ms"},F),{},{".animated":{background:"transparent",":before":z("top","0",!0,"45"),":after":z("bottom","0",!0,"-45")}})),A=w.a.div({width:35,height:30,marginLeft:30,cursor:"pointer",position:"relative",">span":{fontFamily:'"Overpass", sans-serif',fontSize:14,fontWeight:900,marginLeft:50,lineHeight:"30px",color:"#fff"}}),N=w.a.div({fontFamily:'"Overpass",sans-serif',fontSize:18,"& .hidden":{color:"#fff",opacity:0,transition:"opacity 300ms"},">a":{textDecoration:"none",opacity:1,transition:"opacity 300ms"}}),L=w.a.ul((r={padding:0,margin:0},Object(g.a)(r,y.max959,{top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"flex",position:"absolute"," li":{flex:"1 0 auto"}}),Object(g.a)(r,y.min960,{}),r)),D=n(0),B=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(f.a)(this,n),(a=e.call(this,t)).state={label:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){x.scrollSpy.update();var t=document.querySelector("nav"),e=document.querySelector(".nav-link--onscroll");window.onscroll=function(){var n=window.scrollY;window.innerWidth>=960&&(n>=window.innerHeight/2?(t.classList.add("transition-style"),e.classList.remove("hidden")):(t.classList.remove("transition-style"),e.classList.add("hidden")))}}},{key:"handleToggle",value:function(t){var e=t.currentTarget,n=e.parentNode.firstChild;e.firstChild.classList.toggle("animated");var a=!!e.firstChild.classList.contains("animated");this.setState((function(t){return{label:a}})),n.classList.toggle("expanded")}},{key:"render",value:function(){var t=this,e=function(t,e){return Object(D.jsx)("a",{href:e,children:t})},n=[["Accueil","intro"],["\xc0 propos","about"],["Projet","project"],["Contact","mailto:ronald.marcel.mr@gmail.com"]].map((function(t,n){return Object(D.jsx)(C,{className:0===n?"active":null,style:{visibility:0===n?"hidden":"visible"},children:"Contact"!==t[0]?(a=t[0],i=t[1],Object(D.jsx)(x.Link,{type:"button",activeClass:"current-position",to:i,spy:!0,smooth:!0,offset:"projet"===i||"about"===i?-60:null,children:a})):e(t[0],t[1])},n);var a,i}));return Object(D.jsxs)(k,{children:[Object(D.jsxs)(S,{children:[Object(D.jsx)(N,{className:"nav-link--onscroll",children:Object(D.jsx)("a",{href:"/",className:"hidden",children:"Ronald Marcel"})}),Object(D.jsx)(L,{id:"menu",children:n})]}),Object(D.jsxs)(A,{onClick:function(e){return t.handleToggle(e)},children:[Object(D.jsx)(W,{}),Object(D.jsx)("span",{children:this.state.label?"FERMER":"MENU"})]})]})}}]),n}(p.a.Component),E=n(12),I=n.p+"static/media/intro.0090571a.jpg",M=w.a.section({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"100vh",backgroundColor:"#FECD0B",":after":{content:'""',width:"100%"}}),R=Object(E.a)({"0%, 50%":{transform:"scale(0)"},"100%":{transform:"scale(1)"}}),T=Object(E.a)({"0%, 50%":{transform:"scale(0)",opacity:0},"90%":{transform:"scale(1.2)",opacity:1},"100%":{transform:"scale(1)"}}),H=Object(E.a)({"0%, 50%":{transform:"translateY(25vh)",opacity:0},"65%":{transform:"translateY(-10px)",opacity:.4},"100%":{transform:"translateY(0)",opacity:1}}),q=Object(E.a)({"0%, 50%":{transform:"translateX(-25vh)",opacity:0},"65%":{transform:"translateX(10px)",opacity:.4},"100%":{transform:"translateX(0)",opacity:1}}),_=w.a.div((c={backgroundColor:"#ffffff"},Object(g.a)(c,y.min768,{height:190,width:190}),Object(g.a)(c,y.max767,{height:145,width:145}),Object(g.a)(c,"boxShadow","0 0 7px rgba(0, 0, 0, 0.3)"),Object(g.a)(c,"borderRadius","100%"),Object(g.a)(c,"padding",6),Object(g.a)(c,"animationIterationCount",1),Object(g.a)(c,"animationFillMode","both"),Object(g.a)(c,"animation","".concat(R," 500ms ease-in-out")),Object(g.a)(c,"> div",{height:"100%",width:"100%",backgroundImage:"url(".concat(I,")"),backgroundSize:"cover",borderRadius:"100%",filter:"grayscale(.5) contrast(.88)",animationIterationCount:1,animationFillMode:"both",animation:"".concat(T," 1s ease-in-out")}),c)),Y=w.a.h1((s={fontFamily:'"Overpass", sans-serif',fontWeight:900,color:"#263645",textAlign:"center",whiteSpace:"pre",margin:0,marginTop:29,minHeight:74,animation:"".concat(H," 2.2s")},Object(g.a)(s,y.max959,{fontSize:26}),Object(g.a)(s,y.min960,{fontSize:35}),s)),P=w.a.p((l={fontFamily:'"Overpass", sans-serif',fontWeight:400,textAlign:"center",color:"#263645",maxWidth:410,margin:"29px 15px 0",minHeight:100,wordWrap:"break-word"},Object(g.a)(l,y.max959,{fontSize:18}),Object(g.a)(l,y.min960,{fontSize:20}),Object(g.a)(l,"animation","".concat(q," 3s")),Object(g.a)(l,"> a",{color:"#fff",position:"relative",fontWeight:600,textDecoration:"none",fontStyle:"normal",":hover":{color:"#fff",":after":{content:'""',width:"100%",borderBottom:"1px dotted #fff",position:"absolute",left:0,bottom:"-1px"}}}),l)),J=n.p+"static/media/clouds.04531cb5.svg",U=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t={backgroundSize:"18px",backgroundImage:"url(".concat(J,")")};return Object(D.jsxs)(M,{id:"intro",className:"element",style:t,children:[Object(D.jsx)(_,{children:Object(D.jsx)("div",{})}),Object(D.jsxs)(Y,{children:["Salut, je m\u2019appelle",Object(D.jsx)("br",{}),"Ronald Marcel!"]}),Object(D.jsxs)(P,{children:["D\xe9veloppeur front-end, dipl\xf4m\xe9 d\u2019un Master I en design produit (DSAA). Vous pouvez me trouver sur ",Object(D.jsx)("a",{href:"https://www.linkedin.com/in/ronaldmarcel/",target:"_blanc",children:"Linkedin"}),", ",Object(D.jsx)("a",{href:"https://twitter.com/Ronald_Marcel_",target:"_blanc",children:"Twitter"})," et ",Object(D.jsx)("a",{href:"https://github.com/dlanorlecram/",target:"_blanc",children:"Github"}),"."]})]})}}]),n}(p.a.Component);var V,X,G,K,Z,Q,$,tt,et=function(t){function e(e){var n=e.target,a=document.querySelectorAll(".".concat(t.defaultClass));if(!n.classList.contains(t.classSelected))if(a.forEach((function(e){var n=e.classList;n.contains(t.classSelected)&&n.remove(t.classSelected)})),n.classList.add(t.classSelected),"percent"===t.opt)t.changeSkill(Number(n.dataset.percent));else if("percent"!==t.opt){console.log("ok nous somme dedans"),document.querySelectorAll(".card").forEach((function(t){t.dataset.cat!==n.id&&"tout"!==n.id?(console.log("A "+n.id),t.classList.add("hide")):(console.log("B "+n.id),t.classList.remove("hide"))}))}}var n=t.dataButton.map((function(n,a){return Object(D.jsx)("button",{id:"string"===typeof n?n.toLowerCase():null,onClick:e,type:"button",className:a===t.magicnumber&&"string"!==typeof n||"string"===typeof n&&0===a?"".concat(t.defaultClass," ").concat(t.classSelected):t.defaultClass,"data-percent":n.percent,children:"string"===typeof n?n:n.name},a)}));return Object(D.jsx)("div",{className:t.containerButton,children:n})},nt=[{name:"HTML/CSS",percent:80},{name:"Vanilla Js",percent:55},{name:"Jquery",percent:60},{name:"ReactJs",percent:48},{name:"Angular 1.5",percent:45},{name:"NodeJs",percent:35},{name:"PHP",percent:46},{name:"Twig",percent:50},{name:"SASS",percent:65}],at=w.a.section((V={position:"relative",padding:"160px 15px 60px",margin:"0 auto"},Object(g.a)(V,y.max767,{minWidth:320,maxWidth:560}),Object(g.a)(V,y.min768,{minWidth:561,maxWidth:900}),V)),it=w.a.p((X={color:"rgba(0, 0, 0, .05)",fontWeight:900,position:"absolute",top:108,left:26,margin:0,fontSize:64},Object(g.a)(X,y.max959,{fontSize:64}),Object(g.a)(X,y.min960,{}),X)),ot={"& p":(G={fontFamily:'"Overpass", sans-serif',color:"#4A4A4A",margin:"16px 0 35px 10px",fontSize:16,fontWeight:300},Object(g.a)(G,y.max959,{}),Object(g.a)(G,y.min768,{maxWidth:"560px"}),G)},rt=w.a.div(Object(O.a)(Object(O.a)({},{">h2":{color:"rgba(0, 0, 0, 0.57)",fontFamily:'"Overpass", sans-serif',fontWeight:400,letterSpacing:.4,margin:0,fontSize:20}}),ot)),ct={">span":(K={fontFamily:'"Roboto Mono", monospace',fontWeight:100,color:"#DFB354",display:"inline-block",width:"50%",paddingLeft:10},Object(g.a)(K,y.max767,{fontSize:78}),Object(g.a)(K,y.min768,{fontSize:90,textAlign:"right"}),K)},st=w.a.div(Object(O.a)(Object(O.a)({},ct),{},{"& .container-buttons":Object(O.a)({display:"inline-block",width:"50%",verticalAlign:"middle"},{"> .button-skill":{display:"list-item",fontFamily:'"Overpass", sans-serif',fontSize:"18px",fontWeight:400,color:"rgba(74, 74, 74, 1)",backgroundColor:"transparent",margin:"15px 0 15px auto",".button-selected":{color:"#DFB354",fontSize:"22px",fontWeight:900}}})})),lt=w.a.div(Object(O.a)(Object(O.a)(Object(O.a)({fontFamily:'"Overpass", sans-serif'},{" h3":{color:"rgba(0, 0, 0,.57)",fontWeight:400,fontSize:20,letterSpacing:.4}}),{" ul":{padding:0,listStyle:"none",display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"0 10px"," li":{margin:"10px 0",flex:"1 0 auto",maxWidth:345,width:"100%"}}}),{" p":{margin:"0 0 10px",fontWeight:400,fontSize:14}," p~div":{height:4,width:"100%",maxWidth:345,backgroundColor:"rgba(157, 148, 146,.2)"}," p~div>div":{backgroundColor:"#fecc0d",width:"51%",height:"100%",verticalAlign:"top",display:"inline-block",transition:"width 400ms 400ms",".disable":{width:"0!important"}}," .jauge-end":{":before":{content:'""',backgroundColor:"#fecc0d",position:"absolute",height:8,width:8,borderRadius:"100%",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),dt=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(f.a)(this,n),(a=e.call(this,t)).state={skill:nt[a.props.magicNumber].percent},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t="percentenable";window.addEventListener("scroll",(function(){!function(t){var e=document.querySelector("#limit-scroll"),n=e.offsetTop+e.offsetParent.offsetTop/2-69,a=window.pageYOffset||document.documentElement.scrollTop;document.querySelectorAll(t).forEach((function(t,e){t.dataset.percentenable&&a>=n&&(t.classList.remove("disable"),t.dataset.percentenable=!0)}))}("div[data-".concat(t,"]"))}),!1)}},{key:"updateShowSkill",value:function(t){var e=Math.abs(Number(this.state.skill-t)),n=Number(this.state.skill);setInterval(function a(){n<t?e<=0?clearInterval(a):(n++,this.setState({skill:n}),e--):e<=0?clearInterval(a):(n--,this.setState({skill:n}),e--)}.bind(this),50)}},{key:"render",value:function(){var t=this,e=this.props.dataSkill.map((function(t,e){return Object(D.jsxs)("li",{children:[Object(D.jsx)("p",{children:t.name}),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{style:{width:"".concat(t.percent,"%")},"data-percentenable":!1,className:"disable"}),Object(D.jsx)("div",{className:"jauge-end",style:{width:1,position:"relative"}})]})]},e)}));return Object(D.jsxs)(at,{id:"about",className:"element",children:[Object(D.jsx)(it,{children:"\xc0 propos"}),Object(D.jsxs)(rt,{children:[Object(D.jsx)("h2",{children:"En quelque mots\u2026"}),Object(D.jsxs)("p",{children:["Le d\xe9veloppement web m\u2019est devenu une passion lors de ma formation sur Wordpress en DSAA.",Object(D.jsx)("br",{}),"Puis, j\u2019ai eu l\u2019opportunit\xe9 d\u2019int\xe9grer la Code Acad\xe9mie \xe0 Rennes pour une dur\xe9e de 8 mois, ce qui m\u2019a permis d\u2019acqu\xe9rir et d\xe9velopper de nouvelles comp\xe9tences dans les langages web et d\u2019adopter une autre m\xe9thode de travail (SCRUM)."]}),Object(D.jsxs)(st,{style:{display:"none"},children:[Object(D.jsxs)("span",{children:[this.state.skill,"%"]}),Object(D.jsx)(et,{magicnumber:this.props.magicNumber,containerButton:"container-buttons",defaultClass:"button-skill",changeSkill:function(e){return t.updateShowSkill(e)},classSelected:"button-selected",dataButton:this.props.dataSkill,opt:"percent"})]}),Object(D.jsxs)(lt,{children:[Object(D.jsx)("h3",{id:"limit-scroll",children:"Mes comp\xe9tences"}),Object(D.jsx)("ul",{children:e})]})]})]})}}]),n}(d.Component);dt.defaultProps={dataSkill:nt,magicNumber:(Z=nt.length,Math.floor(Math.random()*Z))};var pt={boxShadow:"0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"},bt=w.a.section({backgroundColor:"#86BCE4",padding:"100px 15px 60px"}),mt=w.a.div(Object(O.a)({width:245,margin:"0 auto","> p":{margin:0,color:"#fff",fontWeight:700,fontSize:16,fontFamily:'"Overpass", sans-serif',marginBottom:5}},{"& .filters":{justifyContent:"space-between",display:"flex","& .button-filter":{color:"#FECD0B",fontFamily:'"Overpass", sans-serif',fontSize:14,padding:"2px 15px",backgroundColor:"#fff",fontWeight:700,border:0,borderRadius:1,".filter-selected":{backgroundColor:"#F9A41B",fontWeight:900,color:"#fff"}}}})),ft=w.a.div((Q={minHeight:"292px",position:"Relative",padding:"25px 0 1px",display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"0 auto"},Object(g.a)(Q,y.max767,{maxWidth:375}),Object(g.a)(Q,y.int768to1169,{maxWidth:960}),Object(g.a)(Q,y.min1170,{maxWidth:1024}),Q)),ht={">button":{backgroundColor:"transparent",fontSize:12,lineHeight:"28px",cursor:"pointer",color:"#4A4A4A",float:"right",fontFamily:'"Overpass", sans-serif'," i":{pointerEvents:"none"}}},ut={"> h2":Object(O.a)({maxHeight:"51px",opacity:1,padding:"15px 25px 8px 0",transition:"max-height 100ms cubic-bezier(.42,0,1,1), opacity 250ms 250ms"},ht)},jt={".higherscreen":Object(O.a)(Object(O.a)({},pt),{},{transition:"box-shadow 500ms","> div:last-child":{bottom:0,transition:"bottom 400ms"}})},xt={"> div:first-of-type":Object(O.a)(Object(O.a)({display:"flex",alignItems:"center",justifyContent:"space-between",color:"#6C6C6C",margin:"15px  0px"},{" span":{fontSize:18,fontFamily:'"Overpass", sans-serif',margin:0,textTransform:"capitalize"}}),ht)},gt=w.a.div(Object(O.a)({position:"absolute",height:"100%",width:"100%",bottom:"-100%",zIndex:3,fontFamily:'"Overpass", sans-serif',fontSize:14,lineHeight:"19px",color:"#4A4A4A",backgroundColor:"#fff",padding:"0 15px",transition:"bottom 300ms"},xt)),Ot=w.a.picture({cursor:"pointer"}),vt=w.a.div(Object(O.a)(Object(O.a)({position:"relative",backgroundColor:"white",flex:"0 1 auto",borderRadius:2,minHeight:245,margin:"15px 0 30px",overflow:"hidden",width:"auto",maxWidth:375,transition:".9s, box-shadow .5s, opacity .75s",":hover":Object(O.a)({},pt),".hide":{opacity:0,display:"none",transition:"opacity 100ms, display 200ms 200ms"},">h2":{fontFamily:'"Overpass",sans-serif',color:"#6C6C6C",textTransform:"capitalize",fontSize:18,fontWeight:600,maxHeight:0,margin:"0 0 0 25px",padding:0,opacity:0,overflow:"hidden",transition:"padding 200ms 200ms cubic-bezier(.42,0,1,1) , max-height 200ms 200ms cubic-bezier(.42,0,1,1), opacity 150ms",">button":{float:"right",height:28,width:28,opacity:1,color:"#484848",fontSize:14,backgroundColor:"transparent",transition:"opacity 150ms"}},">p":{maxHeight:0,transition:"max-height 400ms cubic-bezier(.42,0,1,1)"},".lowerscreen":Object(O.a)(Object(O.a)(Object(O.a)({},ut),{"> div >.to-hide":{opacity:0,transition:"200ms"}}),{"> p":{maxHeight:"500px",transition:"max-height 400ms cubic-bezier(.42,0,1,1)"}})},jt),{},($={},Object(g.a)($,y.min560,{maxWidth:"none",margin:"15px 15px 30px"}),Object(g.a)($,y.min1170,{width:"calc(33.33% - 30px)"}),Object(g.a)($,y.int768to960,{width:"calc(50% - 30px)"}),Object(g.a)($,y.int961to1169,{width:"calc(33.33% - 30px)"}),$))),yt=w.a.div({color:"#6C6C6C",display:"flex",justifyContent:"space-between",alignItems:"center",height:49,padding:"0 12px",">div>i":{margin:"0 5px"}}),wt=w.a.p({opacity:1,fontSize:18,fontFamily:'"Overpass", sans-serif',margin:0,textTransform:"capitalize",transition:"300ms"}),kt=w.a.p((tt={fontFamily:'"Overpass", sans-serif',fontSize:13,padding:"0px 15px",margin:0,overflow:"hidden",color:"#4A4A4A"},Object(g.a)(tt,y.max767,{fontSize:13}),Object(g.a)(tt,y.min768,{fontSize:14}),Object(g.a)(tt,">a",Object(O.a)({},{display:"table",margin:"10px auto 25px",textAlign:"center",fontFamily:'"Overpass",sans-serif',fontSize:"14px",padding:"2px 15px",fontWeight:400,textDecoration:"none",backgroundColor:"#DFB354",color:"#fff",border:"1px solid transparent",":hover,:active":{color:"#DFB354",border:"1px solid #DFB354",backgroundColor:"transparent"}})),tt)),St=w.a.div({bottom:0,position:"absolute",right:0,left:0,transform:"translateY(-100%)",display:"flex",justifyContent:"space-evenly"," a":{textDecoration:"none",fontSize:24,color:"#949494",":hover":{color:"#DFB354"}}}),Ct=w.a.span({display:"flex",justifyContent:"space-evenly",margin:"10px 0 15px"," a":{textDecoration:"none",fontSize:24,color:"#949494",":hover":{color:"#DFB354"}}}),zt=(w.a.div({width:1024,margin:"0 auto"}),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",(function(){var t,e=document.querySelectorAll(".card");window.innerWidth>=767&&(t="lowerscreen",e.forEach((function(e){e.classList.contains(t)&&e.classList.remove(t)})))}))}},{key:"handleCardClick",value:function(t){var e=t.currentTarget.parentNode,n=document.querySelectorAll(".card");function a(t){e.parentNode.classList.contains(t)||(n.forEach((function(e){e.classList.contains(t)&&e.classList.remove(t)})),e.classList.add(t))}window.innerWidth<=767?a("lowerscreen"):a("higherscreen")}},{key:"handleCloseClick",value:function(t){var e=t.currentTarget.closest(".card").classList.contains("lowerscreen")?"lowerscreen":"higherscreen";t.currentTarget.closest(".card").classList.remove(e)}},{key:"render",value:function(){var t=this,e=this.props.dataProject.map((function(e,n){return Object(D.jsxs)(vt,{"data-cat":e.cat,className:"card",children:[Object(D.jsxs)("h2",{children:[e.title,Object(D.jsx)("button",{onClick:function(e){return t.handleCloseClick(e)},children:Object(D.jsx)("i",{style:{verticalAlign:"baseline",pointerEvents:"none",paddingLeft:1},className:"icon ion-close-round"})})]}),Object(D.jsx)(Ot,{onClick:function(e){return t.handleCardClick(e)},children:Object(D.jsx)("img",{alt:"name of project",src:e.img?e.img:"http://via.placeholder.com/400x300/FECD0B/fff"})}),Object(D.jsxs)(yt,{children:[Object(D.jsx)(wt,{className:"to-hide",children:e.title}),Object(D.jsx)("div",{children:e.tech.map((function(t,e){return Object(D.jsx)("i",{className:"devicon-"+t},e)}))})]}),Object(D.jsxs)(kt,{children:[e.content,e.source?Object(D.jsxs)("span",{style:{display:"block",margin:"10px 0 0"},children:["Source: ",Object(D.jsx)("a",{href:"http://"+e.source,style:{color:"black"},children:e.source})]}):null,Object(D.jsxs)(Ct,{style:{textAlign:"center"},children:[void 0!==e.depot?Object(D.jsx)("a",{href:e.depot,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"icon ion-network"})}):null,void 0!==e.url?Object(D.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"icon ion-link"})}):null]})]}),Object(D.jsxs)(gt,{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:e.title}),Object(D.jsx)("button",{onClick:function(e){return t.handleCloseClick(e)},children:Object(D.jsx)("i",{className:"icon ion-close-round"})})]}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("p",{children:[e.content,e.source?Object(D.jsxs)("span",{style:{display:"block",margin:"10px 0 0"},children:["Source: ",Object(D.jsx)("a",{href:"http://"+e.source,style:{color:"black"},children:e.source})]}):null]}),Object(D.jsxs)(St,{children:[void 0!==e.depot?Object(D.jsx)("a",{href:e.depot,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"icon ion-network"})}):null,void 0!==e.url?Object(D.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"icon ion-link"})}):null]})]})]})]},n)}));return Object(D.jsx)(ft,{className:"gallery-projects",children:e})}}]),n}(d.Component)),Ft=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"updateShowSkill",value:function(t){var e=Math.abs(Number(this.state.skill-t)),n=Number(this.state.skill);setInterval(function a(){n<t?e<=0?clearInterval(a):(n++,this.setState({skill:n}),e--):e<=0?clearInterval(a):(n--,this.setState({skill:n}),e--)}.bind(this),50)}},{key:"render",value:function(){var t=this;return Object(D.jsxs)(bt,{id:"project",className:"element",children:[Object(D.jsxs)(mt,{style:{display:"none"},children:[Object(D.jsx)("p",{children:"Filtre:"}),Object(D.jsx)(et,{e:"ddd",containerButton:"filters",defaultClass:"button-filter",changeSkill:function(e){return t.updateShowSkill(e)},classSelected:"filter-selected",dataButton:["Tout","Website","Design"],opt:""})]}),Object(D.jsx)(zt,{dataProject:this.props.data})]})}}]),n}(p.a.Component);var Wt=function(){var t=[{icon:"twitter-plain",url:"https://twitter.com/Ronald_Marcel_git"},{icon:"github-plain",url:"https://github.com/dlanorlecram/"},{icon:"linkedin-plain",url:"https://www.linkedin.com/in/ronaldmarcel/"}].map((function(t,e){return Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("i",{className:"devicon-".concat(t.icon)})})},e)}));return Object(D.jsx)("ul",{children:t})},At=w.a.footer({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#F9F9F9",position:"relative",padding:"20px 15px"}),Nt=w.a.div(Object(O.a)(Object(O.a)(Object(O.a)({textAlign:"center",display:"table"},{"> p":{color:"#949494",fontSize:12,fontFamily:'"Overpass", sans-serif',fontWeight:400,textAlign:"center",margin:0,"> i":{color:"#FF5C5C",fontSize:13,margin:"0 3px"}}}),{"> ul":{margin:"20px 0 0",padding:0,display:"inline-block","> li":{display:"inline",listStyle:"none"}}}),{},{"& a":{textDecoration:"none",color:"#949494",margin:"0 15px",":hover":{color:"#ffc432"}}}));function Lt(t){var e=(new Date).getFullYear();return Object(D.jsx)(At,{children:Object(D.jsxs)(Nt,{className:"inner-footer",children:[Object(D.jsxs)("p",{children:["Site d\xe9velopp\xe9 avec",Object(D.jsx)("i",{className:"icon ion-heart"}),"par Ronald Marcel sur React ",p.a.version," - \xa9 ",e," - Tous droits r\xe9serv\xe9s."]}),Object(D.jsx)(Wt,{})]})})}var Dt=n(32),Bt=n.n(Dt);n(58);Bt.a.initializeApp({apiKey:"AIzaSyBVEYKZLUFRz5tf7E0anhynH_EUsGI4xtc",authDomain:"portfolio-afdea.firebaseapp.com",databaseURL:"https://portfolio-afdea.firebaseio.com/"});var Et=Bt.a,It=(n(61),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(f.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={projects:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;Et.database().ref("projects").on("value",(function(e){var n=e.val();t.setState({projects:n})}))}},{key:"render",value:function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(B,{}),Object(D.jsx)(U,{}),Object(D.jsx)(dt,{}),Object(D.jsx)(Ft,{data:this.state.projects}),Object(D.jsx)(Lt,{})]})}}]),n}(d.Component));m.a.render(Object(D.jsx)(It,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6f9d3cfd.chunk.js.map