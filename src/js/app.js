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
	  draggable: false,
	  acessibility: true,
	  speed: 600,
	  cssEase: 'ease-in',
	  slidesToShow: 1,
 	 	slidesToScroll: 1
  });
  $('.multiple-item').on('click', function(event) {
  	$(this).focus();
  });
});