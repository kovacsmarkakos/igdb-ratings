(this["webpackJsonppopular-games"]=this["webpackJsonppopular-games"]||[]).push([[0],{125:function(e,t,a){e.exports={overlay:"Header_overlay__1cgJz"}},134:function(e,t,a){e.exports=a(195)},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(23),i=a.n(o),s=a(43),u=a(25),m=a(89),d=a.n(m),p="https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31",f=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,n=t&&a?"https://api.rawg.io/api/games?dates=".concat(t,"-01-01,").concat(t,"-12-31&genres=").concat(a):t?"https://api.rawg.io/api/games?dates=".concat(t,"-01-01,").concat(t,"-12-31"):a?"https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&genres=".concat(a):p,e.prev=2,e.next=5,d.a.get(n);case 5:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.rawg.io/api/genres");case 3:return t=e.sent,a=t.data.results,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=a(115),h=a(223),E=a(238),v=a(237),y=a(239),x=a(107),w=Object(x.a)((function(e){return{filterContainer:Object(b.a)({margin:e.spacing(2,0),zIndex:10},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}),formControl:{margin:e.spacing(1,2),minWidth:150}}})),k=function(e){var t=e.year,a=e.setYear,n=e.fetchedGenres,c=e.genre,l=e.setGenre,o=w(),i=(new Date).getUTCFullYear(),s=Array(i-(i-30)).fill("").map((function(e,t){return i-t}));return r.a.createElement("div",{className:o.filterContainer},r.a.createElement(h.a,{variant:"outlined",className:o.formControl},r.a.createElement(E.a,{id:"demo-simple-select-outlined-label"},"Year"),r.a.createElement(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:t||"",onChange:function(e){a(e.target.value)},label:"Years"},s.map((function(e,t){return r.a.createElement(y.a,{key:t,value:e},e)})))),r.a.createElement(h.a,{variant:"outlined",className:o.formControl},r.a.createElement(E.a,{id:"demo-simple-select-outlined-label"},"Genre"),r.a.createElement(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c||"",onChange:function(e){l(e.target.value)},label:"Genre"},r.a.createElement(y.a,{value:""},r.a.createElement("em",null,"All")),n.map((function(e){return r.a.createElement(y.a,{key:e.id,value:e.slug},e.name)})))))},j=a(227),O=a(228),C=a(229),I=a(83),N=a(230),S=a(119),M=a.n(S),G=(a(162),a(78)),_=a(120),P=a(121),z=a(122),B=a.n(z),Y=a(126),A=Object(x.a)((function(){return{card:{borderRadius:"1rem",boxShadow:"none",position:"relative",minWidth:250,minHeight:360,"&:after":{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}},content:{position:"absolute",zIndex:2,bottom:0,width:"100%"},CircularProgress:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50px, -50px)"}}})),W=r.a.memo((function(e){var t=e.items,a=e.muted,n=Object(P.useCoverCardMediaStyles)({bgPosition:"top"}),c=A();return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6,lg:3,xl:3,key:e.id},r.a.createElement(Y.a,{className:c.HoverVideoPlayer,videoSrc:e.clip?e.clip.clips.full:null,sizingMode:"overlay",preload:"metadata",muted:a,unloadVideoOnPaused:!0,videoStyle:{borderRadius:"1rem"},pausedOverlay:r.a.createElement(B.a,{animateIn:"animate__fadeIn",offset:140,duration:.6,animateOnce:!0},r.a.createElement(O.a,{className:c.card},r.a.createElement(C.a,{classes:n,image:e.background_image}),r.a.createElement(I.a,{py:3,px:2,className:c.content},r.a.createElement(G.Info,{useStyles:_.useGalaxyInfoStyles},r.a.createElement(G.InfoTitle,null,e.name),r.a.createElement(G.InfoCaption,null,"Metacritic:"," ",r.a.createElement("span",null,r.a.createElement(M.a,{end:e.metacritic?e.metacritic:0,delay:.4,duration:3}))))))),loadingOverlay:e.clip?r.a.createElement(N.a,{className:c.CircularProgress}):null}))})))})),D=Object(x.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(0,2)}}})),F=function(e){var t=e.isLoading,a=e.items,n=e.muted,c=e.setMuted,l=D();return t?r.a.createElement(N.a,null):r.a.createElement("div",{className:l.root},r.a.createElement(j.a,{container:!0,spacing:2},r.a.createElement(W,{items:a,muted:n,setMuted:c})))},L=a(77),T=a(231),H=a(232),J=a(233),R=a(123),V=a.n(R),K=a(124),Q=a.n(K);function U(){return r.a.createElement(L.a,{variant:"body2"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://kovacsmarkakos.github.io/popular-games"},"Popular Games")," ",(new Date).getFullYear(),".")}var q=Object(x.a)((function(e){return{footer:{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100vw",height:"18vh",padding:e.spacing(3,2),marginTop:e.spacing(2),backgroundColor:e.palette.grey[900],color:e.palette.grey[400],"@media (min-width: 1280px)":{padding:e.spacing(3,10),height:"16vh"}},footerIcons:{display:"flex",justifyContent:"flex-end"},iconButton:{color:e.palette.grey[200],"&:hover":{backgroundColor:e.palette.grey[800],color:"#f5da55"}},madeBy:{color:"#fff"}}})),X=function(){var e=q();return r.a.createElement("footer",{className:e.footer},r.a.createElement(H.a,null,r.a.createElement(L.a,{variant:"body1",className:e.madeBy},"Made by Mark Kovacs"),r.a.createElement(U,null)),r.a.createElement(H.a,{className:e.footerIcons},r.a.createElement("a",{href:"https://github.com/kovacsmarkakos",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{"aria-label":"linkedin",className:e.iconButton},r.a.createElement(V.a,null))),r.a.createElement("a",{href:"https://www.linkedin.com/in/m\xe1rk-kov\xe1cs-0363b61b7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{"aria-label":"github",className:e.iconButton},r.a.createElement(Q.a,null)))))},Z=a(125),$=a.n(Z),ee=a(240),te=a(234),ae=a(235),ne=function(e){e.muted;var t=e.setMuted,a=r.a.useState(!1),n=Object(u.a)(a,2),c=n[0],l=n[1];return r.a.createElement(te.a,null,r.a.createElement(ae.a,{style:{zIndex:10},control:r.a.createElement(ee.a,{checked:c,onChange:function(){l((function(e){return!e})),t((function(e){return!e}))},color:"secondary"}),label:"Sound",labelPlacement:"start"}))},re=a(41),ce=a(114),le=a(226),oe=Object(x.a)((function(e){return{header:{display:"flex",position:"relative",flexDirection:"column",justifyContent:"center",width:"100vw",height:"40vh",alignItems:"center",margin:e.spacing(0,0,3,0),padding:e.spacing(4,2),textAlign:"center",textShadow:"0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)",backgroundColor:"#3b3c38",zIndex:1},rawg:{position:"absolute",top:10,right:10,textShadow:"none"},rawgLink:{textDecoration:"none",color:"#f3f3f3",cursor:"pointer","&:hover":{color:"#f5da55"}}}})),ie=function(e){var t=e.muted,a=e.setMuted,n=oe(),c=Object(re.a)();return c=Object(ce.a)(c),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:n.header},r.a.createElement("div",{className:$.a.overlay}),r.a.createElement(le.a,{theme:c},r.a.createElement(L.a,{variant:"h1"},r.a.createElement(I.a,{fontWeight:"fontWeightBold",color:"#f5da55",m:1},"Popular Games")),r.a.createElement(L.a,{variant:"h6",component:"h2"},r.a.createElement(I.a,{fontWeight:"600",letterSpacing:4,color:"#fff",m:1},"The most popular games by Year and Genre")),r.a.createElement(L.a,{variant:"caption",display:"block",className:n.rawg},r.a.createElement("a",{href:"https://rawg.io/apidocs",target:"_blank",rel:"noopener noreferrer",className:n.rawgLink},"Source: RAWG API")))),r.a.createElement(ne,{muted:t,setMuted:a}))},se=a(90),ue=a.n(se),me=a(236),de=Object(re.a)({palette:{primary:{main:"#3b3c38"},secondary:{main:"#f5da55"}}}),pe=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),m=o[0],d=o[1],p=Object(n.useState)(0),b=Object(u.a)(p,2),h=b[0],E=b[1],v=Object(n.useState)([]),y=Object(u.a)(v,2),x=y[0],w=y[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),C=O[0],I=O[1],N=Object(n.useState)(!0),S=Object(u.a)(N,2),M=S[0],G=S[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w]),Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(h,C);case 2:t=e.sent,c(t),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,C]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,null),r.a.createElement(le.a,{theme:de},r.a.createElement("div",{className:ue.a.container},r.a.createElement(ie,{muted:M,setMuted:G}),r.a.createElement(k,{className:ue.a.filters,year:h,setYear:E,genre:C,setGenre:I,fetchedGenres:x}),r.a.createElement(F,{isLoading:m,setIsLoading:d,items:a,muted:M,setMuted:G}),r.a.createElement(X,null))))};l.a.render(r.a.createElement(pe,null),document.getElementById("root"))},90:function(e,t,a){e.exports={container:"App_container__1MQN3"}}},[[134,1,2]]]);
//# sourceMappingURL=main.8f947843.chunk.js.map