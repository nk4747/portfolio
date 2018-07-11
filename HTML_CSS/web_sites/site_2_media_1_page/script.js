$(function() {

	$('.menuToggle').on('click', function(){

		$('nav').slideToggle(300, function() {

			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');

			}

		});
	});
	
});

$(function() {

	$('.abt').on('click', function(){

		$('.jert').slideToggle(900, function() {

			if($(this).css('display') === 'block') {
				

			}

		});
	});
	
});

