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
    
    // Carrousel classique
    function simpleCarrousel( $carrousel, viewItems, scrollItems ) {
    
        var $stage = $carrousel.find('.csel-stage');
        var $elems = $carrousel.find('.csel-item');
        var transition = false;
        var elemsNb     = $elems.length;
        var elemsWidth  = 0;
        var index      = 0;
        var direction  = 'next';
        
        if( elemsNb > viewItems ) {
            
            $elems.each(function() {
                elemsWidth += $(this).outerWidth();
            });
            
            $stage.width( elemsWidth );
            $carrousel
                .prepend('<div class="navigation"><a href="#" class="prev icon-arrow-left" title="Afficher l\'élément précédent"></a></div>')
                .append('<div class="navigation"><a href="#" class="next icon-arrow-right" title="Afficher l\'élément suivant"></a></div>');
                
            $carrousel.find('.navigation').on('click', 'a', function(e) {
                e.preventDefault();
                if( transition == false ) {
                    transition = true;
                    if( $(this).hasClass('prev') ) {
                        index <= 0 ? index = elemsNb-viewItems : index-=scrollItems;
                        if(index < 0) index = 0;
                    } else if( $(this).hasClass('next') ) {
                        index >= elemsNb-viewItems ? index = 0 : index+=scrollItems;
                        if(index > elemsNb-viewItems) index = elemsNb-viewItems;
                    }
                    $stage.animate({ left: - ( elemsWidth / elemsNb ) * index }, 1000, function() { transition = false; });
                }
            });

        }

    }
    
    function init(){
        showContactMe();
        setupHeader();
        $(window).scroll(setupHeader);
        simpleCarrousel($('.carousel'), 1, 1);
    }
    init();

});
