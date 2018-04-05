$(function(){

	//change z-index after overlay fadeout
	setTimeout(function(){
		$(".content").css("z-index", 99);
	}, 1200);

	//overlay animate - navigate away from work page
	$(".bread > a").click(function(e){
		e.preventDefault();
		$(".content").css("z-index", -99);
    var goTo = this.getAttribute("href");
		$(".overlay").addClass("away");
		setTimeout(function(){
      window.location = goTo;
    }, 1200);   
	});

	//atypical fade [nicktobat]
	$(".atypical").css("visibility", "visible").animate({ opacity: 1 }, 2400);
	$(".atypical").fadeOut(2400);
	setTimeout(function(){
		$(".overlay2").addClass("o2out");
	}, 4200);
	
	//animate blob up
	$(document).on('scroll', function(){
		if($(this).scrollTop() > 75){
			$(".stickyblob").removeClass("blob-down").addClass("blob-up");
		}
	});

	//animate blob down
	$(document).on('scroll', function(){
		if( $(this).scrollTop() < 75 && $(".stickyblob").hasClass("blob-up") ){
			$(".stickyblob").removeClass("blob-up").addClass("blob-down");
		}
	});

	/*
	//active link styling
	$(".navstick li a").click(function(e){
		e.preventDefault();
		$(this).removeClass("active");
		$(e.target).addClass("active");
	});
	*/

});