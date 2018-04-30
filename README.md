# iesKnob v0.1.3
Animated arc for scores and gamification in websites  
![example](https://github.com/tritone11/iesKnob/blob/master/arc.gif?raw=true)

## Usage
Include iesKnob.js in your webpage, then create an html element  
```
<div style="border-radius:50%" data-knob-percentage="75"  data-knob-timing="2"  data-knob-image="image.png" data-knob-dotimage="image.png" data-knob-gradient1="#FFD700" data-knob-gradient2="red" data-knob-dotcolor="#f00" data-knob-color="#efefef" class="iesknob"></div>
```  
All parameters are optional except for data-knob-percentage (the percentage to animate the arc) and the class "iesknob".  
  
To animate your html element:
```javascript
_iesKnob.init()
```  
  
If you want to animate again an animated element:  
```javascript
_iesKnob.init("force")
```  


### Parameters 
```
data-knob-strokewidth           Stroke width of arc
data-knob-html                  If set, data-knob-image can support html instead of image link (icons, text, ecc)
data-knob-percentage            Percentage of completion
data-knob-timing                Timing of animation in seconds. If 0, the arc will not animate but will just be rendered
data-knob-image                 Background image of circle
data-knob-dotimage              The dot that draw the arc can be changed with an image (for example a star)
data-knob-dotcolor              If no image is defined, it will be a dot with this color as a border
data-knob-gradient1             Color of gradient for the arc
data-knob-gradient2             Color of gradient for the arc
data-knob-color                 Color of the arc
data-knob-dotcolorinside        Color of inside of the dot
data-knob-dotborder             Border width of dot
data-knob-dotradius             Dot radius
```

### Browser support

Currently tested only on Chrome, Edge, Safari and Firefox  
There is a bug on iOs browsers where the star is not moving along the path.  
Based on https://markus.oberlehner.net/blog/pure-css-animated-svg-circle-chart/
