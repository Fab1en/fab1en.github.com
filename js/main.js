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
        
        var getNext = function(index){
            if(index >= elemsNb-viewItems) return 0;
            if(index + scrollItems > elemsNb-viewItems) return elemsNb-viewItems;
            return index + scrollItems;
        };
        
        var getPrev = function(index){
            if(index <= 0) return elemsNb-viewItems;
            if(index - scrollItems < 0) return 0;
            return index - scrollItems;
        }
        
        if( elemsNb > viewItems ) {
            
            $elems.each(function() {
                elemsWidth += $(this).outerWidth();
            });
            
            $stage.width( elemsWidth );
            $elems.first().attr('id');
            $carrousel
                .prepend('<div class="navigation"><a href="#'+$elems.last().attr('id')+'" class="prev icon-arrow-left" title="Afficher l\'élément précédent"></a></div>')
                .append('<div class="navigation"><a href="#'+$elems.eq(1).attr('id')+'" class="next icon-arrow-right" title="Afficher l\'élément suivant"></a></div>');
                
            $carrousel.find('.navigation').on('click', 'a', function(e) {
                e.preventDefault();
                if( transition == false ) {
                    transition = true;
                    var newHash = $(this).attr('href');
                    if( $(this).hasClass('prev') ) {
                        index = getPrev(index);
                    } else if( $(this).hasClass('next') ) {
                        index = getNext(index);
                    }
                    
                    $stage.animate({ left: - ( elemsWidth / elemsNb ) * index }, 1000, function() { 
                        transition = false; 
                        window.location.hash = newHash;
                        $carrousel.find('.prev').attr('href', '#'+$elems.eq(getPrev(index)).attr('id'));
                        $carrousel.find('.next').attr('href', '#'+$elems.eq(getNext(index)).attr('id'));
                    });
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
