(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,i){e.exports=i(38)},23:function(e,t,i){},25:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){},33:function(e,t,i){},35:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(13),s=i.n(r),c=(i(23),i(15)),l=i(4),o=i(5),h=i(7),d=i(6),m=i(8),u=i(40),p=i(41),g=i(10),b=i(39),v=(i(25),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{className:"nav"},n.a.createElement("li",null,n.a.createElement(b.a,{to:"./about"},"About")),n.a.createElement("li",null,n.a.createElement(b.a,{to:"./activities"},"activities")),n.a.createElement("li",null,n.a.createElement(b.a,{to:"./contact"},"contact")))}}]),t}(a.Component)),f=(i(29),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.index,e.width),i=e.side,a=e.zIndex,r=e.center,s=e.left,c=e.right,l=e.fixed,o=e.router,h=l,d=this.props.size;return n.a.createElement("div",{className:"tile"+(i?" tile--"+o[i]:""),style:{width:100*d+"%",height:100*d+"%",zIndex:a}},n.a.createElement("div",{className:"cube",style:{transform:"translateZ(-"+t*d/2+"px) translateX(0px) scale(1.0)",transformOrigin:"center center -"+t*d/2+"px"}},n.a.createElement("div",{className:"cube__faces",style:{transitionDelay:.01*Math.random()*50+"s"}},r&&n.a.createElement("div",{className:"cube__face cube--front",style:{transform:"rotateY( 0deg) translateZ("+t*d/2+"px) scale(1.001, 1.005)"}},r),c&&n.a.createElement("div",{className:"cube__face cube--right",style:{transform:"rotateY( -90deg) translateZ("+t*d/2+"px) scale(1.001, 1.005)"}},c),s&&n.a.createElement("div",{className:"cube__face cube--left",style:{transform:"rotateY( 90deg) translateZ("+t*d/2+"px) scale(1.001, 1.005)"}},s))),l&&n.a.createElement(h,null))}}]),t}(a.Component)),w=(i(31),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.imgSrc,i=e.description;return i=i.replace(/(^|\s)(#[a-z\d-]+)/g,'<span class="hashtag">$2</span>'),n.a.createElement("div",{className:"image-face"},n.a.createElement("img",{className:"image-face__img",src:t,alt:i}),n.a.createElement("div",{className:"image-face__desc"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}})))}}]),t}(a.Component)),E=(i(33),4),y={about:!1,activities:{tiles:[{imgSrc:"./images/insta/1.jpg",description:"flat.pixel #gamedev"},{imgSrc:"./images/insta/2.jpg",description:"flat.pixel #crunchtime #nickelodeon #donottouch #deadline \u2620\ufe0f"},{imgSrc:"./images/insta/3.jpg",description:"flat.pixel Drawing on this new iPad is a fucking blast! #appicon #gamedev #gameart #doublecrunch #lovemyjob #astroblast"},{imgSrc:"./images/insta/4.jpg",description:"flat.pixel ASTROBLAST #appicon #gamedev #spacemarine"},{imgSrc:"./images/insta/5.jpg",description:"flat.pixel ASTROBLAST Pale Ale!@beavertownbeer has the best artwork on their cans, and the beer\u2019s pretty good too! #scifibeer #beer #gamedev"}]},contact:{tiles:[{content:"This is contact"}]}},j=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this))).state={initGridRow:E,tileSize:i.isMobile()?100:100/E,tiles:e.tiles,initGridCol:2*Math.floor(Math.ceil(window.innerWidth/(100/E/100*window.innerHeight)+1)/2),tileSizePx:i.isMobile()?window.innerWidth:100/E/100*window.innerHeight},i.onResize=i.onResize.bind(Object(g.a)(Object(g.a)(i))),i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.props.match?this.setState({page:this.props.match.params.page}):this.setState({page:!1})}},{key:"onResize",value:function(){this.setState({tileSize:this.isMobile()?100:100/E,initGridCol:2*Math.floor(Math.ceil(window.innerWidth/(100/E/100*window.innerHeight)+1)/2),tileSizePx:this.isMobile()?window.innerWidth:100/E/100*window.innerHeight})}},{key:"componentWillReceiveProps",value:function(e){e.match?this.setState({page:e.match.params.page}):this.setState({page:!1})}},{key:"isMobile",value:function(){var e=document.documentElement.querySelector("body");return window.innerWidth<500?(e.classList.add("is-mobile"),!0):(e.classList.remove("is-mobile"),!1)}},{key:"render",value:function(){for(var e=[],t=this.state,i=t.initGridCol,a=t.initGridRow,r=t.tileSize,s=t.tileSizePx,c=t.page,l=0,o=0;o<a;o++)for(var h=0;h<i;h++){var d=void 0;d=this.isMobile()?0===o&&0===h:o===Math.floor(a/2)-1&&h===Math.floor(i/2)-1;var m=(o===Math.floor(a/2)-1||o===Math.floor(a/2))&&(h===Math.floor(i/2)-1||h===Math.floor(i/2));d?e.push(n.a.createElement("div",{key:o+""+h,className:"grid__tile",style:{width:r+(this.isMobile()?"vw":"vh"),height:r+(this.isMobile()?"vw":"vh")}},n.a.createElement(f,{key:o+""+h,index:h+1+o*i,size:this.isMobile()?1:2,width:s,side:c,zIndex:"10",center:n.a.createElement("img",{style:{height:"100%"},src:"./images/FPlogo.png",alt:"Flat Pixel Logo"}),left:n.a.createElement("h1",null,"Contact"),right:!1,fixed:v,router:{contact:"left"}}))):m&&!this.isMobile?e.push(n.a.createElement("div",{key:o+""+h,className:"grid__tile",style:{width:r+(this.isMobile()?"vw":"vh"),height:r+(this.isMobile()?"vw":"vh")}})):(e.push(n.a.createElement("div",{key:o+""+h,className:"grid__tile",style:{width:r+(this.isMobile()?"vw":"vh"),height:r+(this.isMobile()?"vw":"vh")}},n.a.createElement(f,{key:o+""+h,index:h+1+o*i,size:1,width:s,side:c,center:n.a.createElement("h1",null),left:n.a.createElement(w,{data:y.activities.tiles[l%y.activities.tiles.length]}),right:n.a.createElement("h1",null),router:{activities:"left",about:"right"}}))),l++)}var u=(window.innerWidth-s*i)/2;return n.a.createElement("div",{className:"grid grid"+(this.state.page?" grid--"+this.state.page:"")},n.a.createElement("div",{className:"grid__wrapper",style:{width:this.isMobile()?window.innerWidth:i*s,transform:"translateX("+(this.isMobile()?0:u)+"px)"}},e))}}]),t}(a.Component),O=(i(35),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={page:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",null,n.a.createElement(u.a,{basename:""},n.a.createElement(p.a,{exact:!0,path:"/:page",children:function(e){var t=e.match;Object(c.a)(e,["match"]);return n.a.createElement(j,{match:t})}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.5cd2d3be.chunk.js.map