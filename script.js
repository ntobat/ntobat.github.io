//more about me
$(function(){
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