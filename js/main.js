jQuery(function($){

    function showContactMe(){
        $('.vcard .say').hide();
        $('.vcard .email').hover(function(){
            $('.vcard .say').stop(true, false).fadeIn().animate({opacity:1});
        },function(){
            $('.vcard .say').fadeOut();
        });
    }
    
    function setupHeader(){
        if($(window).scrollTop() <= 100) $('.vcard').removeClass('is-vcard-reduced');
        else $('.vcard').addClass('is-vcard-reduced');
    }
    
    function init(){
        showContactMe();
        setupHeader();
        $(window).scroll(setupHeader);
    }
    init();

});
