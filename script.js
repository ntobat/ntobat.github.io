$(function(){
  //more about me
  $(".btn-left").click(function(){
    $(".sec1").toggleClass("transform-out");
    $(".sec2").toggleClass("transform-in");
    $("#nav-1").toggleClass("nav-on");
  });
  $("#nav-1").click(function(){
    $(".sec1").toggleClass("transform-out");
    $(".sec2").toggleClass("transform-in");
    $("#nav-1").toggleClass("nav-on");
  });
  $("#logo").click(function(){
    if( $("#nav-1").hasClass("nav-on") ){
      $(".sec1").toggleClass("transform-out");
      $(".sec2").toggleClass("transform-in");
      $("#nav-1").toggleClass("nav-on");
    };
  });
  //work nav
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});