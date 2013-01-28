jQuery(function($){

    $('.vcard .say').hide();
    $('.vcard .email').hover(function(){
        $('.vcard .say').stop(true, false).fadeIn().animate({opacity:1});
    },function(){
        $('.vcard .say').fadeOut();
    });

});
