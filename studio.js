$(function(){


  //animate top bar
  /*setInterval(function(){
    $(".conveyor > *").clone().appendTo(".conveyor");
  }, 1000);*/
  setInterval(conveyit, 250);


	//load / show / hide content with button click
	$(".load-btn").click(function(){
		var section = $(this).data('section');
		$(this).next().css("display", "flex").load(section + "-section.html");
		$(this).replaceWith("<button class='btn btn-white hide-btn'>HIDE SECTION</button>");
	});
	$(".box").on('click', 'button.show-btn', function(){
		$(this).next().fadeIn();
		$(this).replaceWith("<button class='btn btn-white hide-btn'>HIDE SECTION</button>");
    $(this).css("margin", "0");
	});
	$(".box").on('click', 'button.hide-btn', function(){
		$(this).next().fadeOut();
		$(this).replaceWith("<button class='btn btn-white show-btn'>SHOW SECTION</button>");
	});


	// open & close menu
	$('.menu').click(function(event) {

        event.preventDefault();

        if( $(".navi").hasClass('hidden') ){
            $(".siteNav").addClass('hidden');
            setTimeout(function(){
                $(".navi").removeClass('hidden');
            },150);
        } else {
            $(".navi").addClass('hidden');
            setTimeout(function(){
                $(".siteNav").removeClass('hidden');
            },150);
        };

        // if menu is closed
        if( $("#menu").hasClass('menuClosed') ){
            $(".icons").css('z-index', '9999');
            $("body").addClass("stop-scrolling");
            $("#menu").replaceWith("<img id='menu' class='' src='assets/menuCloseBlack.svg' />");
        // if menu is open
        } else {
            $(".icons").css('z-index', '999');
            $("body").removeClass("stop-scrolling");
            $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menuBlack.svg' />");
        };
    });


  //scroll animation
  $('.jump').click(function(event) {
          
      event.preventDefault();

      $("body").removeClass("stop-scrolling");
      $(".siteNav").addClass('hidden');
      
      $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menuBlack.svg' />").fadeTo(250, 1);
      $(".navi").removeClass('hidden');
   
      var full_url = this.href,
          parts = full_url.split('#'),
          trgt = parts[1],
          target_offset = $('#' + trgt).offset(),
          target_top = target_offset.top + 1;
          
      setTimeout(function(){
          $('html, body').animate({scrollTop:target_top}, 700);
      }, 300);
      
      /* Remove active class on any li when an anchor is clicked */
      $(".navi").children().removeClass('active');
      
      $(".icons").css('z-index', '999');
  });
  $("a[data-id='top']").click(function(event){
	    event.preventDefault();

	    $("body").removeClass("stop-scrolling");
	    $(".siteNav").addClass('hidden');
	    
	    $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menuBlack.svg' />").fadeTo(250, 1);
	    $(".navi").removeClass('hidden');

	    setTimeout(function(){
	        $('html, body').animate({scrollTop:0}, 700);
	    }, 300);
	    
	    $(".icons").css('z-index', '999');
	});


  // progress bar
  setTimeout(function(){
      var winHeight = $(window).innerHeight(),
      docHeight = $(document).height(),
      max = docHeight - winHeight,
      value = $(window).scrollTop() / max,
      indicator = $("#progress");

      indicator.css('width', value * 100 + '%');
          
      $(document).on('scroll', function(){
          value = $(window).scrollTop() / max;
          indicator.css('width', value * 100 + '%');
      });
  }, 250);


  /*// hide nav on scroll
  setTimeout(function(){
  //if( $(window).width() < 800 ){
      var prevScroll = $(window).scrollTop();            
      $(document).on('scroll', function(e){
          var newScroll = $(window).scrollTop();
          if(newScroll > prevScroll){
              setTimeout(function(){
                  $(".icons").addClass('icons-up');
              }, 200);
          } else {
              $(".icons").removeClass('icons-up');
          }
          prevScroll = newScroll;
      });
      //}    
  }, 250);
	*/



});

function conveyit(){
  $(".conveyor-b").find('div').first().appendTo(".conveyor");
  /*setTimeout(function(){
    $(".conveyor").find('div').first().remove();
  }, 50);*/
}






