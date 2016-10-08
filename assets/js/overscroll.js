$(window).on("scroll",function(){
  if($(window).scrollTop()>=400) {
    return $("#hat").addClass("overscroll")
  }
  else {
    return $("#hat").removeClass("overscroll")
  }
});
