$(document).ready(function() {

	$('.secondScreen__intro').appear();

	$('.secondScreen__intro').on('appear', function(){
    	 $('.secondScreen__left').addClass('animated fadeInLeft');
    	 $('.secondScreen__right').addClass('animated fadeInRight');
    	 $('.secondScreen__bottom').addClass('animated fadeInUp');
    	 $('.secondScreen__intro').addClass('animated fadeInUp');
	});

	$('.thirdScreen__item_l').appear();

	$('.thirdScreen__item_l').on('appear', function(){
    	 $('.thirdScreen__item_l').addClass('animated fadeInLeft');
    	 $('.thirdScreen__item_r').addClass('animated fadeInRight');
	});

	$('.fourthScreen__intro').appear();

	$('.fourthScreen__intro').on('appear', function(){
    	 $('.fourthScreen__intro').addClass('animated fadeInUp');
	});

	$('.fifthScreen__text').appear();

	$('.fifthScreen__text').on('appear', function(){
    	 $('.fifthScreen__button').addClass('animated fadeInLeft');
    	 $('.fifthScreen__img').addClass('animated fadeInRight');
    	 $('.fifthScreen__text').addClass('animated fadeInUp');
    	 $('.fifthScreen__subTitle').addClass('animated fadeInUp');
    	 $('.fifthScreen__title').addClass('animated fadeInUp');
	});

});




