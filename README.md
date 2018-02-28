# iesKnob v0.1
Animated arc for scores and gamification in websites  
![example](https://github.com/tritone11/iesKnob/blob/master/arc.PNG?raw=true)

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
data-knob-percentage Percentage of completion
data-knob-timing     Timing of animation in seconds
data-knob-image      Background image of circle
data-knob-dotimage   The dot that draw the arc can be changed with an image (for example a star)
data-knob-dotcolor   If no image is defined, it will be a dot with this color
data-knob-gradient1  Color of gradient for the arc
data-knob-gradient2  Color of gradient for the arc
data-knob-color      Color of the arc
```

### Browser support

Currently supported only by Chrome and Firefox on desktop
