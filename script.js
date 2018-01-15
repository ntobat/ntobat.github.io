//click
$(function(){
	var pos = 1;
  $(".this").click(function(){
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
  $(".that").click(function(){
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