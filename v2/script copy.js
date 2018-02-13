//click
$(function(){
  $(".arrow-down").click(function(){
    if( $(this).hasClass("downed") ){
      $(this).removeClass("downed").addClass("upped");
      $("html,body").animate({
        scrollTop: $("#p2").offset().top - 80
      }, 'slow');
      $(".arrow-left").css('transform', 'translateX(-50vw)');
      $(".arrow-right").css('transform', 'translateX(50vw)');
    } else if ( $(this).hasClass("upped") ){
      $(this).removeClass("upped").addClass("downed");
      $("html,body").animate({
        scrollTop: $(".header").offset().top
      }, 'slow');
      $(".arrow-left").css('transform', 'translateX(0)');
      $(".arrow-right").css('transform', 'translateX(0)');
    } else {
      $(this).addClass("upped");
      $("html,body").animate({
        scrollTop: $("#p2").offset().top - 80
      }, 'slow');
      $(".arrow-left").css('transform', 'translateX(-50vw)');
      $(".arrow-right").css('transform', 'translateX(50vw)');
    };
  });

	var pos = 1;
  $(".arrow-right").click(function(){
  	if(pos === 1){
  		$(".sec1").animate({left: '-50%'});
    	$(".sec2").animate({left: '50%'});
    	pos += 1;
  	} else if(pos === 2){
  		$(".sec2").animate({left: '-50%'});
  		$(".sec3").animate({left: '50%'});
  		pos += 1;
  	} else if(pos === 3){
  		$(".sec3").animate({left: '150%'});
  		$(".sec2").animate({left: '150%'});
  		$(".sec1").animate({left: '50%'});
  		pos = 1;
  	} else if(pos === 0){
	  	$(".sec0").animate({left: '-50%'});
    	$(".sec1").animate({left: '50%'});
    	pos += 1;
    } else if(pos === -1){
	  	$(".sec-1").animate({left: '-50%'});
    	$(".sec0").animate({left: '50%'});
    	pos += 1;
    };
  });
  $(".arrow-left").click(function(){
  	if(pos === 1){
  		$(".sec1").animate({left: '150%'});
    	$(".sec0").animate({left: '50%'});
    	pos -= 1;
  	} else if(pos === 0){
  		$(".sec0").animate({left: '150%'});
    	$(".sec-1").animate({left: '50%'});
    	pos -= 1;
  	} else if(pos === -1){
	    $(".sec-1").animate({left: '-50%'});
	    $(".sec0").animate({left: '-50%'});
	    $(".sec1").animate({left: '50%'});
	    pos = 1;
	  } else if(pos === 2){
	  	$(".sec2").animate({left: '150%'});
    	$(".sec1").animate({left: '50%'});
    	pos -= 1;
	  } else if(pos === 3){
	  	$(".sec3").animate({left: '150%'});
    	$(".sec2").animate({left: '50%'});
    	pos -= 1;
    };
  });
});