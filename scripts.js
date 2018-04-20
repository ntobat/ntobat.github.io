$(function(){

	//detect mobile
	function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};
	if( isMobileDevice() ){
		var viewportHeight = $(".page").outerHeight();
		$(".page").css({ height: window.innerHeight })
	};
	console.log(isMobileDevice());

	//home page animate
	var atypical = function(){
		$(".container-1").hide();
		$(".atypical").css("visibility", "visible").animate({ opacity: 1 }, 2000);
		$(".atypical").fadeOut(2000);
		setTimeout(function(){
			$(".container-2").css("visibility", "visible").animate({ opacity: 1 }, 800);
		}, 4000);
	};
	$(".btn-1").click(function(){
		setTimeout(atypical, 800);
		$(".container-1").fadeOut(800);
	});

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
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"#work\">work</a> <p>&nbsp;/&nbsp;</p> <p>branding</p> </div>" );
	}
	$(".brand").click(function(e){
		e.preventDefault();
		setTimeout(hidebrand, 800);
		$(".container-3").fadeOut(800).animate({ opacity: 0 }, 800);
	});

	/*//work page animate-logo
	var hidelogo = function(){
		$(".container-3").hide();
		$(".container-5").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>logos</p> </div>" );
	}
	$(".logo").click(function(){
		setTimeout(hidelogo, 800);
		$(".container-3").fadeOut(800).animate({ opacity: 0 }, 800);
	});
	*/
	//work page animate-exp
	var hideexp = function(){
		$(".container-3").hide();
		$(".container-5").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>experience</p> </div>" );
	}
	$(".logo").click(function(e){
		e.preventDefault();
		setTimeout(hideexp, 800);
		$(".container-3").fadeOut(800).animate({ opacity: 0 }, 800);
	});

	//work page animate-scrn
	var hidescrn = function(){
		$(".container-3").hide();
		$(".container-6").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>screens</p> </div>" );
	}
	$(".scrn").click(function(e){
		e.preventDefault();
		setTimeout(hidescrn, 800);
		$(".container-3").fadeOut(800).animate({ opacity: 0 }, 800);
	});

	//work page animate-fun
	var hidefun = function(){
		$(".container-3").hide();
		$(".container-7").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a id=\"workbread\" href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <p>fun</p> </div>" );
	}
	$(".fun").click(function(e){
		e.preventDefault();
		setTimeout(hidefun, 800);
		$(".container-3").fadeOut(800).animate({ opacity: 0 }, 800);
	});

	//work button animate - prevent immediate navigation
	var backtowork = function(){
		$("div.workcat").hide();
		$(".container-3").css({ "visibility": "visible", "display": "block" }).animate({ opacity: 1 });
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <p>work</p> </div>" );
	}
	$("body").on("click", "#workbread", function(e){
    e.preventDefault();
    setTimeout(backtowork, 800);
    $("div.workcat").fadeOut(800).animate({ opacity: 0 }, 800);
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

	//background color animation
	$(".skin").click(function(e){
		e.preventDefault();
		if( $(".page").hasClass("bg-towhite") ){
			$(".page").removeClass("bg-towhite").addClass("bg-toblack");
			$("body").removeClass("bg-towhite").addClass("bg-toblack");
			$("#name, .email, .li").removeClass("txt-towhite").addClass("txt-toblack");
			var skimg = $(".skin img");
			skimg.fadeOut(500, function(){
				skimg.attr('src', 'assets/color2.svg');
				skimg.fadeIn(500);
			});
			var icon = $("#logo");
			icon.fadeOut(500, function(){
				icon.attr('src', 'assets/icon_foot.svg');
				icon.fadeIn(500);
			});
			var source800 = $(".logo picture source");
			source800.fadeOut(500, function(){
				source800.attr('srcset', 'assets/icon_foot.svg');
				source800.fadeIn(500);
			});
		} else {
			$(".page").removeClass("bg-toblack").addClass("bg-towhite");
			$("body").removeClass("bg-toblack").addClass("bg-towhite");
			$("#name, .email, .li").removeClass("txt-toblack").addClass("txt-towhite");
			var skimg = $(".skin img");
			skimg.fadeOut(500, function(){
				skimg.attr('src', 'assets/color1.svg');
				skimg.fadeIn(500);
			});
			var icon = $("#logo");
			icon.fadeOut(500, function(){
				icon.attr('src', 'assets/icon_footblack.svg');
				icon.fadeIn(500);
			});
			var source800 = $(".logo picture source");
			source800.fadeOut(500, function(){
				source800.attr('srcset', 'assets/icon_footblack.svg');
				source800.fadeIn(500);
			});
		}
	});

	//about section
	$(".abt").click(function(e){
		e.preventDefault();
		$(".about").addClass("outed");
	});
	$(".ex").click(function(e){
		e.preventDefault();
		$(".about").removeClass("outed");
	});

	//work section
	$(".wrk").click(function(e){
		e.preventDefault();
		$(".work").addClass("workouted");
	});
	$(".ex").click(function(e){
		e.preventDefault();
		$(".entryIn").removeClass("entryIn");
		$(".work").removeClass("workouted");
		$(".workli.active").removeClass("active");
		$(".workli svg line.activeline").removeClass("activeline");
	});
	//open entry
	$(".workli").click(function(e){
		e.preventDefault();
		//highlight link
		$(".workli.active").removeClass("active");
		$(".workli svg line.activeline").removeClass("activeline");
		$(this).addClass("active");
		$(".workli.active svg line").addClass("activeline");
		//entry animation
		$(".entryIn").removeClass("entryIn");
		var worknum = $(this).data('worknum');
		$("#entry" + worknum).addClass("entryIn");
	});
	//close entry
	$(".exentry").click(function(e){
		e.preventDefault();
		$(".entryIn").removeClass("entryIn");
		$(".workli.active").removeClass("active");
		$(".workli svg line.activeline").removeClass("activeline");
	});

	//not work section
	$(".not").click(function(e){
		e.preventDefault();
		$(".notwork").addClass("workouted");
	});
	$(".ex").click(function(e){
		e.preventDefault();
		$(".entryIn").removeClass("entryIn");
		$(".notwork").removeClass("workouted");
		$(".notworkli.active").removeClass("active");
		$(".notworkli svg line.activeline").removeClass("activeline");
	});
	//open entry
	$(".notworkli").click(function(e){
		e.preventDefault();
		//highlight link
		$(".notworkli.active").removeClass("active");
		$(".notworkli svg line.activeline").removeClass("activeline");
		$(this).addClass("active");
		$(".notworkli.active svg line").addClass("activeline");
		//entry animation
		$(".entryIn").removeClass("entryIn");
		var worknum = $(this).data('notworknum');
		$("#entry" + worknum).addClass("entryIn");
	});
	//close entry
	$(".exentry").click(function(e){
		e.preventDefault();
		$(".entryIn").removeClass("entryIn");
		$(".notworkli.active").removeClass("active");
		$(".notworkli svg line.activeline").removeClass("activeline");
	});

	//prevent immediate navigation
	$(".button").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");
    $(".black").addClass("overlaze");
    setTimeout(function(){
      $(".white").addClass("overlaze");
    }, 600);
    setTimeout(function(){
      window.location = goTo;
    }, 1200);
	});



	//log window & doc height
	console.log( $(window).height() );
	console.log( $(document).height() );
	console.log( $(window).width() );
	console.log( $(window).scrollTop() );

});
/*
$(window).on("load", function(){

	//back-nav from work item
	var refer = document.referrer;
	var url = window.location.href;
	console.log(refer, url);
	if( refer === "http://localhost:8000/logos/sw.html" ){
		console.log("hi");
		$(".container-3").hide();
		$(".container-5").css("visibility", "visible").animate( { opacity: 1 }, 800 );
		$(".bread").replaceWith( "<div class=\"bread\"> <a href=\"index.html\">nicktobat</a> <p>&nbsp;/&nbsp;</p> <a href=\"work.html\">work</a> <p>&nbsp;/&nbsp;</p> <a href=\"\" onclick=\"return false;\">logos</a> </div>" )
	};



});


*/

