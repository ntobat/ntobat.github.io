$(function(){


	/* play gif on hover */
	$(".gifWrap").hover(function(){
		var numb = $(this).data('wrapnum');
		$("#picHover" + numb).toggle();
  		$("#gifHover" + numb).toggle();
	});



	/* open lightbox 
	$(".motionGifs").click(function(e){
		e.preventDefault();
		$(".content").css("background-color", "black");
		$(".navbar").css("background-color", "#eee");
		$(".title").css("background-color", "#eee");
		$("#tops").css("background-color", "#eee");
	});*/



    /* open menu animation */
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


});