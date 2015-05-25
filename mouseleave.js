$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast',100)
    });
    $('div').mouseleave(function(){
        $('div').fadeTo('fast',0.5)
    });
});
// line 5 means that when the mouse has left the div, it will fade back to the opacity stated in the css code and do it fast//