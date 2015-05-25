$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast',100)
        });
    });
// .mouseenter() = when the mouse enters the div, so hovers over the div//
// .fadeTo() =  takes two arguments or inputs into the (), the first is the speed to fade and the second is the opacity in which to fade to, in this case it actually gets darker to 100% of its colour. //