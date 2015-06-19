$(document).ready( function(){
    $(#button).click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        (".list").append(toAdd);
    });
$(document).on('click', '.item', function(){
    this.remove();
    });
});