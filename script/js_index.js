$(document).ready(function () {
    $("#nav_switch").click(function () {
        if ($("#nav_toggle").is(":visible")) {
            $(".LOGO-TAP").css("display", "flex");
            $("#nav_toggle").hide();
        } else {
            $(".LOGO-TAP").css("display", "none");
            $("#nav_toggle").css("display", "flex");
        }
    });

    // LOGO
    $(".nav_LOGO").mouseenter(function () {
        $(".body").css("background-image", 'url("./img/ketVersion.jpg")')
    })
    // 所有商品
    $("#nav_allProduct_link").mouseenter(function () {
        $(".body").css("background-image", 'url("./img/ketVersion.jpg")')
    })
    // 系列1
    $("#series1").mouseenter(function () {
        $(".body").css("background-image", 'url("./img/series_1_hoverbg.png")')
    })
    // 系列2
    $("#series2").mouseenter(function () {
        $(".body").css("background-image", 'url("./img/series_2_hoverbg.png")')
    })
    // 系列3
    $("#series3").mouseenter(function () {
        $(".body").css("background-image", 'url("./img/series_3_hoverbg.png")')
    })

    // 效果

    $(document).ready(function () {
        // 監聽選單的顯示狀態
        $('#nav_switch').on('click', function () {
          $('.blurred-background').toggleClass('menu-visible');
        });
      });
});

