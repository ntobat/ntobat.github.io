$(function(){

	//home page animate
	var hideit = function(){
		$(".container-1").hide();
		$(".container-2").css("visibility", "visible").animate({ opacity: 1 });
	};
	$(".btn-1").click(function(){
		setTimeout(hideit, 800);
		$(".container-1").fadeOut(800);
	});

	//work button animate - prevent immediate navigation
	$(".btn-2").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");
    $(".container-2").fadeOut(800);
    setTimeout(function(){
      window.location = goTo;
    }, 800);       
	});

	//work page animate-brand
	var hidebrand = function(){
		$(".container-3").hide();
		$(".container-4").css("visibility", "visible").animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">branding</a> </div>" )
	}
	$(".brand").click(function(){
		setTimeout(hidebrand, 800);
		$(".container-3").fadeOut(800);
	});

	//work page animate-logo
	var hidelogo = function(){
		$(".container-3").hide();
		$(".container-5").css("visibility", "visible").animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">logos</a> </div>" )
	}
	$(".logo").click(function(){
		setTimeout(hidelogo, 800);
		$(".container-3").fadeOut(800);
	});

	//work page animate-scrn
	var hidescrn = function(){
		$(".container-3").hide();
		$(".container-6").css("visibility", "visible").animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">screens</a> </div>" )
	}
	$(".scrn").click(function(){
		setTimeout(hidescrn, 800);
		$(".container-3").fadeOut(800);
	});

	//back-nav from work item
	var referrer = document.referrer;
	if( referrer === ( 'nicktobat.com/screens/topo.html')){
		$(".container-3").hide();
		$(".container-6").css("visibility", "visible").animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">screens</a> </div>" );
	};

});




