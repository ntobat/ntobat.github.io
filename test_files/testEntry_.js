$(function(){

	var white = true;


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
        	// and if icons should be black
        	if( !white ){
        		$("#menu").fadeTo(250, 0);
        		setTimeout(function(){
	                $("#menu").replaceWith("<img id='menu' class='' src='assets/menuCloseBlack.svg' />").fadeTo(250, 1);
	            }, 250);
        	} else {
	            $("#menu, #logo").fadeTo(250, 0);
				$("nav").css("background-color", "white");
	            // replace with black icons, change bg to white
	            setTimeout(function(){
	                $("#menu").replaceWith("<img id='menu' class='' src='assets/menuCloseBlack.svg' />").fadeTo(250, 1);
	                $("#logo").replaceWith("<img id='logo' src='assets/logoBlack.svg' />")
	            }, 250);
	        }
        // if menu is open
        } else {
            // and icons should be black
            if(!white){
            	$("#menu").fadeTo(250, 0);
	            setTimeout(function(){
	                $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menuBlack.svg' />").fadeTo(250, 1);
	            }, 250);
	        // or if icons should be white
	        } else {
	        	setTimeout(function(){
	                $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />").fadeTo(250, 1);
	                $("#logo").replaceWith("<img id='logo' src='assets/logo.svg' />")
	                $("nav").css("background-color", "transparent");
	            }, 250);
	        }
        };
    });


    // color fade icons on scroll
    var h = ( $(window).height() * 0.65 ) - 45;
    
    $(document).scroll(function(){
    	if( $(document).scrollTop() > h && white){
			$("#menu, #logo").fadeTo(100, 0);
            $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menuBlack.svg' />").fadeTo(250, 1);
            $("#logo").replaceWith("<img id='logo' src='assets/logoBlack.svg' />");
            $(".icons").css("background-color", "white");
	        white = false;
		} else if( $(document).scrollTop() < h && !white){
			$("#menu, #logo").fadeTo(100, 0);
	        setTimeout(function(){
	            $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />").fadeTo(250, 1);
	            $("#logo").replaceWith("<img id='logo' src='assets/logo.svg' />")
	            $("#menu", "#logo").css("transform", "scale(0.75)");
	            $(".icons").css("background-color", "black");
	        }, 100);
	        white = true;
		}
    });


    // progress bar
    var winHeight = $(window).height(),
		docHeight = $(document).height(),
		max = docHeight - winHeight,
		value,
		indicator = $("#progress");
	

  	$(document).on('scroll', function(){
  		value = $(window).scrollTop();
    	indicator.css('width', value);
	});


    // overview click effect
    var inOrOut = true; // in = true; out = false
    $(".ovEl").click(function(){
    	var el = $(this);
    	if( inOrOut ){
			$(".ovEl").addClass("ovOut");
    		
	    	$("#box1").css("transform", "translate(-108px, -56px) scale(0.75)");
	    	$("#box2").css("transform", "translate(108px, -56px) scale(0.75)");
	    	$("#box3").css("transform", "translate(-108px, 56px) scale(0.75)");
	    	$("#box4").css("transform", "translate(108px, 56px) scale(0.75)");

	    	el.removeClass("unselected");
	    	el.siblings(".ovEl").addClass("unselected");
	    	el.next(".ovText").css("opacity", 1);
	    	inOrOut = false;
	    /*} else if( !inOrOut && !el.hasClass("unselected") ){
	    	$(".ovEl").removeClass("ovOut");
	    	$(".ovEl").removeClass("unselected");

	    	$("#box1").css("transform", "scale(0.75) translate(108px, 56px)");
	    	$("#box2").css("transform", "scale(0.75) translate(-108px, 56px)");
	    	$("#box3").css("transform", "scale(0.75) translate(108px, -56px)");
	    	$("#box4").css("transform", "scale(0.75) translate(-108px, -56px)");
	    	el.next(".ovText").css("opacity", 0);
	    	inOrOut = true;
	    	*/
	    } else if( !inOrOut && el.hasClass("unselected") ){
	    	$('.ovEl:not(.unselected)').next(".ovText").css("opacity", 0);
	    	$('.ovEl:not(.unselected)').addClass("unselected");
	    	el.removeClass("unselected");
	    	el.next(".ovText").css("opacity", 1);
	    }
    });





});
/*
click box 1
if "in": 
	move & scale all boxes to out position
	fade out other boxes
	this.next opacity = 1
	show text
	var inOrOut = out
if "out" & "selected":
	move & scale to in position
	fade in other boxes
	hide text
	var inOrOut = in
if "out" and not "selected":
	fade out selected
	change selected to this
	fade in this
	change text






*/
