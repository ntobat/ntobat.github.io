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

	/*
	//active link styling
	$(".navstick li a").click(function(e){
		e.preventDefault();
		$(this).removeClass("active");
		$(e.target).addClass("active");
	});
	*/

});