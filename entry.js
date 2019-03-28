$(document).ready(function(){


    //image click
    $(".image:not(a)").click(function(){
        var img = $(this);
        if( !img.hasClass("full-width") ){
            img.addClass("full-width");
            img.prev().addClass("caption-fw");
            //img.next().addClass("hidden");
        } else {
            img.removeClass("full-width");
            img.prev().removeClass("caption-fw");
            //img.next().removeClass("hidden");
        }
    });





    //scroll fade-in elements
    $(window).scroll(function(){
        $(".el").each(function(i){
            var bottomEl = $(this).position().top + ( $(this).outerHeight() / 2 ),
                bottomWin = $(window).scrollTop() + $(window).height();
            if(bottomWin > bottomEl){
                if( $(this).hasClass('el-sub') ){
                    $(this).addClass('el-in-sub');
                } else if( $(this).hasClass('el-img') ) {
                    $(this).addClass('el-in-media');
                } else {
                    $(this).addClass('el-in');
                }
            }
        });
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
            $("#menu").replaceWith("<img id='menu' class='' src='assets/menuClose.svg' />");
        // if menu is open
        } else {
            $(".icons").css('z-index', '999');
            $("body").removeClass("stop-scrolling");
            $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />");
        };
    });



    //scroll animation
    $('.jump').click(function(event) {
            
        event.preventDefault();

        $("body").removeClass("stop-scrolling");
        $(".siteNav").addClass('hidden');
        
        $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />").fadeTo(250, 1);
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

    $('.discipline, .btn-jump').click(function(event) {
        event.preventDefault();

        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top + 1;
            
        setTimeout(function(){
            $('html, body').animate({scrollTop:target_top}, 700);
        }, 250);
    });

    $("#process-top").click(function(event){
        event.preventDefault();
        setTimeout(function(){
            $('html, body').animate({scrollTop:0}, 700);
        }, 300);
    });

    $("a[data-id='top']").click(function(event){
        event.preventDefault();

        $("body").removeClass("stop-scrolling");
        $(".siteNav").addClass('hidden');
        
        $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/menu.svg' />").fadeTo(250, 1);
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



    // hide nav on scroll
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
    


    //smooth scrolling
    //init();


  
});

/*
// smooth scrolling
function init(){
    new SmoothScroll(document, 500, 20);
};

function SmoothScroll(target, speed, smooth) {
    if (target == document){
      target = (document.documentElement || document.body.parentNode || document.body)
    }
    var moving = false;
    var pos = target.scrollTop;
    target.addEventListener('mousewheel', scrolled, false);
    target.addEventListener('DOMMouseScroll', scrolled, false);

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      var delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));

      if (!moving){ update() }
    };

    $('.jump, .navTitle').click(function(event) {
      event.preventDefault();
      setTimeout(function(){
        pos = target.scrollTop;
      }, 1100);
    });

    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta){
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        }
        else{
          return -e.detail/3 // Firefox
        }
      } else {
        return e.wheelDelta/500 // IE,Safari,Chrome
      }
    };

    function update() {
      moving = true;
      var delta = (pos - target.scrollTop) / smooth;
      target.scrollTop += delta;
      if (Math.abs(delta) > 0.5){
        requestFrame(update);
      } else {
        moving = false
      }
    };

    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }();
};
*/







