$(function(){

    var navi = navi = $('.navigator');

    $('.jump').click(function(event) {
            
        event.preventDefault();
     
        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top + 1;
            
        $('html, body').animate({scrollTop:target_top}, 500);
        
        /* Remove active class on any li when an anchor is clicked */
        
        navi.children().removeClass('active');
        
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

        if( $("#menu").hasClass('menuClosed') ){

            $("#menu").fadeTo(250, 0);
            setTimeout(function(){
                $("#menu").replaceWith("<img id='menu' class='' src='assets/menuWordClose.svg' />").fadeTo(250, 1);
            }, 250);

        } else {

            $("#menu").fadeTo(250, 0);
            setTimeout(function(){
                $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/siteMenu.svg' />").fadeTo(250, 1);
            }, 250);

        };

    });

    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        var threec = $("#threec").offset().top;
        var threecDistance = (threec - scrollTop);
        var threecHeight = 0 - ( ($("#research").offset().top) - ($("#threec").offset().top) );
        if( (0 >= threecDistance) && (threecDistance >= threecHeight) ){
            $('.jump[href$="threec"]').addClass('active');
        } else {
            $('.jump[href$="threec"]').removeClass('active');
        };

        var research = $("#research").offset().top;
        var researchDistance = (research - scrollTop);
        var researchHeight = 0 - (($("#persona").offset().top) - ($("#research").offset().top));
        if( (0 >= researchDistance) && (researchDistance >= researchHeight) ){
            $('.jump[href$="research"]').addClass('active');
        } else {
            $('.jump[href$="research"]').removeClass('active');
        };

        var persona = $("#persona").offset().top;
        var personaDistance = (persona - scrollTop);
        var personaHeight = 0 - (($("#conclusions").offset().top) - ($("#persona").offset().top));
        if( (0 >= personaDistance) && (personaDistance >= personaHeight) ){
            $('.jump[href$="persona"]').addClass('active');
        } else {
            $('.jump[href$="persona"]').removeClass('active');
        };

        var concl = $("#conclusions").offset().top;
        var conclDistance = (concl - scrollTop);
        var conclHeight = 0 - (($("#design").offset().top) - ($("#conclusions").offset().top));
        if( (0 >= conclDistance) && (conclDistance >= conclHeight) ){
            $('.jump[href$="conclusions"]').addClass('active');
        } else {
            $('.jump[href$="conclusions"]').removeClass('active');
        };

        var design = $("#design").offset().top;
        var designDistance = (design - scrollTop);
        var designHeight = 0 - (($("#lofi").offset().top) - ($("#design").offset().top));
        if( (0 >= designDistance) && (designDistance >= designHeight) ){
            $('.jump[href$="design"]').addClass('active');
        } else {
            $('.jump[href$="design"]').removeClass('active');
        };

        var lofi = $("#lofi").offset().top;
        var lofiDistance = (lofi - scrollTop);
        var lofiHeight = 0 - (($("#hifi").offset().top) - ($("#lofi").offset().top));
        if( (0 >= lofiDistance) && (lofiDistance >= lofiHeight) ){
            $('.jump[href$="lofi"]').addClass('active');
        } else {
            $('.jump[href$="lofi"]').removeClass('active');
        };

        var hifi = $("#hifi").offset().top;
        var hifiDistance = (hifi - scrollTop);
        var hifiHeight = 0 - (($("#wrap").offset().top) - ($("#hifi").offset().top));
        if( (0 >= hifiDistance) && (hifiDistance >= hifiHeight) ){
            $('.jump[href$="hifi"]').addClass('active');
        } else {
            $('.jump[href$="hifi"]').removeClass('active');
        };

        var wrapup = $("#wrap").offset().top;
        var wrapupDistance = (wrapup - scrollTop);
        var wrapupHeight = 0 - (($("#bottom").offset().top) - ($("#wrap").offset().top));
        if( (0 >= wrapupDistance) && (wrapupDistance >= wrapupHeight) ){
            $('.jump[href$="wrap"]').addClass('active');
        } else {
            $('.jump[href$="wrap"]').removeClass('active');
        };


    });
    

});





