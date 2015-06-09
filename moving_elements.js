$(document).ready(function(){
    $("#one").after("<p> p added after the id tag 'one'</p>");
    $("#two").after($("p"));
});