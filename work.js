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
/*
	//open lightbox
	$(".lb_trigger").click(function(e){
		e.preventDefault();
		$(this).toggleClass("img-clicked");
		var imglink = $(this).attr("href");
		$("#boxed").html('<img src="' + imglink + '" />');
		$("#lightbox").fadeIn();
		$("#lightbox img").removeClass("scale-out").addClass("scale-in");
/*		} else {
			var lightbox = 
				'<div id="lightbox">' +
					'<div id="boxed">' +
						'<img src="' + imglink + '" />' +
					'</div>' +
				'</div>';
			$('body').append(lightbox);
			$("#lightbox").fadeIn();
		};
		$("#next").fadeIn();
		console.log(imglink);
	});

	//traverse lightbox
	
	var gonext = function(){
		return;
	};
	$("#next").click(function(){
		var box = $("#boxed");
		var lbimg = $("#boxed img");
		var imgsrc = $("#boxed img");
		var next = $("a.lb_trigger");
		var imgarray = next.get();
		$.each(imgarray, function(i){
			alert( i.data('class')	 );
		});
		console.log(imgarray[4]);
		//lbimg.attr("src", ancestor);
		lbimg.fadeIn();
		$("#boxed img").fadeOut();
		setTimeout(gonext, 400);
	});

	//close lightbox
	$("#lightbox").click(function(){
		$(".lb_trigger").removeClass("img-clicked");
		if( $("#lightbox").css("display") === "block" ){
			$("#lightbox").fadeOut();
			$("#lightbox img").removeClass("scale-in").addClass("scale-out");
		};
	});
	*/

});