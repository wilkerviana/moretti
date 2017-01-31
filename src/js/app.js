$(document).ready(function() {
	$('.menu-hamburguer').click(function(){
		$('.head__default,.menu').addClass('active');
	});
	$('.close').click(function() {
		$('.head__default,.menu').removeClass('active');
	});	
	$('.multiple-item').slick({
  	dots: true,
	  infinite: true,
	  speed: 600,
	  cssEase: 'ease-in',
	  centerMode: true,
	  slidesToShow: 1,
 	 	slidesToScroll: 1
  });
});