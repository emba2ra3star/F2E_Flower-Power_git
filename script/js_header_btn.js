$(document).ready(function(){
    $("#menu_btn").click(function(){
        if ($("#navBar").is(":visible")) {
            $("#navBar").hide();
        } else {
            $("#navBar").css("display","flex");
        }
    });
});
