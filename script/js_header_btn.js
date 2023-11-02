$(document).ready(function(){
    $("#menu_btn").click(function(){
        if ($(".nav_bar").is(":visible")) {
            $(".nav_bar").css("display","none");
        } else {
            $(".nav_bar").css("display","flex");
        }
    });
});
