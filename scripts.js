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
		$(".container-4").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>branding</p> </div>" );
	}
	$(".brand").click(function(){
		setTimeout(hidebrand, 800);
		$(".container-3").fadeOut(800);
	});

	//work page animate-logo
	var hidelogo = function(){
		$(".container-3").hide();
		$(".container-5").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>logos</p> </div>" );
	}
	$(".logo").click(function(){
		setTimeout(hidelogo, 800);
		$(".container-3").fadeOut(800);
	});

	//work page animate-scrn
	var hidescrn = function(){
		$(".container-3").hide();
		$(".container-6").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>screens</p> </div>" );
	}
	$(".scrn").click(function(){
		setTimeout(hidescrn, 800);
		$(".container-3").fadeOut(800);
	});

	//work page animate-fun
	var hidefun = function(){
		$(".container-3").hide();
		$(".container-7").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>fun</p> </div>" );
	}
	$(".fun").click(function(){
		setTimeout(hidefun, 800);
		$(".container-3").fadeOut(800);
	});

	//work button animate - prevent immediate navigation
	$("#workbread").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");
    $(".workcat").fadeOut(800);
    setTimeout(function(){
      window.location = goTo;
    }, 800);       
	});
	//work page animate-back-to-work
/*	var resetwork = function(){
		$(".workcat").hide();
		$(".container-3").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <p>work</p> </div>" );
	}
	$("#workbread").click(function(){
		//setTimeout(resetwork, 800);
		//$(".workcat").fadeOut(800);
		$(".workcat").css({ "visibility": "hidden", "display": "none" }).animate({ opacity: 0 });
	});  */

	//back-nav from work item
	//whyyyyyyy does it break all my other click effects?!
	/*
		var refer = document.referrer;
		var url = window.location.href;
		if( refer = "http://localhost:8000/logos/sw.html" && url = "http://localhost:8000/work.html" ){
			$(".container-3").hide();
			$(".container-5").css("visibility", "visible").animate({ opacity: 1 });
			$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">logos</a> </div>" )
		};
	*/
	/*
	setTimeout(function(){
		$(".footer").css({
			"top": $(document).height() - 21 + "px"
		});
	}, 450);
	*/
	
	console.log( $(window).height());
	console.log( $(document).height());

});

$(window).on('load', function(){




});




