$(document).ready(function(){
  $('.slider_work').slick({
  	arrows:false,
  	dots:true,
  	adaptiveHeight:true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 1700,
  	draggable:false,
  	centerMode:true,
  	variableWidth:true
  });
});