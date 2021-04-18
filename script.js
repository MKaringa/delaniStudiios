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

    $(".btn").submit(function(event){
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        if(name == '' || email == '' || meassge == ''){
            $('#post').html('Please fill in all the fields');
            $('.post').css('background-color', 'red')
        } else {
            $('#post').html('Hey ' + name + '!' + ' we have received your messgae. We will be in touch shortly.')
            $('.post').css('background-color', 'green')
            $('form')[0].reset();
        }
        event.preventDefault();


    });

});