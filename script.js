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

    $('.img_wrap').hover(function(){
        $(this).find('.img-desc').toggleClass('img-desc-show')

    });

    /*
    $(".img_wrap").hover(function(){
        $(this).next().css('visibility', 'visible');
    }, function(){
        $(this).next().css('visibility', 'hidden')
    }
    */
    
    $(".form").submit(function(event){
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        if($('#name').val() && $('#email').val()){
            alert(' Hello ' + name + '!' + ' Your message has been received successfully. We will be with you shortly.')
        } else{
            alert('Invalid inputs. Check if you have filled all inputs and then try again.')
        }
        event.preventDefault();


    });

});