window._iesKnob={att:function(t,e,i){if(t){if(!i)return t.getAttribute(e);t.setAttribute(e,i)}return!1},$$:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t},ins:function(t,e,i,n,o){var r,A=document.createElement(e);if(n&&(A.innerHTML=n),t=_iesKnob.$$(t),i)for(r=0;r<i.length;r+=2)this.att(A,i[r],i[r+1]);return t?1==o?t.insertBefore(A,t.firstChild):o?t.insertBefore(A,o):t.appendChild(A):A},init:function(t){for(var e=document.getElementsByClassName("iesknob"),i=0;i<e.length;i++)e[i].id=_iesKnob.guid(),e[i].innerHTML="",_iesKnob.generate(e[i])},guid:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<15;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},generate:function(t){"absolute"!=t.style.position&&"fixed"!=t.style.position&&(t.style.position="relative");var e={},i=0;t.getAttribute("data-knob-padding")&&(i=t.getAttribute("data-knob-padding"),e.imgsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAQAAAA22DU5AAAADklEQVR42mP8/5+B5gAAxwMCAMnU11cAAAAASUVORK5CYII=",_iesKnob.ins(t,"img",["src",e.imgsrc,"style"," z-index:100000;border-radius:50%;width:90%;height:90%;top:5%;left:5%;position:absolute"]));var n=_iesKnob.guid();e.imgsrc=t.getAttribute("data-knob-image"),e.fontSize=t.getAttribute("data-knob-fontsize"),e.imgsrc||(e.imgsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAQAAAA22DU5AAAADklEQVR42mP8/5+B5gAAxwMCAMnU11cAAAAASUVORK5CYII="),0<e.imgsrc.indexOf("</i>")?(t.innerHTML+=e.imgsrc,t.getElementsByTagName("i")[0].setAttribute("style","position:absolute;font-size:"+e.fontSize+"px;z-index:1000000;width:100%;height:100%;text-align:center;display: flex;align-items: center;justify-content: center;color:"+t.getAttribute("data-knob-gradient1")),e.imgsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAQAAAA22DU5AAAADklEQVR42mP8/5+B5gAAxwMCAMnU11cAAAAASUVORK5CYII=",_iesKnob.ins(t,"img",["src",e.imgsrc,"style"," z-index:100000;border-radius:50%;width:90%;height:90%;top:5%;left:5%;position:absolute"])):parseInt(e.imgsrc)?(t.innerHTML+="<i>"+e.imgsrc+"</i>",t.getElementsByTagName("i")[0].setAttribute("style","position:absolute;font-size:"+e.fontSize+"px;z-index:1000000;width:100%;height:100%;text-align:center;display: flex;align-items: center;justify-content: center;color:"+t.getAttribute("data-knob-gradient1")),e.imgsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAQAAAA22DU5AAAADklEQVR42mP8/5+B5gAAxwMCAMnU11cAAAAASUVORK5CYII=",_iesKnob.ins(t,"img",["src",e.imgsrc,"style"," z-index:100000;border-radius:50%;width:90%;height:90%;top:5%;left:5%;position:absolute"])):0!=i?_iesKnob.ins(t,"img",["src",e.imgsrc,"style"," z-index:100000;width:90%;height:90%;top:5%;left:5%;position:absolute;box-sizing:border-box;border: "+i+"px solid transparent"]):_iesKnob.ins(t,"img",["src",e.imgsrc,"style"," z-index:100000;border-radius:50%;width:90%;height:90%;top:5%;left:5%;position:absolute;box-sizing:border-box;border: "+i+"px solid transparent"]),_iesKnob.ins(t,"canvas",["class","iescanvas","width","200","height","200","id",n,"style","position:absolute;width:100%;height:100%;border-radius:50%"]);var o=document.getElementById(n);e.ctx=o.getContext("2d"),e.cw=o.width,e.ch=o.height,e.nextTime=0,e.arcColor=t.getAttribute("data-knob-gradient1"),e.baseColor=t.getAttribute("data-knob-basecolor"),e.baseColor||(e.baseColor="transparent"),e.duration=1e3*parseInt(t.getAttribute("data-knob-timing")),e.endingPct=parseInt(t.getAttribute("data-knob-percentage")),e.pct=0,e.increment=e.duration/e.pct,requestAnimationFrame(_iesKnob.animate.bind(e,e))},animate:function(t){_iesKnob.draw(t),t.pct++,t.pct<=t.endingPct&&requestAnimationFrame(_iesKnob.animate.bind(t,t))},draw:function(t){var e=t.ctx,i=-Math.PI/2+2*Math.PI*t.pct/100;e.fillStyle=t.baseColor,e.fillRect(0,0,t.cw,t.ch),e.beginPath(),e.arc(100,100,100,-Math.PI/2,i),e.lineTo(100,100),e.fillStyle=t.arcColor,e.fill()}},_iesKnob.init("force");
