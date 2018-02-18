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
		*/
		$("#next").fadeIn();
		$("#prev").fadeIn();
		console.log(imglink);
	});

	//traverse lightbox
	//next
	$("#next").click(function(){
		$("#boxed img").fadeOut(800);
		setTimeout(function(){
			//image displayed in lightbox
			var lightboxed = $("#boxed img");
			//list of thumbnail links (jQuery objects)
			var img_list = $("a.lb_trigger");
			//starting thumbnail link clicked to open lightbox
			var start = $("a.img-clicked");
			//next thumbnail in DOM
			var next = start.next();
			if( !next.length ){
				var next = $(".content").children().first();
			}
			//href of next thumbnail
			var next_src = next.attr("href");
/*	
			//array of thumbnail links (array)
			var img_array = img_list.get();
			//index position of start link
			var start_index = img_list.index(start);
			//index position of next link
			var next_index = start_index + 1;
*/
			//change lightboxed image source
			lightboxed.attr("src", next_src);
			//fade image in
			lightboxed.fadeIn();
			//update new start point
			start.removeClass("img-clicked");
			next.addClass("img-clicked");
			//test
			console.log(next);
		}, 800);
	});
	//previous
	$("#prev").click(function(){
		$("#boxed img").fadeOut(800);
		setTimeout(function(){
			//image displayed in lightbox
			var lightboxed = $("#boxed img");
			//list of thumbnail links (jQuery objects)
			var img_list = $("a.lb_trigger");
			//starting thumbnail link clicked to open lightbox
			var start = $("a.img-clicked");
			//next thumbnail in DOM
			var prev = start.prev();
			if( !prev.length ){
				var prev = $(".content").children().last();
			}
			//href of next thumbnail
			var prev_src = prev.attr("href");
/*	
			//array of thumbnail links (array)
			var img_array = img_list.get();
			//index position of start link
			var start_index = img_list.index(start);
			//index position of next link
			var next_index = start_index + 1;
*/
			//change lightboxed image source
			lightboxed.attr("src", prev_src);
			//fade image in
			lightboxed.fadeIn();
			//update new start point
			start.removeClass("img-clicked");
			prev.addClass("img-clicked");
		}, 800);
	});

	//close lightbox
	$("#lightbox").click(function(){
		$(".lb_trigger").removeClass("img-clicked");
		if( $("#lightbox").css("display") === "block" ){
			$("#lightbox").fadeOut();
			$("#prev, #next").fadeOut();
			$("#lightbox img").removeClass("scale-in").addClass("scale-out");
		};
	});
	

});