window._iesKnob={att:function(t,e,i){if(t){if(!i)return t.getAttribute(e);t.setAttribute(e,i)}return!1},$$$:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t},ins:function(t,e,i,r,n,o){var a;if(o)var s=document.createElementNS("http://www.w3.org/2000/svg",e);else s=document.createElement(e);if(r&&(s.innerHTML=r),t=_iesKnob.$$$(t),i)for(a=0;a<i.length;a+=2)this.att(s,i[a],i[a+1]);return t?1==n?t.insertBefore(s,t.firstChild):n?t.insertBefore(s,n):t.appendChild(s):s},init:function(t){var e=document.createElement("style");document.getElementById("circle-animation-style")?t&&(document.getElementById("circle-animation-style").innerHTML=""):(e.id="circle-animation-style",document.head.appendChild(e));for(var i=document.getElementsByClassName("iesknob"),r=0;r<i.length;r++)"true"==i[r].getAttribute("initiated")&&"force"!=t||(""==i[r].id&&(i[r].id=_iesKnob.guid()),_iesKnob.generate(i[r].id,i[r].getAttribute("data-knob-image"),i[r].getAttribute("data-knob-dotimage"),i[r].getAttribute("data-knob-percentage"),i[r].getAttribute("data-knob-timing"),i[r].getAttribute("data-knob-dotcolor"),i[r].getAttribute("data-knob-gradient1"),i[r].getAttribute("data-knob-gradient2"),i[r].getAttribute("data-knob-color"),i[r].getAttribute("data-knob-dotcolorinside"),i[r].getAttribute("data-knob-dotborder"),i[r].getAttribute("data-knob-dotradius")),i[r].setAttribute("initiated","true"))},guid:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<15;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},generate:function(t,e,i,r,n,o,a,s,l,c,d,g){var u=navigator.userAgent.indexOf("Safari")>-1,m=window.navigator.userAgent.indexOf("Edge")>-1;navigator.userAgent.indexOf("Chrome")>-1&&u&&(u=!1);var f=document.getElementById(t);f.innerHTML="";var b=_iesKnob.guid(),h=_iesKnob.ins(f,"svg",["class","circle-chart","id",b,"height","102%","width","102%","viewbox","0 0 33.83098862 33.83098862","xmlns","http://www.w3.org/2000/svg","style","height:102%;width:102%;overflow: visible  !important;box-shadow : 0px -0px 10000px transparent;position:absolute;top:-1%;left:-1%","preserveAspectRatio","none"],!1,!1,!0),y=_iesKnob.ins(h,"defs",!1,!1,!1,!0),k=_iesKnob.guid(),p=_iesKnob.ins(y,"linearGradient",["id",k,"x1","0","y1","10","x2","30","y2","10","gradientUnits","userSpaceOnUse","gradientTransform","rotate(90)"],!1,!1,!0);if(a&&null!=a&&""!=a||(a="#FFD700"),s&&null!=s&&""!=s||(s="yellow"),_iesKnob.ins(p,"stop",["stop-color",a,"offset","0"],!1,!1,!0),_iesKnob.ins(p,"stop",["stop-color",s,"offset","1"],!1,!1,!0),f.style.backgroundImage="url("+e+")",f.style.backgroundSize="99%",f.style.backgroundPosition="50% 50%",f.style.backgroundRepeat="no-repeat",l&&null!=l&&""!=l||(l="#efefef"),_iesKnob.ins(h,"circle",["class","circle-chart__background","stroke",l,"stroke-width","2","fill","none","cx","16.91549431","cy","16.91549431","r","15.91549431"],!1,!1,!0),m?_iesKnob.ins(h,"circle",["class","circle-chart__circle","stroke","url(#"+k+")","stroke-width","2","stroke-dasharray",r+",100","stroke-linecap","round","fill","none","cx","16.91549431","cy","16.91549431","r","15.91549431","transform","translate(-0,33.83098862) rotate(-90)"],!1,!1,!0):_iesKnob.ins(h,"circle",["class","circle-chart__circle","stroke","url(#"+k+")","stroke-width","2","stroke-dasharray",r+",100","stroke-linecap","round","fill","none","cx","16.91549431","cy","16.91549431","r","15.91549431"],!1,!1,!0),i)if(m||u){var v=_iesKnob.ins(f,"div",["style","position:absolute;top:0%;left:42.5%;width:15%;height:50%","class","star-element"]);_iesKnob.ins(v,"img",["src",i,"style","position:absolute;top:-15%;left:0%;width:100%;"])}else _iesKnob.ins(h,"image",["href",i,"height","6","width","6","class","star-element","x","14","y","-2"],!1,!1,!0);else{o&&null!=o&&""!=o||(o="#000000"),c&&null!=c&&""!=c||(c=o),d&&null!=d&&""!=d||(d="0.1"),g&&null!=g&&""!=g||(g="0.9");var _=_iesKnob.ins(h,"g",["class","star-element","style","position:relative"],!1,!1,!0);_iesKnob.ins(_,"circle",["stroke",o,"stroke-width",d,"r",g,"fill",c,"cx","17","cy","1.1"],!1,!1,!0)}f.innerHTML=f.innerHTML,document.getElementById(b).classList.add(b);var w=360/(100/r);if(n&&null!=n&&""!=n||(n=1),m||u)var A="@keyframes "+b+"-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes "+b+"-rotate-star {to { transform: rotate(0deg) }}."+b+" .circle-chart__circle {animation-timing-function: ease-out;animation: "+b+"-circle-chart-fill "+n+"s reverse;transform: rotate(-90deg);transform-origin: center}."+b+" + .star-element {animation-timing-function: ease-out;animation: "+b+"-rotate-star "+n+"s reverse;transform: rotate("+w+"deg);transform-origin: bottom;}";else A="@keyframes "+b+"-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes "+b+"-rotate-star {to { transform: rotate(0deg) }}."+b+" .circle-chart__circle {animation-timing-function: ease-out;animation: "+b+"-circle-chart-fill "+n+"s reverse;transform: rotate(-90deg);transform-origin: center}."+b+" .star-element {animation-timing-function: ease-out;animation: "+b+"-rotate-star "+n+"s reverse;transform: rotate("+w+"deg);transform-origin: center 50%;}";m&&(A+="*{-webkit-backface-visibility: hidden;}"),document.getElementById("circle-animation-style").innerHTML+=A}};
