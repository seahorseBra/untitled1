$("document").ready(function () {
    $("#nav_menu").click(function () {
        var nav = $("#nav");
        if(nav.css("display") == "none"){
            nav.css("display", "block");
            $("#nav_manu1").addClass("nav_line1");
            $("#nav_manu2").addClass("nav_line2");
            $("#nav_manu3").addClass("nav_line3");
        }else {
            nav.css("display", "none");
            $("#nav_manu1").removeClass("nav_line1");
            $("#nav_manu2").removeClass("nav_line2");
            $("#nav_manu3").removeClass("nav_line3");
        }
    })
})
