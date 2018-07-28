$(function(){

	var ixdPos = 2;

	//move left
	$(".r-arr").click(function(e){
		e.preventDefault();
		var caroWid = ( $(".ixdCaro").width() / 3 );
		var halfCaro = caroWid / 3;
		if( ixdPos===2 ){
			$(".ixdCaro").css("transform", "translateX(-" + caroWid + "px)");
			$("#ixdLeftImg").animate({ opacity: 0.15 }, 25);
			$("#ixdRgtImg").animate({ opacity: 0 }, 25);
			$(".ixdgif").attr("src", "assets/studio/menu.gif");
			$(".activeDot").removeClass('activeDot').next().addClass('activeDot');
			ixdPos += 1;
		} else if ( ixdPos === 1 ){
			$(".ixdCaro").css("transform", "translateX(0)");
			$("#ixdRgtImg").animate({ opacity: 0.75 }, 25);
			$("#ixdLeftImg").animate({ opacity: 0.75 }, 25);
			$(".ixdgif").attr("src", "assets/studio/product.gif")
			$(".activeDot").removeClass('activeDot').next().addClass('activeDot');
			ixdPos += 1;
		}
		
	});

	//move right
	$(".l-arr").click(function(e){
		e.preventDefault();
		var caroWid = ( $(".ixdCaro").width() / 3 );
		var halfCaro = caroWid / 3;
		if( ixdPos===2 ){
			$(".ixdCaro").css("transform", "translateX(" + caroWid + "px)");
			$("#ixdRgtImg").animate({ opacity: 0.15 }, 25);
			$("#ixdLeftImg").animate({ opacity: 0 }, 25);
			$(".ixdgif").attr("src", "assets/studio/reserve.gif")
			$(".activeDot").removeClass('activeDot').prev().addClass('activeDot');
			ixdPos -= 1;
		} else if ( ixdPos === 3 ){
			$(".ixdCaro").css("transform", "translateX(0)");
			$("#ixdLeftImg").animate({ opacity: 0.75 }, 25);
			$("#ixdRgtImg").animate({ opacity: 0.75 }, 25);
			$(".ixdgif").attr("src", "assets/studio/product.gif");
			$(".activeDot").removeClass('activeDot').prev().addClass('activeDot');
			ixdPos -= 1;
		}
	});

	//nav menu
	$(".menu").click(function(e){
		e.preventDefault();
		if( !$(".nav").hasClass("navOut") ){
			$(".headerBlack").css("background-color", "white");
			$(".nav").addClass("navOut");
			$("body").addClass("navModal");
			$("#menuWhite").replaceWith( "<img id=\"navClose\" src=\"assets/menuCloseBlack.svg\" />");
			$("#logo").replaceWith( "<img id=\"logo\" src=\"assets/logoBlack.png\" />");
		} else {
			$(".headerBlack").css("background-color", "black");
			$(".nav").removeClass("navOut");
			$("body").removeClass("navModal");
			$("#navClose").replaceWith( "<img id=\"menuWhite\" src=\"assets/menu.svg\" />");
			$("#logo").replaceWith( "<img id=\"logo\" src=\"assets/logo.svg\" />");
		}
	});

});