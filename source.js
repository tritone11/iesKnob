window._iesKnob = {
  att: function( e, a, v ) {
    if ( e ) {
      if ( v ) {
        e.setAttribute( a, v );
      } else {
        return e.getAttribute( a )
      }
    }
    return false
  },
  $$$: function( e ) {
    if ( typeof e == 'string' ) {
      e = document.getElementById( e );
    }
    return e
  },
  ins: function( p, tag, aa, _html, b, ns ) {
    var i;
    if ( ns ) {
      var elm = document.createElementNS( "http://www.w3.org/2000/svg", tag );
    } else {
      var elm = document.createElement( tag );
    }
    if ( _html ) {
      elm.innerHTML = _html;
    }
    p = _iesKnob.$$$( p );
    if ( aa ) {
      for ( i = 0; i < aa.length; i += 2 ) {
        this.att( elm, aa[ i ], aa[ i + 1 ] );
      }
    }
    if ( p ) {
      if ( b == true ) {
        return p.insertBefore( elm, p.firstChild );
      } else if ( b ) {
        return p.insertBefore( elm, b );
      } else {
        return p.appendChild( elm );
      }
    } else {
      return elm
    }
  },
  init: function( force ) {
    var st = document.createElement( "style" );
    if ( document.getElementById( "circle-animation-style" ) ) {
      if ( force ) {
        document.getElementById( "circle-animation-style" ).innerHTML = ""
      }
    } else {
      st.id = "circle-animation-style";
      document.head.appendChild( st );
    }
    var knobs = document.getElementsByClassName( "iesknob" );
    for ( var i = 0; i < knobs.length; i++ ) {
      if ( knobs[ i ].getAttribute( "initiated" ) != "true" || force == "force" ) {
        if ( knobs[ i ].id == "" ) {
          knobs[ i ].id = _iesKnob.guid();
        }
        _iesKnob.generate( knobs[ i ].id, knobs[ i ].getAttribute( "data-knob-image" ), knobs[ i ].getAttribute( "data-knob-dotimage" ), knobs[ i ].getAttribute( "data-knob-percentage" ), knobs[
          i ].getAttribute( "data-knob-timing" ), knobs[ i ].getAttribute( "data-knob-dotcolor" ), knobs[ i ].getAttribute( "data-knob-gradient1" ), knobs[ i ].getAttribute(
          "data-knob-gradient2" ), knobs[ i ].getAttribute( "data-knob-color" ), knobs[ i ].getAttribute( "data-knob-dotcolorinside" ), knobs[ i ].getAttribute( "data-knob-dotborder" ), knobs[
          i ].getAttribute( "data-knob-dotradius" ) );
        knobs[ i ].setAttribute( "initiated", "true" );
      }
    }
  },
  guid: function() {
    var anitext = "";
    var anipossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for ( var i = 0; i < 15; i++ ) {
      anitext += anipossible.charAt( Math.floor( Math.random() * anipossible.length ) );
    };
    return anitext;
  },
  generate: function( targetId, userImg, starImg, percentage, timing, dotcolor, gcol1, gcol2, bkgcol, dotinside, dotborder, dotradius ) {
    var safari = navigator.userAgent.indexOf( "Safari" ) > -1;;
    var edge = window.navigator.userAgent.indexOf( "Edge" ) > -1;
    var is_chrome = navigator.userAgent.indexOf( 'Chrome' ) > -1;
    if ( ( is_chrome ) && ( safari ) ) {
      safari = false;
    }
    var target = document.getElementById( targetId );
    target.innerHTML = "";
    var tgid = _iesKnob.guid();
    var tg = _iesKnob.ins( target, 'svg', [ "class", "circle-chart", "id", tgid, "height", "102%", "width", "102%", "viewbox", "0 0 33.83098862 33.83098862", "xmlns", "http://www.w3.org/2000/svg",
      "style", "height:102%;width:102%;overflow: visible  !important;box-shadow : 0px -0px 10000px transparent;position:absolute;top:-1%;left:-1%", "preserveAspectRatio", "none"
    ], false, false, true );
    var defs = _iesKnob.ins( tg, 'defs', false, false, false, true );
    var gradientId = _iesKnob.guid();
    var lin = _iesKnob.ins( defs, "linearGradient", [ "id", gradientId, "x1", "0", "y1", "10", "x2", "30", "y2", "10", "gradientUnits", "userSpaceOnUse", "gradientTransform", "rotate(90)" ],
      false, false, true );
    if ( !gcol1 || gcol1 == null || gcol1 == "" ) {
      gcol1 = "#FFD700"
    };
    if ( !gcol2 || gcol2 == null || gcol2 == "" ) {
      gcol2 = "yellow"
    };
    _iesKnob.ins( lin, "stop", [ "stop-color", gcol1, "offset", "0" ], false, false, true );
    _iesKnob.ins( lin, "stop", [ "stop-color", gcol2, "offset", "1" ], false, false, true );
    //var rectId=_iesKnob.guid();
    //_iesKnob.ins(defs,"rect",["id",rectId,"x","5%","y","5%","width","92%","height","92%","rx","15"],false,false,true);
    //var clipId=_iesKnob.guid();
    //var clip=_iesKnob.ins(defs,"clipPath",["id",clipId],false,false,true);
    //_iesKnob.ins(clip,"use",["xlink:href","#"+rectId],false,false,true);
    //_iesKnob.ins(tg,"image",["href",userImg,"height","34","width","34","clip-path","url(#"+clipId+")"],false,false,true);
    target.style.backgroundImage = "url(" + userImg + ")";
    target.style.backgroundSize = "99%";
    target.style.backgroundPosition = "50% 50%";
    target.style.backgroundRepeat = "no-repeat";
    if ( !bkgcol || bkgcol == null || bkgcol == "" ) {
      bkgcol = "#efefef"
    }
    _iesKnob.ins( tg, "circle", [ "class", "circle-chart__background", "stroke", bkgcol, "stroke-width", "2", "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431" ], false,
      false, true );
    if ( edge ) {
      _iesKnob.ins( tg, "circle", [ "class", "circle-chart__circle", "stroke", "url(#" + gradientId + ")", "stroke-width", "2", "stroke-dasharray", percentage + ",100", "stroke-linecap", "round",
        "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431", "transform", "translate(-0,33.83098862) rotate(-90)"
      ], false, false, true );
    } else {
      _iesKnob.ins( tg, "circle", [ "class", "circle-chart__circle", "stroke", "url(#" + gradientId + ")", "stroke-width", "2", "stroke-dasharray", percentage + ",100", "stroke-linecap", "round",
        "fill", "none", "cx", "16.91549431", "cy", "16.91549431", "r", "15.91549431"
      ], false, false, true );
    }
    if ( starImg ) {
      //_iesKnob.ins(tg,"image",["href",starImg,"height","6","width","6","class","star-element","x","14","y","-2"],false,false,true);
      if ( edge || safari ) {
        var imgdiv = _iesKnob.ins( target, "div", [ "style", "position:absolute;top:0%;left:42.5%;width:15%;height:50%", "class", "star-element" ] )
        _iesKnob.ins( imgdiv, "img", [ "src", starImg, "style", "position:absolute;top:-15%;left:0%;width:100%;" ] );
      } else {
        _iesKnob.ins( tg, "image", [ "href", starImg, "height", "6", "width", "6", "class", "star-element", "x", "14", "y", "-2" ], false, false, true );
      }
    } else {
      if ( !dotcolor || dotcolor == null || dotcolor == "" ) {
        dotcolor = "#000000"
      };
      if ( !dotinside || dotinside == null || dotinside == "" ) {
        dotinside = dotcolor
      };
      if ( !dotborder || dotborder == null || dotborder == "" ) {
        dotborder = "0.1"
      };
      if ( !dotradius || dotradius == null || dotradius == "" ) {
        dotradius = "0.9"
      };
      var g = _iesKnob.ins( tg, "g", [ "class", "star-element", "style", "position:relative" ], false, false, true );
      _iesKnob.ins( g, "circle", [ "stroke", dotcolor, "stroke-width", dotborder, "r", dotradius, "fill", dotinside, "cx", "17", "cy", "1.1" ], false, false, true );
    }
    target.innerHTML = target.innerHTML;
    var nTg = document.getElementById( tgid );
    nTg.classList.add( tgid );
    var percentageDeg = 360 / ( 100 / percentage );
    if ( !timing || timing == null || timing == "" ) {
      timing = 1
    };
    if ( edge || safari ) {
      var style = "@keyframes " + tgid + "-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes " + tgid + "-rotate-star {to { transform: rotate(0deg) }}." + tgid +
        " .circle-chart__circle {animation-timing-function: ease-out;animation: " + tgid + "-circle-chart-fill " + timing + "s reverse;transform: rotate(-90deg);transform-origin: center}." + tgid +
        " + .star-element {animation-timing-function: ease-out;animation: " + tgid + "-rotate-star " + timing + "s reverse;transform: rotate(" + percentageDeg + "deg);transform-origin: bottom;}"
    } else {
      var style = "@keyframes " + tgid + "-circle-chart-fill {to { stroke-dasharray: 0 100; }}@keyframes " + tgid + "-rotate-star {to { transform: rotate(0deg) }}." + tgid +
        " .circle-chart__circle {animation-timing-function: ease-out;animation: " + tgid + "-circle-chart-fill " + timing + "s reverse;transform: rotate(-90deg);transform-origin: center}." + tgid +
        " .star-element {animation-timing-function: ease-out;animation: " + tgid + "-rotate-star " + timing + "s reverse;transform: rotate(" + percentageDeg +
        "deg);transform-origin: center 50%;}"
    }
    if ( edge ) {
      style = style + "*{-webkit-backface-visibility: hidden;}";
    }
    document.getElementById( "circle-animation-style" ).innerHTML += style;
  }
}
