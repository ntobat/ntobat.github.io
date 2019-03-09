$(function(){


    //scroll fade-in elements
    $(window).scroll(function(){
        $(".el").each(function(i){
            var bottomEl = $(this).position().top + ( ($(this).outerHeight() / 4)*3 ),
                bottomWin = $(window).scrollTop() + $(window).height();
            if(bottomWin > bottomEl){
                if( $(this).hasClass('el-sub') ){
                    $(this).addClass('el-in-sub');
                } else if( $(this).hasClass('el-img') ) {
                    $(this).addClass('el-in-media');
                } else {
                    $(this).addClass('el-in');
                }
            }
        });
    });


	// open & close menu
	$('.menu').click(function(event) {

        event.preventDefault();

        if( $(".navi").hasClass('hidden') ){
            $(".siteNav").addClass('hidden');
            setTimeout(function(){
                $(".navi").removeClass('hidden');
            },150);
        } else {
            $(".navi").addClass('hidden');
            setTimeout(function(){
                $(".siteNav").removeClass('hidden');
            },150);
        };

        // if menu is closed
        if( $("#menu").hasClass('menuClosed') ){
            $("body").addClass("stop-scrolling");
            $("#menu").replaceWith("<img id='menu' class='' src='assets/menuClose.svg' />");
        // if menu is open
        } else {
            $("menu").fadeTo(250, 0);
            $("body").removeClass("stop-scrolling");
            $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />");
        };
    });



    //scroll animation    
    $('.jump, .navTitle').click(function(event) {
            
        event.preventDefault();

        if( $(this).data("id") === "top" ){
            setTimeout(function(){
                $('html, body').animate({scrollTop:0}, 700);
            }, 300);
        }

        $("body").removeClass("stop-scrolling");
        $(".siteNav").addClass('hidden');
        
        $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />").fadeTo(250, 1);
        $(".navi").removeClass('hidden');
     
        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top + 1;
            
        setTimeout(function(){
            $('html, body').animate({scrollTop:target_top}, 700);
        }, 300);
        
        /* Remove active class on any li when an anchor is clicked */
        navi.children().removeClass('active');
        
        /* Add active class to clicked anchor */
        $(this).addClass('active');
    });

    $('.discipline').click(function(event) {

        event.preventDefault();

        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top + 1;
            
        setTimeout(function(){
            $('html, body').animate({scrollTop:target_top}, 700);
        }, 200);

    });



    // progress bar
    $(window).bind("load", function() {
        var winHeight = $(window).innerHeight(),
        docHeight = $(document).height(),
        max = docHeight - winHeight,
        value = $(window).scrollTop() / max,
        indicator = $("#progress");

        indicator.css('width', value * 100 + '%');
            
        $(document).on('scroll', function(){
            value = $(window).scrollTop() / max;
            indicator.css('width', value * 100 + '%');
        });
    });



    // hide nav on scroll
    $(window).bind("load", function() {
        if( $(window).width() < 800 ){
            console.log($(window).width());
            var prevScroll = $(window).scrollTop();            
            $(document).on('scroll', function(){
                var newScroll = $(window).scrollTop();
                if(newScroll > prevScroll){
                    $(".icons").css('top', '-200px');
                } else {
                    $(".icons").css('top', '0');
                }
                prevScroll = newScroll;
            });
        }    
    });
    
  
});