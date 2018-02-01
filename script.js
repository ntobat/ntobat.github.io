/*$(function(){
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
});
*/
$(function(){ 
  //smooth scroll
  $(".subnav-nav").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    };
  });
});