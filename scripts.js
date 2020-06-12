$(function(){

	// product design lightbox
	$('.lb-trigger').click(function(e) {
		e.preventDefault();
		var image_src = $(this).attr('src');

		$('#lb-content').html('<img src="' + image_src + '" />');

		var maxheightvalue = $("#lightbox").height -60;
		$("#lightbox img").css("max-height", maxheightvalue + "px");
		//show lightbox window
		$('#lightbox').fadeIn(400);
	})
	// click to close
	$(document).on('click', '#lightbox', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').fadeOut(300);
	});

	//background color animation
	$(".skin").click(function(e){
		e.preventDefault();
		if( $(".page").hasClass("bg-towhite") ){
			$(".page").removeClass("bg-towhite").addClass("bg-toblack");
			$("body").removeClass("bg-towhite").addClass("bg-toblack");
			$("#name, .li").removeClass("txt-towhite").addClass("txt-toblack");
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
			var email = $("#email");
			email.fadeOut(500, function(){
				email.attr('src', 'assets/email.svg');
				email.fadeIn(500);
			});
			var source800 = $(".logo picture source");
			source800.fadeOut(500, function(){
				source800.attr('srcset', 'assets/icon_foot.svg');
				source800.fadeIn(500);
			});
		} else {
			$(".page").removeClass("bg-toblack").addClass("bg-towhite");
			$("body").removeClass("bg-toblack").addClass("bg-towhite");
			$("#name, .li").removeClass("txt-toblack").addClass("txt-towhite");
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
			var email = $("#email");
			email.fadeOut(500, function(){
				email.attr('src', 'assets/email_black.svg');
				email.fadeIn(500);
			});
			var source800 = $(".logo picture source");
			source800.fadeOut(500, function(){
				source800.attr('srcset', 'assets/icon_footblack.svg');
				source800.fadeIn(500);
			});
		}
	});

	/*//about section
	$(".abt").click(function(e){
		e.preventDefault();
		$(".about").addClass("outed");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$(".about").removeClass("outed");
	});
*/

	//work section
	$(".wrk").click(function(e){
		e.preventDefault();
		$(".work").addClass("workouted");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$(".entryIn").removeClass("entryIn");
		$(".work").removeClass("workouted");
		$(".workli.active").removeClass("active");
		$(".workli svg line.activeline").removeClass("activeline");
	});

	//open entry
	if ( $(window).width() > 885) {
		$(".workli").hover(function(){
			//highlight link
			$(".workli.active").removeClass("active");
			$(".workli svg line.activeline").removeClass("activeline");
			$(this).addClass("active");
			$(".workli.active svg line").addClass("activeline");
			//entry animation
			$(".entryIn").removeClass("entryIn");
			var worknum = $(this).data('worknum');
			$("#entry" + worknum).addClass("entryIn");
			}, function(){
			$(".entryIn").removeClass("entryIn");
			$(".workli.active").removeClass("active");
			$(".workli svg line.activeline").removeClass("activeline");
		});
	};

	//entry nav
	$(".menu").click(function(e){
		e.preventDefault();
		var height = $(window).scrollTop();
		if( !$(".nav").hasClass("navOut") ){
			$(".nav").addClass("navOut");
			$("body").addClass("navModal");
			if( height > 600){
				$("#menuBlack").replaceWith( "<img id=\"navClose\" src=\"assets/menuCloseBlack.svg\" />")
			} else if ( height < 600 ){
				$("#menuWhite").replaceWith( "<img id=\"navClose\" src=\"assets/menuClose.svg\" />")
			}
		} else {
			$(".nav").removeClass("navOut");
			$("body").removeClass("navModal");
			if( height > 600){
				$("#navClose").replaceWith( "<img id=\"menuBlack\" src=\"assets/menuBlack.svg\" />")
			} else if ( height < 600 ){
				$("#navClose").replaceWith( "<img id=\"menuWhite\" src=\"assets/menu.svg\" />")
			}
		}
	});

	/*
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
	*/

	//prevent immediate navigation
/*
	$(".button").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");
    $(".black").addClass("overlaze");
    setTimeout(function(){
      $(".white").addClass("overlaze");
    }, 600);
    setTimeout(function(){
      $(".black2").addClass("overlaze");
    }, 1200);
    setTimeout(function(){
      window.location = goTo;
    }, 1800);
	});
*/
	//entry: scroll fade header nav
	$(window).scroll(function(){
		var height = $(this).scrollTop();
		if( height >= 600 ){
			$('.headerBlack').css("opacity", 0);
		}
		$('.headerBlack').css({
			opacity: function(){
				var elHeight = $(this).height();
				var scrollHeight = height - 536;
				console.log( scrollHeight );
				return (elHeight - scrollHeight) / elHeight;
			}
		});
	});
	var height = $(window).scrollTop();
		if( height >= 600 ){
			$('.headerBlack').css("opacity", 0);
		}
		
/*
		if( height > 450 ){
	    $(".header").css("opacity", 1 - (height - 450) / 100);
	  } else {
	  	$(".header").css("opacity", 1);
	  };

	  if( height > 472 ){
	  	$(".home2").css("opacity", 0 + (height - 472) / 100);
	  	$(".menu2").css("opacity", 0 + (height - 472) / 100);
	  } else {
	  	$(".home2").css("opacity", 0);
	  	$(".menu2").css("opacity", 0);
	  };
  });
*/
	//log window & doc height
	console.log( $(window).height() );
	console.log( $(document).height() );
	console.log( $(window).width() );
	console.log( $(window).scrollTop() );

});

