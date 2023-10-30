$(document).ready(function(){
    $("#nav_switch").click(function(){
        if ($("#nav_toggle").is(":visible")) {
            $(".LOGO-TAP").css("display","flex");
            $("#nav_toggle").hide();
        } else {
            $(".LOGO-TAP").css("display","none");
            $("#nav_toggle").css("display","flex");
        }
    });
    // 系列1
    $("#series1").mouseenter(function(){
        $(".body").css("background-image",'url("./img/pff.svg")')
    })
    // 系列2
    $("#series2").mouseenter(function(){
        $(".body").css("background-image",'url("./img/test_img1.png")')
    })
});

