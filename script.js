$(document).ready(function(){
    $(".design").click(function(){
        $("#design-p").toggle();
        $("#design").toggle();
    });
    $(".development").click(function(){
        $("#dev-p").toggle();
        $("#dev").toggle();
     });
    $(".product").click(function(){
        $("#product-p").toggle();
        $("#product").toggle();
    });

    $(".img_wrap").hover(function(){
        $(this).find("div").toggleClass("img-desc-show")
    });

    
});