$(function(){

    var navi = navi = $('.navigator');

    $('.jump').click(function(event) {
            
        event.preventDefault();
     
        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top;
            
        $('html, body').animate({scrollTop:target_top}, 500);
        
        /* Remove active class on any li when an anchor is clicked */
        
        navi.children().removeClass();
        
        /* Add active class to clicked anchor */
            
        $(this).addClass('active');

    });

    $('#navTitle').click(function(event) {
            
        event.preventDefault();

        $('html, body').animate({scrollTop:0}, 500);

        navi.children().removeClass();

    });

    $('.menu').click(function(event) {

        event.preventDefault();

        if( $(".navi").hasClass('hidden') ){
            $(".navi").removeClass('hidden');
            $(".siteNav").addClass('hidden');
        } else {
            $(".navi").addClass('hidden');
            $(".siteNav").removeClass('hidden');
        };

        if( $("#menu").hasClass('menuOpen') ){
            $("#menu").attr('src', 'assets/menuWord.svg').removeClass('menuOpen');
        } else {
            $("#menu").attr('src', 'assets/menuWordClose.svg').addClass('menuOpen');
        };


    });

});





