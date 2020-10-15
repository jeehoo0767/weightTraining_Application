$(".menu_container").click(function () {
    $("#line-top").toggleClass("bar-top").toggleClass("bar-top-reverse");
    $("#line-middle").toggleClass("bar-middle").toggleClass("bar-middle-reverse");
    $("#line-bottom").toggleClass("bar-bottom").toggleClass("bar-bottom-reverse");
    $(".gnb_toggle").fadeToggle(200);
});