(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),l=n(8),i=n.n(l),r=(n(15),n(6)),c=n(1),d=n(2),s=n(4),u=n(3),h=n(5),p=(n(17),function(){for(var t=[];t.length<3;)t.push(Math.round(255*Math.random()));return"rgb(".concat(t.join(", "),")")}),m=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).closeModal=function(t){n.props.toggleModal(!1),console.log("close")},n}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return this.props.displayModal?a.a.createElement("div",{style:y.card},a.a.createElement("h1",{style:y.title},a.a.createElement("button",{style:y.button,onClick:this.closeModal},"back"),"this color is"),a.a.createElement("h2",null,a.a.createElement("span",{id:"fit"},this.props.content))):a.a.createElement("div",{style:y.card},a.a.createElement("h1",null,"color page"),a.a.createElement("h2",null,a.a.createElement("span",{id:"fit"},"a temporary field of randomly selected colors")))}}]),e}(o.Component),g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).displayModal=function(t){n.props.getContent(t.target.style.backgroundColor),n.props.toggleModal(!0),console.log(t.target.style.backgroundColor)},n.columnStyles=function(){var t=Math.floor(window.innerWidth/300),e=t%2===0?t:t-1>0?t-1:t,n=window.innerWidth/(10*e),o=2*n+100,a=(window.innerWidth-n*(e-1)-o)/e;return{gridTemplateColumns:"repeat(".concat(e,", ").concat(a,"px)"),gridAutoRows:"".concat(a,"px"),gridGap:"".concat(n,"px"),marginTop:n,marginBottom:o}},n.state={content:"",slides:function(){for(var t=[],e=0;e<100;e++)t.push(a.a.createElement("button",{key:e,className:"slide",onClick:n.displayModal,style:{backgroundColor:p(),gridColumnEnd:"span 1",placeSelf:"stretch",zIndex:1,border:"none"}}));return t}()},n}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:Object(r.a)({},y.slides,this.columnStyles())},this.state.slides)}}]),e}(o.Component),w=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleScroll=function(t){if(Math.abs(n.state.modalTop-t.pageY)>.66*window.innerHeight&&n.props.displayModal){var e=document.querySelector("#modal");n.props.toggleModal(!1),console.log(e.style.height)}},n.adjustTop=function(){var t=document.scrollingElement.scrollTop,e=document.querySelector("#modal");e&&e.style.top!=="".concat(t,"px")&&(n.setState({modalTop:t}),e.style.top="".concat(t,"px"))},n.insertContent=function(){var t=document.querySelector("#content");t&&(t.style.backgroundColor=n.props.content)},n.state={modalTop:0},n}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.insertContent(),this.adjustTop()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return this.props.displayModal?a.a.createElement("div",{id:"modal",className:"fade",style:Object(r.a)({},y.flexContainer,y.modal)},a.a.createElement("div",{id:"content",style:y.modalContent})):null}}]),e}(o.Component),v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onResize=function(t){var e=window.innerWidth,o=window.innerHeight;n.setState({w:e,h:o})},n.toggleModal=function(t){n.setState({displayModal:t})},n.getContent=function(t){n.setState({modalContent:t})},n.state={w:window.innerWidth,h:window.innerHeight,displayModal:!1,modalContent:""},n}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){return a.a.createElement("div",{id:"scroll",style:y.container},a.a.createElement(m,{content:this.state.modalContent,displayModal:this.state.displayModal,toggleModal:this.toggleModal}),a.a.createElement("div",{style:Object(r.a)({},y.container,y.flexContainer)},a.a.createElement(w,{content:this.state.modalContent,displayModal:this.state.displayModal,toggleModal:this.toggleModal}),a.a.createElement(g,{getContent:this.getContent,toggleModal:this.toggleModal})))}}]),e}(o.Component),y={container:{width:"90vw",height:"auto",margin:"auto",backgroundColor:"white"},flexContainer:{display:"flex",justifyContent:"center"},card:{zIndex:5,position:"sticky",top:"5vh",margin:0,padding:"2vw 5vw 2vw 2vw",backgroundColor:"white",minWidth:"300px",maxWidth:"33vw"},title:{display:"flex",alignItems:"center"},button:{marginRight:"1.5vw",padding:"0.2vw",fontWeight:"bold",borderRadius:"20%",backgroundColor:"white"},slides:{display:"inline-grid",gridAutoFlow:"row",zIndex:0},modal:{zIndex:3,backgroundColor:"rgba(255, 255, 255, 0.5)",width:"98vw",height:"100vh",position:"absolute",alignItems:"center",boxShadow:"0 0 50vh 50vh rgba(255, 255, 255, 0.5)"},modalContent:{backgroundColor:"blue",width:"90vw",height:"90vh"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.7238f3c9.chunk.js.map