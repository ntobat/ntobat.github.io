$(function(){

	//overlay animate - navigate away from work page
	$(".bread > a").click(function(e){
		e.preventDefault();
    var goTo = this.getAttribute("href");
		$(".overlay").addClass("away");
		setTimeout(function(){
      window.location = goTo;
    }, 1200);   
	});

});